import type React from "react"

interface Props {
  greeting: string
  name: string
  position: string
  office: string
  date: string
}

const ProfileCard: React.FC<Props> = ({ greeting, name, position, office, date }) => {
  return (
    <>
      <div>
        <h2 className="text-lg font-medium text-gray-800">{greeting}</h2>
      </div>

      <div className="bg-gradient-to-r from-red-700 to-pink-700 rounded-2xl p-4 text-white">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-xs italic">{position}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs">Member since</p>
            <p className="text-base font-semibold">{date}</p>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs">Location</p>
            <p className="text-base font-semibold">{office}</p>
          </div>
          <div>
            <span className="text-xs italic">ICD</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
