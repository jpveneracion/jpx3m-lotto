import { Suspense, lazy, useState} from "react";
import JackpotGames from './JackpotGames'

const Result = () =>{
    /*let dayToday ="Sunday";*/
    const [dateState] = useState(new Date());

    let dayToday = dateState.toLocaleDateString('en-US',{
        weekday: 'long',
    })

    if (dayToday === 'Monday') {
        const Monday = lazy(()=>import('./Monday'));
        return (
            <Suspense fallback={<JackpotGames />}>
                <Monday />
            </Suspense>
        )
    }
    else if (dayToday === 'Tuesday') {
        const Tuesday = lazy(()=>import('./Tuesday'));
        return (
            <Suspense fallback={<JackpotGames />}>
                <Tuesday />
            </Suspense>
        )
    }
    else if (dayToday === 'Wednesday') {
        const Wednesday = lazy(()=>import('./Wednesday'));
        return (
            <Suspense fallback={<JackpotGames />}>
                <Wednesday />
            </Suspense>
        )
    }
    else if (dayToday === 'Thursday') {
        const Thursday = lazy(()=>import('./Thursday'));
        return (
            <Suspense fallback={<JackpotGames />}>
                <Thursday />
            </Suspense>
        )
    }
    else if (dayToday === 'Friday') {
        const Friday = lazy(()=>import('./Friday'));
        return (
            <Suspense fallback={<JackpotGames />}>
                <Friday />
            </Suspense>
        )
    }
    else if (dayToday === 'Saturday') {
        const Saturday = lazy(()=>import('./Saturday'));
        return (
            <Suspense fallback={<JackpotGames />}>
                <Saturday />
            </Suspense>
        )
    }
    else if (dayToday === 'Sunday') {
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