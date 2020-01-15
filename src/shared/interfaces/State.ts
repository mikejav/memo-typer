export interface State<TData> {
  isFetching: boolean;
  error: any | null;
  lastFetchedAt: number;
  data: TData;
}
