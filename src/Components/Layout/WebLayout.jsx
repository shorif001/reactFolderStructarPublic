import DashboardHeader from "../ui/DashboardHeader/DashboardHeader"


const WebLayout = ({ children }) => {
  return (
    <>
      <DashboardHeader />
      {children}
    </>
  )
}

export default WebLayout