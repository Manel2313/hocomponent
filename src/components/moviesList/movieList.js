import React, { Component } from 'react'
import './movieList.css'
import HOC from '../HOC.js'

class MoviesList extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            movies: [{
                name: 'The little mermaid',
                img: 'https://www.femalefirst.co.uk/image-library/port/620/t/the-little-mermaid-movie-poster.jpg',
                year: '2019'
            },
            {
                name: 'Mirai',
                img: 'https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/af/56deceddfd61d64fbc46a7748d09c31d_500x735.jpg?t=1541837931',
                year: '2019'
            },
            {
                name: 'Epic',
                img: 'http://images6.fanpop.com/image/photos/36900000/Epic-movie-poster-disney-epic-36971177-937-1500.jpg',
                year: '2019'
            },
            {
                name: 'Fireworks',
                img: 'https://i2.wp.com/www.animephproject.com/wp-content/uploads/2017/12/FB_IMG_1513080391258.jpg?fit=660%2C960&ssl=1',
                year: '2019'
            },
            {
                name: 'Next Gen',
                img: 'https://m.media-amazon.com/images/M/MV5BMTU0MjAwMDkxNV5BMl5BanBnXkFtZTgwMTA4ODIxNjM@._V1_.jpg',
                year: '2019'
            },
            {
                name: 'Your name',
                img: 'https://ih0.redbubble.net/image.505815507.9008/flat,550x550,075,f.u4.jpg',
                year: '2019'
            }]
        })
    }


    render() {
        return (
            <div>
                {this.state.movies.map((el, index) => {
                    return (
                        <div className="movies" key={index}>
                            <div><img className="movie-img" src={el.img} alt="" /></div>
                            <div>
                                <div><h1>{el.name}</h1></div>
                                <div><h3>{el.year}</h3></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default HOC(MoviesList);