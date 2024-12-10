import axios from "axios"

export default async function Information()
{
    return await axios.get(`${process.env.Portfolio_API}/information`).then(x => {return x.data})
}