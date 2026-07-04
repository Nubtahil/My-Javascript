const div = document.querySelector(".root")
const button = document.querySelector("button")


function displayfunction(data){
  console.log(data)
  const card = document.createElement("div")
  card.classList.add("card")
}

button.addEventListener("click",()=>{
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((data) => data.json())
  .then((data) =>  
  displayfunction(data)
);
})

 

 