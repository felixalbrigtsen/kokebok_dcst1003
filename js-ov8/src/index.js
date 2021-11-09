import fs from 'fs';

const filename = 'src/data.json';
let studentList = document.getElementById('studentList');
let students = [];

function displayStudent(student) {
  let li = document.createElement('li');
  li.innerText = student.name + ', ' + student.email;
  studentList.appendChild(li);
}

//Read json file on start
fs.readFile(filename, (error, data) => {
  //Catch errors in readFile
  if (error) {
    displayError(error);
    return;
  }

  try {
    students = JSON.parse(data);
    for (let student of students) {
      displayStudent(student);
    }
  } catch (error) {
    //Catch errors in JSON parse
    displayError(error);
  }
});

document.getElementById('submitButton').onclick = () => {
  let name = document.getElementById('nameInput').value;
  let email = document.getElementById('emailInput').value;

  //Make new object
  const student = {
    name: name,
    email: email,
  };
  //Populate lsit with object
  students.push(student);
  displayStudent(student);

  //Write "database" to file
  const data = JSON.stringify(students);
  fs.writeFile(filename, data, (err) => {
    displayError(err);
  });
};

function displayError(txt) {
  document.getElementById('errorOut').innerHTML = txt;
}
