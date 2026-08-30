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

    // for Beach Filter
    let beach = document.getElementById("beachFilter");
    allListing = document.getElementsByClassName("listing-link");
    beach.addEventListener("click",()=>{
        Array.from(allListing).forEach((listing)=>{
            if(listing.dataset.category == "Beach"){
                listing.style.display = "block";
            }else{
                listing.style.display = "none";
            }
        })
    })

    // for Mountain City filter
    let mountainCity = document.getElementById("MountainFilter");
    allListing = document.getElementsByClassName("listing-link");
    mountainCity.addEventListener("click",()=>{
        Array.from(allListing).forEach((listing)=>{
            if(listing.dataset.category == "Mountain City"){
                listing.style.display = "block";
            }else{
                listing.style.display = "none";
            }
        })
    })

    // for Camping Filter
    let camping = document.getElementById("CampingFilter");
    allListing = document.getElementsByClassName("listing-link");
    camping.addEventListener("click",()=>{
        Array.from(allListing).forEach((listing)=>{
            if(listing.dataset.category == "Camping"){
                listing.style.display = "block";
            }else{
                listing.style.display = "none";
            }
        })
    })