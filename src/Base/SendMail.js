import React from "react";
import './SendMail.css'
import {Close} from "@material-ui/icons";
import {Button} from "@material-ui/core";


function SendMail(props) {


  return (
    <div className='sendMail'>
      <div className='sendMail_header'>
        <h3>New Message</h3>
        <Close className='sendMail_close'/>
      </div>
      <form>
        <input placeholder='To' type='text'/>
        <input placeholder='Subject' type='text'/>
        <input placeholder='Message...' className='sendMail_message' type='text'/>
        <div className='sendMail_options'>
          <Button
            className='sendMail_send'
            variant='contained'
            color='primary'
            type='submit'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  )
};


export default SendMail;
