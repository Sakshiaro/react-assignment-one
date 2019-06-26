import React from 'react';
import  './UserOutput.css'

const useroutput = (props) => {
    return(
        <div className="useroutput">
            <p>My name is {props.name}</p>
            <p>I want to become a react expert</p>
        </div>
    )
};

export default useroutput;