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
						<div class="service_item" v-for="(element, index) in serviceListArr" :key="index">
							<div class="icon" :style="{ backgroundImage: `url(${element.service_icon})`}"></div>
							<div class="info">{{element.text}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./services.component.js">
	
</script>


<style lang="scss" scoped src="./services.component.scss">
	
</style>