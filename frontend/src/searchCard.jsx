import React from "react";
import "./searchCard.css";

const SearchCard = ({ searchResult }) => {

    if (!searchResult) return null;

    if (searchResult.message) {
        return (
            <div className="search-card">
                <h2>{searchResult.message}</h2>
            </div>
        );
    }

    return (

        <div className="search-card">

            <div className="profile-icon">
                👤
            </div>

            <h2>{searchResult.name}</h2>

            <div className="search-details">

                <p><strong>Age :</strong> {searchResult.age}</p>

                <p><strong>Attendance :</strong> {searchResult.attendance}%</p>

                <p><strong>Internal :</strong> {searchResult.internal}</p>

                <p><strong>Marks :</strong> {searchResult.marks}</p>

                <p>

                    <strong>Result :</strong>

                    {searchResult.result === "PASS"
                        ? " ✅ PASS"
                        : " ❌ FAIL"}

                </p>

            </div>

        </div>

    );

}

export default SearchCard;