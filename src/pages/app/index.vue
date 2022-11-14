<script lang="ts">

import Vue from 'vue';

const form = {
    name: '',
    slug: '',
    url: '',
    user: null,
}

export default Vue.extend({
    data() {
        return {
            form: form,
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
        async createLink() {

            try {

                var exists = false;

                if (!form.slug) {
                    form.slug = (Math.random() + 1).toString(36).substring(7);
                }

                this.form.slug = this.form.slug.toLowerCase();

                this.$accessor.existingLinks.forEach((link: any) => {

                    if (link.slug.toLowerCase() === this.form.slug) { exists = true; }
                });

                if (!exists) {

                    await this.$axios.$post(`${this.$config.apiURL}/items/shortened_links`,
                        {
                            name: this.form.name,
                            user: this.form.user,
                            slug: this.form.slug,
                            url: this.form.url,
                            visits: {
                                count: 0,
                                list: []
                            },
                        }
                    );

                    this.$toast.show(`${this.$i18n.t('pages.index.alerts.success').toString()}`,
                        {
                            position: 'top-center',
                            duration: 5000,
                            icon: 'done',
                            type: 'success',
                            theme: 'bubble',
                        }
                    );

                    this.$toast.show(`${this.$i18n.t('pages.index.alerts.link').toString()}&nbsp;&nbsp;<a href="${this.$config.appURL}/${this.form.slug}" target="_blank" class="font-bold hover:text-black">${this.$config.appURL}/${this.form.slug}<a>`,
                        {
                            position: 'top-center',
                            duration: null,
                            icon: 'info',
                            type: 'info',
                            theme: 'bubble',
                        }
                    );

                    this.form.name = '';
                    this.form.url = '';
                    this.form.slug = '';
                } else {

                    this.$toast.show(this.$i18n.t('pages.index.alerts.error.slug').toString(),
                        {
                            position: 'top-center',
                            duration: 5000,
                            icon: 'priority_high',
                            type: 'error',
                            theme: 'bubble',
                        }
                    );
                }

            } catch (error) { alert('ERROR: ' + error) };
        },
    },
    mounted() {
        if (this.$strapi.user) {
            this.form.user = this.$strapi.user;
        }
    },
})
</script>

<template>
    <main>
        <div class="flex flex-col w-11/12 mx-auto">
            <section class="flex w-full min-h-screen pt-[4.5rem]">
                <div class="m-auto">

                    <div class="flex flex-col my-8 xl:flex-row gap-y-8 md:gap-x-40">

                        <div class="flex flex-col w-full m-auto mt-2">
                            <div class="md:grid 2xl:grid-cols-2">
                                <div class="flex">
                                    <h1
                                        class="py-2 m-auto text-5xl font-bold text-center drop-shadow-xl md:text-7xl text-primary-500">
                                        RAB GO
                                    </h1>
                                </div>
                                <div class="hidden 2xl:flex">
                                    <img src="/media/ilustration.svg" alt="RAB GO" class="px-2 m-auto -my-10 w-96" />
                                </div>
                            </div>
                            <p class="py-2 text-lg text-center 2xl:text-left md:text-2xl dark:text-gray-400">
                                {{ $t('pages.index.subtitle') }}
                            </p>
                            <p class="py-2 font-light text-center xl:text-left dark:text-gray-500">
                                <span class="text-sm material-icons">info</span>
                                {{ $t('pages.index.info.text.0') }}
                                <NuxtLink :to="localePath('app-dashboard-login')"
                                    class="font-semibold text-primary-500 hover:underline">
                                    {{ $t('pages.index.info.text.1') }}
                                </NuxtLink>
                                {{ $t('pages.index.info.text.2') }}
                            </p>
                        </div>

                        <div class="flex flex-col w-full m-auto">
                            <div
                                class="w-full px-10 py-8 mx-auto my-4 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                                <h3 class="py-2 mb-6 text-2xl font-bold text-center md:text-4xl dark:text-gray-300">
                                    {{ $t('pages.index.form.title') }}
                                </h3>
                                <form class="mx-auto" @submit.prevent="createLink()">
                                    <div class="relative my-4">
                                        <input type="text" id="name" v-model="form.name"
                                            class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                                            placeholder=" " required />
                                        <label for="name"
                                            class="absolute text-sm text-gray-500 dark:text-gray-400 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100 dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                            {{ $t('pages.index.form.fields.name') }}
                                        </label>
                                    </div>
                                    <div class="relative my-4">
                                        <input type="url" id="url" v-model="form.url"
                                            pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)"
                                            class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                                            placeholder=" " required />
                                        <label for="url"
                                            class="absolute text-sm text-gray-500 dark:text-gray-400 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100 dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                            {{ $t('pages.index.form.fields.url') }}
                                        </label>
                                    </div>
                                    <div class="my-4">
                                        <div class="relative">
                                            <input type="text" id="slug" v-model="form.slug" minlength="3"
                                                aria-describedby="slug_helper_text"
                                                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                                                placeholder=" " />
                                            <label for="slug"
                                                class="absolute text-sm text-gray-500 dark:text-gray-400 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100 dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                                {{ $t('pages.index.form.fields.slug.text') }}
                                            </label>
                                        </div>
                                        <p id="slug_helper_text" class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                            <span class="text-primary-500">*</span> {{
                                                    $t('pages.index.form.fields.slug.help')
                                            }}
                                        </p>
                                    </div>
                                    <div class="flex flex-col mt-8 sm:flex-row sm:justify-center sm:space-x-4">
                                        <button type="submit"
                                            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-800">
                                            {{ $t('pages.index.form.buttons.submit') }}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    </main>
</template>