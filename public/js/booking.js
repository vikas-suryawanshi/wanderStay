const checkInPicker = flatpickr("#checkIn",{
    minDate:"today",
    dateFormat:"Y-m-d"
});

const checkOutPicker = flatpickr("#checkOut",{
    minDate:"today",
    dateFormat:"Y-m-d"
});

async function loadUnavailableDates() {
    try{
        const match = window.location.pathname.match(
            /\/listings\/([^/]+)\/book/
        )
        if(!match) return;
        const listingId = match[1];

        const response = await fetch(
            `/listings/${listingId}/availability`
        );
        if(!response.ok){
            throw new Error("Failed to load unavailable dates");
        }
        const data = await response.json();
        const unavailableDates = data.unAvailableDates || [];
        const isUnavailable = (date) => {
            return unavailableDates.some((booking)=>{
                const checkIn = new Date(booking.checkIn);
                const checkOut = new Date(booking.checkOut);

                // calendar dates locale midlight pr compare kiya
                const selected = new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate()
                );
                const start = new Date(
                    checkIn.getFullYear(),
                    checkIn.getMonth(),
                    checkIn.getDate(),
                );
                const end = new Date(
                    checkOut.getFullYear(),
                    checkOut.getMonth(),
                    checkOut.getDate(),
                );
                // check out day pr next guest check in kar sakta he
                return selected>= start && selected<end;
            });
        };
        const disableDate = (date)=> isUnavailable(date);
        checkInPicker.set("disable",[disableDate]);
        checkOutPicker.set("disable",[disableDate]);
    } catch (error) {
        console.error("Availability loading error:",error);
    }
}
loadUnavailableDates();