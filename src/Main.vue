<template>
    <div id="app">
        <router-view />
    </div>
</template>

<!-- <template>
    <div class="container">
        <aside>
            <div class="top">
                <div class="logo">
                    <h1>WeHR</h1>
                </div>
                <div class="close" id="close-btn">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div>
            </div>


            <div class="sidebar">
                <a class="text-muted">MAIN MENU</a>

                <router-link to="/" class="links active">
                    <i class="fa fa-th" aria-hidden="true"></i>
                    <h3>Dashboard</h3>
                </router-link>

                <router-link to="/recruiment" class="links">
                    <i class="fa fa-user-plus" aria-hidden="true"></i>
                    <h3>Recruitment</h3>
                </router-link>

                <router-link to="/schedule" class="links">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    <h3>Schedule</h3>
                </router-link>

                <router-link to="/employees" class="links">
                    <i class="fa fa-users" aria-hidden="true"></i>
                    <h3>Employees</h3>
                </router-link>

                <router-link to="/pages/schedule" class="links">
                    <i class="fa fa-id-badge" aria-hidden="true"></i>
                    <h3>Departments</h3>
                </router-link>

                <a class="text-muted">OTHER MENU</a>

                <a href="#">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <h3>Support</h3>
                </a>

                <a href="#">
                    <i class="fa fa-cog" aria-hidden="true"></i>
                    <h3>Settings</h3>
                </a>


            </div>
        </aside>
       
<main>
            <div class="navbar">
                <div class="nav">
                    <div class="search">
                        <input type="text" placeholder="Search">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </div>
                    <div class="top">
                        <button> <i class="fa fa-bars" aria-hidden="true"></i></button>
                        <div class="theme-toggler">
                            <i class="fa fa-bell" aria-hidden="true"></i>
                            <div class="notification-indicator"></div>
                            <i class="fa fa-commenting" aria-hidden="true"></i>
                        </div>
                        <div class="profile">
                            <div class="profile-photo">
                                <img src="./images/christina-wocintechchat-com-lFntEHwQvi4-unsplash.jpg"
                                    alt="profile image">
                            </div>
                            <div class="info">
                                <p>Admirra John</p>
                            </div>
                            <div class="dropdown">
                                <i class="fa fa-chevron-down" aria-hidden="true"></i>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="line"></div>
            </div>
          
            <section>
                <div class="section1">
                    <h1>Dashboard</h1>
                    <div class="insights1">

                        <div class="available">
                            <h2>Available Positions</h2>
                            <h1>24</h1>
                            <p>4 Urgently needed</p>
                        </div>
                        <div class="open">
                            <h2>Job Open</h2>
                            <h1>10</h1>
                            <p>4 Active hiring</p>
                        </div>
                        <div class="employees">
                            <h2>New Employees</h2>
                            <h1>24</h1>
                            <p>4 departments</p>
                        </div>
                    </div>
                    <div class="insights2">
                        <div class="totalemp">
                            <div class="left">
                                <h2>Total Employees</h2>
                                <h1>216</h1>
                                <p>120 Men</p>
                                <p>96 Women</p>
                            </div>
                            <div class="right">
                                <span class="badge">+2% Past month</span>
                            </div>
                        </div>
                        <div class="talent">
                            <div class="left">
                                <h2>Talent Request</h2>
                                <h1>16</h1>
                                <p>6 Men</p>
                                <p>10 Women</p>
                            </div>
                            <div class="right">
                                <span class="badge">+5% Past month</span>
                            </div>
                        </div>
                    </div>
                    <div class="card1">
                        <div class="title">
                            <h2>Announcements</h2>
                            <div class="date">
                                <input type="date" />
                            </div>
                        </div>
                        <div class="insights3">
                            <div class="annou">
                                <div class="annou1">
                                    <h3>Outing schedule for every department<br />5 minutes ago</h3>
                                    <div class="icons">
                                        <i class="fa fa-thumb-tack" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="annou">
                                <div class="annou1">
                                    <h3>Outing schedule for every department<br />5 minutes ago</h3>
                                    <div class="icons">
                                        <i class="fa fa-thumb-tack" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="annou">
                                <div class="annou1">
                                    <h3>IT Department need two more talens for UX/UI Designer position<br />5 minutes ago
                                    </h3>
                                    <div class="icons">
                                        <i class="fa fa-thumb-tack" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="annou">
                                <div class="annou1">
                                    <h3>IT Department need two more talens for UX/UI Designer position<br />5 minutes ago
                                    </h3>
                                    <div class="icons">
                                        <i class="fa fa-thumb-tack" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="annou">
                                <div class="annou1">
                                    <h3>IT Department need two more talens for UX/UI Designer position<br />5 minutes ago
                                    </h3>
                                    <div class="icons">
                                        <i class="fa fa-thumb-tack" aria-hidden="true"></i>
                                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="all">
                            <h2>See All Anouncements</h2>
                        </div>
                    </div>
                </div>



               <div class="section2">
                    <div class="recent-activity">
                        <div class="top">
                            <h2>
                                Recent Activity
                            </h2>
                        </div>
                        <div class="down">
                            <small>10:40 AM, Fri 10 Sept 2021</small>
                            <h2>You Posted a New Job</h2>
                            <p>Kindly Check the requirements and terms of work and make sure everything is okay.</p>
                            <div class="conclusion">
                                <h4>Today you made 12 activities </h4>
                                <button type="button">See All Activity</button>
                            </div>
                        </div>
                    </div>

                    <div class="card2">
                        <div class="title">
                            <h2>Upcoming Schedule</h2>
                            <div class="date">
                                <input type="date" />
                            </div>
                        </div>
                        <div class="schedule">
                            <small>Priority</small>
                            <div class="sch">
                                <div class="sch1">
                                    <div class="details">
                                        <h3>Review candidate applications</h3>
                                        <small>Today 11:30 AM</small>
                                    </div>
                                    <div class="icons">
                                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <small>Other</small>
                            <div class="sch">
                                <div class="sch1">
                                    <div class="details">
                                        <h3>Interview with candidates</h3>
                                        <small>Today 10:30 AM</small>
                                    </div>
                                    <div class="icons">
                                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="sch">
                                <div class="sch1">
                                    <div class="details">
                                        <h3>Short meeting with product designer
                                            from IT Departement</h3>
                                        <small>Today 10:30 AM</small>
                                    </div>
                                    <div class="icons">
                                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="sch">
                                <div class="sch1">
                                    <div class="details">
                                        <h3>Short meeting with product designer
                                            from IT Departement</h3>
                                        <small>Today 10:30 AM</small>
                                    </div>
                                    <div class="icons">
                                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="all">
                            <h2>Create a New Schedule</h2>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    </div>
</template> -->

