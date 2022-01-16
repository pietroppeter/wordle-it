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
  Sa.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Hard Mode</div>\n          <div class="description">Any revealed hints must be used in subsequent guesses</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Dark Theme</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Color Blind Mode</div>\n          <div class="description">High contrast colors</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Feedback</div>\n        </div>\n        <div class="control">\n          <a href="mailto:wordle@powerlanguage.co.uk?subject=Feedback" title="wordle@powerlanguage.co.uk">Email</a>\n          |\n          <a href="https://twitter.com/intent/tweet?screen_name=powerlanguish" target="blank" title="@powerlanguish">Twitter</a>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div id="footnote">\n    <div id="puzzle-number"></div>\n    <div id="hash"></div>\n  <div>\n';
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
  var Aa = ["imito", "fluii", "sacca", "stira", "pazza", "stono", "stare", "piaga", "mente", "colle", "callo", "berlo", "donne", "marzo", "prete", "rospi", "falsi", "salde", "sfila", "renda", "linda", "zanne", "metta", "quali", "muggi", "opere", "gambi", "beoni", "vende", "tessa", "grane", "spari", "talpa", "acuti", "lindi", "prose", "toppa", "matti", "mezzi", "torne", "culto", "pizzi", "facce", "salga", "sento", "bassa", "salta", "oncia", "imita", "amano", "piaci", "cacao", "densa", "costa", "canne", "segno", "vespe", "sputo", "scado", "uditi", "bacia", "fiuta", "certe", "sozze", "lesta", "muori", "esili", "vigna", "desse", "amato", "pendi", "croce", "mieti", "esche", "porto", "sfamo", "regge", "stivo", "farle", "predi", "tinti", "bugie", "tizie", "sputa", "diamo", "disse", "frana", "preso", "epuri", "desti", "altro", "seguo", "erano", "dense", "nervi", "vacca", "tasta", "abusa", "ronza", "fissa", "tarda", "curvi", "fughi", "dorma", "remai", "genio", "posti", "sente", "roghi", "idolo", "quasi", "corde", "lenta", "rango", "falco", "osino", "scade", "eleva", "violi", "asini", "inizi", "opaca", "tappa", "tento", "guadi", "tette", "abati", "venne", "terge", "mania", "umane", "emula", "segua", "ferma", "cerca", "berra", "burri", "nonne", "forte", "svino", "tondi", "stoni", "forti", "copio", "levai", "slego", "tenie", "stona", "botta", "stavi", "salve", "piene", "scusa", "poste", "pensi", "maree", "rompi", "palme", "aboli", "elude", "sarto", "legni", "matto", "mamme", "fosse", "spesa", "sulla", "reggi", "piano", "adoro", "lecci", "goffo", "testi", "serre", "dotte", "avete", "guari", "vieni", "gioii", "bordi", "pecca", "terga", "perno", "speci", "altre", "rompe", "univo", "addio", "lecco", "slega", "gente", "bosco", "libro", "firma", "vorra", "climi", "zolla", "suono", "acque", "perle", "melme", "curva", "tetre", "avare", "guide", "ardue", "nuove", "molti", "pesto", "troni", "entro", "picco", "bomba", "menta", "opino", "terse", "reale", "spade", "piede", "sulle", "amici", "usino", "scudi", "rocce", "sorda", "colpa", "sondi", "circa", "metti", "sazie", "citai", "oppio", "osati", "parte", "ferii", "cervo", "radia", "stufo", "falde", "nafta", "fusto", "vario", "buone", "lambi", "ladra", "mieta", "fende", "umili", "foche", "emulo", "torni", "univa", "cinta", "torta", "darne", "negro", "isole", "crani", "perso", "gusci", "rughe", "zampe", "burle", "farai", "frati", "lotto", "passi", "media", "lutti", "cicca", "conii", "bendi", "falda", "salmo", "finge", "zappi", "scuso", "buona", "panni", "tasso", "aglio", "piuma", "serve", "cesti", "usati", "rapii", "narro", "violo", "lampo", "punto", "lussi", "espia", "crete", "spose", "gessi", "celai", "parto", "tosse", "amino", "botte", "siepi", "farci", "braci", "bachi", "esito", "corda", "bagni", "rioni", "cessi", "bravi", "zitta", "muove", "cieli", "lasci", "tenti", "dorsi", "eluse", "priva", "vieta", "volte", "micce", "vissi", "suore", "ramai", "orlai", "siete", "epuro", "vinti", "burlo", "stavo", "salva", "posai", "tassa", "aliti", "messo", "firmi", "siero", "dubbi", "corra", "litro", "sparo", "carta", "nasce", "punti", "rasoi", "muffa", "ritmi", "lorde", "carne", "snodi", "borie", "calco", "crepe", "eredi", "tosai", "sugli", "disto", "dirmi", "nuovo", "mandi", "giace", "odino", "zolfo", "umana", "scali", "farne", "dogma", "rompa", "arida", "ressa", "puzzi", "vuole", "pigro", "fogne", "panno", "gioco", "rozza", "porge", "dinne", "tolse", "lavai", "bisce", "rende", "retro", "pulsi", "usura", "ebrea", "oliva", "razze", "vispe", "sfoci", "siate", "magra", "forzi", "unica", "russa", "mesta", "santa", "polpe", "sassi", "vezzo", "lacca", "reali", "usato", "torti", "lepri", "buffo", "avaro", "sonda", "largo", "agire", "oblia", "furbo", "girai", "tigna", "cieco", "libri", "nonno", "polsi", "trema", "sgelo", "snodo", "lardo", "multe", "prede", "vendi", "ampie", "aureo", "ferri", "punte", "pulii", "pensa", "state", "crepi", "avere", "fughe", "prese", "dillo", "farla", "lusso", "monte", "funge", "risma", "ascia", "scuro", "arare", "venni", "reati", "leggo", "frane", "dille", "obero", "pegni", "zanna", "somma", "passa", "bella", "crepo", "conto", "buffe", "liceo", "gocce", "onora", "fallo", "casto", "cremo", "golfo", "cessa", "gravi", "mozze", "arava", "globo", "darti", "frano", "campo", "tenue", "piove", "potra", "butta", "avevo", "darmi", "birra", "culti", "sfera", "sceso", "pazze", "copri", "afone", "olive", "avara", "umidi", "vispo", "farei", "privi", "poppa", "lieti", "senno", "tozza", "fatte", "pungo", "leghe", "invio", "astro", "tetro", "pezza", "torte", "educo", "oziai", "corso", "cambi", "pulce", "tante", "dilui", "foste", "tappo", "tonda", "amari", "gonna", "sfere", "situo", "bramo", "atrio", "lerci", "rapai", "tizio", "aduli", "terna", "amate", "porta", "vasto", "belle", "zolle", "amati", "arate", "armai", "torna", "nutri", "bagna", "tibia", "fitta", "balzi", "parli", "vaste", "tarpo", "turai", "scadi", "goffe", "sacco", "mondi", "pista", "pegno", "pezzi", "mazze", "amata", "ansia", "bulbo", "punsi", "bolla", "aurea", "afoso", "ovili", "pigra", "cozzo", "quota", "teste", "burro", "dimmi", "gambo", "prode", "snoda", "folti", "esimi", "benda", "notte", "guado", "spiro", "tombe", "golfi", "purgo", "buoni", "farvi", "trova", "usava", "zaini", "nuova", "rette", "molte", "pelle", "ruoli", "frugo", "burli", "torbe", "amica", "sommo", "rossa", "molle", "staro", "cieca", "casco", "crude", "offri", "talco", "fosco", "carri", "riave", "preti", "treni", "forme", "afosa", "trita", "usata", "conta", "crisi", "degni", "porlo", "forza", "sesso", "fiore", "aridi", "mazza", "puzze", "vento", "darei", "tassi", "lessi", "amava", "spara", "piedi", "tessi", "gobbe", "demmo", "donai", "regni", "attui", "colma", "scovo", "oblio", "vizia", "bieco", "stava", "monto", "barbe", "merci", "gambe", "sonde", "adula", "tuffi", "viste", "omero", "tergo", "formo", "neghi", "colli", "stufi", "vallo", "pompo", "aride", "epici", "curvo", "nunzi", "fiori", "menai", "pesti", "salpa", "fessi", "stime", "pieni", "tosta", "reggo", "aurei", "messi", "nutre", "odono", "rendi", "unite", "resta", "fugga", "nonni", "toste", "rubai", "zitto", "riavi", "dazio", "colpo", "orari", "ressi", "lesso", "salvo", "sfama", "orafa", "rullo", "idoli", "bozza", "versa", "tenta", "tolga", "corsi", "agito", "sloga", "buchi", "rulla", "tonno", "parsa", "fette", "provo", "aerei", "errai", "carni", "orale", "letta", "ansie", "garbo", "sfogo", "garze", "messe", "cicli", "santo", "onice", "presa", "serro", "batta", "quote", "norme", "ameni", "ricci", "creai", "emani", "tutti", "stata", "fasce", "busto", "nappa", "grado", "sigle", "giogo", "cosce", "drago", "verbi", "manzi", "tonti", "elica", "sazio", "santi", "calve", "esule", "medie", "amaca", "raspa", "serva", "stive", "preda", "linee", "siedo", "cuoio", "nonna", "tacco", "corri", "getti", "espio", "pizze", "calza", "retto", "grazi", "calme", "speso", "lungo", "piega", "spago", "falla", "sessi", "gamma", "andai", "tazze", "quoti", "isoli", "pinne", "cenno", "magre", "ameno", "puzza", "rotti", "smise", "cigli", "odiai", "onoro", "pazzo", "suini", "padri", "treno", "suoni", "bello", "punge", "poeta", "sarta", "pompi", "aduna", "riava", "dalla", "svaga", "palma", "seppi", "udire", "appai", "calci", "quale", "degli", "mappe", "bocci", "ebree", "degne", "arino", "fatto", "erigi", "lacci", "brano", "calma", "becco", "ronde", "legai", "butti", "scopo", "epico", "razza", "viole", "vieti", "penso", "volle", "usate", "aravi", "tempo", "brani", "caste", "tarpa", "sodio", "datai", "afose", "corse", "entra", "scolo", "corsa", "cauta", "tersi", "senso", "serie", "falce", "negra", "valgo", "servi", "tacci", "arati", "lecca", "milza", "giovi", "fugge", "debba", "bussi", "bolle", "volpi", "fisco", "amavo", "bandi", "brodo", "uscio", "esimo", "celle", "amara", "tatto", "tesse", "poemi", "galli", "cotta", "mando", "ganci", "balzo", "nuota", "turbo", "zeppe", "bocce", "palpo", "cacci", "diari", "erede", "scavo", "lembo", "capre", "credi", "calde", "fichi", "usavo", "orchi", "tibie", "palco", "pazzi", "esame", "agile", "scava", "germi", "scesi", "falci", "vezzi", "gridi", "onori", "gravo", "ebreo", "tramo", "anche", "misto", "madre", "morto", "libra", "pasta", "laghi", "tetti", "crema", "rosso", "borgo", "verde", "mette", "aiuti", "nulla", "torno", "calmo", "serbi", "svago", "zuppe", "cetre", "marce", "penai", "buche", "saldi", "bruci", "sfili", "monti", "tetra", "giare", "gradi", "linea", "piume", "cassa", "adira", "clero", "purga", "fitti", "furto", "scala", "zappa", "porre", "bacio", "fugai", "sidro", "caldi", "viola", "sanno", "parla", "tuffa", "rulli", "sazia", "lette", "cruna", "rosse", "agita", "dirlo", "fungo", "siamo", "muore", "piani", "amero", "epica", "avari", "ronzo", "pozze", "osato", "zitti", "aravo", "vaghe", "fiero", "goffi", "vuota", "spina", "oliai", "tenia", "zeppi", "nozze", "dalle", "ruppe", "scemo", "hanno", "rombo", "versi", "potea", "sviti", "afoni", "bonta", "vampi", "prema", "resti", "brami", "mossi", "utili", "ebeti", "diete", "adora", "scusi", "aceto", "ladri", "fango", "fieni", "trame", "bisca", "animi", "tocca", "cinse", "colla", "salma", "tanfo", "tedia", "gorgo", "amare", "terme", "adagi", "selva", "tolgo", "cavai", "credo", "sposa", "amene", "russo", "verra", "ampio", "cielo", "ombre", "spuma", "cerco", "fisso", "senti", "finse", "dogmi", "avidi", "morti", "siepe", "fermo", "luogo", "cesta", "avvio", "culli", "atomi", "merli", "recai", "lesti", "salpi", "mozzi", "spesi", "sogni", "culla", "frodi", "tubai", "litri", "merlo", "zampa", "sosti", "seppe", "zecca", "lenza", "tardi", "grano", "stati", "matta", "volli", "docce", "bocca", "getta", "ciste", "termi", "trave", "costi", "giovo", "istmo", "causa", "lista", "duomi", "feste", "bande", "morte", "sondo", "porte", "ronzi", "osavi", "scafi", "tatuo", "asilo", "epoca", "cagna", "lieta", "dessi", "aduni", "spine", "lembi", "ronda", "fuoco", "lieve", "abbia", "pance", "raggi", "ululo", "antro", "tremo", "messa", "esuli", "steli", "balze", "mance", "sarai", "arano", "pulsa", "culle", "colpi", "lepre", "perse", "molta", "terre", "danzo", "dotti", "vince", "tozzi", "norma", "udita", "morso", "patta", "porvi", "avide", "umida", "risme", "pesai", "amera", "giuro", "serbo", "tardo", "prima", "capra", "prega", "mosso", "aeree", "abeti", "fitte", "video", "denti", "ovvia", "spese", "volgo", "dirai", "stola", "fieri", "dirci", "morda", "gusti", "righe", "afono", "verbo", "cozzi", "beone", "elusa", "gusta", "spera", "fiumi", "apici", "chini", "scova", "soavi", "condi", "ballo", "merce", "ritmo", "stili", "grigi", "volge", "dirle", "delle", "stile", "zoppo", "butto", "ragno", "stesi", "patti", "farsi", "muovi", "pende", "danni", "lanci", "scope", "poeti", "aspro", "disco", "darai", "piena", "sappi", "cadra", "possa", "sonni", "dosai", "speri", "campa", "brune", "grido", "adiri", "cosmo", "adulo", "succo", "scafo", "tiene", "situi", "sbavi", "copro", "vanga", "ragni", "udito", "forai", "caute", "paura", "vibri", "tenne", "zitte", "gesso", "boria", "animo", "cuoca", "osate", "volse", "morse", "buffa", "banca", "posto", "prime", "rione", "serba", "tagli", "senza", "amico", "acida", "barre", "cento", "falle", "monta", "molla", "tasto", "folta", "zaino", "dallo", "acide", "fiuti", "ebete", "falso", "filai", "forno", "attua", "mezze", "fieno", "sarte", "mesto", "ovvio", "toppe", "greco", "avido", "fogna", "altra", "certi", "grafo", "sante", "petti", "sfami", "archi", "laici", "tonta", "esime", "fossi", "fingi", "muova", "utile", "masso", "vesti", "nafte", "gomme", "mento", "aduno", "usavi", "verme", "lievi", "ozino", "cigni", "seghe", "scopi", "ninfa", "guada", "vasca", "ombra", "lordo", "cozze", "palle", "negre", "aiuta", "peste", "curve", "calvi", "orafo", "morii", "clima", "polpa", "conti", "badai", "sorti", "edere", "unico", "premi", "sogna", "casse", "pochi", "pinta", "bolli", "palpa", "vinta", "polso", "razzo", "omeri", "corvo", "tizia", "latro", "bruco", "espii", "ovile", "covai", "scuri", "grani", "liete", "cedro", "abate", "pausa", "vuoti", "bimbo", "visto", "torce", "desto", "viale", "orali", "pezze", "tirai", "erigo", "paure", "esige", "venga", "corvi", "detta", "visti", "vogai", "tigne", "manie", "manco", "esile", "cotte", "fiera", "calzo", "lessa", "zuffe", "adito", "spola", "gioia", "fosti", "mirai", "arero", "odoro", "voghi", "cesso", "ritto", "zoppi", "ruota", "spiga", "vespa", "libre", "finto", "marca", "bruno", "vibra", "metro", "prove", "parve", "scoli", "astri", "colta", "pinze", "viali", "cinto", "iride", "pizzo", "palla", "tolsi", "tulle", "trite", "pesci", "solca", "reato", "beata", "cisti", "canto", "cenai", "usano", "frani", "nervo", "duchi", "formi", "tocco", "vasti", "pesca", "torba", "acqua", "russi", "pesce", "leghi", "sordi", "velai", "tuffo", "marci", "fisse", "cotto", "stivi", "pelai", "lento", "seggi", "vette", "zuffa", "testo", "dorme", "stimo", "sigla", "brina", "prato", "invia", "sarei", "misti", "fuggi", "tigri", "talpe", "lesto", "baule", "musei", "ratto", "ghisa", "fermi", "guida", "negli", "umani", "persa", "bucce", "slogo", "zappo", "fissi", "salmi", "colme", "datti", "trovi", "dirvi", "mondo", "colai", "rombi", "dilla", "tuono", "porri", "gusto", "scemi", "vigne", "vitti", "fusti", "muoio", "udite", "masse", "tremi", "belva", "acuta", "sieda", "colmi", "obera", "miopi", "scalo", "dirsi", "opero", "sacra", "ladro", "emana", "muoia", "ampli", "segue", "penne", "offre", "mogli", "ornai", "guido", "frodo", "dormo", "lerce", "tasse", "fiuto", "sputi", "gobba", "tenda", "lisci", "tolte", "gioie", "pizza", "dotai", "batti", "legga", "brava", "tedio", "targa", "calva", "globi", "chine", "cruda", "stima", "bozze", "sette", "oblii", "ladre", "canna", "mense", "arera", "miete", "brave", "patto", "usure", "eludi", "ormai", "presi", "tappe", "amaro", "degno", "gobbo", "salse", "villa", "tergi", "fuori", "sarti", "darci", "pelli", "amena", "rotta", "emuli", "annoi", "latra", "curai", "firme", "terso", "stana", "sorde", "vinci", "sella", "gesti", "mosse", "verdi", "piana", "beati", "sorge", "salti", "cuori", "arido", "tersa", "fatta", "letti", "pinna", "perla", "dighe", "latta", "vuote", "paste", "gelsi", "prole", "aspra", "tenni", "certo", "fitto", "valga", "vanto", "scavi", "colmo", "fante", "secca", "emano", "parco", "diede", "buffi", "rotte", "pinte", "cullo", "andro", "passo", "balza", "barra", "sorta", "latte", "dissi", "bruna", "dicci", "sudai", "spada", "leggi", "alito", "corti", "faggi", "giuri", "rampe", "mutai", "nello", "bollo", "guaio", "umido", "senta", "calli", "sviai", "medio", "sotto", "aerea", "madri", "entri", "spole", "nuore", "asina", "germe", "avevi", "ranci", "petto", "fogli", "dente", "mieto", "narra", "spero", "odori", "servo", "regna", "suino", "giara", "nuoti", "fanti", "retta", "rompo", "tappi", "matte", "crudi", "calmi", "daino", "brine", "sorsi", "retti", "nuche", "negri", "tozze", "salai", "fanno", "tolti", "sorse", "sbava", "dando", "diano", "anime", "farli", "sagge", "manca", "furti", "parti", "monca", "atomo", "canti", "valli", "tatti", "radio", "cauti", "porro", "barai", "apice", "tetri", "epura", "tomba", "brama", "goffa", "lordi", "zoppa", "olino", "maggi", "stano", "gomma", "pagai", "sacri", "velli", "spiri", "certa", "carte", "colse", "osavo", "siano", "riavo", "nasco", "babbi", "umile", "brace", "tolto", "furbi", "fesso", "copre", "arata", "nevai", "valle", "viene", "pieno", "canta", "birre", "fiume", "pigli", "pigre", "attuo", "opini", "umide", "testa", "istmi", "vitto", "spazi", "scopa", "rinvi", "osare", "lenti", "ponte", "licei", "prova", "barba", "venda", "acido", "vinco", "dotto", "sopii", "offro", "tesso", "preme", "beato", "narri", "optai", "tenga", "spira", "pinza", "folle", "nullo", "sfilo", "tasca", "vispi", "abusi", "turri", "nause", "lodai", "falli", "varia", "morta", "croci", "nuovi", "sordo", "scovi", "tanto", "eviti", "premo", "false", "losca", "verso", "studi", "telai", "scada", "sopra", "aceti", "sturo", "salda", "panne", "turba", "zucca", "serra", "fummo", "tigli", "caddi", "grave", "bruni", "stato", "socio", "fruga", "pezzo", "dirla", "operi", "osano", "rendo", "coste", "abuso", "penna", "polli", "legge", "dormi", "tempi", "stani", "privo", "mozza", "udivo", "avuto", "nuoto", "dolce", "afosi", "negai", "cotti", "fonda", "antri", "imiti", "predo", "giova", "froda", "cifre", "debbo", "cromo", "grida", "monco", "salto", "avrai", "corpo", "fetta", "mosca", "paese", "sunto", "sfidi", "sedie", "metri", "dirti", "marmo", "arduo", "anima", "sozza", "liste", "corto", "alghe", "creme", "brevi", "donna", "tazza", "menti", "tonto", "marea", "vizio", "gioca", "tasti", "bravo", "bende", "ponti", "trito", "desta", "sfide", "possi", "gemme", "liana", "furba", "panca", "ricco", "aroma", "asine", "danno", "risse", "eludo", "grava", "ruote", "leoni", "sozzo", "detti", "parlo", "folte", "acute", "scale", "posta", "ritti", "zuppa", "vello", "poggi", "punta", "copra", "vagli", "uniti", "durai", "forzo", "ovale", "svito", "lotta", "gamba", "lisca", "asino", "danza", "unita", "corno", "parso", "scure", "suona", "terra", "sfido", "massa", "forni", "prodi", "setta", "volpe", "baffi", "figli", "fatti", "trono", "salme", "corpi", "siedi", "calzi", "visse", "saggi", "primi", "segui", "smisi", "ricca", "borse", "beffe", "molto", "turno", "daini", "doppi", "sviso", "fammi", "bulbi", "sosta", "penda", "darla", "tozzo", "erige", "magri", "copia", "morsi", "amori", "fesse", "laico", "vanti", "baffo", "vesto", "lotte", "mesti", "sobri", "asole", "cedri", "rotto", "pendo", "tengo", "potei", "soste", "beate", "piane", "vinto", "volgi", "gergo", "sceme", "chino", "tutte", "vendo", "porti", "renna", "batto", "resse", "muovo", "onore", "calze", "oneri", "mosci", "grafi", "sfoga", "soffi", "dagli", "asili", "abito", "stese", "suole", "farmi", "vanno", "firmo", "serri", "mazzo", "salpo", "calda", "occhi", "lunga", "aveva", "densi", "steso", "lande", "sogno", "umano", "nuora", "pollo", "tuoni", "tanta", "busti", "dotta", "mozzo", "unici", "offra", "tinto", "osava", "dammi", "basai", "scura", "causi", "cosmi", "tatua", "paghi", "evito", "leone", "avida", "vessi", "calvo", "bauli", "umori", "odora", "dovra", "multa", "opaco", "breve", "ritta", "pungi", "abiti", "costo", "ardua", "elevi", "ululi", "isolo", "tuona", "varco", "suora", "svita", "massi", "darvi", "pulci", "gremi", "frase", "salvi", "prati", "poema", "segna", "perni", "uscii", "cause", "cetra", "urlai", "degna", "denso", "aiuto", "ninfe", "vista", "iodio", "terne", "stiva", "mezza", "gelai", "getto", "busso", "volai", "oltre", "tonfi", "punse", "dista", "amore", "selci", "sensi", "lance", "lente", "resto", "lenze", "stadi", "bussa", "svisi", "grate", "vanta", "pasti", "cauto", "evita", "bersi", "darsi", "pacco", "osata", "ferie", "aspre", "laica", "avvia", "avrei", "lorda", "basta", "posso", "abile", "somme", "balla", "serio", "sbavo", "domai", "farti", "lieto", "finii", "svisa", "cozza", "magro", "larga", "forma", "eluso", "tigre", "fossa", "corna", "casti", "casta", "elogi", "solco", "nella", "alzai", "umore", "saldo", "direi", "manzo", "mamma", "miope", "ebano", "aditi", "prive", "finsi", "adiro", "stufa", "belve", "danze", "buono", "gobbi", "batte", "lilla", "corta", "frasi", "mille", "varie", "esami", "cifra", "freno", "pappa", "china", "secco", "sorso", "stesa", "pozzo", "torre", "ulula", "plebe", "torto", "museo", "vibro", "marmi", "mista", "scene", "vango", "rospo", "isola", "regno", "raspo", "tenui", "pigri", "aromi", "panna", "leste", "sullo", "cuore", "fendo", "berci", "stiri", "cigno", "bombe", "prosa", "mappa", "lesse", "miste", "draga", "della", "etere", "conci", "fessa", "ovali", "basti", "digli", "opera", "danzi", "auree", "arato", "situa", "razzi", "basso", "forze", "babbo", "belli", "stura", "balia", "veste", "verte", "fagli", "rozzo", "lutto", "gigli", "creda", "rampa", "odore", "corre", "mezzo", "bordo", "sorte", "grata", "sosia", "fanne", "crepa", "berro", "colpe", "rauca", "tende", "tutta", "vetto", "muffe", "guidi", "ebrei", "mensa", "vermi", "stole", "vuoto", "volti", "fasci", "aprii", "grato", "poppe", "tonni", "romba", "ferro", "causo", "lotti", "pasto", "piste", "aspri", "campi", "pulso", "sanai", "invii", "sonno", "tosti", "persi", "suola", "legna", "balli", "asola", "caldo", "quoto", "addii", "rossi", "stufe", "spume", "pregi", "grati", "linde", "bimba", "verga", "trama", "palpi", "ardui", "dette", "mucca", "volta", "scese", "cremi", "citta", "sturi", "seria", "esula", "zeppo", "abili", "dieta", "falsa", "gonne", "cella", "ville", "borsa", "univi", "pugni", "cacce", "vaghi", "tolta", "torri", "mossa", "marco", "bruto", "elusi", "conia", "vedra", "leale", "manda", "gallo", "rechi", "unito", "mazzi", "esiti", "perde", "corte", "vasta", "folla", "stiro", "siede", "soave", "gelso", "dovro", "fendi", "adori", "tonte", "bagno", "pesco", "sorto", "plico", "pompe", "lampi", "bimbe", "vetta", "padre", "elevo", "avvii", "vinte", "fondi", "pompa", "legno", "sieri", "vetri", "agiti", "tieni", "danna", "poche", "calai", "educa", "festa", "nelle", "orafe", "altri", "trote", "sosto", "diedi", "furbe", "mangi", "selve", "abete", "vesso", "cenni", "collo", "barca", "melma", "ratti", "podio", "rozze", "caffe", "copie", "puzzo", "rissa", "cervi", "vinai", "garza", "tonde", "tondo", "afona", "sedia", "tetto", "milze", "colto", "beffa", "venti", "lindo", "tanti", "acuto", "scesa", "brodi", "tossi", "giura", "pecco", "vieto", "scema", "trota", "acidi", "carro", "piace", "corro", "ruolo", "sorci", "tatui", "circo", "travi", "facci", "solai", "notti", "agili", "aereo", "raspi", "sacro", "grana", "renne", "banda", "darle", "togli", "sposo", "provi", "orafi", "edera", "letto", "pozza", "selle", "folto", "colti", "burla", "dacci", "cagne", "terzo", "pozzi", "balie", "dirne", "bugia", "dello", "sozzi", "tinta", "basto", "paesi", "tarpi", "sommi", "morsa", "tanga", "volto", "scuse", "creta", "sasso", "ritte", "pugno", "landa", "disti", "crudo", "tutto", "crune", "fiere", "leali", "salsa", "tosto", "ordii", "freni", "opina", "scena", "pappe", "sposi", "andra", "conte", "forse", "notai", "losco", "ferme", "segni", "metto", "gesto", "bimbi", "tinte", "primo", "vessa", "stimi", "dolci", "trovo", "cuoco", "prego", "ciclo", "duomo", "dieci", "udiva", "vegli", "amavi", "crede", "detto", "plebi", "zoppe", "trami", "usare", "porse", "latri", "frate", "turni", "rauco", "farlo", "triti", "toghe", "vispa", "sedai", "rozzi", "zeppa", "gonfi", "pause", "cadde", "sfida", "scudo", "oberi", "tonfo", "miele", "stelo", "atrii", "gemma", "unire", "dorso", "bendo", "conio", "abbai", "fondo", "fumai", "sacre", "bruti", "fingo"],
      La = ["abaco", "abata", "abato", "abavi", "abavo", "abaya", "abbui", "abita", "abuna", "acari", "acaro", "acati", "acato", "acazi", "accia", "accio", "aceri", "acero", "acese", "acesi", "aceta", "achea", "achee", "achei", "acheo", "acile", "acili", "acini", "acino", "acori", "acoro", "acqui", "acquo", "actea", "actee", "acuii", "acume", "acumi", "adale", "adali", "addai", "addua", "addui", "adduo", "adesa", "adese", "adesi", "adeso", "adima", "adimi", "adimo", "adipe", "adipi", "adire", "adita", "adite", "adiva", "adivi", "adivo", "adobe", "adona", "adone", "adoni", "adono", "adoxa", "adoxe", "adusa", "aduse", "adusi", "aduso", "aequo", "aerai", "afaca", "afata", "afate", "afati", "afato", "afeli", "afeta", "afeti", "afide", "afidi", "afnii", "afnio", "agama", "agame", "agami", "agamo", "agape", "agapi", "agata", "agate", "agave", "agavi", "aggio", "agiai", "agino", "agite", "agiva", "agivi", "agivo", "agone", "agoni", "agora", "aguti", "aiace", "aiaci", "aiata", "aiate", "aiola", "aiole", "aioli", "aiolo", "aione", "aioni", "aitai", "aiuga", "aizza", "aizzi", "aizzo", "alaci", "alala", "alale", "alali", "alalo", "alami", "alane", "alani", "alano", "alare", "alari", "alata", "alate", "alati", "alato", "alava", "alavi", "alavo", "albio", "alcea", "alcee", "alche", "aldio", "alesa", "alese", "alesi", "aleso", "algia", "algie", "aliai", "alibi", "alice", "alici", "alida", "alide", "alidi", "alido", "alimi", "alimo", "alino", "alita", "alite", "allea", "allee", "allei", "alleo", "almea", "almee", "alobi", "alona", "alone", "aloni", "alono", "alosa", "alose", "alpha", "altea", "altee", "alula", "alule", "alvei", "alveo", "amaci", "amala", "amale", "amali", "amalo", "amami", "amane", "amasi", "ambia", "ambii", "ambio", "ambra", "ambre", "ameba", "amebe", "amida", "amide", "amidi", "amido", "amiga", "amigo", "amile", "amili", "amina", "amine", "ammai", "amnii", "amnio", "amomi", "amomo", "ampia", "amuli", "amulo", "anale", "anali", "anari", "ancia", "anela", "anele", "aneli", "anelo", "aneti", "aneto", "angla", "angle", "angli", "anglo", "angue", "angui", "anice", "anici", "anile", "anili", "annua", "annue", "annui", "annuo", "anobi", "anodi", "anodo", "anona", "anone", "ansai", "ansio", "anura", "anure", "anuri", "anuro", "aonia", "aonie", "aonio", "aorta", "aorte", "apale", "apali", "apate", "apide", "apidi", "apina", "apine", "apira", "apire", "apiri", "apiro", "apnea", "apnee", "apoda", "apode", "apodi", "apodo", "appia", "appie", "appio", "apula", "apule", "apuli", "apulo", "araba", "arabe", "arabi", "arabo", "araci", "arala", "arale", "arali", "aralo", "arama", "arame", "arami", "aramo", "arane", "arara", "arcai", "arche", "arcua", "arcui", "arcuo", "ardea", "ardee", "ardii", "areai", "areca", "arena", "arene", "areni", "areno", "arese", "aresi", "argea", "argee", "argei", "argeo", "arghi", "arile", "arili", "arnia", "arnie", "arpia", "arpie", "arsii", "artai", "artoa", "artoe", "artoi", "artoo", "asada", "asado", "asana", "asari", "asaro", "aschi", "ascio", "asoli", "asolo", "assai", "astia", "astio", "atava", "atave", "atavi", "atavo", "atele", "ateli", "atona", "atone", "atoni", "atono", "attai", "attea", "attee", "attei", "atteo", "audio", "auffa", "augna", "augni", "augno", "aulii", "aurai", "avana", "avena", "avene", "averi", "avita", "avite", "aviti", "avito", "avoca", "avoco", "avola", "avole", "avoli", "avolo", "avori", "avuta", "avute", "avuti", "axone", "axoni", "azera", "azere", "azeri", "azero", "azide", "azidi", "azima", "azime", "azimi", "azimo", "azina", "azine", "azoni", "azota", "azoti", "azoto", "azuki", "babao", "bacai", "bacca", "bacco", "bacie", "bacii", "badge", "badgi", "badia", "badie", "baele", "baeli", "bagli", "bagne", "baiai", "baili", "bailo", "baino", "baita", "baite", "bakka", "bakke", "bakki", "bakko", "balba", "balbe", "balbi", "balbo", "balco", "balda", "balde", "baldi", "baldo", "balii", "balio", "balle", "balma", "balme", "balsa", "balse", "balta", "balte", "balti", "balto", "bamba", "bambe", "bambi", "bambo", "banaa", "banae", "banai", "banao", "banco", "bando", "bangi", "banjo", "banna", "banni", "banno", "barbi", "barbo", "barco", "barda", "barde", "bardi", "bardo", "baria", "barie", "barii", "bario", "barri", "barro", "basca", "basco", "basii", "basse", "bassi", "baste", "batua", "baula", "baulo", "bauta", "baute", "bazza", "bazze", "beaci", "beala", "beale", "beali", "bealo", "beami", "beane", "beano", "beare", "beava", "beavi", "beavo", "becca", "beffi", "beffo", "begai", "beggi", "beghe", "beghi", "begia", "begli", "beige", "beigi", "beino", "beisa", "beise", "belai", "belga", "belgi", "belii", "belio", "benai", "benna", "benne", "beola", "beole", "beona", "beota", "beote", "beoti", "berla", "berle", "berli", "berma", "berme", "bermi", "berne", "berta", "berte", "berti", "bervi", "besce", "besci", "bessa", "besse", "bessi", "besso", "betta", "bette", "beuta", "beute", "bevei", "bevve", "bevvi", "bezzi", "bezzo", "biada", "biade", "biadi", "biado", "biava", "biave", "biavi", "biavo", "bibbi", "biche", "bieca", "bieta", "biete", "biffa", "biffe", "biffi", "biffo", "bighe", "bighi", "bigia", "bigie", "bigio", "bilia", "bilie", "binai", "binda", "binde", "bindi", "binga", "binge", "bingo", "biodi", "biodo", "bioma", "biomi", "biosi", "biova", "biove", "birba", "birbe", "birbi", "birbo", "birce", "birci", "birri", "birro", "bissa", "bissi", "bisso", "bista", "biste", "bisti", "bitta", "bitte", "bitti", "bitto", "biuta", "biute", "biuti", "biuto", "bivio", "bizza", "bizze", "blesa", "blese", "blesi", "bleso", "blini", "blumi", "blumo", "blusa", "bluse", "boari", "boaro", "boati", "boato", "bobba", "bobbi", "bobbo", "bocco", "bocia", "boema", "boeme", "boemi", "boemo", "boera", "boere", "boeri", "boero", "boghe", "boide", "boidi", "boite", "boldi", "boldo", "bolge", "bolsa", "bolse", "bolsi", "bolso", "bombi", "bombo", "bongo", "bonne", "bonza", "bonze", "bonzi", "bonzo", "borda", "borde", "borea", "borei", "borii", "borio", "borni", "borra", "borre", "borri", "borro", "bossi", "bosso", "botri", "botro", "botti", "botto", "boule", "boxai", "bozzi", "bozzo", "braca", "braco", "brada", "brade", "bradi", "brado", "braga", "brago", "braii", "brame", "brasa", "brasi", "braso", "bremi", "bremo", "breva", "brice", "brici", "brida", "bride", "briga", "brige", "brigi", "brigo", "brini", "brino", "broda", "brode", "broge", "brogi", "broli", "brolo", "bromi", "bromo", "brova", "brovi", "brovo", "bruca", "brugi", "brugo", "bruii", "bruma", "brume", "bruta", "brute", "bruzi", "buana", "bubai", "bucai", "bucci", "bucio", "budda", "buddi", "bufai", "bugio", "bugli", "bugna", "bugne", "bugni", "bugno", "buina", "buine", "bulai", "bulla", "bulle", "bulli", "bullo", "bumba", "bumbe", "burba", "burbe", "burga", "burka", "burqa", "busaa", "busae", "busai", "busao", "busca", "busco", "bushi", "busse", "busta", "buste", "butte", "buzza", "buzze", "buzzi", "buzzo", "bwaka", "bwana", "caaba", "cabla", "cabli", "cablo", "cabra", "cabri", "cabro", "cacai", "cacca", "cache", "cachi", "cacia", "cacio", "cacti", "cacto", "cadmi", "caffa", "caffi", "caffo", "cafra", "cafre", "cafri", "cafro", "cagai", "caghi", "cagli", "caiba", "caibe", "caina", "caine", "caini", "caino", "calao", "calca", "calce", "calia", "calie", "calla", "calle", "calse", "calta", "calte", "camei", "cameo", "camma", "camme", "canai", "canea", "canee", "canga", "cange", "cangi", "canni", "canno", "canoa", "canoe", "cansa", "cansi", "canso", "capai", "capii", "cappa", "cappe", "cappi", "cappo", "capri", "capro", "capta", "capti", "capto", "carca", "carco", "carda", "carde", "cardi", "cardo", "cargo", "caria", "carie", "cario", "carme", "carmi", "carna", "carno", "carpa", "carpe", "carpi", "carpo", "carsi", "carso", "carvi", "casba", "casbe", "casca", "casci", "casei", "caseo", "caspa", "caspe", "caspi", "cassi", "casso", "catta", "catte", "catti", "catto", "caule", "cauli", "cauri", "cavea", "cavee", "cavia", "cavie", "cazza", "cazze", "cazzi", "cazzo", "cccii", "cccli", "cccvi", "cccxi", "cciii", "cclii", "cclvi", "cclxi", "ccvii", "ccxci", "ccxii", "ccxli", "ccxvi", "ccxxi", "cdiii", "cdlii", "cdlvi", "cdlxi", "cdvii", "cdxci", "cdxii", "cdxli", "cdxvi", "cdxxi", "cecai", "cecca", "ceche", "cechi", "cecio", "cedei", "cedra", "cedua", "cedue", "cedui", "ceduo", "ceffa", "ceffi", "ceffo", "ceiba", "ceibe", "celia", "celie", "celio", "celli", "cello", "celta", "celte", "celti", "celto", "celzi", "cenci", "cenge", "cengi", "cenna", "censi", "censo", "ceppa", "ceppe", "ceppi", "ceppo", "cerai", "cerci", "cerea", "ceree", "cerei", "cereo", "cerii", "cerio", "cerna", "cerne", "cerni", "cerno", "cerri", "cerro", "cerva", "cerve", "cesia", "cesie", "cesio", "cespi", "cespo", "cesse", "ceste", "cesto", "chela", "chele", "cheli", "cheta", "chete", "cheti", "cheto", "chile", "chili", "chilo", "chimi", "chimo", "chita", "chiti", "chito", "cholo", "chope", "ciaba", "ciabi", "ciabo", "ciana", "ciane", "ciani", "ciano", "ciati", "ciato", "ciazi", "cibai", "cicce", "cicci", "cicco", "ciche", "cidia", "cidie", "cidio", "ciesa", "ciese", "cifri", "cifro", "cigna", "cigne", "cimai", "cimba", "cimbe", "cince", "cinga", "cinge", "cingi", "cingo", "cinsi", "cinte", "cinti", "cinzi", "cioce", "ciofi", "ciofo", "cippi", "cippo", "cipri", "circe", "circi", "cirri", "cirro", "cisio", "cispa", "cispe", "cista", "cisto", "citte", "citti", "citto", "ciuca", "ciuco", "ciula", "ciuli", "ciulo", "clade", "cladi", "clama", "clami", "clamo", "clava", "clave", "clavi", "clavo", "cleri", "cliii", "cline", "clini", "clino", "clivi", "clivo", "clona", "clone", "cloni", "clono", "clora", "clori", "cloro", "cloze", "clune", "cluni", "clvii", "clxii", "clxvi", "clxxi", "cmiii", "cmlii", "cmlvi", "cmlxi", "cmvii", "cmxci", "cmxii", "cmxli", "cmxvi", "cmxxi", "cnidi", "coala", "coana", "coane", "coati", "cobea", "cobee", "cobla", "coble", "cobra", "cocca", "cocce", "cocci", "cocco", "coche", "codia", "codio", "coesa", "coese", "coesi", "coeso", "coeva", "coeve", "coevi", "coevo", "coffa", "coffe", "cofta", "cofte", "cofti", "cofto", "cogli", "cogni", "cogno", "coiai", "coipi", "coipo", "coire", "coita", "coite", "coiti", "coito", "coiva", "coivi", "coivo", "colca", "colco", "colei", "colga", "colgo", "colia", "colie", "colsi", "colte", "colui", "colza", "colze", "comba", "combe", "combo", "comma", "commi", "commo", "compi", "conca", "conce", "conga", "congi", "conie", "conne", "conni", "conno", "consa", "conso", "cooba", "coobi", "coobo", "coppa", "coppe", "coppi", "coppo", "copta", "copte", "copti", "copto", "coque", "corai", "corba", "corbe", "corca", "corco", "corea", "coree", "corei", "coreo", "corio", "cormi", "cormo", "corni", "cosai", "cosca", "cosci", "cosfi", "cosse", "cossi", "cosso", "cousi", "couso", "crace", "craci", "crapa", "crape", "crasi", "crena", "crene", "creni", "creno", "cresi", "creso", "crime", "crimi", "crina", "crine", "crini", "crino", "croco", "croda", "crode", "croia", "croie", "croio", "croma", "crome", "cromi", "crono", "cruci", "ctoni", "cubai", "cubia", "cubie", "cucca", "cucce", "cucci", "cucco", "cucia", "cucii", "cucio", "cueva", "cugna", "cugne", "culai", "culmi", "culmo", "culpa", "culta", "culte", "cunca", "cunce", "cunci", "cunco", "cunei", "cuneo", "cuoce", "cuoci", "cuoia", "cuora", "curda", "curde", "curdi", "curdo", "curia", "curie", "curii", "curio", "curri", "curro", "cusco", "cussi", "cusso", "cviii", "cwana", "cxcii", "cxcvi", "cxiii", "cxlii", "cxlvi", "cxvii", "cxxii", "cxxvi", "cxxxi", "dache", "dacia", "dacie", "dafne", "dafni", "daghe", "daina", "daine", "dalai", "dalia", "dalie", "dalli", "damai", "damma", "damme", "dance", "danda", "dande", "danne", "dante", "danti", "dardi", "dardo", "darli", "darlo", "daspo", "dauni", "dazia", "dccci", "dccii", "dccli", "dccvi", "dccxi", "dciii", "dclii", "dclvi", "dclxi", "dcvii", "dcxci", "dcxii", "dcxli", "dcxvi", "dcxxi", "debbi", "deche", "deghi", "delia", "delie", "delio", "delta", "denta", "dento", "derma", "dermi", "derno", "desco", "desia", "desii", "desio", "dessa", "desso", "deste", "devia", "devie", "devii", "devio", "diade", "diadi", "diale", "diali", "diana", "diane", "diapa", "diape", "diapi", "diapo", "diate", "diaza", "diaze", "diazi", "diazo", "dicai", "dicco", "diche", "dichi", "dicta", "diene", "dieni", "dieri", "diesa", "diesi", "dieso", "dieti", "dieto", "dildi", "dildo", "dilli", "dimoi", "dindi", "dindo", "dingo", "dinka", "diodi", "diodo", "dioli", "diolo", "diosi", "dipoi", "dirli", "disfa", "disfi", "disfo", "disia", "disii", "disio", "ditta", "ditte", "ditti", "diula", "djaga", "dliii", "dlvii", "dlxii", "dlxvi", "dlxxi", "doagi", "doari", "dobla", "doble", "dobli", "doblo", "dobra", "docci", "docmi", "dogai", "doghe", "doghi", "dogli", "dogre", "dolai", "dolca", "dolco", "dolga", "dolgo", "dolio", "dolse", "dolsi", "dolta", "dolte", "dolti", "dolto", "domma", "dommi", "donde", "donni", "donno", "dopai", "dorai", "doria", "dorie", "dorio", "dossi", "dosso", "doula", "doule", "dovei", "draba", "drabe", "draco", "drena", "dreni", "dreno", "drive", "droga", "drogo", "droma", "drome", "dromi", "dromo", "drone", "droni", "druda", "drude", "drudi", "drudo", "drupa", "drupe", "drusa", "druse", "drusi", "druso", "duagi", "duale", "duali", "ducai", "ducea", "ducee", "duina", "duine", "duini", "duino", "dulia", "dulie", "duole", "duoli", "duolo", "dupla", "duple", "dupli", "duplo", "durio", "durra", "durre", "dviii", "dxcii", "dxcvi", "dxiii", "dxlii", "dxlvi", "dxvii", "dxxii", "dxxvi", "dxxxi", "ebani", "ebbio", "ebbra", "ebbre", "ebbri", "ebbro", "ebeni", "ebeno", "ebeta", "ebeto", "ebola", "ebole", "ebuli", "ebulo", "echei", "echeo", "echio", "ecidi", "edace", "edaci", "edema", "edemi", "edile", "edili", "edipi", "edipo", "edita", "edite", "editi", "edito", "edona", "edone", "edoni", "edono", "educe", "educi", "edule", "eduli", "efebi", "efebo", "efesi", "efori", "eforo", "egena", "egene", "egeni", "egeno", "egida", "egide", "egira", "egire", "egizi", "ekiti", "elafe", "elafi", "eleni", "elice", "elici", "elida", "elide", "elidi", "elido", "eliea", "eliee", "elima", "elime", "elimi", "elimo", "elisa", "elise", "elisi", "eliso", "eluda", "eluii", "eluvi", "emaci", "emale", "emali", "emeri", "emero", "emesi", "emica", "emici", "emico", "emide", "emidi", "emina", "emine", "emiri", "emiro", "emise", "emisi", "emoji", "emoni", "empia", "empie", "empii", "empio", "emule", "enema", "enemi", "enfia", "enfie", "enfio", "engri", "ennea", "ennee", "ennei", "enneo", "enoli", "enolo", "enula", "enule", "eolia", "eolie", "eolio", "epodi", "epodo", "equai", "erada", "erade", "eradi", "erado", "erari", "erasa", "erase", "erasi", "eraso", "erbai", "erbio", "erebi", "erebo", "ereda", "eredo", "eremi", "eremo", "ereta", "ereti", "ereto", "erica", "eriga", "ernia", "ernie", "ernio", "eroda", "erode", "erodi", "erodo", "eroga", "erogo", "erosa", "erose", "erosi", "eroso", "eruca", "erula", "erule", "eruli", "erulo", "erzya", "esala", "esali", "esalo", "esani", "esano", "eschi", "esiga", "esigi", "esigo", "esima", "esipi", "esipo", "esita", "esizi", "esodi", "esodo", "esone", "esoni", "esora", "esori", "esoro", "esosa", "esose", "esosi", "esoso", "essai", "estia", "estie", "estii", "estio", "estri", "estro", "estua", "estui", "estuo", "esulo", "esuma", "esumi", "esumo", "etani", "etano", "etate", "etati", "etene", "eteni", "etera", "eteri", "etero", "etesi", "etica", "etici", "etico", "etile", "etili", "etimi", "etimo", "etini", "etino", "etnea", "etnee", "etnei", "etneo", "etnia", "etnie", "etola", "etole", "etoli", "etolo", "eutri", "evada", "evade", "evadi", "evado", "evasa", "evase", "evasi", "evaso", "evira", "eviri", "eviro", "evoca", "evoco", "extra", "fabri", "fabro", "facto", "faida", "faide", "faina", "faine", "falba", "falbe", "falbi", "falbo", "falca", "faldi", "faldo", "famai", "fanga", "farce", "farda", "farde", "farea", "farri", "farro", "farsa", "farse", "farso", "fasai", "fasta", "faste", "fasti", "fasto", "fatai", "fatua", "fatue", "fatui", "fatuo", "fatwa", "fauce", "fauci", "fauna", "faune", "fauni", "fauno", "fauve", "favai", "faxai", "feace", "feaci", "febea", "febee", "febei", "febeo", "fecce", "fedai", "felce", "felci", "fella", "felle", "felli", "fello", "felpa", "felpe", "felpi", "felpo", "felse", "felsi", "felze", "felzi", "femme", "fence", "fenda", "feria", "ferla", "ferle", "ferra", "fersa", "ferse", "ferva", "ferve", "fervi", "fervo", "ferza", "ferze", "ferzi", "ferzo", "festi", "festo", "feudi", "feudo", "fiaba", "fiabe", "fiala", "fiale", "fiani", "fiano", "fiata", "fiate", "fiati", "fiato", "fibra", "fibre", "ficca", "ficco", "ficea", "ficee", "fiche", "fidai", "fiele", "fieli", "fighe", "fighi", "filli", "fillo", "filma", "filmi", "filmo", "filza", "filze", "finca", "finga", "finna", "finne", "finni", "finno", "finta", "finte", "finti", "fioca", "fioco", "fiora", "fioro", "fiote", "fioti", "fisai", "flake", "flana", "flani", "flano", "flati", "flato", "flava", "flave", "flavi", "flavo", "flebo", "fleti", "fleto", "flora", "flore", "fobia", "fobie", "focea", "focee", "focei", "foceo", "fochi", "fodri", "fodro", "fogge", "foggi", "foghe", "fogni", "fogno", "foiba", "foibe", "folce", "folco", "folio", "folli", "follo", "fonai", "fonde", "fonia", "fonie", "fonte", "fonti", "forca", "force", "forci", "forge", "forgi", "forra", "forre", "fosca", "fosso", "fotta", "fotte", "fotti", "fotto", "fovea", "fovee", "fraga", "frale", "frali", "frame", "frega", "fregi", "frego", "frema", "freme", "fremi", "fremo", "frena", "fresa", "frese", "fresi", "freso", "frigi", "frigo", "frine", "frini", "frisa", "frisi", "friso", "froci", "frode", "froge", "fruii", "ftori", "ftoro", "fuchi", "fuffa", "fuffe", "fuggo", "fulbe", "fulbi", "fulga", "fulge", "fulgi", "fulgo", "fulsa", "fulse", "fulsi", "fulso", "fulva", "fulve", "fulvi", "fulvo", "fumea", "fumee", "fumei", "fumeo", "fumma", "fummi", "funai", "fundo", "funga", "fungi", "funse", "funsi", "funta", "funte", "funti", "funto", "furai", "furca", "furia", "furie", "furio", "fusai", "fusta", "fuste", "fuxia", "fuxie", "gabba", "gabbi", "gabbo", "gaela", "gaele", "gaeli", "gaelo", "gaffa", "gaffe", "gagge", "gaggi", "galea", "galee", "galei", "galeo", "galgo", "galio", "galla", "galle", "gamia", "gamie", "gamme", "ganda", "gande", "ganga", "gange", "ganza", "ganze", "ganzi", "ganzo", "garba", "garbe", "garbi", "garga", "gargo", "garni", "garzi", "garzo", "gasai", "gasco", "gassa", "gasse", "gassi", "gasso", "gatta", "gatte", "gatti", "gatto", "gauda", "gaude", "gaudi", "gaudo", "gauge", "gauli", "gaulo", "gauta", "gaute", "gauti", "gauto", "gazai", "gazza", "gazze", "gazzi", "gazzo", "gechi", "gelao", "gelsa", "gelse", "gemei", "gemmi", "gemmo", "genai", "genia", "genie", "genoa", "genti", "genue", "geode", "geodi", "geomi", "gerba", "gerbe", "gerla", "gerle", "gerli", "gerlo", "germa", "gessa", "gesta", "ghali", "ghega", "ghegi", "ghego", "ghiri", "ghiro", "ghise", "giaci", "giaco", "giada", "giade", "giani", "giano", "giava", "giave", "gibbi", "gibbo", "gighe", "gilda", "gilde", "gimmo", "ginna", "ginni", "ginno", "gioio", "girci", "girei", "girii", "girio", "girla", "girle", "girli", "girlo", "girmi", "girne", "girsi", "girti", "girvi", "gisse", "gissi", "giste", "gisti", "gitta", "gitti", "gitto", "giuba", "giube", "giuda", "giuli", "giure", "giuso", "gladi", "gleba", "glebe", "glena", "glene", "gleni", "glifi", "glifo", "globe", "glomi", "glomo", "glori", "gluma", "glume", "gnidi", "gnome", "gnomi", "gnomo", "gnosi", "gnuda", "gnude", "gnudi", "gnudo", "gocci", "godei", "godii", "godio", "gogna", "gogne", "goldi", "golea", "golei", "goleo", "golia", "golpe", "gombe", "gombi", "gombo", "gommi", "gommo", "gonda", "gonde", "gondi", "gondo", "gonfa", "gonfe", "gonfo", "gonga", "gonio", "gonja", "gonza", "gonze", "gonzi", "gonzo", "gordi", "gorga", "gorge", "gorna", "gorne", "gotha", "gotta", "gotte", "gotti", "gotto", "gouda", "gozzi", "gozzo", "grada", "grade", "graia", "graie", "graii", "graio", "grama", "grame", "grami", "gramo", "greca", "greci", "greti", "greto", "greve", "grevi", "grica", "grici", "grico", "gride", "grifa", "grifi", "grifo", "grola", "grole", "groma", "grome", "grufa", "grufi", "grufo", "gruga", "grugo", "gruma", "grume", "grumi", "grumo", "grusi", "guaco", "guade", "guaii", "guani", "guano", "guata", "guati", "guato", "gufai", "guina", "guini", "guino", "guisa", "guise", "gurge", "gurgi", "gusla", "gutea", "gutee", "gutei", "guteo", "gutti", "gutto", "guzla", "guzle", "gwari", "hafni", "haida", "hakka", "hallo", "hamza", "haute", "hedge", "hello", "henna", "henne", "hevea", "hevee", "hindi", "hokka", "hokke", "hokki", "hokko", "holmi", "house", "huave", "huavi", "huchi", "hudna", "iacea", "iacee", "iarda", "iarde", "ibera", "ibere", "iberi", "ibero", "iblea", "iblee", "iblei", "ibleo", "icari", "icena", "icene", "iceni", "iceno", "icona", "icone", "icore", "icori", "idali", "iddia", "iddie", "iddio", "ideai", "idria", "idrie", "iella", "ielle", "iesta", "ieste", "iesti", "iesto", "ietta", "ietti", "ietto", "ifale", "ifali", "ifema", "ifemi", "igloo", "ignea", "ignee", "ignei", "igneo", "ilare", "ilari", "ilice", "ilici", "ilide", "ilidi", "illea", "illee", "illei", "illeo", "ilota", "ilote", "iloti", "image", "imago", "imani", "imano", "imati", "imene", "imeni", "inala", "inali", "inalo", "inane", "inani", "incoa", "incoi", "incoo", "india", "indie", "indio", "infoi", "infra", "ingoi", "ingri", "inlei", "inlui", "inmia", "inmio", "inoli", "inoma", "inomi", "inope", "inopi", "insce", "insci", "insta", "insti", "insto", "intra", "intro", "inula", "inule", "inuma", "inumi", "inumo", "invai", "iodai", "ioide", "ioidi", "iolla", "iolle", "ionia", "ionie", "ionio", "ipate", "ipati", "ippia", "ippie", "ippii", "ippio", "irace", "iraci", "irata", "irate", "irati", "irato", "irchi", "irida", "iridi", "irido", "irite", "iriti", "iroki", "iroko", "irosa", "irose", "irosi", "iroso", "irula", "ischi", "isodi", "isopi", "isopo", "issai", "istai", "istle", "isuri", "isuro", "itaci", "itaco", "itala", "itale", "itali", "italo", "itera", "iteri", "itero", "iucca", "iulca", "iulco", "iurta", "iurte", "ivata", "ivate", "ivati", "ivato", "joule", "jumbo", "junci", "junco", "kaaba", "kakwa", "kamti", "kanji", "kansa", "kaone", "kaoni", "kappa", "karma", "kasba", "kendo", "khasi", "kiowa", "kissi", "kitai", "kiwai", "koala", "konde", "kondi", "konga", "konge", "kongi", "kongo", "konta", "kulla", "kulle", "kulli", "kullo", "kunta", "kurda", "kurde", "kurdi", "kurdo", "kwena", "kyrie", "labbi", "labbo", "labda", "labio", "labri", "labro", "lacce", "lacco", "lagna", "lagne", "lagni", "lagno", "laida", "laide", "laidi", "laido", "lamai", "lamba", "lambe", "lambo", "lamia", "lamie", "lamio", "lampa", "lampe", "lanca", "lanea", "lanee", "lanei", "laneo", "lanfa", "lanfe", "langa", "lange", "lania", "lanio", "lanzi", "lanzo", "lappa", "lappe", "lappi", "lappo", "larda", "lardi", "large", "larva", "larve", "larvi", "larvo", "lasca", "lasco", "lassa", "lasse", "lassi", "lasso", "lasta", "laste", "latti", "latto", "lauda", "laude", "laudi", "laura", "laure", "lauri", "lauro", "lauta", "laute", "lauti", "lauto", "lavia", "lavie", "lavra", "lavre", "lazza", "lazze", "lazzi", "lazzo", "lebbi", "lecce", "lella", "lelle", "lelli", "lello", "lemma", "lemme", "lemmi", "lemmo", "lemna", "lemne", "lenca", "lenci", "lenea", "lenee", "lenei", "leneo", "lenii", "lenzi", "lenzo", "leppa", "leppi", "leppo", "lepra", "lesbi", "lesbo", "lesca", "letea", "letee", "letei", "leteo", "letri", "letro", "leuca", "leuci", "leuco", "leuti", "leuto", "lezia", "lezie", "lezio", "lezza", "lezze", "lezzi", "lezzo", "liane", "libai", "licci", "licia", "licie", "licio", "lidia", "lidie", "lidio", "lifta", "lifti", "lifto", "ligei", "ligeo", "ligia", "ligie", "ligio", "ligre", "ligri", "limai", "limbi", "limbo", "limii", "limio", "limma", "limmi", "linai", "lince", "linci", "linei", "lineo", "linfa", "linfe", "lingi", "linka", "linki", "linko", "lippa", "lippe", "lippi", "lippo", "liqua", "liqui", "liquo", "lisai", "lisce", "lissa", "lisse", "lissi", "lisso", "listi", "listo", "litai", "litio", "litra", "litre", "litta", "litte", "litui", "lituo", "liuti", "liuto", "lizza", "lizze", "lizzi", "lizzo", "locai", "locca", "locco", "lochi", "lodge", "loffa", "loffe", "loffi", "loffo", "lofio", "logga", "logge", "loggo", "loghi", "logia", "logli", "logra", "logri", "logro", "loica", "loici", "loico", "lolla", "lolle", "lombi", "lombo", "lompi", "lompo", "longa", "longo", "lonza", "lonze", "loppa", "loppe", "loppi", "loppo", "lorio", "lucci", "lucco", "lucea", "lucei", "luchi", "lucia", "lucie", "lucra", "lucri", "lucro", "ludra", "ludre", "ludri", "ludro", "luena", "luese", "luesi", "luffa", "luffe", "lugli", "lugre", "lugri", "lugro", "luigi", "lulla", "lulle", "lumai", "lumia", "lumie", "lumpi", "lumpo", "lunda", "lungi", "lurca", "lurco", "lusca", "lusco", "lussa", "lutai", "lutea", "lutee", "lutei", "luteo", "lutta", "luvia", "luvie", "luvii", "luvio", "lviii", "lxiii", "lxvii", "lxxii", "lxxvi", "lxxxi", "lycra", "macao", "macca", "macco", "machi", "macho", "macia", "macie", "macro", "madia", "madie", "mafia", "mafie", "mafio", "magai", "maghe", "maghi", "magia", "magie", "magio", "magli", "magma", "magmi", "magna", "magne", "magni", "magno", "maide", "maidi", "maina", "maini", "maino", "malga", "malgo", "malia", "malie", "malli", "mallo", "malta", "malte", "malti", "malto", "malva", "malve", "mamba", "mambi", "mambo", "mammi", "mammo", "manaa", "manae", "manai", "manao", "mande", "manga", "mango", "manna", "manne", "mansa", "manse", "mansi", "manso", "manta", "mante", "manti", "manto", "manza", "manze", "maona", "maone", "maori", "mappi", "mappo", "margi", "margo", "marma", "marna", "marne", "marni", "marno", "marra", "marre", "marsa", "marse", "marsi", "marso", "marza", "marze", "marzi", "masai", "masti", "maura", "maure", "mauri", "mauro", "mauve", "mauvi", "mbaka", "mbaya", "mccci", "mccii", "mccli", "mccvi", "mccxi", "mcdii", "mcdli", "mcdvi", "mcdxi", "mciii", "mclii", "mclvi", "mclxi", "mcmii", "mcmli", "mcmvi", "mcmxi", "mcvii", "mcxci", "mcxii", "mcxli", "mcxvi", "mcxxi", "mdcci", "mdcii", "mdcli", "mdcvi", "mdcxi", "mdiii", "mdlii", "mdlvi", "mdlxi", "mdvii", "mdxci", "mdxii", "mdxli", "mdxvi", "mdxxi", "meaci", "meala", "meale", "meali", "mealo", "meami", "meane", "meano", "meare", "meata", "meate", "meati", "meato", "meava", "meavi", "meavo", "mecca", "meino", "mekea", "mekee", "mekei", "mekeo", "melai", "melba", "melda", "melde", "meldi", "meldo", "melia", "melie", "melii", "melio", "meloe", "meloi", "mence", "menci", "menda", "mende", "mendi", "mendo", "menga", "menri", "meoni", "meoti", "merca", "merco", "merda", "merde", "merga", "merge", "mergi", "mergo", "meria", "merie", "merio", "merla", "merle", "mersa", "merse", "mersi", "merso", "mesca", "mesce", "mesci", "mesco", "meste", "meteo", "miasi", "micca", "micci", "micco", "miche", "micia", "micie", "micio", "micro", "mieli", "migma", "migmi", "migra", "migri", "migro", "milia", "milio", "mimai", "mimma", "mimme", "mimmi", "mimmo", "minai", "minea", "minee", "minei", "mineo", "minga", "minge", "mingi", "mingo", "minia", "minio", "minna", "minne", "minse", "minsi", "mioma", "miomi", "miosi", "mirra", "mirre", "mirri", "mirro", "mirti", "mirto", "misia", "misie", "misii", "misio", "missa", "missi", "misso", "mitra", "mitre", "mitri", "mitro", "mitti", "mitto", "mixai", "mliii", "mlvii", "mlxii", "mlxvi", "mlxxi", "mmcii", "mmcvi", "mmiii", "mmlii", "mmlvi", "mmlxi", "mmvii", "mmxci", "mmxii", "mmxli", "mmxvi", "mmxxi", "mocci", "mochi", "mocoa", "modio", "moggi", "mogia", "mogie", "mogio", "moina", "moine", "moira", "moire", "molai", "molca", "molce", "molli", "mollo", "molva", "molve", "monda", "monde", "monna", "monne", "moqui", "morai", "morbi", "morbo", "morde", "mordi", "mordo", "morfi", "morfo", "moria", "morie", "morra", "morre", "morva", "morve", "mosce", "mosco", "mosti", "mosto", "motta", "motte", "motti", "motto", "mouse", "movie", "mucci", "mucco", "muchi", "mudai", "muffi", "muffo", "mufti", "mughi", "mugli", "mulsi", "mulso", "multi", "multo", "mundi", "munga", "munge", "mungi", "mungo", "munii", "munse", "munsi", "munta", "munte", "munti", "munto", "muone", "muoni", "murai", "murge", "muria", "murie", "murmi", "murra", "murre", "musai", "musco", "mussa", "musse", "mussi", "musso", "mutua", "mutue", "mutui", "mutuo", "mviii", "mwera", "mxcii", "mxcvi", "mxiii", "mxlii", "mxlvi", "mxvii", "mxxii", "mxxvi", "mxxxi", "nabla", "nabli", "nahua", "naibi", "naide", "naidi", "naira", "nakfa", "nanfa", "nanfe", "nanna", "nanne", "nante", "nanzi", "napea", "napee", "nappe", "nappi", "nappo", "narco", "nardi", "nardo", "nasai", "nasca", "nasci", "nashi", "naspi", "naspo", "nassa", "nasse", "nassi", "nasso", "nasua", "nasue", "natai", "natia", "natie", "natii", "natio", "natta", "natte", "nauta", "nauti", "ndoga", "ndoge", "ndogi", "ndogo", "nebbi", "necai", "necce", "necci", "nechi", "nembi", "nembo", "nemea", "nemee", "nemei", "nemeo", "nence", "nenci", "nenia", "nenie", "nerba", "nerbi", "nerbo", "nesce", "nesci", "nessi", "nesso", "nesta", "nesti", "nesto", "netta", "nette", "netti", "netto", "neuma", "neumi", "neura", "neure", "neuri", "neuro", "ngala", "nguni", "nibbi", "nicce", "nicci", "niego", "nievi", "nievo", "nimbi", "nimbo", "ninja", "ninna", "ninne", "ninni", "ninno", "niobi", "nisba", "nitra", "nitri", "nitro", "niuna", "niune", "niuni", "niuno", "nivea", "nivee", "nivei", "niveo", "nocca", "noema", "noemi", "noesi", "nogai", "noghi", "nomai", "nomea", "nomee", "nonio", "noria", "norie", "normi", "normo", "norna", "norne", "notta", "notto", "novai", "novio", "nudai", "nugae", "nulle", "nulli", "nummi", "nummo", "nunci", "nuoce", "nuoci", "nurse", "nutka", "nutra", "nutro", "nyala", "obbli", "obeli", "obelo", "obesa", "obese", "obesi", "obeso", "obice", "obici", "obiti", "obito", "oblai", "oboli", "obolo", "ocche", "ocimi", "ocimo", "ocrea", "ocree", "oculi", "oculo", "odano", "oddio", "odici", "odila", "odile", "odili", "odilo", "odimi", "odine", "odire", "odita", "odite", "oditi", "odito", "odiva", "odivi", "odivo", "odrai", "oecio", "ofide", "ofidi", "ofite", "ofiti", "ogiva", "ogive", "oiana", "oidio", "okapi", "oleai", "olfai", "olire", "olita", "olite", "oliti", "olito", "olivi", "olivo", "olmio", "olona", "olone", "olora", "olore", "olori", "oloro", "oltra", "omaha", "omani", "omano", "omari", "omaro", "omasi", "omaso", "ombri", "ombro", "omega", "omese", "omesi", "omini", "omino", "omise", "omisi", "omnia", "omone", "omoni", "ondai", "onera", "onere", "onero", "onese", "onesi", "onici", "onrai", "opaci", "opale", "opali", "opata", "opica", "opici", "opico", "opima", "opime", "opimi", "opimo", "oppia", "oraci", "orala", "oralo", "orami", "orane", "orano", "orare", "orata", "orate", "orati", "orato", "orava", "oravi", "oravo", "orbai", "orche", "orcio", "orfea", "orfee", "orgia", "oribi", "orice", "orici", "orige", "origi", "orina", "orine", "orini", "orino", "orobi", "oroci", "oroki", "oroma", "orome", "oromi", "oromo", "orrea", "orree", "orrei", "orreo", "orrii", "orzai", "osaci", "osage", "osagi", "osala", "osale", "osali", "osalo", "osami", "osane", "osche", "osmio", "ossea", "ossee", "ossei", "osseo", "ossia", "ostai", "osteo", "ostia", "ostie", "ostio", "ostri", "ostro", "otica", "otici", "otico", "otide", "otidi", "otite", "otiti", "ottri", "ovaia", "ovaie", "ovaio", "ovari", "ovata", "ovate", "ovati", "ovato", "ovina", "ovine", "ovini", "ovino", "ovoli", "ovolo", "ovula", "ovuli", "ovulo", "ovvie", "ovvii", "oyana", "ozena", "ozene", "ozoni", "ozono", "pabbi", "pacai", "pacca", "pachi", "pacia", "pacio", "pacta", "padda", "pafia", "pafie", "pafii", "pafio", "paggi", "paghe", "pagri", "pagro", "paini", "paino", "paisa", "palai", "palea", "palee", "palei", "paleo", "palio", "palli", "pallo", "palmi", "palmo", "palta", "palte", "pampa", "panai", "panda", "pande", "pandi", "pando", "pania", "panie", "pansa", "panse", "pansi", "panso", "panza", "panze", "paoli", "paolo", "pappi", "pappo", "papua", "parai", "parca", "parce", "parci", "pardi", "pardo", "parei", "pareo", "paria", "parie", "parii", "pario", "parka", "parma", "parme", "parra", "parre", "parse", "parsi", "parta", "parva", "parvi", "parvo", "pasca", "pasce", "pasci", "pasco", "passe", "patia", "patie", "patii", "patio", "patre", "patri", "patte", "pausi", "pauso", "pavia", "pavie", "peace", "peaci", "peana", "peani", "peata", "peate", "pecce", "pecci", "pechi", "pecia", "pecie", "pedio", "pekoe", "pelea", "pelee", "pelei", "peleo", "pelta", "pelte", "pelvi", "penei", "peneo", "penta", "pente", "penti", "pento", "peoci", "peone", "peoni", "peota", "peote", "pepai", "pepli", "peplo", "pepsi", "perca", "perda", "perdi", "perdo", "perii", "pervi", "pesta", "petai", "phone", "photo", "phyla", "piada", "piade", "piago", "piala", "piale", "piali", "pialo", "piami", "piamo", "piare", "piata", "piate", "piati", "piato", "piava", "piavi", "piavo", "picca", "picce", "picea", "picee", "picei", "piceo", "piche", "pichi", "picio", "piego", "pieri", "piese", "piesi", "pieta", "piete", "pieve", "pievi", "pighi", "pigia", "pigii", "pigio", "pigna", "pigne", "piino", "pilai", "pilei", "pileo", "pilla", "pilli", "pillo", "pinai", "pinca", "pince", "pinco", "pinea", "pinee", "pinei", "pineo", "pinsa", "pinse", "pinti", "pinto", "pinzi", "pinzo", "pioda", "piode", "piola", "piole", "pioli", "piolo", "pione", "pioni", "piota", "piote", "pioti", "pioto", "piova", "piovi", "piovo", "pipai", "pipia", "pipio", "pippa", "pippe", "pippi", "pippo", "pipra", "pipre", "pirla", "pirli", "pirlo", "pisce", "pisci", "pissi", "pitia", "pitie", "pitta", "pitte", "pitti", "pitto", "piumi", "piumo", "pizia", "pizie", "pizio", "placa", "place", "placo", "plaga", "plagi", "plana", "plani", "plano", "plica", "ploia", "ploie", "plora", "plori", "ploro", "ploti", "ploto", "plugo", "pluvi", "pocci", "podza", "podze", "podzi", "podzo", "poeto", "pogai", "pogge", "poghi", "poise", "polca", "polii", "polio", "polka", "polke", "polla", "polle", "polpi", "polpo", "polta", "polte", "polve", "polvi", "pomai", "pomfi", "pomfo", "ponce", "ponci", "ponda", "pondi", "pondo", "ponfi", "ponfo", "ponga", "pongo", "ponta", "ponto", "ponza", "ponzi", "ponzo", "poppi", "poppo", "porca", "porci", "porco", "porga", "porgi", "porgo", "porla", "porle", "porli", "pormi", "porne", "porno", "porsi", "posca", "posse", "potai", "potta", "potte", "poule", "praho", "prana", "prasi", "prava", "prave", "pravi", "pravo", "prece", "preci", "preco", "preli", "previ", "price", "pride", "proba", "probe", "probi", "probo", "proci", "proco", "proda", "proli", "promo", "prona", "prone", "proni", "prono", "prora", "prore", "prosi", "proso", "proti", "proto", "prozi", "pruda", "prude", "prudi", "prudo", "pruna", "prune", "pruni", "pruno", "psico", "psoco", "psofi", "psofo", "ptini", "ptino", "ptosi", "pucci", "puffi", "puffo", "pugge", "puggi", "pugio", "pugna", "pugne", "puina", "puine", "pulca", "pulka", "pulke", "pulla", "pulle", "pulli", "pullo", "punci", "punga", "punii", "puppa", "puppi", "puppo", "purai", "purea", "puree", "pussa", "pussi", "pusso", "pusta", "puste", "putai", "putii", "putre", "putri", "putta", "putte", "putti", "putto", "qasba", "qasbe", "qibla", "quada", "quade", "quadi", "quado", "quare", "queta", "queto", "quici", "quija", "quije", "quiji", "quijo", "quina", "quine", "quini", "quino", "quita", "quiti", "quito", "quivi", "rabbi", "rabia", "racca", "racco", "racla", "racle", "raffa", "raffe", "raffi", "raffo", "rafia", "rafie", "raghe", "ragia", "ragie", "ragli", "ragna", "ragne", "raiai", "raide", "raidi", "raino", "raita", "raiti", "raito", "ralla", "ralle", "ralli", "rallo", "rambo", "ramea", "ramee", "ramei", "rameo", "ramia", "ramie", "ramni", "ramno", "rampi", "rampo", "ranca", "rance", "ranco", "randa", "rande", "ranfi", "range", "ranni", "ranno", "rappa", "rappe", "rasai", "rasce", "raspe", "rasta", "ratea", "ratei", "rateo", "ratio", "ratta", "ratte", "reame", "reami", "rebbi", "recei", "recto", "redai", "redii", "reese", "reesi", "regga", "regia", "regie", "regio", "reide", "reidi", "reiki", "renai", "renio", "rensa", "rense", "repli", "replo", "requi", "resca", "resia", "resie", "respi", "respo", "reste", "retai", "retea", "retee", "retei", "reteo", "retri", "reuma", "reumi", "rezza", "rezze", "rezzi", "rezzo", "riale", "riali", "riama", "riami", "riamo", "riara", "riari", "riaro", "ricce", "ridai", "ridda", "ridde", "riddi", "riddo", "ridia", "rieda", "riede", "riedi", "riedo", "riera", "rieri", "riero", "rifai", "riffa", "riffe", "rifui", "rigai", "rigge", "righi", "rigna", "rigni", "rigno", "rimai", "rioca", "rioco", "rioda", "riode", "riodi", "riodo", "ripii", "risai", "risei", "risia", "risii", "rispi", "rissi", "risso", "ritma", "riusa", "riusi", "riuso", "rivai", "rizza", "rizze", "rizzi", "rizzo", "roana", "roane", "roani", "roano", "robbi", "rocca", "rocco", "roche", "rochi", "rodai", "rodei", "rodeo", "rodia", "rodie", "rodii", "rodio", "roese", "roesi", "rogai", "rogge", "roggi", "rogna", "rogne", "rogni", "rogno", "rolla", "rolli", "rollo", "rombe", "romea", "romee", "romei", "romeo", "ronca", "ronco", "rondi", "rondo", "ronfa", "ronfe", "ronfi", "ronfo", "rorai", "rosai", "rosea", "rosee", "rosei", "roseo", "rosta", "roste", "rosti", "rosto", "rotai", "rotea", "rotei", "roteo", "rouge", "rovai", "rubbi", "rubbo", "rubea", "rubee", "rubei", "rubeo", "rubli", "rublo", "rubra", "rubre", "rubri", "rubro", "ruche", "ruese", "ruesi", "ruffa", "ruffe", "rugai", "rughi", "rugli", "ruina", "ruini", "ruino", "rumai", "rumba", "rumbe", "rumme", "rummi", "ruoti", "ruoto", "rupia", "rupie", "ruppi", "rusca", "rusco", "ruspa", "ruspe", "ruspi", "ruspo", "russe", "rutta", "rutti", "rutto", "ruzza", "ruzze", "ruzzi", "ruzzo", "saale", "saali", "sabba", "sabbi", "sabea", "sabee", "sabei", "sabeo", "sabia", "sabie", "sabii", "sabio", "sabra", "sacia", "sacie", "sacio", "saffo", "saghe", "saghi", "sagii", "sagna", "sagni", "sagno", "sagra", "sagre", "sagri", "sagro", "saiga", "saime", "saimi", "salgo", "salii", "salio", "salpe", "salsi", "salso", "samba", "samia", "samie", "samii", "samio", "sanie", "sansa", "sanse", "saora", "sapio", "sarda", "sarde", "sardi", "sardo", "sarge", "sargo", "sauna", "saune", "saura", "saure", "sauri", "sauro", "savia", "savie", "savio", "sbafa", "sbafi", "sbafo", "sboba", "sbobe", "sbora", "sbore", "sbovi", "sbovo", "sbuca", "sbuco", "scafa", "scafe", "scana", "scane", "scapa", "scapi", "scapo", "scari", "scaro", "scasa", "scasi", "scaso", "sceda", "scede", "schei", "schwa", "sciai", "scifi", "scifo", "scipa", "scipi", "scipo", "scira", "scire", "sciri", "sciro", "scita", "scite", "sciti", "scoda", "scodi", "scodo", "scoia", "scoio", "scola", "scora", "score", "scori", "scoro", "scota", "scote", "scoti", "scoto", "scuce", "scuci", "scuda", "scuoi", "scuti", "scuto", "sdama", "sdami", "sdamo", "sdare", "sdata", "sdate", "sdati", "sdato", "sdava", "sdavi", "sdavo", "sdazi", "sdica", "sdice", "sdici", "sdico", "sdire", "sdite", "sdoga", "sdogo", "sdora", "sdori", "sdoro", "sdrai", "sduca", "sduco", "secai", "secce", "sechi", "sedei", "sedio", "segai", "segga", "seggo", "seghi", "seini", "seino", "selce", "selfa", "selfi", "selfo", "selli", "sello", "semai", "senna", "senne", "senni", "senoi", "sepsi", "serbe", "sermo", "serpa", "serpe", "serpi", "serpo", "serti", "serto", "sesia", "sesie", "sessa", "sesse", "sesta", "seste", "sesti", "sesto", "setti", "setto", "sezza", "sezze", "sezzi", "sezzo", "sfare", "sfasa", "sfasi", "sfaso", "sfata", "sfate", "sfati", "sfato", "sfece", "sfeci", "sfiga", "sfina", "sfini", "sfino", "sfizi", "sfoca", "sfoco", "sfora", "sfori", "sforo", "sfuma", "sfumi", "sfumo", "sfuri", "sfusa", "sfuse", "sfusi", "sfuso", "sgama", "sgami", "sgamo", "sgara", "sgari", "sgaro", "sgasa", "sgasi", "sgaso", "sgela", "sgeli", "sgola", "sgoli", "sgolo", "sgura", "sguri", "sguro", "shake", "shara", "share", "shari", "sharo", "shina", "shire", "siche", "sicli", "siclo", "sidri", "siepa", "siepo", "sigli", "siglo", "sigma", "sigmi", "sigua", "siici", "siila", "siile", "siili", "siilo", "siimi", "siine", "siiti", "silfi", "silfo", "silli", "sillo", "silvi", "sinti", "sipai", "sirma", "sirme", "sirte", "sirti", "sisma", "sismi", "sismo", "sitai", "sitii", "sizio", "sizza", "sizze", "skate", "skypa", "skypi", "skypo", "slama", "slami", "slamo", "slava", "slave", "slavi", "slavo", "slebi", "slebo", "slice", "slide", "sluma", "slumi", "slumo", "smaga", "smagi", "smago", "smani", "smela", "smeli", "smelo", "smera", "smeri", "smero", "smile", "smina", "smini", "smino", "smira", "smiri", "smiro", "smoda", "smodi", "smodo", "smoke", "smova", "smove", "smovi", "smovo", "smura", "smuri", "smuro", "smusa", "smusi", "smuso", "snasa", "snasi", "snaso", "sneva", "snevi", "snevo", "snida", "snidi", "snido", "snipe", "snuda", "snudi", "snudo", "soana", "soane", "soani", "soano", "socci", "socco", "socia", "socie", "sodai", "sofia", "sofie", "soghe", "sogli", "solda", "soldi", "soldo", "solea", "solee", "solei", "soleo", "solfa", "solfe", "solfi", "solfo", "solgo", "solio", "solla", "solle", "solli", "sollo", "solta", "solte", "solti", "solto", "solva", "solve", "solvi", "solvo", "somni", "sonai", "sonco", "songa", "songe", "songi", "songo", "sonii", "sonio", "sorai", "sorba", "sorbe", "sorbi", "sorbo", "sorca", "sorga", "sorgi", "sorgo", "sorra", "sorre", "sorsa", "sotho", "sotta", "sotti", "sovra", "sozio", "spaia", "spaio", "spala", "spali", "spalo", "spana", "spani", "spano", "spasa", "spase", "spasi", "spaso", "spata", "spate", "spati", "spato", "speco", "speda", "spedi", "spedo", "spela", "speli", "spelo", "speme", "spemi", "spene", "speni", "spepa", "spepe", "spere", "spezi", "spiai", "spica", "spigo", "spike", "spini", "spino", "spire", "spone", "sponi", "spora", "spore", "sprue", "spula", "spuli", "spulo", "spumi", "spumo", "spura", "spuri", "spuro", "stage", "staia", "staio", "stame", "stami", "stara", "stari", "stasa", "stasi", "staso", "steca", "stele", "steno", "steri", "stero", "stibi", "stici", "stico", "stiga", "stigi", "stigo", "stila", "stilo", "stina", "stini", "stino", "stipa", "stipe", "stipi", "stipo", "stoga", "stogo", "stoia", "stoio", "stoma", "stomi", "stone", "store", "stori", "stria", "strie", "strio", "sture", "stuta", "stuti", "stuto", "style", "suari", "suave", "suavi", "subbi", "subii", "succi", "suchi", "sugai", "sugga", "sugge", "suggi", "suggo", "sughi", "sugna", "sugne", "suide", "suidi", "suina", "suine", "suite", "sulka", "summa", "summe", "sunna", "sunne", "sunti", "suoli", "suolo", "surfa", "surfi", "surfo", "surga", "surge", "surgi", "surgo", "surma", "surra", "surre", "surse", "sursi", "surta", "surte", "surti", "surto", "susci", "sushi", "sussi", "susta", "suste", "sutha", "suthe", "suthi", "sutho", "sutra", "sutri", "sutro", "suzza", "suzzi", "suzzo", "svani", "svapa", "svapi", "svapo", "svari", "svasa", "svasi", "svaso", "svela", "sveli", "svelo", "svena", "sveni", "sveno", "sveva", "sveve", "svevi", "svevo", "svina", "svini", "sviva", "svivi", "svivo", "svizi", "svola", "svoli", "svolo", "svota", "svoti", "svoto", "svuoi", "swazi", "tabla", "tacca", "tacce", "taffi", "tafia", "tafie", "tafii", "tafio", "tagga", "taggo", "taide", "taidi", "taiga", "taiko", "taina", "taine", "taini", "taino", "talea", "talee", "talli", "tallo", "tamia", "tanai", "tanca", "tanco", "tanfa", "tanfi", "tange", "tango", "tanna", "tanni", "tanno", "tarai", "tarde", "targo", "tarla", "tarli", "tarlo", "tarma", "tarme", "tarmi", "tarmo", "tarsi", "tarso", "taste", "taura", "taure", "tauri", "tauro", "tebea", "tebee", "tebei", "tebeo", "tecca", "teche", "tecno", "tegea", "tegee", "tegei", "tegeo", "teghe", "teide", "teidi", "teina", "teine", "teita", "teite", "teiti", "temei", "tempa", "tempe", "tendi", "tendo", "tenei", "tenge", "tenno", "tensa", "tense", "tenza", "tenze", "tepee", "teppa", "teppe", "terbi", "termo", "terni", "terno", "terza", "terze", "terzi", "tesai", "tesla", "tesle", "tetta", "texta", "texte", "texti", "texto", "theta", "tiade", "tiadi", "tiara", "tiare", "tiasi", "tiaso", "tifai", "tigni", "tigno", "tigra", "tigro", "tigua", "tilde", "tildi", "tilla", "tille", "tilli", "tillo", "timpa", "timpe", "tinca", "tinga", "tinge", "tingi", "tingo", "tinse", "tinsi", "tioli", "tiolo", "tirsi", "tirso", "tizzi", "tizzo", "tmesi", "tocai", "tochi", "toghi", "tokai", "tolda", "tolde", "tolla", "tolle", "tomai", "tombi", "tombo", "tonai", "tonfa", "tonia", "tonie", "topoi", "toppi", "toppo", "toque", "torbi", "torbo", "torca", "torci", "torco", "tordi", "tordo", "torea", "torei", "toreo", "torio", "torli", "torlo", "torma", "torme", "torse", "torsi", "torso", "torva", "torve", "torvi", "torvo", "tosca", "tosco", "tossa", "tosso", "trace", "traci", "trade", "trago", "trana", "trani", "trano", "trapa", "trape", "trare", "trena", "trevi", "trevo", "triai", "tribi", "tribo", "triga", "trike", "trina", "trine", "trini", "trino", "trivi", "troco", "troia", "troie", "trona", "trone", "tropi", "tropo", "truca", "truce", "truci", "truka", "truke", "tsuga", "tufai", "tughe", "tulio", "tumba", "tunna", "tunne", "tunni", "tunno", "turbe", "turbi", "turca", "turco", "turma", "turme", "turna", "turpe", "turpi", "tusca", "tusco", "tutai", "tutsi", "tuzia", "tuzie", "ubbia", "ubbie", "ubera", "ubere", "uberi", "ubero", "ubica", "ubico", "ubini", "ubino", "uccia", "uccio", "udivi", "udrai", "udrei", "ufizi", "uggia", "uggii", "uggio", "ugnai", "ugola", "ugole", "ukase", "ukiyo", "ulama", "ulani", "ulano", "ulema", "ulese", "ulesi", "ulice", "ulici", "ulite", "uliti", "uliva", "ulive", "ulivi", "ulivo", "ultra", "ulule", "umata", "umate", "umati", "umato", "umbra", "umbre", "umbri", "umbro", "umica", "umici", "umico", "unari", "unqua", "unque", "untai", "upupa", "upupe", "urali", "urati", "urato", "urese", "uresi", "urica", "urici", "urico", "urina", "urine", "urini", "urino", "urlii", "urlio", "urone", "uroni", "urtai", "usaci", "usala", "usale", "usali", "usalo", "usami", "usane", "usuri", "usuro", "uteri", "utero", "utese", "utesi", "uvala", "uvale", "uvina", "uvine", "uvola", "uvole", "uvosa", "uvose", "uvosi", "uvoso", "uvula", "uvule", "uxori", "vacai", "vacci", "vachi", "vacua", "vacue", "vacui", "vacuo", "vaffa", "vagai", "vagii", "vaiai", "valla", "valsa", "valse", "valsi", "valso", "valva", "valve", "vammi", "vampa", "vampe", "vampo", "vanai", "vanea", "vanei", "vaneo", "vania", "vanie", "vanii", "vanio", "vanne", "vanni", "varai", "varca", "varea", "varee", "varva", "varve", "vasai", "vatti", "vauda", "vaude", "vecce", "vecia", "vecio", "vedda", "vegge", "veggi", "velia", "velie", "velma", "velme", "venai", "vengi", "vengo", "venia", "venie", "venta", "vepre", "vepri", "vepsa", "vepse", "vepsi", "vepso", "verge", "vergi", "vergo", "verla", "verle", "vermo", "verna", "verne", "verni", "verno", "verri", "verro", "verse", "verta", "verti", "verto", "verve", "verza", "verze", "vesce", "vesta", "vetro", "viado", "viari", "vichi", "viera", "viere", "vieri", "viero", "viete", "vigli", "vilai", "vilii", "villi", "villo", "vimai", "vinca", "vinea", "vinee", "vinse", "vinsi", "vipla", "viple", "virai", "virei", "vireo", "virga", "virgo", "visai", "visco", "vitae", "vitai", "vitro", "vitta", "vitte", "vivai", "vizza", "vizze", "vizzi", "vizzo", "vocai", "vochi", "vocia", "vocii", "vocio", "vodka", "voghe", "vogli", "voice", "voile", "volca", "volco", "volee", "volga", "volpa", "volpo", "volsi", "volva", "volve", "volvi", "volvo", "vomii", "vorai", "vosco", "votai", "votii", "vulga", "vulgo", "vulva", "vulve", "wakhi", "wasca", "wasce", "wasci", "wasco", "washa", "washe", "washi", "washo", "wayaa", "wayae", "wayai", "wayao", "white", "whiti", "widia", "xciii", "xcvii", "xenia", "xenie", "xhosa", "xliii", "xlvii", "xviii", "xxiii", "xxvii", "xxxii", "xxxvi", "yagua", "yamea", "yamee", "yamei", "yameo", "yaqui", "yoghi", "yucca", "yuchi", "yurta", "yurte", "zabri", "zabro", "zaffa", "zaffe", "zaffi", "zaffo", "zaina", "zaine", "zaire", "zamba", "zambo", "zamia", "zamie", "zampi", "zampo", "zanca", "zande", "zanni", "zanno", "zappe", "zarri", "zarro", "zatta", "zatte", "zebra", "zebre", "zebri", "zebro", "zecco", "zelai", "zenda", "zende", "zendi", "zendo", "zerbi", "zerbo", "zerga", "zerge", "zergi", "zergo", "zetti", "zetto", "zifio", "zigai", "zighi", "zigna", "zigni", "zigno", "zilla", "zilli", "zillo", "zinca", "zinco", "zinia", "zinie", "zinna", "zinne", "zinni", "zinno", "ziona", "zione", "zioni", "zippa", "zippi", "zippo", "zirbi", "zirbo", "zirla", "zirli", "zirlo", "zizza", "zizze", "zoeci", "zolfa", "zolfi", "zolli", "zollo", "zomba", "zombi", "zombo", "zompa", "zompi", "zompo", "zonai", "zonzo", "zooma", "zoomi", "zoomo", "zoque", "zoqui", "zozza", "zozze", "zozzi", "zozzo", "zuava", "zuave", "zuavi", "zuavo", "zughi", "zumai", "zuppi", "zuppo", "zurla", "zurli", "zurlo"],
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
  var Ra = new Date(2021, 1, 1, 0, 0, 0, 0);

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
  Ka.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help" class="icon">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         WORDLE\n        </div>\n        <div class="menu">\n          <button id="settings" class="icon">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
  var Va = document.createElement("template");
  Va.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
  var Qa = "IN_PROGRESS",
      Za = "WIN",
      es = "FAIL",
      as = ["Genial!!", "Grossartig", "Beeindruckend", "Prächtig", "Toll", "Nett"
],
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
                      if (5 !== this.tileIndex) return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Nicht genug Buchstaben");
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
                              return void(r ? e.addToast("Der Schwierig-Modus kunn nur am Anfang einer Runde aktiviert werden", 1500, !0) : (e.hardMode = o, ja({
                                  hardMode: o
                              })))
                      }
                  })), this.shadowRoot.getElementById("settings").addEventListener("click", (function(a) {
                      var s = e.$game.querySelector("game-page"),
                          t = document.createTextNode("Einstellungen");
                      s.appendChild(t);
                      var o = document.createElement("game-settings");
                      o.setAttribute("slot", "content"), o.gameApp = e, s.appendChild(o), s.setAttribute("open", "")
                  })), this.shadowRoot.getElementById("help").addEventListener("click", (function(a) {
                      var s = e.$game.querySelector("game-page"),
                          t = document.createTextNode("Anleitung");
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
                              "↵" == e && (a.textContent = "enter", a.classList.add("one-and-a-half"))
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
  cs.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistics</h1>\n    <div id="statistics"></div>\n    <h1>Verteilung der Schätzungen</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer">\n      <div class="countdown">\n        <h1>Nächstes WORDLE</h1>\n        <div id="timer">\n          <div class="statistic-container">\n            <div class="statistic timer">\n              <countdown-timer></countdown-timer>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="share">\n        <button id="share-button">\n          Share <game-icon icon="share"></game-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n';
  var ps = document.createElement("template");
  ps.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
  var ms = document.createElement("template");
  ms.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
  var hs = {
          currentStreak: "Aktueller Zug",
          maxStreak: "Maximale Züge",
          winPercentage: "Sieg %",
          gamesPlayed: "Gsespielt",
          gamesWon: "Gewonnen",
          averageGuesses: "Durchschnittlich geraten"
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
                              l = "Wordle ".concat(s);
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
                          e.gameApp.addToast("Resultat in die Zwischenabgage kopiert", 2e3, !0)
                      }), (function() {
                          e.gameApp.addToast("Teilen fehlgeschlagen", 2e3, !0)
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
  fs.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Errate das <strong>WORDLE</strong> in 6 Versuchen.</p>\n      <p>Nach jedem Versuch ändert sich die Farbe der Felder, um dir anzuzeigen, wie nahe du liegst.</p>\n      <div class="examples">\n        <div class="example">\n          <div class="row">\n            <game-tile letter="t" evaluation="correct" reveal></game-tile>\n            <game-tile letter="i"></game-tile>\n            <game-tile letter="s"></game-tile>\n            <game-tile letter="c"></game-tile>\n            <game-tile letter="h"></game-tile>\n          </div>\n          <p>Der Buchstabe <strong>T</strong> ist im Wort enthalten und am richtigen Ort.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="p"></game-tile>\n            <game-tile letter="i"></game-tile>\n            <game-tile letter="l" evaluation="present" reveal></game-tile>\n            <game-tile letter="o"></game-tile>\n            <game-tile letter="t"></game-tile>\n          </div>\n          <p>Der Buchstabe <strong>L</strong> ist im Wort enthalten, aber am falschen Ort.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="h"></game-tile>\n            <game-tile letter="u"></game-tile>\n            <game-tile letter="n"></game-tile>\n            <game-tile letter="d" evaluation="absent" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n          </div>\n          <p>Der Buchstabe <strong>D</strong> ist an keiner Stelle im Wort enthalten.</p>\n        </div>\n      </div>\n      <p><strong>Jeden Tag ein neues Rätsel!<strong></p>\n<p>Copyright &copy; Idee, Design und Spiel <a href=https://www.powerlanguage.co.uk/wordle>https://www.powerlanguage.co.uk/wordle</a></p><p>Extraktion des Quellcodes (und Übersetzung ins Italienische: <a href=https://github.com/pietroppeter/wordle-it>Pietro Peterlongo</a></p><p>Übersetzung ins Deutsche, Unterhalt dieser Webseite (Siehe <a href=https://github.com/caco3/wordle-de>https://github.com/caco3/wordle-de</a></p><p>Wortliste: Sprachdateien: <a href=https://extensions.openoffice.org/en/project/german-de-de-frami-dictionaries>extensions.openoffice.org/en/project/german-de-de-frami-dictionaries</a> und <a href=https://www.wikipedia.de/>Deutsche Wikipedia<a> resp. <a href=http://www.aaabbb.de/WordList/WordList.php>aaabbb.de/WordList/WordList.php</a></p><p>Warnung: Die Worte sind nur grob geprüft, es könnten Eigennamen und Abkürzungen enthalten sein!</p>    </div>\n  </section>\n';
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
