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

        checkInPicker.set("onChange",function(selectedDates){
            if(selectedDates.length === 0) return;
            const selectedCheckIn = selectedDates[0];
            checkOutPicker.set("minDate",selectedCheckIn);

            checkOutPicker.set("disable",[
                function(date){
                    const selectedCheckout = new Date(
                        date.getFullYear(),
                        date.getMonth(),
                        date.getDate()
                    );
                    const selectedStart = new Date(
                        selectedCheckIn.getFullYear(),
                        selectedCheckIn.getMonth(),
                        selectedCheckIn.getDate()
                    );
                    return unavailableDates.some((booking)=> {
                        const bookingCheckIn = new Date(booking.checkIn);
                        const bookingCheckOut = new Date(booking.checkOut);
                        const start = new Date(
                            bookingCheckIn.getFullYear(),
                            bookingCheckIn.getMonth(),
                            bookingCheckIn.getDate()
                        );
                        const end = new Date(
                            bookingCheckOut.getFullYear(),
                            bookingCheckOut.getMonth(),
                            bookingCheckOut.getDate()
                        );
                        return selectedStart < end &&
                        selectedCheckout > start;
                    });
                }
            ]);
        });
    } catch (error) {
        console.error("Availability loading error:",error);
    }
}
loadUnavailableDates();