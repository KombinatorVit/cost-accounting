import CostItem from "./components/CostItem";

function App() {
    const costs = [{
        date: new Date(2023, 2, 12),
        description: 'Macbook',
        amount: 999.99
    },
        {
            date: new Date(2023, 2, 12),
            description: 'Mac',
            amount: 9.99
        },
        {
            date: new Date(2023, 2, 12),
            description: 'Book',
            amount: 99.99
        }
    ]


    return (
        <div>
            Kiss Kiss
            <CostItem costs={costs}/>
            <CostItem costs={costs}/>
            <CostItem costs={costs}/>
        </div>
    );
}

export default App;
