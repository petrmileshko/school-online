import React, { useState, useEffect, useCallback } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { AnswersListItem } from './AnswersListItem.jsx';

import Spinner from 'react-bootstrap/Spinner';

export const AnswersList = () => {
	const { loading, request } = useHttp();
	const [answers, setAnswers] = useState([]);
	const getAnswersData = useCallback(
		async (signal) => {
			try {
				const data = await request(
					'https://cors-anywhere.herokuapp.com/http://test-school.webpeternet.com/MainController.php',
					'POST',
					{
						Table: 'Answers',
						action: 'getAnswers',
						question: 'string',
						signal: signal,
					},
				);

				setAnswers(data);
			} catch (err) {
				console.log(('___POST_ANSWERS___', err));
			}
		},
		[request],
	);

	useEffect(() => {
		const abortController = new AbortController();
		const signal = abortController.signal;

		getAnswersData(signal);

		return function cleanup() {
			abortController.abort();
		};
	}, [getAnswersData]);

	return (
		<>
			{(loading || !answers) && (
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			)}
			{!loading && answers && (
				<div className="widget__body">
					<div className="table-responsive">
						<table className="table table-hover mb-0">
							<thead>
								<tr>
									<th>Дата</th>
									<th>ФИО</th>
									<th>Задание</th>
									<th>Оценка</th>
									<th>Действия</th>
								</tr>
							</thead>
							<tbody>
								<AnswersListItem answers={answers} />
							</tbody>
						</table>
					</div>
				</div>
			)}
		</>
	);
};
