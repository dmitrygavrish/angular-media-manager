type SearchItem = {
  name: string,
  key: string,
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
