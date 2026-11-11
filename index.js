// Get booking form
const bookingForm = document.getElementById("booking-form");

// Get destination and price elements
const destination = document.getElementById("destination");

const packagePrice = document.getElementById("package-price");

let price = 0;


// Show package price
destination.addEventListener("change", function() 
{

    if(destination.value === "Jaipur")
    {
        price = 4999;
    }

    else if(destination.value === "Manali")
    {
        price = 8999;
    }

    else if(destination.value === "Goa")
    {
        price = 6999;
    }

    else
    {
        price = 0;
    }

    if(price === 0)
    {
        packagePrice.innerHTML = "Select a destination";
    }

    else
    {
        packagePrice.innerHTML = "₹" + price;
    }

});


// Handle booking
function BookNow()
{
    localStorage.setItem("name", document.getElementById("name").value);

    localStorage.setItem("email", document.getElementById("email").value);

    localStorage.setItem("destination", destination.value);

    localStorage.setItem("date", document.getElementById("date").value);

    localStorage.setItem("price", price);

    window.location.href = "success.html";

    return false;
}

