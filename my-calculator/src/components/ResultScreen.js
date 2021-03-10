import React from 'react'

const ResultScreen = (props) => {

    return (
        <div className="ResultScreen">
            <p className="ResultScreen__history">{props.history}</p>
            <p className="ResultScreen__result">{props.result}</p>
        </div>
    )
}

export default ResultScreen
