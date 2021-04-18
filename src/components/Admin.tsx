import { useDispatch, useSelector } from "react-redux";
import { saveSettings } from "../redux/settings/actions";
import { Setting } from "../redux/settings/types";
import { RootState } from "../redux/types";
import Settings from "../settings/Settings";
import { SettingsManager } from "../settings/types";
import Textbox from "./Textbox";

const Admin = () => {
  const dispatch = useDispatch();
  const settingsManager: SettingsManager = Settings(
    useSelector((state: RootState) => state.settings.data)
  );
  const settings: Setting[] = [];
  const onChange = (key: string, value: string) => {
    const setting = settings.find((s) => s.key === key);
    if (setting) {
      setting.value = value;
    } else {
      settings.push({
        key,
        value,
      });
    }
  };
  const onSave = () => {
    dispatch(saveSettings(settings));
  };

  return (
    <>
      <div>Admin</div>
      <form id="adminForm">
        <Textbox
          valueKey={settingsManager.cssBackground.key}
          value={settingsManager.cssBackground.value}
          onChange={onChange}
        />
        <button onClick={onSave}>Save</button>
      </form>
    </>
  );
};

export default Admin;
