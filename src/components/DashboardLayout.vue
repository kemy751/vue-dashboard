<template>
    <div class="container">
        <sidebar></sidebar>
        <main>
            <navbar></navbar>
            <content></content>
        </main>
    </div>
</template>
<script>
import Sidebar from '../pages/layouts/sidebar.vue';
import Navbar from '../pages/layouts/navbar.vue';
import Content from './content.vue';

export default {
    components: {
        Sidebar,
        Navbar,
        Content,
    },
    // rest of your component
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@200&display=swap');

:root {
    --color-white: white;
    --color-primary: rgb(3, 138, 211);
    --color-danger: rgb(249, 25, 25);
    --color-background-light: rgba(249, 245, 245, 0.845);
    --color-light: rgba(88, 88, 88, 0.532);
    --color-dark: rgb(15, 14, 14);
    --color-danger-light: rgba(248, 210, 210, 0.715);
    --color-button: rgb(250, 79, 79);
    --color-primary-light: rgba(199, 227, 243, 0.651);
    --color-purple: rgb(255, 96, 255);
    --color-background: white;
    --color-purple-light: rgba(244, 186, 244, 0.628);
    --color-info: rgb(2, 2, 64);
    --color-background-info: rgba(1, 1, 52, 0.922);
    --color-dark: rgb(36, 34, 34);
    /* --color-background-shadow:rgba(183, 181, 181, 0.532); */

    --card-border-radius: 0.5rem;
    --border-radius-1: 0.4rem;
    --border-radius-2: 0.8rem;
    --border-radius-3: 1.2rem;

    --card-padding: 1.2rem;
    --pading-1: 1.2rem;

    --box-shadow: 0 2rem 3rem var(--color-background-shadow);

}

* {
    margin: 0;
    padding: 0;
    outline: 0;
    appearance: none;
    border: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}



body {

    width: 100vw;
    height: 100vh;
    font-family: 'Lexend', sans-serif;
    font-size: 0.77rem;
    background-color: var(--color-background);
    user-select: none;
    overflow-x: hidden;
}

.container {
    display: grid;
    width: 96%;
    margin: 0 auto;
    gap: 1.8rem;
    grid-template-columns: 10rem auto;
}

a {
    text-decoration: none;
    color: var(--color-dark);
}

i {
    color: var(--color-light);

}

h1 {
    font-weight: 900;
    font-size: 1.6rem;
}

h2 {
    font-size: 1rem;
}

h3 {
    font-size: 0.9rem;
    font-weight: 600;
}

h4 {
    font-size: 0.8rem;
}

h5 {
    font-size: 0.77rem;
}

small {
    font-size: 0.75rem;
}

.profile-photo {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    overflow: hidden;

}

.text-muted {
    color: var(--color-light);
}

aside {
    height: 100vh;
    /* background: rgba(245, 242, 242, 0.687); */

}

aside .top {

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.4rem;
}

aside .top .logo {
    display: flex;

}

aside .top .logo h1 {
    text-align: center;
    color: black;
}

aside .close {
    display: none;
    font-size: 1rem;
}

aside .sidebar {
    display: flex;
    flex-direction: column;
    height: 86vh;
    position: relative;
    top: 3rem;

}

aside h3 {
    font-weight: 300;

}

aside .sidebar a {
    display: flex;
    color: var(--color-dark);
    gap: 1.2rem;
    align-items: center;
    position: relative;
    height: 3.7rem;
    transition: all 300ms ease;
}

aside .sidebar a i {
    font-size: 1.2rem;
    transition: all 300ms ease;
}


aside .sidebar a.active h3 {
    /* background:var(--color-light); */
    color: var(--color-danger);
    margin-left: 0;
}

aside .sidebar a.active i {
    /* background:var(--color-light); */
    color: var(--color-danger);
    margin-left: 0;
}



aside .sidebar a .active i {
    color: var(--color-danger);
    margin-left: 0;
}

aside .sidebar a:hover h3 {
    color: var(--color-danger);
}

aside .sidebar a:hover i {
    margin-left: 1rem;
    color: var(--color-danger);
}

/* ----------------END OF SIDEBAR----------------- */

/* ---------NAVABAR--------- */
main .navbar>div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 9rem;
}

main .navbar .nav .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

main .navbar .nav .search {
    position: relative;
}

main .navbar .nav .search input[type=text] {
    display: inline-block;
    background: var(--color-background);
    border-radius: var(--border-radius-1);
    margin-top: 0.7rem;
    padding: 0.9rem 1.6rem;
    border: 1px solid rgb(189, 187, 187);
    width: 16rem;
    background-color: rgba(244, 243, 243, 0.781);
    padding-right: 2rem;
}

