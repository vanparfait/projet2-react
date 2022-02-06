import React from 'react';

const Card = (props) => {
    const { country } = props;
    return (
        <div>
            <li className="card">
                <img src={country.flag} alt="flag"/>
            </li>  
            <div className="data-container">
                <ul>
                    <li>{country.name}</li>
                    <li>{country.capital}</li>
                    <li>{country.population}</li>
                </ul>
            </div>  
        </div>
    );
};

export default Card;