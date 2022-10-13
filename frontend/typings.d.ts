interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  location: text;
  durationOfJob: text;
  titleOfJob: text;
  company: text;
}

export interface TechStack extends SanityBody {
  _type: "techStack";
  techStack: string;
}

export interface Project extends SanityBody {
  _type: "project";
  titleOfProject: string;
  techStack: string[];
  description: text;
  url: string;
}
