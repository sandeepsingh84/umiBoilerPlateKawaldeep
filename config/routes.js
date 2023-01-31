export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'Form Practice',
    icon: 'FormOutlined',
    path: '/list',
    component: './ReviewForm',
  },
  {
    name: 'table practice',
    icon: 'FormOutlined',
    path: '/Table',
    component: './TablePractice',
  },
  {
    name: 'Student Detail ',
    icon: 'TableOutlined',
    path: '/StudentDetailTable ',
    component: './StudentDetailTable',
  },
  {
    name: 'Grid Practice',
    icon: 'TableOutlined',
    path: '/GridPract',
    component: './GridPractice',
  },
  // {
  //   name: 'Drawer Detail',
  //   icon: 'TableOutlined',
  //   path: '/DrawerPractice ',
  //   component: './DrawerPractice',
  // },
  {
    name: 'Drawer Form',
    icon: 'WarningOutlined',
    path: '/DrawerForms ',
    component: './DrawerForms',
  },
  {
    name: 'Menu Bar',
    icon: 'Menu',
    path: '/MenuBar',
    component: './MenuBar',
  },
  {
    name: 'Form',
    icon: 'Form',
    path: '/Form',
    component: './Form',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
