import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/OldVSLogo.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 10rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 10rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 4rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <h2 className="about__heading">What is Versus Robotics?</h2>
              <p className="about__subheading">
                Tomorrow's Products and <span>Simulation Studio. </span>
              </p>
              <div className="about__info">
                <PText>
                  Versus Robotics is a Robotics company focused on day to day
                  innovation. We bring the future to you. We offer the most true
                  to feel simulators at Ambiance, our VR Studio.
                  <br /> <br />
                  We also design and manufacture next-gen hobbies.
                  <br />
                  <br />
                  Our priority is your feelings and state of being.
                </PText>
              </div>
              <Button btnText="View our Products" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Simulator Rates</h1>

              <AboutInfoItem
                title="Day Pass"
                items={['Unlimited use by the day. ']}
              />
              <AboutInfoItem title="Hourly" items={['Guaranteed 3 sessions']} />
              <AboutInfoItem
                title="Single Sim"
                items={['Specified amount of time.']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Robotics Industries</h1>

              <AboutInfoItem
                title="VR"
                items={[
                  'Simulators',
                  'Accessories',
                  'Computer Vision',
                  'AI Instructor',
                ]}
              />
              <AboutInfoItem
                title="Mfg"
                items={['3d Printing', 'Atticrawler', 'Synthesis']}
              />
              <AboutInfoItem
                title="Accessories"
                items={['Sedes', 'Lodi ', 'VS Special', 'Velocitas']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">
                Upcoming Release Schedule
              </h1>

              <AboutInfoItem
                title="2021-2022"
                items={['Sedes, Simbay, VS Special, GolfAI.']}
              />
              <AboutInfoItem
                title="2022-2023"
                items={['Lodi Helmet, ElLuminate, V^2 Moto.']}
              />
              <AboutInfoItem
                title="2023"
                items={['Print-E, Hybrid mfg, Attic Crawler.']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
      <Footer />
    </>
  );
}
