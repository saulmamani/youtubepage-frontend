import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors';


Vue.use(Vuetify);

const opts = {
    theme: {
        themes: {
            light: {
                primary: "#467398",
                secondary: colors.grey.darken1,
                accent: "#333333",
                error: colors.red.accent3
            },
            dark: {
                primary: colors.pink.lighten1
            }
        }
    }
}

export default new Vuetify(opts);
