export interface Questions {
  type: string;
  name: string;
  title: string;
  isRequired: boolean;
  choices: any[];
  maxSelectedChoices: number;
  defaultValue?: number;
  inputType: string;
  min?: number;
  max?: number;
  description: string;
  step?: number;
  visibleIf: string;
  separateSpecialChoices?: boolean;
  showOtherItem?: boolean;
  otherText: string;
  showNoneItem?: boolean;
  noneText: string;
  showSelectAllItem?: boolean;
  visible?: boolean;
  expression: string;
  columns: string[];
  rows: string[];
  selectAllText: string;
}

export interface QuestionsPages {
  name: string;
  elements: Questions[];
  visibleIf: string;
  title: string;
  visible?: boolean;
}

export interface QuestionsContent {
  pages: QuestionsPages[];
}

export interface ResQuestions {
  id: string;
  content: QuestionsContent;
}
