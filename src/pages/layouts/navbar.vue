<template>
    <slot>
        <div class="navbar">
            <div class="nav">
                <div class="search">
                    <input type="text" placeholder="Search">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </div>
                <div class="top">
                    <div class="theme-toggler dropdown1" id="">
                        <i class="fa fa-bell dropbtn1" aria-hidden="true"></i>
                        <div class="notification-indicator"></div>
                        <div class="dropdown-content1">
                            <a href="#">
                                <span class="fa fa-exclamation-triangle" aria-hidden="true"></span> Application error
                            </a>
                            <a href="#">
                                <span class="fa fa-user-plus" aria-hidden="true"></span>New employee registered
                            </a>
                        </div>
                        <i class="fa fa-commenting" aria-hidden="true"></i>
                    </div>
                    <div class="profile">
                        <div class="profile-photo">
                            <img src="../../images/christina-wocintechchat-com-lFntEHwQvi4-unsplash.jpg"
                                alt="profile image">
                        </div>
                        <div class="info">
                            <p>Admirra John</p>
                        </div>
                        <div class="dropdown2">
                            <i class="fa fa-chevron-down dropbtn2" aria-hidden="true"></i>
                            <div class="dropdown-content2">
                                <a href="#"><i class="fa fa-user" aria-hidden="true"></i>Admin</a>
                                <a href="#"><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</a>
                            </div>
                        </div>
                    </div>
                    <div class="menu">
                        <mobile-menu :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" @closeMenu="closeMenu" />
                    </div>
                </div>
            </div>
            <div class="line"></div>
        </div>
    </slot>
</template>
<script>
import MobileMenu from './MobileMenu.vue';
export default {
    components: {
        MobileMenu,
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
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>
<style scoped>
.navbar>div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 9rem;
}

.navbar .nav .search {
    position: relative;
}

.navbar .nav .search input[type=text] {
    display: inline-block;
    background: var(--color-background);
    border-radius: var(--border-radius-1);
    margin-top: 0.7rem;
    padding: 0.9rem 1.6rem;
    border: 1px solid rgb(189, 187, 187);
    width: 16rem;
    background-color: rgba(244, 243, 243, 0.781);

}

.navbar .nav .search i {
    font-size: 20px;
    color: rgb(189, 187, 187);
    position: absolute;
    top: 50%;
    left: 14rem;
    transform: translateY(-50%);
}

.navbar .nav .menu {
    display: none;
}

.navbar .nav .top {
    display: flex;
    justify-content: end;
    gap: 1rem;
}

.navbar .nav .top .theme-toggler {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.6rem;
    width: 4.2rem;
    cursor: pointer;
    border-radius: var(--border-radius-1);
    position: relative;
}

.navbar .nav .top .theme-toggler i {
    font-size: 1.2rem;
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 3rem;
}

.navbar .nav .top .theme-toggler .notification-indicator {
    position: absolute;
    top: 1.5rem;
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

.navbar .nav .top .profile {
    display: flex;
    gap: 1rem;
    text-align: right;
    margin-top: 1rem;
}

.navbar .nav .top .profile img{
    width:100%;
    height:100%;
}
.navbar .nav .profile .info p {
    margin-top: 0.9rem;
}

.top .dropdown1 {
    position: relative;
    display: inline-block;
}

.dropdown-content1 {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 220px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    top: 3rem;
    right: 0;
}

.dropdown-content1 a {
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    color: red;
    padding: 10px 16px;
    height: 40px;
}

.top .dropdown1 .dropdown-content1 a span {
    height: 10px;
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    text-align: left;
    font-size: 1rem;
}

.dropdown-content1 a:hover {
    background-color: #f1f1f1;
}

.dropdown1:hover .dropdown-content1 {
    display: block;
}


.top .dropdown2 {
    position: relative;
    display: inline-block;
    margin-top: 20px;
}

.dropdown-content2 {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 120px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    top: 20px;
    right: 5px;
}

.dropdown-content2 a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    color: red;
}

.dropdown-content2 a i {
    margin-right: 0.8rem;
    font-size: 1rem;
    color: red;
}

.dropdown-content2 a:hover {
    background-color: #f1f1f1;
}

.dropdown2:hover .dropdown-content2 {
    display: block;
}
</style>