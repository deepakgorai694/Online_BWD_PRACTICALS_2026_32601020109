function checkEligibility() {
    var name = document.getElementById("studentName").value;
    var age = document.getElementById("age").value;
    var attendance = document.getElementById("attendance").value;
    var marks = document.getElementById("marks").value;

    if (name == "" || age == "" || attendance == "" || marks == "") {
        alert("Please fill in all the fields.");
        return;
    }

    age = Number(age);
    attendance = Number(attendance);
    marks = Number(marks);

    if (age < 1 || attendance < 0 || attendance > 100 ||
        marks < 0 || marks > 100) {
        alert("Please enter valid values.");
        return;
    }

    if (age >= 18 && attendance >= 75 && marks >= 40) {
        alert("Hello " + name + ", you are eligible.");
    }
    else {
        alert("Sorry " + name + ", you are not eligible.\n\n" +
              "Required: Age 18 or above, attendance 75% or above, " +
              "and marks 40 or above.");
    }
}

function clearForm() {
    document.getElementById("studentName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("attendance").value = "";
    document.getElementById("marks").value = "";
}
