navigation: any;
export const navigation:  [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    name: 'KPIs',
    url: '/kpi',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }, 
    children:[
      {
        name:'Company Ticket Time', 
        icon: 'icon-speedometer', 
        url: '/kpi/avg-ticket-time-company',
        linkProps: { queryParams: { 'kpi': 'AverageTimePerTicket' } }
      },
      {
        name:'Division Ticket Time', 
        icon: 'icon-speedometer', 
        url: '/kpi/avg-ticket-time-division',
        linkProps: { queryParams: { 'kpi': 'AverageTimePerTicket' } }
      },
      {
        name:'Tech Ticket Time', 
        icon: 'icon-speedometer', 
        url: '/kpi/avg-ticket-time-tech',
        linkProps: { queryParams: { 'kpi': 'AverageTimePerTicket' } }
      },
      
      {
        name:'Company Calls', 
        icon: 'icon-speedometer', 
        url: '/kpi/avg-number-calls-company',
        linkProps: { queryParams: { 'data': 'ServiceCallsPerTechPerDay' } }
      },
      {
        name:'Division Calls', 
        icon: 'icon-speedometer', 
        url: '/kpi/avg-number-calls-division',
        linkProps: { queryParams: { 'data': 'ServiceCallsPerTechPerDay' } }
      },
      {
        name:'Tech Calls', 
        icon: 'icon-speedometer', 
        url: '/kpi/avg-number-calls-tech',
        linkProps: { queryParams: { 'data': 'ServiceCallsPerTechPerDay' } }
      },
    ]
  },
  {
    title: true,
    name: 'Departments'
  },
    {
      name: "General",
      url: '/general',
      icon: 'cib-nextdoor', 
      children: [
        {
          name: 'Audit History',
          url: '/general/audit-history', 
          icon: 'fas fa-glasses'
        }
      ]
    },
    {
      name: "Accounts Receivable",
      url: '/ar',
      icon: 'fas fa-dollar-sign', 
      roles: ['AR'],
     /*  children: [
        {
          name: 'Audit History',
          url: '/general/audit-history', 
          icon: 'fas fa-glasses'
        }
      ] */
    },
    {
      name: 'Central Station',
      url: '/central-station',
      icon: 'fab fa-windows',
      roles: ['QUOTE APPROVAL'],
      children: [
          {
            name:  'Active Panels',
            url: '/central-station/active-panels',
            icon: 'fas fa-microchip', 
          },
          {
            name: 'Apprehensions',
            url: '/central-station/apprehensions',
            icon: 'fas fa-fingerprint'
          },
          {
            name: 'Tech Support',
            url: '/tech-support',
            icon: 'fas fa-plug'
          },
          {
            name: 'AVOs',
            url: '/central-station/avo',
            icon: 'fas fa-flag-checkered'
          },
      ]
  },
  {
    title: true,
    name: 'NAV Dashboard',
    roles: ['QUOTE APPROVAL', 'CONTRACT APPROVAL'],
  },
  {
    name: 'Resources',
    url: '/nav',
    icon: 'fab fa-windows',
    roles: ['QUOTE APPROVAL'],
    children: [
      {
        name: 'Dashboard',
        url: '/nav',
        icon: 'fas fa-quote-right'
      },
      {
        name: 'NAV Quotes',
        url: '/nav/nav-quotes',
        icon: 'fas fa-quote-right'
      },
      {
        name: 'Needing Approval',
        url: '/nav/nav-quotes-for-approval',
        icon: 'fas fa-file-signature'
      }
    ]
  },
  {
    title: true,
    name: 'ERP Implementation',
    roles: ['ERP DATA MAINTAINER', 'ERP DATA REVIEWER'],
  },
  {
    name: 'Data Imports',
    roles: ['ERP DATA MAINTAINER', 'ERP DATA REVIEWER'],
    icon: 'fas fa-pencil-ruler',
    url: '/no-url',
    children: [
      {
        name: 'Vendors',
        url: '/erp',
        icon: 'fas fa-file-invoice'
      },
      {
        name: 'Inventory',
        url: '/erp/items',
        icon: 'fas fa-file-invoice'
      },
      {
        name: 'Defined Data',
        url: '/erp/data-definitions',
        icon: 'fas fa-database'
      },
    ]
  },
  {
    divider: true,
    roles: ['ERP DATA MAINTAINER', 'ERP DATA REVIEWER'],
  },
  {
    title: true,
    name: 'Company Info'
  },
  {
    name: 'Quick Links',
    url: '/no-url',
    icon: 'fas fa-paperclip',
    children: [
     /*  {
        name: 'Email',
        url: '/company/email',
        icon: 'fas fa-mail-bulk'
      }, */
      {
        name: 'Blog',
        url: '/company/blog',
        icon: 'cil-rss'
      },
      {
        name: 'Gallery',
        url: '/company/gallery',
        icon: 'cil-images'
      },
      {
        name: 'Directory',
        url: '/company/employees',
        icon: 'fas fa-id-card'
      },
      {
        name: 'Reports',
        url: 'https://portal.sonitrolsecurity.com/Reports_SSRS/browse/',
        icon: 'fas fa-chart-bar',
        attributes: { target: '_blank', rel: 'noopener' }
      },
      {
        name: 'SharePoint',
        url: 'https://sonitrolsecurity.sharepoint.com/SitePages/Home.aspx',
        icon: 'fab fa-slideshare',
        attributes: { target: '_blank', rel: 'noopener' }
      },
    ]
  }, 
  {
    divider: true
  },
 /*  {
    name: 'Workflow Manager',
    title: true,
  },
  {
    name: 'Configure',
    url: '/no-url/',
    icon: 'fab fa-accusoft',
    children: [
      {
        icon: 'far fa-paper-plane',
        name: 'Workflows',
        url: '/workflow',
      },
      {
        name: 'WF Documents',
        url: '/documents',
        icon: 'fab fa-slideshare',
      }
    ]
  }, */

  {
    title: true,
    name: 'Site Admin',
    url: '/no-url',
    roles: [ 'PERMISSION ADMINISTRATION'],
  },
  {
    name: 'Permissions',
    url: '/site-admin/',
    icon: 'fas fa-key',
    roles: [ 'PERMISSION ADMINISTRATION'],
    children: [
      {
        name: 'Role Permissions',
        url: '/site-admin/role-permissions',
        icon: 'fas fa-user-lock'
      },
      {
        name: 'Global Roles',
        url: '/site-admin/global-role-permissions',
        icon: 'fas fa-user-lock'
      },
      {
        name: 'Division Roles',
        url: '/site-admin/division-role-permissions',
        icon: 'fas fa-user-lock'
      },
      {
        name: 'Admin Info & Help',
        url: '/site-admin/site-admin-help',
        icon: 'fas fa-info'
      },
    ]
  },
  {
    divider: true,
    roles: ['SOFTDEV'],
  }
];
