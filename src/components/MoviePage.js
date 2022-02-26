import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useEffect, useState } from 'react'

const fetchMovie = async movieId => {
  console.log(movieId)
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=96c9281d41bddbb69746bd576c8a5eb2&language=en-US`
  )
  const movies = await data.json()
  return movies
}

const MoviePage = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState('loading')

  const navigate = useNavigate()
  useEffect(() => {
    fetchMovie(movieId)
      .then(res => {
        setMovie(res)
      })
      .catch(err => {
        alert(err)
        navigate('/', { replace: true })
      })
  }, [movieId, navigate])

  return <div>{movie.original_title}
  <img src={'https://image.tmdb.org/t/p/original/' + movie.poster_path} alt='' />
  {movie.imdb_id}
  </div>
}

export default MoviePage
