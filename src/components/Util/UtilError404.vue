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
                        ERROR - 4<span class="mx-1 text-3xl material-icons md:text-4xl animate-spin-slow">settings</span>4
                    </h1>
                    <p class="my-4 text-lg font-light md:text-center md:text-xl dark:text-gray-400">
                        {{ $t('components.Util.UtilError404.text.l1') }}
                        <br />
                        <br class="sm:hidden"/>
                        {{ $t('components.Util.UtilError404.text.l2') }}
                    </p>
                    <UtilButtonsHomeBug class="mt-6" />
                </div>
            </section>
        </div>
    </main>
</template>