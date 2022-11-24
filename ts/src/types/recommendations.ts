export interface Condition {
  value: string[];
  type: string;
  compare: string;
  multiple: boolean;
  testCase: string;
  name?: string;
}

export interface Recommendation {
  conditions: Record<string, Condition>[];
  id: number;
  name: string;
  tests: Record<string, string[]>;
}

export interface ResRecommendation {
  result: string;
  status: number;
}
