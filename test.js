const createElements = (arr)=>{
// console.log(arr)
const htmlElements = arr.map((el)=>`<span>${el}</span>`)
console.log(htmlElements.join())
}

const senonyms=['hello','hi','kono']
createElements(senonyms)