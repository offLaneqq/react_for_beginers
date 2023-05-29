import React, {useState, useEffect} from 'react'

function HookIntervalCounter() {
    const [count, addCount] = useState(0)

    const tick = () => {
        addCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    

  return (
    <div>
        <h2>
            {count}
        </h2>
    </div>
  )
}

export default HookIntervalCounter