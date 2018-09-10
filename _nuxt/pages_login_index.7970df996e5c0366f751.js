webpackJsonp([1],{"93Za":function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-card-text",[r("v-text-field",{attrs:{"prepend-icon":"email",rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{staticClass:"loginBtn",attrs:{color:"default",type:"button",disabled:!t.valid,loading:t.isLoading},on:{click:t.resetPassword}},[t._v("SEND MAIL")])],1)],1),r("SnackBar")],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s},"D/0B":function(t,e,r){var o=r("kXWg");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r("rjj0")("5a85029c",o,!1,{sourceMap:!1})},HENT:function(t,e,r){"use strict";var o=r("hNGb"),s=r("93Za"),n=r("VU/8")(o.a,s.a,!1,null,null,null);n.options.__file="components\\Navigation\\TheForgotPassword.vue",e.a=n.exports},Jubd:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card-text",[r("v-form",[r("v-text-field",{attrs:{"prepend-icon":"account_circle",name:"username",label:"Username",type:"text","auto-complete":"off",rules:t.rules.username},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}}),r("v-text-field",{attrs:{"prepend-icon":"lock","append-icon":t.showPassword?"visibility_off":"visibility",type:t.showPassword?"text":"password",name:"password",label:"Password","auto-complete":"off",rules:t.rules.password},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),r("v-text-field",{attrs:{"prepend-icon":"lock","append-icon":t.showConfirm?"visibility_off":"visibility",type:t.showConfirm?"text":"password",label:"Confirm Password",rules:t.rules.password},on:{"click:append":function(e){t.showConfirm=!t.showConfirm}},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}}),r("v-text-field",{attrs:{"prepend-icon":"email",rules:t.rules.email,label:"E-mail",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),r("v-text-field",{attrs:{"prepend-icon":"mobile_screen_share",label:"Mobile"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}}),r("v-dialog",{ref:"dialog",attrs:{"return-value":t.form.birthdate,persistent:"",lazy:"","full-width":"",width:"290px"},on:{"update:returnValue":function(e){t.$set(t.form,"birthdate",e)}},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[r("v-text-field",{attrs:{slot:"activator","prepend-icon":"event",label:"Birthdate",readonly:""},slot:"activator",model:{value:t.form.birthdate,callback:function(e){t.$set(t.form,"birthdate",e)},expression:"form.birthdate"}}),r("v-date-picker",{attrs:{scrollable:""},model:{value:t.form.birthdate,callback:function(e){t.$set(t.form,"birthdate",e)},expression:"form.birthdate"}},[r("v-spacer"),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.modal=!1}}},[t._v("Cancel")]),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.$refs.dialog.save(t.form.birthdate)}}},[t._v("OK")])],1)],1),r("v-select",{attrs:{"prepend-icon":"face",items:t.sex,label:"Gender"},model:{value:t.form.gender,callback:function(e){t.$set(t.form,"gender",e)},expression:"form.gender"}})],1)],1),r("v-card-actions",[r("v-btn",{staticClass:"mr-3 ml-3",attrs:{color:"primary",type:"primary",block:"",disabled:!t.formIsValid,loading:t.isLoading},on:{click:function(e){t.register()}}},[t._v("REGISTER")])],1),r("SnackBar")],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s},P9PC:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[t.isAuthenticated?t._e():r("v-content",[t.error?r("div",[t._v(t._s(t.error))]):t._e(),r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs10:"",sm6:"",md4:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[t._v(t._s(t.formTitle))])],1),t.login?r("TheLogin"):t._e(),t.forgotPassword?r("TheForgotPassword"):t._e(),t.signUp?r("TheSignup"):t._e(),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{md6:"",sm6:"",xs6:"","mt-4":""}},[r("hr")]),r("v-flex",{staticStyle:{margin:"15px"}},[t._v("OR")]),r("v-flex",{attrs:{md6:"",sm6:"",xs6:"","mt-4":""}},[r("hr")])],1),r("v-card-actions",[r("v-layout",{attrs:{row:""}},[t.signUp?t._e():r("v-flex",{attrs:{md6:"",sm6:"",xs6:"","align-center":"","justify-center":""}},[r("v-btn",{attrs:{color:"secondary",block:"",flat:""},on:{click:function(e){t.onSignup()}}},[t._v("Sign up")])],1),t.forgotPassword?t._e():r("v-flex",{attrs:{md6:"",sm6:"",xs6:"","align-center":"","justify-center":""}},[r("v-btn",{attrs:{color:"secondary",block:"",flat:""},on:{click:function(e){t.onForgotPassword()}}},[t._v("Forgot Password")])],1),t.login?t._e():r("v-flex",{attrs:{md6:"",sm6:"",xs6:"","align-center":"","justify-center":""}},[r("v-btn",{attrs:{color:"secondary",block:"",flat:""},on:{click:function(e){t.onBackToLogin()}}},[t._v("Back to Login")])],1)],1)],1)],1)],1)],1),r("v-snackbar",{attrs:{color:t.color,"multi-line":"multi-line"===t.mode,timeout:t.timeout,right:"right"===t.x,top:"top"===t.y},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.loginMsg)+"\n      "),r("v-btn",{attrs:{dark:"",flat:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n      Close\n      ")])],1)],1)],1)],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s},Ro2B:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card-text",[r("v-form",[r("v-text-field",{attrs:{min:8,"prepend-icon":"person",name:"username",label:"Username",type:"text","auto-complete":"off",rules:t.rules.username},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}}),r("v-text-field",{attrs:{mix:8,"prepend-icon":"lock","append-icon":t.showPassword?"visibility_off":"visibility",type:t.showPassword?"text":"password",name:"password",label:"Password","auto-complete":"off",rules:t.rules.password},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1)],1),r("v-card-actions",[r("v-btn",{staticClass:"loginBtn",attrs:{color:"primary",type:"primary",block:"",disabled:!t.formIsValid,loading:t.isLoading},on:{click:function(e){t.login()}}},[t._v("Login")])],1),r("SnackBar")],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[]};e.a=s},Sntk:function(t,e,r){"use strict";var o=r("WNYD"),s=r("Jubd"),n=r("VU/8")(o.a,s.a,!1,null,null,null);n.options.__file="components\\Navigation\\TheSignup.vue",e.a=n.exports},U6EY:function(t,e,r){"use strict";e.a={data:function(){return{showPassword:!1,drawer:null,error:!1,loginMsg:"Login Credencials Error.",isLoading:!1,loginForm:{username:"",password:""},rules:{username:[function(t){return(t||"").length>0||"This field is required"}],password:[function(t){return(t||"").length>7||"This field is required, minimum of 8 characters"}]}}},computed:{formIsValid:function(){return this.loginForm.username&&this.loginForm.password}},methods:{login:function(){var t=this;this.isLoading=!0,this.$store.dispatch("authenticateUser",this.loginForm).then(function(e){t.$router.push("/users")}).catch(function(e){t.isLoading=!1,t.snackbar=!0,t.$nuxt.$emit("snackbar",{snackbar:!0,msg:"Login Credencials Error.",color:"error"}),t.loginForm.username="",t.loginForm.password=""})}}}},WNYD:function(t,e,r){"use strict";e.a={data:function(){return{modal:!1,showPassword:!1,showConfirm:!1,drawer:null,error:!1,loginMsg:"Login Credencials Error.",isLoading:!1,confirmPassword:"",form:{username:"",password:"",email:"",mobile:"",birthdate:"",gender:""},sex:["Male","Femail"],rules:{username:[function(t){return(t||"").length>0||"Unique username with capital minimum of 8 characters"}],password:[function(t){return(t||"").length>0||"Minimum of 8 characters"},function(t){return/[A-Z]/.test(t)||"Password contains capital letters"},function(t){return/[0-9]/.test(t)||"Password contains Number"}],email:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}}},computed:{formIsValid:function(){return this.form.username&&this.form.password}},methods:{register:function(){var t=this;this.confirmPassword==this.form.password?this.$axios.$post("/users/register",this.form).then(function(e){t.$nuxt.$emit("snackbar",{snackbar:!0,msg:"Success kindly check your email.",color:"success"})}).catch(function(e){console.log(t.form),t.$nuxt.$emit("snackbar",{snackbar:!0,msg:"Error."+e,color:"error"})}):this.$nuxt.$emit("snackbar",{snackbar:!0,msg:"Confirm password did not match",color:"error"})}}}},dlLT:function(t,e,r){"use strict";var o=r("HENT"),s=r("jZzB"),n=r("Sntk");e.a={middleware:["check-auth"],components:{TheForgotPassword:o.a,TheLogin:s.a,TheSignup:n.a},data:function(){return{formTitle:"Login Form",forgotPassword:!1,login:!0,signUp:!1,error:!1,snackbar:!1,color:"error",mode:"mode",y:"top",x:"right",timeout:3e3,loginMsg:"Login Credencials Error."}},watch:{"$route.params.signup":function(t){alert(t),t&&(this.login=!1,this.forgotPassword=!1,this.signUp=!0)}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}},beforeMount:function(){this.$store.getters.isAuthenticated&&this.$router.push("/users")},methods:{onForgotPassword:function(){this.formTitle="FORGOT YOUR PASSWORD?",this.login=!1,this.forgotPassword=!0,this.signUp=!1},onBackToLogin:function(){this.formTitle="Login Form",this.login=!0,this.forgotPassword=!1,this.signUp=!1},onSignup:function(){this.formTitle="Signup Form",this.login=!1,this.forgotPassword=!1,this.signUp=!0}}}},hNGb:function(t,e,r){"use strict";e.a={data:function(){return{isLoading:!1,valid:!0,email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}},methods:{resetPassword:function(){var t=this;this.$axios.$post("users/forgot-pass",{data:this.email}).then(function(e){t.$nuxt.$emit("snackbar",{snackbar:!0,msg:"Kindly check you email.",color:"success"})}).catch(function(e){t.$nuxt.$emit("snackbar",{snackbar:!0,msg:"Email not found!",color:"error"})})}}}},jZzB:function(t,e,r){"use strict";var o=r("U6EY"),s=r("Ro2B"),n=!1;var i=function(t){n||r("D/0B")},a=r("VU/8")(o.a,s.a,!1,i,"data-v-f83bd6f0",null);a.options.__file="components\\Navigation\\TheLogin.vue",e.a=a.exports},kXWg:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".loginBtn[data-v-f83bd6f0]{margin:-13px 13px 5px}",""])},nGTV:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("dlLT"),s=r("P9PC"),n=r("VU/8")(o.a,s.a,!1,null,null,null);n.options.__file="pages\\login\\index.vue",e.default=n.exports}});