let input =  document.querySelector("input");
let button =  document.querySelector("button");
let ul =  document.querySelector("ul");

button.addEventListener("click", (event) =>{
    event.preventDefault();

    let vaziva = input.value;
    let li = document.createElement("li");

    li.textContent = vaziva;

    ul.appendChild(li);

    input.value = "";
});