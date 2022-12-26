// // signup and profile edit

// import React, { useEffect, useState } from 'react';
// import { Formik, fiel } from 'formik';
// import * as Yup from 'yup';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { userDetail, editdata, getPbyIdAction, setAuthError } from '../actions';
// import { useParams } from 'react-router-dom';

// const Signup = () => {
//   const dispatch = useDispatch();
//   const { authError, editData } = useSelector((state) => state.SignupReducer);
//   const [checked, setChecked] = useState(false);

//   var phoneRegExp = /^\d{10}$/;

//   useEffect(() => {
//     if (authError) {
//       setTimeout(() => {
//         dispatch(setAuthError(null));
//       }, 3000);
//     }
//   }, [authError]);
//   // const { editId } = useParams();

//   // useEffect(() => {
//   //   if (editId) {
//   //     dispatch(getPbyIdAction(editId));
//   //   }
//   // }, [editId]);



//   return (
//     <div>
//       <Formik
//         initialValues={editData}
//         validationSchema={Yup.object().shape({
//           name: Yup.string()
//             .min(2, 'Too Short!')
//             .max(50, 'Too Long!')
//             .required('Required'),
//           email: Yup.string().email('Invalid email').required('Required'),
//           phone: Yup.string()
//             .matches(phoneRegExp, 'Phone number is not valid')
//             .required('Required'),
//         })}
//         onSubmit={(values, { resetForm }) => {
//           dispatch(userDetail(values));
//           // if (editData.id) {
//           //   dispatch(editdata(editData.id, values));
//           //   dispatch({
//           //     type: 'EDIT_VALUES',
//           //     payload: {
//           //       name: '',
//           //       email: '',
//           //       phone: '',
//           //       currentAddress: '',
//           //       presentaddress: '',
//           //       image: '',
//           //     },
//           //   });
//           // } else {
//           // }
//         }}
//       >
//         {({
//           values,
//           setFieldValue,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           isSubmitting,
//         }) => (
//           <div>
//             <form onSubmit={handleSubmit}>
//               <h2>Sign up</h2>
//               <div className="form-outline m-4">
//                 <input
//                   type="name"
//                   id="form2Example1"
//                   className="form-control"
//                   name="name"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.name}
//                 />
//                 <span style={{ color: 'red' }}>
//                   {errors.name && touched.name ? (
//                     <div>{errors.name}</div>
//                   ) : null}
//                 </span>
//                 <label className="form-label">Name</label>
//               </div>
//               <div className="form-outline m-4">
//                 <input
//                   type="email"
//                   id="form2Example1"
//                   className="form-control"
//                   name="email"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.email}
//                 />
//                 <span style={{ color: 'red' }}>
//                   {errors.email && touched.email ? (
//                     <div>{errors.email}</div>
//                   ) : null}
//                 </span>
//                 <label className="form-label">Email address</label>
//               </div>
//               <div className="form-outline m-4">
//                 <input
//                   type="phone"
//                   id="form2Example2"
//                   className="form-control"
//                   name="phone"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.phone}
//                 />
//                 <span style={{ color: 'red' }}>
//                   {errors.phone && touched.phone ? (
//                     <div>{errors.phone}</div>
//                   ) : null}
//                 </span>
//                 <label className="form-label">Phone</label>
//               </div>
//               <div className="form-outline m-4">
//                 <textarea
//                   type="currentAddress"
//                   id="form2Example2"
//                   className="form-control"
//                   name="currentAddress" 
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.currentAddress}
//                 />
//                 <label className="form-label">Current Address</label>
//               </div>
//               <div className="form-outline m-4">
//                 <textarea
//                   type="presentaddress"
//                   id="form2Example2"
//                   className="form-control"
//                   name="presentaddress"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.presentaddress}
//                   disabled={checked === true}
//                 />
//                 <div>
//                   <input
//                     type="checkbox"
//                     onChange={({ target: { checked: chk } }) => {
//                       setChecked(!checked);
//                       if (chk) {
//                         setFieldValue('presentaddress', values.currentAddress);
//                       } else {
//                       }
//                     }}
//                     checked={checked}
//                   />
//                   <label className="form-label">Same as above</label>
//                 </div>

//                 <label className="form-label"> presentaddress</label>
//               </div>
//               <div className="form-outline m-4">
//                 <input
//                   type="text"
//                   id="form2Example2"
//                   className="form-control"
//                   name="image"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.image}
//                 />
//                 <span style={{ color: 'red' }}>
//                   {errors.image && touched.image ? (
//                     <div>{errors.image}</div>
//                   ) : null}
//                 </span>
//                 <label className="form-label">image</label>
//               </div>

//               <div className="row m-4">
//                 <div className="col d-flex justify-content-center">
//                   <div className="form-check"></div>
//                 </div>
//               </div>

