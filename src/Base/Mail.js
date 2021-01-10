import React from "react";
import './Mail.css'
import {IconButton} from "@material-ui/core";
import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error, ExitToApp,
  LabelImportant, MoreVert,
  MoveToInbox, Print, UnfoldMore,
  WatchLater
} from "@material-ui/icons";
import {useHistory} from 'react-router-dom'
import {connect} from "react-redux";


function Mail(props) {

  console.log(props.selectedMail )

  const mailSubject = props.selectedMail[1].subject
  const mailTitle = props.selectedMail[1].title
  const mailDescription = props.selectedMail[1].description
  const mailTime = props.selectedMail[1].time

  const history = useHistory();

  const backArrow = () => {
    props.cleanEmail()
    history.push('/')
  }

  return (
    <div className='mail'>
      <div className='mail_tools'>
        <div className='mail_toolsLeft'>
          <IconButton onClick={ backArrow }>
            <ArrowBack/>
          </IconButton>

          <IconButton>
            <MoveToInbox/>
          </IconButton>

          <IconButton>
            <Error/>
          </IconButton>

          <IconButton>
            <Delete/>
          </IconButton>

          <IconButton>
            <Email/>
          </IconButton>

          <IconButton>
            <WatchLater/>
          </IconButton>

          <IconButton>
            <CheckCircle/>
          </IconButton>

          <IconButton>
            <LabelImportant/>
          </IconButton>

          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
        <div className='mail_toolsRight'>
          <IconButton>
            <UnfoldMore/>
          </IconButton>

          <IconButton>
            <Print/>
          </IconButton>

          <IconButton>
            <ExitToApp/>
          </IconButton>
        </div>
      </div>
      <div className='mail_body'>
        <div className='mail_bodyHeader'>
          <h2>{mailSubject}</h2>
          <LabelImportant className='mail_important'/>
          <p className='mail_title'>{mailTitle}</p>
          <p className="mail_time">{mailTime}</p>
        </div>
        <div className='mail_message'>
          <p>{mailDescription}</p>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  selectedMail: state.selectedMail
})

const mapDispatchToProps = (dispatch) => ({
  cleanEmail: () => dispatch({type: 'CLEAN_MAIL'}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Mail);
