<script lang="ts">

import Vue from 'vue';

const nav_links = [
    { id: 'home', path: 'app' },
    { id: 'dashboard', path: 'app-dashboard' },
];

export default Vue.extend({
    data() {

        let rab_link: string = this.$i18n.locale === 'es' ? 'https://www.rab-devs.com' : 'https://www.rab-devs.com/en';

        return {
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
                        <span class="block material-icons" v-if="$colorMode.value === 'dark'">dark_mode</span>
                        <span class="block material-icons" v-else>light_mode</span>
                    </button>
                    <TooltipMainNavbar target="buttons-theme" />
                    <button @click="toggleLocale()" type="button"
                        class="p-2 text-sm text-gray-400 border border-gray-400 rounded-lg dark:border-gray-600 dark:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800"
                        data-tooltip-target="buttons-locale" data-tooltip-placement="bottom">
                        <span class="block material-icons">translate</span>
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