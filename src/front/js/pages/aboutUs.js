import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom"
import { Link } from "react-router-dom";
import "../../styles/index.css"


const aboutus = () => {
  return (


    <div className="full">
      <div className="carusel">
        <section>
          <img src="https://wallpapercave.com/wp/wp4441548.png" />
          <img src="https://www.whatspaper.com/wp-content/uploads/2023/10/hd-satoru-gojo-wallpaper-whatspaper.jpg" />
          
        </section>
      </div>
      

      <div className="lista col-10">
        <div>
          <h3 className="Thema">Abouts US</h3>
        </div>
        
        <div className="accordion accordion-flush myAccordion" data-bs-theme="dark" id="accordionFlushExample">
          <div className="accordion-item">
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