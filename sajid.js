let user = prompt("enter snake water or gun")
let cpu1 = Math.floor(Math.random()*3);
let cpu = ["snake","water","gun"][cpu1]

const match = (cpu,user)=>{
    if (cpu === user){
    return  "nobody win "
}

else if (cpu === "snake" && user === "gun"){
     return " user "    
}
else if(cpu === "snake" && user === "water"){
    return " user "
}
else if(cpu === "gun" && user === "snake"){
    return " cpu "
}
else if(cpu === "gun" && user === "water"){
    return " user "
}
else if(cpu === "water" && user === "gun"){
    return " cpu "
}
else if(cpu === "water" && user === "snake"){
    return " cpu "
}

}
let result = match(cpu,user ) 
// document.write (` cpu: ${cpu} <br> user: ${user} <br> the winner is: ${result}`)
console.log(result)
