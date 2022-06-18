import FiftyEight from './images/games/658.png';
import FiftyFive from './images/games/655.png';
import FortyNine from './images/games/649.png';
import FortyFive from './images/games/645.png';
import FortyTwo from './images/games/642.png';


const JackpotGames = () =>{
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
                <img src={FiftyFive} alt='lotto game six fifty five'/>
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
                <img src={FortyTwo} alt='lotto game six forty'/>
            </div>
            <div className='result-details'>                
                <div>Date</div>
                <div>Result</div>
                <div>Jackpot</div>
                <div>Winner</div>
            </div>
        </div>
        </>
    )
}
export default JackpotGames