// for Trending filter
    let Trending = document.getElementById("TrendingFilter");
    let allListing = document.getElementsByClassName("listing-link");
    Trending.addEventListener("click",()=>{
        Array.from(allListing).forEach((listing)=>{
            if(listing.dataset.category == "Trending"){
                listing.style.display = "block";
            }else{
                listing.style.display = "none";
            }
        })
    })

    // for villa filter
    let villa = document.getElementById("villaFilter");
    allListing= document.getElementsByClassName("listing-link");
    villa.addEventListener("click",()=>{
        Array.from(allListing).forEach((listing)=>{
            if(listing.dataset.category == "Villa"){
                listing.style.display = "block";
            }else{
                listing.style.display = "none";
            }
        })
    })

    // for Rooms filter
    let Rooms = document.getElementById("roomsFilter");
    allListing = document.getElementsByClassName("listing-link");
    Rooms.addEventListener("click",()=>{
        Array.from(allListing).forEach((listing)=>{
            if(listing.dataset.category == "Rooms"){
                listing.style.display = "block";
            }else{
                listing.style.display = "none";
            }
        })
    })