import Vue from 'vue';
import {DateTime} from 'luxon';

Vue.filter('capitalize', (value) => {
    if (!value) {
        return '';
    } else {
        let values = value.split(' ');
        value = '';
        values.map((word, index) => {
            word = word.toString();
            if (index === 0) {
                value += `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
            } else {
                value += ` ${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
            }
        });
        return value;
    }
});
Vue.filter('lowercase', (value) => {
    if (!value) {
        return '';
    } else {
        return value.toString().toLowerCase();
    }
});

Vue.filter('uppercase', (value) => {
    if (!value) {
        return '';
    } else {
        return value.toString().toUpperCase();
    }
});

Vue.filter('boolean', (value) => {
    return value ? 'Si' : 'No';
});

Vue.filter('fullDate', (value) => {
    return DateTime.fromISO(value).toLocaleString(DateTime.DATE_FULL);
});

// Vue.filter('localDate', (value) => {
//     return DateTime.fromISO(value).toLocaleString();
// });
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

Vue.filter('month', (value) => {
    switch (value) {
        case 1:
            return 'Enero';
        case 2:
            return 'Febrero';
        case 3:
            return 'Marzo';
        case 4:
            return 'Abril';
        case 5:
            return 'Mayo';
        case 6:
            return 'Junio';
        case 7:
            return 'Julio';
        case 8:
            return 'Agosto';
        case 9:
            return 'Septiembre';
        case 10:
            return 'Octubre';
        case 11:
            return 'Noviembre';
        case 12:
            return 'Diciembre';
    }
});

Vue.filter('departamento', (value) => {
    const departamentos = [
        {
            label: 'Oruro',
            value: 'ORU'
        },
        {
            label: 'La Paz',
            value: 'LPZ'
        },
        {
            label: 'Cochabamba',
            value: 'CBBA'
        },
        {
            label: 'Chuquisaca',
            value: 'CHQ'
        },
        {
            label: 'Potosi',
            value: 'PSI'
        },
        {
            label: 'Tarija',
            value: 'TJA'
        },
        {
            label: 'Santa Cruz',
            value: 'SCZ'
        },
        {
            label: 'Beni',
            value: 'BNI'
        },
        {
            label: 'Pando',
            value: 'PND'
        }
    ];
    const result = departamentos.find((departamento) => {
        return departamento.value === value;
    });
    return result.label;
});