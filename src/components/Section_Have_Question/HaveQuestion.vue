<template>

    <!-- Have Question Main block -->
    <div class="container-fluid have_question_main_block">
        <div class="row have_question_internal_block">

            <!-- Question -->
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 question_block">
                <div class="question">
                    <div class="question_title">Sualınız var?</div>
                    <div class="question_text">Ən çox verilən sualların cavabı üçün hazır FAQ bölməsinə baxın</div>
                    <button class="moreBtn">
                        <div class="infoIcon"></div>
                        Daha çox
                    </button>
                </div>
            </div>

            <!-- FAQ block -->
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 faq_block">
                <div class="faq">

                    <!-- faq questions -->
                    <!-- first question -->
                    <div class="faq_questions first">SİMA nədir?
                        <div class="space"></div>
                        <span class="material-icons">
                            remove
                        </span></div>

                    <!-- Answer to first question -->
                    <div class="answer">SİMA – elektron imzanın bulud texnologiyalarına əsaslanan versiyasıdır. Bu həll üz tanıma və açıq açar texnologiyasını (elektron imza həlli) özündə birləşdirir.</div>

                    <!-- Second question -->
                    <div class="faq_questions second">İstifadə sahələri
                        <div class="space"></div>
                        <span class="material-icons">
                            add
                        </span></div>

                    <!-- Third question -->    
                    <div class="faq_questions third">SİMA tətbiqini necə yükləyə bilərəm?
                        <div class="space"></div>
                        <span class="material-icons">
                            add
                        </span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./HaveQuestion.js"></script>
<style lang="scss" scoped src="./HaveQuestion.scss"></style>