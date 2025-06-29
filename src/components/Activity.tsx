import { Clock, Clock6 } from "lucide-react"
import type React from "react"

interface Props {
  clockInTime?: string
  workHours?: string
  checkOutTime?: string
}

const Activity: React.FC<Props> = ({ clockInTime, workHours, checkOutTime }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h3 className="font-semibold text-gray-800 mb-4">Today's activity</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="w-12 h-12 flex items-center justify-center mx-auto mb-2">
            <Clock className="w-6 h-6 text-red-500" />
          </div>
          <p className="text-lg font-semibold text-gray-800">{clockInTime || '--:--'}</p>
          <p className="text-xs">Clock in</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 flex items-center justify-center mx-auto mb-2">
            <Clock className="w-6 h-6 text-red-500" />
          </div>
          <p className="text-lg font-semibold text-red-500">{workHours || '--:--'}</p>
          <p className="text-xs">Work Hours</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 flex items-center justify-center mx-auto mb-2">
            <Clock6 className="w-6 h-6 text-red-500" />
          </div>
          <p className="text-lg font-semibold text-gray-400">{checkOutTime || '--:--'}</p>
          <p className="text-xs">Check Out</p>
        </div>
      </div>
    </div>
  )
}

export default Activity
