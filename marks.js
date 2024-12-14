const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', function () {
  const subjectInput = document.getElementById('subject');
  const marksInput = document.getElementById('subject-marks');
  const marksPracticalInput = document.getElementById('internal-marks');
  const tableshow = document.getElementById("student-todo");

  const subject = subjectInput.value.trim();
  const marks = marksInput.value.trim();
  const practical = marksPracticalInput.value.trim();

  if (subject === '' || marks === '' || practical === '') {
    alert('Please fill out all fields.');
    return;
  }

  const todoItem = document.createElement('tr');
  tableshow.style.display = '';
  const totalMarks = parseInt(marks) + parseInt(practical);

  todoItem.innerHTML += `
        <td style="border: 1px solid black;" class="student-marks">${subject}</td>
        <td style="border: 1px solid black;" class="student-marks">${marks}</td>
        <td style="border: 1px solid black;" class="student-marks">${practical}</td>
        <td style="border: 1px solid black;" class="student-marks">${totalMarks}</td>
        <td style="border: 1px solid black;">
            <button class="delete-btn">Delete</button>
        </td>
    `;

  todoItem.querySelector('.delete-btn').addEventListener('click', function () {
    todoList.removeChild(todoItem);
  });

  todoList.appendChild(todoItem);

  subjectInput.value = '';
  marksInput.value = '';
  marksPracticalInput.value = '';
});


const addSemButton = document.getElementById('add-sem-btn');
const SemtodoList = document.getElementById('sem-todo-list');

addSemButton.addEventListener('click', function () {
  const semInput = document.getElementById('Semesterid');
  const SemmarksInput = document.getElementById('Total-Semester-Marks');
  const ResultStauts = document.getElementById('Semester-Result-Stauts');
  const tableshow = document.getElementById("sem-todo");

  const subject = semInput.value.trim();
  const marks = SemmarksInput.value.trim();
  const result = ResultStauts.value.trim();

  if (subject === '' || marks === '' || result === '') {
    alert('Please fill out all fields.');
    return;
  }

  const todoItem = document.createElement('tr');
  tableshow.style.display = '';
  const totalMarks = parseInt(marks) + parseInt(result);

  todoItem.innerHTML += `
        <td style="border: 1px solid black;" class="sem-marks">${subject}</td>
        <td style="border: 1px solid black;" class="sem-marks">${marks}</td>
        <td style="border: 1px solid black;" class="sem-marks">${result}</td>
        <td style="border: 1px solid black;">
            <button class="delete-btn">Delete</button>
        </td>
    `;

  todoItem.querySelector('.delete-btn').addEventListener('click', function () {
    SemtodoList.removeChild(todoItem);
  });

  SemtodoList.appendChild(todoItem);

  semInput.value = '';
  SemmarksInput.value = '';
  ResultStauts.value = '';
});



function student_details() {
  const todoItem = document.createElement('tr');
  let session = document.getElementById("input-session").value;
  let semester = document.getElementById("input-sem").value;
  let rollNo = document.getElementById("input-roll-no").value;
  let enrollmentNo = document.getElementById("input-enrollment-no").value;
  let studentName = document.getElementById("input-student-name").value;
  let fatherName = document.getElementById("input-father-name").value;
  let motherName = document.getElementById("input-mother-name").value;
  let collegeName = document.getElementById("input-college-name").value;
  let category = document.getElementById("input-category").value;
  let practical = document.getElementById("input-practical-marks").value;
  let stauts = document.getElementById("input-result-stauts").value;

  if (enrollmentNo === '' || studentName === '' || rollNo === '' || fatherName === '' || motherName === '' || practical === '') {
    alert('Please fill out all fields.');
    return;
  }
  else {
    let array = [];
    document.querySelectorAll(".student-marks").forEach(element => {
      array.push(element.innerHTML);
    });
    const record_table = document.getElementById("record-table");
    for (let i = 0; i < array.length; i += 4) {
      const subject_name = array[i];
      const theory_mark = array[i + 1];
      const practical_mark = array[i + 2];
      const total_marks = parseInt(theory_mark) + parseInt(practical_mark);

      record_table.innerHTML += `
    <tr>
        <td class="bb br p-1 align-middle" id="subject1">${subject_name}</td>
        <td class="bb p-1 align-middle" style="width: 30px;">Theory<br />Internal</td>
        <td class="bb p-1 align-middle" style="width: 20px;">50<br />50</td>
        <td class="bb p-1 align-middle fs-4" style="width: 10px;">}</td>
        <td class="bb br p-1 text-center align-middle fw-bold" style="width: 20px;">100</td>
        <td class="bb ps-1 align-middle" style="width: 20px;">20<br />20</td>
        <td class="bb p-1 align-middle fs-4" style="width: 10px;">}</td>
        <td class="bb br p-1 text-center align-middle fw-bold" style="width: 20px;">40</td>
        <td class="bb p-1 align-middle" style="width: 20px;">
            <span id="subject1-theory">${theory_mark}</span><br />
            <span id="subject1-practical">${practical_mark}</span>
        </td>
        <td class="bb p-1 align-middle align-middle  fs-4" style="width: 10px;">}</td>
        <td class="bb p-1 text-center align-middle fw-bold" style="width: 30px;">
            <span id="subject1-total">${total_marks}</span>
        </td>
    </tr>`;
    }



    let array1 = [];
    document.querySelectorAll(".sem-marks").forEach(element => {
      array1.push(element.innerHTML);
    });
    const sem_table = document.getElementById("Semester-table");
    for (let i = 0; i < array1.length; i += 3) {
      const semester_marks = array1[i];
      const obtained = array1[i + 1];
      const status = array1[i + 2];

      sem_table.innerHTML += `
    <tr>
      <td class="text-center bb bl br"><span>${semester_marks}</span></td>
      <td class="text-center bb br"><span>600 / 300</span></td>
      <td class="text-center bb br"><span>${obtained}</span></td>
      <td class="text-center bb br"><span>${status}</span></td>
    </tr>`;
    }

    document.getElementById("session").innerText = session;
    document.getElementById("sem").innerText = semester;
    document.getElementById("roll-no").innerText = rollNo;
    document.getElementById("enrollment-no").innerText = enrollmentNo;
    document.getElementById("student-name").innerText = studentName;
    document.getElementById("father-name").innerText = fatherName;
    document.getElementById("mother-name").innerText = motherName;
    document.getElementById("college-name").innerText = collegeName;
    document.getElementById("category").innerText = category;
    document.getElementById("practical-total").innerText = practical;
    document.getElementById("stauts").innerText = stauts;

    document.getElementById('modal').style.display = 'none';

  }
};



document.getElementById("input-image").addEventListener("change", function () {
  const input = this;
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      document.getElementById('student-image').src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
});
document.getElementById('openModal').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'none';
});


window.addEventListener('click', function (event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
