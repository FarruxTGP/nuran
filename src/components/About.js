import React from "react";
import Footer from "./Footer";
import "./styles/about.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
function About() {
  return (
    <div className="about">
      <div
        className="header__about"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <iframe
          src="https://www.youtube.com/embed/SHUJ_qZKo_I"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="txt__about">
          <h1>
            о нас <br />
            <span> nuran group </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            orci scelerisque non malesuada neque. Sed vitae nulla amet
            urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Imperdiet orci scelerisque non malesuada neque. Sed vitae nulla amet
            urna.
          </p>
        </div>
      </div>
      <div
        className="static"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div className="static__item">
          <h1>1456</h1>
          <small>Lorem ipsum dolor sit amet, consectetur adipiscing</small>
        </div>
        <div className="static__item">
          <h1>1456</h1>
          <small>Lorem ipsum dolor sit amet, consectetur adipiscing</small>
        </div>
        <div className="static__item">
          <h1>1456</h1>
          <small>Lorem ipsum dolor sit amet, consectetur adipiscing</small>
        </div>
        <div className="static__item">
          <h1>1456</h1>
          <small>Lorem ipsum dolor sit amet, consectetur adipiscing</small>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-center">
        <div className="faq">
          <h1>
            часто задаваемые <span>вопросы</span>
          </h1>
          <Accordion allowMultipleExpanded allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Когда лучше начинать строительство?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <iframe
                  src="https://www.youtube.com/embed/SHUJ_qZKo_I"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Когда лучше начинать строительство?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <iframe
                  src="https://www.youtube.com/embed/SHUJ_qZKo_I"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Когда лучше начинать строительство?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <iframe
                  src="https://www.youtube.com/embed/SHUJ_qZKo_I"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Когда лучше начинать строительство?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <iframe
                  src="https://www.youtube.com/embed/SHUJ_qZKo_I"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Когда лучше начинать строительство?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <iframe
                  src="https://www.youtube.com/embed/SHUJ_qZKo_I"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <Footer data-aos="fade-up" data-aos-anchor-placement="top-center" />
    </div>
  );
}

export default About;
