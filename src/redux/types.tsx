import { GlobalState } from "./global/types";
import { SettingsState } from "./settings/types";

export interface RootState {
  global: GlobalState;
  settings: SettingsState;
}
