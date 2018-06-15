const initialState = {
  type: '',
  eventId: "ala bala portocala event id",
  subject: "this is the subject",
  languageId: 2,
  templateType: 5,
  html: '',
  json: ''  
}
const templateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PREVIEW_HTML":
      return {...state, html: action.html};

    default:
      return state;
  }
}

export default templateReducer;