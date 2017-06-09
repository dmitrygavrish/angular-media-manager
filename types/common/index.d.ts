type AuthState = {
  isLoggedIn: boolean,
  userLogin?: string
};

type AuthLoginData = {
  login: string,
  password: string
};

type AccountData = {
  login: string,
  password: string
};

type AuthRegData = {
  nameGroup: {
    firstName: string,
    secondName: string
  },
  loginGroup: {
    login: string,
    email: string
  },
  passwordGroup: {
    password: string,
    passwordConfirm: string
  }
};
