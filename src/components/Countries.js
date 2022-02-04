import React, { useState } from 'react';


const Countries = () => {
    const [data, setData] = useState('hello');
    const sayGoodbye = () => {
        setData('GoodBye');
    };
    
    
    return (
        <div>
           { data } 
           <button onClick={sayGoodbye}>Dire au revoir</button>
        </div>
    );
};

export default Countries;