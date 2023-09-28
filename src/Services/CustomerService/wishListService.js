import axios from "axios";
import baseURL from "../Api/api";

export async function getWishlist(userId){
    try {
        const response = await axios.get(baseURL+"favourite-food/customer-favourite/"+userId);
        const res = response.data;
        if (res){
           for(let i = 0; i<res.length; i++){
            let images = await getItemImage(res[i]?.foodItem.id)
            res[i]["images"] = images;
           }
           return res;
        }
        
    } catch (error) {
        throw error
        
    }
}

 async function getItemImage(foodId) {
    try {
      const response = await axios.get(
        baseURL + "foodItems/getFoodPic/" + foodId,
        {
          responseType: "arraybuffer", // Specify the response type as arraybuffer
        }
      );
  
      const imageBlob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
  
      return URL.createObjectURL(imageBlob);
    } catch (error) {
      throw error;
    }
  }

export async function postWishlist(userId, id){
    try {
        const response = await axios.post(baseURL+"favourite-food/customer/"+userId+"/food-item/"+id);
        return response.data;
        
    } catch (error) {
        throw error;
        
    }
}