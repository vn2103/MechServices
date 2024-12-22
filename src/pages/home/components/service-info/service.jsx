import './service.css'
import image from './service.jpg'
function Services(){
    return(
        <div className="ban">
            <div className="info">
                <h3>Expert Care, Smooth Rides</h3>
                <h3 style={{ color: "#ff820e" }}>In Your City</h3>
                <p>We provide top-notch automotive solutions, ensuring your vehicle gets the care it deserves. Whether it’s routine maintenance or advanced repairs, our experienced team is here to keep you moving safely and efficiently. Reliable, affordable, and professional—choose us for a hassle-free service experience.</p>
            </div>
            <img id='ser' src={image} alt="" />
        </div>
    )
}
export default Services