import postServices from './api/api';
import { validatePassword } from './utils/hashPassword';

export default {
  // to  signup details
  signUp: async (data) => {
    // data.email
    const { data: users } = await postServices.get('users');
    const user = users.find(({ email }) => email === data.email);
    if (user) {
      return 'User already exists';
    }

    await postServices.post('users', data);
    return null;
  },

  //to login

  isValidUser: async (data) => {
    const { data: users } = await postServices.get('users');
    const user = users.find(({ email }) => email === data.email);

    if (!user) {
      return null;
    }
    console.log(
      validatePassword('U2FsdGVkX185yQ8uuCnV/8kMBsnIVbR6IgwbWAiq98E=', 'ben123')
    );
    if (validatePassword(user.hashedpassword, data.password)) {
      return {
        email: user.email,
        name: user.name,
      };
    }

    return null;
  },
};

// ===== users REGISTER ===== //
// export const addusers = (data) => instance.post('users', data); //to database
// export const getusers = () => instance.get('users'); // from database
