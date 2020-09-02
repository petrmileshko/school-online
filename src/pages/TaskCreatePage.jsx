import React, { useState, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';
import { Header } from '../components/Header/Header.jsx';
import { Sidebar } from '../components/Sidebar/Sidebar.jsx';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const TaskCreatePage = () => {
	const [sbShrink, setSbShrink] = useState(true);
	const { userId } = useContext(AuthContext);
	const { request } = useHttp();
	const history = useHistory();
	const [form, setForm] = useState({
		task_name: '',
		task_description: '',
		task_body: '',
		task_file: '',
	});

	const formGroupClasses = 'form-group row d-flex align-items-center mb-5';
	const formLabelClasses = 'col-lg-3 form-control-label';

	const sidebarToggleHandler = useCallback(() => {
		setSbShrink((prev) => !prev);
	}, []);

	const changeHandler = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	const createTaskHandler = async () => {
		try {
			const data = await request(
				'https://cors-anywhere.herokuapp.com/http://test-school.webpeternet.com/MainController.php',
				'POST',
				{ Table: 'Tasks', action: 'create', ...form, user_id: userId },
			);
			console.log(data);
		} catch (e) {}
	};

	return (
		<div className={`page page__tasks${sbShrink ? '' : ' sidebar-shrink'}`}>
			<Header sbToggle={sidebarToggleHandler} sidebarShrink={sbShrink} />
			<div className="page__content d-flex align-items-stretch">
				<Sidebar sidebarShrink={sbShrink} />
				<div className="content__inner tasks">
					<Container fluid>
						<Row>
							<div className="content__header">
								<h1 className="content__header--title">Create Task</h1>
								<div className="breadcrumb__wrapper">
									<ul className="breadcrumb__list">
										<li className="breadcrumb__item">
											<a href="/" className="breadcrumb__link">
												Home
											</a>
										</li>
										<li className="breadcrumb__item">
											<span className="breadcrumb__link">Create Task</span>
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
													type="text"
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
													rows="3"
													name="task_body"
													placeholder=""
													value={form.task_body}
													onChange={changeHandler}
												/>
											</Col>
										</Form.Group>
										<Form.Group>
											<Form.File
												id="inputFile"
												name="task_file"
												label="Загрузите файл задания"
												accept=".txt"
												value={form.task_file}
												onChange={changeHandler}
											/>
										</Form.Group>
										<div className="btn__group">
											<Button
												className="btn btn__gradient btn__grad-danger"
												type="submit"
												onClick={createTaskHandler}
											>
												Save
											</Button>
											<Button variant="secondary" type="reset">
												Cancel
											</Button>
										</div>
									</Form>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		</div>
	);
};
