const initialState = {
  mailAdd: [
    {
      sendMessageIsOpen: false,
    }
  ],
  selectedMail: [
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
    case 'SELECT_MAIL' :
      return {
        ...state,
        selectedMail: [...state.selectedMail, action.payload]
      }

    default:
      return state
  }
}

export default bonoMail;
