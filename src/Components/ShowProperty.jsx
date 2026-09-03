import {useParams} from 'react-router-dom';
import Properties from '../Data/Properties.js';


function ShowProperty({ addToFavorite }) {
{
    const { id } = useParams();
    const property = Properties.find((p) => p.id === Number(id));
    return(<div>
        <div className="showproperty">
            <img src={property.image} alt="Not Found" width="500" />
            <h3>{property.title}</h3>
            <p>{property.location}</p>
            <p><span style={{ fontWeight: 'bold', color: '#2c3e50' }}>{property.price}</span></p>
            <p>{property.type}</p>
            <p>{property.bhk} bhk</p>
            <p>{property.area} sqft</p>
            <button className="show-property-button" onClick={() => addToFavorite(property)}>
                Add to Favorite
            </button>


        </div>

    </div>)

}
}
export default ShowProperty;