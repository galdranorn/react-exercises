var movies = [
    {
        id: 1, // for optimalisation
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        poster: 'potter.jpg'
    },
    {
        id: 2, // for optimalisation
        title: 'Król Lew',
        desc: 'film o królu sawanny',
        poster: 'lion.jpg'
    },
    {
        id: 3, // for optimalisation
        title: 'John Wick',
        desc: 'zabili mu pieska, więc zabił 77 osób',
        poster: 'wick.jpg'
    },
    {
        id: 4, // for optimalisation
        title: 'Gwiezdne Wojny',
        desc: 'ja sem twój tatinek',
        poster: 'star.jpg'
    },
    {
        id: 5, // for optimalisation
        title: 'Władca Pierścieni',
        desc: 'czemu nie wysłali orłów?!',
        poster: 'ring.jpg'
    },
    {
        id: 6, // for optimalisation
        title: 'Dzień Świra',
        desc: 'jak tatuś zrobi dzióbek... ;-)',
        poster: 'swir.jpg'
    }
  ];

  var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id}, // for optimalisation
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {className: 'logo', src: movie.poster})
      );
  });

  var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
  
ReactDOM.render(element, document.getElementById('app'));