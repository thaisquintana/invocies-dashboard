import { ToastPosition, ToastType } from "../../components/Toast/types";

export type showToastProps = {
    message: string
    type?: ToastType
    position?: ToastPosition
  }

export type ToastContextProps = {
    toastMessage: (showToastProps: showToastProps) => void
};
