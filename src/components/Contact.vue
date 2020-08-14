  <template>
  <section id="get-in-touch" class="hide-overflow">
    <v-layout teal lighten-3 white--text>
      <v-flex hidden-sm-and-down md6>
        <v-img :src="require('@/assets/contact.png')" height="100%"/>
      </v-flex>
      <v-flex xs12 md6 pa-5>
        <bubble1/>
        <div class="white--text text--darken-2 my-5 font-weight-light">Get In Touch</div>
        <v-sheet max-width="600" class="pa-5 rounded mb-12 mx-auto">
          <v-list class="transparent">
            <v-list-item class="ma-5">
              <v-list-item-action>
                <v-icon class="grey--text text--darken-2">mdi-phone</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>09773672032 (TM)</v-list-item-title>
                <v-list-item-title>09104885592 (TNT)</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item class="ma-5">
              <v-list-item-action>
                <v-icon dark medium class="grey--text text--darken-2">mdi-map-marker</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Nasipit Road, Talamban, Cebu City</v-list-item-title>
                <v-list-item-title>San Alberto Carmelites Formation Center</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item class="ma-5">
              <v-list-item-action>
                <v-icon class="grey--text text--darken-2">mdi-email</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>marygracetiburillo@gmail.com</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
        <div
          class="white--text text--darken-2 my-5 display-1 font-weight-light"
        >Mail us your Message</div>

        <v-sheet max-width="600" color="transparent" class="mx-auto">
          <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit">
            <v-text-field
              v-model="name"
              color="info"
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
              solo
              flat
            />
            <v-text-field
              v-model="email"
              color="info"
              :rules="emailRules"
              label="Email"
              required
              solo
              flat
            />
            <v-textarea
              v-model="message"
              color="info"
              :rules="messageRules"
              required
              label="Message"
              solo
              flat
            />
            <v-btn type="submit">Send</v-btn>
          </v-form>
        </v-sheet>
      </v-flex>
    </v-layout>
  </section>
</template>
<script>
import emailjs from "emailjs-com";
import bubble1 from "@/components/base/Bubble1.vue";

export default {
  name: "about",
  components: {
    bubble1
  },
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    messageRules: [v => !!v || "Message is required"],
    subject: null,
    message: null
  }),
  mounted() {
    this.$nextTick(function() {
      let emailJSscript = document.createElement("script");
      emailJSscript.setAttribute(
        "src",
        "https://cdn.jsdelivr.net/npm/emailjs-com@2.6.3/dist/email.min.js"
      );
      document.head.appendChild(emailJSscript);
    });
  },
  methods: {
    submit() {
      let user_id = "user_2HKZFfDNfuJuGmZ8kfmzO";
      console.log("submit");
      emailjs
        .send(
          "gmail",
          "template_qki9qefR",
          {
            from_name: this.name,
            message_html: this.message,
            from_email: this.email
          },
          user_id
        )
        .then(() => {
          this.snackbar = true;
        });
      this.$refs.form.reset();
    }
  }
};
</script>
