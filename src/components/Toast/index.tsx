import React, { useState, useEffect, useMemo, useRef } from "react";
import { ToastProps } from "./types";
import { toastPosition, toastTypes } from "./contants";
import { X } from "lucide-react";

export const Toast: React.FC<ToastProps> = ({
  message,
  type,
  position,
  show,
  handleDismissToast,
}) => {
  const { icon, bgColor } = toastTypes[type];

  const getKeysBasedOnVariant = (position: string) => {
    if (!position) {
      return "top-right";
    }

    //@ts-ignore
    return toastPosition[position];
  };

  const variantToastPosition = useMemo(
    () => getKeysBasedOnVariant(position),
    [position]
  );

  return (
    show && (
      <div
        className={
          "flex items-center rounded-xl p-8 fixed w-1/5 justify-between overflow-hidden " +
          type +
          " " +
          position +
          " " +
          bgColor +
          " " +
          variantToastPosition
        }
      >
        <span>{icon}</span>
        <p className="text-black text-sm font-medium">{message}</p>
        <button onClick={handleDismissToast}>
          <X size={18} color="#053b4b" />
        </button>
      </div>
    )
  );
};
