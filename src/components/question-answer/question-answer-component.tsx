import { useState } from "react";
import "./question-answer-component.scss";
import { QuestionAnswerComponentProps } from "./question-answer-types";

export function QuestionAnswerComponent(props: QuestionAnswerComponentProps) {
  const { question, answer } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="question-answer-component">
      <div className={"question-part"} onClick={toggleIsOpen}>
        {question}
      </div>
      <div
        className={`answer-part answer-part${isOpen ? "--open" : "--closed"}`}
      >
        <div className="answer-text">{answer}</div>
      </div>
    </div>
  );
}
