import TopBar from '../components/TopBar'
import TopNav from '../components/TopNav'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'
import RightSidebar from '../components/RightSidebar'

export default function Home() {
  return (
    <div className="container">
      <TopBar />
      <TopNav />
      <div className="layout">
        <Sidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  )
}
