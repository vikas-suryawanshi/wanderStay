    let taxSwitch=document.getElementById("switchCheckDefault");
    taxSwitch.addEventListener("change",()=>{
        let taxInfo =document.getElementsByClassName("tax-info");
        for(let addGst of taxInfo){
            let price = Number(addGst.dataset.price);
            if(taxSwitch == "checked"){
            }
        }
    })