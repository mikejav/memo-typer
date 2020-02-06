export interface StateList<TData> {
  isFetching: boolean;
  error: any | null;
  lastFetchedAt: number;
  ids: string[];
}
