import React from "react";

export const AnswersListItem = props => {
    const { answers } = props;
    
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