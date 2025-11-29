export interface University {
  id: string;
  name: string;
}

export interface Faculty {
  id: string;
  name: string;
  tagId: string;
  university: University;
}

export interface Score {
  id: string;
  year: number;
  scoreType: string;
  min: number;
  max: number;
  avg: number;
}

export interface CardInfoType {
  id: string;
  name: string;
  logo: string;
  roundSeats: number[];
  score: Score;
  faculty: Faculty;
  updatedAt: string;
  likes: number;
}

export interface CardInfoTypeResponse {
  university: University;
  faculty: Faculty;
  scores: Score[];
}
