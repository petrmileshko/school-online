import React from 'react';

import avatar from '../../img/avatar-01.jpg';


export const Profile = ({ user }) => {

    return (
        <div className="widget__wrapper widget__profile has-shadow">
            <div className="widget__body">
                <img src={ avatar } alt="avatar" className="user__img" width="150"
                        height="150" />
                <span className="user__name h3">{user.fio}</span>
                <span className="user__email h4 mb-4">{user.email}</span>
                <span className="user__position h4 mb-4">
                    {user.access}
                    {
                        user.class ? `. Класс: ${user.class}` : ''
                    }
                </span>
                {
                    user.subject &&
                    <ul className="user__subjects subject__list">
                        <li className="subject__item">
                            <a href="/" className="subject__link">
                                {user.subject}
                            </a>
                        </li>
                    </ul>
                }
                <hr className="separator-dashed" />

            </div>
        </div>
    )
}