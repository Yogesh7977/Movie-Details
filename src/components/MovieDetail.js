import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
    const [fatchedDataDetail, setFatchedDataDetails] = useState([])
    const { id, media } = useParams();
    console.log("Fatched id by :", id, media)
    useEffect(() => {
      if(media === "movie"){
        const FetchMovies = async () => {
          let url = `https://api.themoviedb.org/3/movie/${id}?api_key=1c73b7ec29758bddd86f467b15df25fb`;
          let response = await fetch(url);
          if(response.ok){
            let data = await response.json();
            console.log(data)
            if(data){
              setFatchedDataDetails(data) 
            }         
          }    
      }
      FetchMovies();
    }
        
        
      else if(media === "tv"){
        const FetchTv = async () => {
          let url = `https://api.themoviedb.org/3/tv/${id}?api_key=1c73b7ec29758bddd86f467b15df25fb`;
          let response = await fetch(url);
          if(response.ok){
            let data = await response.json();
            console.log(data)
            if(data){
              setFatchedDataDetails(data)
            }
          }   
      }
      
      FetchTv()
      }
        
    }, [id,media])
    console.log(fatchedDataDetail.title)

  return (
    <>
    <div className="container">
    <div class="card mb-3" style={{marginTop:"11rem",backgroundColor:"#008080"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={`https://image.tmdb.org/t/p/w500${fatchedDataDetail.poster_path}`} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{color:"white"}}>
        <h5 class="card-title">{fatchedDataDetail.title || fatchedDataDetail.original_name}</h5>
        <p class="card-text">{fatchedDataDetail.status + ": " + fatchedDataDetail.release_date}</p>
        <p class="card-text">{"Rating: " + fatchedDataDetail.vote_average}</p>
        <p class="card-text">{"Overview: " + fatchedDataDetail.overview}</p>
        <p class="card-text">{"Original Language: " + fatchedDataDetail.original_language}</p>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default MovieDetail
