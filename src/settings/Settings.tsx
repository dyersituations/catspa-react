import { Setting } from "../redux/settings/types";
import { SettingsValues } from "./types";

const CSS_BACKGROUND = "css_background";
const CSS_COLOR = "css_color";

class Settings implements SettingsValues {
  private static instance: Settings;
  public cssBackground: string = "white";
  public cssColor: string = "black";

  public static Instance(settings: Setting[]) {
    const instance = Settings.instance || (Settings.instance = new Settings());
    instance.setValues(settings);
    return instance;
  }

  private setValues(settings: Setting[]) {
    this.cssBackground =
      settings.find((s) => s.key === CSS_BACKGROUND)?.value ||
      this.cssBackground;
    this.cssColor =
      settings.find((s) => s.key === CSS_COLOR)?.value || this.cssColor;
  }

  public getSettingsCss() {
    const styles = `
      background: ${this.cssBackground};
      color: ${this.cssColor};
    `;
    return styles;
  }
}

export default Settings.Instance;
