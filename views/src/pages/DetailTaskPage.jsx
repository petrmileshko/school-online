import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header.jsx";
import { Sidebar } from "../components/Sidebar/Sidebar.jsx";
import { TaskDetail } from '../components/Tasks/TaskDetail.jsx';
import { useHttp } from "../hooks/http.hook";
//import RichTextEditor from '../components/RichTextEditor/RichTextEditor.js';
import { Editor, EditorState } from 'draft-js';

import 'draft-js/dist/Draft.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

export const DetailTaskPage = () => {
    const taskId = useParams().id;
    const [sbShrink, setSbShrink] = useState(true);
    const [task, setTask] = useState();
    const [answer, setAnswer] = useState();
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const {request, loading} = useHttp();
    
    const sidebarToggleHandler = useCallback(() => {
        
        setSbShrink(prev => !prev);
        
    }, []);

    const getTaskData = useCallback(async () => {
        try {
            const data = await request(
                'https://cors-anywhere.herokuapp.com/http://test-school.webpeternet.com/RestController.php',
                'POST',
                {Table: 'Tasks', action: 'getTask', id: taskId}
            );

            setTask(data);
            
        } catch (e) {}
    }, [taskId, request]);

    useEffect(() => {
        getTaskData();
    }, [getTaskData]);

    const getEditorContent = () => {
        const content = editorState.getCurrentContent().getPlainText();
        
        setAnswer(content);
    }

    return (
        <div className={`page page__task-detail${ sbShrink ? '' : ' sidebar-shrink' }`}>
            <Header 
                sbToggle={ sidebarToggleHandler }
                sidebarShrink={ sbShrink }
            />
            <div className="page__content d-flex align-items-stretch">
                <Sidebar sidebarShrink={ sbShrink} />
                {
                    (loading || !task) &&
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                }
                {
                    (!loading && task) &&
                    <div className="content__inner task__detail">
                        <Container fluid>
                            <Row>
                                <div className="content__header">
                                    <h1 className="content__header--title">{ task.task_name }</h1>
                                    <div className="breadcrumb__wrapper">
                                        <ul className="breadcrumb__list">
                                            <li className="breadcrumb__item">
                                                <a href="/" className="breadcrumb__link">Home</a>
                                            </li>
                                            <li className="breadcrumb__item">
                                                <Link to="/tasks" className="breadcrumb__link">Tasks</Link>
                                            </li>
                                            <li className="breadcrumb__item">
                                                <span className="breadcrumb__link">{ task.task_name }</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Row>
                            <Row className="flex-row">
                                <Col xs={12}>
                                    <div className="widget__wrapper has-shadow">
                                        <TaskDetail task={ task } />
                                    </div>
                                </Col>
                                <Col xs={12}>
                                    <div className="widget__wrapper has-shadow">
                                        <div className="widget__header">
                                            <h4 className="widget__title">Ответ на задание</h4>
                                        </div>
                                        <div className="widget__body">
                                            <Editor
                                                placeholder="Enter your answer..."
                                                editorState={ editorState }
                                                onChange={ setEditorState }
                                            />
                                            <div className="btn__group pt-5 pb-3">
                                                <Button
                                                    className="btn btn__gradient btn__grad-danger"
                                                    onClick={ getEditorContent }
                                                >
                                                    Save
                                                </Button>
                                                <Button variant="secondary" type="reset">Cancel</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                }
            </div>
        </div>
    )
}