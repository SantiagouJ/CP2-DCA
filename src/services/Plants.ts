export async function getData(){
    try {
        const response = await fetch("utils/data.json")
        const data = await response.json()
        
        return data
        
    } catch (error) {
        
    }
}
