import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';
import { TasksListItem } from '../Tasks/TasksListItem.jsx';
import { AuthContext } from '../../context/AuthContext';

import Spinner from 'react-bootstrap/Spinner';

export const TasksList = () => {
	const { loading, request } = useHttp();
	const [tasks, setTasks] = useState();
	const { userAccess } = useContext(AuthContext);

	useEffect(() => {
		const tasksData = async () => {
			try {
				const data = await request(
					`https://cors-anywhere.herokuapp.com/http://test-school.webpeternet.com/MainController.php?Table=Tasks&action=getTasks`,
				);

				setTasks(data);
			} catch (e) {}
		};
		tasksData();
	}, [request]);

	return (
		<>
			{(loading || !tasks) && (
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			)}
			{!loading && tasks && (
				<div className="widget__body">
					<div className="table-responsive">
						<table className="table table-hover mb-3">
							<thead>
								<tr>
									<th>Date</th>
									<th>Subject</th>
									<th>Topic</th>
									<th>Group Name</th>
									<th>Teacher</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								<TasksListItem tasks={tasks} />
							</tbody>
						</table>
						{userAccess === 'Учитель' && (
							<Link to="/tasks/create" className="btn btn-primary">
								Добавить задание
							</Link>
						)}
					</div>
				</div>
			)}
		</>
	);
};
