import { createContext, useState } from "react";
import { Toast } from "../../components/Toast";
import { ToastContextProps } from "./types";
import { ToastPosition, ToastProps, ToastType } from "../../components/Toast/types";

export const ToastContext = createContext<ToastContextProps>({
  toastMessage: () => null,
});

export const ToastProvider: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [toastType, setToastType] = useState<ToastType>("success");
  const [message, setMessage] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);
  const [positionDefault, setPositionDefault] =
    useState<ToastPosition>("top-right");

  const ToastMessage = ({ type, message, position }: ToastProps) => {
    setToastType(type);
    setMessage(message);
    setShowToast(true);
    setPositionDefault(position)   
    };

  return (
    <ToastContext.Provider value={{ toastMessage: ToastMessage }}>
      <Toast
        message={message}
        type={toastType}
        position={positionDefault}
        show={showToast}
        handleDismissToast={() => setShowToast(false)}
      />
      {children}
    </ToastContext.Provider>
  );
};
