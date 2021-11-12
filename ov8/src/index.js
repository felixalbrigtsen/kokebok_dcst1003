import fs from 'fs';

let studentList = document.getElementById('studentList');
let students = [];

fs.readFile('src/data.json', (error, data) => {
  students = JSON.parse(data);

  for (let student of students) {
    let li = document.createElement('li');
    li.innerText = student.name + ', ' + student.email;
    studentList.appendChild(li);
  }
});
