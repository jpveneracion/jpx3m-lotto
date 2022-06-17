import FiftyFive from './images/games/655.png';
import FortyTwo from './images/games/642.png';
import SixD from './images/games/6d.png';
import ThreeD from './images/games/3d.png';
import TwoD from './images/games/2d.png';


const Result = () =>{
    return(
        <>
        <div className="result-card">
            <div>
                <img src={FiftyFive} alt='lotto game six fifty five'/>
            </div>
            <div className='result-details'>
                <div>Game</div>
                <div>Date</div>
                <div>Results</div>
            </div>
        </div>
        <div className="result-card">
            <div>
                <img src={FortyTwo} alt='lotto game six forty two'/>
            </div>
            <div className='result-details'>
                <div>Game</div>
                <div>Date</div>
                <div>Results</div>
            </div>
        </div>
        <div className="result-card">
            <div>
                <img src={SixD} alt='lotto game six digit'/>
            </div>
            <div className='result-details'>
                <div>Game</div>
                <div>Date</div>
                <div>Results</div>
            </div>
        </div>
        <div className="result-card">
            <div>
                <img src={ThreeD} alt='lotto game three digit'/>
            </div>
            <div className='result-details'>
                <div>Game</div>
                <div>Date</div>
                <div>Results</div>
            </div>
        </div>
        <div className="result-card">
            <div>
                <img src={TwoD} alt='lotto game two digit'/>
            </div>
            <div className='result-details'>
                <div>Game</div>
                <div>Date</div>
                <div>Results</div>
            </div>
        </div>

        </>
    )
}
export default Result