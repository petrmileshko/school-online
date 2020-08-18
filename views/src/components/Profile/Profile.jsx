import React from 'react';

import avatar from '../../img/avatar-01.jpg';

export default function Profile (props) {

    const {user} = props;
    
    return (
        <div className="widget__wrapper widget__profile has-shadow">
            <div className="widget__body">
                <img src={ avatar } alt="avatar" className="user__img" width="150"
                    height="150" />
                <span className="user__name h3">{ user.name }</span>
                <span className="user__email h4 mb-4">{ user.email }</span>
                <span className="user__position h4 mb-4">Преподаватель</span>
                <ul className="user__subjects subject__list">
                    <li className="subject__item">
                        <a href="#" className="subject__link">История</a>
                    </li>
                    <li className="subject__item">
                        <a href="#" className="subject__link">Испанский язык</a>
                    </li>
                </ul>
                <hr className="separator-dashed" />
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="la la-group la-2x align-middle pr-2"></i>
                            Classes
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="la la-bell la-2x align-middle pr-2"/>
                            Lessons
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="la la-clipboard la-2x align-middle pr-2"></i>
                            Tasks
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./profile-settings.html">
                            <i className="la la-gears la-2x align-middle pr-2"></i>
                            Settings
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}