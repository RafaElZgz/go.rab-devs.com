import { Context } from '@nuxt/types';

export default function (ctx: Context) {
    ctx.redirect(ctx.localePath('app'));
    /*
    if (!ctx.$strapi.user) {
        return ctx.redirect(ctx.localePath('app-dashboard-login'));
    }
    */
}