export const setLogin = (email, password) => {
  let data = { status: true, email };
  localStorage.setItem('login', JSON.stringify(data));
};

export const getLogin = () => {
  const login = localStorage.getItem('login');
  return login;
};

export const setLogout = () => {
  if (getLogin) {
    localStorage.removeItem('login');
  }
};