//               <Link
//                 to="/studentManagement/home"
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//                 type="submit"
//                 className="btn btn-primary btn-block m-4 mt-0"
//               >
//                 Sign in
//               </Link>

//               {authError && <span style={{ color: 'red' }}>{authError}</span>}
//             </form>
//           </div>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default Signup;


// // login page

// import React, { useEffect } from 'react';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { userLogin, setAuthError } from '../actions';

// const Login = () => {
//   const dispatch = useDispatch();
//   const { authError } = useSelector((state) => state.SignupReducer);
//   useEffect(() => {
//     if (authError) {
//       setTimeout(() => {
//         dispatch(setAuthError(null));
//       }, 3000);
//     }
//   }, [authError]);
//   return (
//     <div>
//       <Formik
//         initialValues={{ email: '', password: '' }}
//         validationSchema={Yup.object().shape({
//           password: Yup.string()
//             .min(2, 'Too Short!')
//             .max(50, 'Too Long!')
//             .required('Required'),
//           email: Yup.string().email('Invalid email').required('Required'),
//         })}
//         onSubmit={async (values, { resetForm }) => {
//           dispatch(userLogin(values));
//           resetForm();
//         }}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           isSubmitting,
//         }) => (
//           <div>
//             <form onSubmit={handleSubmit}>
//               <div className="form-outline m-4">
//                 <input
//                   type="email"
//                   id="form2Example1"
//                   className="form-control"
//                   name="email"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.email}
//                 />
//                 <span style={{ color: 'red' }}>
//                   {errors.email && touched.email ? (
//                     <div>{errors.email}</div>
//                   ) : null}
//                 </span>
//                 <label className="form-label">Email address</label>
//               </div>
//               <div className="form-outline m-4">
//                 <input
//                   type="password"
//                   id="form2Example2"
//                   className="form-control"
//                   name="password"
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   value={values.password}
//                 />
//                 <span style={{ color: 'red' }}>
//                   {errors.password && touched.password ? (
//                     <div>{errors.password}</div>
//                   ) : null}
//                 </span>

//                 <label className="form-label">Password</label>
//               </div>
//               <div className="row m-4">
//                 <div className="col d-flex justify-content-center">
//                   <div className="form-check"></div>
//                 </div>
//               </div>
//               <Link
//                 to="/product"
//                 onClick={handleSubmit}
//                 type="submit"
//                 className="btn btn-primary btn-block m-4 mt-0"
//               >
//                 Sign in
//               </Link>
//               {authError && <span style={{ color: 'red' }}>{authError}</span>}
//             </form>
//           </div>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default Login;


// import services from '../services';
// import history from '../history';
// import { getPasswordHashResponse } from '../utils/hashPassword';
// export const userDetail = (props) => async (dispatch) => {
//   // debugger;
//   const error = await services.signin_User({
//     ...props,
//     hashedpassword: getPasswordHashResponse(props.phone),
//   });
//   if (error) {
//     return dispatch(setAuthError(error));
//   }
//   dispatch(setAuthError(null));
//   history.push('/studentManagement/login');
// };

// export const userLogin = (props) => async (dispatch) => {
//   const authResponse = await services.isValidUser(props);
//   if (authResponse) {
//     dispatch(setAuthDetail(authResponse));
//     dispatch(setAuthError(null));
//     history.push('/');
//   } else {
//     return dispatch(setAuthError('login failed'));
//   }
// };

// export const setAuthError = (errorMessage) => ({
//   type: 'SET_AUTH_ERROR',
//   payload: errorMessage,
// });
// export const setAuthDetail = (detail) => {
//   localStorage.setItem('MYACCOUNT', JSON.stringify(detail));
//   return {
//     type: 'SET_AUTH_DETAIL',
//     payload: detail,
//   };
// };
// export const userDetail_get = () => async (dispatch) => {
//   const { data } = await services.signin_User_get();

//   dispatch({
//     type: 'signin_userdetail_get',
//     payload: data,
//   });
// };
// export const currentUserAction = (props) => async (dispatch) => {
//   if (props != undefined) {
//     localStorage.setItem('profile', JSON.stringify(props));
//   }
//   const data = localStorage.getItem('profile');
//   console.log('data', data);
//   dispatch({
//     type: 'currentUser',
//     payload: data,
//   });
// };

// export const getPbyIdAction = (id) => async (dispatch) => {
//   console.log('id', id);
//   const { data } = await services.getPbyId(id);
//   console.log(data);
//   dispatch({
//     type: 'EDIT_VALUES',
//     payload: data,
//   });
// };

// export const editdata = (id, data) => async (dispatch) => {
//   console.log('data', data);
//   await services.editData(id, data);
// };
// export const listPost = () => async (dispatch) => {
//   const { data } = await services.listPost();
//   dispatch({
//     type: 'LIST_POST',
//     payload: data,
//   });
// };

