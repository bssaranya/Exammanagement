import { combineReducers } from 'redux';

const getInitialAuthDetail = () => {
  if (!localStorage.getItem('MYACCOUNT')) {
    return null;
  }
  try {
    const authData = JSON.parse(localStorage.getItem('MYACCOUNT'));
    if (authData.email && authData.name) {
      return authData;
    }
    return null;
  } catch (e) {
    return null;
  }
};

const authInitials = {
  authDetail: getInitialAuthDetail(),
  addSignUploading: false,
  signUpData: [],
  changePassword: false,
  authError: false,
  logout: false,
};

const authReducer = (state = authInitials, action) => {
  switch (action.type) {
    case 'SET_AUTH_DETAIL':
      return {
        ...state,
        authDetail: action.payload,
      };
    case 'SET_ADD_SIGNUP':
      return {
        ...state,
        addSignUploading: action.payload,
      };
    case 'GET_SIGNUPDATA':
      return {
        ...state,
        signUpData: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        authError: action.payload,
      };
    case 'SET_LOGOUT':
      return {
        ...state,
        authDetail: null,
        logout: action.payload,
      };

    default:
      return state;
  }
};

export default combineReducers({
  Auth: authReducer,
});

































// // import { combineReducers } from 'redux';
// import { combineReducers } from '@reduxjs/toolkit';

// const getInitialAuthDetail = () => {
//   if (!localStorage.getItem('MYACCOUNT')) {
//     return null;
//   }
//   try {
//     const authData = JSON.parse(localStorage.getItem('MYACCOUNT'));
//     if (authData.email && authData.name) {
//       return authData;
//     }
//     return null;
//   } catch (e) {
//     return null;
//   }
// };

// const intialState = {
//   authDetail: getInitialAuthDetail(),
//   usersDetail: [],
//   authError: null,
//   Students: [],
// };

// const studentReducer = (state = intialState, action) => {
//   switch (action.type) {
//     case 'GET_STUDENT':
//       return {
//         ...state,
//         Students: [...action.payload],
//       };
//     case 'SET_AUTH_DETAIL':
//       return {
//         ...state,
//         authDetail: action.payload,
//       };
//     case 'SET_AUTH_ERROR':
//       return {
//         ...state,
//         authError: action.payload,
//       };
//     case 'LOGIN_STUDENT':
//       return {
//         ...state,
//         usersDetail: action.payload,
//       };

//     default:
//       return state;
//   }
// };
// export const reducer = combineReducers({
//   studentReducer,
// });
