// On clicking remove button the item should be removed from DOM as well as localstorage.
let bucket_arr = JSON.parse(localStorage.getItem("coffee")) || []

display_coffee(bucket_arr)

function display_coffee(data){
    let bucket = document.getElementById("bucket")
    data.forEach(function(elem,index){
        let div= document.createElement("div")

        let image = document.createElement("img")
        image.src = elem.image;

        let name = document.createElement("h3")
        name.innerText= elem.title;

        let price = document.createElement("p")
        price.innerText= elem.price

        let btn = document.createElement("button")
        btn.innerText= "REMOVE"
        btn.setAttribute("id","remove_coffee")
        btn.addEventListener("click",function(){
            remove_cofee(elem,index)
        })

        div.append(image,name,price,btn)
        bucket.append(div)

    })
}

function remove_cofee(elem,i){
    bucket_arr.splice(i,1)
    localStorage.setItem("coffee",JSON.stringify(bucket_arr))
    display_coffee(bucket_arr)
    window.location.reload()
}


document.getElementById("confirm_checkout").addEventListener("click",function(){
    window.location.href= "./checkout.html"
})


let total = bucket_arr.reduce(function(sum,elem){
    return sum + Number(elem.price)
},0)

document.getElementById("total_amount").innerText = `${total}`