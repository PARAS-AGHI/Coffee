function confirm(){
    let name= document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let number = document.getElementById("number").value;

    console.log("confirm",name,address,number)


let p1 = new Promise(function(res){
    setTimeout(function(){
        res("Your order is accepted")
    },0)
})


let p2 = new Promise(function(res){
    setTimeout(function(){
        res("Your order is being Prepared")
    },3000)
})

let p3 = new Promise(function(res){
    setTimeout(function(){
        res("Your order is being packed")
    },8000)
})

let p4 = new Promise(function(res){
    setTimeout(function(){
        res("Your order is out for delivery")
    },10000)
})

let p5 = new Promise(function(res){
    setTimeout(function(){
        res("Order delivered")
    },12000)
})


p1.then(function(res){
    alert(res)
})

p2.then(function(res){
    alert(res)
})
p3.then(function(res){
    alert(res)
})

p4.then(function(res){
    alert(res)
})

p5.then(function(res){
    alert(res)
})


}

