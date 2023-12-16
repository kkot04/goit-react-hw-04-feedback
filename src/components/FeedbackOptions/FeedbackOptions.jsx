import React from "react";
import s from './FeedbackOptions.module.css'

export const FeedbackOptions = ({addFeedback}) => {
    return (
        <>
        {/* {options.map(item => (
          <div key={item}>
            <button
              type="button"
              name={item}
              onClick={onLeaveFeedback}
              className={s.button}
            >
              {item}
            </button>
          </div>
        ))} */}
        <div>
          <div>
            <button className={s.button} name='good' onClick={addFeedback}>Good</button>
            <button className={s.button} name='neutral' onClick={addFeedback}>Neutral</button>
            <button className={s.button} name='bad' onClick={addFeedback}>Bad</button>
          </div>
        </div>
      </>
    )
}