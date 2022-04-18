<template>
	<!-- New Generation block -->
	<div class="container-fluid new_generation_main_block">
    <swiper
        :slides-per-view="1"
        :pagination="{clickable: true}"
    >
		<swiper-slide class="row new_generation_internal_block" v-for="(element, index) in generalInfoArr" :key="index">

			<div class="col-sm-12 col-md-4 col-lg-5 col-xl-5 electronic_signature_main_block">

				<!-- Electron signature info -->
				<div class="electron_signature_info_block">

					<div class="signature_title">
						{{element.title}}
					</div>

					<div class="signature_text">
						{{element.text}}
					</div>

					<!-- Buttons of Electron signature info -->
					<div class="signature_buttons">
						<app-store-btn  class="app_store_btn" @click="clickBtn" :disabled="false">App Store</app-store-btn>
						<play-market-btn  class="play_market_btn">Play Market</play-market-btn>
					</div>
				</div>
			</div>

			<!-- New generation big image -->
			<div class="col-sm-12 col-md-8 col-lg-7 col-xl-7 new_generation_image_block">
				<div class="generation_image" :style="{ backgroundImage: `url(${element.img})`}"></div>
			</div>
	  </swiper-slide>
    </swiper>
  </div>
</template>


<script src="./generation.component.js">
</script>

<style lang="scss" scoped src="./generation.component.scss">
</style>