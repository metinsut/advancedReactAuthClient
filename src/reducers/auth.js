const INITIAL_STATE = {
    authticated: '',
    errorMessage: ''
};

const auth = (state = INITIAL_STATE, action) => {
    switch (action.type) {
          case "test":
                return {
                      ...action.payload
                };
          default:
                return state;
    }
};

export default auth;
