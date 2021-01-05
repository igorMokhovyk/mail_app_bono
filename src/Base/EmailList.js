import React from "react";
import './EmailList.css';
import { IconButton } from "@material-ui/core";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Checkbox from '@material-ui/core/Checkbox';


function EmailList() {
  return (
    <div className='emailList'>
      <div className='emailList_settings'>
        <div className='emailList_SettingsLeft'>

          <Checkbox />

          <IconButton>
            <ArrowDropDownIcon/>
          </IconButton>

          <IconButton>
            <RedoIcon/>
          </IconButton>

          <IconButton>
            <MoreVertIcon/>
          </IconButton>

        </div>
      </div>
    </div>
  )
};


export default EmailList;