main .navbar .nav .search i {
    font-size: 20px;
    color: rgb(189, 187, 187);
    position: absolute;
    top: 50%;
    left: 14rem;
    transform: translateY(-50%);
}

main .navbar .nav button {
    display: none;
}

main .navbar .nav .top {
    display: flex;
    justify-content: end;
    gap: 1rem;
}

main .navbar .nav .top .theme-toggler {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.6rem;
    width: 4.2rem;
    cursor: pointer;
    border-radius: var(--border-radius-1);
    position: relative;
}

main .navbar .nav .top .theme-toggler i {
    font-size: 1.2rem;
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 0.8rem;

}

main .navbar .nav .top .theme-toggler .notification-indicator {
    position: absolute;
    top: 1;
    right: 42px;
    background-color: red;
    color: white;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

main .navbar .nav .top .profile {
    display: flex;
    gap: 1rem;
    text-align: right;
    margin-top: 1rem;
}

main .navbar .nav .profile .info {
    margin-top: 0.9rem;
}

main .navbar .nav .profile .dropdown {
    margin-top: 0.7rem;
}

main .navbar .line {
    border: 1px solid rgba(231, 229, 229, 0.783);
    width: 100%;
    margin-top: 1.5rem;
}

/* ---------END OF NAVBAR------------ */


/* -------------------MAIN------------------- */
main{
    overflow:auto;
}
main section {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 2rem;
}

section .section1 .insights1 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

section .section1 .insights1>div {
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    margin-top: 1rem;
    box-shadow: var(--box-shadow);

}

section .section1 .insights1>div:hover {
    box-shadow: none;
}

section .section1 .insights1>div.available {
    background: var(--color-danger-light)
}

section .section1 .insights1>div.open {
    background: var(--color-primary-light);
}

section .section1 .insights1>div.employees {
    background: var(--color-purple-light);
}

section .section1 .insights1,
h1 {
    margin-top: 1rem;
    color: var(--color-info);
}

section .section1 .insights1,
h3 {
    color: var(--color-info);
}

section .section1 .insights1>div.available p {
    color: var(--color-danger);
}

section .section1 .insights1>div.open p {
    color: var(--color-primary);
}

section .section1 .insights1>div.employees p {
    color: var(--color-purple);
}

section .section1 .insights2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

section .section1 .insights2>div {
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    margin-top: 1rem;
    box-shadow: var(--box-shadow);
    border: 1px solid rgba(191, 188, 188, 0.409);
}

section .section1 .insights2>div h1 {
    font-size: 3.5rem;
}

section .section1 .insights2>div .badge {
    background: var(--color-danger-light);
    font-size: 10px;
    padding: 4px;
}

section .section1 .insights2>div p {
    font-size: 10px;
}

section .section1 .insights2>div {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

section .section1 .card1 .insights3 {
    height: 50vh;
    overflow: hidden;
}

section .section1 .card1 {
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    margin-top: 1rem;
    border: 1px solid rgb(198, 197, 197);
}

section .section1 .card1>div.title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

section .section1 .card1 .date {
    display: inline-block;
    background: var(--color-light);
    border-radius: var(--border-radius-1);
    /* margin-top: 1rem; */
    padding: 0.2rem 0.2rem;
}

section .section1 .card1 .date input[type="date"] {
    background: transparent;
    /* color: var(--color-dark); */
}

section .section1 .card1 .insights3 .annou {
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    margin-top: 0.4rem;
    border: 1px solid rgb(198, 197, 197);

}

section .section1 .card1 .insights3 .annou>div {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

section .section1 .card1 .all {
    padding-top: 0.8rem;
    text-align: center;
    color: var(--color-danger);
}

section .section1 .card1 .all h2 {
    font-size: 0.8rem;
}

section .section .insights3 .annou .annou1 h3 {
    font-weight: 100;
    color: black;
}

section .recent-orders h2 {
    margin-bottom: 0.8rem;

}

section .recent-orders table {
    background: var(--color-white);
    width: 100%;
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    text-align: center;
    box-shadow: var(--box-shadow);
    transition: all 300ms ease;
}

section .recent-orders table:hover {
    box-shadow: none;

}

main table tbody td {
    height: 2.8rem;
    border-bottom: 1px solid var(--color-light);
    color: var(--color-dark);

}

main table tbody tr:last-child td {
    border: none;
}

main .recent-orders a {
    text-align: center;
    display: block;
    margin: 1rem auto;

}

section .section2 .recent-activity {
    background: var(--color-background-info);
    color: var(--color-white);
    width: 100%;
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    margin-top: 5rem;
}

section .section2 .recent-activity .down {
    margin-top: 1rem;
    line-height: 1.5rem;
    padding: 10px;
}

section .section2 .recent-activity .down small {
    font-size: 0.5rem;
}

section .section2 .recent-activity .down .conclusion {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

section .section2 .recent-activity .down .conclusion button {
    background: var(--color-button);
    padding: 10px;
    border-radius: 5px;
    color: var(--color-white);
}

section .section2 .recent-activity .down .conclusion h4 {
    font-size: 0.7rem;
}

section .section2 .card2 {
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    margin-top: 1rem;
    border: 1px solid rgb(198, 197, 197);
}

section .section2 .card2 .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

section .section2 .card2 .schedule {
    height: 55vh;
    overflow: hidden;
}

section .section2 .card2 .schedule .sch {
    background: rgba(255, 254, 254, 0.781);
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    margin-top: 0.4rem;
    border: 1px solid rgb(198, 197, 197);
}

section .section2 .card2 .schedule .sch>div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

section .section2 .card2 .schedule .sch .sch1 h3 {
    font-weight: 100;
    color: black;
}

section .section2 .card2 .schedule .sch .sch1 .details small {
    font-size: 0.6rem;
}

section .section2 .card2 .all {

    text-align: center;
    color: var(--color-danger);
}

section .section2 .card2 .all h2 {
    padding: 0.6rem;
    font-size: 0.7rem;
}

/* ---------------------END------------------ */

/* Media queries */
@media screen and (max-width:1200px) {
    .container {
        width: 94%;
        grid-template-columns: 6rem auto;
    }

    aside .sidebar h3 {
        font-size: 0.8rem;
    }

    aside .sidebar a i {
        font-size: 0.8rem;
    }

    main section {
        display: grid;
        grid-template-columns: 1fr;
        /* gap: 2rem; */
    }


    section .section1 .insights1 {
        grid-template-columns: 1fr;
        gap: 0;
    }

    section .section1 .insights2 {
        grid-template-columns: 1fr;
        gap: 0;
    }


}

/* ----MOBILE------- */
@media screen and (max-width:768px) {

    body {
        background: green;
    }

    .container {
        width: 90%;
        grid-template-columns: 1fr;
    }

    aside {
        position: fixed;
        left: 0;
        background: var(--color-white);
        width: 18rem;
        z-index: 2;
        box-shadow: 3rem 3rem 4rem var(--color-light);
        height: 100vh;
        padding-right: var(--card-padding);
        display: none;

    }

    aside .sidebar .text-muted {
        display: none;
    }

    aside .sidebar h3 {
        display: inline;
    }

    aside .sidebar a {
        width: 100%;
        height: 3.5rem;
    }

    aside .close {
        display: inline-block;
        cursor: pointer;
    }

    main .navbar>div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0rem;
    }

    main .navbar .line {
        display: none;
    }

    main .navbar .nav .search {
        display: none;
    }

    section {
        margin-top: 5rem;
        padding: 0 1 rem;
    }

    section .section1 .insights1 {
        position: relative;
        margin: 0 0 0 0;
        width: 100%;
        grid-template-columns: 1fr;
    }

    section .section1 .insights2 {
        position: relative;
        margin: 3rem 0 0 0;
        width: 100%;
        grid-template-columns: 1fr;
    }

    section .section1 .insights3 {
        position: relative;
        margin: 3rem 0 0 0;
        width: 100%;

    }

    .section2 {
        width: 94%;
        margin: 0 auto 4rem;
    }

    main .navbar {
        position: fixed;
        top: 0;
        left: 0;
        align-items: center;
        padding: 0 0.8rem;
        height: 4.6rem;
        background: var(--color-white);
        width: 100%;
        margin: 0;
        z-index: 2;
        box-shadow: 0 1rem 1rem var(--color-light);
    }

    .right .top .theme-toggler {
        width: 4.4rem;
        position: absolute;
        left: 66%;
    }



    .right .top .profile .info {
        display: none;
    }

    .right .top button {
        display: inline-block;
        background: transparent;
        cursor: pointer;
        color: var(--color-dark);
        position: absolute;
        left: 1rem;
    }

    .right .top button i {
        font-size: 2rem;
    }

    .right .theme-toggler i {
        font-size: 1.2rem;
        width: 50px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-top: 0.8rem;

    }

    .right .theme-toggler .notification-indicator {
        position: absolute;
        left: 18px;
    }
}
</style>
