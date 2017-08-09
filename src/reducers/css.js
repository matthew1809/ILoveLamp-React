const initialState = {
  ButtonIsHidden: "hidden",
  error: null,
  id: null
}

const CSSReducer = (state=initialState, action) => {
  switch (action.type) {
    case "Unhide_Button": {
      return {...state, ButtonIsHidden: null, id: action.id};
    }
    case "hide_Button": {
      return {...state, ButtonIsHidden: "hidden", id: action.id};
    }
    default: {
      return {...state};
    }
  }
};

export default CSSReducer;
