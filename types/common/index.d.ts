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
  email: string,
  password: string,
  personal: {
    firstName: string,
    secondName: string
  }
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
