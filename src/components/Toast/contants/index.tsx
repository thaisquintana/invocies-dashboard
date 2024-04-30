import { CircleCheck, Info, TriangleAlert, X } from "lucide-react";

export const toastTypes = {
    success: {
      icon: <CircleCheck color="#22c55e" />,
      iconClass: "success-icon",
      bgColor: "bg-green-200"
    },
    warning: {
      icon: <TriangleAlert color="#f97316" />,
      iconClass: "warning-icon",
      bgColor: "bg-yellow-200"
    },
    info: {
      icon: <Info color="#3b82f6" />,
      iconClass: "info-icon",
      bgColor: "bg-blue-200"
    },
    error: {
      icon: <X color="#ef4444" />,
      iconClass: "error-icon",
      bgColor: "bg-red-200"
    },
  };