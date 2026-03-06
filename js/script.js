const createElements = (arr)=>{
// console.log(arr)
const htmlElements = arr.map((el)=>`<span>${el}</span>`)
return htmlElements.join();
}
function loadData(){

    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json()) //promise of jsen data .
    .then(json => displayLesson(json.data) )
}

const removeActive = ()=>{
  const lessonsBtn = document.querySelectorAll('.lesson-btn')
  lessonsBtn.forEach((btn)=>btn.classList.remove('active'))
}
// loadData()
const loadLevelWord = (id)=>{
// console.log(id);
 fetch(`https://openapi.programming-hero.com/api/level/${id}`)
 .then(res => res.json())
 .then(json => {
  removeActive();
  const clickBtn = document.getElementById(`lesson-btn-${id}`)
  // console.log(clickBtn);
  clickBtn.classList.add('active')
  displaylavalword(json.data)
 });
}

const displaylavalword = (words)=>{

         const wordContainer = document.getElementById('word-container')
         wordContainer.innerHTML ="";
         console.log(words.length)
         if(words.length == 0){
           wordContainer.innerHTML = `
           
             <div class="text-center col-span-full bangla space-y-2">
               <img src="./images/alert-error.png" alt="" class="mx-auto">
              
             <h2 class="text-[12px]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</h2>
        <p class="text-[34px]">নেক্সট Lesson এ যান</p>
      </div>
           `
         }
         
         words.forEach(word => {
            // console.log(word)
            const createDiv = document.createElement('div')
            createDiv.innerHTML =  `
            <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 h-full space-y-4 ">
        <h2 class="font-semibold  text-xl" >${word.word}</h2>
        <p class="font-semibold">Meaning /Pronounciation </p>
        <p class="bangla text-2xl font-medium">${word.meaning ?word.meaning :'শব্দ পাওয়া যায়নি'} / ${word.pronunciation ? word.pronunciation:'শব্দ পাওয়া যায়নি'}</p>
        <div class="flex justify-between items-center">
          <button onclick="loadWordDetale(${word.id})" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
          <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>

        </div>
      </div>  
            `
            wordContainer.appendChild(createDiv)
         });
        
        
     
}
const loadWordDetale = (id)=>{
  fetch(`https://openapi.programming-hero.com/api/word/${id}`)
  .then((res)=>res.json())
  .then((json)=> displayWordDetales(json.data))
}
const displayWordDetales = (datas)=>{
  console.log(datas)
  const detailsBox = document.getElementById('details-container');
  detailsBox.innerHTML = `
   <div class="">
        <h2 class="">${datas.word} (<i class="fa-solid fa-microphone-lines"></i> :${datas.pronunciation})</h2>
     </div>
      <div class="">
        <h2 class="font-bold">Meaning</h2>
        <p>${datas.meaning}</p>
     </div>
      <div class="">
        <h2 class="font-bold">Example</h2>
        <p>${datas.sentence}</p>
     </div>
      <div class="">
        <h2 class="font-bold">Synonym</h2>
      <div>
      ${createElements(datas.synonyms)}
      </div>
     </div>
  `
  document.getElementById('word_modal').showModal();

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
    // console.log(lesson)
    const btnDiv = document.createElement('div');
    btnDiv.innerHTML = `
    <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn"><i class="fa-solid fa-book-open"></i>Learn
    ${lesson.level_no}</button>
    `
    lavelConteiner.appendChild(btnDiv)
}
}


loadData()

