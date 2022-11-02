<script lang="ts">

import Vue from 'vue';

const icons = {
    theme: {
        light: '<svg class="h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" /></svg>',
        dark: '<svg class="h-6" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>',
    },
    languague: '<svg class="h-6" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9 2.25a.75.75 0 01.75.75v1.506a49.38 49.38 0 015.343.371.75.75 0 11-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 01-2.969 6.323c.317.384.65.753.998 1.107a.75.75 0 11-1.07 1.052A18.902 18.902 0 019 13.687a18.823 18.823 0 01-5.656 4.482.75.75 0 11-.688-1.333 17.323 17.323 0 005.396-4.353A18.72 18.72 0 015.89 8.598a.75.75 0 011.388-.568A17.21 17.21 0 009 11.224a17.17 17.17 0 002.391-5.165 48.038 48.038 0 00-8.298.307.75.75 0 01-.186-1.489 49.159 49.159 0 015.343-.371V3A.75.75 0 019 2.25zM15.75 9a.75.75 0 01.68.433l5.25 11.25a.75.75 0 01-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 01-1.36-.634l5.25-11.25A.75.75 0 0115.75 9zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726z" clip-rule="evenodd" /></svg>',
};

const nav_links = [
    { id: 'home', path: 'app' },
    { id: 'dashboard', path: 'app-dashboard' },
];

export default Vue.extend({
    data() {

        let rab_link: string = this.$i18n.locale === 'es' ? 'https://www.rab-devs.com' : 'https://www.rab-devs.com/en';

        return {
            icons: icons,
            nav_links: nav_links,
            rab_link: rab_link,
        }
    },
    methods: {
        toggleTheme() {
            this.$colorMode.value === "dark" ? this.$colorMode.preference = "light" : this.$colorMode.preference = "dark";
        },
        toggleLocale() {
            this.$i18n.locale === "es" ? this.$i18n.setLocale("en") : this.$i18n.setLocale("es");
        },
    },
})
</script>

<template>
    <nav>
        <div
            class="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-400 dark:border-gray-600 dark:bg-gray-900 lg:h-[4.5rem]">
            <div class="container flex flex-wrap items-center justify-between h-full p-2 mx-auto ">

                <NuxtLink :to="localePath('app')" class="ml-4 m320:ml-2">
                    <img class="w-auto transition h-14 hover:scale-125" src="/logo.svg" />
                </NuxtLink>

                <div class="flex gap-1 mr-4 m320:mr-2 lg:order-2">
                    <button @click="toggleTheme()" type="button"
                        class="p-2 text-sm text-gray-400 border border-gray-400 rounded-lg dark:border-gray-600 dark:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800"
                        data-tooltip-target="buttons-theme" data-tooltip-placement="bottom">
                        <div v-html="icons.theme.light" v-if="$colorMode.value === 'dark'"></div>
                        <div v-html="icons.theme.dark" v-else></div>
                    </button>
                    <TooltipMainNavbar target="buttons-theme" />
                    <button @click="toggleLocale()" type="button"
                        class="p-2 text-sm text-gray-400 border border-gray-400 rounded-lg dark:border-gray-600 dark:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800"
                        data-tooltip-target="buttons-locale" data-tooltip-placement="bottom">
                        <div v-html="icons.languague"></div>
                    </button>
                    <TooltipMainNavbar target="buttons-locale" />
                    <a :href="rab_link" target="_blank"
                        class="p-2 text-sm text-gray-400 border border-gray-400 rounded-lg m320:hidden dark:border-gray-600 dark:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800"
                        data-tooltip-target="buttons-rab" data-tooltip-placement="bottom">
                        <span class="block hs-collapse-open:hidden material-icons">home</span>
                    </a>
                    <TooltipMainNavbar target="buttons-rab" />

                    <button type="button" data-hs-collapse="#navbar" aria-controls="navbar"
                        class="p-2 text-sm text-gray-400 border border-gray-400 rounded-lg hs-collapse-toggle lg:hidden dark:border-gray-600 dark:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800">
                        <span class="block hs-collapse-open:hidden material-icons">menu</span>
                        <span class="hidden hs-collapse-open:block material-icons">close</span>
                    </button>

                </div>

                <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar">
                    <ul
                        class="flex flex-col p-4 m-4 bg-gray-200 border border-gray-100 rounded-lg lg:m-0 lg:flex-row lg:space-x-8 lg:font-medium lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                        <li v-for="(link, index) in nav_links">
                            <NuxtLink :to="localePath(link.path)"
                                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                {{ $t(`components.Main.MainNavbar.links.${link.id}`) }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </nav>
</template>

<style>
#navbar .nuxt-link-exact-active {
    @apply block py-2 pl-3 pr-4 text-white bg-primary-500 rounded lg:bg-transparent lg:text-primary-500 font-bold lg:p-0 dark:text-white;
}
</style>