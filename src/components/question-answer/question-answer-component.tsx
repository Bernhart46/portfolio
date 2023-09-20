import "./question-answer-component.scss";
import { QuestionAnswerComponentProps } from "./question-answer-types";

export function QuestionAnswerComponent({
  question,
  answer,
}: QuestionAnswerComponentProps) {
  return (
    <div className="question-answer-component">
      {question}
      <br />
      {answer}
    </div>
  );
}
