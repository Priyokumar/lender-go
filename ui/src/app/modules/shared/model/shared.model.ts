import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

export const adminSideNavs: ISideNav[] = [

    { title: 'Dashboard', path: '/dashboard', icon: 'dashboard', hasSubmenu: false, submenu: [] },
    { title: 'Customer 360', path: '/customer360', icon: '3d_rotation', hasSubmenu: false, submenu: [] },
    { title: 'Customer', path: '/customers', icon: 'settings_accessibility', hasSubmenu: false, submenu: [] },
    { title: 'Lead', path: '/leads', icon: 'integration_instructions', hasSubmenu: false, submenu: [] },
    { title: 'Account', path: '/accounts', icon: 'assignment_ind', hasSubmenu: false, submenu: [] },
    { title: 'Repayment', path: '/repayments', icon: 'settings_backup_restore', hasSubmenu: false, submenu: [] },
    { title: 'Investor', path: '/investors', icon: 'supervisor_account', hasSubmenu: false, submenu: [] },
    {
        title: 'Settings', path: '', icon: 'settings_applications', hasSubmenu: true, submenu:
            [
               // { title: 'Role', path: '/security/roles', icon: 'dashboard', hasSubmenu: false, submenu: [] },
                { title: 'User', path: '/security/users', icon: 'dashboard', hasSubmenu: false, submenu: [] },
                { title: 'Product', path: '/products', icon: 'shopping_basket', hasSubmenu: false, submenu: [] },
            ]
    }
];

export const investorSideNavs: ISideNav[] = [
    { title: 'Dashboard', path: '/dashboard', icon: 'dashboard', hasSubmenu: false, submenu: [] },
    { title: 'Customer 360', path: '/customer360', icon: '3d_rotation', hasSubmenu: false, submenu: [] },
    { title: 'Customer', path: '/customers', icon: 'settings_accessibility', hasSubmenu: false, submenu: [] },
    { title: 'Lead', path: '/leads', icon: 'integration_instructions', hasSubmenu: false, submenu: [] },
    { title: 'Account', path: '/accounts', icon: 'assignment_ind', hasSubmenu: false, submenu: [] },
    { title: 'Repayment', path: '/repayments', icon: 'settings_backup_restore', hasSubmenu: false, submenu: [] },
];

export interface ISideNav {
    title: string;
    path: string;
    icon: string;
    hasSubmenu: boolean;
    submenu: ISideNav[];
    isExternalUrl?: boolean;
}

export interface IActionResponse {
    actionMessage: string;
    apiMessage: {
        error: boolean;
        code: number;
        detail: string;
        status: string;
        timeStamp: string;
    };

}

export class ApiEndpoint {

    public static BASE_URL = environment.baseUrl;
    public static AUTH_API_BASE_URL = ApiEndpoint.BASE_URL + '/api';
    public static APIS_API_BASE_URL = ApiEndpoint.BASE_URL + '/api/v1';

    public static LOGIN = ApiEndpoint.AUTH_API_BASE_URL + '/login';
    public static CHANGE_PASSWORD = ApiEndpoint.APIS_API_BASE_URL + '/change-password';
    public static RESET_PASSWORD = ApiEndpoint.AUTH_API_BASE_URL + '/reset-password';

    public static ROLES = ApiEndpoint.APIS_API_BASE_URL + '/roles';
    public static USERS = ApiEndpoint.APIS_API_BASE_URL + '/users';

    public static INVESTORS = ApiEndpoint.APIS_API_BASE_URL + '/investors';
    public static CUSTOMERS = ApiEndpoint.APIS_API_BASE_URL + '/customers';
    public static PRODUCTS = ApiEndpoint.APIS_API_BASE_URL + '/products';
    public static LEADS = ApiEndpoint.APIS_API_BASE_URL + '/leads';
    public static ACCOUNTS = ApiEndpoint.APIS_API_BASE_URL + '/accounts';
    public static EMI_S = ApiEndpoint.APIS_API_BASE_URL + '/emis';
    public static REPAYMENTS = ApiEndpoint.APIS_API_BASE_URL + '/repayments';
    public static DASHBOARD = ApiEndpoint.APIS_API_BASE_URL + '/dashboard';
    
    static DOCUMENT: string;

}

export class Utils {

    static getDay(day: number) {
        switch (day) {
            case 0:
                return 'Sunday';

            case 1:
                return 'Monday';

            case 2:
                return 'Tuesday';

            case 3:
                return 'Wednesday';

            case 4:
                return 'Thursday';

            case 5:
                return 'Friday';

            case 6:
                return 'Saturday';

            default:
                return '';
        }
    }
}

export const districts: string[] = [
    'Thoubal',
    'Bishnupur',
    'Imphal East',
    'Imphal West',
    'Senapati',
    'Ukhrul',
    'Chandel',
    'Churachandpur',
    'Tamenglong',
    'Jiribam',
    'Kangpokpi',
    'Kakching',
    'Tengnoupal',
    'Kamjong',
    'Noney',
    'Pherzawl'
];

export const bloodGroups: string[] = [
    'A +ve',
    'A -ve',
    'B +ve',
    'B -ve',
    'O +ve',
    'O -ve',
    'AB +ve',
    'AB -ve',
    'NA'
];

export const religions: string[] = [
    'Sanamahism',
    'Hinduism',
    'Islam',
    'Budhism',
    'Jainism',
    'Others'
];

export const communities: string[] = [
    'General',
    'SC',
    'ST',
    'OBC'
];

export interface IConfirmation {
    title: string;
    subtitle: string;
}

export interface Document {
    id: number;
    docUrl: string;
}

export class SnackBarConfig {

    static flashTopSuccessSnackBar(): MatSnackBarConfig {
        return {
            panelClass: 'success-snackbar',
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
        };
    }

    static flashTopDangerSnackBar(): MatSnackBarConfig {
        return {
            panelClass: 'danger-snackbar',
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
        };
    }

    static dangerData(message: string) {
        return {
            icon: 'error',
            message
        };
    }

    static successData(message: string) {
        return {
            icon: 'check_circle',
            message
        };
    }

}
