import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./pages/Index"
import Notifications from "./pages/Notifications"

function App() {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
