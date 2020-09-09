import React, { useState, useCallback, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';
import { Header } from '../components/Header/Header.jsx';
import { Sidebar } from '../components/Sidebar/Sidebar.jsx';

import Spinner from 'react-bootstrap/Spinner';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const TaskEditPage = () => {
	const [sbShrink, setSbShrink] = useState(true);
	const taskId = useParams().id;
	const [task, setTask] = useState(null);
	const { token } = useContext(AuthContext);
	const { loading, request } = useHttp();
	const history = useHistory();
	const [form, setForm] = useState({
		task_body: '',
		task_description: '',
		task_name: '',
	});

	const formGroupClasses = 'row d-flex align-items-center mb-5';
	const formLabelClasses = 'col-lg-3 form-control-label';

	const sidebarToggleHandler = useCallback(() => {
		setSbShrink((prev) => !prev);
	}, []);

	const changeHandler = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	const getTask = useCallback(async () => {
		try {
			const data = await request(
				'https://cors-anywhere.herokuapp.com/http://test-school.webpeternet.com/MainController.php',
				'POST',
				{
					Table: 'Tasks',
					action: 'getTask',
					id: taskId,
				},
			);
			setTask(data);
		} catch (e) {}
	}, [request, taskId]);

	useEffect(() => {
		getTask();
	}, [getTask]);

	useEffect(() => {
		if (task)
			setForm({
				task_body: task.task_body,
				task_description: task.task_description,
				task_name: task.task_name,
			});
	}, [task]);

	const saveTaskHandler = useCallback(async () => {
		if (!task) return;
		try {
			await request(
				'https://cors-anywhere.herokuapp.com/http://test-school.webpeternet.com/MainController.php',
				'POST',
				{
					Table: 'Tasks',
					action: 'Update',
					question: token,
					id: taskId,
					...form,
					user_id: task.user_id,
					subject_id: task.subject_id,
				},
			);
			history.push(`/task/${taskId}`);
		} catch (e) {}
	}, [request, token, form, task, taskId, history]);

	return (
		<div className={`page page__task-edit${sbShrink ? '' : ' sidebar-shrink'}`}>
			<Header sbToggle={sidebarToggleHandler} sidebarShrink={sbShrink} />
			<div className="page__content d-flex align-items-stretch">
				<Sidebar sidebarShrink={sbShrink} />
				{(loading || !task) && (
					<Spinner animation="border" role="status">
						<span className="sr-only">Loading...</span>
					</Spinner>
				)}
				{!loading && task && (
					<div className="content__inner tasks">
						<Container fluid>
							<Row>
								<div className="content__header">
									<h1 className="content__header--title">
										Редактировать задание {task.task_name}
									</h1>
									<div className="breadcrumb__wrapper">
										<ul className="breadcrumb__list">
											<li className="breadcrumb__item">
												<a href="/" className="breadcrumb__link">
													Home
												</a>
											</li>
											<li className="breadcrumb__item">
												<span className="breadcrumb__link">
													Редактировать задание
												</span>
											</li>
										</ul>
									</div>
								</div>
							</Row>
							<Row className="flex-row">
								<Col>
									<div className="widget__wrapper has-shadow">
										<Form className="form-horizontal p-5">
											<Form.Group
												className={formGroupClasses}
												controlId="inputName"
											>
												<Form.Label className={formLabelClasses}>
													Название
												</Form.Label>
												<Col lg={7}>
													<Form.Control
														type="text"
														name="task_name"
														placeholder="Введите название"
														value={form.task_name}
														onChange={changeHandler}
													/>
												</Col>
											</Form.Group>
											<Form.Group
												className={formGroupClasses}
												controlId="inputShortText"
											>
												<Form.Label className={formLabelClasses}>
													Краткое описание задания
												</Form.Label>
												<Col lg={7}>
													<Form.Control
														as="textarea"
														rows="3"
														name="task_description"
														placeholder=""
														value={form.task_description}
														onChange={changeHandler}
													/>
												</Col>
											</Form.Group>
											<Form.Group
												className={formGroupClasses}
												controlId="inputDetailText"
											>
												<Form.Label className={formLabelClasses}>
													Текст задания
												</Form.Label>
												<Col lg={7}>
													<Form.Control
														as="textarea"
														rows="10"
														name="task_body"
														placeholder=""
														value={form.task_body}
														onChange={changeHandler}
													/>
												</Col>
											</Form.Group>
											<div className="btn__group">
												<Button
													className="btn btn__gradient btn__grad-danger"
													type="submit"
													onClick={saveTaskHandler}
												>
													Сохранить
												</Button>
												<Button
													variant="secondary"
													type="reset"
													onClick={history.goBack}
												>
													Отменить
												</Button>
											</div>
										</Form>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
				)}
			</div>
		</div>
	);
};
