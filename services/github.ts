import { GithubUser } from "@/types/githubUser";
import { Project } from "@/types/project";
import { Octokit } from "octokit";



export async function GetGithubUser() : Promise<GithubUser>
{
    const octo = new Octokit({
        auth: process.env.Github_Secret
    });

    const response = await octo.request('GET /user', {
        owner: process.env.Github_User,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });
      let u = response.data;
      let user:any = {};
      
      user.avatar = u.avatar_url as string;
      user.bio = u.bio as string;
      user.createdAt = u.created_at as string;
      user.followers = u.followers;
      user.following = u.following;
      user.location = u.location as string;
      user.name = u.name as string;
      user.publicRepos = u.public_repos;
      user.reposUrl = u.repos_url;
      user.url = u.html_url;

      return user;
}

export async function GetGithubProjects()
{
  const octo = new Octokit({
    auth: process.env.Github_Secret
});

const response = await octo.request('GET /user/repos', {
    owner: process.env.Github_User,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  let ps = response.data.map(x => {
    let project:any = {};
      project.name = x.name;
      project.cloneUrl = x.clone_url;
      project.createdAt = new Date(x.created_at as string);
      project.description = x.description as string;
      project.githubProjectUrl = x.html_url as string;
      project.lastUpdate = new Date(x.updated_at as string);
      project.language = x.language as string;

      return project;
  })
  const projects =  ps.filter(x => !x.name.includes('cv')).filter(x => !x.name.includes('Benexdrake'));
  return projects;
}

export async function GetLastUpdatedProject() : Promise<Project>
{
  let projects = await GetGithubProjects()

  let allDates = projects.map(x => {return x.lastUpdate}) as Date[] 

  let max = allDates.reduce(function (a, b) { return a > b ? a : b; });

  let project = projects.find(x => x.lastUpdate === max)

  return project;
}