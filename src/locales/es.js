import MainFooter from './es/components/Main/MainFooter.json';
import MainNavbar from './es/components/Main/MainNavbar.json';

import TooltipMainNavbar from './es/components/Tooltip/TooltipMainNavbar.json';

import UtilButtonsHomeBug from './es/components/Util/UtilButtonsHomeBug.json';
import UtilError404 from './es/components/Util/UtilError404.json';
import UtilMaintenance from './es/components/Util/UtilMaintenance.json';

import dashboardLayout from './es/layouts/dashboard.json';

import indexPage from './es/pages/index.json';
import dashboardIndexPage from './es/pages/dashboard/index.json';
import loginPage from './es/pages/dashboard/login.json';

export default {
    components: {
        Main: {
            MainFooter: MainFooter,
            MainNavbar: MainNavbar,
        },
        Tooltip: {
            TooltipMainNavbar: TooltipMainNavbar,
        },
        Util: {
            UtilButtonsHomeBug: UtilButtonsHomeBug,
            UtilError404: UtilError404,
            UtilMaintenance: UtilMaintenance,
        }
    },
    layouts: {
        dashboard: dashboardLayout,
    },
    pages: {
        index: indexPage,
        dashboard: {
            index: dashboardIndexPage,
            login: loginPage,
        }
    }
}