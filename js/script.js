
function responsive(){

  if(window.innerWidth < 600){
    add.style.width = "160px";
    add.style.height = "160px";
    add.style.fontSize = "60px";

    remove.style.width = "160px";
    remove.style.height = "160px";
    remove.style.fontSize = "60px";

    counter.style.fontSize = "140px";
  }
  else if (window.innerWidth < 1024)  {
    add.style.width = window.innerWidth/100*25 + "px";
    add.style.height = window.innerWidth/100*25 + "px";
    add.style.fontSize = add.offsetWidth/2 +"px";

    remove.style.width = window.innerWidth/100*25 + "px";
    remove.style.height = window.innerWidth/100*25 + "px";
    remove.style.fontSize = remove.offsetWidth/2 +"px";

    counter.style.fontSize = window.innerWidth/100*20 + "px";
  }
  else if (window.innerWidth > 1024){
    add.style.width = "300px";
    add.style.height = "300px";
    add.style.fontSize = "120px";

    remove.style.width = "300px";
    remove.style.height = "300px";
    remove.style.fontSize = "120px";

    counter.style.fontSize = "250px";
  }
};


// CREATE COUNTER SECTION 
let counter_section = document.getElementById('counter-section');

//Remove button
let remove = document.createElement("button");
remove.setAttribute("type","button");
remove.setAttribute("id","remove");
counter_section.appendChild(remove);

let minus = document.createElement("i");
minus.setAttribute("class","fas fa-minus")
remove.appendChild(minus);

//Counter Number
let counter = document.createElement("span");
counter.setAttribute("id","counter");
counter_section.appendChild(counter);

let counter_text = document.createTextNode("0");
counter.appendChild(counter_text);

//Add button
let add = document.createElement("button");
add.setAttribute("type","button");
add.setAttribute("id","add");
counter_section.appendChild(add);

let plus = document.createElement("i");
plus.setAttribute("class","fas fa-plus")
add.appendChild(plus);

//let counter = document.getElementById('counter');
//let add = document.getElementById('add');
//let remove = document.getElementById('remove');

let settings_icon = document.getElementById('settings-icon');
let counter_value = document.getElementById('counter-value');
let reset = document.getElementById('reset');

//click sul pulsante piu
add.addEventListener('click', function(){
  if(parseInt(counter.innerText) > 998){ //aumento dimensione della casella se supera le 3 cifre
    counter.style.width = "auto";
  }
  counter.innerHTML = parseInt(counter.innerText) + parseInt(counter_value.value);
});

//click sul pulsante meno
remove.addEventListener('click', function(){
  if(parseInt(counter.innerText) < -98){ //aumento dimensione della casella se supera le 2 cifre negative
    counter.style.width = "auto";
  }
  if(isNaN(parseInt(counter_value.value))){
    counter.innerHTML = "0";
  }
  counter.innerHTML = parseInt(counter.innerText) - parseInt(counter_value.value);
});

//comparsa e scomparsa della sezione settings
let a = 1;
settings_icon.addEventListener('click', function(){
  if(a == 1){
    document.getElementById("settings-section").style.display="flex";
    settings_icon.className="fas fa-times";
    return a = 0;
  }else{
    document.getElementById("settings-section").style.display="none";
    settings_icon.className="fas fa-cogs";
    return a = 1;
  }
});

//pulsante reset
reset.addEventListener('click', function(){
  counter.innerHTML = 0;
  counter_value.value = 1;
  counter.style.width = "400px";
  counter_value.style.width = "60px";
});

//ingrandimento dell' input nella sezione settings
counter_value.addEventListener('keydown', function(event){
  if(counter_value.offsetWidth > 60 && event.keyCode == 8){ //Se si preme il backspace
    counter_value.style.width = counter_value.offsetWidth - 20 + "px";
  }
  else if(parseInt(counter_value.value) > 98 && counter_value.offsetWidth < 220 && isFinite(event.key)){ //Se supera le 3 cifre
    counter_value.style.width = counter_value.offsetWidth + 20 + "px";
  }
  else if (isFinite(event.key) == false && event.keyCode != 8){ //Se non è un numero
    event.preventDefault();
  }
});

window.addEventListener('load', responsive);
window.addEventListener('resize', responsive);
