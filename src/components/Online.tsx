import React from "react"

interface Props {
  items: { name: string; avatar: string }[]
}

const Online: React.FC<Props> = ({ items }) => {
  return (
    <div className="px-4">
      <h3 className="font-semibold text-gray-800 mb-4">Online</h3>
      <div className="flex flex-wrap -space-x-4 bg-white rounded-xl p-4 shadow-md">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full aspect-auto object-cover border-2 border-white"
              />
            </div>
            <p className="text-xs text-gray-600 mt-1">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Online
