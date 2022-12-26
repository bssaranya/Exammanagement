import history from '../history';
import services from '../service';
import { getPasswordHashResponse } from '../utils/hashPassword';

// action for sign up
export const signUpData = (datas) => async (dispatch) => {
  console.log('datas', datas);
  dispatch({
    type: 'SET_ADD_SIGNUP',
    payload: true,
  });

  const error = await services.signUp({
    ...datas,
    hashedpassword: getPasswordHashResponse(datas.phone),
  });
  if (error) {
    return dispatch(setAuthError(error));
  }
  dispatch(setAuthError(null));

  // history.push('/login');
};

// action for setting signup error

export const setAuthError = (payload) => {
  return {
    type: 'SET_ERROR',
    payload: payload,
  };
};

//action for log in

export const userLogin = (props) => async (dispatch) => {
  const authResponse = await services.isValidUser(props);

  if (authResponse) {
    dispatch(setAuthDetail(authResponse));
    dispatch(setAuthError(null));
    history.push('/startexam');
  } else {
    return dispatch(setAuthError('login failed'));
  }
};

export const setAuthDetail = (detail) => {
  localStorage.setItem('MYACCOUNT', JSON.stringify(detail));
  return {
    type: 'SET_AUTH_DETAIL',
    payload: detail,
  };
};

//action for logout
export const setlogout = () => async (dispatch) => {
  dispatch({
    type: 'SET_LOGOUT',
    payload: false,
  });
  localStorage.removeItem('MYACCOUNT');
  history.push('/login');
};
