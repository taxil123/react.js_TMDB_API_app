import React from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Filter from './Filter'
import Movie from './Movie'

const HomePage = () => {
  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)
  const [pageNo, setPageNo] = useState(1)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchPopular()
  }, [pageNo])

  useEffect(async () => {
    if (search != '') {
      const data = await fetch(
        'https://api.themoviedb.org/3/search/movie?api_key=96c9281d41bddbb69746bd576c8a5eb2&query=' +
          search
      )
      const movies = await data.json()
      setFiltered(movies.results)
    } else {
      fetchPopular()
    }
  }, [search])

  const fetchPopular = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=96c9281d41bddbb69746bd576c8a5eb2&language=en-US&page=' +
        pageNo
    )
    const movies = await data.json()
    setPopular(movies.results)
    setFiltered(movies.results)
  }

  return (
    <div>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        setSearch={setSearch}
        search={search}
      />

      <motion.div layout className='popular-movies'>
        {filtered.map(movie => {
          return <Movie key={movie.id} movie={movie} />
        })}
      </motion.div>

      <div>
        <button
          onClick={() => (pageNo === 1 ? setPageNo(1) : setPageNo(pageNo - 1))}
        >
          Previous Page
        </button>
        <button onClick={() => setPageNo(pageNo + 1)}>Next Page</button>
      </div>
    </div>
  )
}

export default HomePage
