import React, {useState} from 'react';
import './Costs.css'
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import CostList from "./CostList";

const Costs = (props) => {
    const [year, setYear] = useState('2023');

    function onChangeYear(newYear) {
        setYear(newYear)

    }

    let filterCosts = props.costs.filter(el => el.date.getFullYear().toString() === year)



    console.log(props.costs)

    return (
        <div>
            <Card className={'costs'}>
                <CostsFilter onChangeYear={onChangeYear} year={year}/>
<CostList filterCosts={filterCosts} />
            </Card>
        </div>
    );
};

export default Costs;