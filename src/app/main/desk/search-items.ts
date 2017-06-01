export const searchItems: SearchItem[] = [
  {
    name: 'All',
    key: 'all',
    requestParameters: {
      main: 'all',
      searchAttributes: []
    },
  },
  {
    name: 'Music',
    key: 'music',
    requestParameters: {
      main: 'music',
      searchAttributes: [
        {
          name: 'Search by artist',
          attribute: 'artistTerm'
        },
        {
          name: 'Search by song title',
          attribute: 'songTerm'
        }
      ]
    }
  },
  {
    name: 'Movies',
    key: 'movies',
    requestParameters: {
      main: 'movie',
      searchAttributes: [
        {
          name: 'Search by movie title',
          attribute: 'movieTerm'
        },
        {
          name: 'Search by description',
          attribute: 'descriptionTerm'
        }
      ]
    }
  },
  {
    name: 'Music videos',
    key: 'musicVideos',
    requestParameters: {
      main: 'musicVideo',
      searchAttributes: [
        {
          name: 'Search by artist',
          attribute: 'artistTerm'
        },
        {
          name: 'Search by song title',
          attribute: 'songTerm'
        }
      ]
    }
  },
  {
    name: 'Podcasts',
    key: 'podcasts',
    requestParameters: {
      main: 'podcast',
      searchAttributes: [
        {
          name: 'Search by title',
          attribute: 'titleTerm'
        },
        {
          name: 'Search by author',
          attribute: 'authorTerm'
        },
        {
          name: 'Search by description',
          attribute: 'descriptionTerm'
        }
      ]
    }
  },
  {
    name: 'Audiobooks',
    key: 'audiobooks',
    requestParameters: {
      main: 'audiobook',
      searchAttributes: [
        {
          name: 'Search by title',
          attribute: 'titleTerm'
        },
        {
          name: 'Search by author',
          attribute: 'authorTerm'
        }
      ]
    }
  },
  {
    name: 'Short films',
    key: 'shortFilms',
    requestParameters: {
      main: 'shortFilm',
      searchAttributes: [
        {
          name: 'Search by film title',
          attribute: 'shortFilmTerm'
        },
        {
          name: 'Search by description',
          attribute: 'descriptionTerm'
        }
      ]
    }
  },
  {
    name: 'TV shows',
    key: 'tvShows',
    requestParameters: {
      main: 'tvShow',
      searchAttributes: [
        {
          name: 'Search by show title',
          attribute: 'showTerm'
        },
        {
          name: 'Search by episode title',
          attribute: 'tvEpisodeTerm'
        },
        {
          name: 'Search by description',
          attribute: 'descriptionTerm'
        }
      ]
    }
  },
  {
    name: 'Software',
    key: 'software',
    requestParameters: {
      main: 'software',
      searchAttributes: []
    }
  },
  {
    name: 'E-books',
    key: 'ebooks',
    requestParameters: {
      main: 'ebook',
      searchAttributes: []
    }
  },
];
