import { browser } from '$app/environment';
import { env } from '$env/dynamic/public';
let authToken = browser && localStorage.getItem("token");
console.log(authToken);
export const load = async ({fetch})=>{
    const endpoint = env.PUBLIC_BASE_URL+"admin/shipment/shopify-orders"
    const headers = {
        'Access-Control-Allow-Origin' : '*',
        'Authorization': 'Bearer '+{authToken},
      };
        const response = await fetch(endpoint,{headers});
        let data = await response.json();
        const detail = data.data
        return{
            products:detail
        }  
}; 