// export const createPost = (data) => async (dispatch) => {
//   await services.createPosts(data);
//   dispatch(listPost());
// };

// export const getDetail = (id) => async (dispatch) => {
//   const { data } = await services.getDetails(id);
//   dispatch({
//     type: 'DETAIL',
//     payload: data,
//   });
// };

// export const updatePost = (id, data) => async (dispatch) => {
//   debugger;
//   console.log(id, data);
//   await services.updatePosts(id, data);
//   console.log(data);

//   dispatch(listPost());
// };

// export const getFaculty = () => async (dispatch) => {
//   const { data } = await services.facultyDetail();
//   console.log(data);
//   dispatch({
//     type: 'faculty-get',
//     payload: data,
//   });
// };

// export const postDiscussionDetails = (props) => async (dispatch) => {
//   await services.DiscussionDetailspost(props);
//   dispatch(listPost());
// };
// export const getDiscussionDetails = () => async (dispatch) => {
//   const { data } = await services.DiscussionDetailsget();
//   console.log(data);
//   dispatch({
//     type: 'DiscussionDetailsget',
//     payload: data,
//   });
// };


// //service

// import instance from './json-server';
// import { validatePassword } from './utils/hashPassword';
// export default {
//   // SIGN UP and Login

//   isValidUser: async (data) => {
//     const { data: users } = await instance.get('users');
//     const user = users.find(({ email }) => email === data.email);
//     if (!user) {
//       return null;
//     }
//     if (validatePassword(user.hashedpassword, data.password)) {
//       return {
//         email: user.email,
//         name: user.name,
//       };
//     }

//     return null;
//   },
//   signin_User: async (data) => {
//     // data.email
//     const { data: users } = await instance.get('users');
//     const user = users.find(({ email }) => email === data.email);
//     if (user) {
//       return 'User already exixts';
//     }

//     await instance.post('users', data);
//     return null;
//   },
//   signin_User_get: () => instance.get('users'),
//   login_User_post: (data) => instance.get(`currentuser`, data),
//   login_User_get: () => instance.get(`currentuser`),

//   // profile
//   getPbyId: (id) => instance.get(`users/${id}`),
//   editData: (id, data) => instance.put(`users/${id}`, data),

//   //  Grievance
//   listPost: () => instance.get('posts'),
//   createPosts: (data) => instance.post('posts', data),
//   deletePosts: (id) => instance.delete(`posts/${id}`),
//   getDetails: (id) => instance.get(`posts/${id}`),
//   updatePosts: (id, data) => instance.patch(`posts/${id}`, data),

//   // discussion

//   facultyDetail: () => instance.get('Faculty'),
//   DiscussionDetailspost: (data) => instance.post('DiscussionDetail', data),
//   DiscussionDetailsget: () => instance.get('DiscussionDetail'),
// };

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
// // SIGNUP,LOGIN REDUSER
// const signupState = {
//   authDetail: getInitialAuthDetail(),
//   usersDetail: [],
//   authError: null,
//   currentUser: '',
//   products: [],
//   editData: {
//     name: '',
//     email: '',
//     phone: '',
//     currentAddress: '',
//     presentaddress: '',
//     image: '',
//   },
// };

// export const SignupReducer = (state = signupState, action) => {
//   switch (action.type) {
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
//     case 'signin_userdetail_get':
//       return {
//         ...state,
//         usersDetail: action.payload,
//       };

//     case 'currentUser':
//       return {
//         ...state,
//         currentUser: action.payload,
//       };
//     case 'GET_PRODUCTS':
//       return {
//         ...state,
//         products: action.payload,
//       };
//     case 'EDIT_VALUES':
//       return {
//         ...state,
//         editData: action.payload,
//       };
//   }

//   return state;
// };

// // CURRENT SIGNEDIN USER REDUCER
// const initialValues = {
//   userList: [],
//   detail: { title: '', discription: '' },
//   initialInputValue: { title: '', discription: '' },
// };
// const userReducer = (state = initialValues, action) => {
//   switch (action.type) {
//     case 'LIST_POST':
//       return {
//         ...state,
//         userList: action.payload,
//         detail: { title: '', discription: '' },
//       };
//     case 'DETAIL':
//       return {
//         ...state,
//         detail: action.payload,
//       };
//   }
//   return state;
// };

// // DISCUSSION REDUCER

// const DiscussionState = {
//   faculty: [],
//   DiscussionDetails: [],
// };

// const DiscussionReducer = (state = DiscussionState, action) => {
//   switch (action.type) {
//     case 'faculty-get':
//       return {
//         ...state,
//         faculty: action.payload,
//       };
//     case 'DiscussionDetailsget':
//       return {
//         ...state,
//         DiscussionDetails: action.payload,
//       };
//   }
//   return state;
// };

// export default combineReducers({
//   SignupReducer: SignupReducer,
//   userReducer,
//   DiscussionReducer,
// });