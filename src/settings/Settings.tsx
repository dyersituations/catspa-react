import { Setting } from "../redux/settings/types";
import { SettingsManager, SettingsValueType } from "./types";

const CSS_BACKGROUND = "css_background";
const CSS_COLOR = "css_color";

class Settings implements SettingsManager {
  private static instance: Settings;
  private settings: Setting[] = [];
  public isLoading = true;

  public get cssBackground() {
    return {
      key: CSS_BACKGROUND,
      value: this.getSetting(CSS_BACKGROUND, "white"),
      type: SettingsValueType.Text,
    };
  }

  public get cssColor() {
    return {
      key: CSS_COLOR,
      value: this.getSetting(CSS_COLOR, "black"),
      type: SettingsValueType.Text,
    };
  }

  private getSetting(key: string, defaultValue: string) {
    return this.settings.find((s) => s.key === key)?.value || defaultValue;
  }

  public static Instance(settings: Setting[]) {
    const instance = Settings.instance || (Settings.instance = new Settings());
    if (settings.length) {
      instance.settings = settings;
      instance.isLoading = false;
    }
    return instance;
  }

  public getSettingsCss() {
    const styles = `
      background: ${this.cssBackground.value};
      color: ${this.cssColor.value};
    `;
    return styles;
  }
}

export default Settings.Instance;
