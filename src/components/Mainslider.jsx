import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { Get } from "../axios/AxiosFunctions";
import { BaseURL , imageUrl } from '../config/apiUrl';

const Mainslider = () => {

  
  const [popularMovies, setpoPularMovies] = useState([]);
  const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTRmMDVjYmRjNzkzMjRmMzIyNTI0OWU2YjUzZWI3MyIsInN1YiI6IjY0ZTY1MzRlNTI1OGFlMDBlYWEzMDIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0U8P84V87CnBDDW4ZTNoAyv0C_My0lDOYSFXHiG_hl0';
  const getPopularMovies = async() => {
    const getPopularUrl = BaseURL('movie/popular');
    const response = await Get(getPopularUrl, accessToken);
    console.log(response);
    if (response !== undefined) {
      setpoPularMovies(response?.data?.results);
    }
  }

  useEffect(() => {
    getPopularMovies();

  }, [])
  


  return (
    <>
        <section className="popular_movies">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <Carousel>
                  {popularMovies.map((movie) => (
                    <Carousel.Item key={movie.id}>
                      <img src={imageUrl + movie?.backdrop_path} alt="" />
                      <Carousel.Caption>
                        <h3>{movie?.original_title}<span><i class="fa fa-star" aria-hidden="true"></i> {movie?.vote_average }/10</span></h3>
                        <p>{movie?.overview}</p>
                        <button><i class="fa fa-play" aria-hidden="true"></i> <span>Watch Now<span></span></span></button>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Mainslider