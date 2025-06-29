import { useNavigate } from "react-router-dom"
import Activity from "../components/Activity"
import BottomNavigator from "../components/BottomNavigator"
import Header from "../components/Header"
import NewsCarousel from "../components/NewsCarousel"
import Online from "../components/Online"
import ProfileCard from "../components/ProfileCard"

const newsItems = [
  {
    id: 1,
    author: 'Ana Riswati',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    day: 'Senin',
    date: '30 Mei 2022',
    content: [
      'Kalimat 1 - Lorem ipsum dolor sit amet consectetur adipiscing elit',
      'Kalimat 2 - Sed do eiusmod tempor incididunt ut labore et dolore',
      'Kalimat 3 - Ut enim ad minim veniam quis nostrud exercitation',
      'Kalimat 4 - Duis aute irure dolor in reprehenderit in voluptate'
    ]
  },
  {
    id: 2,
    author: 'Budi Santoso',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    day: 'Selasa',
    date: '31 Mei 2022',
    content: [
      'Kalimat 1 - Lorem ipsum dolor sit amet consectetur adipiscing elit',
      'Kalimat 2 - Sed do eiusmod tempor incididunt ut labore et dolore',
      'Kalimat 3 - Ut enim ad minim veniam quis nostrud exercitation',
      'Kalimat 4 - Duis aute irure dolor in reprehenderit in voluptate'
    ]
  },
  {
    id: 3,
    author: 'Sari Dewi',
    avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150',
    day: 'Rabu',
    date: '01 Juni 2022',
    content: [
      'Kalimat 1 - Lorem ipsum dolor sit amet consectetur adipiscing elit',
      'Kalimat 2 - Sed do eiusmod tempor incididunt ut labore et dolore',
      'Kalimat 3 - Ut enim ad minim veniam quis nostrud exercitation',
      'Kalimat 4 - Duis aute irure dolor in reprehenderit in voluptate'
    ]
  },
  {
    id: 4,
    author: 'Joko Widodo',
    avatar: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=150',
    day: 'Kamis',
    date: '02 Juni 2022',
    content: [
      'Kalimat 1 - Lorem ipsum dolor sit amet consectetur adipiscing elit',
      'Kalimat 2 - Sed do eiusmod tempor incididunt ut labore et dolore',
      'Kalimat 3 - Ut enim ad minim veniam quis nostrud exercitation',
      'Kalimat 4 - Duis aute irure dolor in reprehenderit in voluptate'
    ]
  },
  {
    id: 5,
    author: 'Maya Sari',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
    day: 'Jumat',
    date: '03 Juni 2022',
    content: [
      'Kalimat 1 - Lorem ipsum dolor sit amet consectetur adipiscing elit',
      'Kalimat 2 - Sed do eiusmod tempor incididunt ut labore et dolore',
      'Kalimat 3 - Ut enim ad minim veniam quis nostrud exercitation',
      'Kalimat 4 - Duis aute irure dolor in reprehenderit in voluptate'
    ]
  }
];

const peopleOnline = [
  { name: 'Jaka', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Zaeun', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Sari', avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Aku', avatar: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Brian', avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Arya', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Raya', avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Nafisa', avatar: 'https://images.pexels.com/photos/3781529/pexels-photo-3781529.jpeg?auto=compress&cs=tinysrgb&w=150' },
];
const Index = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header onClickNotification={() => { navigate('/navigation'); }} />
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
      <NewsCarousel items={newsItems} />
      <Online items={peopleOnline} />
      <div className="h-20"></div>
      </div>
      <BottomNavigator />
    </>
  )
}

export default Index
