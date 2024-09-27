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

export interface ITableColumns {
  date: string;
  description: string;
  usedDays: string;
  earnedDays: string;
  balance: string;
}

export interface ITimeOffBlogData {
  icon: string;
  date: string;
  point: boolean;
  overview: string;
}
