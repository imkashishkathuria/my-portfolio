import './Hero.css'
import profile_img from '../../assets/profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const handleResumeClick = ()=>{
    document.title = "My Resume - Kashish";
    window.open('/My Resume - Kashish (3).pdf', '_blank');
  }
  return (
    <div id='home' className='hero'>

        <img src={profile_img} alt=" " width="230px" height="200px"/>

        <h1><span>I'm Kashish Kathuria, </span>frontend developer based in India.</h1>
        <p>Aspiring Frontend Developer | Building Beautiful, Responsive, and Functional Interfaces with ReactJS.</p>

        <div className="hero-section">
            <div className="hero-connect">
              <AnchorLink className='anchor-link' offset={50} href='#contact'>
                Connect With Me
                </AnchorLink>
            </div>
            <div onClick={handleResumeClick} className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero
