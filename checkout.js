// Function executed when the user clicks "Continue to Payment" or "Proceed to Checkout"
async function handleOrderSubmission() {
    
    // 1. Grab the logged-in user details from local storage 
    // Ensure you saved "user_id" (e.g., "6664c7b2e3a89...") during login, NOT the user's name string!
    const userId = localStorage.getItem("userId"); 
    
    if (!userId) {
        alert("User session not found. Please log in again.");
        window.location.href = "/login.html";
        return;
    }

    // 2. Extract address values dynamically from your UI form fields
    const firstName = document.getElementById("firstName")?.value || "";
    const lastName = document.getElementById("lastName")?.value || "";
    const addressLine1 = document.getElementById("addressLine1")?.value || "";
    const city = document.getElementById("city")?.value || "";
    const state = document.getElementById("state")?.value || "";
    const pinCode = document.getElementById("pinCode")?.value || "";

    const combinedShippingAddress = `${addressLine1}, ${city}, ${state}, PIN: ${pinCode}`;

    // 3. Extract item info and running totals from state/localStorage
    // Based on your UI: Oppo Find X7 Ultra, 1 item, Total: 89100
    const orderPayload = {
        userId: userId, // Pass the 24-character hex string cleanly here
        items: [
            {
                productName: "Oppo Find X7 Ultra",
                quantity: 1,
                price: 99000
            }
        ],
        totalAmount: 89100, 
        shippingAddress: combinedShippingAddress
    };

    try {
        // 4. Fire off the POST request to your backend server
        const response = await fetch("http://localhost:5000/api/orders/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderPayload)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Order Created Successfully!");
            // Clear cart from local storage and redirect to success screen
            localStorage.removeItem("cartItems");
            window.location.href = "/order-success.html";
        } else {
            console.error("Server Error:", data.error);
            alert(`Order Failed: ${data.message}`);
        }

    } catch (error) {
        console.error("Network Error:", error);
        alert("An error occurred while connecting to the server.");
    }
}