import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Movie = ({ movie }) => {
  return (
    <motion.div layout>
      <Link layout to={`/movie/${movie.id}`}>
        <h2>{movie.title}</h2>
        <img
          src={'https://image.tmdb.org/t/p/original/' + movie.poster_path}
          alt=''
        />
      </Link>
    </motion.div>
  )
}

export default Movie
