import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Notifications = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header subTitle="Notification" showBackButton onBack={() => navigate(-1)} />
    </>
  )
}

export default Notifications
