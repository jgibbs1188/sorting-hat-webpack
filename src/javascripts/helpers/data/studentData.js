import sortingHat from './sortingHat';
import errorMessage from './errorMessage';

const studentsArray = [];
const voldermortsArmy = [];

const sortStudentsByHouse = (array) => {
  array.sort((a, b) => (a.house > b.house ? 1 : -1));
  return array;
};

const addStudentToArray = (e) => {
  if (e.target.id === 'sort' || e.keyCode === 13) {
    const student = document.querySelector('#student-name');
    errorMessage(student.value);

    if (student.value) {
      studentsArray.push({
        name: student.value,
        house: sortingHat(),
      });
      student.value = '';
    }
    const sortStudents = sortStudentsByHouse(studentsArray);
    cardCreator('#first-years-card-display', sortStudents);
  }
};

const expelStudent = (e) => {
  if (e.target.type === 'button') {
    voldermortsArmy.push(studentsArray[e.target.id]);
    studentsArray.splice(e.target.id, 1);
    cardCreator('#first-years-card-display', studentsArray);
    cardCreator('#voldermorts-army', voldermortsArmy);
  }
};
