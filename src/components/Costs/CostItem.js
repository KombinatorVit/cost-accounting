import React from 'react';
import './CostItem.css'
import CostDate from "./CostDate";
import Card from "../UI/Card";

const CostItem = (props) => {
    console.log(props)

    return (
        <li>
            <Card className={'cost-item'}>
                <CostDate date={props.const.date}/>
                <div className={'cost-item__description'}>
                    <h2>{props.const.name}</h2>
                    <div className={'cost-item__price'}>${props.const.amount}</div>
                </div>
            </Card>
        </li>
    );
};

export default CostItem;