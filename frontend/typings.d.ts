interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  location: string;
  duration_of_Job: string;
  title_of_job: string;
  company: string;
}
