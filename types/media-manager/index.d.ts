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

type AppRouteParams = {
  type: 'search' | 'favorite',
  key: string
};
