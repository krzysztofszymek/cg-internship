const students = [
    {
        name: 'Martin',
        lastName: 'Lant',
        marks: [9, 8, null, 7, 5],
    },
    {
        name: 'Francesco',
        lastName: 'Portus',
        marks: [5, 4, 2, 3, 2],
    },
    {
        name: 'Bill',
        lastName: 'Merdoc',
        marks: [10, null, null, null, 10],
    },
    {
        name: 'John',
        lastName: 'Entman',
        marks: [9, 8, 9, 7, 5],
    },
];

const cards = document.querySelector('.cards');

function showCardList(){
    cards.innerHTML = cardList(students);
}

function cardList(students) {
    let cards = [];

    students.forEach(s => {
        let marksSum = 0;
        for(var i = 0; i < s.marks.length; i++){
            marksSum += s.marks[i] == null ? 0 : s.marks[i];
            s.marks[i] == null ? s.marks[i] = 'absent' : s.marks[i];
        }

        const average = marksSum / s.marks.length;

        const newElement = `<li id="student-${s.name}" class="${average >= 5 ? 'green' :  'red'}" onclick='setFocus("${s.name}")'> 
                                <p>Name: ${s.name}</p>
                                <p>Lastname: ${s.lastName}</p>
                                <p>Marks: ${s.marks}</p>
                                <p>Average: ${average}</p>
                            </li>`;
        cards = [...cards, newElement];
    });

    return cards.join('');
}

let focusedCard = "";

function setFocus(focusOn){
    if(focusedCard != "") document.getElementById(`student-${focusedCard}`).classList.remove('focused');
    if(focusOn === focusedCard) document.getElementById(`student-${focusedCard}`).classList.remove('focused');
    if(focusOn != focusedCard){
        focusedCard = focusOn;
        document.getElementById(`student-${focusOn}`).classList.add('focused');
    }
}

window.onload = showCardList();