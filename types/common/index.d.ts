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

type UserFavorites = {
  login: string, // as identifier
  favorites: FavoritesMetadata[]
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
