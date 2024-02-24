import {forwardRef, useImperativeHandle, useRef } from 'react'

const ResultModal = forwardRef(function ResultModal({targetTime, remainingTime, onReset}, ref) {
    const dialog = useRef()
    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal()
            }
        }
    })
    const youLost = remainingTime <= 0
    const formattedTime = (remainingTime / 1000).toFixed(2) 
    const yourScore =  Math.round(( 1 - remainingTime / (targetTime * 1000)) * 100)
    return (
        <dialog ref={dialog} className='result-modal' open>
         {youLost && <h2>You Lost</h2>}
         {!youLost && <h2>Your Score is: {yourScore}</h2>}
            <p>The target time was <strong>{targetTime}</strong></p>

            <p>You stopped the timer with <strong>{formattedTime} seconds left...</strong></p>

            <form method='dialog' onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal