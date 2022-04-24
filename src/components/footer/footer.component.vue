<template>
	<!-- Footer main block -->
	<div class="container-fluid footer_main_block">
		<div class="row footer_internal_block">

			<!-- Logo, play market, app store buttons -->
			<div class="col-sm-12 col-md-5 col-lg-4 col-xl-4 footer_logo_buttons">
				<div class="logo_buttons">
					<sima-logo></sima-logo>

					<!-- play market, app store buttons -->
					<div class="buttons">
            <download-btn class="download_btn" icon="apple" >App Store</download-btn>
            <download-btn  class="download_btn" icon="play_arrow">Play Market</download-btn>
					</div>	
				</div>	
			</div>

			<!-- Email and social media icons -->
			<div class="col-sm-12 col-md-3 col-lg-4 col-xl-4 footer_social_media">
				<div class="social_media_content">

					<!-- Email message icon and email address -->
					<div class="mail_block">
						<div class="message_icon"></div>
						<div class="mail_address">info@sima.az</div>
					</div>

					<!-- Social media icons -->
					<div class="social_media_icons">
						<div class="icons" v-for="element in mediaIconsArr" :key="element.icon_id" :style="{ backgroundImage: `url(${element.icon})`}"></div>
					</div>
				</div>
			</div>

			<!-- Language button of site -->
			<div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 footer_language">
				<select class="lang_button">
					<option class="button_message">
            <div class="lang_icon"></div>
            Azərbaycan</option>
          <option class="button_message">English</option>
          <option class="button_message">Русский</option>
				</select>
			</div>

			<!-- End of Footer -->
			<div class="col-xl-12 footer_end">
				<div class="end_content">
					<div class="year">SİMA © 2021</div>
					<div class="rights_reserved">Bütün hüquqlar qorunur</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./footer.component.js">
import DownloadBtn from "@/components/UI/downloadBtn.component";
export default {
  components: {DownloadBtn}
}
</script>
<style lang="scss" scoped src="./footer.component.scss"></style>