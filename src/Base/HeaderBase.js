import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './Header_base.css';
import {IconButton} from "@material-ui/core";

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

            </div>

            <div className='header_right'>

            </div>
        </div>
    );
}

export default HeaderBase;
