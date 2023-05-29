import React, {useState, useMemo} from 'react'

function MemoCounter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        return counterOne % 2 === 0
    }, [counterOne])
    return (
        <div>
            <div>
                <h2>CounterOne - {counterOne}</h2>
                <button onClick={incrementOne}>CounterOne</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <h2>CounterTwo - {counterTwo}</h2>
                <button onClick={incrementTwo}>CounterTwo</button>
            </div>
        </div>
    )
}

export default MemoCounter