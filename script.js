//create a business name generator by combining list of adjective
// Adjectives:
// crazy
// amazing
// Fire

// Shop Name:
// Engine
// Foods
// Garmetns

// Another Word:
// Bros
// Limited
// Hub

let rand =Math.random();
let first, second, third;
// IF we divided three posibility by one then 
//It looks like 0 to 0.33 to 0.66 to 1
if(rand<0.33){
    first="crazy"
   
}
else if(rand<0.66 & rand>=0.33){
    first="amazing"
  
}
else{
    first="fire";
   
}


rand =Math.random();
if(rand<0.33){
    second="Engine"
   
}
else if(rand<0.66 & rand>=0.33){
    second="food"
    
}
else{
    second="Garments";
   
}

rand =Math.random();
if(rand<0.33){
    third="Bros"
  
}
else if(rand<0.66 & rand>=0.33){
    third="Limited"
  
}
else{
    third="Hub";
   
}
console.log(`${first}  ${second}  ${third}`);
