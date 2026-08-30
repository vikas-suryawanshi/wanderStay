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

    // for castels Filter
    let castles = document.getElementById("castlesFilter");
    allListing = document.getElementsByClassName("listing-link");
    castles.addEventListener("click",()=>{
        Array.from(allListing).forEach((listing)=>{
            if(listing.dataset.category == "Castles"){
                listing.style.display = "block";
            }else{
                listing.style.display = "none";
            }
        })
    })

    // for iconic city
    let iconicCity = document.getElementById("Iconic-CityFilter");
    allListing = document.getElementsByClassName("listing-link");
    iconicCity.addEventListener("click",()=>{
        Array.from(allListing).forEach((listing)=>{
            if(listing.dataset.category == "Iconic Cities"){
                listing.style.display = "block";
            }else{
                listing.style.display = "none";
            }
        })
    })