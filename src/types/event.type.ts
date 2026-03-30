export type AppEvent<T = unknown> = {
  type: string;
  payload: T;
  createdAt: string;
};
