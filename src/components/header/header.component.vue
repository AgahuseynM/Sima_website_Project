<template>
	<!-- Header -->
	<div class="container-fluid header_main_block">
		<div class="row header_internal_block">

			<!-- SIMA Logo -->
			<div class=" col-sm-6 col-md-6 col-lg-6 col-xl-6 SIMA_logo">
				<sima-logo class="SIMA_logo"></sima-logo>
			</div>

			<!-- Main Menu -->
			<div class=" col-sm-6 col-md-6 col-lg-6 col-xl-6 main_menu ">

				<!-- Menu List & Menu for PC -->
				<ul class="main_menu_list">

					<li class="list_item">
              <router-link class="list_item_option" :to="{name: 'download'}">Yüklə</router-link>
					</li>
          <li class="list_item">
              <router-link class="list_item_option" :to="{name: 'services'}">Xidmətlər</router-link>
          </li>
          <li class="list_item">
              <router-link class="list_item_option" :to="{name: 'partners'}">Tərəfdaşlar</router-link>
          </li>
          <li class="list_item">
              <router-link class="list_item_option" :to="{name: 'news'}">Kampaniya və Xəbərlər</router-link>
          </li>
          <li class="list_item">
              <router-link class="list_item_option" :to="{name: 'faq'}">FAQ</router-link>
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
                                <li class="mobile_menu_option" v-for="element in mainMenu" :key="element.option_id">{{ element.menu_option }}</li>
                            </ul>
                        </transition>
                    </div>
                </nav>
			      </div>
		    </div>
	  </div>
</template>


<script lang="js" src="./header.component.js">
</script>

<style lang="scss" src="./header.component.scss">
</style>