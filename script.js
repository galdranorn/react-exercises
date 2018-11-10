const movies = [
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


// --- CLASS MOVIE 
let Movie = React.createClass ({
    // render method
    render: function() {
      return (
        React.createElement('li', {},
            React.createElement('h2', {}, this.props.movie.title),
            React.createElement('p', {}, this.props.movie.desc),
            React.createElement('img', {className: 'logo', src: this.props.movie.poster})
        ));  
    
    // validate component props
    propTypes: {movie: React.PropTypes.object.isRequired}

}});

// creating movie DOM elements from movies list objects list
const moviesList = movies.map(item => React.createElement(Movie, {key: item.id, movie: item}))

// creating element from class and data
const element = React.createElement('ul', {}, moviesList)

// render to DOM
ReactDOM.render(element, document.getElementById('app'));