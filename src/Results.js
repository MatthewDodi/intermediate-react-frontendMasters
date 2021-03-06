import React from 'react';
import Pet from './Pet.tsx';

export default function Results({ pets }) {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map(pet => (
          <Pet
            id={pet.id}
            animal={pet.type}
            key={pet.id}
            name={pet.name}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
          />
        ))
      )}
    </div>
  );
}
