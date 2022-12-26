import React, { useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin, setAuthError } from '../action';
import styled from 'styled-components';

const Error = styled.div`
  color: red;
`;

const LoginSchema = Yup.object().shape({
  // validating email
  email: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('email is Required'),

  // validating password
  password: Yup.string()
    .required('Password is required')
    .min(5, 'password might be minimum 5 character')
    .max(10, 'invalid phone no'),
});

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { authError } = useSelector((state) => state.Auth);

  useEffect(() => {
    if (authError) {
      setTimeout(() => {
        dispatch(setAuthError(null));
      }, 3000);
    }
  }, [authError]);
  return (
    <section className="vh-100">
      <div>
        <nav className="navbar text-light navbar-light bg-dark  ">
          <h1>NEW YORK REGENTS SCHOOL</h1>
        </nav>
      </div>
      <div
        className="container-fluid h-custom "
        style={{ marginBottom: '150px' }}
      >
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <h1 className="align-center">Login</h1>

            <Formik
              initialValues={{
                // initial values
                email: '',
                password: '',
              }}
              // validation
              validationSchema={LoginSchema}
              // on submit values
              onSubmit={(values, { resetForm }) => {
                resetForm({ values: '' });
                dispatch(userLogin(values));
                history.push('/startexam');
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-4">
                    <label htmlFor="email" style={{ fontWeight: '700' }}>
                      Enter Your Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Enter Your email"
                    />

                    {errors.email && touched.email ? (
                      <Error>{errors.email}</Error>
                    ) : null}
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="password" style={{ fontWeight: '700' }}>
                      password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Enter Your password"
                    />

                    {errors.password && touched.password ? (
                      <Error>{errors.password}</Error>
                    ) : null}
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-success ">
                      Login
                    </button>
                    <div className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{' '}
                      <Link to={'/signup'} className="link-primary">
                        Register
                      </Link>
                      <div className="d-flex">
                        {authError && <Error>{authError}</Error>}
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
            <Link className="btn btn-warning" to="/">
              back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
