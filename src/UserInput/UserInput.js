import React from 'react';
import useroutput from '../UserOutput/UserOutput';

const userInput = (props) => {
    return(
        <div className="userinput">
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default userInput;