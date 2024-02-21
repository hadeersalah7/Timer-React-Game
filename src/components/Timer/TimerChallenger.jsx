import React from 'react'

const TimerChallenger = ({ title, targetTimer }) => {
    return (
        <section className='challenge'>
            <h2>{title}</h2>
            <p className='challenge-time'>
                {targetTimer} second{targetTimer > 1 ? "s" : ""}
            </p>
            <p>
                <button>
                    Start Challenge
                </button>
            </p>

            <p className=''>
                Time is running... / Timer inactive.
            </p>
        </section>

    )
}

export default TimerChallenger