import DashboardFooter from "../ui/DashboardFooter/Footer"
import DashboardHeader from "../ui/DashboardHeader/DashboardHeader"
import DashboardSidebar from "../ui/DashboardSidebar/Sidebar"
import { DashboardLayoutMain, DashboardLayoutStyle } from "./DashboardLayoutStyle"



const DashboardLayout = ({ children }) => {
  return (
    <DashboardLayoutStyle>
      <DashboardSidebar />
      <DashboardLayoutMain>
        <DashboardHeader />
        {/* <DashboardLayoutContent> */}
        <div className="MainContentField">
          {children}
        </div>
        {/* </DashboardLayoutContent> */}
        <DashboardFooter />
      </DashboardLayoutMain>
    </DashboardLayoutStyle>
  )
}

export default DashboardLayout