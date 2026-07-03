import pandas as pd
import random

names = [
    "Hari","Ravi","Arun","Kumar","Vijay","Ajay","Karthik","Praveen",
    "Siva","Rahul","Naveen","Dinesh","Akash","Surya","Manoj","Bharath",
    "Priya","Divya","Anu","Keerthana","Nisha","Meena","Pooja","Swathi",
    "Harini","Deepika","Lavanya","Aishwarya","Sneha","Reshma"
]

students = []

for i in range(150):

    name = random.choice(names) + str(i+1)

    age = random.randint(18, 22)

    attendance = random.randint(40, 100)

    study_hours = random.randint(1, 8)

    assignment = random.randint(30, 100)

    internal = random.randint(25, 100)

    # Marks calculate pannrom
    marks = int(
        attendance * 0.2 +
        study_hours * 5 +
        assignment * 0.3 +
        internal * 0.5
    )

    if marks > 100:
        marks = 100

    # Result rule
    if attendance >= 70 and internal >= 50 and study_hours >= 2:
      result = "PASS"
    else:
      result = "FAIL"

    students.append([
        name,
        age,
        attendance,
        study_hours,
        assignment,
        internal,
        marks,
        result
    ])

df = pd.DataFrame(
    students,
    columns=[
        "Name",
        "Age",
        "Attendance",
        "StudyHours",
        "Assignment",
        "Internal",
        "Marks",
        "Result"
    ]
)

df.to_csv("student.csv", index=False)

print("✅ 150 Student Dataset Generated")