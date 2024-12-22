import LOgo from './Mechhelp-logo.png'
import './header.css'
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function Header(){
    return (
        <header>
            <div className="logo">
                <img src={LOgo} alt="Logo" />
                <h2>Mechhelp</h2>
            </div>
            <div className='icon'>
            <Button onClick={() => {
    const referralLink = "https://www.mechhelp.in/"; // Link to the website
    window.open(referralLink);
}}  id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined}> Home</Button>
            <Button onClick={()=>{
               let referralLink = "https://api.whatsapp.com/send?phone=9270199836&text=Hello"; // Link to the website
                window.open(referralLink);
            }} id='chat' variant="contained" endIcon={<WhatsAppIcon />}>Chat</Button>
            </div>
        </header>
    )
}
export default Header