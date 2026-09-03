import PropertyCard from '../Components/PropertyCard';
import Properties from '../Data/Properties';
function Home() 
{
    return (<div className="home">
    
    <h3>Find your Dream Home</h3>
   <section className="property-grid">
    {Properties.map((p)=>(
        <PropertyCard property={p}></PropertyCard>
    ))}

    </section>
    </div>)
}
export default Home;