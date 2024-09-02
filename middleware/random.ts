export default defineNuxtRouteMiddleware((to, from) => {
    const types = ['neko', 'kitsune', 'lewd', 'pat', 'kiss', 'hug', 'slap'];
    if (!to.params.type || !types.includes(to.params.type)) {
        return navigateTo('/random/neko');
    } else {
        return;
    }
});