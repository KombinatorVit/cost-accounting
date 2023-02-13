import React from 'react';
import CostItem from "./CostItem";
import './CostList.css'

const CostList = (props) => {

    const costsElem = props.filterCosts.map((el) => {
        return (
            <CostItem key={el.id} const={el}/>
        )
    })

    if (!props.filterCosts.length) return (<h2 className={'cost-list__fallback'}>Не было трат в этом году!</h2>)
    return (
        <ul className={'cost-list'}>
            {costsElem}
        </ul>
    );
};

export default CostList;