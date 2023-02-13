import React from 'react';
import './NewCost.css'
import CostForm from "./CostForm";

const NewCost = (props) => {

    function onSaveCostData(obj) {
        const newDataCost = {
            ...obj,
            id: Math.random().toString()
        }
        props.onSaveCostData(newDataCost)
        console.log(newDataCost)
    }

    return (
        <div className={'new-cost'}>
            <CostForm onSaveCostData={onSaveCostData}/>
        </div>
    );
};

export default NewCost;