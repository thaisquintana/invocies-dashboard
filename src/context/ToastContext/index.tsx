import { createContext, useState } from "react";
import { Toast } from "../../components/Toast";
import { ToastContextProps, showToastProps } from "./types";
import { ToastType } from "../../components/Toast/types";

export const ToastContext = createContext<ToastContextProps>({
    toastMessage: () => null
  })


export const ToastProvider: React.FC<{ children: React.ReactElement }> = ({
    children,
  }) => {

    const [toastType, setToastType] = useState<ToastType>('success')
    const [message, setMessage] = useState<string>('')
    const [positionDefault, setPositionDefault] = useState('top-left')

    const ToastMessage = ({ type, message,  }: showToastProps) => {
       type ? setToastType(type) :  setToastType("success")
       setMessage(message)
 
      }

    return (
        <ToastContext.Provider value={{toastMessage: ToastMessage}}>
            <Toast message={message} type={toastType} id={0} position="top-left" />
            {children}
        </ToastContext.Provider>
    )
}
