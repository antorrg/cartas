import { HibridApiLetters } from "./api";

const url = import.meta.env.VITE_HIBRID_API_URL
const key = import.meta.env.VITE_HIBRID_API_API_KEY

export const hibridApiLetters = new HibridApiLetters(url, key)

/*{
  "message": "",
  "results": {
    "info": {
      "currentPage": 1,
      "totalPages": 1
    },
    "data": [
      {
        "id": "01a0d852-13db-71a7-930b-374ea64ef099",
        "tema": "Ansiedad",
        "mensaje": "Un mensaje cualquiera para probar la api"
      },
      {
        "id": "01a0d9a8-783a-7355-9be3-cd91e43805ac",
        "tema": "Ansiedad",
        "mensaje": "Un segundo mensaje para probar la api"
      },
      {
        "id": "01a0d9a9-3bc8-7785-b124-89a857e3f0ce",
        "tema": "Ansiedad",
        "mensaje": "Un tercer mensaje para probar la api"
      }
    ],
    "count": 3
  }
}*/