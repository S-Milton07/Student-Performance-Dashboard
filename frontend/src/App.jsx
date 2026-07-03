import { useState } from "react";
import StatisticsCard from "./StatisticsCard";
import StudentCard from "./studentCard";
import GradesCard from "./gradesCard";
import SearchCard from "./searchCard";
import PredictionCard from "./predictionCard";
import "./App.css";

function App() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [activeCard, setActiveCard] = useState("");
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);
 
  const sendBackend = async () => {

    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile)
      const response = await fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: formData
      }
      )
      const data = await response.json();
      console.log(data);
      setResult(data);
    } else {

      alert("Please choose a CSV file");

    }
    console.log("Button clicked")
  }

  const searchStudent = async () => {

    const response = await fetch("http://127.0.0.1:5000/search", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        search: search
      })

    });

    const data = await response.json();

    console.log(data);

    setSearchResult(data);
    setActiveCard("search");

  }

  return (
    <div className="app">

      <h1>Student Performance Dashboard</h1>
      <div className="upload-box">

        <input
          type="file"
          accept=".csv"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />

        <p className="file-name">
          {selectedFile ? selectedFile.name : "No File Selected"}
        </p>

        <button onClick={sendBackend}>
          Upload
        </button>

      </div>

      {result && (

        <>

          <div className="cards">

            <div
              className={`card ${activeCard === "statistics" ? "active" : ""}`}
              onClick={() =>
                setActiveCard(activeCard === "statistics" ? "" : "statistics")
              }
            >
              📊 Statistics
            </div>
            <div
              className={`card ${activeCard === "students" ? "active" : ""}`}
              onClick={() =>
                setActiveCard(activeCard === "students" ? "" : "students")
              }
            >
              👨‍🎓 Students
            </div>

            <div
              className={`card ${activeCard === "grades" ? "active" : ""}`}
              onClick={() =>
                setActiveCard(activeCard === "grades" ? "" : "grades")
              }
            >
              📈 Grades
            </div>
            <div
              className={`card ${activeCard === "search" ? "active" : ""}`}
              onClick={() =>
                setActiveCard(activeCard === "search" ? "" : "search")
              }
            >
              🔍 Search
            </div>

            <div><input
              type="text"
              placeholder="Search Student"
              value={search}
              onChange={(e) => setSearch(e.target.value)} /><br />
              <button onClick={searchStudent}>
                Search
              </button>
            </div>
            <div>
              <div
                className={`card ${activeCard === "prediction" ? "active" : ""}`}
                onClick={() => setActiveCard(activeCard === "prediction" ? "" : "prediction")}
              >
                🤖 Prediction
              </div>
            </div>
          </div>




          <div className="content">

            {activeCard === "statistics" &&
              <StatisticsCard result={result} />
            }

            {activeCard === "students" &&
              <StudentCard result={result} />
            }

            {activeCard === "grades" &&
              <GradesCard result={result} />
            }


            {activeCard === "search" &&
              <SearchCard searchResult={searchResult} />
            }

            {activeCard === "prediction" && (

              <PredictionCard />

            )}


          </div>

        </>

      )}

    </div>
  )
}
export default App;