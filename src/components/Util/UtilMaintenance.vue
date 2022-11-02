<script lang="ts">

import Vue from 'vue';

export default Vue.extend({})
</script>

<template>
    <main>
        <div class="flex min-h-screen px-6">
            <section class="w-full m-auto">
                <div class="text-center">
                    <h1 class="block text-4xl font-extrabold md:text-5xl dark:text-gray-300">
                        {{ $t('components.Util.UtilMaintenance.title') }} <sup><span class="text-2xl material-icons dark:text-gray-300 md:text-3xl animate-spin-slow">settings</span></sup><span class="-ml-1 text-3xl material-icons dark:text-gray-300 md:text-4xl animate-spin-slow">settings</span>
                    </h1>
                    <p class="my-4 text-lg font-light text-center md:text-xl dark:text-gray-400">
                        {{ $t('components.Util.UtilMaintenance.text.l1') }}
                        <br />
                        {{ $t('components.Util.UtilMaintenance.text.l2') }}
                    </p>
                    <UtilButtonsHomeBug class="mt-6" />
                </div>
            </section>
        </div>
    </main>
</template>