import { CircleCheck, CircleX, Info, TriangleAlert } from 'lucide-react'

export const toastPosition = {
  'top-left': 'top-4 left-4',
  'top-right': 'top-4 right-4',
  'top-center': 'top-4 left-2/4 translate-x-[-50%]',
  'bottom-left': 'bottom-14 left-4',
  'bottom-right': 'bottom-14 right-4',
  'bottom-center': 'top-4 left-2/4 translate-x-[-50%]'
}

export const toastTypes = {
  success: {
    icon: <CircleCheck color="#22c55e" />,
    bgColor: 'bg-green-200'
  },
  warning: {
    icon: <TriangleAlert color="#f97316" />,
    bgColor: 'bg-yellow-200'
  },
  info: {
    icon: <Info color="#3b82f6" />,
    bgColor: 'bg-blue-200'
  },
  error: {
    icon: <CircleX color="#ef4444" />,
    bgColor: 'bg-red-200'
  }
}
