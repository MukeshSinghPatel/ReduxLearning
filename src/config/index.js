export const registerFormControls = [
    {
        name: 'UserName',
        label: 'User Name',
        placeholder: 'Enter your user name',
        componentType: 'input',
        type: 'text',
    },
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        componentType: 'input',
        type: 'email',
    },
    {
        name: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        componentType: 'input',
        type: 'password',
    }
]

export const loginFormControls = [
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        componentType: 'input',
        type: 'email',
    },
    {
        name: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        componentType: 'input',
        type: 'password',
    }
]

export const userHeaderMenuItems = [
    {
        id: "home",
        label: "Home",
        path: "/user/home",
    },
    {
        id: "jobs",
        label: "Jobs",
        path: "/user/jobs",
    },
    {
        id: "companies",
        label: "Companies",
        path: "/user/companies",
    },
    {
        id: "contact",
        label: "Contact",
        path: "/user/contact"
    },
    {
        id: "search",
        label: "Search",
        path: "/user/search",
    },
];

export const jobByRole = [
    {
        id: "frontendDev@1",
        label: "Frontend Developer",
        company: "Accenture",
        path: "/user/jobs",
    },
    {
        id: "backendDev@1",
        label: "Backend Developer",
        company: "Infosys",
        path: "/user/jobs",
    },
    {
        id: "testing@1",
        label: "Automation Testing",
        company:"Accenture",
        path: "/user/companies",
    }
];