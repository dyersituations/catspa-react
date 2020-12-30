export interface SettingsManager {
  cssBackground: SettingsValue;
  cssColor: SettingsValue;
  getSettingsCss: () => string;
}

export interface SettingsValue {
  key: string;
  value: string;
  type: SettingsValueType;
}

export enum SettingsValueType {
  Text,
}
