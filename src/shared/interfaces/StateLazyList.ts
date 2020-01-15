export interface StateLazyList<TData> {
  isFetching: boolean;
  error: any | null;
  lastFetchedAt: number;
  isLastChunkLoaded: boolean;
  data: TData[];
}
