import AdminHomePage from './../containers/AdminHomePage';
import TaskBroad from './../containers/TaskBroad';
import LoginPage from './../containers/LoginPage';
import SignupPage from './../containers/SignupPage';
export const API_ENDPOINT = "http://localhost:3000";

export const STATUSES = [
  {
    values: 0,
    label: 'READY',
  },
  {
    values: 1,
    label: 'IN PROGRESS',
  },
  {
    values: 2,
    label: 'COMPLETED',
  },
];

export const STATUS_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    UPDATED: 202
};


export const ADMIN_ROUTES = [
    {
        path : '/admin',
        name : 'Trang Quản Trị',
        exact : true,
        component : AdminHomePage
    },
    {
        path : '/admin/task-board',
        name : 'Quản Lý Công Việc',
        component : TaskBroad
    },
];

export const ROUTES = [
    {
        path : '/login',
        name : 'Đăng Nhập',
        component : LoginPage
    },
    {
        path : '/signup',
        name : 'Đăng Ký',
        component : SignupPage
    }
]

