import axios from "axios"

export default async function SkillsService()
{
    return await axios.get(`${process.env.Portfolio_API}/skills`).then(x => {return x.data})
}