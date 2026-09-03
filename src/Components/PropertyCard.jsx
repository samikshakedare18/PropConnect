import {useNavigate}from 'react-router-dom';
function PropertyCard({property})
{
    const navigate = useNavigate();
    var {id,image, title, location, price, type, bhk, area} = property;
    return(<div>
        <div className="property-card">
            <img src={image} alt="Not Found" width="500" />
            <h3>{title}</h3>
            <p>{location}</p>
            <p><span style={{ fontWeight: 'bold', color: '#2c3e50' }}>{price}</span></p>
            <p>{type}</p>
            <p>{bhk} bhk</p>
            <p>{area} sqft</p>
            <button onClick={()=>navigate(`/property/${property.id}`)}>Show Property</button>


        </div>

    </div>)
}
export default PropertyCard;