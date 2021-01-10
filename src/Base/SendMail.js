import React from "react";
import './SendMail.css'
import {Close} from "@material-ui/icons";
import {Button} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {connect} from 'react-redux';
import {db} from "../Firebase/Firebase";
import firebase from 'firebase';


function SendMail(props) {
  const {register, handleSubmit, watch, errors} = useForm();

  const onSubmit = (formData) => {
    console.log(formData)
    db.collection('emails').add(
      {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
//we will take time from firebase when mail was added to db
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }
    )
    props.closeEmailForm()
  };

  return (
    <div className='sendMail'>
      <div className='sendMail_header'>
        <h3>New Message</h3>
        <Close className='sendMail_close' onClick={() => props.closeEmailForm()}/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='to'
          placeholder='To'
          type='email'
          ref={register({required: true})}
        />

        {/*//using errors.to for error( from useForm )*/}

        {errors.to && <p className='sendMail_error'>To is Required</p>}

        <input
          name='subject'
          placeholder='Subject'
          type='text'
          ref={register({required: true})}
        />

        {errors.subject && <p className='sendMail_error'>Subject is Required</p>}

        <input
          name='message'
          placeholder='Message...'
          className='sendMail_message'
          type='text'
          ref={register({required: true})}
        />

        {errors.message && <p className='sendMail_error'>Message is Required</p>}

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


const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  closeEmailForm: () => dispatch({type: 'CLOSE_EMAIL_FORM'}),
})


export default connect(mapStateToProps, mapDispatchToProps)(SendMail);
