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
                <p className="info">I started this proyect as a first step into the wonderful, fantastic and painful world which is coding. Sometimes a bit of pain is required to truly appreciate something. Hopefully you find this proyect as interesting as I did while creating it, and who knows, maybe I'll come back one day to improve it as I originally intended to. The world is full of wonderful surprises.</p>
                <p className="info">This is currently first alpha version, so let me know what you think!</p>
                <p className="info">(づ｡◕‿‿◕｡)づ:･ﾟ✧</p>
                </section>

                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      <strong>Howdy!</strong>
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body fondo">...</div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      <strong>The purpose</strong>
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body fondo">Our website is designed to cater to the needs of players, collectors, and enthusiasts alike, providing a comprehensive platform to explore and understand the vast world of Pokemon.</div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <strong>What does it offer?</strong>
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body fondo"><h1>Key Features:</h1>
                    <li>Comprehensive Pokemon Database: Access a comprehensive database containing detailed information on every Pokemon, including their stats, abilities, moves, evolutions, and more. Whether you're looking for information on your favorite Pokemon or researching to build your perfect team, our database has everything you need.</li>

<li>Pokemon Game Market Prices: Stay updated on the market prices of Pokemon games, including both older and newer editions. Our platform gathers data from multiple reliable sources to provide you with the most accurate and up-to-date prices available.</li>

<li>Price Comparison: Compare prices of different editions and versions of Pokemon games to make informed decisions about your purchases. Whether you're looking for a classic edition to complete your collection or want to know the best available price for the latest game version, our comparison tool will help you find the best deals.</li>

<li>News and Updates: Stay informed with the latest news and updates from the world of Pokemon. From announcements of new games and special events to tips and tricks to enhance your gaming experience, our website keeps you in the loop on everything you need to know.</li>

<li>Active Community: Join an active community of players and Pokemon fans, where you can share your experiences, exchange tips and strategies, and connect with others who share your passion for these adorable pocket monsters.</li></div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapseThree">
                      <strong>Social Medias</strong>
                    </button>
                  </h2>
                  <div id="flush-collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body fondo">empty fo time being</div>
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