import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  CarOutlined,
  TeamOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const internalGeneralNavTree = [
  {
    key: 'general-catalog',
    path: `${APP_PREFIX_PATH}/general/catalog`,
    title: 'sidenav.general.catalog',
    icon: ShoppingCartOutlined,
    breadcrumb: true,
    submenu: [{
      key: 'general-catalog-products',
      path: `${APP_PREFIX_PATH}/general/catalog/products`,
      title: 'sidenav.general.catalog.products',
      icon: '',
      breadcrumb: false,
      submenu: []
    },
      {
      key: 'general-catalog-categories',
      path: `${APP_PREFIX_PATH}/general/catalog/categories`,
      title: 'sidenav.general.catalog.categories',
      icon: '',
      breadcrumb: false,
      submenu: []
    },
      {
        key: 'general-catalog-collections',
        path: `${APP_PREFIX_PATH}/general/catalog-collections`,
        title: 'sidenav.general.catalog.collections',
        icon: '',
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'general-catalog-combo',
        path: `${APP_PREFIX_PATH}/general/catalog-combo`,
        title: 'sidenav.general.catalog.combo',
        icon: '',
        breadcrumb: false,
        submenu: []
      },
    ]
  },
  {
    key: 'general-orders',
    path: `${APP_PREFIX_PATH}/general/orders`,
    title: 'sidenav.general.orders',
    icon: ShoppingOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'general-clients',
    path: `${APP_PREFIX_PATH}/general/clients`,
    title: 'sidenav.general.clients',
    icon: UserOutlined,
    breadcrumb: true,
    submenu: [{
      key: 'general-clients-list',
      path: `${APP_PREFIX_PATH}/general/clients/clients-list`,
      title: 'sidenav.general.clients.list',
      icon: '',
      breadcrumb: true,
      submenu: []
    },{
      key: 'general-clients-groups',
      path: `${APP_PREFIX_PATH}/general/clients-groups`,
      title: 'sidenav.general.clients.groups',
      icon: '',
      breadcrumb: true,
      submenu: []
    },]
  },
  {
    key: 'general-banners',
    path: `${APP_PREFIX_PATH}/general/banners`,
    title: 'sidenav.general.banners',
    icon: PictureOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'general-promo-codes',
    path: `${APP_PREFIX_PATH}/general/promo-codes`,
    title: 'sidenav.general.promoCodes',
    icon: GiftOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'general-offline-points',
    path: `${APP_PREFIX_PATH}/general/offline-points`,
    title: 'sidenav.general.offlinePoints',
    icon: CarOutlined,
    breadcrumb: true,
    submenu: [{
      key: 'general-offline-points-addresses',
      path: `${APP_PREFIX_PATH}/general/offline-points/address`,
      title: 'sidenav.general.offlinePoints.addresses',
      icon: '',
      breadcrumb: false,
      submenu: []
    },
      {
        key: '/general/offline-points-geofence',
        path: `${APP_PREFIX_PATH}/general/offline-points/geofence`,
        title: 'sidenav.general.offlinePoints.geofence',
        icon: '',
        breadcrumb: false,
        submenu: []
      },
    ]
  },
  {
    key: 'general-employees',
    path: `${APP_PREFIX_PATH}/general/employees`,
    title: 'sidenav.general.employees',
    icon: TeamOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'general-mailing',
    path: `${APP_PREFIX_PATH}/general/mailing`,
    title: 'sidenav.general.mailing',
    icon: MailOutlined,
    breadcrumb: false,
    submenu: []
  },
];
const dashBoardNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'sidenav.general.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [],
}];

const generalNavTree = [{
  key: 'general',
  path: `${APP_PREFIX_PATH}/general`,
  title: 'sidenav.general',
  icon: MailOutlined,
  breadcrumb: false,
  submenu: [
    ...dashBoardNavTree,
    ...internalGeneralNavTree,
  ],
}];


const systemNavTree = [
  {
  key: 'systems',
  path: `${APP_PREFIX_PATH}/systems`,
  title: 'sidenav.systems',
  icon: '',
  breadcrumb: false,
  submenu: [{
    key: 'systems-settings',
    path: `${APP_PREFIX_PATH}/systems/settings`,
    title: 'sidenav.systems.settings',
    icon: SettingOutlined,
    breadcrumb: false,
    submenu: []
  },
    {
      key: 'systems-mobile-app',
      path: `${APP_PREFIX_PATH}/systems/mobile-app`,
      title: 'sidenav.systems.mobileApp',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'systems-logs',
      path: `${APP_PREFIX_PATH}/systems/logs`,
      title: 'sidenav.systems.logs',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    }]
},

];

const navigationConfig = [
  ...generalNavTree,
  ...systemNavTree,
]

export default navigationConfig;
