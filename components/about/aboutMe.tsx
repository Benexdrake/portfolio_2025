import { Information } from "@/types/information";
import style from '@/style_modules/home/aboutMe.module.css'
import indexStyle from '@/style_modules/home/index.module.css'

export default function AboutMeBlock(abouttMe:any)
{
    let me = abouttMe.aboutMe as Information;
    
    return (
        <div className={indexStyle.box}>
          <h1 className={indexStyle.header}>About</h1>
          <hr className={indexStyle.break_line}/>
          <br />
        <div className={style.box_items}>
          <div>
            <h5>Hello I am</h5>
            <h1>{me.name}</h1>
            <h3>I am a {me.title}</h3>
            <p className={style.motivation_text}>I am a motivated and versatile individual, always eager to take a new challenges.
                      With a passion for learning, i am dedicated to delivering high-quality results.
                      With a positive attitude and a growth mindset, i am ready to make a meaningful
                      contribution and achieve great things.</p>
                      <br />
            <a className={style.button} href="/Lebenslauf.pdf" target="_blank">Download CV</a>
            <br />
          </div>
          <div style={{margin:'auto'}}>
            <img className={style.about_image} src="/assets/Me.png" alt="" />
          <div className={style.icons}>
                <a href={me.github} className={style.icon}>
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a href={me.linkedin} className={style.icon}>
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href={"mailto:"+me.email} className={style.icon}>
                <i className="fa-solid fa-square-envelope"></i>
                </a>
            </div>
          </div>
        </div>
      </div>
    )
}