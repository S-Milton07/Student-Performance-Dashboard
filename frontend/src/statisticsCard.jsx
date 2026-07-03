import React from 'react'

const StatisticsCard = ({result}) => {
    return (
        <div>
            <h2>📊 Statistics</h2>
            <h3>Rows : {result.rows}</h3>

            <h3>Columns : {result.columns}</h3>

            <h3>Average Marks : {result.average_marks}</h3>

            <h3>Highest Marks : {result.highest_marks}</h3>

            <h3>Lowest Marks : {result.lowest_marks}</h3>

            <h3>Pass Percentage:{result.pass_percentage}</h3>
        </div>
    )
}

export default StatisticsCard