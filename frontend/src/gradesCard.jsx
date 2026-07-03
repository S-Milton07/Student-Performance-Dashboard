import React from 'react'
import PieChart from './pieChart'
import BarChart from "./BarChart";

const GradesCard = ({ result }) => {
    return (
        <div>
            <h2>📈 Grades</h2>
            <h3>Grade Distribution:</h3>
            <ol style={{ marginTop: "-15px", listStyle: "none", marginRight: "40px" }}>
                <li>A:{result.a}</li>
                <li>B:{result.b}</li>
                <li>C:{result.c}</li>
                <li>D:{result.d}</li>
                <li>F:{result.f}</li>
            </ol>
            <h2 style={{ marginTop: "30px" }}>
                🥧 Grade Distribution
            </h2>
            <PieChart result={result} />
            <h2 style={{ marginTop: "50px" }}>
                📊 Grade Comparison
            </h2>
            <BarChart result={result} />
        </div>
    )
}

export default GradesCard