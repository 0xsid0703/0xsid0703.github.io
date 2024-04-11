import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import bukktrips from '../../Assets/Projects/bukktrips.png';
import caratlane from '../../Assets/Projects/caratlane.png';
import dkarts24 from '../../Assets/Projects/dkarts24.png';
import drapefit from '../../Assets/Projects/drapefit.png';
import heatherridgepet from '../../Assets/Projects/heatherridgepet.png';
import palmerbet from '../../Assets/Projects/palmerbet.png';
import polycat from '../../Assets/Projects/polycat.png';
import pushpay from '../../Assets/Projects/pushpay.png';
import rottencitypizza from '../../Assets/Projects/rottencitypizza.png';
import todaytourism from '../../Assets/Projects/todaytourism.png';
import voiceair from '../../Assets/Projects/voiceair.png';
import w3wc from '../../Assets/Projects/w3wc.png';

function Projects () {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{color: 'white'}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bukktrips}
              isBlog={false}
              title="Bukktrips"
              description="BOOK, TRADE, RESELL HOTEL ROOMS WITH CRYPTO OR FIAT"
              demoLink="https://www.buktrips.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={caratlane}
              isBlog={false}
              title="Caratlane"
              description="CaratLane offers the best gold & diamond jewellery designs online. Check out our latest collection of rings, earrings, bangles, bracelets, necklaces at best "
              demoLink="https://www.caratlane.us/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dkarts24}
              isBlog={false}
              title="Dkarts24"
              description="Dkarts24 is your trusted destination for a diverse range of products, bringing convenience and quality to your doorstep"
              demoLink="https://dkarts24.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drapefit}
              isBlog={false}
              title="Drapefit"
              description="Order your FIT Box to fit your needs. Schedule online and cancel at any time."
              demoLink="https://www.drapefit.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heatherridgepet}
              isBlog={false}
              title="Heatherridge Pet"
              description="At Heather Ridge Pet Hospital, our veterinarians are dedicated to providing high-quality pet care to dogs, cats, and rodents of the Sioux"
              demoLink="https://www.heatherridgepet.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={palmerbet}
              isBlog={false}
              title="PalmerBet"
              description="Place bets on horse racing, NBA, NFL, Soccer, Cricket and so much more now at Palmerbet."
              demoLink="https://www.palmerbet.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={polycat}
              isBlog={false}
              title="Polycat"
              description="From fighting pangolins and talking rhinos to product close-ups and waterfalls from the sky - our showreel displays the incredible work of our studio."
              demoLink="https://www.polycat.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pushpay}
              isBlog={false}
              title="Pushpay"
              description="Sign into your personal account to make a donation, view transactions, manage recurring gifts or update your profile & payment method."
              demoLink="https://pushpay.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rottencitypizza}
              isBlog={false}
              title="Rotten City Pizza"
              description="Welcome to Rotten City Pizza at 6613 Hollis St in Emeryville, CA. Check out our website for Menu Browsing, Online Ordering, and ⏰ Store Hours."
              demoLink="https://rottencitypizza.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todaytourism}
              isBlog={false}
              title="Today tourism"
              description="Explore some of the best accommodations from around the world, read travel guides before you travel, book tours and flights"
              demoLink="https://www.todaytourism.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voiceair}
              isBlog={false}
              title="Voice air"
              description="The world's first text to speech app powered by Epidemic Sound. Realistic voiceovers in different languages, and award-winning tracks for your content."
              demoLink="https://voiceair.ai/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={w3wc}
              isBlog={false}
              title="W3WC"
              description="Ludhiana based web development company offers creative web design and professional website to your valuable businesses and constantly designed high-quality"
              demoLink="https://w3wc.io/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
