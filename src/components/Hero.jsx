import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

const Hero=()=>{    
    return(
        <div className="hero-container">
            <LeftHero />
            <section className="hero-text-div">
                <h1>Get Paid for the work</h1>
                <h2>you <span>love</span> to do</h2>
                <p>
                    The 9-5 grind is so last century. We believe in living life on your 
                    own terms. Whether you’re looking to escape the rat race or set up 
                    a side hustle, we’ve got you covered.
                </p>
                <div className="scroll-btn-div">
                    <img src="./assets/icon-scroll.svg" alt={"icon scroll pre launch lp"} />
                </div>                
            </section>
            <RightHero />
        </div>
    )
}

export default Hero;