import axios from "axios";
import baseURL from "../Api/api";

async function Admindashboardservice() {
  try {
    const response = await axios.get(
      baseURL + "restaurants/get-all-restaurants"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function customerGet() {
  try {
    const response = await axios.get(baseURL + "customers/get-all-customers");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default Admindashboardservice;
