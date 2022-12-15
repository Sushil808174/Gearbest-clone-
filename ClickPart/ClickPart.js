let Category=document.getElementById("Category");
Category.addEventListener("mouseover", ()=>{
    let banner=document.getElementById("banner-2");
    banner.style.display="block"
})
document.body.addEventListener("click", ()=>{
    let banner=document.getElementById("banner-2");
    banner.style.display="none"
})

let addcartData=JSON.parse(localStorage.getItem("addcart")) || [];
let clickPart=document.getElementById("click");
let localData=JSON.parse(localStorage.getItem("Click"));
console.log(localData)
function displayData(data){
    console.log(data)
    clickPart.innerHTML=null;
    data.forEach(element => {
        let div1=document.createElement("div");
        div1.setAttribute("class","twodiv")
        let image=document.createElement("img");
        image.setAttribute("src", element.Image)
        image.setAttribute("class","mainimg")
        div1.append(image);
       
        let div2=document.createElement("div");
        div2.setAttribute("class","twodiv")
        let name=document.createElement("h2");
        name.innerText=element.Product;
        let flash=document.createElement("h2");
        flash.innerText=element.sale;
        let price=document.createElement("h2");
        price.innerText="Price: "+"$"+ element.Price;
        let us=document.createElement("span");
        us.setAttribute("id","shiping")
        us.innerText="Shipping:   "+"No more shipping method to United States"
        let shipfrom=document.createElement("span");
        shipfrom.setAttribute("id","us")
        shipfrom.innerText="Ships From:  "+"United State"
        let qtydiv=document.createElement("div");
        qtydiv.setAttribute("class","qty")
        let span1=document.createElement("span");
        span1.innerText="QTY:   "
        let span2=document.createElement("span");
        span2.innerText="-"
        let span3=document.createElement("span");
        span3.innerText=element.quantity;
        let span4=document.createElement("span");
        span4.innerText="+"
        let span5=document.createElement("span");
        span5.innerText="in stock";

        qtydiv.append(span1,span2,span3,span4,span5)
        
        let btns=document.createElement("div");
        btns.setAttribute("id","btn")
        let btn1=document.createElement("button");
        btn1.innerText="Add to Cart";
        btn1.addEventListener("click",()=>{
            let isPresent=false;
            for(let i=0;i<addcartData.length;i++){
                if(addcartData[i].id===element.id){
                    isPresent=true;
                    break;
                }
            }
            if(isPresent===false){
                addcartData.push(element);
                localStorage.setItem("addcart", JSON.stringify(addcartData))
                alert("Cart Added!!")
            }else{
                alert("Cart is already in the box!!")
            }
            console.log(addcartData)
        })
        let btn2=document.createElement("button");
        btn2.innerText="Buy Now"
        let btn3=document.createElement("button");
        let btnimg=document.createElement("img");
        btnimg.setAttribute("src","https://seeklogo.com/images/P/paypal-logo-CA814C6B42-seeklogo.com.png")

        btn3.append(btnimg)
        btns.append(btn1,btn2,btn3)
        div2.append(name,flash,price,us,shipfrom,qtydiv,btns)
        clickPart.append(div1,div2)
    });

}

displayData(localData)