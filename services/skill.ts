import axios from "axios"

export default async function Skills()
{
    return await axios.get(`${process.env.Portfolio_API}/skills`).then(x => {return x.data})
}