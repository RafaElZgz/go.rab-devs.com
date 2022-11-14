<script lang="ts">

import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            isSideMenuOpen: false,
        }
    },
    head() {
        return {
            meta: [
                {
                    hid: 'description', name: 'description',
                    content: this.$i18n.t('pages.index.meta.description').toString(),
                },
                {
                    hid: 'og:description', property: 'og:description',
                    content: this.$i18n.t('pages.index.meta.description').toString(),
                },
                {
                    hid: 'twitter:description', name: 'twitter:description',
                    content: this.$i18n.t('pages.index.meta.description').toString(),
                },
            ],
        }
    },
    methods: {
        async logout() {
            try {
                //await this.$strapi.logout().then(() => { this.$router.push(this.localePath('index')) });
            } catch (error) { alert('ERROR: ' + error) }
        },
        toggleLocale() {
            this.$i18n.locale === "es" ? this.$i18n.setLocale("en") : this.$i18n.setLocale("es");
        },
        toggleTheme() {
            this.$colorMode.value === "dark" ? this.$colorMode.preference = "light" : this.$colorMode.preference = "dark";
        },
    },
    middleware: 'auth',
})
</script>
    
<template>
    <main>
        <!-- Header -->
        <header
            class="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b border-r text-sm py-2.5 sm:py-4 lg:pl-64 dark:bg-gray-800 dark:border-gray-700">

            <nav class="flex items-center w-full px-4 mx-auto basis-full sm:px-6 md:px-8">

                <div class="mr-6 lg:hidden min-w-fit">
                    <a class="flex-none text-xl font-semibold text-center dark:text-primary-500 text-primary-400" href="#">
                        RAB GO
                    </a>
                </div>

                <div class="flex items-center justify-end w-full ml-auto sm:justify-between sm:gap-x-3 sm:order-3">

                    <div class="sm:hidden">
                        <button type="button"
                            class="mr-2 inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
                            <span class="material-icons">search</span>
                        </button>
                    </div>

                    <div class="hidden sm:block">
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 z-20 flex items-center pl-4 pointer-events-none">
                                <span class="text-gray-500 material-icons">search</span>
                            </div>
                            <input type="text" id="icon" name="icon" :placeholder="$t('layouts.dashboard.header.searchbar.placeholder')" disabled
                                class="block w-full px-4 py-2 text-sm border-gray-200 rounded-md shadow-sm pl-14 focus:z-10 focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:border-gray-600/50 dark:text-gray-400">
                        </div>
                    </div>

                    <div class="flex flex-row items-center justify-end gap-2">

                        <button type="button" @click="toggleLocale()"
                            class="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
                            <span class="material-icons">translate</span>
                        </button>

                        <button type="button" @click="toggleTheme()"
                            class="hs-offcanvas-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
                            <span class="material-icons" v-if="$colorMode.value === 'dark'">light_mode</span>
                            <span class="material-icons" v-else>dark_mode</span>
                        </button>

                        <div class="relative inline-flex ml-2 hs-dropdown" data-hs-dropdown-placement="bottom-right">

                            <button id="hs-dropdown-with-header" type="button"
                                class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">

                                <img class="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
                                    :src="`${$config.apiURL}${$strapi.user.avatar.url}`" alt="User avatar">
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700"
                                aria-labelledby="hs-dropdown-with-header">

                                <div class="px-5 py-3 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        {{ $t('layouts.dashboard.header.user.menu.title') }}
                                    </p>
                                    <p class="text-sm font-medium text-gray-800 dark:text-gray-300">
                                        {{ $strapi.user.username }}
                                    </p>
                                </div>

                                <div class="py-2 mt-2 first:pt-0 last:pb-0">
                                    <a href="https://www.rab-devs.com/dashboard" target="_blank"
                                        class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                        <span class="text-base material-icons">settings</span>
                                        {{ $t('layouts.dashboard.header.user.menu.settings') }}
                                    </a>
                                    <button @click="logout()"
                                        class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                        <span class="text-base material-icons">logout</span>
                                        {{ $t('layouts.dashboard.header.user.menu.logout') }}
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <!-- End Header -->

        <!-- Sidebar Toggle -->
        <div
            class="sticky top-[59px] inset-x-0 z-20 bg-white border-y px-4 sm:px-6 sm:top-[71px] md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center py-4">

                <!-- Navigation Toggle -->
                <button type="button" class="text-gray-500 hover:text-gray-600" data-hs-overlay="#sidebar">
                    <span class="block material-icons">menu</span>
                </button>
                <!-- End Navigation Toggle -->

                <!-- Breadcrumb -->
                <ol class="flex items-center min-w-0 ml-4 whitespace-nowrap">
                    <li class="flex items-center text-sm text-gray-800 dark:text-gray-400">
                        <NuxtLink :to="localePath('app')">
                            {{ $t('layouts.dashboard.submenu.breadcrumb.app') }}
                        </NuxtLink>
                        <span class="block mx-1 text-base material-icons">navigate_next</span>
                    </li>
                    <li class="text-sm font-semibold text-gray-800 truncate dark:text-gray-400">
                        {{ $t('layouts.dashboard.submenu.breadcrumb.dashboard') }}
                    </li>
                </ol>
                <!-- End Breadcrumb -->
                
            </div>
        </div>
        <!-- End Sidebar Toggle -->

        <!-- Sidebar -->
        <div id="sidebar" data-hs-overlay-backdrop-container='#sidebar-backdrop'
            class="hs-sidebar hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[48] w-64 bg-white border-r border-gray-200 pt-6 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">

            <div class="flex px-6 mb-2">
                <a
                    class="flex gap-x-3.5 items-center text-xl font-semibold text-primary-400 dark:text-primary-500 mx-auto drop-shadow-xl">
                    RAB GO <span class="block material-icons">link</span>
                </a>
            </div>

            <nav class="flex flex-col flex-wrap w-full p-6 hs-accordion-group" data-hs-accordion-always-open>
                <ul class="space-y-4">
                    
                    <li>
                        <NuxtLink :to="localePath('app-dashboard')"
                            class="dark:border-gray-900 shadow-md dark:shadow-lg border flex items-center gap-x-3.5 py-2 px-3 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300">
                            <span class="text-lg material-icons">home</span>
                            {{ $t('layouts.dashboard.sidebar.buttons.home') }}
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink :to="localePath('app-dashboard-links')"
                            class="dark:border-gray-900 shadow-md dark:shadow-lg border flex items-center gap-x-3.5 py-2 px-3 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300">
                            <span class="text-lg material-icons">link</span>
                            {{ $t('layouts.dashboard.sidebar.buttons.links') }}
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink :to="localePath('app-dashboard-settings')"
                            class="dark:border-gray-900 shadow-md dark:shadow-lg border flex items-center gap-x-3.5 py-2 px-3 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300">
                            <span class="text-lg material-icons">settings</span>
                            {{ $t('layouts.dashboard.sidebar.buttons.settings') }}
                        </NuxtLink>
                    </li>

                    <li>
                        <NuxtLink :to="localePath('app')"
                            class="dark:border-gray-900 shadow-md dark:shadow-lg border flex items-center gap-x-3.5 py-2 px-3 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300">
                            <span class="text-lg material-icons">transit_enterexit</span>
                            {{ $t('layouts.dashboard.sidebar.buttons.exit') }}
                        </NuxtLink>
                    </li>

                </ul>
            </nav>
        </div>
        <!-- End Sidebar -->

        <!-- Content -->
        <Nuxt class="w-full min-h-screen px-4 pt-8 sm:px-6 md:px-8 lg:pl-72 dark:bg-gray-900" />
        <!-- End Content -->

        <div id='sidebar-backdrop'
            class='hidden transition duration fixed inset-0 z-[47] bg-gray-900 bg-opacity-50 dark:bg-opacity-80'></div>
    </main>
</template>

<style>
#sidebar .nuxt-link-exact-active {
    @apply flex items-center gap-x-3.5 py-2 px-3 bg-gray-200 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white
}
</style>