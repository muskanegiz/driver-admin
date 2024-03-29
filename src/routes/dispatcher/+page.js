import { browser } from '$app/environment';
import { env } from '$env/dynamic/public';
export const prerender = false;

let authToken = browser && localStorage.getItem("token");
console.log("hloo:::: "+authToken);
export const load = async ({fetch})=>{
  // const endpoint = "https://drive.boosterrocket.app/api/admin/address"
    const endpoint = env.PUBLIC_BASE_URL+"admin/shipment/shopify-orders"
    const headers = {
        'Access-Control-Allow-Origin' : '*',
        'Authorization': 'Bearer '+authToken,
        // 'Authorization': 'Bearer 64|Clj9JKEkumU6AuOqGnsoVpjZKkDgCBmJRxdcBAUB ',
      };
        const response = await fetch(endpoint,{headers});
        let data = await response.json();
        const detail = data.data
        return{
            products:detail
        }  
}; 
