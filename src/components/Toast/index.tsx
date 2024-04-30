import { X } from "lucide-react";
import React from "react";
import { ToastProps } from "./types";
import { toastTypes } from "./contants";

export const Toast: React.FC<ToastProps> = ({ message, type, position }) => {
  const handleDismissToast = () => {
    console.log("clique");
  };

  const { icon, iconClass, bgColor } = toastTypes[type];

  return (
    <div
      className={
        "flex items-center rounded-xl p-8 fixed w-1/4 justify-between overflow-hidden " +
        type + " "+
        position + " " + bgColor
      }
    >
      <span className={iconClass}>{icon}</span>
      <p className="text-black text-sm font-medium">{message}</p>
      <button onClick={() => handleDismissToast}>
        <X size={18} color="#053b4b" />
      </button>
    </div>
  );
};
