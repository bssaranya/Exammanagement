import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { signUpData, setAuthError } from '../action';
import { Link, useHistory } from 'react-router-dom';
import ImageUploader from 'react-images-upload';
// Signup form
const Error = styled.div`
  color: red;
`;

// FORM VALIDATION
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid'
    )
    .max(10)
    .min(10)
    .required('Required'),
  permanent_address: Yup.string().required('Required'),
});

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { authError } = useSelector((state) => state.Auth);

  const [image, setImage] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (authError) {
      setTimeout(() => {
        dispatch(setAuthError(null));
      }, 3000);
    }
  }, [authError]);

  // useEffect(() => {
  //   dispatch(getStudentDetails());
  // }, []);

  // image uploader
  const onDrop = (pictureFiles, pictureDataURLs) => {
    setImage(pictureDataURLs[0]);
  };

  console.log('signup');
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          permanent_address: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log('values', values);

          values = {
            ...values,
            image: image,
          };
          dispatch(signUpData(values));
          history.push('/login');
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <section className="h-100 bg-dark">
              <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col">
                    <div className="card card-registration my-4">
                      <div className="row g-0">
                        <div className="col-xl-6 d-none d-xl-block">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                            alt="Sample"
                            className="img-fluid"
                            style={{ border: 0.25 }}
                          />
                        </div>

                        <div className="col-xl-6">
                          <div className="card-body p-md-5 text-black">
                            <h3
                              className="mb-5 text-uppercase"
                              style={{ color: 'blue' }}
                            >
                              Student registration form
                            </h3>

                            {/* NAME  */}
                            <div className="form-outline">
                              <label className="form-label">Name</label>
                              <Field
                                type="text"
                                id="form3Example1m"
                                className="form-control form-control-lg"
                                name="name"
                              />
                              {errors.name && touched.name ? (
                                <Error>{errors.name}</Error>
                              ) : null}
                            </div>
                            {/* Email */}
                            <div className="form-outline mb-4">
                              <label className="form-label">Email ID</label>
                              <Field
                                type="text"
                                id="form3Example97"
                                className="form-control form-control-lg"
                                name="email"
                              />
                              {errors.email && touched.email ? (
                                <Error>{errors.email}</Error>
                              ) : null}
                            </div>
                            {/* Phone  */}
                            <div className="form-outline mb-4">
                              <label className="form-label">Phone</label>
                              <Field
                                type="text"
                                id="form3Example90"
                                className="form-control form-control-lg"
                                name="phone"
                              />
                              {errors.phone && touched.phone ? (
                                <Error>{errors.phone}</Error>
                              ) : null}
                            </div>
                            {/* Permanent Address  */}
                            <div className="form-outline mb-4">
                              <label className="form-label">
                                Permanent Address
                              </label>
                              <Field
                                type="text"
                                id="form3Example8"
                                className="form-control form-control-lg"
                                name="permanent_address"
                                value={values.permanent_address}
                              />
                              {errors.permanent_address &&
                              touched.permanent_address ? (
                                <Error>{errors.permanent_address}</Error>
                              ) : null}
                            </div>

                            {/* Current Address  */}
                            <div className="form-outline mb-4">
                              <label className="form-label">
                                Current Address
                              </label>
                              <Field
                                type="text"
                                id="form3Example8"
                                className="form-control form-control-lg"
                                name="current_address"
                                value={values.current_address}
                                disabled={checked === true}
                              />
                              {/* {errors.current_address &&
                              touched.current_address ? (
                                <Error>{errors.current_address}</Error>
                              ) : null} */}
                            </div>
                            {/* Check box  */}
                            <div className="form-check form-outline mb-4">
                              <input
                                type="checkbox"
                                onChange={({ target: { checked: chk } }) => {
                                  setChecked(!checked);
                                  if (chk) {
                                    setFieldValue(
                                      'current_address',
                                      values.permanent_address
                                    );
                                  } else {
                                  }
                                }}
                                checked={checked}
                              />
                              <label className="form-label">
                                Same as above
                              </label>
                            </div>
                            {/* Image upload  */}

                            <div className="form-outline mb-4">
                              <div>
                                <label>Upload your photo</label>
                                <ImageUploader
                                  singleImage={true}
                                  withPreview={true}
                                  withIcon={true}
                                  buttonText="Choose images"
                                  onChange={onDrop}
                                  name="image"
                                  imgExtension={[
                                    '.jpeg',
                                    '.jpg',
                                    '.gif',
                                    '.png',
                                    '.gif',
                                  ]}
                                  maxFileSize={3242880}
                                />

                                {errors.image && touched.image ? (
                                  <Error>{errors.image}</Error>
                                ) : null}
                              </div>
                            </div>
                            {authError && (
                              <span style={{ color: 'red' }}>{authError}</span>
                            )}
                            <div className="d-flex justify-content-end pt-3">
                              <button
                                className="btn btn-warning btn-lg ms-2"
                                type="submit"
                              >
                                Submit
                              </button>
                              <Link
                                to="/"
                                type="button"
                                className="btn btn-primary btn-lg"
                              >
                                Back
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
