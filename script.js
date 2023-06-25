const h2 = document.createElement("h2");
document.querySelector("body").appendChild(h2);
h2.textContent = "My name is Deborah,"

const h4 = document.createElement("h4");
document.querySelector("h2").appendChild(h4);
h4.textContent = "and these are my Software Engineering projects!"

const input = document.getElementById('button');
input.addEventListener('click', function(){
    alert('I was clicked!');
})