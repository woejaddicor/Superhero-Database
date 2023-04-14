import React, { useState, useContext, createContext } from 'react';

const SuperheroContext = createContext();

export const SuperheroProvider = ({ children }) => {
	const [superheroContext, setSuperheroContext] = useState([]);

	return (
		<SuperheroContext.Provider value={{ superheroContext, setSuperheroContext }}>
			{children}
		</SuperheroContext.Provider>
	);
};

export const useSuperheroes = () => useContext(SuperheroContext);
