import FiftyEight from './images/games/658.png';
import FortyFive from './images/games/645.png';
import FourD from './images/games/4d.png';
import ThreeD from './images/games/3d.png';
import TwoD from './images/games/2d.png';


const Friday = () =>{
    return(
        <>
        <div className="result-card">
            <div>
                <img src={FiftyEight} alt='lotto game six fifty eight'/>
            </div>
            <div className='result-details'>
                <div>Date</div>
                <div>Result</div>
                <div>Jackpot</div>
                <div>Winner</div>
            </div>
        </div>
        <div className="result-card">
            <div>
                <img src={FortyFive} alt='lotto game six forty five'/>
            </div>
            <div className='result-details'>
                <div>Date</div>
                <div>Result</div>
                <div>Jackpot</div>
                <div>Winner</div>
            </div>
        </div>
        <div className="result-card">
            <div>
                <img src={FourD} alt='lotto game four digit'/>
            </div>
            <div className='result-details'>
                <div>Date</div>
                <div>Result</div>
            </div>
        </div>
        <div className="result-card">
            <div>
                <img src={ThreeD} alt='lotto game three digit'/>
            </div>
            <div className='result-details'>
                <div>Date</div>
                <div>Results</div>
            </div>
        </div>
        <div className="result-card">
            <div>
                <img src={TwoD} alt='lotto game two digit'/>
            </div>
            <div className='result-details'>
                <div>Date</div>
                <div>Results</div>
            </div>
        </div>
        </>
    )
}
export default Friday