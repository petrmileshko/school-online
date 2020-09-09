import React from 'react';
import { Link } from 'react-router-dom';

export const TasksListItem = (props) => {
	const { tasks } = props;

	const taskItem = tasks.map((el, i) => {
		return (
			<tr key={i}>
				<td>24-08-2020</td>
				<td>{el.subject}</td>
				<td>
					<Link to={`/task/${el.id}`}>{el.task_name}</Link>
				</td>
				<td>10 А</td>
				<td>{el.fio}</td>
				<td className="td-actions">
					<Link to={`/task/edit/${el.id}`}>
						<i className="la la-edit edit"></i>
					</Link>
					<a href="/">
						<i className="la la-close delete"></i>
					</a>
				</td>
			</tr>
		);
	});

	return taskItem;
};
