import { css } from "styled-components";
import { Setting } from "./redux/settings/types";

export const createSettingsCss = (settings: Setting[] | undefined) => {
  let styles = "";
  if (settings) {
    for (let i = 0; i < settings.length; ++i) {
      const setting = settings[i];
      if (setting.key.startsWith("css_")) {
        const key = setting.key.replace("css_", "");
        styles += `${key}: ${setting.value}`;
      }
    }
  }
  return css`
    ${styles}
  `;
};
