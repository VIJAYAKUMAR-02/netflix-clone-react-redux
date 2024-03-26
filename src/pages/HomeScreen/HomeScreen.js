import React from 'react'
import "./HomeScreen.css"
import Nav from '../../componenets/Nav/Nav'
import Banner from '../../componenets/Banner/Banner'
import Row from '../../componenets/Row/Row'
import requests from '../../helpers/requests'

const HomeScreen = () => {
  return (
    <div className='homescreen'>
        <Nav />
        <Banner />
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchUrl={requests.fetchNetflixOriginals}/>
        
    </div>
  )
}

export default HomeScreen