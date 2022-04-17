<template>
	<!-- New Generation block -->
	<div class="container-fluid new_generation_main_block">
		<div class="row new_generation_internal_block">

			<!-- Electronic signature block -->
			<div class="col-sm-12 col-md-4 col-lg-5 col-xl-5 electronic_signature_main_block">

				<!-- Electron signature info -->
				<div class="electron_signature_info_block">

					<div class="signature_title">
						Yeni nəsil elektron imza
					</div>

					<div class="signature_text">
						SİMA – bulud və üztanıma texnologiyalarına əsaslanan yeni nəsil elektron imzadır. Mobil tətbiq əsaslı SİMA əlavə vasitələrə ehtiyac olmadan, eləcə də heç yerə getmədən daha rahat şəkildə elektron xidmətlər əldə etməyə imkan verəcək.
					</div>

					<!-- Buttons of Electron signature info --> 
					<div class="signature_buttons">
						<app-store-btn class="app_store_btn"></app-store-btn>
						<play-market-btn class="play_market_btn"></play-market-btn>
					</div>
				</div>

				<!-- Slide buttons -->
				<div class="slide_btns_block">
					<div class="slide_btn" id="active_btn"></div>
					<div class="slide_btn"></div>
					<div class="slide_btn"></div>
				</div>
			</div>

			<!-- New generation big image -->
			<div class="col-sm-12 col-md-8 col-lg-7 col-xl-7 new_generation_image_block">
				<div class="generation_image"></div>
			</div>
		</div>
	</div>
	
</template>


<script src="./generation.component.js">
</script>

<style lang="scss" scoped src="./generation.component.scss">
</style>