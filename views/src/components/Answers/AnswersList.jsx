import React, { useState, useEffect, useCallback } from "react";
import { useHttp } from "../../hooks/http.hook";
import { AnswersListItem } from "./AnswersListItem.jsx";

import Spinner from 'react-bootstrap/Spinner';

export const AnswersList = () => {
    const {loading, request} = useHttp();
    const [answers, setAnswers] = useState();

    const getAnswersData = useCallback(async () => {
        try {
            const data = await request(
                'https://cors-anywhere.herokuapp.com/http://test-school.webpeternet.com/RestController.php',
                'POST',
                {Table: 'Answers', action: 'scores'}
            );

            setAnswers(data);
            
        } catch (e) {}
    }, [request]);

    useEffect(() => {
        getAnswersData();
    }, [getAnswersData]);

    return (
        <>
        {
            (loading || !answers) &&
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        }
        {
            (!loading && answers) &&
            <div className="widget__body">
                <div className="table-responsive">
                    <table className="table table-hover mb-0">
                        <thead>
                            <tr>
                                <th>ФИО</th>
                                <th>Subject</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <AnswersListItem answers={answers} />
                        </tbody>
                    </table>
                </div>
            </div>
        }
        </>
    )
}