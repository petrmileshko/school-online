import React, { useState, useEffect, useCallback } from "react";
import { useHttp } from "../../hooks/http.hook";
import { TasksListItem } from "../Tasks/TasksListItem.jsx";

import Spinner from 'react-bootstrap/Spinner';

export const TasksList = () => {
    const {loading, request} = useHttp();
    const [tasks, setTasks] = useState();

    useEffect(() => {
        const tasksData = async () => {
            try {
                const data = await request(
                    'https://cors-anywhere.herokuapp.com/http://test-school.webpeternet.com/RestController.php',
                    'POST',
                    {Table: 'Tasks', action: 'all'}
                );

                setTasks(data);

            } catch (e) {}
        }
        tasksData();
    }, [request]);

    return (
        <>
        {
            (loading || !tasks) &&
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        }
        {
            (!loading && tasks) &&
            <div className="widget__body">
                <div className="table-responsive">
                    <table className="table table-hover mb-0">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Subject</th>
                                <th>Topic</th>
                                <th>Group Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TasksListItem tasks={tasks} />
                        </tbody>
                    </table>
                </div>
            </div>
        }
        </>
    )
}