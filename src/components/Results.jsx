import Result from "./Result"
import { Routes, Route} from "react-router-dom";
import Yesterday from "./Result/Yesterday"




const Results = () => {

    return(
        <>
            <Routes>
                <Route path="/" element={<Result />} />
                <Route path="yesterday" element={<Yesterday />} />
            </Routes>
        </>
    )
}
export default Results