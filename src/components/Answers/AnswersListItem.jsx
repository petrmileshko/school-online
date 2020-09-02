import React from "react";

export const AnswersListItem = ({ answers, subjectsList }) => {
  const answerItem = answers.map((el, i) => {
    return (
      <tr key={i}>
        <td>{el.name}</td>
        {subjectsList.map((subj, i) => {
          const score = el.subjects.find((el) => el.title === subj).scores;
          return <td key={i}>{score}</td>;
        })}
      </tr>
    );
  });

  return answerItem;
};
