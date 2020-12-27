import React from "react";
import { useDispatch } from "react-redux";
import { saveSettings } from "../redux/settings/actions";

const Admin = () => {
  const dispatch = useDispatch();
  const onSave = () => {
    dispatch(
      saveSettings([
        {
          key: "css_background",
          value: "blue",
        },
        {
          key: "css_color",
          value: "white",
        },
      ])
    );
  };

  return (
    <>
      <div>Admin</div>
      <button onClick={onSave}>Save</button>
    </>
  );
};

export default Admin;
