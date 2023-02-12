import React from 'react';
import './CostItem.css'
import CostDate from "./CostDate";

const CostItem = ({costs}) => {


    return (
        <div className={'cost-item'}>
            {costs.map((el => {
                return (
                    <>
                        <CostDate date={el.date}/>
                        <div className={'cost-item__description'}>
                            <h2>{el.description}</h2>
                            <div className={'cost-item__price'}>${el.amount}</div>
                        </div>
                    </>
                )
            }))}
        </div>
    );
};

export default CostItem;