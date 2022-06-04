import { Link} from "react-router-dom";
import "../Nav/nav.css";

export const Navbar = () => {
    return(
        <nav className="nav space-around nav-pos">
          <div> 
              <Link className="nav-header logo-title" to="/">Ozone Notes</Link>
          </div>

        </nav>
    )
};