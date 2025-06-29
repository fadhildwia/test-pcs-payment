import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { DollarSign, Heart, Clock } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: 'Reimbursement',
    icon: DollarSign,
    iconBg: 'bg-red-500',
    title: 'Reimbursement',
    message: 'Your submission "Lorem ipsum dolor sit amet amet amet" has been sent with a total cost of 500,000 rupiah. Please wait the approval from your BRMO application. Thank you',
    time: '2022-10-05',
    status: 'sent',
    isRead: false
  },
  {
    id: 2,
    type: 'Reimbursement',
    icon: DollarSign,
    iconBg: 'bg-red-500',
    title: 'Reimbursement',
    message: 'Your submission "description" has been sent for check and review. Details.',
    time: '2022-10-05',
    status: 'sent',
    isRead: true
  },
  {
    id: 3,
    type: 'Reimbursement',
    icon: DollarSign,
    iconBg: 'bg-red-500',
    title: 'Reimbursement',
    message: 'Your submission will be processed according to the reimbursement schedule. Please wait',
    time: '2022-10-05',
    status: 'processed',
    isRead: false
  },
  {
    id: 4,
    type: 'Sickness',
    icon: Heart,
    iconBg: 'bg-pink-500',
    title: 'Sickness',
    message: 'Your submission has been approved by the Superior.',
    time: '2022-10-05',
    status: 'approved',
    isRead: true
  },
  {
    id: 5,
    type: 'Sickness',
    icon: Heart,
    iconBg: 'bg-pink-500',
    title: 'Sickness',
    message: 'Your submission has been rejected. Please confirm with your Superior.',
    time: '2022-10-05',
    status: 'rejected',
    isRead: false
  },
  {
    id: 6,
    type: 'Sickness',
    icon: Heart,
    iconBg: 'bg-pink-500',
    title: 'Sickness',
    message: 'Your submission is being reviewed to the Superior for the approval process.',
    time: '2022-10-05',
    status: 'reviewed',
    isRead: true
  },
  {
    id: 7,
    type: 'Overtime',
    icon: Clock,
    iconBg: 'bg-red-900',
    title: 'Overtime',
    message: 'Your submission has been approved by the Superior.',
    time: '2022-10-05',
    status: 'approved',
    isRead: false
  },
  {
    id: 8,
    type: 'Overtime',
    icon: Clock,
    iconBg: 'bg-red-900',
    title: 'Overtime',
    message: 'Your submission has been rejected. Please confirm with your Superior.',
    time: '2022-10-05',
    status: 'rejected',
    isRead: true
  },
  {
    id: 9,
    type: 'Overtime',
    icon: Clock,
    iconBg: 'bg-red-900',
    title: 'Overtime',
    message: 'Your submission is being reviewed to the Superior for the approval process.',
    time: '2022-10-05',
    status: 'reviewed',
    isRead: false
  }
];

const Notifications = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header subTitle="Notification" showBackButton onBack={() => navigate(-1)} />
      <div className="space-y-0">
        {notifications.map((notification) => {
          const IconComponent = notification.icon;
          return (
            <div 
              key={notification.id} 
              className={`px-4 py-4 border-b border-gray-100 ${
                !notification.isRead ? 'bg-blue-50' : 'bg-white'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`w-10 h-10 ${notification.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-800">{notification.title}</h3>
                    <span className="text-xs text-gray-400">{notification.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    {notification.message.split(' ').map((word, index) => {
                      if (word.includes(notification.status)) {
                      return (
                        <span key={index} className={`font-semibold ${word.includes(notification.status) ? 'font-bold' : ''}`}>
                        {word}{' '}
                        </span>
                      );
                      }
                      return word + ' ';
                    })}
                  </p>
                </div>
                {!notification.isRead && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Notifications
