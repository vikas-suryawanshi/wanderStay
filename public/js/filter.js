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