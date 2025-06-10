import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import {
  ClimateEntity,
  compareClimateOptionalModes,
  computeRTL,
  HomeAssistant,
  OptionalMode,
  isAvailable,
} from "../../../ha";
import "../../../shared/button";
import "../../../shared/button-group";
import { getOptionalModeColor, getOptionalModeIcon } from "../utils";

export const isOptionalModesVisible = (entity: ClimateEntity, modes?: OptionalMode[]) =>
  (entity.attributes.optional_modes || []).some((mode) =>
    (modes ?? []).includes(mode)
  );

@customElement("mushroom-climate-optional-modes-control")
export class ClimateOptionalModesControl extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @property({ attribute: false }) public entity!: ClimateEntity;

  @property({ attribute: false }) public modes!: OptionalMode[];

  @property() public fill: boolean = false;

  private callService(e: CustomEvent) {
    e.stopPropagation();
    const mode = (e.target! as any).mode as OptionalMode;
    this.hass.callService("climate", "set_optional_mode", {
      entity_id: this.entity!.entity_id,
      hvac_mode: mode,
    });
  }

  protected render(): TemplateResult {
    const rtl = computeRTL(this.hass);

    const modes = this.entity.attributes.hvac_modes
      .filter((mode) => (this.modes ?? []).includes(mode))
      .sort(compareClimateOptionalModes);

    return html`
      <mushroom-button-group .fill=${this.fill} ?rtl=${rtl}>
        ${modes.map((mode) => this.renderModeButton(mode))}
      </mushroom-button-group>
    `;
  }

  private renderModeButton(mode: OptionalMode) {
    const iconStyle = {};
    const color = mode === "off" ? "var(--rgb-grey)" : getOptionalModeColor(mode);
    if (mode === this.entity.state) {
      iconStyle["--icon-color"] = `rgb(${color})`;
      iconStyle["--bg-color"] = `rgba(${color}, 0.2)`;
    }

    return html`
      <mushroom-button
        style=${styleMap(iconStyle)}
        .mode=${mode}
        .disabled=${!isAvailable(this.entity)}
        @click=${this.callService}
      >
        <ha-icon .icon=${getOptionalModeIcon(mode)}></ha-icon>
      </mushroom-button>
    `;
  }
}
