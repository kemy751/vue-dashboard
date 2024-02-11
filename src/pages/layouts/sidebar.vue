<template>
    <slot>
        <div class="sidebar">
            <aside>
                <div class="top">
                    <div class="logo">
                        <h1>WeHR</h1>
                    </div>
                    <div class="close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>

                <div class="sidebar">
                    <small class="text-muted">MAIN MENU</small>

                    <router-link to="/dashboard" class="links active">
                        <i class="fa fa-th" aria-hidden="true"></i>
                        <h3>Dashboard</h3>
                    </router-link>

                    <router-link to="/recruitment" class="links">
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

                    <router-link to="/departments" class="links">
                        <i class="fa fa-id-badge" aria-hidden="true"></i>
                        <h3>Departments</h3>
                    </router-link>

                    <small class="text-muted">OTHER MENU</small>

                    <router-link to="" class="links">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <h3>Support</h3>
                    </router-link>

                    <router-link to="" class="links">
                        <i class="fa fa-cog" aria-hidden="true"></i>
                        <h3>Settings</h3>
                    </router-link>
                </div>
            </aside>
        </div>
    </slot>
</template>

<script>
export default {
    props: ['isMenuOpen'],
    methods: {
        closeMenu() {
            this.$emit('closeMenu');
        },
    },
};
</script>

<style scoped>
/* -------SIDEBAR------- */
aside {
    height: 100vh;
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
}
aside .close {
    display: none;
    font-size: 1rem;
}
 
aside .sidebar {
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 86vh;
    position: relative;
    top: 3rem;
}

aside h3 {
    font-weight: 300;
}

aside .sidebar .links {
    display: flex;
    color: var(--color-dark);
    gap: 1.2rem;
    align-items: center;
    position: relative;
    height: 3.7rem;
    transition: all 300ms ease;
}

aside .sidebar .links i {
    font-size: 1.2rem;
    transition: all 300ms ease;
}

aside .sidebar .links.active h3 {
    color: var(--color-danger);
    margin-left: 0;
}
aside .sidebar .links.active i {
    color: var(--color-danger);
    margin-left: 0;
}

aside .sidebar .links .active i {
    color: var(--color-danger);
    margin-left: 0;
}

aside .sidebar .links:hover h3 {
    color: var(--color-danger);
}

aside .sidebar .links:hover i {
    margin-left: 1rem;
    color: var(--color-danger);
}

/* --------END OF SIDEBAR----------- */
</style>