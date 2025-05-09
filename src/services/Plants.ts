// TODO: arregla typos de "error", maneja caso de error y exito
// export async function getPlants(): Promise<any> {

//     return [];
// }

export async function getData() {
    try {
        const response = await fetch("http://192.168.131.101:8080/dca/api/plants")
        const data = response.json()

        console.log(data);
        
    } catch (error) {
        
    }
}
