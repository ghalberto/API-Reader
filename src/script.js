//variables
const url = "https://jsonplaceholder.typicode.com/users";
const answer = document.querySelector("#answer")




//Event

document.addEventListener("DOMContentLoaded",CallApi);

//Function

 async function CallApi(){
   const answer =await fetch(url)
   const info = await answer.json()
   showHtml(info)
   
}

function showHtml(data){
    data.forEach(item => {
       const row = document.createElement('tr')
       row.innerHTML = `
       <td>${item.name}</td>
       <td>a${item.email}</td>    
       <td>a${item.website}</td>
       <td>a${item.username}</td>
       `
       answer.appendChild(row)
   });
}
