import Activity from "../components/Activity"
import Header from "../components/Header"
import ProfileCard from "../components/ProfileCard"

const Index = () => {
  return (
    <>
      <Header />
      <div className="px-4 py-4 space-y-6">
        <ProfileCard
          greeting="Hi, Good Morning!"
          name="Tabay"
          position="UI/UX Designer"
          office="Kantor Sahid"
          date="01 Juni 2021"
        />
        <Activity 
          clockInTime="09:00"
          workHours="09:00:00"
          checkOutTime=""
        />
      </div>
    </>
  )
}

export default Index
