export const load = async ({fetch})=>{
    const endpoint = "http://192.168.0.166:8000/api/admin/shipment/shopify-orders";
        const response = await fetch(endpoint);
        let data = await response.json();
        const detail = data.data
        return{
            products:detail
        }  
}; 