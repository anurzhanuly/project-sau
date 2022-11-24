export interface Res<T> {
  result: T;
  status: number;
}

export interface Error<T = string> {
  ERROR: T;
}
