import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from "./StateProvider";
function Sidebar() {

    const[{user}, dispatch]=useStateValue();
    return <div className="sidebar">
        <SidebarRow
        src={user.photoURL}
        />
    <SidebarRow
    Icon={LocalHospitalIcon}
    title= "COVID-19 Information Center"/>
   <SidebarRow Icon={EmojiFlagsIcon} title="Friends"/>
   <SidebarRow Icon={ChatIcon} title="Messenger"/>
   <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
   <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
   <SidebarRow Icon={ExpandMoreIcon} title="See More"/>
</div>


}

export default Sidebar;

