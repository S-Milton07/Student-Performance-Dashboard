from flask import Flask,request
from flask_cors import CORS
import pandas as pd
import joblib

app=Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return {
        "message":"Backend is Running Successfully!"
    }
df=None
model = joblib.load("student_model.pkl")
@app.route("/upload",methods=["POST"])
def upload():
    global df
    file=request.files["file"]
    df=pd.read_csv(file)
    pass_count = int((df["Marks"] >= 35).sum())
    average=df["Marks"].mean()
    highest=df["Marks"].max()
    lowest=df["Marks"].min()
    average=float(average)
    highest=int(highest)
    lowest=int(lowest)
    topper_name=str(df[df["Marks"]==highest]["Name"].iloc[0])
    print(topper_name)
    failed_students=(df[df["Marks"]<=35])
    failed_counts=len(failed_students)
    failed_students=list(failed_students["Name"])
    a_count=len(df[df["Marks"]>=90])
    b_count=len(df[df["Marks"].between(75, 89)])
    c_count=len(df[df["Marks"].between(50, 74)])
    d_count=len(df[df["Marks"].between(35,49)])
    f_count=len(df[df["Marks"]<35])
        
    return{
        "rows":len(df),
        "columns":len(df.columns),
        "column_names":list(df.columns),

        "average_marks":average,
        "highest_marks":highest,
        "lowest_marks":lowest,

        "pass_percentage":pass_count,
        "topper":topper_name,

        "failed_count":failed_counts,
        "failed_student":failed_students,

        "a":a_count,
        "b":b_count,
        "c":c_count,
        "d":d_count,
        "f":f_count
        
    }
@app.route("/search", methods=["POST"])
def search():

    global df

    data = request.get_json()

    search_name = data["search"]

    student = df[df["Name"].str.lower() == search_name.lower()]

    # Student illa na
    if student.empty:
        return {
            "message": "Student Not Found"
        }

    # Student irundha
    return {
    "name": student["Name"].iloc[0],
    "age": int(student["Age"].iloc[0]),
    "attendance": int(student["Attendance"].iloc[0]),
    "internal": int(student["Internal"].iloc[0]),
    "marks": int(student["Marks"].iloc[0]),
    "result": student["Result"].iloc[0]
}
@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    age = int(data["Age"])
    attendance = int(data["Attendance"])
    study = int(data["StudyHours"])
    assignment = int(data["Assignment"])
    internal = int(data["Internal"])

    prediction = model.predict([[

        age,
        attendance,
        study,
        assignment,
        internal

    ]])[0]



    result = "PASS" if prediction == 1 else "FAIL"

    # Reason
    if result == "FAIL":

        if attendance < 70:
            reason = "Attendance below requirement"

        elif internal < 50:
            reason = "Internal marks below requirement"

        elif study < 3:
            reason = "Study hours too low"

        else:
            reason = "Overall performance is low"

    else:

        reason = "Eligible for passing"

    return {

        "prediction": result,
        "reason": reason

    }
if __name__=="__main__":
    app.run(debug=True)