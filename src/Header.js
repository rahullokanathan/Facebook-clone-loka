import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import AirplayIcon from '@material-ui/icons/Airplay';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from "@material-ui/icons/Add";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useStateValue } from './StateProvider';
 


function Header() {
    const[{user}, dispatch]= useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" />
              
                <div className="header__input">
                <SearchIcon/>
                <input placeholder="Search Facebook" type= "text" />
                </div>   
            </div>
           
         
         <div className="header__center">
             <div className="header__option 
             header__option--active">
                 <HomeIcon fontSize="large"/>
             </div>
             <div className="header__option">
                 <FlagIcon fontSize="large"/>
             </div>
             <div className="header__option"> 
                 <AirplayIcon fontSize="large"/>
             </div>
             <div className="header__option">
                 <OndemandVideoIcon fontSize="large"/>
             </div>
            
             <div className="header__option">
                 <RecentActorsIcon fontSize="large"/>
                 
             </div>
             
        </div>


            <div className="header__right">
              <div className="header__info">
                  <Avatar src={user.photoURL}/>
                  <h4>{user.displayName}</h4>
          </div>  
            </div>
            <AddIcon/>
            <NotificationsNoneIcon/>
            <ForumIcon/>
            <ArrowDropDownIcon/>

            

            
        </div>
    );
}

export default Header;
