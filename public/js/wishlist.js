document.querySelectorAll(".wishlist-heart").forEach(button => {
    button.addEventListener("click",async () =>{
        const listingId = button.dataset.listingId;
        const response = await fetch(`/listings/${listingId}/wishlist`,{
            method : "post"
        })

    const data = await response.json();
    console.log(data);
    if(data.action === "added"){
        button.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    }
    })
});