import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './Header_base.css';
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function HeaderBase() {
    return (
        <div className="header">
            <div className='header_left'>
                <IconButton className="icon_btn">
                    <MenuIcon/>
                </IconButton>
                <img src='https://images.all-free-download.com/images/graphicthumb/abstract_logo_6822720.jpg'/>
            </div>

            <div className='header_middle'>
                <SearchIcon />
                <input placeholder='Search mail' type='text'/>
                <ArrowDropDownIcon className='header_input_drop'/>
            </div>

            <div className='header_right'>

                <IconButton >
                    <AppsIcon />
                </IconButton>

                <IconButton >
                    <NotificationsIcon />
                </IconButton>

                <Avatar />

            </div>
        </div>
    );
}

export default HeaderBase;
