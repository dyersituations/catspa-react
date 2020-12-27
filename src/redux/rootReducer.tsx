import { combineReducers } from "redux";
import globalReducer from "./global/globalReducer";
import settingsReducer from "./settings/settingsReducer";

const rootReducer = combineReducers({
  global: globalReducer,
  settings: settingsReducer,
});

export default rootReducer;
