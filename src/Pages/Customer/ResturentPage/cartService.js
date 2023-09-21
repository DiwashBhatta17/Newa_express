import axios from "axios"
import baseURL from "../../../Services/Api/api"


async function cartService(customerId, foodId) {
    try {
        const response = await axios.post(baseURL+"carts/customer/"+customerId+"/food-item/"+foodId);
        return response.data; 
    } catch (error) {
        throw error;
        
    }
  
}
export async function getCartItem(userId){
    try {
        const response = await axios.get(baseURL+"get-cart-by-customer/"+userId);
        return response.data;
        
    } catch (error) {
        throw error;
        
    }
}

export default cartService
