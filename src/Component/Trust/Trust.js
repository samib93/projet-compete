import React from 'react';
import Logo1 from '../../assets/img/logo1.png'
import Logo2 from '../../assets/img/logo2.png'
import Logo3 from '../../assets/img/logo3.png'
import Logo4 from '../../assets/img/logo4.png'

const companies = [
  {
    id: 1,
    name: 'EDF',
    logo:  `${Logo1}`
  },
  {
    id: 2,
    name: 'Crédit Mutuel',
    logo: `${Logo2}`
  },
  {
    id: 3,
    name: 'AIRBUS',
    logo: `${Logo3}`
  },
  {
    id: 4,
    name: 'Amazon',
    logo: `${Logo4}`
  },
];

const Trust = () => {
  return (
    <section className="py-16 text-center bg-gray-50">
      <h2 className="text-3xl mb-8">Ils nous font confiance.</h2>
      <div className="flex justify-evenly space-x-8">
        {companies.map(company => (
          <div key={company.id} className="flex items-center justify-center">
            <img src={company.logo} alt={company.name} className="h-10 flex justify-evenly" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trust;
