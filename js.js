window.onload = function() {
    const studentData = {
        rollNo: "2423495011021",
        enrollmentNo: "RMPU23165791",
        studentName: "Divakar Singh Chauhan",
        fatherName: "Dashrath Chauhan",
        motherName: "Sarojevati",
        collegeName: "(2349) I.T.M. College, Aligarh-Palwal-Delhi Road, Karsua, Aligarh",
        category: "REGULAR",
        resultStatus: "PASS",
        semester: 1,
        maxMinMarks: "600 / 300",
        obtainedMarks: 473,
        courseDetails: [
            { name: "COMPUTER FUNDAMENTALS AND MS-OFFICE", maxMarks: 100, minMarks: 40, obtainedMarks: 87 }
        ]
    };

    // Set student information
    document.getElementById('roll-no').innerText = studentData.rollNo;
    document.getElementById('enrollment-no').innerText = studentData.enrollmentNo;
    document.getElementById('student-name').innerText = studentData.studentName;
    document.getElementById('father-name').innerText = studentData.fatherName;
    document.getElementById('mother-name').innerText = studentData.motherName;
    document.getElementById('college-name').innerText = studentData.collegeName;
    document.getElementById('category').innerText = studentData.category;
    document.getElementById('result-status').innerText = studentData.resultStatus;
    document.getElementById('semester').innerText = studentData.semester;
    document.getElementById('max-min').innerText = studentData.maxMinMarks;
    document.getElementById('marks-obtained-semester').innerText = studentData.obtainedMarks;

    // Populate course details
    const courseTable = document.querySelector('table.print');
    studentData.courseDetails.forEach(course => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="bb br p-1 align-middle">${course.name}</td>
            <td class="bb p-1 align-middle">50<br />50</td>
            <td class="bb p-1 align-middle">${course.maxMarks}</td>
            <td class="bb p-1 align-middle">${course.minMarks}</td>
            <td class="bb p-1 align-middle">${course.obtainedMarks}</td>
        `;
        courseTable.appendChild(row);
    });
};
