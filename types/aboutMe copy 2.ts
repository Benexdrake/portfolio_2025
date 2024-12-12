export type AboutMe = {
    title: string;
    profileText:string[];
    name: string;
    tel:string;
    email:string;
    street:string;
    plz:string;
    github:string;
    linkedin:string;
    birthOfDate: string;
    language: string[];
    programLanguage: string[];
    framework: string[];
    tool: string[];
    editorJourney: string[];
    operatingSystem: string[];
    totalProgrammExp: number;
    currentEmployee: string;
    location: string;
    skills: Skill[];
    journeys: Journey[];
  }
  
  export type Skill = {
    title: string;
    stars: number;
    type:string;
    icon:string;
  }

  export type Journey = {
    date: string;
    title: string;
    description:string;
    type:string;
  }