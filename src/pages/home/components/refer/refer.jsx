import g1 from './ref.png'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
function Ref() {
    return (
      <div className="ban">
        <div className="info">
          <p>
          Help Your Friends Find the Best Garages for Their Vehicles. With Every Referral, You’re One Step Closer to Exclusive Rewards and Benefits!          </p>
          <Button style={{alignSelf:"center", backgroundColor:"#ff820e" , marginTop:"3.4vh"}} variant="contained" ><Link style={{textDecoration:"none", color:"white"}} to="/refer">Refer</Link>
          </Button>
        </div>
        <img id="ser" src={g1} alt="Main GIF" />
      </div>
    );
  }
  
  export default Ref;
  