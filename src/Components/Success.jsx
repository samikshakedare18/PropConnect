import {useNavigate} from 'react-router-dom';

function Success() 
{
    const navigate = useNavigate();
    return(<>
    <div className="success_div">
        <h1>Payment Successful</h1>
        <p>Thank you for your payment. Your transaction has been completed successfully.</p>
        <button className="success_btn" onClick={() => navigate("/")}>Explore </button>
    </div>
    </>)
}
export default Success;