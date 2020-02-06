// export interface StateLazyList<TData> {
//   isFetching: boolean;
//   error: any | null;
//   lastFetchedAt: number;
//   isLastChunkLoaded: boolean;
//   data: TData[];
// }

export interface StateLazyList<TData> {
  isFetching: boolean;
  error: any | null;
  lastFetchedAt: number;
  isLastChunkLoaded: boolean;
  byId: {[id: string]: TData};
  allIds: string[];
}

// TODO: albo uzyć jakiegoś generyka do tego?
//  Żeby faktycznie wydzielić do osobnego reducera stan widoków
//  i do osobnego stan encji?
//  https://stackoverflow.com/questions/45538363/how-to-structure-normalized-redux-store-when-loading-data
//  https://medium.com/stashaway-engineering/react-redux-tips-better-way-to-handle-loading-flags-in-your-reducers-afda42a804c6
