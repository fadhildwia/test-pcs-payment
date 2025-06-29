import { Home, Calendar, LogOut, FileText, Settings } from 'lucide-react'

const BottomNavigator = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200">
      <div className="flex items-center justify-around py-3">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <Home className="w-4 h-4 text-white" />
          </div>
          <p className="text-xs text-red-500 mt-1">Home</p>
        </div>
        <div className="flex flex-col items-center">
          <Calendar className="w-6 h-6 text-gray-400" />
          <p className="text-xs text-gray-400 mt-1">Attendance</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center -mt-6 border-4 border-white shadow-lg">
            <LogOut className="w-6 h-6 text-white" />
          </div>
          <p className="text-xs text-red-500 mt-1">Check Out</p>
        </div>
        <div className="flex flex-col items-center">
          <FileText className="w-6 h-6 text-gray-400" />
          <p className="text-xs text-gray-400 mt-1">Form</p>
        </div>
        <div className="text-center cursor-pointer">
          <Settings className="w-6 h-6 text-gray-400 mx-auto" />
          <p className="text-xs text-gray-400 mt-1">Settings</p>
        </div>
      </div>
    </div>
  )
}

export default BottomNavigator