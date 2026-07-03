import React from 'react'

const StudentCard = ({result}) => {
    return (
        <div>
            <h2>👨‍🎓 Students</h2>
            <h3>Topper Name:{result.topper}</h3>

            <h3>Failed Students Count:{result.failed_count}</h3>
            <h3 >Failed Students:</h3>
            <ul style={{ marginTop: "-15px", listStyle: "none", marginRight: "40px" }}>
                {result.failed_student?.map((failed_student, index) => (
                    <li key={index}>{failed_student}</li>
                ))}

            </ul>
        </div>
    )
}

export default StudentCard