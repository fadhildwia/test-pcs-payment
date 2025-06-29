import { BellDot, ArrowLeft } from "lucide-react"
import type React from "react"

interface HeaderProps {
  title?: string
  showNotification?: boolean
  onClickNotification?: () => void
  showBackButton?: boolean
  onBack?: () => void
  subTitle?: string
}

const Header: React.FC<HeaderProps> = ({
  title,
  showNotification = false,
  onClickNotification,
  showBackButton = false,
  onBack,
  subTitle,
}) => {
  return (
    <div>
      {title && (
        <div className="bg-white shadow-sm px-4 py-4 flex items-center justify-between">
          {title && (
            <h1 className="text-xl font-bold text-red-500">{title}</h1>
          )}
          {showNotification && onClickNotification && (
            <BellDot
              onClick={onClickNotification}
              className="w-6 h-6 text-gray-600 cursor-pointer"
            />
          )}
        </div>
      )}
      {showBackButton && (
        <div className="bg-white shadow-sm px-4 py-4 flex items-center">
          <button onClick={onBack} className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-lg font-semibold text-gray-800">
            {subTitle || "Notification"}
          </h1>
        </div>
      )}
    </div>
  )
}

export default Header
