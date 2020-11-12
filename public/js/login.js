(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/login"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate */ "./node_modules/vuelidate/lib/index.js");
/* harmony import */ var vuelidate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import { LOGIN, LOGOUT } from "@/core/services/store/auth.module";



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [vuelidate__WEBPACK_IMPORTED_MODULE_1__["validationMixin"]],
  name: "login",
  data: function data() {
    return {
      errors: [],
      // temporary
      // Remove this dummy login info
      form: {
        email: "admin@demo.com",
        password: "demo"
      }
    };
  },
  validations: {
    form: {
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["email"]
      },
      password: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["minLength"])(3)
      }
    }
  },
  methods: {
    validateState: function validateState(name) {
      var _this$$v$form$name = this.$v.form[name],
          $dirty = _this$$v$form$name.$dirty,
          $error = _this$$v$form$name.$error;
      return $dirty ? !$error : null;
    },
    resetForm: function resetForm() {
      var _this = this;

      this.form = {
        email: null,
        password: null
      };
      this.$nextTick(function () {
        _this.$v.$reset();
      });
    },
    onSubmit: function onSubmit() {
      this.$v.form.$touch();

      if (this.$v.form.$anyError) {
        return;
      }

      var email = this.$v.form.email.$model;
      var password = this.$v.form.password.$model; // clear existing errors
      // this.$store.dispatch(LOGOUT);
      // set spinner to submit button

      var submitButton = this.$refs["kt_login_signin_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right"); // dummy delay
      // setTimeout(() => {
      //   // send login request
      //   this.$store
      //     .dispatch(LOGIN, { email, password })
      //     // go to which page after successfully login
      //     .then(() => this.$router.push({ name: "dashboard" }));
      //   submitButton.classList.remove(
      //     "spinner",
      //     "spinner-light",
      //     "spinner-right"
      //   );
      // }, 2000);
    }
  },
  computed: {// ...mapState({
    //   errors: state => state.auth.errors
    // })
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "login-form login-signin" },
      [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "b-form",
          {
            staticClass: "form",
            on: {
              submit: function($event) {
                $event.stopPropagation()
                $event.preventDefault()
                return _vm.onSubmit($event)
              }
            }
          },
          [
            _c(
              "div",
              { staticClass: "alert alert-info", attrs: { role: "alert" } },
              [
                _c("div", { staticClass: "alert-text" }, [
                  _vm._v("\n          Use account "),
                  _c("strong", [_vm._v("admin@demo.com")]),
                  _vm._v(" and password\n          "),
                  _c("strong", [_vm._v("demo")]),
                  _vm._v(" to continue.\n        ")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "alert fade alert-danger",
                class: { show: _vm.errors.length },
                attrs: { role: "alert" }
              },
              _vm._l(_vm.errors, function(error, i) {
                return _c("div", { key: i, staticClass: "alert-text" }, [
                  _vm._v("\n          " + _vm._s(error) + "\n        ")
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "b-form-group",
              {
                attrs: {
                  id: "example-input-group-1",
                  label: "",
                  "label-for": "example-input-1"
                }
              },
              [
                _c("b-form-input", {
                  staticClass:
                    "form-control form-control-solid h-auto py-5 px-6",
                  attrs: {
                    id: "example-input-1",
                    name: "example-input-1",
                    state: _vm.validateState("email"),
                    "aria-describedby": "input-1-live-feedback"
                  },
                  model: {
                    value: _vm.$v.form.email.$model,
                    callback: function($$v) {
                      _vm.$set(_vm.$v.form.email, "$model", $$v)
                    },
                    expression: "$v.form.email.$model"
                  }
                }),
                _vm._v(" "),
                _c(
                  "b-form-invalid-feedback",
                  { attrs: { id: "input-1-live-feedback" } },
                  [
                    _vm._v(
                      "\n          Email is required and a valid email address.\n        "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-form-group",
              {
                attrs: {
                  id: "example-input-group-2",
                  label: "",
                  "label-for": "example-input-2"
                }
              },
              [
                _c("b-form-input", {
                  staticClass:
                    "form-control form-control-solid h-auto py-5 px-6",
                  attrs: {
                    type: "password",
                    id: "example-input-2",
                    name: "example-input-2",
                    state: _vm.validateState("password"),
                    "aria-describedby": "input-2-live-feedback"
                  },
                  model: {
                    value: _vm.$v.form.password.$model,
                    callback: function($$v) {
                      _vm.$set(_vm.$v.form.password, "$model", $$v)
                    },
                    expression: "$v.form.password.$model"
                  }
                }),
                _vm._v(" "),
                _c(
                  "b-form-invalid-feedback",
                  { attrs: { id: "input-2-live-feedback" } },
                  [_vm._v("\n          Password is required.\n        ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "form-group d-flex flex-wrap justify-content-between align-items-center"
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "text-dark-60 text-hover-primary my-3 mr-2",
                    attrs: { href: "#", id: "kt_login_forgot" }
                  },
                  [_vm._v("\n          Forgot Password ?\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    ref: "kt_login_signin_submit",
                    staticClass:
                      "btn btn-primary font-weight-bold px-9 py-4 my-3 font-size-3"
                  },
                  [_vm._v("\n          Sign In\n        ")]
                )
              ]
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10"
      },
      [
        _c(
          "span",
          { staticClass: "font-weight-bold font-size-3 text-dark-60" },
          [_vm._v("\n      Don't have an account yet?\n    ")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center mb-10 mb-lg-20" }, [
      _c("h3", { staticClass: "font-size-h1" }, [_vm._v("Sign In")]),
      _vm._v(" "),
      _c("p", { staticClass: "text-muted font-weight-semi-bold" }, [
        _vm._v("\n        Enter your username and password\n      ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/auth/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/auth/Login.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=42c42d6a& */ "./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/pages/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/auth/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/auth/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=42c42d6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);