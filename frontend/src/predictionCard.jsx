import { useState } from "react";
import "./predictCard.css";
function PredictionCard() {

    const [age, setAge] = useState("");
    const [attendance, setAttendance] = useState("");
    const [studyHours, setStudyHours] = useState("");
    const [assignment, setAssignment] = useState("");
    const [internal, setInternal] = useState("");
    const [prediction, setPrediction] = useState("");
    const [loading, setLoading] = useState(false);
    const [reason, setReason] = useState("");
    const [confidence, setConfidence] = useState("");


    const predictStudent = async () => {
        setLoading(true);
        const response = await fetch("https://student-performance-dashboard-q0ts.onrender.com/predict", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                Age: age,
                Attendance: attendance,
                StudyHours: studyHours,
                Assignment: assignment,
                Internal: internal

            })

        });

        const data = await response.json();

        setPrediction(data.prediction);
        setReason(data.reason);
        setConfidence(data.confidence);
        setLoading(false);
    };

    return (
        <div>
            <h2>🤖 ML Prediction</h2>

            <div className="prediction-form">

                <label style={{ color: "black" }}>Age</label>
                <input
                    type="number"
                    min="18"
                    max="22"
                    placeholder="Enter Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <label style={{ color: "black" }}>Attendance (%)</label>
                <input
                    type="number"
                    min="0"
                    max="100"
                    placeholder="Enter Attendance"
                    value={attendance}
                    onChange={(e) => setAttendance(e.target.value)}
                />

                <label style={{ color: "black" }}>Study Hours</label>
                <input
                    type="number"
                    placeholder="Enter Study Hours"
                    value={studyHours}
                    onChange={(e) => setStudyHours(e.target.value)}
                />

                <label style={{ color: "black" }}>Assignment Marks</label>
                <input
                    type="number"
                    placeholder="Enter Assignment Marks"
                    value={assignment}
                    onChange={(e) => setAssignment(e.target.value)}
                />

                <label style={{ color: "black" }}>Internal Marks</label>
                <input
                    type="number"
                    min="0"
                    max="100"
                    placeholder="Enter Internal Marks"
                    value={internal}
                    onChange={(e) => setInternal(e.target.value)}
                />

                <button
                    onClick={predictStudent}
                    disabled={loading}
                >
                    {loading ? "Predicting..." : "Predict"}
                </button>

                <h2>
                    {prediction && (

                        <div>

                            <h2>Prediction</h2>

                            <h1>

                                {prediction === "PASS"

                                    ? "✅ PASS"

                                    : "❌ FAIL"}

                            </h1>

                            <h3>

                                Reason :

                                {reason}

                            </h3>

                    

                        </div>

                    )}
                </h2>

            </div>
        </div>
    );
}

export default PredictionCard;