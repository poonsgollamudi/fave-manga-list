function bw(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const o in n)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(n, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => n[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = r(o);
    fetch(o.href, i);
  }
})();
var Ja =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function _f(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var fv = { exports: {} },
  Gl = {},
  hv = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var za = Symbol.for("react.element"),
  Sw = Symbol.for("react.portal"),
  xw = Symbol.for("react.fragment"),
  ww = Symbol.for("react.strict_mode"),
  kw = Symbol.for("react.profiler"),
  Cw = Symbol.for("react.provider"),
  _w = Symbol.for("react.context"),
  Tw = Symbol.for("react.forward_ref"),
  Pw = Symbol.for("react.suspense"),
  Ew = Symbol.for("react.memo"),
  $w = Symbol.for("react.lazy"),
  Vp = Symbol.iterator;
function Aw(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Vp && e[Vp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pv = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  mv = Object.assign,
  gv = {};
function ri(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = gv),
    (this.updater = r || pv);
}
ri.prototype.isReactComponent = {};
ri.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ri.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vv() {}
vv.prototype = ri.prototype;
function Tf(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = gv),
    (this.updater = r || pv);
}
var Pf = (Tf.prototype = new vv());
Pf.constructor = Tf;
mv(Pf, ri.prototype);
Pf.isPureReactComponent = !0;
var Op = Array.isArray,
  yv = Object.prototype.hasOwnProperty,
  Ef = { current: null },
  bv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sv(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      yv.call(t, n) && !bv.hasOwnProperty(n) && (o[n] = t[n]);
  var s = arguments.length - 2;
  if (s === 1) o.children = r;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (n in ((s = e.defaultProps), s)) o[n] === void 0 && (o[n] = s[n]);
  return {
    $$typeof: za,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: Ef.current,
  };
}
function zw(e, t) {
  return {
    $$typeof: za,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function $f(e) {
  return typeof e == "object" && e !== null && e.$$typeof === za;
}
function Rw(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var Np = /\/+/g;
function Xu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Rw("" + e.key)
    : t.toString(36);
}
function zs(e, t, r, n, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case za:
          case Sw:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = n === "" ? "." + Xu(a, 0) : n),
      Op(o)
        ? ((r = ""),
          e != null && (r = e.replace(Np, "$&/") + "/"),
          zs(o, t, r, "", function (u) {
            return u;
          }))
        : o != null &&
          ($f(o) &&
            (o = zw(
              o,
              r +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Np, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (n = n === "" ? "." : n + ":"), Op(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = n + Xu(i, s);
      a += zs(i, t, r, l, o);
    }
  else if (((l = Aw(e)), typeof l == "function"))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = n + Xu(i, s++)), (a += zs(i, t, r, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function es(e, t, r) {
  if (e == null) return e;
  var n = [],
    o = 0;
  return (
    zs(e, n, "", "", function (i) {
      return t.call(r, i, o++);
    }),
    n
  );
}
function Mw(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var lt = { current: null },
  Rs = { transition: null },
  Lw = {
    ReactCurrentDispatcher: lt,
    ReactCurrentBatchConfig: Rs,
    ReactCurrentOwner: Ef,
  };
H.Children = {
  map: es,
  forEach: function (e, t, r) {
    es(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      es(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      es(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!$f(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
H.Component = ri;
H.Fragment = xw;
H.Profiler = kw;
H.PureComponent = Tf;
H.StrictMode = ww;
H.Suspense = Pw;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lw;
H.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var n = mv({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Ef.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      yv.call(t, l) &&
        !bv.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    n.children = s;
  }
  return { $$typeof: za, type: e.type, key: o, ref: i, props: n, _owner: a };
};
H.createContext = function (e) {
  return (
    (e = {
      $$typeof: _w,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Cw, _context: e }),
    (e.Consumer = e)
  );
};
H.createElement = Sv;
H.createFactory = function (e) {
  var t = Sv.bind(null, e);
  return (t.type = e), t;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: Tw, render: e };
};
H.isValidElement = $f;
H.lazy = function (e) {
  return { $$typeof: $w, _payload: { _status: -1, _result: e }, _init: Mw };
};
H.memo = function (e, t) {
  return { $$typeof: Ew, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function (e) {
  var t = Rs.transition;
  Rs.transition = {};
  try {
    e();
  } finally {
    Rs.transition = t;
  }
};
H.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
H.useCallback = function (e, t) {
  return lt.current.useCallback(e, t);
};
H.useContext = function (e) {
  return lt.current.useContext(e);
};
H.useDebugValue = function () {};
H.useDeferredValue = function (e) {
  return lt.current.useDeferredValue(e);
};
H.useEffect = function (e, t) {
  return lt.current.useEffect(e, t);
};
H.useId = function () {
  return lt.current.useId();
};
H.useImperativeHandle = function (e, t, r) {
  return lt.current.useImperativeHandle(e, t, r);
};
H.useInsertionEffect = function (e, t) {
  return lt.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function (e, t) {
  return lt.current.useLayoutEffect(e, t);
};
H.useMemo = function (e, t) {
  return lt.current.useMemo(e, t);
};
H.useReducer = function (e, t, r) {
  return lt.current.useReducer(e, t, r);
};
H.useRef = function (e) {
  return lt.current.useRef(e);
};
H.useState = function (e) {
  return lt.current.useState(e);
};
H.useSyncExternalStore = function (e, t, r) {
  return lt.current.useSyncExternalStore(e, t, r);
};
H.useTransition = function () {
  return lt.current.useTransition();
};
H.version = "18.2.0";
hv.exports = H;
var w = hv.exports;
const Wo = _f(w),
  jp = bw({ __proto__: null, default: Wo }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fw = w,
  Iw = Symbol.for("react.element"),
  Dw = Symbol.for("react.fragment"),
  Bw = Object.prototype.hasOwnProperty,
  Vw = Fw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ow = { key: !0, ref: !0, __self: !0, __source: !0 };
function xv(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null;
  r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (n in t) Bw.call(t, n) && !Ow.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: Iw,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: Vw.current,
  };
}
Gl.Fragment = Dw;
Gl.jsx = xv;
Gl.jsxs = xv;
fv.exports = Gl;
var Af = fv.exports;
const ta = Af.Fragment,
  E = Af.jsx,
  je = Af.jsxs;
var ed = {},
  wv = { exports: {} },
  $t = {},
  kv = { exports: {} },
  Cv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, V) {
    var j = R.length;
    R.push(V);
    e: for (; 0 < j; ) {
      var O = (j - 1) >>> 1,
        q = R[O];
      if (0 < o(q, V)) (R[O] = V), (R[j] = q), (j = O);
      else break e;
    }
  }
  function r(R) {
    return R.length === 0 ? null : R[0];
  }
  function n(R) {
    if (R.length === 0) return null;
    var V = R[0],
      j = R.pop();
    if (j !== V) {
      R[0] = j;
      e: for (var O = 0, q = R.length, W = q >>> 1; O < W; ) {
        var se = 2 * (O + 1) - 1,
          Gt = R[se],
          Te = se + 1,
          bt = R[Te];
        if (0 > o(Gt, j))
          Te < q && 0 > o(bt, Gt)
            ? ((R[O] = bt), (R[Te] = j), (O = Te))
            : ((R[O] = Gt), (R[se] = j), (O = se));
        else if (Te < q && 0 > o(bt, j)) (R[O] = bt), (R[Te] = j), (O = Te);
        else break e;
      }
    }
    return V;
  }
  function o(R, V) {
    var j = R.sortIndex - V.sortIndex;
    return j !== 0 ? j : R.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    p = !1,
    v = !1,
    b = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(R) {
    for (var V = r(u); V !== null; ) {
      if (V.callback === null) n(u);
      else if (V.startTime <= R)
        n(u), (V.sortIndex = V.expirationTime), t(l, V);
      else break;
      V = r(u);
    }
  }
  function k(R) {
    if (((b = !1), m(R), !v))
      if (r(l) !== null) (v = !0), Re(P);
      else {
        var V = r(u);
        V !== null && Ie(k, V.startTime - R);
      }
  }
  function P(R, V) {
    (v = !1), b && ((b = !1), g($), ($ = -1)), (p = !0);
    var j = f;
    try {
      for (
        m(V), d = r(l);
        d !== null && (!(d.expirationTime > V) || (R && !le()));

      ) {
        var O = d.callback;
        if (typeof O == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var q = O(d.expirationTime <= V);
          (V = e.unstable_now()),
            typeof q == "function" ? (d.callback = q) : d === r(l) && n(l),
            m(V);
        } else n(l);
        d = r(l);
      }
      if (d !== null) var W = !0;
      else {
        var se = r(u);
        se !== null && Ie(k, se.startTime - V), (W = !1);
      }
      return W;
    } finally {
      (d = null), (f = j), (p = !1);
    }
  }
  var A = !1,
    T = null,
    $ = -1,
    F = 5,
    I = -1;
  function le() {
    return !(e.unstable_now() - I < F);
  }
  function me() {
    if (T !== null) {
      var R = e.unstable_now();
      I = R;
      var V = !0;
      try {
        V = T(!0, R);
      } finally {
        V ? $e() : ((A = !1), (T = null));
      }
    } else A = !1;
  }
  var $e;
  if (typeof h == "function")
    $e = function () {
      h(me);
    };
  else if (typeof MessageChannel < "u") {
    var oe = new MessageChannel(),
      de = oe.port2;
    (oe.port1.onmessage = me),
      ($e = function () {
        de.postMessage(null);
      });
  } else
    $e = function () {
      C(me, 0);
    };
  function Re(R) {
    (T = R), A || ((A = !0), $e());
  }
  function Ie(R, V) {
    $ = C(function () {
      R(e.unstable_now());
    }, V);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || p || ((v = !0), Re(P));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l);
    }),
    (e.unstable_next = function (R) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = f;
      }
      var j = f;
      f = V;
      try {
        return R();
      } finally {
        f = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, V) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var j = f;
      f = R;
      try {
        return V();
      } finally {
        f = j;
      }
    }),
    (e.unstable_scheduleCallback = function (R, V, j) {
      var O = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? O + j : O))
          : (j = O),
        R)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = j + q),
        (R = {
          id: c++,
          callback: V,
          priorityLevel: R,
          startTime: j,
          expirationTime: q,
          sortIndex: -1,
        }),
        j > O
          ? ((R.sortIndex = j),
            t(u, R),
            r(l) === null &&
              R === r(u) &&
              (b ? (g($), ($ = -1)) : (b = !0), Ie(k, j - O)))
          : ((R.sortIndex = q), t(l, R), v || p || ((v = !0), Re(P))),
        R
      );
    }),
    (e.unstable_shouldYield = le),
    (e.unstable_wrapCallback = function (R) {
      var V = f;
      return function () {
        var j = f;
        f = V;
        try {
          return R.apply(this, arguments);
        } finally {
          f = j;
        }
      };
    });
})(Cv);
kv.exports = Cv;
var Nw = kv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _v = w,
  Pt = Nw;
function z(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Tv = new Set(),
  ra = {};
function Qn(e, t) {
  Uo(e, t), Uo(e + "Capture", t);
}
function Uo(e, t) {
  for (ra[e] = t, e = 0; e < t.length; e++) Tv.add(t[e]);
}
var Lr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  td = Object.prototype.hasOwnProperty,
  jw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Wp = {},
  Up = {};
function Ww(e) {
  return td.call(Up, e)
    ? !0
    : td.call(Wp, e)
    ? !1
    : jw.test(e)
    ? (Up[e] = !0)
    : ((Wp[e] = !0), !1);
}
function Uw(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Hw(e, t, r, n) {
  if (t === null || typeof t > "u" || Uw(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ut(e, t, r, n, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var qe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    qe[e] = new ut(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  qe[t] = new ut(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  qe[e] = new ut(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  qe[e] = new ut(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    qe[e] = new ut(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  qe[e] = new ut(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  qe[e] = new ut(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  qe[e] = new ut(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  qe[e] = new ut(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var zf = /[\-:]([a-z])/g;
function Rf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zf, Rf);
    qe[t] = new ut(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zf, Rf);
    qe[t] = new ut(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(zf, Rf);
  qe[t] = new ut(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  qe[e] = new ut(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
qe.xlinkHref = new ut(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  qe[e] = new ut(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Mf(e, t, r, n) {
  var o = qe.hasOwnProperty(t) ? qe[t] : null;
  (o !== null
    ? o.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Hw(t, r, o, n) && (r = null),
    n || o === null
      ? Ww(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : o.mustUseProperty
      ? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : "") : r)
      : ((t = o.attributeName),
        (n = o.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (r = o === 3 || (o === 4 && r === !0) ? "" : "" + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var Nr = _v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ts = Symbol.for("react.element"),
  uo = Symbol.for("react.portal"),
  co = Symbol.for("react.fragment"),
  Lf = Symbol.for("react.strict_mode"),
  rd = Symbol.for("react.profiler"),
  Pv = Symbol.for("react.provider"),
  Ev = Symbol.for("react.context"),
  Ff = Symbol.for("react.forward_ref"),
  nd = Symbol.for("react.suspense"),
  od = Symbol.for("react.suspense_list"),
  If = Symbol.for("react.memo"),
  Xr = Symbol.for("react.lazy"),
  $v = Symbol.for("react.offscreen"),
  Hp = Symbol.iterator;
function ci(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hp && e[Hp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var _e = Object.assign,
  Qu;
function Ci(e) {
  if (Qu === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Qu = (t && t[1]) || "";
    }
  return (
    `
` +
    Qu +
    e
  );
}
var qu = !1;
function Zu(e, t) {
  if (!e || qu) return "";
  qu = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = n.stack.split(`
`),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var l =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (qu = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? Ci(e) : "";
}
function Gw(e) {
  switch (e.tag) {
    case 5:
      return Ci(e.type);
    case 16:
      return Ci("Lazy");
    case 13:
      return Ci("Suspense");
    case 19:
      return Ci("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Zu(e.type, !1)), e;
    case 11:
      return (e = Zu(e.type.render, !1)), e;
    case 1:
      return (e = Zu(e.type, !0)), e;
    default:
      return "";
  }
}
function id(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case co:
      return "Fragment";
    case uo:
      return "Portal";
    case rd:
      return "Profiler";
    case Lf:
      return "StrictMode";
    case nd:
      return "Suspense";
    case od:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ev:
        return (e.displayName || "Context") + ".Consumer";
      case Pv:
        return (e._context.displayName || "Context") + ".Provider";
      case Ff:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case If:
        return (
          (t = e.displayName || null), t !== null ? t : id(e.type) || "Memo"
        );
      case Xr:
        (t = e._payload), (e = e._init);
        try {
          return id(e(t));
        } catch {}
    }
  return null;
}
function Kw(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return id(t);
    case 8:
      return t === Lf ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function mn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Av(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Yw(e) {
  var t = Av(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var o = r.get,
      i = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (n = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (a) {
          n = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function rs(e) {
  e._valueTracker || (e._valueTracker = Yw(e));
}
function zv(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = Av(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function al(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ad(e, t) {
  var r = t.checked;
  return _e({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function Gp(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = mn(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Rv(e, t) {
  (t = t.checked), t != null && Mf(e, "checked", t, !1);
}
function sd(e, t) {
  Rv(e, t);
  var r = mn(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ld(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && ld(e, t.type, mn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Kp(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function ld(e, t, r) {
  (t !== "number" || al(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var _i = Array.isArray;
function Ro(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      (o = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== o && (e[r].selected = o),
        o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + mn(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        (e[o].selected = !0), n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ud(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return _e({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Yp(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(z(92));
      if (_i(r)) {
        if (1 < r.length) throw Error(z(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: mn(r) };
}
function Mv(e, t) {
  var r = mn(t.value),
    n = mn(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function Xp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Lv(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function cd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Lv(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ns,
  Fv = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ns = ns || document.createElement("div"),
          ns.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ns.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function na(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Xw = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fi).forEach(function (e) {
  Xw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fi[t] = Fi[e]);
  });
});
function Iv(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (Fi.hasOwnProperty(e) && Fi[e])
    ? ("" + t).trim()
    : t + "px";
}
function Dv(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        o = Iv(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : (e[r] = o);
    }
}
var Qw = _e(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function dd(e, t) {
  if (t) {
    if (Qw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function fd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var hd = null;
function Df(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var pd = null,
  Mo = null,
  Lo = null;
function Qp(e) {
  if ((e = La(e))) {
    if (typeof pd != "function") throw Error(z(280));
    var t = e.stateNode;
    t && ((t = ql(t)), pd(e.stateNode, e.type, t));
  }
}
function Bv(e) {
  Mo ? (Lo ? Lo.push(e) : (Lo = [e])) : (Mo = e);
}
function Vv() {
  if (Mo) {
    var e = Mo,
      t = Lo;
    if (((Lo = Mo = null), Qp(e), t)) for (e = 0; e < t.length; e++) Qp(t[e]);
  }
}
function Ov(e, t) {
  return e(t);
}
function Nv() {}
var Ju = !1;
function jv(e, t, r) {
  if (Ju) return e(t, r);
  Ju = !0;
  try {
    return Ov(e, t, r);
  } finally {
    (Ju = !1), (Mo !== null || Lo !== null) && (Nv(), Vv());
  }
}
function oa(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = ql(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(z(231, t, typeof r));
  return r;
}
var md = !1;
if (Lr)
  try {
    var di = {};
    Object.defineProperty(di, "passive", {
      get: function () {
        md = !0;
      },
    }),
      window.addEventListener("test", di, di),
      window.removeEventListener("test", di, di);
  } catch {
    md = !1;
  }
function qw(e, t, r, n, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ii = !1,
  sl = null,
  ll = !1,
  gd = null,
  Zw = {
    onError: function (e) {
      (Ii = !0), (sl = e);
    },
  };
function Jw(e, t, r, n, o, i, a, s, l) {
  (Ii = !1), (sl = null), qw.apply(Zw, arguments);
}
function ek(e, t, r, n, o, i, a, s, l) {
  if ((Jw.apply(this, arguments), Ii)) {
    if (Ii) {
      var u = sl;
      (Ii = !1), (sl = null);
    } else throw Error(z(198));
    ll || ((ll = !0), (gd = u));
  }
}
function qn(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function Wv(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function qp(e) {
  if (qn(e) !== e) throw Error(z(188));
}
function tk(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = qn(e)), t === null)) throw Error(z(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var o = r.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((n = o.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === r) return qp(o), e;
        if (i === n) return qp(o), t;
        i = i.sibling;
      }
      throw Error(z(188));
    }
    if (r.return !== n.return) (r = o), (n = i);
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        if (s === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          if (s === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(z(189));
      }
    }
    if (r.alternate !== n) throw Error(z(190));
  }
  if (r.tag !== 3) throw Error(z(188));
  return r.stateNode.current === r ? e : t;
}
function Uv(e) {
  return (e = tk(e)), e !== null ? Hv(e) : null;
}
function Hv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Hv(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Gv = Pt.unstable_scheduleCallback,
  Zp = Pt.unstable_cancelCallback,
  rk = Pt.unstable_shouldYield,
  nk = Pt.unstable_requestPaint,
  Ae = Pt.unstable_now,
  ok = Pt.unstable_getCurrentPriorityLevel,
  Bf = Pt.unstable_ImmediatePriority,
  Kv = Pt.unstable_UserBlockingPriority,
  ul = Pt.unstable_NormalPriority,
  ik = Pt.unstable_LowPriority,
  Yv = Pt.unstable_IdlePriority,
  Kl = null,
  hr = null;
function ak(e) {
  if (hr && typeof hr.onCommitFiberRoot == "function")
    try {
      hr.onCommitFiberRoot(Kl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Jt = Math.clz32 ? Math.clz32 : uk,
  sk = Math.log,
  lk = Math.LN2;
function uk(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((sk(e) / lk) | 0)) | 0;
}
var os = 64,
  is = 4194304;
function Ti(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function cl(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = r & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? (n = Ti(s)) : ((i &= a), i !== 0 && (n = Ti(i)));
  } else (a = r & ~o), a !== 0 ? (n = Ti(a)) : i !== 0 && (n = Ti(i));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & o) &&
    ((o = n & -n), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - Jt(t)), (o = 1 << r), (n |= e[r]), (t &= ~o);
  return n;
}
function ck(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function dk(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Jt(i),
      s = 1 << a,
      l = o[a];
    l === -1
      ? (!(s & r) || s & n) && (o[a] = ck(s, t))
      : l <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function vd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Xv() {
  var e = os;
  return (os <<= 1), !(os & 4194240) && (os = 64), e;
}
function ec(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Ra(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Jt(t)),
    (e[t] = r);
}
function fk(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - Jt(r),
      i = 1 << o;
    (t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~i);
  }
}
function Vf(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - Jt(r),
      o = 1 << n;
    (o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o);
  }
}
var ie = 0;
function Qv(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var qv,
  Of,
  Zv,
  Jv,
  ey,
  yd = !1,
  as = [],
  on = null,
  an = null,
  sn = null,
  ia = new Map(),
  aa = new Map(),
  Zr = [],
  hk =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Jp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      on = null;
      break;
    case "dragenter":
    case "dragleave":
      an = null;
      break;
    case "mouseover":
    case "mouseout":
      sn = null;
      break;
    case "pointerover":
    case "pointerout":
      ia.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      aa.delete(t.pointerId);
  }
}
function fi(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = La(t)), t !== null && Of(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function pk(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return (on = fi(on, e, t, r, n, o)), !0;
    case "dragenter":
      return (an = fi(an, e, t, r, n, o)), !0;
    case "mouseover":
      return (sn = fi(sn, e, t, r, n, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return ia.set(i, fi(ia.get(i) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), aa.set(i, fi(aa.get(i) || null, e, t, r, n, o)), !0
      );
  }
  return !1;
}
function ty(e) {
  var t = Ln(e.target);
  if (t !== null) {
    var r = qn(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Wv(r)), t !== null)) {
          (e.blockedOn = t),
            ey(e.priority, function () {
              Zv(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ms(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = bd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (hd = n), r.target.dispatchEvent(n), (hd = null);
    } else return (t = La(r)), t !== null && Of(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function em(e, t, r) {
  Ms(e) && r.delete(t);
}
function mk() {
  (yd = !1),
    on !== null && Ms(on) && (on = null),
    an !== null && Ms(an) && (an = null),
    sn !== null && Ms(sn) && (sn = null),
    ia.forEach(em),
    aa.forEach(em);
}
function hi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    yd ||
      ((yd = !0),
      Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority, mk)));
}
function sa(e) {
  function t(o) {
    return hi(o, e);
  }
  if (0 < as.length) {
    hi(as[0], e);
    for (var r = 1; r < as.length; r++) {
      var n = as[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    on !== null && hi(on, e),
      an !== null && hi(an, e),
      sn !== null && hi(sn, e),
      ia.forEach(t),
      aa.forEach(t),
      r = 0;
    r < Zr.length;
    r++
  )
    (n = Zr[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Zr.length && ((r = Zr[0]), r.blockedOn === null); )
    ty(r), r.blockedOn === null && Zr.shift();
}
var Fo = Nr.ReactCurrentBatchConfig,
  dl = !0;
function gk(e, t, r, n) {
  var o = ie,
    i = Fo.transition;
  Fo.transition = null;
  try {
    (ie = 1), Nf(e, t, r, n);
  } finally {
    (ie = o), (Fo.transition = i);
  }
}
function vk(e, t, r, n) {
  var o = ie,
    i = Fo.transition;
  Fo.transition = null;
  try {
    (ie = 4), Nf(e, t, r, n);
  } finally {
    (ie = o), (Fo.transition = i);
  }
}
function Nf(e, t, r, n) {
  if (dl) {
    var o = bd(e, t, r, n);
    if (o === null) cc(e, t, n, fl, r), Jp(e, n);
    else if (pk(o, e, t, r, n)) n.stopPropagation();
    else if ((Jp(e, n), t & 4 && -1 < hk.indexOf(e))) {
      for (; o !== null; ) {
        var i = La(o);
        if (
          (i !== null && qv(i),
          (i = bd(e, t, r, n)),
          i === null && cc(e, t, n, fl, r),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && n.stopPropagation();
    } else cc(e, t, n, null, r);
  }
}
var fl = null;
function bd(e, t, r, n) {
  if (((fl = null), (e = Df(n)), (e = Ln(e)), e !== null))
    if (((t = qn(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = Wv(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (fl = e), null;
}
function ry(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ok()) {
        case Bf:
          return 1;
        case Kv:
          return 4;
        case ul:
        case ik:
          return 16;
        case Yv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  jf = null,
  Ls = null;
function ny() {
  if (Ls) return Ls;
  var e,
    t = jf,
    r = t.length,
    n,
    o = "value" in tn ? tn.value : tn.textContent,
    i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++);
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++);
  return (Ls = o.slice(e, 1 < n ? 1 - n : void 0));
}
function Fs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ss() {
  return !0;
}
function tm() {
  return !1;
}
function At(e) {
  function t(r, n, o, i, a) {
    (this._reactName = r),
      (this._targetInst = o),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((r = e[s]), (this[s] = r ? r(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ss
        : tm),
      (this.isPropagationStopped = tm),
      this
    );
  }
  return (
    _e(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = ss));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = ss));
      },
      persist: function () {},
      isPersistent: ss,
    }),
    t
  );
}
var ni = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Wf = At(ni),
  Ma = _e({}, ni, { view: 0, detail: 0 }),
  yk = At(Ma),
  tc,
  rc,
  pi,
  Yl = _e({}, Ma, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Uf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== pi &&
            (pi && e.type === "mousemove"
              ? ((tc = e.screenX - pi.screenX), (rc = e.screenY - pi.screenY))
              : (rc = tc = 0),
            (pi = e)),
          tc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : rc;
    },
  }),
  rm = At(Yl),
  bk = _e({}, Yl, { dataTransfer: 0 }),
  Sk = At(bk),
  xk = _e({}, Ma, { relatedTarget: 0 }),
  nc = At(xk),
  wk = _e({}, ni, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kk = At(wk),
  Ck = _e({}, ni, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  _k = At(Ck),
  Tk = _e({}, ni, { data: 0 }),
  nm = At(Tk),
  Pk = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Ek = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  $k = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Ak(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $k[e]) ? !!t[e] : !1;
}
function Uf() {
  return Ak;
}
var zk = _e({}, Ma, {
    key: function (e) {
      if (e.key) {
        var t = Pk[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Ek[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Uf,
    charCode: function (e) {
      return e.type === "keypress" ? Fs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Fs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Rk = At(zk),
  Mk = _e({}, Yl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  om = At(Mk),
  Lk = _e({}, Ma, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Uf,
  }),
  Fk = At(Lk),
  Ik = _e({}, ni, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dk = At(Ik),
  Bk = _e({}, Yl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Vk = At(Bk),
  Ok = [9, 13, 27, 32],
  Hf = Lr && "CompositionEvent" in window,
  Di = null;
Lr && "documentMode" in document && (Di = document.documentMode);
var Nk = Lr && "TextEvent" in window && !Di,
  oy = Lr && (!Hf || (Di && 8 < Di && 11 >= Di)),
  im = String.fromCharCode(32),
  am = !1;
function iy(e, t) {
  switch (e) {
    case "keyup":
      return Ok.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ay(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var fo = !1;
function jk(e, t) {
  switch (e) {
    case "compositionend":
      return ay(t);
    case "keypress":
      return t.which !== 32 ? null : ((am = !0), im);
    case "textInput":
      return (e = t.data), e === im && am ? null : e;
    default:
      return null;
  }
}
function Wk(e, t) {
  if (fo)
    return e === "compositionend" || (!Hf && iy(e, t))
      ? ((e = ny()), (Ls = jf = tn = null), (fo = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return oy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Uk = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function sm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Uk[e.type] : t === "textarea";
}
function sy(e, t, r, n) {
  Bv(n),
    (t = hl(t, "onChange")),
    0 < t.length &&
      ((r = new Wf("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var Bi = null,
  la = null;
function Hk(e) {
  yy(e, 0);
}
function Xl(e) {
  var t = mo(e);
  if (zv(t)) return e;
}
function Gk(e, t) {
  if (e === "change") return t;
}
var ly = !1;
if (Lr) {
  var oc;
  if (Lr) {
    var ic = "oninput" in document;
    if (!ic) {
      var lm = document.createElement("div");
      lm.setAttribute("oninput", "return;"),
        (ic = typeof lm.oninput == "function");
    }
    oc = ic;
  } else oc = !1;
  ly = oc && (!document.documentMode || 9 < document.documentMode);
}
function um() {
  Bi && (Bi.detachEvent("onpropertychange", uy), (la = Bi = null));
}
function uy(e) {
  if (e.propertyName === "value" && Xl(la)) {
    var t = [];
    sy(t, la, e, Df(e)), jv(Hk, t);
  }
}
function Kk(e, t, r) {
  e === "focusin"
    ? (um(), (Bi = t), (la = r), Bi.attachEvent("onpropertychange", uy))
    : e === "focusout" && um();
}
function Yk(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Xl(la);
}
function Xk(e, t) {
  if (e === "click") return Xl(t);
}
function Qk(e, t) {
  if (e === "input" || e === "change") return Xl(t);
}
function qk(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var tr = typeof Object.is == "function" ? Object.is : qk;
function ua(e, t) {
  if (tr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!td.call(t, o) || !tr(e[o], t[o])) return !1;
  }
  return !0;
}
function cm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function dm(e, t) {
  var r = cm(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = cm(r);
  }
}
function cy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? cy(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function dy() {
  for (var e = window, t = al(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = al(e.document);
  }
  return t;
}
function Gf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Zk(e) {
  var t = dy(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    cy(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && Gf(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = r.textContent.length,
          i = Math.min(n.start, o);
        (n = n.end === void 0 ? i : Math.min(n.end, o)),
          !e.extend && i > n && ((o = n), (n = i), (i = o)),
          (o = dm(r, i));
        var a = dm(r, n);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > n
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Jk = Lr && "documentMode" in document && 11 >= document.documentMode,
  ho = null,
  Sd = null,
  Vi = null,
  xd = !1;
function fm(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  xd ||
    ho == null ||
    ho !== al(n) ||
    ((n = ho),
    "selectionStart" in n && Gf(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (Vi && ua(Vi, n)) ||
      ((Vi = n),
      (n = hl(Sd, "onSelect")),
      0 < n.length &&
        ((t = new Wf("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = ho))));
}
function ls(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var po = {
    animationend: ls("Animation", "AnimationEnd"),
    animationiteration: ls("Animation", "AnimationIteration"),
    animationstart: ls("Animation", "AnimationStart"),
    transitionend: ls("Transition", "TransitionEnd"),
  },
  ac = {},
  fy = {};
Lr &&
  ((fy = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete po.animationend.animation,
    delete po.animationiteration.animation,
    delete po.animationstart.animation),
  "TransitionEvent" in window || delete po.transitionend.transition);
function Ql(e) {
  if (ac[e]) return ac[e];
  if (!po[e]) return e;
  var t = po[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in fy) return (ac[e] = t[r]);
  return e;
}
var hy = Ql("animationend"),
  py = Ql("animationiteration"),
  my = Ql("animationstart"),
  gy = Ql("transitionend"),
  vy = new Map(),
  hm =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function bn(e, t) {
  vy.set(e, t), Qn(t, [e]);
}
for (var sc = 0; sc < hm.length; sc++) {
  var lc = hm[sc],
    eC = lc.toLowerCase(),
    tC = lc[0].toUpperCase() + lc.slice(1);
  bn(eC, "on" + tC);
}
bn(hy, "onAnimationEnd");
bn(py, "onAnimationIteration");
bn(my, "onAnimationStart");
bn("dblclick", "onDoubleClick");
bn("focusin", "onFocus");
bn("focusout", "onBlur");
bn(gy, "onTransitionEnd");
Uo("onMouseEnter", ["mouseout", "mouseover"]);
Uo("onMouseLeave", ["mouseout", "mouseover"]);
Uo("onPointerEnter", ["pointerout", "pointerover"]);
Uo("onPointerLeave", ["pointerout", "pointerover"]);
Qn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Qn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Qn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Qn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Pi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  rC = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pi));
function pm(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), ek(n, t, void 0, e), (e.currentTarget = null);
}
function yy(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      o = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = n.length - 1; 0 <= a; a--) {
          var s = n[a],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e;
          pm(o, s, u), (i = l);
        }
      else
        for (a = 0; a < n.length; a++) {
          if (
            ((s = n[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          pm(o, s, u), (i = l);
        }
    }
  }
  if (ll) throw ((e = gd), (ll = !1), (gd = null), e);
}
function ge(e, t) {
  var r = t[Td];
  r === void 0 && (r = t[Td] = new Set());
  var n = e + "__bubble";
  r.has(n) || (by(t, e, 2, !1), r.add(n));
}
function uc(e, t, r) {
  var n = 0;
  t && (n |= 4), by(r, e, n, t);
}
var us = "_reactListening" + Math.random().toString(36).slice(2);
function ca(e) {
  if (!e[us]) {
    (e[us] = !0),
      Tv.forEach(function (r) {
        r !== "selectionchange" && (rC.has(r) || uc(r, !1, e), uc(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[us] || ((t[us] = !0), uc("selectionchange", !1, t));
  }
}
function by(e, t, r, n) {
  switch (ry(t)) {
    case 1:
      var o = gk;
      break;
    case 4:
      o = vk;
      break;
    default:
      o = Nf;
  }
  (r = o.bind(null, t, r, e)),
    (o = void 0),
    !md ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : o !== void 0
      ? e.addEventListener(t, r, { passive: o })
      : e.addEventListener(t, r, !1);
}
function cc(e, t, r, n, o) {
  var i = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var a = n.tag;
      if (a === 3 || a === 4) {
        var s = n.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (a === 4)
          for (a = n.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = Ln(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            n = i = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      n = n.return;
    }
  jv(function () {
    var u = i,
      c = Df(r),
      d = [];
    e: {
      var f = vy.get(e);
      if (f !== void 0) {
        var p = Wf,
          v = e;
        switch (e) {
          case "keypress":
            if (Fs(r) === 0) break e;
          case "keydown":
          case "keyup":
            p = Rk;
            break;
          case "focusin":
            (v = "focus"), (p = nc);
            break;
          case "focusout":
            (v = "blur"), (p = nc);
            break;
          case "beforeblur":
          case "afterblur":
            p = nc;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = rm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = Sk;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = Fk;
            break;
          case hy:
          case py:
          case my:
            p = kk;
            break;
          case gy:
            p = Dk;
            break;
          case "scroll":
            p = yk;
            break;
          case "wheel":
            p = Vk;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = _k;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = om;
        }
        var b = (t & 4) !== 0,
          C = !b && e === "scroll",
          g = b ? (f !== null ? f + "Capture" : null) : f;
        b = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var k = m.stateNode;
          if (
            (m.tag === 5 &&
              k !== null &&
              ((m = k),
              g !== null && ((k = oa(h, g)), k != null && b.push(da(h, k, m)))),
            C)
          )
            break;
          h = h.return;
        }
        0 < b.length &&
          ((f = new p(f, v, null, r, c)), d.push({ event: f, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          f &&
            r !== hd &&
            (v = r.relatedTarget || r.fromElement) &&
            (Ln(v) || v[Fr]))
        )
          break e;
        if (
          (p || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          p
            ? ((v = r.relatedTarget || r.toElement),
              (p = u),
              (v = v ? Ln(v) : null),
              v !== null &&
                ((C = qn(v)), v !== C || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((p = null), (v = u)),
          p !== v)
        ) {
          if (
            ((b = rm),
            (k = "onMouseLeave"),
            (g = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((b = om),
              (k = "onPointerLeave"),
              (g = "onPointerEnter"),
              (h = "pointer")),
            (C = p == null ? f : mo(p)),
            (m = v == null ? f : mo(v)),
            (f = new b(k, h + "leave", p, r, c)),
            (f.target = C),
            (f.relatedTarget = m),
            (k = null),
            Ln(c) === u &&
              ((b = new b(g, h + "enter", v, r, c)),
              (b.target = m),
              (b.relatedTarget = C),
              (k = b)),
            (C = k),
            p && v)
          )
            t: {
              for (b = p, g = v, h = 0, m = b; m; m = io(m)) h++;
              for (m = 0, k = g; k; k = io(k)) m++;
              for (; 0 < h - m; ) (b = io(b)), h--;
              for (; 0 < m - h; ) (g = io(g)), m--;
              for (; h--; ) {
                if (b === g || (g !== null && b === g.alternate)) break t;
                (b = io(b)), (g = io(g));
              }
              b = null;
            }
          else b = null;
          p !== null && mm(d, f, p, b, !1),
            v !== null && C !== null && mm(d, C, v, b, !0);
        }
      }
      e: {
        if (
          ((f = u ? mo(u) : window),
          (p = f.nodeName && f.nodeName.toLowerCase()),
          p === "select" || (p === "input" && f.type === "file"))
        )
          var P = Gk;
        else if (sm(f))
          if (ly) P = Qk;
          else {
            P = Yk;
            var A = Kk;
          }
        else
          (p = f.nodeName) &&
            p.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (P = Xk);
        if (P && (P = P(e, u))) {
          sy(d, P, r, c);
          break e;
        }
        A && A(e, f, u),
          e === "focusout" &&
            (A = f._wrapperState) &&
            A.controlled &&
            f.type === "number" &&
            ld(f, "number", f.value);
      }
      switch (((A = u ? mo(u) : window), e)) {
        case "focusin":
          (sm(A) || A.contentEditable === "true") &&
            ((ho = A), (Sd = u), (Vi = null));
          break;
        case "focusout":
          Vi = Sd = ho = null;
          break;
        case "mousedown":
          xd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (xd = !1), fm(d, r, c);
          break;
        case "selectionchange":
          if (Jk) break;
        case "keydown":
        case "keyup":
          fm(d, r, c);
      }
      var T;
      if (Hf)
        e: {
          switch (e) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break e;
            case "compositionend":
              $ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break e;
          }
          $ = void 0;
        }
      else
        fo
          ? iy(e, r) && ($ = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && ($ = "onCompositionStart");
      $ &&
        (oy &&
          r.locale !== "ko" &&
          (fo || $ !== "onCompositionStart"
            ? $ === "onCompositionEnd" && fo && (T = ny())
            : ((tn = c),
              (jf = "value" in tn ? tn.value : tn.textContent),
              (fo = !0))),
        (A = hl(u, $)),
        0 < A.length &&
          (($ = new nm($, e, null, r, c)),
          d.push({ event: $, listeners: A }),
          T ? ($.data = T) : ((T = ay(r)), T !== null && ($.data = T)))),
        (T = Nk ? jk(e, r) : Wk(e, r)) &&
          ((u = hl(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new nm("onBeforeInput", "beforeinput", null, r, c)),
            d.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    yy(d, t);
  });
}
function da(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function hl(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = oa(e, r)),
      i != null && n.unshift(da(e, i, o)),
      (i = oa(e, t)),
      i != null && n.push(da(e, i, o))),
      (e = e.return);
  }
  return n;
}
function io(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function mm(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === n) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((l = oa(r, i)), l != null && a.unshift(da(r, l, s)))
        : o || ((l = oa(r, i)), l != null && a.push(da(r, l, s)))),
      (r = r.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var nC = /\r\n?/g,
  oC = /\u0000|\uFFFD/g;
function gm(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      nC,
      `
`
    )
    .replace(oC, "");
}
function cs(e, t, r) {
  if (((t = gm(t)), gm(e) !== t && r)) throw Error(z(425));
}
function pl() {}
var wd = null,
  kd = null;
function Cd(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var _d = typeof setTimeout == "function" ? setTimeout : void 0,
  iC = typeof clearTimeout == "function" ? clearTimeout : void 0,
  vm = typeof Promise == "function" ? Promise : void 0,
  aC =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof vm < "u"
      ? function (e) {
          return vm.resolve(null).then(e).catch(sC);
        }
      : _d;
function sC(e) {
  setTimeout(function () {
    throw e;
  });
}
function dc(e, t) {
  var r = t,
    n = 0;
  do {
    var o = r.nextSibling;
    if ((e.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(o), sa(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = o;
  } while (r);
  sa(t);
}
function ln(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ym(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var oi = Math.random().toString(36).slice(2),
  fr = "__reactFiber$" + oi,
  fa = "__reactProps$" + oi,
  Fr = "__reactContainer$" + oi,
  Td = "__reactEvents$" + oi,
  lC = "__reactListeners$" + oi,
  uC = "__reactHandles$" + oi;
function Ln(e) {
  var t = e[fr];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[Fr] || r[fr])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = ym(e); e !== null; ) {
          if ((r = e[fr])) return r;
          e = ym(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function La(e) {
  return (
    (e = e[fr] || e[Fr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function mo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function ql(e) {
  return e[fa] || null;
}
var Pd = [],
  go = -1;
function Sn(e) {
  return { current: e };
}
function ye(e) {
  0 > go || ((e.current = Pd[go]), (Pd[go] = null), go--);
}
function fe(e, t) {
  go++, (Pd[go] = e.current), (e.current = t);
}
var gn = {},
  rt = Sn(gn),
  pt = Sn(!1),
  Un = gn;
function Ho(e, t) {
  var r = e.type.contextTypes;
  if (!r) return gn;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in r) o[i] = t[i];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function mt(e) {
  return (e = e.childContextTypes), e != null;
}
function ml() {
  ye(pt), ye(rt);
}
function bm(e, t, r) {
  if (rt.current !== gn) throw Error(z(168));
  fe(rt, t), fe(pt, r);
}
function Sy(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var o in n) if (!(o in t)) throw Error(z(108, Kw(e) || "Unknown", o));
  return _e({}, r, n);
}
function gl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gn),
    (Un = rt.current),
    fe(rt, e),
    fe(pt, pt.current),
    !0
  );
}
function Sm(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(z(169));
  r
    ? ((e = Sy(e, t, Un)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      ye(pt),
      ye(rt),
      fe(rt, e))
    : ye(pt),
    fe(pt, r);
}
var wr = null,
  Zl = !1,
  fc = !1;
function xy(e) {
  wr === null ? (wr = [e]) : wr.push(e);
}
function cC(e) {
  (Zl = !0), xy(e);
}
function xn() {
  if (!fc && wr !== null) {
    fc = !0;
    var e = 0,
      t = ie;
    try {
      var r = wr;
      for (ie = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (wr = null), (Zl = !1);
    } catch (o) {
      throw (wr !== null && (wr = wr.slice(e + 1)), Gv(Bf, xn), o);
    } finally {
      (ie = t), (fc = !1);
    }
  }
  return null;
}
var vo = [],
  yo = 0,
  vl = null,
  yl = 0,
  Bt = [],
  Vt = 0,
  Hn = null,
  _r = 1,
  Tr = "";
function En(e, t) {
  (vo[yo++] = yl), (vo[yo++] = vl), (vl = e), (yl = t);
}
function wy(e, t, r) {
  (Bt[Vt++] = _r), (Bt[Vt++] = Tr), (Bt[Vt++] = Hn), (Hn = e);
  var n = _r;
  e = Tr;
  var o = 32 - Jt(n) - 1;
  (n &= ~(1 << o)), (r += 1);
  var i = 32 - Jt(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (n & ((1 << a) - 1)).toString(32)),
      (n >>= a),
      (o -= a),
      (_r = (1 << (32 - Jt(t) + o)) | (r << o) | n),
      (Tr = i + e);
  } else (_r = (1 << i) | (r << o) | n), (Tr = e);
}
function Kf(e) {
  e.return !== null && (En(e, 1), wy(e, 1, 0));
}
function Yf(e) {
  for (; e === vl; )
    (vl = vo[--yo]), (vo[yo] = null), (yl = vo[--yo]), (vo[yo] = null);
  for (; e === Hn; )
    (Hn = Bt[--Vt]),
      (Bt[Vt] = null),
      (Tr = Bt[--Vt]),
      (Bt[Vt] = null),
      (_r = Bt[--Vt]),
      (Bt[Vt] = null);
}
var Ct = null,
  kt = null,
  xe = !1,
  qt = null;
function ky(e, t) {
  var r = Ot(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function xm(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ct = e), (kt = ln(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ct = e), (kt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Hn !== null ? { id: _r, overflow: Tr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Ot(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (Ct = e),
            (kt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ed(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $d(e) {
  if (xe) {
    var t = kt;
    if (t) {
      var r = t;
      if (!xm(e, t)) {
        if (Ed(e)) throw Error(z(418));
        t = ln(r.nextSibling);
        var n = Ct;
        t && xm(e, t)
          ? ky(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (xe = !1), (Ct = e));
      }
    } else {
      if (Ed(e)) throw Error(z(418));
      (e.flags = (e.flags & -4097) | 2), (xe = !1), (Ct = e);
    }
  }
}
function wm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ct = e;
}
function ds(e) {
  if (e !== Ct) return !1;
  if (!xe) return wm(e), (xe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Cd(e.type, e.memoizedProps))),
    t && (t = kt))
  ) {
    if (Ed(e)) throw (Cy(), Error(z(418)));
    for (; t; ) ky(e, t), (t = ln(t.nextSibling));
  }
  if ((wm(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              kt = ln(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      kt = null;
    }
  } else kt = Ct ? ln(e.stateNode.nextSibling) : null;
  return !0;
}
function Cy() {
  for (var e = kt; e; ) e = ln(e.nextSibling);
}
function Go() {
  (kt = Ct = null), (xe = !1);
}
function Xf(e) {
  qt === null ? (qt = [e]) : qt.push(e);
}
var dC = Nr.ReactCurrentBatchConfig;
function Xt(e, t) {
  if (e && e.defaultProps) {
    (t = _e({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var bl = Sn(null),
  Sl = null,
  bo = null,
  Qf = null;
function qf() {
  Qf = bo = Sl = null;
}
function Zf(e) {
  var t = bl.current;
  ye(bl), (e._currentValue = t);
}
function Ad(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function Io(e, t) {
  (Sl = e),
    (Qf = bo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ht = !0), (e.firstContext = null));
}
function Ut(e) {
  var t = e._currentValue;
  if (Qf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), bo === null)) {
      if (Sl === null) throw Error(z(308));
      (bo = e), (Sl.dependencies = { lanes: 0, firstContext: e });
    } else bo = bo.next = e;
  return t;
}
var Fn = null;
function Jf(e) {
  Fn === null ? (Fn = [e]) : Fn.push(e);
}
function _y(e, t, r, n) {
  var o = t.interleaved;
  return (
    o === null ? ((r.next = r), Jf(t)) : ((r.next = o.next), (o.next = r)),
    (t.interleaved = r),
    Ir(e, n)
  );
}
function Ir(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var Qr = !1;
function eh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ty(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function $r(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function un(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), X & 2)) {
    var o = n.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (n.pending = t),
      Ir(e, r)
    );
  }
  return (
    (o = n.interleaved),
    o === null ? ((t.next = t), Jf(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    Ir(e, r)
  );
}
function Is(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Vf(e, r);
  }
}
function km(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var o = null,
      i = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var a = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (r = r.next);
      } while (r !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function xl(e, t, r, n) {
  var o = e.updateQueue;
  Qr = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), a === null ? (i = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (c = u = l = null), (s = i);
    do {
      var f = s.lane,
        p = s.eventTime;
      if ((n & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var v = e,
            b = s;
          switch (((f = t), (p = r), b.tag)) {
            case 1:
              if (((v = b.payload), typeof v == "function")) {
                d = v.call(p, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = b.payload),
                (f = typeof v == "function" ? v.call(p, d, f) : v),
                f == null)
              )
                break e;
              d = _e({}, d, f);
              break e;
            case 2:
              Qr = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [s]) : f.push(s));
      } else
        (p = {
          eventTime: p,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (l = d)) : (c = c.next = p),
          (a |= f);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Kn |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function Cm(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback;
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o != "function"))
          throw Error(z(191, o));
        o.call(n);
      }
    }
}
var Py = new _v.Component().refs;
function zd(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : _e({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Jl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? qn(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = at(),
      o = dn(e),
      i = $r(n, o);
    (i.payload = t),
      r != null && (i.callback = r),
      (t = un(e, i, o)),
      t !== null && (er(t, e, o, n), Is(t, e, o));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = at(),
      o = dn(e),
      i = $r(n, o);
    (i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = un(e, i, o)),
      t !== null && (er(t, e, o, n), Is(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = at(),
      n = dn(e),
      o = $r(r, n);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = un(e, o, n)),
      t !== null && (er(t, e, n, r), Is(t, e, n));
  },
};
function _m(e, t, r, n, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ua(r, n) || !ua(o, i)
      : !0
  );
}
function Ey(e, t, r) {
  var n = !1,
    o = gn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ut(i))
      : ((o = mt(t) ? Un : rt.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? Ho(e, o) : gn)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Jl),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Tm(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Jl.enqueueReplaceState(t, t.state, null);
}
function Rd(e, t, r, n) {
  var o = e.stateNode;
  (o.props = r), (o.state = e.memoizedState), (o.refs = Py), eh(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Ut(i))
    : ((i = mt(t) ? Un : rt.current), (o.context = Ho(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (zd(e, t, i, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Jl.enqueueReplaceState(o, o.state, null),
      xl(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function mi(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(z(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(z(147, e));
      var o = n,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs;
            s === Py && (s = o.refs = {}),
              a === null ? delete s[i] : (s[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(z(284));
    if (!r._owner) throw Error(z(290, e));
  }
  return e;
}
function fs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      z(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Pm(e) {
  var t = e._init;
  return t(e._payload);
}
function $y(e) {
  function t(g, h) {
    if (e) {
      var m = g.deletions;
      m === null ? ((g.deletions = [h]), (g.flags |= 16)) : m.push(h);
    }
  }
  function r(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), (h = h.sibling);
    return null;
  }
  function n(g, h) {
    for (g = new Map(); h !== null; )
      h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
    return g;
  }
  function o(g, h) {
    return (g = fn(g, h)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, h, m) {
    return (
      (g.index = m),
      e
        ? ((m = g.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((g.flags |= 2), h) : m)
            : ((g.flags |= 2), h))
        : ((g.flags |= 1048576), h)
    );
  }
  function a(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function s(g, h, m, k) {
    return h === null || h.tag !== 6
      ? ((h = bc(m, g.mode, k)), (h.return = g), h)
      : ((h = o(h, m)), (h.return = g), h);
  }
  function l(g, h, m, k) {
    var P = m.type;
    return P === co
      ? c(g, h, m.props.children, k, m.key)
      : h !== null &&
        (h.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === Xr &&
            Pm(P) === h.type))
      ? ((k = o(h, m.props)), (k.ref = mi(g, h, m)), (k.return = g), k)
      : ((k = js(m.type, m.key, m.props, null, g.mode, k)),
        (k.ref = mi(g, h, m)),
        (k.return = g),
        k);
  }
  function u(g, h, m, k) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = Sc(m, g.mode, k)), (h.return = g), h)
      : ((h = o(h, m.children || [])), (h.return = g), h);
  }
  function c(g, h, m, k, P) {
    return h === null || h.tag !== 7
      ? ((h = On(m, g.mode, k, P)), (h.return = g), h)
      : ((h = o(h, m)), (h.return = g), h);
  }
  function d(g, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = bc("" + h, g.mode, m)), (h.return = g), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ts:
          return (
            (m = js(h.type, h.key, h.props, null, g.mode, m)),
            (m.ref = mi(g, null, h)),
            (m.return = g),
            m
          );
        case uo:
          return (h = Sc(h, g.mode, m)), (h.return = g), h;
        case Xr:
          var k = h._init;
          return d(g, k(h._payload), m);
      }
      if (_i(h) || ci(h))
        return (h = On(h, g.mode, m, null)), (h.return = g), h;
      fs(g, h);
    }
    return null;
  }
  function f(g, h, m, k) {
    var P = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return P !== null ? null : s(g, h, "" + m, k);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ts:
          return m.key === P ? l(g, h, m, k) : null;
        case uo:
          return m.key === P ? u(g, h, m, k) : null;
        case Xr:
          return (P = m._init), f(g, h, P(m._payload), k);
      }
      if (_i(m) || ci(m)) return P !== null ? null : c(g, h, m, k, null);
      fs(g, m);
    }
    return null;
  }
  function p(g, h, m, k, P) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (g = g.get(m) || null), s(h, g, "" + k, P);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case ts:
          return (g = g.get(k.key === null ? m : k.key) || null), l(h, g, k, P);
        case uo:
          return (g = g.get(k.key === null ? m : k.key) || null), u(h, g, k, P);
        case Xr:
          var A = k._init;
          return p(g, h, m, A(k._payload), P);
      }
      if (_i(k) || ci(k)) return (g = g.get(m) || null), c(h, g, k, P, null);
      fs(h, k);
    }
    return null;
  }
  function v(g, h, m, k) {
    for (
      var P = null, A = null, T = h, $ = (h = 0), F = null;
      T !== null && $ < m.length;
      $++
    ) {
      T.index > $ ? ((F = T), (T = null)) : (F = T.sibling);
      var I = f(g, T, m[$], k);
      if (I === null) {
        T === null && (T = F);
        break;
      }
      e && T && I.alternate === null && t(g, T),
        (h = i(I, h, $)),
        A === null ? (P = I) : (A.sibling = I),
        (A = I),
        (T = F);
    }
    if ($ === m.length) return r(g, T), xe && En(g, $), P;
    if (T === null) {
      for (; $ < m.length; $++)
        (T = d(g, m[$], k)),
          T !== null &&
            ((h = i(T, h, $)), A === null ? (P = T) : (A.sibling = T), (A = T));
      return xe && En(g, $), P;
    }
    for (T = n(g, T); $ < m.length; $++)
      (F = p(T, g, $, m[$], k)),
        F !== null &&
          (e && F.alternate !== null && T.delete(F.key === null ? $ : F.key),
          (h = i(F, h, $)),
          A === null ? (P = F) : (A.sibling = F),
          (A = F));
    return (
      e &&
        T.forEach(function (le) {
          return t(g, le);
        }),
      xe && En(g, $),
      P
    );
  }
  function b(g, h, m, k) {
    var P = ci(m);
    if (typeof P != "function") throw Error(z(150));
    if (((m = P.call(m)), m == null)) throw Error(z(151));
    for (
      var A = (P = null), T = h, $ = (h = 0), F = null, I = m.next();
      T !== null && !I.done;
      $++, I = m.next()
    ) {
      T.index > $ ? ((F = T), (T = null)) : (F = T.sibling);
      var le = f(g, T, I.value, k);
      if (le === null) {
        T === null && (T = F);
        break;
      }
      e && T && le.alternate === null && t(g, T),
        (h = i(le, h, $)),
        A === null ? (P = le) : (A.sibling = le),
        (A = le),
        (T = F);
    }
    if (I.done) return r(g, T), xe && En(g, $), P;
    if (T === null) {
      for (; !I.done; $++, I = m.next())
        (I = d(g, I.value, k)),
          I !== null &&
            ((h = i(I, h, $)), A === null ? (P = I) : (A.sibling = I), (A = I));
      return xe && En(g, $), P;
    }
    for (T = n(g, T); !I.done; $++, I = m.next())
      (I = p(T, g, $, I.value, k)),
        I !== null &&
          (e && I.alternate !== null && T.delete(I.key === null ? $ : I.key),
          (h = i(I, h, $)),
          A === null ? (P = I) : (A.sibling = I),
          (A = I));
    return (
      e &&
        T.forEach(function (me) {
          return t(g, me);
        }),
      xe && En(g, $),
      P
    );
  }
  function C(g, h, m, k) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === co &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case ts:
          e: {
            for (var P = m.key, A = h; A !== null; ) {
              if (A.key === P) {
                if (((P = m.type), P === co)) {
                  if (A.tag === 7) {
                    r(g, A.sibling),
                      (h = o(A, m.props.children)),
                      (h.return = g),
                      (g = h);
                    break e;
                  }
                } else if (
                  A.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === Xr &&
                    Pm(P) === A.type)
                ) {
                  r(g, A.sibling),
                    (h = o(A, m.props)),
                    (h.ref = mi(g, A, m)),
                    (h.return = g),
                    (g = h);
                  break e;
                }
                r(g, A);
                break;
              } else t(g, A);
              A = A.sibling;
            }
            m.type === co
              ? ((h = On(m.props.children, g.mode, k, m.key)),
                (h.return = g),
                (g = h))
              : ((k = js(m.type, m.key, m.props, null, g.mode, k)),
                (k.ref = mi(g, h, m)),
                (k.return = g),
                (g = k));
          }
          return a(g);
        case uo:
          e: {
            for (A = m.key; h !== null; ) {
              if (h.key === A)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  r(g, h.sibling),
                    (h = o(h, m.children || [])),
                    (h.return = g),
                    (g = h);
                  break e;
                } else {
                  r(g, h);
                  break;
                }
              else t(g, h);
              h = h.sibling;
            }
            (h = Sc(m, g.mode, k)), (h.return = g), (g = h);
          }
          return a(g);
        case Xr:
          return (A = m._init), C(g, h, A(m._payload), k);
      }
      if (_i(m)) return v(g, h, m, k);
      if (ci(m)) return b(g, h, m, k);
      fs(g, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (r(g, h.sibling), (h = o(h, m)), (h.return = g), (g = h))
          : (r(g, h), (h = bc(m, g.mode, k)), (h.return = g), (g = h)),
        a(g))
      : r(g, h);
  }
  return C;
}
var Ko = $y(!0),
  Ay = $y(!1),
  Fa = {},
  pr = Sn(Fa),
  ha = Sn(Fa),
  pa = Sn(Fa);
function In(e) {
  if (e === Fa) throw Error(z(174));
  return e;
}
function th(e, t) {
  switch ((fe(pa, t), fe(ha, e), fe(pr, Fa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cd(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = cd(t, e));
  }
  ye(pr), fe(pr, t);
}
function Yo() {
  ye(pr), ye(ha), ye(pa);
}
function zy(e) {
  In(pa.current);
  var t = In(pr.current),
    r = cd(t, e.type);
  t !== r && (fe(ha, e), fe(pr, r));
}
function rh(e) {
  ha.current === e && (ye(pr), ye(ha));
}
var we = Sn(0);
function wl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var hc = [];
function nh() {
  for (var e = 0; e < hc.length; e++)
    hc[e]._workInProgressVersionPrimary = null;
  hc.length = 0;
}
var Ds = Nr.ReactCurrentDispatcher,
  pc = Nr.ReactCurrentBatchConfig,
  Gn = 0,
  Ce = null,
  De = null,
  Ne = null,
  kl = !1,
  Oi = !1,
  ma = 0,
  fC = 0;
function Ze() {
  throw Error(z(321));
}
function oh(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!tr(e[r], t[r])) return !1;
  return !0;
}
function ih(e, t, r, n, o, i) {
  if (
    ((Gn = i),
    (Ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ds.current = e === null || e.memoizedState === null ? gC : vC),
    (e = r(n, o)),
    Oi)
  ) {
    i = 0;
    do {
      if (((Oi = !1), (ma = 0), 25 <= i)) throw Error(z(301));
      (i += 1),
        (Ne = De = null),
        (t.updateQueue = null),
        (Ds.current = yC),
        (e = r(n, o));
    } while (Oi);
  }
  if (
    ((Ds.current = Cl),
    (t = De !== null && De.next !== null),
    (Gn = 0),
    (Ne = De = Ce = null),
    (kl = !1),
    t)
  )
    throw Error(z(300));
  return e;
}
function ah() {
  var e = ma !== 0;
  return (ma = 0), e;
}
function sr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ne === null ? (Ce.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne;
}
function Ht() {
  if (De === null) {
    var e = Ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = De.next;
  var t = Ne === null ? Ce.memoizedState : Ne.next;
  if (t !== null) (Ne = t), (De = e);
  else {
    if (e === null) throw Error(z(310));
    (De = e),
      (e = {
        memoizedState: De.memoizedState,
        baseState: De.baseState,
        baseQueue: De.baseQueue,
        queue: De.queue,
        next: null,
      }),
      Ne === null ? (Ce.memoizedState = Ne = e) : (Ne = Ne.next = e);
  }
  return Ne;
}
function ga(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function mc(e) {
  var t = Ht(),
    r = t.queue;
  if (r === null) throw Error(z(311));
  r.lastRenderedReducer = e;
  var n = De,
    o = n.baseQueue,
    i = r.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (n.baseQueue = o = i), (r.pending = null);
  }
  if (o !== null) {
    (i = o.next), (n = n.baseState);
    var s = (a = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Gn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (a = n)) : (l = l.next = d),
          (Ce.lanes |= c),
          (Kn |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (a = n) : (l.next = s),
      tr(n, t.memoizedState) || (ht = !0),
      (t.memoizedState = n),
      (t.baseState = a),
      (t.baseQueue = l),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Ce.lanes |= i), (Kn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function gc(e) {
  var t = Ht(),
    r = t.queue;
  if (r === null) throw Error(z(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    o = r.pending,
    i = t.memoizedState;
  if (o !== null) {
    r.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    tr(i, t.memoizedState) || (ht = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i);
  }
  return [i, n];
}
function Ry() {}
function My(e, t) {
  var r = Ce,
    n = Ht(),
    o = t(),
    i = !tr(n.memoizedState, o);
  if (
    (i && ((n.memoizedState = o), (ht = !0)),
    (n = n.queue),
    sh(Iy.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || (Ne !== null && Ne.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      va(9, Fy.bind(null, r, n, o, t), void 0, null),
      We === null)
    )
      throw Error(z(349));
    Gn & 30 || Ly(r, t, o);
  }
  return o;
}
function Ly(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = Ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ce.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function Fy(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), Dy(t) && By(e);
}
function Iy(e, t, r) {
  return r(function () {
    Dy(t) && By(e);
  });
}
function Dy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !tr(e, r);
  } catch {
    return !0;
  }
}
function By(e) {
  var t = Ir(e, 1);
  t !== null && er(t, e, 1, -1);
}
function Em(e) {
  var t = sr();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ga,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = mC.bind(null, Ce, e)),
    [t.memoizedState, e]
  );
}
function va(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = Ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ce.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function Vy() {
  return Ht().memoizedState;
}
function Bs(e, t, r, n) {
  var o = sr();
  (Ce.flags |= e),
    (o.memoizedState = va(1 | t, r, void 0, n === void 0 ? null : n));
}
function eu(e, t, r, n) {
  var o = Ht();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (De !== null) {
    var a = De.memoizedState;
    if (((i = a.destroy), n !== null && oh(n, a.deps))) {
      o.memoizedState = va(t, r, i, n);
      return;
    }
  }
  (Ce.flags |= e), (o.memoizedState = va(1 | t, r, i, n));
}
function $m(e, t) {
  return Bs(8390656, 8, e, t);
}
function sh(e, t) {
  return eu(2048, 8, e, t);
}
function Oy(e, t) {
  return eu(4, 2, e, t);
}
function Ny(e, t) {
  return eu(4, 4, e, t);
}
function jy(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Wy(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), eu(4, 4, jy.bind(null, t, e), r)
  );
}
function lh() {}
function Uy(e, t) {
  var r = Ht();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && oh(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function Hy(e, t) {
  var r = Ht();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && oh(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function Gy(e, t, r) {
  return Gn & 21
    ? (tr(r, t) || ((r = Xv()), (Ce.lanes |= r), (Kn |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ht = !0)), (e.memoizedState = r));
}
function hC(e, t) {
  var r = ie;
  (ie = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = pc.transition;
  pc.transition = {};
  try {
    e(!1), t();
  } finally {
    (ie = r), (pc.transition = n);
  }
}
function Ky() {
  return Ht().memoizedState;
}
function pC(e, t, r) {
  var n = dn(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Yy(e))
  )
    Xy(t, r);
  else if (((r = _y(e, t, r, n)), r !== null)) {
    var o = at();
    er(r, e, n, o), Qy(r, t, n);
  }
}
function mC(e, t, r) {
  var n = dn(e),
    o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Yy(e)) Xy(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, r);
        if (((o.hasEagerState = !0), (o.eagerState = s), tr(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Jf(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (r = _y(e, t, o, n)),
      r !== null && ((o = at()), er(r, e, n, o), Qy(r, t, n));
  }
}
function Yy(e) {
  var t = e.alternate;
  return e === Ce || (t !== null && t === Ce);
}
function Xy(e, t) {
  Oi = kl = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function Qy(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Vf(e, r);
  }
}
var Cl = {
    readContext: Ut,
    useCallback: Ze,
    useContext: Ze,
    useEffect: Ze,
    useImperativeHandle: Ze,
    useInsertionEffect: Ze,
    useLayoutEffect: Ze,
    useMemo: Ze,
    useReducer: Ze,
    useRef: Ze,
    useState: Ze,
    useDebugValue: Ze,
    useDeferredValue: Ze,
    useTransition: Ze,
    useMutableSource: Ze,
    useSyncExternalStore: Ze,
    useId: Ze,
    unstable_isNewReconciler: !1,
  },
  gC = {
    readContext: Ut,
    useCallback: function (e, t) {
      return (sr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ut,
    useEffect: $m,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        Bs(4194308, 4, jy.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return Bs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Bs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = sr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = sr();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = pC.bind(null, Ce, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = sr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Em,
    useDebugValue: lh,
    useDeferredValue: function (e) {
      return (sr().memoizedState = e);
    },
    useTransition: function () {
      var e = Em(!1),
        t = e[0];
      return (e = hC.bind(null, e[1])), (sr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = Ce,
        o = sr();
      if (xe) {
        if (r === void 0) throw Error(z(407));
        r = r();
      } else {
        if (((r = t()), We === null)) throw Error(z(349));
        Gn & 30 || Ly(n, t, r);
      }
      o.memoizedState = r;
      var i = { value: r, getSnapshot: t };
      return (
        (o.queue = i),
        $m(Iy.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        va(9, Fy.bind(null, n, i, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = sr(),
        t = We.identifierPrefix;
      if (xe) {
        var r = Tr,
          n = _r;
        (r = (n & ~(1 << (32 - Jt(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = ma++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = fC++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  vC = {
    readContext: Ut,
    useCallback: Uy,
    useContext: Ut,
    useEffect: sh,
    useImperativeHandle: Wy,
    useInsertionEffect: Oy,
    useLayoutEffect: Ny,
    useMemo: Hy,
    useReducer: mc,
    useRef: Vy,
    useState: function () {
      return mc(ga);
    },
    useDebugValue: lh,
    useDeferredValue: function (e) {
      var t = Ht();
      return Gy(t, De.memoizedState, e);
    },
    useTransition: function () {
      var e = mc(ga)[0],
        t = Ht().memoizedState;
      return [e, t];
    },
    useMutableSource: Ry,
    useSyncExternalStore: My,
    useId: Ky,
    unstable_isNewReconciler: !1,
  },
  yC = {
    readContext: Ut,
    useCallback: Uy,
    useContext: Ut,
    useEffect: sh,
    useImperativeHandle: Wy,
    useInsertionEffect: Oy,
    useLayoutEffect: Ny,
    useMemo: Hy,
    useReducer: gc,
    useRef: Vy,
    useState: function () {
      return gc(ga);
    },
    useDebugValue: lh,
    useDeferredValue: function (e) {
      var t = Ht();
      return De === null ? (t.memoizedState = e) : Gy(t, De.memoizedState, e);
    },
    useTransition: function () {
      var e = gc(ga)[0],
        t = Ht().memoizedState;
      return [e, t];
    },
    useMutableSource: Ry,
    useSyncExternalStore: My,
    useId: Ky,
    unstable_isNewReconciler: !1,
  };
function Xo(e, t) {
  try {
    var r = "",
      n = t;
    do (r += Gw(n)), (n = n.return);
    while (n);
    var o = r;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function vc(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function Md(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var bC = typeof WeakMap == "function" ? WeakMap : Map;
function qy(e, t, r) {
  (r = $r(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      Tl || ((Tl = !0), (Wd = n)), Md(e, t);
    }),
    r
  );
}
function Zy(e, t, r) {
  (r = $r(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    (r.payload = function () {
      return n(o);
    }),
      (r.callback = function () {
        Md(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (r.callback = function () {
        Md(e, t),
          typeof n != "function" &&
            (cn === null ? (cn = new Set([this])) : cn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    r
  );
}
function Am(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new bC();
    var o = new Set();
    n.set(t, o);
  } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o));
  o.has(r) || (o.add(r), (e = MC.bind(null, e, t, r)), t.then(e, e));
}
function zm(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Rm(e, t, r, n, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = $r(-1, 1)), (t.tag = 2), un(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var SC = Nr.ReactCurrentOwner,
  ht = !1;
function ot(e, t, r, n) {
  t.child = e === null ? Ay(t, null, r, n) : Ko(t, e.child, r, n);
}
function Mm(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return (
    Io(t, o),
    (n = ih(e, t, r, n, i, o)),
    (r = ah()),
    e !== null && !ht
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Dr(e, t, o))
      : (xe && r && Kf(t), (t.flags |= 1), ot(e, t, n, o), t.child)
  );
}
function Lm(e, t, r, n, o) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" &&
      !gh(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Jy(e, t, i, n, o))
      : ((e = js(r.type, null, n, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : ua), r(a, n) && e.ref === t.ref)
    )
      return Dr(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = fn(i, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Jy(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ua(i, n) && e.ref === t.ref)
      if (((ht = !1), (t.pendingProps = n = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (ht = !0);
      else return (t.lanes = e.lanes), Dr(e, t, o);
  }
  return Ld(e, t, r, n, o);
}
function e1(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        fe(xo, wt),
        (wt |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          fe(xo, wt),
          (wt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        fe(xo, wt),
        (wt |= n);
    }
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r),
      fe(xo, wt),
      (wt |= n);
  return ot(e, t, o, r), t.child;
}
function t1(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ld(e, t, r, n, o) {
  var i = mt(r) ? Un : rt.current;
  return (
    (i = Ho(t, i)),
    Io(t, o),
    (r = ih(e, t, r, n, i, o)),
    (n = ah()),
    e !== null && !ht
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Dr(e, t, o))
      : (xe && n && Kf(t), (t.flags |= 1), ot(e, t, r, o), t.child)
  );
}
function Fm(e, t, r, n, o) {
  if (mt(r)) {
    var i = !0;
    gl(t);
  } else i = !1;
  if ((Io(t, o), t.stateNode === null))
    Vs(e, t), Ey(t, r, n), Rd(t, r, n, o), (n = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = Ut(u))
      : ((u = mt(r) ? Un : rt.current), (u = Ho(t, u)));
    var c = r.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== n || l !== u) && Tm(t, a, n, u)),
      (Qr = !1);
    var f = t.memoizedState;
    (a.state = f),
      xl(t, n, a, o),
      (l = t.memoizedState),
      s !== n || f !== l || pt.current || Qr
        ? (typeof c == "function" && (zd(t, r, c, n), (l = t.memoizedState)),
          (s = Qr || _m(t, r, s, n, f, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = l)),
          (a.props = n),
          (a.state = l),
          (a.context = u),
          (n = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (a = t.stateNode),
      Ty(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Xt(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = r.contextType),
      typeof l == "object" && l !== null
        ? (l = Ut(l))
        : ((l = mt(r) ? Un : rt.current), (l = Ho(t, l)));
    var p = r.getDerivedStateFromProps;
    (c =
      typeof p == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== d || f !== l) && Tm(t, a, n, l)),
      (Qr = !1),
      (f = t.memoizedState),
      (a.state = f),
      xl(t, n, a, o);
    var v = t.memoizedState;
    s !== d || f !== v || pt.current || Qr
      ? (typeof p == "function" && (zd(t, r, p, n), (v = t.memoizedState)),
        (u = Qr || _m(t, r, u, n, f, v, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(n, v, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(n, v, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = v)),
        (a.props = n),
        (a.state = v),
        (a.context = l),
        (n = u))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return Fd(e, t, r, n, i, o);
}
function Fd(e, t, r, n, o, i) {
  t1(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a) return o && Sm(t, r, !1), Dr(e, t, i);
  (n = t.stateNode), (SC.current = t);
  var s =
    a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Ko(t, e.child, null, i)), (t.child = Ko(t, null, s, i)))
      : ot(e, t, s, i),
    (t.memoizedState = n.state),
    o && Sm(t, r, !0),
    t.child
  );
}
function r1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? bm(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && bm(e, t.context, !1),
    th(e, t.containerInfo);
}
function Im(e, t, r, n, o) {
  return Go(), Xf(o), (t.flags |= 256), ot(e, t, r, n), t.child;
}
var Id = { dehydrated: null, treeContext: null, retryLane: 0 };
function Dd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function n1(e, t, r) {
  var n = t.pendingProps,
    o = we.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    fe(we, o & 1),
    e === null)
  )
    return (
      $d(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = n.children),
          (e = n.fallback),
          i
            ? ((n = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(n & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = nu(a, n, 0, null)),
              (e = On(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Dd(r)),
              (t.memoizedState = Id),
              e)
            : uh(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return xC(e, t, a, n, s, o, r);
  if (i) {
    (i = n.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
    var l = { mode: "hidden", children: n.children };
    return (
      !(a & 1) && t.child !== o
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = l),
          (t.deletions = null))
        : ((n = fn(o, l)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = fn(s, i)) : ((i = On(i, a, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Dd(r)
          : {
              baseLanes: a.baseLanes | r,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = Id),
      n
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = fn(i, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function uh(e, t) {
  return (
    (t = nu({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function hs(e, t, r, n) {
  return (
    n !== null && Xf(n),
    Ko(t, e.child, null, r),
    (e = uh(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function xC(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = vc(Error(z(422)))), hs(e, t, a, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = n.fallback),
        (o = t.mode),
        (n = nu({ mode: "visible", children: n.children }, o, 0, null)),
        (i = On(i, o, a, null)),
        (i.flags |= 2),
        (n.return = t),
        (i.return = t),
        (n.sibling = i),
        (t.child = n),
        t.mode & 1 && Ko(t, e.child, null, a),
        (t.child.memoizedState = Dd(a)),
        (t.memoizedState = Id),
        i);
  if (!(t.mode & 1)) return hs(e, t, a, null);
  if (o.data === "$!") {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var s = n.dgst;
    return (n = s), (i = Error(z(419))), (n = vc(i, n, void 0)), hs(e, t, a, n);
  }
  if (((s = (a & e.childLanes) !== 0), ht || s)) {
    if (((n = We), n !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (n.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Ir(e, o), er(n, e, o, -1));
    }
    return mh(), (n = vc(Error(z(421)))), hs(e, t, a, n);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = LC.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (kt = ln(o.nextSibling)),
      (Ct = t),
      (xe = !0),
      (qt = null),
      e !== null &&
        ((Bt[Vt++] = _r),
        (Bt[Vt++] = Tr),
        (Bt[Vt++] = Hn),
        (_r = e.id),
        (Tr = e.overflow),
        (Hn = t)),
      (t = uh(t, n.children)),
      (t.flags |= 4096),
      t);
}
function Dm(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Ad(e.return, t, r);
}
function yc(e, t, r, n, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = r),
      (i.tailMode = o));
}
function o1(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    i = n.tail;
  if ((ot(e, t, n.children, r), (n = we.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Dm(e, r, t);
        else if (e.tag === 19) Dm(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((fe(we, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          (e = r.alternate),
            e !== null && wl(e) === null && (o = r),
            (r = r.sibling);
        (r = o),
          r === null
            ? ((o = t.child), (t.child = null))
            : ((o = r.sibling), (r.sibling = null)),
          yc(t, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && wl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = r), (r = o), (o = e);
        }
        yc(t, !0, r, null, i);
        break;
      case "together":
        yc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Vs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Dr(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Kn |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (
      e = t.child, r = fn(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = fn(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function wC(e, t, r) {
  switch (t.tag) {
    case 3:
      r1(t), Go();
      break;
    case 5:
      zy(t);
      break;
    case 1:
      mt(t.type) && gl(t);
      break;
    case 4:
      th(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value;
      fe(bl, n._currentValue), (n._currentValue = o);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (fe(we, we.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? n1(e, t, r)
          : (fe(we, we.current & 1),
            (e = Dr(e, t, r)),
            e !== null ? e.sibling : null);
      fe(we, we.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return o1(e, t, r);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        fe(we, we.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), e1(e, t, r);
  }
  return Dr(e, t, r);
}
var i1, Bd, a1, s1;
i1 = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
Bd = function () {};
a1 = function (e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    (e = t.stateNode), In(pr.current);
    var i = null;
    switch (r) {
      case "input":
        (o = ad(e, o)), (n = ad(e, n)), (i = []);
        break;
      case "select":
        (o = _e({}, o, { value: void 0 })),
          (n = _e({}, n, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = ud(e, o)), (n = ud(e, n)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = pl);
    }
    dd(r, n);
    var a;
    r = null;
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s) s.hasOwnProperty(a) && (r || (r = {}), (r[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ra.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (
        ((s = o?.[u]),
        n.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (r || (r = {}), (r[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (r || (r = {}), (r[a] = l[a]));
          } else r || (i || (i = []), i.push(u, r)), (r = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ra.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && ge("scroll", e),
                  i || s === l || (i = []))
                : (i = i || []).push(u, l));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
s1 = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function gi(e, t) {
  if (!xe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function Je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags & 14680064),
        (n |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags),
        (n |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function kC(e, t, r) {
  var n = t.pendingProps;
  switch ((Yf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Je(t), null;
    case 1:
      return mt(t.type) && ml(), Je(t), null;
    case 3:
      return (
        (n = t.stateNode),
        Yo(),
        ye(pt),
        ye(rt),
        nh(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (ds(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qt !== null && (Gd(qt), (qt = null)))),
        Bd(e, t),
        Je(t),
        null
      );
    case 5:
      rh(t);
      var o = In(pa.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        a1(e, t, r, n, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(z(166));
          return Je(t), null;
        }
        if (((e = In(pr.current)), ds(t))) {
          (n = t.stateNode), (r = t.type);
          var i = t.memoizedProps;
          switch (((n[fr] = t), (n[fa] = i), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              ge("cancel", n), ge("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              ge("load", n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Pi.length; o++) ge(Pi[o], n);
              break;
            case "source":
              ge("error", n);
              break;
            case "img":
            case "image":
            case "link":
              ge("error", n), ge("load", n);
              break;
            case "details":
              ge("toggle", n);
              break;
            case "input":
              Gp(n, i), ge("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!i.multiple }),
                ge("invalid", n);
              break;
            case "textarea":
              Yp(n, i), ge("invalid", n);
          }
          dd(r, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children"
                ? typeof s == "string"
                  ? n.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      cs(n.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    n.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      cs(n.textContent, s, e),
                    (o = ["children", "" + s]))
                : ra.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  ge("scroll", n);
            }
          switch (r) {
            case "input":
              rs(n), Kp(n, i, !0);
              break;
            case "textarea":
              rs(n), Xp(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = pl);
          }
          (n = o), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Lv(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = a.createElement(r, { is: n.is }))
                : ((e = a.createElement(r)),
                  r === "select" &&
                    ((a = e),
                    n.multiple
                      ? (a.multiple = !0)
                      : n.size && (a.size = n.size)))
              : (e = a.createElementNS(e, r)),
            (e[fr] = t),
            (e[fa] = n),
            i1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = fd(r, n)), r)) {
              case "dialog":
                ge("cancel", e), ge("close", e), (o = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", e), (o = n);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Pi.length; o++) ge(Pi[o], e);
                o = n;
                break;
              case "source":
                ge("error", e), (o = n);
                break;
              case "img":
              case "image":
              case "link":
                ge("error", e), ge("load", e), (o = n);
                break;
              case "details":
                ge("toggle", e), (o = n);
                break;
              case "input":
                Gp(e, n), (o = ad(e, n)), ge("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (o = _e({}, n, { value: void 0 })),
                  ge("invalid", e);
                break;
              case "textarea":
                Yp(e, n), (o = ud(e, n)), ge("invalid", e);
                break;
              default:
                o = n;
            }
            dd(r, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style"
                  ? Dv(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Fv(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (r !== "textarea" || l !== "") && na(e, l)
                    : typeof l == "number" && na(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (ra.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && ge("scroll", e)
                      : l != null && Mf(e, i, l, a));
              }
            switch (r) {
              case "input":
                rs(e), Kp(e, n, !1);
                break;
              case "textarea":
                rs(e), Xp(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + mn(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? Ro(e, !!n.multiple, i, !1)
                    : n.defaultValue != null &&
                      Ro(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = pl);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Je(t), null;
    case 6:
      if (e && t.stateNode != null) s1(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(z(166));
        if (((r = In(pa.current)), In(pr.current), ds(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[fr] = t),
            (i = n.nodeValue !== r) && ((e = Ct), e !== null))
          )
            switch (e.tag) {
              case 3:
                cs(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  cs(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[fr] = t),
            (t.stateNode = n);
      }
      return Je(t), null;
    case 13:
      if (
        (ye(we),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (xe && kt !== null && t.mode & 1 && !(t.flags & 128))
          Cy(), Go(), (t.flags |= 98560), (i = !1);
        else if (((i = ds(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(z(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(z(317));
            i[fr] = t;
          } else
            Go(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Je(t), (i = !1);
        } else qt !== null && (Gd(qt), (qt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || we.current & 1 ? Be === 0 && (Be = 3) : mh())),
          t.updateQueue !== null && (t.flags |= 4),
          Je(t),
          null);
    case 4:
      return (
        Yo(), Bd(e, t), e === null && ca(t.stateNode.containerInfo), Je(t), null
      );
    case 10:
      return Zf(t.type._context), Je(t), null;
    case 17:
      return mt(t.type) && ml(), Je(t), null;
    case 19:
      if ((ye(we), (i = t.memoizedState), i === null)) return Je(t), null;
      if (((n = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (n) gi(i, !1);
        else {
          if (Be !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = wl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    gi(i, !1),
                    n = a.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (i = r),
                    (e = n),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return fe(we, (we.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Ae() > Qo &&
            ((t.flags |= 128), (n = !0), gi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = wl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              gi(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !xe)
            )
              return Je(t), null;
          } else
            2 * Ae() - i.renderingStartTime > Qo &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), gi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((r = i.last),
            r !== null ? (r.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ae()),
          (t.sibling = null),
          (r = we.current),
          fe(we, n ? (r & 1) | 2 : r & 1),
          t)
        : (Je(t), null);
    case 22:
    case 23:
      return (
        ph(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? wt & 1073741824 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Je(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function CC(e, t) {
  switch ((Yf(t), t.tag)) {
    case 1:
      return (
        mt(t.type) && ml(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Yo(),
        ye(pt),
        ye(rt),
        nh(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return rh(t), null;
    case 13:
      if (
        (ye(we), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(z(340));
        Go();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ye(we), null;
    case 4:
      return Yo(), null;
    case 10:
      return Zf(t.type._context), null;
    case 22:
    case 23:
      return ph(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ps = !1,
  tt = !1,
  _C = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function So(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        Pe(e, t, n);
      }
    else r.current = null;
}
function Vd(e, t, r) {
  try {
    r();
  } catch (n) {
    Pe(e, t, n);
  }
}
var Bm = !1;
function TC(e, t) {
  if (((wd = dl), (e = dy()), Gf(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var o = n.anchorOffset,
            i = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch {
            r = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var p;
              d !== r || (o !== 0 && d.nodeType !== 3) || (s = a + o),
                d !== i || (n !== 0 && d.nodeType !== 3) || (l = a + n),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (f = d), (d = p);
            for (;;) {
              if (d === e) break t;
              if (
                (f === r && ++u === o && (s = a),
                f === i && ++c === n && (l = a),
                (p = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = p;
          }
          r = s === -1 || l === -1 ? null : { start: s, end: l };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (kd = { focusedElem: e, selectionRange: r }, dl = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var b = v.memoizedProps,
                    C = v.memoizedState,
                    g = t.stateNode,
                    h = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? b : Xt(t.type, b),
                      C
                    );
                  g.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(z(163));
            }
        } catch (k) {
          Pe(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (v = Bm), (Bm = !1), v;
}
function Ni(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Vd(t, r, i);
      }
      o = o.next;
    } while (o !== n);
  }
}
function tu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function Od(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function l1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), l1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[fr], delete t[fa], delete t[Td], delete t[lC], delete t[uC])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function u1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Vm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || u1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Nd(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = pl));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Nd(e, t, r), e = e.sibling; e !== null; ) Nd(e, t, r), (e = e.sibling);
}
function jd(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (jd(e, t, r), e = e.sibling; e !== null; ) jd(e, t, r), (e = e.sibling);
}
var Ye = null,
  Qt = !1;
function Ur(e, t, r) {
  for (r = r.child; r !== null; ) c1(e, t, r), (r = r.sibling);
}
function c1(e, t, r) {
  if (hr && typeof hr.onCommitFiberUnmount == "function")
    try {
      hr.onCommitFiberUnmount(Kl, r);
    } catch {}
  switch (r.tag) {
    case 5:
      tt || So(r, t);
    case 6:
      var n = Ye,
        o = Qt;
      (Ye = null),
        Ur(e, t, r),
        (Ye = n),
        (Qt = o),
        Ye !== null &&
          (Qt
            ? ((e = Ye),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Ye.removeChild(r.stateNode));
      break;
    case 18:
      Ye !== null &&
        (Qt
          ? ((e = Ye),
            (r = r.stateNode),
            e.nodeType === 8
              ? dc(e.parentNode, r)
              : e.nodeType === 1 && dc(e, r),
            sa(e))
          : dc(Ye, r.stateNode));
      break;
    case 4:
      (n = Ye),
        (o = Qt),
        (Ye = r.stateNode.containerInfo),
        (Qt = !0),
        Ur(e, t, r),
        (Ye = n),
        (Qt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !tt &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        o = n = n.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && Vd(r, t, a),
            (o = o.next);
        } while (o !== n);
      }
      Ur(e, t, r);
      break;
    case 1:
      if (
        !tt &&
        (So(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (s) {
          Pe(r, t, s);
        }
      Ur(e, t, r);
      break;
    case 21:
      Ur(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((tt = (n = tt) || r.memoizedState !== null), Ur(e, t, r), (tt = n))
        : Ur(e, t, r);
      break;
    default:
      Ur(e, t, r);
  }
}
function Om(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new _C()),
      t.forEach(function (n) {
        var o = FC.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(o, o));
      });
  }
}
function Kt(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      try {
        var i = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Ye = s.stateNode), (Qt = !1);
              break e;
            case 3:
              (Ye = s.stateNode.containerInfo), (Qt = !0);
              break e;
            case 4:
              (Ye = s.stateNode.containerInfo), (Qt = !0);
              break e;
          }
          s = s.return;
        }
        if (Ye === null) throw Error(z(160));
        c1(i, a, o), (Ye = null), (Qt = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Pe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) d1(t, e), (t = t.sibling);
}
function d1(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Kt(t, e), ir(e), n & 4)) {
        try {
          Ni(3, e, e.return), tu(3, e);
        } catch (b) {
          Pe(e, e.return, b);
        }
        try {
          Ni(5, e, e.return);
        } catch (b) {
          Pe(e, e.return, b);
        }
      }
      break;
    case 1:
      Kt(t, e), ir(e), n & 512 && r !== null && So(r, r.return);
      break;
    case 5:
      if (
        (Kt(t, e),
        ir(e),
        n & 512 && r !== null && So(r, r.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          na(o, "");
        } catch (b) {
          Pe(e, e.return, b);
        }
      }
      if (n & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = r !== null ? r.memoizedProps : i,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Rv(o, i),
              fd(s, a);
            var u = fd(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1];
              c === "style"
                ? Dv(o, d)
                : c === "dangerouslySetInnerHTML"
                ? Fv(o, d)
                : c === "children"
                ? na(o, d)
                : Mf(o, c, d, u);
            }
            switch (s) {
              case "input":
                sd(o, i);
                break;
              case "textarea":
                Mv(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? Ro(o, !!i.multiple, p, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Ro(o, !!i.multiple, i.defaultValue, !0)
                      : Ro(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[fa] = i;
          } catch (b) {
            Pe(e, e.return, b);
          }
      }
      break;
    case 6:
      if ((Kt(t, e), ir(e), n & 4)) {
        if (e.stateNode === null) throw Error(z(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (b) {
          Pe(e, e.return, b);
        }
      }
      break;
    case 3:
      if (
        (Kt(t, e), ir(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          sa(t.containerInfo);
        } catch (b) {
          Pe(e, e.return, b);
        }
      break;
    case 4:
      Kt(t, e), ir(e);
      break;
    case 13:
      Kt(t, e),
        ir(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (fh = Ae())),
        n & 4 && Om(e);
      break;
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((tt = (u = tt) || c), Kt(t, e), (tt = u)) : Kt(t, e),
        ir(e),
        n & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (L = e, c = e.child; c !== null; ) {
            for (d = L = c; L !== null; ) {
              switch (((f = L), (p = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ni(4, f, f.return);
                  break;
                case 1:
                  So(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (n = f), (r = f.return);
                    try {
                      (t = n),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (b) {
                      Pe(n, r, b);
                    }
                  }
                  break;
                case 5:
                  So(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    jm(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = f), (L = p)) : jm(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = Iv("display", a)));
              } catch (b) {
                Pe(e, e.return, b);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (b) {
                Pe(e, e.return, b);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Kt(t, e), ir(e), n & 4 && Om(e);
      break;
    case 21:
      break;
    default:
      Kt(t, e), ir(e);
  }
}
function ir(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (u1(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(z(160));
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode;
          n.flags & 32 && (na(o, ""), (n.flags &= -33));
          var i = Vm(e);
          jd(e, i, o);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo,
            s = Vm(e);
          Nd(e, s, a);
          break;
        default:
          throw Error(z(161));
      }
    } catch (l) {
      Pe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function PC(e, t, r) {
  (L = e), f1(e);
}
function f1(e, t, r) {
  for (var n = (e.mode & 1) !== 0; L !== null; ) {
    var o = L,
      i = o.child;
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || ps;
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || tt;
        s = ps;
        var u = tt;
        if (((ps = a), (tt = l) && !u))
          for (L = o; L !== null; )
            (a = L),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Wm(o)
                : l !== null
                ? ((l.return = a), (L = l))
                : Wm(o);
        for (; i !== null; ) (L = i), f1(i), (i = i.sibling);
        (L = o), (ps = s), (tt = u);
      }
      Nm(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (L = i)) : Nm(e);
  }
}
function Nm(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              tt || tu(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !tt)
                if (r === null) n.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : Xt(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    o,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Cm(t, i, n);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                Cm(t, a, r);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (r === null && t.flags & 4) {
                r = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && r.focus();
                    break;
                  case "img":
                    l.src && (r.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && sa(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(z(163));
          }
        tt || (t.flags & 512 && Od(t));
      } catch (f) {
        Pe(t, t.return, f);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (L = r);
      break;
    }
    L = t.return;
  }
}
function jm(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (L = r);
      break;
    }
    L = t.return;
  }
}
function Wm(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            tu(4, t);
          } catch (l) {
            Pe(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              Pe(t, o, l);
            }
          }
          var i = t.return;
          try {
            Od(t);
          } catch (l) {
            Pe(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Od(t);
          } catch (l) {
            Pe(t, a, l);
          }
      }
    } catch (l) {
      Pe(t, t.return, l);
    }
    if (t === e) {
      L = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (L = s);
      break;
    }
    L = t.return;
  }
}
var EC = Math.ceil,
  _l = Nr.ReactCurrentDispatcher,
  ch = Nr.ReactCurrentOwner,
  jt = Nr.ReactCurrentBatchConfig,
  X = 0,
  We = null,
  Fe = null,
  Qe = 0,
  wt = 0,
  xo = Sn(0),
  Be = 0,
  ya = null,
  Kn = 0,
  ru = 0,
  dh = 0,
  ji = null,
  dt = null,
  fh = 0,
  Qo = 1 / 0,
  xr = null,
  Tl = !1,
  Wd = null,
  cn = null,
  ms = !1,
  rn = null,
  Pl = 0,
  Wi = 0,
  Ud = null,
  Os = -1,
  Ns = 0;
function at() {
  return X & 6 ? Ae() : Os !== -1 ? Os : (Os = Ae());
}
function dn(e) {
  return e.mode & 1
    ? X & 2 && Qe !== 0
      ? Qe & -Qe
      : dC.transition !== null
      ? (Ns === 0 && (Ns = Xv()), Ns)
      : ((e = ie),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ry(e.type))),
        e)
    : 1;
}
function er(e, t, r, n) {
  if (50 < Wi) throw ((Wi = 0), (Ud = null), Error(z(185)));
  Ra(e, r, n),
    (!(X & 2) || e !== We) &&
      (e === We && (!(X & 2) && (ru |= r), Be === 4 && Jr(e, Qe)),
      gt(e, n),
      r === 1 && X === 0 && !(t.mode & 1) && ((Qo = Ae() + 500), Zl && xn()));
}
function gt(e, t) {
  var r = e.callbackNode;
  dk(e, t);
  var n = cl(e, e === We ? Qe : 0);
  if (n === 0)
    r !== null && Zp(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Zp(r), t === 1))
      e.tag === 0 ? cC(Um.bind(null, e)) : xy(Um.bind(null, e)),
        aC(function () {
          !(X & 6) && xn();
        }),
        (r = null);
    else {
      switch (Qv(n)) {
        case 1:
          r = Bf;
          break;
        case 4:
          r = Kv;
          break;
        case 16:
          r = ul;
          break;
        case 536870912:
          r = Yv;
          break;
        default:
          r = ul;
      }
      r = S1(r, h1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function h1(e, t) {
  if (((Os = -1), (Ns = 0), X & 6)) throw Error(z(327));
  var r = e.callbackNode;
  if (Do() && e.callbackNode !== r) return null;
  var n = cl(e, e === We ? Qe : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = El(e, n);
  else {
    t = n;
    var o = X;
    X |= 2;
    var i = m1();
    (We !== e || Qe !== t) && ((xr = null), (Qo = Ae() + 500), Vn(e, t));
    do
      try {
        zC();
        break;
      } catch (s) {
        p1(e, s);
      }
    while (1);
    qf(),
      (_l.current = i),
      (X = o),
      Fe !== null ? (t = 0) : ((We = null), (Qe = 0), (t = Be));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = vd(e)), o !== 0 && ((n = o), (t = Hd(e, o)))), t === 1)
    )
      throw ((r = ya), Vn(e, 0), Jr(e, n), gt(e, Ae()), r);
    if (t === 6) Jr(e, n);
    else {
      if (
        ((o = e.current.alternate),
        !(n & 30) &&
          !$C(o) &&
          ((t = El(e, n)),
          t === 2 && ((i = vd(e)), i !== 0 && ((n = i), (t = Hd(e, i)))),
          t === 1))
      )
        throw ((r = ya), Vn(e, 0), Jr(e, n), gt(e, Ae()), r);
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          $n(e, dt, xr);
          break;
        case 3:
          if (
            (Jr(e, n), (n & 130023424) === n && ((t = fh + 500 - Ae()), 10 < t))
          ) {
            if (cl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              at(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = _d($n.bind(null, e, dt, xr), t);
            break;
          }
          $n(e, dt, xr);
          break;
        case 4:
          if ((Jr(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var a = 31 - Jt(n);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (n &= ~i);
          }
          if (
            ((n = o),
            (n = Ae() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * EC(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = _d($n.bind(null, e, dt, xr), n);
            break;
          }
          $n(e, dt, xr);
          break;
        case 5:
          $n(e, dt, xr);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return gt(e, Ae()), e.callbackNode === r ? h1.bind(null, e) : null;
}
function Hd(e, t) {
  var r = ji;
  return (
    e.current.memoizedState.isDehydrated && (Vn(e, t).flags |= 256),
    (e = El(e, t)),
    e !== 2 && ((t = dt), (dt = r), t !== null && Gd(t)),
    e
  );
}
function Gd(e) {
  dt === null ? (dt = e) : dt.push.apply(dt, e);
}
function $C(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!tr(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Jr(e, t) {
  for (
    t &= ~dh,
      t &= ~ru,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - Jt(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function Um(e) {
  if (X & 6) throw Error(z(327));
  Do();
  var t = cl(e, 0);
  if (!(t & 1)) return gt(e, Ae()), null;
  var r = El(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = vd(e);
    n !== 0 && ((t = n), (r = Hd(e, n)));
  }
  if (r === 1) throw ((r = ya), Vn(e, 0), Jr(e, t), gt(e, Ae()), r);
  if (r === 6) throw Error(z(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    $n(e, dt, xr),
    gt(e, Ae()),
    null
  );
}
function hh(e, t) {
  var r = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = r), X === 0 && ((Qo = Ae() + 500), Zl && xn());
  }
}
function Yn(e) {
  rn !== null && rn.tag === 0 && !(X & 6) && Do();
  var t = X;
  X |= 1;
  var r = jt.transition,
    n = ie;
  try {
    if (((jt.transition = null), (ie = 1), e)) return e();
  } finally {
    (ie = n), (jt.transition = r), (X = t), !(X & 6) && xn();
  }
}
function ph() {
  (wt = xo.current), ye(xo);
}
function Vn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), iC(r)), Fe !== null))
    for (r = Fe.return; r !== null; ) {
      var n = r;
      switch ((Yf(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && ml();
          break;
        case 3:
          Yo(), ye(pt), ye(rt), nh();
          break;
        case 5:
          rh(n);
          break;
        case 4:
          Yo();
          break;
        case 13:
          ye(we);
          break;
        case 19:
          ye(we);
          break;
        case 10:
          Zf(n.type._context);
          break;
        case 22:
        case 23:
          ph();
      }
      r = r.return;
    }
  if (
    ((We = e),
    (Fe = e = fn(e.current, null)),
    (Qe = wt = t),
    (Be = 0),
    (ya = null),
    (dh = ru = Kn = 0),
    (dt = ji = null),
    Fn !== null)
  ) {
    for (t = 0; t < Fn.length; t++)
      if (((r = Fn[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var o = n.next,
          i = r.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (n.next = a);
        }
        r.pending = n;
      }
    Fn = null;
  }
  return e;
}
function p1(e, t) {
  do {
    var r = Fe;
    try {
      if ((qf(), (Ds.current = Cl), kl)) {
        for (var n = Ce.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), (n = n.next);
        }
        kl = !1;
      }
      if (
        ((Gn = 0),
        (Ne = De = Ce = null),
        (Oi = !1),
        (ma = 0),
        (ch.current = null),
        r === null || r.return === null)
      ) {
        (Be = 1), (ya = t), (Fe = null);
        break;
      }
      e: {
        var i = e,
          a = r.return,
          s = r,
          l = t;
        if (
          ((t = Qe),
          (s.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = zm(a);
          if (p !== null) {
            (p.flags &= -257),
              Rm(p, a, s, i, t),
              p.mode & 1 && Am(i, u, t),
              (t = p),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var b = new Set();
              b.add(l), (t.updateQueue = b);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Am(i, u, t), mh();
              break e;
            }
            l = Error(z(426));
          }
        } else if (xe && s.mode & 1) {
          var C = zm(a);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              Rm(C, a, s, i, t),
              Xf(Xo(l, s));
            break e;
          }
        }
        (i = l = Xo(l, s)),
          Be !== 4 && (Be = 2),
          ji === null ? (ji = [i]) : ji.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = qy(i, l, t);
              km(i, g);
              break e;
            case 1:
              s = l;
              var h = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (cn === null || !cn.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var k = Zy(i, s, t);
                km(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      v1(r);
    } catch (P) {
      (t = P), Fe === r && r !== null && (Fe = r = r.return);
      continue;
    }
    break;
  } while (1);
}
function m1() {
  var e = _l.current;
  return (_l.current = Cl), e === null ? Cl : e;
}
function mh() {
  (Be === 0 || Be === 3 || Be === 2) && (Be = 4),
    We === null || (!(Kn & 268435455) && !(ru & 268435455)) || Jr(We, Qe);
}
function El(e, t) {
  var r = X;
  X |= 2;
  var n = m1();
  (We !== e || Qe !== t) && ((xr = null), Vn(e, t));
  do
    try {
      AC();
      break;
    } catch (o) {
      p1(e, o);
    }
  while (1);
  if ((qf(), (X = r), (_l.current = n), Fe !== null)) throw Error(z(261));
  return (We = null), (Qe = 0), Be;
}
function AC() {
  for (; Fe !== null; ) g1(Fe);
}
function zC() {
  for (; Fe !== null && !rk(); ) g1(Fe);
}
function g1(e) {
  var t = b1(e.alternate, e, wt);
  (e.memoizedProps = e.pendingProps),
    t === null ? v1(e) : (Fe = t),
    (ch.current = null);
}
function v1(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = CC(r, t)), r !== null)) {
        (r.flags &= 32767), (Fe = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Be = 6), (Fe = null);
        return;
      }
    } else if (((r = kC(r, t, wt)), r !== null)) {
      Fe = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Fe = t;
      return;
    }
    Fe = t = e;
  } while (t !== null);
  Be === 0 && (Be = 5);
}
function $n(e, t, r) {
  var n = ie,
    o = jt.transition;
  try {
    (jt.transition = null), (ie = 1), RC(e, t, r, n);
  } finally {
    (jt.transition = o), (ie = n);
  }
  return null;
}
function RC(e, t, r, n) {
  do Do();
  while (rn !== null);
  if (X & 6) throw Error(z(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(z(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = r.lanes | r.childLanes;
  if (
    (fk(e, i),
    e === We && ((Fe = We = null), (Qe = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      ms ||
      ((ms = !0),
      S1(ul, function () {
        return Do(), null;
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    (i = jt.transition), (jt.transition = null);
    var a = ie;
    ie = 1;
    var s = X;
    (X |= 4),
      (ch.current = null),
      TC(e, r),
      d1(r, e),
      Zk(kd),
      (dl = !!wd),
      (kd = wd = null),
      (e.current = r),
      PC(r),
      nk(),
      (X = s),
      (ie = a),
      (jt.transition = i);
  } else e.current = r;
  if (
    (ms && ((ms = !1), (rn = e), (Pl = o)),
    (i = e.pendingLanes),
    i === 0 && (cn = null),
    ak(r.stateNode),
    gt(e, Ae()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest });
  if (Tl) throw ((Tl = !1), (e = Wd), (Wd = null), e);
  return (
    Pl & 1 && e.tag !== 0 && Do(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ud ? Wi++ : ((Wi = 0), (Ud = e))) : (Wi = 0),
    xn(),
    null
  );
}
function Do() {
  if (rn !== null) {
    var e = Qv(Pl),
      t = jt.transition,
      r = ie;
    try {
      if (((jt.transition = null), (ie = 16 > e ? 16 : e), rn === null))
        var n = !1;
      else {
        if (((e = rn), (rn = null), (Pl = 0), X & 6)) throw Error(z(331));
        var o = X;
        for (X |= 4, L = e.current; L !== null; ) {
          var i = L,
            a = i.child;
          if (L.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ni(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (L = d);
                  else
                    for (; L !== null; ) {
                      c = L;
                      var f = c.sibling,
                        p = c.return;
                      if ((l1(c), c === u)) {
                        L = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = p), (L = f);
                        break;
                      }
                      L = p;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var b = v.child;
                if (b !== null) {
                  v.child = null;
                  do {
                    var C = b.sibling;
                    (b.sibling = null), (b = C);
                  } while (b !== null);
                }
              }
              L = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (L = a);
          else
            e: for (; L !== null; ) {
              if (((i = L), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ni(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (L = g);
                break e;
              }
              L = i.return;
            }
        }
        var h = e.current;
        for (L = h; L !== null; ) {
          a = L;
          var m = a.child;
          if (a.subtreeFlags & 2064 && m !== null) (m.return = a), (L = m);
          else
            e: for (a = h; L !== null; ) {
              if (((s = L), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      tu(9, s);
                  }
                } catch (P) {
                  Pe(s, s.return, P);
                }
              if (s === a) {
                L = null;
                break e;
              }
              var k = s.sibling;
              if (k !== null) {
                (k.return = s.return), (L = k);
                break e;
              }
              L = s.return;
            }
        }
        if (
          ((X = o), xn(), hr && typeof hr.onPostCommitFiberRoot == "function")
        )
          try {
            hr.onPostCommitFiberRoot(Kl, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (ie = r), (jt.transition = t);
    }
  }
  return !1;
}
function Hm(e, t, r) {
  (t = Xo(r, t)),
    (t = qy(e, t, 1)),
    (e = un(e, t, 1)),
    (t = at()),
    e !== null && (Ra(e, 1, t), gt(e, t));
}
function Pe(e, t, r) {
  if (e.tag === 3) Hm(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Hm(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (cn === null || !cn.has(n)))
        ) {
          (e = Xo(r, e)),
            (e = Zy(t, e, 1)),
            (t = un(t, e, 1)),
            (e = at()),
            t !== null && (Ra(t, 1, e), gt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function MC(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = at()),
    (e.pingedLanes |= e.suspendedLanes & r),
    We === e &&
      (Qe & r) === r &&
      (Be === 4 || (Be === 3 && (Qe & 130023424) === Qe && 500 > Ae() - fh)
        ? Vn(e, 0)
        : (dh |= r)),
    gt(e, t);
}
function y1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = is), (is <<= 1), !(is & 130023424) && (is = 4194304))
      : (t = 1));
  var r = at();
  (e = Ir(e, t)), e !== null && (Ra(e, t, r), gt(e, r));
}
function LC(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), y1(e, r);
}
function FC(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        o = e.memoizedState;
      o !== null && (r = o.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(z(314));
  }
  n !== null && n.delete(t), y1(e, r);
}
var b1;
b1 = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pt.current) ht = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (ht = !1), wC(e, t, r);
      ht = !!(e.flags & 131072);
    }
  else (ht = !1), xe && t.flags & 1048576 && wy(t, yl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      Vs(e, t), (e = t.pendingProps);
      var o = Ho(t, rt.current);
      Io(t, r), (o = ih(null, t, n, e, o, r));
      var i = ah();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            mt(n) ? ((i = !0), gl(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            eh(t),
            (o.updater = Jl),
            (t.stateNode = o),
            (o._reactInternals = t),
            Rd(t, n, e, r),
            (t = Fd(null, t, n, !0, i, r)))
          : ((t.tag = 0), xe && i && Kf(t), ot(null, t, o, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (Vs(e, t),
          (e = t.pendingProps),
          (o = n._init),
          (n = o(n._payload)),
          (t.type = n),
          (o = t.tag = DC(n)),
          (e = Xt(n, e)),
          o)
        ) {
          case 0:
            t = Ld(null, t, n, e, r);
            break e;
          case 1:
            t = Fm(null, t, n, e, r);
            break e;
          case 11:
            t = Mm(null, t, n, e, r);
            break e;
          case 14:
            t = Lm(null, t, n, Xt(n.type, e), r);
            break e;
        }
        throw Error(z(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Xt(n, o)),
        Ld(e, t, n, o, r)
      );
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Xt(n, o)),
        Fm(e, t, n, o, r)
      );
    case 3:
      e: {
        if ((r1(t), e === null)) throw Error(z(387));
        (n = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Ty(e, t),
          xl(t, n, null, r);
        var a = t.memoizedState;
        if (((n = a.element), i.isDehydrated))
          if (
            ((i = {
              element: n,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Xo(Error(z(423)), t)), (t = Im(e, t, n, r, o));
            break e;
          } else if (n !== o) {
            (o = Xo(Error(z(424)), t)), (t = Im(e, t, n, r, o));
            break e;
          } else
            for (
              kt = ln(t.stateNode.containerInfo.firstChild),
                Ct = t,
                xe = !0,
                qt = null,
                r = Ay(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Go(), n === o)) {
            t = Dr(e, t, r);
            break e;
          }
          ot(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        zy(t),
        e === null && $d(t),
        (n = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Cd(n, o) ? (a = null) : i !== null && Cd(n, i) && (t.flags |= 32),
        t1(e, t),
        ot(e, t, a, r),
        t.child
      );
    case 6:
      return e === null && $d(t), null;
    case 13:
      return n1(e, t, r);
    case 4:
      return (
        th(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Ko(t, null, n, r)) : ot(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Xt(n, o)),
        Mm(e, t, n, o, r)
      );
    case 7:
      return ot(e, t, t.pendingProps, r), t.child;
    case 8:
      return ot(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return ot(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          fe(bl, n._currentValue),
          (n._currentValue = a),
          i !== null)
        )
          if (tr(i.value, a)) {
            if (i.children === o.children && !pt.current) {
              t = Dr(e, t, r);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (i.tag === 1) {
                      (l = $r(-1, r & -r)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= r),
                      (l = i.alternate),
                      l !== null && (l.lanes |= r),
                      Ad(i.return, r, t),
                      (s.lanes |= r);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(z(341));
                (a.lanes |= r),
                  (s = a.alternate),
                  s !== null && (s.lanes |= r),
                  Ad(a, r, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        ot(e, t, o.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (n = t.pendingProps.children),
        Io(t, r),
        (o = Ut(o)),
        (n = n(o)),
        (t.flags |= 1),
        ot(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (o = Xt(n, t.pendingProps)),
        (o = Xt(n.type, o)),
        Lm(e, t, n, o, r)
      );
    case 15:
      return Jy(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Xt(n, o)),
        Vs(e, t),
        (t.tag = 1),
        mt(n) ? ((e = !0), gl(t)) : (e = !1),
        Io(t, r),
        Ey(t, n, o),
        Rd(t, n, o, r),
        Fd(null, t, n, !0, e, r)
      );
    case 19:
      return o1(e, t, r);
    case 22:
      return e1(e, t, r);
  }
  throw Error(z(156, t.tag));
};
function S1(e, t) {
  return Gv(e, t);
}
function IC(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ot(e, t, r, n) {
  return new IC(e, t, r, n);
}
function gh(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function DC(e) {
  if (typeof e == "function") return gh(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ff)) return 11;
    if (e === If) return 14;
  }
  return 2;
}
function fn(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Ot(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function js(e, t, r, n, o, i) {
  var a = 2;
  if (((n = e), typeof e == "function")) gh(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case co:
        return On(r.children, o, i, t);
      case Lf:
        (a = 8), (o |= 8);
        break;
      case rd:
        return (
          (e = Ot(12, r, t, o | 2)), (e.elementType = rd), (e.lanes = i), e
        );
      case nd:
        return (e = Ot(13, r, t, o)), (e.elementType = nd), (e.lanes = i), e;
      case od:
        return (e = Ot(19, r, t, o)), (e.elementType = od), (e.lanes = i), e;
      case $v:
        return nu(r, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Pv:
              a = 10;
              break e;
            case Ev:
              a = 9;
              break e;
            case Ff:
              a = 11;
              break e;
            case If:
              a = 14;
              break e;
            case Xr:
              (a = 16), (n = null);
              break e;
          }
        throw Error(z(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ot(a, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t
  );
}
function On(e, t, r, n) {
  return (e = Ot(7, e, n, t)), (e.lanes = r), e;
}
function nu(e, t, r, n) {
  return (
    (e = Ot(22, e, n, t)),
    (e.elementType = $v),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function bc(e, t, r) {
  return (e = Ot(6, e, null, t)), (e.lanes = r), e;
}
function Sc(e, t, r) {
  return (
    (t = Ot(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function BC(e, t, r, n, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ec(0)),
    (this.expirationTimes = ec(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ec(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function vh(e, t, r, n, o, i, a, s, l) {
  return (
    (e = new BC(e, t, r, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ot(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    eh(i),
    e
  );
}
function VC(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: uo,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function x1(e) {
  if (!e) return gn;
  e = e._reactInternals;
  e: {
    if (qn(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (mt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(z(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (mt(r)) return Sy(e, r, t);
  }
  return t;
}
function w1(e, t, r, n, o, i, a, s, l) {
  return (
    (e = vh(r, n, !0, e, o, i, a, s, l)),
    (e.context = x1(null)),
    (r = e.current),
    (n = at()),
    (o = dn(r)),
    (i = $r(n, o)),
    (i.callback = t ?? null),
    un(r, i, o),
    (e.current.lanes = o),
    Ra(e, o, n),
    gt(e, n),
    e
  );
}
function ou(e, t, r, n) {
  var o = t.current,
    i = at(),
    a = dn(o);
  return (
    (r = x1(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = $r(i, a)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = un(o, t, a)),
    e !== null && (er(e, o, a, i), Is(e, o, a)),
    a
  );
}
function $l(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Gm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function yh(e, t) {
  Gm(e, t), (e = e.alternate) && Gm(e, t);
}
function OC() {
  return null;
}
var k1 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function bh(e) {
  this._internalRoot = e;
}
iu.prototype.render = bh.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  ou(e, t, null, null);
};
iu.prototype.unmount = bh.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yn(function () {
      ou(null, e, null, null);
    }),
      (t[Fr] = null);
  }
};
function iu(e) {
  this._internalRoot = e;
}
iu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Jv();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Zr.length && t !== 0 && t < Zr[r].priority; r++);
    Zr.splice(r, 0, e), r === 0 && ty(e);
  }
};
function Sh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function au(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Km() {}
function NC(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var i = n;
      n = function () {
        var u = $l(a);
        i.call(u);
      };
    }
    var a = w1(t, n, e, 0, null, !1, !1, "", Km);
    return (
      (e._reactRootContainer = a),
      (e[Fr] = a.current),
      ca(e.nodeType === 8 ? e.parentNode : e),
      Yn(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof n == "function") {
    var s = n;
    n = function () {
      var u = $l(l);
      s.call(u);
    };
  }
  var l = vh(e, 0, !1, null, null, !1, !1, "", Km);
  return (
    (e._reactRootContainer = l),
    (e[Fr] = l.current),
    ca(e.nodeType === 8 ? e.parentNode : e),
    Yn(function () {
      ou(t, l, r, n);
    }),
    l
  );
}
function su(e, t, r, n, o) {
  var i = r._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var l = $l(a);
        s.call(l);
      };
    }
    ou(t, a, e, o);
  } else a = NC(r, t, e, o, n);
  return $l(a);
}
qv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Ti(t.pendingLanes);
        r !== 0 &&
          (Vf(t, r | 1), gt(t, Ae()), !(X & 6) && ((Qo = Ae() + 500), xn()));
      }
      break;
    case 13:
      Yn(function () {
        var n = Ir(e, 1);
        if (n !== null) {
          var o = at();
          er(n, e, 1, o);
        }
      }),
        yh(e, 1);
  }
};
Of = function (e) {
  if (e.tag === 13) {
    var t = Ir(e, 134217728);
    if (t !== null) {
      var r = at();
      er(t, e, 134217728, r);
    }
    yh(e, 134217728);
  }
};
Zv = function (e) {
  if (e.tag === 13) {
    var t = dn(e),
      r = Ir(e, t);
    if (r !== null) {
      var n = at();
      er(r, e, t, n);
    }
    yh(e, t);
  }
};
Jv = function () {
  return ie;
};
ey = function (e, t) {
  var r = ie;
  try {
    return (ie = e), t();
  } finally {
    ie = r;
  }
};
pd = function (e, t, r) {
  switch (t) {
    case "input":
      if ((sd(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var o = ql(n);
            if (!o) throw Error(z(90));
            zv(n), sd(n, o);
          }
        }
      }
      break;
    case "textarea":
      Mv(e, r);
      break;
    case "select":
      (t = r.value), t != null && Ro(e, !!r.multiple, t, !1);
  }
};
Ov = hh;
Nv = Yn;
var jC = { usingClientEntryPoint: !1, Events: [La, mo, ql, Bv, Vv, hh] },
  vi = {
    findFiberByHostInstance: Ln,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  WC = {
    bundleType: vi.bundleType,
    version: vi.version,
    rendererPackageName: vi.rendererPackageName,
    rendererConfig: vi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Uv(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vi.findFiberByHostInstance || OC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var gs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gs.isDisabled && gs.supportsFiber)
    try {
      (Kl = gs.inject(WC)), (hr = gs);
    } catch {}
}
$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jC;
$t.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Sh(t)) throw Error(z(200));
  return VC(e, t, null, r);
};
$t.createRoot = function (e, t) {
  if (!Sh(e)) throw Error(z(299));
  var r = !1,
    n = "",
    o = k1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = vh(e, 1, !1, null, null, r, !1, n, o)),
    (e[Fr] = t.current),
    ca(e.nodeType === 8 ? e.parentNode : e),
    new bh(t)
  );
};
$t.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(z(188))
      : ((e = Object.keys(e).join(",")), Error(z(268, e)));
  return (e = Uv(t)), (e = e === null ? null : e.stateNode), e;
};
$t.flushSync = function (e) {
  return Yn(e);
};
$t.hydrate = function (e, t, r) {
  if (!au(t)) throw Error(z(200));
  return su(null, e, t, !0, r);
};
$t.hydrateRoot = function (e, t, r) {
  if (!Sh(e)) throw Error(z(405));
  var n = (r != null && r.hydratedSources) || null,
    o = !1,
    i = "",
    a = k1;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    (t = w1(t, null, e, 1, r ?? null, o, !1, i, a)),
    (e[Fr] = t.current),
    ca(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (o = r._getVersion),
        (o = o(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, o])
          : t.mutableSourceEagerHydrationData.push(r, o);
  return new iu(t);
};
$t.render = function (e, t, r) {
  if (!au(t)) throw Error(z(200));
  return su(null, e, t, !1, r);
};
$t.unmountComponentAtNode = function (e) {
  if (!au(e)) throw Error(z(40));
  return e._reactRootContainer
    ? (Yn(function () {
        su(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Fr] = null);
        });
      }),
      !0)
    : !1;
};
$t.unstable_batchedUpdates = hh;
$t.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!au(r)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return su(e, t, r, !1, n);
};
$t.version = "18.2.0-next-9e3b772b8-20220608";
function C1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C1);
    } catch (e) {
      console.error(e);
    }
}
C1(), (wv.exports = $t);
var xh = wv.exports,
  Ym = xh;
(ed.createRoot = Ym.createRoot), (ed.hydrateRoot = Ym.hydrateRoot);
function UC(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function HC(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var GC = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (o) {
        var i;
        n.tags.length === 0
          ? n.insertionPoint
            ? (i = n.insertionPoint.nextSibling)
            : n.prepend
            ? (i = n.container.firstChild)
            : (i = n.before)
          : (i = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(o, i),
          n.tags.push(o);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(HC(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = UC(o);
          try {
            i.insertRule(n, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  et = "-ms-",
  Al = "-moz-",
  J = "-webkit-",
  _1 = "comm",
  wh = "rule",
  kh = "decl",
  KC = "@import",
  T1 = "@keyframes",
  YC = "@layer",
  XC = Math.abs,
  lu = String.fromCharCode,
  QC = Object.assign;
function qC(e, t) {
  return Xe(e, 0) ^ 45
    ? (((((((t << 2) ^ Xe(e, 0)) << 2) ^ Xe(e, 1)) << 2) ^ Xe(e, 2)) << 2) ^
        Xe(e, 3)
    : 0;
}
function P1(e) {
  return e.trim();
}
function ZC(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, r) {
  return e.replace(t, r);
}
function Kd(e, t) {
  return e.indexOf(t);
}
function Xe(e, t) {
  return e.charCodeAt(t) | 0;
}
function ba(e, t, r) {
  return e.slice(t, r);
}
function cr(e) {
  return e.length;
}
function Ch(e) {
  return e.length;
}
function vs(e, t) {
  return t.push(e), e;
}
function JC(e, t) {
  return e.map(t).join("");
}
var uu = 1,
  qo = 1,
  E1 = 0,
  vt = 0,
  Le = 0,
  ii = "";
function cu(e, t, r, n, o, i, a) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: i,
    line: uu,
    column: qo,
    length: a,
    return: "",
  };
}
function yi(e, t) {
  return QC(cu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function e_() {
  return Le;
}
function t_() {
  return (
    (Le = vt > 0 ? Xe(ii, --vt) : 0), qo--, Le === 10 && ((qo = 1), uu--), Le
  );
}
function _t() {
  return (
    (Le = vt < E1 ? Xe(ii, vt++) : 0), qo++, Le === 10 && ((qo = 1), uu++), Le
  );
}
function mr() {
  return Xe(ii, vt);
}
function Ws() {
  return vt;
}
function Ia(e, t) {
  return ba(ii, e, t);
}
function Sa(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function $1(e) {
  return (uu = qo = 1), (E1 = cr((ii = e))), (vt = 0), [];
}
function A1(e) {
  return (ii = ""), e;
}
function Us(e) {
  return P1(Ia(vt - 1, Yd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function r_(e) {
  for (; (Le = mr()) && Le < 33; ) _t();
  return Sa(e) > 2 || Sa(Le) > 3 ? "" : " ";
}
function n_(e, t) {
  for (
    ;
    --t &&
    _t() &&
    !(Le < 48 || Le > 102 || (Le > 57 && Le < 65) || (Le > 70 && Le < 97));

  );
  return Ia(e, Ws() + (t < 6 && mr() == 32 && _t() == 32));
}
function Yd(e) {
  for (; _t(); )
    switch (Le) {
      case e:
        return vt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yd(Le);
        break;
      case 40:
        e === 41 && Yd(e);
        break;
      case 92:
        _t();
        break;
    }
  return vt;
}
function o_(e, t) {
  for (; _t() && e + Le !== 47 + 10; )
    if (e + Le === 42 + 42 && mr() === 47) break;
  return "/*" + Ia(t, vt - 1) + "*" + lu(e === 47 ? e : _t());
}
function i_(e) {
  for (; !Sa(mr()); ) _t();
  return Ia(e, vt);
}
function a_(e) {
  return A1(Hs("", null, null, null, [""], (e = $1(e)), 0, [0], e));
}
function Hs(e, t, r, n, o, i, a, s, l) {
  for (
    var u = 0,
      c = 0,
      d = a,
      f = 0,
      p = 0,
      v = 0,
      b = 1,
      C = 1,
      g = 1,
      h = 0,
      m = "",
      k = o,
      P = i,
      A = n,
      T = m;
    C;

  )
    switch (((v = h), (h = _t()))) {
      case 40:
        if (v != 108 && Xe(T, d - 1) == 58) {
          Kd((T += ee(Us(h), "&", "&\f")), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += Us(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += r_(v);
        break;
      case 92:
        T += n_(Ws() - 1, 7);
        continue;
      case 47:
        switch (mr()) {
          case 42:
          case 47:
            vs(s_(o_(_t(), Ws()), t, r), l);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * b:
        s[u++] = cr(T) * g;
      case 125 * b:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            C = 0;
          case 59 + c:
            g == -1 && (T = ee(T, /\f/g, "")),
              p > 0 &&
                cr(T) - d &&
                vs(
                  p > 32
                    ? Qm(T + ";", n, r, d - 1)
                    : Qm(ee(T, " ", "") + ";", n, r, d - 2),
                  l
                );
            break;
          case 59:
            T += ";";
          default:
            if (
              (vs((A = Xm(T, t, r, u, c, o, s, m, (k = []), (P = []), d)), i),
              h === 123)
            )
              if (c === 0) Hs(T, t, A, A, k, i, d, s, P);
              else
                switch (f === 99 && Xe(T, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Hs(
                      e,
                      A,
                      A,
                      n && vs(Xm(e, A, A, 0, 0, o, s, m, o, (k = []), d), P),
                      o,
                      P,
                      d,
                      s,
                      n ? k : P
                    );
                    break;
                  default:
                    Hs(T, A, A, A, [""], P, 0, s, P);
                }
        }
        (u = c = p = 0), (b = g = 1), (m = T = ""), (d = a);
        break;
      case 58:
        (d = 1 + cr(T)), (p = v);
      default:
        if (b < 1) {
          if (h == 123) --b;
          else if (h == 125 && b++ == 0 && t_() == 125) continue;
        }
        switch (((T += lu(h)), h * b)) {
          case 38:
            g = c > 0 ? 1 : ((T += "\f"), -1);
            break;
          case 44:
            (s[u++] = (cr(T) - 1) * g), (g = 1);
            break;
          case 64:
            mr() === 45 && (T += Us(_t())),
              (f = mr()),
              (c = d = cr((m = T += i_(Ws())))),
              h++;
            break;
          case 45:
            v === 45 && cr(T) == 2 && (b = 0);
        }
    }
  return i;
}
function Xm(e, t, r, n, o, i, a, s, l, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [""], p = Ch(f), v = 0, b = 0, C = 0;
    v < n;
    ++v
  )
    for (var g = 0, h = ba(e, d + 1, (d = XC((b = a[v])))), m = e; g < p; ++g)
      (m = P1(b > 0 ? f[g] + " " + h : ee(h, /&\f/g, f[g]))) && (l[C++] = m);
  return cu(e, t, r, o === 0 ? wh : s, l, u, c);
}
function s_(e, t, r) {
  return cu(e, t, r, _1, lu(e_()), ba(e, 2, -2), 0);
}
function Qm(e, t, r, n) {
  return cu(e, t, r, kh, ba(e, 0, n), ba(e, n + 1, -1), n);
}
function Bo(e, t) {
  for (var r = "", n = Ch(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || "";
  return r;
}
function l_(e, t, r, n) {
  switch (e.type) {
    case YC:
      if (e.children.length) break;
    case KC:
    case kh:
      return (e.return = e.return || e.value);
    case _1:
      return "";
    case T1:
      return (e.return = e.value + "{" + Bo(e.children, n) + "}");
    case wh:
      e.value = e.props.join(",");
  }
  return cr((r = Bo(e.children, n)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function u_(e) {
  var t = Ch(e);
  return function (r, n, o, i) {
    for (var a = "", s = 0; s < t; s++) a += e[s](r, n, o, i) || "";
    return a;
  };
}
function c_(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var qm = function (t) {
  var r = new WeakMap();
  return function (n) {
    if (r.has(n)) return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function z1(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var d_ = function (t, r, n) {
    for (
      var o = 0, i = 0;
      (o = i), (i = mr()), o === 38 && i === 12 && (r[n] = 1), !Sa(i);

    )
      _t();
    return Ia(t, vt);
  },
  f_ = function (t, r) {
    var n = -1,
      o = 44;
    do
      switch (Sa(o)) {
        case 0:
          o === 38 && mr() === 12 && (r[n] = 1), (t[n] += d_(vt - 1, r, n));
          break;
        case 2:
          t[n] += Us(o);
          break;
        case 4:
          if (o === 44) {
            (t[++n] = mr() === 58 ? "&\f" : ""), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += lu(o);
      }
    while ((o = _t()));
    return t;
  },
  h_ = function (t, r) {
    return A1(f_($1(t), r));
  },
  Zm = new WeakMap(),
  p_ = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          n = t.parent,
          o = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Zm.get(n)) &&
        !o
      ) {
        Zm.set(t, !0);
        for (
          var i = [], a = h_(r, i), s = n.props, l = 0, u = 0;
          l < a.length;
          l++
        )
          for (var c = 0; c < s.length; c++, u++)
            t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
      }
    }
  },
  m_ = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function R1(e, t) {
  switch (qC(e, t)) {
    case 5103:
      return J + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return J + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return J + e + Al + e + et + e + e;
    case 6828:
    case 4268:
      return J + e + et + e + e;
    case 6165:
      return J + e + et + "flex-" + e + e;
    case 5187:
      return (
        J + e + ee(e, /(\w+).+(:[^]+)/, J + "box-$1$2" + et + "flex-$1$2") + e
      );
    case 5443:
      return J + e + et + "flex-item-" + ee(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        J +
        e +
        et +
        "flex-line-pack" +
        ee(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return J + e + et + ee(e, "shrink", "negative") + e;
    case 5292:
      return J + e + et + ee(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        J +
        "box-" +
        ee(e, "-grow", "") +
        J +
        e +
        et +
        ee(e, "grow", "positive") +
        e
      );
    case 4554:
      return J + ee(e, /([^-])(transform)/g, "$1" + J + "$2") + e;
    case 6187:
      return (
        ee(
          ee(ee(e, /(zoom-|grab)/, J + "$1"), /(image-set)/, J + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return ee(e, /(image-set\([^]*)/, J + "$1$`$1");
    case 4968:
      return (
        ee(
          ee(e, /(.+:)(flex-)?(.*)/, J + "box-pack:$3" + et + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        J +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ee(e, /(.+)-inline(.+)/, J + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (cr(e) - 1 - t > 6)
        switch (Xe(e, t + 1)) {
          case 109:
            if (Xe(e, t + 4) !== 45) break;
          case 102:
            return (
              ee(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  J +
                  "$2-$3$1" +
                  Al +
                  (Xe(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Kd(e, "stretch")
              ? R1(ee(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Xe(e, t + 1) !== 115) break;
    case 6444:
      switch (Xe(e, cr(e) - 3 - (~Kd(e, "!important") && 10))) {
        case 107:
          return ee(e, ":", ":" + J) + e;
        case 101:
          return (
            ee(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                J +
                (Xe(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                J +
                "$2$3$1" +
                et +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Xe(e, t + 11)) {
        case 114:
          return J + e + et + ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return J + e + et + ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return J + e + et + ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return J + e + et + e + e;
  }
  return e;
}
var g_ = function (t, r, n, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case kh:
          t.return = R1(t.value, t.length);
          break;
        case T1:
          return Bo([yi(t, { value: ee(t.value, "@", "@" + J) })], o);
        case wh:
          if (t.length)
            return JC(t.props, function (i) {
              switch (ZC(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Bo(
                    [yi(t, { props: [ee(i, /:(read-\w+)/, ":" + Al + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Bo(
                    [
                      yi(t, {
                        props: [ee(i, /:(plac\w+)/, ":" + J + "input-$1")],
                      }),
                      yi(t, { props: [ee(i, /:(plac\w+)/, ":" + Al + "$1")] }),
                      yi(t, { props: [ee(i, /:(plac\w+)/, et + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  v_ = [g_],
  y_ = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (b) {
        var C = b.getAttribute("data-emotion");
        C.indexOf(" ") !== -1 &&
          (document.head.appendChild(b), b.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || v_,
      i = {},
      a,
      s = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (b) {
          for (
            var C = b.getAttribute("data-emotion").split(" "), g = 1;
            g < C.length;
            g++
          )
            i[C[g]] = !0;
          s.push(b);
        }
      );
    var l,
      u = [p_, m_];
    {
      var c,
        d = [
          l_,
          c_(function (b) {
            c.insert(b);
          }),
        ],
        f = u_(u.concat(o, d)),
        p = function (C) {
          return Bo(a_(C), f);
        };
      l = function (C, g, h, m) {
        (c = h),
          p(C ? C + "{" + g.styles + "}" : g.styles),
          m && (v.inserted[g.name] = !0);
      };
    }
    var v = {
      key: r,
      sheet: new GC({
        key: r,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return v.sheet.hydrate(s), v;
  };
function zl() {
  return (
    (zl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    zl.apply(this, arguments)
  );
}
var M1 = { exports: {} },
  ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ue = typeof Symbol == "function" && Symbol.for,
  _h = Ue ? Symbol.for("react.element") : 60103,
  Th = Ue ? Symbol.for("react.portal") : 60106,
  du = Ue ? Symbol.for("react.fragment") : 60107,
  fu = Ue ? Symbol.for("react.strict_mode") : 60108,
  hu = Ue ? Symbol.for("react.profiler") : 60114,
  pu = Ue ? Symbol.for("react.provider") : 60109,
  mu = Ue ? Symbol.for("react.context") : 60110,
  Ph = Ue ? Symbol.for("react.async_mode") : 60111,
  gu = Ue ? Symbol.for("react.concurrent_mode") : 60111,
  vu = Ue ? Symbol.for("react.forward_ref") : 60112,
  yu = Ue ? Symbol.for("react.suspense") : 60113,
  b_ = Ue ? Symbol.for("react.suspense_list") : 60120,
  bu = Ue ? Symbol.for("react.memo") : 60115,
  Su = Ue ? Symbol.for("react.lazy") : 60116,
  S_ = Ue ? Symbol.for("react.block") : 60121,
  x_ = Ue ? Symbol.for("react.fundamental") : 60117,
  w_ = Ue ? Symbol.for("react.responder") : 60118,
  k_ = Ue ? Symbol.for("react.scope") : 60119;
function zt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case _h:
        switch (((e = e.type), e)) {
          case Ph:
          case gu:
          case du:
          case hu:
          case fu:
          case yu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case mu:
              case vu:
              case Su:
              case bu:
              case pu:
                return e;
              default:
                return t;
            }
        }
      case Th:
        return t;
    }
  }
}
function L1(e) {
  return zt(e) === gu;
}
ae.AsyncMode = Ph;
ae.ConcurrentMode = gu;
ae.ContextConsumer = mu;
ae.ContextProvider = pu;
ae.Element = _h;
ae.ForwardRef = vu;
ae.Fragment = du;
ae.Lazy = Su;
ae.Memo = bu;
ae.Portal = Th;
ae.Profiler = hu;
ae.StrictMode = fu;
ae.Suspense = yu;
ae.isAsyncMode = function (e) {
  return L1(e) || zt(e) === Ph;
};
ae.isConcurrentMode = L1;
ae.isContextConsumer = function (e) {
  return zt(e) === mu;
};
ae.isContextProvider = function (e) {
  return zt(e) === pu;
};
ae.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === _h;
};
ae.isForwardRef = function (e) {
  return zt(e) === vu;
};
ae.isFragment = function (e) {
  return zt(e) === du;
};
ae.isLazy = function (e) {
  return zt(e) === Su;
};
ae.isMemo = function (e) {
  return zt(e) === bu;
};
ae.isPortal = function (e) {
  return zt(e) === Th;
};
ae.isProfiler = function (e) {
  return zt(e) === hu;
};
ae.isStrictMode = function (e) {
  return zt(e) === fu;
};
ae.isSuspense = function (e) {
  return zt(e) === yu;
};
ae.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === du ||
    e === gu ||
    e === hu ||
    e === fu ||
    e === yu ||
    e === b_ ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Su ||
        e.$$typeof === bu ||
        e.$$typeof === pu ||
        e.$$typeof === mu ||
        e.$$typeof === vu ||
        e.$$typeof === x_ ||
        e.$$typeof === w_ ||
        e.$$typeof === k_ ||
        e.$$typeof === S_))
  );
};
ae.typeOf = zt;
M1.exports = ae;
var C_ = M1.exports,
  F1 = C_,
  __ = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  T_ = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  I1 = {};
I1[F1.ForwardRef] = __;
I1[F1.Memo] = T_;
var P_ = !0;
function E_(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (n += o + " ");
    }),
    n
  );
}
var D1 = function (t, r, n) {
    var o = t.key + "-" + r.name;
    (n === !1 || P_ === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = r.styles);
  },
  B1 = function (t, r, n) {
    D1(t, r, n);
    var o = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do t.insert(r === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function $_(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var A_ = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  z_ = /[A-Z]|^ms/g,
  R_ = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  V1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Jm = function (t) {
    return t != null && typeof t != "boolean";
  },
  xc = z1(function (e) {
    return V1(e) ? e : e.replace(z_, "-$&").toLowerCase();
  }),
  eg = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(R_, function (n, o, i) {
            return (dr = { name: o, styles: i, next: dr }), o;
          });
    }
    return A_[t] !== 1 && !V1(t) && typeof r == "number" && r !== 0
      ? r + "px"
      : r;
  };
function xa(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return (dr = { name: r.name, styles: r.styles, next: dr }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (dr = { name: n.name, styles: n.styles, next: dr }), (n = n.next);
        var o = r.styles + ";";
        return o;
      }
      return M_(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = dr,
          a = r(e);
        return (dr = i), xa(e, t, a);
      }
      break;
    }
  }
  if (t == null) return r;
  var s = t[r];
  return s !== void 0 ? s : r;
}
function M_(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++) n += xa(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0
          ? (n += i + "{" + t[a] + "}")
          : Jm(a) && (n += xc(i) + ":" + eg(i, a) + ";");
      else if (
        Array.isArray(a) &&
        typeof a[0] == "string" &&
        (t == null || t[a[0]] === void 0)
      )
        for (var s = 0; s < a.length; s++)
          Jm(a[s]) && (n += xc(i) + ":" + eg(i, a[s]) + ";");
      else {
        var l = xa(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += xc(i) + ":" + l + ";";
            break;
          }
          default:
            n += i + "{" + l + "}";
        }
      }
    }
  return n;
}
var tg = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  dr,
  Eh = function (t, r, n) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    dr = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((o = !1), (i += xa(n, r, a)))
      : (i += a[0]);
    for (var s = 1; s < t.length; s++) (i += xa(n, r, t[s])), o && (i += a[s]);
    tg.lastIndex = 0;
    for (var l = "", u; (u = tg.exec(i)) !== null; ) l += "-" + u[1];
    var c = $_(i) + l;
    return { name: c, styles: i, next: dr };
  },
  L_ = function (t) {
    return t();
  },
  O1 = jp["useInsertionEffect"] ? jp["useInsertionEffect"] : !1,
  F_ = O1 || L_,
  rg = O1 || w.useLayoutEffect,
  N1 = w.createContext(typeof HTMLElement < "u" ? y_({ key: "css" }) : null);
N1.Provider;
var j1 = function (t) {
    return w.forwardRef(function (r, n) {
      var o = w.useContext(N1);
      return t(r, o, n);
    });
  },
  wa = w.createContext({}),
  I_ = function (t, r) {
    if (typeof r == "function") {
      var n = r(t);
      return n;
    }
    return zl({}, t, r);
  },
  D_ = qm(function (e) {
    return qm(function (t) {
      return I_(e, t);
    });
  }),
  B_ = function (t) {
    var r = w.useContext(wa);
    return (
      t.theme !== r && (r = D_(r)(t.theme)),
      w.createElement(wa.Provider, { value: r }, t.children)
    );
  },
  xu = j1(function (e, t) {
    var r = e.styles,
      n = Eh([r], void 0, w.useContext(wa)),
      o = w.useRef();
    return (
      rg(
        function () {
          var i = t.key + "-global",
            a = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            s = !1,
            l = document.querySelector(
              'style[data-emotion="' + i + " " + n.name + '"]'
            );
          return (
            t.sheet.tags.length && (a.before = t.sheet.tags[0]),
            l !== null &&
              ((s = !0), l.setAttribute("data-emotion", i), a.hydrate([l])),
            (o.current = [a, s]),
            function () {
              a.flush();
            }
          );
        },
        [t]
      ),
      rg(
        function () {
          var i = o.current,
            a = i[0],
            s = i[1];
          if (s) {
            i[1] = !1;
            return;
          }
          if ((n.next !== void 0 && B1(t, n.next, !0), a.tags.length)) {
            var l = a.tags[a.tags.length - 1].nextElementSibling;
            (a.before = l), a.flush();
          }
          t.insert("", n, a, !1);
        },
        [t, n.name]
      ),
      null
    );
  });
function V_() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Eh(t);
}
var O_ = function () {
    var t = V_.apply(void 0, arguments),
      r = "animation-" + t.name;
    return {
      name: r,
      styles: "@keyframes " + r + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  W1 = String.raw,
  U1 = W1`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,
  N_ = () => E(xu, { styles: U1 }),
  j_ = ({ scope: e = "" }) =>
    E(xu, {
      styles: W1`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${U1}
    `,
    });
function W_(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function jr(e = {}) {
  const {
      name: t,
      strict: r = !0,
      hookName: n = "useContext",
      providerName: o = "Provider",
      errorMessage: i,
      defaultValue: a,
    } = e,
    s = w.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = w.useContext(s);
    if (!c && r) {
      const d = new Error(i ?? W_(n, o));
      throw (
        ((d.name = "ContextError"),
        (u = Error.captureStackTrace) == null || u.call(Error, d, l),
        d)
      );
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [U_, H_] = jr({ strict: !1, name: "PortalManagerContext" });
function H1(e) {
  const { children: t, zIndex: r } = e;
  return E(U_, { value: { zIndex: r }, children: t });
}
H1.displayName = "PortalManager";
var Ar = globalThis?.document ? w.useLayoutEffect : w.useEffect,
  [G1, G_] = jr({ strict: !1, name: "PortalContext" }),
  $h = "chakra-portal",
  K_ = ".chakra-portal",
  Y_ = (e) =>
    E("div", {
      className: "chakra-portal-zIndex",
      style: {
        position: "absolute",
        zIndex: e.zIndex,
        top: 0,
        left: 0,
        right: 0,
      },
      children: e.children,
    }),
  X_ = (e) => {
    const { appendToParentPortal: t, children: r } = e,
      [n, o] = w.useState(null),
      i = w.useRef(null),
      [, a] = w.useState({});
    w.useEffect(() => a({}), []);
    const s = G_(),
      l = H_();
    Ar(() => {
      if (!n) return;
      const c = n.ownerDocument,
        d = t ? s ?? c.body : c.body;
      if (!d) return;
      (i.current = c.createElement("div")),
        (i.current.className = $h),
        d.appendChild(i.current),
        a({});
      const f = i.current;
      return () => {
        d.contains(f) && d.removeChild(f);
      };
    }, [n]);
    const u = l?.zIndex ? E(Y_, { zIndex: l?.zIndex, children: r }) : r;
    return i.current
      ? xh.createPortal(E(G1, { value: i.current, children: u }), i.current)
      : E("span", {
          ref: (c) => {
            c && o(c);
          },
        });
  },
  Q_ = (e) => {
    const { children: t, containerRef: r, appendToParentPortal: n } = e,
      o = r.current,
      i = o ?? (typeof window < "u" ? document.body : void 0),
      a = w.useMemo(() => {
        const l = o?.ownerDocument.createElement("div");
        return l && (l.className = $h), l;
      }, [o]),
      [, s] = w.useState({});
    return (
      Ar(() => s({}), []),
      Ar(() => {
        if (!(!a || !i))
          return (
            i.appendChild(a),
            () => {
              i.removeChild(a);
            }
          );
      }, [a, i]),
      i && a
        ? xh.createPortal(E(G1, { value: n ? a : null, children: t }), a)
        : null
    );
  };
function wu(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: r, ...n } = t;
  return r ? E(Q_, { containerRef: r, ...n }) : E(X_, { ...n });
}
wu.className = $h;
wu.selector = K_;
wu.displayName = "Portal";
function Ah() {
  const e = w.useContext(wa);
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var zh = w.createContext({});
zh.displayName = "ColorModeContext";
function ku() {
  const e = w.useContext(zh);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var ys = { light: "chakra-ui-light", dark: "chakra-ui-dark" };
function q_(e = {}) {
  const { preventTransition: t = !0 } = e,
    r = {
      setDataset: (n) => {
        const o = t ? r.preventTransition() : void 0;
        (document.documentElement.dataset.theme = n),
          (document.documentElement.style.colorScheme = n),
          o?.();
      },
      setClassName(n) {
        document.body.classList.add(n ? ys.dark : ys.light),
          document.body.classList.remove(n ? ys.light : ys.dark);
      },
      query() {
        return window.matchMedia("(prefers-color-scheme: dark)");
      },
      getSystemTheme(n) {
        var o;
        return ((o = r.query().matches) != null ? o : n === "dark")
          ? "dark"
          : "light";
      },
      addListener(n) {
        const o = r.query(),
          i = (a) => {
            n(a.matches ? "dark" : "light");
          };
        return (
          typeof o.addListener == "function"
            ? o.addListener(i)
            : o.addEventListener("change", i),
          () => {
            typeof o.removeListener == "function"
              ? o.removeListener(i)
              : o.removeEventListener("change", i);
          }
        );
      },
      preventTransition() {
        const n = document.createElement("style");
        return (
          n.appendChild(
            document.createTextNode(
              "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
            )
          ),
          document.head.appendChild(n),
          () => {
            window.getComputedStyle(document.body),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document.head.removeChild(n);
                });
              });
          }
        );
      },
    };
  return r;
}
var Z_ = "chakra-ui-color-mode";
function J_(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!globalThis?.document) return t;
      let r;
      try {
        r = localStorage.getItem(e) || t;
      } catch {}
      return r || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {}
    },
  };
}
var e2 = J_(Z_),
  ng = () => {};
function og(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function K1(e) {
  const {
      value: t,
      children: r,
      options: {
        useSystemColorMode: n,
        initialColorMode: o,
        disableTransitionOnChange: i,
      } = {},
      colorModeManager: a = e2,
    } = e,
    s = o === "dark" ? "dark" : "light",
    [l, u] = w.useState(() => og(a, s)),
    [c, d] = w.useState(() => og(a)),
    {
      getSystemTheme: f,
      setClassName: p,
      setDataset: v,
      addListener: b,
    } = w.useMemo(() => q_({ preventTransition: i }), [i]),
    C = o === "system" && !l ? c : l,
    g = w.useCallback(
      (k) => {
        const P = k === "system" ? f() : k;
        u(P), p(P === "dark"), v(P), a.set(P);
      },
      [a, f, p, v]
    );
  Ar(() => {
    o === "system" && d(f());
  }, []),
    w.useEffect(() => {
      const k = a.get();
      if (k) {
        g(k);
        return;
      }
      if (o === "system") {
        g("system");
        return;
      }
      g(s);
    }, [a, s, o, g]);
  const h = w.useCallback(() => {
    g(C === "dark" ? "light" : "dark");
  }, [C, g]);
  w.useEffect(() => {
    if (n) return b(g);
  }, [n, b, g]);
  const m = w.useMemo(
    () => ({
      colorMode: t ?? C,
      toggleColorMode: t ? ng : h,
      setColorMode: t ? ng : g,
      forced: t !== void 0,
    }),
    [C, h, g, t]
  );
  return E(zh.Provider, { value: m, children: r });
}
K1.displayName = "ColorModeProvider";
var t2 = new Set(["dark", "light", "system"]);
function r2(e) {
  let t = e;
  return t2.has(t) || (t = "light"), t;
}
function n2(e = {}) {
  const {
      initialColorMode: t = "light",
      type: r = "localStorage",
      storageKey: n = "chakra-ui-color-mode",
    } = e,
    o = r2(t),
    i = r === "cookie",
    a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${n}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `,
    s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${n}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function o2(e = {}) {
  const { nonce: t } = e;
  return E("script", {
    id: "chakra-script",
    nonce: t,
    dangerouslySetInnerHTML: { __html: n2(e) },
  });
}
function i2() {
  const e = ku(),
    t = Ah();
  return { ...e, theme: t };
}
function a2(e, t, r) {
  var n, o;
  if (t == null) return t;
  const i = (a) => {
    var s, l;
    return (l = (s = e.__breakpoints) == null ? void 0 : s.asArray) == null
      ? void 0
      : l[a];
  };
  return (o = (n = i(t)) != null ? n : i(r)) != null ? o : r;
}
function s2(e, t, r) {
  var n, o;
  if (t == null) return t;
  const i = (a) => {
    var s, l;
    return (l = (s = e.__cssMap) == null ? void 0 : s[a]) == null
      ? void 0
      : l.value;
  };
  return (o = (n = i(t)) != null ? n : i(r)) != null ? o : r;
}
function l2(e, t, r) {
  const n = Array.isArray(t) ? t : [t],
    o = Array.isArray(r) ? r : [r];
  return (i) => {
    const a = o.filter(Boolean),
      s = n.map((l, u) => {
        var c, d;
        if (e === "breakpoints") return a2(i, l, (c = a[u]) != null ? c : l);
        const f = `${e}.${l}`;
        return s2(i, f, (d = a[u]) != null ? d : l);
      });
    return Array.isArray(t) ? s : s[0];
  };
}
var He = (...e) => e.filter(Boolean).join(" ");
function Wt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function nn(e, ...t) {
  return u2(e) ? e(...t) : e;
}
var u2 = (e) => typeof e == "function",
  re = (e) => (e ? "" : void 0);
function xt(...e) {
  return function (r) {
    e.some((n) => (n?.(r), r?.defaultPrevented));
  };
}
var Rl = { exports: {} };
Rl.exports;
(function (e, t) {
  var r = 200,
    n = "__lodash_hash_undefined__",
    o = 800,
    i = 16,
    a = 9007199254740991,
    s = "[object Arguments]",
    l = "[object Array]",
    u = "[object AsyncFunction]",
    c = "[object Boolean]",
    d = "[object Date]",
    f = "[object Error]",
    p = "[object Function]",
    v = "[object GeneratorFunction]",
    b = "[object Map]",
    C = "[object Number]",
    g = "[object Null]",
    h = "[object Object]",
    m = "[object Proxy]",
    k = "[object RegExp]",
    P = "[object Set]",
    A = "[object String]",
    T = "[object Undefined]",
    $ = "[object WeakMap]",
    F = "[object ArrayBuffer]",
    I = "[object DataView]",
    le = "[object Float32Array]",
    me = "[object Float64Array]",
    $e = "[object Int8Array]",
    oe = "[object Int16Array]",
    de = "[object Int32Array]",
    Re = "[object Uint8Array]",
    Ie = "[object Uint8ClampedArray]",
    R = "[object Uint16Array]",
    V = "[object Uint32Array]",
    j = /[\\^$.*+?()[\]{}|]/g,
    O = /^\[object .+?Constructor\]$/,
    q = /^(?:0|[1-9]\d*)$/,
    W = {};
  (W[le] = W[me] = W[$e] = W[oe] = W[de] = W[Re] = W[Ie] = W[R] = W[V] = !0),
    (W[s] =
      W[l] =
      W[F] =
      W[c] =
      W[I] =
      W[d] =
      W[f] =
      W[p] =
      W[b] =
      W[C] =
      W[h] =
      W[k] =
      W[P] =
      W[A] =
      W[$] =
        !1);
  var se = typeof Ja == "object" && Ja && Ja.Object === Object && Ja,
    Gt = typeof self == "object" && self && self.Object === Object && self,
    Te = se || Gt || Function("return this")(),
    bt = t && !t.nodeType && t,
    nr = bt && !0 && e && !e.nodeType && e,
    Wr = nr && nr.exports === bt,
    or = Wr && se.process,
    Rt = (function () {
      try {
        var y = nr && nr.require && nr.require("util").types;
        return y || (or && or.binding && or.binding("util"));
      } catch {}
    })(),
    kn = Rt && Rt.isTypedArray;
  function to(y, S, _) {
    switch (_.length) {
      case 0:
        return y.call(S);
      case 1:
        return y.call(S, _[0]);
      case 2:
        return y.call(S, _[0], _[1]);
      case 3:
        return y.call(S, _[0], _[1], _[2]);
    }
    return y.apply(S, _);
  }
  function bp(y, S) {
    for (var _ = -1, M = Array(y); ++_ < y; ) M[_] = S(_);
    return M;
  }
  function U(y) {
    return function (S) {
      return y(S);
    };
  }
  function ct(y, S) {
    return y?.[S];
  }
  function Mt(y, S) {
    return function (_) {
      return y(S(_));
    };
  }
  var ro = Array.prototype,
    fx = Function.prototype,
    Ha = Object.prototype,
    Bu = Te["__core-js_shared__"],
    Ga = fx.toString,
    yr = Ha.hasOwnProperty,
    Sp = (function () {
      var y = /[^.]+$/.exec((Bu && Bu.keys && Bu.keys.IE_PROTO) || "");
      return y ? "Symbol(src)_1." + y : "";
    })(),
    xp = Ha.toString,
    hx = Ga.call(Object),
    px = RegExp(
      "^" +
        Ga.call(yr)
          .replace(j, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Ka = Wr ? Te.Buffer : void 0,
    wp = Te.Symbol,
    kp = Te.Uint8Array,
    Cp = Ka ? Ka.allocUnsafe : void 0,
    _p = Mt(Object.getPrototypeOf, Object),
    Tp = Object.create,
    mx = Ha.propertyIsEnumerable,
    gx = ro.splice,
    Cn = wp ? wp.toStringTag : void 0,
    Ya = (function () {
      try {
        var y = Nu(Object, "defineProperty");
        return y({}, "", {}), y;
      } catch {}
    })(),
    vx = Ka ? Ka.isBuffer : void 0,
    Pp = Math.max,
    yx = Date.now,
    Ep = Nu(Te, "Map"),
    si = Nu(Object, "create"),
    bx = (function () {
      function y() {}
      return function (S) {
        if (!Tn(S)) return {};
        if (Tp) return Tp(S);
        y.prototype = S;
        var _ = new y();
        return (y.prototype = void 0), _;
      };
    })();
  function _n(y) {
    var S = -1,
      _ = y == null ? 0 : y.length;
    for (this.clear(); ++S < _; ) {
      var M = y[S];
      this.set(M[0], M[1]);
    }
  }
  function Sx() {
    (this.__data__ = si ? si(null) : {}), (this.size = 0);
  }
  function xx(y) {
    var S = this.has(y) && delete this.__data__[y];
    return (this.size -= S ? 1 : 0), S;
  }
  function wx(y) {
    var S = this.__data__;
    if (si) {
      var _ = S[y];
      return _ === n ? void 0 : _;
    }
    return yr.call(S, y) ? S[y] : void 0;
  }
  function kx(y) {
    var S = this.__data__;
    return si ? S[y] !== void 0 : yr.call(S, y);
  }
  function Cx(y, S) {
    var _ = this.__data__;
    return (
      (this.size += this.has(y) ? 0 : 1),
      (_[y] = si && S === void 0 ? n : S),
      this
    );
  }
  (_n.prototype.clear = Sx),
    (_n.prototype.delete = xx),
    (_n.prototype.get = wx),
    (_n.prototype.has = kx),
    (_n.prototype.set = Cx);
  function br(y) {
    var S = -1,
      _ = y == null ? 0 : y.length;
    for (this.clear(); ++S < _; ) {
      var M = y[S];
      this.set(M[0], M[1]);
    }
  }
  function _x() {
    (this.__data__ = []), (this.size = 0);
  }
  function Tx(y) {
    var S = this.__data__,
      _ = Xa(S, y);
    if (_ < 0) return !1;
    var M = S.length - 1;
    return _ == M ? S.pop() : gx.call(S, _, 1), --this.size, !0;
  }
  function Px(y) {
    var S = this.__data__,
      _ = Xa(S, y);
    return _ < 0 ? void 0 : S[_][1];
  }
  function Ex(y) {
    return Xa(this.__data__, y) > -1;
  }
  function $x(y, S) {
    var _ = this.__data__,
      M = Xa(_, y);
    return M < 0 ? (++this.size, _.push([y, S])) : (_[M][1] = S), this;
  }
  (br.prototype.clear = _x),
    (br.prototype.delete = Tx),
    (br.prototype.get = Px),
    (br.prototype.has = Ex),
    (br.prototype.set = $x);
  function no(y) {
    var S = -1,
      _ = y == null ? 0 : y.length;
    for (this.clear(); ++S < _; ) {
      var M = y[S];
      this.set(M[0], M[1]);
    }
  }
  function Ax() {
    (this.size = 0),
      (this.__data__ = {
        hash: new _n(),
        map: new (Ep || br)(),
        string: new _n(),
      });
  }
  function zx(y) {
    var S = qa(this, y).delete(y);
    return (this.size -= S ? 1 : 0), S;
  }
  function Rx(y) {
    return qa(this, y).get(y);
  }
  function Mx(y) {
    return qa(this, y).has(y);
  }
  function Lx(y, S) {
    var _ = qa(this, y),
      M = _.size;
    return _.set(y, S), (this.size += _.size == M ? 0 : 1), this;
  }
  (no.prototype.clear = Ax),
    (no.prototype.delete = zx),
    (no.prototype.get = Rx),
    (no.prototype.has = Mx),
    (no.prototype.set = Lx);
  function oo(y) {
    var S = (this.__data__ = new br(y));
    this.size = S.size;
  }
  function Fx() {
    (this.__data__ = new br()), (this.size = 0);
  }
  function Ix(y) {
    var S = this.__data__,
      _ = S.delete(y);
    return (this.size = S.size), _;
  }
  function Dx(y) {
    return this.__data__.get(y);
  }
  function Bx(y) {
    return this.__data__.has(y);
  }
  function Vx(y, S) {
    var _ = this.__data__;
    if (_ instanceof br) {
      var M = _.__data__;
      if (!Ep || M.length < r - 1)
        return M.push([y, S]), (this.size = ++_.size), this;
      _ = this.__data__ = new no(M);
    }
    return _.set(y, S), (this.size = _.size), this;
  }
  (oo.prototype.clear = Fx),
    (oo.prototype.delete = Ix),
    (oo.prototype.get = Dx),
    (oo.prototype.has = Bx),
    (oo.prototype.set = Vx);
  function Ox(y, S) {
    var _ = Uu(y),
      M = !_ && Wu(y),
      K = !_ && !M && Mp(y),
      ue = !_ && !M && !K && Fp(y),
      be = _ || M || K || ue,
      G = be ? bp(y.length, String) : [],
      Se = G.length;
    for (var Lt in y)
      (S || yr.call(y, Lt)) &&
        !(
          be &&
          (Lt == "length" ||
            (K && (Lt == "offset" || Lt == "parent")) ||
            (ue &&
              (Lt == "buffer" || Lt == "byteLength" || Lt == "byteOffset")) ||
            zp(Lt, Se))
        ) &&
        G.push(Lt);
    return G;
  }
  function Vu(y, S, _) {
    ((_ !== void 0 && !Za(y[S], _)) || (_ === void 0 && !(S in y))) &&
      Ou(y, S, _);
  }
  function Nx(y, S, _) {
    var M = y[S];
    (!(yr.call(y, S) && Za(M, _)) || (_ === void 0 && !(S in y))) &&
      Ou(y, S, _);
  }
  function Xa(y, S) {
    for (var _ = y.length; _--; ) if (Za(y[_][0], S)) return _;
    return -1;
  }
  function Ou(y, S, _) {
    S == "__proto__" && Ya
      ? Ya(y, S, { configurable: !0, enumerable: !0, value: _, writable: !0 })
      : (y[S] = _);
  }
  var jx = tw();
  function Qa(y) {
    return y == null
      ? y === void 0
        ? T
        : g
      : Cn && Cn in Object(y)
      ? rw(y)
      : lw(y);
  }
  function $p(y) {
    return li(y) && Qa(y) == s;
  }
  function Wx(y) {
    if (!Tn(y) || aw(y)) return !1;
    var S = Gu(y) ? px : O;
    return S.test(fw(y));
  }
  function Ux(y) {
    return li(y) && Lp(y.length) && !!W[Qa(y)];
  }
  function Hx(y) {
    if (!Tn(y)) return sw(y);
    var S = Rp(y),
      _ = [];
    for (var M in y) (M == "constructor" && (S || !yr.call(y, M))) || _.push(M);
    return _;
  }
  function Ap(y, S, _, M, K) {
    y !== S &&
      jx(
        S,
        function (ue, be) {
          if ((K || (K = new oo()), Tn(ue))) Gx(y, S, be, _, Ap, M, K);
          else {
            var G = M ? M(ju(y, be), ue, be + "", y, S, K) : void 0;
            G === void 0 && (G = ue), Vu(y, be, G);
          }
        },
        Ip
      );
  }
  function Gx(y, S, _, M, K, ue, be) {
    var G = ju(y, _),
      Se = ju(S, _),
      Lt = be.get(Se);
    if (Lt) {
      Vu(y, _, Lt);
      return;
    }
    var St = ue ? ue(G, Se, _ + "", y, S, be) : void 0,
      ui = St === void 0;
    if (ui) {
      var Ku = Uu(Se),
        Yu = !Ku && Mp(Se),
        Bp = !Ku && !Yu && Fp(Se);
      (St = Se),
        Ku || Yu || Bp
          ? Uu(G)
            ? (St = G)
            : hw(G)
            ? (St = Zx(G))
            : Yu
            ? ((ui = !1), (St = Xx(Se, !0)))
            : Bp
            ? ((ui = !1), (St = qx(Se, !0)))
            : (St = [])
          : pw(Se) || Wu(Se)
          ? ((St = G),
            Wu(G) ? (St = mw(G)) : (!Tn(G) || Gu(G)) && (St = nw(Se)))
          : (ui = !1);
    }
    ui && (be.set(Se, St), K(St, Se, M, ue, be), be.delete(Se)), Vu(y, _, St);
  }
  function Kx(y, S) {
    return cw(uw(y, S, Dp), y + "");
  }
  var Yx = Ya
    ? function (y, S) {
        return Ya(y, "toString", {
          configurable: !0,
          enumerable: !1,
          value: vw(S),
          writable: !0,
        });
      }
    : Dp;
  function Xx(y, S) {
    if (S) return y.slice();
    var _ = y.length,
      M = Cp ? Cp(_) : new y.constructor(_);
    return y.copy(M), M;
  }
  function Qx(y) {
    var S = new y.constructor(y.byteLength);
    return new kp(S).set(new kp(y)), S;
  }
  function qx(y, S) {
    var _ = S ? Qx(y.buffer) : y.buffer;
    return new y.constructor(_, y.byteOffset, y.length);
  }
  function Zx(y, S) {
    var _ = -1,
      M = y.length;
    for (S || (S = Array(M)); ++_ < M; ) S[_] = y[_];
    return S;
  }
  function Jx(y, S, _, M) {
    var K = !_;
    _ || (_ = {});
    for (var ue = -1, be = S.length; ++ue < be; ) {
      var G = S[ue],
        Se = M ? M(_[G], y[G], G, _, y) : void 0;
      Se === void 0 && (Se = y[G]), K ? Ou(_, G, Se) : Nx(_, G, Se);
    }
    return _;
  }
  function ew(y) {
    return Kx(function (S, _) {
      var M = -1,
        K = _.length,
        ue = K > 1 ? _[K - 1] : void 0,
        be = K > 2 ? _[2] : void 0;
      for (
        ue = y.length > 3 && typeof ue == "function" ? (K--, ue) : void 0,
          be && ow(_[0], _[1], be) && ((ue = K < 3 ? void 0 : ue), (K = 1)),
          S = Object(S);
        ++M < K;

      ) {
        var G = _[M];
        G && y(S, G, M, ue);
      }
      return S;
    });
  }
  function tw(y) {
    return function (S, _, M) {
      for (var K = -1, ue = Object(S), be = M(S), G = be.length; G--; ) {
        var Se = be[y ? G : ++K];
        if (_(ue[Se], Se, ue) === !1) break;
      }
      return S;
    };
  }
  function qa(y, S) {
    var _ = y.__data__;
    return iw(S) ? _[typeof S == "string" ? "string" : "hash"] : _.map;
  }
  function Nu(y, S) {
    var _ = ct(y, S);
    return Wx(_) ? _ : void 0;
  }
  function rw(y) {
    var S = yr.call(y, Cn),
      _ = y[Cn];
    try {
      y[Cn] = void 0;
      var M = !0;
    } catch {}
    var K = xp.call(y);
    return M && (S ? (y[Cn] = _) : delete y[Cn]), K;
  }
  function nw(y) {
    return typeof y.constructor == "function" && !Rp(y) ? bx(_p(y)) : {};
  }
  function zp(y, S) {
    var _ = typeof y;
    return (
      (S = S ?? a),
      !!S &&
        (_ == "number" || (_ != "symbol" && q.test(y))) &&
        y > -1 &&
        y % 1 == 0 &&
        y < S
    );
  }
  function ow(y, S, _) {
    if (!Tn(_)) return !1;
    var M = typeof S;
    return (M == "number" ? Hu(_) && zp(S, _.length) : M == "string" && S in _)
      ? Za(_[S], y)
      : !1;
  }
  function iw(y) {
    var S = typeof y;
    return S == "string" || S == "number" || S == "symbol" || S == "boolean"
      ? y !== "__proto__"
      : y === null;
  }
  function aw(y) {
    return !!Sp && Sp in y;
  }
  function Rp(y) {
    var S = y && y.constructor,
      _ = (typeof S == "function" && S.prototype) || Ha;
    return y === _;
  }
  function sw(y) {
    var S = [];
    if (y != null) for (var _ in Object(y)) S.push(_);
    return S;
  }
  function lw(y) {
    return xp.call(y);
  }
  function uw(y, S, _) {
    return (
      (S = Pp(S === void 0 ? y.length - 1 : S, 0)),
      function () {
        for (
          var M = arguments, K = -1, ue = Pp(M.length - S, 0), be = Array(ue);
          ++K < ue;

        )
          be[K] = M[S + K];
        K = -1;
        for (var G = Array(S + 1); ++K < S; ) G[K] = M[K];
        return (G[S] = _(be)), to(y, this, G);
      }
    );
  }
  function ju(y, S) {
    if (!(S === "constructor" && typeof y[S] == "function") && S != "__proto__")
      return y[S];
  }
  var cw = dw(Yx);
  function dw(y) {
    var S = 0,
      _ = 0;
    return function () {
      var M = yx(),
        K = i - (M - _);
      if (((_ = M), K > 0)) {
        if (++S >= o) return arguments[0];
      } else S = 0;
      return y.apply(void 0, arguments);
    };
  }
  function fw(y) {
    if (y != null) {
      try {
        return Ga.call(y);
      } catch {}
      try {
        return y + "";
      } catch {}
    }
    return "";
  }
  function Za(y, S) {
    return y === S || (y !== y && S !== S);
  }
  var Wu = $p(
      (function () {
        return arguments;
      })()
    )
      ? $p
      : function (y) {
          return li(y) && yr.call(y, "callee") && !mx.call(y, "callee");
        },
    Uu = Array.isArray;
  function Hu(y) {
    return y != null && Lp(y.length) && !Gu(y);
  }
  function hw(y) {
    return li(y) && Hu(y);
  }
  var Mp = vx || yw;
  function Gu(y) {
    if (!Tn(y)) return !1;
    var S = Qa(y);
    return S == p || S == v || S == u || S == m;
  }
  function Lp(y) {
    return typeof y == "number" && y > -1 && y % 1 == 0 && y <= a;
  }
  function Tn(y) {
    var S = typeof y;
    return y != null && (S == "object" || S == "function");
  }
  function li(y) {
    return y != null && typeof y == "object";
  }
  function pw(y) {
    if (!li(y) || Qa(y) != h) return !1;
    var S = _p(y);
    if (S === null) return !0;
    var _ = yr.call(S, "constructor") && S.constructor;
    return typeof _ == "function" && _ instanceof _ && Ga.call(_) == hx;
  }
  var Fp = kn ? U(kn) : Ux;
  function mw(y) {
    return Jx(y, Ip(y));
  }
  function Ip(y) {
    return Hu(y) ? Ox(y, !0) : Hx(y);
  }
  var gw = ew(function (y, S, _, M) {
    Ap(y, S, _, M);
  });
  function vw(y) {
    return function () {
      return y;
    };
  }
  function Dp(y) {
    return y;
  }
  function yw() {
    return !1;
  }
  e.exports = gw;
})(Rl, Rl.exports);
var c2 = Rl.exports;
const Nt = _f(c2);
var d2 = (e) => /!(important)?$/.test(e),
  ig = (e) =>
    typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e,
  f2 = (e, t) => (r) => {
    const n = String(t),
      o = d2(n),
      i = ig(n),
      a = e ? `${e}.${i}` : i;
    let s = Wt(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t;
    return (s = ig(s)), o ? `${s} !important` : s;
  };
function Rh(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (i, a) => {
    var s;
    const l = f2(t, i)(a);
    let u = (s = r?.(l, a)) != null ? s : l;
    return n && (u = n(u, a)), u;
  };
}
var bs =
  (...e) =>
  (t) =>
    e.reduce((r, n) => n(r), t);
function Ft(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return (n.transform = Rh({ scale: e, transform: t })), n;
  };
}
var h2 =
  ({ rtl: e, ltr: t }) =>
  (r) =>
    r.direction === "rtl" ? e : t;
function p2(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: h2(t),
    transform: r ? Rh({ scale: r, compose: n }) : n,
  };
}
var Y1 = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))",
];
function m2() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...Y1,
  ].join(" ");
}
function g2() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...Y1,
  ].join(" ");
}
var v2 = {
    "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
    filter: [
      "var(--chakra-blur)",
      "var(--chakra-brightness)",
      "var(--chakra-contrast)",
      "var(--chakra-grayscale)",
      "var(--chakra-hue-rotate)",
      "var(--chakra-invert)",
      "var(--chakra-saturate)",
      "var(--chakra-sepia)",
      "var(--chakra-drop-shadow)",
    ].join(" "),
  },
  y2 = {
    backdropFilter: [
      "var(--chakra-backdrop-blur)",
      "var(--chakra-backdrop-brightness)",
      "var(--chakra-backdrop-contrast)",
      "var(--chakra-backdrop-grayscale)",
      "var(--chakra-backdrop-hue-rotate)",
      "var(--chakra-backdrop-invert)",
      "var(--chakra-backdrop-opacity)",
      "var(--chakra-backdrop-saturate)",
      "var(--chakra-backdrop-sepia)",
    ].join(" "),
    "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  };
function b2(e) {
  return {
    "--chakra-ring-offset-shadow":
      "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow":
      "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)",
    ].join(", "),
  };
}
var S2 = {
    "row-reverse": {
      space: "--chakra-space-x-reverse",
      divide: "--chakra-divide-x-reverse",
    },
    "column-reverse": {
      space: "--chakra-space-y-reverse",
      divide: "--chakra-divide-y-reverse",
    },
  },
  Xd = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  },
  x2 = new Set(Object.values(Xd)),
  Qd = new Set([
    "none",
    "-moz-initial",
    "inherit",
    "initial",
    "revert",
    "unset",
  ]),
  w2 = (e) => e.trim();
function k2(e, t) {
  if (e == null || Qd.has(e)) return e;
  if (!(qd(e) || Qd.has(e))) return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    i = o?.[1],
    a = o?.[2];
  if (!i || !a) return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`,
    [l, ...u] = a.split(",").map(w2).filter(Boolean);
  if (u?.length === 0) return e;
  const c = l in Xd ? Xd[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (x2.has(f)) return f;
    const p = f.indexOf(" "),
      [v, b] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f],
      C = qd(b) ? b : b && b.split(" "),
      g = `colors.${v}`,
      h = g in t.__cssMap ? t.__cssMap[g].varRef : v;
    return C ? [h, ...(Array.isArray(C) ? C : [C])].join(" ") : h;
  });
  return `${s}(${d.join(", ")})`;
}
var qd = (e) => typeof e == "string" && e.includes("(") && e.includes(")"),
  C2 = (e, t) => k2(e, t ?? {});
function _2(e) {
  return /^var\(--.+\)$/.test(e);
}
var T2 = (e) => {
    const t = parseFloat(e.toString()),
      r = e.toString().replace(String(t), "");
    return { unitless: !r, value: t, unit: r };
  },
  ar = (e) => (t) => `${e}(${t})`,
  Q = {
    filter(e) {
      return e !== "auto" ? e : v2;
    },
    backdropFilter(e) {
      return e !== "auto" ? e : y2;
    },
    ring(e) {
      return b2(Q.px(e));
    },
    bgClip(e) {
      return e === "text"
        ? { color: "transparent", backgroundClip: "text" }
        : { backgroundClip: e };
    },
    transform(e) {
      return e === "auto" ? m2() : e === "auto-gpu" ? g2() : e;
    },
    vh(e) {
      return e === "$100vh" ? "var(--chakra-vh)" : e;
    },
    px(e) {
      if (e == null) return e;
      const { unitless: t } = T2(e);
      return t || typeof e == "number" ? `${e}px` : e;
    },
    fraction(e) {
      return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
    },
    float(e, t) {
      const r = { left: "right", right: "left" };
      return t.direction === "rtl" ? r[e] : e;
    },
    degree(e) {
      if (_2(e) || e == null) return e;
      const t = typeof e == "string" && !e.endsWith("deg");
      return typeof e == "number" || t ? `${e}deg` : e;
    },
    gradient: C2,
    blur: ar("blur"),
    opacity: ar("opacity"),
    brightness: ar("brightness"),
    contrast: ar("contrast"),
    dropShadow: ar("drop-shadow"),
    grayscale: ar("grayscale"),
    hueRotate: ar("hue-rotate"),
    invert: ar("invert"),
    saturate: ar("saturate"),
    sepia: ar("sepia"),
    bgImage(e) {
      return e == null || qd(e) || Qd.has(e) ? e : `url(${e})`;
    },
    outline(e) {
      const t = String(e) === "0" || String(e) === "none";
      return e !== null && t
        ? { outline: "2px solid transparent", outlineOffset: "2px" }
        : { outline: e };
    },
    flexDirection(e) {
      var t;
      const { space: r, divide: n } = (t = S2[e]) != null ? t : {},
        o = { flexDirection: e };
      return r && (o[r] = 1), n && (o[n] = 1), o;
    },
  },
  x = {
    borderWidths: Ft("borderWidths"),
    borderStyles: Ft("borderStyles"),
    colors: Ft("colors"),
    borders: Ft("borders"),
    gradients: Ft("gradients", Q.gradient),
    radii: Ft("radii", Q.px),
    space: Ft("space", bs(Q.vh, Q.px)),
    spaceT: Ft("space", bs(Q.vh, Q.px)),
    degreeT(e) {
      return { property: e, transform: Q.degree };
    },
    prop(e, t, r) {
      return {
        property: e,
        scale: t,
        ...(t && { transform: Rh({ scale: t, transform: r }) }),
      };
    },
    propT(e, t) {
      return { property: e, transform: t };
    },
    sizes: Ft("sizes", bs(Q.vh, Q.px)),
    sizesT: Ft("sizes", bs(Q.vh, Q.fraction)),
    shadows: Ft("shadows"),
    logical: p2,
    blur: Ft("blur", Q.blur),
  },
  Gs = {
    background: x.colors("background"),
    backgroundColor: x.colors("backgroundColor"),
    backgroundImage: x.gradients("backgroundImage"),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: Q.bgClip },
    bgSize: x.prop("backgroundSize"),
    bgPosition: x.prop("backgroundPosition"),
    bg: x.colors("background"),
    bgColor: x.colors("backgroundColor"),
    bgPos: x.prop("backgroundPosition"),
    bgRepeat: x.prop("backgroundRepeat"),
    bgAttachment: x.prop("backgroundAttachment"),
    bgGradient: x.gradients("backgroundImage"),
    bgClip: { transform: Q.bgClip },
  };
Object.assign(Gs, { bgImage: Gs.backgroundImage, bgImg: Gs.backgroundImage });
var Z = {
  border: x.borders("border"),
  borderWidth: x.borderWidths("borderWidth"),
  borderStyle: x.borderStyles("borderStyle"),
  borderColor: x.colors("borderColor"),
  borderRadius: x.radii("borderRadius"),
  borderTop: x.borders("borderTop"),
  borderBlockStart: x.borders("borderBlockStart"),
  borderTopLeftRadius: x.radii("borderTopLeftRadius"),
  borderStartStartRadius: x.logical({
    scale: "radii",
    property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
  }),
  borderEndStartRadius: x.logical({
    scale: "radii",
    property: { ltr: "borderBottomLeftRadius", rtl: "borderBottomRightRadius" },
  }),
  borderTopRightRadius: x.radii("borderTopRightRadius"),
  borderStartEndRadius: x.logical({
    scale: "radii",
    property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
  }),
  borderEndEndRadius: x.logical({
    scale: "radii",
    property: { ltr: "borderBottomRightRadius", rtl: "borderBottomLeftRadius" },
  }),
  borderRight: x.borders("borderRight"),
  borderInlineEnd: x.borders("borderInlineEnd"),
  borderBottom: x.borders("borderBottom"),
  borderBlockEnd: x.borders("borderBlockEnd"),
  borderBottomLeftRadius: x.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: x.radii("borderBottomRightRadius"),
  borderLeft: x.borders("borderLeft"),
  borderInlineStart: { property: "borderInlineStart", scale: "borders" },
  borderInlineStartRadius: x.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
    },
  }),
  borderInlineEndRadius: x.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    },
  }),
  borderX: x.borders(["borderLeft", "borderRight"]),
  borderInline: x.borders("borderInline"),
  borderY: x.borders(["borderTop", "borderBottom"]),
  borderBlock: x.borders("borderBlock"),
  borderTopWidth: x.borderWidths("borderTopWidth"),
  borderBlockStartWidth: x.borderWidths("borderBlockStartWidth"),
  borderTopColor: x.colors("borderTopColor"),
  borderBlockStartColor: x.colors("borderBlockStartColor"),
  borderTopStyle: x.borderStyles("borderTopStyle"),
  borderBlockStartStyle: x.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: x.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: x.borderWidths("borderBlockEndWidth"),
  borderBottomColor: x.colors("borderBottomColor"),
  borderBlockEndColor: x.colors("borderBlockEndColor"),
  borderBottomStyle: x.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: x.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: x.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: x.borderWidths("borderInlineStartWidth"),
  borderLeftColor: x.colors("borderLeftColor"),
  borderInlineStartColor: x.colors("borderInlineStartColor"),
  borderLeftStyle: x.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: x.borderStyles("borderInlineStartStyle"),
  borderRightWidth: x.borderWidths("borderRightWidth"),
  borderInlineEndWidth: x.borderWidths("borderInlineEndWidth"),
  borderRightColor: x.colors("borderRightColor"),
  borderInlineEndColor: x.colors("borderInlineEndColor"),
  borderRightStyle: x.borderStyles("borderRightStyle"),
  borderInlineEndStyle: x.borderStyles("borderInlineEndStyle"),
  borderTopRadius: x.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: x.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ]),
  borderLeftRadius: x.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: x.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius",
  ]),
};
Object.assign(Z, {
  rounded: Z.borderRadius,
  roundedTop: Z.borderTopRadius,
  roundedTopLeft: Z.borderTopLeftRadius,
  roundedTopRight: Z.borderTopRightRadius,
  roundedTopStart: Z.borderStartStartRadius,
  roundedTopEnd: Z.borderStartEndRadius,
  roundedBottom: Z.borderBottomRadius,
  roundedBottomLeft: Z.borderBottomLeftRadius,
  roundedBottomRight: Z.borderBottomRightRadius,
  roundedBottomStart: Z.borderEndStartRadius,
  roundedBottomEnd: Z.borderEndEndRadius,
  roundedLeft: Z.borderLeftRadius,
  roundedRight: Z.borderRightRadius,
  roundedStart: Z.borderInlineStartRadius,
  roundedEnd: Z.borderInlineEndRadius,
  borderStart: Z.borderInlineStart,
  borderEnd: Z.borderInlineEnd,
  borderTopStartRadius: Z.borderStartStartRadius,
  borderTopEndRadius: Z.borderStartEndRadius,
  borderBottomStartRadius: Z.borderEndStartRadius,
  borderBottomEndRadius: Z.borderEndEndRadius,
  borderStartRadius: Z.borderInlineStartRadius,
  borderEndRadius: Z.borderInlineEndRadius,
  borderStartWidth: Z.borderInlineStartWidth,
  borderEndWidth: Z.borderInlineEndWidth,
  borderStartColor: Z.borderInlineStartColor,
  borderEndColor: Z.borderInlineEndColor,
  borderStartStyle: Z.borderInlineStartStyle,
  borderEndStyle: Z.borderInlineEndStyle,
});
var P2 = {
    color: x.colors("color"),
    textColor: x.colors("color"),
    fill: x.colors("fill"),
    stroke: x.colors("stroke"),
  },
  Zd = {
    boxShadow: x.shadows("boxShadow"),
    mixBlendMode: !0,
    blendMode: x.prop("mixBlendMode"),
    backgroundBlendMode: !0,
    bgBlendMode: x.prop("backgroundBlendMode"),
    opacity: !0,
  };
Object.assign(Zd, { shadow: Zd.boxShadow });
var E2 = {
    filter: { transform: Q.filter },
    blur: x.blur("--chakra-blur"),
    brightness: x.propT("--chakra-brightness", Q.brightness),
    contrast: x.propT("--chakra-contrast", Q.contrast),
    hueRotate: x.degreeT("--chakra-hue-rotate"),
    invert: x.propT("--chakra-invert", Q.invert),
    saturate: x.propT("--chakra-saturate", Q.saturate),
    dropShadow: x.propT("--chakra-drop-shadow", Q.dropShadow),
    backdropFilter: { transform: Q.backdropFilter },
    backdropBlur: x.blur("--chakra-backdrop-blur"),
    backdropBrightness: x.propT("--chakra-backdrop-brightness", Q.brightness),
    backdropContrast: x.propT("--chakra-backdrop-contrast", Q.contrast),
    backdropHueRotate: x.degreeT("--chakra-backdrop-hue-rotate"),
    backdropInvert: x.propT("--chakra-backdrop-invert", Q.invert),
    backdropSaturate: x.propT("--chakra-backdrop-saturate", Q.saturate),
  },
  Ml = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: Q.flexDirection },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: x.sizes("flexBasis"),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: x.space("gap"),
    rowGap: x.space("rowGap"),
    columnGap: x.space("columnGap"),
  };
Object.assign(Ml, { flexDir: Ml.flexDirection });
var X1 = {
    gridGap: x.space("gridGap"),
    gridColumnGap: x.space("gridColumnGap"),
    gridRowGap: x.space("gridRowGap"),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  $2 = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: Q.outline },
    outlineOffset: !0,
    outlineColor: x.colors("outlineColor"),
  },
  Dt = {
    width: x.sizesT("width"),
    inlineSize: x.sizesT("inlineSize"),
    height: x.sizes("height"),
    blockSize: x.sizes("blockSize"),
    boxSize: x.sizes(["width", "height"]),
    minWidth: x.sizes("minWidth"),
    minInlineSize: x.sizes("minInlineSize"),
    minHeight: x.sizes("minHeight"),
    minBlockSize: x.sizes("minBlockSize"),
    maxWidth: x.sizes("maxWidth"),
    maxInlineSize: x.sizes("maxInlineSize"),
    maxHeight: x.sizes("maxHeight"),
    maxBlockSize: x.sizes("maxBlockSize"),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    aspectRatio: !0,
    hideFrom: {
      scale: "breakpoints",
      transform: (e, t) => {
        var r, n, o;
        return {
          [`@media screen and (min-width: ${
            (o =
              (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null
                ? void 0
                : n.minW) != null
              ? o
              : e
          })`]: { display: "none" },
        };
      },
    },
    hideBelow: {
      scale: "breakpoints",
      transform: (e, t) => {
        var r, n, o;
        return {
          [`@media screen and (max-width: ${
            (o =
              (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null
                ? void 0
                : n._minW) != null
              ? o
              : e
          })`]: { display: "none" },
        };
      },
    },
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: x.propT("float", Q.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  };
Object.assign(Dt, {
  w: Dt.width,
  h: Dt.height,
  minW: Dt.minWidth,
  maxW: Dt.maxWidth,
  minH: Dt.minHeight,
  maxH: Dt.maxHeight,
  overscroll: Dt.overscrollBehavior,
  overscrollX: Dt.overscrollBehaviorX,
  overscrollY: Dt.overscrollBehaviorY,
});
var A2 = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: x.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: x.prop("listStyleImage"),
};
function z2(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1) e = e[o[n]];
  return e === void 0 ? r : e;
}
var R2 = (e) => {
    const t = new WeakMap();
    return (n, o, i, a) => {
      if (typeof n > "u") return e(n, o, i);
      t.has(n) || t.set(n, new Map());
      const s = t.get(n);
      if (s.has(o)) return s.get(o);
      const l = e(n, o, i, a);
      return s.set(o, l), l;
    };
  },
  M2 = R2(z2),
  L2 = {
    border: "0px",
    clip: "rect(0, 0, 0, 0)",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  F2 = {
    position: "static",
    width: "auto",
    height: "auto",
    clip: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
  },
  wc = (e, t, r) => {
    const n = {},
      o = M2(e, t, {});
    for (const i in o) (i in r && r[i] != null) || (n[i] = o[i]);
    return n;
  },
  I2 = {
    srOnly: {
      transform(e) {
        return e === !0 ? L2 : e === "focusable" ? F2 : {};
      },
    },
    layerStyle: {
      processResult: !0,
      transform: (e, t, r) => wc(t, `layerStyles.${e}`, r),
    },
    textStyle: {
      processResult: !0,
      transform: (e, t, r) => wc(t, `textStyles.${e}`, r),
    },
    apply: { processResult: !0, transform: (e, t, r) => wc(t, e, r) },
  },
  Ui = {
    position: !0,
    pos: x.prop("position"),
    zIndex: x.prop("zIndex", "zIndices"),
    inset: x.spaceT("inset"),
    insetX: x.spaceT(["left", "right"]),
    insetInline: x.spaceT("insetInline"),
    insetY: x.spaceT(["top", "bottom"]),
    insetBlock: x.spaceT("insetBlock"),
    top: x.spaceT("top"),
    insetBlockStart: x.spaceT("insetBlockStart"),
    bottom: x.spaceT("bottom"),
    insetBlockEnd: x.spaceT("insetBlockEnd"),
    left: x.spaceT("left"),
    insetInlineStart: x.logical({
      scale: "space",
      property: { ltr: "left", rtl: "right" },
    }),
    right: x.spaceT("right"),
    insetInlineEnd: x.logical({
      scale: "space",
      property: { ltr: "right", rtl: "left" },
    }),
  };
Object.assign(Ui, {
  insetStart: Ui.insetInlineStart,
  insetEnd: Ui.insetInlineEnd,
});
var D2 = {
    ring: { transform: Q.ring },
    ringColor: x.colors("--chakra-ring-color"),
    ringOffset: x.prop("--chakra-ring-offset-width"),
    ringOffsetColor: x.colors("--chakra-ring-offset-color"),
    ringInset: x.prop("--chakra-ring-inset"),
  },
  ve = {
    margin: x.spaceT("margin"),
    marginTop: x.spaceT("marginTop"),
    marginBlockStart: x.spaceT("marginBlockStart"),
    marginRight: x.spaceT("marginRight"),
    marginInlineEnd: x.spaceT("marginInlineEnd"),
    marginBottom: x.spaceT("marginBottom"),
    marginBlockEnd: x.spaceT("marginBlockEnd"),
    marginLeft: x.spaceT("marginLeft"),
    marginInlineStart: x.spaceT("marginInlineStart"),
    marginX: x.spaceT(["marginInlineStart", "marginInlineEnd"]),
    marginInline: x.spaceT("marginInline"),
    marginY: x.spaceT(["marginTop", "marginBottom"]),
    marginBlock: x.spaceT("marginBlock"),
    padding: x.space("padding"),
    paddingTop: x.space("paddingTop"),
    paddingBlockStart: x.space("paddingBlockStart"),
    paddingRight: x.space("paddingRight"),
    paddingBottom: x.space("paddingBottom"),
    paddingBlockEnd: x.space("paddingBlockEnd"),
    paddingLeft: x.space("paddingLeft"),
    paddingInlineStart: x.space("paddingInlineStart"),
    paddingInlineEnd: x.space("paddingInlineEnd"),
    paddingX: x.space(["paddingInlineStart", "paddingInlineEnd"]),
    paddingInline: x.space("paddingInline"),
    paddingY: x.space(["paddingTop", "paddingBottom"]),
    paddingBlock: x.space("paddingBlock"),
  };
Object.assign(ve, {
  m: ve.margin,
  mt: ve.marginTop,
  mr: ve.marginRight,
  me: ve.marginInlineEnd,
  marginEnd: ve.marginInlineEnd,
  mb: ve.marginBottom,
  ml: ve.marginLeft,
  ms: ve.marginInlineStart,
  marginStart: ve.marginInlineStart,
  mx: ve.marginX,
  my: ve.marginY,
  p: ve.padding,
  pt: ve.paddingTop,
  py: ve.paddingY,
  px: ve.paddingX,
  pb: ve.paddingBottom,
  pl: ve.paddingLeft,
  ps: ve.paddingInlineStart,
  paddingStart: ve.paddingInlineStart,
  pr: ve.paddingRight,
  pe: ve.paddingInlineEnd,
  paddingEnd: ve.paddingInlineEnd,
});
var B2 = {
    textDecorationColor: x.colors("textDecorationColor"),
    textDecoration: !0,
    textDecor: { property: "textDecoration" },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: x.shadows("textShadow"),
  },
  V2 = {
    clipPath: !0,
    transform: x.propT("transform", Q.transform),
    transformOrigin: !0,
    translateX: x.spaceT("--chakra-translate-x"),
    translateY: x.spaceT("--chakra-translate-y"),
    skewX: x.degreeT("--chakra-skew-x"),
    skewY: x.degreeT("--chakra-skew-y"),
    scaleX: x.prop("--chakra-scale-x"),
    scaleY: x.prop("--chakra-scale-y"),
    scale: x.prop(["--chakra-scale-x", "--chakra-scale-y"]),
    rotate: x.degreeT("--chakra-rotate"),
  },
  O2 = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: x.prop("transitionDuration", "transition.duration"),
    transitionProperty: x.prop("transitionProperty", "transition.property"),
    transitionTimingFunction: x.prop(
      "transitionTimingFunction",
      "transition.easing"
    ),
  },
  N2 = {
    fontFamily: x.prop("fontFamily", "fonts"),
    fontSize: x.prop("fontSize", "fontSizes", Q.px),
    fontWeight: x.prop("fontWeight", "fontWeights"),
    lineHeight: x.prop("lineHeight", "lineHeights"),
    letterSpacing: x.prop("letterSpacing", "letterSpacings"),
    textAlign: !0,
    fontStyle: !0,
    textIndent: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    isTruncated: {
      transform(e) {
        if (e === !0)
          return {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          };
      },
    },
    noOfLines: {
      static: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "var(--chakra-line-clamp)",
      },
      property: "--chakra-line-clamp",
    },
  },
  j2 = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: x.spaceT("scrollMargin"),
    scrollMarginTop: x.spaceT("scrollMarginTop"),
    scrollMarginBottom: x.spaceT("scrollMarginBottom"),
    scrollMarginLeft: x.spaceT("scrollMarginLeft"),
    scrollMarginRight: x.spaceT("scrollMarginRight"),
    scrollMarginX: x.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
    scrollMarginY: x.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
    scrollPadding: x.spaceT("scrollPadding"),
    scrollPaddingTop: x.spaceT("scrollPaddingTop"),
    scrollPaddingBottom: x.spaceT("scrollPaddingBottom"),
    scrollPaddingLeft: x.spaceT("scrollPaddingLeft"),
    scrollPaddingRight: x.spaceT("scrollPaddingRight"),
    scrollPaddingX: x.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
    scrollPaddingY: x.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
  };
function Q1(e) {
  return Wt(e) && e.reference ? e.reference : String(e);
}
var Cu = (e, ...t) => t.map(Q1).join(` ${e} `).replace(/calc/g, ""),
  ag = (...e) => `calc(${Cu("+", ...e)})`,
  sg = (...e) => `calc(${Cu("-", ...e)})`,
  Jd = (...e) => `calc(${Cu("*", ...e)})`,
  lg = (...e) => `calc(${Cu("/", ...e)})`,
  ug = (e) => {
    const t = Q1(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : Jd(t, -1);
  },
  Rn = Object.assign(
    (e) => ({
      add: (...t) => Rn(ag(e, ...t)),
      subtract: (...t) => Rn(sg(e, ...t)),
      multiply: (...t) => Rn(Jd(e, ...t)),
      divide: (...t) => Rn(lg(e, ...t)),
      negate: () => Rn(ug(e)),
      toString: () => e.toString(),
    }),
    { add: ag, subtract: sg, multiply: Jd, divide: lg, negate: ug }
  );
function W2(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function U2(e) {
  const t = W2(e.toString());
  return G2(H2(t));
}
function H2(e) {
  return e.includes("\\.")
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
    ? e.replace(".", "\\.")
    : e;
}
function G2(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function K2(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function Y2(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function X2(e, t = "") {
  return U2(`--${K2(e, t)}`);
}
function B(e, t, r) {
  const n = X2(e, r);
  return { variable: n, reference: Y2(n, t) };
}
function Q2(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [o, i] = n;
      r[o] = B(`${e}-${o}`, i);
      continue;
    }
    r[n] = B(`${e}-${n}`);
  }
  return r;
}
function q2(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Z2(e) {
  const t = parseFloat(e.toString()),
    r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function ef(e) {
  if (e == null) return e;
  const { unitless: t } = Z2(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var q1 = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  Mh = (e) => Object.fromEntries(Object.entries(e).sort(q1));
function cg(e) {
  const t = Mh(e);
  return Object.assign(Object.values(t), t);
}
function J2(e) {
  const t = Object.keys(Mh(e));
  return new Set(t);
}
function dg(e) {
  var t;
  if (!e) return e;
  e = (t = ef(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number"
    ? `${e + r}`
    : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function Ei(e, t) {
  const r = ["@media screen"];
  return (
    e && r.push("and", `(min-width: ${ef(e)})`),
    t && r.push("and", `(max-width: ${ef(t)})`),
    r.join(" ")
  );
}
function eT(e) {
  var t;
  if (!e) return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = cg(e),
    n = Object.entries(e)
      .sort(q1)
      .map(([a, s], l, u) => {
        var c;
        let [, d] = (c = u[l + 1]) != null ? c : [];
        return (
          (d = parseFloat(d) > 0 ? dg(d) : void 0),
          {
            _minW: dg(s),
            breakpoint: a,
            minW: s,
            maxW: d,
            maxWQuery: Ei(null, d),
            minWQuery: Ei(s),
            minMaxQuery: Ei(s, d),
          }
        );
      }),
    o = J2(e),
    i = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: Mh(e),
    asArray: cg(e),
    details: n,
    get(a) {
      return n.find((s) => s.breakpoint === a);
    },
    media: [null, ...r.map((a) => Ei(a)).slice(1)],
    toArrayValue(a) {
      if (!Wt(a)) throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; q2(s) === null; ) s.pop();
      return s;
    },
    toObjectValue(a) {
      if (!Array.isArray(a))
        throw new Error("toObjectValue: value must be an array");
      return a.reduce((s, l, u) => {
        const c = i[u];
        return c != null && l != null && (s[c] = l), s;
      }, {});
    },
  };
}
var Ge = {
    hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
    focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
    focusVisible: (e, t) => `${e}:focus-visible ${t}`,
    focusWithin: (e, t) => `${e}:focus-within ${t}`,
    active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
    disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
    invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
    checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
    indeterminate: (e, t) =>
      `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
    readOnly: (e, t) =>
      `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
    expanded: (e, t) =>
      `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
    placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
  },
  Hr = (e) => Z1((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"),
  Sr = (e) => Z1((t) => e(t, "~ &"), "[data-peer]", ".peer"),
  Z1 = (e, ...t) => t.map(e).join(", "),
  _u = {
    _hover: "&:hover, &[data-hover]",
    _active: "&:active, &[data-active]",
    _focus: "&:focus, &[data-focus]",
    _highlighted: "&[data-highlighted]",
    _focusWithin: "&:focus-within",
    _focusVisible: "&:focus-visible, &[data-focus-visible]",
    _disabled:
      "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
    _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
    _before: "&::before",
    _after: "&::after",
    _empty: "&:empty",
    _expanded: "&[aria-expanded=true], &[data-expanded]",
    _checked: "&[aria-checked=true], &[data-checked]",
    _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
    _pressed: "&[aria-pressed=true], &[data-pressed]",
    _invalid: "&[aria-invalid=true], &[data-invalid]",
    _valid: "&[data-valid], &[data-state=valid]",
    _loading: "&[data-loading], &[aria-busy=true]",
    _selected: "&[aria-selected=true], &[data-selected]",
    _hidden: "&[hidden], &[data-hidden]",
    _autofill: "&:-webkit-autofill",
    _even: "&:nth-of-type(even)",
    _odd: "&:nth-of-type(odd)",
    _first: "&:first-of-type",
    _firstLetter: "&::first-letter",
    _last: "&:last-of-type",
    _notFirst: "&:not(:first-of-type)",
    _notLast: "&:not(:last-of-type)",
    _visited: "&:visited",
    _activeLink: "&[aria-current=page]",
    _activeStep: "&[aria-current=step]",
    _indeterminate:
      "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
    _groupHover: Hr(Ge.hover),
    _peerHover: Sr(Ge.hover),
    _groupFocus: Hr(Ge.focus),
    _peerFocus: Sr(Ge.focus),
    _groupFocusVisible: Hr(Ge.focusVisible),
    _peerFocusVisible: Sr(Ge.focusVisible),
    _groupActive: Hr(Ge.active),
    _peerActive: Sr(Ge.active),
    _groupDisabled: Hr(Ge.disabled),
    _peerDisabled: Sr(Ge.disabled),
    _groupInvalid: Hr(Ge.invalid),
    _peerInvalid: Sr(Ge.invalid),
    _groupChecked: Hr(Ge.checked),
    _peerChecked: Sr(Ge.checked),
    _groupFocusWithin: Hr(Ge.focusWithin),
    _peerFocusWithin: Sr(Ge.focusWithin),
    _peerPlaceholderShown: Sr(Ge.placeholderShown),
    _placeholder: "&::placeholder",
    _placeholderShown: "&:placeholder-shown",
    _fullScreen: "&:fullscreen",
    _selection: "&::selection",
    _rtl: "[dir=rtl] &, &[dir=rtl]",
    _ltr: "[dir=ltr] &, &[dir=ltr]",
    _mediaDark: "@media (prefers-color-scheme: dark)",
    _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
    _dark:
      ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
    _light:
      ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
    _horizontal: "&[data-orientation=horizontal]",
    _vertical: "&[data-orientation=vertical]",
  },
  J1 = Object.keys(_u);
function fg(e, t) {
  return B(String(e).replace(/\./g, "-"), void 0, t);
}
function tT(e, t) {
  let r = {};
  const n = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i,
      { variable: l, reference: u } = fg(o, t?.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."),
          [p, ...v] = f,
          b = `${p}.-${v.join(".")}`,
          C = Rn.negate(s),
          g = Rn.negate(u);
        n[b] = { value: C, var: l, varRef: g };
      }
      (r[l] = s), (n[o] = { value: s, var: l, varRef: u });
      continue;
    }
    const c = (f) => {
        const v = [String(o).split(".")[0], f].join(".");
        if (!e[v]) return f;
        const { reference: C } = fg(v, t?.cssVarPrefix);
        return C;
      },
      d = Wt(s) ? s : { default: s };
    (r = Nt(
      r,
      Object.entries(d).reduce((f, [p, v]) => {
        var b, C;
        if (!v) return f;
        const g = c(`${v}`);
        if (p === "default") return (f[l] = g), f;
        const h = (C = (b = _u) == null ? void 0 : b[p]) != null ? C : p;
        return (f[h] = { [l]: g }), f;
      }, {})
    )),
      (n[o] = { value: u, var: l, varRef: u });
  }
  return { cssVars: r, cssMap: n };
}
function rT(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t) n in r && delete r[n];
  return r;
}
function nT(e, t) {
  const r = {};
  for (const n of t) n in e && (r[n] = e[n]);
  return r;
}
function oT(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function hg(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function i(a, s = []) {
    var l;
    if (oT(a) || Array.isArray(a)) {
      const u = {};
      for (const [c, d] of Object.entries(a)) {
        const f = (l = o?.(c)) != null ? l : c,
          p = [...s, f];
        if (n?.(a, p)) return t(a, s);
        u[f] = i(d, p);
      }
      return u;
    }
    return t(a, s);
  }
  return i(e);
}
var iT = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints",
];
function aT(e) {
  return nT(e, iT);
}
function sT(e) {
  return e.semanticTokens;
}
function lT(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var uT = (e) => J1.includes(e) || e === "default";
function cT({ tokens: e, semanticTokens: t }) {
  const r = {};
  return (
    hg(e, (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
    }),
    hg(
      t,
      (n, o) => {
        n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
      },
      { stop: (n) => Object.keys(n).every(uT) }
    ),
    r
  );
}
function dT(e) {
  var t;
  const r = lT(e),
    n = aT(r),
    o = sT(r),
    i = cT({ tokens: n, semanticTokens: o }),
    a = (t = r.config) == null ? void 0 : t.cssVarPrefix,
    { cssMap: s, cssVars: l } = tT(i, { cssVarPrefix: a });
  return (
    Object.assign(r, {
      __cssVars: {
        ...{
          "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-ring-offset-width": "0px",
          "--chakra-ring-offset-color": "#fff",
          "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
          "--chakra-ring-offset-shadow": "0 0 #0000",
          "--chakra-ring-shadow": "0 0 #0000",
          "--chakra-space-x-reverse": "0",
          "--chakra-space-y-reverse": "0",
        },
        ...l,
      },
      __cssMap: s,
      __breakpoints: eT(r.breakpoints),
    }),
    r
  );
}
var Lh = Nt(
  {},
  Gs,
  Z,
  P2,
  Ml,
  Dt,
  E2,
  D2,
  $2,
  X1,
  I2,
  Ui,
  Zd,
  ve,
  j2,
  N2,
  B2,
  V2,
  A2,
  O2
);
Object.assign({}, ve, Dt, Ml, X1, Ui);
var fT = [...Object.keys(Lh), ...J1],
  hT = { ...Lh, ..._u },
  pT = (e) => e in hT,
  mT = (e) => (t) => {
    if (!t.__breakpoints) return e;
    const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints,
      i = {};
    for (const a in e) {
      let s = nn(e[a], t);
      if (s == null) continue;
      if (((s = Wt(s) && r(s) ? n(s) : s), !Array.isArray(s))) {
        i[a] = s;
        continue;
      }
      const l = s.slice(0, o.length).length;
      for (let u = 0; u < l; u += 1) {
        const c = o?.[u];
        if (!c) {
          i[a] = s[u];
          continue;
        }
        (i[c] = i[c] || {}), s[u] != null && (i[c][a] = s[u]);
      }
    }
    return i;
  };
function gT(e) {
  const t = [];
  let r = "",
    n = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "("
      ? ((n = !0), (r += i))
      : i === ")"
      ? ((n = !1), (r += i))
      : i === "," && !n
      ? (t.push(r), (r = ""))
      : (r += i);
  }
  return (r = r.trim()), r && t.push(r), t;
}
function vT(e) {
  return /^var\(--.+\)$/.test(e);
}
var yT = (e, t) => e.startsWith("--") && typeof t == "string" && !vT(t),
  bT = (e, t) => {
    var r, n;
    if (t == null) return t;
    const o = (l) => {
        var u, c;
        return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null
          ? void 0
          : c.varRef;
      },
      i = (l) => {
        var u;
        return (u = o(l)) != null ? u : l;
      },
      [a, s] = gT(t);
    return (t = (n = (r = o(a)) != null ? r : i(s)) != null ? n : i(t)), t;
  };
function ST(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e,
    o = (i, a = !1) => {
      var s, l, u;
      const c = nn(i, n),
        d = mT(c)(n);
      let f = {};
      for (let p in d) {
        const v = d[p];
        let b = nn(v, n);
        p in r && (p = r[p]), yT(p, b) && (b = bT(n, b));
        let C = t[p];
        if ((C === !0 && (C = { property: p }), Wt(b))) {
          (f[p] = (s = f[p]) != null ? s : {}), (f[p] = Nt({}, f[p], o(b, !0)));
          continue;
        }
        let g =
          (u = (l = C?.transform) == null ? void 0 : l.call(C, b, n, c)) != null
            ? u
            : b;
        g = C?.processResult ? o(g, !0) : g;
        const h = nn(C?.property, n);
        if (!a && C?.static) {
          const m = nn(C.static, n);
          f = Nt({}, f, m);
        }
        if (h && Array.isArray(h)) {
          for (const m of h) f[m] = g;
          continue;
        }
        if (h) {
          h === "&" && Wt(g) ? (f = Nt({}, f, g)) : (f[h] = g);
          continue;
        }
        if (Wt(g)) {
          f = Nt({}, f, g);
          continue;
        }
        f[p] = g;
      }
      return f;
    };
  return o;
}
var eb = (e) => (t) => ST({ theme: t, pseudos: _u, configs: Lh })(e);
function pe(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    },
  };
}
function xT(e, t) {
  if (Array.isArray(e)) return e;
  if (Wt(e)) return t(e);
  if (e != null) return [e];
}
function wT(e, t) {
  for (let r = t + 1; r < e.length; r++) if (e[r] != null) return r;
  return -1;
}
function kT(e) {
  const t = e.__breakpoints;
  return function (n, o, i, a) {
    var s, l;
    if (!t) return;
    const u = {},
      c = xT(i, t.toArrayValue);
    if (!c) return u;
    const d = c.length,
      f = d === 1,
      p = !!n.parts;
    for (let v = 0; v < d; v++) {
      const b = t.details[v],
        C = t.details[wT(c, v)],
        g = Ei(b.minW, C?._minW),
        h = nn((s = n[o]) == null ? void 0 : s[c[v]], a);
      if (h) {
        if (p) {
          (l = n.parts) == null ||
            l.forEach((m) => {
              Nt(u, { [m]: f ? h[m] : { [g]: h[m] } });
            });
          continue;
        }
        if (!p) {
          f ? Nt(u, h) : (u[g] = h);
          continue;
        }
        u[g] = h;
      }
    }
    return u;
  };
}
function CT(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: i } = t,
      a = kT(i);
    return Nt(
      {},
      nn((r = e.baseStyle) != null ? r : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", n, t)
    );
  };
}
function rr(e) {
  return rT(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var _T = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices",
];
function TT(e) {
  return Wt(e)
    ? _T.every((t) => Object.prototype.hasOwnProperty.call(e, t))
    : !1;
}
var PT = {
    common:
      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    colors: "background-color, border-color, color, fill, stroke",
    dimensions: "width, height",
    position: "left, right, top, bottom",
    background: "background-color, background-image, background-position",
  },
  ET = {
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  $T = {
    "ultra-fast": "50ms",
    faster: "100ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "400ms",
    "ultra-slow": "500ms",
  },
  AT = { property: PT, easing: ET, duration: $T },
  zT = AT,
  RT = {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  MT = RT,
  LT = {
    none: 0,
    "1px": "1px solid",
    "2px": "2px solid",
    "4px": "4px solid",
    "8px": "8px solid",
  },
  FT = LT,
  IT = {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  DT = IT,
  BT = {
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#FFFFFF",
    whiteAlpha: {
      50: "rgba(255, 255, 255, 0.04)",
      100: "rgba(255, 255, 255, 0.06)",
      200: "rgba(255, 255, 255, 0.08)",
      300: "rgba(255, 255, 255, 0.16)",
      400: "rgba(255, 255, 255, 0.24)",
      500: "rgba(255, 255, 255, 0.36)",
      600: "rgba(255, 255, 255, 0.48)",
      700: "rgba(255, 255, 255, 0.64)",
      800: "rgba(255, 255, 255, 0.80)",
      900: "rgba(255, 255, 255, 0.92)",
    },
    blackAlpha: {
      50: "rgba(0, 0, 0, 0.04)",
      100: "rgba(0, 0, 0, 0.06)",
      200: "rgba(0, 0, 0, 0.08)",
      300: "rgba(0, 0, 0, 0.16)",
      400: "rgba(0, 0, 0, 0.24)",
      500: "rgba(0, 0, 0, 0.36)",
      600: "rgba(0, 0, 0, 0.48)",
      700: "rgba(0, 0, 0, 0.64)",
      800: "rgba(0, 0, 0, 0.80)",
      900: "rgba(0, 0, 0, 0.92)",
    },
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
    red: {
      50: "#FFF5F5",
      100: "#FED7D7",
      200: "#FEB2B2",
      300: "#FC8181",
      400: "#F56565",
      500: "#E53E3E",
      600: "#C53030",
      700: "#9B2C2C",
      800: "#822727",
      900: "#63171B",
    },
    orange: {
      50: "#FFFAF0",
      100: "#FEEBC8",
      200: "#FBD38D",
      300: "#F6AD55",
      400: "#ED8936",
      500: "#DD6B20",
      600: "#C05621",
      700: "#9C4221",
      800: "#7B341E",
      900: "#652B19",
    },
    yellow: {
      50: "#FFFFF0",
      100: "#FEFCBF",
      200: "#FAF089",
      300: "#F6E05E",
      400: "#ECC94B",
      500: "#D69E2E",
      600: "#B7791F",
      700: "#975A16",
      800: "#744210",
      900: "#5F370E",
    },
    green: {
      50: "#F0FFF4",
      100: "#C6F6D5",
      200: "#9AE6B4",
      300: "#68D391",
      400: "#48BB78",
      500: "#38A169",
      600: "#2F855A",
      700: "#276749",
      800: "#22543D",
      900: "#1C4532",
    },
    teal: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
    blue: {
      50: "#ebf8ff",
      100: "#bee3f8",
      200: "#90cdf4",
      300: "#63b3ed",
      400: "#4299e1",
      500: "#3182ce",
      600: "#2b6cb0",
      700: "#2c5282",
      800: "#2a4365",
      900: "#1A365D",
    },
    cyan: {
      50: "#EDFDFD",
      100: "#C4F1F9",
      200: "#9DECF9",
      300: "#76E4F7",
      400: "#0BC5EA",
      500: "#00B5D8",
      600: "#00A3C4",
      700: "#0987A0",
      800: "#086F83",
      900: "#065666",
    },
    purple: {
      50: "#FAF5FF",
      100: "#E9D8FD",
      200: "#D6BCFA",
      300: "#B794F4",
      400: "#9F7AEA",
      500: "#805AD5",
      600: "#6B46C1",
      700: "#553C9A",
      800: "#44337A",
      900: "#322659",
    },
    pink: {
      50: "#FFF5F7",
      100: "#FED7E2",
      200: "#FBB6CE",
      300: "#F687B3",
      400: "#ED64A6",
      500: "#D53F8C",
      600: "#B83280",
      700: "#97266D",
      800: "#702459",
      900: "#521B41",
    },
    linkedin: {
      50: "#E8F4F9",
      100: "#CFEDFB",
      200: "#9BDAF3",
      300: "#68C7EC",
      400: "#34B3E4",
      500: "#00A0DC",
      600: "#008CC9",
      700: "#0077B5",
      800: "#005E93",
      900: "#004471",
    },
    facebook: {
      50: "#E8F4F9",
      100: "#D9DEE9",
      200: "#B7C2DA",
      300: "#6482C0",
      400: "#4267B2",
      500: "#385898",
      600: "#314E89",
      700: "#29487D",
      800: "#223B67",
      900: "#1E355B",
    },
    messenger: {
      50: "#D0E6FF",
      100: "#B9DAFF",
      200: "#A2CDFF",
      300: "#7AB8FF",
      400: "#2E90FF",
      500: "#0078FF",
      600: "#0063D1",
      700: "#0052AC",
      800: "#003C7E",
      900: "#002C5C",
    },
    whatsapp: {
      50: "#dffeec",
      100: "#b9f5d0",
      200: "#90edb3",
      300: "#65e495",
      400: "#3cdd78",
      500: "#22c35e",
      600: "#179848",
      700: "#0c6c33",
      800: "#01421c",
      900: "#001803",
    },
    twitter: {
      50: "#E5F4FD",
      100: "#C8E9FB",
      200: "#A8DCFA",
      300: "#83CDF7",
      400: "#57BBF5",
      500: "#1DA1F2",
      600: "#1A94DA",
      700: "#1681BF",
      800: "#136B9E",
      900: "#0D4D71",
    },
    telegram: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
  },
  VT = BT,
  OT = {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  NT = OT,
  jT = {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
    "dark-lg":
      "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
  },
  WT = jT,
  UT = {
    none: 0,
    sm: "4px",
    base: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  },
  HT = UT,
  GT = {
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeights: {
      normal: "normal",
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontSizes: {
      "3xs": "0.45rem",
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
  tb = GT,
  rb = {
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  KT = {
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    prose: "60ch",
  },
  YT = { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
  XT = { ...rb, ...KT, container: YT },
  nb = XT,
  QT = {
    breakpoints: DT,
    zIndices: MT,
    radii: NT,
    blur: HT,
    colors: VT,
    ...tb,
    sizes: nb,
    shadows: WT,
    space: rb,
    borders: FT,
    transition: zT,
  },
  { defineMultiStyleConfig: qT, definePartsStyle: $i } = pe([
    "stepper",
    "step",
    "title",
    "description",
    "indicator",
    "separator",
    "icon",
    "number",
  ]),
  kr = B("stepper-indicator-size"),
  wo = B("stepper-icon-size"),
  ko = B("stepper-title-font-size"),
  Ai = B("stepper-description-font-size"),
  bi = B("stepper-accent-color"),
  ZT = $i(({ colorScheme: e }) => ({
    stepper: {
      display: "flex",
      justifyContent: "space-between",
      gap: "4",
      "&[data-orientation=vertical]": {
        flexDirection: "column",
        alignItems: "flex-start",
      },
      "&[data-orientation=horizontal]": {
        flexDirection: "row",
        alignItems: "center",
      },
      [bi.variable]: `colors.${e}.500`,
      _dark: { [bi.variable]: `colors.${e}.200` },
    },
    title: { fontSize: ko.reference, fontWeight: "medium" },
    description: { fontSize: Ai.reference, color: "chakra-subtle-text" },
    number: { fontSize: ko.reference },
    step: {
      flexShrink: 0,
      position: "relative",
      display: "flex",
      gap: "2",
      "&[data-orientation=horizontal]": { alignItems: "center" },
      flex: "1",
      "&:last-of-type:not([data-stretch])": { flex: "initial" },
    },
    icon: { flexShrink: 0, width: wo.reference, height: wo.reference },
    indicator: {
      flexShrink: 0,
      borderRadius: "full",
      width: kr.reference,
      height: kr.reference,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&[data-status=active]": {
        borderWidth: "2px",
        borderColor: bi.reference,
      },
      "&[data-status=complete]": {
        bg: bi.reference,
        color: "chakra-inverse-text",
      },
      "&[data-status=incomplete]": { borderWidth: "2px" },
    },
    separator: {
      bg: "chakra-border-color",
      flex: "1",
      "&[data-status=complete]": { bg: bi.reference },
      "&[data-orientation=horizontal]": {
        width: "100%",
        height: "2px",
        marginStart: "2",
      },
      "&[data-orientation=vertical]": {
        width: "2px",
        position: "absolute",
        height: "100%",
        maxHeight: `calc(100% - ${kr.reference} - 8px)`,
        top: `calc(${kr.reference} + 4px)`,
        insetStart: `calc(${kr.reference} / 2 - 1px)`,
      },
    },
  })),
  JT = qT({
    baseStyle: ZT,
    sizes: {
      xs: $i({
        stepper: {
          [kr.variable]: "sizes.4",
          [wo.variable]: "sizes.3",
          [ko.variable]: "fontSizes.xs",
          [Ai.variable]: "fontSizes.xs",
        },
      }),
      sm: $i({
        stepper: {
          [kr.variable]: "sizes.6",
          [wo.variable]: "sizes.4",
          [ko.variable]: "fontSizes.sm",
          [Ai.variable]: "fontSizes.xs",
        },
      }),
      md: $i({
        stepper: {
          [kr.variable]: "sizes.8",
          [wo.variable]: "sizes.5",
          [ko.variable]: "fontSizes.md",
          [Ai.variable]: "fontSizes.sm",
        },
      }),
      lg: $i({
        stepper: {
          [kr.variable]: "sizes.10",
          [wo.variable]: "sizes.6",
          [ko.variable]: "fontSizes.lg",
          [Ai.variable]: "fontSizes.md",
        },
      }),
    },
    defaultProps: { size: "md", colorScheme: "blue" },
  });
function ne(e, t = {}) {
  let r = !1;
  function n() {
    if (!r) {
      r = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function o(...c) {
    n();
    for (const d of c) t[d] = l(d);
    return ne(e, t);
  }
  function i(...c) {
    for (const d of c) d in t || (t[d] = l(d));
    return ne(e, t);
  }
  function a() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.selector])
    );
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.className])
    );
  }
  function l(c) {
    const p = `chakra-${(["container", "root"].includes(c ?? "") ? [e] : [e, c])
      .filter(Boolean)
      .join("__")}`;
    return { className: p, selector: `.${p}`, toString: () => c };
  }
  return {
    parts: o,
    toPart: l,
    extend: i,
    selectors: a,
    classnames: s,
    get keys() {
      return Object.keys(t);
    },
    __type: {},
  };
}
var eP = ne("accordion")
    .parts("root", "container", "button", "panel")
    .extend("icon"),
  tP = ne("alert")
    .parts("title", "description", "container")
    .extend("icon", "spinner"),
  rP = ne("avatar")
    .parts("label", "badge", "container")
    .extend("excessLabel", "group"),
  nP = ne("breadcrumb").parts("link", "item", "container").extend("separator");
ne("button").parts();
var oP = ne("checkbox").parts("control", "icon", "container").extend("label");
ne("progress").parts("track", "filledTrack").extend("label");
var iP = ne("drawer")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  aP = ne("editable").parts("preview", "input", "textarea"),
  sP = ne("form").parts("container", "requiredIndicator", "helperText"),
  lP = ne("formError").parts("text", "icon"),
  uP = ne("input").parts("addon", "field", "element", "group"),
  cP = ne("list").parts("container", "item", "icon"),
  dP = ne("menu")
    .parts("button", "list", "item")
    .extend("groupTitle", "icon", "command", "divider"),
  fP = ne("modal")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  hP = ne("numberinput").parts("root", "field", "stepperGroup", "stepper");
ne("pininput").parts("field");
var pP = ne("popover")
    .parts("content", "header", "body", "footer")
    .extend("popper", "arrow", "closeButton"),
  mP = ne("progress").parts("label", "filledTrack", "track"),
  gP = ne("radio").parts("container", "control", "label"),
  vP = ne("select").parts("field", "icon"),
  yP = ne("slider").parts("container", "track", "thumb", "filledTrack", "mark"),
  bP = ne("stat").parts("container", "label", "helpText", "number", "icon"),
  SP = ne("switch").parts("container", "track", "thumb"),
  xP = ne("table").parts(
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "tfoot",
    "caption"
  ),
  wP = ne("tabs").parts(
    "root",
    "tab",
    "tablist",
    "tabpanel",
    "tabpanels",
    "indicator"
  ),
  kP = ne("tag").parts("container", "label", "closeButton"),
  CP = ne("card").parts("container", "header", "body", "footer");
function Dn(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class _P extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var zi = _P;
function Fh(e) {
  if (typeof e != "string") throw new zi(e);
  if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let t = e.trim();
  t = MP.test(e) ? EP(e) : e;
  const r = $P.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt(ka(s, 2), 16)),
      parseInt(ka(a[3] || "f", 2), 16) / 255,
    ];
  }
  const n = AP.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt(s, 16)),
      parseInt(a[3] || "ff", 16) / 255,
    ];
  }
  const o = zP.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt(s, 10)),
      parseFloat(a[3] || "1"),
    ];
  }
  const i = RP.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (Dn(0, 100, s) !== s) throw new zi(e);
    if (Dn(0, 100, l) !== l) throw new zi(e);
    return [...LP(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new zi(e);
}
function TP(e) {
  let t = 5381,
    r = e.length;
  for (; r; ) t = (t * 33) ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const pg = (e) => parseInt(e.replace(/_/g, ""), 36),
  PP =
    "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm"
      .split(" ")
      .reduce((e, t) => {
        const r = pg(t.substring(0, 3)),
          n = pg(t.substring(3)).toString(16);
        let o = "";
        for (let i = 0; i < 6 - n.length; i++) o += "0";
        return (e[r] = `${o}${n}`), e;
      }, {});
function EP(e) {
  const t = e.toLowerCase().trim(),
    r = PP[TP(t)];
  if (!r) throw new zi(e);
  return `#${r}`;
}
const ka = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(""),
  $P = new RegExp(`^#${ka("([a-f0-9])", 3)}([a-f0-9])?$`, "i"),
  AP = new RegExp(`^#${ka("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"),
  zP = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${ka(
      ",\\s*(\\d+)\\s*",
      2
    )}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    "i"
  ),
  RP =
    /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  MP = /^[a-z]+$/i,
  mg = (e) => Math.round(e * 255),
  LP = (e, t, r) => {
    let n = r / 100;
    if (t === 0) return [n, n, n].map(mg);
    const o = (((e % 360) + 360) % 360) / 60,
      i = (1 - Math.abs(2 * n - 1)) * (t / 100),
      a = i * (1 - Math.abs((o % 2) - 1));
    let s = 0,
      l = 0,
      u = 0;
    o >= 0 && o < 1
      ? ((s = i), (l = a))
      : o >= 1 && o < 2
      ? ((s = a), (l = i))
      : o >= 2 && o < 3
      ? ((l = i), (u = a))
      : o >= 3 && o < 4
      ? ((l = a), (u = i))
      : o >= 4 && o < 5
      ? ((s = a), (u = i))
      : o >= 5 && o < 6 && ((s = i), (u = a));
    const c = n - i / 2,
      d = s + c,
      f = l + c,
      p = u + c;
    return [d, f, p].map(mg);
  };
function FP(e, t, r, n) {
  return `rgba(${Dn(0, 255, e).toFixed()}, ${Dn(0, 255, t).toFixed()}, ${Dn(
    0,
    255,
    r
  ).toFixed()}, ${parseFloat(Dn(0, 1, n).toFixed(3))})`;
}
function IP(e, t) {
  const [r, n, o, i] = Fh(e);
  return FP(r, n, o, i - t);
}
function DP(e) {
  const [t, r, n, o] = Fh(e);
  let i = (a) => {
    const s = Dn(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function BP(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var VP = (e) => Object.keys(e).length === 0,
  it = (e, t, r) => {
    const n = BP(e, `colors.${t}`, t);
    try {
      return DP(n), n;
    } catch {
      return r ?? "#000000";
    }
  },
  OP = (e) => {
    const [t, r, n] = Fh(e);
    return (t * 299 + r * 587 + n * 114) / 1e3;
  },
  NP = (e) => (t) => {
    const r = it(t, e);
    return OP(r) < 128 ? "dark" : "light";
  },
  jP = (e) => (t) => NP(e)(t) === "dark",
  Zo = (e, t) => (r) => {
    const n = it(r, e);
    return IP(n, 1 - t);
  };
function gg(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`,
  };
}
var WP = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, "0")}`;
function UP(e) {
  const t = WP();
  return !e || VP(e)
    ? t
    : e.string && e.colors
    ? GP(e.string, e.colors)
    : e.string && !e.colors
    ? HP(e.string)
    : e.colors && !e.string
    ? KP(e.colors)
    : t;
}
function HP(e) {
  let t = 0;
  if (e.length === 0) return t.toString();
  for (let n = 0; n < e.length; n += 1)
    (t = e.charCodeAt(n) + ((t << 5) - t)), (t = t & t);
  let r = "#";
  for (let n = 0; n < 3; n += 1) {
    const o = (t >> (n * 8)) & 255;
    r += `00${o.toString(16)}`.substr(-2);
  }
  return r;
}
function GP(e, t) {
  let r = 0;
  if (e.length === 0) return t[0];
  for (let n = 0; n < e.length; n += 1)
    (r = e.charCodeAt(n) + ((r << 5) - r)), (r = r & r);
  return (r = ((r % t.length) + t.length) % t.length), t[r];
}
function KP(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function D(e, t) {
  return (r) => (r.colorMode === "dark" ? t : e);
}
function Ih(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? (t === "vertical" ? r : n) : {};
}
function ob(e) {
  return Wt(e) && e.reference ? e.reference : String(e);
}
var Tu = (e, ...t) => t.map(ob).join(` ${e} `).replace(/calc/g, ""),
  vg = (...e) => `calc(${Tu("+", ...e)})`,
  yg = (...e) => `calc(${Tu("-", ...e)})`,
  tf = (...e) => `calc(${Tu("*", ...e)})`,
  bg = (...e) => `calc(${Tu("/", ...e)})`,
  Sg = (e) => {
    const t = ob(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : tf(t, -1);
  },
  Cr = Object.assign(
    (e) => ({
      add: (...t) => Cr(vg(e, ...t)),
      subtract: (...t) => Cr(yg(e, ...t)),
      multiply: (...t) => Cr(tf(e, ...t)),
      divide: (...t) => Cr(bg(e, ...t)),
      negate: () => Cr(Sg(e)),
      toString: () => e.toString(),
    }),
    { add: vg, subtract: yg, multiply: tf, divide: bg, negate: Sg }
  );
function YP(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function XP(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function ib(e) {
  const t = XP(e.toString());
  return t.includes("\\.") ? e : YP(e) ? t.replace(".", "\\.") : e;
}
function QP(e, t = "") {
  return [t, ib(e)].filter(Boolean).join("-");
}
function qP(e, t) {
  return `var(${ib(e)}${t ? `, ${t}` : ""})`;
}
function ZP(e, t = "") {
  return `--${QP(e, t)}`;
}
function Ve(e, t) {
  const r = ZP(e, t?.prefix);
  return { variable: r, reference: qP(r, JP(t?.fallback)) };
}
function JP(e) {
  return typeof e == "string" ? e : e?.reference;
}
var { defineMultiStyleConfig: eE, definePartsStyle: Ks } = pe(SP.keys),
  Hi = Ve("switch-track-width"),
  Nn = Ve("switch-track-height"),
  kc = Ve("switch-track-diff"),
  tE = Cr.subtract(Hi, Nn),
  rf = Ve("switch-thumb-x"),
  Si = Ve("switch-bg"),
  rE = (e) => {
    const { colorScheme: t } = e;
    return {
      borderRadius: "full",
      p: "0.5",
      width: [Hi.reference],
      height: [Nn.reference],
      transitionProperty: "common",
      transitionDuration: "fast",
      [Si.variable]: "colors.gray.300",
      _dark: { [Si.variable]: "colors.whiteAlpha.400" },
      _focusVisible: { boxShadow: "outline" },
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
      _checked: {
        [Si.variable]: `colors.${t}.500`,
        _dark: { [Si.variable]: `colors.${t}.200` },
      },
      bg: Si.reference,
    };
  },
  nE = {
    bg: "white",
    transitionProperty: "transform",
    transitionDuration: "normal",
    borderRadius: "inherit",
    width: [Nn.reference],
    height: [Nn.reference],
    _checked: { transform: `translateX(${rf.reference})` },
  },
  oE = Ks((e) => ({
    container: {
      [kc.variable]: tE,
      [rf.variable]: kc.reference,
      _rtl: { [rf.variable]: Cr(kc).negate().toString() },
    },
    track: rE(e),
    thumb: nE,
  })),
  iE = {
    sm: Ks({
      container: { [Hi.variable]: "1.375rem", [Nn.variable]: "sizes.3" },
    }),
    md: Ks({
      container: { [Hi.variable]: "1.875rem", [Nn.variable]: "sizes.4" },
    }),
    lg: Ks({
      container: { [Hi.variable]: "2.875rem", [Nn.variable]: "sizes.6" },
    }),
  },
  aE = eE({
    baseStyle: oE,
    sizes: iE,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: sE, definePartsStyle: Vo } = pe(xP.keys),
  lE = Vo({
    table: {
      fontVariantNumeric: "lining-nums tabular-nums",
      borderCollapse: "collapse",
      width: "full",
    },
    th: {
      fontFamily: "heading",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "wider",
      textAlign: "start",
    },
    td: { textAlign: "start" },
    caption: {
      mt: 4,
      fontFamily: "heading",
      textAlign: "center",
      fontWeight: "medium",
    },
  }),
  Ll = { "&[data-is-numeric=true]": { textAlign: "end" } },
  uE = Vo((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: D("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: D(`${t}.100`, `${t}.700`)(e),
        ...Ll,
      },
      td: {
        borderBottom: "1px",
        borderColor: D(`${t}.100`, `${t}.700`)(e),
        ...Ll,
      },
      caption: { color: D("gray.600", "gray.100")(e) },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  cE = Vo((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: D("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: D(`${t}.100`, `${t}.700`)(e),
        ...Ll,
      },
      td: {
        borderBottom: "1px",
        borderColor: D(`${t}.100`, `${t}.700`)(e),
        ...Ll,
      },
      caption: { color: D("gray.600", "gray.100")(e) },
      tbody: {
        tr: {
          "&:nth-of-type(odd)": {
            "th, td": {
              borderBottomWidth: "1px",
              borderColor: D(`${t}.100`, `${t}.700`)(e),
            },
            td: { background: D(`${t}.100`, `${t}.700`)(e) },
          },
        },
      },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  dE = { simple: uE, striped: cE, unstyled: {} },
  fE = {
    sm: Vo({
      th: { px: "4", py: "1", lineHeight: "4", fontSize: "xs" },
      td: { px: "4", py: "2", fontSize: "sm", lineHeight: "4" },
      caption: { px: "4", py: "2", fontSize: "xs" },
    }),
    md: Vo({
      th: { px: "6", py: "3", lineHeight: "4", fontSize: "xs" },
      td: { px: "6", py: "4", lineHeight: "5" },
      caption: { px: "6", py: "2", fontSize: "sm" },
    }),
    lg: Vo({
      th: { px: "8", py: "4", lineHeight: "5", fontSize: "sm" },
      td: { px: "8", py: "5", lineHeight: "6" },
      caption: { px: "6", py: "2", fontSize: "md" },
    }),
  },
  hE = sE({
    baseStyle: lE,
    variants: dE,
    sizes: fE,
    defaultProps: { variant: "simple", size: "md", colorScheme: "gray" },
  }),
  ft = B("tabs-color"),
  Zt = B("tabs-bg"),
  Ss = B("tabs-border-color"),
  { defineMultiStyleConfig: pE, definePartsStyle: gr } = pe(wP.keys),
  mE = (e) => {
    const { orientation: t } = e;
    return { display: t === "vertical" ? "flex" : "block" };
  },
  gE = (e) => {
    const { isFitted: t } = e;
    return {
      flex: t ? 1 : void 0,
      transitionProperty: "common",
      transitionDuration: "normal",
      _focusVisible: { zIndex: 1, boxShadow: "outline" },
      _disabled: { cursor: "not-allowed", opacity: 0.4 },
    };
  },
  vE = (e) => {
    const { align: t = "start", orientation: r } = e;
    return {
      justifyContent: {
        end: "flex-end",
        center: "center",
        start: "flex-start",
      }[t],
      flexDirection: r === "vertical" ? "column" : "row",
    };
  },
  yE = { p: 4 },
  bE = gr((e) => ({ root: mE(e), tab: gE(e), tablist: vE(e), tabpanel: yE })),
  SE = {
    sm: gr({ tab: { py: 1, px: 4, fontSize: "sm" } }),
    md: gr({ tab: { fontSize: "md", py: 2, px: 4 } }),
    lg: gr({ tab: { fontSize: "lg", py: 3, px: 4 } }),
  },
  xE = gr((e) => {
    const { colorScheme: t, orientation: r } = e,
      n = r === "vertical",
      o = n ? "borderStart" : "borderBottom",
      i = n ? "marginStart" : "marginBottom";
    return {
      tablist: { [o]: "2px solid", borderColor: "inherit" },
      tab: {
        [o]: "2px solid",
        borderColor: "transparent",
        [i]: "-2px",
        _selected: {
          [ft.variable]: `colors.${t}.600`,
          _dark: { [ft.variable]: `colors.${t}.300` },
          borderColor: "currentColor",
        },
        _active: {
          [Zt.variable]: "colors.gray.200",
          _dark: { [Zt.variable]: "colors.whiteAlpha.300" },
        },
        _disabled: { _active: { bg: "none" } },
        color: ft.reference,
        bg: Zt.reference,
      },
    };
  }),
  wE = gr((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderTopRadius: "md",
        border: "1px solid",
        borderColor: "transparent",
        mb: "-1px",
        [Ss.variable]: "transparent",
        _selected: {
          [ft.variable]: `colors.${t}.600`,
          [Ss.variable]: "colors.white",
          _dark: {
            [ft.variable]: `colors.${t}.300`,
            [Ss.variable]: "colors.gray.800",
          },
          borderColor: "inherit",
          borderBottomColor: Ss.reference,
        },
        color: ft.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  kE = gr((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        border: "1px solid",
        borderColor: "inherit",
        [Zt.variable]: "colors.gray.50",
        _dark: { [Zt.variable]: "colors.whiteAlpha.50" },
        mb: "-1px",
        _notLast: { marginEnd: "-1px" },
        _selected: {
          [Zt.variable]: "colors.white",
          [ft.variable]: `colors.${t}.600`,
          _dark: {
            [Zt.variable]: "colors.gray.800",
            [ft.variable]: `colors.${t}.300`,
          },
          borderColor: "inherit",
          borderTopColor: "currentColor",
          borderBottomColor: "transparent",
        },
        color: ft.reference,
        bg: Zt.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  CE = gr((e) => {
    const { colorScheme: t, theme: r } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        color: "gray.600",
        _selected: { color: it(r, `${t}.700`), bg: it(r, `${t}.100`) },
      },
    };
  }),
  _E = gr((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        [ft.variable]: "colors.gray.600",
        _dark: { [ft.variable]: "inherit" },
        _selected: {
          [ft.variable]: "colors.white",
          [Zt.variable]: `colors.${t}.600`,
          _dark: {
            [ft.variable]: "colors.gray.800",
            [Zt.variable]: `colors.${t}.300`,
          },
        },
        color: ft.reference,
        bg: Zt.reference,
      },
    };
  }),
  TE = gr({}),
  PE = {
    line: xE,
    enclosed: wE,
    "enclosed-colored": kE,
    "soft-rounded": CE,
    "solid-rounded": _E,
    unstyled: TE,
  },
  EE = pE({
    baseStyle: bE,
    sizes: SE,
    variants: PE,
    defaultProps: { size: "md", variant: "line", colorScheme: "blue" },
  }),
  ze = Q2("badge", ["bg", "color", "shadow"]),
  $E = {
    px: 1,
    textTransform: "uppercase",
    fontSize: "xs",
    borderRadius: "sm",
    fontWeight: "bold",
    bg: ze.bg.reference,
    color: ze.color.reference,
    boxShadow: ze.shadow.reference,
  },
  AE = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Zo(`${t}.500`, 0.6)(r);
    return {
      [ze.bg.variable]: `colors.${t}.500`,
      [ze.color.variable]: "colors.white",
      _dark: {
        [ze.bg.variable]: n,
        [ze.color.variable]: "colors.whiteAlpha.800",
      },
    };
  },
  zE = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Zo(`${t}.200`, 0.16)(r);
    return {
      [ze.bg.variable]: `colors.${t}.100`,
      [ze.color.variable]: `colors.${t}.800`,
      _dark: { [ze.bg.variable]: n, [ze.color.variable]: `colors.${t}.200` },
    };
  },
  RE = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Zo(`${t}.200`, 0.8)(r);
    return {
      [ze.color.variable]: `colors.${t}.500`,
      _dark: { [ze.color.variable]: n },
      [ze.shadow.variable]: `inset 0 0 0px 1px ${ze.color.reference}`,
    };
  },
  ME = { solid: AE, subtle: zE, outline: RE },
  Gi = {
    baseStyle: $E,
    variants: ME,
    defaultProps: { variant: "subtle", colorScheme: "gray" },
  },
  { defineMultiStyleConfig: LE, definePartsStyle: jn } = pe(kP.keys),
  xg = B("tag-bg"),
  wg = B("tag-color"),
  Cc = B("tag-shadow"),
  Ys = B("tag-min-height"),
  Xs = B("tag-min-width"),
  Qs = B("tag-font-size"),
  qs = B("tag-padding-inline"),
  FE = {
    fontWeight: "medium",
    lineHeight: 1.2,
    outline: 0,
    [wg.variable]: ze.color.reference,
    [xg.variable]: ze.bg.reference,
    [Cc.variable]: ze.shadow.reference,
    color: wg.reference,
    bg: xg.reference,
    boxShadow: Cc.reference,
    borderRadius: "md",
    minH: Ys.reference,
    minW: Xs.reference,
    fontSize: Qs.reference,
    px: qs.reference,
    _focusVisible: { [Cc.variable]: "shadows.outline" },
  },
  IE = { lineHeight: 1.2, overflow: "visible" },
  DE = {
    fontSize: "lg",
    w: "5",
    h: "5",
    transitionProperty: "common",
    transitionDuration: "normal",
    borderRadius: "full",
    marginStart: "1.5",
    marginEnd: "-1",
    opacity: 0.5,
    _disabled: { opacity: 0.4 },
    _focusVisible: { boxShadow: "outline", bg: "rgba(0, 0, 0, 0.14)" },
    _hover: { opacity: 0.8 },
    _active: { opacity: 1 },
  },
  BE = jn({ container: FE, label: IE, closeButton: DE }),
  VE = {
    sm: jn({
      container: {
        [Ys.variable]: "sizes.5",
        [Xs.variable]: "sizes.5",
        [Qs.variable]: "fontSizes.xs",
        [qs.variable]: "space.2",
      },
      closeButton: { marginEnd: "-2px", marginStart: "0.35rem" },
    }),
    md: jn({
      container: {
        [Ys.variable]: "sizes.6",
        [Xs.variable]: "sizes.6",
        [Qs.variable]: "fontSizes.sm",
        [qs.variable]: "space.2",
      },
    }),
    lg: jn({
      container: {
        [Ys.variable]: "sizes.8",
        [Xs.variable]: "sizes.8",
        [Qs.variable]: "fontSizes.md",
        [qs.variable]: "space.3",
      },
    }),
  },
  OE = {
    subtle: jn((e) => {
      var t;
      return { container: (t = Gi.variants) == null ? void 0 : t.subtle(e) };
    }),
    solid: jn((e) => {
      var t;
      return { container: (t = Gi.variants) == null ? void 0 : t.solid(e) };
    }),
    outline: jn((e) => {
      var t;
      return { container: (t = Gi.variants) == null ? void 0 : t.outline(e) };
    }),
  },
  NE = LE({
    variants: OE,
    baseStyle: BE,
    sizes: VE,
    defaultProps: { size: "md", variant: "subtle", colorScheme: "gray" },
  }),
  { definePartsStyle: Pr, defineMultiStyleConfig: jE } = pe(uP.keys),
  Co = B("input-height"),
  _o = B("input-font-size"),
  To = B("input-padding"),
  Po = B("input-border-radius"),
  WE = Pr({
    addon: {
      height: Co.reference,
      fontSize: _o.reference,
      px: To.reference,
      borderRadius: Po.reference,
    },
    field: {
      width: "100%",
      height: Co.reference,
      fontSize: _o.reference,
      px: To.reference,
      borderRadius: Po.reference,
      minWidth: 0,
      outline: 0,
      position: "relative",
      appearance: "none",
      transitionProperty: "common",
      transitionDuration: "normal",
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
    },
  }),
  Gr = {
    lg: {
      [_o.variable]: "fontSizes.lg",
      [To.variable]: "space.4",
      [Po.variable]: "radii.md",
      [Co.variable]: "sizes.12",
    },
    md: {
      [_o.variable]: "fontSizes.md",
      [To.variable]: "space.4",
      [Po.variable]: "radii.md",
      [Co.variable]: "sizes.10",
    },
    sm: {
      [_o.variable]: "fontSizes.sm",
      [To.variable]: "space.3",
      [Po.variable]: "radii.sm",
      [Co.variable]: "sizes.8",
    },
    xs: {
      [_o.variable]: "fontSizes.xs",
      [To.variable]: "space.2",
      [Po.variable]: "radii.sm",
      [Co.variable]: "sizes.6",
    },
  },
  UE = {
    lg: Pr({ field: Gr.lg, group: Gr.lg }),
    md: Pr({ field: Gr.md, group: Gr.md }),
    sm: Pr({ field: Gr.sm, group: Gr.sm }),
    xs: Pr({ field: Gr.xs, group: Gr.xs }),
  };
function Dh(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || D("blue.500", "blue.300")(e),
    errorBorderColor: r || D("red.500", "red.300")(e),
  };
}
var HE = Pr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = Dh(e);
    return {
      field: {
        border: "1px solid",
        borderColor: "inherit",
        bg: "inherit",
        _hover: { borderColor: D("gray.300", "whiteAlpha.400")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: it(t, n), boxShadow: `0 0 0 1px ${it(t, n)}` },
        _focusVisible: {
          zIndex: 1,
          borderColor: it(t, r),
          boxShadow: `0 0 0 1px ${it(t, r)}`,
        },
      },
      addon: {
        border: "1px solid",
        borderColor: D("inherit", "whiteAlpha.50")(e),
        bg: D("gray.100", "whiteAlpha.300")(e),
      },
    };
  }),
  GE = Pr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = Dh(e);
    return {
      field: {
        border: "2px solid",
        borderColor: "transparent",
        bg: D("gray.100", "whiteAlpha.50")(e),
        _hover: { bg: D("gray.200", "whiteAlpha.100")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: it(t, n) },
        _focusVisible: { bg: "transparent", borderColor: it(t, r) },
      },
      addon: {
        border: "2px solid",
        borderColor: "transparent",
        bg: D("gray.100", "whiteAlpha.50")(e),
      },
    };
  }),
  KE = Pr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = Dh(e);
    return {
      field: {
        borderBottom: "1px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: {
          borderColor: it(t, n),
          boxShadow: `0px 1px 0px 0px ${it(t, n)}`,
        },
        _focusVisible: {
          borderColor: it(t, r),
          boxShadow: `0px 1px 0px 0px ${it(t, r)}`,
        },
      },
      addon: {
        borderBottom: "2px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
      },
    };
  }),
  YE = Pr({
    field: { bg: "transparent", px: "0", height: "auto" },
    addon: { bg: "transparent", px: "0", height: "auto" },
  }),
  XE = { outline: HE, filled: GE, flushed: KE, unstyled: YE },
  te = jE({
    baseStyle: WE,
    sizes: UE,
    variants: XE,
    defaultProps: { size: "md", variant: "outline" },
  }),
  kg,
  QE = {
    ...((kg = te.baseStyle) == null ? void 0 : kg.field),
    paddingY: "2",
    minHeight: "20",
    lineHeight: "short",
    verticalAlign: "top",
  },
  Cg,
  _g,
  qE = {
    outline: (e) => {
      var t, r;
      return (r = (t = te.variants) == null ? void 0 : t.outline(e).field) !=
        null
        ? r
        : {};
    },
    flushed: (e) => {
      var t, r;
      return (r = (t = te.variants) == null ? void 0 : t.flushed(e).field) !=
        null
        ? r
        : {};
    },
    filled: (e) => {
      var t, r;
      return (r = (t = te.variants) == null ? void 0 : t.filled(e).field) !=
        null
        ? r
        : {};
    },
    unstyled:
      (_g = (Cg = te.variants) == null ? void 0 : Cg.unstyled.field) != null
        ? _g
        : {},
  },
  Tg,
  Pg,
  Eg,
  $g,
  Ag,
  zg,
  Rg,
  Mg,
  ZE = {
    xs: (Pg = (Tg = te.sizes) == null ? void 0 : Tg.xs.field) != null ? Pg : {},
    sm: ($g = (Eg = te.sizes) == null ? void 0 : Eg.sm.field) != null ? $g : {},
    md: (zg = (Ag = te.sizes) == null ? void 0 : Ag.md.field) != null ? zg : {},
    lg: (Mg = (Rg = te.sizes) == null ? void 0 : Rg.lg.field) != null ? Mg : {},
  },
  JE = {
    baseStyle: QE,
    sizes: ZE,
    variants: qE,
    defaultProps: { size: "md", variant: "outline" },
  },
  xs = Ve("tooltip-bg"),
  _c = Ve("tooltip-fg"),
  e5 = Ve("popper-arrow-bg"),
  t5 = {
    bg: xs.reference,
    color: _c.reference,
    [xs.variable]: "colors.gray.700",
    [_c.variable]: "colors.whiteAlpha.900",
    _dark: {
      [xs.variable]: "colors.gray.300",
      [_c.variable]: "colors.gray.900",
    },
    [e5.variable]: xs.reference,
    px: "2",
    py: "0.5",
    borderRadius: "sm",
    fontWeight: "medium",
    fontSize: "sm",
    boxShadow: "md",
    maxW: "xs",
    zIndex: "tooltip",
  },
  r5 = { baseStyle: t5 },
  { defineMultiStyleConfig: n5, definePartsStyle: Ri } = pe(mP.keys),
  o5 = (e) => {
    const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e,
      i = D(gg(), gg("1rem", "rgba(0,0,0,0.1)"))(e),
      a = D(`${t}.500`, `${t}.200`)(e),
      s = `linear-gradient(
    to right,
    transparent 0%,
    ${it(r, a)} 50%,
    transparent 100%
  )`;
    return { ...(!n && o && i), ...(n ? { bgImage: s } : { bgColor: a }) };
  },
  i5 = {
    lineHeight: "1",
    fontSize: "0.25em",
    fontWeight: "bold",
    color: "white",
  },
  a5 = (e) => ({ bg: D("gray.100", "whiteAlpha.300")(e) }),
  s5 = (e) => ({
    transitionProperty: "common",
    transitionDuration: "slow",
    ...o5(e),
  }),
  l5 = Ri((e) => ({ label: i5, filledTrack: s5(e), track: a5(e) })),
  u5 = {
    xs: Ri({ track: { h: "1" } }),
    sm: Ri({ track: { h: "2" } }),
    md: Ri({ track: { h: "3" } }),
    lg: Ri({ track: { h: "4" } }),
  },
  c5 = n5({
    sizes: u5,
    baseStyle: l5,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  d5 = (e) => typeof e == "function";
function st(e, ...t) {
  return d5(e) ? e(...t) : e;
}
var { definePartsStyle: Zs, defineMultiStyleConfig: f5 } = pe(oP.keys),
  Ki = B("checkbox-size"),
  h5 = (e) => {
    const { colorScheme: t } = e;
    return {
      w: Ki.reference,
      h: Ki.reference,
      transitionProperty: "box-shadow",
      transitionDuration: "normal",
      border: "2px solid",
      borderRadius: "sm",
      borderColor: "inherit",
      color: "white",
      _checked: {
        bg: D(`${t}.500`, `${t}.200`)(e),
        borderColor: D(`${t}.500`, `${t}.200`)(e),
        color: D("white", "gray.900")(e),
        _hover: {
          bg: D(`${t}.600`, `${t}.300`)(e),
          borderColor: D(`${t}.600`, `${t}.300`)(e),
        },
        _disabled: {
          borderColor: D("gray.200", "transparent")(e),
          bg: D("gray.200", "whiteAlpha.300")(e),
          color: D("gray.500", "whiteAlpha.500")(e),
        },
      },
      _indeterminate: {
        bg: D(`${t}.500`, `${t}.200`)(e),
        borderColor: D(`${t}.500`, `${t}.200`)(e),
        color: D("white", "gray.900")(e),
      },
      _disabled: {
        bg: D("gray.100", "whiteAlpha.100")(e),
        borderColor: D("gray.100", "transparent")(e),
      },
      _focusVisible: { boxShadow: "outline" },
      _invalid: { borderColor: D("red.500", "red.300")(e) },
    };
  },
  p5 = { _disabled: { cursor: "not-allowed" } },
  m5 = { userSelect: "none", _disabled: { opacity: 0.4 } },
  g5 = { transitionProperty: "transform", transitionDuration: "normal" },
  v5 = Zs((e) => ({ icon: g5, container: p5, control: st(h5, e), label: m5 })),
  y5 = {
    sm: Zs({
      control: { [Ki.variable]: "sizes.3" },
      label: { fontSize: "sm" },
      icon: { fontSize: "3xs" },
    }),
    md: Zs({
      control: { [Ki.variable]: "sizes.4" },
      label: { fontSize: "md" },
      icon: { fontSize: "2xs" },
    }),
    lg: Zs({
      control: { [Ki.variable]: "sizes.5" },
      label: { fontSize: "lg" },
      icon: { fontSize: "2xs" },
    }),
  },
  Fl = f5({
    baseStyle: v5,
    sizes: y5,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: b5, definePartsStyle: Js } = pe(gP.keys),
  S5 = (e) => {
    var t;
    const r = (t = st(Fl.baseStyle, e)) == null ? void 0 : t.control;
    return {
      ...r,
      borderRadius: "full",
      _checked: {
        ...r?._checked,
        _before: {
          content: '""',
          display: "inline-block",
          pos: "relative",
          w: "50%",
          h: "50%",
          borderRadius: "50%",
          bg: "currentColor",
        },
      },
    };
  },
  x5 = Js((e) => {
    var t, r, n, o;
    return {
      label: (r = (t = Fl).baseStyle) == null ? void 0 : r.call(t, e).label,
      container:
        (o = (n = Fl).baseStyle) == null ? void 0 : o.call(n, e).container,
      control: S5(e),
    };
  }),
  w5 = {
    md: Js({ control: { w: "4", h: "4" }, label: { fontSize: "md" } }),
    lg: Js({ control: { w: "5", h: "5" }, label: { fontSize: "lg" } }),
    sm: Js({ control: { width: "3", height: "3" }, label: { fontSize: "sm" } }),
  },
  k5 = b5({
    baseStyle: x5,
    sizes: w5,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: C5, definePartsStyle: _5 } = pe(vP.keys),
  ws = B("select-bg"),
  Lg,
  T5 = {
    ...((Lg = te.baseStyle) == null ? void 0 : Lg.field),
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    bg: ws.reference,
    [ws.variable]: "colors.white",
    _dark: { [ws.variable]: "colors.gray.700" },
    "> option, > optgroup": { bg: ws.reference },
  },
  P5 = {
    width: "6",
    height: "100%",
    insetEnd: "2",
    position: "relative",
    color: "currentColor",
    fontSize: "xl",
    _disabled: { opacity: 0.5 },
  },
  E5 = _5({ field: T5, icon: P5 }),
  ks = { paddingInlineEnd: "8" },
  Fg,
  Ig,
  Dg,
  Bg,
  Vg,
  Og,
  Ng,
  jg,
  $5 = {
    lg: {
      ...((Fg = te.sizes) == null ? void 0 : Fg.lg),
      field: { ...((Ig = te.sizes) == null ? void 0 : Ig.lg.field), ...ks },
    },
    md: {
      ...((Dg = te.sizes) == null ? void 0 : Dg.md),
      field: { ...((Bg = te.sizes) == null ? void 0 : Bg.md.field), ...ks },
    },
    sm: {
      ...((Vg = te.sizes) == null ? void 0 : Vg.sm),
      field: { ...((Og = te.sizes) == null ? void 0 : Og.sm.field), ...ks },
    },
    xs: {
      ...((Ng = te.sizes) == null ? void 0 : Ng.xs),
      field: { ...((jg = te.sizes) == null ? void 0 : jg.xs.field), ...ks },
      icon: { insetEnd: "1" },
    },
  },
  A5 = C5({
    baseStyle: E5,
    sizes: $5,
    variants: te.variants,
    defaultProps: te.defaultProps,
  }),
  Tc = B("skeleton-start-color"),
  Pc = B("skeleton-end-color"),
  z5 = {
    [Tc.variable]: "colors.gray.100",
    [Pc.variable]: "colors.gray.400",
    _dark: {
      [Tc.variable]: "colors.gray.800",
      [Pc.variable]: "colors.gray.600",
    },
    background: Tc.reference,
    borderColor: Pc.reference,
    opacity: 0.7,
    borderRadius: "sm",
  },
  R5 = { baseStyle: z5 },
  Ec = B("skip-link-bg"),
  M5 = {
    borderRadius: "md",
    fontWeight: "semibold",
    _focusVisible: {
      boxShadow: "outline",
      padding: "4",
      position: "fixed",
      top: "6",
      insetStart: "6",
      [Ec.variable]: "colors.white",
      _dark: { [Ec.variable]: "colors.gray.700" },
      bg: Ec.reference,
    },
  },
  L5 = { baseStyle: M5 },
  { defineMultiStyleConfig: F5, definePartsStyle: Pu } = pe(yP.keys),
  Ca = B("slider-thumb-size"),
  _a = B("slider-track-size"),
  en = B("slider-bg"),
  I5 = (e) => {
    const { orientation: t } = e;
    return {
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      _disabled: { opacity: 0.6, cursor: "default", pointerEvents: "none" },
      ...Ih({
        orientation: t,
        vertical: { h: "100%" },
        horizontal: { w: "100%" },
      }),
    };
  },
  D5 = (e) => ({
    ...Ih({
      orientation: e.orientation,
      horizontal: { h: _a.reference },
      vertical: { w: _a.reference },
    }),
    overflow: "hidden",
    borderRadius: "sm",
    [en.variable]: "colors.gray.200",
    _dark: { [en.variable]: "colors.whiteAlpha.200" },
    _disabled: {
      [en.variable]: "colors.gray.300",
      _dark: { [en.variable]: "colors.whiteAlpha.300" },
    },
    bg: en.reference,
  }),
  B5 = (e) => {
    const { orientation: t } = e;
    return {
      ...Ih({
        orientation: t,
        vertical: {
          left: "50%",
          transform: "translateX(-50%)",
          _active: { transform: "translateX(-50%) scale(1.15)" },
        },
        horizontal: {
          top: "50%",
          transform: "translateY(-50%)",
          _active: { transform: "translateY(-50%) scale(1.15)" },
        },
      }),
      w: Ca.reference,
      h: Ca.reference,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      outline: 0,
      zIndex: 1,
      borderRadius: "full",
      bg: "white",
      boxShadow: "base",
      border: "1px solid",
      borderColor: "transparent",
      transitionProperty: "transform",
      transitionDuration: "normal",
      _focusVisible: { boxShadow: "outline" },
      _disabled: { bg: "gray.300" },
    };
  },
  V5 = (e) => {
    const { colorScheme: t } = e;
    return {
      width: "inherit",
      height: "inherit",
      [en.variable]: `colors.${t}.500`,
      _dark: { [en.variable]: `colors.${t}.200` },
      bg: en.reference,
    };
  },
  O5 = Pu((e) => ({
    container: I5(e),
    track: D5(e),
    thumb: B5(e),
    filledTrack: V5(e),
  })),
  N5 = Pu({
    container: { [Ca.variable]: "sizes.4", [_a.variable]: "sizes.1" },
  }),
  j5 = Pu({
    container: { [Ca.variable]: "sizes.3.5", [_a.variable]: "sizes.1" },
  }),
  W5 = Pu({
    container: { [Ca.variable]: "sizes.2.5", [_a.variable]: "sizes.0.5" },
  }),
  U5 = { lg: N5, md: j5, sm: W5 },
  H5 = F5({
    baseStyle: O5,
    sizes: U5,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  Mn = Ve("spinner-size"),
  G5 = { width: [Mn.reference], height: [Mn.reference] },
  K5 = {
    xs: { [Mn.variable]: "sizes.3" },
    sm: { [Mn.variable]: "sizes.4" },
    md: { [Mn.variable]: "sizes.6" },
    lg: { [Mn.variable]: "sizes.8" },
    xl: { [Mn.variable]: "sizes.12" },
  },
  Y5 = { baseStyle: G5, sizes: K5, defaultProps: { size: "md" } },
  { defineMultiStyleConfig: X5, definePartsStyle: ab } = pe(bP.keys),
  Q5 = { fontWeight: "medium" },
  q5 = { opacity: 0.8, marginBottom: "2" },
  Z5 = { verticalAlign: "baseline", fontWeight: "semibold" },
  J5 = { marginEnd: 1, w: "3.5", h: "3.5", verticalAlign: "middle" },
  e$ = ab({ container: {}, label: Q5, helpText: q5, number: Z5, icon: J5 }),
  t$ = {
    md: ab({
      label: { fontSize: "sm" },
      helpText: { fontSize: "sm" },
      number: { fontSize: "2xl" },
    }),
  },
  r$ = X5({ baseStyle: e$, sizes: t$, defaultProps: { size: "md" } }),
  $c = B("kbd-bg"),
  n$ = {
    [$c.variable]: "colors.gray.100",
    _dark: { [$c.variable]: "colors.whiteAlpha.100" },
    bg: $c.reference,
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap",
  },
  o$ = { baseStyle: n$ },
  i$ = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    color: "inherit",
    _hover: { textDecoration: "underline" },
    _focusVisible: { boxShadow: "outline" },
  },
  a$ = { baseStyle: i$ },
  { defineMultiStyleConfig: s$, definePartsStyle: l$ } = pe(cP.keys),
  u$ = { marginEnd: "2", display: "inline", verticalAlign: "text-bottom" },
  c$ = l$({ icon: u$ }),
  d$ = s$({ baseStyle: c$ }),
  { defineMultiStyleConfig: f$, definePartsStyle: h$ } = pe(dP.keys),
  ur = B("menu-bg"),
  Ac = B("menu-shadow"),
  p$ = {
    [ur.variable]: "#fff",
    [Ac.variable]: "shadows.sm",
    _dark: {
      [ur.variable]: "colors.gray.700",
      [Ac.variable]: "shadows.dark-lg",
    },
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px",
    bg: ur.reference,
    boxShadow: Ac.reference,
  },
  m$ = {
    py: "1.5",
    px: "3",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      [ur.variable]: "colors.gray.100",
      _dark: { [ur.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [ur.variable]: "colors.gray.200",
      _dark: { [ur.variable]: "colors.whiteAlpha.200" },
    },
    _expanded: {
      [ur.variable]: "colors.gray.100",
      _dark: { [ur.variable]: "colors.whiteAlpha.100" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    bg: ur.reference,
  },
  g$ = { mx: 4, my: 2, fontWeight: "semibold", fontSize: "sm" },
  v$ = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  y$ = { opacity: 0.6 },
  b$ = {
    border: 0,
    borderBottom: "1px solid",
    borderColor: "inherit",
    my: "2",
    opacity: 0.6,
  },
  S$ = { transitionProperty: "common", transitionDuration: "normal" },
  x$ = h$({
    button: S$,
    list: p$,
    item: m$,
    groupTitle: g$,
    icon: v$,
    command: y$,
    divider: b$,
  }),
  w$ = f$({ baseStyle: x$ }),
  { defineMultiStyleConfig: k$, definePartsStyle: nf } = pe(fP.keys),
  zc = B("modal-bg"),
  Rc = B("modal-shadow"),
  C$ = { bg: "blackAlpha.600", zIndex: "modal" },
  _$ = (e) => {
    const { isCentered: t, scrollBehavior: r } = e;
    return {
      display: "flex",
      zIndex: "modal",
      justifyContent: "center",
      alignItems: t ? "center" : "flex-start",
      overflow: r === "inside" ? "hidden" : "auto",
      overscrollBehaviorY: "none",
    };
  },
  T$ = (e) => {
    const { isCentered: t, scrollBehavior: r } = e;
    return {
      borderRadius: "md",
      color: "inherit",
      my: t ? "auto" : "16",
      mx: t ? "auto" : void 0,
      zIndex: "modal",
      maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
      [zc.variable]: "colors.white",
      [Rc.variable]: "shadows.lg",
      _dark: {
        [zc.variable]: "colors.gray.700",
        [Rc.variable]: "shadows.dark-lg",
      },
      bg: zc.reference,
      boxShadow: Rc.reference,
    };
  },
  P$ = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  E$ = { position: "absolute", top: "2", insetEnd: "3" },
  $$ = (e) => {
    const { scrollBehavior: t } = e;
    return {
      px: "6",
      py: "2",
      flex: "1",
      overflow: t === "inside" ? "auto" : void 0,
    };
  },
  A$ = { px: "6", py: "4" },
  z$ = nf((e) => ({
    overlay: C$,
    dialogContainer: st(_$, e),
    dialog: st(T$, e),
    header: P$,
    closeButton: E$,
    body: st($$, e),
    footer: A$,
  }));
function Yt(e) {
  return nf(
    e === "full"
      ? {
          dialog: { maxW: "100vw", minH: "$100vh", my: "0", borderRadius: "0" },
        }
      : { dialog: { maxW: e } }
  );
}
var R$ = {
    xs: Yt("xs"),
    sm: Yt("sm"),
    md: Yt("md"),
    lg: Yt("lg"),
    xl: Yt("xl"),
    "2xl": Yt("2xl"),
    "3xl": Yt("3xl"),
    "4xl": Yt("4xl"),
    "5xl": Yt("5xl"),
    "6xl": Yt("6xl"),
    full: Yt("full"),
  },
  M$ = k$({ baseStyle: z$, sizes: R$, defaultProps: { size: "md" } }),
  { defineMultiStyleConfig: L$, definePartsStyle: sb } = pe(hP.keys),
  Bh = Ve("number-input-stepper-width"),
  lb = Ve("number-input-input-padding"),
  F$ = Cr(Bh).add("0.5rem").toString(),
  Mc = Ve("number-input-bg"),
  Lc = Ve("number-input-color"),
  Fc = Ve("number-input-border-color"),
  I$ = { [Bh.variable]: "sizes.6", [lb.variable]: F$ },
  D$ = (e) => {
    var t, r;
    return (r = (t = st(te.baseStyle, e)) == null ? void 0 : t.field) != null
      ? r
      : {};
  },
  B$ = { width: Bh.reference },
  V$ = {
    borderStart: "1px solid",
    borderStartColor: Fc.reference,
    color: Lc.reference,
    bg: Mc.reference,
    [Lc.variable]: "colors.chakra-body-text",
    [Fc.variable]: "colors.chakra-border-color",
    _dark: {
      [Lc.variable]: "colors.whiteAlpha.800",
      [Fc.variable]: "colors.whiteAlpha.300",
    },
    _active: {
      [Mc.variable]: "colors.gray.200",
      _dark: { [Mc.variable]: "colors.whiteAlpha.300" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
  },
  O$ = sb((e) => {
    var t;
    return {
      root: I$,
      field: (t = st(D$, e)) != null ? t : {},
      stepperGroup: B$,
      stepper: V$,
    };
  });
function Cs(e) {
  var t, r, n;
  const o = (t = te.sizes) == null ? void 0 : t[e],
    i = { lg: "md", md: "md", sm: "sm", xs: "sm" },
    a = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md",
    s = tb.fontSizes[a];
  return sb({
    field: { ...o.field, paddingInlineEnd: lb.reference, verticalAlign: "top" },
    stepper: {
      fontSize: Cr(s).multiply(0.75).toString(),
      _first: { borderTopEndRadius: i[e] },
      _last: { borderBottomEndRadius: i[e], mt: "-1px", borderTopWidth: 1 },
    },
  });
}
var N$ = { xs: Cs("xs"), sm: Cs("sm"), md: Cs("md"), lg: Cs("lg") },
  j$ = L$({
    baseStyle: O$,
    sizes: N$,
    variants: te.variants,
    defaultProps: te.defaultProps,
  }),
  Wg,
  W$ = {
    ...((Wg = te.baseStyle) == null ? void 0 : Wg.field),
    textAlign: "center",
  },
  U$ = {
    lg: { fontSize: "lg", w: 12, h: 12, borderRadius: "md" },
    md: { fontSize: "md", w: 10, h: 10, borderRadius: "md" },
    sm: { fontSize: "sm", w: 8, h: 8, borderRadius: "sm" },
    xs: { fontSize: "xs", w: 6, h: 6, borderRadius: "sm" },
  },
  Ug,
  Hg,
  H$ = {
    outline: (e) => {
      var t, r, n;
      return (n =
        (r = st((t = te.variants) == null ? void 0 : t.outline, e)) == null
          ? void 0
          : r.field) != null
        ? n
        : {};
    },
    flushed: (e) => {
      var t, r, n;
      return (n =
        (r = st((t = te.variants) == null ? void 0 : t.flushed, e)) == null
          ? void 0
          : r.field) != null
        ? n
        : {};
    },
    filled: (e) => {
      var t, r, n;
      return (n =
        (r = st((t = te.variants) == null ? void 0 : t.filled, e)) == null
          ? void 0
          : r.field) != null
        ? n
        : {};
    },
    unstyled:
      (Hg = (Ug = te.variants) == null ? void 0 : Ug.unstyled.field) != null
        ? Hg
        : {},
  },
  G$ = {
    baseStyle: W$,
    sizes: U$,
    variants: H$,
    defaultProps: te.defaultProps,
  },
  { defineMultiStyleConfig: K$, definePartsStyle: Y$ } = pe(pP.keys),
  _s = Ve("popper-bg"),
  X$ = Ve("popper-arrow-bg"),
  Gg = Ve("popper-arrow-shadow-color"),
  Q$ = { zIndex: 10 },
  q$ = {
    [_s.variable]: "colors.white",
    bg: _s.reference,
    [X$.variable]: _s.reference,
    [Gg.variable]: "colors.gray.200",
    _dark: {
      [_s.variable]: "colors.gray.700",
      [Gg.variable]: "colors.whiteAlpha.300",
    },
    width: "xs",
    border: "1px solid",
    borderColor: "inherit",
    borderRadius: "md",
    boxShadow: "sm",
    zIndex: "inherit",
    _focusVisible: { outline: 0, boxShadow: "outline" },
  },
  Z$ = { px: 3, py: 2, borderBottomWidth: "1px" },
  J$ = { px: 3, py: 2 },
  eA = { px: 3, py: 2, borderTopWidth: "1px" },
  tA = {
    position: "absolute",
    borderRadius: "md",
    top: 1,
    insetEnd: 2,
    padding: 2,
  },
  rA = Y$({
    popper: Q$,
    content: q$,
    header: Z$,
    body: J$,
    footer: eA,
    closeButton: tA,
  }),
  nA = K$({ baseStyle: rA }),
  { definePartsStyle: of, defineMultiStyleConfig: oA } = pe(iP.keys),
  Ic = B("drawer-bg"),
  Dc = B("drawer-box-shadow");
function ao(e) {
  return of(
    e === "full"
      ? { dialog: { maxW: "100vw", h: "100vh" } }
      : { dialog: { maxW: e } }
  );
}
var iA = { bg: "blackAlpha.600", zIndex: "modal" },
  aA = { display: "flex", zIndex: "modal", justifyContent: "center" },
  sA = (e) => {
    const { isFullHeight: t } = e;
    return {
      ...(t && { height: "100vh" }),
      zIndex: "modal",
      maxH: "100vh",
      color: "inherit",
      [Ic.variable]: "colors.white",
      [Dc.variable]: "shadows.lg",
      _dark: {
        [Ic.variable]: "colors.gray.700",
        [Dc.variable]: "shadows.dark-lg",
      },
      bg: Ic.reference,
      boxShadow: Dc.reference,
    };
  },
  lA = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  uA = { position: "absolute", top: "2", insetEnd: "3" },
  cA = { px: "6", py: "2", flex: "1", overflow: "auto" },
  dA = { px: "6", py: "4" },
  fA = of((e) => ({
    overlay: iA,
    dialogContainer: aA,
    dialog: st(sA, e),
    header: lA,
    closeButton: uA,
    body: cA,
    footer: dA,
  })),
  hA = {
    xs: ao("xs"),
    sm: ao("md"),
    md: ao("lg"),
    lg: ao("2xl"),
    xl: ao("4xl"),
    full: ao("full"),
  },
  pA = oA({ baseStyle: fA, sizes: hA, defaultProps: { size: "xs" } }),
  { definePartsStyle: mA, defineMultiStyleConfig: gA } = pe(aP.keys),
  vA = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
  },
  yA = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  bA = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  SA = mA({ preview: vA, input: yA, textarea: bA }),
  xA = gA({ baseStyle: SA }),
  { definePartsStyle: wA, defineMultiStyleConfig: kA } = pe(sP.keys),
  Oo = B("form-control-color"),
  CA = {
    marginStart: "1",
    [Oo.variable]: "colors.red.500",
    _dark: { [Oo.variable]: "colors.red.300" },
    color: Oo.reference,
  },
  _A = {
    mt: "2",
    [Oo.variable]: "colors.gray.600",
    _dark: { [Oo.variable]: "colors.whiteAlpha.600" },
    color: Oo.reference,
    lineHeight: "normal",
    fontSize: "sm",
  },
  TA = wA({
    container: { width: "100%", position: "relative" },
    requiredIndicator: CA,
    helperText: _A,
  }),
  PA = kA({ baseStyle: TA }),
  { definePartsStyle: EA, defineMultiStyleConfig: $A } = pe(lP.keys),
  No = B("form-error-color"),
  AA = {
    [No.variable]: "colors.red.500",
    _dark: { [No.variable]: "colors.red.300" },
    color: No.reference,
    mt: "2",
    fontSize: "sm",
    lineHeight: "normal",
  },
  zA = {
    marginEnd: "0.5em",
    [No.variable]: "colors.red.500",
    _dark: { [No.variable]: "colors.red.300" },
    color: No.reference,
  },
  RA = EA({ text: AA, icon: zA }),
  MA = $A({ baseStyle: RA }),
  LA = {
    fontSize: "md",
    marginEnd: "3",
    mb: "2",
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "normal",
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  FA = { baseStyle: LA },
  IA = { fontFamily: "heading", fontWeight: "bold" },
  DA = {
    "4xl": { fontSize: ["6xl", null, "7xl"], lineHeight: 1 },
    "3xl": { fontSize: ["5xl", null, "6xl"], lineHeight: 1 },
    "2xl": { fontSize: ["4xl", null, "5xl"], lineHeight: [1.2, null, 1] },
    xl: { fontSize: ["3xl", null, "4xl"], lineHeight: [1.33, null, 1.2] },
    lg: { fontSize: ["2xl", null, "3xl"], lineHeight: [1.33, null, 1.2] },
    md: { fontSize: "xl", lineHeight: 1.2 },
    sm: { fontSize: "md", lineHeight: 1.2 },
    xs: { fontSize: "sm", lineHeight: 1.2 },
  },
  BA = { baseStyle: IA, sizes: DA, defaultProps: { size: "xl" } },
  { defineMultiStyleConfig: VA, definePartsStyle: OA } = pe(nP.keys),
  Bc = B("breadcrumb-link-decor"),
  NA = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    outline: "none",
    color: "inherit",
    textDecoration: Bc.reference,
    [Bc.variable]: "none",
    "&:not([aria-current=page])": {
      cursor: "pointer",
      _hover: { [Bc.variable]: "underline" },
      _focusVisible: { boxShadow: "outline" },
    },
  },
  jA = OA({ link: NA }),
  WA = VA({ baseStyle: jA }),
  UA = {
    lineHeight: "1.2",
    borderRadius: "md",
    fontWeight: "semibold",
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: { boxShadow: "outline" },
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: { _disabled: { bg: "initial" } },
  },
  ub = (e) => {
    const { colorScheme: t, theme: r } = e;
    if (t === "gray")
      return {
        color: D("gray.800", "whiteAlpha.900")(e),
        _hover: { bg: D("gray.100", "whiteAlpha.200")(e) },
        _active: { bg: D("gray.200", "whiteAlpha.300")(e) },
      };
    const n = Zo(`${t}.200`, 0.12)(r),
      o = Zo(`${t}.200`, 0.24)(r);
    return {
      color: D(`${t}.600`, `${t}.200`)(e),
      bg: "transparent",
      _hover: { bg: D(`${t}.50`, n)(e) },
      _active: { bg: D(`${t}.100`, o)(e) },
    };
  },
  HA = (e) => {
    const { colorScheme: t } = e,
      r = D("gray.200", "whiteAlpha.300")(e);
    return {
      border: "1px solid",
      borderColor: t === "gray" ? r : "currentColor",
      ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":
        { marginEnd: "-1px" },
      ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":
        { marginBottom: "-1px" },
      ...st(ub, e),
    };
  },
  GA = {
    yellow: {
      bg: "yellow.400",
      color: "black",
      hoverBg: "yellow.500",
      activeBg: "yellow.600",
    },
    cyan: {
      bg: "cyan.400",
      color: "black",
      hoverBg: "cyan.500",
      activeBg: "cyan.600",
    },
  },
  KA = (e) => {
    var t;
    const { colorScheme: r } = e;
    if (r === "gray") {
      const l = D("gray.100", "whiteAlpha.200")(e);
      return {
        bg: l,
        color: D("gray.800", "whiteAlpha.900")(e),
        _hover: {
          bg: D("gray.200", "whiteAlpha.300")(e),
          _disabled: { bg: l },
        },
        _active: { bg: D("gray.300", "whiteAlpha.400")(e) },
      };
    }
    const {
        bg: n = `${r}.500`,
        color: o = "white",
        hoverBg: i = `${r}.600`,
        activeBg: a = `${r}.700`,
      } = (t = GA[r]) != null ? t : {},
      s = D(n, `${r}.200`)(e);
    return {
      bg: s,
      color: D(o, "gray.800")(e),
      _hover: { bg: D(i, `${r}.300`)(e), _disabled: { bg: s } },
      _active: { bg: D(a, `${r}.400`)(e) },
    };
  },
  YA = (e) => {
    const { colorScheme: t } = e;
    return {
      padding: 0,
      height: "auto",
      lineHeight: "normal",
      verticalAlign: "baseline",
      color: D(`${t}.500`, `${t}.200`)(e),
      _hover: {
        textDecoration: "underline",
        _disabled: { textDecoration: "none" },
      },
      _active: { color: D(`${t}.700`, `${t}.500`)(e) },
    };
  },
  XA = {
    bg: "none",
    color: "inherit",
    display: "inline",
    lineHeight: "inherit",
    m: "0",
    p: "0",
  },
  QA = { ghost: ub, outline: HA, solid: KA, link: YA, unstyled: XA },
  qA = {
    lg: { h: "12", minW: "12", fontSize: "lg", px: "6" },
    md: { h: "10", minW: "10", fontSize: "md", px: "4" },
    sm: { h: "8", minW: "8", fontSize: "sm", px: "3" },
    xs: { h: "6", minW: "6", fontSize: "xs", px: "2" },
  },
  ZA = {
    baseStyle: UA,
    variants: QA,
    sizes: qA,
    defaultProps: { variant: "solid", size: "md", colorScheme: "gray" },
  },
  { definePartsStyle: Wn, defineMultiStyleConfig: JA } = pe(CP.keys),
  Il = B("card-bg"),
  zr = B("card-padding"),
  cb = B("card-shadow"),
  el = B("card-radius"),
  db = B("card-border-width", "0"),
  fb = B("card-border-color"),
  e3 = Wn({
    container: {
      [Il.variable]: "colors.chakra-body-bg",
      backgroundColor: Il.reference,
      boxShadow: cb.reference,
      borderRadius: el.reference,
      color: "chakra-body-text",
      borderWidth: db.reference,
      borderColor: fb.reference,
    },
    body: { padding: zr.reference, flex: "1 1 0%" },
    header: { padding: zr.reference },
    footer: { padding: zr.reference },
  }),
  t3 = {
    sm: Wn({
      container: { [el.variable]: "radii.base", [zr.variable]: "space.3" },
    }),
    md: Wn({
      container: { [el.variable]: "radii.md", [zr.variable]: "space.5" },
    }),
    lg: Wn({
      container: { [el.variable]: "radii.xl", [zr.variable]: "space.7" },
    }),
  },
  r3 = {
    elevated: Wn({
      container: {
        [cb.variable]: "shadows.base",
        _dark: { [Il.variable]: "colors.gray.700" },
      },
    }),
    outline: Wn({
      container: {
        [db.variable]: "1px",
        [fb.variable]: "colors.chakra-border-color",
      },
    }),
    filled: Wn({ container: { [Il.variable]: "colors.chakra-subtle-bg" } }),
    unstyled: {
      body: { [zr.variable]: 0 },
      header: { [zr.variable]: 0 },
      footer: { [zr.variable]: 0 },
    },
  },
  n3 = JA({
    baseStyle: e3,
    variants: r3,
    sizes: t3,
    defaultProps: { variant: "elevated", size: "md" },
  }),
  Yi = Ve("close-button-size"),
  xi = Ve("close-button-bg"),
  o3 = {
    w: [Yi.reference],
    h: [Yi.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: {
      [xi.variable]: "colors.blackAlpha.100",
      _dark: { [xi.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [xi.variable]: "colors.blackAlpha.200",
      _dark: { [xi.variable]: "colors.whiteAlpha.200" },
    },
    _focusVisible: { boxShadow: "outline" },
    bg: xi.reference,
  },
  i3 = {
    lg: { [Yi.variable]: "sizes.10", fontSize: "md" },
    md: { [Yi.variable]: "sizes.8", fontSize: "xs" },
    sm: { [Yi.variable]: "sizes.6", fontSize: "2xs" },
  },
  a3 = { baseStyle: o3, sizes: i3, defaultProps: { size: "md" } },
  { variants: s3, defaultProps: l3 } = Gi,
  u3 = {
    fontFamily: "mono",
    fontSize: "sm",
    px: "0.2em",
    borderRadius: "sm",
    bg: ze.bg.reference,
    color: ze.color.reference,
    boxShadow: ze.shadow.reference,
  },
  c3 = { baseStyle: u3, variants: s3, defaultProps: l3 },
  d3 = { w: "100%", mx: "auto", maxW: "prose", px: "4" },
  f3 = { baseStyle: d3 },
  h3 = { opacity: 0.6, borderColor: "inherit" },
  p3 = { borderStyle: "solid" },
  m3 = { borderStyle: "dashed" },
  g3 = { solid: p3, dashed: m3 },
  v3 = { baseStyle: h3, variants: g3, defaultProps: { variant: "solid" } },
  { definePartsStyle: y3, defineMultiStyleConfig: b3 } = pe(eP.keys),
  S3 = {
    borderTopWidth: "1px",
    borderColor: "inherit",
    _last: { borderBottomWidth: "1px" },
  },
  x3 = {
    transitionProperty: "common",
    transitionDuration: "normal",
    fontSize: "md",
    _focusVisible: { boxShadow: "outline" },
    _hover: { bg: "blackAlpha.50" },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    px: "4",
    py: "2",
  },
  w3 = { pt: "2", px: "4", pb: "5" },
  k3 = { fontSize: "1.25em" },
  C3 = y3({ container: S3, button: x3, panel: w3, icon: k3 }),
  _3 = b3({ baseStyle: C3 }),
  { definePartsStyle: Da, defineMultiStyleConfig: T3 } = pe(tP.keys),
  Tt = B("alert-fg"),
  Br = B("alert-bg"),
  P3 = Da({
    container: { bg: Br.reference, px: "4", py: "3" },
    title: { fontWeight: "bold", lineHeight: "6", marginEnd: "2" },
    description: { lineHeight: "6" },
    icon: {
      color: Tt.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "6",
    },
    spinner: {
      color: Tt.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "5",
    },
  });
function Vh(e) {
  const { theme: t, colorScheme: r } = e,
    n = Zo(`${r}.200`, 0.16)(t);
  return { light: `colors.${r}.100`, dark: n };
}
var E3 = Da((e) => {
    const { colorScheme: t } = e,
      r = Vh(e);
    return {
      container: {
        [Tt.variable]: `colors.${t}.500`,
        [Br.variable]: r.light,
        _dark: { [Tt.variable]: `colors.${t}.200`, [Br.variable]: r.dark },
      },
    };
  }),
  $3 = Da((e) => {
    const { colorScheme: t } = e,
      r = Vh(e);
    return {
      container: {
        [Tt.variable]: `colors.${t}.500`,
        [Br.variable]: r.light,
        _dark: { [Tt.variable]: `colors.${t}.200`, [Br.variable]: r.dark },
        paddingStart: "3",
        borderStartWidth: "4px",
        borderStartColor: Tt.reference,
      },
    };
  }),
  A3 = Da((e) => {
    const { colorScheme: t } = e,
      r = Vh(e);
    return {
      container: {
        [Tt.variable]: `colors.${t}.500`,
        [Br.variable]: r.light,
        _dark: { [Tt.variable]: `colors.${t}.200`, [Br.variable]: r.dark },
        pt: "2",
        borderTopWidth: "4px",
        borderTopColor: Tt.reference,
      },
    };
  }),
  z3 = Da((e) => {
    const { colorScheme: t } = e;
    return {
      container: {
        [Tt.variable]: "colors.white",
        [Br.variable]: `colors.${t}.500`,
        _dark: {
          [Tt.variable]: "colors.gray.900",
          [Br.variable]: `colors.${t}.200`,
        },
        color: Tt.reference,
      },
    };
  }),
  R3 = { subtle: E3, "left-accent": $3, "top-accent": A3, solid: z3 },
  M3 = T3({
    baseStyle: P3,
    variants: R3,
    defaultProps: { variant: "subtle", colorScheme: "blue" },
  }),
  { definePartsStyle: hb, defineMultiStyleConfig: L3 } = pe(rP.keys),
  jo = B("avatar-border-color"),
  Xi = B("avatar-bg"),
  Ta = B("avatar-font-size"),
  Jo = B("avatar-size"),
  F3 = {
    borderRadius: "full",
    border: "0.2em solid",
    borderColor: jo.reference,
    [jo.variable]: "white",
    _dark: { [jo.variable]: "colors.gray.800" },
  },
  I3 = {
    bg: Xi.reference,
    fontSize: Ta.reference,
    width: Jo.reference,
    height: Jo.reference,
    lineHeight: "1",
    [Xi.variable]: "colors.gray.200",
    _dark: { [Xi.variable]: "colors.whiteAlpha.400" },
  },
  D3 = (e) => {
    const { name: t, theme: r } = e,
      n = t ? UP({ string: t }) : "colors.gray.400",
      o = jP(n)(r);
    let i = "white";
    return (
      o || (i = "gray.800"),
      {
        bg: Xi.reference,
        fontSize: Ta.reference,
        color: i,
        borderColor: jo.reference,
        verticalAlign: "top",
        width: Jo.reference,
        height: Jo.reference,
        "&:not([data-loaded])": { [Xi.variable]: n },
        [jo.variable]: "colors.white",
        _dark: { [jo.variable]: "colors.gray.800" },
      }
    );
  },
  B3 = { fontSize: Ta.reference, lineHeight: "1" },
  V3 = hb((e) => ({
    badge: st(F3, e),
    excessLabel: st(I3, e),
    container: st(D3, e),
    label: B3,
  }));
function Kr(e) {
  const t = e !== "100%" ? nb[e] : void 0;
  return hb({
    container: {
      [Jo.variable]: t ?? e,
      [Ta.variable]: `calc(${t ?? e} / 2.5)`,
    },
    excessLabel: {
      [Jo.variable]: t ?? e,
      [Ta.variable]: `calc(${t ?? e} / 2.5)`,
    },
  });
}
var O3 = {
    "2xs": Kr(4),
    xs: Kr(6),
    sm: Kr(8),
    md: Kr(12),
    lg: Kr(16),
    xl: Kr(24),
    "2xl": Kr(32),
    full: Kr("100%"),
  },
  N3 = L3({ baseStyle: V3, sizes: O3, defaultProps: { size: "md" } }),
  j3 = {
    Accordion: _3,
    Alert: M3,
    Avatar: N3,
    Badge: Gi,
    Breadcrumb: WA,
    Button: ZA,
    Checkbox: Fl,
    CloseButton: a3,
    Code: c3,
    Container: f3,
    Divider: v3,
    Drawer: pA,
    Editable: xA,
    Form: PA,
    FormError: MA,
    FormLabel: FA,
    Heading: BA,
    Input: te,
    Kbd: o$,
    Link: a$,
    List: d$,
    Menu: w$,
    Modal: M$,
    NumberInput: j$,
    PinInput: G$,
    Popover: nA,
    Progress: c5,
    Radio: k5,
    Select: A5,
    Skeleton: R5,
    SkipLink: L5,
    Slider: H5,
    Spinner: Y5,
    Stat: r$,
    Switch: aE,
    Table: hE,
    Tabs: EE,
    Tag: NE,
    Textarea: JE,
    Tooltip: r5,
    Card: n3,
    Stepper: JT,
  },
  W3 = {
    colors: {
      "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
      "chakra-body-bg": { _light: "white", _dark: "gray.800" },
      "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
      "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
      "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
      "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
      "chakra-placeholder-color": {
        _light: "gray.500",
        _dark: "whiteAlpha.400",
      },
    },
  },
  U3 = {
    global: {
      body: {
        fontFamily: "body",
        color: "chakra-body-text",
        bg: "chakra-body-bg",
        transitionProperty: "background-color",
        transitionDuration: "normal",
        lineHeight: "base",
      },
      "*::placeholder": { color: "chakra-placeholder-color" },
      "*, *::before, &::after": { borderColor: "chakra-border-color" },
    },
  },
  H3 = "ltr",
  G3 = {
    useSystemColorMode: !1,
    initialColorMode: "light",
    cssVarPrefix: "chakra",
  },
  pb = {
    semanticTokens: W3,
    direction: H3,
    ...QT,
    components: j3,
    styles: U3,
    config: G3,
  };
function Mi(e) {
  return typeof e == "function";
}
function K3(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
var Y3 = (e) =>
    function (...r) {
      let n = [...r],
        o = r[r.length - 1];
      return (
        TT(o) && n.length > 1 ? (n = n.slice(0, n.length - 1)) : (o = e),
        K3(...n.map((i) => (a) => Mi(i) ? i(a) : Q3(a, i)))(o)
      );
    },
  X3 = Y3(pb);
function Q3(...e) {
  return Nt({}, ...e, mb);
}
function mb(e, t, r, n) {
  if ((Mi(e) || Mi(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const i = Mi(e) ? e(...o) : e,
        a = Mi(t) ? t(...o) : t;
      return Nt({}, i, a, mb);
    };
}
function q3(e, t) {
  const r = {};
  return (
    Object.keys(e).forEach((n) => {
      t.includes(n) || (r[n] = e[n]);
    }),
    r
  );
}
function Z3(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1) e = e[o[n]];
  return e === void 0 ? r : e;
}
var J3 = (e) => {
    const t = new WeakMap();
    return (n, o, i, a) => {
      if (typeof n > "u") return e(n, o, i);
      t.has(n) || t.set(n, new Map());
      const s = t.get(n);
      if (s.has(o)) return s.get(o);
      const l = e(n, o, i, a);
      return s.set(o, l), l;
    };
  },
  gb = J3(Z3);
function vb(e, t) {
  const r = {};
  return (
    Object.keys(e).forEach((n) => {
      const o = e[n];
      t(o, n, e) && (r[n] = o);
    }),
    r
  );
}
var yb = (e) => vb(e, (t) => t != null);
function ez(e) {
  return typeof e == "function";
}
function bb(e, ...t) {
  return ez(e) ? e(...t) : e;
}
var tz = typeof Element < "u",
  rz = typeof Map == "function",
  nz = typeof Set == "function",
  oz = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function tl(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, n, o;
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!tl(e[n], t[n])) return !1;
      return !0;
    }
    var i;
    if (rz && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0])) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!tl(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (nz && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (oz && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (e[n] !== t[n]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1;
    if (tz && e instanceof Element) return !1;
    for (n = r; n-- !== 0; )
      if (
        !(
          (o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") &&
          e.$$typeof
        ) &&
        !tl(e[o[n]], t[o[n]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var iz = function (t, r) {
  try {
    return tl(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const az = _f(iz);
function Sb(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t,
    { theme: i, colorMode: a } = i2(),
    s = e ? gb(i, `components.${e}`) : void 0,
    l = n || s,
    u = Nt(
      { theme: i, colorMode: a },
      (r = l?.defaultProps) != null ? r : {},
      yb(q3(o, ["children"]))
    ),
    c = w.useRef({});
  if (l) {
    const f = CT(l)(u);
    az(c.current, f) || (c.current = f);
  }
  return c.current;
}
function Zn(e, t = {}) {
  return Sb(e, t);
}
function Ba(e, t = {}) {
  return Sb(e, t);
}
var sz = new Set([
    ...fT,
    "textStyle",
    "layerStyle",
    "apply",
    "noOfLines",
    "focusBorderColor",
    "errorBorderColor",
    "as",
    "__css",
    "css",
    "sx",
  ]),
  lz = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
function uz(e) {
  return lz.has(e) || !sz.has(e);
}
function cz(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) &&
          (o in r && delete r[o], (r[o] = n[o]));
  return r;
}
function xb(e) {
  const t = Object.assign({}, e);
  for (let r in t) t[r] === void 0 && delete t[r];
  return t;
}
var dz =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  fz = z1(function (e) {
    return (
      dz.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  hz = fz,
  pz = function (t) {
    return t !== "theme";
  },
  Kg = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? hz : pz;
  },
  Yg = function (t, r, n) {
    var o;
    if (r) {
      var i = r.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (a) {
              return t.__emotion_forwardProp(a) && i(a);
            }
          : i;
    }
    return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
  },
  mz = function (t) {
    var r = t.cache,
      n = t.serialized,
      o = t.isStringTag;
    return (
      D1(r, n, o),
      F_(function () {
        return B1(r, n, o);
      }),
      null
    );
  },
  gz = function e(t, r) {
    var n = t.__emotion_real === t,
      o = (n && t.__emotion_base) || t,
      i,
      a;
    r !== void 0 && ((i = r.label), (a = r.target));
    var s = Yg(t, r, n),
      l = s || Kg(o),
      u = !l("as");
    return function () {
      var c = arguments,
        d =
          n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, p = 1; p < f; p++) d.push(c[p], c[0][p]);
      }
      var v = j1(function (b, C, g) {
        var h = (u && b.as) || o,
          m = "",
          k = [],
          P = b;
        if (b.theme == null) {
          P = {};
          for (var A in b) P[A] = b[A];
          P.theme = w.useContext(wa);
        }
        typeof b.className == "string"
          ? (m = E_(C.registered, k, b.className))
          : b.className != null && (m = b.className + " ");
        var T = Eh(d.concat(k), C.registered, P);
        (m += C.key + "-" + T.name), a !== void 0 && (m += " " + a);
        var $ = u && s === void 0 ? Kg(h) : l,
          F = {};
        for (var I in b) (u && I === "as") || ($(I) && (F[I] = b[I]));
        return (
          (F.className = m),
          (F.ref = g),
          w.createElement(
            w.Fragment,
            null,
            w.createElement(mz, {
              cache: C,
              serialized: T,
              isStringTag: typeof h == "string",
            }),
            w.createElement(h, F)
          )
        );
      });
      return (
        (v.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (v.defaultProps = t.defaultProps),
        (v.__emotion_real = v),
        (v.__emotion_base = o),
        (v.__emotion_styles = d),
        (v.__emotion_forwardProp = s),
        Object.defineProperty(v, "toString", {
          value: function () {
            return "." + a;
          },
        }),
        (v.withComponent = function (b, C) {
          return e(b, zl({}, r, C, { shouldForwardProp: Yg(v, C, !0) })).apply(
            void 0,
            d
          );
        }),
        v
      );
    };
  },
  vz = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Dl = gz.bind();
vz.forEach(function (e) {
  Dl[e] = Dl(e);
});
var Xg,
  yz = (Xg = Dl.default) != null ? Xg : Dl,
  bz =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: r, css: n, __css: o, sx: i, ...a } = t,
        s = vb(a, (d, f) => pT(f)),
        l = bb(e, t),
        u = cz({}, o, l, yb(s), i),
        c = eb(u)(t.theme);
      return n ? [c, n] : c;
    };
function Vc(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = uz);
  const o = bz({ baseStyle: r }),
    i = yz(e, n)(o);
  return Wo.forwardRef(function (l, u) {
    const { colorMode: c, forced: d } = ku();
    return Wo.createElement(i, { ref: u, "data-theme": d ? c : void 0, ...l });
  });
}
function Sz() {
  const e = new Map();
  return new Proxy(Vc, {
    apply(t, r, n) {
      return Vc(...n);
    },
    get(t, r) {
      return e.has(r) || e.set(r, Vc(r)), e.get(r);
    },
  });
}
var Y = Sz();
function ce(e) {
  return w.forwardRef(e);
}
function wb(e = {}) {
  const {
      strict: t = !0,
      errorMessage:
        r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
      name: n,
    } = e,
    o = w.createContext(void 0);
  o.displayName = n;
  function i() {
    var a;
    const s = w.useContext(o);
    if (!s && t) {
      const l = new Error(r);
      throw (
        ((l.name = "ContextError"),
        (a = Error.captureStackTrace) == null || a.call(Error, l, i),
        l)
      );
    }
    return s;
  }
  return [o.Provider, i, o];
}
function xz(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e,
    o = w.useMemo(() => dT(r), [r]);
  return je(B_, { theme: o, children: [E(wz, { root: t }), n] });
}
function wz({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return E(xu, { styles: (r) => ({ [t]: r.__cssVars }) });
}
wb({
  name: "StylesContext",
  errorMessage:
    "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ",
});
function kz(e) {
  return wb({
    name: `${e}StylesContext`,
    errorMessage: `useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${e} />" `,
  });
}
function Cz() {
  const { colorMode: e } = ku();
  return E(xu, {
    styles: (t) => {
      const r = gb(t, "styles.global"),
        n = bb(r, { theme: t, colorMode: e });
      return n ? eb(n)(t) : void 0;
    },
  });
}
var Oh = w.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  },
});
Oh.displayName = "EnvironmentContext";
function _z({ defer: e } = {}) {
  const [, t] = w.useReducer((r) => r + 1, 0);
  return (
    Ar(() => {
      e && t();
    }, [e]),
    w.useContext(Oh)
  );
}
function kb(e) {
  const { children: t, environment: r, disabled: n } = e,
    o = w.useRef(null),
    i = w.useMemo(
      () =>
        r || {
          getDocument: () => {
            var s, l;
            return (l = (s = o.current) == null ? void 0 : s.ownerDocument) !=
              null
              ? l
              : document;
          },
          getWindow: () => {
            var s, l;
            return (l =
              (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) !=
              null
              ? l
              : window;
          },
        },
      [r]
    ),
    a = !n || !r;
  return je(Oh.Provider, {
    value: i,
    children: [t, a && E("span", { id: "__chakra_env", hidden: !0, ref: o })],
  });
}
kb.displayName = "EnvironmentProvider";
var Tz = (e) => {
    const {
        children: t,
        colorModeManager: r,
        portalZIndex: n,
        resetScope: o,
        resetCSS: i = !0,
        theme: a = {},
        environment: s,
        cssVarsRoot: l,
        disableEnvironment: u,
        disableGlobalStyle: c,
      } = e,
      d = E(kb, { environment: s, disabled: u, children: t });
    return E(xz, {
      theme: a,
      cssVarsRoot: l,
      children: je(K1, {
        colorModeManager: r,
        options: a.config,
        children: [
          i ? E(j_, { scope: o }) : E(N_, {}),
          !c && E(Cz, {}),
          n ? E(H1, { zIndex: n, children: d }) : d,
        ],
      }),
    });
  },
  Pz = (e, t) => e.find((r) => r.id === t);
function Qg(e, t) {
  const r = Cb(e, t),
    n = r ? e[r].findIndex((o) => o.id === t) : -1;
  return { position: r, index: n };
}
function Cb(e, t) {
  for (const [r, n] of Object.entries(e)) if (Pz(n, t)) return r;
}
function Ez(e) {
  const t = e.includes("right"),
    r = e.includes("left");
  let n = "center";
  return (
    t && (n = "flex-end"),
    r && (n = "flex-start"),
    { display: "flex", flexDirection: "column", alignItems: n }
  );
}
function $z(e) {
  const r = e === "top" || e === "bottom" ? "0 auto" : void 0,
    n = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0,
    o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0,
    i = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)",
    a = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: r,
    top: n,
    bottom: o,
    right: i,
    left: a,
  };
}
function rl(e, t = []) {
  const r = w.useRef(e);
  return (
    w.useEffect(() => {
      r.current = e;
    }),
    w.useCallback((...n) => {
      var o;
      return (o = r.current) == null ? void 0 : o.call(r, ...n);
    }, t)
  );
}
function Az(e, t) {
  const r = rl(e);
  w.useEffect(() => {
    if (t == null) return;
    let n = null;
    return (
      (n = window.setTimeout(() => {
        r();
      }, t)),
      () => {
        n && window.clearTimeout(n);
      }
    );
  }, [t, r]);
}
function af(e, t) {
  const r = w.useRef(!1),
    n = w.useRef(!1);
  w.useEffect(() => {
    if (r.current && n.current) return e();
    n.current = !0;
  }, t),
    w.useEffect(
      () => (
        (r.current = !0),
        () => {
          r.current = !1;
        }
      ),
      []
    );
}
const _b = w.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Eu = w.createContext({}),
  Va = w.createContext(null),
  $u = typeof document < "u",
  Nh = $u ? w.useLayoutEffect : w.useEffect,
  Tb = w.createContext({ strict: !1 });
function zz(e, t, r, n) {
  const { visualElement: o } = w.useContext(Eu),
    i = w.useContext(Tb),
    a = w.useContext(Va),
    s = w.useContext(_b).reducedMotion,
    l = w.useRef();
  (n = n || i.renderer),
    !l.current &&
      n &&
      (l.current = n(e, {
        visualState: t,
        parent: o,
        props: r,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: s,
      }));
  const u = l.current;
  w.useInsertionEffect(() => {
    u && u.update(r, a);
  });
  const c = w.useRef(!!window.HandoffAppearAnimations);
  return (
    Nh(() => {
      u &&
        (u.render(),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    w.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        (window.HandoffAppearAnimations = void 0),
        (c.current = !1));
    }),
    u
  );
}
function Eo(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Rz(e, t, r) {
  return w.useCallback(
    (n) => {
      n && e.mount && e.mount(n),
        t && (n ? t.mount(n) : t.unmount()),
        r && (typeof r == "function" ? r(n) : Eo(r) && (r.current = n));
    },
    [t]
  );
}
function Pa(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Au(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const jh = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Wh = ["initial", ...jh];
function zu(e) {
  return Au(e.animate) || Wh.some((t) => Pa(e[t]));
}
function Pb(e) {
  return !!(zu(e) || e.variants);
}
function Mz(e, t) {
  if (zu(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || Pa(r) ? r : void 0,
      animate: Pa(n) ? n : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Lz(e) {
  const { initial: t, animate: r } = Mz(e, w.useContext(Eu));
  return w.useMemo(() => ({ initial: t, animate: r }), [qg(t), qg(r)]);
}
function qg(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Zg = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Ea = {};
for (const e in Zg) Ea[e] = { isEnabled: (t) => Zg[e].some((r) => !!t[r]) };
function Fz(e) {
  for (const t in e) Ea[t] = { ...Ea[t], ...e[t] };
}
const Uh = w.createContext({}),
  Eb = w.createContext({}),
  Iz = Symbol.for("motionComponentSymbol");
function Dz({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: r,
  useVisualState: n,
  Component: o,
}) {
  e && Fz(e);
  function i(s, l) {
    let u;
    const c = { ...w.useContext(_b), ...s, layoutId: Bz(s) },
      { isStatic: d } = c,
      f = Lz(s),
      p = n(s, d);
    if (!d && $u) {
      f.visualElement = zz(o, p, c, t);
      const v = w.useContext(Eb),
        b = w.useContext(Tb).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, b, e, v));
    }
    return w.createElement(
      Eu.Provider,
      { value: f },
      u && f.visualElement
        ? w.createElement(u, { visualElement: f.visualElement, ...c })
        : null,
      r(o, s, Rz(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = w.forwardRef(i);
  return (a[Iz] = o), a;
}
function Bz({ layoutId: e }) {
  const t = w.useContext(Uh).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Vz(e) {
  function t(n, o = {}) {
    return Dz(e(n, o));
  }
  if (typeof Proxy > "u") return t;
  const r = new Map();
  return new Proxy(t, {
    get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o)),
  });
}
const Oz = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Hh(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Oz.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const Bl = {};
function Nz(e) {
  Object.assign(Bl, e);
}
const Oa = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Jn = new Set(Oa);
function $b(e, { layout: t, layoutId: r }) {
  return (
    Jn.has(e) ||
    e.startsWith("origin") ||
    ((t || r !== void 0) && (!!Bl[e] || e === "opacity"))
  );
}
const yt = (e) => !!(e && e.getVelocity),
  jz = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Wz = Oa.length;
function Uz(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 },
  n,
  o
) {
  let i = "";
  for (let a = 0; a < Wz; a++) {
    const s = Oa[a];
    if (e[s] !== void 0) {
      const l = jz[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return (
    t && !e.z && (i += "translateZ(0)"),
    (i = i.trim()),
    o ? (i = o(e, n ? "" : i)) : r && n && (i = "none"),
    i
  );
}
const Ab = (e) => (t) => typeof t == "string" && t.startsWith(e),
  zb = Ab("--"),
  sf = Ab("var(--"),
  Hz =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  Gz = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  vn = (e, t, r) => Math.min(Math.max(r, e), t),
  eo = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Qi = { ...eo, transform: (e) => vn(0, 1, e) },
  Ts = { ...eo, default: 1 },
  qi = (e) => Math.round(e * 1e5) / 1e5,
  Ru = /(-)?([\d]*\.?[\d])+/g,
  Rb =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  Kz =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Na(e) {
  return typeof e == "string";
}
const ja = (e) => ({
    test: (t) => Na(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Yr = ja("deg"),
  vr = ja("%"),
  N = ja("px"),
  Yz = ja("vh"),
  Xz = ja("vw"),
  Jg = {
    ...vr,
    parse: (e) => vr.parse(e) / 100,
    transform: (e) => vr.transform(e * 100),
  },
  e0 = { ...eo, transform: Math.round },
  Mb = {
    borderWidth: N,
    borderTopWidth: N,
    borderRightWidth: N,
    borderBottomWidth: N,
    borderLeftWidth: N,
    borderRadius: N,
    radius: N,
    borderTopLeftRadius: N,
    borderTopRightRadius: N,
    borderBottomRightRadius: N,
    borderBottomLeftRadius: N,
    width: N,
    maxWidth: N,
    height: N,
    maxHeight: N,
    size: N,
    top: N,
    right: N,
    bottom: N,
    left: N,
    padding: N,
    paddingTop: N,
    paddingRight: N,
    paddingBottom: N,
    paddingLeft: N,
    margin: N,
    marginTop: N,
    marginRight: N,
    marginBottom: N,
    marginLeft: N,
    rotate: Yr,
    rotateX: Yr,
    rotateY: Yr,
    rotateZ: Yr,
    scale: Ts,
    scaleX: Ts,
    scaleY: Ts,
    scaleZ: Ts,
    skew: Yr,
    skewX: Yr,
    skewY: Yr,
    distance: N,
    translateX: N,
    translateY: N,
    translateZ: N,
    x: N,
    y: N,
    z: N,
    perspective: N,
    transformPerspective: N,
    opacity: Qi,
    originX: Jg,
    originY: Jg,
    originZ: N,
    zIndex: e0,
    fillOpacity: Qi,
    strokeOpacity: Qi,
    numOctaves: e0,
  };
function Gh(e, t, r, n) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (zb(d)) {
      i[d] = f;
      continue;
    }
    const p = Mb[d],
      v = Gz(f, p);
    if (Jn.has(d)) {
      if (((l = !0), (a[d] = v), !c)) continue;
      f !== (p.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (s[d] = v)) : (o[d] = v);
  }
  if (
    (t.transform ||
      (l || n
        ? (o.transform = Uz(e.transform, r, c, n))
        : o.transform && (o.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const Kh = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Lb(e, t, r) {
  for (const n in t) !yt(t[n]) && !$b(n, r) && (e[n] = t[n]);
}
function Qz({ transformTemplate: e }, t, r) {
  return w.useMemo(() => {
    const n = Kh();
    return (
      Gh(n, t, { enableHardwareAcceleration: !r }, e),
      Object.assign({}, n.vars, n.style)
    );
  }, [t]);
}
function qz(e, t, r) {
  const n = e.style || {},
    o = {};
  return (
    Lb(o, n, e),
    Object.assign(o, Qz(e, t, r)),
    e.transformValues ? e.transformValues(o) : o
  );
}
function Zz(e, t, r) {
  const n = {},
    o = qz(e, t, r);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = o),
    n
  );
}
const Jz = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function Vl(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    Jz.has(e)
  );
}
let Fb = (e) => !Vl(e);
function eR(e) {
  e && (Fb = (t) => (t.startsWith("on") ? !Vl(t) : e(t)));
}
try {
  eR(require("@emotion/is-prop-valid").default);
} catch {}
function tR(e, t, r) {
  const n = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((Fb(o) ||
        (r === !0 && Vl(o)) ||
        (!t && !Vl(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (n[o] = e[o]));
  return n;
}
function t0(e, t, r) {
  return typeof e == "string" ? e : N.transform(t + r * e);
}
function rR(e, t, r) {
  const n = t0(t, e.x, e.width),
    o = t0(r, e.y, e.height);
  return `${n} ${o}`;
}
const nR = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  oR = { offset: "strokeDashoffset", array: "strokeDasharray" };
function iR(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? nR : oR;
  e[i.offset] = N.transform(-n);
  const a = N.transform(t),
    s = N.transform(r);
  e[i.array] = `${a} ${s}`;
}
function Yh(
  e,
  {
    attrX: t,
    attrY: r,
    attrScale: n,
    originX: o,
    originY: i,
    pathLength: a,
    pathSpacing: s = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
  f
) {
  if ((Gh(e, u, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: p, style: v, dimensions: b } = e;
  p.transform && (b && (v.transform = p.transform), delete p.transform),
    b &&
      (o !== void 0 || i !== void 0 || v.transform) &&
      (v.transformOrigin = rR(
        b,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (p.x = t),
    r !== void 0 && (p.y = r),
    n !== void 0 && (p.scale = n),
    a !== void 0 && iR(p, a, s, l, !1);
}
const Ib = () => ({ ...Kh(), attrs: {} }),
  Xh = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function aR(e, t, r, n) {
  const o = w.useMemo(() => {
    const i = Ib();
    return (
      Yh(i, t, { enableHardwareAcceleration: !1 }, Xh(n), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    Lb(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function sR(e = !1) {
  return (r, n, o, { latestValues: i }, a) => {
    const l = (Hh(r) ? aR : Zz)(n, i, a, r),
      c = { ...tR(n, typeof r == "string", e), ...l, ref: o },
      { children: d } = n,
      f = w.useMemo(() => (yt(d) ? d.get() : d), [d]);
    return w.createElement(r, { ...c, children: f });
  };
}
const Qh = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Db(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r) e.style.setProperty(i, r[i]);
}
const Bb = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Vb(e, t, r, n) {
  Db(e, t, void 0, n);
  for (const o in t.attrs) e.setAttribute(Bb.has(o) ? o : Qh(o), t.attrs[o]);
}
function qh(e, t) {
  const { style: r } = e,
    n = {};
  for (const o in r)
    (yt(r[o]) || (t.style && yt(t.style[o])) || $b(o, e)) && (n[o] = r[o]);
  return n;
}
function Ob(e, t) {
  const r = qh(e, t);
  for (const n in e)
    if (yt(e[n]) || yt(t[n])) {
      const o =
        Oa.indexOf(n) !== -1
          ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
          : n;
      r[o] = e[n];
    }
  return r;
}
function Zh(e, t, r, n = {}, o = {}) {
  return (
    typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)),
    t
  );
}
function Nb(e) {
  const t = w.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Ol = (e) => Array.isArray(e),
  lR = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  uR = (e) => (Ol(e) ? e[e.length - 1] || 0 : e);
function nl(e) {
  const t = yt(e) ? e.get() : e;
  return lR(t) ? t.toValue() : t;
}
function cR(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r },
  n,
  o,
  i
) {
  const a = { latestValues: dR(n, o, i, e), renderState: t() };
  return r && (a.mount = (s) => r(n, s, a)), a;
}
const jb = (e) => (t, r) => {
  const n = w.useContext(Eu),
    o = w.useContext(Va),
    i = () => cR(e, t, n, o);
  return r ? i() : Nb(i);
};
function dR(e, t, r, n) {
  const o = {},
    i = n(e, {});
  for (const f in i) o[f] = nl(i[f]);
  let { initial: a, animate: s } = e;
  const l = zu(e),
    u = Pb(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = r ? r.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return (
    d &&
      typeof d != "boolean" &&
      !Au(d) &&
      (Array.isArray(d) ? d : [d]).forEach((p) => {
        const v = Zh(e, p);
        if (!v) return;
        const { transitionEnd: b, transition: C, ...g } = v;
        for (const h in g) {
          let m = g[h];
          if (Array.isArray(m)) {
            const k = c ? m.length - 1 : 0;
            m = m[k];
          }
          m !== null && (o[h] = m);
        }
        for (const h in b) o[h] = b[h];
      }),
    o
  );
}
const Ee = (e) => e;
class r0 {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const r = this.order.indexOf(t);
    r !== -1 && (this.order.splice(r, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function fR(e) {
  let t = new r0(),
    r = new r0(),
    n = 0,
    o = !1,
    i = !1;
  const a = new WeakSet(),
    s = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && o,
          f = d ? t : r;
        return u && a.add(l), f.add(l) && d && o && (n = t.order.length), l;
      },
      cancel: (l) => {
        r.remove(l), a.delete(l);
      },
      process: (l) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([t, r] = [r, t]), r.clear(), (n = t.order.length), n))
          for (let u = 0; u < n; u++) {
            const c = t.order[u];
            c(l), a.has(c) && (s.schedule(c), e());
          }
        (o = !1), i && ((i = !1), s.process(l));
      },
    };
  return s;
}
const Ps = ["prepare", "read", "update", "preRender", "render", "postRender"],
  hR = 40;
function pR(e, t) {
  let r = !1,
    n = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = Ps.reduce((d, f) => ((d[f] = fR(() => (r = !0))), d), {}),
    a = (d) => i[d].process(o),
    s = () => {
      const d = performance.now();
      (r = !1),
        (o.delta = n ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, hR), 1)),
        (o.timestamp = d),
        (o.isProcessing = !0),
        Ps.forEach(a),
        (o.isProcessing = !1),
        r && t && ((n = !1), e(s));
    },
    l = () => {
      (r = !0), (n = !0), o.isProcessing || e(s);
    };
  return {
    schedule: Ps.reduce((d, f) => {
      const p = i[f];
      return (d[f] = (v, b = !1, C = !1) => (r || l(), p.schedule(v, b, C))), d;
    }, {}),
    cancel: (d) => Ps.forEach((f) => i[f].cancel(d)),
    state: o,
    steps: i,
  };
}
const {
    schedule: he,
    cancel: Vr,
    state: Oe,
    steps: Oc,
  } = pR(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ee, !0),
  mR = {
    useVisualState: jb({
      scrapeMotionValuesFromProps: Ob,
      createRenderState: Ib,
      onMount: (e, t, { renderState: r, latestValues: n }) => {
        he.read(() => {
          try {
            r.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          he.render(() => {
            Yh(
              r,
              n,
              { enableHardwareAcceleration: !1 },
              Xh(t.tagName),
              e.transformTemplate
            ),
              Vb(t, r);
          });
      },
    }),
  },
  gR = {
    useVisualState: jb({
      scrapeMotionValuesFromProps: qh,
      createRenderState: Kh,
    }),
  };
function vR(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...(Hh(e) ? mR : gR),
    preloadedFeatures: r,
    useRender: sR(t),
    createVisualElement: n,
    Component: e,
  };
}
function Er(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const Wb = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Mu(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const yR = (e) => (t) => Wb(t) && e(t, Mu(t));
function Rr(e, t, r, n) {
  return Er(e, t, yR(r), n);
}
const bR = (e, t) => (r) => t(e(r)),
  hn = (...e) => e.reduce(bR);
function Ub(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? ((t = e), r) : !1;
  };
}
const n0 = Ub("dragHorizontal"),
  o0 = Ub("dragVertical");
function Hb(e) {
  let t = !1;
  if (e === "y") t = o0();
  else if (e === "x") t = n0();
  else {
    const r = n0(),
      n = o0();
    r && n
      ? (t = () => {
          r(), n();
        })
      : (r && r(), n && n());
  }
  return t;
}
function Gb() {
  const e = Hb(!0);
  return e ? (e(), !1) : !0;
}
class wn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function i0(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"),
    n = "onHover" + (t ? "Start" : "End"),
    o = (i, a) => {
      if (i.type === "touch" || Gb()) return;
      const s = e.getProps();
      e.animationState &&
        s.whileHover &&
        e.animationState.setActive("whileHover", t),
        s[n] && he.update(() => s[n](i, a));
    };
  return Rr(e.current, r, o, { passive: !e.getProps()[n] });
}
class SR extends wn {
  mount() {
    this.unmount = hn(i0(this.node, !0), i0(this.node, !1));
  }
  unmount() {}
}
class xR extends wn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = hn(
      Er(this.node.current, "focus", () => this.onFocus()),
      Er(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Kb = (e, t) => (t ? (e === t ? !0 : Kb(e, t.parentElement)) : !1);
function Nc(e, t) {
  if (!t) return;
  const r = new PointerEvent("pointer" + e);
  t(r, Mu(r));
}
class wR extends wn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Ee),
      (this.removeEndListeners = Ee),
      (this.removeAccessibleListeners = Ee),
      (this.startPointerPress = (t, r) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const n = this.node.getProps(),
          i = Rr(
            window,
            "pointerup",
            (s, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              he.update(() => {
                Kb(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
              });
            },
            { passive: !(n.onTap || n.onPointerUp) }
          ),
          a = Rr(window, "pointercancel", (s, l) => this.cancelPress(s, l), {
            passive: !(n.onTapCancel || n.onPointerCancel),
          });
        (this.removeEndListeners = hn(i, a)), this.startPress(t, r);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const a = (s) => {
              s.key !== "Enter" ||
                !this.checkPressEnd() ||
                Nc("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && he.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Er(this.node.current, "keyup", a)),
              Nc("down", (s, l) => {
                this.startPress(s, l);
              });
          },
          r = Er(this.node.current, "keydown", t),
          n = () => {
            this.isPressing && Nc("cancel", (i, a) => this.cancelPress(i, a));
          },
          o = Er(this.node.current, "blur", n);
        this.removeAccessibleListeners = hn(r, o);
      });
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      n && he.update(() => n(t, r));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Gb()
    );
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: n } = this.node.getProps();
    n && he.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(),
      r = Rr(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      n = Er(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = hn(r, n);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const lf = new WeakMap(),
  jc = new WeakMap(),
  kR = (e) => {
    const t = lf.get(e.target);
    t && t(e);
  },
  CR = (e) => {
    e.forEach(kR);
  };
function _R({ root: e, ...t }) {
  const r = e || document;
  jc.has(r) || jc.set(r, {});
  const n = jc.get(r),
    o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(CR, { root: e, ...t })), n[o];
}
function TR(e, t, r) {
  const n = _R(t);
  return (
    lf.set(e, r),
    n.observe(e),
    () => {
      lf.delete(e), n.unobserve(e);
    }
  );
}
const PR = { some: 0, all: 1 };
class ER extends wn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: r, margin: n, amount: o = "some", once: i } = t,
      a = {
        root: r ? r.current : void 0,
        rootMargin: n,
        threshold: typeof o == "number" ? o : PR[o],
      },
      s = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return TR(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some($R(t, r)) && this.startObserver();
  }
  unmount() {}
}
function $R({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const AR = {
  inView: { Feature: ER },
  tap: { Feature: wR },
  focus: { Feature: xR },
  hover: { Feature: SR },
};
function Yb(e, t) {
  if (!Array.isArray(t)) return !1;
  const r = t.length;
  if (r !== e.length) return !1;
  for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
function zR(e) {
  const t = {};
  return e.values.forEach((r, n) => (t[n] = r.get())), t;
}
function RR(e) {
  const t = {};
  return e.values.forEach((r, n) => (t[n] = r.getVelocity())), t;
}
function Lu(e, t, r) {
  const n = e.getProps();
  return Zh(n, t, r !== void 0 ? r : n.custom, zR(e), RR(e));
}
const MR = "framerAppearId",
  LR = "data-" + Qh(MR);
let FR = Ee,
  Jh = Ee;
const pn = (e) => e * 1e3,
  Mr = (e) => e / 1e3,
  IR = { current: !1 },
  Xb = (e) => Array.isArray(e) && typeof e[0] == "number";
function Qb(e) {
  return !!(
    !e ||
    (typeof e == "string" && qb[e]) ||
    Xb(e) ||
    (Array.isArray(e) && e.every(Qb))
  );
}
const Li = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
  qb = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Li([0, 0.65, 0.55, 1]),
    circOut: Li([0.55, 0, 1, 0.45]),
    backIn: Li([0.31, 0.01, 0.66, -0.59]),
    backOut: Li([0.33, 1.53, 0.69, 0.99]),
  };
function Zb(e) {
  if (e) return Xb(e) ? Li(e) : Array.isArray(e) ? e.map(Zb) : qb[e];
}
function DR(
  e,
  t,
  r,
  {
    delay: n = 0,
    duration: o,
    repeat: i = 0,
    repeatType: a = "loop",
    ease: s,
    times: l,
  } = {}
) {
  const u = { [t]: r };
  l && (u.offset = l);
  const c = Zb(s);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: n,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: a === "reverse" ? "alternate" : "normal",
    })
  );
}
function BR(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const Jb = (e, t, r) =>
    (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  VR = 1e-7,
  OR = 12;
function NR(e, t, r, n, o) {
  let i,
    a,
    s = 0;
  do (a = t + (r - t) / 2), (i = Jb(a, n, o) - e), i > 0 ? (r = a) : (t = a);
  while (Math.abs(i) > VR && ++s < OR);
  return a;
}
function Wa(e, t, r, n) {
  if (e === t && r === n) return Ee;
  const o = (i) => NR(i, 0, 1, e, r);
  return (i) => (i === 0 || i === 1 ? i : Jb(o(i), t, n));
}
const jR = Wa(0.42, 0, 1, 1),
  WR = Wa(0, 0, 0.58, 1),
  eS = Wa(0.42, 0, 0.58, 1),
  UR = (e) => Array.isArray(e) && typeof e[0] != "number",
  tS = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  rS = (e) => (t) => 1 - e(1 - t),
  nS = (e) => 1 - Math.sin(Math.acos(e)),
  ep = rS(nS),
  HR = tS(ep),
  oS = Wa(0.33, 1.53, 0.69, 0.99),
  tp = rS(oS),
  GR = tS(tp),
  KR = (e) =>
    (e *= 2) < 1 ? 0.5 * tp(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  YR = {
    linear: Ee,
    easeIn: jR,
    easeInOut: eS,
    easeOut: WR,
    circIn: nS,
    circInOut: HR,
    circOut: ep,
    backIn: tp,
    backInOut: GR,
    backOut: oS,
    anticipate: KR,
  },
  a0 = (e) => {
    if (Array.isArray(e)) {
      Jh(e.length === 4);
      const [t, r, n, o] = e;
      return Wa(t, r, n, o);
    } else if (typeof e == "string") return YR[e];
    return e;
  },
  rp = (e, t) => (r) =>
    !!(
      (Na(r) && Kz.test(r) && r.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(r, t))
    ),
  iS = (e, t, r) => (n) => {
    if (!Na(n)) return n;
    const [o, i, a, s] = n.match(Ru);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [r]: parseFloat(a),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    };
  },
  XR = (e) => vn(0, 255, e),
  Wc = { ...eo, transform: (e) => Math.round(XR(e)) },
  Bn = {
    test: rp("rgb", "red"),
    parse: iS("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
      "rgba(" +
      Wc.transform(e) +
      ", " +
      Wc.transform(t) +
      ", " +
      Wc.transform(r) +
      ", " +
      qi(Qi.transform(n)) +
      ")",
  };
function QR(e) {
  let t = "",
    r = "",
    n = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (r = e.substring(3, 5)),
        (n = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (r = e.substring(2, 3)),
        (n = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (r += r),
        (n += n),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(r, 16),
      blue: parseInt(n, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const uf = { test: rp("#"), parse: QR, transform: Bn.transform },
  $o = {
    test: rp("hsl", "hue"),
    parse: iS("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      vr.transform(qi(t)) +
      ", " +
      vr.transform(qi(r)) +
      ", " +
      qi(Qi.transform(n)) +
      ")",
  },
  nt = {
    test: (e) => Bn.test(e) || uf.test(e) || $o.test(e),
    parse: (e) =>
      Bn.test(e) ? Bn.parse(e) : $o.test(e) ? $o.parse(e) : uf.parse(e),
    transform: (e) =>
      Na(e) ? e : e.hasOwnProperty("red") ? Bn.transform(e) : $o.transform(e),
  },
  ke = (e, t, r) => -r * e + r * t + e;
function Uc(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? e + (t - e) * 6 * r
      : r < 1 / 2
      ? t
      : r < 2 / 3
      ? e + (t - e) * (2 / 3 - r) * 6
      : e
  );
}
function qR({ hue: e, saturation: t, lightness: r, alpha: n }) {
  (e /= 360), (t /= 100), (r /= 100);
  let o = 0,
    i = 0,
    a = 0;
  if (!t) o = i = a = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t,
      l = 2 * r - s;
    (o = Uc(l, s, e + 1 / 3)), (i = Uc(l, s, e)), (a = Uc(l, s, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: n,
  };
}
const Hc = (e, t, r) => {
    const n = e * e;
    return Math.sqrt(Math.max(0, r * (t * t - n) + n));
  },
  ZR = [uf, Bn, $o],
  JR = (e) => ZR.find((t) => t.test(e));
function s0(e) {
  const t = JR(e);
  let r = t.parse(e);
  return t === $o && (r = qR(r)), r;
}
const aS = (e, t) => {
  const r = s0(e),
    n = s0(t),
    o = { ...r };
  return (i) => (
    (o.red = Hc(r.red, n.red, i)),
    (o.green = Hc(r.green, n.green, i)),
    (o.blue = Hc(r.blue, n.blue, i)),
    (o.alpha = ke(r.alpha, n.alpha, i)),
    Bn.transform(o)
  );
};
function e4(e) {
  var t, r;
  return (
    isNaN(e) &&
    Na(e) &&
    (((t = e.match(Ru)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((r = e.match(Rb)) === null || r === void 0 ? void 0 : r.length) || 0) >
      0
  );
}
const sS = { regex: Hz, countKey: "Vars", token: "${v}", parse: Ee },
  lS = { regex: Rb, countKey: "Colors", token: "${c}", parse: nt.parse },
  uS = { regex: Ru, countKey: "Numbers", token: "${n}", parse: eo.parse };
function Gc(e, { regex: t, countKey: r, token: n, parse: o }) {
  const i = e.tokenised.match(t);
  i &&
    ((e["num" + r] = i.length),
    (e.tokenised = e.tokenised.replace(t, n)),
    e.values.push(...i.map(o)));
}
function Nl(e) {
  const t = e.toString(),
    r = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return r.value.includes("var(--") && Gc(r, sS), Gc(r, lS), Gc(r, uS), r;
}
function cS(e) {
  return Nl(e).values;
}
function dS(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = Nl(e),
    i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < n
        ? (s = s.replace(sS.token, a[l]))
        : l < n + r
        ? (s = s.replace(lS.token, nt.transform(a[l])))
        : (s = s.replace(uS.token, qi(a[l])));
    return s;
  };
}
const t4 = (e) => (typeof e == "number" ? 0 : e);
function r4(e) {
  const t = cS(e);
  return dS(e)(t.map(t4));
}
const yn = {
    test: e4,
    parse: cS,
    createTransformer: dS,
    getAnimatableNone: r4,
  },
  fS = (e, t) => (r) => `${r > 0 ? t : e}`;
function hS(e, t) {
  return typeof e == "number"
    ? (r) => ke(e, t, r)
    : nt.test(e)
    ? aS(e, t)
    : e.startsWith("var(")
    ? fS(e, t)
    : mS(e, t);
}
const pS = (e, t) => {
    const r = [...e],
      n = r.length,
      o = e.map((i, a) => hS(i, t[a]));
    return (i) => {
      for (let a = 0; a < n; a++) r[a] = o[a](i);
      return r;
    };
  },
  n4 = (e, t) => {
    const r = { ...e, ...t },
      n = {};
    for (const o in r)
      e[o] !== void 0 && t[o] !== void 0 && (n[o] = hS(e[o], t[o]));
    return (o) => {
      for (const i in n) r[i] = n[i](o);
      return r;
    };
  },
  mS = (e, t) => {
    const r = yn.createTransformer(t),
      n = Nl(e),
      o = Nl(t);
    return n.numVars === o.numVars &&
      n.numColors === o.numColors &&
      n.numNumbers >= o.numNumbers
      ? hn(pS(n.values, o.values), r)
      : fS(e, t);
  },
  $a = (e, t, r) => {
    const n = t - e;
    return n === 0 ? 1 : (r - e) / n;
  },
  l0 = (e, t) => (r) => ke(e, t, r);
function o4(e) {
  return typeof e == "number"
    ? l0
    : typeof e == "string"
    ? nt.test(e)
      ? aS
      : mS
    : Array.isArray(e)
    ? pS
    : typeof e == "object"
    ? n4
    : l0;
}
function i4(e, t, r) {
  const n = [],
    o = r || o4(e[0]),
    i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Ee : t;
      s = hn(l, s);
    }
    n.push(s);
  }
  return n;
}
function gS(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  if ((Jh(i === t.length), i === 1)) return () => t[0];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = i4(t, n, o),
    s = a.length,
    l = (u) => {
      let c = 0;
      if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = $a(e[c], e[c + 1], u);
      return a[c](d);
    };
  return r ? (u) => l(vn(e[0], e[i - 1], u)) : l;
}
function a4(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = $a(0, t, n);
    e.push(ke(r, 1, o));
  }
}
function s4(e) {
  const t = [0];
  return a4(t, e.length - 1), t;
}
function l4(e, t) {
  return e.map((r) => r * t);
}
function u4(e, t) {
  return e.map(() => t || eS).splice(0, e.length - 1);
}
function jl({
  duration: e = 300,
  keyframes: t,
  times: r,
  ease: n = "easeInOut",
}) {
  const o = UR(n) ? n.map(a0) : a0(n),
    i = { done: !1, value: t[0] },
    a = l4(r && r.length === t.length ? r : s4(t), e),
    s = gS(a, t, { ease: Array.isArray(o) ? o : u4(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = s(l)), (i.done = l >= e), i),
  };
}
function vS(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const c4 = 5;
function yS(e, t, r) {
  const n = Math.max(t - c4, 0);
  return vS(r - e(n), t - n);
}
const Kc = 0.001,
  d4 = 0.01,
  u0 = 10,
  f4 = 0.05,
  h4 = 1;
function p4({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: r = 0,
  mass: n = 1,
}) {
  let o, i;
  FR(e <= pn(u0));
  let a = 1 - t;
  (a = vn(f4, h4, a)),
    (e = vn(d4, u0, Mr(e))),
    a < 1
      ? ((o = (u) => {
          const c = u * a,
            d = c * e,
            f = c - r,
            p = cf(u, a),
            v = Math.exp(-d);
          return Kc - (f / p) * v;
        }),
        (i = (u) => {
          const d = u * a * e,
            f = d * r + r,
            p = Math.pow(a, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            b = cf(Math.pow(u, 2), a);
          return ((-o(u) + Kc > 0 ? -1 : 1) * ((f - p) * v)) / b;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - r) * e + 1;
          return -Kc + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (r - u) * (e * e);
          return c * d;
        }));
  const s = 5 / e,
    l = g4(o, i, s);
  if (((e = pn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * n;
    return { stiffness: u, damping: a * 2 * Math.sqrt(n * u), duration: e };
  }
}
const m4 = 12;
function g4(e, t, r) {
  let n = r;
  for (let o = 1; o < m4; o++) n = n - e(n) / t(n);
  return n;
}
function cf(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const v4 = ["duration", "bounce"],
  y4 = ["stiffness", "damping", "mass"];
function c0(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function b4(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!c0(e, y4) && c0(e, v4)) {
    const r = p4(e);
    (t = { ...t, ...r, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function bS({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0],
    i = e[e.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: s,
      damping: l,
      mass: u,
      velocity: c,
      duration: d,
      isResolvedFromDuration: f,
    } = b4(n),
    p = c ? -Mr(c) : 0,
    v = l / (2 * Math.sqrt(s * u)),
    b = i - o,
    C = Mr(Math.sqrt(s / u)),
    g = Math.abs(b) < 5;
  r || (r = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5);
  let h;
  if (v < 1) {
    const m = cf(C, v);
    h = (k) => {
      const P = Math.exp(-v * C * k);
      return (
        i - P * (((p + v * C * b) / m) * Math.sin(m * k) + b * Math.cos(m * k))
      );
    };
  } else if (v === 1) h = (m) => i - Math.exp(-C * m) * (b + (p + C * b) * m);
  else {
    const m = C * Math.sqrt(v * v - 1);
    h = (k) => {
      const P = Math.exp(-v * C * k),
        A = Math.min(m * k, 300);
      return (
        i - (P * ((p + v * C * b) * Math.sinh(A) + m * b * Math.cosh(A))) / m
      );
    };
  }
  return {
    calculatedDuration: (f && d) || null,
    next: (m) => {
      const k = h(m);
      if (f) a.done = m >= d;
      else {
        let P = p;
        m !== 0 && (v < 1 ? (P = yS(h, m, k)) : (P = 0));
        const A = Math.abs(P) <= r,
          T = Math.abs(i - k) <= t;
        a.done = A && T;
      }
      return (a.value = a.done ? i : k), a;
    },
  };
}
function d0({
  keyframes: e,
  velocity: t = 0,
  power: r = 0.8,
  timeConstant: n = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: a,
  min: s,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    p = ($) => (s !== void 0 && $ < s) || (l !== void 0 && $ > l),
    v = ($) =>
      s === void 0
        ? l
        : l === void 0 || Math.abs(s - $) < Math.abs(l - $)
        ? s
        : l;
  let b = r * t;
  const C = d + b,
    g = a === void 0 ? C : a(C);
  g !== C && (b = g - d);
  const h = ($) => -b * Math.exp(-$ / n),
    m = ($) => g + h($),
    k = ($) => {
      const F = h($),
        I = m($);
      (f.done = Math.abs(F) <= u), (f.value = f.done ? g : I);
    };
  let P, A;
  const T = ($) => {
    p(f.value) &&
      ((P = $),
      (A = bS({
        keyframes: [f.value, v(f.value)],
        velocity: yS(m, $, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: ($) => {
        let F = !1;
        return (
          !A && P === void 0 && ((F = !0), k($), T($)),
          P !== void 0 && $ > P ? A.next($ - P) : (!F && k($), f)
        );
      },
    }
  );
}
const S4 = (e) => {
    const t = ({ timestamp: r }) => e(r);
    return {
      start: () => he.update(t, !0),
      stop: () => Vr(t),
      now: () => (Oe.isProcessing ? Oe.timestamp : performance.now()),
    };
  },
  f0 = 2e4;
function h0(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < f0; ) (t += r), (n = e.next(t));
  return t >= f0 ? 1 / 0 : t;
}
const x4 = { decay: d0, inertia: d0, tween: jl, keyframes: jl, spring: bS };
function Wl({
  autoplay: e = !0,
  delay: t = 0,
  driver: r = S4,
  keyframes: n,
  type: o = "keyframes",
  repeat: i = 0,
  repeatDelay: a = 0,
  repeatType: s = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: d,
  ...f
}) {
  let p = 1,
    v = !1,
    b,
    C;
  const g = () => {
    C = new Promise((O) => {
      b = O;
    });
  };
  g();
  let h;
  const m = x4[o] || jl;
  let k;
  m !== jl &&
    typeof n[0] != "number" &&
    ((k = gS([0, 100], n, { clamp: !1 })), (n = [0, 100]));
  const P = m({ ...f, keyframes: n });
  let A;
  s === "mirror" &&
    (A = m({
      ...f,
      keyframes: [...n].reverse(),
      velocity: -(f.velocity || 0),
    }));
  let T = "idle",
    $ = null,
    F = null,
    I = null;
  P.calculatedDuration === null && i && (P.calculatedDuration = h0(P));
  const { calculatedDuration: le } = P;
  let me = 1 / 0,
    $e = 1 / 0;
  le !== null && ((me = le + a), ($e = me * (i + 1) - a));
  let oe = 0;
  const de = (O) => {
      if (F === null) return;
      p > 0 && (F = Math.min(F, O)),
        p < 0 && (F = Math.min(O - $e / p, F)),
        $ !== null ? (oe = $) : (oe = Math.round(O - F) * p);
      const q = oe - t * (p >= 0 ? 1 : -1),
        W = p >= 0 ? q < 0 : q > $e;
      (oe = Math.max(q, 0)), T === "finished" && $ === null && (oe = $e);
      let se = oe,
        Gt = P;
      if (i) {
        const Wr = oe / me;
        let or = Math.floor(Wr),
          Rt = Wr % 1;
        !Rt && Wr >= 1 && (Rt = 1),
          Rt === 1 && or--,
          (or = Math.min(or, i + 1));
        const kn = !!(or % 2);
        kn &&
          (s === "reverse"
            ? ((Rt = 1 - Rt), a && (Rt -= a / me))
            : s === "mirror" && (Gt = A));
        let to = vn(0, 1, Rt);
        oe > $e && (to = s === "reverse" && kn ? 1 : 0), (se = to * me);
      }
      const Te = W ? { done: !1, value: n[0] } : Gt.next(se);
      k && (Te.value = k(Te.value));
      let { done: bt } = Te;
      !W && le !== null && (bt = p >= 0 ? oe >= $e : oe <= 0);
      const nr = $ === null && (T === "finished" || (T === "running" && bt));
      return d && d(Te.value), nr && R(), Te;
    },
    Re = () => {
      h && h.stop(), (h = void 0);
    },
    Ie = () => {
      (T = "idle"), Re(), b(), g(), (F = I = null);
    },
    R = () => {
      (T = "finished"), c && c(), Re(), b();
    },
    V = () => {
      if (v) return;
      h || (h = r(de));
      const O = h.now();
      l && l(),
        $ !== null ? (F = O - $) : (!F || T === "finished") && (F = O),
        T === "finished" && g(),
        (I = F),
        ($ = null),
        (T = "running"),
        h.start();
    };
  e && V();
  const j = {
    then(O, q) {
      return C.then(O, q);
    },
    get time() {
      return Mr(oe);
    },
    set time(O) {
      (O = pn(O)),
        (oe = O),
        $ !== null || !h || p === 0 ? ($ = O) : (F = h.now() - O / p);
    },
    get duration() {
      const O = P.calculatedDuration === null ? h0(P) : P.calculatedDuration;
      return Mr(O);
    },
    get speed() {
      return p;
    },
    set speed(O) {
      O === p || !h || ((p = O), (j.time = Mr(oe)));
    },
    get state() {
      return T;
    },
    play: V,
    pause: () => {
      (T = "paused"), ($ = oe);
    },
    stop: () => {
      (v = !0), T !== "idle" && ((T = "idle"), u && u(), Ie());
    },
    cancel: () => {
      I !== null && de(I), Ie();
    },
    complete: () => {
      T = "finished";
    },
    sample: (O) => ((F = 0), de(O)),
  };
  return j;
}
function w4(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const k4 = w4(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  C4 = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  Es = 10,
  _4 = 2e4,
  T4 = (e, t) => t.type === "spring" || e === "backgroundColor" || !Qb(t.ease);
function P4(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (
    !(
      k4() &&
      C4.has(t) &&
      !o.repeatDelay &&
      o.repeatType !== "mirror" &&
      o.damping !== 0 &&
      o.type !== "inertia"
    )
  )
    return !1;
  let a = !1,
    s,
    l;
  const u = () => {
    l = new Promise((h) => {
      s = h;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (T4(t, o)) {
    const h = Wl({ ...o, repeat: 0, delay: 0 });
    let m = { done: !1, value: c[0] };
    const k = [];
    let P = 0;
    for (; !m.done && P < _4; ) (m = h.sample(P)), k.push(m.value), (P += Es);
    (p = void 0), (c = k), (d = P - Es), (f = "linear");
  }
  const v = DR(e.owner.current, t, c, { ...o, duration: d, ease: f, times: p });
  o.syncStart &&
    (v.startTime = Oe.isProcessing
      ? Oe.timestamp
      : document.timeline
      ? document.timeline.currentTime
      : performance.now());
  const b = () => v.cancel(),
    C = () => {
      he.update(b), s(), u();
    };
  return (
    (v.onfinish = () => {
      e.set(BR(c, o)), n && n(), C();
    }),
    {
      then(h, m) {
        return l.then(h, m);
      },
      attachTimeline(h) {
        return (v.timeline = h), (v.onfinish = null), Ee;
      },
      get time() {
        return Mr(v.currentTime || 0);
      },
      set time(h) {
        v.currentTime = pn(h);
      },
      get speed() {
        return v.playbackRate;
      },
      set speed(h) {
        v.playbackRate = h;
      },
      get duration() {
        return Mr(d);
      },
      play: () => {
        a || (v.play(), Vr(b));
      },
      pause: () => v.pause(),
      stop: () => {
        if (((a = !0), v.playState === "idle")) return;
        const { currentTime: h } = v;
        if (h) {
          const m = Wl({ ...o, autoplay: !1 });
          e.setWithVelocity(m.sample(h - Es).value, m.sample(h).value, Es);
        }
        C();
      },
      complete: () => v.finish(),
      cancel: C,
    }
  );
}
function E4({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (
    r && r(e[e.length - 1]),
    n && n(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Ee,
      pause: Ee,
      stop: Ee,
      then: (i) => (i(), Promise.resolve()),
      cancel: Ee,
      complete: Ee,
    }
  );
  return t
    ? Wl({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o })
    : o();
}
const $4 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  A4 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  z4 = { type: "keyframes", duration: 0.8 },
  R4 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  M4 = (e, { keyframes: t }) =>
    t.length > 2
      ? z4
      : Jn.has(e)
      ? e.startsWith("scale")
        ? A4(t[1])
        : $4
      : R4,
  df = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (yn.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  L4 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function F4(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [n] = r.match(Ru) || [];
  if (!n) return e;
  const o = r.replace(n, "");
  let i = L4.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + "(" + i + o + ")";
}
const I4 = /([a-z-]*)\(.*?\)/g,
  ff = {
    ...yn,
    getAnimatableNone: (e) => {
      const t = e.match(I4);
      return t ? t.map(F4).join(" ") : e;
    },
  },
  D4 = {
    ...Mb,
    color: nt,
    backgroundColor: nt,
    outlineColor: nt,
    fill: nt,
    stroke: nt,
    borderColor: nt,
    borderTopColor: nt,
    borderRightColor: nt,
    borderBottomColor: nt,
    borderLeftColor: nt,
    filter: ff,
    WebkitFilter: ff,
  },
  np = (e) => D4[e];
function SS(e, t) {
  let r = np(e);
  return (
    r !== ff && (r = yn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
  );
}
const xS = (e) => /^0[^.\s]+$/.test(e);
function B4(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || xS(e);
}
function V4(e, t, r, n) {
  const o = df(t, r);
  let i;
  Array.isArray(r) ? (i = [...r]) : (i = [null, r]);
  const a = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]),
      B4(i[u]) && l.push(u),
      typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = SS(t, s);
    }
  return i;
}
function O4({
  when: e,
  delay: t,
  delayChildren: r,
  staggerChildren: n,
  staggerDirection: o,
  repeat: i,
  repeatType: a,
  repeatDelay: s,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function wS(e, t) {
  return e[t] || e.default || e;
}
const op =
  (e, t, r, n = {}) =>
  (o) => {
    const i = wS(n, e) || {},
      a = i.delay || n.delay || 0;
    let { elapsed: s = 0 } = n;
    s = s - pn(a);
    const l = V4(t, e, r, i),
      u = l[0],
      c = l[l.length - 1],
      d = df(e, u),
      f = df(e, c);
    let p = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...i,
      delay: -s,
      onUpdate: (v) => {
        t.set(v), i.onUpdate && i.onUpdate(v);
      },
      onComplete: () => {
        o(), i.onComplete && i.onComplete();
      },
    };
    if (
      (O4(i) || (p = { ...p, ...M4(e, p) }),
      p.duration && (p.duration = pn(p.duration)),
      p.repeatDelay && (p.repeatDelay = pn(p.repeatDelay)),
      !d || !f || IR.current || i.type === !1)
    )
      return E4(p);
    if (
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const v = P4(t, e, p);
      if (v) return v;
    }
    return Wl(p);
  };
function Ul(e) {
  return !!(yt(e) && e.add);
}
const kS = (e) => /^\-?\d*\.?\d+$/.test(e);
function ip(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ap(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class sp {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ip(this.subscriptions, t), () => ap(this.subscriptions, t);
  }
  notify(t, r, n) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, r, n);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, r, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const N4 = (e) => !isNaN(parseFloat(e));
class j4 {
  constructor(t, r = {}) {
    (this.version = "10.16.4"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (n, o = !0) => {
        (this.prev = this.current), (this.current = n);
        const { delta: i, timestamp: a } = Oe;
        this.lastUpdated !== a &&
          ((this.timeDelta = i),
          (this.lastUpdated = a),
          he.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => he.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: n }) => {
        n !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = N4(this.current)),
      (this.owner = r.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new sp());
    const n = this.events[t].add(r);
    return t === "change"
      ? () => {
          n(),
            he.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : n;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, r) {
    (this.passiveEffect = t), (this.stopPassiveEffect = r);
  }
  set(t, r = !0) {
    !r || !this.passiveEffect
      ? this.updateAndNotify(t, r)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, r, n) {
    this.set(r), (this.prev = t), (this.timeDelta = n);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? vS(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((r) => {
        (this.hasAnimated = !0),
          (this.animation = t(r)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ei(e, t) {
  return new j4(e, t);
}
const CS = (e) => (t) => t.test(e),
  W4 = { test: (e) => e === "auto", parse: (e) => e },
  _S = [eo, N, vr, Yr, Xz, Yz, W4],
  wi = (e) => _S.find(CS(e)),
  U4 = [..._S, nt, yn],
  H4 = (e) => U4.find(CS(e));
function G4(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, ei(r));
}
function K4(e, t) {
  const r = Lu(e, t);
  let {
    transitionEnd: n = {},
    transition: o = {},
    ...i
  } = r ? e.makeTargetAnimatable(r, !1) : {};
  i = { ...i, ...n };
  for (const a in i) {
    const s = uR(i[a]);
    G4(e, a, s);
  }
}
function Y4(e, t, r) {
  var n, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)),
    a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !==
              null && o !== void 0
              ? o
              : t[l]),
        c != null &&
          (typeof c == "string" && (kS(c) || xS(c))
            ? (c = parseFloat(c))
            : !H4(c) && yn.test(u) && (c = SS(l, u)),
          e.addValue(l, ei(c, { owner: e })),
          r[l] === void 0 && (r[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function X4(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function Q4(e, t, r) {
  const n = {};
  for (const o in e) {
    const i = X4(o, t);
    if (i !== void 0) n[o] = i;
    else {
      const a = r.getValue(o);
      a && (n[o] = a.get());
    }
  }
  return n;
}
function q4({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return (t[r] = !1), n;
}
function TS(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let {
    transition: i = e.getDefaultTransition(),
    transitionEnd: a,
    ...s
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (i = n);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d),
      p = s[d];
    if (!f || p === void 0 || (c && q4(c, d))) continue;
    const v = { delay: r, elapsed: 0, ...i };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const C = e.getProps()[LR];
      C &&
        ((v.elapsed = window.HandoffAppearAnimations(C, d, f, he)),
        (v.syncStart = !0));
    }
    f.start(op(d, f, p, e.shouldReduceMotion && Jn.has(d) ? { type: !1 } : v));
    const b = f.animation;
    Ul(l) && (l.add(d), b.then(() => l.remove(d))), u.push(b);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        a && K4(e, a);
      }),
    u
  );
}
function hf(e, t, r = {}) {
  const n = Lu(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const i = n ? () => Promise.all(TS(e, n, r)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: d,
            } = o;
            return Z4(e, t, u + l, c, d, r);
          }
        : () => Promise.resolve(),
    { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else return Promise.all([i(), a(r.delay)]);
}
function Z4(e, t, r = 0, n = 0, o = 1, i) {
  const a = [],
    s = (e.variantChildren.size - 1) * n,
    l = o === 1 ? (u = 0) => u * n : (u = 0) => s - u * n;
  return (
    Array.from(e.variantChildren)
      .sort(J4)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          a.push(
            hf(u, t, { ...i, delay: r + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(a)
  );
}
function J4(e, t) {
  return e.sortNodePosition(t);
}
function eM(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => hf(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == "string") n = hf(e, t, r);
  else {
    const o = typeof t == "function" ? Lu(e, t, r.custom) : t;
    n = Promise.all(TS(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const tM = [...jh].reverse(),
  rM = jh.length;
function nM(e) {
  return (t) =>
    Promise.all(t.map(({ animation: r, options: n }) => eM(e, r, n)));
}
function oM(e) {
  let t = nM(e);
  const r = aM();
  let n = !0;
  const o = (l, u) => {
    const c = Lu(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...p } = c;
      l = { ...l, ...p, ...f };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function a(l, u) {
    const c = e.getProps(),
      d = e.getVariantContext(!0) || {},
      f = [],
      p = new Set();
    let v = {},
      b = 1 / 0;
    for (let g = 0; g < rM; g++) {
      const h = tM[g],
        m = r[h],
        k = c[h] !== void 0 ? c[h] : d[h],
        P = Pa(k),
        A = h === u ? m.isActive : null;
      A === !1 && (b = g);
      let T = k === d[h] && k !== c[h] && P;
      if (
        (T && n && e.manuallyAnimateOnMount && (T = !1),
        (m.protectedKeys = { ...v }),
        (!m.isActive && A === null) ||
          (!k && !m.prevProp) ||
          Au(k) ||
          typeof k == "boolean")
      )
        continue;
      const $ = iM(m.prevProp, k);
      let F = $ || (h === u && m.isActive && !T && P) || (g > b && P);
      const I = Array.isArray(k) ? k : [k];
      let le = I.reduce(o, {});
      A === !1 && (le = {});
      const { prevResolvedValues: me = {} } = m,
        $e = { ...me, ...le },
        oe = (de) => {
          (F = !0), p.delete(de), (m.needsAnimating[de] = !0);
        };
      for (const de in $e) {
        const Re = le[de],
          Ie = me[de];
        v.hasOwnProperty(de) ||
          (Re !== Ie
            ? Ol(Re) && Ol(Ie)
              ? !Yb(Re, Ie) || $
                ? oe(de)
                : (m.protectedKeys[de] = !0)
              : Re !== void 0
              ? oe(de)
              : p.add(de)
            : Re !== void 0 && p.has(de)
            ? oe(de)
            : (m.protectedKeys[de] = !0));
      }
      (m.prevProp = k),
        (m.prevResolvedValues = le),
        m.isActive && (v = { ...v, ...le }),
        n && e.blockInitialAnimation && (F = !1),
        F &&
          !T &&
          f.push(
            ...I.map((de) => ({ animation: de, options: { type: h, ...l } }))
          );
    }
    if (p.size) {
      const g = {};
      p.forEach((h) => {
        const m = e.getBaseTarget(h);
        m !== void 0 && (g[h] = m);
      }),
        f.push({ animation: g });
    }
    let C = !!f.length;
    return (
      n && c.initial === !1 && !e.manuallyAnimateOnMount && (C = !1),
      (n = !1),
      C ? t(f) : Promise.resolve()
    );
  }
  function s(l, u, c) {
    var d;
    if (r[l].isActive === u) return Promise.resolve();
    (d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((p) => {
        var v;
        return (v = p.animationState) === null || v === void 0
          ? void 0
          : v.setActive(l, u);
      }),
      (r[l].isActive = u);
    const f = a(c, l);
    for (const p in r) r[p].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => r,
  };
}
function iM(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Yb(t, e) : !1;
}
function Pn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function aM() {
  return {
    animate: Pn(!0),
    whileInView: Pn(),
    whileHover: Pn(),
    whileTap: Pn(),
    whileDrag: Pn(),
    whileFocus: Pn(),
    exit: Pn(),
  };
}
class sM extends wn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = oM(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Au(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let lM = 0;
class uM extends wn {
  constructor() {
    super(...arguments), (this.id = lM++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: r,
        custom: n,
      } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o) return;
    const i = this.node.animationState.setActive("exit", !t, {
      custom: n ?? this.node.getProps().custom,
    });
    r && !t && i.then(() => r(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const cM = { animation: { Feature: sM }, exit: { Feature: uM } },
  p0 = (e, t) => Math.abs(e - t);
function dM(e, t) {
  const r = p0(e.x, t.x),
    n = p0(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class PS {
  constructor(t, r, { transformPagePoint: n } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = Xc(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          d = dM(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !d) return;
        const { point: f } = u,
          { timestamp: p } = Oe;
        this.history.push({ ...f, timestamp: p });
        const { onStart: v, onMove: b } = this.handlers;
        c ||
          (v && v(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          b && b(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Yc(c, this.transformPagePoint)),
          he.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: d, onSessionEnd: f } = this.handlers,
          p = Xc(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Yc(c, this.transformPagePoint),
            this.history
          );
        this.startEvent && d && d(u, p), f && f(u, p);
      }),
      !Wb(t))
    )
      return;
    (this.handlers = r), (this.transformPagePoint = n);
    const o = Mu(t),
      i = Yc(o, this.transformPagePoint),
      { point: a } = i,
      { timestamp: s } = Oe;
    this.history = [{ ...a, timestamp: s }];
    const { onSessionStart: l } = r;
    l && l(t, Xc(i, this.history)),
      (this.removeListeners = hn(
        Rr(window, "pointermove", this.handlePointerMove),
        Rr(window, "pointerup", this.handlePointerUp),
        Rr(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Vr(this.updatePoint);
  }
}
function Yc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function m0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Xc({ point: e }, t) {
  return {
    point: e,
    delta: m0(e, ES(t)),
    offset: m0(e, fM(t)),
    velocity: hM(t, 0.1),
  };
}
function fM(e) {
  return e[0];
}
function ES(e) {
  return e[e.length - 1];
}
function hM(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let r = e.length - 1,
    n = null;
  const o = ES(e);
  for (; r >= 0 && ((n = e[r]), !(o.timestamp - n.timestamp > pn(t))); ) r--;
  if (!n) return { x: 0, y: 0 };
  const i = Mr(o.timestamp - n.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const a = { x: (o.x - n.x) / i, y: (o.y - n.y) / i };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Et(e) {
  return e.max - e.min;
}
function pf(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function g0(e, t, r, n = 0.5) {
  (e.origin = n),
    (e.originPoint = ke(t.min, t.max, e.origin)),
    (e.scale = Et(r) / Et(t)),
    (pf(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = ke(r.min, r.max, e.origin) - e.originPoint),
    (pf(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Zi(e, t, r, n) {
  g0(e.x, t.x, r.x, n ? n.originX : void 0),
    g0(e.y, t.y, r.y, n ? n.originY : void 0);
}
function v0(e, t, r) {
  (e.min = r.min + t.min), (e.max = e.min + Et(t));
}
function pM(e, t, r) {
  v0(e.x, t.x, r.x), v0(e.y, t.y, r.y);
}
function y0(e, t, r) {
  (e.min = t.min - r.min), (e.max = e.min + Et(t));
}
function Ji(e, t, r) {
  y0(e.x, t.x, r.x), y0(e.y, t.y, r.y);
}
function mM(e, { min: t, max: r }, n) {
  return (
    t !== void 0 && e < t
      ? (e = n ? ke(t, e, n.min) : Math.max(e, t))
      : r !== void 0 && e > r && (e = n ? ke(r, e, n.max) : Math.min(e, r)),
    e
  );
}
function b0(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
  };
}
function gM(e, { top: t, left: r, bottom: n, right: o }) {
  return { x: b0(e.x, r, o), y: b0(e.y, t, n) };
}
function S0(e, t) {
  let r = t.min - e.min,
    n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function vM(e, t) {
  return { x: S0(e.x, t.x), y: S0(e.y, t.y) };
}
function yM(e, t) {
  let r = 0.5;
  const n = Et(e),
    o = Et(t);
  return (
    o > n
      ? (r = $a(t.min, t.max - n, e.min))
      : n > o && (r = $a(e.min, e.max - o, t.min)),
    vn(0, 1, r)
  );
}
function bM(e, t) {
  const r = {};
  return (
    t.min !== void 0 && (r.min = t.min - e.min),
    t.max !== void 0 && (r.max = t.max - e.min),
    r
  );
}
const mf = 0.35;
function SM(e = mf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = mf),
    { x: x0(e, "left", "right"), y: x0(e, "top", "bottom") }
  );
}
function x0(e, t, r) {
  return { min: w0(e, t), max: w0(e, r) };
}
function w0(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const k0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ao = () => ({ x: k0(), y: k0() }),
  C0 = () => ({ min: 0, max: 0 }),
  Me = () => ({ x: C0(), y: C0() });
function lr(e) {
  return [e("x"), e("y")];
}
function $S({ top: e, left: t, right: r, bottom: n }) {
  return { x: { min: t, max: r }, y: { min: e, max: n } };
}
function xM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function wM(e, t) {
  if (!t) return e;
  const r = t({ x: e.left, y: e.top }),
    n = t({ x: e.right, y: e.bottom });
  return { top: r.y, left: r.x, bottom: n.y, right: n.x };
}
function Qc(e) {
  return e === void 0 || e === 1;
}
function gf({ scale: e, scaleX: t, scaleY: r }) {
  return !Qc(e) || !Qc(t) || !Qc(r);
}
function An(e) {
  return gf(e) || AS(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function AS(e) {
  return _0(e.x) || _0(e.y);
}
function _0(e) {
  return e && e !== "0%";
}
function Hl(e, t, r) {
  const n = e - r,
    o = t * n;
  return r + o;
}
function T0(e, t, r, n, o) {
  return o !== void 0 && (e = Hl(e, o, n)), Hl(e, r, n) + t;
}
function vf(e, t = 0, r = 1, n, o) {
  (e.min = T0(e.min, t, r, n, o)), (e.max = T0(e.max, t, r, n, o));
}
function zS(e, { x: t, y: r }) {
  vf(e.x, t.translate, t.scale, t.originPoint),
    vf(e.y, r.translate, r.scale, r.originPoint);
}
function kM(e, t, r, n = !1) {
  const o = r.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    (i = r[s]), (a = i.projectionDelta);
    const l = i.instance;
    (l && l.style && l.style.display === "contents") ||
      (n &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        zo(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), zS(e, a)),
      n && An(i.latestValues) && zo(e, i.latestValues));
  }
  (t.x = P0(t.x)), (t.y = P0(t.y));
}
function P0(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function qr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function E0(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    a = ke(e.min, e.max, i);
  vf(e, t[r], t[n], a, t.scale);
}
const CM = ["x", "scaleX", "originX"],
  _M = ["y", "scaleY", "originY"];
function zo(e, t) {
  E0(e.x, t, CM), E0(e.y, t, _M);
}
function RS(e, t) {
  return $S(wM(e.getBoundingClientRect(), t));
}
function TM(e, t, r) {
  const n = RS(e, r),
    { scroll: o } = t;
  return o && (qr(n.x, o.offset.x), qr(n.y, o.offset.y)), n;
}
const PM = new WeakMap();
class EM {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Me()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1) return;
    const o = (l) => {
        this.stopAnimation(), r && this.snapToCursor(Mu(l, "page").point);
      },
      i = (l, u) => {
        const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
        if (
          c &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Hb(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          lr((v) => {
            let b = this.getAxisMotionValue(v).get() || 0;
            if (vr.test(b)) {
              const { projection: C } = this.visualElement;
              if (C && C.layout) {
                const g = C.layout.layoutBox[v];
                g && (b = Et(g) * (parseFloat(b) / 100));
              }
            }
            this.originPoint[v] = b;
          }),
          f && he.update(() => f(l, u), !1, !0);
        const { animationState: p } = this.visualElement;
        p && p.setActive("whileDrag", !0);
      },
      a = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: d,
          onDirectionLock: f,
          onDrag: p,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: v } = u;
        if (d && this.currentDirection === null) {
          (this.currentDirection = $M(v)),
            this.currentDirection !== null && f && f(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, v),
          this.updateAxis("y", u.point, v),
          this.visualElement.render(),
          p && p(l, u);
      },
      s = (l, u) => this.stop(l, u);
    this.panSession = new PS(
      t,
      { onSessionStart: o, onStart: i, onMove: a, onSessionEnd: s },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(t, r) {
    const n = this.isDragging;
    if ((this.cancel(), !n)) return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && he.update(() => i(t, r));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: n } = this.getProps();
    !n &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      r && r.setActive("whileDrag", !1);
  }
  updateAxis(t, r, n) {
    const { drag: o } = this.getProps();
    if (!n || !$s(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + n[t];
    this.constraints &&
      this.constraints[t] &&
      (a = mM(a, this.constraints[t], this.elastic[t])),
      i.set(a);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(),
      { layout: n } = this.visualElement.projection || {},
      o = this.constraints;
    t && Eo(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && n
      ? (this.constraints = gM(n.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = SM(r)),
      o !== this.constraints &&
        n &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        lr((i) => {
          this.getAxisMotionValue(i) &&
            (this.constraints[i] = bM(n.layoutBox[i], this.constraints[i]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !Eo(t)) return !1;
    const n = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = TM(n, o.root, this.visualElement.getTransformPagePoint());
    let a = vM(o.layout.layoutBox, i);
    if (r) {
      const s = r(xM(a));
      (this.hasMutatedConstraints = !!s), s && (a = $S(s));
    }
    return a;
  }
  startAnimation(t) {
    const {
        drag: r,
        dragMomentum: n,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: a,
        onDragTransitionEnd: s,
      } = this.getProps(),
      l = this.constraints || {},
      u = lr((c) => {
        if (!$s(c, r, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        a && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          p = o ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: n ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: p,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return n.start(op(t, n, 0, r));
  }
  stopAnimation() {
    lr((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const r = "_drag" + t.toUpperCase(),
      n = this.visualElement.getProps(),
      o = n[r];
    return (
      o ||
      this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    lr((r) => {
      const { drag: n } = this.getProps();
      if (!$s(r, n, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[r];
        i.set(t[r] - ke(a, s, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: r } = this.getProps(),
      { projection: n } = this.visualElement;
    if (!Eo(r) || !n || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    lr((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = yM({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      n.root && n.root.updateScroll(),
      n.updateLayout(),
      this.resolveConstraints(),
      lr((a) => {
        if (!$s(a, t, null)) return;
        const s = this.getAxisMotionValue(a),
          { min: l, max: u } = this.constraints[a];
        s.set(ke(l, u, o[a]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    PM.set(this.visualElement, this);
    const t = this.visualElement.current,
      r = Rr(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      n = () => {
        const { dragConstraints: l } = this.getProps();
        Eo(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const a = Er(window, "resize", () => this.scalePositionWithinConstraints()),
      s = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (lr((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      a(), r(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: r = !1,
        dragDirectionLock: n = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: a = mf,
        dragMomentum: s = !0,
      } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s,
    };
  }
}
function $s(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function $M(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? (r = "y") : Math.abs(e.x) > t && (r = "x"), r;
}
class AM extends wn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ee),
      (this.removeListeners = Ee),
      (this.controls = new EM(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ee);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const $0 = (e) => (t, r) => {
  e && he.update(() => e(t, r));
};
class zM extends wn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ee);
  }
  onPointerDown(t) {
    this.session = new PS(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: r,
      onPan: n,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: $0(t),
      onStart: $0(r),
      onMove: n,
      onEnd: (i, a) => {
        delete this.session, o && he.update(() => o(i, a));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Rr(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function RM() {
  const e = w.useContext(Va);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e,
    o = w.useId();
  return w.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function MM() {
  return LM(w.useContext(Va));
}
function LM(e) {
  return e === null ? !0 : e.isPresent;
}
const ol = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function A0(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ki = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (N.test(e)) e = parseFloat(e);
        else return e;
      const r = A0(e, t.target.x),
        n = A0(e, t.target.y);
      return `${r}% ${n}%`;
    },
  },
  FM = {
    correct: (e, { treeScale: t, projectionDelta: r }) => {
      const n = e,
        o = yn.parse(e);
      if (o.length > 5) return n;
      const i = yn.createTransformer(e),
        a = typeof o[0] != "number" ? 1 : 0,
        s = r.x.scale * t.x,
        l = r.y.scale * t.y;
      (o[0 + a] /= s), (o[1 + a] /= l);
      const u = ke(s, l, 0.5);
      return (
        typeof o[2 + a] == "number" && (o[2 + a] /= u),
        typeof o[3 + a] == "number" && (o[3 + a] /= u),
        i(o)
      );
    },
  };
class IM extends Wo.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: n,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    Nz(DM),
      i &&
        (r.group && r.group.add(i),
        n && n.register && o && n.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (ol.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: r,
        visualElement: n,
        drag: o,
        isPresent: i,
      } = this.props,
      a = n.projection;
    return (
      a &&
        ((a.isPresent = i),
        o || t.layoutDependency !== r || r === void 0
          ? a.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? a.promote()
            : a.relegate() ||
              he.postRender(() => {
                const s = a.getStack();
                (!s || !s.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: n,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      r && r.group && r.group.remove(o),
      n && n.deregister && n.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function MS(e) {
  const [t, r] = RM(),
    n = w.useContext(Uh);
  return Wo.createElement(IM, {
    ...e,
    layoutGroup: n,
    switchLayoutGroup: w.useContext(Eb),
    isPresent: t,
    safeToRemove: r,
  });
}
const DM = {
    borderRadius: {
      ...ki,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ki,
    borderTopRightRadius: ki,
    borderBottomLeftRadius: ki,
    borderBottomRightRadius: ki,
    boxShadow: FM,
  },
  LS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  BM = LS.length,
  z0 = (e) => (typeof e == "string" ? parseFloat(e) : e),
  R0 = (e) => typeof e == "number" || N.test(e);
function VM(e, t, r, n, o, i) {
  o
    ? ((e.opacity = ke(0, r.opacity !== void 0 ? r.opacity : 1, OM(n))),
      (e.opacityExit = ke(t.opacity !== void 0 ? t.opacity : 1, 0, NM(n))))
    : i &&
      (e.opacity = ke(
        t.opacity !== void 0 ? t.opacity : 1,
        r.opacity !== void 0 ? r.opacity : 1,
        n
      ));
  for (let a = 0; a < BM; a++) {
    const s = `border${LS[a]}Radius`;
    let l = M0(t, s),
      u = M0(r, s);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || R0(l) === R0(u)
        ? ((e[s] = Math.max(ke(z0(l), z0(u), n), 0)),
          (vr.test(u) || vr.test(l)) && (e[s] += "%"))
        : (e[s] = u);
  }
  (t.rotate || r.rotate) && (e.rotate = ke(t.rotate || 0, r.rotate || 0, n));
}
function M0(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const OM = FS(0, 0.5, ep),
  NM = FS(0.5, 0.95, Ee);
function FS(e, t, r) {
  return (n) => (n < e ? 0 : n > t ? 1 : r($a(e, t, n)));
}
function L0(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function It(e, t) {
  L0(e.x, t.x), L0(e.y, t.y);
}
function F0(e, t, r, n, o) {
  return (
    (e -= t), (e = Hl(e, 1 / r, n)), o !== void 0 && (e = Hl(e, 1 / o, n)), e
  );
}
function jM(e, t = 0, r = 1, n = 0.5, o, i = e, a = e) {
  if (
    (vr.test(t) &&
      ((t = parseFloat(t)), (t = ke(a.min, a.max, t / 100) - a.min)),
    typeof t != "number")
  )
    return;
  let s = ke(i.min, i.max, n);
  e === i && (s -= t),
    (e.min = F0(e.min, t, r, s, o)),
    (e.max = F0(e.max, t, r, s, o));
}
function I0(e, t, [r, n, o], i, a) {
  jM(e, t[r], t[n], t[o], t.scale, i, a);
}
const WM = ["x", "scaleX", "originX"],
  UM = ["y", "scaleY", "originY"];
function D0(e, t, r, n) {
  I0(e.x, t, WM, r ? r.x : void 0, n ? n.x : void 0),
    I0(e.y, t, UM, r ? r.y : void 0, n ? n.y : void 0);
}
function B0(e) {
  return e.translate === 0 && e.scale === 1;
}
function IS(e) {
  return B0(e.x) && B0(e.y);
}
function HM(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function DS(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function V0(e) {
  return Et(e.x) / Et(e.y);
}
class GM {
  constructor() {
    this.members = [];
  }
  add(t) {
    ip(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (ap(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((o) => t === o);
    if (r === 0) return !1;
    let n;
    for (let o = r; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        n = i;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(t, r) {
    const n = this.lead;
    if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
      n.instance && n.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = n),
        r && (t.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((t.snapshot = n.snapshot),
          (t.snapshot.latestValues = n.animationValues || n.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: n } = t;
      r.onExitComplete && r.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function O0(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y;
  if (
    ((o || i) && (n = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
    r)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = r;
    l && (n += `rotate(${l}deg) `),
      u && (n += `rotateX(${u}deg) `),
      c && (n += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x,
    s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (n += `scale(${a}, ${s})`), n || "none";
}
const KM = (e, t) => e.depth - t.depth;
class YM {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    ip(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    ap(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(KM),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function XM(e, t) {
  const r = performance.now(),
    n = ({ timestamp: o }) => {
      const i = o - r;
      i >= t && (Vr(n), e(i - t));
    };
  return he.read(n, !0), () => Vr(n);
}
function QM(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function qM(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function ZM(e, t, r) {
  const n = yt(e) ? e : ei(e);
  return n.start(op("", n, t, r)), n.animation;
}
const N0 = ["", "X", "Y", "Z"],
  j0 = 1e3;
let JM = 0;
const zn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function BS({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: r,
  checkIsScrollRoot: n,
  resetTransform: o,
}) {
  return class {
    constructor(a = {}, s = t?.()) {
      (this.id = JM++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (zn.totalNodes =
            zn.resolvedTargetDeltas =
            zn.recalculatedProjection =
              0),
            this.nodes.forEach(rL),
            this.nodes.forEach(sL),
            this.nodes.forEach(lL),
            this.nodes.forEach(nL),
            QM(zn);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = a),
        (this.root = s ? s.root || s : this),
        (this.path = s ? [...s.path, s] : []),
        (this.parent = s),
        (this.depth = s ? s.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new YM());
    }
    addEventListener(a, s) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new sp()),
        this.eventHandlers.get(a).add(s)
      );
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = qM(a)), (this.instance = a);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(a),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        s && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(a, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = XM(f, 250)),
            ol.hasAnimatedSinceResize &&
              ((ol.hasAnimatedSinceResize = !1), this.nodes.forEach(U0));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: p,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const b =
                  this.options.transition || c.getDefaultTransition() || hL,
                { onLayoutAnimationStart: C, onLayoutAnimationComplete: g } =
                  c.getProps(),
                h = !this.targetLayout || !DS(this.targetLayout, v) || p,
                m = !f && p;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (f && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, m);
                const k = { ...wS(b, "layout"), onPlay: C, onComplete: g };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((k.delay = 0), (k.type = !1)),
                  this.startAnimation(k);
              } else
                f || U0(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Vr(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(uL),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        a && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(W0);
        return;
      }
      this.isUpdating || this.nodes.forEach(iL),
        (this.isUpdating = !1),
        this.nodes.forEach(aL),
        this.nodes.forEach(eL),
        this.nodes.forEach(tL),
        this.clearAllSnapshots();
      const s = performance.now();
      (Oe.delta = vn(0, 1e3 / 60, s - Oe.timestamp)),
        (Oe.timestamp = s),
        (Oe.isProcessing = !0),
        Oc.update.process(Oe),
        Oc.preRender.process(Oe),
        Oc.render.process(Oe),
        (Oe.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(oL), this.sharedNodes.forEach(cL);
    }
    scheduleUpdateProjection() {
      he.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      he.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const a = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Me()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s &&
        s.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          a ? a.layoutBox : void 0
        );
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === a &&
        (s = !1),
        s &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: a,
            isRoot: n(this.instance),
            offset: r(this.instance),
          });
    }
    resetTransform() {
      if (!o) return;
      const a = this.isLayoutDirty || this.shouldResetTransform,
        s = this.projectionDelta && !IS(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      a &&
        (s || An(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return (
        a && (l = this.removeTransform(l)),
        pL(l),
        {
          animationId: this.root.animationId,
          measuredBox: s,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a) return Me();
      const s = a.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (qr(s.x, l.offset.x), qr(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = Me();
      It(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            It(s, a);
            const { scroll: f } = this.root;
            f && (qr(s.x, -f.offset.x), qr(s.y, -f.offset.y));
          }
          qr(s.x, c.offset.x), qr(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = Me();
      It(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          zo(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          An(c.latestValues) && zo(l, c.latestValues);
      }
      return An(this.latestValues) && zo(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = Me();
      It(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !An(u.latestValues)) continue;
        gf(u.latestValues) && u.updateSnapshot();
        const c = Me(),
          d = u.measurePageBox();
        It(c, d),
          D0(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return An(this.latestValues) && D0(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      (this.targetDelta = a),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Oe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          a ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = Oe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1
            ? ((this.relativeParent = p),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Me()),
              (this.relativeTargetOrigin = Me()),
              Ji(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                p.layout.layoutBox
              ),
              It(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Me()), (this.targetWithTransforms = Me())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                pM(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : It(this.target, this.layout.layoutBox),
                zS(this.target, this.targetDelta))
              : It(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p &&
            !!p.resumingFrom == !!this.resumingFrom &&
            !p.options.layoutScroll &&
            p.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Me()),
                (this.relativeTargetOrigin = Me()),
                Ji(this.relativeTargetOrigin, this.target, p.target),
                It(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          zn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          gf(this.parent.latestValues) ||
          AS(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var a;
      const s = this.getLead(),
        l = !!this.resumingFrom || this !== s;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Oe.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      It(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        p = this.treeScale.y;
      kM(this.layoutCorrected, this.treeScale, this.path, l),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (s.target = s.layout.layoutBox);
      const { target: v } = s;
      if (!v) {
        this.projectionTransform &&
          ((this.projectionDelta = Ao()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Ao()),
        (this.projectionDeltaWithTransform = Ao()));
      const b = this.projectionTransform;
      Zi(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.projectionTransform = O0(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== b ||
          this.treeScale.x !== f ||
          this.treeScale.y !== p) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        zn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), a)) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = Ao();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s);
      const f = Me(),
        p = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        b = p !== v,
        C = this.getStack(),
        g = !C || C.members.length <= 1,
        h = !!(b && !g && this.options.crossfade === !0 && !this.path.some(fL));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (k) => {
        const P = k / 1e3;
        H0(d.x, a.x, P),
          H0(d.y, a.y, P),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ji(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            dL(this.relativeTarget, this.relativeTargetOrigin, f, P),
            m && HM(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = Me()),
            It(m, this.relativeTarget)),
          b &&
            ((this.animationValues = c), VM(c, u, this.latestValues, P, h, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = P);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Vr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = he.update(() => {
          (ol.hasAnimatedSinceResize = !0),
            (this.currentAnimation = ZM(0, j0, {
              ...a,
              onUpdate: (s) => {
                this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
              },
              onComplete: () => {
                a.onComplete && a.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const a = this.getStack();
      a && a.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(j0),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let {
        targetWithTransforms: s,
        target: l,
        layout: u,
        latestValues: c,
      } = a;
      if (!(!s || !l || !u)) {
        if (
          this !== a &&
          this.layout &&
          u &&
          VS(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Me();
          const d = Et(this.layout.layoutBox.x);
          (l.x.min = a.target.x.min), (l.x.max = l.x.min + d);
          const f = Et(this.layout.layoutBox.y);
          (l.y.min = a.target.y.min), (l.y.max = l.y.min + f);
        }
        It(s, l),
          zo(s, c),
          Zi(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new GM()),
        this.sharedNodes.get(a).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(s)
            : void 0,
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? (a = this.getStack()) === null || a === void 0
          ? void 0
          : a.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a) return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: a } = this.options;
      if (!a) return;
      let s = !1;
      const { latestValues: l } = a;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s))
        return;
      const u = {};
      for (let c = 0; c < N0.length; c++) {
        const d = "rotate" + N0[c];
        l[d] && ((u[d] = l[d]), a.setStaticValue(d, 0));
      }
      a.render();
      for (const c in u) a.setStaticValue(c, u[c]);
      a.scheduleRender();
    }
    getProjectionStyles(a = {}) {
      var s, l;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = nl(a.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const b = {};
        return (
          this.options.layoutId &&
            ((b.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (b.pointerEvents = nl(a.pointerEvents) || "")),
          this.hasProjected &&
            !An(this.latestValues) &&
            ((b.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          b
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = O0(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: p, y: v } = this.projectionDelta;
      (u.transformOrigin = `${p.origin * 100}% ${v.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (s = f.opacity) !== null && s !== void 0
                      ? s
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const b in Bl) {
        if (f[b] === void 0) continue;
        const { correct: C, applyTo: g } = Bl[b],
          h = u.transform === "none" ? f[b] : C(f[b], d);
        if (g) {
          const m = g.length;
          for (let k = 0; k < m; k++) u[g[k]] = h;
        } else u[b] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = d === this ? nl(a.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0
          ? void 0
          : s.stop();
      }),
        this.root.nodes.forEach(W0),
        this.root.sharedNodes.clear();
    }
  };
}
function eL(e) {
  e.updateLayout();
}
function tL(e) {
  var t;
  const r =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      a = r.source !== e.layout.source;
    i === "size"
      ? lr((d) => {
          const f = a ? r.measuredBox[d] : r.layoutBox[d],
            p = Et(f);
          (f.min = n[d].min), (f.max = f.min + p);
        })
      : VS(i, r.layoutBox, n) &&
        lr((d) => {
          const f = a ? r.measuredBox[d] : r.layoutBox[d],
            p = Et(n[d]);
          (f.max = f.min + p),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + p));
        });
    const s = Ao();
    Zi(s, n, r.layoutBox);
    const l = Ao();
    a ? Zi(l, e.applyTransform(o, !0), r.measuredBox) : Zi(l, n, r.layoutBox);
    const u = !IS(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const v = Me();
          Ji(v, r.layoutBox, f.layoutBox);
          const b = Me();
          Ji(b, n, p.layoutBox),
            DS(v, b) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = b),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: r,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function rL(e) {
  zn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function nL(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function oL(e) {
  e.clearSnapshot();
}
function W0(e) {
  e.clearMeasurements();
}
function iL(e) {
  e.isLayoutDirty = !1;
}
function aL(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function U0(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function sL(e) {
  e.resolveTargetDelta();
}
function lL(e) {
  e.calcProjection();
}
function uL(e) {
  e.resetRotation();
}
function cL(e) {
  e.removeLeadSnapshot();
}
function H0(e, t, r) {
  (e.translate = ke(t.translate, 0, r)),
    (e.scale = ke(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function G0(e, t, r, n) {
  (e.min = ke(t.min, r.min, n)), (e.max = ke(t.max, r.max, n));
}
function dL(e, t, r, n) {
  G0(e.x, t.x, r.x, n), G0(e.y, t.y, r.y, n);
}
function fL(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const hL = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  K0 = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  Y0 = K0("applewebkit/") && !K0("chrome/") ? Math.round : Ee;
function X0(e) {
  (e.min = Y0(e.min)), (e.max = Y0(e.max));
}
function pL(e) {
  X0(e.x), X0(e.y);
}
function VS(e, t, r) {
  return (
    e === "position" || (e === "preserve-aspect" && !pf(V0(t), V0(r), 0.2))
  );
}
const mL = BS({
    attachResizeListener: (e, t) => Er(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  qc = { current: void 0 },
  OS = BS({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!qc.current) {
        const e = new mL({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (qc.current = e);
      }
      return qc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  gL = {
    pan: { Feature: zM },
    drag: { Feature: AM, ProjectionNode: OS, MeasureLayout: MS },
  },
  vL = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function yL(e) {
  const t = vL.exec(e);
  if (!t) return [,];
  const [, r, n] = t;
  return [r, n];
}
function yf(e, t, r = 1) {
  const [n, o] = yL(e);
  if (!n) return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  if (i) {
    const a = i.trim();
    return kS(a) ? parseFloat(a) : a;
  } else return sf(o) ? yf(o, t, r + 1) : o;
}
function bL(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element)) return { target: t, transitionEnd: r };
  r && (r = { ...r }),
    e.values.forEach((o) => {
      const i = o.get();
      if (!sf(i)) return;
      const a = yf(i, n);
      a && o.set(a);
    });
  for (const o in t) {
    const i = t[o];
    if (!sf(i)) continue;
    const a = yf(i, n);
    a && ((t[o] = a), r || (r = {}), r[o] === void 0 && (r[o] = i));
  }
  return { target: t, transitionEnd: r };
}
const SL = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  NS = (e) => SL.has(e),
  xL = (e) => Object.keys(e).some(NS),
  Q0 = (e) => e === eo || e === N,
  q0 = (e, t) => parseFloat(e.split(", ")[t]),
  Z0 =
    (e, t) =>
    (r, { transform: n }) => {
      if (n === "none" || !n) return 0;
      const o = n.match(/^matrix3d\((.+)\)$/);
      if (o) return q0(o[1], t);
      {
        const i = n.match(/^matrix\((.+)\)$/);
        return i ? q0(i[1], e) : 0;
      }
    },
  wL = new Set(["x", "y", "z"]),
  kL = Oa.filter((e) => !wL.has(e));
function CL(e) {
  const t = [];
  return (
    kL.forEach((r) => {
      const n = e.getValue(r);
      n !== void 0 &&
        (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const ti = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Z0(4, 13),
  y: Z0(5, 14),
};
ti.translateX = ti.x;
ti.translateY = ti.y;
const _L = (e, t, r) => {
    const n = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: a } = i,
      s = {};
    a === "none" && t.setStaticValue("display", e.display || "block"),
      r.forEach((u) => {
        s[u] = ti[u](n, i);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      r.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(s[u]), (e[u] = ti[u](l, i));
      }),
      e
    );
  },
  TL = (e, t, r = {}, n = {}) => {
    (t = { ...t }), (n = { ...n });
    const o = Object.keys(t).filter(NS);
    let i = [],
      a = !1;
    const s = [];
    if (
      (o.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = r[l],
          d = wi(c);
        const f = t[l];
        let p;
        if (Ol(f)) {
          const v = f.length,
            b = f[0] === null ? 1 : 0;
          (c = f[b]), (d = wi(c));
          for (let C = b; C < v && f[C] !== null; C++)
            p ? Jh(wi(f[C]) === p) : (p = wi(f[C]));
        } else p = wi(f);
        if (d !== p)
          if (Q0(d) && Q0(p)) {
            const v = u.get();
            typeof v == "string" && u.set(parseFloat(v)),
              typeof f == "string"
                ? (t[l] = parseFloat(f))
                : Array.isArray(f) && p === N && (t[l] = f.map(parseFloat));
          } else
            d?.transform && p?.transform && (c === 0 || f === 0)
              ? c === 0
                ? u.set(p.transform(c))
                : (t[l] = d.transform(f))
              : (a || ((i = CL(e)), (a = !0)),
                s.push(l),
                (n[l] = n[l] !== void 0 ? n[l] : t[l]),
                u.jump(f));
      }),
      s.length)
    ) {
      const l = s.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = _L(t, e, s);
      return (
        i.length &&
          i.forEach(([c, d]) => {
            e.getValue(c).set(d);
          }),
        e.render(),
        $u && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: n }
      );
    } else return { target: t, transitionEnd: n };
  };
function PL(e, t, r, n) {
  return xL(t) ? TL(e, t, r, n) : { target: t, transitionEnd: n };
}
const EL = (e, t, r, n) => {
    const o = bL(e, t, n);
    return (t = o.target), (n = o.transitionEnd), PL(e, t, r, n);
  },
  bf = { current: null },
  jS = { current: !1 };
function $L() {
  if (((jS.current = !0), !!$u))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (bf.current = e.matches);
      e.addListener(t), t();
    } else bf.current = !1;
}
function AL(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const i = t[o],
      a = r[o];
    if (yt(i)) e.addValue(o, i), Ul(n) && n.add(o);
    else if (yt(a)) e.addValue(o, ei(i, { owner: e })), Ul(n) && n.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, ei(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in r) t[o] === void 0 && e.removeValue(o);
  return t;
}
const J0 = new WeakMap(),
  WS = Object.keys(Ea),
  zL = WS.length,
  ev = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  RL = Wh.length;
class ML {
  constructor(
    {
      parent: t,
      props: r,
      presenceContext: n,
      reducedMotionConfig: o,
      visualState: i,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => he.render(this.render, !1, !0));
    const { latestValues: s, renderState: l } = i;
    (this.latestValues = s),
      (this.baseTarget = { ...s }),
      (this.initialValues = r.initial ? { ...s } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = r),
      (this.presenceContext = n),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = a),
      (this.isControllingVariants = zu(r)),
      (this.isVariantNode = Pb(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && yt(f) && (f.set(s[d], !1), Ul(u) && u.add(d));
    }
  }
  scrapeMotionValuesFromProps(t, r) {
    return {};
  }
  mount(t) {
    (this.current = t),
      J0.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, n) => this.bindToMotionValue(n, r)),
      jS.current || $L(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : bf.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    J0.delete(this.current),
      this.projection && this.projection.unmount(),
      Vr(this.notifyUpdate),
      Vr(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = Jn.has(t),
      o = r.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && he.update(this.notifyUpdate, !1, !0),
          n && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = r.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...r }, n, o, i) {
    let a, s;
    for (let l = 0; l < zL; l++) {
      const u = WS[l],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: f,
          MeasureLayout: p,
        } = Ea[u];
      f && (a = f),
        c(r) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          p && (s = p));
    }
    if (!this.projection && a) {
      this.projection = new a(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: f,
        layoutRoot: p,
      } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (d && Eo(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: f,
        layoutRoot: p,
      });
    }
    return s;
  }
  updateFeatures() {
    for (const t in this.features) {
      const r = this.features[t];
      r.isMounted ? r.update() : (r.mount(), (r.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Me();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  makeTargetAnimatable(t, r = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, r);
  }
  update(t, r) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = r);
    for (let n = 0; n < ev.length; n++) {
      const o = ev[n];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    (this.prevMotionValues = AL(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const n = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (n.initial = this.props.initial), n
      );
    }
    const r = {};
    for (let n = 0; n < RL; n++) {
      const o = Wh[n],
        i = this.props[o];
      (Pa(i) || i === !1) && (r[o] = i);
    }
    return r;
  }
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return (
        r.variantChildren && r.variantChildren.add(t),
        () => r.variantChildren.delete(t)
      );
  }
  addValue(t, r) {
    r !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, r)),
      this.values.set(t, r),
      (this.latestValues[t] = r.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    r && (r(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let n = this.values.get(t);
    return (
      n === void 0 &&
        r !== void 0 &&
        ((n = ei(r, { owner: this })), this.addValue(t, n)),
      n
    );
  }
  readValue(t) {
    var r;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
        r !== void 0
      ? r
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  getBaseTarget(t) {
    var r;
    const { initial: n } = this.props,
      o =
        typeof n == "string" || typeof n == "object"
          ? (r = Zh(this.props, n)) === null || r === void 0
            ? void 0
            : r[t]
          : void 0;
    if (n && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !yt(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new sp()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class US extends ML {
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: r, ...n },
    { transformValues: o },
    i
  ) {
    let a = Q4(n, t || {}, this);
    if ((o && (r && (r = o(r)), n && (n = o(n)), a && (a = o(a))), i)) {
      Y4(this, n, a);
      const s = EL(this, n, a, r);
      (r = s.transitionEnd), (n = s.target);
    }
    return { transition: t, transitionEnd: r, ...n };
  }
}
function LL(e) {
  return window.getComputedStyle(e);
}
class FL extends US {
  readValueFromInstance(t, r) {
    if (Jn.has(r)) {
      const n = np(r);
      return (n && n.default) || 0;
    } else {
      const n = LL(t),
        o = (zb(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return RS(t, r);
  }
  build(t, r, n, o) {
    Gh(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return qh(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    yt(t) &&
      (this.childSubscription = t.on("change", (r) => {
        this.current && (this.current.textContent = `${r}`);
      }));
  }
  renderInstance(t, r, n, o) {
    Db(t, r, n, o);
  }
}
class IL extends US {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Jn.has(r)) {
      const n = np(r);
      return (n && n.default) || 0;
    }
    return (r = Bb.has(r) ? r : Qh(r)), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return Me();
  }
  scrapeMotionValuesFromProps(t, r) {
    return Ob(t, r);
  }
  build(t, r, n, o) {
    Yh(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    Vb(t, r, n, o);
  }
  mount(t) {
    (this.isSVGTag = Xh(t.tagName)), super.mount(t);
  }
}
const DL = (e, t) =>
    Hh(e)
      ? new IL(t, { enableHardwareAcceleration: !1 })
      : new FL(t, { enableHardwareAcceleration: !0 }),
  BL = { layout: { ProjectionNode: OS, MeasureLayout: MS } },
  VL = { ...cM, ...AR, ...gL, ...BL },
  OL = Vz((e, t) => vR(e, t, VL, DL));
function HS() {
  const e = w.useRef(!1);
  return (
    Nh(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function NL() {
  const e = HS(),
    [t, r] = w.useState(0),
    n = w.useCallback(() => {
      e.current && r(t + 1);
    }, [t]);
  return [w.useCallback(() => he.postRender(n), [n]), t];
}
class jL extends w.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const n = this.props.sizeRef.current;
      (n.height = r.offsetHeight || 0),
        (n.width = r.offsetWidth || 0),
        (n.top = r.offsetTop),
        (n.left = r.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function WL({ children: e, isPresent: t }) {
  const r = w.useId(),
    n = w.useRef(null),
    o = w.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    w.useInsertionEffect(() => {
      const { width: i, height: a, top: s, left: l } = o.current;
      if (t || !n.current || !i || !a) return;
      n.current.dataset.motionPopId = r;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    w.createElement(
      jL,
      { isPresent: t, childRef: n, sizeRef: o },
      w.cloneElement(e, { ref: n })
    )
  );
}
const Zc = ({
  children: e,
  initial: t,
  isPresent: r,
  onExitComplete: n,
  custom: o,
  presenceAffectsLayout: i,
  mode: a,
}) => {
  const s = Nb(UL),
    l = w.useId(),
    u = w.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: r,
        custom: o,
        onExitComplete: (c) => {
          s.set(c, !0);
          for (const d of s.values()) if (!d) return;
          n && n();
        },
        register: (c) => (s.set(c, !1), () => s.delete(c)),
      }),
      i ? void 0 : [r]
    );
  return (
    w.useMemo(() => {
      s.forEach((c, d) => s.set(d, !1));
    }, [r]),
    w.useEffect(() => {
      !r && !s.size && n && n();
    }, [r]),
    a === "popLayout" && (e = w.createElement(WL, { isPresent: r }, e)),
    w.createElement(Va.Provider, { value: u }, e)
  );
};
function UL() {
  return new Map();
}
function HL(e) {
  return w.useEffect(() => () => e(), []);
}
const lo = (e) => e.key || "";
function GL(e, t) {
  e.forEach((r) => {
    const n = lo(r);
    t.set(n, r);
  });
}
function KL(e) {
  const t = [];
  return (
    w.Children.forEach(e, (r) => {
      w.isValidElement(r) && t.push(r);
    }),
    t
  );
}
const YL = ({
  children: e,
  custom: t,
  initial: r = !0,
  onExitComplete: n,
  exitBeforeEnter: o,
  presenceAffectsLayout: i = !0,
  mode: a = "sync",
}) => {
  const s = w.useContext(Uh).forceRender || NL()[0],
    l = HS(),
    u = KL(e);
  let c = u;
  const d = w.useRef(new Map()).current,
    f = w.useRef(c),
    p = w.useRef(new Map()).current,
    v = w.useRef(!0);
  if (
    (Nh(() => {
      (v.current = !1), GL(u, p), (f.current = c);
    }),
    HL(() => {
      (v.current = !0), p.clear(), d.clear();
    }),
    v.current)
  )
    return w.createElement(
      w.Fragment,
      null,
      c.map((h) =>
        w.createElement(
          Zc,
          {
            key: lo(h),
            isPresent: !0,
            initial: r ? void 0 : !1,
            presenceAffectsLayout: i,
            mode: a,
          },
          h
        )
      )
    );
  c = [...c];
  const b = f.current.map(lo),
    C = u.map(lo),
    g = b.length;
  for (let h = 0; h < g; h++) {
    const m = b[h];
    C.indexOf(m) === -1 && !d.has(m) && d.set(m, void 0);
  }
  return (
    a === "wait" && d.size && (c = []),
    d.forEach((h, m) => {
      if (C.indexOf(m) !== -1) return;
      const k = p.get(m);
      if (!k) return;
      const P = b.indexOf(m);
      let A = h;
      if (!A) {
        const T = () => {
          p.delete(m), d.delete(m);
          const $ = f.current.findIndex((F) => F.key === m);
          if ((f.current.splice($, 1), !d.size)) {
            if (((f.current = u), l.current === !1)) return;
            s(), n && n();
          }
        };
        (A = w.createElement(
          Zc,
          {
            key: lo(k),
            isPresent: !1,
            onExitComplete: T,
            custom: t,
            presenceAffectsLayout: i,
            mode: a,
          },
          k
        )),
          d.set(m, A);
      }
      c.splice(P, 0, A);
    }),
    (c = c.map((h) => {
      const m = h.key;
      return d.has(m)
        ? h
        : w.createElement(
            Zc,
            { key: lo(h), isPresent: !0, presenceAffectsLayout: i, mode: a },
            h
          );
    })),
    w.createElement(
      w.Fragment,
      null,
      d.size ? c : c.map((h) => w.cloneElement(h))
    )
  );
};
var XL = {
    initial: (e) => {
      const { position: t } = e,
        r = ["top", "bottom"].includes(t) ? "y" : "x";
      let n = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
      return t === "bottom" && (n = 1), { opacity: 0, [r]: n * 24 };
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
    },
  },
  GS = w.memo((e) => {
    const {
        id: t,
        message: r,
        onCloseComplete: n,
        onRequestRemove: o,
        requestClose: i = !1,
        position: a = "bottom",
        duration: s = 5e3,
        containerStyle: l,
        motionVariants: u = XL,
        toastSpacing: c = "0.5rem",
      } = e,
      [d, f] = w.useState(s),
      p = MM();
    af(() => {
      p || n?.();
    }, [p]),
      af(() => {
        f(s);
      }, [s]);
    const v = () => f(null),
      b = () => f(s),
      C = () => {
        p && o();
      };
    w.useEffect(() => {
      p && i && o();
    }, [p, i, o]),
      Az(C, d);
    const g = w.useMemo(
        () => ({
          pointerEvents: "auto",
          maxWidth: 560,
          minWidth: 300,
          margin: c,
          ...l,
        }),
        [l, c]
      ),
      h = w.useMemo(() => Ez(a), [a]);
    return E(OL.div, {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: v,
      onHoverEnd: b,
      custom: { position: a },
      style: h,
      children: E(Y.div, {
        role: "status",
        "aria-atomic": "true",
        className: "chakra-toast__inner",
        __css: g,
        children: nn(r, { id: t, onClose: C }),
      }),
    });
  });
GS.displayName = "ToastComponent";
var tv = {
    path: je("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      children: [
        E("path", {
          strokeLinecap: "round",
          fill: "none",
          d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25",
        }),
        E("path", {
          fill: "currentColor",
          strokeLinecap: "round",
          d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0",
        }),
        E("circle", {
          fill: "none",
          strokeMiterlimit: "10",
          cx: "12",
          cy: "12",
          r: "11.25",
        }),
      ],
    }),
    viewBox: "0 0 24 24",
  },
  ai = ce((e, t) => {
    const {
        as: r,
        viewBox: n,
        color: o = "currentColor",
        focusable: i = !1,
        children: a,
        className: s,
        __css: l,
        ...u
      } = e,
      c = He("chakra-icon", s),
      d = Zn("Icon", e),
      f = {
        w: "1em",
        h: "1em",
        display: "inline-block",
        lineHeight: "1em",
        flexShrink: 0,
        color: o,
        ...l,
        ...d,
      },
      p = { ref: t, focusable: i, className: c, __css: f },
      v = n ?? tv.viewBox;
    if (r && typeof r != "string") return E(Y.svg, { as: r, ...p, ...u });
    const b = a ?? tv.path;
    return E(Y.svg, {
      verticalAlign: "middle",
      viewBox: v,
      ...p,
      ...u,
      children: b,
    });
  });
ai.displayName = "Icon";
function QL(e) {
  return E(ai, {
    viewBox: "0 0 24 24",
    ...e,
    children: E("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
    }),
  });
}
function qL(e) {
  return E(ai, {
    viewBox: "0 0 24 24",
    ...e,
    children: E("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z",
    }),
  });
}
function rv(e) {
  return E(ai, {
    viewBox: "0 0 24 24",
    ...e,
    children: E("path", {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
    }),
  });
}
var ZL = O_({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  }),
  lp = ce((e, t) => {
    const r = Zn("Spinner", e),
      {
        label: n = "Loading...",
        thickness: o = "2px",
        speed: i = "0.45s",
        emptyColor: a = "transparent",
        className: s,
        ...l
      } = rr(e),
      u = He("chakra-spinner", s),
      c = {
        display: "inline-block",
        borderColor: "currentColor",
        borderStyle: "solid",
        borderRadius: "99999px",
        borderWidth: o,
        borderBottomColor: a,
        borderLeftColor: a,
        animation: `${ZL} ${i} linear infinite`,
        ...r,
      };
    return E(Y.div, {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: n && E(Y.span, { srOnly: !0, children: n }),
    });
  });
lp.displayName = "Spinner";
var [JL, up] = jr({
    name: "AlertContext",
    hookName: "useAlertContext",
    providerName: "<Alert />",
  }),
  [eF, cp] = jr({
    name: "AlertStylesContext",
    hookName: "useAlertStyles",
    providerName: "<Alert />",
  }),
  KS = {
    info: { icon: qL, colorScheme: "blue" },
    warning: { icon: rv, colorScheme: "orange" },
    success: { icon: QL, colorScheme: "green" },
    error: { icon: rv, colorScheme: "red" },
    loading: { icon: lp, colorScheme: "blue" },
  };
function tF(e) {
  return KS[e].colorScheme;
}
function rF(e) {
  return KS[e].icon;
}
var YS = ce(function (t, r) {
  const n = cp(),
    { status: o } = up(),
    i = { display: "inline", ...n.description };
  return E(Y.div, {
    ref: r,
    "data-status": o,
    ...t,
    className: He("chakra-alert__desc", t.className),
    __css: i,
  });
});
YS.displayName = "AlertDescription";
function XS(e) {
  const { status: t } = up(),
    r = rF(t),
    n = cp(),
    o = t === "loading" ? n.spinner : n.icon;
  return E(Y.span, {
    display: "inherit",
    "data-status": t,
    ...e,
    className: He("chakra-alert__icon", e.className),
    __css: o,
    children: e.children || E(r, { h: "100%", w: "100%" }),
  });
}
XS.displayName = "AlertIcon";
var QS = ce(function (t, r) {
  const n = cp(),
    { status: o } = up();
  return E(Y.div, {
    ref: r,
    "data-status": o,
    ...t,
    className: He("chakra-alert__title", t.className),
    __css: n.title,
  });
});
QS.displayName = "AlertTitle";
var qS = ce(function (t, r) {
  var n;
  const { status: o = "info", addRole: i = !0, ...a } = rr(t),
    s = (n = t.colorScheme) != null ? n : tF(o),
    l = Ba("Alert", { ...t, colorScheme: s }),
    u = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      ...l.container,
    };
  return E(JL, {
    value: { status: o },
    children: E(eF, {
      value: l,
      children: E(Y.div, {
        "data-status": o,
        role: i ? "alert" : void 0,
        ref: r,
        ...a,
        className: He("chakra-alert", t.className),
        __css: u,
      }),
    }),
  });
});
qS.displayName = "Alert";
function nF(e) {
  return E(ai, {
    focusable: "false",
    "aria-hidden": !0,
    ...e,
    children: E("path", {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
    }),
  });
}
var ZS = ce(function (t, r) {
  const n = Zn("CloseButton", t),
    { children: o, isDisabled: i, __css: a, ...s } = rr(t),
    l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    };
  return E(Y.button, {
    type: "button",
    "aria-label": "Close",
    ref: r,
    disabled: i,
    __css: { ...l, ...n, ...a },
    ...s,
    children: o || E(nF, { width: "1em", height: "1em" }),
  });
});
ZS.displayName = "CloseButton";
var oF = {
    top: [],
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    bottom: [],
    "bottom-right": [],
  },
  ea = iF(oF);
function iF(e) {
  let t = e;
  const r = new Set(),
    n = (o) => {
      (t = o(t)), r.forEach((i) => i());
    };
  return {
    getState: () => t,
    subscribe: (o) => (
      r.add(o),
      () => {
        n(() => e), r.delete(o);
      }
    ),
    removeToast: (o, i) => {
      n((a) => ({ ...a, [i]: a[i].filter((s) => s.id != o) }));
    },
    notify: (o, i) => {
      const a = aF(o, i),
        { position: s, id: l } = a;
      return (
        n((u) => {
          var c, d;
          const p = s.includes("top")
            ? [a, ...((c = u[s]) != null ? c : [])]
            : [...((d = u[s]) != null ? d : []), a];
          return { ...u, [s]: p };
        }),
        l
      );
    },
    update: (o, i) => {
      o &&
        n((a) => {
          const s = { ...a },
            { position: l, index: u } = Qg(s, o);
          return (
            l && u !== -1 && (s[l][u] = { ...s[l][u], ...i, message: lF(i) }), s
          );
        });
    },
    closeAll: ({ positions: o } = {}) => {
      n((i) =>
        (
          o ?? [
            "bottom",
            "bottom-right",
            "bottom-left",
            "top",
            "top-left",
            "top-right",
          ]
        ).reduce(
          (l, u) => ((l[u] = i[u].map((c) => ({ ...c, requestClose: !0 }))), l),
          { ...i }
        )
      );
    },
    close: (o) => {
      n((i) => {
        const a = Cb(i, o);
        return a
          ? {
              ...i,
              [a]: i[a].map((s) =>
                s.id == o ? { ...s, requestClose: !0 } : s
              ),
            }
          : i;
      });
    },
    isActive: (o) => !!Qg(ea.getState(), o).position,
  };
}
var nv = 0;
function aF(e, t = {}) {
  var r, n;
  nv += 1;
  const o = (r = t.id) != null ? r : nv,
    i = (n = t.position) != null ? n : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => ea.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle,
  };
}
var sF = (e) => {
  const {
      status: t,
      variant: r = "solid",
      id: n,
      title: o,
      isClosable: i,
      onClose: a,
      description: s,
      colorScheme: l,
      icon: u,
    } = e,
    c = n
      ? {
          root: `toast-${n}`,
          title: `toast-${n}-title`,
          description: `toast-${n}-description`,
        }
      : void 0;
  return je(qS, {
    addRole: !1,
    status: t,
    variant: r,
    id: c?.root,
    alignItems: "start",
    borderRadius: "md",
    boxShadow: "lg",
    paddingEnd: 8,
    textAlign: "start",
    width: "auto",
    colorScheme: l,
    children: [
      E(XS, { children: u }),
      je(Y.div, {
        flex: "1",
        maxWidth: "100%",
        children: [
          o && E(QS, { id: c?.title, children: o }),
          s && E(YS, { id: c?.description, display: "block", children: s }),
        ],
      }),
      i &&
        E(ZS, {
          size: "sm",
          onClick: a,
          position: "absolute",
          insetEnd: 1,
          top: 1,
        }),
    ],
  });
};
function lF(e = {}) {
  const { render: t, toastComponent: r = sF } = e;
  return (o) =>
    typeof t == "function" ? t({ ...o, ...e }) : E(r, { ...o, ...e });
}
var [uF, gI] = jr({ name: "ToastOptionsContext", strict: !1 }),
  cF = (e) => {
    const t = w.useSyncExternalStore(ea.subscribe, ea.getState, ea.getState),
      { motionVariants: r, component: n = GS, portalProps: o } = e,
      a = Object.keys(t).map((s) => {
        const l = t[s];
        return E(
          "div",
          {
            role: "region",
            "aria-live": "polite",
            "aria-label": "Notifications",
            id: `chakra-toast-manager-${s}`,
            style: $z(s),
            children: E(YL, {
              initial: !1,
              children: l.map((u) => E(n, { motionVariants: r, ...u }, u.id)),
            }),
          },
          s
        );
      });
    return E(wu, { ...o, children: a });
  },
  dF = (e) =>
    function ({ children: r, theme: n = e, toastOptions: o, ...i }) {
      return je(Tz, {
        theme: n,
        ...i,
        children: [
          E(uF, { value: o?.defaultOptions, children: r }),
          E(cF, { ...o }),
        ],
      });
    },
  fF = dF(pb);
function hF(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function Aa(...e) {
  return (t) => {
    e.forEach((r) => {
      hF(r, t);
    });
  };
}
function pF(...e) {
  return w.useMemo(() => Aa(...e), e);
}
var Sf = ce(function (t, r) {
  const { htmlWidth: n, htmlHeight: o, alt: i, ...a } = t;
  return E("img", { width: n, height: o, ref: r, alt: i, ...a });
});
Sf.displayName = "NativeImage";
function mF(e) {
  const {
      loading: t,
      src: r,
      srcSet: n,
      onLoad: o,
      onError: i,
      crossOrigin: a,
      sizes: s,
      ignoreFallback: l,
    } = e,
    [u, c] = w.useState("pending");
  w.useEffect(() => {
    c(r ? "loading" : "pending");
  }, [r]);
  const d = w.useRef(),
    f = w.useCallback(() => {
      if (!r) return;
      p();
      const v = new Image();
      (v.src = r),
        a && (v.crossOrigin = a),
        n && (v.srcset = n),
        s && (v.sizes = s),
        t && (v.loading = t),
        (v.onload = (b) => {
          p(), c("loaded"), o?.(b);
        }),
        (v.onerror = (b) => {
          p(), c("failed"), i?.(b);
        }),
        (d.current = v);
    }, [r, a, n, s, o, i, t]),
    p = () => {
      d.current &&
        ((d.current.onload = null),
        (d.current.onerror = null),
        (d.current = null));
    };
  return (
    Ar(() => {
      if (!l)
        return (
          u === "loading" && f(),
          () => {
            p();
          }
        );
    }, [u, f, l]),
    l ? "loaded" : u
  );
}
var gF = (e, t) =>
  (e !== "loaded" && t === "beforeLoadOrError") ||
  (e === "failed" && t === "onError");
function vF(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t) n in r && delete r[n];
  return r;
}
var dp = ce(function (t, r) {
  const {
      fallbackSrc: n,
      fallback: o,
      src: i,
      srcSet: a,
      align: s,
      fit: l,
      loading: u,
      ignoreFallback: c,
      crossOrigin: d,
      fallbackStrategy: f = "beforeLoadOrError",
      referrerPolicy: p,
      ...v
    } = t,
    b = n !== void 0 || o !== void 0,
    C = u != null || c || !b,
    g = mF({ ...t, crossOrigin: d, ignoreFallback: C }),
    h = gF(g, f),
    m = {
      ref: r,
      objectFit: l,
      objectPosition: s,
      ...(C ? v : vF(v, ["onError", "onLoad"])),
    };
  return h
    ? o ||
        E(Y.img, {
          as: Sf,
          className: "chakra-image__placeholder",
          src: n,
          ...m,
        })
    : E(Y.img, {
        as: Sf,
        src: i,
        srcSet: a,
        crossOrigin: d,
        loading: u,
        referrerPolicy: p,
        className: "chakra-image",
        ...m,
      });
});
dp.displayName = "Image";
function JS(e) {
  return w.Children.toArray(e).filter((t) => w.isValidElement(t));
}
var [vI, yF] = jr({ strict: !1, name: "ButtonGroupContext" });
function bF(e) {
  const [t, r] = w.useState(!e);
  return {
    ref: w.useCallback((i) => {
      i && r(i.tagName === "BUTTON");
    }, []),
    type: t ? "button" : void 0,
  };
}
function xf(e) {
  const { children: t, className: r, ...n } = e,
    o = w.isValidElement(t)
      ? w.cloneElement(t, { "aria-hidden": !0, focusable: !1 })
      : t,
    i = He("chakra-button__icon", r);
  return E(Y.span, {
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
    ...n,
    className: i,
    children: o,
  });
}
xf.displayName = "ButtonIcon";
function wf(e) {
  const {
      label: t,
      placement: r,
      spacing: n = "0.5rem",
      children: o = E(lp, {
        color: "currentColor",
        width: "1em",
        height: "1em",
      }),
      className: i,
      __css: a,
      ...s
    } = e,
    l = He("chakra-button__spinner", i),
    u = r === "start" ? "marginEnd" : "marginStart",
    c = w.useMemo(
      () => ({
        display: "flex",
        alignItems: "center",
        position: t ? "relative" : "absolute",
        [u]: t ? n : 0,
        fontSize: "1em",
        lineHeight: "normal",
        ...a,
      }),
      [a, t, u, n]
    );
  return E(Y.div, { className: l, ...s, __css: c, children: o });
}
wf.displayName = "ButtonSpinner";
var ex = ce((e, t) => {
  const r = yF(),
    n = Zn("Button", { ...r, ...e }),
    {
      isDisabled: o = r?.isDisabled,
      isLoading: i,
      isActive: a,
      children: s,
      leftIcon: l,
      rightIcon: u,
      loadingText: c,
      iconSpacing: d = "0.5rem",
      type: f,
      spinner: p,
      spinnerPlacement: v = "start",
      className: b,
      as: C,
      ...g
    } = rr(e),
    h = w.useMemo(() => {
      const A = { ...n?._focus, zIndex: 1 };
      return {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        position: "relative",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        outline: "none",
        ...n,
        ...(!!r && { _focus: A }),
      };
    }, [n, r]),
    { ref: m, type: k } = bF(C),
    P = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return je(Y.button, {
    ref: pF(t, m),
    as: C,
    type: f ?? k,
    "data-active": re(a),
    "data-loading": re(i),
    __css: h,
    className: He("chakra-button", b),
    ...g,
    disabled: o || i,
    children: [
      i &&
        v === "start" &&
        E(wf, {
          className: "chakra-button__spinner--start",
          label: c,
          placement: "start",
          spacing: d,
          children: p,
        }),
      i
        ? c || E(Y.span, { opacity: 0, children: E(ov, { ...P }) })
        : E(ov, { ...P }),
      i &&
        v === "end" &&
        E(wf, {
          className: "chakra-button__spinner--end",
          label: c,
          placement: "end",
          spacing: d,
          children: p,
        }),
    ],
  });
});
ex.displayName = "Button";
function ov(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e;
  return je(ta, {
    children: [
      t && E(xf, { marginEnd: o, children: t }),
      n,
      r && E(xf, { marginStart: o, children: r }),
    ],
  });
}
var [SF, xF] = kz("Card"),
  wF = ce(function (t, r) {
    const { className: n, ...o } = t,
      i = xF();
    return E(Y.div, {
      ref: r,
      className: He("chakra-card__body", n),
      __css: i.body,
      ...o,
    });
  }),
  kF = ce(function (t, r) {
    const {
        className: n,
        children: o,
        direction: i = "column",
        justify: a,
        align: s,
        ...l
      } = rr(t),
      u = Ba("Card", t);
    return E(Y.div, {
      ref: r,
      className: He("chakra-card", n),
      __css: {
        display: "flex",
        flexDirection: i,
        justifyContent: a,
        alignItems: s,
        position: "relative",
        minWidth: 0,
        wordWrap: "break-word",
        ...u.container,
      },
      ...l,
      children: E(SF, { value: u, children: o }),
    });
  }),
  [CF, _F] = jr({
    name: "FormControlStylesContext",
    errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `,
  }),
  [TF, tx] = jr({ strict: !1, name: "FormControlContext" });
function PF(e) {
  const {
      id: t,
      isRequired: r,
      isInvalid: n,
      isDisabled: o,
      isReadOnly: i,
      ...a
    } = e,
    s = w.useId(),
    l = t || `field-${s}`,
    u = `${l}-label`,
    c = `${l}-feedback`,
    d = `${l}-helptext`,
    [f, p] = w.useState(!1),
    [v, b] = w.useState(!1),
    [C, g] = w.useState(!1),
    h = w.useCallback(
      (T = {}, $ = null) => ({
        id: d,
        ...T,
        ref: Aa($, (F) => {
          F && b(!0);
        }),
      }),
      [d]
    ),
    m = w.useCallback(
      (T = {}, $ = null) => ({
        ...T,
        ref: $,
        "data-focus": re(C),
        "data-disabled": re(o),
        "data-invalid": re(n),
        "data-readonly": re(i),
        id: T.id !== void 0 ? T.id : u,
        htmlFor: T.htmlFor !== void 0 ? T.htmlFor : l,
      }),
      [l, o, C, n, i, u]
    ),
    k = w.useCallback(
      (T = {}, $ = null) => ({
        id: c,
        ...T,
        ref: Aa($, (F) => {
          F && p(!0);
        }),
        "aria-live": "polite",
      }),
      [c]
    ),
    P = w.useCallback(
      (T = {}, $ = null) => ({ ...T, ...a, ref: $, role: "group" }),
      [a]
    ),
    A = w.useCallback(
      (T = {}, $ = null) => ({
        ...T,
        ref: $,
        role: "presentation",
        "aria-hidden": !0,
        children: T.children || "*",
      }),
      []
    );
  return {
    isRequired: !!r,
    isInvalid: !!n,
    isReadOnly: !!i,
    isDisabled: !!o,
    isFocused: !!C,
    onFocus: () => g(!0),
    onBlur: () => g(!1),
    hasFeedbackText: f,
    setHasFeedbackText: p,
    hasHelpText: v,
    setHasHelpText: b,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: h,
    getErrorMessageProps: k,
    getRootProps: P,
    getLabelProps: m,
    getRequiredIndicatorProps: A,
  };
}
var EF = ce(function (t, r) {
  const n = Ba("Form", t),
    o = rr(t),
    { getRootProps: i, htmlProps: a, ...s } = PF(o),
    l = He("chakra-form-control", t.className);
  return E(TF, {
    value: s,
    children: E(CF, {
      value: n,
      children: E(Y.div, { ...i({}, r), className: l, __css: n.container }),
    }),
  });
});
EF.displayName = "FormControl";
var $F = ce(function (t, r) {
  const n = tx(),
    o = _F(),
    i = He("chakra-form__helper-text", t.className);
  return E(Y.div, {
    ...n?.getHelpTextProps(t, r),
    __css: o.helperText,
    className: i,
  });
});
$F.displayName = "FormHelperText";
function AF(e) {
  var t, r, n;
  const o = tx(),
    {
      id: i,
      disabled: a,
      readOnly: s,
      required: l,
      isRequired: u,
      isInvalid: c,
      isReadOnly: d,
      isDisabled: f,
      onFocus: p,
      onBlur: v,
      ...b
    } = e,
    C = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return (
    o?.hasFeedbackText && o?.isInvalid && C.push(o.feedbackId),
    o?.hasHelpText && C.push(o.helpTextId),
    {
      ...b,
      "aria-describedby": C.join(" ") || void 0,
      id: i ?? o?.id,
      isDisabled: (t = a ?? f) != null ? t : o?.isDisabled,
      isReadOnly: (r = s ?? d) != null ? r : o?.isReadOnly,
      isRequired: (n = l ?? u) != null ? n : o?.isRequired,
      isInvalid: c ?? o?.isInvalid,
      onFocus: xt(o?.onFocus, p),
      onBlur: xt(o?.onBlur, v),
    }
  );
}
var zF = {
    border: "0",
    clip: "rect(0, 0, 0, 0)",
    height: "1px",
    width: "1px",
    margin: "-1px",
    padding: "0",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  RF = () => typeof document < "u",
  iv = !1,
  Ua = null,
  Xn = !1,
  kf = !1,
  Cf = new Set();
function fp(e, t) {
  Cf.forEach((r) => r(e, t));
}
var MF =
  typeof window < "u" && window.navigator != null
    ? /^Mac/.test(window.navigator.platform)
    : !1;
function LF(e) {
  return !(
    e.metaKey ||
    (!MF && e.altKey) ||
    e.ctrlKey ||
    e.key === "Control" ||
    e.key === "Shift" ||
    e.key === "Meta"
  );
}
function av(e) {
  (Xn = !0), LF(e) && ((Ua = "keyboard"), fp("keyboard", e));
}
function so(e) {
  if (((Ua = "pointer"), e.type === "mousedown" || e.type === "pointerdown")) {
    Xn = !0;
    const t = e.composedPath ? e.composedPath()[0] : e.target;
    let r = !1;
    try {
      r = t.matches(":focus-visible");
    } catch {}
    if (r) return;
    fp("pointer", e);
  }
}
function FF(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : e.detail === 0 && !e.pointerType;
}
function IF(e) {
  FF(e) && ((Xn = !0), (Ua = "virtual"));
}
function DF(e) {
  e.target === window ||
    e.target === document ||
    (!Xn && !kf && ((Ua = "virtual"), fp("virtual", e)), (Xn = !1), (kf = !1));
}
function BF() {
  (Xn = !1), (kf = !0);
}
function sv() {
  return Ua !== "pointer";
}
function VF() {
  if (!RF() || iv) return;
  const { focus: e } = HTMLElement.prototype;
  (HTMLElement.prototype.focus = function (...r) {
    (Xn = !0), e.apply(this, r);
  }),
    document.addEventListener("keydown", av, !0),
    document.addEventListener("keyup", av, !0),
    document.addEventListener("click", IF, !0),
    window.addEventListener("focus", DF, !0),
    window.addEventListener("blur", BF, !1),
    typeof PointerEvent < "u"
      ? (document.addEventListener("pointerdown", so, !0),
        document.addEventListener("pointermove", so, !0),
        document.addEventListener("pointerup", so, !0))
      : (document.addEventListener("mousedown", so, !0),
        document.addEventListener("mousemove", so, !0),
        document.addEventListener("mouseup", so, !0)),
    (iv = !0);
}
function OF(e) {
  VF(), e(sv());
  const t = () => e(sv());
  return (
    Cf.add(t),
    () => {
      Cf.delete(t);
    }
  );
}
function NF(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t) n in r && delete r[n];
  return r;
}
function jF(e = {}) {
  const t = AF(e),
    {
      isDisabled: r,
      isReadOnly: n,
      isRequired: o,
      isInvalid: i,
      id: a,
      onBlur: s,
      onFocus: l,
      "aria-describedby": u,
    } = t,
    {
      defaultChecked: c,
      isChecked: d,
      isFocusable: f,
      onChange: p,
      isIndeterminate: v,
      name: b,
      value: C,
      tabIndex: g = void 0,
      "aria-label": h,
      "aria-labelledby": m,
      "aria-invalid": k,
      ...P
    } = e,
    A = NF(P, [
      "isDisabled",
      "isReadOnly",
      "isRequired",
      "isInvalid",
      "id",
      "onBlur",
      "onFocus",
      "aria-describedby",
    ]),
    T = rl(p),
    $ = rl(s),
    F = rl(l),
    [I, le] = w.useState(!1),
    [me, $e] = w.useState(!1),
    [oe, de] = w.useState(!1),
    [Re, Ie] = w.useState(!1);
  w.useEffect(() => OF(le), []);
  const R = w.useRef(null),
    [V, j] = w.useState(!0),
    [O, q] = w.useState(!!c),
    W = d !== void 0,
    se = W ? d : O,
    Gt = w.useCallback(
      (U) => {
        if (n || r) {
          U.preventDefault();
          return;
        }
        W || q(se ? U.target.checked : v ? !0 : U.target.checked), T?.(U);
      },
      [n, r, se, W, v, T]
    );
  Ar(() => {
    R.current && (R.current.indeterminate = !!v);
  }, [v]),
    af(() => {
      r && $e(!1);
    }, [r, $e]),
    Ar(() => {
      const U = R.current;
      if (!U?.form) return;
      const ct = () => {
        q(!!c);
      };
      return (
        U.form.addEventListener("reset", ct),
        () => {
          var Mt;
          return (Mt = U.form) == null
            ? void 0
            : Mt.removeEventListener("reset", ct);
        }
      );
    }, []);
  const Te = r && !f,
    bt = w.useCallback(
      (U) => {
        U.key === " " && Ie(!0);
      },
      [Ie]
    ),
    nr = w.useCallback(
      (U) => {
        U.key === " " && Ie(!1);
      },
      [Ie]
    );
  Ar(() => {
    if (!R.current) return;
    R.current.checked !== se && q(R.current.checked);
  }, [R.current]);
  const Wr = w.useCallback(
      (U = {}, ct = null) => {
        const Mt = (ro) => {
          me && ro.preventDefault(), Ie(!0);
        };
        return {
          ...U,
          ref: ct,
          "data-active": re(Re),
          "data-hover": re(oe),
          "data-checked": re(se),
          "data-focus": re(me),
          "data-focus-visible": re(me && I),
          "data-indeterminate": re(v),
          "data-disabled": re(r),
          "data-invalid": re(i),
          "data-readonly": re(n),
          "aria-hidden": !0,
          onMouseDown: xt(U.onMouseDown, Mt),
          onMouseUp: xt(U.onMouseUp, () => Ie(!1)),
          onMouseEnter: xt(U.onMouseEnter, () => de(!0)),
          onMouseLeave: xt(U.onMouseLeave, () => de(!1)),
        };
      },
      [Re, se, r, me, I, oe, v, i, n]
    ),
    or = w.useCallback(
      (U = {}, ct = null) => ({
        ...U,
        ref: ct,
        "data-active": re(Re),
        "data-hover": re(oe),
        "data-checked": re(se),
        "data-focus": re(me),
        "data-focus-visible": re(me && I),
        "data-indeterminate": re(v),
        "data-disabled": re(r),
        "data-invalid": re(i),
        "data-readonly": re(n),
      }),
      [Re, se, r, me, I, oe, v, i, n]
    ),
    Rt = w.useCallback(
      (U = {}, ct = null) => ({
        ...A,
        ...U,
        ref: Aa(ct, (Mt) => {
          Mt && j(Mt.tagName === "LABEL");
        }),
        onClick: xt(U.onClick, () => {
          var Mt;
          V ||
            ((Mt = R.current) == null || Mt.click(),
            requestAnimationFrame(() => {
              var ro;
              (ro = R.current) == null || ro.focus({ preventScroll: !0 });
            }));
        }),
        "data-disabled": re(r),
        "data-checked": re(se),
        "data-invalid": re(i),
      }),
      [A, r, se, i, V]
    ),
    kn = w.useCallback(
      (U = {}, ct = null) => ({
        ...U,
        ref: Aa(R, ct),
        type: "checkbox",
        name: b,
        value: C,
        id: a,
        tabIndex: g,
        onChange: xt(U.onChange, Gt),
        onBlur: xt(U.onBlur, $, () => $e(!1)),
        onFocus: xt(U.onFocus, F, () => $e(!0)),
        onKeyDown: xt(U.onKeyDown, bt),
        onKeyUp: xt(U.onKeyUp, nr),
        required: o,
        checked: se,
        disabled: Te,
        readOnly: n,
        "aria-label": h,
        "aria-labelledby": m,
        "aria-invalid": k ? !!k : i,
        "aria-describedby": u,
        "aria-disabled": r,
        style: zF,
      }),
      [b, C, a, Gt, $, F, bt, nr, o, se, Te, n, h, m, k, i, u, r, g]
    ),
    to = w.useCallback(
      (U = {}, ct = null) => ({
        ...U,
        ref: ct,
        onMouseDown: xt(U.onMouseDown, WF),
        "data-disabled": re(r),
        "data-checked": re(se),
        "data-invalid": re(i),
      }),
      [se, r, i]
    );
  return {
    state: {
      isInvalid: i,
      isFocused: me,
      isChecked: se,
      isActive: Re,
      isHovered: oe,
      isIndeterminate: v,
      isDisabled: r,
      isReadOnly: n,
      isRequired: o,
    },
    getRootProps: Rt,
    getCheckboxProps: Wr,
    getIndicatorProps: or,
    getInputProps: kn,
    getLabelProps: to,
    htmlProps: A,
  };
}
function WF(e) {
  e.preventDefault(), e.stopPropagation();
}
var rx = ce(function (t, r) {
  const n = Zn("Link", t),
    { className: o, isExternal: i, ...a } = rr(t);
  return E(Y.a, {
    target: i ? "_blank" : void 0,
    rel: i ? "noopener" : void 0,
    ref: r,
    className: He("chakra-link", o),
    ...a,
    __css: n,
  });
});
rx.displayName = "Link";
var [UF, nx] = jr({
    name: "ListStylesContext",
    errorMessage: `useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `,
  }),
  Fu = ce(function (t, r) {
    const n = Ba("List", t),
      {
        children: o,
        styleType: i = "none",
        stylePosition: a,
        spacing: s,
        ...l
      } = rr(t),
      u = JS(o),
      d = s ? { ["& > *:not(style) ~ *:not(style)"]: { mt: s } } : {};
    return E(UF, {
      value: n,
      children: E(Y.ul, {
        ref: r,
        listStyleType: i,
        listStylePosition: a,
        role: "list",
        __css: { ...n.container, ...d },
        ...l,
        children: u,
      }),
    });
  });
Fu.displayName = "List";
var HF = ce((e, t) => {
  const { as: r, ...n } = e;
  return E(Fu, {
    ref: t,
    as: "ol",
    styleType: "decimal",
    marginStart: "1em",
    ...n,
  });
});
HF.displayName = "OrderedList";
var GF = ce(function (t, r) {
  const { as: n, ...o } = t;
  return E(Fu, {
    ref: r,
    as: "ul",
    styleType: "initial",
    marginStart: "1em",
    ...o,
  });
});
GF.displayName = "UnorderedList";
var ox = ce(function (t, r) {
  const n = nx();
  return E(Y.li, { ref: r, ...t, __css: n.item });
});
ox.displayName = "ListItem";
var KF = ce(function (t, r) {
  const n = nx();
  return E(ai, { ref: r, role: "presentation", ...t, __css: n.icon });
});
KF.displayName = "ListIcon";
var hp = ce(function (t, r) {
  const {
      templateAreas: n,
      gap: o,
      rowGap: i,
      columnGap: a,
      column: s,
      row: l,
      autoFlow: u,
      autoRows: c,
      templateRows: d,
      autoColumns: f,
      templateColumns: p,
      ...v
    } = t,
    b = {
      display: "grid",
      gridTemplateAreas: n,
      gridGap: o,
      gridRowGap: i,
      gridColumnGap: a,
      gridAutoColumns: f,
      gridColumn: s,
      gridRow: l,
      gridAutoFlow: u,
      gridAutoRows: c,
      gridTemplateRows: d,
      gridTemplateColumns: p,
    };
  return E(Y.div, { ref: r, __css: b, ...v });
});
hp.displayName = "Grid";
function Iu(e, t) {
  return Array.isArray(e)
    ? e.map((r) => (r === null ? null : t(r)))
    : Wt(e)
    ? Object.keys(e).reduce((r, n) => ((r[n] = t(e[n])), r), {})
    : e != null
    ? t(e)
    : null;
}
var pp = ce(function (t, r) {
  const {
      columns: n,
      spacingX: o,
      spacingY: i,
      spacing: a,
      minChildWidth: s,
      ...l
    } = t,
    u = Ah(),
    c = s ? XF(s, u) : QF(n);
  return E(hp, {
    ref: r,
    gap: a,
    columnGap: o,
    rowGap: i,
    templateColumns: c,
    ...l,
  });
});
pp.displayName = "SimpleGrid";
function YF(e) {
  return typeof e == "number" ? `${e}px` : e;
}
function XF(e, t) {
  return Iu(e, (r) => {
    const n = l2("sizes", r, YF(r))(t);
    return r === null ? null : `repeat(auto-fit, minmax(${n}, 1fr))`;
  });
}
function QF(e) {
  return Iu(e, (t) => (t === null ? null : `repeat(${t}, minmax(0, 1fr))`));
}
var ix = ce(function (t, r) {
  const n = Zn("Text", t),
    { className: o, align: i, decoration: a, casing: s, ...l } = rr(t),
    u = xb({
      textAlign: t.align,
      textDecoration: t.decoration,
      textTransform: t.casing,
    });
  return E(Y.p, {
    ref: r,
    className: He("chakra-text", t.className),
    ...u,
    ...l,
    __css: n,
  });
});
ix.displayName = "Text";
var ax = (e) =>
  E(Y.div, {
    className: "chakra-stack__item",
    ...e,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...e.__css,
    },
  });
ax.displayName = "StackItem";
function qF(e) {
  const { spacing: t, direction: r } = e,
    n = {
      column: { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: "1px" },
      "column-reverse": {
        my: t,
        mx: 0,
        borderLeftWidth: 0,
        borderBottomWidth: "1px",
      },
      row: { mx: t, my: 0, borderLeftWidth: "1px", borderBottomWidth: 0 },
      "row-reverse": {
        mx: t,
        my: 0,
        borderLeftWidth: "1px",
        borderBottomWidth: 0,
      },
    };
  return { "&": Iu(r, (o) => n[o]) };
}
var sx = ce((e, t) => {
  const {
      isInline: r,
      direction: n,
      align: o,
      justify: i,
      spacing: a = "0.5rem",
      wrap: s,
      children: l,
      divider: u,
      className: c,
      shouldWrapChildren: d,
      ...f
    } = e,
    p = r ? "row" : n ?? "column",
    v = w.useMemo(() => qF({ spacing: a, direction: p }), [a, p]),
    b = !!u,
    C = !d && !b,
    g = w.useMemo(() => {
      const m = JS(l);
      return C
        ? m
        : m.map((k, P) => {
            const A = typeof k.key < "u" ? k.key : P,
              T = P + 1 === m.length,
              F = d ? E(ax, { children: k }, A) : k;
            if (!b) return F;
            const I = w.cloneElement(u, { __css: v }),
              le = T ? null : I;
            return je(w.Fragment, { children: [F, le] }, A);
          });
    }, [u, v, b, C, d, l]),
    h = He("chakra-stack", c);
  return E(Y.div, {
    ref: t,
    display: "flex",
    alignItems: o,
    justifyContent: i,
    flexDirection: p,
    flexWrap: s,
    gap: b ? void 0 : a,
    className: h,
    ...f,
    children: g,
  });
});
sx.displayName = "Stack";
var Du = ce((e, t) =>
  E(sx, { align: "center", ...e, direction: "row", ref: t })
);
Du.displayName = "HStack";
function lv(e) {
  return Iu(e, (t) => (t === "auto" ? "auto" : `span ${t}/span ${t}`));
}
var il = ce(function (t, r) {
  const {
      area: n,
      colSpan: o,
      colStart: i,
      colEnd: a,
      rowEnd: s,
      rowSpan: l,
      rowStart: u,
      ...c
    } = t,
    d = xb({
      gridArea: n,
      gridColumn: lv(o),
      gridRow: lv(l),
      gridColumnStart: i,
      gridColumnEnd: a,
      gridRowStart: u,
      gridRowEnd: s,
    });
  return E(Y.div, { ref: r, __css: d, ...c });
});
il.displayName = "GridItem";
var mp = ce(function (t, r) {
  const n = Zn("Heading", t),
    { className: o, ...i } = rr(t);
  return E(Y.h2, {
    ref: r,
    className: He("chakra-heading", t.className),
    ...i,
    __css: n,
  });
});
mp.displayName = "Heading";
function ZF(e, t = {}) {
  const { ssr: r = !0, fallback: n } = t,
    { getWindow: o } = _z(),
    i = Array.isArray(e) ? e : [e];
  let a = Array.isArray(n) ? n : [n];
  a = a.filter((u) => u != null);
  const [s, l] = w.useState(() =>
    i.map((u, c) => ({
      media: u,
      matches: r ? !!a[c] : o().matchMedia(u).matches,
    }))
  );
  return (
    w.useEffect(() => {
      const u = o();
      l(i.map((f) => ({ media: f, matches: u.matchMedia(f).matches })));
      const c = i.map((f) => u.matchMedia(f)),
        d = (f) => {
          l((p) =>
            p
              .slice()
              .map((v) =>
                v.media === f.media ? { ...v, matches: f.matches } : v
              )
          );
        };
      return (
        c.forEach((f) => {
          typeof f.addListener == "function"
            ? f.addListener(d)
            : f.addEventListener("change", d);
        }),
        () => {
          c.forEach((f) => {
            typeof f.removeListener == "function"
              ? f.removeListener(d)
              : f.removeEventListener("change", d);
          });
        }
      );
    }, [o]),
    s.map((u) => u.matches)
  );
}
function JF(e) {
  const { breakpoint: t, hide: r, children: n, ssr: o } = e,
    [i] = ZF(t, { ssr: o });
  return (r ? !i : i) ? n : null;
}
var uv = (e, t) => {
  var r, n;
  return (n = (r = e?.breakpoints) == null ? void 0 : r[t]) != null ? n : t;
};
function eI(e) {
  const { breakpoint: t = "", below: r, above: n } = e,
    o = Ah(),
    i = uv(o, r),
    a = uv(o, n);
  let s = t;
  return i ? (s = `(max-width: ${i})`) : a && (s = `(min-width: ${a})`), s;
}
function lx(e) {
  const { children: t, ssr: r } = e,
    n = eI(e);
  return E(JF, { breakpoint: n, ssr: r, children: t });
}
lx.displayName = "Show";
var ux = ce(function (t, r) {
  const n = Ba("Switch", t),
    { spacing: o = "0.5rem", children: i, ...a } = rr(t),
    {
      getIndicatorProps: s,
      getInputProps: l,
      getCheckboxProps: u,
      getRootProps: c,
      getLabelProps: d,
    } = jF(a),
    f = w.useMemo(
      () => ({
        display: "inline-block",
        position: "relative",
        verticalAlign: "middle",
        lineHeight: 0,
        ...n.container,
      }),
      [n.container]
    ),
    p = w.useMemo(
      () => ({
        display: "inline-flex",
        flexShrink: 0,
        justifyContent: "flex-start",
        boxSizing: "content-box",
        cursor: "pointer",
        ...n.track,
      }),
      [n.track]
    ),
    v = w.useMemo(
      () => ({ userSelect: "none", marginStart: o, ...n.label }),
      [o, n.label]
    );
  return je(Y.label, {
    ...c(),
    className: He("chakra-switch", t.className),
    __css: f,
    children: [
      E("input", { className: "chakra-switch__input", ...l({}, r) }),
      E(Y.span, {
        ...u(),
        className: "chakra-switch__track",
        __css: p,
        children: E(Y.span, {
          __css: n.thumb,
          className: "chakra-switch__thumb",
          ...s(),
        }),
      }),
      i &&
        E(Y.span, {
          className: "chakra-switch__label",
          ...d(),
          __css: v,
          children: i,
        }),
    ],
  });
});
ux.displayName = "Switch";
const tI = "book-281775c6.png",
  rI = () => {
    const { toggleColorMode: e, colorMode: t } = ku();
    return je(Du, {
      children: [
        E(ux, { colorScheme: "green", isChecked: t === "dark", onChange: e }),
        E(ix, { children: "Dark Mode" }),
      ],
    });
  },
  nI = () =>
    je(Du, {
      justifyContent: "space-between",
      padding: "10px",
      children: [
        E(dp, {
          src: tI,
          boxSize: "50px",
          border: "1px",
          borderColor: "blue.500",
          borderRadius: "50%",
        }),
        E(mp, { children: "Memajuve's Manga list" }),
        E(rI, {}),
      ],
    });
let As;
const oI = new Uint8Array(16);
function iI() {
  if (
    !As &&
    ((As =
      typeof crypto < "u" &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !As)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return As(oI);
}
const Ke = [];
for (let e = 0; e < 256; ++e) Ke.push((e + 256).toString(16).slice(1));
function aI(e, t = 0) {
  return (
    Ke[e[t + 0]] +
    Ke[e[t + 1]] +
    Ke[e[t + 2]] +
    Ke[e[t + 3]] +
    "-" +
    Ke[e[t + 4]] +
    Ke[e[t + 5]] +
    "-" +
    Ke[e[t + 6]] +
    Ke[e[t + 7]] +
    "-" +
    Ke[e[t + 8]] +
    Ke[e[t + 9]] +
    "-" +
    Ke[e[t + 10]] +
    Ke[e[t + 11]] +
    Ke[e[t + 12]] +
    Ke[e[t + 13]] +
    Ke[e[t + 14]] +
    Ke[e[t + 15]]
  );
}
const sI =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  cv = { randomUUID: sI };
function Or(e, t, r) {
  if (cv.randomUUID && !t && !e) return cv.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || iI)();
  if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), t)) {
    r = r || 0;
    for (let o = 0; o < 16; ++o) t[r + o] = n[o];
    return t;
  }
  return aI(n);
}
const cx = ({ manga: e }) => {
    const { url: t, title: r, images: n } = e,
      {
        webp: { image_url: o },
      } = n;
    return E(ta, {
      children: je(
        kF,
        {
          borderRadius: 10,
          children: [
            E(dp, { src: o }),
            E(wF, {
              children: E(rx, {
                href: t,
                fontSize: "2xl",
                isExternal: !0,
                children: r,
              }),
            }),
          ],
        },
        Or()
      ),
    });
  },
  Jc = [
    { manga: "Kaguya-hime", id: 2156 },
    { manga: "Naruto", id: 11 },
    { manga: "Bleach", id: 12 },
    { manga: "Piece", id: 20315 },
    { manga: "20th Century Boys", id: 3 },
    { manga: "Monster", id: 1 },
    { manga: "Pluto", id: 745 },
    { manga: "Genzo Hitogata Kiwa", id: 1714 },
    { manga: "Slam Dunk", id: 51 },
    { manga: "Fullmetal Alchemist", id: 25 },
    { manga: "Yotsuba to!", id: 104 },
    { manga: "Nana", id: 28 },
    { manga: "One Punch-Man", id: 44347 },
    { manga: "Chainsaw Man", id: 116778 },
    { manga: "Hunter x Hunter", id: 26 },
    { manga: "Samurai Deeper Kyo", id: 513 },
    { manga: "Code:Breaker", id: 8341 },
    { manga: "Ao Haru Ride", id: 24294 },
    { manga: "Strobe Edge", id: 7378 },
    { manga: "Lovely★Complex", id: 31 },
  ];
async function lI(e) {
  let t = "";
  new Array();
  const n = await (await fetch(`https://api.jikan.moe/v4/manga/${e}`)).json();
  return (
    setTimeout(function () {}, 2e3), console.log(n), { mangas: n, error: t }
  );
}
let gp = [],
  vp = new Array(),
  dx = new Array();
for (let e in Jc) {
  console.log(Jc[e].id);
  let { mangas: t } = await lI(Jc[e].id);
  gp.push(t.data), dx.push(t.data.genres[0].name);
}
vp = [...new Set(dx)];
console.log(gp);
console.log(vp);
const yp = { mangaL: gp, genres: vp },
  uI = () => {
    let e = yp.mangaL;
    return E(ta, {
      children: E(
        pp,
        {
          columns: { sm: 1, md: 2, lg: 3, xl: 5 },
          padding: "10px",
          spacing: 10,
          children: e.map((t) => E(cx, { manga: t }, Or())),
        },
        Or()
      ),
    });
  };
let cI = yp.genres;
const dI = ({ onSelectedGrenre: e }) =>
    E(Fu, {
      paddingTop: "30",
      children: E(
        ox,
        {
          paddingY: "5px",
          children: cI.map((t) =>
            E(
              Du,
              {
                children: E(ex, {
                  fontSize: "lg",
                  color: "teal.500",
                  variant: "link",
                  onClick: () => e(t),
                  children: t,
                }),
              },
              Or()
            )
          ),
        },
        Or()
      ),
    }),
  fI = ({ genreSelectedGrid: e }) => {
    let t = yp.mangaL;
    return E(ta, {
      children: E(
        pp,
        {
          columns: { sm: 1, md: 2, lg: 3, xl: 5 },
          padding: "10px",
          spacing: 10,
          children: t.map((r, n) =>
            r.genres[0].name === e ? E(cx, { manga: r }, Or()) : E(ta, {})
          ),
        },
        Or()
      ),
    });
  };
function hI() {
  const [e, t] = w.useState("");
  return je(hp, {
    templateAreas: { base: '"nav" "main"', lg: '"nav nav" "aside main"' },
    templateColumns: { base: "1fr", lg: "500px , 1fr" },
    children: [
      E(il, { area: "nav", children: E(nI, {}) }),
      je(lx, {
        above: "lg",
        children: [
          E(il, {
            padding: 5,
            area: "aside",
            children: E(dI, { onSelectedGrenre: t }),
          }),
          je(il, {
            className: "mangasList",
            area: "main",
            children: [
              E(mp, { paddingLeft: 2, children: "Mangas" }),
              e === ""
                ? E(uI, {}, Or())
                : E(fI, { genreSelectedGrid: e }, Or()),
            ],
          }),
        ],
      }),
    ],
  });
}
const pI = { initialColorMode: "dark" },
  dv = X3({ config: pI });
ed.createRoot(document.getElementById("root")).render(
  E(Wo.StrictMode, {
    children: je(fF, {
      theme: dv,
      children: [
        E(o2, { initialColorMode: dv.config.initialColorMode }),
        E(hI, {}),
      ],
    }),
  })
);
