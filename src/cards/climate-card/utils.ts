import { HvacAction, HvacMode, OptionalAction, OptionalMode } from "../../ha";

export const CLIMATE_HVAC_MODE_COLORS: Record<HvacMode, string> = {
  auto: "var(--rgb-state-climate-auto)",
  cool: "var(--rgb-state-climate-cool)",
  dry: "var(--rgb-state-climate-dry)",
  fan_only: "var(--rgb-state-climate-fan-only)",
  heat: "var(--rgb-state-climate-heat)",
  heat_cool: "var(--rgb-state-climate-heat-cool)",
  off: "var(--rgb-state-climate-off)",
};

export const CLIMATE_HVAC_ACTION_COLORS: Record<HvacAction, string> = {
  cooling: "var(--rgb-state-climate-cool)",
  drying: "var(--rgb-state-climate-dry)",
  heating: "var(--rgb-state-climate-heat)",
  idle: "var(--rgb-state-climate-idle)",
  off: "var(--rgb-state-climate-off)",
};

export const CLIMATE_HVAC_MODE_ICONS: Record<HvacMode, string> = {
  auto: "mdi:thermostat-auto",
  cool: "mdi:snowflake",
  dry: "mdi:water-percent",
  fan_only: "mdi:fan",
  heat: "mdi:fire",
  heat_cool: "mdi:sun-snowflake-variant",
  off: "mdi:power",
};

export const CLIMATE_HVAC_ACTION_ICONS: Record<HvacAction, string> = {
  cooling: "mdi:snowflake",
  drying: "mdi:water-percent",
  heating: "mdi:fire",
  idle: "mdi:clock-outline",
  off: "mdi:power",
};

export function getHvacModeColor(hvacMode: HvacMode): string {
  return CLIMATE_HVAC_MODE_COLORS[hvacMode] ?? CLIMATE_HVAC_MODE_COLORS.off;
}

export function getHvacActionColor(hvacAction: HvacAction): string {
  return (
    CLIMATE_HVAC_ACTION_COLORS[hvacAction] ?? CLIMATE_HVAC_ACTION_COLORS.off
  );
}

export function getHvacModeIcon(hvacMode: HvacMode): string {
  return CLIMATE_HVAC_MODE_ICONS[hvacMode] ?? "mdi:thermostat";
}

export function getHvacActionIcon(hvacAction: HvacAction): string | undefined {
  return CLIMATE_HVAC_ACTION_ICONS[hvacAction] ?? "";
}

export const CLIMATE_OPTIONAL_MODE_COLORS: Record<OptionalMode, string> = {
  wind_free_sleep: "var(--rgb-state-climate-wind-free-sleep)",
  wind_free: "var(--rgb-state-climate-wind-free)",
  speed: "var(--rgb-state-climate-speed)",
  quiet: "var(--rgb-state-climate-quiet)",
  sleep: "var(--rgb-state-climate-sleep)",
  off: "var(--rgb-state-climate-off)",
};

export const CLIMATE_MODEL_ACTION_COLORS: Record<OptionalAction, string> = {
  wind_free_sleep: "var(--rgb-state-climate-wind-free-sleep)",
  wind_free: "var(--rgb-state-climate-wind-free)",
  speed: "var(--rgb-state-climate-speed)",
  quiet: "var(--rgb-state-climate-quiet)",
  sleep: "var(--rgb-state-climate-sleep)",
  off: "var(--rgb-state-climate-off)",
};

export const CLIMATE_OPTIONAL_MODE_ICONS: Record<OptionalMode, string> = {
  wind_free_sleep: "mdi:wind-power-outline",
  wind_free: "mdi:wind-power",
  speed: "mdi:fan",
  quiet: "mdi:volume-low",
  sleep: "mdi:power-sleep",
  off: "mdi:power",
};

export const CLIMATE_OPTIONAL_ACTION_ICONS: Record<OptionalAction, string> = {
  wind_free_sleep: "mdi:wind-power-outline",
  wind_free: "mdi:wind-power",
  speed: "mdi:fan",
  quiet: "mdi:volume-low",
  sleep: "mdi:power-sleep",
  off: "mdi:power",
};

export function getOptionalModeColor(hvacMode: OptionalMode): string {
  return CLIMATE_OPTIONAL_MODE_COLORS[hvacMode] ?? CLIMATE_OPTIONAL_MODE_COLORS.off;
}

export function getOptionalActionColor(hvacAction: OptionalAction): string {
  return (
    CLIMATE_MODEL_ACTION_COLORS[hvacAction] ?? CLIMATE_HVAC_ACTION_COLORS.off
  );
}

export function getOptionalModeIcon(hvacMode: OptionalMode): string {
  return CLIMATE_OPTIONAL_MODE_ICONS[hvacMode] ?? "mdi:thermostat";
}

export function getOptionalActionIcon(hvacAction: OptionalAction): string | undefined {
  return CLIMATE_OPTIONAL_ACTION_ICONS[hvacAction] ?? "";
}