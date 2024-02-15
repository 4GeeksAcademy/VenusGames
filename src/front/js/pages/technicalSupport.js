import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom"
import { Link } from "react-router-dom";
import "../../styles/technicalSupport.css"

const technicalSupport = () => {

  return (
    <>

      <morehelps />

      <div className=" ">

        <h3 className="Thema title">How can we help?</h3>

        <div className="padre">

          <div className="list ">

            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <div className="text">
                    <i className="fa-solid fa-user"></i> <strong className="mylist">Acount and Billing questions</strong>
                  </div>
                </h2>

              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo1" aria-expanded="false" aria-controls="flush-collapseTwo1">
                    <strong>Poke-donations!</strong>
                  </button>
                </h2>
                <div id="flush-collapseTwo1" className="accordion-collapse collapse">
                  <div className="accordion-body fondo">
                    While we do appreacite your interest in our work and desire to support us monetary, please do not fret. This page was build purely out of joy and the desire to bring all your poke-Information closer to your hands without 
                    having to do extensive research on the internet. Also, truth to be told I made it with the intend to help myself look for information related to pokemon without having to go window by window in my browser.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree2" aria-expanded="false" aria-controls="flush-collapseThree2">
                    <strong>Failed to login</strong>
                  </button>
                </h2>
                <div id="flush-collapseThree2" className="accordion-collapse collapse">
                  <div className="accordion-body fondo">If you have any errors when logging in, you can contact us through our support team <code>Venusgames-pokemon@gmail.com</code> We are here to help from Monday to Friday 24 hours a day.</div>
                </div>
              </div>
            </div>

          </div>

          <div className="list2 col">

          <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">

                  <div className="text">
                    <i className="fa-solid fa-gear"></i> <strong className="mylist">Fix a Problem</strong>
                  </div>

                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <strong>Problems showing pokemon's information</strong>
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse">
                  <div className="accordion-body fondo">At Reel Rhapsody, we strive to provide you with a perfect viewing experience. However, we understand that sometimes technical issues may arise. Here are some common solutions to address issues when playing content:

                    1.<strong>Check your Internet Connection:</strong>
                    Make sure you have a stable internet connection. You are never too sure.

                    2.<strong>Update your Browser:</strong>
                    Make sure you are using the most recent version of your web browser. Updates usually fix compatibility issues.

                    3.<strong>Disable Browser Extensions:</strong>
                    Some extensions may interfere with the content. Try temporarily disabling them and try again.

                    4.<strong>Clear Browser Cache:</strong>
                    Browser cache can build up and cause problems. Try to clean it to ensure a trouble-free experience.

                    5.<strong>Try Another Browser:</strong>
                    If problems persist, try using another browser to rule out browser-specific problems.

                    If you still encounter difficulties, do not hesitate to reach out through our technical support email. We're more than happy to help you resolve any issues we might have 

                    If there is any information outdated, feel free to reach out too. We try to be as fast as possible with each newly pokemon release but of course delays can happen.

                    Thank you for being here!</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThreea" aria-expanded="false" aria-controls="flush-collapseThreea">
                    <strong>Did you forget your password</strong>
                  </button>
                </h2>
                <div id="flush-collapseThreea" className="accordion-collapse collapse">
                  <div className="accordion-body fondo">If you forget your password you can receive help by writing to us at <code>Venusgames-pokemon@gmail.com</code> we will help you as soon as possible.</div>
                </div>
              </div>
            </div>

          </div>


          <div className="list4 col">
            <div className="accordion accordion-flush " id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">

                  <div className="text">
                    <i className="fa-solid fa-star"></i> <strong className="mylist">Getting Started</strong>
                  </div>

                </h2>


                <div id="flush-collapseOne" className="accordion-collapse collapse">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo5" aria-expanded="false" aria-controls="flush-collapseTwo5">
                    <strong>Create an Account</strong>
                  </button>
                </h2>
                <div id="flush-collapseTwo5" className="accordion-collapse collapse">
                  <div className="accordion-body fondo">Begin by creating your Reel Rhapsody account. This will allow you to personalize your movie preferences, save favorites, and enjoy a seamless streaming experience.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThrees" aria-expanded="false" aria-controls="flush-collapseThrees">
                    <strong>Watch for Free</strong>
                  </button>
                </h2>
                <div id="flush-collapseThrees" className="accordion-collapse collapse">
                  <div className="accordion-body fondo">Enjoy the magic of cinema without any subscription fees. Reel Rhapsody is committed to providing a free and accessible movie-watching experience for everyone.</div>
                </div>
              </div>
            </div>

          </div>

          <div>
            <div>

            </div>
          </div>

        </div>
      </div>

      <Link to="/" className="back-home">

        <button type="button" className="info-buton mt-3 mb-3">Back Home</button>


      </Link>

    </>
  );
};

// Exporta la función por defecto
export default technicalSupport;