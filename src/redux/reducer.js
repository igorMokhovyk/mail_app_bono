const initialState = {
  mailAdd: [
    {
      sendMessageIsOpen: false,
    }
  ]

}


const bonoMail = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_EMAIL' :
      return {
        mailAdd: {sendMessageIsOpen: true}
      }
    case 'CLOSE_EMAIL_FORM' :
      return {
        mailAdd: {sendMessageIsOpen: false}
      }

    default:
      return state
  }
}

export default bonoMail;
