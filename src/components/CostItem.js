import React, {Fragment} from 'react';
import './CostItem.css'
import CostDate from "./CostDate";
import Card from "./Card";

const CostItem = ({costs}) => {


    return (
        <Card className={'cost-item'}>
            {costs.map((el => {
                return (
                    <Fragment key={el.description}>
                        <CostDate date={el.date}/>
                        <div className={'cost-item__description'}>
                            <h2>{el.description}</h2>
                            <div className={'cost-item__price'}>${el.amount}</div>
                        </div>
                    </Fragment>
                )
            }))}
        </Card>
    );
};

export default CostItem;