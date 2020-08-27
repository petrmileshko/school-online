import React from 'react';

export default function GroupsList (props) {
    const {user} = props;
     console.log(user);

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
                            <td>4,0</td>
                            <td>5,0</td>
                            <td>4,8</td>
                            <td>4,8</td>
                            <td>4,8</td>
                        </tr>  
                    </tbody>
                </table>
            </div>
        </div>
    )
}

// {props.user.map(item =>(
//     <tr key={item.id}>
//         <td>{item.fio}</td>