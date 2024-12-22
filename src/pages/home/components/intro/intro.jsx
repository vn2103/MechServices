import Button from '@mui/material/Button';
import g1 from './main.gif';

function Intro() {
  return (
    <div className="ban" >
      <img id="ser" src={g1} alt="Main GIF" />
      <div className="info">
        <h3>Your Reliable Partner In</h3>
        <h3 style={{ color: "#ff820e" }}>Automotive World</h3>
        <p>
          MechHelp is a startup platform established in 2023, focused on connecting
          vehicle owners with verified garages for servicing and repair needs. Based in
          Nagpur, it offers a network of reliable garages where users can conveniently
          book services online. MechHelp caters to the automotive industry and emphasizes
          ease of use for vehicle maintenance and repair management. The company has a
          small team, and its services aim to ensure quality, reliability, and customer
          satisfaction.
        </p>
        <Button onClick={() => {
    const referralLink = "https://www.mechhelp.in/"; // Link to the website
    window.open(referralLink);
}} style={{alignSelf:"center", backgroundColor:"#ff820e" , marginTop:"3.4vh"}} variant="contained">Visit</Button>
      </div>
    </div>
  );
}

export default Intro;
