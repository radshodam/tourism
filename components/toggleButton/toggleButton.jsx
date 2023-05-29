import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../store/slices/toggleSlice";

const ToggleButton = () => {
  const isToggled = useSelector((state) => state.toggle.isToggled);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle());
  };

  return (
    <div className="flex justify-end">
      <button onClick={handleToggle}>
        {isToggled ? "Toggle Off" : "Toggle On"}
      </button>
    </div>
  );
};

export default ToggleButton;
