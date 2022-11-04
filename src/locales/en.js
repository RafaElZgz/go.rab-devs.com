import MainFooter from './en/components/Main/MainFooter.json';
import MainNavbar from './en/components/Main/MainNavbar.json';

import TooltipMainNavbar from './en/components/Tooltip/TooltipMainNavbar.json';

import UtilButtonsHomeBug from './en/components/Util/UtilButtonsHomeBug.json';
import UtilError404 from './en/components/Util/UtilError404.json';
import UtilMaintenance from './en/components/Util/UtilMaintenance.json';

import dashboardLayout from './en/layouts/dashboard.json';

import indexPage from './en/pages/index.json';
import dashboardIndexPage from './en/pages/dashboard/index.json';
import loginPage from './en/pages/dashboard/login.json';

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