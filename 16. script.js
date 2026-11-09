function calculateResult() {
    var name = document.getElementById("studentName").value;

    var mark1 = document.getElementById("subject1").value;
    var mark2 = document.getElementById("subject2").value;
    var mark3 = document.getElementById("subject3").value;
    var mark4 = document.getElementById("subject4").value;
    var mark5 = document.getElementById("subject5").value;

    if (name == "" || mark1 == "" || mark2 == "" || mark3 == "" ||
        mark4 == "" || mark5 == "") {
        document.getElementById("message").innerHTML =
            "Please enter the name and marks in all subjects.";
        document.getElementById("result").style.display = "none";
        return;
    }

    mark1 = Number(mark1);
    mark2 = Number(mark2);
    mark3 = Number(mark3);
    mark4 = Number(mark4);
    mark5 = Number(mark5);

    if (mark1 < 0 || mark1 > 100 || mark2 < 0 || mark2 > 100 ||
        mark3 < 0 || mark3 > 100 || mark4 < 0 || mark4 > 100 ||
        mark5 < 0 || mark5 > 100) {
        document.getElementById("message").innerHTML =
            "Marks must be between 0 and 100.";
        document.getElementById("result").style.display = "none";
        return;
    }

    var total = mark1 + mark2 + mark3 + mark4 + mark5;
    var percentage = (total / 500) * 100;
    var grade;
    var status;

    if (mark1 < 35 || mark2 < 35 || mark3 < 35 ||
        mark4 < 35 || mark5 < 35) {
        grade = "F";
        status = "Fail";
    }
    else if (percentage >= 80) {
        grade = "A";
        status = "Pass";
    }
    else if (percentage >= 60) {
        grade = "B";
        status = "Pass";
    }
    else if (percentage >= 45) {
        grade = "C";
        status = "Pass";
    }
    else {
        grade = "D";
        status = "Pass";
    }

    document.getElementById("resultName").innerHTML = name;
    document.getElementById("total").innerHTML = total;
    document.getElementById("percentage").innerHTML = percentage.toFixed(2) + "%";
    document.getElementById("grade").innerHTML = grade;
    document.getElementById("status").innerHTML = status;

    document.getElementById("message").innerHTML = "";
    document.getElementById("result").style.display = "block";
}
