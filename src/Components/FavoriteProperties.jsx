import {useNavigate} from 'react-router-dom';

function FavoriteProperties({ favorite }) 
{
    const navigate = useNavigate();
    return(<>

    <p>All Fav Properites</p>
    {favorite.map(p => (
         <div className="fav_props">
            <img src={p.image} alt="Not Found" width="500" />
            <h3>{p.title}</h3>
            <p>{p.location}</p>
            <p><span style={{ fontWeight: 'bold', color: '#2c3e50' }}>{p.price}</span></p>
            <p>{p.type}</p>
            <p>{p.bhk} bhk</p>
            <p>{p.area} sqft</p>
            

        </div>
    ))}
    <div className="pay_btn_div">
      <button className="pay_btn" onClick={() => navigate("/payment")}>
        Proceed to Payment
      </button>
    </div>
    </>)
}
export default FavoriteProperties;
