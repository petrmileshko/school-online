import React from 'react';
import { Link } from 'react-router-dom';

export const AnswersListItem = ({ answers }) => {
	answers.sort((a, b) => {
		if (a.score > 0) {
			return 1;
		}
		if (a.score === '0') {
			return -1;
		}

		return 0;
	});

	const answerItem = answers.map((el, i) => {
		return (
			<tr key={i}>
				<td>{new Date(el.time_stamp).toLocaleDateString()}</td>
				<td>{el.fio}</td>
				<td>
					<Link to={`/answer/${el.id}`} title="Проверить ответ на задание">
						{el.task_name}
					</Link>
				</td>
				<td className="text-center">{el.score > 0 && el.score}</td>
				<td className="text-center td-actions">
					{el.score > 0 && (
						<i className="la la-check-circle" title="Проверено"></i>
					)}
					{el.score <= 0 && (
						<Link to={`/answer/${el.id}`} title="Проверить ответ">
							<i className="la la-edit edit"></i>
						</Link>
					)}
				</td>
			</tr>
		);
	});

	return answerItem;
};
