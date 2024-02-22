import React, { useState, useRef } from 'react'
import ResultModal from '../Modal/ResultModal'

const TimerChallenger = ({ title, targetTimer }) => {
    const timer = useRef()
    const dialog = useRef()
    const [timerExpired, setTimerExpired] = useState(false)
    const [timeStarted, setTimeStarted] = useState(false)

    const handleStartTimer = () => {
        timer.current = setTimeout(() => {
            setTimerExpired(true)
            dialog.current.showModal()
        }, targetTimer * 1000)
        setTimeStarted(true)
    }

    const handleStopTimer = () => {
        clearTimeout(timer.current)
    }
    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTimer} title="Lost" />
        <section className='challenge'>
            <h2>{title}</h2>
            <p className='challenge-time'>
                {targetTimer} second{targetTimer > 1 ? "s" : ""}

            </p>
                {timerExpired && <p>You Lost...</p>}
            <p>
                    <button onClick={timeStarted ? handleStopTimer : handleStartTimer}>
                        {timeStarted ? "Stop" : "Start"}  Challenge
                </button>
            </p>

                <p className={timeStarted ? "active" : undefined}>
                    {timeStarted ? "Time is running..." : " Timer inactive."}
            </p>
        </section>
        </>


    )
}

export default TimerChallenger