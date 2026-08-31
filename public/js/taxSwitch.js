    let taxSwitch=document.getElementById("switchCheckDefault");
    taxSwitch.addEventListener("change",()=>{
        let taxInfo =document.getElementsByClassName("tax-info");
        for(let addGst of taxInfo){
            let price = Number(addGst.dataset.price);
            let finalPrice = price * 1.18;
            if(taxSwitch == "checked"){
                addGst.innerText = finalPrice;
            }else{
                addGst.innerText = price;
            }
        }
    })