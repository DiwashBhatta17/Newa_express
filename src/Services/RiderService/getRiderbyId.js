import axios from "axios";
import baseURL from "../Api/api";

async function getRiderbyId(riderId) {
 try {
    const response = await axios.get(baseURL+"riders/get-rider/"+riderId);
    return response.data;

    
 } catch (error) {
    throw error;
    
 }
}

export default getRiderbyId;
