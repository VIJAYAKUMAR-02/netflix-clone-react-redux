import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from '../../helpers/axios'

const Row = ({title,fetchUrl,isLargeRow=false}) => {

    const [movies,setMovies]=useState([])

    const base_url="https://image.tmdb.org/t/p/original/"

    useEffect(()=>{
        const fetchData=async()=>{
            const request=await axios.get(fetchUrl)
            setMovies(request.data.results)

            return request
        }
        fetchData()
    },[fetchUrl])

  return (
    <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt=""
              />
            )
        )}
        </div>
    </div>
  )
}

export default Row