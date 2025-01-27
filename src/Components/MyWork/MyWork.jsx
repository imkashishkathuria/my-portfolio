import { Link } from 'react-router-dom';
import mywork_data from '../../assets/mywork_data';
import theme_pattern from '../../assets/theme_pattern.svg'
import './MyWork.css';
import arrow_icon from '../../assets/arrow_icon.svg'


const MyWork = () => {
    
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme_pattern} alt='' />

        </div>
        <div className="mywork-container">
            {
                mywork_data.map((work, index)=>{
                    return <a href={work.w_link} target='_blank' rel='noopener noreferrer'><img key={index} src={work.w_img} alt='' width="350px" height="250px"/></a>
                })
            }
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt='' />
        </div>
      
    </div>
  )
}

export default MyWork
