import { useEffect, useRef, useState } from "react";
import "./question-answer-component.scss";
import { QuestionAnswerComponentProps } from "./question-answer-types";

export function QuestionAnswerComponent(props: QuestionAnswerComponentProps) {
  const { question, answer } = props;
  const questionRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMultipleLine, setIsMultipleLine] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const setHeightOnChange = () => {
    if (!questionRef || !questionRef.current) return;
    const height = questionRef.current.offsetHeight;

    if (height > 40) {
      setIsMultipleLine(true);
    } else {
      setIsMultipleLine(false);
    }
  };

  useEffect(() => {
    window.addEventListener("load", setHeightOnChange);
    window.addEventListener("resize", setHeightOnChange);

    return () => {
      window.removeEventListener("load", setHeightOnChange);
      window.removeEventListener("resize", setHeightOnChange);
    };
  }, []);

  return (
    <div className="question-answer-component">
      <div
        className={`question-part ${
          isMultipleLine ? "question-multiline" : ""
        }`}
        onClick={toggleIsOpen}
        ref={questionRef}
      >
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
