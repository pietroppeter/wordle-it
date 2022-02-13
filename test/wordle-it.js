this.wordle = this.wordle || {}, this.wordle.bundle = function(e) {
  "use strict";

  function a(e) {
      return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
      } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
  }

  function s(e, a) {
      if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
  }

  function t(e, a) {
      for (var s = 0; s < a.length; s++) {
          var t = a[s];
          t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
      }
  }

  function o(e, a, s) {
      return a && t(e.prototype, a), s && t(e, s), e
  }

  function r(e, a, s) {
      return a in e ? Object.defineProperty(e, a, {
          value: s,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : e[a] = s, e
  }

  function n(e, a) {
      if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(a && a.prototype, {
          constructor: {
              value: e,
              writable: !0,
              configurable: !0
          }
      }), a && l(e, a)
  }

  function i(e) {
      return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
  }

  function l(e, a) {
      return (l = Object.setPrototypeOf || function(e, a) {
          return e.__proto__ = a, e
      })(e, a)
  }

  function d() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
      } catch (e) {
          return !1
      }
  }

  function u(e, a, s) {
      return (u = d() ? Reflect.construct : function(e, a, s) {
          var t = [null];
          t.push.apply(t, a);
          var o = new(Function.bind.apply(e, t));
          return s && l(o, s.prototype), o
      }).apply(null, arguments)
  }

  function c(e) {
      var a = "function" == typeof Map ? new Map : void 0;
      return (c = function(e) {
          if (null === e || (s = e, -1 === Function.toString.call(s).indexOf("[native code]"))) return e;
          var s;
          if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== a) {
              if (a.has(e)) return a.get(e);
              a.set(e, t)
          }

          function t() {
              return u(e, arguments, i(this).constructor)
          }
          return t.prototype = Object.create(e.prototype, {
              constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
              }
          }), l(t, e)
      })(e)
  }

  function p(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
  }

  function m(e, a) {
      return !a || "object" != typeof a && "function" != typeof a ? p(e) : a
  }

  function h(e) {
      var a = d();
      return function() {
          var s, t = i(e);
          if (a) {
              var o = i(this).constructor;
              s = Reflect.construct(t, arguments, o)
          } else s = t.apply(this, arguments);
          return m(this, s)
      }
  }

  function y(e, a) {
      return function(e) {
          if (Array.isArray(e)) return e
      }(e) || function(e, a) {
          var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null == s) return;
          var t, o, r = [],
              n = !0,
              i = !1;
          try {
              for (s = s.call(e); !(n = (t = s.next()).done) && (r.push(t.value), !a || r.length !== a); n = !0);
          } catch (e) {
              i = !0, o = e
          } finally {
              try {
                  n || null == s.return || s.return()
              } finally {
                  if (i) throw o
              }
          }
          return r
      }(e, a) || b(e, a) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
  }

  function g(e) {
      return function(e) {
          if (Array.isArray(e)) return f(e)
      }(e) || function(e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
      }(e) || b(e) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
  }

  function b(e, a) {
      if (e) {
          if ("string" == typeof e) return f(e, a);
          var s = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0
      }
  }

  function f(e, a) {
      (null == a || a > e.length) && (a = e.length);
      for (var s = 0, t = new Array(a); s < a; s++) t[s] = e[s];
      return t
  }
  var k = document.createElement("template");
  k.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
  var v = function(e) {
      n(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), r(p(e = a.call(this)), "_letter", ""), r(p(e), "_state", "empty"), r(p(e), "_animation", "idle"), r(p(e), "_last", !1), r(p(e), "_reveal", !1), e.attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "last",
          set: function(e) {
              this._last = e
          }
      }, {
          key: "connectedCallback",
          value: function() {
              var e = this;
              this.shadowRoot.appendChild(k.content.cloneNode(!0)), this.$tile = this.shadowRoot.querySelector(".tile"), this.$tile.addEventListener("animationend", (function(a) {
                  "PopIn" === a.animationName && (e._animation = "idle"), "FlipIn" === a.animationName && (e.$tile.dataset.state = e._state, e._animation = "flip-out"), "FlipOut" === a.animationName && (e._animation = "idle", e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", {
                      bubbles: !0,
                      composed: !0
                  }))), e._render()
              })), this._render()
          }
      }, {
          key: "attributeChangedCallback",
          value: function(e, a, s) {
              switch (e) {
                  case "letter":
                      if (s === a) break;
                      var t = "null" === s ? "" : s;
                      this._letter = t, this._state = t ? "tbd" : "empty", this._animation = t ? "pop" : "idle";
                      break;
                  case "evaluation":
                      if (!s) break;
                      this._state = s;
                      break;
                  case "reveal":
                      this._animation = "flip-in", this._reveal = !0
              }
              this._render()
          }
      }, {
          key: "_render",
          value: function() {
              this.$tile && (this.$tile.textContent = this._letter, ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state), (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation))
          }
      }], [{
          key: "observedAttributes",
          get: function() {
              return ["letter", "evaluation", "reveal"]
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-tile", v);
  var w = document.createElement("template");
  w.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
  var x = function(e) {
      n(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), (e = a.call(this)).attachShadow({
              mode: "open"
          }), e._letters = "", e._evaluation = [], e._length, e
      }
      return o(t, [{
          key: "evaluation",
          get: function() {
              return this._evaluation
          },
          set: function(e) {
              var a = this;
              this._evaluation = e, this.$tiles && this.$tiles.forEach((function(e, s) {
                  e.setAttribute("evaluation", a._evaluation[s]), setTimeout((function() {
                      e.setAttribute("reveal", "")
                  }), 300 * s)
              }))
          }
      }, {
          key: "connectedCallback",
          value: function() {
              var e = this;
              this.shadowRoot.appendChild(w.content.cloneNode(!0)), this.$row = this.shadowRoot.querySelector(".row");
              for (var a = function(a) {
                      var s = document.createElement("game-tile"),
                          t = e._letters[a];
                      (t && s.setAttribute("letter", t), e._evaluation[a]) && (s.setAttribute("evaluation", e._evaluation[a]), setTimeout((function() {
                          s.setAttribute("reveal", "")
                      }), 100 * a));
                      a === e._length - 1 && (s.last = !0), e.$row.appendChild(s)
                  }, s = 0; s < this._length; s++) a(s);
              this.$tiles = this.shadowRoot.querySelectorAll("game-tile"), this.addEventListener("animationend", (function(a) {
                  "Shake" === a.animationName && e.removeAttribute("invalid")
              }))
          }
      }, {
          key: "attributeChangedCallback",
          value: function(e, a, s) {
              switch (e) {
                  case "letters":
                      this._letters = s || "";
                      break;
                  case "length":
                      this._length = parseInt(s, 10);
                      break;
                  case "win":
                      if (null === s) {
                          this.$tiles.forEach((function(e) {
                              e.classList.remove("win")
                          }));
                          break
                      }
                      this.$tiles.forEach((function(e, a) {
                          e.classList.add("win"), e.style.animationDelay = "".concat(100 * a, "ms")
                      }))
              }
              this._render()
          }
      }, {
          key: "_render",
          value: function() {
              var e = this;
              this.$row && this.$tiles.forEach((function(a, s) {
                  var t = e._letters[s];
                  t ? a.setAttribute("letter", t) : a.removeAttribute("letter")
              }))
          }
      }], [{
          key: "observedAttributes",
          get: function() {
              return ["letters", "length", "invalid", "win"]
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-row", x);
  var z = document.createElement("template");
  z.innerHTML = "\n  <slot></slot>\n";
  var j = "darkTheme",
      S = "colorBlindTheme",
      _ = function(e) {
          n(t, e);
          var a = h(t);

          function t() {
              var e;
              s(this, t), r(p(e = a.call(this)), "isDarkTheme", !1), r(p(e), "isColorBlindTheme", !1), e.attachShadow({
                  mode: "open"
              });
              var o = JSON.parse(window.localStorage.getItem(j)),
                  n = window.matchMedia("(prefers-color-scheme: dark)").matches,
                  i = JSON.parse(window.localStorage.getItem(S));
              return !0 === o || !1 === o ? e.setDarkTheme(o) : n && e.setDarkTheme(!0), !0 !== i && !1 !== i || e.setColorBlindTheme(i), e
          }
          return o(t, [{
              key: "setDarkTheme",
              value: function(e) {
                  var a = document.querySelector("body");
                  e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"), this.isDarkTheme = e, window.localStorage.setItem(j, JSON.stringify(e))
              }
          }, {
              key: "setColorBlindTheme",
              value: function(e) {
                  var a = document.querySelector("body");
                  e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"), this.isColorBlindTheme = e, window.localStorage.setItem(S, JSON.stringify(e))
              }
          }, {
              key: "connectedCallback",
              value: function() {
                  var e = this;
                  this.shadowRoot.appendChild(z.content.cloneNode(!0)), this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                      var s = a.detail,
                          t = s.name,
                          o = s.checked;
                      switch (t) {
                          case "dark-theme":
                              return void e.setDarkTheme(o);
                          case "color-blind-theme":
                              return void e.setColorBlindTheme(o)
                      }
                  }))
              }
          }]), t
      }(c(HTMLElement));

  function q(e, a) {
      return e === a || e != e && a != a
  }

  function E(e, a) {
      for (var s = e.length; s--;)
          if (q(e[s][0], a)) return s;
      return -1
  }
  customElements.define("game-theme-manager", _);
  var A = Array.prototype.splice;

  function L(e) {
      var a = -1,
          s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s;) {
          var t = e[a];
          this.set(t[0], t[1])
      }
  }
  L.prototype.clear = function() {
      this.__data__ = [], this.size = 0
  }, L.prototype.delete = function(e) {
      var a = this.__data__,
          s = E(a, e);
      return !(s < 0) && (s == a.length - 1 ? a.pop() : A.call(a, s, 1), --this.size, !0)
  }, L.prototype.get = function(e) {
      var a = this.__data__,
          s = E(a, e);
      return s < 0 ? void 0 : a[s][1]
  }, L.prototype.has = function(e) {
      return E(this.__data__, e) > -1
  }, L.prototype.set = function(e, a) {
      var s = this.__data__,
          t = E(s, e);
      return t < 0 ? (++this.size, s.push([e, a])) : s[t][1] = a, this
  };
  var T = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global,
      I = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
      C = T || I || Function("return this")(),
      M = C.Symbol,
      O = Object.prototype,
      R = O.hasOwnProperty,
      $ = O.toString,
      P = M ? M.toStringTag : void 0;
  var N = Object.prototype.toString;
  var H = M ? M.toStringTag : void 0;

  function G(e) {
      return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : H && H in Object(e) ? function(e) {
          var a = R.call(e, P),
              s = e[P];
          try {
              e[P] = void 0;
              var t = !0
          } catch (e) {}
          var o = $.call(e);
          return t && (a ? e[P] = s : delete e[P]), o
      }(e) : function(e) {
          return N.call(e)
      }(e)
  }

  function D(e) {
      var s = a(e);
      return null != e && ("object" == s || "function" == s)
  }

  function B(e) {
      if (!D(e)) return !1;
      var a = G(e);
      return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a
  }
  var F, W = C["__core-js_shared__"],
      Y = (F = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "")) ? "Symbol(src)_1." + F : "";
  var J = Function.prototype.toString;
  var U = /^\[object .+?Constructor\]$/,
      X = Function.prototype,
      K = Object.prototype,
      V = X.toString,
      Q = K.hasOwnProperty,
      Z = RegExp("^" + V.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

  function ee(e) {
      return !(!D(e) || (a = e, Y && Y in a)) && (B(e) ? Z : U).test(function(e) {
          if (null != e) {
              try {
                  return J.call(e)
              } catch (e) {}
              try {
                  return e + ""
              } catch (e) {}
          }
          return ""
      }(e));
      var a
  }

  function ae(e, a) {
      var s = function(e, a) {
          return null == e ? void 0 : e[a]
      }(e, a);
      return ee(s) ? s : void 0
  }
  var se = ae(C, "Map"),
      te = ae(Object, "create");
  var oe = Object.prototype.hasOwnProperty;
  var re = Object.prototype.hasOwnProperty;

  function ne(e) {
      var a = -1,
          s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s;) {
          var t = e[a];
          this.set(t[0], t[1])
      }
  }

  function ie(e, s) {
      var t, o, r = e.__data__;
      return ("string" == (o = a(t = s)) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== t : null === t) ? r["string" == typeof s ? "string" : "hash"] : r.map
  }

  function le(e) {
      var a = -1,
          s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s;) {
          var t = e[a];
          this.set(t[0], t[1])
      }
  }
  ne.prototype.clear = function() {
      this.__data__ = te ? te(null) : {}, this.size = 0
  }, ne.prototype.delete = function(e) {
      var a = this.has(e) && delete this.__data__[e];
      return this.size -= a ? 1 : 0, a
  }, ne.prototype.get = function(e) {
      var a = this.__data__;
      if (te) {
          var s = a[e];
          return "__lodash_hash_undefined__" === s ? void 0 : s
      }
      return oe.call(a, e) ? a[e] : void 0
  }, ne.prototype.has = function(e) {
      var a = this.__data__;
      return te ? void 0 !== a[e] : re.call(a, e)
  }, ne.prototype.set = function(e, a) {
      var s = this.__data__;
      return this.size += this.has(e) ? 0 : 1, s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a, this
  }, le.prototype.clear = function() {
      this.size = 0, this.__data__ = {
          hash: new ne,
          map: new(se || L),
          string: new ne
      }
  }, le.prototype.delete = function(e) {
      var a = ie(this, e).delete(e);
      return this.size -= a ? 1 : 0, a
  }, le.prototype.get = function(e) {
      return ie(this, e).get(e)
  }, le.prototype.has = function(e) {
      return ie(this, e).has(e)
  }, le.prototype.set = function(e, a) {
      var s = ie(this, e),
          t = s.size;
      return s.set(e, a), this.size += s.size == t ? 0 : 1, this
  };

  function de(e) {
      var a = this.__data__ = new L(e);
      this.size = a.size
  }
  de.prototype.clear = function() {
      this.__data__ = new L, this.size = 0
  }, de.prototype.delete = function(e) {
      var a = this.__data__,
          s = a.delete(e);
      return this.size = a.size, s
  }, de.prototype.get = function(e) {
      return this.__data__.get(e)
  }, de.prototype.has = function(e) {
      return this.__data__.has(e)
  }, de.prototype.set = function(e, a) {
      var s = this.__data__;
      if (s instanceof L) {
          var t = s.__data__;
          if (!se || t.length < 199) return t.push([e, a]), this.size = ++s.size, this;
          s = this.__data__ = new le(t)
      }
      return s.set(e, a), this.size = s.size, this
  };
  var ue = function() {
      try {
          var e = ae(Object, "defineProperty");
          return e({}, "", {}), e
      } catch (e) {}
  }();

  function ce(e, a, s) {
      "__proto__" == a && ue ? ue(e, a, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
      }) : e[a] = s
  }

  function pe(e, a, s) {
      (void 0 !== s && !q(e[a], s) || void 0 === s && !(a in e)) && ce(e, a, s)
  }
  var me, he = function(e, a, s) {
          for (var t = -1, o = Object(e), r = s(e), n = r.length; n--;) {
              var i = r[me ? n : ++t];
              if (!1 === a(o[i], i, o)) break
          }
          return e
      },
      ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
      ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
      be = ge && ge.exports === ye ? C.Buffer : void 0,
      fe = be ? be.allocUnsafe : void 0;
  var ke = C.Uint8Array;

  function ve(e, a) {
      var s, t, o = a ? (s = e.buffer, t = new s.constructor(s.byteLength), new ke(t).set(new ke(s)), t) : e.buffer;
      return new e.constructor(o, e.byteOffset, e.length)
  }
  var we = Object.create,
      xe = function() {
          function e() {}
          return function(a) {
              if (!D(a)) return {};
              if (we) return we(a);
              e.prototype = a;
              var s = new e;
              return e.prototype = void 0, s
          }
      }();
  var ze, je, Se = (ze = Object.getPrototypeOf, je = Object, function(e) {
          return ze(je(e))
      }),
      _e = Object.prototype;

  function qe(e) {
      var a = e && e.constructor;
      return e === ("function" == typeof a && a.prototype || _e)
  }

  function Ee(e) {
      return null != e && "object" == a(e)
  }

  function Ae(e) {
      return Ee(e) && "[object Arguments]" == G(e)
  }
  var Le = Object.prototype,
      Te = Le.hasOwnProperty,
      Ie = Le.propertyIsEnumerable,
      Ce = Ae(function() {
          return arguments
      }()) ? Ae : function(e) {
          return Ee(e) && Te.call(e, "callee") && !Ie.call(e, "callee")
      },
      Me = Array.isArray;

  function Oe(e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
  }

  function Re(e) {
      return null != e && Oe(e.length) && !B(e)
  }
  var $e = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
      Pe = $e && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
      Ne = Pe && Pe.exports === $e ? C.Buffer : void 0,
      He = (Ne ? Ne.isBuffer : void 0) || function() {
          return !1
      },
      Ge = Function.prototype,
      De = Object.prototype,
      Be = Ge.toString,
      Fe = De.hasOwnProperty,
      We = Be.call(Object);
  var Ye = {};
  Ye["[object Float32Array]"] = Ye["[object Float64Array]"] = Ye["[object Int8Array]"] = Ye["[object Int16Array]"] = Ye["[object Int32Array]"] = Ye["[object Uint8Array]"] = Ye["[object Uint8ClampedArray]"] = Ye["[object Uint16Array]"] = Ye["[object Uint32Array]"] = !0, Ye["[object Arguments]"] = Ye["[object Array]"] = Ye["[object ArrayBuffer]"] = Ye["[object Boolean]"] = Ye["[object DataView]"] = Ye["[object Date]"] = Ye["[object Error]"] = Ye["[object Function]"] = Ye["[object Map]"] = Ye["[object Number]"] = Ye["[object Object]"] = Ye["[object RegExp]"] = Ye["[object Set]"] = Ye["[object String]"] = Ye["[object WeakMap]"] = !1;
  var Je = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
      Ue = Je && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
      Xe = Ue && Ue.exports === Je && T.process,
      Ke = function() {
          try {
              var e = Ue && Ue.require && Ue.require("util").types;
              return e || Xe && Xe.binding && Xe.binding("util")
          } catch (e) {}
      }(),
      Ve = Ke && Ke.isTypedArray,
      Qe = Ve ? function(e) {
          return function(a) {
              return e(a)
          }
      }(Ve) : function(e) {
          return Ee(e) && Oe(e.length) && !!Ye[G(e)]
      };

  function Ze(e, a) {
      if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a) return e[a]
  }
  var ea = Object.prototype.hasOwnProperty;

  function aa(e, a, s) {
      var t = e[a];
      ea.call(e, a) && q(t, s) && (void 0 !== s || a in e) || ce(e, a, s)
  }
  var sa = /^(?:0|[1-9]\d*)$/;

  function ta(e, s) {
      var t = a(e);
      return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || "symbol" != t && sa.test(e)) && e > -1 && e % 1 == 0 && e < s
  }
  var oa = Object.prototype.hasOwnProperty;

  function ra(e, a) {
      var s = Me(e),
          t = !s && Ce(e),
          o = !s && !t && He(e),
          r = !s && !t && !o && Qe(e),
          n = s || t || o || r,
          i = n ? function(e, a) {
              for (var s = -1, t = Array(e); ++s < e;) t[s] = a(s);
              return t
          }(e.length, String) : [],
          l = i.length;
      for (var d in e) !a && !oa.call(e, d) || n && ("length" == d || o && ("offset" == d || "parent" == d) || r && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || ta(d, l)) || i.push(d);
      return i
  }
  var na = Object.prototype.hasOwnProperty;

  function ia(e) {
      if (!D(e)) return function(e) {
          var a = [];
          if (null != e)
              for (var s in Object(e)) a.push(s);
          return a
      }(e);
      var a = qe(e),
          s = [];
      for (var t in e)("constructor" != t || !a && na.call(e, t)) && s.push(t);
      return s
  }

  function la(e) {
      return Re(e) ? ra(e, !0) : ia(e)
  }

  function da(e) {
      return function(e, a, s, t) {
          var o = !s;
          s || (s = {});
          for (var r = -1, n = a.length; ++r < n;) {
              var i = a[r],
                  l = t ? t(s[i], e[i], i, s, e) : void 0;
              void 0 === l && (l = e[i]), o ? ce(s, i, l) : aa(s, i, l)
          }
          return s
      }(e, la(e))
  }

  function ua(e, a, s, t, o, r, n) {
      var i = Ze(e, s),
          l = Ze(a, s),
          d = n.get(l);
      if (d) pe(e, s, d);
      else {
          var u, c = r ? r(i, l, s + "", e, a, n) : void 0,
              p = void 0 === c;
          if (p) {
              var m = Me(l),
                  h = !m && He(l),
                  y = !m && !h && Qe(l);
              c = l, m || h || y ? Me(i) ? c = i : Ee(u = i) && Re(u) ? c = function(e, a) {
                  var s = -1,
                      t = e.length;
                  for (a || (a = Array(t)); ++s < t;) a[s] = e[s];
                  return a
              }(i) : h ? (p = !1, c = function(e, a) {
                  if (a) return e.slice();
                  var s = e.length,
                      t = fe ? fe(s) : new e.constructor(s);
                  return e.copy(t), t
              }(l, !0)) : y ? (p = !1, c = ve(l, !0)) : c = [] : function(e) {
                  if (!Ee(e) || "[object Object]" != G(e)) return !1;
                  var a = Se(e);
                  if (null === a) return !0;
                  var s = Fe.call(a, "constructor") && a.constructor;
                  return "function" == typeof s && s instanceof s && Be.call(s) == We
              }(l) || Ce(l) ? (c = i, Ce(i) ? c = da(i) : D(i) && !B(i) || (c = function(e) {
                  return "function" != typeof e.constructor || qe(e) ? {} : xe(Se(e))
              }(l))) : p = !1
          }
          p && (n.set(l, c), o(c, l, t, r, n), n.delete(l)), pe(e, s, c)
      }
  }

  function ca(e, a, s, t, o) {
      e !== a && he(a, (function(r, n) {
          if (o || (o = new de), D(r)) ua(e, a, n, s, ca, t, o);
          else {
              var i = t ? t(Ze(e, n), r, n + "", e, a, o) : void 0;
              void 0 === i && (i = r), pe(e, n, i)
          }
      }), la)
  }

  function pa(e) {
      return e
  }

  function ma(e, a, s) {
      switch (s.length) {
          case 0:
              return e.call(a);
          case 1:
              return e.call(a, s[0]);
          case 2:
              return e.call(a, s[0], s[1]);
          case 3:
              return e.call(a, s[0], s[1], s[2])
      }
      return e.apply(a, s)
  }
  var ha = Math.max;
  var ya = ue ? function(e, a) {
          return ue(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: (s = a, function() {
                  return s
              }),
              writable: !0
          });
          var s
      } : pa,
      ga = Date.now;
  var ba = function(e) {
      var a = 0,
          s = 0;
      return function() {
          var t = ga(),
              o = 16 - (t - s);
          if (s = t, o > 0) {
              if (++a >= 800) return arguments[0]
          } else a = 0;
          return e.apply(void 0, arguments)
      }
  }(ya);

  function fa(e, a) {
      return ba(function(e, a, s) {
          return a = ha(void 0 === a ? e.length - 1 : a, 0),
              function() {
                  for (var t = arguments, o = -1, r = ha(t.length - a, 0), n = Array(r); ++o < r;) n[o] = t[a + o];
                  o = -1;
                  for (var i = Array(a + 1); ++o < a;) i[o] = t[o];
                  return i[a] = s(n), ma(e, this, i)
              }
      }(e, a, pa), e + "")
  }
  var ka, va = (ka = function(e, a, s) {
          ca(e, a, s)
      }, fa((function(e, s) {
          var t = -1,
              o = s.length,
              r = o > 1 ? s[o - 1] : void 0,
              n = o > 2 ? s[2] : void 0;
          for (r = ka.length > 3 && "function" == typeof r ? (o--, r) : void 0, n && function(e, s, t) {
                  if (!D(t)) return !1;
                  var o = a(s);
                  return !!("number" == o ? Re(t) && ta(s, t.length) : "string" == o && s in t) && q(t[s], e)
              }(s[0], s[1], n) && (r = o < 3 ? void 0 : r, o = 1), e = Object(e); ++t < o;) {
              var i = s[t];
              i && ka(e, i, t, r)
          }
          return e
      }))),
      wa = "gameState",
      xa = {
          boardState: null,
          evaluations: null,
          rowIndex: null,
          solution: null,
          gameStatus: null,
          lastPlayedTs: null,
          lastCompletedTs: null,
          restoringFromLocalStorage: null,
          hardMode: !1
      };

  function za() {
      var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
      return JSON.parse(e)
  }

  function ja(e) {
      var a = za();
      ! function(e) {
          window.localStorage.setItem(wa, JSON.stringify(e))
      }(va(a, e))
  }
  var Sa = document.createElement("template");
  Sa.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Il gioco si fa duro</div>\n          <div class="description">Ogni lettera nota deve essere usata nei tentativi successivi</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Tema nero</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Colori ad alto contrasto</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Feedback</div>\n        </div>\n        <div class="control">\n          <a href="https://github.com/pietroppeter/wordle-it/issues/new" target="blank" title="github.com/pietroppeter/wordle-it">Github</a>\n          |\n          <a href="https://twitter.com/intent/tweet?screen_name=pietroppeter" target="blank" title="@pietroppeter">Twitter</a>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div id="footnote">\n    <div id="puzzle-number"></div>\n    <div id="hash"></div>\n  <div>\n';
  var _a = function(e) {
      n(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), r(p(e = a.call(this)), "gameApp", void 0), e.attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "connectedCallback",
          value: function() {
              var e, a = this;
              this.shadowRoot.appendChild(Sa.content.cloneNode(!0)), this.shadowRoot.querySelector("#hash").textContent = null === (e = window.wordle) || void 0 === e ? void 0 : e.hash, this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset), this.shadowRoot.addEventListener("game-switch-change", (function(e) {
                  e.stopPropagation();
                  var s = e.detail,
                      t = s.name,
                      o = s.checked,
                      r = s.disabled;
                  a.dispatchEvent(new CustomEvent("game-setting-change", {
                      bubbles: !0,
                      composed: !0,
                      detail: {
                          name: t,
                          checked: o,
                          disabled: r
                      }
                  })), a.render()
              })), this.render()
          }
      }, {
          key: "render",
          value: function() {
              var e = document.querySelector("body");
              e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""), e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
              var a = za();
              a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""), a.hardMode || "IN_PROGRESS" !== a.gameStatus || 0 === a.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"), this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-settings", _a);
  var qa = document.createElement("template");
  qa.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
  var Ea = function(e) {
      n(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), r(p(e = a.call(this)), "_duration", void 0), e.attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "connectedCallback",
          value: function() {
              var e = this;
              this.shadowRoot.appendChild(qa.content.cloneNode(!0));
              var a = this.shadowRoot.querySelector(".toast");
              a.textContent = this.getAttribute("text"), this._duration = this.getAttribute("duration") || 1e3, "Infinity" !== this._duration && setTimeout((function() {
                  a.classList.add("fade")
              }), this._duration), a.addEventListener("transitionend", (function(a) {
                  e.parentNode.removeChild(e)
              }))
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-toast", Ea);
  var Aa = ["oncia", "dubbi", "corra", "litro", "sparo", "carta", "nasce", "punti", "rasoi", "muffa", "ritmi", "lorde", "carne", "snodi", "borie", "calco", "crepe", "eredi", "tosai", "sugli", "disto", "dirmi", "nuovo", "mandi", "giace", "odino", "zolfo", "umana", "scali", "farne", "dogma", "rompa", "arida", "ressa", "puzzi", "vuole", "pigro", "fogne", "panno", "gioco", "rozza", "porge", "vinti", "vizio", "casco", "giogo", "testa", "tosta", "zompo", "estro", "falce", "salmo", "somma", "ameba", "amavo", "polpo", "video", "curia", "obolo", "rende", "fiato", "scopa", "clima", "dighe", "vieni", "kappa", "usura", "turbe", "retto", "unito", "pelle", "baffi", "serpe", "ardua", "bario", "fobia", "fughe", "lisca", "farro", "pensa", "sorge", "leale", "pacca", "bruma", "gnomo", "prima", "saghe", "forza", "peplo", "viole", "serie", "abito", "ansia", "unico", "grigi", "larva", "ballo", "berlo", "fibra", "calme", "tosse", "sciai", "epuro", "turco", "lotta", "svevo", "lardo", "puffi", "china", "fruga", "veste", "lunga", "pareo", "cirri", "vasto", "totem", "afoso", "arnia", "stesa", "avito", "fermo", "trono", "fissa", "latta", "colza", "bisca", "slego", "riuso", "astro", "tigre", "dieci", "bucce", "cunei", "bizze", "suola", "avuto", "abaco", "limbo", "arena", "tozza", "testo", "volta", "melma", "croma", "sfamo", "liceo", "reato", "ebreo", "lerci", "sozza", "pruno", "pigna", "ovulo", "agone", "ligio", "cachi", "collo", "riffa", "mosca", "diodo", "frana", "pinza", "punta", "docce", "beffa", "mezzo", "merce", "abbia", "largo", "monte", "visto", "prego", "fanno", "conga", "gogna", "razza", "dorma", "ridda", "adito", "pesto", "mossa", "gradi", "retta", "aglio", "finge", "scemi", "stavi", "sudai", "detto", "eludo", "soave", "culla", "tuffo", "duomo", "amala", "oppio", "plebe", "casta", "galea", "panne", "ciclo", "pozza", "matto", "gomma", "ponte", "serra", "paese", "mutuo", "fauci", "adagi", "corna", "aorta", "beone", "podio", "pance", "forno", "relax", "passi", "recai", "desta", "alate", "salto", "asilo", "mucca", "ceduo", "gusto", "flebo", "esame", "ulula", "zinco", "posta", "sfumo", "azoto", "sauna", "lista", "gergo", "draga", "capra", "palio", "celia", "spera", "reale", "muoio", "socio", "basta", "sfogo", "lemma", "scena", "sarde", "ritto", "becco", "fieno", "armai", "razzo", "tarme", "vuoti", "coevo", "losco", "fuoco", "vento", "ragno", "nappa", "siamo", "vaghe", "volpe", "dossi", "cibai", "sfizi", "dillo", "ceppo", "nafta", "torto", "metto", "marca", "iodio", "righe", "gocce", "pasto", "biada", "gusci", "parte", "conio", "tedio", "feudo", "perla", "manca", "balsa", "audio", "rospo", "leghe", "colai", "vanto", "teppa", "forse", "tende", "serbo", "abusa", "apnea", "sarti", "calca", "acume", "busso", "fiera", "beato", "opera", "cenno", "ghiro", "nuoto", "sport", "orari", "brodo", "bacca", "sfuso", "nenia", "croda", "circa", "tappe", "alice", "terzo", "cenci", "creai", "stona", "marzo", "tordo", "negai", "curva", "ernia", "costa", "perno", "scopo", "denso", "bugie", "suolo", "carpa", "alcol", "calva", "causa", "nevai", "sturo", "cassa", "basto", "avvio", "sonno", "brame", "danza", "gnosi", "campa", "cosmo", "opaco", "gemma", "desco", "zanne", "pongo", "piove", "tetto", "servi", "anche", "croco", "tolta", "forum", "vigna", "samba", "milza", "felce", "iride", "esche", "agata", "panca", "aroma", "borsa", "censo", "credo", "alzai", "prude", "palma", "balle", "patio", "funge", "pugni", "svaso", "brado", "curai", "tonfo", "serio", "adipe", "tolda", "cagna", "vispa", "tasso", "cigno", "perde", "punge", "vanga", "cervo", "tappo", "mesta", "tersa", "cauto", "ubbia", "morti", "sette", "zeppa", "norme", "nomea", "scavo", "prosa", "misto", "miele", "salve", "comma", "duole", "belva", "cespo", "corto", "svito", "certa", "coque", "cardo", "celti", "hotel", "vendo", "saldo", "umile", "ruota", "croce", "epica", "rione", "sosta", "sputo", "creta", "zecca", "tulle", "cinse", "trova", "mafia", "micce", "perso", "fregi", "disco", "occhi", "canoa", "ebete", "umida", "gesso", "volai", "cloro", "fetta", "polpa", "lagna", "cruda", "lance", "udire", "tinta", "trito", "direi", "pizza", "porro", "verde", "acino", "bioma", "salsa", "pompa", "pampa", "nonna", "nulla", "luogo", "panna", "randa", "valle", "siero", "vezzo", "aprii", "laghi", "conca", "rubli", "firma", "goffe", "foste", "paura", "tempo", "pinta", "esile", "adula", "etica", "magia", "entra", "turpe", "ovest", "tieni", "ebano", "addio", "elogi", "drupa", "sinti", "invio", "parto", "tallo", "nutre", "zuppa", "lucro", "grama", "fungo", "sorto", "orafe", "cecio", "dimmi", "rauca", "alibi", "venia", "forra", "astio", "posso", "anelo", "eremo", "calze", "globo", "nause", "pista", "fammi", "torce", "gonfi", "bruti", "privo", "coffa", "stile", "acqua", "etnia", "spazi", "nassa", "cacio", "annoi", "tonti", "magma", "vasai", "badai", "salpo", "sodio", "bimba", "forca", "crine", "sacco", "stiva", "calci", "masso", "verbo", "pesca", "ninja", "rumba", "oltre", "manzo", "bollo", "nuche", "scudo", "sella", "poema", "fante", "bigia", "prode", "fulva", "sogno", "sesso", "seguo", "gamma", "colma", "fallo", "sorbo", "tasca", "tirai", "lombi", "colmo", "cappa", "targa", "molla", "terga", "studi", "cesio", "doghe", "calli", "crasi", "ricco", "corpo", "girai", "linda", "sarei", "linea", "reggo", "koala", "teche", "inizi", "tardi", "cozzo", "jeans", "bazar", "multa", "narri", "pecco", "brina", "fiabe", "andai", "vitto", "ovale", "bolla", "pigio", "odore", "gambo", "tetro", "ossea", "usano", "succo", "regio", "abeti", "parve", "litio", "balia", "sesto", "buchi", "omero", "cerco", "ovini", "tilde", "ruolo", "tutte", "voghi", "conte", "cielo", "avido", "fisco", "gigli", "carme", "alghe", "sbafo", "guaio", "sfida", "furia", "barca", "vacuo", "robot", "panda", "venti", "bello", "amici", "roche", "asola", "coppa", "leone", "camma", "letto", "miope", "nembo", "laser", "casse", "pacco", "fogli", "stelo", "torni", "abbai", "freno", "ebbro", "tenue", "baldo", "optai", "obice", "avari", "zuffa", "aduso", "tasto", "senso", "manto", "nocca", "sigla", "lasco", "notte", "lesta", "usare", "sorci", "sidro", "peana", "bisce", "figli", "gatto", "doppi", "tengo", "frigo", "bruco", "regia", "setta", "vetta", "ratti", "amido", "zaino", "schwa", "cesso", "coppi", "reame", "daino", "fiume", "acuti", "blesa", "colui", "ladro", "carso", "udiva", "retro", "secco", "merlo", "cesta", "solfa", "gonzo", "atrio", "umori", "bravi", "amaro", "abile", "cosca", "sacre", "cisti", "scala", "sommo", "vegli", "ordii", "gelso", "ferro", "uggia", "ruspa", "trama", "rampa", "spiga", "esodo", "mappa", "frasi", "orale", "lanci", "archi", "volge", "tatto", "omone", "lepri", "stola", "butta", "toppa", "stare", "bruno", "metro", "ugola", "sigma", "amore", "duale", "cuoio", "degna", "edera", "rodeo", "brace", "emana", "foche", "olive", "mania", "cinta", "verga", "rughe", "rosea", "isola", "banca", "extra", "museo", "zolla", "salma", "ampio", "edema", "suono", "erica", "cobra", "gazza", "lieta", "terra", "anodo", "unire", "furba", "sosia", "chela", "ganzo", "bocca", "masai", "cotta", "piada", "pinne", "lampo", "torso", "spuma", "verso", "canea", "grave", "greto", "cucio", "drago", "fatto", "serro", "petto", "pecca", "teste", "parco", "esito", "folle", "baita", "mango", "penna", "poeta", "baule", "animo", "slogo", "conci", "probo", "spesa", "conta", "bozza", "calce", "vinai", "carie", "chilo", "orchi", "tocca", "apice", "fummo", "morda", "vespa", "canto", "burla", "motto", "torme", "assai", "otite", "tento", "raggi", "droga", "toghe", "crani", "mosci", "aceto", "frega", "agire", "giuro", "pinna", "efebo", "genio", "piace", "ormai", "stima", "russo", "pelli", "faggi", "igneo", "tenia", "situa", "egizi", "aneto", "pesco", "bazza", "virus", "slavi", "basco", "scusa", "dalia", "nozze", "karma", "niveo", "greco", "piega", "sorso", "azero", "morbo", "quasi", "santa", "pezzo", "grida", "bidet", "paghe", "tonno", "cedro", "senza", "sappi", "vinse", "rebbi", "golfo", "ricci", "mille", "ninfa", "tanfo", "resto", "cenai", "glifo", "tarso", "utili", "mosto", "rubai", "bieta", "sughi", "piede", "facce", "sugna", "palle", "bullo", "penne", "fremo", "tigna", "viola", "nerbo", "tanto", "rupia", "univa", "onore", "finto", "duchi", "sento", "sotto", "pasta", "esule", "cavai", "malta", "pizzo", "ovvio", "tatuo", "soldi", "legge", "volle", "farsa", "covai", "urina", "fosco", "etnea", "talea", "fonte", "arabi", "gassa", "omise", "etimo", "cameo", "ruppe", "lusso", "pelai", "gotta", "prove", "erano", "suore", "mogio", "stufo", "sisma", "faida", "busti", "dardo", "segno", "ulivo", "nuora", "marmo", "vacca", "educa", "frate", "usato", "smise", "raspo", "gesti", "svelo", "speck", "istmo", "rissa", "plico", "offro", "zitti", "badia", "media", "prono", "corvi", "disfa", "oblio", "patta", "vulva", "polso", "usavi", "cambi", "crisi", "botti", "sabba", "colon", "tarpo", "caldo", "bambu", "pollo", "crepi", "fosse", "preso", "patto", "bitta", "emulo", "orata", "avere", "bongo", "gioia", "ovaia", "canna", "palpo", "bagno", "ciuco", "falde", "posto", "morsa", "seppi", "micio", "scafo", "tonda", "sobri", "crema", "sceso", "bruci", "soffi", "raspa", "afnio", "manna", "pieve", "atomo", "nuoce", "spola", "tacco", "sunto", "alito", "celai", "ratto", "danno", "diari", "fresa", "giara", "sansa", "mogli", "grumo", "spada", "bordi", "prato", "flora", "culto", "rogge", "talpa", "copia", "verza", "parlo", "cuore", "garza", "bacio", "ambra", "dolce", "gobba", "sposi", "dotta", "buffa", "anice", "fossa", "paggi", "trota", "giova", "forte", "mance", "fuori", "sfera", "mitra", "corte", "aureo", "stato", "muovi", "felpa", "cicca", "burro", "agito", "bulbo", "lutto", "mazza", "clero", "parso", "molti", "spore", "poggi", "imita", "savio", "togli", "siepe", "sopra", "emoji", "bieco", "torba", "rutto", "clava", "fondo", "solco", "urlai", "lobby", "mensa", "fioca", "grano", "palla", "svago", "budda", "zoppo", "botte", "cieca", "vibra", "libro", "folla", "grato", "polio", "spine", "udito", "cheta", "fasce", "colla", "ghisa", "torve", "rocce", "terna", "gechi", "campo", "viale", "ponfo", "rullo", "renna", "tarlo", "pulce", "ferie", "lacca", "selci", "benda", "gonna", "prora", "tizio", "uscio", "cosce", "frode", "epoca", "solai", "ilare", "bardo", "nesso", "cuoca", "lavai", "brano", "torre", "porta", "emiro", "arpie", "asino", "onice", "boato", "cocci", "muone", "tacca", "stiro", "legna", "fichi", "zeppo", "lembo", "orcio", "copri", "upupa", "etano", "capii", "forma", "fiero", "tenda", "eroso", "barai", "preda", "germe", "vetro", "massa", "batte", "vizzo", "villa", "tecno", "scure", "tibia", "pigli", "penai", "evoco", "rebus", "saggi", "piaga", "mozzi", "evaso", "denti", "errai", "tango", "quale", "ameni", "cromo", "borgo", "circo", "trave", "utile", "ronfa", "senno", "colpi", "dieta", "cavia", "corsa", "edile", "fauna", "vieto", "talco", "giada", "album", "varco", "acari", "berci", "alone", "furto", "sedia", "mirto", "palmo", "fiala", "roghi", "tenni", "liana", "corda", "rogna", "sonda", "pioli", "mondo", "alveo", "purga", "zirlo", "fumai", "porto", "altra", "carro", "meteo", "poppa", "piano", "nonio", "clown", "zappa", "netto", "mamma", "espio", "grata", "acida", "monca", "paria", "cerro", "icona", "vello", "briga", "osare", "zozze", "nervi", "diade", "gallo", "agave", "fiore", "picco", "legno", "ditta", "tesse", "babau", "banco", "gamba", "passa", "quota", "cento", "fitto", "calai", "colgo", "cruna", "radio", "zonzo", "latte", "pozzi", "babbo", "lesso", "versi", "donna", "ancia", "etere", "risma", "curry", "pappa", "gorgo", "torta", "mecca", "pesai", "tazza", "faina", "madre", "lasci", "spelo", "malga", "colpe", "sazio", "lecci", "basso", "bomba", "siedi", "bivio", "amato", "ombra", "ostia", "mallo", "dammi", "premi", "prete", "cargo", "tagli", "conto", "notai", "fesso", "terme", "secca", "fango", "marea", "sordi", "legai", "ostro", "dazio", "regno", "dorso", "piena", "lotti", "linfa", "taiga", "aereo", "vermi", "costi", "pegni", "valgo", "mughi", "nanna", "cacao", "padre", "velai", "trino", "evita", "utero", "agape", "erigo", "curda", "barra", "cippo", "nylon", "piuma", "sanno", "ascia", "negli", "cetra", "cifra", "tremo", "ogiva", "blusa", "parti", "buono", "idolo", "spira", "getto", "gozzo", "porre", "frase", "agile", "lenta", "cucce", "aerea", "turno", "ribes", "acero", "hanno", "vista", "pazzi", "vocio", "lucci", "abate", "cella", "barba", "mambo", "omega", "rango", "suino", "sfila", "bocce", "orgia", "peste", "cigli", "sagra", "tigli", "drone", "esigo", "fiuto", "garbo", "avena", "belga", "adori", "zebra", "fatuo", "tette", "opino", "cozze", "ozono", "posai", "volto", "mazzo", "domai", "aspri", "antro", "avrai", "umore", "elevo", "vanno", "eroga", "guado", "seghe", "varie", "corso", "desio", "tuono", "guida", "afidi", "lizza", "elica", "primo", "scolo", "omino", "seggi", "pende", "grana", "festa", "visse", "ceffo", "rombo", "zampa", "ossia", "obesi", "rocca", "liuto", "tassa", "lieve", "oliai", "falco", "selva", "venga", "pausa", "esoso", "lisci", "carte", "foibe", "leggo", "lacci", "falso", "grafo", "bande", "oziai", "ovile", "presa", "vasca", "marna", "amaca", "prole", "bosco", "rossa", "mento", "lince", "lecca", "casba", "clone", "tomba", "sbavi", "gente", "fusto", "folto", "iella", "lenza", "pochi", "mangi", "curio", "scova", "birra", "rotta", "sasso", "lonza", "busta", "ganci", "modem", "marce", "menta", "ruzzo", "dicco", "colse", "birba", "coesa", "breve", "scade", "avolo", "pulsa", "palco", "porci", "natia", "ronda", "arare", "maghi", "passo", "cocco", "guano", "stadi", "aiuto", "zucca", "oneri", "morso", "cadde", "annuo", "vinco", "colta", "messa", "citai", "setto", "pesce", "magro", "bachi", "spago", "cenge", "marre", "treno", "remai", "greve", "balzo", "sbuca", "laico", "afona", "beghe", "adone"],
      La = ["abata", "abati", "abato", "abavi", "abavo", "abaya", "abbui", "abete", "abili", "abita", "abiti", "abuna", "abusi", "abuso", "acaro", "acati", "acato", "acazi", "accia", "accio", "aceri", "acese", "acesi", "aceta", "aceti", "achea", "achee", "achei", "acheo", "acide", "acidi", "acido", "acile", "acili", "acini", "acori", "acoro", "acque", "acqui", "acquo", "actea", "actee", "acuii", "acumi", "acuta", "acute", "acuto", "adale", "adali", "addai", "addii", "addua", "addui", "adduo", "adesa", "adese", "adesi", "adeso", "adima", "adimi", "adimo", "adipi", "adira", "adire", "adiri", "adiro", "adita", "adite", "aditi", "adiva", "adivi", "adivo", "adobe", "adona", "adoni", "adono", "adora", "adoro", "adoxa", "adoxe", "aduli", "adulo", "aduna", "aduni", "aduno", "adusa", "aduse", "adusi", "aequo", "aerai", "aeree", "aerei", "afaca", "afata", "afate", "afati", "afato", "afeli", "afeta", "afeti", "afide", "afnii", "afone", "afoni", "afono", "afosa", "afose", "afosi", "agama", "agame", "agami", "agamo", "agapi", "agate", "agavi", "aggio", "agiai", "agili", "agino", "agita", "agite", "agiti", "agiva", "agivi", "agivo", "agoni", "agora", "aguti", "aiace", "aiaci", "aiata", "aiate", "aiola", "aiole", "aioli", "aiolo", "aione", "aioni", "aitai", "aiuga", "aiuta", "aiuti", "aizza", "aizzi", "aizzo", "alaci", "alala", "alale", "alali", "alalo", "alami", "alane", "alani", "alano", "alare", "alari", "alata", "alati", "alato", "alava", "alavi", "alavo", "albio", "alcea", "alcee", "alche", "aldio", "aleph", "alesa", "alese", "alesi", "aleso", "algia", "algie", "aliai", "alias", "alici", "alida", "alide", "alidi", "alido", "alimi", "alimo", "alino", "alita", "alite", "aliti", "allea", "allee", "allei", "alleo", "almea", "almee", "alobi", "alona", "aloni", "alono", "alosa", "alose", "alpha", "altea", "altee", "altre", "altri", "altro", "alula", "alule", "alvei", "amaci", "amale", "amali", "amalo", "amami", "amane", "amano", "amara", "amare", "amari", "amasi", "amata", "amate", "amati", "amava", "amavi", "ambia", "ambii", "ambio", "ambre", "amebe", "amena", "amene", "ameno", "amica", "amico", "amida", "amide", "amidi", "amiga", "amigo", "amile", "amili", "amina", "amine", "amino", "ammai", "amnii", "amnio", "amomi", "amomo", "amori", "ampia", "ampie", "ampli", "amuli", "amulo", "anale", "anali", "anari", "anela", "anele", "aneli", "aneti", "angla", "angle", "angli", "anglo", "angue", "angui", "anici", "anile", "anili", "anima", "anime", "animi", "annua", "annue", "annui", "anobi", "anodi", "anona", "anone", "ansai", "ansie", "ansio", "antri", "anura", "anure", "anuri", "anuro", "aonia", "aonie", "aonio", "aorte", "apale", "apali", "apate", "apici", "apide", "apidi", "apina", "apine", "apira", "apire", "apiri", "apiro", "apnee", "apoda", "apode", "apodi", "apodo", "appai", "appia", "appie", "appio", "apula", "apule", "apuli", "apulo", "araba", "arabe", "arabo", "araci", "arala", "arale", "arali", "aralo", "arama", "arame", "arami", "aramo", "arane", "arano", "arara", "arata", "arate", "arati", "arato", "arava", "aravi", "aravo", "arcai", "arche", "arcua", "arcui", "arcuo", "ardea", "ardee", "ardii", "ardue", "ardui", "arduo", "areai", "areca", "arene", "areni", "areno", "arese", "aresi", "argea", "argee", "argei", "argeo", "arghi", "argon", "aride", "aridi", "arido", "arile", "arili", "arino", "arnie", "aromi", "arpia", "arsii", "artai", "artoa", "artoe", "artoi", "artoo", "asada", "asado", "asana", "asari", "asaro", "aschi", "ascio", "asili", "asina", "asine", "asini", "asole", "asoli", "asolo", "aspra", "aspre", "aspro", "astia", "astri", "atava", "atave", "atavi", "atavo", "atele", "ateli", "atomi", "atona", "atone", "atoni", "atono", "atout", "atrii", "attai", "attea", "attee", "attei", "atteo", "attua", "attui", "attuo", "audit", "auffa", "augna", "augni", "augno", "aulii", "aurai", "aurea", "auree", "aurei", "avana", "avara", "avare", "avaro", "avene", "averi", "avete", "aveva", "avevi", "avevo", "avida", "avide", "avidi", "avita", "avite", "aviti", "avoca", "avoco", "avola", "avole", "avoli", "avori", "avrei", "avuta", "avute", "avuti", "avvia", "avvii", "axone", "axoni", "azera", "azere", "azeri", "azide", "azidi", "azima", "azime", "azimi", "azimo", "azina", "azine", "azoni", "azota", "azoti", "azuki", "babao", "babbi", "bacai", "bacco", "bacia", "bacie", "bacii", "badge", "badgi", "badie", "baele", "baeli", "baffo", "bagel", "bagli", "bagna", "bagne", "bagni", "baiai", "baili", "bailo", "baino", "baite", "bakka", "bakke", "bakki", "bakko", "balba", "balbe", "balbi", "balbo", "balco", "balda", "balde", "baldi", "balie", "balii", "balio", "balla", "balli", "balma", "balme", "balse", "balta", "balte", "balti", "balto", "balza", "balze", "balzi", "bamba", "bambe", "bambi", "bambo", "banaa", "banae", "banai", "banao", "banda", "bandi", "bando", "bangi", "banjo", "banna", "banni", "banno", "bantu", "barbe", "barbi", "barbo", "barco", "barda", "barde", "bardi", "baria", "barie", "barii", "barre", "barri", "barro", "basai", "basca", "basii", "bassa", "basse", "bassi", "baste", "basti", "batta", "batti", "batto", "batua", "baula", "bauli", "baulo", "bauta", "baute", "bazze", "beaci", "beala", "beale", "beali", "bealo", "beami", "beane", "beano", "beare", "beata", "beate", "beati", "beava", "beavi", "beavo", "bebop", "becca", "beffe", "beffi", "beffo", "begai", "beggi", "beghi", "begia", "begli", "beige", "beigi", "beino", "beisa", "beise", "belai", "belgi", "belii", "belio", "bella", "belle", "belli", "belta", "belve", "benai", "bende", "bendi", "bendo", "benna", "benne", "beola", "beole", "beona", "beoni", "beota", "beote", "beoti", "berla", "berle", "berli", "berma", "berme", "bermi", "berne", "bersi", "berta", "berte", "berti", "bervi", "besce", "besci", "bessa", "besse", "bessi", "besso", "betta", "bette", "beuta", "beute", "bevei", "bevve", "bevvi", "bezzi", "bezzo", "biade", "biadi", "biado", "biava", "biave", "biavi", "biavo", "bibbi", "biche", "bieca", "biete", "biffa", "biffe", "biffi", "biffo", "bighe", "bighi", "bigie", "bigio", "bigne", "bilia", "bilie", "bimbe", "bimbi", "bimbo", "binai", "binda", "binde", "bindi", "binga", "binge", "bingo", "biodi", "biodo", "biomi", "biosi", "biova", "biove", "birbe", "birbi", "birbo", "birce", "birci", "birre", "birri", "birro", "bissa", "bissi", "bisso", "bista", "biste", "bisti", "bitte", "bitti", "bitto", "biuta", "biute", "biuti", "biuto", "bizza", "blese", "blesi", "bleso", "blini", "blitz", "blumi", "blumo", "bluse", "boari", "boaro", "boati", "bobba", "bobbi", "bobbo", "bocci", "bocco", "bocia", "boema", "boeme", "boemi", "boemo", "boera", "boere", "boeri", "boero", "boghe", "boide", "boidi", "boite", "boldi", "boldo", "bolge", "bolle", "bolli", "bolsa", "bolse", "bolsi", "bolso", "bombe", "bombi", "bombo", "bonne", "bonta", "bonza", "bonze", "bonzi", "bonzo", "borda", "borde", "bordo", "borea", "borei", "boria", "borii", "borio", "borni", "borra", "borre", "borri", "borro", "borse", "bossi", "bosso", "botri", "botro", "botta", "botto", "boule", "boxai", "bozze", "bozzi", "bozzo", "braca", "braci", "braco", "brada", "brade", "bradi", "braga", "brago", "braii", "brama", "brami", "bramo", "brani", "brasa", "brasi", "braso", "brava", "brave", "bravo", "bremi", "bremo", "breva", "brevi", "brice", "brici", "brida", "bride", "brige", "brigi", "brigo", "brine", "brini", "brino", "broda", "brode", "brodi", "broge", "brogi", "broli", "brolo", "bromi", "bromo", "brova", "brovi", "brovo", "bruca", "brugi", "brugo", "bruii", "brume", "bruna", "brune", "bruni", "bruta", "brute", "bruto", "bruzi", "bubai", "bucai", "bucci", "buche", "bucio", "buddi", "bufai", "buffe", "buffi", "buffo", "bugia", "bugio", "bugli", "bugna", "bugne", "bugni", "bugno", "buina", "buine", "bulai", "bulbi", "bulla", "bulle", "bulli", "bumba", "bumbe", "buona", "buone", "buoni", "burba", "burbe", "burga", "burka", "burle", "burli", "burlo", "burqa", "burri", "busaa", "busae", "busai", "busao", "busca", "busco", "bushi", "bussa", "busse", "bussi", "buste", "busto", "butte", "butti", "butto", "buzza", "buzze", "buzzi", "buzzo", "bwaka", "bwana", "caaba", "cabla", "cabli", "cablo", "cabra", "cabri", "cabro", "cacai", "cacca", "cacce", "cacci", "cache", "cacia", "cacti", "cacto", "caddi", "cadmi", "caffa", "caffe", "caffi", "caffo", "cafra", "cafre", "cafri", "cafro", "cagai", "caghi", "cagli", "cagne", "caiba", "caibe", "caina", "caine", "caini", "caino", "calao", "calda", "calde", "caldi", "calia", "calie", "calla", "calle", "callo", "calma", "calmi", "calmo", "calse", "calta", "calte", "calve", "calvi", "calvo", "calza", "calzi", "calzo", "camei", "camme", "campi", "canai", "canee", "canga", "cange", "cangi", "canne", "canni", "canno", "canoe", "cansa", "cansi", "canso", "canta", "canti", "capai", "cappe", "cappi", "cappo", "capre", "capri", "capro", "capta", "capti", "capto", "carca", "carco", "carda", "carde", "cardi", "caria", "cario", "carmi", "carna", "carni", "carno", "carpe", "carpi", "carpo", "carri", "carsi", "carvi", "casbe", "casca", "casci", "casei", "caseo", "caspa", "caspe", "caspi", "cassi", "casso", "caste", "casti", "casto", "catta", "catte", "catti", "catto", "caule", "cauli", "cauri", "cause", "causi", "causo", "cauta", "caute", "cauti", "cavea", "cavee", "cavie", "cazza", "cazze", "cazzi", "cazzo", "cecai", "cecca", "ceche", "cechi", "cedei", "cedra", "cedri", "cedua", "cedue", "cedui", "ceffa", "ceffi", "ceiba", "ceibe", "celie", "celio", "celle", "celli", "cello", "celta", "celte", "celto", "celzi", "cengi", "cenna", "cenni", "censi", "ceppa", "ceppe", "ceppi", "cerai", "cerca", "cerci", "cerea", "ceree", "cerei", "cereo", "cerii", "cerio", "cerna", "cerne", "cerni", "cerno", "cerri", "certe", "certi", "certo", "cerva", "cerve", "cervi", "cesia", "cesie", "cespi", "cessa", "cesse", "cessi", "ceste", "cesti", "cesto", "cetre", "chele", "cheli", "chete", "cheti", "cheto", "chile", "chili", "chimi", "chimo", "chine", "chini", "chino", "chita", "chiti", "chito", "cholo", "chope", "ciaba", "ciabi", "ciabo", "ciana", "ciane", "ciani", "ciano", "ciati", "ciato", "ciazi", "cicce", "cicci", "cicco", "ciche", "cicli", "cidia", "cidie", "cidio", "cieco", "cieli", "ciesa", "ciese", "cifre", "cifri", "cifro", "cigna", "cigne", "cigni", "cimai", "cimba", "cimbe", "cince", "cinga", "cinge", "cingi", "cingo", "cinsi", "cinte", "cinti", "cinto", "cinzi", "cioce", "ciofi", "ciofo", "cippi", "cipri", "circe", "circi", "cirro", "cisio", "cispa", "cispe", "cista", "ciste", "cisto", "citta", "citte", "citti", "citto", "ciuca", "ciula", "ciuli", "ciulo", "clade", "cladi", "clama", "clami", "clamo", "clave", "clavi", "clavo", "cleri", "climi", "cline", "clini", "clino", "clivi", "clivo", "clona", "cloni", "clono", "clora", "clori", "cloze", "clune", "cluni", "cnidi", "coala", "coana", "coane", "coati", "cobea", "cobee", "cobla", "coble", "cocca", "cocce", "coche", "codia", "codio", "coese", "coesi", "coeso", "coeva", "coeve", "coevi", "coffe", "cofta", "cofte", "cofti", "cofto", "cogli", "cogni", "cogno", "coiai", "coipi", "coipo", "coire", "coita", "coite", "coiti", "coito", "coiva", "coivi", "coivo", "colca", "colco", "colei", "colga", "colia", "colie", "colle", "colli", "colme", "colmi", "colpa", "colpo", "colsi", "colte", "colti", "colto", "colze", "comba", "combe", "combo", "commi", "commo", "compi", "conce", "congi", "conia", "conie", "conne", "conni", "conno", "consa", "conso", "conti", "cooba", "coobi", "coobo", "copie", "copio", "coppe", "coppo", "copra", "copre", "copro", "copta", "copte", "copti", "copto", "corai", "corba", "corbe", "corca", "corco", "corde", "corea", "coree", "corei", "coreo", "corio", "cormi", "cormo", "corni", "corno", "corpi", "corre", "corri", "corro", "corse", "corsi", "corta", "corti", "corvo", "cosai", "cosci", "cosfi", "cosmi", "cosse", "cossi", "cosso", "coste", "costo", "cotte", "cotti", "cotto", "cousi", "couso", "covid", "cozza", "cozzi", "crace", "craci", "crapa", "crape", "creda", "crede", "credi", "creme", "cremi", "cremo", "crena", "crene", "creni", "creno", "crepa", "crepo", "cresi", "creso", "crete", "crime", "crimi", "crina", "crini", "crino", "croci", "crode", "croia", "croie", "croio", "crome", "cromi", "crono", "cruci", "crude", "crudi", "crudo", "crune", "ctoni", "cubai", "cubia", "cubie", "cucca", "cucci", "cucco", "cucia", "cucii", "cueva", "cugna", "cugne", "culai", "culle", "culli", "cullo", "culmi", "culmo", "culpa", "culta", "culte", "culti", "cunca", "cunce", "cunci", "cunco", "cuneo", "cuoce", "cuoci", "cuoco", "cuoia", "cuora", "cuori", "curde", "curdi", "curdo", "curie", "curii", "curri", "curro", "curve", "curvi", "curvo", "cusco", "cussi", "cusso", "dacci", "dache", "dacia", "dacie", "dafne", "dafni", "daghe", "dagli", "daina", "daine", "daini", "dalai", "dalie", "dalla", "dalle", "dalli", "dallo", "damai", "damma", "damme", "dance", "danda", "dande", "dando", "danna", "danne", "danni", "dante", "danti", "danze", "danzi", "danzo", "darai", "darci", "dardi", "darei", "darla", "darle", "darli", "darlo", "darmi", "darne", "darsi", "darti", "darvi", "daspo", "datai", "datti", "dauni", "dazia", "debba", "debbi", "debbo", "deche", "deghi", "degli", "degne", "degni", "degno", "delia", "delie", "delio", "della", "delle", "dello", "delta", "demmo", "densa", "dense", "densi", "denta", "dente", "dento", "derby", "derma", "dermi", "derno", "desia", "desii", "dessa", "desse", "dessi", "desso", "deste", "desti", "desto", "detox", "detta", "dette", "detti", "devia", "devie", "devii", "devio", "diadi", "diale", "diali", "diamo", "diana", "diane", "diano", "diapa", "diape", "diapi", "diapo", "diate", "diaza", "diaze", "diazi", "diazo", "dicai", "dicci", "diche", "dichi", "dicta", "diede", "diedi", "diene", "dieni", "dieri", "diesa", "diesi", "dieso", "diete", "dieti", "dieto", "digli", "dildi", "dildo", "dilla", "dille", "dilli", "dimoi", "dindi", "dindo", "dingo", "dinka", "dinne", "diodi", "dioli", "diolo", "diosi", "dipoi", "dirai", "dirci", "dirla", "dirle", "dirli", "dirlo", "dirne", "dirsi", "dirti", "dirvi", "disfi", "disfo", "disia", "disii", "disio", "disse", "dissi", "dista", "disti", "ditte", "ditti", "diula", "djaga", "doagi", "doari", "dobla", "doble", "dobli", "doblo", "dobra", "docci", "docmi", "dogai", "doghi", "dogli", "dogmi", "dogre", "dolai", "dolca", "dolci", "dolco", "dolga", "dolgo", "dolio", "dolse", "dolsi", "dolta", "dolte", "dolti", "dolto", "domma", "dommi", "donai", "donde", "donne", "donni", "donno", "dopai", "dorai", "doria", "dorio", "dorme", "dormi", "dormo", "dorsi", "dosai", "dosso", "dotai", "dotte", "dotti", "dotto", "doula", "doule", "dovei", "draba", "drabe", "draco", "drena", "dreni", "dreno", "drive", "drogo", "droma", "drome", "dromi", "dromo", "droni", "druda", "drude", "drudi", "drudo", "drupe", "drusa", "druse", "drusi", "druso", "duagi", "duali", "ducai", "ducea", "ducee", "duina", "duine", "duini", "duino", "dulia", "dulie", "duoli", "duolo", "duomi", "dupla", "duple", "dupli", "duplo", "durai", "durio", "durra", "durre", "duvet", "dviii", "ebani", "ebbio", "ebbra", "ebbre", "ebbri", "ebeni", "ebeno", "ebeta", "ebeti", "ebeto", "ebola", "ebole", "ebook", "ebrea", "ebree", "ebrei", "ebuli", "ebulo", "echei", "echeo", "echio", "ecidi", "edace", "edaci", "edemi", "edere", "edili", "edipi", "edipo", "edita", "edite", "editi", "edito", "edona", "edone", "edoni", "edono", "educe", "educi", "educo", "edule", "eduli", "efebi", "efesi", "efori", "eforo", "egena", "egene", "egeni", "egeno", "egida", "egide", "egira", "egire", "ekiti", "elafe", "elafi", "eleni", "eleva", "elevi", "elice", "elici", "elida", "elide", "elidi", "elido", "eliea", "eliee", "elima", "elime", "elimi", "elimo", "elisa", "elise", "elisi", "eliso", "eluda", "elude", "eludi", "eluii", "elusa", "eluse", "elusi", "eluso", "eluvi", "emaci", "email", "emale", "emali", "emani", "emano", "emeri", "emero", "emesi", "emica", "emici", "emico", "emide", "emidi", "emina", "emine", "emiri", "emise", "emisi", "emoni", "empia", "empie", "empii", "empio", "emula", "emule", "emuli", "enema", "enemi", "enfia", "enfie", "enfio", "engri", "ennea", "ennee", "ennei", "enneo", "enoli", "enolo", "entri", "entro", "enula", "enule", "eolia", "eolie", "eolio", "epici", "epico", "epodi", "epodo", "epura", "epuri", "equai", "erada", "erade", "eradi", "erado", "erari", "erasa", "erase", "erasi", "eraso", "erbai", "erbio", "erebi", "erebo", "ereda", "erede", "eredo", "eremi", "ereta", "ereti", "ereto", "eriga", "erige", "erigi", "ernie", "ernio", "eroda", "erode", "erodi", "erodo", "erogo", "erosa", "erose", "erosi", "eruca", "erula", "erule", "eruli", "erulo", "erzya", "esala", "esali", "esalo", "esami", "esani", "esano", "eschi", "esiga", "esige", "esigi", "esili", "esima", "esime", "esimi", "esimo", "esipi", "esipo", "esita", "esiti", "esizi", "esodi", "esone", "esoni", "esora", "esori", "esoro", "esosa", "esose", "esosi", "espia", "espii", "essai", "estia", "estie", "estii", "estio", "estri", "estua", "estui", "estuo", "esula", "esuli", "esulo", "esuma", "esumi", "esumo", "etani", "etate", "etati", "etene", "eteni", "etera", "eteri", "etero", "etesi", "ethos", "etici", "etico", "etile", "etili", "etimi", "etini", "etino", "etnee", "etnei", "etneo", "etnie", "etola", "etole", "etoli", "etolo", "eutri", "evada", "evade", "evadi", "evado", "evasa", "evase", "evasi", "evira", "eviri", "eviro", "eviti", "evito", "evoca", "fabri", "fabro", "facci", "facto", "fagli", "faide", "faine", "falba", "falbe", "falbi", "falbo", "falca", "falci", "falda", "faldi", "faldo", "falla", "falle", "falli", "falsa", "false", "falsi", "famai", "fanga", "fanne", "fanti", "farad", "farai", "farce", "farci", "farda", "farde", "farea", "farei", "farla", "farle", "farli", "farlo", "farmi", "farri", "farse", "farsi", "farso", "farti", "farvi", "fasai", "fasci", "fasta", "faste", "fasti", "fasto", "fatai", "fatta", "fatte", "fatti", "fatua", "fatue", "fatui", "fatwa", "fauce", "faune", "fauni", "fauno", "fauve", "favai", "faxai", "feace", "feaci", "febea", "febee", "febei", "febeo", "fecce", "fedai", "felci", "fella", "felle", "felli", "fello", "felpe", "felpi", "felpo", "felse", "felsi", "felze", "felzi", "femme", "fence", "fenda", "fende", "fendi", "fendo", "feria", "ferii", "ferla", "ferle", "ferma", "ferme", "fermi", "ferra", "ferri", "fersa", "ferse", "ferva", "ferve", "fervi", "fervo", "ferza", "ferze", "ferzi", "ferzo", "fessa", "fesse", "fessi", "feste", "festi", "festo", "fette", "feudi", "fiaba", "fiale", "fiani", "fiano", "fiata", "fiate", "fiati", "fibre", "ficca", "ficco", "ficea", "ficee", "fiche", "ficus", "fidai", "fiele", "fieli", "fieni", "fiere", "fieri", "fighe", "fighi", "filai", "filli", "fillo", "filma", "filmi", "filmo", "filza", "filze", "finca", "finga", "fingi", "fingo", "finii", "finna", "finne", "finni", "finno", "finse", "finsi", "finta", "finte", "finti", "fioco", "fiora", "fiori", "fioro", "fiote", "fioti", "firme", "firmi", "firmo", "fisai", "fisse", "fissi", "fisso", "fitta", "fitte", "fitti", "fiumi", "fiuta", "fiuti", "flake", "flana", "flani", "flano", "flash", "flati", "flato", "flava", "flave", "flavi", "flavo", "fleti", "fleto", "flirt", "flore", "fluii", "fobie", "focea", "focee", "focei", "foceo", "fochi", "focus", "fodri", "fodro", "fogge", "foggi", "foghe", "fogna", "fogni", "fogno", "foiba", "folce", "folco", "folio", "folli", "follo", "folta", "folte", "folti", "fonai", "fonda", "fonde", "fondi", "fonia", "fonie", "fonti", "forai", "force", "forci", "forge", "forgi", "forme", "formi", "formo", "forni", "forre", "forti", "forze", "forzi", "forzo", "fosca", "fossi", "fosso", "fosti", "fotta", "fotte", "fotti", "fotto", "fovea", "fovee", "foyer", "fraga", "frale", "frali", "frame", "frane", "frani", "frano", "frati", "frego", "frema", "freme", "fremi", "frena", "freni", "freon", "frese", "fresi", "freso", "frigi", "frine", "frini", "frisa", "frisi", "friso", "froda", "frodi", "frodo", "froge", "frugo", "fruii", "ftori", "ftoro", "fuchi", "fuffa", "fuffe", "fugai", "fugga", "fugge", "fuggi", "fuggo", "fughi", "fulbe", "fulbi", "fulga", "fulge", "fulgi", "fulgo", "fulsa", "fulse", "fulsi", "fulso", "fulve", "fulvi", "fulvo", "fumea", "fumee", "fumei", "fumeo", "fumma", "fummi", "funai", "fundo", "funga", "fungi", "funky", "funse", "funsi", "funta", "funte", "funti", "funto", "furai", "furbe", "furbi", "furbo", "furca", "furie", "furio", "furti", "fusai", "fusta", "fuste", "fusti", "futon", "fuxia", "fuxie", "fuzzy", "gabba", "gabbi", "gabbo", "gaela", "gaele", "gaeli", "gaelo", "gaffa", "gaffe", "gagge", "gaggi", "galee", "galei", "galeo", "galgo", "galio", "galla", "galle", "galli", "gambe", "gambi", "gamia", "gamie", "gamme", "ganda", "gande", "ganga", "gange", "ganza", "ganze", "ganzi", "garba", "garbe", "garbi", "garga", "gargo", "garni", "garze", "garzi", "garzo", "gasai", "gasco", "gasse", "gassi", "gasso", "gatta", "gatte", "gatti", "gauda", "gaude", "gaudi", "gaudo", "gauge", "gauli", "gaulo", "gauta", "gaute", "gauti", "gauto", "gazai", "gazze", "gazzi", "gazzo", "gelai", "gelao", "gelsa", "gelse", "gelsi", "gemei", "gemme", "gemmi", "gemmo", "genai", "genia", "genie", "genoa", "genti", "genue", "geode", "geodi", "geomi", "gerba", "gerbe", "gerla", "gerle", "gerli", "gerlo", "germa", "germi", "gessa", "gessi", "gesta", "gesto", "getta", "getti", "ghali", "ghega", "ghegi", "ghego", "ghiri", "ghise", "giaci", "giaco", "giade", "giani", "giano", "giare", "giava", "giave", "gibbi", "gibbo", "gighe", "gilda", "gilde", "gilet", "gimmo", "ginna", "ginni", "ginno", "gioca", "gioie", "gioii", "gioio", "giovi", "giovo", "girci", "girei", "girii", "girio", "girla", "girle", "girli", "girlo", "girmi", "girne", "girsi", "girti", "girvi", "gisse", "gissi", "giste", "gisti", "gitta", "gitti", "gitto", "giuba", "giube", "giuda", "giuli", "giura", "giure", "giuri", "giuso", "gladi", "gleba", "glebe", "glena", "glene", "gleni", "glifi", "globe", "globi", "glomi", "glomo", "glori", "gluma", "glume", "gnidi", "gnome", "gnomi", "gnuda", "gnude", "gnudi", "gnudo", "gobbe", "gobbi", "gobbo", "gocci", "godei", "godii", "godio", "goffa", "goffi", "goffo", "gogne", "goldi", "golea", "golei", "goleo", "golfi", "golia", "golpe", "gombe", "gombi", "gombo", "gomme", "gommi", "gommo", "gonda", "gonde", "gondi", "gondo", "gonfa", "gonfe", "gonfo", "gonga", "gonio", "gonja", "gonne", "gonza", "gonze", "gonzi", "gordi", "gorga", "gorge", "gorna", "gorne", "gotha", "gotte", "gotti", "gotto", "gouda", "gozzi", "grada", "grade", "grado", "grafi", "graia", "graie", "graii", "graio", "grame", "grami", "gramo", "grane", "grani", "grate", "grati", "grava", "gravi", "gravo", "grazi", "greca", "greci", "gremi", "greti", "grevi", "grica", "grici", "grico", "gride", "gridi", "grido", "grifa", "grifi", "grifo", "grola", "grole", "groma", "grome", "grufa", "grufi", "grufo", "gruga", "grugo", "gruma", "grume", "grumi", "grusi", "guaco", "guada", "guade", "guadi", "guaii", "guani", "guari", "guata", "guati", "guato", "gufai", "guide", "guidi", "guido", "guina", "guini", "guino", "guisa", "guise", "gulag", "gurge", "gurgi", "gusla", "gusta", "gusti", "gutea", "gutee", "gutei", "guteo", "gutti", "gutto", "guzla", "guzle", "gwari", "hafni", "haida", "haiku", "hakka", "hallo", "hamza", "harem", "haute", "hedge", "hello", "henna", "henne", "hertz", "hevea", "hevee", "hijab", "hindi", "hobby", "hokka", "hokke", "hokki", "hokko", "holmi", "house", "huave", "huavi", "huchi", "hudna", "iacea", "iacee", "iarda", "iarde", "ibera", "ibere", "iberi", "ibero", "iblea", "iblee", "iblei", "ibleo", "icari", "icena", "icene", "iceni", "iceno", "icone", "icore", "icori", "ictus", "idali", "iddia", "iddie", "iddio", "ideai", "idoli", "idria", "idrie", "ielle", "iesta", "ieste", "iesti", "iesto", "ietta", "ietti", "ietto", "ifale", "ifali", "ifema", "ifemi", "igloo", "ignea", "ignee", "ignei", "ilari", "ilice", "ilici", "ilide", "ilidi", "illea", "illee", "illei", "illeo", "ilota", "ilote", "iloti", "image", "imago", "imani", "imano", "imati", "imene", "imeni", "imiti", "imito", "inala", "inali", "inalo", "inane", "inani", "incoa", "incoi", "incoo", "india", "indie", "indio", "infoi", "infra", "ingoi", "ingri", "inlei", "inlui", "inmia", "inmio", "inoli", "inoma", "inomi", "inope", "inopi", "insce", "insci", "insta", "insti", "insto", "intra", "intro", "inula", "inule", "inuma", "inumi", "inumo", "invai", "invia", "invii", "iodai", "ioide", "ioidi", "iolla", "iolle", "ionia", "ionie", "ionio", "ipate", "ipati", "ippia", "ippie", "ippii", "ippio", "irace", "iraci", "irata", "irate", "irati", "irato", "irchi", "irida", "iridi", "irido", "irite", "iriti", "iroki", "iroko", "irosa", "irose", "irosi", "iroso", "irula", "ischi", "islam", "isodi", "isole", "isoli", "isolo", "isopi", "isopo", "issai", "istai", "istle", "istmi", "isuri", "isuro", "itaci", "itaco", "itala", "itale", "itali", "italo", "itera", "iteri", "itero", "iucca", "iulca", "iulco", "iurta", "iurte", "ivata", "ivate", "ivati", "ivato", "jihad", "jolly", "joule", "jumbo", "junci", "junco", "kaaba", "kakwa", "kamti", "kanji", "kansa", "kaone", "kaoni", "kasba", "kayak", "kebab", "kendo", "khasi", "kiowa", "kissi", "kitai", "kiwai", "konde", "kondi", "konga", "konge", "kongi", "kongo", "konta", "kulla", "kulle", "kulli", "kullo", "kunta", "kurda", "kurde", "kurdi", "kurdo", "kwena", "kyrie", "labbi", "labbo", "labda", "labio", "labri", "labro", "lacce", "lacco", "ladra", "ladre", "ladri", "lagne", "lagni", "lagno", "laica", "laici", "laida", "laide", "laidi", "laido", "lamai", "lamba", "lambe", "lambi", "lambo", "lamia", "lamie", "lamio", "lampa", "lampe", "lampi", "lanca", "landa", "lande", "lanea", "lanee", "lanei", "laneo", "lanfa", "lanfe", "langa", "lange", "lania", "lanio", "lanzi", "lanzo", "lapis", "lappa", "lappe", "lappi", "lappo", "larda", "lardi", "larga", "large", "larve", "larvi", "larvo", "lasca", "lassa", "lasse", "lassi", "lasso", "lasta", "laste", "latra", "latri", "latro", "latti", "latto", "lauda", "laude", "laudi", "laura", "laure", "lauri", "lauro", "lauta", "laute", "lauti", "lauto", "lavia", "lavie", "lavra", "lavre", "lazza", "lazze", "lazzi", "lazzo", "leali", "lebbi", "lecce", "lecco", "legga", "leggi", "leghi", "legni", "lella", "lelle", "lelli", "lello", "lembi", "lemme", "lemmi", "lemmo", "lemna", "lemne", "lenca", "lenci", "lenea", "lenee", "lenei", "leneo", "lenii", "lente", "lenti", "lento", "lenze", "lenzi", "lenzo", "leoni", "leppa", "leppi", "leppo", "lepra", "lepre", "lerce", "lesbi", "lesbo", "lesca", "lessa", "lesse", "lessi", "leste", "lesti", "lesto", "letea", "letee", "letei", "leteo", "letri", "letro", "letta", "lette", "letti", "leuca", "leuci", "leuco", "leuti", "leuto", "levai", "lezia", "lezie", "lezio", "lezza", "lezze", "lezzi", "lezzo", "liane", "libai", "libra", "libre", "libri", "licci", "licei", "licia", "licie", "licio", "lidar", "lidia", "lidie", "lidio", "liete", "lieti", "lieto", "lievi", "lifta", "lifti", "lifto", "ligei", "ligeo", "ligia", "ligie", "ligre", "ligri", "lilla", "limai", "limbi", "limii", "limio", "limma", "limmi", "linai", "linci", "linde", "lindi", "lindo", "linee", "linei", "lineo", "linfe", "lingi", "linka", "linki", "linko", "lippa", "lippe", "lippi", "lippo", "liqua", "liqui", "liquo", "lisai", "lisce", "lissa", "lisse", "lissi", "lisso", "liste", "listi", "listo", "litai", "litra", "litre", "litri", "litta", "litte", "litui", "lituo", "liuti", "lizze", "lizzi", "lizzo", "locai", "locca", "locco", "lochi", "lodai", "loden", "lodge", "loffa", "loffe", "loffi", "loffo", "lofio", "logga", "logge", "loggo", "loghi", "logia", "logli", "logra", "logri", "logro", "loica", "loici", "loico", "lolla", "lolle", "lombo", "lompi", "lompo", "longa", "longo", "lonze", "loppa", "loppe", "loppi", "loppo", "lorda", "lordi", "lordo", "lorio", "losca", "lotte", "lotto", "lucco", "lucea", "lucei", "luchi", "lucia", "lucie", "lucra", "lucri", "ludra", "ludre", "ludri", "ludro", "luena", "luese", "luesi", "luffa", "luffe", "lugli", "lugre", "lugri", "lugro", "luigi", "lulla", "lulle", "lumai", "lumia", "lumie", "lumpi", "lumpo", "lunda", "lungi", "lungo", "lurca", "lurco", "lusca", "lusco", "lussa", "lussi", "lutai", "lutea", "lutee", "lutei", "luteo", "lutta", "lutti", "luvia", "luvie", "luvii", "luvio", "lycra", "macao", "macca", "macco", "machi", "macho", "macia", "macie", "macro", "madia", "madie", "madri", "mafie", "mafio", "magai", "maggi", "maghe", "magie", "magio", "magli", "magmi", "magna", "magne", "magni", "magno", "magra", "magre", "magri", "maide", "maidi", "maina", "maini", "maino", "malgo", "malia", "malie", "malli", "malte", "malti", "malto", "malva", "malve", "mamba", "mambi", "mamme", "mammi", "mammo", "manaa", "manae", "manai", "manao", "manco", "manda", "mande", "mando", "manga", "manie", "manne", "mansa", "manse", "mansi", "manso", "manta", "mante", "manti", "manza", "manze", "manzi", "maona", "maone", "maori", "mappe", "mappi", "mappo", "marci", "marco", "maree", "margi", "margo", "marma", "marmi", "marne", "marni", "marno", "marra", "marsa", "marse", "marsi", "marso", "marza", "marze", "marzi", "masse", "massi", "masti", "matta", "matte", "matti", "maura", "maure", "mauri", "mauro", "mauve", "mauvi", "mazze", "mazzi", "mbaka", "mbaya", "meaci", "meala", "meale", "meali", "mealo", "meami", "meane", "meano", "meare", "meata", "meate", "meati", "meato", "meava", "meavi", "meavo", "medie", "medio", "meino", "mekea", "mekee", "mekei", "mekeo", "melai", "melba", "melda", "melde", "meldi", "meldo", "melia", "melie", "melii", "melio", "melme", "meloe", "meloi", "menai", "mence", "menci", "menda", "mende", "mendi", "mendo", "menga", "menri", "mense", "mente", "menti", "meoni", "meoti", "merca", "merci", "merco", "merda", "merde", "merga", "merge", "mergi", "mergo", "meria", "merie", "merio", "merla", "merle", "merli", "mersa", "merse", "mersi", "merso", "mesca", "mesce", "mesci", "mesco", "messe", "messi", "messo", "meste", "mesti", "mesto", "metri", "metta", "mette", "metti", "mezza", "mezze", "mezzi", "miasi", "micca", "micci", "micco", "miche", "micia", "micie", "micro", "mieli", "mieta", "miete", "mieti", "mieto", "migma", "migmi", "migra", "migri", "migro", "milia", "milio", "milze", "mimai", "mimma", "mimme", "mimmi", "mimmo", "minai", "minea", "minee", "minei", "mineo", "minga", "minge", "mingi", "mingo", "minia", "minio", "minna", "minne", "minse", "minsi", "mioma", "miomi", "miopi", "miosi", "mirai", "mirra", "mirre", "mirri", "mirro", "mirti", "misia", "misie", "misii", "misio", "missa", "missi", "misso", "mista", "miste", "misti", "mitre", "mitri", "mitro", "mitti", "mitto", "mixai", "mixer", "mocci", "mochi", "mocoa", "modio", "moggi", "mogia", "mogie", "moina", "moine", "moira", "moire", "molai", "molca", "molce", "molle", "molli", "mollo", "molta", "molte", "molto", "molva", "molve", "monco", "monda", "monde", "mondi", "monna", "monne", "monta", "monti", "monto", "moqui", "morai", "morbi", "morde", "mordi", "mordo", "morfi", "morfo", "moria", "morie", "morii", "morra", "morre", "morse", "morsi", "morta", "morte", "morto", "morva", "morve", "mosce", "mosco", "mosse", "mossi", "mosso", "mosti", "motta", "motte", "motti", "mouse", "movie", "mozza", "mozze", "mozzo", "mucci", "mucco", "muchi", "mudai", "muffe", "muffi", "muffo", "mufti", "mugli", "mulsi", "mulso", "multe", "multi", "multo", "mundi", "munga", "munge", "mungi", "mungo", "munii", "munse", "munsi", "munta", "munte", "munti", "munto", "muoia", "muoni", "muore", "muori", "muova", "muove", "muovo", "murai", "murge", "muria", "murie", "murmi", "murra", "murre", "musai", "musco", "musei", "mussa", "musse", "mussi", "musso", "mutai", "mutua", "mutue", "mutui", "nabla", "nabli", "nadir", "nafte", "nahua", "naibi", "naide", "naidi", "naira", "nakfa", "nanfa", "nanfe", "nanne", "nante", "nanzi", "napea", "napee", "nappe", "nappi", "nappo", "narco", "nardi", "nardo", "narra", "narro", "nasai", "nasca", "nasci", "nasco", "nashi", "naspi", "naspo", "nasse", "nassi", "nasso", "nasua", "nasue", "natai", "natie", "natii", "natio", "natta", "natte", "nauta", "nauti", "ndoga", "ndoge", "ndogi", "ndogo", "nebbi", "necai", "necce", "necci", "nechi", "neghi", "nella", "nelle", "nello", "nembi", "nemea", "nemee", "nemei", "nemeo", "nence", "nenci", "nenie", "nerba", "nerbi", "nervo", "nesce", "nesci", "nessi", "nesta", "nesti", "nesto", "netta", "nette", "netti", "neuma", "neumi", "neura", "neure", "neuri", "neuro", "ngala", "nguni", "nibbi", "nicce", "nicci", "niego", "nievi", "nievo", "nimbi", "nimbo", "ninfe", "ninna", "ninne", "ninni", "ninno", "niobi", "nisba", "nitra", "nitri", "nitro", "niuna", "niune", "niuni", "niuno", "nivea", "nivee", "nivei", "nobel", "noema", "noemi", "noesi", "nogai", "noghi", "nomai", "nomee", "nonne", "nonni", "nonno", "noria", "norie", "norma", "normi", "normo", "norna", "norne", "notta", "notti", "notto", "novai", "novio", "nudai", "nugae", "nulle", "nulli", "nullo", "nummi", "nummo", "nunci", "nunzi", "nuoci", "nuore", "nuota", "nuoti", "nuova", "nuove", "nuovi", "nurse", "nutka", "nutra", "nutri", "nutro", "nyala", "obbli", "obeli", "obelo", "obera", "oberi", "obero", "obesa", "obese", "obeso", "obici", "obiti", "obito", "oblai", "oblia", "oblii", "oboli", "ocche", "ocimi", "ocimo", "ocrea", "ocree", "oculi", "oculo", "odano", "oddio", "odiai", "odici", "odila", "odile", "odili", "odilo", "odimi", "odine", "odire", "odita", "odite", "oditi", "odito", "odiva", "odivi", "odivo", "odono", "odora", "odori", "odoro", "odrai", "oecio", "offra", "offre", "offri", "ofide", "ofidi", "ofite", "ofiti", "ogive", "oiana", "oidio", "okapi", "oleai", "olfai", "olino", "olire", "olita", "olite", "oliti", "olito", "oliva", "olivi", "olivo", "olmio", "olona", "olone", "olora", "olore", "olori", "oloro", "oltra", "omaha", "omani", "omano", "omari", "omaro", "omasi", "omaso", "ombre", "ombri", "ombro", "omeri", "omese", "omesi", "omini", "omisi", "omnia", "omoni", "ondai", "onera", "onere", "onero", "onese", "onesi", "onici", "onora", "onori", "onoro", "onrai", "opaca", "opaci", "opale", "opali", "opata", "opere", "operi", "opero", "opica", "opici", "opico", "opima", "opime", "opimi", "opimo", "opina", "opini", "oppia", "oraci", "orafa", "orafi", "orafo", "orala", "orali", "oralo", "orami", "orane", "orano", "orare", "orate", "orati", "orato", "orava", "oravi", "oravo", "orbai", "orche", "orfea", "orfee", "oribi", "orice", "orici", "orige", "origi", "orina", "orine", "orini", "orino", "orlai", "ornai", "orobi", "oroci", "oroki", "oroma", "orome", "oromi", "oromo", "orrea", "orree", "orrei", "orreo", "orrii", "orzai", "osaci", "osage", "osagi", "osala", "osale", "osali", "osalo", "osami", "osane", "osano", "osata", "osate", "osati", "osato", "osava", "osavi", "osavo", "oscar", "osche", "osino", "osmio", "ossee", "ossei", "osseo", "ostai", "osteo", "ostie", "ostio", "ostri", "otica", "otici", "otico", "otide", "otidi", "otiti", "ottri", "ovaie", "ovaio", "ovali", "ovari", "ovata", "ovate", "ovati", "ovato", "ovili", "ovina", "ovine", "ovino", "ovoli", "ovolo", "ovula", "ovuli", "ovvia", "ovvie", "ovvii", "oyana", "ozena", "ozene", "ozino", "ozoni", "pabbi", "pacai", "pachi", "pacia", "pacio", "pacta", "padda", "padri", "paesi", "pafia", "pafie", "pafii", "pafio", "pagai", "paghi", "pagri", "pagro", "paini", "paino", "paisa", "palai", "palea", "palee", "palei", "paleo", "palli", "pallo", "palme", "palmi", "palpa", "palpi", "palta", "palte", "panai", "pande", "pandi", "pando", "pania", "panie", "panni", "pansa", "panse", "pansi", "panso", "panza", "panze", "paoli", "paolo", "pappe", "pappi", "pappo", "papua", "parai", "parca", "parce", "parci", "pardi", "pardo", "parei", "parie", "parii", "pario", "parka", "parla", "parli", "parma", "parme", "parra", "parre", "parsa", "parse", "parsi", "parta", "parva", "parvi", "parvo", "pasca", "pasce", "pasci", "pasco", "passe", "paste", "pasti", "patia", "patie", "patii", "patre", "patri", "patte", "patti", "paure", "pause", "pausi", "pauso", "pavia", "pavie", "pazza", "pazze", "pazzo", "peace", "peaci", "peani", "peata", "peate", "pecce", "pecci", "pechi", "pecia", "pecie", "pedio", "pegno", "pekoe", "pelea", "pelee", "pelei", "peleo", "pelta", "pelte", "pelvi", "penda", "pendi", "pendo", "penei", "peneo", "pensi", "penso", "penta", "pente", "penti", "pento", "peoci", "peone", "peoni", "peota", "peote", "pepai", "pepli", "pepsi", "perca", "perda", "perdi", "perdo", "perii", "perle", "perni", "persa", "perse", "persi", "pervi", "pesci", "pesta", "pesti", "petai", "petti", "pezza", "pezze", "pezzi", "phone", "photo", "phyla", "piaci", "piade", "piago", "piala", "piale", "piali", "pialo", "piami", "piamo", "piana", "piane", "piani", "piare", "piata", "piate", "piati", "piato", "piava", "piavi", "piavo", "picca", "picce", "picea", "picee", "picei", "piceo", "piche", "pichi", "picio", "piedi", "piego", "piene", "pieni", "pieno", "pieri", "piese", "piesi", "pieta", "piete", "pievi", "pighi", "pigia", "pigii", "pigne", "pigra", "pigre", "pigri", "piino", "pilai", "pilei", "pileo", "pilla", "pilli", "pillo", "pinai", "pinca", "pince", "pinco", "pinea", "pinee", "pinei", "pineo", "pinsa", "pinse", "pinte", "pinti", "pinto", "pinze", "pinzi", "pinzo", "pioda", "piode", "piola", "piole", "piolo", "pione", "pioni", "piota", "piote", "pioti", "pioto", "piova", "piovi", "piovo", "pipai", "pipia", "pipio", "pippa", "pippe", "pippi", "pippo", "pipra", "pipre", "pirla", "pirli", "pirlo", "pisce", "pisci", "pissi", "piste", "pitia", "pitie", "pitta", "pitte", "pitti", "pitto", "piume", "piumi", "piumo", "pizia", "pizie", "pizio", "pizze", "pizzi", "placa", "place", "placo", "plaga", "plagi", "plana", "plani", "plano", "plebi", "plica", "ploia", "ploie", "plora", "plori", "ploro", "ploti", "ploto", "plugo", "pluvi", "pocci", "poche", "podza", "podze", "podzi", "podzo", "poemi", "poeti", "poeto", "pogai", "pogge", "poghi", "poise", "poker", "polca", "polii", "polka", "polke", "polla", "polle", "polli", "polpe", "polpi", "polsi", "polta", "polte", "polve", "polvi", "pomai", "pomfi", "pomfo", "pompe", "pompi", "pompo", "ponce", "ponci", "ponda", "pondi", "pondo", "ponfi", "ponga", "ponta", "ponti", "ponto", "ponza", "ponzi", "ponzo", "poppe", "poppi", "poppo", "porca", "porco", "porga", "porgi", "porgo", "porla", "porle", "porli", "porlo", "pormi", "porne", "porno", "porri", "porse", "porsi", "porte", "porti", "porvi", "posca", "possa", "posse", "possi", "poste", "posti", "potai", "potei", "potta", "potte", "poule", "pozze", "pozzo", "praho", "prana", "prasi", "prati", "prava", "prave", "pravi", "pravo", "prece", "preci", "preco", "prede", "predi", "predo", "prega", "pregi", "preli", "prema", "preme", "premo", "prese", "presi", "preti", "previ", "price", "pride", "prime", "primi", "priva", "prive", "privi", "proba", "probe", "probi", "proci", "proco", "proda", "prodi", "proli", "promo", "prona", "prone", "proni", "prore", "prose", "prosi", "proso", "proti", "proto", "prova", "provi", "provo", "prozi", "pruda", "prudi", "prudo", "pruna", "prune", "pruni", "psico", "psoco", "psofi", "psofo", "ptini", "ptino", "ptosi", "pucci", "puffo", "pugge", "puggi", "pugio", "pugna", "pugne", "pugno", "puina", "puine", "pulca", "pulci", "pulii", "pulka", "pulke", "pulla", "pulle", "pulli", "pullo", "pulsi", "pulso", "punci", "punga", "pungi", "pungo", "punii", "punse", "punsi", "punte", "punto", "puppa", "puppi", "puppo", "purai", "purea", "puree", "purgo", "pussa", "pussi", "pusso", "pusta", "puste", "putai", "putii", "putre", "putri", "putta", "putte", "putti", "putto", "puzza", "puzze", "puzzo", "qasba", "qasbe", "qibla", "quada", "quade", "quadi", "quado", "quali", "quare", "quark", "queta", "queto", "quici", "quija", "quije", "quiji", "quijo", "quina", "quine", "quini", "quino", "quita", "quiti", "quito", "quivi", "quote", "quoti", "quoto", "rabbi", "rabia", "racca", "racco", "racla", "racle", "radia", "radon", "raffa", "raffe", "raffi", "raffo", "rafia", "rafie", "raghe", "ragia", "ragie", "ragli", "ragna", "ragne", "ragni", "raiai", "raide", "raidi", "raino", "raita", "raiti", "raito", "ralla", "ralle", "ralli", "rallo", "ramai", "rambo", "ramea", "ramee", "ramei", "ramen", "rameo", "ramia", "ramie", "ramni", "ramno", "rampe", "rampi", "rampo", "ranca", "rance", "ranci", "ranco", "rande", "ranfi", "range", "ranni", "ranno", "rapai", "rapii", "rappa", "rappe", "rasai", "rasce", "raspe", "raspi", "rasta", "ratea", "ratei", "rateo", "ratio", "ratta", "ratte", "rauco", "razze", "razzi", "reali", "reami", "reati", "recei", "rechi", "recto", "redai", "redii", "reese", "reesi", "regga", "regge", "reggi", "regie", "regna", "regni", "reide", "reidi", "reiki", "renai", "renda", "rendi", "rendo", "renio", "renne", "rensa", "rense", "repli", "replo", "requi", "resca", "resia", "resie", "respi", "respo", "resse", "ressi", "resta", "reste", "resti", "retai", "retea", "retee", "retei", "reteo", "retri", "rette", "retti", "reuma", "reumi", "rezza", "rezze", "rezzi", "rezzo", "riale", "riali", "riama", "riami", "riamo", "riara", "riari", "riaro", "ricca", "ricce", "ridai", "ridde", "riddi", "riddo", "ridia", "rieda", "riede", "riedi", "riedo", "riera", "rieri", "riero", "rifai", "riffe", "rifui", "rigai", "rigge", "righi", "rigna", "rigni", "rigno", "rimai", "rioca", "rioco", "rioda", "riode", "riodi", "riodo", "rioni", "ripii", "risai", "risei", "risia", "risii", "risme", "rispi", "risse", "rissi", "risso", "ritma", "ritmo", "ritta", "ritte", "ritti", "riusa", "riusi", "rivai", "rizza", "rizze", "rizzi", "rizzo", "roana", "roane", "roani", "roano", "robbi", "rocco", "rochi", "rodai", "rodei", "rodia", "rodie", "rodii", "rodio", "roese", "roesi", "rogai", "roggi", "rogne", "rogni", "rogno", "rolla", "rolli", "rollo", "romba", "rombe", "rombi", "romea", "romee", "romei", "romeo", "rompe", "rompi", "rompo", "ronca", "ronco", "ronde", "rondi", "rondo", "ronfe", "ronfi", "ronfo", "ronza", "ronzi", "ronzo", "rorai", "rosai", "rosee", "rosei", "roseo", "rospi", "rosse", "rossi", "rosso", "rosta", "roste", "rosti", "rosto", "rotai", "rotea", "rotei", "roteo", "rotte", "rotti", "rotto", "rouge", "rovai", "rozze", "rozzi", "rozzo", "rubbi", "rubbo", "rubea", "rubee", "rubei", "rubeo", "rublo", "rubra", "rubre", "rubri", "rubro", "ruche", "ruese", "ruesi", "ruffa", "ruffe", "rugai", "rugby", "rughi", "rugli", "ruina", "ruini", "ruino", "rulla", "rulli", "rumai", "rumbe", "rumme", "rummi", "ruoli", "ruote", "ruoti", "ruoto", "rupie", "ruppi", "rusca", "rusco", "ruspe", "ruspi", "ruspo", "russa", "russe", "russi", "rutta", "rutti", "ruzza", "ruzze", "ruzzi", "saale", "saali", "sabbi", "sabea", "sabee", "sabei", "sabeo", "sabia", "sabie", "sabii", "sabio", "sabra", "sacca", "sacia", "sacie", "sacio", "sacra", "sacri", "sacro", "saffo", "sagge", "saghi", "sagii", "sagna", "sagni", "sagno", "sagre", "sagri", "sagro", "saiga", "saime", "saimi", "salai", "salda", "salde", "saldi", "salga", "salgo", "salii", "salio", "salme", "salmi", "salpa", "salpe", "salpi", "salse", "salsi", "salso", "salta", "salti", "salva", "salvi", "salvo", "samia", "samie", "samii", "samio", "sanai", "sanie", "sanse", "sante", "santi", "santo", "saora", "sapio", "sarai", "sarda", "sardi", "sardo", "sarge", "sargo", "sarta", "sarte", "sarto", "sassi", "saune", "saura", "saure", "sauri", "sauro", "savia", "savie", "sazia", "sazie", "sbafa", "sbafi", "sbava", "sbavo", "sboba", "sbobe", "sbora", "sbore", "sbovi", "sbovo", "sbuco", "scada", "scadi", "scado", "scafa", "scafe", "scafi", "scale", "scalo", "scana", "scane", "scapa", "scapi", "scapo", "scari", "scaro", "scasa", "scasi", "scaso", "scava", "scavi", "sceda", "scede", "scema", "sceme", "scemo", "scene", "scesa", "scese", "scesi", "schei", "scifi", "scifo", "scipa", "scipi", "scipo", "scira", "scire", "sciri", "sciro", "scita", "scite", "sciti", "scoda", "scodi", "scodo", "scoia", "scoio", "scola", "scoli", "scope", "scopi", "scora", "score", "scori", "scoro", "scota", "scote", "scoti", "scoto", "scovi", "scovo", "scuce", "scuci", "scuda", "scudi", "scuoi", "scura", "scuri", "scuro", "scuse", "scusi", "scuso", "scuti", "scuto", "sdama", "sdami", "sdamo", "sdare", "sdata", "sdate", "sdati", "sdato", "sdava", "sdavi", "sdavo", "sdazi", "sdica", "sdice", "sdici", "sdico", "sdire", "sdite", "sdoga", "sdogo", "sdora", "sdori", "sdoro", "sdrai", "sduca", "sduco", "secai", "secce", "sechi", "sedai", "sedei", "sedie", "sedio", "segai", "segga", "seggo", "seghi", "segna", "segni", "segua", "segue", "segui", "seini", "seino", "selce", "selfa", "selfi", "selfo", "selle", "selli", "sello", "selve", "semai", "senna", "senne", "senni", "senoi", "sensi", "senta", "sente", "senti", "seppe", "sepsi", "serba", "serbe", "serbi", "seria", "sermo", "serpa", "serpi", "serpo", "serre", "serri", "serti", "serto", "serva", "serve", "servo", "sesia", "sesie", "sessa", "sesse", "sessi", "sesta", "seste", "sesti", "setti", "sezza", "sezze", "sezzi", "sezzo", "sfama", "sfami", "sfare", "sfasa", "sfasi", "sfaso", "sfata", "sfate", "sfati", "sfato", "sfece", "sfeci", "sfere", "sfide", "sfidi", "sfido", "sfiga", "sfili", "sfilo", "sfina", "sfini", "sfino", "sfoca", "sfoci", "sfoco", "sfoga", "sfora", "sfori", "sforo", "sfuma", "sfumi", "sfuri", "sfusa", "sfuse", "sfusi", "sgama", "sgami", "sgamo", "sgara", "sgari", "sgaro", "sgasa", "sgasi", "sgaso", "sgela", "sgeli", "sgelo", "sgola", "sgoli", "sgolo", "sgura", "sguri", "sguro", "shake", "shara", "share", "shari", "sharo", "shina", "shire", "siano", "siate", "siche", "sicli", "siclo", "sidri", "sieda", "siede", "siedo", "siepa", "siepi", "siepo", "sieri", "siete", "sigle", "sigli", "siglo", "sigmi", "sigua", "siici", "siila", "siile", "siili", "siilo", "siimi", "siine", "siiti", "silfi", "silfo", "silli", "sillo", "silos", "silvi", "sipai", "sirma", "sirme", "sirte", "sirti", "sismi", "sismo", "sitai", "sitii", "situi", "situo", "sizio", "sizza", "sizze", "skate", "skypa", "skypi", "skypo", "slama", "slami", "slamo", "slava", "slave", "slavo", "slebi", "slebo", "slega", "slice", "slide", "sloga", "sluma", "slumi", "slumo", "smaga", "smagi", "smago", "smani", "smela", "smeli", "smelo", "smera", "smeri", "smero", "smile", "smina", "smini", "smino", "smira", "smiri", "smiro", "smisi", "smoda", "smodi", "smodo", "smoke", "smova", "smove", "smovi", "smovo", "smura", "smuri", "smuro", "smusa", "smusi", "smuso", "snasa", "snasi", "snaso", "sneva", "snevi", "snevo", "snida", "snidi", "snido", "snipe", "snoda", "snodo", "snuda", "snudi", "snudo", "soana", "soane", "soani", "soano", "soavi", "socci", "socco", "socia", "socie", "sodai", "sofia", "sofie", "soghe", "sogli", "sogna", "sogni", "solca", "solda", "soldo", "solea", "solee", "solei", "soleo", "solfe", "solfi", "solfo", "solgo", "solio", "solla", "solle", "solli", "sollo", "solta", "solte", "solti", "solto", "solva", "solve", "solvi", "solvo", "somme", "sommi", "somni", "sonai", "sonar", "sonco", "sonde", "sondi", "sondo", "songa", "songe", "songi", "songo", "sonii", "sonio", "sonni", "sopii", "sorai", "sorba", "sorbe", "sorbi", "sorca", "sorda", "sorde", "sordo", "sorga", "sorgi", "sorgo", "sorra", "sorre", "sorsa", "sorse", "sorsi", "sorta", "sorte", "sorti", "soste", "sosti", "sosto", "sotho", "sotta", "sotti", "sovra", "sozio", "sozze", "sozzi", "sozzo", "spade", "spaia", "spaio", "spala", "spali", "spalo", "spana", "spani", "spano", "spara", "spari", "spasa", "spase", "spasi", "spaso", "spata", "spate", "spati", "spato", "speco", "speda", "spedi", "spedo", "spela", "speli", "speme", "spemi", "spene", "speni", "spepa", "spepe", "spere", "speri", "spero", "spese", "spesi", "speso", "spezi", "spiai", "spica", "spigo", "spike", "spina", "spini", "spino", "spire", "spiri", "spiro", "spole", "spone", "sponi", "spora", "sposa", "spose", "sposo", "sprue", "spula", "spuli", "spulo", "spume", "spumi", "spumo", "spura", "spuri", "spuro", "sputa", "sputi", "stage", "staia", "staio", "stame", "stami", "stana", "stani", "stano", "stara", "stari", "staro", "stasa", "stasi", "staso", "stata", "state", "stati", "stava", "stavo", "steca", "stele", "steli", "steno", "steri", "stero", "stese", "stesi", "steso", "stibi", "stici", "stico", "stiga", "stigi", "stigo", "stila", "stili", "stilo", "stime", "stimi", "stimo", "stina", "stini", "stino", "stipa", "stipe", "stipi", "stipo", "stira", "stiri", "stive", "stivi", "stivo", "stoga", "stogo", "stoia", "stoio", "stole", "stoma", "stomi", "stone", "stoni", "stono", "store", "stori", "stria", "strie", "strio", "stufa", "stufe", "stufi", "stura", "sture", "sturi", "stuta", "stuti", "stuto", "style", "suari", "suave", "suavi", "subbi", "subii", "succi", "suchi", "sugai", "sugga", "sugge", "suggi", "suggo", "sugne", "suide", "suidi", "suina", "suine", "suini", "suite", "sulka", "sulla", "sulle", "sullo", "summa", "summe", "sunna", "sunne", "sunti", "suole", "suoli", "suona", "suoni", "suora", "super", "surfa", "surfi", "surfo", "surga", "surge", "surgi", "surgo", "surma", "surra", "surre", "surse", "sursi", "surta", "surte", "surti", "surto", "susci", "sushi", "sussi", "susta", "suste", "sutha", "suthe", "suthi", "sutho", "sutra", "sutri", "sutro", "suzza", "suzzi", "suzzo", "svaga", "svani", "svapa", "svapi", "svapo", "svari", "svasa", "svasi", "svela", "sveli", "svena", "sveni", "sveno", "sveva", "sveve", "svevi", "sviai", "svina", "svini", "svino", "svisa", "svisi", "sviso", "svita", "sviti", "sviva", "svivi", "svivo", "svizi", "svola", "svoli", "svolo", "svota", "svoti", "svoto", "svuoi", "swazi", "tabla", "tacce", "tacci", "taffi", "tafia", "tafie", "tafii", "tafio", "tagga", "taggo", "taide", "taidi", "taiko", "taina", "taine", "taini", "taino", "talee", "talli", "talpe", "tamia", "tanai", "tanca", "tanco", "tanfa", "tanfi", "tanga", "tange", "tanna", "tanni", "tanno", "tanta", "tante", "tanti", "tappa", "tappi", "tarai", "tarda", "tarde", "tardo", "targo", "tarla", "tarli", "tarma", "tarmi", "tarmo", "tarpa", "tarpi", "tarsi", "tasse", "tassi", "tasta", "taste", "tasti", "tatti", "tatua", "tatui", "taura", "taure", "tauri", "tauro", "tazze", "tebea", "tebee", "tebei", "tebeo", "tecca", "tedia", "tegea", "tegee", "tegei", "tegeo", "teghe", "teide", "teidi", "teina", "teine", "teita", "teite", "teiti", "telai", "temei", "tempa", "tempe", "tempi", "tendi", "tendo", "tenei", "tenga", "tenge", "tenie", "tenne", "tenno", "tensa", "tense", "tenta", "tenti", "tenui", "tenza", "tenze", "tepee", "teppe", "terbi", "terge", "tergi", "tergo", "termo", "terne", "terni", "terno", "terre", "terse", "tersi", "terso", "terza", "terze", "terzi", "tesai", "tesla", "tesle", "tessa", "tessi", "tesso", "testi", "tetra", "tetre", "tetri", "tetta", "tetti", "texta", "texte", "texti", "texto", "theta", "tiade", "tiadi", "tiara", "tiare", "tiasi", "tiaso", "tibie", "tiene", "tifai", "tigne", "tigni", "tigno", "tigra", "tigri", "tigro", "tigua", "tildi", "tilla", "tille", "tilli", "tillo", "timpa", "timpe", "tinca", "tinga", "tinge", "tingi", "tingo", "tinse", "tinsi", "tinte", "tinti", "tinto", "tioli", "tiolo", "tirsi", "tirso", "tizia", "tizie", "tizzi", "tizzo", "tmesi", "toast", "tocai", "tocco", "tochi", "toghi", "tokai", "tolde", "tolga", "tolgo", "tolla", "tolle", "tolse", "tolsi", "tolte", "tolti", "tolto", "tomai", "tombe", "tombi", "tombo", "tonai", "tonde", "tondi", "tondo", "tonfa", "tonfi", "tonia", "tonie", "tonni", "tonta", "tonte", "tonto", "topoi", "toppe", "toppi", "toppo", "toque", "torbe", "torbi", "torbo", "torca", "torci", "torco", "tordi", "torea", "torei", "toreo", "torio", "torli", "torlo", "torma", "torna", "torno", "torri", "torse", "torsi", "torte", "torti", "torva", "torvi", "torvo", "tosca", "tosco", "tossa", "tossi", "tosso", "toste", "tosti", "tosto", "tozze", "tozzi", "tozzo", "trace", "traci", "trade", "trago", "trame", "trami", "tramo", "trana", "trani", "trano", "trans", "trapa", "trape", "trare", "travi", "trema", "tremi", "trena", "treni", "trevi", "trevo", "triai", "tribi", "tribo", "tribu", "triga", "trike", "trina", "trine", "trini", "trita", "trite", "triti", "trivi", "troco", "troia", "troie", "troll", "trona", "trone", "troni", "tropi", "tropo", "trote", "trovi", "trovo", "truca", "truce", "truci", "truka", "truke", "tsuga", "tubai", "tufai", "tuffa", "tuffi", "tughe", "tulio", "tumba", "tunna", "tunne", "tunni", "tunno", "tuona", "tuoni", "turai", "turba", "turbi", "turbo", "turca", "turma", "turme", "turna", "turni", "turpi", "tusca", "tusco", "tutai", "tutor", "tutsi", "tutta", "tutti", "tutto", "tuzia", "tuzie", "ubbie", "ubera", "ubere", "uberi", "ubero", "ubica", "ubico", "ubini", "ubino", "uccia", "uccio", "udita", "udite", "uditi", "udivi", "udivo", "udrai", "udrei", "ufizi", "uggii", "uggio", "ugnai", "ugole", "ukase", "ukiyo", "ulama", "ulani", "ulano", "ulema", "ulese", "ulesi", "ulice", "ulici", "ulite", "uliti", "uliva", "ulive", "ulivi", "ultra", "ulule", "ululi", "ululo", "umane", "umani", "umano", "umata", "umate", "umati", "umato", "umbra", "umbre", "umbri", "umbro", "umica", "umici", "umico", "umide", "umidi", "umido", "umili", "unari", "unica", "unici", "unita", "unite", "uniti", "univi", "univo", "unqua", "unque", "untai", "upupe", "urali", "urati", "urato", "urese", "uresi", "urica", "urici", "urico", "urine", "urini", "urino", "urlii", "urlio", "urone", "uroni", "urtai", "usaci", "usala", "usale", "usali", "usalo", "usami", "usane", "usata", "usate", "usati", "usava", "usavo", "uscii", "usino", "usure", "usuri", "usuro", "uteri", "utese", "utesi", "uvala", "uvale", "uvina", "uvine", "uvola", "uvole", "uvosa", "uvose", "uvosi", "uvoso", "uvula", "uvule", "uxori", "vacai", "vacci", "vachi", "vacua", "vacue", "vacui", "vaffa", "vagai", "vaghi", "vagii", "vagli", "vaiai", "valga", "valla", "valli", "vallo", "valsa", "valse", "valsi", "valso", "valva", "valve", "vammi", "vampa", "vampe", "vampi", "vampo", "vanai", "vanea", "vanei", "vaneo", "vango", "vania", "vanie", "vanii", "vanio", "vanne", "vanni", "vanta", "vanti", "varai", "varca", "varea", "varee", "varia", "vario", "varva", "varve", "vasta", "vaste", "vasti", "vatti", "vauda", "vaude", "vecce", "vecia", "vecio", "vedda", "vegge", "veggi", "velia", "velie", "velli", "velma", "velme", "venai", "venda", "vende", "vendi", "vengi", "vengo", "venie", "venne", "venni", "venta", "vepre", "vepri", "vepsa", "vepse", "vepsi", "vepso", "verbi", "verdi", "verge", "vergi", "vergo", "verla", "verle", "verme", "vermo", "verna", "verne", "verni", "verno", "verri", "verro", "versa", "verse", "verta", "verte", "verti", "verto", "verve", "verze", "vesce", "vespe", "vessa", "vessi", "vesso", "vesta", "vesti", "vesto", "vetri", "vette", "vezzi", "viado", "viali", "viari", "vibri", "vibro", "vichi", "viene", "viera", "viere", "vieri", "viero", "vieta", "viete", "vieti", "vigli", "vigne", "vilai", "vilii", "ville", "villi", "villo", "vimai", "vinca", "vince", "vinci", "vinea", "vinee", "vinsi", "vinta", "vinte", "vinto", "violi", "violo", "vipla", "viple", "virai", "virei", "vireo", "virga", "virgo", "virtu", "visai", "visco", "vispe", "vispi", "vispo", "vissi", "viste", "visti", "vitae", "vitai", "vitro", "vitta", "vitte", "vitti", "vivai", "vizia", "vizza", "vizze", "vizzi", "vocai", "vochi", "vocia", "vocii", "vodka", "vogai", "voghe", "vogli", "voice", "voile", "volca", "volco", "volee", "volga", "volgi", "volgo", "volli", "volpa", "volpi", "volpo", "volse", "volsi", "volte", "volti", "volva", "volve", "volvi", "volvo", "vomii", "vorai", "vosco", "votai", "votii", "vulga", "vulgo", "vulve", "vuota", "vuote", "vuoto", "wakhi", "wasca", "wasce", "wasci", "wasco", "washa", "washe", "washi", "washo", "wayaa", "wayae", "wayai", "wayao", "white", "whiti", "widia", "xenia", "xenie", "xenon", "xhosa", "yagua", "yamea", "yamee", "yamei", "yameo", "yaqui", "yoghi", "yucca", "yuchi", "yurta", "yurte", "zabri", "zabro", "zaffa", "zaffe", "zaffi", "zaffo", "zaina", "zaine", "zaini", "zaire", "zamba", "zambo", "zamia", "zamie", "zampe", "zampi", "zampo", "zanca", "zande", "zanna", "zanni", "zanno", "zappe", "zappi", "zappo", "zarri", "zarro", "zatta", "zatte", "zebre", "zebri", "zebro", "zecco", "zelai", "zenda", "zende", "zendi", "zendo", "zenit", "zeppe", "zeppi", "zerbi", "zerbo", "zerga", "zerge", "zergi", "zergo", "zetti", "zetto", "zifio", "zigai", "zighi", "zigna", "zigni", "zigno", "zilla", "zilli", "zillo", "zinca", "zinia", "zinie", "zinna", "zinne", "zinni", "zinno", "ziona", "zione", "zioni", "zippa", "zippi", "zippo", "zirbi", "zirbo", "zirla", "zirli", "zitta", "zitte", "zitto", "zizza", "zizze", "zoeci", "zolfa", "zolfi", "zolle", "zolli", "zollo", "zomba", "zombi", "zombo", "zompa", "zompi", "zonai", "zooma", "zoomi", "zoomo", "zoppa", "zoppe", "zoppi", "zoque", "zoqui", "zozza", "zozzi", "zozzo", "zuava", "zuave", "zuavi", "zuavo", "zuffe", "zughi", "zumai", "zuppe", "zuppi", "zuppo", "zurla", "zurli", "zurlo"],
      Ta = "present",
      Ia = "correct",
      Ca = "absent";
  var Ma = {
      unknown: 0,
      absent: 1,
      present: 2,
      correct: 3
  };

  function Oa(e, a) {
      var s = {};
      return e.forEach((function(e, t) {
          if (a[t])
              for (var o = 0; o < e.length; o++) {
                  var r = e[o],
                      n = a[t][o],
                      i = s[r] || "unknown";
                  Ma[n] > Ma[i] && (s[r] = n)
              }
      })), s
  }
  var Ra = new Date(2022, 0, 3, 0, 0, 0, 0);

  function $a(e, a) {
      var s = new Date(e),
          t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
      return Math.floor(t / 864e5)
  }

  function Pa(e) {
      var a, s = Na(e);
      return a = s % Aa.length, Aa[a]
  }

  function Na(e) {
      return $a(Ra, e)
  }
  var Ha, Ga = "abcdefghijklmnopqrstuvwxyz";

  function Da() {
      dataLayer.push(arguments)
  }
  window.dataLayer = window.dataLayer || [], Da("js", new Date);
  Da("config", "G-2SSGMHY3NP", {
      app_version: null === (Ha = window.wordle) || void 0 === Ha ? void 0 : Ha.hash,
      debug_mode: !1
  });
  var Ba = [].concat(g(Ga.split("").slice(13)), g(Ga.split("").slice(0, 13)));

  function Fa(e) {
      for (var a = "", s = 0; s < e.length; s++) {
          var t = Ga.indexOf(e[s]);
          a += t >= 0 ? Ba[t] : "_"
      }
      return a
  }
  var Wa = "statistics",
      Ya = "fail",
      Ja = {
          currentStreak: 0,
          maxStreak: 0,
          guesses: r({
              1: 0,
              2: 0,
              3: 0,
              4: 0,
              5: 0,
              6: 0
          }, Ya, 0),
          winPercentage: 0,
          gamesPlayed: 0,
          gamesWon: 0,
          averageGuesses: 0
      };

  function Ua() {
      var e = window.localStorage.getItem(Wa) || JSON.stringify(Ja);
      return JSON.parse(e)
  }

  function Xa(e) {
      var a = e.isWin,
          s = e.isStreak,
          t = e.numGuesses,
          o = Ua();
      a ? (o.guesses[t] += 1, s ? o.currentStreak += 1 : o.currentStreak = 1) : (o.currentStreak = 0, o.guesses.fail += 1), o.maxStreak = Math.max(o.currentStreak, o.maxStreak), o.gamesPlayed += 1, o.gamesWon += a ? 1 : 0, o.winPercentage = Math.round(o.gamesWon / o.gamesPlayed * 100), o.averageGuesses = Math.round(Object.entries(o.guesses).reduce((function(e, a) {
              var s = y(a, 2),
                  t = s[0],
                  o = s[1];
              return t !== Ya ? e += t * o : e
          }), 0) / o.gamesWon),
          function(e) {
              window.localStorage.setItem(Wa, JSON.stringify(e))
          }(o)
  }
  var Ka = document.createElement("template");
  Ka.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help" class="icon">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         PAR🇮🇹LE\n        </div>\n        <div class="menu">\n          <button id="settings" class="icon">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
  var Va = document.createElement("template");
  Va.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
  var Qa = "IN_PROGRESS",
      Za = "WIN",
      es = "FAIL",
      as = ["Genio!!!", "Magnifico", "Notevole", "Ottimo", "Non male", "Daje!"],
      ss = function(e) {
          n(t, e);
          var a = h(t);

          function t() {
              var e;
              s(this, t), r(p(e = a.call(this)), "tileIndex", 0), r(p(e), "rowIndex", 0), r(p(e), "solution", void 0), r(p(e), "boardState", void 0), r(p(e), "evaluations", void 0), r(p(e), "canInput", !0), r(p(e), "gameStatus", Qa), r(p(e), "letterEvaluations", {}), r(p(e), "$board", void 0), r(p(e), "$keyboard", void 0), r(p(e), "$game", void 0), r(p(e), "today", void 0), r(p(e), "lastPlayedTs", void 0), r(p(e), "lastCompletedTs", void 0), r(p(e), "hardMode", void 0), r(p(e), "dayOffset", void 0), e.attachShadow({
                  mode: "open"
              }), e.today = new Date;
              var o = za();
              return e.lastPlayedTs = o.lastPlayedTs, !e.lastPlayedTs || $a(new Date(e.lastPlayedTs), e.today) >= 1 ? (e.boardState = new Array(6).fill(""), e.evaluations = new Array(6).fill(null), e.solution = Pa(e.today), e.dayOffset = Na(e.today), e.lastCompletedTs = o.lastCompletedTs, e.hardMode = o.hardMode, e.restoringFromLocalStorage = !1, ja({
                  rowIndex: e.rowIndex,
                  boardState: e.boardState,
                  evaluations: e.evaluations,
                  solution: e.solution,
                  gameStatus: e.gameStatus
              }), Da("event", "level_start", {
                  level_name: Fa(e.solution)
              })) : (e.boardState = o.boardState, e.evaluations = o.evaluations, e.rowIndex = o.rowIndex, e.solution = o.solution, e.dayOffset = Na(e.today), e.letterEvaluations = Oa(e.boardState, e.evaluations), e.gameStatus = o.gameStatus, e.lastCompletedTs = o.lastCompletedTs, e.hardMode = o.hardMode, e.gameStatus !== Qa && (e.canInput = !1), e.restoringFromLocalStorage = !0), e
          }
          return o(t, [{
              key: "evaluateRow",
              value: function() {
                  if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                      var e, a = this.$board.querySelectorAll("game-row")[this.rowIndex],
                          s = this.boardState[this.rowIndex];
                      if (e = s, !La.includes(e) && !Aa.includes(e)) return a.setAttribute("invalid", ""), void this.addToast("Non nella lista di parole");
                      if (this.hardMode) {
                          var t = function(e, a, s) {
                                  if (!e || !a || !s) return {
                                      validGuess: !0
                                  };
                                  for (var t = 0; t < s.length; t++)
                                      if (s[t] === Ia && e[t] !== a[t]) return {
                                          validGuess: !1,
                                          errorMessage: "".concat((o = t + 1, r = void 0, n = void 0, r = ["th", "st", "nd", "rd"], n = o % 100, o + (r[(n - 20) % 10] || r[n] || r[0])), " letter must be ").concat(a[t].toUpperCase())
                                      };
                                  for (var o, r, n, i = {}, l = 0; l < s.length; l++)[Ia, Ta].includes(s[l]) && (i[a[l]] ? i[a[l]] += 1 : i[a[l]] = 1);
                                  var d = e.split("").reduce((function(e, a) {
                                      return e[a] ? e[a] += 1 : e[a] = 1, e
                                  }), {});
                                  for (var u in i)
                                      if ((d[u] || 0) < i[u]) return {
                                          validGuess: !1,
                                          errorMessage: "Guess must contain ".concat(u.toUpperCase())
                                      };
                                  return {
                                      validGuess: !0
                                  }
                              }(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]),
                              o = t.validGuess,
                              r = t.errorMessage;
                          if (!o) return a.setAttribute("invalid", ""), void this.addToast(r || "Non valido quando il gioco si fa duro")
                      }
                      var n = function(e, a) {
                          for (var s = Array(a.length).fill(Ca), t = Array(a.length).fill(!0), o = Array(a.length).fill(!0), r = 0; r < e.length; r++) e[r] === a[r] && o[r] && (s[r] = Ia, t[r] = !1, o[r] = !1);
                          for (var n = 0; n < e.length; n++) {
                              var i = e[n];
                              if (t[n])
                                  for (var l = 0; l < a.length; l++) {
                                      var d = a[l];
                                      if (o[l] && i === d) {
                                          s[n] = Ta, o[l] = !1;
                                          break
                                      }
                                  }
                          }
                          return s
                      }(s, this.solution);
                      this.evaluations[this.rowIndex] = n, this.letterEvaluations = Oa(this.boardState, this.evaluations), a.evaluation = this.evaluations[this.rowIndex], this.rowIndex += 1;
                      var i = this.rowIndex >= 6,
                          l = n.every((function(e) {
                              return "correct" === e
                          }));
                      if (i || l) Xa({
                          isWin: l,
                          isStreak: !!this.lastCompletedTs && 1 === $a(new Date(this.lastCompletedTs), new Date),
                          numGuesses: this.rowIndex
                      }), ja({
                          lastCompletedTs: Date.now()
                      }), this.gameStatus = l ? Za : es, Da("event", "level_end", {
                          level_name: Fa(this.solution),
                          num_guesses: this.rowIndex,
                          success: l
                      });
                      this.tileIndex = 0, this.canInput = !1, ja({
                          rowIndex: this.rowIndex,
                          boardState: this.boardState,
                          evaluations: this.evaluations,
                          solution: this.solution,
                          gameStatus: this.gameStatus,
                          lastPlayedTs: Date.now()
                      })
                  }
              }
          }, {
              key: "addLetter",
              value: function(e) {
                  this.gameStatus === Qa && (this.canInput && (this.tileIndex >= 5 || (this.boardState[this.rowIndex] += e, this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]), this.tileIndex += 1)))
              }
          }, {
              key: "removeLetter",
              value: function() {
                  if (this.gameStatus === Qa && this.canInput && !(this.tileIndex <= 0)) {
                      this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                      var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
                      this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"), e.removeAttribute("invalid"), this.tileIndex -= 1
                  }
              }
          }, {
              key: "submitGuess",
              value: function() {
                  if (this.gameStatus === Qa && this.canInput) {
                      if (5 !== this.tileIndex) return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Non abbastanza lettere");
                      this.evaluateRow()
                  }
              }
          }, {
              key: "addToast",
              value: function(e, a) {
                  var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                      t = document.createElement("game-toast");
                  t.setAttribute("text", e), a && t.setAttribute("duration", a), s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t)
              }
          }, {
              key: "sizeBoard",
              value: function() {
                  var e = this.shadowRoot.querySelector("#board-container"),
                      a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
                      s = 6 * Math.floor(a / 5);
                  this.$board.style.width = "".concat(a, "px"), this.$board.style.height = "".concat(s, "px")
              }
          }, {
              key: "showStatsModal",
              value: function() {
                  var e = this.$game.querySelector("game-modal"),
                      a = document.createElement("game-stats");
                  this.gameStatus === Za && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex), a.gameApp = this, e.appendChild(a), e.setAttribute("open", "")
              }
          }, {
              key: "showHelpModal",
              value: function() {
                  var e = this.$game.querySelector("game-modal");
                  e.appendChild(document.createElement("game-help")), e.setAttribute("open", "")
              }
          }, {
              key: "connectedCallback",
              value: function() {
                  var e = this;
                  this.shadowRoot.appendChild(Ka.content.cloneNode(!0)), this.$game = this.shadowRoot.querySelector("#game"), this.$board = this.shadowRoot.querySelector("#board"), this.$keyboard = this.shadowRoot.querySelector("game-keyboard"), this.sizeBoard(), this.lastPlayedTs || setTimeout((function() {
                      return e.showHelpModal()
                  }), 100);
                  for (var a = 0; a < 6; a++) {
                      var s = document.createElement("game-row");
                      s.setAttribute("letters", this.boardState[a]), s.setAttribute("length", 5), this.evaluations[a] && (s.evaluation = this.evaluations[a]), this.$board.appendChild(s)
                  }
                  this.$game.addEventListener("game-key-press", (function(a) {
                      var s = a.detail.key;
                      "←" === s || "Backspace" === s ? e.removeLetter() : "↵" === s || "Enter" === s ? e.submitGuess() : Ga.includes(s.toLowerCase()) && e.addLetter(s.toLowerCase())
                  })), this.$game.addEventListener("game-last-tile-revealed-in-row", (function(a) {
                      e.$keyboard.letterEvaluations = e.letterEvaluations, e.rowIndex < 6 && (e.canInput = !0);
                      var s = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                      (a.path || a.composedPath && a.composedPath()).includes(s) && ([Za, es].includes(e.gameStatus) && (e.restoringFromLocalStorage ? e.showStatsModal() : (e.gameStatus === Za && (s.setAttribute("win", ""), e.addToast(as[e.rowIndex - 1], 2e3)), e.gameStatus === es && e.addToast(e.solution.toUpperCase(), 1 / 0), setTimeout((function() {
                          e.showStatsModal()
                      }), 2500))), e.restoringFromLocalStorage = !1)
                  })), this.shadowRoot.addEventListener("game-setting-change", (function(a) {
                      var s = a.detail,
                          t = s.name,
                          o = s.checked,
                          r = s.disabled;
                      switch (t) {
                          case "hard-mode":
                              return void(r ? e.addToast("Si può attivare 'il gioco si fa duro' solo all'inizio di una partita", 1500, !0) : (e.hardMode = o, ja({
                                  hardMode: o
                              })))
                      }
                  })), this.shadowRoot.getElementById("settings").addEventListener("click", (function(a) {
                      var s = e.$game.querySelector("game-page"),
                          t = document.createTextNode("Impostazioni");
                      s.appendChild(t);
                      var o = document.createElement("game-settings");
                      o.setAttribute("slot", "content"), o.gameApp = e, s.appendChild(o), s.setAttribute("open", "")
                  })), this.shadowRoot.getElementById("help").addEventListener("click", (function(a) {
                      var s = e.$game.querySelector("game-page"),
                          t = document.createTextNode("Come giocare");
                      s.appendChild(t);
                      var o = document.createElement("game-help");
                      o.setAttribute("page", ""), o.setAttribute("slot", "content"), s.appendChild(o), s.setAttribute("open", "")
                  })), window.addEventListener("resize", this.sizeBoard.bind(this))
              }
          }, {
              key: "disconnectedCallback",
              value: function() {}
          }, {
              key: "debugTools",
              value: function() {
                  var e = this;
                  this.shadowRoot.getElementById("debug-tools").appendChild(Va.content.cloneNode(!0)), this.shadowRoot.getElementById("toast").addEventListener("click", (function(a) {
                      e.addToast("hello world")
                  })), this.shadowRoot.getElementById("modal").addEventListener("click", (function(a) {
                      var s = e.$game.querySelector("game-modal");
                      s.textContent = "hello plz", s.setAttribute("open", "")
                  })), this.shadowRoot.getElementById("reveal").addEventListener("click", (function() {
                      e.evaluateRow()
                  })), this.shadowRoot.getElementById("shake").addEventListener("click", (function() {
                      e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "")
                  })), this.shadowRoot.getElementById("bounce").addEventListener("click", (function() {
                      var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                      "" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "")
                  }))
              }
          }]), t
      }(c(HTMLElement));
  customElements.define("game-app", ss);
  var ts = document.createElement("template");
  ts.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
  var os = function(e) {
      n(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), (e = a.call(this)).attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "connectedCallback",
          value: function() {
              var e = this;
              this.shadowRoot.appendChild(ts.content.cloneNode(!0)), this.addEventListener("click", (function(a) {
                  e.shadowRoot.querySelector(".content").classList.add("closing")
              })), this.shadowRoot.addEventListener("animationend", (function(a) {
                  "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"), e.removeChild(e.firstChild), e.removeAttribute("open"))
              }))
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-modal", os);
  var rs = document.createElement("template");
  rs.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
  var ns = document.createElement("template");
  ns.innerHTML = "\n  <button>key</button>\n";
  var is = document.createElement("template");
  is.innerHTML = '\n  <div class="spacer"></div>\n';
  var ls = [
          ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
          ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"],
          ["↵", "z", "x", "c", "v", "b", "n", "m", "←"]
      ],
      ds = function(e) {
          n(t, e);
          var a = h(t);

          function t() {
              var e;
              return s(this, t), r(p(e = a.call(this)), "_letterEvaluations", {}), e.attachShadow({
                  mode: "open"
              }), e
          }
          return o(t, [{
              key: "letterEvaluations",
              set: function(e) {
                  this._letterEvaluations = e, this._render()
              }
          }, {
              key: "dispatchKeyPressEvent",
              value: function(e) {
                  this.dispatchEvent(new CustomEvent("game-key-press", {
                      bubbles: !0,
                      composed: !0,
                      detail: {
                          key: e
                      }
                  }))
              }
          }, {
              key: "connectedCallback",
              value: function() {
                  var e = this;
                  this.shadowRoot.appendChild(rs.content.cloneNode(!0)), this.$keyboard = this.shadowRoot.getElementById("keyboard"), this.$keyboard.addEventListener("click", (function(a) {
                      var s = a.target.closest("button");
                      s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key)
                  })), window.addEventListener("keydown", (function(a) {
                      if (!0 !== a.repeat) {
                          var s = a.key,
                              t = a.metaKey,
                              o = a.ctrlKey;
                          t || o || (Ga.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s)
                      }
                  })), this.$keyboard.addEventListener("transitionend", (function(a) {
                      var s = a.target.closest("button");
                      s && e.$keyboard.contains(s) && s.classList.remove("fade")
                  })), ls.forEach((function(a) {
                      var s = document.createElement("div");
                      s.classList.add("row"), a.forEach((function(e) {
                          var a;
                          if (e >= "a" && e <= "z" || "←" === e || "↵" === e) {
                              if ((a = ns.content.cloneNode(!0).firstElementChild).dataset.key = e, a.textContent = e, "←" === e) {
                                  var t = document.createElement("game-icon");
                                  t.setAttribute("icon", "backspace"), a.textContent = "", a.appendChild(t), a.classList.add("one-and-a-half")
                              }
                              "↵" == e && (a.textContent = "invio", a.classList.add("one-and-a-half"))
                          } else(a = is.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                          s.appendChild(a)
                      })), e.$keyboard.appendChild(s)
                  })), this._render()
              }
          }, {
              key: "_render",
              value: function() {
                  for (var e in this._letterEvaluations) {
                      var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
                      a.dataset.state = this._letterEvaluations[e], a.classList.add("fade")
                  }
              }
          }]), t
      }(c(HTMLElement));

  function us(e, a, s) {
      try {
          if (o = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(o) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(o.substr(0, 4))) && void 0 !== navigator.share && navigator.canShare && navigator.canShare(e)) navigator.share(e);
          else {
              var t = document.createElement("textarea");
              t.textContent = e.text, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t), a()
          }
      } catch (e) {
          s()
      }
      var o
  }
  customElements.define("game-keyboard", ds);
  var cs = document.createElement("template");
  cs.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistiche</h1>\n    <div id="statistics"></div>\n    <h1>Distribuzione dei tentativi</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer">\n      <div class="countdown">\n        <h1>Prossimo PARLE</h1>\n        <div id="timer">\n          <div class="statistic-container">\n            <div class="statistic timer">\n              <countdown-timer></countdown-timer>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="share">\n        <button id="share-button">\n          Condividi \n        </button>\n      </div>\n    </div>\n  </div>\n';
  var ps = document.createElement("template");
  ps.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
  var ms = document.createElement("template");
  ms.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
  var hs = {
          currentStreak: "Vinte di fila",
          maxStreak: "Record di vittorie in fila",
          winPercentage: "% Vittorie",
          gamesPlayed: "Partite",
          gamesWon: "Vinte",
          averageGuesses: "Numero medio di tentativi"
      },
      ys = function(e) {
          n(t, e);
          var a = h(t);

          function t() {
              var e;
              return s(this, t), r(p(e = a.call(this)), "stats", {}), r(p(e), "gameApp", void 0), e.attachShadow({
                  mode: "open"
              }), e.stats = Ua(), e
          }
          return o(t, [{
              key: "connectedCallback",
              value: function() {
                  var e = this;
                  this.shadowRoot.appendChild(cs.content.cloneNode(!0));
                  for (var a = this.shadowRoot.getElementById("statistics"), s = this.shadowRoot.getElementById("guess-distribution"), t = Math.max.apply(Math, g(Object.values(this.stats.guesses))), o = 1; o < Object.keys(this.stats.guesses).length; o++) {
                      var r = o,
                          n = this.stats.guesses[o],
                          i = ms.content.cloneNode(!0),
                          l = Math.max(7, Math.round(n / t * 100));
                      i.querySelector(".guess").textContent = r;
                      var d = i.querySelector(".graph-bar");
                      if (d.style.width = "".concat(l, "%"), "number" == typeof n) {
                          i.querySelector(".num-guesses").textContent = n, n > 0 && d.classList.add("align-right");
                          var u = parseInt(this.getAttribute("highlight-guess"), 10);
                          u && o === u && d.classList.add("highlight")
                      }
                      s.appendChild(i)
                  } ["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function(s) {
                      var t = hs[s],
                          o = e.stats[s],
                          r = ps.content.cloneNode(!0);
                      r.querySelector(".label").textContent = t, r.querySelector(".statistic").textContent = o, a.appendChild(r)
                  })), this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function(a) {
                      a.preventDefault(), a.stopPropagation();
                      us(function(e) {
                          var a = e.evaluations,
                              s = e.dayOffset,
                              t = e.rowIndex,
                              o = e.isHardMode,
                              r = e.isWin,
                              n = JSON.parse(window.localStorage.getItem(j)),
                              i = JSON.parse(window.localStorage.getItem(S)),
                              l = "Par🇮🇹le n°".concat(s);
                          l += " ".concat(r ? t : "X", "/").concat(6), o && (l += "*");
                          var d = "";
                          return a.forEach((function(e) {
                              e && (e.forEach((function(e) {
                                  if (e) {
                                      var a = "";
                                      switch (e) {
                                          case Ia:
                                              a = function(e) {
                                                  return e ? "🟧" : "🟩"
                                              }(i);
                                              break;
                                          case Ta:
                                              a = function(e) {
                                                  return e ? "🟦" : "🟨"
                                              }(i);
                                              break;
                                          case Ca:
                                              a = function(e) {
                                                  return e ? "⬛" : "⬜"
                                              }(n)
                                      }
                                      d += a
                                  }
                              })), d += "\n")
                          })), {
                              text: "".concat(l, "\n\n").concat(d.trimEnd())
                          }
                      }({
                          evaluations: e.gameApp.evaluations,
                          dayOffset: e.gameApp.dayOffset,
                          rowIndex: e.gameApp.rowIndex,
                          isHardMode: e.gameApp.hardMode,
                          isWin: e.gameApp.gameStatus === Za
                      }), (function() {
                          e.gameApp.addToast("Risultati copiati", 2e3, !0)
                      }), (function() {
                          e.gameApp.addToast("Errore nella condivisione", 2e3, !0)
                      }))
                  }))
              }
          }]), t
      }(c(HTMLElement));
  customElements.define("game-stats", ys);
  var gs = document.createElement("template");
  gs.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
  var bs = function(e) {
      n(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), (e = a.call(this)).attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "connectedCallback",
          value: function() {
              var e = this;
              this.shadowRoot.appendChild(gs.content.cloneNode(!0)), this.shadowRoot.querySelector(".container").addEventListener("click", (function(a) {
                  a.stopPropagation(), e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""), e.dispatchEvent(new CustomEvent("game-switch-change", {
                      bubbles: !0,
                      composed: !0,
                      detail: {
                          name: e.getAttribute("name"),
                          checked: e.hasAttribute("checked"),
                          disabled: e.hasAttribute("disabled")
                      }
                  }))
              }))
          }
      }], [{
          key: "observedAttributes",
          get: function() {
              return ["checked"]
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-switch", bs);
  var fs = document.createElement("template");
  fs.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Indovina delle <strong>PARoLE</strong> di 5 lettere in 6 tentativi.</p>\n      <p>PAR🇮🇹LE è una versione italiana (non ufficiale) di <a href="https://powerlanguage.co.uk/wordle/">WORDLE</a></p>\n      <p>Dopo ogni tentativo, i colori delle tessere cambieranno per mostrarti quanto vicino sei andato ad indovinare la parola.</p>\n      <div class="examples">\n        <div class="example">\n          <div class="row">\n            <game-tile letter="b" evaluation="correct" reveal></game-tile>\n            <game-tile letter="u"></game-tile>\n            <game-tile letter="f"></game-tile>\n            <game-tile letter="f"></game-tile>\n            <game-tile letter="a"></game-tile>\n          </div>\n          <p>La lettera <strong>B</strong> è nella parola ed è nel posto giusto.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="p"></game-tile>\n            <game-tile letter="o"></game-tile>\n            <game-tile letter="r" evaluation="present" reveal></game-tile>\n            <game-tile letter="t"></game-tile>\n            <game-tile letter="o"></game-tile>\n          </div>\n          <p>La lettera <strong>R</strong> è nella parola ma nel posto sbagliato.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="v"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="g"></game-tile>\n            <game-tile letter="h" evaluation="absent" reveal></game-tile>\n            <game-tile letter="i"></game-tile>\n          </div>\n          <p>La lettera <strong>H</strong> non è nella parola.</p>\n        </div>\n      </div>\n      <p><strong>Un nuovo gioco di PAR🇮🇹LE ogni giorno!<strong></p>\n    </div>\n  </section>\n';
  var ks = function(e) {
      n(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), (e = a.call(this)).attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "connectedCallback",
          value: function() {
              this.shadowRoot.appendChild(fs.content.cloneNode(!0))
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-help", ks);
  var vs = document.createElement("template");
  vs.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
  var ws = function(e) {
      n(t, e);
      var a = h(t);

      function t() {
          var e;
          return s(this, t), (e = a.call(this)).attachShadow({
              mode: "open"
          }), e
      }
      return o(t, [{
          key: "connectedCallback",
          value: function() {
              var e = this;
              this.shadowRoot.appendChild(vs.content.cloneNode(!0)), this.shadowRoot.querySelector("game-icon").addEventListener("click", (function(a) {
                  e.shadowRoot.querySelector(".overlay").classList.add("closing")
              })), this.shadowRoot.addEventListener("animationend", (function(a) {
                  "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"), Array.from(e.childNodes).forEach((function(a) {
                      e.removeChild(a)
                  })), e.removeAttribute("open"))
              }))
          }
      }]), t
  }(c(HTMLElement));
  customElements.define("game-page", ws);
  var xs = document.createElement("template");
  xs.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
  var zs = {
          help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
          settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
          backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
          close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
          share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
      },
      js = function(e) {
          n(t, e);
          var a = h(t);

          function t() {
              var e;
              return s(this, t), (e = a.call(this)).attachShadow({
                  mode: "open"
              }), e
          }
          return o(t, [{
              key: "connectedCallback",
              value: function() {
                  this.shadowRoot.appendChild(xs.content.cloneNode(!0));
                  var e = this.getAttribute("icon");
                  this.shadowRoot.querySelector("path").setAttribute("d", zs[e]), "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"), "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
              }
          }]), t
      }(c(HTMLElement));
  customElements.define("game-icon", js);
  var Ss = document.createElement("template");
  Ss.innerHTML = '\n  <div id="timer"></div>\n';
  var _s = 6e4,
      qs = 36e5,
      Es = function(e) {
          n(t, e);
          var a = h(t);

          function t() {
              var e;
              s(this, t), r(p(e = a.call(this)), "targetEpochMS", void 0), r(p(e), "intervalId", void 0), r(p(e), "$timer", void 0), e.attachShadow({
                  mode: "open"
              });
              var o = new Date;
              return o.setDate(o.getDate() + 1), o.setHours(0, 0, 0, 0), e.targetEpochMS = o.getTime(), e
          }
          return o(t, [{
              key: "padDigit",
              value: function(e) {
                  return e.toString().padStart(2, "0")
              }
          }, {
              key: "updateTimer",
              value: function() {
                  var e = (new Date).getTime(),
                      a = Math.floor(this.targetEpochMS - e),
                      s = Math.floor(a % 864e5 / qs),
                      t = Math.floor(a % qs / _s),
                      o = Math.floor(a % _s / 1e3),
                      r = "".concat(this.padDigit(s), ":").concat(this.padDigit(t), ":").concat(this.padDigit(o));
                  this.$timer.textContent = r
              }
          }, {
              key: "connectedCallback",
              value: function() {
                  var e = this;
                  this.shadowRoot.appendChild(Ss.content.cloneNode(!0)), this.$timer = this.shadowRoot.querySelector("#timer"), this.intervalId = setInterval((function() {
                      e.updateTimer()
                  }), 200)
              }
          }]), t
      }(c(HTMLElement));
  return customElements.define("countdown-timer", Es), e.CountdownTimer = Es, e.GameApp = ss, e.GameHelp = ks, e.GameIcon = js, e.GameKeyboard = ds, e.GameModal = os, e.GamePage = ws, e.GameRow = x, e.GameSettings = _a, e.GameStats = ys, e.GameSwitch = bs, e.GameThemeManager = _, e.GameTile = v, e.GameToast = Ea, Object.defineProperty(e, "__esModule", {
      value: !0
  }), e
}({});
