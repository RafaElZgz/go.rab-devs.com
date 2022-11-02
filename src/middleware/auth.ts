import { Context } from '@nuxt/types';

export default function (ctx: Context) {
    if (!ctx.$strapi.user) {
        return ctx.redirect(ctx.localePath('login'));
    }
}