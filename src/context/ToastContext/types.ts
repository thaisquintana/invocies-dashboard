import { ToastProps } from "../../components/Toast/types";


export type ToastContextProps = {
    toastMessage: (showToastProps: ToastProps) => void
};