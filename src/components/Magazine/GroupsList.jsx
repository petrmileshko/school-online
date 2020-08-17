import React from 'react';

export default function GroupsList () {
    return (
        <div className="widget__body">
            <div className="table-responsive">
                <table className="table table-hover mb-0">
                    <thead>
                        <tr>
                            <th>Ученики</th>
                            <th>Алгебра</th>
                            <th>Математика</th>
                            <th>Иностранный язык</th>
                            <th>Информатика</th>
                            <th>Физика</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Астахов В.Ю.</td>
                            <td>5,0</td>
                            <td>4,8</td>
                            <td>4,8</td>
                            <td>4,8</td>
                            <td>4,8</td>
                        </tr>
                        <tr>
                            <td>Ачкасов С.П.</td>
                            <td>4,4</td>
                            <td>5,0</td>
                            <td>4,7</td>
                            <td>4,7</td>
                            <td>4,7</td>
                        </tr>
                        <tr>
                            <td>Баринов В.И.</td>
                            <td>4,8</td>
                            <td>4,4</td>
                            <td>4,4</td>
                            <td>4,4</td>
                            <td>4,4</td>
                        </tr>
                        <tr>
                            <td>Будникова Ю.В.</td>
                            <td>4,9</td>
                            <td>4,4</td>
                            <td>4,2</td>
                            <td>4,1</td>
                            <td>4,4</td>
                        </tr>
                        <tr>
                            <td>Явлинский А.П.</td>
                            <td>5,0</td>
                            <td>4,4</td>
                            <td>4,8</td>
                            <td>4,1</td>
                            <td>4,3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}