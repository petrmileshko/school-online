import React from 'react';

export default function GroupsList () {
    return (
        <div className="widget__body">
            <div className="table-responsive">
                <table className="table table-hover mb-0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Subject</th>
                            <th>Group Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>054-01-FR</td>
                            <td>История</td>
                            <td>10 А</td>
                            <td className="td-actions">
                                <a href="#"><i className="la la-edit edit"></i></a>
                                <a href="#"><i className="la la-close delete"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>054-01-FR</td>
                            <td>Испанский язык</td>
                            <td>10 А</td>
                            <td className="td-actions">
                                <a href="/"><i className="la la-edit edit"></i></a>
                                <a href="/"><i className="la la-close delete"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}