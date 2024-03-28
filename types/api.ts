export type ApiReturn<T> = {
  message: string;
  token?: string;
  user: T;
};
