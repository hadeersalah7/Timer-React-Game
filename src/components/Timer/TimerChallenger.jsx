import React, { useState, useRef } from 'react'
import ResultModal from '../Modal/ResultModal'

const TimerChallenger = ({ title, targetTimer }) => {
    const timer = useRef()
    const dialog = useRef()
    // const [timerExpired, setTimerExpired] = useState(false)
    // const [timeStarted, setTimeStarted] = useState(false)
    const [timeRemaining, setTimeRemaining] = useState(targetTimer * 1000)

const timeIsActive = timeRemaining > 0 && timeRemaining < targetTimer * 1000
    if(timeRemaining <= 0){
      clearInterval(timer.current)
      setTimeRemaining(targetTimer * 1000)
      dialog.current.open()
    }
    const handleStartTimer = () => {
        timer.current = setInterval(() => {
            // setTimerExpired(true)
            // dialog.current.open()
            setTimeRemaining((prevtime) => prevtime -10)
        },  10)
        // setTimeStarted(true)
    }

    const handleStopTimer = () => {
        dialog.current.open()
        clearInterval(timer.current)
    }
    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTimer} title="Lost" />
        <section className='challenge'>
            <h2>{title}</h2>
            <p className='challenge-time'>
                {targetTimer} second{targetTimer > 1 ? "s" : ""}

            </p>
                {/* {timerExpired && <p>You Lost...</p>} */}
            <p>
                    <button onClick={timeIsActive ? handleStopTimer : handleStartTimer}>
                        {timeIsActive ? "Stop" : "Start"}  Challenge
                </button>
            </p>

                <p className={timeIsActive ? "active" : undefined}>
                    {timeIsActive ? "Time is running..." : " Timer inactive."}
            </p>
        </section>
        </>


    )
}

export default TimerChallenger