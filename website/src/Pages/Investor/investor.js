import React from 'react'
import { FaCoffee } from 'react-icons/fa'
// import './investor.css'

export default function Investor() {
    return (
        <div className="investor-screen">
            <div className="header">
                <h1 style="color: white; text-align: center;">Investor Relations and Fundraising</h1>
            </div>
            <div className="container">
                <div className="section">
                    <div className="column">
                        <div className="feature">
                            <a href="pitching_competitions.html">
                                <div className="box">

                                    <p><FaCoffee size={50} /></p>

                                    <div className="title">Pitching Competitions</div>
                                </div>
                            </a>
                        </div>
                        <div className="feature">
                            <a href="membership_plans.html">
                                <div class="box">

                                    <p><FaCoffee size={50} /></p>
                                    <div className="title">Membership Plans</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="feature">
                            <a href="free_courses.html">
                                <div className="box">

                                    <p><FaCoffee size={50} /></p>
                                    <div className="title">Provide Free Courses</div>
                                </div>
                            </a>
                        </div>
                        <div className="feature">
                            <a href="filter_investors.html">
                                <div className="box">
                                    <p><FaCoffee size={50} /></p>
                                    <div className="title">Filter Investors </div>
                                </div>
                            </a>
                        </div>
                        <div className="feature">
                            <a href="pitching_help.html">
                                <div className="box">
                                    <p><FaCoffee size={50} /></p>
                                    <div className="title">Counselors/Mentors for Pitching Help</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
