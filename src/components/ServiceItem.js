import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import Contact from "./Contact";
import Footer from "./Footer";
function ServiceItem() {
  return (
    <div>
      <div className="about">
        <div className="header__about">
          <img
            src="https://get.wallhere.com/photo/wooden-surface-room-wood-house-stairs-interior-design-cottage-estate-lobby-design-floor-home-hardwood-loft-2560x1600-px-farmhouse-flooring-wood-flooring-laminate-flooring-property-living-room-548993.jpg"
            alt=""
          />
          <div className="txt__about">
            <h1 style={{ fontSize: "2.3vw", width: "60%" }}>
              <span> Услуги дизайнера </span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              orci scelerisque non malesuada neque. Sed vitae nulla amet
              urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Imperdiet orci scelerisque non malesuada neque. Sed vitae nulla
              amet urna.
            </p>
            <button className="btn__ab">BOOK</button>
          </div>
        </div>
        <div className="center">
          <h1>
            <span>Услуги</span>
          </h1>
        </div>
        <div className="center">
          <div className="faq center" style={{width: "100%"}}>
            <Accordion allowMultipleExpanded allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Когда лучше начинать строительство?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="bg__accordion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum viverra amet, semper scelerisque fames elementum risus. Lectus lacinia ipsum est tincidunt eros, justo tellus id tellus.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Когда лучше начинать строительство?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="bg__accordion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum viverra amet, semper scelerisque fames elementum risus. Lectus lacinia ipsum est tincidunt eros, justo tellus id tellus.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Когда лучше начинать строительство?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="bg__accordion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum viverra amet, semper scelerisque fames elementum risus. Lectus lacinia ipsum est tincidunt eros, justo tellus id tellus.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Когда лучше начинать строительство?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="bg__accordion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum viverra amet, semper scelerisque fames elementum risus. Lectus lacinia ipsum est tincidunt eros, justo tellus id tellus.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Когда лучше начинать строительство?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="bg__accordion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum viverra amet, semper scelerisque fames elementum risus. Lectus lacinia ipsum est tincidunt eros, justo tellus id tellus.</p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default ServiceItem;
