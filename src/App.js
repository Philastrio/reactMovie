import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {

  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
        {
          title: 'Matrix',
          poster: "https://prodeoetpatria.files.wordpress.com/2011/04/the-matrix.jpg",
        },
        {
          title: 'Full Metal Jacket',
          poster: "https://thesouloftheplot.files.wordpress.com/2014/06/poster_fullmetaljacket.jpg",
        },
        {
          title: 'Oldboy',
          poster: "http://nickyarborough.com/wp-content/uploads/2015/06/oldboy.jpg",
        },
        {
          title: 'Star Wars',
          poster: "http://2.bp.blogspot.com/_fM0KTi1Y_UU/TFRq8_i5I2I/AAAAAAAAAQ0/nokTrdM_934/s1600/star+wars+wallpaper+5.jpg"
        },
        {
          title: "바람과 함께 놀러가다",
          poster: 'http://ojsfile.ohmynews.com/STD_IMG_FILE/2015/0216/IE001801808_STD.jpg'
        },
        ]
      })
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies;
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
