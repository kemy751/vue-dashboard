<template>
    <div class="container">
        <sidebar />
        <main>
            <navbar />
            <content />
            <dashboard-footer />
        </main>
    </div>
</template>
<script>
import Sidebar from '../pages/layouts/sidebar.vue';
import Navbar from '../pages/layouts/navbar.vue';
import Content from './content.vue';
import Footer from '../pages/layouts/footer.vue';

export default {
    components: {
        Sidebar,
        Navbar,
        Content,
        Footer,
    },
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
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
    margin: 0 auto;
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
    width: 3.5rem;
    height: 2.8rem;
    border-radius: 50%;
    overflow: hidden;
}

.text-muted {
    color: var(--color-light);
}


/* tables */
section table {
    width: 100%;
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    border: 0.07rem solid rgba(88, 88, 88, 0.532);
    color: black;
    margin-top: 1rem;
}

section table tr {
    text-align: center;
    border: none;
    height: 2.8rem;
    border-bottom: 1px solid var(--color-light);
    color: var(--color-dark);
}

section .button button {
    padding: 1rem;
    border-radius: 10px;
    background: rgba(1, 1, 52, 0.922);
    color: white;
    margin-top: 1rem;
}

section table tr th {
    text-align: center;
    font-size: 0.9rem;
}

section table tr .action i {
    font-size: 1rem;
    margin-left: 0.5rem;
    color: red;
}

.line {
    border: 1px solid rgba(231, 229, 229, 0.783);
    width: 100%;
    margin-top: 1.5rem;
}

/* Media queries */
@media screen and (max-width:1200px) {

    .container {
        display: grid;
        width: 94%;
        margin: 0 auto;
        gap: 1.8rem;
        grid-template-columns: 1fr;
    }

    aside {
        display: none;
    }

    .overlay aside {
        display: inline-block;
        margin-left: 1rem;
    }

    .overlay aside .top .close {
        display: flex;
        position: fixed;
        right: 10px;
        font-size: 1.5rem;
        cursor: pointer;
        margin-top: 0.5rem;
    }

    .overlay aside h3 {
        font-size: 0.7rem;
    }

    .overlay aside .sidebar .links {
        gap: 0.5rem;
        height: 2.7rem;

    }

    .overlay aside .sidebar .links i {
        font-size: 0.6rem;
    }

    .overlay small {
        font-size: 0.5rem;
    }

    .navbar .nav .top .menu {
        display: inline-block;
    }

    main section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    section .section1 .insights1 {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    section .section1 .insights2 {
        grid-template-columns: 1fr;
        gap: 0;
    }

}

/* ----MOBILE------- */
@media screen and (max-width:768px) {

    .container {
        display: grid;
        width: 90%;
    }

    main section {
        display: grid;
        grid-template-columns: 1fr;
    }

    aside {
        display: none;
    }

    aside .top h1 {
        font-size: 1rem;
    }

    .overlay aside .top .close {
        font-size: 1rem;
        right: 1rem;

    }

    .overlay {
        position: fixed;
        top: 0;
        right: 0;
        width: 40%;
        height: 100%;
        background-color: white;
        z-index: 99;
    }

    .overlay aside {
        display: inline-block;
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
    main .navbar .nav .top{
        width:270px;
    }

    .navbar .nav .search {
        display: none;    
    }

    .navbar .nav {
        display: flex;
        width: 100%;
        right: 0;
        gap: 1rem;
    }

    main .navbar .line {
        display: none;
    }

    .dropdown-content1 {
    left: 5px;
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
}
</style>
