import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../../pages/Dashboard.vue';
import DashboardLayout from '../../components/DashboardLayout.vue';
import Departments from '../../pages/Departments.vue';
import Employees from '../../pages/Employees.vue';
import Recruitment from '../../pages/Recruitment.vue';
import Schedule from '../../pages/Schedule.vue';

const routes = [
    {
        path: '/',
        component: DashboardLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'dashboard', component: Dashboard },
            { path: 'recruitment', component: Recruitment },
            { path: 'schedule', component: Schedule },
            { path: 'employees', component: Employees },
            { path: 'departments', component: Departments },
         
            
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;
