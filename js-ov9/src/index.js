import { pool } from './mysql-pool';

let studentList = document.getElementById('studentListBody');

function getAndDisplayStudents() {
  // Perform select-query that fetches all the Students table rows from the database
  pool.query('SELECT * FROM Students', (err, results) => {
    if (err) {
      console.error(err);
      return;
    }

    studentList.innerHTML = '';
    for (let student of results) {
      const tr = document.createElement('tr');
      tr.appendChild(document.createElement('td')).innerText = student.name;
      tr.appendChild(document.createElement('td')).innerText = student.email;
      tr.appendChild(document.createElement('td')); 
      tr.appendChild(document.createElement('button'));
      tr.lastChild.innerText = 'Fjern';
      tr.lastChild.onclick = () => {
        removeStudent(student.id);
      }
      studentList.appendChild(tr);

    }
  });
}
//Run once on startup
getAndDisplayStudents();

function addStudent(name, email) {
  // Perform insert-query that inserts a new student into the database
  pool.query('INSERT INTO Students (name, email) VALUES (?, ?)', [name, email], (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(results);

    getAndDisplayStudents();
  });
}

function removeStudent(id) {
  // Perform delete-query that removes a student from the database
  pool.query('DELETE FROM Students WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error(err);
      return;
    }

    getAndDisplayStudents();
  });
}

document.getElementById('submitButton').onclick = (e) => {
  e.preventDefault();
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  addStudent(name, email);
}