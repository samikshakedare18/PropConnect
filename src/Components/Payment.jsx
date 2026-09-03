function Payment() 
{
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Payment Successful!");
        navigate("/success");
    }
    return(<div style={{background:"LightBlue"}}>

        <h2>Book Property to do Partial Payment</h2>
        <div className="payment_container">
        <div className="payment_card">
        <form onSubmit={handleSubmit}>
            <select>
                <option>Select Amount</option>
                <option>₹50,000</option>
                <option>₹1,00,000</option>
                <option>₹2,00,000</option>
            </select>
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Card Holder Name" />
            <input type="text" placeholder="Expiry Date" />
            <input type="text" placeholder="CVV" />
            <button type="submit">Pay Now</button>
        </form>
        </div>
        </div>
    </div>)
}

export default Payment;