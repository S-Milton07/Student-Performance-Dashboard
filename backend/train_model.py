import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
import joblib

df = pd.read_csv("student.csv")

df["Result"] = df["Result"].map({
    "FAIL":0,
    "PASS":1
})

X = df[["Age","Attendance","StudyHours","Assignment","Internal"]]

y = df["Result"]

X_train,X_test,y_train,y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

model = DecisionTreeClassifier()

model.fit(X_train,y_train)

joblib.dump(model,"student_model.pkl")

print("Model Trained")