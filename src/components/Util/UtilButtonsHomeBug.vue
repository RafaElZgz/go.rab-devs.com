<script lang="ts">

import Vue from 'vue';

export default Vue.extend({
    data() {

        let rab_link = this.$i18n.locale === 'es' ? 'https://www.rab-devs.com/contacto' : 'https://www.rab-devs.com/en/contact';

        return {
            rab_link: rab_link,
        }
    },
})
</script>

<template>
    <div class="flex items-center justify-center text-center divide-x divide-gray-300 dark:divide-gray-700">
        <NuxtLink
            class="inline-flex items-center pr-3.5 text-sm text-gray-600 gap-x-2 decoration-2 hover:text-primary-600 dark:text-gray-500 dark:hover:text-gray-200"
            :to="localePath('app')">
            <span class="block text-base material-icons">home</span>
            {{ $t('components.Util.UtilButtonsHomeBug.home') }}
        </NuxtLink>
        <a
            class="inline-flex items-center pl-3 text-sm text-gray-600 gap-x-2 decoration-2 hover:text-primary-600 dark:text-gray-500 dark:hover:text-gray-200"
            :href="rab_link">
            <span class="block text-base material-icons">bug_report</span>
            {{ $t('components.Util.UtilButtonsHomeBug.report') }}
        </a>
    </div>
</template>