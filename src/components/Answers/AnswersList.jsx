import React, { useState, useEffect, useCallback } from "react";
import { useHttp } from "../../hooks/http.hook";
import { AnswersListItem } from "./AnswersListItem.jsx";

import Spinner from "react-bootstrap/Spinner";

export const AnswersList = () => {
  const { loading, request } = useHttp();
  const [answers, setAnswers] = useState([
    {
      name: "",
      subjects: [{ title: "", score: 0 }],
    },
  ]);

  const getAnswersData = useCallback(
    async (signal) => {
      try {
        const data = await request(
          "https://cors-anywhere.herokuapp.com/http://test-school.webpeternet.com/RestController.php",
          "POST",
          { Table: "Answers", action: "scores", signal: signal }
        );
        console.log("data", data);

        const cleanData = removeMatches(data);
        console.log(cleanData);
      } catch (err) {
        console.log(("___POST_ANSWERS___", err));
      }
    },
    [request]
  );
  const removeMatches = (data) => {
    const removed = {
      students: [],
      subjects: [],
    };

    data.forEach((el) => {
      removed.students.push(el.fio);
      removed.subjects.push(el.subject);
    });

    for (const prop in removed) {
      removed[prop] = removed[prop].filter(
        (item, pos) => removed[prop].indexOf(item) === pos
      );
    }

    return removed;
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
      {!loading && answers && (
        <div className="widget__body">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead>
                <tr>
                  <th> Фио </th>

                  <th> Оценка </th>
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
