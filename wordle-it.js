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
  var Aa = ["ferme", "atomo", "bersi", "vampi", "sbarc", "ripar", "reati", "fasci", "matti", "sbrig", "ebano", "fieri", "conii", "pizzo", "storn", "firmi", "torbe", "bende", "solco", "rosso", "mezza", "causi", "possa", "tonte", "salti", "serba", "aditi", "notte", "pungi", "amino", "gusti", "belva", "possi", "lande", "toppe", "tardi", "pesai", "venni", "sibil", "nomin", "rotol", "marmo", "amara", "fatti", "metri", "spian", "sarei", "unito", "sarta", "ramai", "borie", "odino", "fitte", "prime", "avere", "tigre", "piant", "belve", "righe", "anime", "pecco", "curvo", "belle", "opera", "paura", "polso", "regni", "bugia", "gioco", "guide", "venne", "sorde", "torre", "trono", "formi", "ronde", "media", "torna", "causa", "morto", "situo", "retti", "tolga", "verde", "tacci", "ferri", "calmo", "panca", "cuoio", "spira", "scope", "terna", "violi", "zanne", "letta", "seria", "suino", "tizio", "brava", "sperd", "morte", "marzo", "mesto", "tappa", "viste", "mangi", "canne", "trame", "menai", "sieri", "trarr", "scopi", "sbuff", "leggo", "palpa", "corvo", "lapis", "nuoto", "gambi", "dover", "grado", "serbi", "testa", "aurea", "eviti", "sosia", "elude", "casco", "suono", "popol", "miopi", "quasi", "beone", "rivel", "reali", "riave", "calvi", "dotai", "losca", "sbarr", "costo", "feste", "eleva", "fosco", "sbiad", "aduni", "realt", "manco", "santa", "odono", "stavo", "abiti", "pompo", "rinvi", "nasco", "fissi", "conti", "parte", "risma", "batta", "venda", "targa", "tergi", "cremi", "russo", "idolo", "calzi", "bruni", "usavo", "orafa", "avvio", "basai", "vetto", "furba", "odori", "usato", "smezz", "salse", "oltre", "stesi", "smisi", "amaca", "elevo", "goffo", "nutre", "bonta", "sazie", "saper", "ciste", "curva", "porto", "regna", "poser", "ferie", "leone", "corna", "iodio", "rossi", "sondo", "copri", "provo", "mezzi", "brani", "ovvio", "ratti", "snodo", "sorte", "unite", "dissi", "lessi", "cavai", "istmi", "braci", "crete", "screm", "copra", "darvi", "misto", "darle", "fuggi", "libra", "turno", "dosai", "gomme", "calve", "gesto", "scesa", "piove", "certe", "osano", "pulsi", "univa", "svier", "nunzi", "dovro", "segna", "usava", "cosmo", "brodi", "siepi", "adito", "disto", "baffo", "auree", "vendo", "cella", "lardo", "orler", "toghe", "messo", "spalm", "miste", "licei", "dilla", "colpa", "nause", "libri", "semin", "pozza", "muove", "scali", "borse", "fissa", "arato", "fieno", "fermo", "pompi", "sdegn", "forma", "cessa", "ordir", "spart", "spunt", "smont", "tolto", "botta", "furti", "premo", "solai", "giova", "sette", "trite", "zampa", "sacra", "salai", "bieco", "liceo", "gessi", "colma", "fughi", "dilui", "smalt", "certa", "fette", "petto", "caddi", "parli", "stiro", "punge", "volse", "bugie", "adagi", "diari", "fosse", "serbo", "ghisa", "pales", "zitte", "abili", "dagli", "sbran", "asola", "canna", "dirmi", "rozzi", "vendi", "spero", "mandi", "scura", "serra", "nuora", "cullo", "citta", "fieni", "corri", "latte", "acidi", "ruoli", "nuovi", "sciup", "trote", "nuovo", "retta", "demmo", "tonno", "sviai", "oncia", "suore", "ladra", "vieti", "muoia", "numer", "colpe", "legai", "volpe", "sigle", "medie", "ebreo", "esula", "uditi", "crede", "guidi", "vermi", "cauta", "finii", "occhi", "degne", "pieni", "avrai", "salve", "palla", "vuota", "romba", "terge", "pigli", "terse", "tedia", "direi", "sgorg", "furbo", "buffa", "citai", "beata", "lilla", "molti", "scudo", "ville", "pranz", "regal", "cigno", "scamp", "penso", "terne", "nudit", "teste", "lecco", "anche", "scopa", "trama", "resto", "carte", "parve", "sodio", "vitto", "ozier", "ladro", "abusi", "pacco", "bimba", "sogni", "barai", "cotte", "rison", "grava", "sgobb", "verdi", "barca", "sensi", "passo", "calzo", "varco", "abbia", "nuove", "animo", "fatta", "tosta", "falla", "massi", "falda", "releg", "sonni", "madre", "aereo", "latri", "vende", "folta", "botte", "versi", "scart", "orchi", "dolce", "bomba", "farla", "vizia", "udivo", "voler", "osati", "lecci", "entri", "cadde", "pelli", "sarti", "colme", "dirsi", "mezzo", "animi", "stiva", "lisci", "agire", "piaga", "bagni", "tesso", "paure", "lodai", "falde", "tuber", "furto", "aduli", "campo", "dotte", "mezze", "fisco", "berlo", "morii", "raspo", "epici", "torto", "falli", "giura", "tutto", "monca", "sparo", "tonni", "epuro", "bruno", "abile", "multe", "turbo", "spuma", "toste", "esule", "prete", "brave", "agili", "birre", "capra", "narro", "tasti", "cuoca", "conte", "passa", "buona", "balze", "metta", "sorti", "scozz", "corro", "calci", "rialz", "calde", "monco", "varie", "amici", "recai", "amato", "udito", "circa", "acqua", "unica", "neghi", "muffa", "colta", "oneri", "matte", "stesa", "tiene", "siedo", "avvia", "segno", "ricev", "afone", "tette", "frane", "corso", "pompa", "sviti", "salpi", "muovi", "vaghi", "spesi", "provi", "uscir", "fogli", "tosti", "bravi", "cedri", "ritir", "cromo", "donai", "bruto", "lacci", "selva", "cagne", "poeti", "tuona", "buffi", "quest", "vibri", "farei", "sceso", "pasta", "torni", "caffe", "umore", "senso", "atrii", "rullo", "sfreg", "morti", "lotti", "tigri", "laico", "sorta", "solca", "banda", "cieco", "vegli", "buone", "afosa", "giovo", "nuoti", "zitto", "visse", "sorda", "colpi", "foche", "pener", "curai", "dorsi", "offro", "tutte", "busto", "amaro", "esuli", "venti", "polli", "reato", "bachi", "frano", "vaste", "narri", "pausa", "vanti", "pazzi", "fiero", "nonno", "darai", "alcun", "avvii", "bella", "nonni", "tersa", "ritmo", "babbi", "dovra", "andar", "radia", "miele", "prati", "fumai", "stucc", "menta", "gioia", "udire", "stamp", "nonna", "falle", "grafi", "adora", "fogne", "quoti", "pulci", "onori", "rotti", "bimbo", "aridi", "detta", "regge", "densa", "scass", "dente", "imito", "micce", "spill", "trovo", "trill", "cielo", "razze", "curvi", "sopii", "giogo", "siede", "pigol", "asilo", "crudo", "zuffe", "osata", "ripul", "soavi", "sposa", "menti", "vaghe", "mania", "puzzo", "siate", "emulo", "veste", "manda", "tende", "bassa", "volle", "calma", "speci", "tappi", "boria", "gioie", "corpi", "molta", "tento", "debba", "situi", "bolla", "espia", "balza", "vibra", "fondi", "parso", "rione", "priva", "vagli", "salpo", "chini", "rulla", "tergo", "stole", "olino", "metto", "morta", "stord", "offre", "crisi", "turni", "desse", "ardui", "corvi", "brama", "barbe", "tonti", "falco", "ospit", "nappa", "vinti", "sgrid", "birra", "attui", "magre", "lutto", "raggi", "torri", "vento", "raspa", "monta", "dette", "vinai", "fingo", "muggi", "sopra", "multa", "pappa", "buffo", "zaini", "nello", "darsi", "sgozz", "pollo", "stola", "china", "vasta", "abate", "lievi", "fanti", "selci", "pazze", "situa", "pigri", "brina", "spola", "folti", "beate", "tramo", "esame", "parco", "sella", "firme", "invii", "tonfo", "cosce", "tatua", "salde", "pezzo", "vispe", "primi", "poggi", "aerea", "umidi", "stona", "sulla", "furbi", "sputo", "crudi", "detti", "entro", "tremi", "nervo", "bisce", "falsa", "nevic", "stili", "ripos", "usata", "ovvia", "sozze", "degni", "calli", "zeppi", "paghi", "resse", "pugni", "posso", "sozzi", "sputi", "sessi", "brevi", "opero", "libre", "farlo", "cetra", "sidro", "gioca", "antri", "pause", "spade", "bruco", "tatuo", "eludi", "avaro", "gioii", "musei", "sasso", "lindo", "regno", "negre", "testi", "dotti", "tempo", "tozze", "esige", "asino", "fesse", "aduna", "lotta", "serro", "stano", "spara", "messe", "erede", "busso", "diete", "alzai", "salmi", "degno", "fugai", "monte", "ricam", "rosol", "inizi", "globo", "reced", "butto", "siero", "asini", "lento", "ottur", "nutri", "dotta", "zecca", "disti", "siamo", "tessa", "edere", "litri", "aromi", "pance", "terme", "preme", "utile", "rasoi", "zanna", "fossi", "penne", "stiri", "afose", "monto", "sacco", "ragni", "zaino", "fitta", "stese", "aboli", "aeree", "stent", "acide", "culla", "buchi", "raspi", "falci", "pigra", "scovo", "pizza", "dessi", "sommo", "fiumi", "tinto", "lutti", "pesci", "tengo", "gobbo", "ritta", "cieca", "tuono", "dighe", "siano", "quale", "cesti", "seguo", "tazza", "verra", "aravo", "porvi", "piane", "volti", "nulla", "quali", "dirla", "eluso", "nervi", "pizze", "vista", "posta", "fessa", "talco", "oscur", "marca", "colto", "venga", "ronzo", "punta", "getta", "marmi", "bande", "primo", "climi", "ritto", "rayon", "dubbi", "rapir", "diamo", "dieta", "clima", "formo", "salda", "tuoni", "suder", "tinta", "suini", "bulbi", "pagai", "zitta", "mirai", "colpo", "muoio", "univi", "piaci", "riavo", "degna", "cinto", "finge", "travi", "andra", "tossi", "varia", "opino", "fendo", "terso", "mando", "perno", "grigi", "cervi", "scadi", "altro", "regol", "tesse", "nevai", "cruna", "morir", "ansie", "scald", "masse", "barba", "atomi", "ordin", "doppi", "darla", "dicci", "getti", "tenti", "sturo", "giara", "tutti", "grido", "misti", "ruota", "poche", "roghi", "turri", "usino", "calda", "privo", "scava", "trova", "rived", "seder", "dando", "onora", "fluii", "orlai", "sazio", "riusc", "masso", "spago", "vesto", "vuoti", "folto", "gobbe", "umani", "usure", "pensi", "prose", "astri", "vorra", "nuore", "sfond", "pregi", "onore", "lembo", "ritmi", "stimi", "zuffa", "trami", "perle", "puzza", "lussi", "stapp", "tatti", "miete", "predo", "abbai", "tetra", "volgi", "stazz", "porre", "chine", "batti", "bocci", "piedi", "aureo", "zappa", "salvo", "mance", "tanta", "siepe", "rapii", "trema", "globi", "busti", "prema", "rughe", "cifra", "avevo", "duchi", "pinta", "nuota", "figli", "croci", "clero", "finsi", "vogai", "sfior", "umile", "corto", "salta", "rauco", "burle", "opaca", "tatto", "condi", "aiuta", "trovi", "copia", "agita", "pesto", "valgo", "campi", "cauti", "diede", "gorgo", "sunto", "corno", "dallo", "treno", "duomo", "talpa", "carne", "reggi", "grafo", "cenno", "somme", "denti", "sbatt", "orari", "arero", "zuppe", "ragno", "peste", "diano", "gocce", "aspro", "mozze", "atrio", "pedin", "bozza", "spicc", "darne", "adulo", "ponte", "piume", "balie", "goffi", "svito", "smalt", "ferii", "acque", "sondi", "versa", "mucca", "stira", "acida", "rette", "adiri", "poeta", "mappa", "stufe", "tenta", "dimmi", "prode", "tomba", "frani", "avete", "creme", "ansia", "legni", "addii", "sacri", "tozzo", "adori", "dalle", "sfami", "fiera", "amore", "levai", "scafo", "pegno", "esiti", "lenze", "ricca", "ampie", "riavi", "obera", "siedi", "avare", "latra", "udita", "fuoco", "cifre", "vuole", "radio", "piede", "smarr", "frate", "desti", "tarda", "esime", "adula", "barra", "merce", "volli", "odoro", "emana", "zoppa", "mesti", "reggo", "canti", "sappi", "lesto", "tassa", "onice", "sposo", "tetri", "matto", "goffa", "villa", "salme", "linea", "lanci", "rompa", "fossa", "mensa", "guida", "gonna", "covai", "froda", "marea", "piuma", "mieta", "terre", "amica", "lenti", "scale", "erigi", "carro", "studi", "calco", "quass", "emula", "maggi", "pasto", "sento", "epura", "cassa", "agiti", "grati", "becco", "piano", "rauca", "daino", "ninfe", "scena", "molla", "mozza", "culli", "sanno", "aspri", "colmi", "grano", "togli", "sputa", "bollo", "lesti", "batto", "socio", "danna", "piomb", "dorso", "arido", "rompe", "burro", "germi", "zeppo", "avara", "palpi", "fendi", "soave", "pesca", "bendo", "preda", "verte", "ebrei", "servi", "ruber", "anima", "grate", "danni", "tibia", "usavi", "nullo", "aglio", "umida", "matta", "sviso", "manzi", "scala", "mosca", "sente", "prese", "esili", "invia", "apice", "callo", "santo", "ribes", "getto", "corda", "liana", "lepre", "funge", "sporc", "penna", "ondul", "noter", "stivi", "prill", "brodo", "aspre", "brune", "bosco", "pochi", "dirci", "tinti", "oppio", "tappe", "ratto", "somma", "rossa", "tanto", "fesso", "tolti", "espii", "stata", "cruda", "disse", "unire", "tassi", "sozzo", "dammi", "vigna", "senti", "sgelo", "amari", "mozzi", "merci", "lieto", "creai", "daini", "capre", "svino", "afoni", "terzo", "iride", "scemi", "pieno", "tremo", "ressa", "abusa", "corta", "tarpi", "tasso", "brano", "corse", "nafte", "stani", "sugli", "vanta", "violo", "zappo", "breve", "corre", "piani", "vitti", "leali", "scuro", "isoli", "prega", "rombi", "tieni", "tarpa", "gesso", "massa", "risme", "testo", "stufi", "santi", "rechi", "frasi", "ricav", "donne", "lerce", "esito", "sedie", "gamba", "crepe", "optai", "tondo", "ebeti", "certo", "mette", "legge", "rozzo", "beffa", "offra", "purga", "osate", "museo", "arata", "litro", "arare", "poema", "svisi", "crema", "annoi", "conta", "mondo", "vetri", "vasca", "nonne", "gravi", "spiri", "afoso", "virtu", "amavo", "porta", "panne", "dirti", "afosi", "appai", "melme", "renda", "brami", "suoni", "miope", "sogna", "ampli", "oberi", "caute", "fiori", "pinne", "farai", "opaco", "vieta", "scolo", "disco", "garze", "esimi", "burli", "rotta", "ultim", "firma", "oblio", "arera", "unico", "desta", "tasto", "amata", "porlo", "sonda", "faggi", "scado", "udite", "gomma", "garbo", "salpa", "forno", "folte", "amico", "spost", "sfibr", "burri", "seppe", "prive", "ovile", "morsa", "orali", "denso", "negli", "tosai", "ripet", "omeri", "tibie", "altre", "guari", "conci", "plebe", "rosse", "freno", "tetti", "colli", "train", "scont", "beato", "palma", "amene", "tessi", "vessi", "berci", "durai", "scavo", "cause", "spacc", "fusti", "prima", "tacco", "frase", "sommi", "ruolo", "rompo", "posto", "salmo", "rilev", "sorse", "zappi", "spina", "zolfo", "notti", "mamma", "dacci", "giuro", "falce", "ladre", "ardue", "lesso", "polsi", "serio", "orafi", "gobbi", "elusi", "arava", "cacce", "liete", "scoli", "rubai", "fughe", "fiuti", "placc", "bisca", "gesti", "senta", "cauto", "fisso", "purgo", "soffr", "gambe", "ebete", "casta", "idoli", "picco", "muffe", "campa", "abito", "persi", "svita", "porri", "finto", "umano", "lieve", "sassi", "stadi", "gigli", "rospo", "senno", "ombra", "orafo", "staro", "slogo", "certi", "punto", "usare", "soste", "dazio", "acido", "tenui", "legga", "prole", "morda", "plico", "sbava", "quell", "frugo", "rampe", "amava", "telai", "furbe", "tombe", "piene", "scatt", "bagna", "mogli", "cerca", "greco", "verga", "scapp", "lorde", "persa", "bolle", "punti", "verbo", "volta", "evita", "leggi", "lance", "scalo", "piana", "dormi", "patta", "acute", "grida", "ornai", "vanno", "avari", "buche", "nozze", "presi", "folla", "farmi", "tagli", "canto", "verbi", "guaio", "rebus", "cieli", "fiuto", "perse", "delle", "cedro", "casse", "culti", "fasce", "stoni", "serve", "cenni", "sfila", "credi", "narra", "linde", "bramo", "gergo", "gambo", "linee", "punte", "grata", "valga", "magro", "porte", "vetta", "gemme", "stimo", "spada", "freni", "razzo", "porge", "quote", "succo", "retto", "calme", "vasto", "russi", "resta", "dello", "zucca", "fondo", "stima", "tutta", "lessa", "presa", "amero", "benda", "tante", "vinco", "univo", "bombe", "conia", "penai", "larga", "gremi", "sonde", "saler", "datai", "forse", "piena", "paese", "losco", "poste", "scost", "calze", "molle", "speri", "vibro", "scene", "pulii", "copre", "girai", "aceti", "gridi", "della", "luogo", "segni", "osava", "cesso", "pulce", "calai", "nasce", "pigre", "esche", "slega", "sfoga", "adira", "rendi", "sordo", "ovili", "risse", "erige", "porse", "emani", "gravo", "corsa", "suora", "golfo", "cicli", "veder", "fosti", "caldo", "volte", "turai", "gente", "abuso", "obero", "pinna", "spron", "separ", "finse", "viole", "perde", "elica", "venir", "vango", "rozze", "alito", "isole", "crani", "gelso", "fitto", "panno", "lotto", "armai", "lusso", "tirer", "tosse", "salvi", "posti", "calva", "buffe", "bimbe", "antro", "piace", "steli", "salsa", "grato", "curve", "ricci", "snodi", "laghi", "agito", "tanga", "tuffa", "messa", "perla", "bacia", "marco", "peser", "vinta", "milza", "rombo", "valli", "rendo", "fichi", "spezz", "nelle", "espio", "sorci", "alcol", "false", "etere", "bandi", "tasca", "razzi", "pigro", "giovi", "panna", "burlo", "vedra", "reale", "astro", "pendo", "lenza", "cuore", "peler", "brine", "preso", "firmo", "golfi", "manzo", "odiai", "arino", "vuoto", "bravo", "morsi", "stavi", "metro", "russa", "aliti", "salut", "ameni", "scuri", "serri", "zampe", "strem", "talpe", "elevi", "avide", "farsi", "pinze", "cotta", "mondi", "molte", "tonfi", "scopo", "vissi", "epuri", "triti", "dirle", "toppa", "vezzo", "fanne", "tener", "vispo", "vezzi", "pulso", "eredi", "darei", "umane", "tigli", "colmo", "visto", "bazar", "sotto", "tarpo", "lepri", "scopr", "olier", "datti", "piega", "oliva", "cosmi", "turba", "svisa", "dinne", "bruci", "parti", "podio", "porti", "sosto", "tigna", "sazia", "bolli", "scada", "colse", "sopir", "leghe", "milze", "spesa", "spett", "privi", "soffi", "potea", "usura", "copio", "libro", "torno", "fisse", "saldi", "vessa", "batte", "letto", "casto", "uscio", "trito", "spiro", "petti", "tatui", "premi", "fante", "rospi", "calza", "forti", "scrut", "tonto", "sozza", "epoca", "alghe", "cervo", "salva", "lesse", "smise", "mense", "viali", "vette", "ameno", "opere", "falsi", "vespa", "sacre", "badai", "medio", "tronc", "laici", "acuti", "facci", "torti", "pensa", "poppe", "opter", "lindi", "pappe", "babbo", "sfogo", "pugno", "grave", "velai", "aravi", "renna", "grana", "sacro", "parsa", "seppi", "sfilo", "vacca", "scuso", "orafe", "tubai", "obbed", "balli", "prego", "pozze", "corti", "aprii", "vesti", "remer", "sosti", "farli", "fessi", "circo", "penda", "ferro", "scavi", "frodi", "press", "ripag", "onest", "stivo", "farne", "amano", "educa", "parto", "secca", "legno", "attua", "sbavi", "stanc", "navig", "pelle", "torba", "fugge", "fallo", "ululi", "orner", "palle", "tonda", "donna", "negri", "prato", "avuto", "dorme", "polpe", "osino", "muori", "parla", "plasm", "educo", "duomi", "bello", "panni", "letti", "dillo", "serie", "caste", "crune", "desto", "selve", "sparl", "zoppe", "strip", "darci", "tondi", "vinte", "monti", "latro", "cuori", "sarto", "tasse", "ressi", "frodo", "trota", "chino", "cento", "fammi", "tetro", "viene", "sfido", "scafi", "lavai", "isolo", "valle", "quota", "vieto", "tetto", "reput", "sagge", "stura", "perso", "isola", "suola", "lordo", "legna", "lampi", "stive", "sfior", "esimo", "sposi", "tenni", "stato", "saner", "croce", "servo", "svuot", "tenda", "operi", "rioni", "amera", "largo", "sedia", "banca", "remai", "gusci", "retro", "svago", "dorma", "stufo", "muova", "berra", "esile", "odore", "plebi", "zeppe", "brace", "scese", "giuri", "sgran", "amate", "afono", "treni", "gelai", "olive", "spell", "pinte", "emuli", "sulle", "orale", "carni", "nella", "carri", "cinse", "farti", "forme", "abete", "corde", "torta", "usano", "sterz", "sfidi", "credo", "gallo", "fiume", "titub", "bussi", "viola", "celai", "evito", "sesso", "esser", "tetre", "mista", "paste", "filai", "gusto", "nuova", "tonde", "salma", "culle", "scovi", "slitt", "pecca", "ronza", "mieto", "usati", "padre", "bendi", "garza", "degli", "sfili", "costi", "rovin", "spazi", "cicca", "oliai", "fermi", "rifer", "prove", "novit", "lembi", "forni", "occup", "scema", "seggi", "stare", "baule", "abati", "mente", "acuto", "mento", "radun", "rulli", "dirvi", "mazzo", "zoppo", "steso", "butta", "dirne", "amati", "tocco", "entra", "serva", "pista", "liste", "andai", "selle", "lasci", "sigla", "posai", "ribad", "spazz", "sobri", "puzzi", "tempi", "sbend", "norme", "speso", "sorge", "tirai", "rompi", "state", "corte", "truff", "esami", "pezze", "basta", "causo", "danno", "mosse", "farle", "arate", "lisca", "bimbi", "metti", "lampo", "colai", "bordo", "afona", "spiga", "vispa", "conto", "prede", "sordi", "ebrea", "raper", "leoni", "parlo", "oblii", "opini", "gonne", "snoda", "bocce", "butti", "scort", "gemma", "tenga", "cotto", "rissa", "molto", "saggi", "quoto", "rampa", "ovale", "udiva", "senza", "fingi", "sfida", "tonta", "uscii", "potra", "sprem", "drago", "bruna", "toser", "cadra", "madri", "lieta", "crepo", "negra", "dormo", "ampio", "ciclo", "avida", "vespe", "balia", "vizio", "punse", "canta", "sturi", "fatto", "pende", "mosci", "merli", "basso", "pasti", "dille", "segui", "gonfi", "basti", "ascia", "uniti", "asina", "riemp", "crepa", "maree", "pozzo", "spese", "zolle", "tratt", "verme", "grani", "stufa", "cozza", "tolgo", "altra", "copro", "cisti", "beati", "invio", "guada", "onoro", "mozzo", "secco", "facce", "lotte", "tasta", "corpo", "lista", "forza", "resti", "spine", "dalla", "tenne", "tolta", "ganci", "oziai", "bruti", "pesco", "rotto", "farci", "dista", "mossi", "rozza", "frati", "voghi", "grazi", "proib", "pazzo", "terga", "scott", "dirai", "spume", "ronzi", "suona", "sieda", "festa", "ovali", "landa", "poter", "balla", "paesi", "ebree", "manie", "pungo", "avidi", "ninfa", "volge", "arida", "casti", "punsi", "linda", "cetre", "sloga", "trita", "vasti", "densi", "sfere", "berro", "nuche", "vieni", "negai", "crepi", "adoro", "porro", "rileg", "verso", "buoni", "dolci", "borgo", "asili", "fonda", "tenue", "beoni", "scuse", "guadi", "fitti", "recit", "torce", "sosta", "ricco", "lambi", "pazza", "guado", "tosto", "lieti", "forzi", "bussa", "sacca", "abeti", "stava", "hanno", "bozze", "forze", "baffi", "revoc", "danzo", "morse", "tenia", "stacc", "asole", "fuori", "germe", "caldi", "domai", "silur", "ladri", "vinci", "grane", "messi", "mazza", "serre", "darmi", "vallo", "tizia", "balzi", "unici", "lerci", "svern", "palme", "fummo", "cambi", "attuo", "scusa", "calvo", "aerei", "sanai", "sment", "volto", "fugga", "goffe", "giace", "gobba", "umana", "cotti", "tigne", "marci", "fogna", "ormai", "cigli", "olezz", "ordii", "cuoco", "tinte", "lecca", "aiuti", "dogma", "tedio", "sfama", "odier", "ozino", "tolse", "danza", "spieg", "farvi", "rumin", "buono", "leste", "sfoci", "spera", "acuta", "aurei", "collo", "forzo", "corra", "zolla", "imita", "conio", "melma", "pozzi", "agile", "vesso", "tardo", "bauli", "umido", "seghe", "ululo", "calmi", "torte", "polpa", "utili", "ranci", "velli", "sorsi", "spari", "bagno", "belli", "prest", "tanfo", "mieti", "umide", "sbalz", "svolt", "umili", "pezza", "fungo", "mutai", "guido", "volpi", "segua", "patto", "dirlo", "rango", "cozzo", "volgo", "padri", "corsi", "tizie", "scolp", "gamma", "poppa", "sarte", "erigo", "avido", "sudai", "epica", "lordi", "scusi", "slego", "vince", "pesti", "muovo", "elogi", "sullo", "crude", "suole", "ferma", "troni", "amare", "bocca", "sfera", "sarai", "tolte", "zeppa", "potei", "zoppi", "creda", "rotte", "siete", "trucc", "leghi", "fagli", "osare", "vuote", "scova", "debbo", "opina", "emano", "pinza", "rende", "fetta", "fende", "scord", "salir", "puzze", "colle", "edera", "scemo", "spole", "svaga", "unita", "cozze", "vispi", "zitti", "nafta", "archi", "poemi", "aduno", "zuppa", "forte", "latta", "sbavo", "laica", "stime", "sball", "prodi", "piste", "giare", "stile", "super", "rapai", "scade", "tenie", "torne", "fango", "rocce", "tuffo", "sante", "dogmi", "lente", "sgrav", "balzo", "offri", "copie", "darti", "pompe", "scure", "cacci", "preti", "lunga", "ballo", "burla", "gelsi", "eluse", "stono", "tempr", "sceme", "segue", "epico", "pegni", "simul", "ritti", "fatte", "danze", "timbr", "bacio", "vinto", "apici", "fiore", "scudi", "leale", "basto", "norma", "dense", "falso", "oblia", "smorz", "setta", "perni", "tuffi", "avrei", "aceto", "salto", "pulsa", "fiuta", "amena", "termi", "trott", "cigni", "lungo", "tozzi", "terra", "bucce", "imiti", "aiuto", "renne", "cozzi", "muore", "tappo", "rifin", "lenta", "aspra", "umori", "ruote", "mosso", "cerco", "detto", "amori", "sfamo", "negro", "storm", "scesi", "sorto", "ombre", "dieci", "risan", "trave", "aveva", "elusa", "aride", "pendi", "osato", "tanti", "lorda", "merlo", "ronda", "arano", "salga", "folle", "fanno", "sorso", "ulula", "stelo", "costa", "istmo", "sedai", "fruga", "danzi", "creta", "cremo", "strid", "parit", "tazze", "erano", "marce", "ponti", "frana", "notai", "lacca", "vanto", "svest", "tolsi", "mille", "urlai", "odora", "passi", "vigne", "cagna", "mamme", "cesta", "barre", "mappe", "draga", "osavi", "magri", "predi", "adiro", "fiere", "viale", "palpo", "pezzi", "mesta", "coste", "saldo", "vario", "stana", "slent", "ritte", "pizzi", "pulir", "eludo", "visti", "turer", "stati", "cenai", "video", "altri", "tozza", "fusto", "dotto", "colla", "genio", "magra", "sfide", "vello", "morso", "arduo", "rarit", "tulle", "diedi", "usate", "amavi", "gusta", "dicon", "aroma", "tocca", "prova", "lette", "mossa", "docce", "foste", "arati", "digli", "bulbo", "borsa", "manca", "addio", "spose", "ardua", "avevi", "volai", "errai", "sogno", "forai", "mazzi", "bordi", "carta", "sonno", "razza", "mazze", "prosa", "andro", "pelai", "lesta", "culto", "cacao", "celle", "asine", "omero", "vanga", "still", "cessi", "osavo", "pesce", "beffe", "sembr", "riava", "sprec", "colti", "patti", "palco", "galli", "gradi", "tersi", "ruppe", "cinta"],
      La = ["abate", "abati", "abbai", "abbia", "abete", "abeti", "abile", "abili", "abiti", "abito", "aboli", "abusa", "abusi", "abuso", "aceti", "aceto", "acida", "acide", "acidi", "acido", "acqua", "acque", "acuta", "acute", "acuti", "acuto", "adagi", "addii", "addio", "adira", "adiri", "adiro", "aditi", "adito", "adora", "adori", "adoro", "adula", "aduli", "adulo", "aduna", "aduni", "aduno", "aerea", "aeree", "aerei", "aereo", "afona", "afone", "afoni", "afono", "afosa", "afose", "afosi", "afoso", "agile", "agili", "agire", "agita", "agiti", "agito", "aglio", "aiuta", "aiuti", "aiuto", "alcol", "alcun", "alghe", "aliti", "alito", "altra", "altre", "altri", "altro", "alzai", "amaca", "amano", "amara", "amare", "amari", "amaro", "amata", "amate", "amati", "amato", "amava", "amavi", "amavo", "amena", "amene", "ameni", "ameno", "amera", "amero", "amica", "amici", "amico", "amino", "amore", "amori", "ampie", "ampio", "ampli", "anche", "andai", "andar", "andra", "andro", "anima", "anime", "animi", "animo", "annoi", "ansia", "ansie", "antri", "antro", "apice", "apici", "appai", "aprii", "arano", "arare", "arata", "arate", "arati", "arato", "arava", "aravi", "aravo", "archi", "ardua", "ardue", "ardui", "arduo", "arera", "arero", "arida", "aride", "aridi", "arido", "arino", "armai", "aroma", "aromi", "ascia", "asili", "asilo", "asina", "asine", "asini", "asino", "asola", "asole", "aspra", "aspre", "aspri", "aspro", "astri", "astro", "atomi", "atomo", "atrii", "atrio", "attua", "attui", "attuo", "aurea", "auree", "aurei", "aureo", "avara", "avare", "avari", "avaro", "avere", "avete", "aveva", "avevi", "avevo", "avida", "avide", "avidi", "avido", "avrai", "avrei", "avuto", "avvia", "avvii", "avvio", "babbi", "babbo", "bachi", "bacia", "bacio", "badai", "baffi", "baffo", "bagna", "bagni", "bagno", "balia", "balie", "balla", "balli", "ballo", "balza", "balze", "balzi", "balzo", "banca", "banda", "bande", "bandi", "barai", "barba", "barbe", "barca", "barra", "barre", "basai", "bassa", "basso", "basta", "basti", "basto", "batta", "batte", "batti", "batto", "baule", "bauli", "bazar", "beata", "beate", "beati", "beato", "becco", "beffa", "beffe", "bella", "belle", "belli", "bello", "belva", "belve", "benda", "bende", "bendi", "bendo", "beone", "beoni", "berci", "berlo", "berra", "berro", "bersi", "bieco", "bimba", "bimbe", "bimbi", "bimbo", "birra", "birre", "bisca", "bisce", "bocca", "bocce", "bocci", "bolla", "bolle", "bolli", "bollo", "bomba", "bombe", "bonta", "bordi", "bordo", "borgo", "boria", "borie", "borsa", "borse", "bosco", "botta", "botte", "bozza", "bozze", "brace", "braci", "brama", "brami", "bramo", "brani", "brano", "brava", "brave", "bravi", "bravo", "breve", "brevi", "brina", "brine", "brodi", "brodo", "bruci", "bruco", "bruna", "brune", "bruni", "bruno", "bruti", "bruto", "bucce", "buche", "buchi", "buffa", "buffe", "buffi", "buffo", "bugia", "bugie", "bulbi", "bulbo", "buona", "buone", "buoni", "buono", "burla", "burle", "burli", "burlo", "burri", "burro", "bussa", "bussi", "busso", "busti", "busto", "butta", "butti", "butto", "cacao", "cacce", "cacci", "cadde", "caddi", "cadra", "caffe", "cagna", "cagne", "calai", "calci", "calco", "calda", "calde", "caldi", "caldo", "calli", "callo", "calma", "calme", "calmi", "calmo", "calva", "calve", "calvi", "calvo", "calza", "calze", "calzi", "calzo", "cambi", "campa", "campi", "campo", "canna", "canne", "canta", "canti", "canto", "capra", "capre", "carne", "carni", "carri", "carro", "carta", "carte", "casco", "cassa", "casse", "casta", "caste", "casti", "casto", "causa", "cause", "causi", "causo", "cauta", "caute", "cauti", "cauto", "cavai", "cedri", "cedro", "celai", "cella", "celle", "cenai", "cenni", "cenno", "cento", "cerca", "cerco", "certa", "certe", "certi", "certo", "cervi", "cervo", "cessa", "cessi", "cesso", "cesta", "cesti", "cetra", "cetre", "china", "chine", "chini", "chino", "cicca", "cicli", "ciclo", "cieca", "cieco", "cieli", "cielo", "cifra", "cifre", "cigli", "cigni", "cigno", "cinse", "cinta", "cinto", "circa", "circo", "ciste", "cisti", "citai", "citta", "clero", "clima", "climi", "colai", "colla", "colle", "colli", "collo", "colma", "colme", "colmi", "colmo", "colpa", "colpe", "colpi", "colpo", "colse", "colta", "colti", "colto", "conci", "condi", "conia", "conii", "conio", "conta", "conte", "conti", "conto", "copia", "copie", "copio", "copra", "copre", "copri", "copro", "corda", "corde", "corna", "corno", "corpi", "corpo", "corra", "corre", "corri", "corro", "corsa", "corse", "corsi", "corso", "corta", "corte", "corti", "corto", "corvi", "corvo", "cosce", "cosmi", "cosmo", "costa", "coste", "costi", "costo", "cotta", "cotte", "cotti", "cotto", "covai", "cozza", "cozze", "cozzi", "cozzo", "crani", "creai", "creda", "crede", "credi", "credo", "crema", "creme", "cremi", "cremo", "crepa", "crepe", "crepi", "crepo", "creta", "crete", "crisi", "croce", "croci", "cromo", "cruda", "crude", "crudi", "crudo", "cruna", "crune", "culla", "culle", "culli", "cullo", "culti", "culto", "cuoca", "cuoco", "cuoio", "cuore", "cuori", "curai", "curva", "curve", "curvi", "curvo", "dacci", "dagli", "daini", "daino", "dalla", "dalle", "dallo", "dammi", "dando", "danna", "danni", "danno", "danza", "danze", "danzi", "danzo", "darai", "darci", "darei", "darla", "darle", "darmi", "darne", "darsi", "darti", "darvi", "datai", "datti", "dazio", "debba", "debbo", "degli", "degna", "degne", "degni", "degno", "della", "delle", "dello", "demmo", "densa", "dense", "densi", "denso", "dente", "denti", "desse", "dessi", "desta", "desti", "desto", "detta", "dette", "detti", "detto", "diamo", "diano", "diari", "dicci", "dicon", "dieci", "diede", "diedi", "dieta", "diete", "dighe", "digli", "dilla", "dille", "dillo", "dilui", "dimmi", "dinne", "dirai", "dirci", "direi", "dirla", "dirle", "dirlo", "dirmi", "dirne", "dirsi", "dirti", "dirvi", "disco", "disse", "dissi", "dista", "disti", "disto", "docce", "dogma", "dogmi", "dolce", "dolci", "domai", "donai", "donna", "donne", "doppi", "dorma", "dorme", "dormi", "dormo", "dorsi", "dorso", "dosai", "dotai", "dotta", "dotte", "dotti", "dotto", "dover", "dovra", "dovro", "draga", "drago", "dubbi", "duchi", "duomi", "duomo", "durai", "ebano", "ebete", "ebeti", "ebrea", "ebree", "ebrei", "ebreo", "edera", "edere", "educa", "educo", "eleva", "elevi", "elevo", "elica", "elogi", "elude", "eludi", "eludo", "elusa", "eluse", "elusi", "eluso", "emana", "emani", "emano", "emula", "emuli", "emulo", "entra", "entri", "entro", "epica", "epici", "epico", "epoca", "epura", "epuri", "epuro", "erano", "erede", "eredi", "erige", "erigi", "erigo", "errai", "esame", "esami", "esche", "esige", "esile", "esili", "esime", "esimi", "esimo", "esiti", "esito", "espia", "espii", "espio", "esser", "esula", "esule", "esuli", "etere", "evita", "eviti", "evito", "facce", "facci", "faggi", "fagli", "falce", "falci", "falco", "falda", "falde", "falla", "falle", "falli", "fallo", "falsa", "false", "falsi", "falso", "fammi", "fango", "fanne", "fanno", "fante", "fanti", "farai", "farci", "farei", "farla", "farle", "farli", "farlo", "farmi", "farne", "farsi", "farti", "farvi", "fasce", "fasci", "fatta", "fatte", "fatti", "fatto", "fende", "fendi", "fendo", "ferie", "ferii", "ferma", "ferme", "fermi", "fermo", "ferri", "ferro", "fessa", "fesse", "fessi", "fesso", "festa", "feste", "fetta", "fette", "fichi", "fieni", "fieno", "fiera", "fiere", "fieri", "fiero", "figli", "filai", "finge", "fingi", "fingo", "finii", "finse", "finsi", "finto", "fiore", "fiori", "firma", "firme", "firmi", "firmo", "fisco", "fissa", "fisse", "fissi", "fisso", "fitta", "fitte", "fitti", "fitto", "fiume", "fiumi", "fiuta", "fiuti", "fiuto", "fluii", "foche", "fogli", "fogna", "fogne", "folla", "folle", "folta", "folte", "folti", "folto", "fonda", "fondi", "fondo", "forai", "forma", "forme", "formi", "formo", "forni", "forno", "forse", "forte", "forti", "forza", "forze", "forzi", "forzo", "fosco", "fossa", "fosse", "fossi", "foste", "fosti", "frana", "frane", "frani", "frano", "frase", "frasi", "frate", "frati", "freni", "freno", "froda", "frodi", "frodo", "fruga", "frugo", "fugai", "fugga", "fugge", "fuggi", "fughe", "fughi", "fumai", "fummo", "funge", "fungo", "fuoco", "fuori", "furba", "furbe", "furbi", "furbo", "furti", "furto", "fusti", "fusto", "galli", "gallo", "gamba", "gambe", "gambi", "gambo", "gamma", "ganci", "garbo", "garza", "garze", "gelai", "gelsi", "gelso", "gemma", "gemme", "genio", "gente", "gergo", "germe", "germi", "gessi", "gesso", "gesti", "gesto", "getta", "getti", "getto", "ghisa", "giace", "giara", "giare", "gigli", "gioca", "gioco", "giogo", "gioia", "gioie", "gioii", "giova", "giovi", "giovo", "girai", "giura", "giuri", "giuro", "globi", "globo", "gobba", "gobbe", "gobbi", "gobbo", "gocce", "goffa", "goffe", "goffi", "goffo", "golfi", "golfo", "gomma", "gomme", "gonfi", "gonna", "gonne", "gorgo", "gradi", "grado", "grafi", "grafo", "grana", "grane", "grani", "grano", "grata", "grate", "grati", "grato", "grava", "grave", "gravi", "gravo", "grazi", "greco", "gremi", "grida", "gridi", "grido", "grigi", "guada", "guadi", "guado", "guaio", "guari", "guida", "guide", "guidi", "guido", "gusci", "gusta", "gusti", "gusto", "hanno", "idoli", "idolo", "imita", "imiti", "imito", "inizi", "invia", "invii", "invio", "iodio", "iride", "isola", "isole", "isoli", "isolo", "istmi", "istmo", "lacca", "lacci", "ladra", "ladre", "ladri", "ladro", "laghi", "laica", "laici", "laico", "lambi", "lampi", "lampo", "lance", "lanci", "landa", "lande", "lapis", "lardo", "larga", "largo", "lasci", "latra", "latri", "latro", "latta", "latte", "lavai", "leale", "leali", "lecca", "lecci", "lecco", "legai", "legga", "legge", "leggi", "leggo", "leghe", "leghi", "legna", "legni", "legno", "lembi", "lembo", "lenta", "lente", "lenti", "lento", "lenza", "lenze", "leone", "leoni", "lepre", "lepri", "lerce", "lerci", "lessa", "lesse", "lessi", "lesso", "lesta", "leste", "lesti", "lesto", "letta", "lette", "letti", "letto", "levai", "liana", "libra", "libre", "libri", "libro", "licei", "liceo", "lieta", "liete", "lieti", "lieto", "lieve", "lievi", "lilla", "linda", "linde", "lindi", "lindo", "linea", "linee", "lisca", "lisci", "lista", "liste", "litri", "litro", "lodai", "lorda", "lorde", "lordi", "lordo", "losca", "losco", "lotta", "lotte", "lotti", "lotto", "lunga", "lungo", "luogo", "lussi", "lusso", "lutti", "lutto", "madre", "madri", "maggi", "magra", "magre", "magri", "magro", "mamma", "mamme", "manca", "mance", "manco", "manda", "mandi", "mando", "mangi", "mania", "manie", "manzi", "manzo", "mappa", "mappe", "marca", "marce", "marci", "marco", "marea", "maree", "marmi", "marmo", "marzo", "massa", "masse", "massi", "masso", "matta", "matte", "matti", "matto", "mazza", "mazze", "mazzi", "mazzo", "media", "medie", "medio", "melma", "melme", "menai", "mensa", "mense", "menta", "mente", "menti", "mento", "merce", "merci", "merli", "merlo", "messa", "messe", "messi", "messo", "mesta", "mesti", "mesto", "metri", "metro", "metta", "mette", "metti", "metto", "mezza", "mezze", "mezzi", "mezzo", "micce", "miele", "mieta", "miete", "mieti", "mieto", "mille", "milza", "milze", "miope", "miopi", "mirai", "mista", "miste", "misti", "misto", "mogli", "molla", "molle", "molta", "molte", "molti", "molto", "monca", "monco", "mondi", "mondo", "monta", "monte", "monti", "monto", "morda", "morii", "morir", "morsa", "morse", "morsi", "morso", "morta", "morte", "morti", "morto", "mosca", "mosci", "mossa", "mosse", "mossi", "mosso", "mozza", "mozze", "mozzi", "mozzo", "mucca", "muffa", "muffe", "muggi", "multa", "multe", "muoia", "muoio", "muore", "muori", "muova", "muove", "muovi", "muovo", "musei", "museo", "mutai", "nafta", "nafte", "nappa", "narra", "narri", "narro", "nasce", "nasco", "nause", "navig", "negai", "neghi", "negli", "negra", "negre", "negri", "negro", "nella", "nelle", "nello", "nervi", "nervo", "nevai", "nevic", "ninfa", "ninfe", "nomin", "nonna", "nonne", "nonni", "nonno", "norma", "norme", "notai", "noter", "notte", "notti", "novit", "nozze", "nuche", "nudit", "nulla", "nullo", "numer", "nunzi", "nuora", "nuore", "nuota", "nuoti", "nuoto", "nuova", "nuove", "nuovi", "nuovo", "nutre", "nutri", "obbed", "obera", "oberi", "obero", "oblia", "oblii", "oblio", "occhi", "occup", "odiai", "odier", "odino", "odono", "odora", "odore", "odori", "odoro", "offra", "offre", "offri", "offro", "olezz", "oliai", "olier", "olino", "oliva", "olive", "oltre", "ombra", "ombre", "omeri", "omero", "oncia", "ondul", "oneri", "onest", "onice", "onora", "onore", "onori", "onoro", "opaca", "opaco", "opera", "opere", "operi", "opero", "opina", "opini", "opino", "oppio", "optai", "opter", "orafa", "orafe", "orafi", "orafo", "orale", "orali", "orari", "orchi", "ordii", "ordin", "ordir", "orlai", "orler", "ormai", "ornai", "orner", "osano", "osare", "osata", "osate", "osati", "osato", "osava", "osavi", "osavo", "oscur", "osino", "ospit", "ottur", "ovale", "ovali", "ovile", "ovili", "ovvia", "ovvio", "oziai", "ozier", "ozino", "pacco", "padre", "padri", "paese", "paesi", "pagai", "paghi", "palco", "pales", "palla", "palle", "palma", "palme", "palpa", "palpi", "palpo", "panca", "pance", "panna", "panne", "panni", "panno", "pappa", "pappe", "parco", "parit", "parla", "parli", "parlo", "parsa", "parso", "parte", "parti", "parto", "parve", "passa", "passi", "passo", "pasta", "paste", "pasti", "pasto", "patta", "patti", "patto", "paura", "paure", "pausa", "pause", "pazza", "pazze", "pazzi", "pazzo", "pecca", "pecco", "pedin", "pegni", "pegno", "pelai", "peler", "pelle", "pelli", "penai", "penda", "pende", "pendi", "pendo", "pener", "penna", "penne", "pensa", "pensi", "penso", "perde", "perla", "perle", "perni", "perno", "persa", "perse", "persi", "perso", "pesai", "pesca", "pesce", "pesci", "pesco", "peser", "peste", "pesti", "pesto", "petti", "petto", "pezza", "pezze", "pezzi", "pezzo", "piace", "piaci", "piaga", "piana", "piane", "piani", "piano", "piant", "picco", "piede", "piedi", "piega", "piena", "piene", "pieni", "pieno", "pigli", "pigol", "pigra", "pigre", "pigri", "pigro", "pinna", "pinne", "pinta", "pinte", "pinza", "pinze", "piomb", "piove", "pista", "piste", "piuma", "piume", "pizza", "pizze", "pizzi", "pizzo", "placc", "plasm", "plebe", "plebi", "plico", "poche", "pochi", "podio", "poema", "poemi", "poeta", "poeti", "poggi", "polli", "pollo", "polpa", "polpe", "polsi", "polso", "pompa", "pompe", "pompi", "pompo", "ponte", "ponti", "popol", "poppa", "poppe", "porge", "porlo", "porre", "porri", "porro", "porse", "porta", "porte", "porti", "porto", "porvi", "posai", "poser", "possa", "possi", "posso", "posta", "poste", "posti", "posto", "potea", "potei", "poter", "potra", "pozza", "pozze", "pozzi", "pozzo", "pranz", "prati", "prato", "preda", "prede", "predi", "predo", "prega", "pregi", "prego", "prema", "preme", "premi", "premo", "presa", "prese", "presi", "preso", "press", "prest", "prete", "preti", "prill", "prima", "prime", "primi", "primo", "priva", "prive", "privi", "privo", "prode", "prodi", "proib", "prole", "prosa", "prose", "prova", "prove", "provi", "provo", "pugni", "pugno", "pulce", "pulci", "pulii", "pulir", "pulsa", "pulsi", "pulso", "punge", "pungi", "pungo", "punse", "punsi", "punta", "punte", "punti", "punto", "purga", "purgo", "puzza", "puzze", "puzzi", "puzzo", "quale", "quali", "quasi", "quass", "quell", "quest", "quota", "quote", "quoti", "quoto", "radia", "radio", "radun", "raggi", "ragni", "ragno", "ramai", "rampa", "rampe", "ranci", "rango", "rapai", "raper", "rapii", "rapir", "rarit", "rasoi", "raspa", "raspi", "raspo", "ratti", "ratto", "rauca", "rauco", "rayon", "razza", "razze", "razzi", "razzo", "reale", "reali", "realt", "reati", "reato", "rebus", "recai", "reced", "rechi", "recit", "regal", "regge", "reggi", "reggo", "regna", "regni", "regno", "regol", "releg", "remai", "remer", "renda", "rende", "rendi", "rendo", "renna", "renne", "reput", "ressa", "resse", "ressi", "resta", "resti", "resto", "retro", "retta", "rette", "retti", "retto", "revoc", "rialz", "riava", "riave", "riavi", "riavo", "ribad", "ribes", "ricam", "ricav", "ricca", "ricci", "ricco", "ricev", "riemp", "rifer", "rifin", "righe", "rileg", "rilev", "rinvi", "rione", "rioni", "ripag", "ripar", "ripet", "ripos", "ripul", "risan", "risma", "risme", "rison", "rissa", "risse", "ritir", "ritmi", "ritmo", "ritta", "ritte", "ritti", "ritto", "riusc", "rived", "rivel", "rocce", "roghi", "romba", "rombi", "rombo", "rompa", "rompe", "rompi", "rompo", "ronda", "ronde", "ronza", "ronzi", "ronzo", "rosol", "rospi", "rospo", "rossa", "rosse", "rossi", "rosso", "rotol", "rotta", "rotte", "rotti", "rotto", "rovin", "rozza", "rozze", "rozzi", "rozzo", "rubai", "ruber", "rughe", "rulla", "rulli", "rullo", "rumin", "ruoli", "ruolo", "ruota", "ruote", "ruppe", "russa", "russi", "russo", "sacca", "sacco", "sacra", "sacre", "sacri", "sacro", "sagge", "saggi", "salai", "salda", "salde", "saldi", "saldo", "saler", "salga", "salir", "salma", "salme", "salmi", "salmo", "salpa", "salpi", "salpo", "salsa", "salse", "salta", "salti", "salto", "salut", "salva", "salve", "salvi", "salvo", "sanai", "saner", "sanno", "santa", "sante", "santi", "santo", "saper", "sappi", "sarai", "sarei", "sarta", "sarte", "sarti", "sarto", "sassi", "sasso", "sazia", "sazie", "sazio", "sball", "sbalz", "sbarc", "sbarr", "sbatt", "sbava", "sbavi", "sbavo", "sbend", "sbiad", "sbran", "sbrig", "sbuff", "scada", "scade", "scadi", "scado", "scafi", "scafo", "scala", "scald", "scale", "scali", "scalo", "scamp", "scapp", "scart", "scass", "scatt", "scava", "scavi", "scavo", "scema", "sceme", "scemi", "scemo", "scena", "scene", "scesa", "scese", "scesi", "sceso", "sciup", "scoli", "scolo", "scolp", "scont", "scopa", "scope", "scopi", "scopo", "scopr", "scord", "scort", "scost", "scott", "scova", "scovi", "scovo", "scozz", "screm", "scrut", "scudi", "scudo", "scura", "scure", "scuri", "scuro", "scusa", "scuse", "scusi", "scuso", "sdegn", "secca", "secco", "sedai", "seder", "sedia", "sedie", "seggi", "seghe", "segna", "segni", "segno", "segua", "segue", "segui", "seguo", "selci", "sella", "selle", "selva", "selve", "sembr", "semin", "senno", "sensi", "senso", "senta", "sente", "senti", "sento", "senza", "separ", "seppe", "seppi", "serba", "serbi", "serbo", "seria", "serie", "serio", "serra", "serre", "serri", "serro", "serva", "serve", "servi", "servo", "sessi", "sesso", "setta", "sette", "sfama", "sfami", "sfamo", "sfera", "sfere", "sfibr", "sfida", "sfide", "sfidi", "sfido", "sfila", "sfili", "sfilo", "sfior", "sfior", "sfoci", "sfoga", "sfogo", "sfond", "sfreg", "sgelo", "sgobb", "sgorg", "sgozz", "sgran", "sgrav", "sgrid", "siamo", "siano", "siate", "sibil", "sidro", "sieda", "siede", "siedi", "siedo", "siepe", "siepi", "sieri", "siero", "siete", "sigla", "sigle", "silur", "simul", "situa", "situi", "situo", "slega", "slego", "slent", "slitt", "sloga", "slogo", "smalt", "smalt", "smarr", "sment", "smezz", "smise", "smisi", "smont", "smorz", "snoda", "snodi", "snodo", "soave", "soavi", "sobri", "socio", "sodio", "soffi", "soffr", "sogna", "sogni", "sogno", "solai", "solca", "solco", "somma", "somme", "sommi", "sommo", "sonda", "sonde", "sondi", "sondo", "sonni", "sonno", "sopii", "sopir", "sopra", "sorci", "sorda", "sorde", "sordi", "sordo", "sorge", "sorse", "sorsi", "sorso", "sorta", "sorte", "sorti", "sorto", "sosia", "sosta", "soste", "sosti", "sosto", "sotto", "sozza", "sozze", "sozzi", "sozzo", "spacc", "spada", "spade", "spago", "spalm", "spara", "spari", "sparl", "sparo", "spart", "spazi", "spazz", "speci", "spell", "spera", "sperd", "speri", "spero", "spesa", "spese", "spesi", "speso", "spett", "spezz", "spian", "spicc", "spieg", "spiga", "spill", "spina", "spine", "spira", "spiri", "spiro", "spola", "spole", "sporc", "sposa", "spose", "sposi", "sposo", "spost", "sprec", "sprem", "spron", "spuma", "spume", "spunt", "sputa", "sputi", "sputo", "stacc", "stadi", "stamp", "stana", "stanc", "stani", "stano", "stapp", "stare", "staro", "stata", "state", "stati", "stato", "stava", "stavi", "stavo", "stazz", "steli", "stelo", "stent", "sterz", "stesa", "stese", "stesi", "steso", "stile", "stili", "still", "stima", "stime", "stimi", "stimo", "stira", "stiri", "stiro", "stiva", "stive", "stivi", "stivo", "stola", "stole", "stona", "stoni", "stono", "stord", "storm", "storn", "strem", "strid", "strip", "stucc", "studi", "stufa", "stufe", "stufi", "stufo", "stura", "sturi", "sturo", "succo", "sudai", "suder", "sugli", "suini", "suino", "sulla", "sulle", "sullo", "sunto", "suola", "suole", "suona", "suoni", "suono", "suora", "suore", "super", "svaga", "svago", "svern", "svest", "sviai", "svier", "svino", "svisa", "svisi", "sviso", "svita", "sviti", "svito", "svolt", "svuot", "tacci", "tacco", "tagli", "talco", "talpa", "talpe", "tanfo", "tanga", "tanta", "tante", "tanti", "tanto", "tappa", "tappe", "tappi", "tappo", "tarda", "tardi", "tardo", "targa", "tarpa", "tarpi", "tarpo", "tasca", "tassa", "tasse", "tassi", "tasso", "tasta", "tasti", "tasto", "tatti", "tatto", "tatua", "tatui", "tatuo", "tazza", "tazze", "tedia", "tedio", "telai", "tempi", "tempo", "tempr", "tenda", "tende", "tener", "tenga", "tengo", "tenia", "tenie", "tenne", "tenni", "tenta", "tenti", "tento", "tenue", "tenui", "terga", "terge", "tergi", "tergo", "terme", "termi", "terna", "terne", "terra", "terre", "tersa", "terse", "tersi", "terso", "terzo", "tessa", "tesse", "tessi", "tesso", "testa", "teste", "testi", "testo", "tetra", "tetre", "tetri", "tetro", "tette", "tetti", "tetto", "tibia", "tibie", "tiene", "tieni", "tigli", "tigna", "tigne", "tigre", "tigri", "timbr", "tinta", "tinte", "tinti", "tinto", "tirai", "tirer", "titub", "tizia", "tizie", "tizio", "tocca", "tocco", "toghe", "togli", "tolga", "tolgo", "tolse", "tolsi", "tolta", "tolte", "tolti", "tolto", "tomba", "tombe", "tonda", "tonde", "tondi", "tondo", "tonfi", "tonfo", "tonni", "tonno", "tonta", "tonte", "tonti", "tonto", "toppa", "toppe", "torba", "torbe", "torce", "torna", "torne", "torni", "torno", "torre", "torri", "torta", "torte", "torti", "torto", "tosai", "toser", "tosse", "tossi", "tosta", "toste", "tosti", "tosto", "tozza", "tozze", "tozzi", "tozzo", "train", "trama", "trame", "trami", "tramo", "trarr", "tratt", "trave", "travi", "trema", "tremi", "tremo", "treni", "treno", "trill", "trita", "trite", "triti", "trito", "tronc", "troni", "trono", "trota", "trote", "trott", "trova", "trovi", "trovo", "trucc", "truff", "tubai", "tuber", "tuffa", "tuffi", "tuffo", "tulle", "tuona", "tuoni", "tuono", "turai", "turba", "turbo", "turer", "turni", "turno", "turri", "tutta", "tutte", "tutti", "tutto", "udire", "udita", "udite", "uditi", "udito", "udiva", "udivo", "ultim", "ulula", "ululi", "ululo", "umana", "umane", "umani", "umano", "umida", "umide", "umidi", "umido", "umile", "umili", "umore", "umori", "unica", "unici", "unico", "unire", "unita", "unite", "uniti", "unito", "univa", "univi", "univo", "urlai", "usano", "usare", "usata", "usate", "usati", "usato", "usava", "usavi", "usavo", "uscii", "uscio", "uscir", "usino", "usura", "usure", "utile", "utili", "vacca", "vaghe", "vaghi", "vagli", "valga", "valgo", "valle", "valli", "vallo", "vampi", "vanga", "vango", "vanno", "vanta", "vanti", "vanto", "varco", "varia", "varie", "vario", "vasca", "vasta", "vaste", "vasti", "vasto", "veder", "vedra", "vegli", "velai", "velli", "vello", "venda", "vende", "vendi", "vendo", "venga", "venir", "venne", "venni", "venti", "vento", "verbi", "verbo", "verde", "verdi", "verga", "verme", "vermi", "verra", "versa", "versi", "verso", "verte", "vespa", "vespe", "vessa", "vessi", "vesso", "veste", "vesti", "vesto", "vetri", "vetta", "vette", "vetto", "vezzi", "vezzo", "viale", "viali", "vibra", "vibri", "vibro", "video", "viene", "vieni", "vieta", "vieti", "vieto", "vigna", "vigne", "villa", "ville", "vinai", "vince", "vinci", "vinco", "vinta", "vinte", "vinti", "vinto", "viola", "viole", "violi", "violo", "virtu", "vispa", "vispe", "vispi", "vispo", "visse", "vissi", "vista", "viste", "visti", "visto", "vitti", "vitto", "vizia", "vizio", "vogai", "voghi", "volai", "voler", "volge", "volgi", "volgo", "volle", "volli", "volpe", "volpi", "volse", "volta", "volte", "volti", "volto", "vorra", "vuole", "vuota", "vuote", "vuoti", "vuoto", "zaini", "zaino", "zampa", "zampe", "zanna", "zanne", "zappa", "zappi", "zappo", "zecca", "zeppa", "zeppe", "zeppi", "zeppo", "zitta", "zitte", "zitti", "zitto", "zolfo", "zolla", "zolle", "zoppa", "zoppe", "zoppi", "zoppo", "zucca", "zuffa", "zuffe", "zuppa", "zuppe"],
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
  Ka.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help" class="icon">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         WORDLE🇮🇹\n        </div>\n        <div class="menu">\n          <button id="settings" class="icon">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
  var Va = document.createElement("template");
  Va.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
  var Qa = "IN_PROGRESS",
      Za = "WIN",
      es = "FAIL",
      as = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Nice"],
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
                      if (e = s, !La.includes(e) && !Aa.includes(e)) return a.setAttribute("invalid", ""), void this.addToast("Not in word list");
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
                          if (!o) return a.setAttribute("invalid", ""), void this.addToast(r || "Not valid in hard mode")
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
                      if (5 !== this.tileIndex) return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Not enough letters");
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
                              return void(r ? e.addToast("Hard mode can only be enabled at the start of a round", 1500, !0) : (e.hardMode = o, ja({
                                  hardMode: o
                              })))
                      }
                  })), this.shadowRoot.getElementById("settings").addEventListener("click", (function(a) {
                      var s = e.$game.querySelector("game-page"),
                          t = document.createTextNode("Settings");
                      s.appendChild(t);
                      var o = document.createElement("game-settings");
                      o.setAttribute("slot", "content"), o.gameApp = e, s.appendChild(o), s.setAttribute("open", "")
                  })), this.shadowRoot.getElementById("help").addEventListener("click", (function(a) {
                      var s = e.$game.querySelector("game-page"),
                          t = document.createTextNode("How to play");
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
  cs.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistics</h1>\n    <div id="statistics"></div>\n    <h1>Guess Distribution</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer">\n      <div class="countdown">\n        <h1>Next WORDLE</h1>\n        <div id="timer">\n          <div class="statistic-container">\n            <div class="statistic timer">\n              <countdown-timer></countdown-timer>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="share">\n        <button id="share-button">\n          Share <game-icon icon="share"></game-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n';
  var ps = document.createElement("template");
  ps.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
  var ms = document.createElement("template");
  ms.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
  var hs = {
          currentStreak: "Current Streak",
          maxStreak: "Max Streak",
          winPercentage: "Win %",
          gamesPlayed: "Played",
          gamesWon: "Won",
          averageGuesses: "Av. Guesses"
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
                              l = "Wordle🇮🇹 ".concat(s);
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
                          e.gameApp.addToast("Copied results to clipboard", 2e3, !0)
                      }), (function() {
                          e.gameApp.addToast("Share failed", 2e3, !0)
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
  fs.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Guess the <strong>WORDLE</strong> in 6 tries.</p>\n      <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>\n      <div class="examples">\n        <div class="example">\n          <div class="row">\n            <game-tile letter="w" evaluation="correct" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="r"></game-tile>\n            <game-tile letter="y"></game-tile>\n          </div>\n          <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="p"></game-tile>\n            <game-tile letter="i"></game-tile>\n            <game-tile letter="l" evaluation="present" reveal></game-tile>\n            <game-tile letter="o"></game-tile>\n            <game-tile letter="t"></game-tile>\n          </div>\n          <p>The letter <strong>L</strong> is in the word but in the wrong spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="v"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="g"></game-tile>\n            <game-tile letter="u" evaluation="absent" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n          </div>\n          <p>The letter <strong>U</strong> is not in the word in any spot.</p>\n        </div>\n      </div>\n      <p><strong>A new WORDLE will be available each day!<strong></p>\n    </div>\n  </section>\n';
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