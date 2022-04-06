<template>
	<!-- Header -->
	<div class="container-fluid header_main_block">
		<div class="row header_internal_block">

			<!-- SIMA Logo -->
			<div class=" col-sm-6 col-md-6 col-lg-6 col-xl-6 SIMA_logo">
				<a class="SIMA_logo_link" href="http://localhost:8080/">
					<img class="SIMA_logo_link_img" :src="simaLogo">
				</a>
			</div>

			<!-- Main Menu -->
			<div class=" col-sm-6 col-md-6 col-lg-6 col-xl-6 main_menu ">

				<!-- Menu List & Menu for PC -->
				<ul class="main_menu_list" >
					<li class="list_item">
						<a href="#" class="list_item_option option_download">Yüklə</a>
						</li>
					<li class="list_item" v-for="element in mainMenu" :key="element.option_id">
						<a class="list_item_option" href="#">{{element.menu_option}}</a>
					</li>

					<!-- Magnifying glass -->
					<li class="list_item">
						<a class="magnifying_glass_link" href="#">
							<img class="magnifying_glass_link_img" :src="magnifyingGlass">
						</a>
					</li>
				</ul>

				<!-- Mobile menu -->
				<nav class="mobile_menu">
                    <div>
                        <transition name="fade" mode="out-in">
                            <i class="material-icons menu" v-if="!mobileMenuVisibility" @click="showMobileMenu" key="menu"></i>
                            <i class="material-icons clear" v-else @click="showMobileMenu" key="clear"></i>
                        </transition>
                        <transition name="fade">
                            <ul class="mobile_menu_list" v-if="mobileMenuVisibility">
                            	<li class="mobile_menu_option">Yüklə</li>
                                <li class="mobile_menu_option" v-for="element in mainMenu" :key="element.option_id">{{ element.menu_option }}</li>
                            </ul>
                        </transition>
                    </div>
                </nav>
			</div>
		</div>
	</div>
</template>


<script src="./Header.js">
</script>

<style lang="scss" scoped src="./Header.scss">	
</style>