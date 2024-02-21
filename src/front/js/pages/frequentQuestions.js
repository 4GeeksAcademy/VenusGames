import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom"
import { Link } from "react-router-dom";
import "../../styles/index.css"

const FrequentQuestions = () => {
  return (
    <>


      <div className="lista col-10">
        <div>
          <h2 className="Thema title">Frequent Questions</h2>
        </div>

        <div className="accordion accordion-flush myAccordion" data-bs-theme="dark" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <strong>What is VenusGames?</strong>
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body fondo"> empty at the moment </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              <strong>How much does Pokemon Venus cost?</strong>
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body fondo"> Nothing really. It's a free plataform available to everyone</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              <strong>Where can I acess the page?</strong>
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body fondo"> Enjoy wherever you want, whenever you want. Log in to your poke-account to interact with the community but is not required if you only wish to check on some pokemon's stats and prices. You can access the page instantly through your personal computer or on any internet-connected device, such as smart TVs, smartphones, tablets, media players .</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapseThree">
              <strong>How do I delete my account?</strong>
              </button>
            </h2>
            <div id="flush-collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body fondo"> Our page is flexible. No annoying contracts or commitments. For more details on how to delete you account please check our <Link to="/TechnicalSupport" className="btn info-buton tec-buton" type="button">Technical Support</Link> page.</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapseThree">
              <strong>What can I see in Pokemon Venus?</strong>
              </button>
            </h2>
            <div id="flush-collapsefive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body fondo">With Pokemon Venus, you have access to all the information and resources you need to become a Pokémon master. Whether you're seeking information on a specific Pokémon, researching game prices, or looking to connect with fellow fans, we're here to assist you on your journey!</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix" aria-expanded="false" aria-controls="flush-collapseThree">
              <strong>Is Pokemon Venus good for kids?</strong>
              </button>
            </h2>
            <div id="flush-collapsesix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body fondo">Of course. It is available to all the ages, races and regions. At the end that's exactly what pokemon is all about! A franchise made to be enjoyed by everyone regardless their ways of life.</div>
            </div>
          </div>
        </div>

        <div className="suporte d-grid gap-2 col-6 mx-auto">
          <Link to="/TechnicalSupport" className="btn info-buton tec-buton" type="button">Technical Support</Link>
          <Link to="/" className="btn info-buton tec-buton" type="button">Get Started</Link>
        </div>

      </div>
    </>
  );
};

export default FrequentQuestions;