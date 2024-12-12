import { GithubUser } from "@/types/githubUser"
import { Project } from "@/types/project";
import { getImage } from "@/lib/helper";

import indexStyle from '@/style_modules/home/index.module.css'
import style from '@/style_modules/home/github.module.css'

export default function Github(props: any) {

  let user = props.user as GithubUser;
  let project = props.project as Project;

  return (
    <div className={indexStyle.box}>
      {user && (
        <div>
          <h1 className={indexStyle.header}>Github</h1>
          <hr className={indexStyle.break_line} />
          <br />
          <div  className={style.block}>
            <div>
              <img src={user.avatar} alt="" width={200} className={style.avatar}/>
            </div>
            <div>
              <h2>{user.name}, {user.location}</h2>
              <p>{user.bio}</p>
              <br />
              <div>
                <div className={style.table}>
                  <div className={style.table_row}>
                    <div>Repositories: </div>
                    <div>{user.publicRepos}</div>
                  </div>
                  <div className={style.table_row}>
                    <div>Followers: </div>
                    <div>{user.followers}</div>
                  </div>
                  <div className={style.table_row}>
                    <div>Following: </div>
                    <div>{user.following}</div>
                  </div>
                </div>
              </div>
              <div>
                On Github since {user.createdAt.split('T')[0]}
              </div>
            </div>
            <div style={{ margin: 'auto' }}>
              <div className={style.github_project}>
                <a href={project.cloneUrl} target="_blank" style={{ textDecoration: 'none' }}>
                  <div className={style.github_project_header}>{project.name}</div>
                  <div><img src={getImage(project.language)} alt="" className={style.github_project_image} /></div>
                  <div className={style.github_project_footer}><p>{project.description || 'Open Project'}</p></div></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}