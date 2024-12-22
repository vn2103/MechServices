import Header from "./components/header/header";
import Services from "./components/service-info/service";
import CarServiceOffer from "./components/plans/plan";
import Intro from "./components/intro/intro";
import Social from "./components/social/social";
import Ref from "./components/refer/refer";
import Footer from "./components/footer/footer";

function Home(){
    return(
        <div className="home">
            <Header/>
            <Services/>
            <CarServiceOffer/>
            <Intro/>
            <Social/>
            <Ref/>
            <Footer/>
        </div>
    )
}
export default Home