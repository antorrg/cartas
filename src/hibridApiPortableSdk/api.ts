
export class HibridApiLetters {
    private readonly url : string
    private readonly apiKey : string
    constructor(
        url: string,
        apiKey: string
    ){
        this.url = url
        this.apiKey = apiKey
    }
    async createLetter(data:{tema:string, mensaje: string}){
        const response = await fetch(`${this.url}/api/v1/extclients/letters/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this.apiKey
            },
            body: JSON.stringify(data)
        })
        if(!response.ok){
            throw new Error(`Error ${response.status} in request`)
        }
        const pepe = await response.json()
        //console.log('soy pepe',pepe)
        return pepe
    }
    async getLetters(params: {page:string, limit: string}){
          const queryParams = new URLSearchParams(params).toString();
        const finalUrl = `${this.url}/api/v1/extclients/letters?${queryParams}`
        const response = await fetch(finalUrl,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this.apiKey
            },
        })
                if(!response.ok){
            throw new Error(`Error ${response.status} in request`)
        }
               const pepe = await response.json()
        console.log('soy pepe', pepe.results)
        return pepe.results
    }
}
