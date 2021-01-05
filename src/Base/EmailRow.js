import React from "react";
import './EmailRow.css'
import {LabelImportantOutlined, StarBorderOutlined} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom'

function EmailRow(props) {

  const {id, title, subject, description, time} = props;
const history = useHistory();
  return (
    <div onClick={() => history.push('/mail')} className='emailRow'>
      <div className='emailRow_options'>
        <Checkbox/>
        <IconButton>
          <StarBorderOutlined/>
        </IconButton>
        <IconButton>
          <LabelImportantOutlined/>
        </IconButton>
      </div>
      <h3 className='emailRow_title'>
        {title}
      </h3>
      <div className='emailRow_message'>
        <h4>
          {subject}{" "}
          <span className='emailRow_description'>
            {description}
          </span>
        </h4>
      </div>
      <p className='emailRow_time'>
        {time}
      </p>
    </div>
  )
};


export default EmailRow;
