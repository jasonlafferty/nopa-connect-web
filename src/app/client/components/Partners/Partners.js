import React from 'react';

const partners = [{
    name: 'Airbnb',
    logo: require('../../../static/images/Airbnb.png')
  },
  {
    name: 'Metro',
    logo: require('../../../static/images/Metro.png')
  },
  {
    name: 'Pariti',
    logo: require('../../../static/images/Pariti.png')
  },
  {
    name: 'Unshackled',
    logo: require('../../../static/images/Unshackled.png')
  }
];

const partnerLogos = partners.map((partner) =>
    <div><img className="Nopa" alt={partner.name} src={partner.logo} /></div>
);

const Partners = (props) => {
  return (
    <section className="partners">
      <div>
        <span>Our partners:</span>
      </div>
      <div>
        {partnerLogos}
      </div>
    </section>
  );
};

export default Partners;
