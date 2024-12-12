import { Skill } from "@/types/skill";
import { getSkills} from "@/lib/helper";
import SkillBlock from "../skills/skillBlock";

import style from '@/style_modules/home/index.module.css'

export default function Skills(props: any) {
  let skills = props.skills as Skill[];

  return (
    <div className={style.box}>
      <h1 className={style.header}>Skills</h1>
      <hr className={style.break_line}/>
      <br />
      <div>
        <SkillBlock skills={getSkills('Program Languages',skills)} title="Program Languages"/>
        <br />
        <SkillBlock skills={getSkills('Web Entwicklung',skills)} title="Web Entwicklung"/>
        <br />
        <SkillBlock skills={getSkills('Framework',skills)} title="Framework"/>
        <br />
        <SkillBlock skills={getSkills('Database',skills)} title="Database"/>
        <br />
        <SkillBlock skills={getSkills('Others',skills)} title="Others"/>
        <br />
        <SkillBlock skills={getSkills('IDE',skills)} title="IDE"/>
        <br />
        <SkillBlock skills={getSkills('Git',skills)} title="Git"/>
        </div>
    </div>
  )
}