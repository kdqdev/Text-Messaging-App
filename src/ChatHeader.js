import React from 'react'
import "./ChatHeader.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import { Help } from '@material-ui/icons';


function ChatHeader({channelName}) {
  return (
    <div className='chatHeader'>
        <div className="chatHeader__left">
            <h3>
                <span className="chatHeader__hash">#</span>{channelName}
                
            </h3>
        </div>
        <div className="chatHeader__right">
            <NotificationsIcon />
            <EditLocationIcon />
            <PeopleAltIcon />

            <div className="chatHeader__search">
                <input placeholder="Search" />
                <SearchRoundedIcon />
            </div>

            <SendRoundedIcon />
            <HelpRoundedIcon />
        </div>
    </div>
  )
}

export default ChatHeader