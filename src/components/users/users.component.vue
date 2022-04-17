<template>

	<!-- Partners and Users main block -->
	<div class="container_fluid partners_users_main_block">
		<div class="row partners_users_internal_block">

			<!-- Partners list -->
			<div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 partners_main_block">
				<div class="partners">
					<div class="partners_title">Tərəfdaşlarımız üçün üstünlüklər</div>
					<div class="partners_list" v-for="(element, index) in partnersListArr" :key="index" >
						<div class="icon" :style="{ backgroundImage: `url(${element.icon})`}"></div>
						<div class="text">{{element.text}}</div>
					</div>
				</div>
			</div>

			<!-- Users list -->
			<div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 users_main_block">
				<div class="users">
					<div class="users_title">İstifadəçilər üçün üstünlüklər</div>
					<div class="users_list" v-for="element in userListArr" :key="element.item_id">
						<div class="icon" :style="{ backgroundImage: `url(${element.icon})`}"></div>
						<div class="text">{{element.text}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./users.component.js">
	
</script>

<style lang="scss" scoped src="./users.component.scss">
	
</style>