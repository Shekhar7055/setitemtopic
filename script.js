function addName(){
    let abc = document.getElementById("inp").value
    let p = document.createElement("p")
    p.innerText= abc
    document.body.append(p);
}

//set iteam
let value = "kamlesh"
localStorage.setItem("name",value)
let v  = localStorage.getItem("name")
console.log(v)

//let value1 = "Thar"
localStorage.setItem("car","Thar")
let m = localStorage.getItem("car")
console.log(m)

localStorage.removeItem("car")

// in clear function clear all the local storage data

localStorage.clear() 

let arry = ["Shekhar"]
localStorage.setItem("name",arry) 

let array = ["shekhar","kamlesh","thapa"]
localStorage.setItem("Name",array)

let v1 = localStorage.getItem("Name")
console.log(v1)

//JSON = JAVA SCRIPT ONJECT NOTATION
let myObj ={
    "Name": "Shekhar",
    "Age": "25"
}

localStorage.setItem("mtDetail",myObj)