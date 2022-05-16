import React from 'react'
import home from '../assets/home.png'
import layout from '../assets/layout.png'
import logbook from '../assets/logbook.png'
import heartbeat from '../assets/heartbeat.png'
import piechart from '../assets/pie-chart.png'
import time from '../assets/time-and-date.png'
import settings from '../assets/settings.png'
import app from '../assets/Vector.png'
import MenuItem from './MenuItem'
import '../index.css'

const SideMenu = () => {
  return (
      <div className='flex flex-col justify-evenly items-center'>
    {/*Container for each menu item   */}
    <MenuItem className="menuActive" status="active" icon={home} title="Home"/>
    <MenuItem icon={layout} title="Workspace"/>
    <MenuItem icon={logbook} title="MARPOL"/>
    <MenuItem icon={heartbeat} title="OH&S"/>
    <MenuItem icon={piechart} title="Insights"/>
    <MenuItem icon={time} title="History"/>
    <MenuItem icon={app} title="Apps"/>
    <MenuItem icon={settings} title="Settings"/>
    </div>
  )
}

export default SideMenu