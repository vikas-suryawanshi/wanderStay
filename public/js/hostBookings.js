const filterButtons = document.querySelectorAll(".booking-filter");
const bookingCards = document.querySelectorAll(".listing-link");
const noFilterResults = document.querySelector(".no-filter-results");

filterButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        let selectedFilter = button.dataset.filter;
        let visibleCards = 0;
        filterButtons.forEach(btn => {
                btn.classList.remove("active");
        });
        button.classList.add("active");
        bookingCards.forEach(card=>{
            if(selectedFilter === "all" || card.dataset.status === selectedFilter){
                card.style.display = "block";
                visibleCards++;
            }else{
                card.style.display = "none";
            }
        })
        if(visibleCards === 0){
            noFilterResults.style.display = "block";
        }else{
            noFilterResults.style.display = "none";
        }
    })
})