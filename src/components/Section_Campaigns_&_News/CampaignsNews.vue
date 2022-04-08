<template>

	<!-- Compaigns and News main block -->
	<div class="container-fluid compaigns_news_main_block">
		<div class="row compaigns_news_internal_block">
			<div class="col-xl-12 compaigns_news">

				<!-- Compaign and News cards block -->
				<div class="compaigns_news_cards">
					<div class="compaigns_news_cards_title">
						Kampaniyalar və xəbərlər
					</div>

					<!-- Cards list -->
					<div class="cards_list">

						<!-- Item of card list -->
						<div class="cards_list_item" v-for="(element, index) in cardListArr" :key="element.item_id"
						>

							<!-- Img of card -->
							<div class="cards_list_item_img" :style="{ backgroundImage: `url(${element.cardImg})`}"></div>

							<!-- Title of card -->
							<div class="cards_list_item_title">{{element.title}}</div>

							<!-- Text of card -->
							<div class="cards_list_item_text" :class="{ 'active': element.item_id === 1 }">{{element.text}}</div>

							<!-- Button more and tag -->
							<div class="moreBtn_tag_block" :class="{ 'active': element.item_id === 1 }">

								<!-- More Button -->
								<button class="moreBtn">Daha çox <i class="material-icons mini_arrow">arrow_forward</i></button>

								<!-- Tag Button -->
								<button class="tagBtn">Xəbər</button>
							</div>
						</div>
					</div>
				</div>

				<!-- Arrow buttons -->
				<div class="arrows left_arrow"><i class="material-icons">arrow_back</i></div>
				<div class="arrows right_arrow"><i class="material-icons">arrow_forward</i></div>
			</div>
		</div>
	</div>
</template>


<script src="./CampaignsNews.js"></script>
<style lang="scss" scoped src="./CampaignsNews.scss"></style>