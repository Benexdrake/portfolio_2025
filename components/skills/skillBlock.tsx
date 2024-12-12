import { getIcon, getStars } from "@/lib/helper";
import { Skill } from "@/types/skill";

import style from '@/style_modules/home/skill.module.css'

export default function SkillBlock(props:any)
{
    let skills = props.skills as Skill[];
    let title = props.title as string;


    return (
        <article key={title}>
        <h3 className={style.header}>{title}</h3>
        <br />
        <div className={style.skill_block}>
          {skills.map(x => {
            
            if (x.type.toLowerCase() === title.toLowerCase()) {
              console.log("HI")
              return (
                <div key={x.title} className={style.skill}>
                  <img src={getIcon(x.icon)} alt="" height={50} />
                  <p>{getStars(x.stars)}</p>
                </div>
              )
            }
          })}
        </div>
      </article>
    )
}