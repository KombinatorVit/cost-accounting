import React, {useState} from 'react';
import './CostForm.css'


const CostForm = () => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState('2022-01-01')

    function nameChangeHandler(e) {

        setName(e.currentTarget.value)
    }

    function amountChangeHandler(e) {
        setAmount(+e.currentTarget.value)
    }

    function dateChangeHandler(e) {
        setDate(+e.currentTarget.value)
    }

    return (
        <form>
            <div className={'new-cost__controls'}>
                <div className={'new-cost__control label'}>

                    <label>Название</label>
                    <input value={name} type={'text'} onChange={nameChangeHandler}/>
                </div>
                <div className={'new-cost__control label'}>

                    <label>Сумма</label>
                    <input value={amount} onChange={amountChangeHandler} type={'number'} min={0.01} step={0.01}/>
                </div>

                <div className={'new-cost__control label'}>

                    <label>Дата</label>
                    <input value={date} type={'date'} min={'2022-01-01'} step={'2023-01-31'}
                           onChange={dateChangeHandler}/>
                </div>
                <div className={'new-cost__actions'}>
                    <button type={'submit'}>
                        Добавить расход
                    </button>
                </div>

            </div>
        </form>
    );
};

export default CostForm;