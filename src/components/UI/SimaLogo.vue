<template>
    <a class="SIMA_logo_link" href="http://localhost:8080/">
        <img class="SIMA_logo_link_img" :src="simaLogo">
    </a>
</template>

<script>
export default {
    name: 'sima-logo',
    data: () => ({

    	/*SIMA Logo image*/
        simaLogo: require('@/assets/images/SIMA_logo.png'),
    })
}
</script>

<style lang="scss" scoped>
	
</style>