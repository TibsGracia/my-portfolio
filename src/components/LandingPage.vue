<template>
  <div>
    <section>
      <v-parallax
        src="https://free4kwallpapers.com/uploads/originals/2015/10/27/minimalist--wallpaper.jpg"
        height="500"
      >
        <v-layout column align-center justify-center class="white--text">
          <!-- <img src="@/assets/vuetify.png" alt="Vuetify.js" height="200"> -->
          <!-- <h1 class="white--text mb-2 display-1">Hi Everyone!</h1> -->
          <h1 class="white--text mb-2 display-2">Mary Grace C. Tiburillo</h1>
          <h3 class="white--text mb-2 overline font-weight-light">Software Developer</h3>
          <v-btn
            class="mt-12"
            color="teal darken-1"
            rounded
            dark
            large
            to="/about"
          >Know more about me</v-btn>

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
            <v-card class="btn transparent mx-auto" flat max-width="500">
              <v-card max-width="500" class="transparent">
                <v-img src="@/assets/jpm.jpg"></v-img>
              </v-card>
            </v-card>
          </v-flex>
          <v-flex xs12 md6>
            <v-card flat class="transparent">
              <!-- <v-card-text class="text-center"></v-card-text> -->
              <v-card-title primary-title class="layout">
                <div class="display-4 text-center font-weight-light">Hello!</div>
              </v-card-title>
              <div
                class="body-1 font-weight-light text-justify"
              >My name is Mary Grace Tiburillo currently based in Cebu City. I am a Software Developer eager to learn new things and explore the world of IT. I am willing to take any challenges and opportunities. I enjoy building anything from small business websites to interactive web applications.</div>
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
          <div class="bottomText px-10 rounded-lg">
            <div class="text-center">
              <v-icon size="100" color="white">mdi-format-quote-close</v-icon>
            </div>
            <div
              class="headline font-weight-thin white--text mb-4 text-center"
            >Surround yourself with people who challenge you, teach you and push you to be your best self.</div>
            <br>
            <p class="font-italic text-right">- Bill Gates</p>
            <!-- <em>Kick-start your application today</em> -->
          </div>
        </v-layout>
      </v-parallax>
    </section>
  </div>
</template>
<style>
.bottomText {
  background-color: rgba(0, 202, 135, 0.596);
  width: 50%;
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



