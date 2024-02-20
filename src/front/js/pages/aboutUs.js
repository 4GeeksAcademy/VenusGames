import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom"
import { Link } from "react-router-dom";
import "../../styles/index.css"


const aboutus = () => {
  return (


    <div className="full">
        <div className="carusel">
          {/* <section>
            <img src="https://wallpapercave.com/wp/wp4441548.png" />
            
          </section> */}
        </div>
    <div className="container">
        <div>
          <h3 className="title">About </h3>
          <br></br>
          <br></br>
          <h1>Pokemon Venus / VenusGames</h1>
        </div>


        <div className="detailedAbout">
          <div className="detailedAboutInfo">
            <br></br>
            <section className="aboutTopic"><h3 id="about"><a href="#about">#</a>&nbsp; Pokemon Venus</h3>
                <p className="info">I started this proyect as a first step into the wonderful, fantastic and painful world which is coding. Dont get wrong! Sometimes a bit of pain is required to truly appreacite something. Hopefully you find this proyect as interesting as I did while creating it, and who knows, maybe I'll come back one day to improve it as I originally intended to. The world is full of wonderful surprises.</p>
                <p className="info">This is currently first alpha version, so let me know what you think!</p>
                <p className="info">(づ｡◕‿‿◕｡)づ:･ﾟ✧</p>
                </section>

                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      <strong>Howdy!</strong>
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body fondo">At Venus Games, our passion is to take you on an unforgettable cinematic journey. We are a passionate team of film lovers who believe that the best stories deserve to be shared. Are you looking for your next favorite movie? You are in the right place!.</div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      <strong>The purpose</strong>
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body fondo">Facilitate free access to exceptional films. We want to make discovering new stories as easy as pressing play. At Venus Games, we believe in the magic of cinema to inspire, entertain and connect people.</div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <strong>How does it work?</strong>
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body fondo">Our team of experts carefully curates a selection of featured films. Whether you're looking for action, drama, comedy or any particular genre, we have something for every taste. The best part? It's completely free.</div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapseThree">
                      <strong>Social Medias</strong>
                    </button>
                  </h2>
                  <div id="flush-collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body fondo">añadir redes sociales ig</div>
                  </div>
                </div>

              </div>
              <div className="suporte d-grid gap-2 col-6 mx-auto">
                <Link to="/TechnicalSupport" className="btn  info-buton tec-buton" type="button">Technical Support</Link>
                <Link to="/" className="btn  info-buton tec-buton" type="button">Get Started</Link>
              </div>
          </div>
        </div>

        );
        
};

export default aboutus;