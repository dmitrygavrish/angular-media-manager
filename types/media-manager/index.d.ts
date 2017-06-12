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
  id?: number,
  title: string,
  category: string, // SearchItem key
  type: 'collection' | 'album', // FavoriteItem key
  contentIds?: number[]
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
  releaseDate: string,
  trackViewUrl: string // link to itunes page
};
