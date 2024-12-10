import axios from "axios"

export default async function Resume()
{
    return await axios.get(`${process.env.Portfolio_API}/resume`).then(x => {return x.data})
}