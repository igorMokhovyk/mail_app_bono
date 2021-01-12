const initialState = {
  mailAdd: [
    {
      sendMessageIsOpen: false,
    }
  ],
  selectedMail: [
    null
  ],
  userLogin: [
    null
  ]


}


const bonoMail = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_EMAIL' :
      return {
        ...state,
        mailAdd: {sendMessageIsOpen: true}
      }
    case 'CLOSE_EMAIL_FORM' :
      return {
        ...state,
        mailAdd: {sendMessageIsOpen: false}
      }
    case 'SELECT_MAIL' :
      return {
        ...state,
        selectedMail: [...state.selectedMail, action.payload]
      }
    case 'CLEAN_MAIL' :
      return {
        ...state,
        selectedMail: [null]
      }
    case 'USER_LOGGING' :
      return {
        ...state,
        userLogin:  action.payload
      }
    case 'USER_LOGOUT' :
      return {
        ...state,
        userLogin: null
      }

    default:
      return state
  }
}

export default bonoMail;
