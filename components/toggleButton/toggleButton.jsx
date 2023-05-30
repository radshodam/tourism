import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../store/slices/toggleSlice";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

const ToggleButton = () => {
  const isToggled = useSelector((state) => state.toggle.isToggled);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle());
  };

  return (
    <div className="px-3">
      <button onClick={handleToggle}>
        {isToggled ? (
          <XMarkIcon
            className="h-8 w-8 text-white"
            aria-hidden="true"
          />
        ) : (
          <Bars3BottomLeftIcon
            className="h-8 w-8 text-white"
            aria-hidden="true"
          />
        )}
      </button>
    </div>
  );
};

export default ToggleButton;
