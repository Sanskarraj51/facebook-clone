import { Chat, EmojiFlags, ExpandMoreOutlined, People, Storefront, VideoLibrary } from '@material-ui/icons';
import  LocalHospitalIcon  from '@material-ui/icons/LocalHospital';
import React from 'react';
import SidebarRow from './SidebarRow';
import"./Sidebar.css";
import { useStateValue } from '../StateProvider';


function Sidebar() {
  const [{user} , dispatch] = useStateValue();

    return (
        <div className="sidebar">
          <SidebarRow  src={user.photoURL}  title={user.displayName} />
          <SidebarRow  Icon={LocalHospitalIcon} title="COVID-19 Information Center" /> 
          <SidebarRow  Icon={EmojiFlags} title="pages" />
          <SidebarRow Icon={People} title="Friends" />
          <SidebarRow Icon={Chat} title="Messenger" />
          <SidebarRow Icon={Storefront} title="Marketplace" />
          <SidebarRow  Icon={VideoLibrary} title="Videos" />
          <SidebarRow   Icon ={ExpandMoreOutlined} title="Marketplace" />
        </div>
    )
}

export default Sidebar;
