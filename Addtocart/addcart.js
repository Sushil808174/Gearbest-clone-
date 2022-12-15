let myData=JSON.parse(localStorage.getItem("addcart"))
let appData=document.getElementById("datafive");

function displayData(data){
    appData.innerHTML=null;

    data.forEach((element,index) => {
        let div1=document.createElement("div");

        let divimg=document.createElement("div");
        let image=document.createElement("img");
        image.setAttribute("src", element.Image);
        divimg.append(image);

        let divname=document.createElement("div");
        let name=document.createElement("h3");
        name.innerText=element.Product;
        let ship=document.createElement("p")
        ship.innerText="Ships From:  EU"
        let stock=document.createElement("p")
        stock.innerText="In Stock:  P-1000"
        divname.append(name,ship,stock);

        let divrs=document.createElement("div");
        let price=document.createElement("h3");
        price.innerText="$"+element.Price;
        let flash=document.createElement("p");
        flash.innerText=element.sale;
        divrs.append(price,flash)

        let divbtn=document.createElement("div");
        let btn1=document.createElement("button");
        btn1.innerText="-"
        let btn2=document.createElement("button");
        btn2.innerText=element.quantity;
        let btn3=document.createElement("button");
        btn3.innerText="+"
        divbtn.append(btn1,btn2,btn3)
        
        let divsubtotal=document.createElement("div");
        let hdsub=document.createElement("h3");
        hdsub.innerText=element.quantity*element.Price;
        divsubtotal.append(hdsub);

        let lastdiv=document.createElement("div");
        let edit=document.createElement("a");
        edit.innerText="edit"
        edit.setAttribute("href", "#")
        let Favorites=document.createElement("a");
        Favorites.innerText="Favorites"
        Favorites.setAttribute("href", "#")
        let Delete=document.createElement("a");
        Delete.innerText="Delete"
        Delete.setAttribute("href", "#")
        lastdiv.append(edit,Favorites,Delete)

        div1.append(divimg,divname,divrs,divbtn,divsubtotal,lastdiv)
        appData.append(div1)
    });
}

displayData(myData)
console.log("OK")