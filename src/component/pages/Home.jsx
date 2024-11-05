import React from 'react'
import "./Home.css"

export const Home = () => {
    return (
        <div className="main-container-home">
            <div className="container-row" id='main-cont-row1'>Container 1</div>

            <div className="container-column">
                <div className="title-container-home">
                    <p className="title-name">Yelyuanne</p>
                </div>
                <div className="container-row">
                    <div className="container">Container 3</div>
                    <div className="container">Container 4</div>
                </div>
            </div>
            <div className="container-row" id='main-cont-row2'>Container 2</div>
        </div>
    )
}
