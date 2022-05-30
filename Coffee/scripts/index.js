// Add the coffee to local storage with key "coffee"

let coffee_arr = JSON.parse(localStorage.getItem("coffee")) ||[]
const url = "https://masai-mock-api.herokuapp.com/coffee/menu"

fetch(url)
.then(function(res){
    return res.json()
})
.then(function(res){
    console.log("res",res.menu.data)
    append(res.menu.data)
})
.catch(function(err){
    console.log(err)
})


function append(data){
    let menu = document.getElementById("menu")

 data.forEach(function(elem,index){

    let div = document.createElement("div")

    let type =  document.createElement("h3")
    type.innerText = elem.title;

    let image= document.createElement("img")
    image.src = elem.image;

    let price =  document.createElement("p")
    price.innerText = elem.price;

    let btn = document.createElement("button")
    btn.innerText = "Add to Bucket"
    btn.setAttribute("id","add_to_bucket")
    btn.addEventListener("click",function(){
        addcoffee(elem)
    })

    div.append(image,type,price,btn)

    menu.append(div)

 })
}

function addcoffee(elem){
    coffee_arr.push(elem)
    document.getElementById("coffee_count").innerText= "count" +"= " +  coffee_arr.length;
    localStorage.setItem("coffee",JSON.stringify(coffee_arr))

}