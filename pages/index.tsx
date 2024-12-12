import AboutMeBlock from "@/components/about/aboutMe"
import Github from "@/components/about/github"
import Skills from "@/components/about/skills"
import InformationService from "@/services/information"
import {GetGithubUser, GetLastUpdatedProject} from "@/services/github";
import { GithubUser } from "@/types/githubUser";
import { Information } from "@/types/information";
import { Project } from "@/types/project";

import style from '@/style_modules/home/index.module.css'
import { Skill } from "@/types/skill";
import SkillsService from "@/services/skill";

export default function Home(props:any) 
{
let information = props.information as Information;  
let skills = props.skills as Skill[]
let user = props.user;
let project = JSON.parse(props.str);

  return (
    <div className={style.container}>
      <AboutMeBlock aboutMe={information}/>

      <Skills skills = {skills}/>

      <Github user={user} project={project}/>
    </div>
  )
}

export async function getServerSideProps()
{
  let information = await InformationService() as Information
  let skills = await SkillsService() as Skill[];

  let user = await GetGithubUser() as GithubUser;
  let project = await GetLastUpdatedProject() as Project;

  let str = JSON.stringify(project)

  return {
    props: {
      information,
      skills,
      user,
      str
    }
  }

}
