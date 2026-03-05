function loadData(){

    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json()) //promise of jsen data .
    .then(json => displayLesson(json.data) )
}
// loadData()

const loadLevelWord = (id)=>{
console.log(id);
 fetch(`https://openapi.programming-hero.com/api/level/${id}`)
 .then(res => res.json())
 .then(json => displaylavalword(json.data));
}

const displaylavalword = (words)=>{
    const wordContainer = document.getElementById('word-container')
console.log(words)
}


const displayLesson = (lessons)=>{
// 1.get the container & emty
// 2.get the every lesson {
        // 3.create element
        //4. append into container
    // }
const lavelConteiner = document.getElementById('btn-container');
lavelConteiner.innerHTML="";
for(let lesson of lessons){
    console.log(lesson)
    const btnDiv = document.createElement('div');
    btnDiv.innerHTML = `
    <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Learn
    ${lesson.level_no}</button>
    `
    lavelConteiner.appendChild(btnDiv)
}
}


loadData()

