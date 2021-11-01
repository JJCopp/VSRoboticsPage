import React from 'react';
import {
  GiAk47,
  GiF1Car,
  GiGolfFlag,
  GiCommercialAirplane,
} from 'react-icons/gi';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 5rem 0;
  .services__allItems {
    display: flex;
    gap: 5rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle
          heading="Simulations"
          subheading="With an emphasis on accuracy, checkout out our"
        />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<GiGolfFlag />}
            title="Golf"
            desc="A.I. and in person lesons avilable. Evaluate your swing and clubhead data on the spot or after your session!"
          />
          <ServicesSectionItem
            icon={<GiF1Car />}
            title="Race Car"
            desc="Take a seat in Sedes, our own VR Monocoque. Haptic feedback for enhanced realism. If you got a track session in any car; which car and track would you choose?"
          />
          <ServicesSectionItem
            icon={<GiAk47 />}
            title="Shooting Gallery"
            desc="Test your aim with our skills challenges."
          />
          <ServicesSectionItem
            icon={<GiCommercialAirplane />}
            title="Flight Simulator"
            desc="Use VR and Sedes to Fly around in 1:1 Replica Earth or make the A-10 go BRRRRT."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
