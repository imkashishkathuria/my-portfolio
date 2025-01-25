import './Hero.css'
import profile_img from '../../assets/profile_img.jpg';

const Hero = () => {
  const handleResumeClick = ()=>{
    document.title = "My Resume - Kashish";
    window.open('/My Resume - Kashish.pdf', '_blank');
  }
  return (
    <div className='hero'>

        <img src={profile_img} alt=" " width="230px" height="200px"/>

        <h1><span>I'm Kashish Kathuria, </span>frontend developer based in India.</h1>
        <p>Aspiring Frontend Developer | Building Beautiful, Responsive, and Functional Interfaces with ReactJS.</p>

        <div className="hero-section">
            <div className="hero-connect">
                Connect With Me

            </div>
            <div onClick={handleResumeClick} className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero
