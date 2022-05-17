import MyDay from "./components/MyDay";
import Officer from "./components/Officer";
import SideMenu from "./components/SideMenu";
import Stream from "./components/Stream";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App main_container flex">
     {/* Two sub containers, one for side menu and other for remaining material */}
     <div className="side_menu_container m-[8px] rounded-lg h-auto flex" style={{boxShadow:"0px 0px 1px rgba(0,0,0,0.48)"}}>
      <SideMenu/>
     </div>
     <div className="dashboard_container h-screen w-full">
     <div className="top_bar_container mt-[10px] rounded-lg flex flex-row h-[80px]" style={{boxShadow:"0px 0px 1px rgba(0,0,0,0.48)"}}>
        <TopBar name="Demo Vessel" crew="16" active="09" timezone="GMT +09:00"/>
     </div>
        <div className="subcontainer flex">
          {/* Contains the three components of the dashboard */}
          <Officer className="grid grid-rows-4"/>

          {/* Sending the important data as props */}
          <Stream className="grid grid-rows-4" streamName="Ahoy Stream" lastUpdate="Last updated - 4 minutes ago" notice="Captain’s Bridge Order dated Nov 27, 2020" views="1"/>
          <MyDay className="grid grid-rows-4" date="Tuesday, March 2"/>
        </div>
     </div>
    </div>
  );
}

export default App;
