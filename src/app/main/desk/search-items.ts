export const searchItems: SearchItem[] = [
  {
    name: 'All',
    key: 'all',
    icon: 'fa-cubes',
    requestParameters: {
      main: 'all',
      searchAttributes: []
    },
  },
  {
    name: 'Music',
    key: 'music',
    icon: 'fa-music',
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
    icon: 'fa-film',
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
    icon: 'fa-video-camera',
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
    icon: 'fa-podcast',
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
    icon: 'fa-headphones',
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
    icon: 'fa-file-video-o',
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
    icon: 'fa-television',
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
    icon: 'fa-cogs',
    requestParameters: {
      main: 'software',
      searchAttributes: []
    }
  },
  {
    name: 'E-books',
    key: 'ebooks',
    icon: 'fa-book',
    requestParameters: {
      main: 'ebook',
      searchAttributes: []
    }
  },
];
