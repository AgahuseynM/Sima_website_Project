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
                  <div class="faq_questions first"
                       v-if="firstQuestionVisibility"
                       @click="showFirstQuestion"
                  >SİMA nədir?
                    <div class="space"></div>
                    <span class="material-icons">
                      remove
                    </span></div>

                    <div class="faq_questions first"
                         v-else
                         @click="showFirstQuestion"
                    >SİMA nədir?
                      <div class="space"></div>
                      <span class="material-icons">
                      add
                    </span></div>

                    <!-- Answer to first question -->
                   <transition name="answeranim" mode="out-in">
                     <div class="answer" v-if="firstQuestionVisibility">SİMA – elektron imzanın bulud texnologiyalarına əsaslanan versiyasıdır. Bu həll üz tanıma və açıq açar texnologiyasını (elektron imza həlli) özündə birləşdirir.</div>
                   </transition>

                    <!-- Second question -->
                      <div class="faq_questions second"
                           v-if="secondQuestionVisibility"
                           @click="showSecondQuestion"
                      >İstifadə sahələri
                        <div class="space"></div>
                        <span class="material-icons">
                            remove
                        </span></div>

                      <div class="faq_questions second"
                           v-else
                           @click="showSecondQuestion"
                      >İstifadə sahələri
                        <div class="space"></div>
                        <span class="material-icons">
                            add
                        </span></div>

                  <!-- Answer to second question -->
                  <transition name="answeranim">
                    <div class="answer" v-if="secondQuestionVisibility">SİMA – elektron imzanın bulud texnologiyalarına əsaslanan versiyasıdır. Bu həll üz tanıma və açıq açar texnologiyasını (elektron imza həlli) özündə birləşdirir.</div>
                  </transition>


                    <!-- Third question -->    
                      <div class="faq_questions third"
                           v-if="thirdQuestionVisibility"
                           @click="showThirdQuestion"
                      >SİMA tətbiqini necə yükləyə bilərəm?
                        <div class="space"></div>
                        <span class="material-icons">
                            remove
                        </span></div>

                      <div class="faq_questions third"
                           v-else
                           @click="showThirdQuestion"
                      >SİMA tətbiqini necə yükləyə bilərəm?
                        <div class="space"></div>
                        <span class="material-icons">
                            add
                        </span></div>

                  <!-- Answer to third question -->
                  <transition name="answeranim">
                    <div class="answer" v-if="thirdQuestionVisibility">SİMA – elektron imzanın bulud texnologiyalarına əsaslanan versiyasıdır. Bu həll üz tanıma və açıq açar texnologiyasını (elektron imza həlli) özündə birləşdirir.</div>
                  </transition>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./question.component.js"></script>
<style lang="scss" scoped src="./question.component.scss"></style>