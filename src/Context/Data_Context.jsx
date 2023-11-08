
import React, { createContext } from 'react';
import nft_data from '../Components/Database/nft_data'

//Context which allows data to be shared to our components
export const Data_Context = createContext(null)

const Data_Context_var = (props) =>{
    //import all nft's data to variable
    const dataValues = {nft_data};

    //children value received by component
    return(
        <Data_Context.Provider value={dataValues}>
            {props.children}
        </Data_Context.Provider>
    )
}

export default Data_Context_var;