export type ToastType = "success" | "warning" | "error";

export type ToastPosition =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center";

export type ToastProps = {
  message: string;
  type: ToastType;
  position: ToastPosition;
  show?: boolean;
  handleDismissToast?: () => void;
};
