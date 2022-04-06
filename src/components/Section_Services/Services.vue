<template>
	<!-- Service main block -->
	<div class="container_fluid services_main_block">
		<div class="row services_internal_block">

			<!-- Services -->
			<div class="col_xl_12 services">
				<div class="services_title_list_block">

					<!-- Service title -->
					<div class="service_title">SİMA ilə hansı xidmətlər əldə edilə bilər?</div>

					<!-- Service list -->
					<div class="service_list">
						<div class="service_item" v-for="element in serviceListArr" :key="element.item_id">
							<div class="icon" :style="{ backgroundImage: `url(${element.service_icon})`}"></div>
							<div class="info">{{element.text}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./Services.js">
	
</script>


<style lang="scss" scoped src="./Services.scss">
	
</style>