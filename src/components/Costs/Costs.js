import React from 'react';
import './Costs.css'
import CostItem from "./CostItem";
import Card from "../UI/Card";

const Costs = ({costs}) => {
    return (
        <Card className={'costs'}>
            <CostItem costs={costs}/>
            <CostItem costs={costs}/>
            <CostItem costs={costs}/>
x
        </Card>
    );
};

export default Costs;