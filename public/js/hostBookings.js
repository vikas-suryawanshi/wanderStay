const filterButtons = document.querySelectorAll(".booking-filter");
const bookingCards = document.querySelectorAll(".listing-link");

filterButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        let selectedFilter = button.dataset.filter;
        filterButtons.forEach(btn => {
                btn.classList.remove("active");
        });
        button.classList.add("active");

        bookingCards.forEach(card=>{
            if(selectedFilter === "all" || card.dataset.status === selectedFilter){
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }
        })
    })
})