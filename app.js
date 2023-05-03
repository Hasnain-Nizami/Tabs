var his = document.querySelector(".his")
var vis = document.querySelector(".vis")
var goal = document.querySelector(".goal")
let btn1 = document.getElementsByClassName("btn")

function foo(value){
    if(value == "history"){
        btn1[0].children[0].style.backgroundColor = "#666"
        btn1[0].children[1].style.backgroundColor = "#e4dddd"
        btn1[0].children[2].style.backgroundColor = "#e4dddd"
        his.classList.remove('hide')
        vis.classList.add("hide")
        goal.classList.add("hide")

    }else if(value == "vision"){
        btn1[0].children[1].style.backgroundColor = "#666"
        btn1[0].children[0].style.backgroundColor = "#e4dddd"
        btn1[0].children[2].style.backgroundColor = "#e4dddd"
        his.classList.add("hide")
        vis.classList.remove("hide")
        goal.classList.add("hide")

    }else{
        btn1[0].children[2].style.backgroundColor = "#666"
        btn1[0].children[0].style.backgroundColor = "#e4dddd"
        btn1[0].children[1].style.backgroundColor = "#e4dddd"
        his.classList.add("hide")
        vis.classList.add("hide")
        goal.classList.remove("hide")
    }
}