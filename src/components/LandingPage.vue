<template>
  <div>
    <section>
      <v-parallax
        src="https://free4kwallpapers.com/uploads/originals/2015/10/27/minimalist--wallpaper.jpg"
        height="500"
      >
        <v-layout column align-center justify-center class="white--text">
          <!-- <img src="@/assets/vuetify.png" alt="Vuetify.js" height="200"> -->
          <h1 class="white--text mb-2 display-1">Hi Everyone!</h1>
          <h1 class="white--text mb-2 display-2">I'm Mary Grace C. Tiburillo</h1>
          <h3 class="white--text mb-2">Software Developer</h3>
          <v-btn class="mt-12" color="teal lighten-4" large to="/about">Know more about me</v-btn>

          <!-- <div class="subheading mb-4 text-center">Software Developer</div> -->
          <!-- <v-btn class="mt-12" color="blue lighten-2" dark large href="/pre-made-themes">Get Started</v-btn> -->
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <!-- <v-layout column wrap class="my-5" align-center> -->
      <!-- <v-flex xs12 sm4 class="my-4">
          <div class="text-center">
            <h2 class="headline">The best way to start developing</h2>
            <span class="subheading">This is a test this is a test</span>
          </div>
      </v-flex>-->
      <!-- <v-flex xs12> -->

      <v-container grid-list-xl>
        <v-layout row wrap align-center class="my-5">
          <v-flex xs12 md6>
            <v-card  class="btn transparent mx-auto" flat max-width="500" >
              <v-card max-width="500" class="transparent">
                <v-img src="@/assets/jpm.jpg"></v-img>
              </v-card>
            </v-card>
          </v-flex>
          <v-flex xs12 md6>
            <v-card flat class="transparent">
              <v-card-text class="text-center"></v-card-text>
              <v-card-title primary-title class="layout justify-center">
                <div class="headline text-center">Introduction</div>
              </v-card-title>
              <v-card-text
                class="text-center"
              >This is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test.</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <!-- </v-flex>
      </v-layout>-->
    </section>

    <section>
      <v-parallax src="@/assets/code.jpg" height="380">
        <v-layout column align-center justify-center>
          <div class="bottomText pa-10">
            <div class="headline white--text mb-4 text-center">Web development has never been easy</div>
            <!-- <em>Kick-start your application today</em> -->
          </div>
        </v-layout>
      </v-parallax>
    </section>
    <!-- <section>
    <v-container grid-list-xl>
      <v-layout row wrap justify-center class="my-12">
        <v-flex xs12 sm4>
          <v-card flat class="transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">Company info</div>
            </v-card-title>
            <v-card-text>
              Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 offset-sm1>
          <v-card flat class="transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">Contact us</div>
            </v-card-title>
            <v-card-text>Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.</v-card-text>
            <v-list class="transparent">
              <v-list-item>
                <v-list-item-action>
                  <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>777-867-5309</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Chicago, US</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>john@vuetifyjs.com</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    </section>-->

    <!-- <v-footer color="blue darken-2">
    <v-layout row wrap align-center>
      <v-flex xs12>
        <div class="white--text ml-4">
          Made with
          <v-icon class="red--text">mdi-heart</v-icon>by
          <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
          and
          <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
        </div>
      </v-flex>
    </v-layout>
    </v-footer>-->
  </div>
</template>
<style>
.bottomText {
  background-color: rgba(0, 202, 135, 0.596);
}
</style>
<style lang="scss">
.btn {
  cursor: pointer;
  position: relative;
  padding: 10px 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: all 1s;
  &:after,
  &:before {
    content: " ";
    width: 150px;
    height: 150px;
    position: absolute;
    border: 0px solid #fff;
    transition: all 1s;
  }
  &:after {
    top: -1px;
    left: -1px;
    border-top: 10px solid rgb(0, 151, 113);
    border-left: 10px solid black;
  }
  &:before {
    bottom: -1px;
    right: -1px;
    border-bottom: 10px solid black;
    border-right: 10px solid rgb(0, 151, 113);
  }
  &:hover {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    // background:rgba(0,0,0,.5);
    // color:white;
    &:before,
    &:after {
      width: 100%;
      height: 100%;
      // border-color:white;
    }
  }
}

// .data-container {
//   background: #ffebee;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
</style>



