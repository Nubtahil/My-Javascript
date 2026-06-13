//array is a collection of data of different types
// array is object in js tou is liye hum us pe function use kr skte hain
//for example : 

const arr = ["javascript","python","c++"]

// console.log(arr.length)
//arr.push("dart")//add element at last
//arr.unshift("java")//add element at the start of the arr
//arr.shift()//remove element from the start of the arr /// is m hum koi string nae dety hein
//arr.pop( )//remove element from the end of the arr /// is m hum koi string nae dety hein

//pop method ko jub hum is trah use kerty hein tou humein arr last item de deta h 
// console.log(arr.pop())
// console.log(arr)

const actors = [
    {
        name:"Actor1",
        payement:300
    },
    {
        name:"Actor9",
        payement:10
    },
    {
        name:"Actor0",
        payement:100
    },
]

//i love loops❤️
// for(let i = 0;i <actor.length; i++){
//     console.log(actor[i].payement - 10)
// }

//forEach loop
// actors.forEach((actor)=>{
//     console.log(actor)
// })

//for of loop
// for(let actor of actors){
//     actor.name = "actor" +  "⭐"
// console.log(actor)
// }