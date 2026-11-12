// Array containing subject details
const subjects = [
    {
        name: "Entrepreneurship",
        code: "C04ID0001",
        description: "This subject introduces the basic ideas of starting and managing a business."
    },
    {
        name: "Mathematics 1",
        code: "C05BC3101",
        description: "This subject covers mathematical concepts used in computer applications."
    },
    {
        name: "AOC",
        code: "C05BC3102",
        description: "AOC introduces the basic organisation and working of a computer."
    },
    {
        name: "Programming",
        code: "C05BC3103",
        description: "This subject develops basic programming and problem-solving skills."
    },
    {
        name: "BWD Theory",
        code: "C05BC3104",
        description: "This subject introduces the fundamentals of web designing and web technologies."
    },
    {
        name: "Environmental Studies",
        code: "C05BC3105",
        description: "This subject explains the environment and the importance of its protection."
    }
];

// Get elements from the webpage
const subjectList = document.getElementById("subjectList");
const subjectInfo = document.getElementById("subjectInfo");

// Display information when the selected subject changes
subjectList.addEventListener("change", function () {
    const selectedIndex = subjectList.value;

    if (selectedIndex === "") {
        subjectInfo.innerHTML = "<p>Select a subject from the list to see its information.</p>";
        return;
    }

    const subject = subjects[selectedIndex];

    subjectInfo.innerHTML = `
        <h2>${subject.name}</h2>
        <p><strong>Subject Code:</strong> ${subject.code}</p>
        <p><strong>Description:</strong> ${subject.description}</p>
    `;
});
