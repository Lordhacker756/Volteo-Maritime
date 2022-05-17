import MyDay from "./components/MyDay";
import Officer from "./components/Officer";
import SideMenu from "./components/SideMenu";
import Stream from "./components/Stream";
import TopBar from "./components/TopBar";

function App() {
  return (
    // Main container for all our contents
    <div className="App main_container flex">
      {/* Two sub containers, one for side menu and other for remaining content */}

      {/* Side menu container */}
      <div
        className="side_menu_container m-[8px] rounded-lg h-auto flex"
        style={{ boxShadow: "0px 0px 1px rgba(0,0,0,0.48)" }}
      >
        <SideMenu />
      </div>

      {/* Container for remaining dashboard content */}
      <div className="dashboard_container h-screen w-full">
        {/* top bar of dashboard */}
        <div
          className="top_bar_container mt-[10px] rounded-lg flex flex-row h-[80px]"
          style={{ boxShadow: "0px 0px 1px rgba(0,0,0,0.48)" }}
        >
          <TopBar
            name="Demo Vessel"
            crew="16"
            active="09"
            timezone="GMT +09:00"
          />
        </div>

        {/* Container for three main components of the dashboard */}
        <div className="subcontainer flex">

        {/* Officer and ship status box container. Send activity as props*/}
          <Officer className="grid grid-rows-4" rank="Third Officer" name="Niranjan Pawar" crewId="886556" activity={<>Submitted the Deck Log for <br/> <span className='font-[700]'>1200-1600 Watch</span> at 08:16 UTC</>} ship_code="SGSIN-NOOSL" current_status="Cargo First Lift" next_port="INVTZ1" eta="Nov 27, 1450 UTC"/>
        
        {/* Container for component containing details about ship, imporant notices and messages */}
          <Stream
            className="grid grid-rows-4"
            streamName="Ahoy Stream"
            lastUpdate="Last updated - 4 minutes ago"
            notice="Captain’s Bridge Order dated Nov 27, 2020"
            views="1"
          />

          {/* My day and todo list component */}
          <MyDay className="grid grid-rows-4" date="Tuesday, March 2" />
        </div>
      </div>
    </div>
  );
}

export default App;
