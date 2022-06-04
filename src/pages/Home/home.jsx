import { Navbar, Footer } from "components";
import { primaryImage } from "assets/images";
import "../Home/home.css";

export const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="homepage-main">
                <div className="hp-description">
                    <h2 className="hp-description-heading">Note Taking App</h2>
                    <h3>When your Heart speaks, take good notes.</h3>
                    <p className="hp-description-content">Manage your daily tasks and workflow in a modern 
                    way and boost your efficiency without any efforts.</p>
                    <button className="btn primary join-btn">Join Now</button>
                </div>

                <div className="hp-image">
                    <img src= {primaryImage} alt="Notes HomePage Image" />
                </div>
                
            </div>
            <Footer />

        </div>

    )
}