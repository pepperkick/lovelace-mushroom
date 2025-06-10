import { array, assign, boolean, object, optional, string } from "superstruct";
import { HvacMode, OptionalMode, LovelaceCardConfig } from "../../ha";
import {
  ActionsSharedConfig,
  actionsSharedConfigStruct,
} from "../../shared/config/actions-config";
import {
  AppearanceSharedConfig,
  appearanceSharedConfigStruct,
} from "../../shared/config/appearance-config";
import {
  EntitySharedConfig,
  entitySharedConfigStruct,
} from "../../shared/config/entity-config";
import { lovelaceCardConfigStruct } from "../../shared/config/lovelace-card-config";

export const HVAC_MODES: HvacMode[] = [
  "auto",
  "heat_cool",
  "heat",
  "cool",
  "dry",
  "fan_only",
  "off",
];

export const OPTIONAL_MODES: OptionalMode[] = [
  "speed",
  "sleep",
  "quiet",
  "wind_free_sleep",
  "wind_free",
  "off",
];

export type ClimateCardConfig = LovelaceCardConfig &
  EntitySharedConfig &
  AppearanceSharedConfig &
  ActionsSharedConfig & {
    show_temperature_control?: false;
    hvac_modes?: HvacMode[];
    optional_modes?: OptionalMode[];
    collapsible_controls?: boolean;
  };

export const climateCardConfigStruct = assign(
  lovelaceCardConfigStruct,
  assign(
    entitySharedConfigStruct,
    appearanceSharedConfigStruct,
    actionsSharedConfigStruct
  ),
  object({
    show_temperature_control: optional(boolean()),
    hvac_modes: optional(array(string())),
    optional_modes: optional(array(string())),
    collapsible_controls: optional(boolean()),
  })
);
