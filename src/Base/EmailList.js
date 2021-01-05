import React from "react";
import './EmailList.css';
import {IconButton} from "@material-ui/core";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Checkbox from '@material-ui/core/Checkbox';
import {ChevronLeft, ChevronRight, KeyboardHide, LocalOffer, People, Settings} from "@material-ui/icons";
import InboxIcon from "@material-ui/icons/Inbox";
import Section from "./Section";
import EmailRow from "./EmailRow";


function EmailList() {
  return (
    <div className='emailList'>
      <div className='emailList_settings'>
        <div className='emailList_SettingsLeft'>

          <Checkbox/>

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
        <div className='emailList_settingsRight'>

          <IconButton>
            <ChevronLeft/>
          </IconButton>

          <IconButton>
            <ChevronRight/>
          </IconButton>

          <IconButton>
            <KeyboardHide/>
          </IconButton>

          <IconButton>
            <Settings/>
          </IconButton>

        </div>
      </div>
      <div className='emailList_sections'>
        <Section Icon={InboxIcon} title='Primary' color='red' selected/>
        <Section Icon={People} title='Social' color='blue' />
        <Section Icon={LocalOffer} title='Promotions' color='green' />
      </div>

      <div className='emailList_list'>
        <EmailRow
        title='Imonoho'
        subject='Hey Dude)))'
        description='This is a test emailThis is a test emailThis is a test email
        This is a test emailThis is a test email'
        time='10pm'
        />
      </div>

    </div>
  )
};


export default EmailList;

