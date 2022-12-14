let Category=document.getElementById("Category");
Category.addEventListener("mouseover", ()=>{
    let banner=document.getElementById("banner-2");
    banner.style.display="block"
})
document.body.addEventListener("click", ()=>{
    let banner=document.getElementById("banner-2");
    banner.style.display="none"
})

let clickPart=document.getElementById("click");
let localData=JSON.parse(localStorage.getItem("Click"));
console.log(localData)
function displayData(data){
    console.log(data)
    clickPart.innerHTML=null;

    data.forEach(element => {
        let div1=document.createElement("div");
        let image=document.createElement("img");
        image.setAttribute("src", element.Image)
        div1.append(image);
        let div2=document.createElement("div");
        let name=document.createElement("h2");
        name.innerText=element.Product;
        let flash=document.createElement("h2");
        flash.innerText=element.sale;
        let price=document.createElement("h2");
        price.innerText="$"+ element.Price;
        let us=document.createElement("span");
        us.setAttribute("id","shiping")
        us.innerText="Shipping:   "+"No more shipping method to United States"
        let shipfrom=document.createElement("span");
        shipfrom.setAttribute("id","us")
        shipfrom.innerText="Ships From:  "+"United State"
        let qtydiv=document.createElement("div");
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
        let btn1=document.createElement("button");
        btn1.innerText="Add to Cart"
        let btn2=document.createElement("button");
        btn2.innerText="Buy Now"
        let btn3=document.createElement("button");
        let btnimg=document.createElement("img");
        btnimg.setAttribute("src","https://icon2.cleanpng.com/20180804/uqu/kisspng-paypal-logo-brand-scalable-vector-graphics-payment-paypal-ikon-gratis-dari-free-flat-icons-5b65997993f566.0223323915333850816061.jpg")

        btn3.append(btnimg)
        btns.append(btn1,btn2,btn3)
        div2.append(name,flash,price,us,shipfrom,qtydiv,btns)
        clickPart.append(div1,div2)
    });

}

displayData(localData)