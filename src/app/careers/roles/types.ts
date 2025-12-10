export interface JobContent {
  overview: string;
  responsibilities: {
    title: string;
    items: string[];
  }[];
  requirements: string[];
  niceToHave: string[];
  success: string[];
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  content: JobContent | null;
}
