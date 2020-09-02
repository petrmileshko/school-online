import React from "react";

export const AnswersListItem = ({ answers }) => {

    console.log(answers);
    
    const answerItem = answers.map((el, i) => {
        return (
            <tr key={i}>
                <td>{ el.fio }</td>
                <td>{ el.subject }</td>
                <td>{ el.score }</td>
            </tr>
        )
    });

    return answerItem;
}