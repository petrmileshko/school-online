import React from "react";

export const TaskDetail = props => {
    const { task } = props;

    return (
        <>
        <div className="widget__header">
            <h4 class="widget__title">{ task.subject }</h4>
        </div>
        <div className="widget__body">
            <div className="d-flex justify-content-between align-items-center pb-4 pt-2">
                <span><strong>Преподаватель:</strong> { task.fio }</span>
                <a href={ task.task_file } className="btn btn-primary">Скачать задание</a>
            </div>
            <p>{ task.task_body }</p>
        </div>
        </>
    )
}