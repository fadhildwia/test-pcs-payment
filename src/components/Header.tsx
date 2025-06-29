import { BellDot } from "lucide-react"
import type React from "react"

interface Props {
  onClickNotification: () => void
}

const Header: React.FC<Props> = ({ onClickNotification }) => {
  return (
    <div className="bg-white shadow-sm px-4 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-red-500">KerjaYuk!</h1>
      <BellDot onClick={onClickNotification} className="w-6 h-6 text-gray-600" />
    </div>
  )
}

export default Header
