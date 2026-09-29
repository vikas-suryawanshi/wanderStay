let pending = document.getElementById("Pending");
let allListing = document.getElementsByClassName("listing-link");

pending.addEventListener("click",()=>{
    Array.from(allListing).forEach((listing)=>{
        if(listing.dataset.status == "pending"){
            listing.style.display = "block";
        }else{
            listing.style.display = "block";
        }
    })
})