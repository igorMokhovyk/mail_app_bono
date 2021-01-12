import React, {useEffect} from "react";
import './Login.css'
import {Button} from "@material-ui/core";
import {auth, provider} from "../Firebase/Firebase";
import {connect} from "react-redux";


function Login(props) {

  const {mailLogin} = props;

  const singIn = () => {
    auth.signInWithPopup(provider)
      .then((res) => {
        // console.log({eee: res.user.displayName})
        mailLogin({
          displayName: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL
        })
      })
      .catch(err => alert(err))
  }


  return (
    <div className='login'>
      <div className='login_container'>
        <img src="https://images.all-free-download.com/images/graphicthumb/abstract_logo_6822720.jpg" alt=""/>
        <Button variant='contained' color='primary' onClick={singIn}>Login</Button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userLogin: state.userLogin
})

const mapDispatchToProps = (dispatch) => ({
  mailLogin: (payload) => dispatch({type: 'USER_LOGGING', payload: payload}),
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);
