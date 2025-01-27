import "./About.css"
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.jpg';

const About = () => {
  return (
    <div id="about" className="about">
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" width="300px"  height="450px" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I’m an aspiring frontend developer with a strong passion for building engaging, user-friendly web interfaces. Skilled in React.js, I love turning creative ideas into responsive, dynamic websites that provide seamless user experiences. Although I’m just starting my professional journey, I’ve spent significant time honing my skills through personal projects, online courses, and hands-on coding challenges.</p>
                    <p>I’m eager to collaborate with experienced developers, learn from industry experts, and grow in a team environment where I can refine my skills and bring value to innovative projects. </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width: "55%"}} />
                    </div>
                    <div className="about-skill">
                        <p>React JS</p>
                        <hr style={{width: "75%"}} />
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p>
                        <hr style={{width: "50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Node JS</p>
                        <hr style={{width: "40%"}} />
                    </div>
                </div>
            </div>

            
        </div>
        <div className="about-achievements">
                <div className="about-achievement">
                    <h1>3 months</h1>
                    <p>INTERNSHIP EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>BUGS RESOLVED</p>
                </div>
                <hr />

            </div>
      
    </div>
  )
}

export default About
