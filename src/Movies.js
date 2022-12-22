import {Link} from 'react-router-dom'
const Movies =(props)=>{


    return(
        <div className="action">

        {
            props.list.map(item=>(
            <div className='Movies'>
                <img className="e" src={item.Image} alt="" />
                <h3 className="c">{item.title}</h3>
                <h3 className="b">{item.description}</h3>
                <Link to ="/Watch" state={item}><button className="d">Wach Now</button></Link>
                
            </div>
            ))
        }
        </div>

    );
} 



export default Movies
