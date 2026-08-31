    let taxSwitch=document.getElementById("switchCheckDefault");
    taxSwitch.addEventListener("change",()=>{
        let taxInfo =document.getElementsByClassName("tax-info");
        for(let info of taxInfo){
            let price = "<%= listings.price%>";
            if(taxSwitch == "checked"){
                // let finalPrice = price * 1.18;
                
            }
        }
    })