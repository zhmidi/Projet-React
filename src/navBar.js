import {Link} from 'react-router-dom'


const NavBar = () => {
    return ( 
        <div className="navbar">
        
            <a>Movies-Site</a>
         
    
                <Link to="/">Home</Link>
                <Link to="/About ">About</Link> 
                <Link to ="/Contact"> Contact</Link> 
     <div>
        <input placeholder="filter"/>
        <button>
            <>SINGNIN</>
        </button>
        
        </div>
       </div>
    );
}

export default NavBar;