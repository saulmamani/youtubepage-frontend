import Vue from 'vue';
import {DateTime} from 'luxon';

Vue.filter('boolean', (value) => {
    return value ? 'Si' : 'No';
});

Vue.filter('fullDate', (value) => {
    return DateTime.fromISO(value).toLocaleString(DateTime.DATE_FULL);
});

Vue.filter('mediumDate', (value) => {
    return DateTime.fromISO(value).toLocaleString(DateTime.DATE_MED);
});

Vue.filter('largeDate', (value) => {
    return DateTime.fromISO(value).toLocaleString(DateTime.DATETIME_SHORT);
});

Vue.filter('shortDate', (value) => {
    return DateTime.fromISO(value).toLocaleString(DateTime.DATE_SHORT);
});

Vue.filter('mediumDateTime', (value) => {
    return DateTime.fromISO(value).toLocaleString(DateTime.DATETIME_MED);
});
Vue.filter('mediumDateTimeWithSeconds', (value) => {
    return DateTime.fromISO(value).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
});

Vue.filter('onlyDayMonthDate', (value) => {
    return DateTime.fromISO(value).setLocale('es').toFormat("dd 'de' LLLL");
});

Vue.filter('localDateHour', (value) => {
    return DateTime.fromSQL(value).toLocaleString(DateTime.DATETIME_SHORT);
});

Vue.filter('localDate', (value) => {
    return DateTime.fromSQL(value).toLocaleString(DateTime.DATE_SHORT);
});