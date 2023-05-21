import React from 'react'
import './predict.css'
import Navbar from '../../Components/Navbar/navbar'

export default function Prediction() {

    return (
        <>
            <Navbar />
            <div className="predict-header">
                <h1>Sales Forecasting</h1>
            </div>
            <div className="predict-button">
                <a href="/screen1"><button>Daily Prediction</button></a>
                <a href="/screen2"><button>Monthly Prediction</button></a>
                <a href="/screen3"><button>Yearly Prediction</button></a>
                <a href="/screen4"><button>Time-Span Prediction</button></a>
            </div>
            <div class="ocean">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
        </>
    )
}
