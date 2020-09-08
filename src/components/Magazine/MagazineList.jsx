import React, { useState, useEffect, useCallback } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { MagazineListItem } from './MagazineListItem';
import { MagazineFilter } from './MagazineFilter';

import Spinner from 'react-bootstrap/Spinner';

export const MagazineList = () => {
	const { loading, request } = useHttp();
	const [answers, setAnswers] = useState([]);
	const [subjectsList, setSubjectsList] = useState([]);
	const getAnswersData = useCallback(
		async (signal) => {
			try {
				const data = await request(
					'https://cors-anywhere.herokuapp.com/http://test-school.webpeternet.com/MainController.php',
					'POST',
					{ Table: 'Answers', action: 'scores', signal: signal },
				);

				handleData(data);
				getAllSubjects(data);
			} catch (err) {
				console.log(('___POST_ANSWERS___', err));
			}
		},
		[request],
	);

	const handleData = (data) => {
		const vocabulary = [];
		data.forEach((dataItem) => {
			if (dataItem.score !== null) {
				if (vocabulary.length > 0) {
					const student = vocabulary.find((el) => el.name === dataItem.fio);
					if (student) {
						const subj = student.subjects.find(
							(s) => s.title === dataItem.subject,
						);
						if (subj) {
							subj.scores.push(dataItem.score);
						} else {
							student.subjects.push({
								title: dataItem.subject,
								scores: [dataItem.score],
							});
						}
					} else {
						vocabulary.push({
							name: dataItem.fio,
							subjects: [{ title: dataItem.subject, scores: [dataItem.score] }],
						});
					}
				} else {
					vocabulary.push({
						name: dataItem.fio,
						subjects: [{ title: dataItem.subject, scores: [dataItem.score] }],
					});
				}
			}
		});

		vocabulary.forEach((stud) => {
			stud.subjects.forEach((subj) => {
				subj.scores = average(subj.scores);
			});
		});
		setAnswers(vocabulary);
	};

	const getAllSubjects = (data) => {
		let result = [];
		data.forEach((el) => {
			result.push(el.subject);
		});

		result = result.filter((item, pos) => result.indexOf(item) === pos);
		setSubjectsList(result);
	};

	const average = (nums) => {
		return nums.reduce((a, b) => a + b) / nums.length;
	};

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
            <MagazineFilter />
			{!loading && answers && (
				<div className="widget__body">
					<div className="table-responsive">
						<table className="table table-hover mb-0">
							<thead>
								<tr>
									<th>ФИО</th>
									{subjectsList.map((subjName, i) => (
										<th key={i}>{subjName}</th>
									))}
								</tr>
							</thead>
							<tbody>
								<MagazineListItem
									answers={answers}
									subjectsList={subjectsList}
								/>
							</tbody>
						</table>
					</div>
				</div>
			)}
		</>
	);
};
