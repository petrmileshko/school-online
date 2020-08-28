import React, { useState, useEffect, useCallback } from "react";
import { useHttp } from "../../hooks/http.hook";
import { AnswersListItem } from "./AnswersListItem.jsx";

import Spinner from "react-bootstrap/Spinner";

export const AnswersList = () => {
  const { loading, request } = useHttp();
  const [answers, setAnswers] = useState([]);
  const getAnswersData = useCallback(
    async (signal) => {
      try {
        const data = await request(
          "https://cors-anywhere.herokuapp.com/http://test-school.webpeternet.com/RestController.php",
          "POST",
          { Table: "Answers", action: "scores", signal: signal }
        );
        console.log("data", data);
        handleData(data);
      } catch (err) {
        console.log(("___POST_ANSWERS___", err));
      }
    },
    [request]
  );
  const handleData = (data) => {
    const result = new Object();
    data.forEach((el) => {
      debugger
      if (!isEmpty(result)) {
        for (const name in result) {
          for (const subj in result[name]) {
            if (el.fio === name && el.subject === subj) {
              result[name][subj].push(el.score);
            } else if (el.fio === name && el.subject !== subj) {
              result[name][el.subject] = [el.score];
            } else {
              result[el.fio] = { [el.subject]: [el.score] };
            }
          }
        }
      } else {
        result[el.fio] = {
          [el.subject]: [el.score],
        };
      }
    });
    console.log("result", result);
  };
  const isEmpty = (obj) => JSON.stringify(obj) === "{}";

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
