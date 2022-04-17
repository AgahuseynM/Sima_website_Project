<template>
    <!-- Main block of Be Partner -->
    <div class="container-fluid be_partner_main_block">
        <div class="row be_partner_internal_block">

            <div class="col-xl-12 title_text_list">

                <div class="be_partner">
                    <div class="be_partner_title">Tərəfdaşlarımızdan biri olun</div>
                    <div class="be_partner_text">SİMA-nın üstünlüklərindən yararlanaraq, müştərilərinizə daha rahat və effektiv xidmət göstərmək üçün bizim tərəfdaş şəbəkəmizə qoşulun!
                        Əlavə məlumat üçün: <span>info@sima.az</span></div>
                        
                    <div class="be_partner_list">
                    	<div class="be_partner_list_item" v-for="(element, index) in partnerListArr" :key="index">
                   		  <div class="icon" :style="{ backgroundImage: `url(${element.img})`}"></div>
                    		<div class="titles">{{element.title}}</div>
                    	</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./partner.component.js"></script>
<style lang="scss" scoped src="./partner.component.scss"></style>