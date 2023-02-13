import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import {useState} from "react";

function App() {
    const [costs, setCosts] = useState([{
        id: 'c1',
        date: new Date(2023, 2, 12),
        name: 'Macbook',
        amount: 999.99
    },
        {
            id: 'c2',
            date: new Date(2023, 2, 12),
            name: 'Mac',
            amount: 9.99
        },
        {
            id: 'c3',

            date: new Date(2023, 2, 12),
            name: 'Book',
            amount: 99.99
        }
    ])

    console.log(costs)

    function onSaveCostData(objData) {
        setCosts([...costs, objData])
    }

    return (
        <div>
            <NewCost onSaveCostData={onSaveCostData}/>
            <Costs costs={costs}/>
        </div>
    );
}

export default App;
