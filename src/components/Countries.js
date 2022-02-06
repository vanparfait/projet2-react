import React, { useState } from "react";
import axios from "axios";
import Card from "./Card"

const Countries = () => {
    const [data, setData] = useState([]);

    
    axios
        .get("https://restcountries.eu/rest/v2/all?fields=name;population;flag")
        .then((rest) => setData(rest.data));
        console.log(data);
    

    

        return (
            <div className="countries">
                <ul className="countries-list">
                    {data.map((country) => (
                    <Card country={country} key={country.name} />
                    ))}
                </ul>
            </div>
        );
};

export default Countries;
