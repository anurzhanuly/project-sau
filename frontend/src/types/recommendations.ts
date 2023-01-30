export interface Condition {
  value: string[];
  type: string;
  compare: string;
  multiple: boolean;
  testCase: string;
  questionName: string;
}

export interface Recommendation {
  conditions: Array<Array<Condition>>;
  id: string;
  name: string;
  tests: Record<string, string[]>;
}

export interface ResRecommendation {
  result: string;
  status: number;
}
