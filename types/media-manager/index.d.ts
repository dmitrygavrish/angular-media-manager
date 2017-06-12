type SearchItem = {
  name: string,
  key: string,
  icon?: string,
  requestParameters: RequestParameters
};

type RequestParameters = {
  main: string,
  searchAttributes: SearchAttribute[]
};

type SearchAttribute = {
  name: string,
  attribute: string
};

type FavoriteItem = {
  name: string,
  key: string,
  icon?: string
};

type FavoritesMetadata = {
  type: 'collection' | 'album', // FavoriteItem key
  ids: number[]
};

type AppRouteParams = {
  type: 'search' | 'favorite',
  key?: string,
  id?: string
};

type SearchResponse = {
  resultsCount: number,
  results: SearchResult[]
};

type SearchResult = {
  kind: string, // song, video...
  trackId: number, // each single item id
  trackName: string, // each single item name (title)
  artistName: string,
  collectionName: string,
  artworkUrl100: string, // image
  releaseDate: string
};
