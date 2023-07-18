export interface IBook {
  _id: string;
  image: string;
  author: string;
  genre: string;
  publishedDate: string;
  title: string;
}

export interface ILoginUser {
  userId: string | null;
  email: string | null;
  name?: {
    firstName?: string;
    lastName?: string;
  };
}
