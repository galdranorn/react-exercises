var movies = [
    {
      id: 1, // for optimalisation
      title: 'Harry Potter',
      desc: 'film o czarodzieju'
    },
    {
      id: 2, // for optimalisation
      title: 'Król Lew',
      desc: 'Film o królu sawanny'
    }
  ];

  var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id}, // for optimalisation
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc)
      );
  });

  var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
  
ReactDOM.render(element, document.getElementById('app'));