<script lang="ts">

import Vue from 'vue';

export default Vue.extend({
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
    middleware: 'app',
})
</script>

<template>
    <main class="min-h-screen dark:bg-gray-900">
        <MainNavbar />
        <Nuxt />
        <MainFooter />
    </main>
</template>

<!-- 
    
    -- Basic content scheme 

    <template>
        <main>
            <div class="flex flex-col w-11/12 mx-auto">
                <section class="flex w-full min-h-screen pt-[4.5rem]">
                    <div class="m-auto">
                        
                        -- Content --

                    </div>
                </section>
            </div>
        </main>
    </template>

-->