import axios from "axios"
const url="http://localhost:5000/api/v1/trips/all"
const getAllTrips=async()=>{
    const res=await axios(url)
    return res.data
}
export {getAllTrips}