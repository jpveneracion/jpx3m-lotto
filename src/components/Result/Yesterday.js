import { Suspense, lazy, useState} from "react";
import JackpotGames from './JackpotGames'

const Result = () =>{
    /*let yesterday ="Sunday";*/
    const [dateState] = useState(new Date().getDate()-1);

    let yesterday = dateState.toLocaleDateString('en-US',{
        weekday: 'long',
    })

    if (yesterday === 'Monday') {
        const Monday = lazy(()=>import('./Monday'));
        return (
            <Suspense fallback={<JackpotGames />}>
                <Monday />
            </Suspense>
        )
    }
    else if (yesterday === 'Tuesday') {
        const Tuesday = lazy(()=>import('./Tuesday'));
        return (
            <Suspense fallback={<JackpotGames />}>
                <Tuesday />
            </Suspense>
        )
    }
    else if (yesterday === 'Wednesday') {
        const Wednesday = lazy(()=>import('./Wednesday'));
        return (
            <Suspense fallback={<JackpotGames />}>
                <Wednesday />
            </Suspense>
        )
    }
    else if (yesterday === 'Thursday') {
        const Thursday = lazy(()=>import('./Thursday'));
        return (
            <Suspense fallback={<JackpotGames />}>
                <Thursday />
            </Suspense>
        )
    }
    else if (yesterday === 'Friday') {
        const Friday = lazy(()=>import('./Friday'));
        return (
            <Suspense fallback={<JackpotGames />}>
                <Friday />
            </Suspense>
        )
    }
    else if (yesterday === 'Saturday') {
        const Saturday = lazy(()=>import('./Saturday'));
        return (
            <Suspense fallback={<JackpotGames />}>
                <Saturday />
            </Suspense>
        )
    }
    else if (yesterday === 'Sunday') {
        const Sunday = lazy(()=>import('./Sunday'));
        return (
            <Suspense fallback={<JackpotGames />}>
                <Sunday />
            </Suspense>
        )
    }
    else{
        return (
                <JackpotGames />
        )
    }
}

export default Result