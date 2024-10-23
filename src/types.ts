export interface Result {
  pageUrl: string;
  issues: Issue[]
}

export interface Issue {
  type: string;
  message: string,
  code: string,
  context: string,
  selector: string
}
