export interface IUser {
  name: string;
  avatar: string;
}

export interface IGraphqlLogin {
  login: {
    access_token: string;
    refresh_token: string;
  };
}

export interface IGraphqlUser {
  myProfile: IUser;
}
