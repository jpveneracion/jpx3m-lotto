import { Suspense, lazy, /*useState*/} from "react";
import JackpotGames from './JackpotGames'

const Result = () =>{
    /*let dayToday ="Sunday";*/
    /*const [dateState] = useState(new Date());

    let dayToday = dateState.toLocaleDateString('en-US',{
        weekday: 'long',
    })*/

    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate()-1)

    let displayGames = yesterday.toLocaleDateString('en-US',{
        weekday: 'long',
    }) 

    /*let jpx3m = yesterState.toLocaleDateString('en-US',{
        weekday: 'long',
    })*/
    console.log(displayGames)


    if (displayGames === 'Monday') {
        const Monday = lazy(()=>import('./Monday'));
        return (
            <>
                <div className="main-title">
                    <h1>Games Yesterday</h1>
                </div>
                <Suspense fallback={<JackpotGames />}>
                    <Monday />
                </Suspense>
            </>
        )
    }
    else if (displayGames === 'Tuesday') {
        const Tuesday = lazy(()=>import('./Tuesday'));
        return (
            <>                
                <div className="main-title">
                    <h1>Games Yesterday</h1>
                </div>
                <Suspense fallback={<JackpotGames />}>
                    <Tuesday />
                </Suspense>
            </>
        )
    }
    else if (displayGames === 'Wednesday') {
        const Wednesday = lazy(()=>import('./Wednesday'));
        return (
            <>                
                <div className="main-title">
                    <h1>Games Yesterday</h1>
                </div>
                <Suspense fallback={<JackpotGames />}>
                    <Wednesday />
                </Suspense>                
            </>
        )
    }
    else if (displayGames === 'Thursday') {
        const Thursday = lazy(()=>import('./Thursday'));
        return (
            <>                
                <div className="main-title">
                    <h1>Games Yesterday</h1>
                </div>
                <Suspense fallback={<JackpotGames />}>
                    <Thursday />
                </Suspense>
            </>
        )
    }
    else if (displayGames === 'Friday') {
        const Friday = lazy(()=>import('./Friday'));
        return (
            <>                
                <div className="main-title">
                    <h1>Games Yesterday</h1>
                </div>
                <Suspense fallback={<JackpotGames />}>
                    <Friday />
                </Suspense>
            </>
        )
    }
    else if (displayGames === 'Saturday') {
        const Saturday = lazy(()=>import('./Saturday'));
        return (
            <>                
                <div className="main-title">
                    <h1>Games Yesterday</h1>
                </div>
                <Suspense fallback={<JackpotGames />}>
                    <Saturday />
                </Suspense>
            </>
        )
    }
    else if (displayGames === 'Sunday') {
        const Sunday = lazy(()=>import('./Sunday'));
        return (            
            <>                
                <div className="main-title">
                    <h1>Games Yesterday</h1>
                </div>
                <Suspense fallback={<JackpotGames />}>
                    <Sunday />
                </Suspense>
            </>
        )
    }
    else{
        return (
                <JackpotGames />
        )
    }
}

export default Result