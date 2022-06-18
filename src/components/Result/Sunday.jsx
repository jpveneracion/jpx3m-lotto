import FiftyEight from './images/games/658.png';
import FortyNine from './images/games/649.png';
import ThreeD from './images/games/3d.png';
import TwoD from './images/games/2d.png';


const Result = () =>{
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
                <img src={FortyNine} alt='lotto game six forty nine'/>
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
export default Result