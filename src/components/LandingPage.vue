<template>
  <div>
    <section>
      <v-parallax src="@/assets/hero3.jpg" height="500">
        <v-layout column align-center justify-center class="white--text">
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
        </v-layout>
      </v-parallax>
    </section>

    <section>
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
    </section>

    <section>
      <v-parallax src="@/assets/code.jpg" height="380">
        <v-layout column align-center justify-center>
          <v-card color="transparent" class="px-10" max-width="600">
            <div class="text-center">
              <v-icon size="100" color="white">mdi-format-quote-close</v-icon>
            </div>
            <!-- <p
              class="headline font-weight-thin white--text mb-4 text-center"
            >Surround yourself with people who challenge you, teach you and push you to be your best self.</p> -->
             <p
              class="headline font-weight-thin white--text mb-4 text-center"
            >Keep exploring and keep learning. Don't be afraid to discover things behind the horizon.</p>
            <br>
            <!-- <p class="font-italic white--text text-right">- Bill Gates</p> -->
          </v-card>
        </v-layout>
      </v-parallax>
    </section>
  </div>
</template>

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
    }
  }
}
</style>



