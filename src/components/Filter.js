import React from 'react'
import { useEffect } from 'react'

const Filter = ({
  setActiveGenre,
  activeGenre,
  setFiltered,
  popular,
  setSearch,
  search
}) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular)
      return
    }
    const filtered = popular.filter(movie =>
      movie.genre_ids.includes(activeGenre)
    )
    
    setFiltered(filtered)
  }, [activeGenre])

  return (
    <div  className='filter-container'>
      <button onClick={() => setActiveGenre(0)}>All</button>
      <button onClick={() => setActiveGenre(35)}>Comedy</button>
      <button onClick={() => setActiveGenre(28)}>Action</button>

      <input type='text' placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default Filter
