document.querySelectorAll(".wishlist-heart").forEach(button => {
    button.addEventListener("click",async () =>{
        const listingId = button.dataset.listingId;
        let url = `/listings/${listingId}/wishlist`;
        if(button.querySelector("i").classList.contains("fa-solid")){
            url = `/listings/${listingId}/wishlist/remove`;
        }
        const response = await fetch(url,{
            method : "post",
            headers: {
                "Accept": "application/json"
            }
        })
        if(response.redirected){
            window.location.href = response.url;
            return;
        }
        const data = await response.json();
        if(data.action === "added"){
            button.innerHTML = `<i class="fa-solid fa-heart"></i>`;
        }
        if(data.action === "removed"){
            button.innerHTML = `<i class="fa-regular fa-heart"></i>`;
        }
        console.log(data);
    })
});