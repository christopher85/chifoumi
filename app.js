

var userChoice = prompt("choissez entre pierre feuille ciseaux");
console.log(userChoice);

var computerChoice = Math.random();
// console.log(computerChoice);

if(computerChoice < 0.33){
    computerChoice = "pierre"
}else if(computerChoice <= 0.67){
    computerChoice = "ciseau"
}else{
    computerChoice = "feuille"
} 
console.log(computerChoice);

var compare = function (choice1, choice2){
    if(choice1 === choice2){
        return "égalité"
    } 
    
    else if (choice1 === "pierre"){
        if(choice2 === "ciseau"){
            return "pierre à gagné"
        }else if(choice2 === "feuille"){
            return "feuille à gagné"
        }
    }  

    else if (choice1 === "feuille"){
        if(choice2 === "ciseau"){
            return "ciseau à gagné"
        }else if(choice2 === "pierre"){
            return "feuille à gagné"
        }
    }  
    else if (choice1 === "ciseau"){
        if(choice2 === "pierre"){
            return "pierre à gagné"
        }else if(choice2 === "feuille"){
            return "ciseau à gagné"
        }
    }  

}

console.log("résultat : " , compare(userChoice, computerChoice));


