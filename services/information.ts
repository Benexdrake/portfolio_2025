import axios from "axios"

export default async function InformationService()
{
    return await axios.get(`${process.env.Portfolio_API}/information`).then(x => {return x.data})
}