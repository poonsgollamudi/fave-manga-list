function pk(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(r, i);
          a &&
            Object.defineProperty(
              e,
              i,
              a.get ? a : { enumerable: !0, get: () => r[i] }
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
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = n(i);
    fetch(i.href, a);
  }
})();
var Zo =
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
var l0 = { exports: {} },
  Gl = {},
  u0 = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $o = Symbol.for("react.element"),
  gk = Symbol.for("react.portal"),
  yk = Symbol.for("react.fragment"),
  vk = Symbol.for("react.strict_mode"),
  bk = Symbol.for("react.profiler"),
  Sk = Symbol.for("react.provider"),
  wk = Symbol.for("react.context"),
  kk = Symbol.for("react.forward_ref"),
  xk = Symbol.for("react.suspense"),
  _k = Symbol.for("react.memo"),
  Ck = Symbol.for("react.lazy"),
  Fh = Symbol.iterator;
function Tk(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fh && e[Fh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var c0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  d0 = Object.assign,
  f0 = {};
function ta(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = f0),
    (this.updater = n || c0);
}
ta.prototype.isReactComponent = {};
ta.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ta.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function m0() {}
m0.prototype = ta.prototype;
function Cf(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = f0),
    (this.updater = n || c0);
}
var Tf = (Cf.prototype = new m0());
Tf.constructor = Cf;
d0(Tf, ta.prototype);
Tf.isPureReactComponent = !0;
var Lh = Array.isArray,
  h0 = Object.prototype.hasOwnProperty,
  Pf = { current: null },
  p0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function g0(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      h0.call(t, r) && !p0.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: $o,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: Pf.current,
  };
}
function Pk(e, t) {
  return {
    $$typeof: $o,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ef(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $o;
}
function Ek(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ih = /\/+/g;
function Ju(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ek("" + e.key)
    : t.toString(36);
}
function $s(e, t, n, r, i) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (a) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case $o:
          case gk:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Ju(o, 0) : r),
      Lh(i)
        ? ((n = ""),
          e != null && (n = e.replace(Ih, "$&/") + "/"),
          $s(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Ef(i) &&
            (i = Pk(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Ih, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Lh(e)))
    for (var s = 0; s < e.length; s++) {
      a = e[s];
      var l = r + Ju(a, s);
      o += $s(a, t, n, l, i);
    }
  else if (((l = Tk(e)), typeof l == "function"))
    for (e = l.call(e), s = 0; !(a = e.next()).done; )
      (a = a.value), (l = r + Ju(a, s++)), (o += $s(a, t, n, l, i));
  else if (a === "object")
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
  return o;
}
function es(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    $s(e, r, "", "", function (a) {
      return t.call(n, a, i++);
    }),
    r
  );
}
function Ak(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var lt = { current: null },
  zs = { transition: null },
  Mk = {
    ReactCurrentDispatcher: lt,
    ReactCurrentBatchConfig: zs,
    ReactCurrentOwner: Pf,
  };
U.Children = {
  map: es,
  forEach: function (e, t, n) {
    es(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
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
    if (!Ef(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
U.Component = ta;
U.Fragment = yk;
U.Profiler = bk;
U.PureComponent = Cf;
U.StrictMode = vk;
U.Suspense = xk;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mk;
U.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = d0({}, e.props),
    i = e.key,
    a = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (o = Pf.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      h0.call(t, l) &&
        !p0.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: $o, type: e.type, key: i, ref: a, props: r, _owner: o };
};
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: wk,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Sk, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = g0;
U.createFactory = function (e) {
  var t = g0.bind(null, e);
  return (t.type = e), t;
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: kk, render: e };
};
U.isValidElement = Ef;
U.lazy = function (e) {
  return { $$typeof: Ck, _payload: { _status: -1, _result: e }, _init: Ak };
};
U.memo = function (e, t) {
  return { $$typeof: _k, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
  var t = zs.transition;
  zs.transition = {};
  try {
    e();
  } finally {
    zs.transition = t;
  }
};
U.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
U.useCallback = function (e, t) {
  return lt.current.useCallback(e, t);
};
U.useContext = function (e) {
  return lt.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
  return lt.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
  return lt.current.useEffect(e, t);
};
U.useId = function () {
  return lt.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
  return lt.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
  return lt.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
  return lt.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return lt.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return lt.current.useReducer(e, t, n);
};
U.useRef = function (e) {
  return lt.current.useRef(e);
};
U.useState = function (e) {
  return lt.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
  return lt.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
  return lt.current.useTransition();
};
U.version = "18.2.0";
u0.exports = U;
var k = u0.exports;
const Vi = _f(k),
  Bh = pk({ __proto__: null, default: Vi }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $k = k,
  zk = Symbol.for("react.element"),
  Rk = Symbol.for("react.fragment"),
  Dk = Object.prototype.hasOwnProperty,
  Fk = $k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Lk = { key: !0, ref: !0, __self: !0, __source: !0 };
function y0(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Dk.call(t, r) && !Lk.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: zk,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: Fk.current,
  };
}
Gl.Fragment = Rk;
Gl.jsx = y0;
Gl.jsxs = y0;
l0.exports = Gl;
var Af = l0.exports;
const eo = Af.Fragment,
  E = Af.jsx,
  Ve = Af.jsxs;
var Zc = {},
  v0 = { exports: {} },
  At = {},
  b0 = { exports: {} },
  S0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(z, j) {
    var V = z.length;
    z.push(j);
    e: for (; 0 < V; ) {
      var N = (V - 1) >>> 1,
        X = z[N];
      if (0 < i(X, j)) (z[N] = j), (z[V] = X), (V = N);
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var j = z[0],
      V = z.pop();
    if (V !== j) {
      z[0] = V;
      e: for (var N = 0, X = z.length, W = X >>> 1; N < W; ) {
        var se = 2 * (N + 1) - 1,
          Gt = z[se],
          Te = se + 1,
          bt = z[Te];
        if (0 > i(Gt, V))
          Te < X && 0 > i(bt, Gt)
            ? ((z[N] = bt), (z[Te] = V), (N = Te))
            : ((z[N] = Gt), (z[se] = V), (N = se));
        else if (Te < X && 0 > i(bt, V)) (z[N] = bt), (z[Te] = V), (N = Te);
        else break e;
      }
    }
    return j;
  }
  function i(z, j) {
    var V = z.sortIndex - j.sortIndex;
    return V !== 0 ? V : z.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    y = !1,
    b = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(z) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= z)
        r(u), (j.sortIndex = j.expirationTime), t(l, j);
      else break;
      j = n(u);
    }
  }
  function x(z) {
    if (((b = !1), p(z), !y))
      if (n(l) !== null) (y = !0), ze(P);
      else {
        var j = n(u);
        j !== null && Le(x, j.startTime - z);
      }
  }
  function P(z, j) {
    (y = !1), b && ((b = !1), g(A), (A = -1)), (h = !0);
    var V = f;
    try {
      for (
        p(j), d = n(l);
        d !== null && (!(d.expirationTime > j) || (z && !le()));

      ) {
        var N = d.callback;
        if (typeof N == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var X = N(d.expirationTime <= j);
          (j = e.unstable_now()),
            typeof X == "function" ? (d.callback = X) : d === n(l) && r(l),
            p(j);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var W = !0;
      else {
        var se = n(u);
        se !== null && Le(x, se.startTime - j), (W = !1);
      }
      return W;
    } finally {
      (d = null), (f = V), (h = !1);
    }
  }
  var M = !1,
    T = null,
    A = -1,
    F = 5,
    L = -1;
  function le() {
    return !(e.unstable_now() - L < F);
  }
  function pe() {
    if (T !== null) {
      var z = e.unstable_now();
      L = z;
      var j = !0;
      try {
        j = T(!0, z);
      } finally {
        j ? Ae() : ((M = !1), (T = null));
      }
    } else M = !1;
  }
  var Ae;
  if (typeof m == "function")
    Ae = function () {
      m(pe);
    };
  else if (typeof MessageChannel < "u") {
    var ie = new MessageChannel(),
      de = ie.port2;
    (ie.port1.onmessage = pe),
      (Ae = function () {
        de.postMessage(null);
      });
  } else
    Ae = function () {
      _(pe, 0);
    };
  function ze(z) {
    (T = z), M || ((M = !0), Ae());
  }
  function Le(z, j) {
    A = _(function () {
      z(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || h || ((y = !0), ze(P));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (z) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = f;
      }
      var V = f;
      f = j;
      try {
        return z();
      } finally {
        f = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, j) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var V = f;
      f = z;
      try {
        return j();
      } finally {
        f = V;
      }
    }),
    (e.unstable_scheduleCallback = function (z, j, V) {
      var N = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? N + V : N))
          : (V = N),
        z)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = V + X),
        (z = {
          id: c++,
          callback: j,
          priorityLevel: z,
          startTime: V,
          expirationTime: X,
          sortIndex: -1,
        }),
        V > N
          ? ((z.sortIndex = V),
            t(u, z),
            n(l) === null &&
              z === n(u) &&
              (b ? (g(A), (A = -1)) : (b = !0), Le(x, V - N)))
          : ((z.sortIndex = X), t(l, z), y || h || ((y = !0), ze(P))),
        z
      );
    }),
    (e.unstable_shouldYield = le),
    (e.unstable_wrapCallback = function (z) {
      var j = f;
      return function () {
        var V = f;
        f = j;
        try {
          return z.apply(this, arguments);
        } finally {
          f = V;
        }
      };
    });
})(S0);
b0.exports = S0;
var Ik = b0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var w0 = k,
  Pt = Ik;
function $(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var k0 = new Set(),
  to = {};
function qr(e, t) {
  Wi(e, t), Wi(e + "Capture", t);
}
function Wi(e, t) {
  for (to[e] = t, e = 0; e < t.length; e++) k0.add(t[e]);
}
var Fn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ed = Object.prototype.hasOwnProperty,
  Bk =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  jh = {},
  Nh = {};
function jk(e) {
  return ed.call(Nh, e)
    ? !0
    : ed.call(jh, e)
    ? !1
    : Bk.test(e)
    ? (Nh[e] = !0)
    : ((jh[e] = !0), !1);
}
function Nk(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ok(e, t, n, r) {
  if (t === null || typeof t > "u" || Nk(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
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
function ut(e, t, n, r, i, a, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o);
}
var Xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Xe[e] = new ut(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Xe[t] = new ut(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Xe[e] = new ut(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Xe[e] = new ut(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Xe[e] = new ut(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Xe[e] = new ut(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Xe[e] = new ut(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Xe[e] = new ut(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Xe[e] = new ut(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Mf = /[\-:]([a-z])/g;
function $f(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Mf, $f);
    Xe[t] = new ut(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Mf, $f);
    Xe[t] = new ut(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Mf, $f);
  Xe[t] = new ut(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Xe[e] = new ut(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Xe.xlinkHref = new ut(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Xe[e] = new ut(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function zf(e, t, n, r) {
  var i = Xe.hasOwnProperty(t) ? Xe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ok(t, n, i, r) && (n = null),
    r || i === null
      ? jk(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Vn = w0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ts = Symbol.for("react.element"),
  ui = Symbol.for("react.portal"),
  ci = Symbol.for("react.fragment"),
  Rf = Symbol.for("react.strict_mode"),
  td = Symbol.for("react.profiler"),
  x0 = Symbol.for("react.provider"),
  _0 = Symbol.for("react.context"),
  Df = Symbol.for("react.forward_ref"),
  nd = Symbol.for("react.suspense"),
  rd = Symbol.for("react.suspense_list"),
  Ff = Symbol.for("react.memo"),
  qn = Symbol.for("react.lazy"),
  C0 = Symbol.for("react.offscreen"),
  Oh = Symbol.iterator;
function ua(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Oh && e[Oh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ce = Object.assign,
  qu;
function xa(e) {
  if (qu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      qu = (t && t[1]) || "";
    }
  return (
    `
` +
    qu +
    e
  );
}
var Xu = !1;
function Qu(e, t) {
  if (!e || Xu) return "";
  Xu = !0;
  var n = Error.prepareStackTrace;
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
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          a = r.stack.split(`
`),
          o = i.length - 1,
          s = a.length - 1;
        1 <= o && 0 <= s && i[o] !== a[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (i[o] !== a[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || i[o] !== a[s])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (Xu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? xa(e) : "";
}
function Vk(e) {
  switch (e.tag) {
    case 5:
      return xa(e.type);
    case 16:
      return xa("Lazy");
    case 13:
      return xa("Suspense");
    case 19:
      return xa("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Qu(e.type, !1)), e;
    case 11:
      return (e = Qu(e.type.render, !1)), e;
    case 1:
      return (e = Qu(e.type, !0)), e;
    default:
      return "";
  }
}
function id(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ci:
      return "Fragment";
    case ui:
      return "Portal";
    case td:
      return "Profiler";
    case Rf:
      return "StrictMode";
    case nd:
      return "Suspense";
    case rd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case _0:
        return (e.displayName || "Context") + ".Consumer";
      case x0:
        return (e._context.displayName || "Context") + ".Provider";
      case Df:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ff:
        return (
          (t = e.displayName || null), t !== null ? t : id(e.type) || "Memo"
        );
      case qn:
        (t = e._payload), (e = e._init);
        try {
          return id(e(t));
        } catch {}
    }
  return null;
}
function Wk(e) {
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
      return t === Rf ? "StrictMode" : "Mode";
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
function pr(e) {
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
function T0(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Hk(e) {
  var t = T0(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), a.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ns(e) {
  e._valueTracker || (e._valueTracker = Hk(e));
}
function P0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = T0(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ol(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ad(e, t) {
  var n = t.checked;
  return Ce({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Vh(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = pr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function E0(e, t) {
  (t = t.checked), t != null && zf(e, "checked", t, !1);
}
function od(e, t) {
  E0(e, t);
  var n = pr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? sd(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && sd(e, t.type, pr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Wh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function sd(e, t, n) {
  (t !== "number" || ol(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _a = Array.isArray;
function $i(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + pr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ld(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error($(91));
  return Ce({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Hh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error($(92));
      if (_a(n)) {
        if (1 < n.length) throw Error($(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: pr(n) };
}
function A0(e, t) {
  var n = pr(t.value),
    r = pr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Uh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function M0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ud(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? M0(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var rs,
  $0 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        rs = rs || document.createElement("div"),
          rs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = rs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function no(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Da = {
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
  Uk = ["Webkit", "ms", "Moz", "O"];
Object.keys(Da).forEach(function (e) {
  Uk.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Da[t] = Da[e]);
  });
});
function z0(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Da.hasOwnProperty(e) && Da[e])
    ? ("" + t).trim()
    : t + "px";
}
function R0(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = z0(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Gk = Ce(
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
function cd(e, t) {
  if (t) {
    if (Gk[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error($(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error($(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error($(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error($(62));
  }
}
function dd(e, t) {
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
var fd = null;
function Lf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var md = null,
  zi = null,
  Ri = null;
function Gh(e) {
  if ((e = Do(e))) {
    if (typeof md != "function") throw Error($(280));
    var t = e.stateNode;
    t && ((t = Xl(t)), md(e.stateNode, e.type, t));
  }
}
function D0(e) {
  zi ? (Ri ? Ri.push(e) : (Ri = [e])) : (zi = e);
}
function F0() {
  if (zi) {
    var e = zi,
      t = Ri;
    if (((Ri = zi = null), Gh(e), t)) for (e = 0; e < t.length; e++) Gh(t[e]);
  }
}
function L0(e, t) {
  return e(t);
}
function I0() {}
var Zu = !1;
function B0(e, t, n) {
  if (Zu) return e(t, n);
  Zu = !0;
  try {
    return L0(e, t, n);
  } finally {
    (Zu = !1), (zi !== null || Ri !== null) && (I0(), F0());
  }
}
function ro(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Xl(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error($(231, t, typeof n));
  return n;
}
var hd = !1;
if (Fn)
  try {
    var ca = {};
    Object.defineProperty(ca, "passive", {
      get: function () {
        hd = !0;
      },
    }),
      window.addEventListener("test", ca, ca),
      window.removeEventListener("test", ca, ca);
  } catch {
    hd = !1;
  }
function Kk(e, t, n, r, i, a, o, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Fa = !1,
  sl = null,
  ll = !1,
  pd = null,
  Yk = {
    onError: function (e) {
      (Fa = !0), (sl = e);
    },
  };
function Jk(e, t, n, r, i, a, o, s, l) {
  (Fa = !1), (sl = null), Kk.apply(Yk, arguments);
}
function qk(e, t, n, r, i, a, o, s, l) {
  if ((Jk.apply(this, arguments), Fa)) {
    if (Fa) {
      var u = sl;
      (Fa = !1), (sl = null);
    } else throw Error($(198));
    ll || ((ll = !0), (pd = u));
  }
}
function Xr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function j0(e) {
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
function Kh(e) {
  if (Xr(e) !== e) throw Error($(188));
}
function Xk(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Xr(e)), t === null)) throw Error($(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === n) return Kh(i), e;
        if (a === r) return Kh(i), t;
        a = a.sibling;
      }
      throw Error($(188));
    }
    if (n.return !== r.return) (n = i), (r = a);
    else {
      for (var o = !1, s = i.child; s; ) {
        if (s === n) {
          (o = !0), (n = i), (r = a);
          break;
        }
        if (s === r) {
          (o = !0), (r = i), (n = a);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = a.child; s; ) {
          if (s === n) {
            (o = !0), (n = a), (r = i);
            break;
          }
          if (s === r) {
            (o = !0), (r = a), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error($(189));
      }
    }
    if (n.alternate !== r) throw Error($(190));
  }
  if (n.tag !== 3) throw Error($(188));
  return n.stateNode.current === n ? e : t;
}
function N0(e) {
  return (e = Xk(e)), e !== null ? O0(e) : null;
}
function O0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = O0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var V0 = Pt.unstable_scheduleCallback,
  Yh = Pt.unstable_cancelCallback,
  Qk = Pt.unstable_shouldYield,
  Zk = Pt.unstable_requestPaint,
  Me = Pt.unstable_now,
  e2 = Pt.unstable_getCurrentPriorityLevel,
  If = Pt.unstable_ImmediatePriority,
  W0 = Pt.unstable_UserBlockingPriority,
  ul = Pt.unstable_NormalPriority,
  t2 = Pt.unstable_LowPriority,
  H0 = Pt.unstable_IdlePriority,
  Kl = null,
  hn = null;
function n2(e) {
  if (hn && typeof hn.onCommitFiberRoot == "function")
    try {
      hn.onCommitFiberRoot(Kl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Zt = Math.clz32 ? Math.clz32 : a2,
  r2 = Math.log,
  i2 = Math.LN2;
function a2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((r2(e) / i2) | 0)) | 0;
}
var is = 64,
  as = 4194304;
function Ca(e) {
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
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var s = o & ~i;
    s !== 0 ? (r = Ca(s)) : ((a &= o), a !== 0 && (r = Ca(a)));
  } else (o = n & ~i), o !== 0 ? (r = Ca(o)) : a !== 0 && (r = Ca(a));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (a = t & -t), i >= a || (i === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Zt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function o2(e, t) {
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
function s2(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var o = 31 - Zt(a),
      s = 1 << o,
      l = i[o];
    l === -1
      ? (!(s & n) || s & r) && (i[o] = o2(s, t))
      : l <= t && (e.expiredLanes |= s),
      (a &= ~s);
  }
}
function gd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function U0() {
  var e = is;
  return (is <<= 1), !(is & 4194240) && (is = 64), e;
}
function ec(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function zo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Zt(t)),
    (e[t] = n);
}
function l2(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Zt(n),
      a = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
  }
}
function Bf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Zt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ae = 0;
function G0(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var K0,
  jf,
  Y0,
  J0,
  q0,
  yd = !1,
  os = [],
  ar = null,
  or = null,
  sr = null,
  io = new Map(),
  ao = new Map(),
  Zn = [],
  u2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Jh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ar = null;
      break;
    case "dragenter":
    case "dragleave":
      or = null;
      break;
    case "mouseover":
    case "mouseout":
      sr = null;
      break;
    case "pointerover":
    case "pointerout":
      io.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ao.delete(t.pointerId);
  }
}
function da(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [i],
      }),
      t !== null && ((t = Do(t)), t !== null && jf(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function c2(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (ar = da(ar, e, t, n, r, i)), !0;
    case "dragenter":
      return (or = da(or, e, t, n, r, i)), !0;
    case "mouseover":
      return (sr = da(sr, e, t, n, r, i)), !0;
    case "pointerover":
      var a = i.pointerId;
      return io.set(a, da(io.get(a) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (a = i.pointerId), ao.set(a, da(ao.get(a) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function X0(e) {
  var t = Dr(e.target);
  if (t !== null) {
    var n = Xr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = j0(n)), t !== null)) {
          (e.blockedOn = t),
            q0(e.priority, function () {
              Y0(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Rs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = vd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (fd = r), n.target.dispatchEvent(r), (fd = null);
    } else return (t = Do(n)), t !== null && jf(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function qh(e, t, n) {
  Rs(e) && n.delete(t);
}
function d2() {
  (yd = !1),
    ar !== null && Rs(ar) && (ar = null),
    or !== null && Rs(or) && (or = null),
    sr !== null && Rs(sr) && (sr = null),
    io.forEach(qh),
    ao.forEach(qh);
}
function fa(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    yd ||
      ((yd = !0),
      Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority, d2)));
}
function oo(e) {
  function t(i) {
    return fa(i, e);
  }
  if (0 < os.length) {
    fa(os[0], e);
    for (var n = 1; n < os.length; n++) {
      var r = os[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ar !== null && fa(ar, e),
      or !== null && fa(or, e),
      sr !== null && fa(sr, e),
      io.forEach(t),
      ao.forEach(t),
      n = 0;
    n < Zn.length;
    n++
  )
    (r = Zn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Zn.length && ((n = Zn[0]), n.blockedOn === null); )
    X0(n), n.blockedOn === null && Zn.shift();
}
var Di = Vn.ReactCurrentBatchConfig,
  dl = !0;
function f2(e, t, n, r) {
  var i = ae,
    a = Di.transition;
  Di.transition = null;
  try {
    (ae = 1), Nf(e, t, n, r);
  } finally {
    (ae = i), (Di.transition = a);
  }
}
function m2(e, t, n, r) {
  var i = ae,
    a = Di.transition;
  Di.transition = null;
  try {
    (ae = 4), Nf(e, t, n, r);
  } finally {
    (ae = i), (Di.transition = a);
  }
}
function Nf(e, t, n, r) {
  if (dl) {
    var i = vd(e, t, n, r);
    if (i === null) cc(e, t, r, fl, n), Jh(e, r);
    else if (c2(i, e, t, n, r)) r.stopPropagation();
    else if ((Jh(e, r), t & 4 && -1 < u2.indexOf(e))) {
      for (; i !== null; ) {
        var a = Do(i);
        if (
          (a !== null && K0(a),
          (a = vd(e, t, n, r)),
          a === null && cc(e, t, r, fl, n),
          a === i)
        )
          break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else cc(e, t, r, null, n);
  }
}
var fl = null;
function vd(e, t, n, r) {
  if (((fl = null), (e = Lf(r)), (e = Dr(e)), e !== null))
    if (((t = Xr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = j0(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (fl = e), null;
}
function Q0(e) {
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
      switch (e2()) {
        case If:
          return 1;
        case W0:
          return 4;
        case ul:
        case t2:
          return 16;
        case H0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nr = null,
  Of = null,
  Ds = null;
function Z0() {
  if (Ds) return Ds;
  var e,
    t = Of,
    n = t.length,
    r,
    i = "value" in nr ? nr.value : nr.textContent,
    a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
  return (Ds = i.slice(e, 1 < r ? 1 - r : void 0));
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
function Xh() {
  return !1;
}
function Mt(e) {
  function t(n, r, i, a, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(a) : a[s]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? ss
        : Xh),
      (this.isPropagationStopped = Xh),
      this
    );
  }
  return (
    Ce(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ss));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ss));
      },
      persist: function () {},
      isPersistent: ss,
    }),
    t
  );
}
var na = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Vf = Mt(na),
  Ro = Ce({}, na, { view: 0, detail: 0 }),
  h2 = Mt(Ro),
  tc,
  nc,
  ma,
  Yl = Ce({}, Ro, {
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
    getModifierState: Wf,
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
        : (e !== ma &&
            (ma && e.type === "mousemove"
              ? ((tc = e.screenX - ma.screenX), (nc = e.screenY - ma.screenY))
              : (nc = tc = 0),
            (ma = e)),
          tc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : nc;
    },
  }),
  Qh = Mt(Yl),
  p2 = Ce({}, Yl, { dataTransfer: 0 }),
  g2 = Mt(p2),
  y2 = Ce({}, Ro, { relatedTarget: 0 }),
  rc = Mt(y2),
  v2 = Ce({}, na, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  b2 = Mt(v2),
  S2 = Ce({}, na, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  w2 = Mt(S2),
  k2 = Ce({}, na, { data: 0 }),
  Zh = Mt(k2),
  x2 = {
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
  _2 = {
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
  C2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function T2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = C2[e]) ? !!t[e] : !1;
}
function Wf() {
  return T2;
}
var P2 = Ce({}, Ro, {
    key: function (e) {
      if (e.key) {
        var t = x2[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? _2[e.keyCode] || "Unidentified"
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
    getModifierState: Wf,
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
  E2 = Mt(P2),
  A2 = Ce({}, Yl, {
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
  ep = Mt(A2),
  M2 = Ce({}, Ro, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Wf,
  }),
  $2 = Mt(M2),
  z2 = Ce({}, na, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  R2 = Mt(z2),
  D2 = Ce({}, Yl, {
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
  F2 = Mt(D2),
  L2 = [9, 13, 27, 32],
  Hf = Fn && "CompositionEvent" in window,
  La = null;
Fn && "documentMode" in document && (La = document.documentMode);
var I2 = Fn && "TextEvent" in window && !La,
  ev = Fn && (!Hf || (La && 8 < La && 11 >= La)),
  tp = String.fromCharCode(32),
  np = !1;
function tv(e, t) {
  switch (e) {
    case "keyup":
      return L2.indexOf(t.keyCode) !== -1;
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
function nv(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var di = !1;
function B2(e, t) {
  switch (e) {
    case "compositionend":
      return nv(t);
    case "keypress":
      return t.which !== 32 ? null : ((np = !0), tp);
    case "textInput":
      return (e = t.data), e === tp && np ? null : e;
    default:
      return null;
  }
}
function j2(e, t) {
  if (di)
    return e === "compositionend" || (!Hf && tv(e, t))
      ? ((e = Z0()), (Ds = Of = nr = null), (di = !1), e)
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
      return ev && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var N2 = {
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
function rp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!N2[e.type] : t === "textarea";
}
function rv(e, t, n, r) {
  D0(r),
    (t = ml(t, "onChange")),
    0 < t.length &&
      ((n = new Vf("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ia = null,
  so = null;
function O2(e) {
  hv(e, 0);
}
function Jl(e) {
  var t = hi(e);
  if (P0(t)) return e;
}
function V2(e, t) {
  if (e === "change") return t;
}
var iv = !1;
if (Fn) {
  var ic;
  if (Fn) {
    var ac = "oninput" in document;
    if (!ac) {
      var ip = document.createElement("div");
      ip.setAttribute("oninput", "return;"),
        (ac = typeof ip.oninput == "function");
    }
    ic = ac;
  } else ic = !1;
  iv = ic && (!document.documentMode || 9 < document.documentMode);
}
function ap() {
  Ia && (Ia.detachEvent("onpropertychange", av), (so = Ia = null));
}
function av(e) {
  if (e.propertyName === "value" && Jl(so)) {
    var t = [];
    rv(t, so, e, Lf(e)), B0(O2, t);
  }
}
function W2(e, t, n) {
  e === "focusin"
    ? (ap(), (Ia = t), (so = n), Ia.attachEvent("onpropertychange", av))
    : e === "focusout" && ap();
}
function H2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Jl(so);
}
function U2(e, t) {
  if (e === "click") return Jl(t);
}
function G2(e, t) {
  if (e === "input" || e === "change") return Jl(t);
}
function K2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var tn = typeof Object.is == "function" ? Object.is : K2;
function lo(e, t) {
  if (tn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ed.call(t, i) || !tn(e[i], t[i])) return !1;
  }
  return !0;
}
function op(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function sp(e, t) {
  var n = op(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = op(n);
  }
}
function ov(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ov(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function sv() {
  for (var e = window, t = ol(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ol(e.document);
  }
  return t;
}
function Uf(e) {
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
function Y2(e) {
  var t = sv(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ov(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Uf(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          a = Math.min(r.start, i);
        (r = r.end === void 0 ? a : Math.min(r.end, i)),
          !e.extend && a > r && ((i = r), (r = a), (a = i)),
          (i = sp(n, a));
        var o = sp(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var J2 = Fn && "documentMode" in document && 11 >= document.documentMode,
  fi = null,
  bd = null,
  Ba = null,
  Sd = !1;
function lp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Sd ||
    fi == null ||
    fi !== ol(r) ||
    ((r = fi),
    "selectionStart" in r && Uf(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ba && lo(Ba, r)) ||
      ((Ba = r),
      (r = ml(bd, "onSelect")),
      0 < r.length &&
        ((t = new Vf("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = fi))));
}
function ls(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var mi = {
    animationend: ls("Animation", "AnimationEnd"),
    animationiteration: ls("Animation", "AnimationIteration"),
    animationstart: ls("Animation", "AnimationStart"),
    transitionend: ls("Transition", "TransitionEnd"),
  },
  oc = {},
  lv = {};
Fn &&
  ((lv = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete mi.animationend.animation,
    delete mi.animationiteration.animation,
    delete mi.animationstart.animation),
  "TransitionEvent" in window || delete mi.transitionend.transition);
function ql(e) {
  if (oc[e]) return oc[e];
  if (!mi[e]) return e;
  var t = mi[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in lv) return (oc[e] = t[n]);
  return e;
}
var uv = ql("animationend"),
  cv = ql("animationiteration"),
  dv = ql("animationstart"),
  fv = ql("transitionend"),
  mv = new Map(),
  up =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function br(e, t) {
  mv.set(e, t), qr(t, [e]);
}
for (var sc = 0; sc < up.length; sc++) {
  var lc = up[sc],
    q2 = lc.toLowerCase(),
    X2 = lc[0].toUpperCase() + lc.slice(1);
  br(q2, "on" + X2);
}
br(uv, "onAnimationEnd");
br(cv, "onAnimationIteration");
br(dv, "onAnimationStart");
br("dblclick", "onDoubleClick");
br("focusin", "onFocus");
br("focusout", "onBlur");
br(fv, "onTransitionEnd");
Wi("onMouseEnter", ["mouseout", "mouseover"]);
Wi("onMouseLeave", ["mouseout", "mouseover"]);
Wi("onPointerEnter", ["pointerout", "pointerover"]);
Wi("onPointerLeave", ["pointerout", "pointerover"]);
qr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
qr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
qr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
qr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
qr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ta =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Q2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));
function cp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), qk(r, t, void 0, e), (e.currentTarget = null);
}
function hv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== a && i.isPropagationStopped())) break e;
          cp(i, s, u), (a = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== a && i.isPropagationStopped())
          )
            break e;
          cp(i, s, u), (a = l);
        }
    }
  }
  if (ll) throw ((e = pd), (ll = !1), (pd = null), e);
}
function ge(e, t) {
  var n = t[Cd];
  n === void 0 && (n = t[Cd] = new Set());
  var r = e + "__bubble";
  n.has(r) || (pv(t, e, 2, !1), n.add(r));
}
function uc(e, t, n) {
  var r = 0;
  t && (r |= 4), pv(n, e, r, t);
}
var us = "_reactListening" + Math.random().toString(36).slice(2);
function uo(e) {
  if (!e[us]) {
    (e[us] = !0),
      k0.forEach(function (n) {
        n !== "selectionchange" && (Q2.has(n) || uc(n, !1, e), uc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[us] || ((t[us] = !0), uc("selectionchange", !1, t));
  }
}
function pv(e, t, n, r) {
  switch (Q0(t)) {
    case 1:
      var i = f2;
      break;
    case 4:
      i = m2;
      break;
    default:
      i = Nf;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !hd ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function cc(e, t, n, r, i) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = Dr(s)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = a = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  B0(function () {
    var u = a,
      c = Lf(n),
      d = [];
    e: {
      var f = mv.get(e);
      if (f !== void 0) {
        var h = Vf,
          y = e;
        switch (e) {
          case "keypress":
            if (Fs(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = E2;
            break;
          case "focusin":
            (y = "focus"), (h = rc);
            break;
          case "focusout":
            (y = "blur"), (h = rc);
            break;
          case "beforeblur":
          case "afterblur":
            h = rc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Qh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = g2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = $2;
            break;
          case uv:
          case cv:
          case dv:
            h = b2;
            break;
          case fv:
            h = R2;
            break;
          case "scroll":
            h = h2;
            break;
          case "wheel":
            h = F2;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = w2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = ep;
        }
        var b = (t & 4) !== 0,
          _ = !b && e === "scroll",
          g = b ? (f !== null ? f + "Capture" : null) : f;
        b = [];
        for (var m = u, p; m !== null; ) {
          p = m;
          var x = p.stateNode;
          if (
            (p.tag === 5 &&
              x !== null &&
              ((p = x),
              g !== null && ((x = ro(m, g)), x != null && b.push(co(m, x, p)))),
            _)
          )
            break;
          m = m.return;
        }
        0 < b.length &&
          ((f = new h(f, y, null, n, c)), d.push({ event: f, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== fd &&
            (y = n.relatedTarget || n.fromElement) &&
            (Dr(y) || y[Ln]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          h
            ? ((y = n.relatedTarget || n.toElement),
              (h = u),
              (y = y ? Dr(y) : null),
              y !== null &&
                ((_ = Xr(y)), y !== _ || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((h = null), (y = u)),
          h !== y)
        ) {
          if (
            ((b = Qh),
            (x = "onMouseLeave"),
            (g = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((b = ep),
              (x = "onPointerLeave"),
              (g = "onPointerEnter"),
              (m = "pointer")),
            (_ = h == null ? f : hi(h)),
            (p = y == null ? f : hi(y)),
            (f = new b(x, m + "leave", h, n, c)),
            (f.target = _),
            (f.relatedTarget = p),
            (x = null),
            Dr(c) === u &&
              ((b = new b(g, m + "enter", y, n, c)),
              (b.target = p),
              (b.relatedTarget = _),
              (x = b)),
            (_ = x),
            h && y)
          )
            t: {
              for (b = h, g = y, m = 0, p = b; p; p = ai(p)) m++;
              for (p = 0, x = g; x; x = ai(x)) p++;
              for (; 0 < m - p; ) (b = ai(b)), m--;
              for (; 0 < p - m; ) (g = ai(g)), p--;
              for (; m--; ) {
                if (b === g || (g !== null && b === g.alternate)) break t;
                (b = ai(b)), (g = ai(g));
              }
              b = null;
            }
          else b = null;
          h !== null && dp(d, f, h, b, !1),
            y !== null && _ !== null && dp(d, _, y, b, !0);
        }
      }
      e: {
        if (
          ((f = u ? hi(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var P = V2;
        else if (rp(f))
          if (iv) P = G2;
          else {
            P = H2;
            var M = W2;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (P = U2);
        if (P && (P = P(e, u))) {
          rv(d, P, n, c);
          break e;
        }
        M && M(e, f, u),
          e === "focusout" &&
            (M = f._wrapperState) &&
            M.controlled &&
            f.type === "number" &&
            sd(f, "number", f.value);
      }
      switch (((M = u ? hi(u) : window), e)) {
        case "focusin":
          (rp(M) || M.contentEditable === "true") &&
            ((fi = M), (bd = u), (Ba = null));
          break;
        case "focusout":
          Ba = bd = fi = null;
          break;
        case "mousedown":
          Sd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Sd = !1), lp(d, n, c);
          break;
        case "selectionchange":
          if (J2) break;
        case "keydown":
        case "keyup":
          lp(d, n, c);
      }
      var T;
      if (Hf)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        di
          ? tv(e, n) && (A = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A &&
        (ev &&
          n.locale !== "ko" &&
          (di || A !== "onCompositionStart"
            ? A === "onCompositionEnd" && di && (T = Z0())
            : ((nr = c),
              (Of = "value" in nr ? nr.value : nr.textContent),
              (di = !0))),
        (M = ml(u, A)),
        0 < M.length &&
          ((A = new Zh(A, e, null, n, c)),
          d.push({ event: A, listeners: M }),
          T ? (A.data = T) : ((T = nv(n)), T !== null && (A.data = T)))),
        (T = I2 ? B2(e, n) : j2(e, n)) &&
          ((u = ml(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Zh("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    hv(d, t);
  });
}
function co(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ml(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      a = i.stateNode;
    i.tag === 5 &&
      a !== null &&
      ((i = a),
      (a = ro(e, n)),
      a != null && r.unshift(co(e, a, i)),
      (a = ro(e, t)),
      a != null && r.push(co(e, a, i))),
      (e = e.return);
  }
  return r;
}
function ai(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function dp(e, t, n, r, i) {
  for (var a = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((l = ro(n, a)), l != null && o.unshift(co(n, l, s)))
        : i || ((l = ro(n, a)), l != null && o.push(co(n, l, s)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Z2 = /\r\n?/g,
  ex = /\u0000|\uFFFD/g;
function fp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Z2,
      `
`
    )
    .replace(ex, "");
}
function cs(e, t, n) {
  if (((t = fp(t)), fp(e) !== t && n)) throw Error($(425));
}
function hl() {}
var wd = null,
  kd = null;
function xd(e, t) {
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
  tx = typeof clearTimeout == "function" ? clearTimeout : void 0,
  mp = typeof Promise == "function" ? Promise : void 0,
  nx =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof mp < "u"
      ? function (e) {
          return mp.resolve(null).then(e).catch(rx);
        }
      : _d;
function rx(e) {
  setTimeout(function () {
    throw e;
  });
}
function dc(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), oo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  oo(t);
}
function lr(e) {
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
function hp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ra = Math.random().toString(36).slice(2),
  mn = "__reactFiber$" + ra,
  fo = "__reactProps$" + ra,
  Ln = "__reactContainer$" + ra,
  Cd = "__reactEvents$" + ra,
  ix = "__reactListeners$" + ra,
  ax = "__reactHandles$" + ra;
function Dr(e) {
  var t = e[mn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ln] || n[mn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = hp(e); e !== null; ) {
          if ((n = e[mn])) return n;
          e = hp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Do(e) {
  return (
    (e = e[mn] || e[Ln]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function hi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error($(33));
}
function Xl(e) {
  return e[fo] || null;
}
var Td = [],
  pi = -1;
function Sr(e) {
  return { current: e };
}
function ve(e) {
  0 > pi || ((e.current = Td[pi]), (Td[pi] = null), pi--);
}
function fe(e, t) {
  pi++, (Td[pi] = e.current), (e.current = t);
}
var gr = {},
  nt = Sr(gr),
  ht = Sr(!1),
  Hr = gr;
function Hi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    a;
  for (a in n) i[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function pt(e) {
  return (e = e.childContextTypes), e != null;
}
function pl() {
  ve(ht), ve(nt);
}
function pp(e, t, n) {
  if (nt.current !== gr) throw Error($(168));
  fe(nt, t), fe(ht, n);
}
function gv(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error($(108, Wk(e) || "Unknown", i));
  return Ce({}, n, r);
}
function gl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gr),
    (Hr = nt.current),
    fe(nt, e),
    fe(ht, ht.current),
    !0
  );
}
function gp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error($(169));
  n
    ? ((e = gv(e, t, Hr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ve(ht),
      ve(nt),
      fe(nt, e))
    : ve(ht),
    fe(ht, n);
}
var xn = null,
  Ql = !1,
  fc = !1;
function yv(e) {
  xn === null ? (xn = [e]) : xn.push(e);
}
function ox(e) {
  (Ql = !0), yv(e);
}
function wr() {
  if (!fc && xn !== null) {
    fc = !0;
    var e = 0,
      t = ae;
    try {
      var n = xn;
      for (ae = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (xn = null), (Ql = !1);
    } catch (i) {
      throw (xn !== null && (xn = xn.slice(e + 1)), V0(If, wr), i);
    } finally {
      (ae = t), (fc = !1);
    }
  }
  return null;
}
var gi = [],
  yi = 0,
  yl = null,
  vl = 0,
  Bt = [],
  jt = 0,
  Ur = null,
  Tn = 1,
  Pn = "";
function Er(e, t) {
  (gi[yi++] = vl), (gi[yi++] = yl), (yl = e), (vl = t);
}
function vv(e, t, n) {
  (Bt[jt++] = Tn), (Bt[jt++] = Pn), (Bt[jt++] = Ur), (Ur = e);
  var r = Tn;
  e = Pn;
  var i = 32 - Zt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var a = 32 - Zt(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Tn = (1 << (32 - Zt(t) + i)) | (n << i) | r),
      (Pn = a + e);
  } else (Tn = (1 << a) | (n << i) | r), (Pn = e);
}
function Gf(e) {
  e.return !== null && (Er(e, 1), vv(e, 1, 0));
}
function Kf(e) {
  for (; e === yl; )
    (yl = gi[--yi]), (gi[yi] = null), (vl = gi[--yi]), (gi[yi] = null);
  for (; e === Ur; )
    (Ur = Bt[--jt]),
      (Bt[jt] = null),
      (Pn = Bt[--jt]),
      (Bt[jt] = null),
      (Tn = Bt[--jt]),
      (Bt[jt] = null);
}
var _t = null,
  xt = null,
  we = !1,
  Xt = null;
function bv(e, t) {
  var n = Nt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function yp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (_t = e), (xt = lr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (_t = e), (xt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ur !== null ? { id: Tn, overflow: Pn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Nt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (_t = e),
            (xt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Pd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ed(e) {
  if (we) {
    var t = xt;
    if (t) {
      var n = t;
      if (!yp(e, t)) {
        if (Pd(e)) throw Error($(418));
        t = lr(n.nextSibling);
        var r = _t;
        t && yp(e, t)
          ? bv(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (we = !1), (_t = e));
      }
    } else {
      if (Pd(e)) throw Error($(418));
      (e.flags = (e.flags & -4097) | 2), (we = !1), (_t = e);
    }
  }
}
function vp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  _t = e;
}
function ds(e) {
  if (e !== _t) return !1;
  if (!we) return vp(e), (we = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !xd(e.type, e.memoizedProps))),
    t && (t = xt))
  ) {
    if (Pd(e)) throw (Sv(), Error($(418)));
    for (; t; ) bv(e, t), (t = lr(t.nextSibling));
  }
  if ((vp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error($(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xt = lr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      xt = null;
    }
  } else xt = _t ? lr(e.stateNode.nextSibling) : null;
  return !0;
}
function Sv() {
  for (var e = xt; e; ) e = lr(e.nextSibling);
}
function Ui() {
  (xt = _t = null), (we = !1);
}
function Yf(e) {
  Xt === null ? (Xt = [e]) : Xt.push(e);
}
var sx = Vn.ReactCurrentBatchConfig;
function Jt(e, t) {
  if (e && e.defaultProps) {
    (t = Ce({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var bl = Sr(null),
  Sl = null,
  vi = null,
  Jf = null;
function qf() {
  Jf = vi = Sl = null;
}
function Xf(e) {
  var t = bl.current;
  ve(bl), (e._currentValue = t);
}
function Ad(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Fi(e, t) {
  (Sl = e),
    (Jf = vi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (mt = !0), (e.firstContext = null));
}
function Ht(e) {
  var t = e._currentValue;
  if (Jf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), vi === null)) {
      if (Sl === null) throw Error($(308));
      (vi = e), (Sl.dependencies = { lanes: 0, firstContext: e });
    } else vi = vi.next = e;
  return t;
}
var Fr = null;
function Qf(e) {
  Fr === null ? (Fr = [e]) : Fr.push(e);
}
function wv(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Qf(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    In(e, r)
  );
}
function In(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Xn = !1;
function Zf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function kv(e, t) {
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
function Mn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ur(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      In(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Qf(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    In(e, n)
  );
}
function Ls(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Bf(e, n);
  }
}
function bp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        a === null ? (i = a = o) : (a = a.next = o), (n = n.next);
      } while (n !== null);
      a === null ? (i = a = t) : (a = a.next = t);
    } else i = a = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function wl(e, t, n, r) {
  var i = e.updateQueue;
  Xn = !1;
  var a = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), o === null ? (a = u) : (o.next = u), (o = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== o &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (a !== null) {
    var d = i.baseState;
    (o = 0), (c = u = l = null), (s = a);
    do {
      var f = s.lane,
        h = s.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = e,
            b = s;
          switch (((f = t), (h = n), b.tag)) {
            case 1:
              if (((y = b.payload), typeof y == "function")) {
                d = y.call(h, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = b.payload),
                (f = typeof y == "function" ? y.call(h, d, f) : y),
                f == null)
              )
                break e;
              d = Ce({}, d, f);
              break e;
            case 2:
              Xn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [s]) : f.push(s));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (o |= f);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    (Kr |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function Sp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error($(191, i));
        i.call(r);
      }
    }
}
var xv = new w0.Component().refs;
function Md(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ce({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Zl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Xr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ot(),
      i = dr(e),
      a = Mn(r, i);
    (a.payload = t),
      n != null && (a.callback = n),
      (t = ur(e, a, i)),
      t !== null && (en(t, e, i, r), Ls(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ot(),
      i = dr(e),
      a = Mn(r, i);
    (a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = ur(e, a, i)),
      t !== null && (en(t, e, i, r), Ls(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ot(),
      r = dr(e),
      i = Mn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = ur(e, i, r)),
      t !== null && (en(t, e, r, n), Ls(t, e, r));
  },
};
function wp(e, t, n, r, i, a, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, a, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !lo(n, r) || !lo(i, a)
      : !0
  );
}
function _v(e, t, n) {
  var r = !1,
    i = gr,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = Ht(a))
      : ((i = pt(t) ? Hr : nt.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? Hi(e, i) : gr)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Zl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function kp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Zl.enqueueReplaceState(t, t.state, null);
}
function $d(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = xv), Zf(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (i.context = Ht(a))
    : ((a = pt(t) ? Hr : nt.current), (i.context = Hi(e, a))),
    (i.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (Md(e, t, a, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Zl.enqueueReplaceState(i, i.state, null),
      wl(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ha(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error($(309));
        var r = n.stateNode;
      }
      if (!r) throw Error($(147, e));
      var i = r,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (o) {
            var s = i.refs;
            s === xv && (s = i.refs = {}),
              o === null ? delete s[a] : (s[a] = o);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error($(284));
    if (!n._owner) throw Error($(290, e));
  }
  return e;
}
function fs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      $(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function xp(e) {
  var t = e._init;
  return t(e._payload);
}
function Cv(e) {
  function t(g, m) {
    if (e) {
      var p = g.deletions;
      p === null ? ((g.deletions = [m]), (g.flags |= 16)) : p.push(m);
    }
  }
  function n(g, m) {
    if (!e) return null;
    for (; m !== null; ) t(g, m), (m = m.sibling);
    return null;
  }
  function r(g, m) {
    for (g = new Map(); m !== null; )
      m.key !== null ? g.set(m.key, m) : g.set(m.index, m), (m = m.sibling);
    return g;
  }
  function i(g, m) {
    return (g = fr(g, m)), (g.index = 0), (g.sibling = null), g;
  }
  function a(g, m, p) {
    return (
      (g.index = p),
      e
        ? ((p = g.alternate),
          p !== null
            ? ((p = p.index), p < m ? ((g.flags |= 2), m) : p)
            : ((g.flags |= 2), m))
        : ((g.flags |= 1048576), m)
    );
  }
  function o(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function s(g, m, p, x) {
    return m === null || m.tag !== 6
      ? ((m = bc(p, g.mode, x)), (m.return = g), m)
      : ((m = i(m, p)), (m.return = g), m);
  }
  function l(g, m, p, x) {
    var P = p.type;
    return P === ci
      ? c(g, m, p.props.children, x, p.key)
      : m !== null &&
        (m.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === qn &&
            xp(P) === m.type))
      ? ((x = i(m, p.props)), (x.ref = ha(g, m, p)), (x.return = g), x)
      : ((x = Vs(p.type, p.key, p.props, null, g.mode, x)),
        (x.ref = ha(g, m, p)),
        (x.return = g),
        x);
  }
  function u(g, m, p, x) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== p.containerInfo ||
      m.stateNode.implementation !== p.implementation
      ? ((m = Sc(p, g.mode, x)), (m.return = g), m)
      : ((m = i(m, p.children || [])), (m.return = g), m);
  }
  function c(g, m, p, x, P) {
    return m === null || m.tag !== 7
      ? ((m = Nr(p, g.mode, x, P)), (m.return = g), m)
      : ((m = i(m, p)), (m.return = g), m);
  }
  function d(g, m, p) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = bc("" + m, g.mode, p)), (m.return = g), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ts:
          return (
            (p = Vs(m.type, m.key, m.props, null, g.mode, p)),
            (p.ref = ha(g, null, m)),
            (p.return = g),
            p
          );
        case ui:
          return (m = Sc(m, g.mode, p)), (m.return = g), m;
        case qn:
          var x = m._init;
          return d(g, x(m._payload), p);
      }
      if (_a(m) || ua(m))
        return (m = Nr(m, g.mode, p, null)), (m.return = g), m;
      fs(g, m);
    }
    return null;
  }
  function f(g, m, p, x) {
    var P = m !== null ? m.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return P !== null ? null : s(g, m, "" + p, x);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ts:
          return p.key === P ? l(g, m, p, x) : null;
        case ui:
          return p.key === P ? u(g, m, p, x) : null;
        case qn:
          return (P = p._init), f(g, m, P(p._payload), x);
      }
      if (_a(p) || ua(p)) return P !== null ? null : c(g, m, p, x, null);
      fs(g, p);
    }
    return null;
  }
  function h(g, m, p, x, P) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (g = g.get(p) || null), s(m, g, "" + x, P);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ts:
          return (g = g.get(x.key === null ? p : x.key) || null), l(m, g, x, P);
        case ui:
          return (g = g.get(x.key === null ? p : x.key) || null), u(m, g, x, P);
        case qn:
          var M = x._init;
          return h(g, m, p, M(x._payload), P);
      }
      if (_a(x) || ua(x)) return (g = g.get(p) || null), c(m, g, x, P, null);
      fs(m, x);
    }
    return null;
  }
  function y(g, m, p, x) {
    for (
      var P = null, M = null, T = m, A = (m = 0), F = null;
      T !== null && A < p.length;
      A++
    ) {
      T.index > A ? ((F = T), (T = null)) : (F = T.sibling);
      var L = f(g, T, p[A], x);
      if (L === null) {
        T === null && (T = F);
        break;
      }
      e && T && L.alternate === null && t(g, T),
        (m = a(L, m, A)),
        M === null ? (P = L) : (M.sibling = L),
        (M = L),
        (T = F);
    }
    if (A === p.length) return n(g, T), we && Er(g, A), P;
    if (T === null) {
      for (; A < p.length; A++)
        (T = d(g, p[A], x)),
          T !== null &&
            ((m = a(T, m, A)), M === null ? (P = T) : (M.sibling = T), (M = T));
      return we && Er(g, A), P;
    }
    for (T = r(g, T); A < p.length; A++)
      (F = h(T, g, A, p[A], x)),
        F !== null &&
          (e && F.alternate !== null && T.delete(F.key === null ? A : F.key),
          (m = a(F, m, A)),
          M === null ? (P = F) : (M.sibling = F),
          (M = F));
    return (
      e &&
        T.forEach(function (le) {
          return t(g, le);
        }),
      we && Er(g, A),
      P
    );
  }
  function b(g, m, p, x) {
    var P = ua(p);
    if (typeof P != "function") throw Error($(150));
    if (((p = P.call(p)), p == null)) throw Error($(151));
    for (
      var M = (P = null), T = m, A = (m = 0), F = null, L = p.next();
      T !== null && !L.done;
      A++, L = p.next()
    ) {
      T.index > A ? ((F = T), (T = null)) : (F = T.sibling);
      var le = f(g, T, L.value, x);
      if (le === null) {
        T === null && (T = F);
        break;
      }
      e && T && le.alternate === null && t(g, T),
        (m = a(le, m, A)),
        M === null ? (P = le) : (M.sibling = le),
        (M = le),
        (T = F);
    }
    if (L.done) return n(g, T), we && Er(g, A), P;
    if (T === null) {
      for (; !L.done; A++, L = p.next())
        (L = d(g, L.value, x)),
          L !== null &&
            ((m = a(L, m, A)), M === null ? (P = L) : (M.sibling = L), (M = L));
      return we && Er(g, A), P;
    }
    for (T = r(g, T); !L.done; A++, L = p.next())
      (L = h(T, g, A, L.value, x)),
        L !== null &&
          (e && L.alternate !== null && T.delete(L.key === null ? A : L.key),
          (m = a(L, m, A)),
          M === null ? (P = L) : (M.sibling = L),
          (M = L));
    return (
      e &&
        T.forEach(function (pe) {
          return t(g, pe);
        }),
      we && Er(g, A),
      P
    );
  }
  function _(g, m, p, x) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === ci &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case ts:
          e: {
            for (var P = p.key, M = m; M !== null; ) {
              if (M.key === P) {
                if (((P = p.type), P === ci)) {
                  if (M.tag === 7) {
                    n(g, M.sibling),
                      (m = i(M, p.props.children)),
                      (m.return = g),
                      (g = m);
                    break e;
                  }
                } else if (
                  M.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === qn &&
                    xp(P) === M.type)
                ) {
                  n(g, M.sibling),
                    (m = i(M, p.props)),
                    (m.ref = ha(g, M, p)),
                    (m.return = g),
                    (g = m);
                  break e;
                }
                n(g, M);
                break;
              } else t(g, M);
              M = M.sibling;
            }
            p.type === ci
              ? ((m = Nr(p.props.children, g.mode, x, p.key)),
                (m.return = g),
                (g = m))
              : ((x = Vs(p.type, p.key, p.props, null, g.mode, x)),
                (x.ref = ha(g, m, p)),
                (x.return = g),
                (g = x));
          }
          return o(g);
        case ui:
          e: {
            for (M = p.key; m !== null; ) {
              if (m.key === M)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === p.containerInfo &&
                  m.stateNode.implementation === p.implementation
                ) {
                  n(g, m.sibling),
                    (m = i(m, p.children || [])),
                    (m.return = g),
                    (g = m);
                  break e;
                } else {
                  n(g, m);
                  break;
                }
              else t(g, m);
              m = m.sibling;
            }
            (m = Sc(p, g.mode, x)), (m.return = g), (g = m);
          }
          return o(g);
        case qn:
          return (M = p._init), _(g, m, M(p._payload), x);
      }
      if (_a(p)) return y(g, m, p, x);
      if (ua(p)) return b(g, m, p, x);
      fs(g, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        m !== null && m.tag === 6
          ? (n(g, m.sibling), (m = i(m, p)), (m.return = g), (g = m))
          : (n(g, m), (m = bc(p, g.mode, x)), (m.return = g), (g = m)),
        o(g))
      : n(g, m);
  }
  return _;
}
var Gi = Cv(!0),
  Tv = Cv(!1),
  Fo = {},
  pn = Sr(Fo),
  mo = Sr(Fo),
  ho = Sr(Fo);
function Lr(e) {
  if (e === Fo) throw Error($(174));
  return e;
}
function em(e, t) {
  switch ((fe(ho, t), fe(mo, e), fe(pn, Fo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ud(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ud(t, e));
  }
  ve(pn), fe(pn, t);
}
function Ki() {
  ve(pn), ve(mo), ve(ho);
}
function Pv(e) {
  Lr(ho.current);
  var t = Lr(pn.current),
    n = ud(t, e.type);
  t !== n && (fe(mo, e), fe(pn, n));
}
function tm(e) {
  mo.current === e && (ve(pn), ve(mo));
}
var ke = Sr(0);
function kl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
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
var mc = [];
function nm() {
  for (var e = 0; e < mc.length; e++)
    mc[e]._workInProgressVersionPrimary = null;
  mc.length = 0;
}
var Is = Vn.ReactCurrentDispatcher,
  hc = Vn.ReactCurrentBatchConfig,
  Gr = 0,
  _e = null,
  Ie = null,
  Oe = null,
  xl = !1,
  ja = !1,
  po = 0,
  lx = 0;
function Qe() {
  throw Error($(321));
}
function rm(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!tn(e[n], t[n])) return !1;
  return !0;
}
function im(e, t, n, r, i, a) {
  if (
    ((Gr = a),
    (_e = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Is.current = e === null || e.memoizedState === null ? fx : mx),
    (e = n(r, i)),
    ja)
  ) {
    a = 0;
    do {
      if (((ja = !1), (po = 0), 25 <= a)) throw Error($(301));
      (a += 1),
        (Oe = Ie = null),
        (t.updateQueue = null),
        (Is.current = hx),
        (e = n(r, i));
    } while (ja);
  }
  if (
    ((Is.current = _l),
    (t = Ie !== null && Ie.next !== null),
    (Gr = 0),
    (Oe = Ie = _e = null),
    (xl = !1),
    t)
  )
    throw Error($(300));
  return e;
}
function am() {
  var e = po !== 0;
  return (po = 0), e;
}
function ln() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Oe === null ? (_e.memoizedState = Oe = e) : (Oe = Oe.next = e), Oe;
}
function Ut() {
  if (Ie === null) {
    var e = _e.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ie.next;
  var t = Oe === null ? _e.memoizedState : Oe.next;
  if (t !== null) (Oe = t), (Ie = e);
  else {
    if (e === null) throw Error($(310));
    (Ie = e),
      (e = {
        memoizedState: Ie.memoizedState,
        baseState: Ie.baseState,
        baseQueue: Ie.baseQueue,
        queue: Ie.queue,
        next: null,
      }),
      Oe === null ? (_e.memoizedState = Oe = e) : (Oe = Oe.next = e);
  }
  return Oe;
}
function go(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function pc(e) {
  var t = Ut(),
    n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = Ie,
    i = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = a.next), (a.next = o);
    }
    (r.baseQueue = i = a), (n.pending = null);
  }
  if (i !== null) {
    (a = i.next), (r = r.baseState);
    var s = (o = null),
      l = null,
      u = a;
    do {
      var c = u.lane;
      if ((Gr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (o = r)) : (l = l.next = d),
          (_e.lanes |= c),
          (Kr |= c);
      }
      u = u.next;
    } while (u !== null && u !== a);
    l === null ? (o = r) : (l.next = s),
      tn(r, t.memoizedState) || (mt = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (a = i.lane), (_e.lanes |= a), (Kr |= a), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function gc(e) {
  var t = Ut(),
    n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (a = e(a, o.action)), (o = o.next);
    while (o !== i);
    tn(a, t.memoizedState) || (mt = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, r];
}
function Ev() {}
function Av(e, t) {
  var n = _e,
    r = Ut(),
    i = t(),
    a = !tn(r.memoizedState, i);
  if (
    (a && ((r.memoizedState = i), (mt = !0)),
    (r = r.queue),
    om(zv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (Oe !== null && Oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      yo(9, $v.bind(null, n, r, i, t), void 0, null),
      We === null)
    )
      throw Error($(349));
    Gr & 30 || Mv(n, t, i);
  }
  return i;
}
function Mv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = _e.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (_e.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function $v(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Rv(t) && Dv(e);
}
function zv(e, t, n) {
  return n(function () {
    Rv(t) && Dv(e);
  });
}
function Rv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !tn(e, n);
  } catch {
    return !0;
  }
}
function Dv(e) {
  var t = In(e, 1);
  t !== null && en(t, e, 1, -1);
}
function _p(e) {
  var t = ln();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: go,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = dx.bind(null, _e, e)),
    [t.memoizedState, e]
  );
}
function yo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = _e.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (_e.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Fv() {
  return Ut().memoizedState;
}
function Bs(e, t, n, r) {
  var i = ln();
  (_e.flags |= e),
    (i.memoizedState = yo(1 | t, n, void 0, r === void 0 ? null : r));
}
function eu(e, t, n, r) {
  var i = Ut();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (Ie !== null) {
    var o = Ie.memoizedState;
    if (((a = o.destroy), r !== null && rm(r, o.deps))) {
      i.memoizedState = yo(t, n, a, r);
      return;
    }
  }
  (_e.flags |= e), (i.memoizedState = yo(1 | t, n, a, r));
}
function Cp(e, t) {
  return Bs(8390656, 8, e, t);
}
function om(e, t) {
  return eu(2048, 8, e, t);
}
function Lv(e, t) {
  return eu(4, 2, e, t);
}
function Iv(e, t) {
  return eu(4, 4, e, t);
}
function Bv(e, t) {
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
function jv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), eu(4, 4, Bv.bind(null, t, e), n)
  );
}
function sm() {}
function Nv(e, t) {
  var n = Ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && rm(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ov(e, t) {
  var n = Ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && rm(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Vv(e, t, n) {
  return Gr & 21
    ? (tn(n, t) || ((n = U0()), (_e.lanes |= n), (Kr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (mt = !0)), (e.memoizedState = n));
}
function ux(e, t) {
  var n = ae;
  (ae = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = hc.transition;
  hc.transition = {};
  try {
    e(!1), t();
  } finally {
    (ae = n), (hc.transition = r);
  }
}
function Wv() {
  return Ut().memoizedState;
}
function cx(e, t, n) {
  var r = dr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Hv(e))
  )
    Uv(t, n);
  else if (((n = wv(e, t, n, r)), n !== null)) {
    var i = ot();
    en(n, e, r, i), Gv(n, t, r);
  }
}
function dx(e, t, n) {
  var r = dr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Hv(e)) Uv(t, i);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = a(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), tn(s, o))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Qf(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = wv(e, t, i, r)),
      n !== null && ((i = ot()), en(n, e, r, i), Gv(n, t, r));
  }
}
function Hv(e) {
  var t = e.alternate;
  return e === _e || (t !== null && t === _e);
}
function Uv(e, t) {
  ja = xl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Gv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Bf(e, n);
  }
}
var _l = {
    readContext: Ht,
    useCallback: Qe,
    useContext: Qe,
    useEffect: Qe,
    useImperativeHandle: Qe,
    useInsertionEffect: Qe,
    useLayoutEffect: Qe,
    useMemo: Qe,
    useReducer: Qe,
    useRef: Qe,
    useState: Qe,
    useDebugValue: Qe,
    useDeferredValue: Qe,
    useTransition: Qe,
    useMutableSource: Qe,
    useSyncExternalStore: Qe,
    useId: Qe,
    unstable_isNewReconciler: !1,
  },
  fx = {
    readContext: Ht,
    useCallback: function (e, t) {
      return (ln().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ht,
    useEffect: Cp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Bs(4194308, 4, Bv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Bs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Bs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ln();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ln();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = cx.bind(null, _e, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ln();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: _p,
    useDebugValue: sm,
    useDeferredValue: function (e) {
      return (ln().memoizedState = e);
    },
    useTransition: function () {
      var e = _p(!1),
        t = e[0];
      return (e = ux.bind(null, e[1])), (ln().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = _e,
        i = ln();
      if (we) {
        if (n === void 0) throw Error($(407));
        n = n();
      } else {
        if (((n = t()), We === null)) throw Error($(349));
        Gr & 30 || Mv(r, t, n);
      }
      i.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (i.queue = a),
        Cp(zv.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        yo(9, $v.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ln(),
        t = We.identifierPrefix;
      if (we) {
        var n = Pn,
          r = Tn;
        (n = (r & ~(1 << (32 - Zt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = po++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = lx++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  mx = {
    readContext: Ht,
    useCallback: Nv,
    useContext: Ht,
    useEffect: om,
    useImperativeHandle: jv,
    useInsertionEffect: Lv,
    useLayoutEffect: Iv,
    useMemo: Ov,
    useReducer: pc,
    useRef: Fv,
    useState: function () {
      return pc(go);
    },
    useDebugValue: sm,
    useDeferredValue: function (e) {
      var t = Ut();
      return Vv(t, Ie.memoizedState, e);
    },
    useTransition: function () {
      var e = pc(go)[0],
        t = Ut().memoizedState;
      return [e, t];
    },
    useMutableSource: Ev,
    useSyncExternalStore: Av,
    useId: Wv,
    unstable_isNewReconciler: !1,
  },
  hx = {
    readContext: Ht,
    useCallback: Nv,
    useContext: Ht,
    useEffect: om,
    useImperativeHandle: jv,
    useInsertionEffect: Lv,
    useLayoutEffect: Iv,
    useMemo: Ov,
    useReducer: gc,
    useRef: Fv,
    useState: function () {
      return gc(go);
    },
    useDebugValue: sm,
    useDeferredValue: function (e) {
      var t = Ut();
      return Ie === null ? (t.memoizedState = e) : Vv(t, Ie.memoizedState, e);
    },
    useTransition: function () {
      var e = gc(go)[0],
        t = Ut().memoizedState;
      return [e, t];
    },
    useMutableSource: Ev,
    useSyncExternalStore: Av,
    useId: Wv,
    unstable_isNewReconciler: !1,
  };
function Yi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Vk(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (a) {
    i =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function yc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function zd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var px = typeof WeakMap == "function" ? WeakMap : Map;
function Kv(e, t, n) {
  (n = Mn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Tl || ((Tl = !0), (Vd = r)), zd(e, t);
    }),
    n
  );
}
function Yv(e, t, n) {
  (n = Mn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        zd(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (n.callback = function () {
        zd(e, t),
          typeof r != "function" &&
            (cr === null ? (cr = new Set([this])) : cr.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Tp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new px();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Ax.bind(null, e, t, n)), t.then(e, e));
}
function Pp(e) {
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
function Ep(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Mn(-1, 1)), (t.tag = 2), ur(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var gx = Vn.ReactCurrentOwner,
  mt = !1;
function it(e, t, n, r) {
  t.child = e === null ? Tv(t, null, n, r) : Gi(t, e.child, n, r);
}
function Ap(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return (
    Fi(t, i),
    (r = im(e, t, n, r, a, i)),
    (n = am()),
    e !== null && !mt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Bn(e, t, i))
      : (we && n && Gf(t), (t.flags |= 1), it(e, t, r, i), t.child)
  );
}
function Mp(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" &&
      !pm(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), Jv(e, t, a, r, i))
      : ((e = Vs(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & i))) {
    var o = a.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : lo), n(o, r) && e.ref === t.ref)
    )
      return Bn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = fr(a, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Jv(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (lo(a, r) && e.ref === t.ref)
      if (((mt = !1), (t.pendingProps = r = a), (e.lanes & i) !== 0))
        e.flags & 131072 && (mt = !0);
      else return (t.lanes = e.lanes), Bn(e, t, i);
  }
  return Rd(e, t, n, r, i);
}
function qv(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        fe(Si, kt),
        (kt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          fe(Si, kt),
          (kt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        fe(Si, kt),
        (kt |= r);
    }
  else
    a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      fe(Si, kt),
      (kt |= r);
  return it(e, t, i, n), t.child;
}
function Xv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Rd(e, t, n, r, i) {
  var a = pt(n) ? Hr : nt.current;
  return (
    (a = Hi(t, a)),
    Fi(t, i),
    (n = im(e, t, n, r, a, i)),
    (r = am()),
    e !== null && !mt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Bn(e, t, i))
      : (we && r && Gf(t), (t.flags |= 1), it(e, t, n, i), t.child)
  );
}
function $p(e, t, n, r, i) {
  if (pt(n)) {
    var a = !0;
    gl(t);
  } else a = !1;
  if ((Fi(t, i), t.stateNode === null))
    js(e, t), _v(t, n, r), $d(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ht(u))
      : ((u = pt(n) ? Hr : nt.current), (u = Hi(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== r || l !== u) && kp(t, o, r, u)),
      (Xn = !1);
    var f = t.memoizedState;
    (o.state = f),
      wl(t, r, o, i),
      (l = t.memoizedState),
      s !== r || f !== l || ht.current || Xn
        ? (typeof c == "function" && (Md(t, n, c, r), (l = t.memoizedState)),
          (s = Xn || wp(t, n, s, r, f, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = s))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      kv(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Jt(t.type, s)),
      (o.props = u),
      (d = t.pendingProps),
      (f = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Ht(l))
        : ((l = pt(n) ? Hr : nt.current), (l = Hi(t, l)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== d || f !== l) && kp(t, o, r, l)),
      (Xn = !1),
      (f = t.memoizedState),
      (o.state = f),
      wl(t, r, o, i);
    var y = t.memoizedState;
    s !== d || f !== y || ht.current || Xn
      ? (typeof h == "function" && (Md(t, n, h, r), (y = t.memoizedState)),
        (u = Xn || wp(t, n, u, r, f, y, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Dd(e, t, n, r, a, i);
}
function Dd(e, t, n, r, i, a) {
  Xv(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && gp(t, n, !1), Bn(e, t, a);
  (r = t.stateNode), (gx.current = t);
  var s =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Gi(t, e.child, null, a)), (t.child = Gi(t, null, s, a)))
      : it(e, t, s, a),
    (t.memoizedState = r.state),
    i && gp(t, n, !0),
    t.child
  );
}
function Qv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? pp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && pp(e, t.context, !1),
    em(e, t.containerInfo);
}
function zp(e, t, n, r, i) {
  return Ui(), Yf(i), (t.flags |= 256), it(e, t, n, r), t.child;
}
var Fd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ld(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Zv(e, t, n) {
  var r = t.pendingProps,
    i = ke.current,
    a = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    fe(ke, i & 1),
    e === null)
  )
    return (
      Ed(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = o))
                : (a = ru(o, r, 0, null)),
              (e = Nr(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = Ld(n)),
              (t.memoizedState = Fd),
              e)
            : lm(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return yx(e, t, o, r, s, i, n);
  if (a) {
    (a = r.fallback), (o = t.mode), (i = e.child), (s = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = fr(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (a = fr(s, a)) : ((a = Nr(a, o, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ld(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (a.memoizedState = o),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = Fd),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = fr(a, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function lm(e, t) {
  return (
    (t = ru({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ms(e, t, n, r) {
  return (
    r !== null && Yf(r),
    Gi(t, e.child, null, n),
    (e = lm(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function yx(e, t, n, r, i, a, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = yc(Error($(422)))), ms(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = r.fallback),
        (i = t.mode),
        (r = ru({ mode: "visible", children: r.children }, i, 0, null)),
        (a = Nr(a, i, o, null)),
        (a.flags |= 2),
        (r.return = t),
        (a.return = t),
        (r.sibling = a),
        (t.child = r),
        t.mode & 1 && Gi(t, e.child, null, o),
        (t.child.memoizedState = Ld(o)),
        (t.memoizedState = Fd),
        a);
  if (!(t.mode & 1)) return ms(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (a = Error($(419))), (r = yc(a, r, void 0)), ms(e, t, o, r);
  }
  if (((s = (o & e.childLanes) !== 0), mt || s)) {
    if (((r = We), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== a.retryLane &&
          ((a.retryLane = i), In(e, i), en(r, e, i, -1));
    }
    return hm(), (r = yc(Error($(421)))), ms(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Mx.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (xt = lr(i.nextSibling)),
      (_t = t),
      (we = !0),
      (Xt = null),
      e !== null &&
        ((Bt[jt++] = Tn),
        (Bt[jt++] = Pn),
        (Bt[jt++] = Ur),
        (Tn = e.id),
        (Pn = e.overflow),
        (Ur = t)),
      (t = lm(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Rp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ad(e.return, t, n);
}
function vc(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = i));
}
function e1(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    a = r.tail;
  if ((it(e, t, r.children, n), (r = ke.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Rp(e, n, t);
        else if (e.tag === 19) Rp(e, n, t);
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
    r &= 1;
  }
  if ((fe(ke, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && kl(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          vc(t, !1, i, n, a);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && kl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        vc(t, !0, n, null, a);
        break;
      case "together":
        vc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function js(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Bn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Kr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error($(153));
  if (t.child !== null) {
    for (
      e = t.child, n = fr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = fr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function vx(e, t, n) {
  switch (t.tag) {
    case 3:
      Qv(t), Ui();
      break;
    case 5:
      Pv(t);
      break;
    case 1:
      pt(t.type) && gl(t);
      break;
    case 4:
      em(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      fe(bl, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (fe(ke, ke.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Zv(e, t, n)
          : (fe(ke, ke.current & 1),
            (e = Bn(e, t, n)),
            e !== null ? e.sibling : null);
      fe(ke, ke.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return e1(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        fe(ke, ke.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), qv(e, t, n);
  }
  return Bn(e, t, n);
}
var t1, Id, n1, r1;
t1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Id = function () {};
n1 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Lr(pn.current);
    var a = null;
    switch (n) {
      case "input":
        (i = ad(e, i)), (r = ad(e, r)), (a = []);
        break;
      case "select":
        (i = Ce({}, i, { value: void 0 })),
          (r = Ce({}, r, { value: void 0 })),
          (a = []);
        break;
      case "textarea":
        (i = ld(e, i)), (r = ld(e, r)), (a = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = hl);
    }
    cd(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var s = i[u];
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (to.hasOwnProperty(u)
              ? a || (a = [])
              : (a = a || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((s = i?.[u]),
        r.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                s[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (a || (a = []), a.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (a = a || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (a = a || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (to.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && ge("scroll", e),
                  a || s === l || (a = []))
                : (a = a || []).push(u, l));
    }
    n && (a = a || []).push("style", n);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
r1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function pa(e, t) {
  if (!we)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ze(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function bx(e, t, n) {
  var r = t.pendingProps;
  switch ((Kf(t), t.tag)) {
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
      return Ze(t), null;
    case 1:
      return pt(t.type) && pl(), Ze(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ki(),
        ve(ht),
        ve(nt),
        nm(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ds(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Xt !== null && (Ud(Xt), (Xt = null)))),
        Id(e, t),
        Ze(t),
        null
      );
    case 5:
      tm(t);
      var i = Lr(ho.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        n1(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error($(166));
          return Ze(t), null;
        }
        if (((e = Lr(pn.current)), ds(t))) {
          (r = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((r[mn] = t), (r[fo] = a), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ge("cancel", r), ge("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ge("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ta.length; i++) ge(Ta[i], r);
              break;
            case "source":
              ge("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ge("error", r), ge("load", r);
              break;
            case "details":
              ge("toggle", r);
              break;
            case "input":
              Vh(r, a), ge("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!a.multiple }),
                ge("invalid", r);
              break;
            case "textarea":
              Hh(r, a), ge("invalid", r);
          }
          cd(n, a), (i = null);
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var s = a[o];
              o === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (a.suppressHydrationWarning !== !0 &&
                      cs(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (a.suppressHydrationWarning !== !0 &&
                      cs(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : to.hasOwnProperty(o) &&
                  s != null &&
                  o === "onScroll" &&
                  ge("scroll", r);
            }
          switch (n) {
            case "input":
              ns(r), Wh(r, a, !0);
              break;
            case "textarea":
              ns(r), Uh(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = hl);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = M0(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[mn] = t),
            (e[fo] = r),
            t1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = dd(n, r)), n)) {
              case "dialog":
                ge("cancel", e), ge("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ta.length; i++) ge(Ta[i], e);
                i = r;
                break;
              case "source":
                ge("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ge("error", e), ge("load", e), (i = r);
                break;
              case "details":
                ge("toggle", e), (i = r);
                break;
              case "input":
                Vh(e, r), (i = ad(e, r)), ge("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Ce({}, r, { value: void 0 })),
                  ge("invalid", e);
                break;
              case "textarea":
                Hh(e, r), (i = ld(e, r)), ge("invalid", e);
                break;
              default:
                i = r;
            }
            cd(n, i), (s = i);
            for (a in s)
              if (s.hasOwnProperty(a)) {
                var l = s[a];
                a === "style"
                  ? R0(e, l)
                  : a === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && $0(e, l))
                  : a === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && no(e, l)
                    : typeof l == "number" && no(e, "" + l)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    a !== "autoFocus" &&
                    (to.hasOwnProperty(a)
                      ? l != null && a === "onScroll" && ge("scroll", e)
                      : l != null && zf(e, a, l, o));
              }
            switch (n) {
              case "input":
                ns(e), Wh(e, r, !1);
                break;
              case "textarea":
                ns(e), Uh(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? $i(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      $i(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = hl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ze(t), null;
    case 6:
      if (e && t.stateNode != null) r1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error($(166));
        if (((n = Lr(ho.current)), Lr(pn.current), ds(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[mn] = t),
            (a = r.nodeValue !== n) && ((e = _t), e !== null))
          )
            switch (e.tag) {
              case 3:
                cs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  cs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[mn] = t),
            (t.stateNode = r);
      }
      return Ze(t), null;
    case 13:
      if (
        (ve(ke),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (we && xt !== null && t.mode & 1 && !(t.flags & 128))
          Sv(), Ui(), (t.flags |= 98560), (a = !1);
        else if (((a = ds(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error($(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error($(317));
            a[mn] = t;
          } else
            Ui(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ze(t), (a = !1);
        } else Xt !== null && (Ud(Xt), (Xt = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ke.current & 1 ? Be === 0 && (Be = 3) : hm())),
          t.updateQueue !== null && (t.flags |= 4),
          Ze(t),
          null);
    case 4:
      return (
        Ki(), Id(e, t), e === null && uo(t.stateNode.containerInfo), Ze(t), null
      );
    case 10:
      return Xf(t.type._context), Ze(t), null;
    case 17:
      return pt(t.type) && pl(), Ze(t), null;
    case 19:
      if ((ve(ke), (a = t.memoizedState), a === null)) return Ze(t), null;
      if (((r = (t.flags & 128) !== 0), (o = a.rendering), o === null))
        if (r) pa(a, !1);
        else {
          if (Be !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = kl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    pa(a, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (o = a.alternate),
                    o === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return fe(ke, (ke.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            Me() > Ji &&
            ((t.flags |= 128), (r = !0), pa(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = kl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              pa(a, !0),
              a.tail === null && a.tailMode === "hidden" && !o.alternate && !we)
            )
              return Ze(t), null;
          } else
            2 * Me() - a.renderingStartTime > Ji &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), pa(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = a.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (a.last = o));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = Me()),
          (t.sibling = null),
          (n = ke.current),
          fe(ke, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ze(t), null);
    case 22:
    case 23:
      return (
        mm(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? kt & 1073741824 && (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ze(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error($(156, t.tag));
}
function Sx(e, t) {
  switch ((Kf(t), t.tag)) {
    case 1:
      return (
        pt(t.type) && pl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ki(),
        ve(ht),
        ve(nt),
        nm(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return tm(t), null;
    case 13:
      if (
        (ve(ke), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error($(340));
        Ui();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ve(ke), null;
    case 4:
      return Ki(), null;
    case 10:
      return Xf(t.type._context), null;
    case 22:
    case 23:
      return mm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var hs = !1,
  tt = !1,
  wx = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function bi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Pe(e, t, r);
      }
    else n.current = null;
}
function Bd(e, t, n) {
  try {
    n();
  } catch (r) {
    Pe(e, t, r);
  }
}
var Dp = !1;
function kx(e, t) {
  if (((wd = dl), (e = sv()), Uf(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (i !== 0 && d.nodeType !== 3) || (s = o + i),
                d !== a || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (s = o),
                f === a && ++c === r && (l = o),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = h;
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (kd = { focusedElem: e, selectionRange: n }, dl = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var b = y.memoizedProps,
                    _ = y.memoizedState,
                    g = t.stateNode,
                    m = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? b : Jt(t.type, b),
                      _
                    );
                  g.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error($(163));
            }
        } catch (x) {
          Pe(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (y = Dp), (Dp = !1), y;
}
function Na(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        (i.destroy = void 0), a !== void 0 && Bd(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function tu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function jd(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function i1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), i1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[mn], delete t[fo], delete t[Cd], delete t[ix], delete t[ax])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function a1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || a1(e.return)) return null;
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
function Nd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = hl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Nd(e, t, n), e = e.sibling; e !== null; ) Nd(e, t, n), (e = e.sibling);
}
function Od(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Od(e, t, n), e = e.sibling; e !== null; ) Od(e, t, n), (e = e.sibling);
}
var Ye = null,
  qt = !1;
function Un(e, t, n) {
  for (n = n.child; n !== null; ) o1(e, t, n), (n = n.sibling);
}
function o1(e, t, n) {
  if (hn && typeof hn.onCommitFiberUnmount == "function")
    try {
      hn.onCommitFiberUnmount(Kl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      tt || bi(n, t);
    case 6:
      var r = Ye,
        i = qt;
      (Ye = null),
        Un(e, t, n),
        (Ye = r),
        (qt = i),
        Ye !== null &&
          (qt
            ? ((e = Ye),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ye.removeChild(n.stateNode));
      break;
    case 18:
      Ye !== null &&
        (qt
          ? ((e = Ye),
            (n = n.stateNode),
            e.nodeType === 8
              ? dc(e.parentNode, n)
              : e.nodeType === 1 && dc(e, n),
            oo(e))
          : dc(Ye, n.stateNode));
      break;
    case 4:
      (r = Ye),
        (i = qt),
        (Ye = n.stateNode.containerInfo),
        (qt = !0),
        Un(e, t, n),
        (Ye = r),
        (qt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !tt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var a = i,
            o = a.destroy;
          (a = a.tag),
            o !== void 0 && (a & 2 || a & 4) && Bd(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      Un(e, t, n);
      break;
    case 1:
      if (
        !tt &&
        (bi(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Pe(n, t, s);
        }
      Un(e, t, n);
      break;
    case 21:
      Un(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((tt = (r = tt) || n.memoizedState !== null), Un(e, t, n), (tt = r))
        : Un(e, t, n);
      break;
    default:
      Un(e, t, n);
  }
}
function Lp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new wx()),
      t.forEach(function (r) {
        var i = $x.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Kt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var a = e,
          o = t,
          s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Ye = s.stateNode), (qt = !1);
              break e;
            case 3:
              (Ye = s.stateNode.containerInfo), (qt = !0);
              break e;
            case 4:
              (Ye = s.stateNode.containerInfo), (qt = !0);
              break e;
          }
          s = s.return;
        }
        if (Ye === null) throw Error($(160));
        o1(a, o, i), (Ye = null), (qt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        Pe(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) s1(t, e), (t = t.sibling);
}
function s1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Kt(t, e), on(e), r & 4)) {
        try {
          Na(3, e, e.return), tu(3, e);
        } catch (b) {
          Pe(e, e.return, b);
        }
        try {
          Na(5, e, e.return);
        } catch (b) {
          Pe(e, e.return, b);
        }
      }
      break;
    case 1:
      Kt(t, e), on(e), r & 512 && n !== null && bi(n, n.return);
      break;
    case 5:
      if (
        (Kt(t, e),
        on(e),
        r & 512 && n !== null && bi(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          no(i, "");
        } catch (b) {
          Pe(e, e.return, b);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var a = e.memoizedProps,
          o = n !== null ? n.memoizedProps : a,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === "input" && a.type === "radio" && a.name != null && E0(i, a),
              dd(s, o);
            var u = dd(s, a);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                d = l[o + 1];
              c === "style"
                ? R0(i, d)
                : c === "dangerouslySetInnerHTML"
                ? $0(i, d)
                : c === "children"
                ? no(i, d)
                : zf(i, c, d, u);
            }
            switch (s) {
              case "input":
                od(i, a);
                break;
              case "textarea":
                A0(i, a);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var h = a.value;
                h != null
                  ? $i(i, !!a.multiple, h, !1)
                  : f !== !!a.multiple &&
                    (a.defaultValue != null
                      ? $i(i, !!a.multiple, a.defaultValue, !0)
                      : $i(i, !!a.multiple, a.multiple ? [] : "", !1));
            }
            i[fo] = a;
          } catch (b) {
            Pe(e, e.return, b);
          }
      }
      break;
    case 6:
      if ((Kt(t, e), on(e), r & 4)) {
        if (e.stateNode === null) throw Error($(162));
        (i = e.stateNode), (a = e.memoizedProps);
        try {
          i.nodeValue = a;
        } catch (b) {
          Pe(e, e.return, b);
        }
      }
      break;
    case 3:
      if (
        (Kt(t, e), on(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          oo(t.containerInfo);
        } catch (b) {
          Pe(e, e.return, b);
        }
      break;
    case 4:
      Kt(t, e), on(e);
      break;
    case 13:
      Kt(t, e),
        on(e),
        (i = e.child),
        i.flags & 8192 &&
          ((a = i.memoizedState !== null),
          (i.stateNode.isHidden = a),
          !a ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (dm = Me())),
        r & 4 && Lp(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((tt = (u = tt) || c), Kt(t, e), (tt = u)) : Kt(t, e),
        on(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (D = e, c = e.child; c !== null; ) {
            for (d = D = c; D !== null; ) {
              switch (((f = D), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Na(4, f, f.return);
                  break;
                case 1:
                  bi(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (b) {
                      Pe(r, n, b);
                    }
                  }
                  break;
                case 5:
                  bi(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Bp(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (D = h)) : Bp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((a = i.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = z0("display", o)));
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
      Kt(t, e), on(e), r & 4 && Lp(e);
      break;
    case 21:
      break;
    default:
      Kt(t, e), on(e);
  }
}
function on(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (a1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error($(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (no(i, ""), (r.flags &= -33));
          var a = Fp(e);
          Od(e, a, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = Fp(e);
          Nd(e, s, o);
          break;
        default:
          throw Error($(161));
      }
    } catch (l) {
      Pe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function xx(e, t, n) {
  (D = e), l1(e);
}
function l1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var i = D,
      a = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || hs;
      if (!o) {
        var s = i.alternate,
          l = (s !== null && s.memoizedState !== null) || tt;
        s = hs;
        var u = tt;
        if (((hs = o), (tt = l) && !u))
          for (D = i; D !== null; )
            (o = D),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? jp(i)
                : l !== null
                ? ((l.return = o), (D = l))
                : jp(i);
        for (; a !== null; ) (D = a), l1(a), (a = a.sibling);
        (D = i), (hs = s), (tt = u);
      }
      Ip(e);
    } else
      i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (D = a)) : Ip(e);
  }
}
function Ip(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              tt || tu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !tt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Jt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && Sp(t, a, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Sp(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
                    d !== null && oo(d);
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
              throw Error($(163));
          }
        tt || (t.flags & 512 && jd(t));
      } catch (f) {
        Pe(t, t.return, f);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function Bp(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function jp(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            tu(4, t);
          } catch (l) {
            Pe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Pe(t, i, l);
            }
          }
          var a = t.return;
          try {
            jd(t);
          } catch (l) {
            Pe(t, a, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            jd(t);
          } catch (l) {
            Pe(t, o, l);
          }
      }
    } catch (l) {
      Pe(t, t.return, l);
    }
    if (t === e) {
      D = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (D = s);
      break;
    }
    D = t.return;
  }
}
var _x = Math.ceil,
  Cl = Vn.ReactCurrentDispatcher,
  um = Vn.ReactCurrentOwner,
  Vt = Vn.ReactCurrentBatchConfig,
  J = 0,
  We = null,
  Fe = null,
  qe = 0,
  kt = 0,
  Si = Sr(0),
  Be = 0,
  vo = null,
  Kr = 0,
  nu = 0,
  cm = 0,
  Oa = null,
  dt = null,
  dm = 0,
  Ji = 1 / 0,
  kn = null,
  Tl = !1,
  Vd = null,
  cr = null,
  ps = !1,
  rr = null,
  Pl = 0,
  Va = 0,
  Wd = null,
  Ns = -1,
  Os = 0;
function ot() {
  return J & 6 ? Me() : Ns !== -1 ? Ns : (Ns = Me());
}
function dr(e) {
  return e.mode & 1
    ? J & 2 && qe !== 0
      ? qe & -qe
      : sx.transition !== null
      ? (Os === 0 && (Os = U0()), Os)
      : ((e = ae),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Q0(e.type))),
        e)
    : 1;
}
function en(e, t, n, r) {
  if (50 < Va) throw ((Va = 0), (Wd = null), Error($(185)));
  zo(e, n, r),
    (!(J & 2) || e !== We) &&
      (e === We && (!(J & 2) && (nu |= n), Be === 4 && er(e, qe)),
      gt(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((Ji = Me() + 500), Ql && wr()));
}
function gt(e, t) {
  var n = e.callbackNode;
  s2(e, t);
  var r = cl(e, e === We ? qe : 0);
  if (r === 0)
    n !== null && Yh(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Yh(n), t === 1))
      e.tag === 0 ? ox(Np.bind(null, e)) : yv(Np.bind(null, e)),
        nx(function () {
          !(J & 6) && wr();
        }),
        (n = null);
    else {
      switch (G0(r)) {
        case 1:
          n = If;
          break;
        case 4:
          n = W0;
          break;
        case 16:
          n = ul;
          break;
        case 536870912:
          n = H0;
          break;
        default:
          n = ul;
      }
      n = g1(n, u1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function u1(e, t) {
  if (((Ns = -1), (Os = 0), J & 6)) throw Error($(327));
  var n = e.callbackNode;
  if (Li() && e.callbackNode !== n) return null;
  var r = cl(e, e === We ? qe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = El(e, r);
  else {
    t = r;
    var i = J;
    J |= 2;
    var a = d1();
    (We !== e || qe !== t) && ((kn = null), (Ji = Me() + 500), jr(e, t));
    do
      try {
        Px();
        break;
      } catch (s) {
        c1(e, s);
      }
    while (1);
    qf(),
      (Cl.current = a),
      (J = i),
      Fe !== null ? (t = 0) : ((We = null), (qe = 0), (t = Be));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = gd(e)), i !== 0 && ((r = i), (t = Hd(e, i)))), t === 1)
    )
      throw ((n = vo), jr(e, 0), er(e, r), gt(e, Me()), n);
    if (t === 6) er(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Cx(i) &&
          ((t = El(e, r)),
          t === 2 && ((a = gd(e)), a !== 0 && ((r = a), (t = Hd(e, a)))),
          t === 1))
      )
        throw ((n = vo), jr(e, 0), er(e, r), gt(e, Me()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error($(345));
        case 2:
          Ar(e, dt, kn);
          break;
        case 3:
          if (
            (er(e, r), (r & 130023424) === r && ((t = dm + 500 - Me()), 10 < t))
          ) {
            if (cl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ot(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = _d(Ar.bind(null, e, dt, kn), t);
            break;
          }
          Ar(e, dt, kn);
          break;
        case 4:
          if ((er(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Zt(r);
            (a = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~a);
          }
          if (
            ((r = i),
            (r = Me() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * _x(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = _d(Ar.bind(null, e, dt, kn), r);
            break;
          }
          Ar(e, dt, kn);
          break;
        case 5:
          Ar(e, dt, kn);
          break;
        default:
          throw Error($(329));
      }
    }
  }
  return gt(e, Me()), e.callbackNode === n ? u1.bind(null, e) : null;
}
function Hd(e, t) {
  var n = Oa;
  return (
    e.current.memoizedState.isDehydrated && (jr(e, t).flags |= 256),
    (e = El(e, t)),
    e !== 2 && ((t = dt), (dt = n), t !== null && Ud(t)),
    e
  );
}
function Ud(e) {
  dt === null ? (dt = e) : dt.push.apply(dt, e);
}
function Cx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!tn(a(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
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
function er(e, t) {
  for (
    t &= ~cm,
      t &= ~nu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Zt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Np(e) {
  if (J & 6) throw Error($(327));
  Li();
  var t = cl(e, 0);
  if (!(t & 1)) return gt(e, Me()), null;
  var n = El(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = gd(e);
    r !== 0 && ((t = r), (n = Hd(e, r)));
  }
  if (n === 1) throw ((n = vo), jr(e, 0), er(e, t), gt(e, Me()), n);
  if (n === 6) throw Error($(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ar(e, dt, kn),
    gt(e, Me()),
    null
  );
}
function fm(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    (J = n), J === 0 && ((Ji = Me() + 500), Ql && wr());
  }
}
function Yr(e) {
  rr !== null && rr.tag === 0 && !(J & 6) && Li();
  var t = J;
  J |= 1;
  var n = Vt.transition,
    r = ae;
  try {
    if (((Vt.transition = null), (ae = 1), e)) return e();
  } finally {
    (ae = r), (Vt.transition = n), (J = t), !(J & 6) && wr();
  }
}
function mm() {
  (kt = Si.current), ve(Si);
}
function jr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), tx(n)), Fe !== null))
    for (n = Fe.return; n !== null; ) {
      var r = n;
      switch ((Kf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && pl();
          break;
        case 3:
          Ki(), ve(ht), ve(nt), nm();
          break;
        case 5:
          tm(r);
          break;
        case 4:
          Ki();
          break;
        case 13:
          ve(ke);
          break;
        case 19:
          ve(ke);
          break;
        case 10:
          Xf(r.type._context);
          break;
        case 22:
        case 23:
          mm();
      }
      n = n.return;
    }
  if (
    ((We = e),
    (Fe = e = fr(e.current, null)),
    (qe = kt = t),
    (Be = 0),
    (vo = null),
    (cm = nu = Kr = 0),
    (dt = Oa = null),
    Fr !== null)
  ) {
    for (t = 0; t < Fr.length; t++)
      if (((n = Fr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          a = n.pending;
        if (a !== null) {
          var o = a.next;
          (a.next = i), (r.next = o);
        }
        n.pending = r;
      }
    Fr = null;
  }
  return e;
}
function c1(e, t) {
  do {
    var n = Fe;
    try {
      if ((qf(), (Is.current = _l), xl)) {
        for (var r = _e.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        xl = !1;
      }
      if (
        ((Gr = 0),
        (Oe = Ie = _e = null),
        (ja = !1),
        (po = 0),
        (um.current = null),
        n === null || n.return === null)
      ) {
        (Be = 1), (vo = t), (Fe = null);
        break;
      }
      e: {
        var a = e,
          o = n.return,
          s = n,
          l = t;
        if (
          ((t = qe),
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
          var h = Pp(o);
          if (h !== null) {
            (h.flags &= -257),
              Ep(h, o, s, a, t),
              h.mode & 1 && Tp(a, u, t),
              (t = h),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var b = new Set();
              b.add(l), (t.updateQueue = b);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Tp(a, u, t), hm();
              break e;
            }
            l = Error($(426));
          }
        } else if (we && s.mode & 1) {
          var _ = Pp(o);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              Ep(_, o, s, a, t),
              Yf(Yi(l, s));
            break e;
          }
        }
        (a = l = Yi(l, s)),
          Be !== 4 && (Be = 2),
          Oa === null ? (Oa = [a]) : Oa.push(a),
          (a = o);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var g = Kv(a, l, t);
              bp(a, g);
              break e;
            case 1:
              s = l;
              var m = a.type,
                p = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (cr === null || !cr.has(p))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var x = Yv(a, s, t);
                bp(a, x);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      m1(n);
    } catch (P) {
      (t = P), Fe === n && n !== null && (Fe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function d1() {
  var e = Cl.current;
  return (Cl.current = _l), e === null ? _l : e;
}
function hm() {
  (Be === 0 || Be === 3 || Be === 2) && (Be = 4),
    We === null || (!(Kr & 268435455) && !(nu & 268435455)) || er(We, qe);
}
function El(e, t) {
  var n = J;
  J |= 2;
  var r = d1();
  (We !== e || qe !== t) && ((kn = null), jr(e, t));
  do
    try {
      Tx();
      break;
    } catch (i) {
      c1(e, i);
    }
  while (1);
  if ((qf(), (J = n), (Cl.current = r), Fe !== null)) throw Error($(261));
  return (We = null), (qe = 0), Be;
}
function Tx() {
  for (; Fe !== null; ) f1(Fe);
}
function Px() {
  for (; Fe !== null && !Qk(); ) f1(Fe);
}
function f1(e) {
  var t = p1(e.alternate, e, kt);
  (e.memoizedProps = e.pendingProps),
    t === null ? m1(e) : (Fe = t),
    (um.current = null);
}
function m1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Sx(n, t)), n !== null)) {
        (n.flags &= 32767), (Fe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Be = 6), (Fe = null);
        return;
      }
    } else if (((n = bx(n, t, kt)), n !== null)) {
      Fe = n;
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
function Ar(e, t, n) {
  var r = ae,
    i = Vt.transition;
  try {
    (Vt.transition = null), (ae = 1), Ex(e, t, n, r);
  } finally {
    (Vt.transition = i), (ae = r);
  }
  return null;
}
function Ex(e, t, n, r) {
  do Li();
  while (rr !== null);
  if (J & 6) throw Error($(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error($(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (l2(e, a),
    e === We && ((Fe = We = null), (qe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ps ||
      ((ps = !0),
      g1(ul, function () {
        return Li(), null;
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    (a = Vt.transition), (Vt.transition = null);
    var o = ae;
    ae = 1;
    var s = J;
    (J |= 4),
      (um.current = null),
      kx(e, n),
      s1(n, e),
      Y2(kd),
      (dl = !!wd),
      (kd = wd = null),
      (e.current = n),
      xx(n),
      Zk(),
      (J = s),
      (ae = o),
      (Vt.transition = a);
  } else e.current = n;
  if (
    (ps && ((ps = !1), (rr = e), (Pl = i)),
    (a = e.pendingLanes),
    a === 0 && (cr = null),
    n2(n.stateNode),
    gt(e, Me()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Tl) throw ((Tl = !1), (e = Vd), (Vd = null), e);
  return (
    Pl & 1 && e.tag !== 0 && Li(),
    (a = e.pendingLanes),
    a & 1 ? (e === Wd ? Va++ : ((Va = 0), (Wd = e))) : (Va = 0),
    wr(),
    null
  );
}
function Li() {
  if (rr !== null) {
    var e = G0(Pl),
      t = Vt.transition,
      n = ae;
    try {
      if (((Vt.transition = null), (ae = 16 > e ? 16 : e), rr === null))
        var r = !1;
      else {
        if (((e = rr), (rr = null), (Pl = 0), J & 6)) throw Error($(331));
        var i = J;
        for (J |= 4, D = e.current; D !== null; ) {
          var a = D,
            o = a.child;
          if (D.flags & 16) {
            var s = a.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (D = u; D !== null; ) {
                  var c = D;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Na(8, c, a);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (D = d);
                  else
                    for (; D !== null; ) {
                      c = D;
                      var f = c.sibling,
                        h = c.return;
                      if ((i1(c), c === u)) {
                        D = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (D = f);
                        break;
                      }
                      D = h;
                    }
                }
              }
              var y = a.alternate;
              if (y !== null) {
                var b = y.child;
                if (b !== null) {
                  y.child = null;
                  do {
                    var _ = b.sibling;
                    (b.sibling = null), (b = _);
                  } while (b !== null);
                }
              }
              D = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) (o.return = a), (D = o);
          else
            e: for (; D !== null; ) {
              if (((a = D), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Na(9, a, a.return);
                }
              var g = a.sibling;
              if (g !== null) {
                (g.return = a.return), (D = g);
                break e;
              }
              D = a.return;
            }
        }
        var m = e.current;
        for (D = m; D !== null; ) {
          o = D;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (D = p);
          else
            e: for (o = m; D !== null; ) {
              if (((s = D), s.flags & 2048))
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
              if (s === o) {
                D = null;
                break e;
              }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), (D = x);
                break e;
              }
              D = s.return;
            }
        }
        if (
          ((J = i), wr(), hn && typeof hn.onPostCommitFiberRoot == "function")
        )
          try {
            hn.onPostCommitFiberRoot(Kl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ae = n), (Vt.transition = t);
    }
  }
  return !1;
}
function Op(e, t, n) {
  (t = Yi(n, t)),
    (t = Kv(e, t, 1)),
    (e = ur(e, t, 1)),
    (t = ot()),
    e !== null && (zo(e, 1, t), gt(e, t));
}
function Pe(e, t, n) {
  if (e.tag === 3) Op(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Op(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (cr === null || !cr.has(r)))
        ) {
          (e = Yi(n, e)),
            (e = Yv(t, e, 1)),
            (t = ur(t, e, 1)),
            (e = ot()),
            t !== null && (zo(t, 1, e), gt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ax(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ot()),
    (e.pingedLanes |= e.suspendedLanes & n),
    We === e &&
      (qe & n) === n &&
      (Be === 4 || (Be === 3 && (qe & 130023424) === qe && 500 > Me() - dm)
        ? jr(e, 0)
        : (cm |= n)),
    gt(e, t);
}
function h1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = as), (as <<= 1), !(as & 130023424) && (as = 4194304))
      : (t = 1));
  var n = ot();
  (e = In(e, t)), e !== null && (zo(e, t, n), gt(e, n));
}
function Mx(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), h1(e, n);
}
function $x(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error($(314));
  }
  r !== null && r.delete(t), h1(e, n);
}
var p1;
p1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ht.current) mt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (mt = !1), vx(e, t, n);
      mt = !!(e.flags & 131072);
    }
  else (mt = !1), we && t.flags & 1048576 && vv(t, vl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      js(e, t), (e = t.pendingProps);
      var i = Hi(t, nt.current);
      Fi(t, n), (i = im(null, t, r, e, i, n));
      var a = am();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pt(r) ? ((a = !0), gl(t)) : (a = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Zf(t),
            (i.updater = Zl),
            (t.stateNode = i),
            (i._reactInternals = t),
            $d(t, r, e, n),
            (t = Dd(null, t, r, !0, a, n)))
          : ((t.tag = 0), we && a && Gf(t), it(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (js(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Rx(r)),
          (e = Jt(r, e)),
          i)
        ) {
          case 0:
            t = Rd(null, t, r, e, n);
            break e;
          case 1:
            t = $p(null, t, r, e, n);
            break e;
          case 11:
            t = Ap(null, t, r, e, n);
            break e;
          case 14:
            t = Mp(null, t, r, Jt(r.type, e), n);
            break e;
        }
        throw Error($(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Jt(r, i)),
        Rd(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Jt(r, i)),
        $p(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Qv(t), e === null)) throw Error($(387));
        (r = t.pendingProps),
          (a = t.memoizedState),
          (i = a.element),
          kv(e, t),
          wl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (i = Yi(Error($(423)), t)), (t = zp(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Yi(Error($(424)), t)), (t = zp(e, t, r, n, i));
            break e;
          } else
            for (
              xt = lr(t.stateNode.containerInfo.firstChild),
                _t = t,
                we = !0,
                Xt = null,
                n = Tv(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ui(), r === i)) {
            t = Bn(e, t, n);
            break e;
          }
          it(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Pv(t),
        e === null && Ed(t),
        (r = t.type),
        (i = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (o = i.children),
        xd(r, i) ? (o = null) : a !== null && xd(r, a) && (t.flags |= 32),
        Xv(e, t),
        it(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Ed(t), null;
    case 13:
      return Zv(e, t, n);
    case 4:
      return (
        em(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Gi(t, null, r, n)) : it(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Jt(r, i)),
        Ap(e, t, r, i, n)
      );
    case 7:
      return it(e, t, t.pendingProps, n), t.child;
    case 8:
      return it(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return it(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (o = i.value),
          fe(bl, r._currentValue),
          (r._currentValue = o),
          a !== null)
        )
          if (tn(a.value, o)) {
            if (a.children === i.children && !ht.current) {
              t = Bn(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var s = a.dependencies;
              if (s !== null) {
                o = a.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (a.tag === 1) {
                      (l = Mn(-1, n & -n)), (l.tag = 2);
                      var u = a.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (a.lanes |= n),
                      (l = a.alternate),
                      l !== null && (l.lanes |= n),
                      Ad(a.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((o = a.return), o === null)) throw Error($(341));
                (o.lanes |= n),
                  (s = o.alternate),
                  s !== null && (s.lanes |= n),
                  Ad(o, n, t),
                  (o = a.sibling);
              } else o = a.child;
              if (o !== null) o.return = a;
              else
                for (o = a; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((a = o.sibling), a !== null)) {
                    (a.return = o.return), (o = a);
                    break;
                  }
                  o = o.return;
                }
              a = o;
            }
        it(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Fi(t, n),
        (i = Ht(i)),
        (r = r(i)),
        (t.flags |= 1),
        it(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Jt(r, t.pendingProps)),
        (i = Jt(r.type, i)),
        Mp(e, t, r, i, n)
      );
    case 15:
      return Jv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Jt(r, i)),
        js(e, t),
        (t.tag = 1),
        pt(r) ? ((e = !0), gl(t)) : (e = !1),
        Fi(t, n),
        _v(t, r, i),
        $d(t, r, i, n),
        Dd(null, t, r, !0, e, n)
      );
    case 19:
      return e1(e, t, n);
    case 22:
      return qv(e, t, n);
  }
  throw Error($(156, t.tag));
};
function g1(e, t) {
  return V0(e, t);
}
function zx(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
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
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Nt(e, t, n, r) {
  return new zx(e, t, n, r);
}
function pm(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Rx(e) {
  if (typeof e == "function") return pm(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Df)) return 11;
    if (e === Ff) return 14;
  }
  return 2;
}
function fr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Nt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Vs(e, t, n, r, i, a) {
  var o = 2;
  if (((r = e), typeof e == "function")) pm(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case ci:
        return Nr(n.children, i, a, t);
      case Rf:
        (o = 8), (i |= 8);
        break;
      case td:
        return (
          (e = Nt(12, n, t, i | 2)), (e.elementType = td), (e.lanes = a), e
        );
      case nd:
        return (e = Nt(13, n, t, i)), (e.elementType = nd), (e.lanes = a), e;
      case rd:
        return (e = Nt(19, n, t, i)), (e.elementType = rd), (e.lanes = a), e;
      case C0:
        return ru(n, i, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case x0:
              o = 10;
              break e;
            case _0:
              o = 9;
              break e;
            case Df:
              o = 11;
              break e;
            case Ff:
              o = 14;
              break e;
            case qn:
              (o = 16), (r = null);
              break e;
          }
        throw Error($(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Nt(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = a), t
  );
}
function Nr(e, t, n, r) {
  return (e = Nt(7, e, r, t)), (e.lanes = n), e;
}
function ru(e, t, n, r) {
  return (
    (e = Nt(22, e, r, t)),
    (e.elementType = C0),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function bc(e, t, n) {
  return (e = Nt(6, e, null, t)), (e.lanes = n), e;
}
function Sc(e, t, n) {
  return (
    (t = Nt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Dx(e, t, n, r, i) {
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
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function gm(e, t, n, r, i, a, o, s, l) {
  return (
    (e = new Dx(e, t, n, s, l)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = Nt(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Zf(a),
    e
  );
}
function Fx(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ui,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function y1(e) {
  if (!e) return gr;
  e = e._reactInternals;
  e: {
    if (Xr(e) !== e || e.tag !== 1) throw Error($(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error($(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pt(n)) return gv(e, n, t);
  }
  return t;
}
function v1(e, t, n, r, i, a, o, s, l) {
  return (
    (e = gm(n, r, !0, e, i, a, o, s, l)),
    (e.context = y1(null)),
    (n = e.current),
    (r = ot()),
    (i = dr(n)),
    (a = Mn(r, i)),
    (a.callback = t ?? null),
    ur(n, a, i),
    (e.current.lanes = i),
    zo(e, i, r),
    gt(e, r),
    e
  );
}
function iu(e, t, n, r) {
  var i = t.current,
    a = ot(),
    o = dr(i);
  return (
    (n = y1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Mn(a, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ur(i, t, o)),
    e !== null && (en(e, i, o, a), Ls(e, i, o)),
    o
  );
}
function Al(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ym(e, t) {
  Vp(e, t), (e = e.alternate) && Vp(e, t);
}
function Lx() {
  return null;
}
var b1 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function vm(e) {
  this._internalRoot = e;
}
au.prototype.render = vm.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error($(409));
  iu(e, t, null, null);
};
au.prototype.unmount = vm.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yr(function () {
      iu(null, e, null, null);
    }),
      (t[Ln] = null);
  }
};
function au(e) {
  this._internalRoot = e;
}
au.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = J0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Zn.length && t !== 0 && t < Zn[n].priority; n++);
    Zn.splice(n, 0, e), n === 0 && X0(e);
  }
};
function bm(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ou(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Wp() {}
function Ix(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var u = Al(o);
        a.call(u);
      };
    }
    var o = v1(t, r, e, 0, null, !1, !1, "", Wp);
    return (
      (e._reactRootContainer = o),
      (e[Ln] = o.current),
      uo(e.nodeType === 8 ? e.parentNode : e),
      Yr(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Al(l);
      s.call(u);
    };
  }
  var l = gm(e, 0, !1, null, null, !1, !1, "", Wp);
  return (
    (e._reactRootContainer = l),
    (e[Ln] = l.current),
    uo(e.nodeType === 8 ? e.parentNode : e),
    Yr(function () {
      iu(t, l, n, r);
    }),
    l
  );
}
function su(e, t, n, r, i) {
  var a = n._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var l = Al(o);
        s.call(l);
      };
    }
    iu(t, o, e, i);
  } else o = Ix(n, t, e, i, r);
  return Al(o);
}
K0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ca(t.pendingLanes);
        n !== 0 &&
          (Bf(t, n | 1), gt(t, Me()), !(J & 6) && ((Ji = Me() + 500), wr()));
      }
      break;
    case 13:
      Yr(function () {
        var r = In(e, 1);
        if (r !== null) {
          var i = ot();
          en(r, e, 1, i);
        }
      }),
        ym(e, 1);
  }
};
jf = function (e) {
  if (e.tag === 13) {
    var t = In(e, 134217728);
    if (t !== null) {
      var n = ot();
      en(t, e, 134217728, n);
    }
    ym(e, 134217728);
  }
};
Y0 = function (e) {
  if (e.tag === 13) {
    var t = dr(e),
      n = In(e, t);
    if (n !== null) {
      var r = ot();
      en(n, e, t, r);
    }
    ym(e, t);
  }
};
J0 = function () {
  return ae;
};
q0 = function (e, t) {
  var n = ae;
  try {
    return (ae = e), t();
  } finally {
    ae = n;
  }
};
md = function (e, t, n) {
  switch (t) {
    case "input":
      if ((od(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Xl(r);
            if (!i) throw Error($(90));
            P0(r), od(r, i);
          }
        }
      }
      break;
    case "textarea":
      A0(e, n);
      break;
    case "select":
      (t = n.value), t != null && $i(e, !!n.multiple, t, !1);
  }
};
L0 = fm;
I0 = Yr;
var Bx = { usingClientEntryPoint: !1, Events: [Do, hi, Xl, D0, F0, fm] },
  ga = {
    findFiberByHostInstance: Dr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  jx = {
    bundleType: ga.bundleType,
    version: ga.version,
    rendererPackageName: ga.rendererPackageName,
    rendererConfig: ga.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Vn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = N0(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ga.findFiberByHostInstance || Lx,
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
      (Kl = gs.inject(jx)), (hn = gs);
    } catch {}
}
At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bx;
At.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bm(t)) throw Error($(200));
  return Fx(e, t, null, n);
};
At.createRoot = function (e, t) {
  if (!bm(e)) throw Error($(299));
  var n = !1,
    r = "",
    i = b1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = gm(e, 1, !1, null, null, n, !1, r, i)),
    (e[Ln] = t.current),
    uo(e.nodeType === 8 ? e.parentNode : e),
    new vm(t)
  );
};
At.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error($(188))
      : ((e = Object.keys(e).join(",")), Error($(268, e)));
  return (e = N0(t)), (e = e === null ? null : e.stateNode), e;
};
At.flushSync = function (e) {
  return Yr(e);
};
At.hydrate = function (e, t, n) {
  if (!ou(t)) throw Error($(200));
  return su(null, e, t, !0, n);
};
At.hydrateRoot = function (e, t, n) {
  if (!bm(e)) throw Error($(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    a = "",
    o = b1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = v1(t, null, e, 1, n ?? null, i, !1, a, o)),
    (e[Ln] = t.current),
    uo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new au(t);
};
At.render = function (e, t, n) {
  if (!ou(t)) throw Error($(200));
  return su(null, e, t, !1, n);
};
At.unmountComponentAtNode = function (e) {
  if (!ou(e)) throw Error($(40));
  return e._reactRootContainer
    ? (Yr(function () {
        su(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ln] = null);
        });
      }),
      !0)
    : !1;
};
At.unstable_batchedUpdates = fm;
At.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ou(n)) throw Error($(200));
  if (e == null || e._reactInternals === void 0) throw Error($(38));
  return su(e, t, n, !1, r);
};
At.version = "18.2.0-next-9e3b772b8-20220608";
function S1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S1);
    } catch (e) {
      console.error(e);
    }
}
S1(), (v0.exports = At);
var Sm = v0.exports,
  Hp = Sm;
(Zc.createRoot = Hp.createRoot), (Zc.hydrateRoot = Hp.hydrateRoot);
function Nx(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Ox(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var Vx = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (i) {
        var a;
        r.tags.length === 0
          ? r.insertionPoint
            ? (a = r.insertionPoint.nextSibling)
            : r.prepend
            ? (a = r.container.firstChild)
            : (a = r.before)
          : (a = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(i, a),
          r.tags.push(i);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Ox(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var a = Nx(i);
          try {
            a.insertRule(r, a.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  et = "-ms-",
  Ml = "-moz-",
  Z = "-webkit-",
  w1 = "comm",
  wm = "rule",
  km = "decl",
  Wx = "@import",
  k1 = "@keyframes",
  Hx = "@layer",
  Ux = Math.abs,
  lu = String.fromCharCode,
  Gx = Object.assign;
function Kx(e, t) {
  return Je(e, 0) ^ 45
    ? (((((((t << 2) ^ Je(e, 0)) << 2) ^ Je(e, 1)) << 2) ^ Je(e, 2)) << 2) ^
        Je(e, 3)
    : 0;
}
function x1(e) {
  return e.trim();
}
function Yx(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, n) {
  return e.replace(t, n);
}
function Gd(e, t) {
  return e.indexOf(t);
}
function Je(e, t) {
  return e.charCodeAt(t) | 0;
}
function bo(e, t, n) {
  return e.slice(t, n);
}
function dn(e) {
  return e.length;
}
function xm(e) {
  return e.length;
}
function ys(e, t) {
  return t.push(e), e;
}
function Jx(e, t) {
  return e.map(t).join("");
}
var uu = 1,
  qi = 1,
  _1 = 0,
  yt = 0,
  De = 0,
  ia = "";
function cu(e, t, n, r, i, a, o) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: a,
    line: uu,
    column: qi,
    length: o,
    return: "",
  };
}
function ya(e, t) {
  return Gx(cu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function qx() {
  return De;
}
function Xx() {
  return (
    (De = yt > 0 ? Je(ia, --yt) : 0), qi--, De === 10 && ((qi = 1), uu--), De
  );
}
function Ct() {
  return (
    (De = yt < _1 ? Je(ia, yt++) : 0), qi++, De === 10 && ((qi = 1), uu++), De
  );
}
function gn() {
  return Je(ia, yt);
}
function Ws() {
  return yt;
}
function Lo(e, t) {
  return bo(ia, e, t);
}
function So(e) {
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
function C1(e) {
  return (uu = qi = 1), (_1 = dn((ia = e))), (yt = 0), [];
}
function T1(e) {
  return (ia = ""), e;
}
function Hs(e) {
  return x1(Lo(yt - 1, Kd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Qx(e) {
  for (; (De = gn()) && De < 33; ) Ct();
  return So(e) > 2 || So(De) > 3 ? "" : " ";
}
function Zx(e, t) {
  for (
    ;
    --t &&
    Ct() &&
    !(De < 48 || De > 102 || (De > 57 && De < 65) || (De > 70 && De < 97));

  );
  return Lo(e, Ws() + (t < 6 && gn() == 32 && Ct() == 32));
}
function Kd(e) {
  for (; Ct(); )
    switch (De) {
      case e:
        return yt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Kd(De);
        break;
      case 40:
        e === 41 && Kd(e);
        break;
      case 92:
        Ct();
        break;
    }
  return yt;
}
function e_(e, t) {
  for (; Ct() && e + De !== 47 + 10; )
    if (e + De === 42 + 42 && gn() === 47) break;
  return "/*" + Lo(t, yt - 1) + "*" + lu(e === 47 ? e : Ct());
}
function t_(e) {
  for (; !So(gn()); ) Ct();
  return Lo(e, yt);
}
function n_(e) {
  return T1(Us("", null, null, null, [""], (e = C1(e)), 0, [0], e));
}
function Us(e, t, n, r, i, a, o, s, l) {
  for (
    var u = 0,
      c = 0,
      d = o,
      f = 0,
      h = 0,
      y = 0,
      b = 1,
      _ = 1,
      g = 1,
      m = 0,
      p = "",
      x = i,
      P = a,
      M = r,
      T = p;
    _;

  )
    switch (((y = m), (m = Ct()))) {
      case 40:
        if (y != 108 && Je(T, d - 1) == 58) {
          Gd((T += ee(Hs(m), "&", "&\f")), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += Hs(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += Qx(y);
        break;
      case 92:
        T += Zx(Ws() - 1, 7);
        continue;
      case 47:
        switch (gn()) {
          case 42:
          case 47:
            ys(r_(e_(Ct(), Ws()), t, n), l);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * b:
        s[u++] = dn(T) * g;
      case 125 * b:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            _ = 0;
          case 59 + c:
            g == -1 && (T = ee(T, /\f/g, "")),
              h > 0 &&
                dn(T) - d &&
                ys(
                  h > 32
                    ? Gp(T + ";", r, n, d - 1)
                    : Gp(ee(T, " ", "") + ";", r, n, d - 2),
                  l
                );
            break;
          case 59:
            T += ";";
          default:
            if (
              (ys((M = Up(T, t, n, u, c, i, s, p, (x = []), (P = []), d)), a),
              m === 123)
            )
              if (c === 0) Us(T, t, M, M, x, a, d, s, P);
              else
                switch (f === 99 && Je(T, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Us(
                      e,
                      M,
                      M,
                      r && ys(Up(e, M, M, 0, 0, i, s, p, i, (x = []), d), P),
                      i,
                      P,
                      d,
                      s,
                      r ? x : P
                    );
                    break;
                  default:
                    Us(T, M, M, M, [""], P, 0, s, P);
                }
        }
        (u = c = h = 0), (b = g = 1), (p = T = ""), (d = o);
        break;
      case 58:
        (d = 1 + dn(T)), (h = y);
      default:
        if (b < 1) {
          if (m == 123) --b;
          else if (m == 125 && b++ == 0 && Xx() == 125) continue;
        }
        switch (((T += lu(m)), m * b)) {
          case 38:
            g = c > 0 ? 1 : ((T += "\f"), -1);
            break;
          case 44:
            (s[u++] = (dn(T) - 1) * g), (g = 1);
            break;
          case 64:
            gn() === 45 && (T += Hs(Ct())),
              (f = gn()),
              (c = d = dn((p = T += t_(Ws())))),
              m++;
            break;
          case 45:
            y === 45 && dn(T) == 2 && (b = 0);
        }
    }
  return a;
}
function Up(e, t, n, r, i, a, o, s, l, u, c) {
  for (
    var d = i - 1, f = i === 0 ? a : [""], h = xm(f), y = 0, b = 0, _ = 0;
    y < r;
    ++y
  )
    for (var g = 0, m = bo(e, d + 1, (d = Ux((b = o[y])))), p = e; g < h; ++g)
      (p = x1(b > 0 ? f[g] + " " + m : ee(m, /&\f/g, f[g]))) && (l[_++] = p);
  return cu(e, t, n, i === 0 ? wm : s, l, u, c);
}
function r_(e, t, n) {
  return cu(e, t, n, w1, lu(qx()), bo(e, 2, -2), 0);
}
function Gp(e, t, n, r) {
  return cu(e, t, n, km, bo(e, 0, r), bo(e, r + 1, -1), r);
}
function Ii(e, t) {
  for (var n = "", r = xm(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
  return n;
}
function i_(e, t, n, r) {
  switch (e.type) {
    case Hx:
      if (e.children.length) break;
    case Wx:
    case km:
      return (e.return = e.return || e.value);
    case w1:
      return "";
    case k1:
      return (e.return = e.value + "{" + Ii(e.children, r) + "}");
    case wm:
      e.value = e.props.join(",");
  }
  return dn((n = Ii(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function a_(e) {
  var t = xm(e);
  return function (n, r, i, a) {
    for (var o = "", s = 0; s < t; s++) o += e[s](n, r, i, a) || "";
    return o;
  };
}
function o_(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var Kp = function (t) {
  var n = new WeakMap();
  return function (r) {
    if (n.has(r)) return n.get(r);
    var i = t(r);
    return n.set(r, i), i;
  };
};
function P1(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var s_ = function (t, n, r) {
    for (
      var i = 0, a = 0;
      (i = a), (a = gn()), i === 38 && a === 12 && (n[r] = 1), !So(a);

    )
      Ct();
    return Lo(t, yt);
  },
  l_ = function (t, n) {
    var r = -1,
      i = 44;
    do
      switch (So(i)) {
        case 0:
          i === 38 && gn() === 12 && (n[r] = 1), (t[r] += s_(yt - 1, n, r));
          break;
        case 2:
          t[r] += Hs(i);
          break;
        case 4:
          if (i === 44) {
            (t[++r] = gn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += lu(i);
      }
    while ((i = Ct()));
    return t;
  },
  u_ = function (t, n) {
    return T1(l_(C1(t), n));
  },
  Yp = new WeakMap(),
  c_ = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          i = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Yp.get(r)) &&
        !i
      ) {
        Yp.set(t, !0);
        for (
          var a = [], o = u_(n, a), s = r.props, l = 0, u = 0;
          l < o.length;
          l++
        )
          for (var c = 0; c < s.length; c++, u++)
            t.props[u] = a[l] ? o[l].replace(/&\f/g, s[c]) : s[c] + " " + o[l];
      }
    }
  },
  d_ = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function E1(e, t) {
  switch (Kx(e, t)) {
    case 5103:
      return Z + "print-" + e + e;
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
      return Z + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Z + e + Ml + e + et + e + e;
    case 6828:
    case 4268:
      return Z + e + et + e + e;
    case 6165:
      return Z + e + et + "flex-" + e + e;
    case 5187:
      return (
        Z + e + ee(e, /(\w+).+(:[^]+)/, Z + "box-$1$2" + et + "flex-$1$2") + e
      );
    case 5443:
      return Z + e + et + "flex-item-" + ee(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        Z +
        e +
        et +
        "flex-line-pack" +
        ee(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return Z + e + et + ee(e, "shrink", "negative") + e;
    case 5292:
      return Z + e + et + ee(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Z +
        "box-" +
        ee(e, "-grow", "") +
        Z +
        e +
        et +
        ee(e, "grow", "positive") +
        e
      );
    case 4554:
      return Z + ee(e, /([^-])(transform)/g, "$1" + Z + "$2") + e;
    case 6187:
      return (
        ee(
          ee(ee(e, /(zoom-|grab)/, Z + "$1"), /(image-set)/, Z + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return ee(e, /(image-set\([^]*)/, Z + "$1$`$1");
    case 4968:
      return (
        ee(
          ee(e, /(.+:)(flex-)?(.*)/, Z + "box-pack:$3" + et + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Z +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ee(e, /(.+)-inline(.+)/, Z + "$1$2") + e;
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
      if (dn(e) - 1 - t > 6)
        switch (Je(e, t + 1)) {
          case 109:
            if (Je(e, t + 4) !== 45) break;
          case 102:
            return (
              ee(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Z +
                  "$2-$3$1" +
                  Ml +
                  (Je(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Gd(e, "stretch")
              ? E1(ee(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Je(e, t + 1) !== 115) break;
    case 6444:
      switch (Je(e, dn(e) - 3 - (~Gd(e, "!important") && 10))) {
        case 107:
          return ee(e, ":", ":" + Z) + e;
        case 101:
          return (
            ee(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Z +
                (Je(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Z +
                "$2$3$1" +
                et +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Je(e, t + 11)) {
        case 114:
          return Z + e + et + ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Z + e + et + ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Z + e + et + ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Z + e + et + e + e;
  }
  return e;
}
var f_ = function (t, n, r, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case km:
          t.return = E1(t.value, t.length);
          break;
        case k1:
          return Ii([ya(t, { value: ee(t.value, "@", "@" + Z) })], i);
        case wm:
          if (t.length)
            return Jx(t.props, function (a) {
              switch (Yx(a, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Ii(
                    [ya(t, { props: [ee(a, /:(read-\w+)/, ":" + Ml + "$1")] })],
                    i
                  );
                case "::placeholder":
                  return Ii(
                    [
                      ya(t, {
                        props: [ee(a, /:(plac\w+)/, ":" + Z + "input-$1")],
                      }),
                      ya(t, { props: [ee(a, /:(plac\w+)/, ":" + Ml + "$1")] }),
                      ya(t, { props: [ee(a, /:(plac\w+)/, et + "input-$1")] }),
                    ],
                    i
                  );
              }
              return "";
            });
      }
  },
  m_ = [f_],
  h_ = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (b) {
        var _ = b.getAttribute("data-emotion");
        _.indexOf(" ") !== -1 &&
          (document.head.appendChild(b), b.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || m_,
      a = {},
      o,
      s = [];
    (o = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (b) {
          for (
            var _ = b.getAttribute("data-emotion").split(" "), g = 1;
            g < _.length;
            g++
          )
            a[_[g]] = !0;
          s.push(b);
        }
      );
    var l,
      u = [c_, d_];
    {
      var c,
        d = [
          i_,
          o_(function (b) {
            c.insert(b);
          }),
        ],
        f = a_(u.concat(i, d)),
        h = function (_) {
          return Ii(n_(_), f);
        };
      l = function (_, g, m, p) {
        (c = m),
          h(_ ? _ + "{" + g.styles + "}" : g.styles),
          p && (y.inserted[g.name] = !0);
      };
    }
    var y = {
      key: n,
      sheet: new Vx({
        key: n,
        container: o,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: a,
      registered: {},
      insert: l,
    };
    return y.sheet.hydrate(s), y;
  };
function $l() {
  return (
    ($l = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $l.apply(this, arguments)
  );
}
var A1 = { exports: {} },
  oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var He = typeof Symbol == "function" && Symbol.for,
  _m = He ? Symbol.for("react.element") : 60103,
  Cm = He ? Symbol.for("react.portal") : 60106,
  du = He ? Symbol.for("react.fragment") : 60107,
  fu = He ? Symbol.for("react.strict_mode") : 60108,
  mu = He ? Symbol.for("react.profiler") : 60114,
  hu = He ? Symbol.for("react.provider") : 60109,
  pu = He ? Symbol.for("react.context") : 60110,
  Tm = He ? Symbol.for("react.async_mode") : 60111,
  gu = He ? Symbol.for("react.concurrent_mode") : 60111,
  yu = He ? Symbol.for("react.forward_ref") : 60112,
  vu = He ? Symbol.for("react.suspense") : 60113,
  p_ = He ? Symbol.for("react.suspense_list") : 60120,
  bu = He ? Symbol.for("react.memo") : 60115,
  Su = He ? Symbol.for("react.lazy") : 60116,
  g_ = He ? Symbol.for("react.block") : 60121,
  y_ = He ? Symbol.for("react.fundamental") : 60117,
  v_ = He ? Symbol.for("react.responder") : 60118,
  b_ = He ? Symbol.for("react.scope") : 60119;
function $t(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case _m:
        switch (((e = e.type), e)) {
          case Tm:
          case gu:
          case du:
          case mu:
          case fu:
          case vu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case pu:
              case yu:
              case Su:
              case bu:
              case hu:
                return e;
              default:
                return t;
            }
        }
      case Cm:
        return t;
    }
  }
}
function M1(e) {
  return $t(e) === gu;
}
oe.AsyncMode = Tm;
oe.ConcurrentMode = gu;
oe.ContextConsumer = pu;
oe.ContextProvider = hu;
oe.Element = _m;
oe.ForwardRef = yu;
oe.Fragment = du;
oe.Lazy = Su;
oe.Memo = bu;
oe.Portal = Cm;
oe.Profiler = mu;
oe.StrictMode = fu;
oe.Suspense = vu;
oe.isAsyncMode = function (e) {
  return M1(e) || $t(e) === Tm;
};
oe.isConcurrentMode = M1;
oe.isContextConsumer = function (e) {
  return $t(e) === pu;
};
oe.isContextProvider = function (e) {
  return $t(e) === hu;
};
oe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === _m;
};
oe.isForwardRef = function (e) {
  return $t(e) === yu;
};
oe.isFragment = function (e) {
  return $t(e) === du;
};
oe.isLazy = function (e) {
  return $t(e) === Su;
};
oe.isMemo = function (e) {
  return $t(e) === bu;
};
oe.isPortal = function (e) {
  return $t(e) === Cm;
};
oe.isProfiler = function (e) {
  return $t(e) === mu;
};
oe.isStrictMode = function (e) {
  return $t(e) === fu;
};
oe.isSuspense = function (e) {
  return $t(e) === vu;
};
oe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === du ||
    e === gu ||
    e === mu ||
    e === fu ||
    e === vu ||
    e === p_ ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Su ||
        e.$$typeof === bu ||
        e.$$typeof === hu ||
        e.$$typeof === pu ||
        e.$$typeof === yu ||
        e.$$typeof === y_ ||
        e.$$typeof === v_ ||
        e.$$typeof === b_ ||
        e.$$typeof === g_))
  );
};
oe.typeOf = $t;
A1.exports = oe;
var S_ = A1.exports,
  $1 = S_,
  w_ = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  k_ = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  z1 = {};
z1[$1.ForwardRef] = w_;
z1[$1.Memo] = k_;
var x_ = !0;
function __(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : (r += i + " ");
    }),
    r
  );
}
var R1 = function (t, n, r) {
    var i = t.key + "-" + n.name;
    (r === !1 || x_ === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = n.styles);
  },
  D1 = function (t, n, r) {
    R1(t, n, r);
    var i = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var a = n;
      do t.insert(n === a ? "." + i : "", a, t.sheet, !0), (a = a.next);
      while (a !== void 0);
    }
  };
function C_(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var T_ = {
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
  P_ = /[A-Z]|^ms/g,
  E_ = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  F1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Jp = function (t) {
    return t != null && typeof t != "boolean";
  },
  wc = P1(function (e) {
    return F1(e) ? e : e.replace(P_, "-$&").toLowerCase();
  }),
  qp = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(E_, function (r, i, a) {
            return (fn = { name: i, styles: a, next: fn }), i;
          });
    }
    return T_[t] !== 1 && !F1(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function wo(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (fn = { name: n.name, styles: n.styles, next: fn }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (fn = { name: r.name, styles: r.styles, next: fn }), (r = r.next);
        var i = n.styles + ";";
        return i;
      }
      return A_(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = fn,
          o = n(e);
        return (fn = a), wo(e, t, o);
      }
      break;
    }
  }
  if (t == null) return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function A_(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++) r += wo(e, t, n[i]) + ";";
  else
    for (var a in n) {
      var o = n[a];
      if (typeof o != "object")
        t != null && t[o] !== void 0
          ? (r += a + "{" + t[o] + "}")
          : Jp(o) && (r += wc(a) + ":" + qp(a, o) + ";");
      else if (
        Array.isArray(o) &&
        typeof o[0] == "string" &&
        (t == null || t[o[0]] === void 0)
      )
        for (var s = 0; s < o.length; s++)
          Jp(o[s]) && (r += wc(a) + ":" + qp(a, o[s]) + ";");
      else {
        var l = wo(e, t, o);
        switch (a) {
          case "animation":
          case "animationName": {
            r += wc(a) + ":" + l + ";";
            break;
          }
          default:
            r += a + "{" + l + "}";
        }
      }
    }
  return r;
}
var Xp = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  fn,
  Pm = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var i = !0,
      a = "";
    fn = void 0;
    var o = t[0];
    o == null || o.raw === void 0
      ? ((i = !1), (a += wo(r, n, o)))
      : (a += o[0]);
    for (var s = 1; s < t.length; s++) (a += wo(r, n, t[s])), i && (a += o[s]);
    Xp.lastIndex = 0;
    for (var l = "", u; (u = Xp.exec(a)) !== null; ) l += "-" + u[1];
    var c = C_(a) + l;
    return { name: c, styles: a, next: fn };
  },
  M_ = function (t) {
    return t();
  },
  L1 = Bh["useInsertionEffect"] ? Bh["useInsertionEffect"] : !1,
  $_ = L1 || M_,
  Qp = L1 || k.useLayoutEffect,
  I1 = k.createContext(typeof HTMLElement < "u" ? h_({ key: "css" }) : null);
I1.Provider;
var B1 = function (t) {
    return k.forwardRef(function (n, r) {
      var i = k.useContext(I1);
      return t(n, i, r);
    });
  },
  ko = k.createContext({}),
  z_ = function (t, n) {
    if (typeof n == "function") {
      var r = n(t);
      return r;
    }
    return $l({}, t, n);
  },
  R_ = Kp(function (e) {
    return Kp(function (t) {
      return z_(e, t);
    });
  }),
  D_ = function (t) {
    var n = k.useContext(ko);
    return (
      t.theme !== n && (n = R_(n)(t.theme)),
      k.createElement(ko.Provider, { value: n }, t.children)
    );
  },
  wu = B1(function (e, t) {
    var n = e.styles,
      r = Pm([n], void 0, k.useContext(ko)),
      i = k.useRef();
    return (
      Qp(
        function () {
          var a = t.key + "-global",
            o = new t.sheet.constructor({
              key: a,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            s = !1,
            l = document.querySelector(
              'style[data-emotion="' + a + " " + r.name + '"]'
            );
          return (
            t.sheet.tags.length && (o.before = t.sheet.tags[0]),
            l !== null &&
              ((s = !0), l.setAttribute("data-emotion", a), o.hydrate([l])),
            (i.current = [o, s]),
            function () {
              o.flush();
            }
          );
        },
        [t]
      ),
      Qp(
        function () {
          var a = i.current,
            o = a[0],
            s = a[1];
          if (s) {
            a[1] = !1;
            return;
          }
          if ((r.next !== void 0 && D1(t, r.next, !0), o.tags.length)) {
            var l = o.tags[o.tags.length - 1].nextElementSibling;
            (o.before = l), o.flush();
          }
          t.insert("", r, o, !1);
        },
        [t, r.name]
      ),
      null
    );
  });
function F_() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Pm(t);
}
var L_ = function () {
    var t = F_.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  j1 = String.raw,
  N1 = j1`
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
  I_ = () => E(wu, { styles: N1 }),
  B_ = ({ scope: e = "" }) =>
    E(wu, {
      styles: j1`
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

      ${N1}
    `,
    });
function j_(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Wn(e = {}) {
  const {
      name: t,
      strict: n = !0,
      hookName: r = "useContext",
      providerName: i = "Provider",
      errorMessage: a,
      defaultValue: o,
    } = e,
    s = k.createContext(o);
  s.displayName = t;
  function l() {
    var u;
    const c = k.useContext(s);
    if (!c && n) {
      const d = new Error(a ?? j_(r, i));
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
var [N_, O_] = Wn({ strict: !1, name: "PortalManagerContext" });
function O1(e) {
  const { children: t, zIndex: n } = e;
  return E(N_, { value: { zIndex: n }, children: t });
}
O1.displayName = "PortalManager";
var $n = globalThis?.document ? k.useLayoutEffect : k.useEffect,
  [V1, V_] = Wn({ strict: !1, name: "PortalContext" }),
  Em = "chakra-portal",
  W_ = ".chakra-portal",
  H_ = (e) =>
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
  U_ = (e) => {
    const { appendToParentPortal: t, children: n } = e,
      [r, i] = k.useState(null),
      a = k.useRef(null),
      [, o] = k.useState({});
    k.useEffect(() => o({}), []);
    const s = V_(),
      l = O_();
    $n(() => {
      if (!r) return;
      const c = r.ownerDocument,
        d = t ? s ?? c.body : c.body;
      if (!d) return;
      (a.current = c.createElement("div")),
        (a.current.className = Em),
        d.appendChild(a.current),
        o({});
      const f = a.current;
      return () => {
        d.contains(f) && d.removeChild(f);
      };
    }, [r]);
    const u = l?.zIndex ? E(H_, { zIndex: l?.zIndex, children: n }) : n;
    return a.current
      ? Sm.createPortal(E(V1, { value: a.current, children: u }), a.current)
      : E("span", {
          ref: (c) => {
            c && i(c);
          },
        });
  },
  G_ = (e) => {
    const { children: t, containerRef: n, appendToParentPortal: r } = e,
      i = n.current,
      a = i ?? (typeof window < "u" ? document.body : void 0),
      o = k.useMemo(() => {
        const l = i?.ownerDocument.createElement("div");
        return l && (l.className = Em), l;
      }, [i]),
      [, s] = k.useState({});
    return (
      $n(() => s({}), []),
      $n(() => {
        if (!(!o || !a))
          return (
            a.appendChild(o),
            () => {
              a.removeChild(o);
            }
          );
      }, [o, a]),
      a && o
        ? Sm.createPortal(E(V1, { value: r ? o : null, children: t }), o)
        : null
    );
  };
function ku(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: n, ...r } = t;
  return n ? E(G_, { containerRef: n, ...r }) : E(U_, { ...r });
}
ku.className = Em;
ku.selector = W_;
ku.displayName = "Portal";
function Am() {
  const e = k.useContext(ko);
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var Mm = k.createContext({});
Mm.displayName = "ColorModeContext";
function xu() {
  const e = k.useContext(Mm);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var vs = { light: "chakra-ui-light", dark: "chakra-ui-dark" };
function K_(e = {}) {
  const { preventTransition: t = !0 } = e,
    n = {
      setDataset: (r) => {
        const i = t ? n.preventTransition() : void 0;
        (document.documentElement.dataset.theme = r),
          (document.documentElement.style.colorScheme = r),
          i?.();
      },
      setClassName(r) {
        document.body.classList.add(r ? vs.dark : vs.light),
          document.body.classList.remove(r ? vs.light : vs.dark);
      },
      query() {
        return window.matchMedia("(prefers-color-scheme: dark)");
      },
      getSystemTheme(r) {
        var i;
        return ((i = n.query().matches) != null ? i : r === "dark")
          ? "dark"
          : "light";
      },
      addListener(r) {
        const i = n.query(),
          a = (o) => {
            r(o.matches ? "dark" : "light");
          };
        return (
          typeof i.addListener == "function"
            ? i.addListener(a)
            : i.addEventListener("change", a),
          () => {
            typeof i.removeListener == "function"
              ? i.removeListener(a)
              : i.removeEventListener("change", a);
          }
        );
      },
      preventTransition() {
        const r = document.createElement("style");
        return (
          r.appendChild(
            document.createTextNode(
              "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
            )
          ),
          document.head.appendChild(r),
          () => {
            window.getComputedStyle(document.body),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document.head.removeChild(r);
                });
              });
          }
        );
      },
    };
  return n;
}
var Y_ = "chakra-ui-color-mode";
function J_(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!globalThis?.document) return t;
      let n;
      try {
        n = localStorage.getItem(e) || t;
      } catch {}
      return n || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {}
    },
  };
}
var q_ = J_(Y_),
  Zp = () => {};
function eg(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function W1(e) {
  const {
      value: t,
      children: n,
      options: {
        useSystemColorMode: r,
        initialColorMode: i,
        disableTransitionOnChange: a,
      } = {},
      colorModeManager: o = q_,
    } = e,
    s = i === "dark" ? "dark" : "light",
    [l, u] = k.useState(() => eg(o, s)),
    [c, d] = k.useState(() => eg(o)),
    {
      getSystemTheme: f,
      setClassName: h,
      setDataset: y,
      addListener: b,
    } = k.useMemo(() => K_({ preventTransition: a }), [a]),
    _ = i === "system" && !l ? c : l,
    g = k.useCallback(
      (x) => {
        const P = x === "system" ? f() : x;
        u(P), h(P === "dark"), y(P), o.set(P);
      },
      [o, f, h, y]
    );
  $n(() => {
    i === "system" && d(f());
  }, []),
    k.useEffect(() => {
      const x = o.get();
      if (x) {
        g(x);
        return;
      }
      if (i === "system") {
        g("system");
        return;
      }
      g(s);
    }, [o, s, i, g]);
  const m = k.useCallback(() => {
    g(_ === "dark" ? "light" : "dark");
  }, [_, g]);
  k.useEffect(() => {
    if (r) return b(g);
  }, [r, b, g]);
  const p = k.useMemo(
    () => ({
      colorMode: t ?? _,
      toggleColorMode: t ? Zp : m,
      setColorMode: t ? Zp : g,
      forced: t !== void 0,
    }),
    [_, m, g, t]
  );
  return E(Mm.Provider, { value: p, children: n });
}
W1.displayName = "ColorModeProvider";
var X_ = new Set(["dark", "light", "system"]);
function Q_(e) {
  let t = e;
  return X_.has(t) || (t = "light"), t;
}
function Z_(e = {}) {
  const {
      initialColorMode: t = "light",
      type: n = "localStorage",
      storageKey: r = "chakra-ui-color-mode",
    } = e,
    i = Q_(t),
    a = n === "cookie",
    o = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${i}",r="${r}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `,
    s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${i}",e="${r}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${a ? o : s}`.trim();
}
function eC(e = {}) {
  const { nonce: t } = e;
  return E("script", {
    id: "chakra-script",
    nonce: t,
    dangerouslySetInnerHTML: { __html: Z_(e) },
  });
}
function tC() {
  const e = xu(),
    t = Am();
  return { ...e, theme: t };
}
function nC(e, t, n) {
  var r, i;
  if (t == null) return t;
  const a = (o) => {
    var s, l;
    return (l = (s = e.__breakpoints) == null ? void 0 : s.asArray) == null
      ? void 0
      : l[o];
  };
  return (i = (r = a(t)) != null ? r : a(n)) != null ? i : n;
}
function rC(e, t, n) {
  var r, i;
  if (t == null) return t;
  const a = (o) => {
    var s, l;
    return (l = (s = e.__cssMap) == null ? void 0 : s[o]) == null
      ? void 0
      : l.value;
  };
  return (i = (r = a(t)) != null ? r : a(n)) != null ? i : n;
}
function iC(e, t, n) {
  const r = Array.isArray(t) ? t : [t],
    i = Array.isArray(n) ? n : [n];
  return (a) => {
    const o = i.filter(Boolean),
      s = r.map((l, u) => {
        var c, d;
        if (e === "breakpoints") return nC(a, l, (c = o[u]) != null ? c : l);
        const f = `${e}.${l}`;
        return rC(a, f, (d = o[u]) != null ? d : l);
      });
    return Array.isArray(t) ? s : s[0];
  };
}
var Ue = (...e) => e.filter(Boolean).join(" ");
function Wt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function ir(e, ...t) {
  return aC(e) ? e(...t) : e;
}
var aC = (e) => typeof e == "function",
  ne = (e) => (e ? "" : void 0);
function wt(...e) {
  return function (n) {
    e.some((r) => (r?.(n), n?.defaultPrevented));
  };
}
var zl = { exports: {} };
zl.exports;
(function (e, t) {
  var n = 200,
    r = "__lodash_hash_undefined__",
    i = 800,
    a = 16,
    o = 9007199254740991,
    s = "[object Arguments]",
    l = "[object Array]",
    u = "[object AsyncFunction]",
    c = "[object Boolean]",
    d = "[object Date]",
    f = "[object Error]",
    h = "[object Function]",
    y = "[object GeneratorFunction]",
    b = "[object Map]",
    _ = "[object Number]",
    g = "[object Null]",
    m = "[object Object]",
    p = "[object Proxy]",
    x = "[object RegExp]",
    P = "[object Set]",
    M = "[object String]",
    T = "[object Undefined]",
    A = "[object WeakMap]",
    F = "[object ArrayBuffer]",
    L = "[object DataView]",
    le = "[object Float32Array]",
    pe = "[object Float64Array]",
    Ae = "[object Int8Array]",
    ie = "[object Int16Array]",
    de = "[object Int32Array]",
    ze = "[object Uint8Array]",
    Le = "[object Uint8ClampedArray]",
    z = "[object Uint16Array]",
    j = "[object Uint32Array]",
    V = /[\\^$.*+?()[\]{}|]/g,
    N = /^\[object .+?Constructor\]$/,
    X = /^(?:0|[1-9]\d*)$/,
    W = {};
  (W[le] = W[pe] = W[Ae] = W[ie] = W[de] = W[ze] = W[Le] = W[z] = W[j] = !0),
    (W[s] =
      W[l] =
      W[F] =
      W[c] =
      W[L] =
      W[d] =
      W[f] =
      W[h] =
      W[b] =
      W[_] =
      W[m] =
      W[x] =
      W[P] =
      W[M] =
      W[A] =
        !1);
  var se = typeof Zo == "object" && Zo && Zo.Object === Object && Zo,
    Gt = typeof self == "object" && self && self.Object === Object && self,
    Te = se || Gt || Function("return this")(),
    bt = t && !t.nodeType && t,
    rn = bt && !0 && e && !e.nodeType && e,
    Hn = rn && rn.exports === bt,
    an = Hn && se.process,
    zt = (function () {
      try {
        var v = rn && rn.require && rn.require("util").types;
        return v || (an && an.binding && an.binding("util"));
      } catch {}
    })(),
    xr = zt && zt.isTypedArray;
  function ti(v, S, C) {
    switch (C.length) {
      case 0:
        return v.call(S);
      case 1:
        return v.call(S, C[0]);
      case 2:
        return v.call(S, C[0], C[1]);
      case 3:
        return v.call(S, C[0], C[1], C[2]);
    }
    return v.apply(S, C);
  }
  function ph(v, S) {
    for (var C = -1, R = Array(v); ++C < v; ) R[C] = S(C);
    return R;
  }
  function H(v) {
    return function (S) {
      return v(S);
    };
  }
  function ct(v, S) {
    return v?.[S];
  }
  function Rt(v, S) {
    return function (C) {
      return v(S(C));
    };
  }
  var ni = Array.prototype,
    lw = Function.prototype,
    Uo = Object.prototype,
    Bu = Te["__core-js_shared__"],
    Go = lw.toString,
    bn = Uo.hasOwnProperty,
    gh = (function () {
      var v = /[^.]+$/.exec((Bu && Bu.keys && Bu.keys.IE_PROTO) || "");
      return v ? "Symbol(src)_1." + v : "";
    })(),
    yh = Uo.toString,
    uw = Go.call(Object),
    cw = RegExp(
      "^" +
        Go.call(bn)
          .replace(V, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Ko = Hn ? Te.Buffer : void 0,
    vh = Te.Symbol,
    bh = Te.Uint8Array,
    Sh = Ko ? Ko.allocUnsafe : void 0,
    wh = Rt(Object.getPrototypeOf, Object),
    kh = Object.create,
    dw = Uo.propertyIsEnumerable,
    fw = ni.splice,
    _r = vh ? vh.toStringTag : void 0,
    Yo = (function () {
      try {
        var v = Ou(Object, "defineProperty");
        return v({}, "", {}), v;
      } catch {}
    })(),
    mw = Ko ? Ko.isBuffer : void 0,
    xh = Math.max,
    hw = Date.now,
    _h = Ou(Te, "Map"),
    oa = Ou(Object, "create"),
    pw = (function () {
      function v() {}
      return function (S) {
        if (!Tr(S)) return {};
        if (kh) return kh(S);
        v.prototype = S;
        var C = new v();
        return (v.prototype = void 0), C;
      };
    })();
  function Cr(v) {
    var S = -1,
      C = v == null ? 0 : v.length;
    for (this.clear(); ++S < C; ) {
      var R = v[S];
      this.set(R[0], R[1]);
    }
  }
  function gw() {
    (this.__data__ = oa ? oa(null) : {}), (this.size = 0);
  }
  function yw(v) {
    var S = this.has(v) && delete this.__data__[v];
    return (this.size -= S ? 1 : 0), S;
  }
  function vw(v) {
    var S = this.__data__;
    if (oa) {
      var C = S[v];
      return C === r ? void 0 : C;
    }
    return bn.call(S, v) ? S[v] : void 0;
  }
  function bw(v) {
    var S = this.__data__;
    return oa ? S[v] !== void 0 : bn.call(S, v);
  }
  function Sw(v, S) {
    var C = this.__data__;
    return (
      (this.size += this.has(v) ? 0 : 1),
      (C[v] = oa && S === void 0 ? r : S),
      this
    );
  }
  (Cr.prototype.clear = gw),
    (Cr.prototype.delete = yw),
    (Cr.prototype.get = vw),
    (Cr.prototype.has = bw),
    (Cr.prototype.set = Sw);
  function Sn(v) {
    var S = -1,
      C = v == null ? 0 : v.length;
    for (this.clear(); ++S < C; ) {
      var R = v[S];
      this.set(R[0], R[1]);
    }
  }
  function ww() {
    (this.__data__ = []), (this.size = 0);
  }
  function kw(v) {
    var S = this.__data__,
      C = Jo(S, v);
    if (C < 0) return !1;
    var R = S.length - 1;
    return C == R ? S.pop() : fw.call(S, C, 1), --this.size, !0;
  }
  function xw(v) {
    var S = this.__data__,
      C = Jo(S, v);
    return C < 0 ? void 0 : S[C][1];
  }
  function _w(v) {
    return Jo(this.__data__, v) > -1;
  }
  function Cw(v, S) {
    var C = this.__data__,
      R = Jo(C, v);
    return R < 0 ? (++this.size, C.push([v, S])) : (C[R][1] = S), this;
  }
  (Sn.prototype.clear = ww),
    (Sn.prototype.delete = kw),
    (Sn.prototype.get = xw),
    (Sn.prototype.has = _w),
    (Sn.prototype.set = Cw);
  function ri(v) {
    var S = -1,
      C = v == null ? 0 : v.length;
    for (this.clear(); ++S < C; ) {
      var R = v[S];
      this.set(R[0], R[1]);
    }
  }
  function Tw() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Cr(),
        map: new (_h || Sn)(),
        string: new Cr(),
      });
  }
  function Pw(v) {
    var S = Xo(this, v).delete(v);
    return (this.size -= S ? 1 : 0), S;
  }
  function Ew(v) {
    return Xo(this, v).get(v);
  }
  function Aw(v) {
    return Xo(this, v).has(v);
  }
  function Mw(v, S) {
    var C = Xo(this, v),
      R = C.size;
    return C.set(v, S), (this.size += C.size == R ? 0 : 1), this;
  }
  (ri.prototype.clear = Tw),
    (ri.prototype.delete = Pw),
    (ri.prototype.get = Ew),
    (ri.prototype.has = Aw),
    (ri.prototype.set = Mw);
  function ii(v) {
    var S = (this.__data__ = new Sn(v));
    this.size = S.size;
  }
  function $w() {
    (this.__data__ = new Sn()), (this.size = 0);
  }
  function zw(v) {
    var S = this.__data__,
      C = S.delete(v);
    return (this.size = S.size), C;
  }
  function Rw(v) {
    return this.__data__.get(v);
  }
  function Dw(v) {
    return this.__data__.has(v);
  }
  function Fw(v, S) {
    var C = this.__data__;
    if (C instanceof Sn) {
      var R = C.__data__;
      if (!_h || R.length < n - 1)
        return R.push([v, S]), (this.size = ++C.size), this;
      C = this.__data__ = new ri(R);
    }
    return C.set(v, S), (this.size = C.size), this;
  }
  (ii.prototype.clear = $w),
    (ii.prototype.delete = zw),
    (ii.prototype.get = Rw),
    (ii.prototype.has = Dw),
    (ii.prototype.set = Fw);
  function Lw(v, S) {
    var C = Hu(v),
      R = !C && Wu(v),
      K = !C && !R && Ah(v),
      ue = !C && !R && !K && $h(v),
      be = C || R || K || ue,
      G = be ? ph(v.length, String) : [],
      Se = G.length;
    for (var Dt in v)
      (S || bn.call(v, Dt)) &&
        !(
          be &&
          (Dt == "length" ||
            (K && (Dt == "offset" || Dt == "parent")) ||
            (ue &&
              (Dt == "buffer" || Dt == "byteLength" || Dt == "byteOffset")) ||
            Ph(Dt, Se))
        ) &&
        G.push(Dt);
    return G;
  }
  function ju(v, S, C) {
    ((C !== void 0 && !Qo(v[S], C)) || (C === void 0 && !(S in v))) &&
      Nu(v, S, C);
  }
  function Iw(v, S, C) {
    var R = v[S];
    (!(bn.call(v, S) && Qo(R, C)) || (C === void 0 && !(S in v))) &&
      Nu(v, S, C);
  }
  function Jo(v, S) {
    for (var C = v.length; C--; ) if (Qo(v[C][0], S)) return C;
    return -1;
  }
  function Nu(v, S, C) {
    S == "__proto__" && Yo
      ? Yo(v, S, { configurable: !0, enumerable: !0, value: C, writable: !0 })
      : (v[S] = C);
  }
  var Bw = Xw();
  function qo(v) {
    return v == null
      ? v === void 0
        ? T
        : g
      : _r && _r in Object(v)
      ? Qw(v)
      : ik(v);
  }
  function Ch(v) {
    return sa(v) && qo(v) == s;
  }
  function jw(v) {
    if (!Tr(v) || nk(v)) return !1;
    var S = Gu(v) ? cw : N;
    return S.test(lk(v));
  }
  function Nw(v) {
    return sa(v) && Mh(v.length) && !!W[qo(v)];
  }
  function Ow(v) {
    if (!Tr(v)) return rk(v);
    var S = Eh(v),
      C = [];
    for (var R in v) (R == "constructor" && (S || !bn.call(v, R))) || C.push(R);
    return C;
  }
  function Th(v, S, C, R, K) {
    v !== S &&
      Bw(
        S,
        function (ue, be) {
          if ((K || (K = new ii()), Tr(ue))) Vw(v, S, be, C, Th, R, K);
          else {
            var G = R ? R(Vu(v, be), ue, be + "", v, S, K) : void 0;
            G === void 0 && (G = ue), ju(v, be, G);
          }
        },
        zh
      );
  }
  function Vw(v, S, C, R, K, ue, be) {
    var G = Vu(v, C),
      Se = Vu(S, C),
      Dt = be.get(Se);
    if (Dt) {
      ju(v, C, Dt);
      return;
    }
    var St = ue ? ue(G, Se, C + "", v, S, be) : void 0,
      la = St === void 0;
    if (la) {
      var Ku = Hu(Se),
        Yu = !Ku && Ah(Se),
        Dh = !Ku && !Yu && $h(Se);
      (St = Se),
        Ku || Yu || Dh
          ? Hu(G)
            ? (St = G)
            : uk(G)
            ? (St = Yw(G))
            : Yu
            ? ((la = !1), (St = Uw(Se, !0)))
            : Dh
            ? ((la = !1), (St = Kw(Se, !0)))
            : (St = [])
          : ck(Se) || Wu(Se)
          ? ((St = G),
            Wu(G) ? (St = dk(G)) : (!Tr(G) || Gu(G)) && (St = Zw(Se)))
          : (la = !1);
    }
    la && (be.set(Se, St), K(St, Se, R, ue, be), be.delete(Se)), ju(v, C, St);
  }
  function Ww(v, S) {
    return ok(ak(v, S, Rh), v + "");
  }
  var Hw = Yo
    ? function (v, S) {
        return Yo(v, "toString", {
          configurable: !0,
          enumerable: !1,
          value: mk(S),
          writable: !0,
        });
      }
    : Rh;
  function Uw(v, S) {
    if (S) return v.slice();
    var C = v.length,
      R = Sh ? Sh(C) : new v.constructor(C);
    return v.copy(R), R;
  }
  function Gw(v) {
    var S = new v.constructor(v.byteLength);
    return new bh(S).set(new bh(v)), S;
  }
  function Kw(v, S) {
    var C = S ? Gw(v.buffer) : v.buffer;
    return new v.constructor(C, v.byteOffset, v.length);
  }
  function Yw(v, S) {
    var C = -1,
      R = v.length;
    for (S || (S = Array(R)); ++C < R; ) S[C] = v[C];
    return S;
  }
  function Jw(v, S, C, R) {
    var K = !C;
    C || (C = {});
    for (var ue = -1, be = S.length; ++ue < be; ) {
      var G = S[ue],
        Se = R ? R(C[G], v[G], G, C, v) : void 0;
      Se === void 0 && (Se = v[G]), K ? Nu(C, G, Se) : Iw(C, G, Se);
    }
    return C;
  }
  function qw(v) {
    return Ww(function (S, C) {
      var R = -1,
        K = C.length,
        ue = K > 1 ? C[K - 1] : void 0,
        be = K > 2 ? C[2] : void 0;
      for (
        ue = v.length > 3 && typeof ue == "function" ? (K--, ue) : void 0,
          be && ek(C[0], C[1], be) && ((ue = K < 3 ? void 0 : ue), (K = 1)),
          S = Object(S);
        ++R < K;

      ) {
        var G = C[R];
        G && v(S, G, R, ue);
      }
      return S;
    });
  }
  function Xw(v) {
    return function (S, C, R) {
      for (var K = -1, ue = Object(S), be = R(S), G = be.length; G--; ) {
        var Se = be[v ? G : ++K];
        if (C(ue[Se], Se, ue) === !1) break;
      }
      return S;
    };
  }
  function Xo(v, S) {
    var C = v.__data__;
    return tk(S) ? C[typeof S == "string" ? "string" : "hash"] : C.map;
  }
  function Ou(v, S) {
    var C = ct(v, S);
    return jw(C) ? C : void 0;
  }
  function Qw(v) {
    var S = bn.call(v, _r),
      C = v[_r];
    try {
      v[_r] = void 0;
      var R = !0;
    } catch {}
    var K = yh.call(v);
    return R && (S ? (v[_r] = C) : delete v[_r]), K;
  }
  function Zw(v) {
    return typeof v.constructor == "function" && !Eh(v) ? pw(wh(v)) : {};
  }
  function Ph(v, S) {
    var C = typeof v;
    return (
      (S = S ?? o),
      !!S &&
        (C == "number" || (C != "symbol" && X.test(v))) &&
        v > -1 &&
        v % 1 == 0 &&
        v < S
    );
  }
  function ek(v, S, C) {
    if (!Tr(C)) return !1;
    var R = typeof S;
    return (R == "number" ? Uu(C) && Ph(S, C.length) : R == "string" && S in C)
      ? Qo(C[S], v)
      : !1;
  }
  function tk(v) {
    var S = typeof v;
    return S == "string" || S == "number" || S == "symbol" || S == "boolean"
      ? v !== "__proto__"
      : v === null;
  }
  function nk(v) {
    return !!gh && gh in v;
  }
  function Eh(v) {
    var S = v && v.constructor,
      C = (typeof S == "function" && S.prototype) || Uo;
    return v === C;
  }
  function rk(v) {
    var S = [];
    if (v != null) for (var C in Object(v)) S.push(C);
    return S;
  }
  function ik(v) {
    return yh.call(v);
  }
  function ak(v, S, C) {
    return (
      (S = xh(S === void 0 ? v.length - 1 : S, 0)),
      function () {
        for (
          var R = arguments, K = -1, ue = xh(R.length - S, 0), be = Array(ue);
          ++K < ue;

        )
          be[K] = R[S + K];
        K = -1;
        for (var G = Array(S + 1); ++K < S; ) G[K] = R[K];
        return (G[S] = C(be)), ti(v, this, G);
      }
    );
  }
  function Vu(v, S) {
    if (!(S === "constructor" && typeof v[S] == "function") && S != "__proto__")
      return v[S];
  }
  var ok = sk(Hw);
  function sk(v) {
    var S = 0,
      C = 0;
    return function () {
      var R = hw(),
        K = a - (R - C);
      if (((C = R), K > 0)) {
        if (++S >= i) return arguments[0];
      } else S = 0;
      return v.apply(void 0, arguments);
    };
  }
  function lk(v) {
    if (v != null) {
      try {
        return Go.call(v);
      } catch {}
      try {
        return v + "";
      } catch {}
    }
    return "";
  }
  function Qo(v, S) {
    return v === S || (v !== v && S !== S);
  }
  var Wu = Ch(
      (function () {
        return arguments;
      })()
    )
      ? Ch
      : function (v) {
          return sa(v) && bn.call(v, "callee") && !dw.call(v, "callee");
        },
    Hu = Array.isArray;
  function Uu(v) {
    return v != null && Mh(v.length) && !Gu(v);
  }
  function uk(v) {
    return sa(v) && Uu(v);
  }
  var Ah = mw || hk;
  function Gu(v) {
    if (!Tr(v)) return !1;
    var S = qo(v);
    return S == h || S == y || S == u || S == p;
  }
  function Mh(v) {
    return typeof v == "number" && v > -1 && v % 1 == 0 && v <= o;
  }
  function Tr(v) {
    var S = typeof v;
    return v != null && (S == "object" || S == "function");
  }
  function sa(v) {
    return v != null && typeof v == "object";
  }
  function ck(v) {
    if (!sa(v) || qo(v) != m) return !1;
    var S = wh(v);
    if (S === null) return !0;
    var C = bn.call(S, "constructor") && S.constructor;
    return typeof C == "function" && C instanceof C && Go.call(C) == uw;
  }
  var $h = xr ? H(xr) : Nw;
  function dk(v) {
    return Jw(v, zh(v));
  }
  function zh(v) {
    return Uu(v) ? Lw(v, !0) : Ow(v);
  }
  var fk = qw(function (v, S, C, R) {
    Th(v, S, C, R);
  });
  function mk(v) {
    return function () {
      return v;
    };
  }
  function Rh(v) {
    return v;
  }
  function hk() {
    return !1;
  }
  e.exports = fk;
})(zl, zl.exports);
var oC = zl.exports;
const Ot = _f(oC);
var sC = (e) => /!(important)?$/.test(e),
  tg = (e) =>
    typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e,
  lC = (e, t) => (n) => {
    const r = String(t),
      i = sC(r),
      a = tg(r),
      o = e ? `${e}.${a}` : a;
    let s = Wt(n.__cssMap) && o in n.__cssMap ? n.__cssMap[o].varRef : t;
    return (s = tg(s)), i ? `${s} !important` : s;
  };
function $m(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (a, o) => {
    var s;
    const l = lC(t, a)(o);
    let u = (s = n?.(l, o)) != null ? s : l;
    return r && (u = r(u, o)), u;
  };
}
var bs =
  (...e) =>
  (t) =>
    e.reduce((n, r) => r(n), t);
function Ft(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return (r.transform = $m({ scale: e, transform: t })), r;
  };
}
var uC =
  ({ rtl: e, ltr: t }) =>
  (n) =>
    n.direction === "rtl" ? e : t;
function cC(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: uC(t),
    transform: n ? $m({ scale: n, compose: r }) : r,
  };
}
var H1 = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))",
];
function dC() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...H1,
  ].join(" ");
}
function fC() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...H1,
  ].join(" ");
}
var mC = {
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
  hC = {
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
function pC(e) {
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
var gC = {
    "row-reverse": {
      space: "--chakra-space-x-reverse",
      divide: "--chakra-divide-x-reverse",
    },
    "column-reverse": {
      space: "--chakra-space-y-reverse",
      divide: "--chakra-divide-y-reverse",
    },
  },
  Yd = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  },
  yC = new Set(Object.values(Yd)),
  Jd = new Set([
    "none",
    "-moz-initial",
    "inherit",
    "initial",
    "revert",
    "unset",
  ]),
  vC = (e) => e.trim();
function bC(e, t) {
  if (e == null || Jd.has(e)) return e;
  if (!(qd(e) || Jd.has(e))) return `url('${e}')`;
  const i = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    a = i?.[1],
    o = i?.[2];
  if (!a || !o) return e;
  const s = a.includes("-gradient") ? a : `${a}-gradient`,
    [l, ...u] = o.split(",").map(vC).filter(Boolean);
  if (u?.length === 0) return e;
  const c = l in Yd ? Yd[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (yC.has(f)) return f;
    const h = f.indexOf(" "),
      [y, b] = h !== -1 ? [f.substr(0, h), f.substr(h + 1)] : [f],
      _ = qd(b) ? b : b && b.split(" "),
      g = `colors.${y}`,
      m = g in t.__cssMap ? t.__cssMap[g].varRef : y;
    return _ ? [m, ...(Array.isArray(_) ? _ : [_])].join(" ") : m;
  });
  return `${s}(${d.join(", ")})`;
}
var qd = (e) => typeof e == "string" && e.includes("(") && e.includes(")"),
  SC = (e, t) => bC(e, t ?? {});
function wC(e) {
  return /^var\(--.+\)$/.test(e);
}
var kC = (e) => {
    const t = parseFloat(e.toString()),
      n = e.toString().replace(String(t), "");
    return { unitless: !n, value: t, unit: n };
  },
  sn = (e) => (t) => `${e}(${t})`,
  q = {
    filter(e) {
      return e !== "auto" ? e : mC;
    },
    backdropFilter(e) {
      return e !== "auto" ? e : hC;
    },
    ring(e) {
      return pC(q.px(e));
    },
    bgClip(e) {
      return e === "text"
        ? { color: "transparent", backgroundClip: "text" }
        : { backgroundClip: e };
    },
    transform(e) {
      return e === "auto" ? dC() : e === "auto-gpu" ? fC() : e;
    },
    vh(e) {
      return e === "$100vh" ? "var(--chakra-vh)" : e;
    },
    px(e) {
      if (e == null) return e;
      const { unitless: t } = kC(e);
      return t || typeof e == "number" ? `${e}px` : e;
    },
    fraction(e) {
      return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
    },
    float(e, t) {
      const n = { left: "right", right: "left" };
      return t.direction === "rtl" ? n[e] : e;
    },
    degree(e) {
      if (wC(e) || e == null) return e;
      const t = typeof e == "string" && !e.endsWith("deg");
      return typeof e == "number" || t ? `${e}deg` : e;
    },
    gradient: SC,
    blur: sn("blur"),
    opacity: sn("opacity"),
    brightness: sn("brightness"),
    contrast: sn("contrast"),
    dropShadow: sn("drop-shadow"),
    grayscale: sn("grayscale"),
    hueRotate: sn("hue-rotate"),
    invert: sn("invert"),
    saturate: sn("saturate"),
    sepia: sn("sepia"),
    bgImage(e) {
      return e == null || qd(e) || Jd.has(e) ? e : `url(${e})`;
    },
    outline(e) {
      const t = String(e) === "0" || String(e) === "none";
      return e !== null && t
        ? { outline: "2px solid transparent", outlineOffset: "2px" }
        : { outline: e };
    },
    flexDirection(e) {
      var t;
      const { space: n, divide: r } = (t = gC[e]) != null ? t : {},
        i = { flexDirection: e };
      return n && (i[n] = 1), r && (i[r] = 1), i;
    },
  },
  w = {
    borderWidths: Ft("borderWidths"),
    borderStyles: Ft("borderStyles"),
    colors: Ft("colors"),
    borders: Ft("borders"),
    gradients: Ft("gradients", q.gradient),
    radii: Ft("radii", q.px),
    space: Ft("space", bs(q.vh, q.px)),
    spaceT: Ft("space", bs(q.vh, q.px)),
    degreeT(e) {
      return { property: e, transform: q.degree };
    },
    prop(e, t, n) {
      return {
        property: e,
        scale: t,
        ...(t && { transform: $m({ scale: t, transform: n }) }),
      };
    },
    propT(e, t) {
      return { property: e, transform: t };
    },
    sizes: Ft("sizes", bs(q.vh, q.px)),
    sizesT: Ft("sizes", bs(q.vh, q.fraction)),
    shadows: Ft("shadows"),
    logical: cC,
    blur: Ft("blur", q.blur),
  },
  Gs = {
    background: w.colors("background"),
    backgroundColor: w.colors("backgroundColor"),
    backgroundImage: w.gradients("backgroundImage"),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: q.bgClip },
    bgSize: w.prop("backgroundSize"),
    bgPosition: w.prop("backgroundPosition"),
    bg: w.colors("background"),
    bgColor: w.colors("backgroundColor"),
    bgPos: w.prop("backgroundPosition"),
    bgRepeat: w.prop("backgroundRepeat"),
    bgAttachment: w.prop("backgroundAttachment"),
    bgGradient: w.gradients("backgroundImage"),
    bgClip: { transform: q.bgClip },
  };
Object.assign(Gs, { bgImage: Gs.backgroundImage, bgImg: Gs.backgroundImage });
var Q = {
  border: w.borders("border"),
  borderWidth: w.borderWidths("borderWidth"),
  borderStyle: w.borderStyles("borderStyle"),
  borderColor: w.colors("borderColor"),
  borderRadius: w.radii("borderRadius"),
  borderTop: w.borders("borderTop"),
  borderBlockStart: w.borders("borderBlockStart"),
  borderTopLeftRadius: w.radii("borderTopLeftRadius"),
  borderStartStartRadius: w.logical({
    scale: "radii",
    property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
  }),
  borderEndStartRadius: w.logical({
    scale: "radii",
    property: { ltr: "borderBottomLeftRadius", rtl: "borderBottomRightRadius" },
  }),
  borderTopRightRadius: w.radii("borderTopRightRadius"),
  borderStartEndRadius: w.logical({
    scale: "radii",
    property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
  }),
  borderEndEndRadius: w.logical({
    scale: "radii",
    property: { ltr: "borderBottomRightRadius", rtl: "borderBottomLeftRadius" },
  }),
  borderRight: w.borders("borderRight"),
  borderInlineEnd: w.borders("borderInlineEnd"),
  borderBottom: w.borders("borderBottom"),
  borderBlockEnd: w.borders("borderBlockEnd"),
  borderBottomLeftRadius: w.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: w.radii("borderBottomRightRadius"),
  borderLeft: w.borders("borderLeft"),
  borderInlineStart: { property: "borderInlineStart", scale: "borders" },
  borderInlineStartRadius: w.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
    },
  }),
  borderInlineEndRadius: w.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    },
  }),
  borderX: w.borders(["borderLeft", "borderRight"]),
  borderInline: w.borders("borderInline"),
  borderY: w.borders(["borderTop", "borderBottom"]),
  borderBlock: w.borders("borderBlock"),
  borderTopWidth: w.borderWidths("borderTopWidth"),
  borderBlockStartWidth: w.borderWidths("borderBlockStartWidth"),
  borderTopColor: w.colors("borderTopColor"),
  borderBlockStartColor: w.colors("borderBlockStartColor"),
  borderTopStyle: w.borderStyles("borderTopStyle"),
  borderBlockStartStyle: w.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: w.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: w.borderWidths("borderBlockEndWidth"),
  borderBottomColor: w.colors("borderBottomColor"),
  borderBlockEndColor: w.colors("borderBlockEndColor"),
  borderBottomStyle: w.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: w.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: w.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: w.borderWidths("borderInlineStartWidth"),
  borderLeftColor: w.colors("borderLeftColor"),
  borderInlineStartColor: w.colors("borderInlineStartColor"),
  borderLeftStyle: w.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: w.borderStyles("borderInlineStartStyle"),
  borderRightWidth: w.borderWidths("borderRightWidth"),
  borderInlineEndWidth: w.borderWidths("borderInlineEndWidth"),
  borderRightColor: w.colors("borderRightColor"),
  borderInlineEndColor: w.colors("borderInlineEndColor"),
  borderRightStyle: w.borderStyles("borderRightStyle"),
  borderInlineEndStyle: w.borderStyles("borderInlineEndStyle"),
  borderTopRadius: w.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: w.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ]),
  borderLeftRadius: w.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: w.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius",
  ]),
};
Object.assign(Q, {
  rounded: Q.borderRadius,
  roundedTop: Q.borderTopRadius,
  roundedTopLeft: Q.borderTopLeftRadius,
  roundedTopRight: Q.borderTopRightRadius,
  roundedTopStart: Q.borderStartStartRadius,
  roundedTopEnd: Q.borderStartEndRadius,
  roundedBottom: Q.borderBottomRadius,
  roundedBottomLeft: Q.borderBottomLeftRadius,
  roundedBottomRight: Q.borderBottomRightRadius,
  roundedBottomStart: Q.borderEndStartRadius,
  roundedBottomEnd: Q.borderEndEndRadius,
  roundedLeft: Q.borderLeftRadius,
  roundedRight: Q.borderRightRadius,
  roundedStart: Q.borderInlineStartRadius,
  roundedEnd: Q.borderInlineEndRadius,
  borderStart: Q.borderInlineStart,
  borderEnd: Q.borderInlineEnd,
  borderTopStartRadius: Q.borderStartStartRadius,
  borderTopEndRadius: Q.borderStartEndRadius,
  borderBottomStartRadius: Q.borderEndStartRadius,
  borderBottomEndRadius: Q.borderEndEndRadius,
  borderStartRadius: Q.borderInlineStartRadius,
  borderEndRadius: Q.borderInlineEndRadius,
  borderStartWidth: Q.borderInlineStartWidth,
  borderEndWidth: Q.borderInlineEndWidth,
  borderStartColor: Q.borderInlineStartColor,
  borderEndColor: Q.borderInlineEndColor,
  borderStartStyle: Q.borderInlineStartStyle,
  borderEndStyle: Q.borderInlineEndStyle,
});
var xC = {
    color: w.colors("color"),
    textColor: w.colors("color"),
    fill: w.colors("fill"),
    stroke: w.colors("stroke"),
  },
  Xd = {
    boxShadow: w.shadows("boxShadow"),
    mixBlendMode: !0,
    blendMode: w.prop("mixBlendMode"),
    backgroundBlendMode: !0,
    bgBlendMode: w.prop("backgroundBlendMode"),
    opacity: !0,
  };
Object.assign(Xd, { shadow: Xd.boxShadow });
var _C = {
    filter: { transform: q.filter },
    blur: w.blur("--chakra-blur"),
    brightness: w.propT("--chakra-brightness", q.brightness),
    contrast: w.propT("--chakra-contrast", q.contrast),
    hueRotate: w.degreeT("--chakra-hue-rotate"),
    invert: w.propT("--chakra-invert", q.invert),
    saturate: w.propT("--chakra-saturate", q.saturate),
    dropShadow: w.propT("--chakra-drop-shadow", q.dropShadow),
    backdropFilter: { transform: q.backdropFilter },
    backdropBlur: w.blur("--chakra-backdrop-blur"),
    backdropBrightness: w.propT("--chakra-backdrop-brightness", q.brightness),
    backdropContrast: w.propT("--chakra-backdrop-contrast", q.contrast),
    backdropHueRotate: w.degreeT("--chakra-backdrop-hue-rotate"),
    backdropInvert: w.propT("--chakra-backdrop-invert", q.invert),
    backdropSaturate: w.propT("--chakra-backdrop-saturate", q.saturate),
  },
  Rl = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: q.flexDirection },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: w.sizes("flexBasis"),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: w.space("gap"),
    rowGap: w.space("rowGap"),
    columnGap: w.space("columnGap"),
  };
Object.assign(Rl, { flexDir: Rl.flexDirection });
var U1 = {
    gridGap: w.space("gridGap"),
    gridColumnGap: w.space("gridColumnGap"),
    gridRowGap: w.space("gridRowGap"),
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
  CC = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: q.outline },
    outlineOffset: !0,
    outlineColor: w.colors("outlineColor"),
  },
  It = {
    width: w.sizesT("width"),
    inlineSize: w.sizesT("inlineSize"),
    height: w.sizes("height"),
    blockSize: w.sizes("blockSize"),
    boxSize: w.sizes(["width", "height"]),
    minWidth: w.sizes("minWidth"),
    minInlineSize: w.sizes("minInlineSize"),
    minHeight: w.sizes("minHeight"),
    minBlockSize: w.sizes("minBlockSize"),
    maxWidth: w.sizes("maxWidth"),
    maxInlineSize: w.sizes("maxInlineSize"),
    maxHeight: w.sizes("maxHeight"),
    maxBlockSize: w.sizes("maxBlockSize"),
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
        var n, r, i;
        return {
          [`@media screen and (min-width: ${
            (i =
              (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
                ? void 0
                : r.minW) != null
              ? i
              : e
          })`]: { display: "none" },
        };
      },
    },
    hideBelow: {
      scale: "breakpoints",
      transform: (e, t) => {
        var n, r, i;
        return {
          [`@media screen and (max-width: ${
            (i =
              (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
                ? void 0
                : r._minW) != null
              ? i
              : e
          })`]: { display: "none" },
        };
      },
    },
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: w.propT("float", q.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  };
Object.assign(It, {
  w: It.width,
  h: It.height,
  minW: It.minWidth,
  maxW: It.maxWidth,
  minH: It.minHeight,
  maxH: It.maxHeight,
  overscroll: It.overscrollBehavior,
  overscrollX: It.overscrollBehaviorX,
  overscrollY: It.overscrollBehaviorY,
});
var TC = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: w.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: w.prop("listStyleImage"),
};
function PC(e, t, n, r) {
  const i = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < i.length && e; r += 1) e = e[i[r]];
  return e === void 0 ? n : e;
}
var EC = (e) => {
    const t = new WeakMap();
    return (r, i, a, o) => {
      if (typeof r > "u") return e(r, i, a);
      t.has(r) || t.set(r, new Map());
      const s = t.get(r);
      if (s.has(i)) return s.get(i);
      const l = e(r, i, a, o);
      return s.set(i, l), l;
    };
  },
  AC = EC(PC),
  MC = {
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
  $C = {
    position: "static",
    width: "auto",
    height: "auto",
    clip: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
  },
  kc = (e, t, n) => {
    const r = {},
      i = AC(e, t, {});
    for (const a in i) (a in n && n[a] != null) || (r[a] = i[a]);
    return r;
  },
  zC = {
    srOnly: {
      transform(e) {
        return e === !0 ? MC : e === "focusable" ? $C : {};
      },
    },
    layerStyle: {
      processResult: !0,
      transform: (e, t, n) => kc(t, `layerStyles.${e}`, n),
    },
    textStyle: {
      processResult: !0,
      transform: (e, t, n) => kc(t, `textStyles.${e}`, n),
    },
    apply: { processResult: !0, transform: (e, t, n) => kc(t, e, n) },
  },
  Wa = {
    position: !0,
    pos: w.prop("position"),
    zIndex: w.prop("zIndex", "zIndices"),
    inset: w.spaceT("inset"),
    insetX: w.spaceT(["left", "right"]),
    insetInline: w.spaceT("insetInline"),
    insetY: w.spaceT(["top", "bottom"]),
    insetBlock: w.spaceT("insetBlock"),
    top: w.spaceT("top"),
    insetBlockStart: w.spaceT("insetBlockStart"),
    bottom: w.spaceT("bottom"),
    insetBlockEnd: w.spaceT("insetBlockEnd"),
    left: w.spaceT("left"),
    insetInlineStart: w.logical({
      scale: "space",
      property: { ltr: "left", rtl: "right" },
    }),
    right: w.spaceT("right"),
    insetInlineEnd: w.logical({
      scale: "space",
      property: { ltr: "right", rtl: "left" },
    }),
  };
Object.assign(Wa, {
  insetStart: Wa.insetInlineStart,
  insetEnd: Wa.insetInlineEnd,
});
var RC = {
    ring: { transform: q.ring },
    ringColor: w.colors("--chakra-ring-color"),
    ringOffset: w.prop("--chakra-ring-offset-width"),
    ringOffsetColor: w.colors("--chakra-ring-offset-color"),
    ringInset: w.prop("--chakra-ring-inset"),
  },
  ye = {
    margin: w.spaceT("margin"),
    marginTop: w.spaceT("marginTop"),
    marginBlockStart: w.spaceT("marginBlockStart"),
    marginRight: w.spaceT("marginRight"),
    marginInlineEnd: w.spaceT("marginInlineEnd"),
    marginBottom: w.spaceT("marginBottom"),
    marginBlockEnd: w.spaceT("marginBlockEnd"),
    marginLeft: w.spaceT("marginLeft"),
    marginInlineStart: w.spaceT("marginInlineStart"),
    marginX: w.spaceT(["marginInlineStart", "marginInlineEnd"]),
    marginInline: w.spaceT("marginInline"),
    marginY: w.spaceT(["marginTop", "marginBottom"]),
    marginBlock: w.spaceT("marginBlock"),
    padding: w.space("padding"),
    paddingTop: w.space("paddingTop"),
    paddingBlockStart: w.space("paddingBlockStart"),
    paddingRight: w.space("paddingRight"),
    paddingBottom: w.space("paddingBottom"),
    paddingBlockEnd: w.space("paddingBlockEnd"),
    paddingLeft: w.space("paddingLeft"),
    paddingInlineStart: w.space("paddingInlineStart"),
    paddingInlineEnd: w.space("paddingInlineEnd"),
    paddingX: w.space(["paddingInlineStart", "paddingInlineEnd"]),
    paddingInline: w.space("paddingInline"),
    paddingY: w.space(["paddingTop", "paddingBottom"]),
    paddingBlock: w.space("paddingBlock"),
  };
Object.assign(ye, {
  m: ye.margin,
  mt: ye.marginTop,
  mr: ye.marginRight,
  me: ye.marginInlineEnd,
  marginEnd: ye.marginInlineEnd,
  mb: ye.marginBottom,
  ml: ye.marginLeft,
  ms: ye.marginInlineStart,
  marginStart: ye.marginInlineStart,
  mx: ye.marginX,
  my: ye.marginY,
  p: ye.padding,
  pt: ye.paddingTop,
  py: ye.paddingY,
  px: ye.paddingX,
  pb: ye.paddingBottom,
  pl: ye.paddingLeft,
  ps: ye.paddingInlineStart,
  paddingStart: ye.paddingInlineStart,
  pr: ye.paddingRight,
  pe: ye.paddingInlineEnd,
  paddingEnd: ye.paddingInlineEnd,
});
var DC = {
    textDecorationColor: w.colors("textDecorationColor"),
    textDecoration: !0,
    textDecor: { property: "textDecoration" },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: w.shadows("textShadow"),
  },
  FC = {
    clipPath: !0,
    transform: w.propT("transform", q.transform),
    transformOrigin: !0,
    translateX: w.spaceT("--chakra-translate-x"),
    translateY: w.spaceT("--chakra-translate-y"),
    skewX: w.degreeT("--chakra-skew-x"),
    skewY: w.degreeT("--chakra-skew-y"),
    scaleX: w.prop("--chakra-scale-x"),
    scaleY: w.prop("--chakra-scale-y"),
    scale: w.prop(["--chakra-scale-x", "--chakra-scale-y"]),
    rotate: w.degreeT("--chakra-rotate"),
  },
  LC = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: w.prop("transitionDuration", "transition.duration"),
    transitionProperty: w.prop("transitionProperty", "transition.property"),
    transitionTimingFunction: w.prop(
      "transitionTimingFunction",
      "transition.easing"
    ),
  },
  IC = {
    fontFamily: w.prop("fontFamily", "fonts"),
    fontSize: w.prop("fontSize", "fontSizes", q.px),
    fontWeight: w.prop("fontWeight", "fontWeights"),
    lineHeight: w.prop("lineHeight", "lineHeights"),
    letterSpacing: w.prop("letterSpacing", "letterSpacings"),
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
  BC = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: w.spaceT("scrollMargin"),
    scrollMarginTop: w.spaceT("scrollMarginTop"),
    scrollMarginBottom: w.spaceT("scrollMarginBottom"),
    scrollMarginLeft: w.spaceT("scrollMarginLeft"),
    scrollMarginRight: w.spaceT("scrollMarginRight"),
    scrollMarginX: w.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
    scrollMarginY: w.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
    scrollPadding: w.spaceT("scrollPadding"),
    scrollPaddingTop: w.spaceT("scrollPaddingTop"),
    scrollPaddingBottom: w.spaceT("scrollPaddingBottom"),
    scrollPaddingLeft: w.spaceT("scrollPaddingLeft"),
    scrollPaddingRight: w.spaceT("scrollPaddingRight"),
    scrollPaddingX: w.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
    scrollPaddingY: w.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
  };
function G1(e) {
  return Wt(e) && e.reference ? e.reference : String(e);
}
var _u = (e, ...t) => t.map(G1).join(` ${e} `).replace(/calc/g, ""),
  ng = (...e) => `calc(${_u("+", ...e)})`,
  rg = (...e) => `calc(${_u("-", ...e)})`,
  Qd = (...e) => `calc(${_u("*", ...e)})`,
  ig = (...e) => `calc(${_u("/", ...e)})`,
  ag = (e) => {
    const t = G1(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : Qd(t, -1);
  },
  zr = Object.assign(
    (e) => ({
      add: (...t) => zr(ng(e, ...t)),
      subtract: (...t) => zr(rg(e, ...t)),
      multiply: (...t) => zr(Qd(e, ...t)),
      divide: (...t) => zr(ig(e, ...t)),
      negate: () => zr(ag(e)),
      toString: () => e.toString(),
    }),
    { add: ng, subtract: rg, multiply: Qd, divide: ig, negate: ag }
  );
function jC(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function NC(e) {
  const t = jC(e.toString());
  return VC(OC(t));
}
function OC(e) {
  return e.includes("\\.")
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
    ? e.replace(".", "\\.")
    : e;
}
function VC(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function WC(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function HC(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function UC(e, t = "") {
  return NC(`--${WC(e, t)}`);
}
function B(e, t, n) {
  const r = UC(e, n);
  return { variable: r, reference: HC(r, t) };
}
function GC(e, t) {
  const n = {};
  for (const r of t) {
    if (Array.isArray(r)) {
      const [i, a] = r;
      n[i] = B(`${e}-${i}`, a);
      continue;
    }
    n[r] = B(`${e}-${r}`);
  }
  return n;
}
function KC(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function YC(e) {
  const t = parseFloat(e.toString()),
    n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function Zd(e) {
  if (e == null) return e;
  const { unitless: t } = YC(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var K1 = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  zm = (e) => Object.fromEntries(Object.entries(e).sort(K1));
function og(e) {
  const t = zm(e);
  return Object.assign(Object.values(t), t);
}
function JC(e) {
  const t = Object.keys(zm(e));
  return new Set(t);
}
function sg(e) {
  var t;
  if (!e) return e;
  e = (t = Zd(e)) != null ? t : e;
  const n = -0.02;
  return typeof e == "number"
    ? `${e + n}`
    : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + n}`);
}
function Pa(e, t) {
  const n = ["@media screen"];
  return (
    e && n.push("and", `(min-width: ${Zd(e)})`),
    t && n.push("and", `(max-width: ${Zd(t)})`),
    n.join(" ")
  );
}
function qC(e) {
  var t;
  if (!e) return null;
  e.base = (t = e.base) != null ? t : "0px";
  const n = og(e),
    r = Object.entries(e)
      .sort(K1)
      .map(([o, s], l, u) => {
        var c;
        let [, d] = (c = u[l + 1]) != null ? c : [];
        return (
          (d = parseFloat(d) > 0 ? sg(d) : void 0),
          {
            _minW: sg(s),
            breakpoint: o,
            minW: s,
            maxW: d,
            maxWQuery: Pa(null, d),
            minWQuery: Pa(s),
            minMaxQuery: Pa(s, d),
          }
        );
      }),
    i = JC(e),
    a = Array.from(i.values());
  return {
    keys: i,
    normalized: n,
    isResponsive(o) {
      const s = Object.keys(o);
      return s.length > 0 && s.every((l) => i.has(l));
    },
    asObject: zm(e),
    asArray: og(e),
    details: r,
    get(o) {
      return r.find((s) => s.breakpoint === o);
    },
    media: [null, ...n.map((o) => Pa(o)).slice(1)],
    toArrayValue(o) {
      if (!Wt(o)) throw new Error("toArrayValue: value must be an object");
      const s = a.map((l) => {
        var u;
        return (u = o[l]) != null ? u : null;
      });
      for (; KC(s) === null; ) s.pop();
      return s;
    },
    toObjectValue(o) {
      if (!Array.isArray(o))
        throw new Error("toObjectValue: value must be an array");
      return o.reduce((s, l, u) => {
        const c = a[u];
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
  Gn = (e) => Y1((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"),
  wn = (e) => Y1((t) => e(t, "~ &"), "[data-peer]", ".peer"),
  Y1 = (e, ...t) => t.map(e).join(", "),
  Cu = {
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
    _groupHover: Gn(Ge.hover),
    _peerHover: wn(Ge.hover),
    _groupFocus: Gn(Ge.focus),
    _peerFocus: wn(Ge.focus),
    _groupFocusVisible: Gn(Ge.focusVisible),
    _peerFocusVisible: wn(Ge.focusVisible),
    _groupActive: Gn(Ge.active),
    _peerActive: wn(Ge.active),
    _groupDisabled: Gn(Ge.disabled),
    _peerDisabled: wn(Ge.disabled),
    _groupInvalid: Gn(Ge.invalid),
    _peerInvalid: wn(Ge.invalid),
    _groupChecked: Gn(Ge.checked),
    _peerChecked: wn(Ge.checked),
    _groupFocusWithin: Gn(Ge.focusWithin),
    _peerFocusWithin: wn(Ge.focusWithin),
    _peerPlaceholderShown: wn(Ge.placeholderShown),
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
  J1 = Object.keys(Cu);
function lg(e, t) {
  return B(String(e).replace(/\./g, "-"), void 0, t);
}
function XC(e, t) {
  let n = {};
  const r = {};
  for (const [i, a] of Object.entries(e)) {
    const { isSemantic: o, value: s } = a,
      { variable: l, reference: u } = lg(i, t?.cssVarPrefix);
    if (!o) {
      if (i.startsWith("space")) {
        const f = i.split("."),
          [h, ...y] = f,
          b = `${h}.-${y.join(".")}`,
          _ = zr.negate(s),
          g = zr.negate(u);
        r[b] = { value: _, var: l, varRef: g };
      }
      (n[l] = s), (r[i] = { value: s, var: l, varRef: u });
      continue;
    }
    const c = (f) => {
        const y = [String(i).split(".")[0], f].join(".");
        if (!e[y]) return f;
        const { reference: _ } = lg(y, t?.cssVarPrefix);
        return _;
      },
      d = Wt(s) ? s : { default: s };
    (n = Ot(
      n,
      Object.entries(d).reduce((f, [h, y]) => {
        var b, _;
        if (!y) return f;
        const g = c(`${y}`);
        if (h === "default") return (f[l] = g), f;
        const m = (_ = (b = Cu) == null ? void 0 : b[h]) != null ? _ : h;
        return (f[m] = { [l]: g }), f;
      }, {})
    )),
      (r[i] = { value: u, var: l, varRef: u });
  }
  return { cssVars: n, cssMap: r };
}
function QC(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
function ZC(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function eT(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function ug(e, t, n = {}) {
  const { stop: r, getKey: i } = n;
  function a(o, s = []) {
    var l;
    if (eT(o) || Array.isArray(o)) {
      const u = {};
      for (const [c, d] of Object.entries(o)) {
        const f = (l = i?.(c)) != null ? l : c,
          h = [...s, f];
        if (r?.(o, h)) return t(o, s);
        u[f] = a(d, h);
      }
      return u;
    }
    return t(o, s);
  }
  return a(e);
}
var tT = [
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
function nT(e) {
  return ZC(e, tT);
}
function rT(e) {
  return e.semanticTokens;
}
function iT(e) {
  const { __cssMap: t, __cssVars: n, __breakpoints: r, ...i } = e;
  return i;
}
var aT = (e) => J1.includes(e) || e === "default";
function oT({ tokens: e, semanticTokens: t }) {
  const n = {};
  return (
    ug(e, (r, i) => {
      r != null && (n[i.join(".")] = { isSemantic: !1, value: r });
    }),
    ug(
      t,
      (r, i) => {
        r != null && (n[i.join(".")] = { isSemantic: !0, value: r });
      },
      { stop: (r) => Object.keys(r).every(aT) }
    ),
    n
  );
}
function sT(e) {
  var t;
  const n = iT(e),
    r = nT(n),
    i = rT(n),
    a = oT({ tokens: r, semanticTokens: i }),
    o = (t = n.config) == null ? void 0 : t.cssVarPrefix,
    { cssMap: s, cssVars: l } = XC(a, { cssVarPrefix: o });
  return (
    Object.assign(n, {
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
      __breakpoints: qC(n.breakpoints),
    }),
    n
  );
}
var Rm = Ot(
  {},
  Gs,
  Q,
  xC,
  Rl,
  It,
  _C,
  RC,
  CC,
  U1,
  zC,
  Wa,
  Xd,
  ye,
  BC,
  IC,
  DC,
  FC,
  TC,
  LC
);
Object.assign({}, ye, It, Rl, U1, Wa);
var lT = [...Object.keys(Rm), ...J1],
  uT = { ...Rm, ...Cu },
  cT = (e) => e in uT,
  dT = (e) => (t) => {
    if (!t.__breakpoints) return e;
    const { isResponsive: n, toArrayValue: r, media: i } = t.__breakpoints,
      a = {};
    for (const o in e) {
      let s = ir(e[o], t);
      if (s == null) continue;
      if (((s = Wt(s) && n(s) ? r(s) : s), !Array.isArray(s))) {
        a[o] = s;
        continue;
      }
      const l = s.slice(0, i.length).length;
      for (let u = 0; u < l; u += 1) {
        const c = i?.[u];
        if (!c) {
          a[o] = s[u];
          continue;
        }
        (a[c] = a[c] || {}), s[u] != null && (a[c][o] = s[u]);
      }
    }
    return a;
  };
function fT(e) {
  const t = [];
  let n = "",
    r = !1;
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    a === "("
      ? ((r = !0), (n += a))
      : a === ")"
      ? ((r = !1), (n += a))
      : a === "," && !r
      ? (t.push(n), (n = ""))
      : (n += a);
  }
  return (n = n.trim()), n && t.push(n), t;
}
function mT(e) {
  return /^var\(--.+\)$/.test(e);
}
var hT = (e, t) => e.startsWith("--") && typeof t == "string" && !mT(t),
  pT = (e, t) => {
    var n, r;
    if (t == null) return t;
    const i = (l) => {
        var u, c;
        return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null
          ? void 0
          : c.varRef;
      },
      a = (l) => {
        var u;
        return (u = i(l)) != null ? u : l;
      },
      [o, s] = fT(t);
    return (t = (r = (n = i(o)) != null ? n : a(s)) != null ? r : a(t)), t;
  };
function gT(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e,
    i = (a, o = !1) => {
      var s, l, u;
      const c = ir(a, r),
        d = dT(c)(r);
      let f = {};
      for (let h in d) {
        const y = d[h];
        let b = ir(y, r);
        h in n && (h = n[h]), hT(h, b) && (b = pT(r, b));
        let _ = t[h];
        if ((_ === !0 && (_ = { property: h }), Wt(b))) {
          (f[h] = (s = f[h]) != null ? s : {}), (f[h] = Ot({}, f[h], i(b, !0)));
          continue;
        }
        let g =
          (u = (l = _?.transform) == null ? void 0 : l.call(_, b, r, c)) != null
            ? u
            : b;
        g = _?.processResult ? i(g, !0) : g;
        const m = ir(_?.property, r);
        if (!o && _?.static) {
          const p = ir(_.static, r);
          f = Ot({}, f, p);
        }
        if (m && Array.isArray(m)) {
          for (const p of m) f[p] = g;
          continue;
        }
        if (m) {
          m === "&" && Wt(g) ? (f = Ot({}, f, g)) : (f[m] = g);
          continue;
        }
        if (Wt(g)) {
          f = Ot({}, f, g);
          continue;
        }
        f[h] = g;
      }
      return f;
    };
  return i;
}
var q1 = (e) => (t) => gT({ theme: t, pseudos: Cu, configs: Rm })(e);
function he(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    },
  };
}
function yT(e, t) {
  if (Array.isArray(e)) return e;
  if (Wt(e)) return t(e);
  if (e != null) return [e];
}
function vT(e, t) {
  for (let n = t + 1; n < e.length; n++) if (e[n] != null) return n;
  return -1;
}
function bT(e) {
  const t = e.__breakpoints;
  return function (r, i, a, o) {
    var s, l;
    if (!t) return;
    const u = {},
      c = yT(a, t.toArrayValue);
    if (!c) return u;
    const d = c.length,
      f = d === 1,
      h = !!r.parts;
    for (let y = 0; y < d; y++) {
      const b = t.details[y],
        _ = t.details[vT(c, y)],
        g = Pa(b.minW, _?._minW),
        m = ir((s = r[i]) == null ? void 0 : s[c[y]], o);
      if (m) {
        if (h) {
          (l = r.parts) == null ||
            l.forEach((p) => {
              Ot(u, { [p]: f ? m[p] : { [g]: m[p] } });
            });
          continue;
        }
        if (!h) {
          f ? Ot(u, m) : (u[g] = m);
          continue;
        }
        u[g] = m;
      }
    }
    return u;
  };
}
function ST(e) {
  return (t) => {
    var n;
    const { variant: r, size: i, theme: a } = t,
      o = bT(a);
    return Ot(
      {},
      ir((n = e.baseStyle) != null ? n : {}, t),
      o(e, "sizes", i, t),
      o(e, "variants", r, t)
    );
  };
}
function nn(e) {
  return QC(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var wT = [
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
function kT(e) {
  return Wt(e)
    ? wT.every((t) => Object.prototype.hasOwnProperty.call(e, t))
    : !1;
}
var xT = {
    common:
      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    colors: "background-color, border-color, color, fill, stroke",
    dimensions: "width, height",
    position: "left, right, top, bottom",
    background: "background-color, background-image, background-position",
  },
  _T = {
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  CT = {
    "ultra-fast": "50ms",
    faster: "100ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "400ms",
    "ultra-slow": "500ms",
  },
  TT = { property: xT, easing: _T, duration: CT },
  PT = TT,
  ET = {
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
  AT = ET,
  MT = {
    none: 0,
    "1px": "1px solid",
    "2px": "2px solid",
    "4px": "4px solid",
    "8px": "8px solid",
  },
  $T = MT,
  zT = {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  RT = zT,
  DT = {
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
  FT = DT,
  LT = {
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
  IT = LT,
  BT = {
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
  jT = BT,
  NT = {
    none: 0,
    sm: "4px",
    base: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  },
  OT = NT,
  VT = {
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
  X1 = VT,
  Q1 = {
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
  WT = {
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
  HT = { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
  UT = { ...Q1, ...WT, container: HT },
  Z1 = UT,
  GT = {
    breakpoints: RT,
    zIndices: AT,
    radii: IT,
    blur: OT,
    colors: FT,
    ...X1,
    sizes: Z1,
    shadows: jT,
    space: Q1,
    borders: $T,
    transition: PT,
  },
  { defineMultiStyleConfig: KT, definePartsStyle: Ea } = he([
    "stepper",
    "step",
    "title",
    "description",
    "indicator",
    "separator",
    "icon",
    "number",
  ]),
  _n = B("stepper-indicator-size"),
  wi = B("stepper-icon-size"),
  ki = B("stepper-title-font-size"),
  Aa = B("stepper-description-font-size"),
  va = B("stepper-accent-color"),
  YT = Ea(({ colorScheme: e }) => ({
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
      [va.variable]: `colors.${e}.500`,
      _dark: { [va.variable]: `colors.${e}.200` },
    },
    title: { fontSize: ki.reference, fontWeight: "medium" },
    description: { fontSize: Aa.reference, color: "chakra-subtle-text" },
    number: { fontSize: ki.reference },
    step: {
      flexShrink: 0,
      position: "relative",
      display: "flex",
      gap: "2",
      "&[data-orientation=horizontal]": { alignItems: "center" },
      flex: "1",
      "&:last-of-type:not([data-stretch])": { flex: "initial" },
    },
    icon: { flexShrink: 0, width: wi.reference, height: wi.reference },
    indicator: {
      flexShrink: 0,
      borderRadius: "full",
      width: _n.reference,
      height: _n.reference,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&[data-status=active]": {
        borderWidth: "2px",
        borderColor: va.reference,
      },
      "&[data-status=complete]": {
        bg: va.reference,
        color: "chakra-inverse-text",
      },
      "&[data-status=incomplete]": { borderWidth: "2px" },
    },
    separator: {
      bg: "chakra-border-color",
      flex: "1",
      "&[data-status=complete]": { bg: va.reference },
      "&[data-orientation=horizontal]": {
        width: "100%",
        height: "2px",
        marginStart: "2",
      },
      "&[data-orientation=vertical]": {
        width: "2px",
        position: "absolute",
        height: "100%",
        maxHeight: `calc(100% - ${_n.reference} - 8px)`,
        top: `calc(${_n.reference} + 4px)`,
        insetStart: `calc(${_n.reference} / 2 - 1px)`,
      },
    },
  })),
  JT = KT({
    baseStyle: YT,
    sizes: {
      xs: Ea({
        stepper: {
          [_n.variable]: "sizes.4",
          [wi.variable]: "sizes.3",
          [ki.variable]: "fontSizes.xs",
          [Aa.variable]: "fontSizes.xs",
        },
      }),
      sm: Ea({
        stepper: {
          [_n.variable]: "sizes.6",
          [wi.variable]: "sizes.4",
          [ki.variable]: "fontSizes.sm",
          [Aa.variable]: "fontSizes.xs",
        },
      }),
      md: Ea({
        stepper: {
          [_n.variable]: "sizes.8",
          [wi.variable]: "sizes.5",
          [ki.variable]: "fontSizes.md",
          [Aa.variable]: "fontSizes.sm",
        },
      }),
      lg: Ea({
        stepper: {
          [_n.variable]: "sizes.10",
          [wi.variable]: "sizes.6",
          [ki.variable]: "fontSizes.lg",
          [Aa.variable]: "fontSizes.md",
        },
      }),
    },
    defaultProps: { size: "md", colorScheme: "blue" },
  });
function re(e, t = {}) {
  let n = !1;
  function r() {
    if (!n) {
      n = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function i(...c) {
    r();
    for (const d of c) t[d] = l(d);
    return re(e, t);
  }
  function a(...c) {
    for (const d of c) d in t || (t[d] = l(d));
    return re(e, t);
  }
  function o() {
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
    const h = `chakra-${(["container", "root"].includes(c ?? "") ? [e] : [e, c])
      .filter(Boolean)
      .join("__")}`;
    return { className: h, selector: `.${h}`, toString: () => c };
  }
  return {
    parts: i,
    toPart: l,
    extend: a,
    selectors: o,
    classnames: s,
    get keys() {
      return Object.keys(t);
    },
    __type: {},
  };
}
var qT = re("accordion")
    .parts("root", "container", "button", "panel")
    .extend("icon"),
  XT = re("alert")
    .parts("title", "description", "container")
    .extend("icon", "spinner"),
  QT = re("avatar")
    .parts("label", "badge", "container")
    .extend("excessLabel", "group"),
  ZT = re("breadcrumb").parts("link", "item", "container").extend("separator");
re("button").parts();
var eP = re("checkbox").parts("control", "icon", "container").extend("label");
re("progress").parts("track", "filledTrack").extend("label");
var tP = re("drawer")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  nP = re("editable").parts("preview", "input", "textarea"),
  rP = re("form").parts("container", "requiredIndicator", "helperText"),
  iP = re("formError").parts("text", "icon"),
  aP = re("input").parts("addon", "field", "element", "group"),
  oP = re("list").parts("container", "item", "icon"),
  sP = re("menu")
    .parts("button", "list", "item")
    .extend("groupTitle", "icon", "command", "divider"),
  lP = re("modal")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  uP = re("numberinput").parts("root", "field", "stepperGroup", "stepper");
re("pininput").parts("field");
var cP = re("popover")
    .parts("content", "header", "body", "footer")
    .extend("popper", "arrow", "closeButton"),
  dP = re("progress").parts("label", "filledTrack", "track"),
  fP = re("radio").parts("container", "control", "label"),
  mP = re("select").parts("field", "icon"),
  hP = re("slider").parts("container", "track", "thumb", "filledTrack", "mark"),
  pP = re("stat").parts("container", "label", "helpText", "number", "icon"),
  gP = re("switch").parts("container", "track", "thumb"),
  yP = re("table").parts(
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "tfoot",
    "caption"
  ),
  vP = re("tabs").parts(
    "root",
    "tab",
    "tablist",
    "tabpanel",
    "tabpanels",
    "indicator"
  ),
  bP = re("tag").parts("container", "label", "closeButton"),
  SP = re("card").parts("container", "header", "body", "footer");
function Ir(e, t, n) {
  return Math.min(Math.max(e, n), t);
}
class wP extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Ma = wP;
function Dm(e) {
  if (typeof e != "string") throw new Ma(e);
  if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let t = e.trim();
  t = AP.test(e) ? _P(e) : e;
  const n = CP.exec(t);
  if (n) {
    const o = Array.from(n).slice(1);
    return [
      ...o.slice(0, 3).map((s) => parseInt(xo(s, 2), 16)),
      parseInt(xo(o[3] || "f", 2), 16) / 255,
    ];
  }
  const r = TP.exec(t);
  if (r) {
    const o = Array.from(r).slice(1);
    return [
      ...o.slice(0, 3).map((s) => parseInt(s, 16)),
      parseInt(o[3] || "ff", 16) / 255,
    ];
  }
  const i = PP.exec(t);
  if (i) {
    const o = Array.from(i).slice(1);
    return [
      ...o.slice(0, 3).map((s) => parseInt(s, 10)),
      parseFloat(o[3] || "1"),
    ];
  }
  const a = EP.exec(t);
  if (a) {
    const [o, s, l, u] = Array.from(a).slice(1).map(parseFloat);
    if (Ir(0, 100, s) !== s) throw new Ma(e);
    if (Ir(0, 100, l) !== l) throw new Ma(e);
    return [...MP(o, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new Ma(e);
}
function kP(e) {
  let t = 5381,
    n = e.length;
  for (; n; ) t = (t * 33) ^ e.charCodeAt(--n);
  return (t >>> 0) % 2341;
}
const cg = (e) => parseInt(e.replace(/_/g, ""), 36),
  xP =
    "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm"
      .split(" ")
      .reduce((e, t) => {
        const n = cg(t.substring(0, 3)),
          r = cg(t.substring(3)).toString(16);
        let i = "";
        for (let a = 0; a < 6 - r.length; a++) i += "0";
        return (e[n] = `${i}${r}`), e;
      }, {});
function _P(e) {
  const t = e.toLowerCase().trim(),
    n = xP[kP(t)];
  if (!n) throw new Ma(e);
  return `#${n}`;
}
const xo = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(""),
  CP = new RegExp(`^#${xo("([a-f0-9])", 3)}([a-f0-9])?$`, "i"),
  TP = new RegExp(`^#${xo("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"),
  PP = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${xo(
      ",\\s*(\\d+)\\s*",
      2
    )}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    "i"
  ),
  EP =
    /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  AP = /^[a-z]+$/i,
  dg = (e) => Math.round(e * 255),
  MP = (e, t, n) => {
    let r = n / 100;
    if (t === 0) return [r, r, r].map(dg);
    const i = (((e % 360) + 360) % 360) / 60,
      a = (1 - Math.abs(2 * r - 1)) * (t / 100),
      o = a * (1 - Math.abs((i % 2) - 1));
    let s = 0,
      l = 0,
      u = 0;
    i >= 0 && i < 1
      ? ((s = a), (l = o))
      : i >= 1 && i < 2
      ? ((s = o), (l = a))
      : i >= 2 && i < 3
      ? ((l = a), (u = o))
      : i >= 3 && i < 4
      ? ((l = o), (u = a))
      : i >= 4 && i < 5
      ? ((s = o), (u = a))
      : i >= 5 && i < 6 && ((s = a), (u = o));
    const c = r - a / 2,
      d = s + c,
      f = l + c,
      h = u + c;
    return [d, f, h].map(dg);
  };
function $P(e, t, n, r) {
  return `rgba(${Ir(0, 255, e).toFixed()}, ${Ir(0, 255, t).toFixed()}, ${Ir(
    0,
    255,
    n
  ).toFixed()}, ${parseFloat(Ir(0, 1, r).toFixed(3))})`;
}
function zP(e, t) {
  const [n, r, i, a] = Dm(e);
  return $P(n, r, i, a - t);
}
function RP(e) {
  const [t, n, r, i] = Dm(e);
  let a = (o) => {
    const s = Ir(0, 255, o).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${a(t)}${a(n)}${a(r)}${i < 1 ? a(Math.round(i * 255)) : ""}`;
}
function DP(e, t, n, r, i) {
  for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++)
    e = e ? e[t[r]] : i;
  return e === i ? n : e;
}
var FP = (e) => Object.keys(e).length === 0,
  at = (e, t, n) => {
    const r = DP(e, `colors.${t}`, t);
    try {
      return RP(r), r;
    } catch {
      return n ?? "#000000";
    }
  },
  LP = (e) => {
    const [t, n, r] = Dm(e);
    return (t * 299 + n * 587 + r * 114) / 1e3;
  },
  IP = (e) => (t) => {
    const n = at(t, e);
    return LP(n) < 128 ? "dark" : "light";
  },
  BP = (e) => (t) => IP(e)(t) === "dark",
  Xi = (e, t) => (n) => {
    const r = at(n, e);
    return zP(r, 1 - t);
  };
function fg(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var jP = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, "0")}`;
function NP(e) {
  const t = jP();
  return !e || FP(e)
    ? t
    : e.string && e.colors
    ? VP(e.string, e.colors)
    : e.string && !e.colors
    ? OP(e.string)
    : e.colors && !e.string
    ? WP(e.colors)
    : t;
}
function OP(e) {
  let t = 0;
  if (e.length === 0) return t.toString();
  for (let r = 0; r < e.length; r += 1)
    (t = e.charCodeAt(r) + ((t << 5) - t)), (t = t & t);
  let n = "#";
  for (let r = 0; r < 3; r += 1) {
    const i = (t >> (r * 8)) & 255;
    n += `00${i.toString(16)}`.substr(-2);
  }
  return n;
}
function VP(e, t) {
  let n = 0;
  if (e.length === 0) return t[0];
  for (let r = 0; r < e.length; r += 1)
    (n = e.charCodeAt(r) + ((n << 5) - n)), (n = n & n);
  return (n = ((n % t.length) + t.length) % t.length), t[n];
}
function WP(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function I(e, t) {
  return (n) => (n.colorMode === "dark" ? t : e);
}
function Fm(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t ? (t === "vertical" ? n : r) : {};
}
function eb(e) {
  return Wt(e) && e.reference ? e.reference : String(e);
}
var Tu = (e, ...t) => t.map(eb).join(` ${e} `).replace(/calc/g, ""),
  mg = (...e) => `calc(${Tu("+", ...e)})`,
  hg = (...e) => `calc(${Tu("-", ...e)})`,
  ef = (...e) => `calc(${Tu("*", ...e)})`,
  pg = (...e) => `calc(${Tu("/", ...e)})`,
  gg = (e) => {
    const t = eb(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : ef(t, -1);
  },
  Cn = Object.assign(
    (e) => ({
      add: (...t) => Cn(mg(e, ...t)),
      subtract: (...t) => Cn(hg(e, ...t)),
      multiply: (...t) => Cn(ef(e, ...t)),
      divide: (...t) => Cn(pg(e, ...t)),
      negate: () => Cn(gg(e)),
      toString: () => e.toString(),
    }),
    { add: mg, subtract: hg, multiply: ef, divide: pg, negate: gg }
  );
function HP(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function UP(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function tb(e) {
  const t = UP(e.toString());
  return t.includes("\\.") ? e : HP(e) ? t.replace(".", "\\.") : e;
}
function GP(e, t = "") {
  return [t, tb(e)].filter(Boolean).join("-");
}
function KP(e, t) {
  return `var(${tb(e)}${t ? `, ${t}` : ""})`;
}
function YP(e, t = "") {
  return `--${GP(e, t)}`;
}
function je(e, t) {
  const n = YP(e, t?.prefix);
  return { variable: n, reference: KP(n, JP(t?.fallback)) };
}
function JP(e) {
  return typeof e == "string" ? e : e?.reference;
}
var { defineMultiStyleConfig: qP, definePartsStyle: Ks } = he(gP.keys),
  Ha = je("switch-track-width"),
  Or = je("switch-track-height"),
  xc = je("switch-track-diff"),
  XP = Cn.subtract(Ha, Or),
  tf = je("switch-thumb-x"),
  ba = je("switch-bg"),
  QP = (e) => {
    const { colorScheme: t } = e;
    return {
      borderRadius: "full",
      p: "0.5",
      width: [Ha.reference],
      height: [Or.reference],
      transitionProperty: "common",
      transitionDuration: "fast",
      [ba.variable]: "colors.gray.300",
      _dark: { [ba.variable]: "colors.whiteAlpha.400" },
      _focusVisible: { boxShadow: "outline" },
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
      _checked: {
        [ba.variable]: `colors.${t}.500`,
        _dark: { [ba.variable]: `colors.${t}.200` },
      },
      bg: ba.reference,
    };
  },
  ZP = {
    bg: "white",
    transitionProperty: "transform",
    transitionDuration: "normal",
    borderRadius: "inherit",
    width: [Or.reference],
    height: [Or.reference],
    _checked: { transform: `translateX(${tf.reference})` },
  },
  e5 = Ks((e) => ({
    container: {
      [xc.variable]: XP,
      [tf.variable]: xc.reference,
      _rtl: { [tf.variable]: Cn(xc).negate().toString() },
    },
    track: QP(e),
    thumb: ZP,
  })),
  t5 = {
    sm: Ks({
      container: { [Ha.variable]: "1.375rem", [Or.variable]: "sizes.3" },
    }),
    md: Ks({
      container: { [Ha.variable]: "1.875rem", [Or.variable]: "sizes.4" },
    }),
    lg: Ks({
      container: { [Ha.variable]: "2.875rem", [Or.variable]: "sizes.6" },
    }),
  },
  n5 = qP({
    baseStyle: e5,
    sizes: t5,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: r5, definePartsStyle: Bi } = he(yP.keys),
  i5 = Bi({
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
  Dl = { "&[data-is-numeric=true]": { textAlign: "end" } },
  a5 = Bi((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: I("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: I(`${t}.100`, `${t}.700`)(e),
        ...Dl,
      },
      td: {
        borderBottom: "1px",
        borderColor: I(`${t}.100`, `${t}.700`)(e),
        ...Dl,
      },
      caption: { color: I("gray.600", "gray.100")(e) },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  o5 = Bi((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: I("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: I(`${t}.100`, `${t}.700`)(e),
        ...Dl,
      },
      td: {
        borderBottom: "1px",
        borderColor: I(`${t}.100`, `${t}.700`)(e),
        ...Dl,
      },
      caption: { color: I("gray.600", "gray.100")(e) },
      tbody: {
        tr: {
          "&:nth-of-type(odd)": {
            "th, td": {
              borderBottomWidth: "1px",
              borderColor: I(`${t}.100`, `${t}.700`)(e),
            },
            td: { background: I(`${t}.100`, `${t}.700`)(e) },
          },
        },
      },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  s5 = { simple: a5, striped: o5, unstyled: {} },
  l5 = {
    sm: Bi({
      th: { px: "4", py: "1", lineHeight: "4", fontSize: "xs" },
      td: { px: "4", py: "2", fontSize: "sm", lineHeight: "4" },
      caption: { px: "4", py: "2", fontSize: "xs" },
    }),
    md: Bi({
      th: { px: "6", py: "3", lineHeight: "4", fontSize: "xs" },
      td: { px: "6", py: "4", lineHeight: "5" },
      caption: { px: "6", py: "2", fontSize: "sm" },
    }),
    lg: Bi({
      th: { px: "8", py: "4", lineHeight: "5", fontSize: "sm" },
      td: { px: "8", py: "5", lineHeight: "6" },
      caption: { px: "6", py: "2", fontSize: "md" },
    }),
  },
  u5 = r5({
    baseStyle: i5,
    variants: s5,
    sizes: l5,
    defaultProps: { variant: "simple", size: "md", colorScheme: "gray" },
  }),
  ft = B("tabs-color"),
  Qt = B("tabs-bg"),
  Ss = B("tabs-border-color"),
  { defineMultiStyleConfig: c5, definePartsStyle: yn } = he(vP.keys),
  d5 = (e) => {
    const { orientation: t } = e;
    return { display: t === "vertical" ? "flex" : "block" };
  },
  f5 = (e) => {
    const { isFitted: t } = e;
    return {
      flex: t ? 1 : void 0,
      transitionProperty: "common",
      transitionDuration: "normal",
      _focusVisible: { zIndex: 1, boxShadow: "outline" },
      _disabled: { cursor: "not-allowed", opacity: 0.4 },
    };
  },
  m5 = (e) => {
    const { align: t = "start", orientation: n } = e;
    return {
      justifyContent: {
        end: "flex-end",
        center: "center",
        start: "flex-start",
      }[t],
      flexDirection: n === "vertical" ? "column" : "row",
    };
  },
  h5 = { p: 4 },
  p5 = yn((e) => ({ root: d5(e), tab: f5(e), tablist: m5(e), tabpanel: h5 })),
  g5 = {
    sm: yn({ tab: { py: 1, px: 4, fontSize: "sm" } }),
    md: yn({ tab: { fontSize: "md", py: 2, px: 4 } }),
    lg: yn({ tab: { fontSize: "lg", py: 3, px: 4 } }),
  },
  y5 = yn((e) => {
    const { colorScheme: t, orientation: n } = e,
      r = n === "vertical",
      i = r ? "borderStart" : "borderBottom",
      a = r ? "marginStart" : "marginBottom";
    return {
      tablist: { [i]: "2px solid", borderColor: "inherit" },
      tab: {
        [i]: "2px solid",
        borderColor: "transparent",
        [a]: "-2px",
        _selected: {
          [ft.variable]: `colors.${t}.600`,
          _dark: { [ft.variable]: `colors.${t}.300` },
          borderColor: "currentColor",
        },
        _active: {
          [Qt.variable]: "colors.gray.200",
          _dark: { [Qt.variable]: "colors.whiteAlpha.300" },
        },
        _disabled: { _active: { bg: "none" } },
        color: ft.reference,
        bg: Qt.reference,
      },
    };
  }),
  v5 = yn((e) => {
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
  b5 = yn((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        border: "1px solid",
        borderColor: "inherit",
        [Qt.variable]: "colors.gray.50",
        _dark: { [Qt.variable]: "colors.whiteAlpha.50" },
        mb: "-1px",
        _notLast: { marginEnd: "-1px" },
        _selected: {
          [Qt.variable]: "colors.white",
          [ft.variable]: `colors.${t}.600`,
          _dark: {
            [Qt.variable]: "colors.gray.800",
            [ft.variable]: `colors.${t}.300`,
          },
          borderColor: "inherit",
          borderTopColor: "currentColor",
          borderBottomColor: "transparent",
        },
        color: ft.reference,
        bg: Qt.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  S5 = yn((e) => {
    const { colorScheme: t, theme: n } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        color: "gray.600",
        _selected: { color: at(n, `${t}.700`), bg: at(n, `${t}.100`) },
      },
    };
  }),
  w5 = yn((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        [ft.variable]: "colors.gray.600",
        _dark: { [ft.variable]: "inherit" },
        _selected: {
          [ft.variable]: "colors.white",
          [Qt.variable]: `colors.${t}.600`,
          _dark: {
            [ft.variable]: "colors.gray.800",
            [Qt.variable]: `colors.${t}.300`,
          },
        },
        color: ft.reference,
        bg: Qt.reference,
      },
    };
  }),
  k5 = yn({}),
  x5 = {
    line: y5,
    enclosed: v5,
    "enclosed-colored": b5,
    "soft-rounded": S5,
    "solid-rounded": w5,
    unstyled: k5,
  },
  _5 = c5({
    baseStyle: p5,
    sizes: g5,
    variants: x5,
    defaultProps: { size: "md", variant: "line", colorScheme: "blue" },
  }),
  $e = GC("badge", ["bg", "color", "shadow"]),
  C5 = {
    px: 1,
    textTransform: "uppercase",
    fontSize: "xs",
    borderRadius: "sm",
    fontWeight: "bold",
    bg: $e.bg.reference,
    color: $e.color.reference,
    boxShadow: $e.shadow.reference,
  },
  T5 = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = Xi(`${t}.500`, 0.6)(n);
    return {
      [$e.bg.variable]: `colors.${t}.500`,
      [$e.color.variable]: "colors.white",
      _dark: {
        [$e.bg.variable]: r,
        [$e.color.variable]: "colors.whiteAlpha.800",
      },
    };
  },
  P5 = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = Xi(`${t}.200`, 0.16)(n);
    return {
      [$e.bg.variable]: `colors.${t}.100`,
      [$e.color.variable]: `colors.${t}.800`,
      _dark: { [$e.bg.variable]: r, [$e.color.variable]: `colors.${t}.200` },
    };
  },
  E5 = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = Xi(`${t}.200`, 0.8)(n);
    return {
      [$e.color.variable]: `colors.${t}.500`,
      _dark: { [$e.color.variable]: r },
      [$e.shadow.variable]: `inset 0 0 0px 1px ${$e.color.reference}`,
    };
  },
  A5 = { solid: T5, subtle: P5, outline: E5 },
  Ua = {
    baseStyle: C5,
    variants: A5,
    defaultProps: { variant: "subtle", colorScheme: "gray" },
  },
  { defineMultiStyleConfig: M5, definePartsStyle: Vr } = he(bP.keys),
  yg = B("tag-bg"),
  vg = B("tag-color"),
  _c = B("tag-shadow"),
  Ys = B("tag-min-height"),
  Js = B("tag-min-width"),
  qs = B("tag-font-size"),
  Xs = B("tag-padding-inline"),
  $5 = {
    fontWeight: "medium",
    lineHeight: 1.2,
    outline: 0,
    [vg.variable]: $e.color.reference,
    [yg.variable]: $e.bg.reference,
    [_c.variable]: $e.shadow.reference,
    color: vg.reference,
    bg: yg.reference,
    boxShadow: _c.reference,
    borderRadius: "md",
    minH: Ys.reference,
    minW: Js.reference,
    fontSize: qs.reference,
    px: Xs.reference,
    _focusVisible: { [_c.variable]: "shadows.outline" },
  },
  z5 = { lineHeight: 1.2, overflow: "visible" },
  R5 = {
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
  D5 = Vr({ container: $5, label: z5, closeButton: R5 }),
  F5 = {
    sm: Vr({
      container: {
        [Ys.variable]: "sizes.5",
        [Js.variable]: "sizes.5",
        [qs.variable]: "fontSizes.xs",
        [Xs.variable]: "space.2",
      },
      closeButton: { marginEnd: "-2px", marginStart: "0.35rem" },
    }),
    md: Vr({
      container: {
        [Ys.variable]: "sizes.6",
        [Js.variable]: "sizes.6",
        [qs.variable]: "fontSizes.sm",
        [Xs.variable]: "space.2",
      },
    }),
    lg: Vr({
      container: {
        [Ys.variable]: "sizes.8",
        [Js.variable]: "sizes.8",
        [qs.variable]: "fontSizes.md",
        [Xs.variable]: "space.3",
      },
    }),
  },
  L5 = {
    subtle: Vr((e) => {
      var t;
      return { container: (t = Ua.variants) == null ? void 0 : t.subtle(e) };
    }),
    solid: Vr((e) => {
      var t;
      return { container: (t = Ua.variants) == null ? void 0 : t.solid(e) };
    }),
    outline: Vr((e) => {
      var t;
      return { container: (t = Ua.variants) == null ? void 0 : t.outline(e) };
    }),
  },
  I5 = M5({
    variants: L5,
    baseStyle: D5,
    sizes: F5,
    defaultProps: { size: "md", variant: "subtle", colorScheme: "gray" },
  }),
  { definePartsStyle: En, defineMultiStyleConfig: B5 } = he(aP.keys),
  xi = B("input-height"),
  _i = B("input-font-size"),
  Ci = B("input-padding"),
  Ti = B("input-border-radius"),
  j5 = En({
    addon: {
      height: xi.reference,
      fontSize: _i.reference,
      px: Ci.reference,
      borderRadius: Ti.reference,
    },
    field: {
      width: "100%",
      height: xi.reference,
      fontSize: _i.reference,
      px: Ci.reference,
      borderRadius: Ti.reference,
      minWidth: 0,
      outline: 0,
      position: "relative",
      appearance: "none",
      transitionProperty: "common",
      transitionDuration: "normal",
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
    },
  }),
  Kn = {
    lg: {
      [_i.variable]: "fontSizes.lg",
      [Ci.variable]: "space.4",
      [Ti.variable]: "radii.md",
      [xi.variable]: "sizes.12",
    },
    md: {
      [_i.variable]: "fontSizes.md",
      [Ci.variable]: "space.4",
      [Ti.variable]: "radii.md",
      [xi.variable]: "sizes.10",
    },
    sm: {
      [_i.variable]: "fontSizes.sm",
      [Ci.variable]: "space.3",
      [Ti.variable]: "radii.sm",
      [xi.variable]: "sizes.8",
    },
    xs: {
      [_i.variable]: "fontSizes.xs",
      [Ci.variable]: "space.2",
      [Ti.variable]: "radii.sm",
      [xi.variable]: "sizes.6",
    },
  },
  N5 = {
    lg: En({ field: Kn.lg, group: Kn.lg }),
    md: En({ field: Kn.md, group: Kn.md }),
    sm: En({ field: Kn.sm, group: Kn.sm }),
    xs: En({ field: Kn.xs, group: Kn.xs }),
  };
function Lm(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return {
    focusBorderColor: t || I("blue.500", "blue.300")(e),
    errorBorderColor: n || I("red.500", "red.300")(e),
  };
}
var O5 = En((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = Lm(e);
    return {
      field: {
        border: "1px solid",
        borderColor: "inherit",
        bg: "inherit",
        _hover: { borderColor: I("gray.300", "whiteAlpha.400")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: at(t, r), boxShadow: `0 0 0 1px ${at(t, r)}` },
        _focusVisible: {
          zIndex: 1,
          borderColor: at(t, n),
          boxShadow: `0 0 0 1px ${at(t, n)}`,
        },
      },
      addon: {
        border: "1px solid",
        borderColor: I("inherit", "whiteAlpha.50")(e),
        bg: I("gray.100", "whiteAlpha.300")(e),
      },
    };
  }),
  V5 = En((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = Lm(e);
    return {
      field: {
        border: "2px solid",
        borderColor: "transparent",
        bg: I("gray.100", "whiteAlpha.50")(e),
        _hover: { bg: I("gray.200", "whiteAlpha.100")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: at(t, r) },
        _focusVisible: { bg: "transparent", borderColor: at(t, n) },
      },
      addon: {
        border: "2px solid",
        borderColor: "transparent",
        bg: I("gray.100", "whiteAlpha.50")(e),
      },
    };
  }),
  W5 = En((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = Lm(e);
    return {
      field: {
        borderBottom: "1px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: {
          borderColor: at(t, r),
          boxShadow: `0px 1px 0px 0px ${at(t, r)}`,
        },
        _focusVisible: {
          borderColor: at(t, n),
          boxShadow: `0px 1px 0px 0px ${at(t, n)}`,
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
  H5 = En({
    field: { bg: "transparent", px: "0", height: "auto" },
    addon: { bg: "transparent", px: "0", height: "auto" },
  }),
  U5 = { outline: O5, filled: V5, flushed: W5, unstyled: H5 },
  te = B5({
    baseStyle: j5,
    sizes: N5,
    variants: U5,
    defaultProps: { size: "md", variant: "outline" },
  }),
  bg,
  G5 = {
    ...((bg = te.baseStyle) == null ? void 0 : bg.field),
    paddingY: "2",
    minHeight: "20",
    lineHeight: "short",
    verticalAlign: "top",
  },
  Sg,
  wg,
  K5 = {
    outline: (e) => {
      var t, n;
      return (n = (t = te.variants) == null ? void 0 : t.outline(e).field) !=
        null
        ? n
        : {};
    },
    flushed: (e) => {
      var t, n;
      return (n = (t = te.variants) == null ? void 0 : t.flushed(e).field) !=
        null
        ? n
        : {};
    },
    filled: (e) => {
      var t, n;
      return (n = (t = te.variants) == null ? void 0 : t.filled(e).field) !=
        null
        ? n
        : {};
    },
    unstyled:
      (wg = (Sg = te.variants) == null ? void 0 : Sg.unstyled.field) != null
        ? wg
        : {},
  },
  kg,
  xg,
  _g,
  Cg,
  Tg,
  Pg,
  Eg,
  Ag,
  Y5 = {
    xs: (xg = (kg = te.sizes) == null ? void 0 : kg.xs.field) != null ? xg : {},
    sm: (Cg = (_g = te.sizes) == null ? void 0 : _g.sm.field) != null ? Cg : {},
    md: (Pg = (Tg = te.sizes) == null ? void 0 : Tg.md.field) != null ? Pg : {},
    lg: (Ag = (Eg = te.sizes) == null ? void 0 : Eg.lg.field) != null ? Ag : {},
  },
  J5 = {
    baseStyle: G5,
    sizes: Y5,
    variants: K5,
    defaultProps: { size: "md", variant: "outline" },
  },
  ws = je("tooltip-bg"),
  Cc = je("tooltip-fg"),
  q5 = je("popper-arrow-bg"),
  X5 = {
    bg: ws.reference,
    color: Cc.reference,
    [ws.variable]: "colors.gray.700",
    [Cc.variable]: "colors.whiteAlpha.900",
    _dark: {
      [ws.variable]: "colors.gray.300",
      [Cc.variable]: "colors.gray.900",
    },
    [q5.variable]: ws.reference,
    px: "2",
    py: "0.5",
    borderRadius: "sm",
    fontWeight: "medium",
    fontSize: "sm",
    boxShadow: "md",
    maxW: "xs",
    zIndex: "tooltip",
  },
  Q5 = { baseStyle: X5 },
  { defineMultiStyleConfig: Z5, definePartsStyle: $a } = he(dP.keys),
  e3 = (e) => {
    const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: i } = e,
      a = I(fg(), fg("1rem", "rgba(0,0,0,0.1)"))(e),
      o = I(`${t}.500`, `${t}.200`)(e),
      s = `linear-gradient(
    to right,
    transparent 0%,
    ${at(n, o)} 50%,
    transparent 100%
  )`;
    return { ...(!r && i && a), ...(r ? { bgImage: s } : { bgColor: o }) };
  },
  t3 = {
    lineHeight: "1",
    fontSize: "0.25em",
    fontWeight: "bold",
    color: "white",
  },
  n3 = (e) => ({ bg: I("gray.100", "whiteAlpha.300")(e) }),
  r3 = (e) => ({
    transitionProperty: "common",
    transitionDuration: "slow",
    ...e3(e),
  }),
  i3 = $a((e) => ({ label: t3, filledTrack: r3(e), track: n3(e) })),
  a3 = {
    xs: $a({ track: { h: "1" } }),
    sm: $a({ track: { h: "2" } }),
    md: $a({ track: { h: "3" } }),
    lg: $a({ track: { h: "4" } }),
  },
  o3 = Z5({
    sizes: a3,
    baseStyle: i3,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  s3 = (e) => typeof e == "function";
function st(e, ...t) {
  return s3(e) ? e(...t) : e;
}
var { definePartsStyle: Qs, defineMultiStyleConfig: l3 } = he(eP.keys),
  Ga = B("checkbox-size"),
  u3 = (e) => {
    const { colorScheme: t } = e;
    return {
      w: Ga.reference,
      h: Ga.reference,
      transitionProperty: "box-shadow",
      transitionDuration: "normal",
      border: "2px solid",
      borderRadius: "sm",
      borderColor: "inherit",
      color: "white",
      _checked: {
        bg: I(`${t}.500`, `${t}.200`)(e),
        borderColor: I(`${t}.500`, `${t}.200`)(e),
        color: I("white", "gray.900")(e),
        _hover: {
          bg: I(`${t}.600`, `${t}.300`)(e),
          borderColor: I(`${t}.600`, `${t}.300`)(e),
        },
        _disabled: {
          borderColor: I("gray.200", "transparent")(e),
          bg: I("gray.200", "whiteAlpha.300")(e),
          color: I("gray.500", "whiteAlpha.500")(e),
        },
      },
      _indeterminate: {
        bg: I(`${t}.500`, `${t}.200`)(e),
        borderColor: I(`${t}.500`, `${t}.200`)(e),
        color: I("white", "gray.900")(e),
      },
      _disabled: {
        bg: I("gray.100", "whiteAlpha.100")(e),
        borderColor: I("gray.100", "transparent")(e),
      },
      _focusVisible: { boxShadow: "outline" },
      _invalid: { borderColor: I("red.500", "red.300")(e) },
    };
  },
  c3 = { _disabled: { cursor: "not-allowed" } },
  d3 = { userSelect: "none", _disabled: { opacity: 0.4 } },
  f3 = { transitionProperty: "transform", transitionDuration: "normal" },
  m3 = Qs((e) => ({ icon: f3, container: c3, control: st(u3, e), label: d3 })),
  h3 = {
    sm: Qs({
      control: { [Ga.variable]: "sizes.3" },
      label: { fontSize: "sm" },
      icon: { fontSize: "3xs" },
    }),
    md: Qs({
      control: { [Ga.variable]: "sizes.4" },
      label: { fontSize: "md" },
      icon: { fontSize: "2xs" },
    }),
    lg: Qs({
      control: { [Ga.variable]: "sizes.5" },
      label: { fontSize: "lg" },
      icon: { fontSize: "2xs" },
    }),
  },
  Fl = l3({
    baseStyle: m3,
    sizes: h3,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: p3, definePartsStyle: Zs } = he(fP.keys),
  g3 = (e) => {
    var t;
    const n = (t = st(Fl.baseStyle, e)) == null ? void 0 : t.control;
    return {
      ...n,
      borderRadius: "full",
      _checked: {
        ...n?._checked,
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
  y3 = Zs((e) => {
    var t, n, r, i;
    return {
      label: (n = (t = Fl).baseStyle) == null ? void 0 : n.call(t, e).label,
      container:
        (i = (r = Fl).baseStyle) == null ? void 0 : i.call(r, e).container,
      control: g3(e),
    };
  }),
  v3 = {
    md: Zs({ control: { w: "4", h: "4" }, label: { fontSize: "md" } }),
    lg: Zs({ control: { w: "5", h: "5" }, label: { fontSize: "lg" } }),
    sm: Zs({ control: { width: "3", height: "3" }, label: { fontSize: "sm" } }),
  },
  b3 = p3({
    baseStyle: y3,
    sizes: v3,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: S3, definePartsStyle: w3 } = he(mP.keys),
  ks = B("select-bg"),
  Mg,
  k3 = {
    ...((Mg = te.baseStyle) == null ? void 0 : Mg.field),
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    bg: ks.reference,
    [ks.variable]: "colors.white",
    _dark: { [ks.variable]: "colors.gray.700" },
    "> option, > optgroup": { bg: ks.reference },
  },
  x3 = {
    width: "6",
    height: "100%",
    insetEnd: "2",
    position: "relative",
    color: "currentColor",
    fontSize: "xl",
    _disabled: { opacity: 0.5 },
  },
  _3 = w3({ field: k3, icon: x3 }),
  xs = { paddingInlineEnd: "8" },
  $g,
  zg,
  Rg,
  Dg,
  Fg,
  Lg,
  Ig,
  Bg,
  C3 = {
    lg: {
      ...(($g = te.sizes) == null ? void 0 : $g.lg),
      field: { ...((zg = te.sizes) == null ? void 0 : zg.lg.field), ...xs },
    },
    md: {
      ...((Rg = te.sizes) == null ? void 0 : Rg.md),
      field: { ...((Dg = te.sizes) == null ? void 0 : Dg.md.field), ...xs },
    },
    sm: {
      ...((Fg = te.sizes) == null ? void 0 : Fg.sm),
      field: { ...((Lg = te.sizes) == null ? void 0 : Lg.sm.field), ...xs },
    },
    xs: {
      ...((Ig = te.sizes) == null ? void 0 : Ig.xs),
      field: { ...((Bg = te.sizes) == null ? void 0 : Bg.xs.field), ...xs },
      icon: { insetEnd: "1" },
    },
  },
  T3 = S3({
    baseStyle: _3,
    sizes: C3,
    variants: te.variants,
    defaultProps: te.defaultProps,
  }),
  Tc = B("skeleton-start-color"),
  Pc = B("skeleton-end-color"),
  P3 = {
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
  E3 = { baseStyle: P3 },
  Ec = B("skip-link-bg"),
  A3 = {
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
  M3 = { baseStyle: A3 },
  { defineMultiStyleConfig: $3, definePartsStyle: Pu } = he(hP.keys),
  _o = B("slider-thumb-size"),
  Co = B("slider-track-size"),
  tr = B("slider-bg"),
  z3 = (e) => {
    const { orientation: t } = e;
    return {
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      _disabled: { opacity: 0.6, cursor: "default", pointerEvents: "none" },
      ...Fm({
        orientation: t,
        vertical: { h: "100%" },
        horizontal: { w: "100%" },
      }),
    };
  },
  R3 = (e) => ({
    ...Fm({
      orientation: e.orientation,
      horizontal: { h: Co.reference },
      vertical: { w: Co.reference },
    }),
    overflow: "hidden",
    borderRadius: "sm",
    [tr.variable]: "colors.gray.200",
    _dark: { [tr.variable]: "colors.whiteAlpha.200" },
    _disabled: {
      [tr.variable]: "colors.gray.300",
      _dark: { [tr.variable]: "colors.whiteAlpha.300" },
    },
    bg: tr.reference,
  }),
  D3 = (e) => {
    const { orientation: t } = e;
    return {
      ...Fm({
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
      w: _o.reference,
      h: _o.reference,
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
  F3 = (e) => {
    const { colorScheme: t } = e;
    return {
      width: "inherit",
      height: "inherit",
      [tr.variable]: `colors.${t}.500`,
      _dark: { [tr.variable]: `colors.${t}.200` },
      bg: tr.reference,
    };
  },
  L3 = Pu((e) => ({
    container: z3(e),
    track: R3(e),
    thumb: D3(e),
    filledTrack: F3(e),
  })),
  I3 = Pu({
    container: { [_o.variable]: "sizes.4", [Co.variable]: "sizes.1" },
  }),
  B3 = Pu({
    container: { [_o.variable]: "sizes.3.5", [Co.variable]: "sizes.1" },
  }),
  j3 = Pu({
    container: { [_o.variable]: "sizes.2.5", [Co.variable]: "sizes.0.5" },
  }),
  N3 = { lg: I3, md: B3, sm: j3 },
  O3 = $3({
    baseStyle: L3,
    sizes: N3,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  Rr = je("spinner-size"),
  V3 = { width: [Rr.reference], height: [Rr.reference] },
  W3 = {
    xs: { [Rr.variable]: "sizes.3" },
    sm: { [Rr.variable]: "sizes.4" },
    md: { [Rr.variable]: "sizes.6" },
    lg: { [Rr.variable]: "sizes.8" },
    xl: { [Rr.variable]: "sizes.12" },
  },
  H3 = { baseStyle: V3, sizes: W3, defaultProps: { size: "md" } },
  { defineMultiStyleConfig: U3, definePartsStyle: nb } = he(pP.keys),
  G3 = { fontWeight: "medium" },
  K3 = { opacity: 0.8, marginBottom: "2" },
  Y3 = { verticalAlign: "baseline", fontWeight: "semibold" },
  J3 = { marginEnd: 1, w: "3.5", h: "3.5", verticalAlign: "middle" },
  q3 = nb({ container: {}, label: G3, helpText: K3, number: Y3, icon: J3 }),
  X3 = {
    md: nb({
      label: { fontSize: "sm" },
      helpText: { fontSize: "sm" },
      number: { fontSize: "2xl" },
    }),
  },
  Q3 = U3({ baseStyle: q3, sizes: X3, defaultProps: { size: "md" } }),
  Ac = B("kbd-bg"),
  Z3 = {
    [Ac.variable]: "colors.gray.100",
    _dark: { [Ac.variable]: "colors.whiteAlpha.100" },
    bg: Ac.reference,
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap",
  },
  eE = { baseStyle: Z3 },
  tE = {
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
  nE = { baseStyle: tE },
  { defineMultiStyleConfig: rE, definePartsStyle: iE } = he(oP.keys),
  aE = { marginEnd: "2", display: "inline", verticalAlign: "text-bottom" },
  oE = iE({ icon: aE }),
  sE = rE({ baseStyle: oE }),
  { defineMultiStyleConfig: lE, definePartsStyle: uE } = he(sP.keys),
  cn = B("menu-bg"),
  Mc = B("menu-shadow"),
  cE = {
    [cn.variable]: "#fff",
    [Mc.variable]: "shadows.sm",
    _dark: {
      [cn.variable]: "colors.gray.700",
      [Mc.variable]: "shadows.dark-lg",
    },
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px",
    bg: cn.reference,
    boxShadow: Mc.reference,
  },
  dE = {
    py: "1.5",
    px: "3",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      [cn.variable]: "colors.gray.100",
      _dark: { [cn.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [cn.variable]: "colors.gray.200",
      _dark: { [cn.variable]: "colors.whiteAlpha.200" },
    },
    _expanded: {
      [cn.variable]: "colors.gray.100",
      _dark: { [cn.variable]: "colors.whiteAlpha.100" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    bg: cn.reference,
  },
  fE = { mx: 4, my: 2, fontWeight: "semibold", fontSize: "sm" },
  mE = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  hE = { opacity: 0.6 },
  pE = {
    border: 0,
    borderBottom: "1px solid",
    borderColor: "inherit",
    my: "2",
    opacity: 0.6,
  },
  gE = { transitionProperty: "common", transitionDuration: "normal" },
  yE = uE({
    button: gE,
    list: cE,
    item: dE,
    groupTitle: fE,
    icon: mE,
    command: hE,
    divider: pE,
  }),
  vE = lE({ baseStyle: yE }),
  { defineMultiStyleConfig: bE, definePartsStyle: nf } = he(lP.keys),
  $c = B("modal-bg"),
  zc = B("modal-shadow"),
  SE = { bg: "blackAlpha.600", zIndex: "modal" },
  wE = (e) => {
    const { isCentered: t, scrollBehavior: n } = e;
    return {
      display: "flex",
      zIndex: "modal",
      justifyContent: "center",
      alignItems: t ? "center" : "flex-start",
      overflow: n === "inside" ? "hidden" : "auto",
      overscrollBehaviorY: "none",
    };
  },
  kE = (e) => {
    const { isCentered: t, scrollBehavior: n } = e;
    return {
      borderRadius: "md",
      color: "inherit",
      my: t ? "auto" : "16",
      mx: t ? "auto" : void 0,
      zIndex: "modal",
      maxH: n === "inside" ? "calc(100% - 7.5rem)" : void 0,
      [$c.variable]: "colors.white",
      [zc.variable]: "shadows.lg",
      _dark: {
        [$c.variable]: "colors.gray.700",
        [zc.variable]: "shadows.dark-lg",
      },
      bg: $c.reference,
      boxShadow: zc.reference,
    };
  },
  xE = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  _E = { position: "absolute", top: "2", insetEnd: "3" },
  CE = (e) => {
    const { scrollBehavior: t } = e;
    return {
      px: "6",
      py: "2",
      flex: "1",
      overflow: t === "inside" ? "auto" : void 0,
    };
  },
  TE = { px: "6", py: "4" },
  PE = nf((e) => ({
    overlay: SE,
    dialogContainer: st(wE, e),
    dialog: st(kE, e),
    header: xE,
    closeButton: _E,
    body: st(CE, e),
    footer: TE,
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
var EE = {
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
  AE = bE({ baseStyle: PE, sizes: EE, defaultProps: { size: "md" } }),
  { defineMultiStyleConfig: ME, definePartsStyle: rb } = he(uP.keys),
  Im = je("number-input-stepper-width"),
  ib = je("number-input-input-padding"),
  $E = Cn(Im).add("0.5rem").toString(),
  Rc = je("number-input-bg"),
  Dc = je("number-input-color"),
  Fc = je("number-input-border-color"),
  zE = { [Im.variable]: "sizes.6", [ib.variable]: $E },
  RE = (e) => {
    var t, n;
    return (n = (t = st(te.baseStyle, e)) == null ? void 0 : t.field) != null
      ? n
      : {};
  },
  DE = { width: Im.reference },
  FE = {
    borderStart: "1px solid",
    borderStartColor: Fc.reference,
    color: Dc.reference,
    bg: Rc.reference,
    [Dc.variable]: "colors.chakra-body-text",
    [Fc.variable]: "colors.chakra-border-color",
    _dark: {
      [Dc.variable]: "colors.whiteAlpha.800",
      [Fc.variable]: "colors.whiteAlpha.300",
    },
    _active: {
      [Rc.variable]: "colors.gray.200",
      _dark: { [Rc.variable]: "colors.whiteAlpha.300" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
  },
  LE = rb((e) => {
    var t;
    return {
      root: zE,
      field: (t = st(RE, e)) != null ? t : {},
      stepperGroup: DE,
      stepper: FE,
    };
  });
function _s(e) {
  var t, n, r;
  const i = (t = te.sizes) == null ? void 0 : t[e],
    a = { lg: "md", md: "md", sm: "sm", xs: "sm" },
    o = (r = (n = i.field) == null ? void 0 : n.fontSize) != null ? r : "md",
    s = X1.fontSizes[o];
  return rb({
    field: { ...i.field, paddingInlineEnd: ib.reference, verticalAlign: "top" },
    stepper: {
      fontSize: Cn(s).multiply(0.75).toString(),
      _first: { borderTopEndRadius: a[e] },
      _last: { borderBottomEndRadius: a[e], mt: "-1px", borderTopWidth: 1 },
    },
  });
}
var IE = { xs: _s("xs"), sm: _s("sm"), md: _s("md"), lg: _s("lg") },
  BE = ME({
    baseStyle: LE,
    sizes: IE,
    variants: te.variants,
    defaultProps: te.defaultProps,
  }),
  jg,
  jE = {
    ...((jg = te.baseStyle) == null ? void 0 : jg.field),
    textAlign: "center",
  },
  NE = {
    lg: { fontSize: "lg", w: 12, h: 12, borderRadius: "md" },
    md: { fontSize: "md", w: 10, h: 10, borderRadius: "md" },
    sm: { fontSize: "sm", w: 8, h: 8, borderRadius: "sm" },
    xs: { fontSize: "xs", w: 6, h: 6, borderRadius: "sm" },
  },
  Ng,
  Og,
  OE = {
    outline: (e) => {
      var t, n, r;
      return (r =
        (n = st((t = te.variants) == null ? void 0 : t.outline, e)) == null
          ? void 0
          : n.field) != null
        ? r
        : {};
    },
    flushed: (e) => {
      var t, n, r;
      return (r =
        (n = st((t = te.variants) == null ? void 0 : t.flushed, e)) == null
          ? void 0
          : n.field) != null
        ? r
        : {};
    },
    filled: (e) => {
      var t, n, r;
      return (r =
        (n = st((t = te.variants) == null ? void 0 : t.filled, e)) == null
          ? void 0
          : n.field) != null
        ? r
        : {};
    },
    unstyled:
      (Og = (Ng = te.variants) == null ? void 0 : Ng.unstyled.field) != null
        ? Og
        : {},
  },
  VE = {
    baseStyle: jE,
    sizes: NE,
    variants: OE,
    defaultProps: te.defaultProps,
  },
  { defineMultiStyleConfig: WE, definePartsStyle: HE } = he(cP.keys),
  Cs = je("popper-bg"),
  UE = je("popper-arrow-bg"),
  Vg = je("popper-arrow-shadow-color"),
  GE = { zIndex: 10 },
  KE = {
    [Cs.variable]: "colors.white",
    bg: Cs.reference,
    [UE.variable]: Cs.reference,
    [Vg.variable]: "colors.gray.200",
    _dark: {
      [Cs.variable]: "colors.gray.700",
      [Vg.variable]: "colors.whiteAlpha.300",
    },
    width: "xs",
    border: "1px solid",
    borderColor: "inherit",
    borderRadius: "md",
    boxShadow: "sm",
    zIndex: "inherit",
    _focusVisible: { outline: 0, boxShadow: "outline" },
  },
  YE = { px: 3, py: 2, borderBottomWidth: "1px" },
  JE = { px: 3, py: 2 },
  qE = { px: 3, py: 2, borderTopWidth: "1px" },
  XE = {
    position: "absolute",
    borderRadius: "md",
    top: 1,
    insetEnd: 2,
    padding: 2,
  },
  QE = HE({
    popper: GE,
    content: KE,
    header: YE,
    body: JE,
    footer: qE,
    closeButton: XE,
  }),
  ZE = WE({ baseStyle: QE }),
  { definePartsStyle: rf, defineMultiStyleConfig: e4 } = he(tP.keys),
  Lc = B("drawer-bg"),
  Ic = B("drawer-box-shadow");
function oi(e) {
  return rf(
    e === "full"
      ? { dialog: { maxW: "100vw", h: "100vh" } }
      : { dialog: { maxW: e } }
  );
}
var t4 = { bg: "blackAlpha.600", zIndex: "modal" },
  n4 = { display: "flex", zIndex: "modal", justifyContent: "center" },
  r4 = (e) => {
    const { isFullHeight: t } = e;
    return {
      ...(t && { height: "100vh" }),
      zIndex: "modal",
      maxH: "100vh",
      color: "inherit",
      [Lc.variable]: "colors.white",
      [Ic.variable]: "shadows.lg",
      _dark: {
        [Lc.variable]: "colors.gray.700",
        [Ic.variable]: "shadows.dark-lg",
      },
      bg: Lc.reference,
      boxShadow: Ic.reference,
    };
  },
  i4 = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  a4 = { position: "absolute", top: "2", insetEnd: "3" },
  o4 = { px: "6", py: "2", flex: "1", overflow: "auto" },
  s4 = { px: "6", py: "4" },
  l4 = rf((e) => ({
    overlay: t4,
    dialogContainer: n4,
    dialog: st(r4, e),
    header: i4,
    closeButton: a4,
    body: o4,
    footer: s4,
  })),
  u4 = {
    xs: oi("xs"),
    sm: oi("md"),
    md: oi("lg"),
    lg: oi("2xl"),
    xl: oi("4xl"),
    full: oi("full"),
  },
  c4 = e4({ baseStyle: l4, sizes: u4, defaultProps: { size: "xs" } }),
  { definePartsStyle: d4, defineMultiStyleConfig: f4 } = he(nP.keys),
  m4 = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
  },
  h4 = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  p4 = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  g4 = d4({ preview: m4, input: h4, textarea: p4 }),
  y4 = f4({ baseStyle: g4 }),
  { definePartsStyle: v4, defineMultiStyleConfig: b4 } = he(rP.keys),
  ji = B("form-control-color"),
  S4 = {
    marginStart: "1",
    [ji.variable]: "colors.red.500",
    _dark: { [ji.variable]: "colors.red.300" },
    color: ji.reference,
  },
  w4 = {
    mt: "2",
    [ji.variable]: "colors.gray.600",
    _dark: { [ji.variable]: "colors.whiteAlpha.600" },
    color: ji.reference,
    lineHeight: "normal",
    fontSize: "sm",
  },
  k4 = v4({
    container: { width: "100%", position: "relative" },
    requiredIndicator: S4,
    helperText: w4,
  }),
  x4 = b4({ baseStyle: k4 }),
  { definePartsStyle: _4, defineMultiStyleConfig: C4 } = he(iP.keys),
  Ni = B("form-error-color"),
  T4 = {
    [Ni.variable]: "colors.red.500",
    _dark: { [Ni.variable]: "colors.red.300" },
    color: Ni.reference,
    mt: "2",
    fontSize: "sm",
    lineHeight: "normal",
  },
  P4 = {
    marginEnd: "0.5em",
    [Ni.variable]: "colors.red.500",
    _dark: { [Ni.variable]: "colors.red.300" },
    color: Ni.reference,
  },
  E4 = _4({ text: T4, icon: P4 }),
  A4 = C4({ baseStyle: E4 }),
  M4 = {
    fontSize: "md",
    marginEnd: "3",
    mb: "2",
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "normal",
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  $4 = { baseStyle: M4 },
  z4 = { fontFamily: "heading", fontWeight: "bold" },
  R4 = {
    "4xl": { fontSize: ["6xl", null, "7xl"], lineHeight: 1 },
    "3xl": { fontSize: ["5xl", null, "6xl"], lineHeight: 1 },
    "2xl": { fontSize: ["4xl", null, "5xl"], lineHeight: [1.2, null, 1] },
    xl: { fontSize: ["3xl", null, "4xl"], lineHeight: [1.33, null, 1.2] },
    lg: { fontSize: ["2xl", null, "3xl"], lineHeight: [1.33, null, 1.2] },
    md: { fontSize: "xl", lineHeight: 1.2 },
    sm: { fontSize: "md", lineHeight: 1.2 },
    xs: { fontSize: "sm", lineHeight: 1.2 },
  },
  D4 = { baseStyle: z4, sizes: R4, defaultProps: { size: "xl" } },
  { defineMultiStyleConfig: F4, definePartsStyle: L4 } = he(ZT.keys),
  Bc = B("breadcrumb-link-decor"),
  I4 = {
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
  B4 = L4({ link: I4 }),
  j4 = F4({ baseStyle: B4 }),
  N4 = {
    lineHeight: "1.2",
    borderRadius: "md",
    fontWeight: "semibold",
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: { boxShadow: "outline" },
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: { _disabled: { bg: "initial" } },
  },
  ab = (e) => {
    const { colorScheme: t, theme: n } = e;
    if (t === "gray")
      return {
        color: I("gray.800", "whiteAlpha.900")(e),
        _hover: { bg: I("gray.100", "whiteAlpha.200")(e) },
        _active: { bg: I("gray.200", "whiteAlpha.300")(e) },
      };
    const r = Xi(`${t}.200`, 0.12)(n),
      i = Xi(`${t}.200`, 0.24)(n);
    return {
      color: I(`${t}.600`, `${t}.200`)(e),
      bg: "transparent",
      _hover: { bg: I(`${t}.50`, r)(e) },
      _active: { bg: I(`${t}.100`, i)(e) },
    };
  },
  O4 = (e) => {
    const { colorScheme: t } = e,
      n = I("gray.200", "whiteAlpha.300")(e);
    return {
      border: "1px solid",
      borderColor: t === "gray" ? n : "currentColor",
      ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":
        { marginEnd: "-1px" },
      ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":
        { marginBottom: "-1px" },
      ...st(ab, e),
    };
  },
  V4 = {
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
  W4 = (e) => {
    var t;
    const { colorScheme: n } = e;
    if (n === "gray") {
      const l = I("gray.100", "whiteAlpha.200")(e);
      return {
        bg: l,
        color: I("gray.800", "whiteAlpha.900")(e),
        _hover: {
          bg: I("gray.200", "whiteAlpha.300")(e),
          _disabled: { bg: l },
        },
        _active: { bg: I("gray.300", "whiteAlpha.400")(e) },
      };
    }
    const {
        bg: r = `${n}.500`,
        color: i = "white",
        hoverBg: a = `${n}.600`,
        activeBg: o = `${n}.700`,
      } = (t = V4[n]) != null ? t : {},
      s = I(r, `${n}.200`)(e);
    return {
      bg: s,
      color: I(i, "gray.800")(e),
      _hover: { bg: I(a, `${n}.300`)(e), _disabled: { bg: s } },
      _active: { bg: I(o, `${n}.400`)(e) },
    };
  },
  H4 = (e) => {
    const { colorScheme: t } = e;
    return {
      padding: 0,
      height: "auto",
      lineHeight: "normal",
      verticalAlign: "baseline",
      color: I(`${t}.500`, `${t}.200`)(e),
      _hover: {
        textDecoration: "underline",
        _disabled: { textDecoration: "none" },
      },
      _active: { color: I(`${t}.700`, `${t}.500`)(e) },
    };
  },
  U4 = {
    bg: "none",
    color: "inherit",
    display: "inline",
    lineHeight: "inherit",
    m: "0",
    p: "0",
  },
  G4 = { ghost: ab, outline: O4, solid: W4, link: H4, unstyled: U4 },
  K4 = {
    lg: { h: "12", minW: "12", fontSize: "lg", px: "6" },
    md: { h: "10", minW: "10", fontSize: "md", px: "4" },
    sm: { h: "8", minW: "8", fontSize: "sm", px: "3" },
    xs: { h: "6", minW: "6", fontSize: "xs", px: "2" },
  },
  Y4 = {
    baseStyle: N4,
    variants: G4,
    sizes: K4,
    defaultProps: { variant: "solid", size: "md", colorScheme: "gray" },
  },
  { definePartsStyle: Wr, defineMultiStyleConfig: J4 } = he(SP.keys),
  Ll = B("card-bg"),
  zn = B("card-padding"),
  ob = B("card-shadow"),
  el = B("card-radius"),
  sb = B("card-border-width", "0"),
  lb = B("card-border-color"),
  q4 = Wr({
    container: {
      [Ll.variable]: "colors.chakra-body-bg",
      backgroundColor: Ll.reference,
      boxShadow: ob.reference,
      borderRadius: el.reference,
      color: "chakra-body-text",
      borderWidth: sb.reference,
      borderColor: lb.reference,
    },
    body: { padding: zn.reference, flex: "1 1 0%" },
    header: { padding: zn.reference },
    footer: { padding: zn.reference },
  }),
  X4 = {
    sm: Wr({
      container: { [el.variable]: "radii.base", [zn.variable]: "space.3" },
    }),
    md: Wr({
      container: { [el.variable]: "radii.md", [zn.variable]: "space.5" },
    }),
    lg: Wr({
      container: { [el.variable]: "radii.xl", [zn.variable]: "space.7" },
    }),
  },
  Q4 = {
    elevated: Wr({
      container: {
        [ob.variable]: "shadows.base",
        _dark: { [Ll.variable]: "colors.gray.700" },
      },
    }),
    outline: Wr({
      container: {
        [sb.variable]: "1px",
        [lb.variable]: "colors.chakra-border-color",
      },
    }),
    filled: Wr({ container: { [Ll.variable]: "colors.chakra-subtle-bg" } }),
    unstyled: {
      body: { [zn.variable]: 0 },
      header: { [zn.variable]: 0 },
      footer: { [zn.variable]: 0 },
    },
  },
  Z4 = J4({
    baseStyle: q4,
    variants: Q4,
    sizes: X4,
    defaultProps: { variant: "elevated", size: "md" },
  }),
  Ka = je("close-button-size"),
  Sa = je("close-button-bg"),
  eA = {
    w: [Ka.reference],
    h: [Ka.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: {
      [Sa.variable]: "colors.blackAlpha.100",
      _dark: { [Sa.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [Sa.variable]: "colors.blackAlpha.200",
      _dark: { [Sa.variable]: "colors.whiteAlpha.200" },
    },
    _focusVisible: { boxShadow: "outline" },
    bg: Sa.reference,
  },
  tA = {
    lg: { [Ka.variable]: "sizes.10", fontSize: "md" },
    md: { [Ka.variable]: "sizes.8", fontSize: "xs" },
    sm: { [Ka.variable]: "sizes.6", fontSize: "2xs" },
  },
  nA = { baseStyle: eA, sizes: tA, defaultProps: { size: "md" } },
  { variants: rA, defaultProps: iA } = Ua,
  aA = {
    fontFamily: "mono",
    fontSize: "sm",
    px: "0.2em",
    borderRadius: "sm",
    bg: $e.bg.reference,
    color: $e.color.reference,
    boxShadow: $e.shadow.reference,
  },
  oA = { baseStyle: aA, variants: rA, defaultProps: iA },
  sA = { w: "100%", mx: "auto", maxW: "prose", px: "4" },
  lA = { baseStyle: sA },
  uA = { opacity: 0.6, borderColor: "inherit" },
  cA = { borderStyle: "solid" },
  dA = { borderStyle: "dashed" },
  fA = { solid: cA, dashed: dA },
  mA = { baseStyle: uA, variants: fA, defaultProps: { variant: "solid" } },
  { definePartsStyle: hA, defineMultiStyleConfig: pA } = he(qT.keys),
  gA = {
    borderTopWidth: "1px",
    borderColor: "inherit",
    _last: { borderBottomWidth: "1px" },
  },
  yA = {
    transitionProperty: "common",
    transitionDuration: "normal",
    fontSize: "md",
    _focusVisible: { boxShadow: "outline" },
    _hover: { bg: "blackAlpha.50" },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    px: "4",
    py: "2",
  },
  vA = { pt: "2", px: "4", pb: "5" },
  bA = { fontSize: "1.25em" },
  SA = hA({ container: gA, button: yA, panel: vA, icon: bA }),
  wA = pA({ baseStyle: SA }),
  { definePartsStyle: Io, defineMultiStyleConfig: kA } = he(XT.keys),
  Tt = B("alert-fg"),
  jn = B("alert-bg"),
  xA = Io({
    container: { bg: jn.reference, px: "4", py: "3" },
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
function Bm(e) {
  const { theme: t, colorScheme: n } = e,
    r = Xi(`${n}.200`, 0.16)(t);
  return { light: `colors.${n}.100`, dark: r };
}
var _A = Io((e) => {
    const { colorScheme: t } = e,
      n = Bm(e);
    return {
      container: {
        [Tt.variable]: `colors.${t}.500`,
        [jn.variable]: n.light,
        _dark: { [Tt.variable]: `colors.${t}.200`, [jn.variable]: n.dark },
      },
    };
  }),
  CA = Io((e) => {
    const { colorScheme: t } = e,
      n = Bm(e);
    return {
      container: {
        [Tt.variable]: `colors.${t}.500`,
        [jn.variable]: n.light,
        _dark: { [Tt.variable]: `colors.${t}.200`, [jn.variable]: n.dark },
        paddingStart: "3",
        borderStartWidth: "4px",
        borderStartColor: Tt.reference,
      },
    };
  }),
  TA = Io((e) => {
    const { colorScheme: t } = e,
      n = Bm(e);
    return {
      container: {
        [Tt.variable]: `colors.${t}.500`,
        [jn.variable]: n.light,
        _dark: { [Tt.variable]: `colors.${t}.200`, [jn.variable]: n.dark },
        pt: "2",
        borderTopWidth: "4px",
        borderTopColor: Tt.reference,
      },
    };
  }),
  PA = Io((e) => {
    const { colorScheme: t } = e;
    return {
      container: {
        [Tt.variable]: "colors.white",
        [jn.variable]: `colors.${t}.500`,
        _dark: {
          [Tt.variable]: "colors.gray.900",
          [jn.variable]: `colors.${t}.200`,
        },
        color: Tt.reference,
      },
    };
  }),
  EA = { subtle: _A, "left-accent": CA, "top-accent": TA, solid: PA },
  AA = kA({
    baseStyle: xA,
    variants: EA,
    defaultProps: { variant: "subtle", colorScheme: "blue" },
  }),
  { definePartsStyle: ub, defineMultiStyleConfig: MA } = he(QT.keys),
  Oi = B("avatar-border-color"),
  Ya = B("avatar-bg"),
  To = B("avatar-font-size"),
  Qi = B("avatar-size"),
  $A = {
    borderRadius: "full",
    border: "0.2em solid",
    borderColor: Oi.reference,
    [Oi.variable]: "white",
    _dark: { [Oi.variable]: "colors.gray.800" },
  },
  zA = {
    bg: Ya.reference,
    fontSize: To.reference,
    width: Qi.reference,
    height: Qi.reference,
    lineHeight: "1",
    [Ya.variable]: "colors.gray.200",
    _dark: { [Ya.variable]: "colors.whiteAlpha.400" },
  },
  RA = (e) => {
    const { name: t, theme: n } = e,
      r = t ? NP({ string: t }) : "colors.gray.400",
      i = BP(r)(n);
    let a = "white";
    return (
      i || (a = "gray.800"),
      {
        bg: Ya.reference,
        fontSize: To.reference,
        color: a,
        borderColor: Oi.reference,
        verticalAlign: "top",
        width: Qi.reference,
        height: Qi.reference,
        "&:not([data-loaded])": { [Ya.variable]: r },
        [Oi.variable]: "colors.white",
        _dark: { [Oi.variable]: "colors.gray.800" },
      }
    );
  },
  DA = { fontSize: To.reference, lineHeight: "1" },
  FA = ub((e) => ({
    badge: st($A, e),
    excessLabel: st(zA, e),
    container: st(RA, e),
    label: DA,
  }));
function Yn(e) {
  const t = e !== "100%" ? Z1[e] : void 0;
  return ub({
    container: {
      [Qi.variable]: t ?? e,
      [To.variable]: `calc(${t ?? e} / 2.5)`,
    },
    excessLabel: {
      [Qi.variable]: t ?? e,
      [To.variable]: `calc(${t ?? e} / 2.5)`,
    },
  });
}
var LA = {
    "2xs": Yn(4),
    xs: Yn(6),
    sm: Yn(8),
    md: Yn(12),
    lg: Yn(16),
    xl: Yn(24),
    "2xl": Yn(32),
    full: Yn("100%"),
  },
  IA = MA({ baseStyle: FA, sizes: LA, defaultProps: { size: "md" } }),
  BA = {
    Accordion: wA,
    Alert: AA,
    Avatar: IA,
    Badge: Ua,
    Breadcrumb: j4,
    Button: Y4,
    Checkbox: Fl,
    CloseButton: nA,
    Code: oA,
    Container: lA,
    Divider: mA,
    Drawer: c4,
    Editable: y4,
    Form: x4,
    FormError: A4,
    FormLabel: $4,
    Heading: D4,
    Input: te,
    Kbd: eE,
    Link: nE,
    List: sE,
    Menu: vE,
    Modal: AE,
    NumberInput: BE,
    PinInput: VE,
    Popover: ZE,
    Progress: o3,
    Radio: b3,
    Select: T3,
    Skeleton: E3,
    SkipLink: M3,
    Slider: O3,
    Spinner: H3,
    Stat: Q3,
    Switch: n5,
    Table: u5,
    Tabs: _5,
    Tag: I5,
    Textarea: J5,
    Tooltip: Q5,
    Card: Z4,
    Stepper: JT,
  },
  jA = {
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
  NA = {
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
  OA = "ltr",
  VA = {
    useSystemColorMode: !1,
    initialColorMode: "light",
    cssVarPrefix: "chakra",
  },
  cb = {
    semanticTokens: jA,
    direction: OA,
    ...GT,
    components: BA,
    styles: NA,
    config: VA,
  };
function za(e) {
  return typeof e == "function";
}
function WA(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
var HA = (e) =>
    function (...n) {
      let r = [...n],
        i = n[n.length - 1];
      return (
        kT(i) && r.length > 1 ? (r = r.slice(0, r.length - 1)) : (i = e),
        WA(...r.map((a) => (o) => za(a) ? a(o) : GA(o, a)))(i)
      );
    },
  UA = HA(cb);
function GA(...e) {
  return Ot({}, ...e, db);
}
function db(e, t, n, r) {
  if ((za(e) || za(t)) && Object.prototype.hasOwnProperty.call(r, n))
    return (...i) => {
      const a = za(e) ? e(...i) : e,
        o = za(t) ? t(...i) : t;
      return Ot({}, a, o, db);
    };
}
function KA(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      t.includes(r) || (n[r] = e[r]);
    }),
    n
  );
}
function YA(e, t, n, r) {
  const i = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < i.length && e; r += 1) e = e[i[r]];
  return e === void 0 ? n : e;
}
var JA = (e) => {
    const t = new WeakMap();
    return (r, i, a, o) => {
      if (typeof r > "u") return e(r, i, a);
      t.has(r) || t.set(r, new Map());
      const s = t.get(r);
      if (s.has(i)) return s.get(i);
      const l = e(r, i, a, o);
      return s.set(i, l), l;
    };
  },
  fb = JA(YA);
function mb(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      const i = e[r];
      t(i, r, e) && (n[r] = i);
    }),
    n
  );
}
var hb = (e) => mb(e, (t) => t != null);
function qA(e) {
  return typeof e == "function";
}
function pb(e, ...t) {
  return qA(e) ? e(...t) : e;
}
var XA = typeof Element < "u",
  QA = typeof Map == "function",
  ZA = typeof Set == "function",
  eM = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function tl(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, i;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!tl(e[r], t[r])) return !1;
      return !0;
    }
    var a;
    if (QA && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!tl(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (ZA && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (a = e.entries(); !(r = a.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (eM && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
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
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[r])) return !1;
    if (XA && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") &&
          e.$$typeof
        ) &&
        !tl(e[i[r]], t[i[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var tM = function (t, n) {
  try {
    return tl(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const nM = _f(tM);
function gb(e, t = {}) {
  var n;
  const { styleConfig: r, ...i } = t,
    { theme: a, colorMode: o } = tC(),
    s = e ? fb(a, `components.${e}`) : void 0,
    l = r || s,
    u = Ot(
      { theme: a, colorMode: o },
      (n = l?.defaultProps) != null ? n : {},
      hb(KA(i, ["children"]))
    ),
    c = k.useRef({});
  if (l) {
    const f = ST(l)(u);
    nM(c.current, f) || (c.current = f);
  }
  return c.current;
}
function Qr(e, t = {}) {
  return gb(e, t);
}
function Bo(e, t = {}) {
  return gb(e, t);
}
var rM = new Set([
    ...lT,
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
  iM = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
function aM(e) {
  return iM.has(e) || !rM.has(e);
}
function oM(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const i in r)
        Object.prototype.hasOwnProperty.call(r, i) &&
          (i in n && delete n[i], (n[i] = r[i]));
  return n;
}
function yb(e) {
  const t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
var sM =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  lM = P1(function (e) {
    return (
      sM.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  uM = lM,
  cM = function (t) {
    return t !== "theme";
  },
  Wg = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? uM : cM;
  },
  Hg = function (t, n, r) {
    var i;
    if (n) {
      var a = n.shouldForwardProp;
      i =
        t.__emotion_forwardProp && a
          ? function (o) {
              return t.__emotion_forwardProp(o) && a(o);
            }
          : a;
    }
    return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
  },
  dM = function (t) {
    var n = t.cache,
      r = t.serialized,
      i = t.isStringTag;
    return (
      R1(n, r, i),
      $_(function () {
        return D1(n, r, i);
      }),
      null
    );
  },
  fM = function e(t, n) {
    var r = t.__emotion_real === t,
      i = (r && t.__emotion_base) || t,
      a,
      o;
    n !== void 0 && ((a = n.label), (o = n.target));
    var s = Hg(t, n, r),
      l = s || Wg(i),
      u = !l("as");
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (a !== void 0 && d.push("label:" + a + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, h = 1; h < f; h++) d.push(c[h], c[0][h]);
      }
      var y = B1(function (b, _, g) {
        var m = (u && b.as) || i,
          p = "",
          x = [],
          P = b;
        if (b.theme == null) {
          P = {};
          for (var M in b) P[M] = b[M];
          P.theme = k.useContext(ko);
        }
        typeof b.className == "string"
          ? (p = __(_.registered, x, b.className))
          : b.className != null && (p = b.className + " ");
        var T = Pm(d.concat(x), _.registered, P);
        (p += _.key + "-" + T.name), o !== void 0 && (p += " " + o);
        var A = u && s === void 0 ? Wg(m) : l,
          F = {};
        for (var L in b) (u && L === "as") || (A(L) && (F[L] = b[L]));
        return (
          (F.className = p),
          (F.ref = g),
          k.createElement(
            k.Fragment,
            null,
            k.createElement(dM, {
              cache: _,
              serialized: T,
              isStringTag: typeof m == "string",
            }),
            k.createElement(m, F)
          )
        );
      });
      return (
        (y.displayName =
          a !== void 0
            ? a
            : "Styled(" +
              (typeof i == "string"
                ? i
                : i.displayName || i.name || "Component") +
              ")"),
        (y.defaultProps = t.defaultProps),
        (y.__emotion_real = y),
        (y.__emotion_base = i),
        (y.__emotion_styles = d),
        (y.__emotion_forwardProp = s),
        Object.defineProperty(y, "toString", {
          value: function () {
            return "." + o;
          },
        }),
        (y.withComponent = function (b, _) {
          return e(b, $l({}, n, _, { shouldForwardProp: Hg(y, _, !0) })).apply(
            void 0,
            d
          );
        }),
        y
      );
    };
  },
  mM = [
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
  Il = fM.bind();
mM.forEach(function (e) {
  Il[e] = Il(e);
});
var Ug,
  hM = (Ug = Il.default) != null ? Ug : Il,
  pM =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: n, css: r, __css: i, sx: a, ...o } = t,
        s = mb(o, (d, f) => cT(f)),
        l = pb(e, t),
        u = oM({}, i, l, hb(s), a),
        c = q1(u)(t.theme);
      return r ? [c, r] : c;
    };
function jc(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = aM);
  const i = pM({ baseStyle: n }),
    a = hM(e, r)(i);
  return Vi.forwardRef(function (l, u) {
    const { colorMode: c, forced: d } = xu();
    return Vi.createElement(a, { ref: u, "data-theme": d ? c : void 0, ...l });
  });
}
function gM() {
  const e = new Map();
  return new Proxy(jc, {
    apply(t, n, r) {
      return jc(...r);
    },
    get(t, n) {
      return e.has(n) || e.set(n, jc(n)), e.get(n);
    },
  });
}
var Y = gM();
function ce(e) {
  return k.forwardRef(e);
}
function vb(e = {}) {
  const {
      strict: t = !0,
      errorMessage:
        n = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
      name: r,
    } = e,
    i = k.createContext(void 0);
  i.displayName = r;
  function a() {
    var o;
    const s = k.useContext(i);
    if (!s && t) {
      const l = new Error(n);
      throw (
        ((l.name = "ContextError"),
        (o = Error.captureStackTrace) == null || o.call(Error, l, a),
        l)
      );
    }
    return s;
  }
  return [i.Provider, a, i];
}
function yM(e) {
  const { cssVarsRoot: t, theme: n, children: r } = e,
    i = k.useMemo(() => sT(n), [n]);
  return Ve(D_, { theme: i, children: [E(vM, { root: t }), r] });
}
function vM({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return E(wu, { styles: (n) => ({ [t]: n.__cssVars }) });
}
vb({
  name: "StylesContext",
  errorMessage:
    "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ",
});
function bM(e) {
  return vb({
    name: `${e}StylesContext`,
    errorMessage: `useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${e} />" `,
  });
}
function SM() {
  const { colorMode: e } = xu();
  return E(wu, {
    styles: (t) => {
      const n = fb(t, "styles.global"),
        r = pb(n, { theme: t, colorMode: e });
      return r ? q1(r)(t) : void 0;
    },
  });
}
var jm = k.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  },
});
jm.displayName = "EnvironmentContext";
function wM({ defer: e } = {}) {
  const [, t] = k.useReducer((n) => n + 1, 0);
  return (
    $n(() => {
      e && t();
    }, [e]),
    k.useContext(jm)
  );
}
function bb(e) {
  const { children: t, environment: n, disabled: r } = e,
    i = k.useRef(null),
    a = k.useMemo(
      () =>
        n || {
          getDocument: () => {
            var s, l;
            return (l = (s = i.current) == null ? void 0 : s.ownerDocument) !=
              null
              ? l
              : document;
          },
          getWindow: () => {
            var s, l;
            return (l =
              (s = i.current) == null ? void 0 : s.ownerDocument.defaultView) !=
              null
              ? l
              : window;
          },
        },
      [n]
    ),
    o = !r || !n;
  return Ve(jm.Provider, {
    value: a,
    children: [t, o && E("span", { id: "__chakra_env", hidden: !0, ref: i })],
  });
}
bb.displayName = "EnvironmentProvider";
var kM = (e) => {
    const {
        children: t,
        colorModeManager: n,
        portalZIndex: r,
        resetScope: i,
        resetCSS: a = !0,
        theme: o = {},
        environment: s,
        cssVarsRoot: l,
        disableEnvironment: u,
        disableGlobalStyle: c,
      } = e,
      d = E(bb, { environment: s, disabled: u, children: t });
    return E(yM, {
      theme: o,
      cssVarsRoot: l,
      children: Ve(W1, {
        colorModeManager: n,
        options: o.config,
        children: [
          a ? E(B_, { scope: i }) : E(I_, {}),
          !c && E(SM, {}),
          r ? E(O1, { zIndex: r, children: d }) : d,
        ],
      }),
    });
  },
  xM = (e, t) => e.find((n) => n.id === t);
function Gg(e, t) {
  const n = Sb(e, t),
    r = n ? e[n].findIndex((i) => i.id === t) : -1;
  return { position: n, index: r };
}
function Sb(e, t) {
  for (const [n, r] of Object.entries(e)) if (xM(r, t)) return n;
}
function _M(e) {
  const t = e.includes("right"),
    n = e.includes("left");
  let r = "center";
  return (
    t && (r = "flex-end"),
    n && (r = "flex-start"),
    { display: "flex", flexDirection: "column", alignItems: r }
  );
}
function CM(e) {
  const n = e === "top" || e === "bottom" ? "0 auto" : void 0,
    r = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0,
    i = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0,
    a = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)",
    o = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: n,
    top: r,
    bottom: i,
    right: a,
    left: o,
  };
}
function nl(e, t = []) {
  const n = k.useRef(e);
  return (
    k.useEffect(() => {
      n.current = e;
    }),
    k.useCallback((...r) => {
      var i;
      return (i = n.current) == null ? void 0 : i.call(n, ...r);
    }, t)
  );
}
function TM(e, t) {
  const n = nl(e);
  k.useEffect(() => {
    if (t == null) return;
    let r = null;
    return (
      (r = window.setTimeout(() => {
        n();
      }, t)),
      () => {
        r && window.clearTimeout(r);
      }
    );
  }, [t, n]);
}
function af(e, t) {
  const n = k.useRef(!1),
    r = k.useRef(!1);
  k.useEffect(() => {
    if (n.current && r.current) return e();
    r.current = !0;
  }, t),
    k.useEffect(
      () => (
        (n.current = !0),
        () => {
          n.current = !1;
        }
      ),
      []
    );
}
const wb = k.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Eu = k.createContext({}),
  jo = k.createContext(null),
  Au = typeof document < "u",
  Nm = Au ? k.useLayoutEffect : k.useEffect,
  kb = k.createContext({ strict: !1 });
function PM(e, t, n, r) {
  const { visualElement: i } = k.useContext(Eu),
    a = k.useContext(kb),
    o = k.useContext(jo),
    s = k.useContext(wb).reducedMotion,
    l = k.useRef();
  (r = r || a.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: s,
      }));
  const u = l.current;
  k.useInsertionEffect(() => {
    u && u.update(n, o);
  });
  const c = k.useRef(!!window.HandoffAppearAnimations);
  return (
    Nm(() => {
      u &&
        (u.render(),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    k.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        (window.HandoffAppearAnimations = void 0),
        (c.current = !1));
    }),
    u
  );
}
function Pi(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function EM(e, t, n) {
  return k.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Pi(n) && (n.current = r));
    },
    [t]
  );
}
function Po(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Mu(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Om = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Vm = ["initial", ...Om];
function $u(e) {
  return Mu(e.animate) || Vm.some((t) => Po(e[t]));
}
function xb(e) {
  return !!($u(e) || e.variants);
}
function AM(e, t) {
  if ($u(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Po(n) ? n : void 0,
      animate: Po(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function MM(e) {
  const { initial: t, animate: n } = AM(e, k.useContext(Eu));
  return k.useMemo(() => ({ initial: t, animate: n }), [Kg(t), Kg(n)]);
}
function Kg(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Yg = {
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
  Eo = {};
for (const e in Yg) Eo[e] = { isEnabled: (t) => Yg[e].some((n) => !!t[n]) };
function $M(e) {
  for (const t in e) Eo[t] = { ...Eo[t], ...e[t] };
}
const Wm = k.createContext({}),
  _b = k.createContext({}),
  zM = Symbol.for("motionComponentSymbol");
function RM({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && $M(e);
  function a(s, l) {
    let u;
    const c = { ...k.useContext(wb), ...s, layoutId: DM(s) },
      { isStatic: d } = c,
      f = MM(s),
      h = r(s, d);
    if (!d && Au) {
      f.visualElement = PM(i, h, c, t);
      const y = k.useContext(_b),
        b = k.useContext(kb).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, b, e, y));
    }
    return k.createElement(
      Eu.Provider,
      { value: f },
      u && f.visualElement
        ? k.createElement(u, { visualElement: f.visualElement, ...c })
        : null,
      n(i, s, EM(h, f.visualElement, l), h, d, f.visualElement)
    );
  }
  const o = k.forwardRef(a);
  return (o[zM] = i), o;
}
function DM({ layoutId: e }) {
  const t = k.useContext(Wm).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function FM(e) {
  function t(r, i = {}) {
    return RM(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const LM = [
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
function Hm(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(LM.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const Bl = {};
function IM(e) {
  Object.assign(Bl, e);
}
const No = [
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
  Zr = new Set(No);
function Cb(e, { layout: t, layoutId: n }) {
  return (
    Zr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Bl[e] || e === "opacity"))
  );
}
const vt = (e) => !!(e && e.getVelocity),
  BM = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  jM = No.length;
function NM(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let a = "";
  for (let o = 0; o < jM; o++) {
    const s = No[o];
    if (e[s] !== void 0) {
      const l = BM[s] || s;
      a += `${l}(${e[s]}) `;
    }
  }
  return (
    t && !e.z && (a += "translateZ(0)"),
    (a = a.trim()),
    i ? (a = i(e, r ? "" : a)) : n && r && (a = "none"),
    a
  );
}
const Tb = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Pb = Tb("--"),
  of = Tb("var(--"),
  OM =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  VM = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  yr = (e, t, n) => Math.min(Math.max(n, e), t),
  ei = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Ja = { ...ei, transform: (e) => yr(0, 1, e) },
  Ts = { ...ei, default: 1 },
  qa = (e) => Math.round(e * 1e5) / 1e5,
  zu = /(-)?([\d]*\.?[\d])+/g,
  Eb =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  WM =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Oo(e) {
  return typeof e == "string";
}
const Vo = (e) => ({
    test: (t) => Oo(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Jn = Vo("deg"),
  vn = Vo("%"),
  O = Vo("px"),
  HM = Vo("vh"),
  UM = Vo("vw"),
  Jg = {
    ...vn,
    parse: (e) => vn.parse(e) / 100,
    transform: (e) => vn.transform(e * 100),
  },
  qg = { ...ei, transform: Math.round },
  Ab = {
    borderWidth: O,
    borderTopWidth: O,
    borderRightWidth: O,
    borderBottomWidth: O,
    borderLeftWidth: O,
    borderRadius: O,
    radius: O,
    borderTopLeftRadius: O,
    borderTopRightRadius: O,
    borderBottomRightRadius: O,
    borderBottomLeftRadius: O,
    width: O,
    maxWidth: O,
    height: O,
    maxHeight: O,
    size: O,
    top: O,
    right: O,
    bottom: O,
    left: O,
    padding: O,
    paddingTop: O,
    paddingRight: O,
    paddingBottom: O,
    paddingLeft: O,
    margin: O,
    marginTop: O,
    marginRight: O,
    marginBottom: O,
    marginLeft: O,
    rotate: Jn,
    rotateX: Jn,
    rotateY: Jn,
    rotateZ: Jn,
    scale: Ts,
    scaleX: Ts,
    scaleY: Ts,
    scaleZ: Ts,
    skew: Jn,
    skewX: Jn,
    skewY: Jn,
    distance: O,
    translateX: O,
    translateY: O,
    translateZ: O,
    x: O,
    y: O,
    z: O,
    perspective: O,
    transformPerspective: O,
    opacity: Ja,
    originX: Jg,
    originY: Jg,
    originZ: O,
    zIndex: qg,
    fillOpacity: Ja,
    strokeOpacity: Ja,
    numOctaves: qg,
  };
function Um(e, t, n, r) {
  const { style: i, vars: a, transform: o, transformOrigin: s } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (Pb(d)) {
      a[d] = f;
      continue;
    }
    const h = Ab[d],
      y = VM(f, h);
    if (Zr.has(d)) {
      if (((l = !0), (o[d] = y), !c)) continue;
      f !== (h.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (s[d] = y)) : (i[d] = y);
  }
  if (
    (t.transform ||
      (l || r
        ? (i.transform = NM(e.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: f = "50%", originZ: h = 0 } = s;
    i.transformOrigin = `${d} ${f} ${h}`;
  }
}
const Gm = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Mb(e, t, n) {
  for (const r in t) !vt(t[r]) && !Cb(r, n) && (e[r] = t[r]);
}
function GM({ transformTemplate: e }, t, n) {
  return k.useMemo(() => {
    const r = Gm();
    return (
      Um(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function KM(e, t, n) {
  const r = e.style || {},
    i = {};
  return (
    Mb(i, r, e),
    Object.assign(i, GM(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
  );
}
function YM(e, t, n) {
  const r = {},
    i = KM(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const JM = new Set([
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
function jl(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    JM.has(e)
  );
}
let $b = (e) => !jl(e);
function qM(e) {
  e && ($b = (t) => (t.startsWith("on") ? !jl(t) : e(t)));
}
try {
  qM(require("@emotion/is-prop-valid").default);
} catch {}
function XM(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      (($b(i) ||
        (n === !0 && jl(i)) ||
        (!t && !jl(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Xg(e, t, n) {
  return typeof e == "string" ? e : O.transform(t + n * e);
}
function QM(e, t, n) {
  const r = Xg(t, e.x, e.width),
    i = Xg(n, e.y, e.height);
  return `${r} ${i}`;
}
const ZM = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  e$ = { offset: "strokeDashoffset", array: "strokeDasharray" };
function t$(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const a = i ? ZM : e$;
  e[a.offset] = O.transform(-r);
  const o = O.transform(t),
    s = O.transform(n);
  e[a.array] = `${o} ${s}`;
}
function Km(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: a,
    pathLength: o,
    pathSpacing: s = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
  f
) {
  if ((Um(e, u, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: h, style: y, dimensions: b } = e;
  h.transform && (b && (y.transform = h.transform), delete h.transform),
    b &&
      (i !== void 0 || a !== void 0 || y.transform) &&
      (y.transformOrigin = QM(
        b,
        i !== void 0 ? i : 0.5,
        a !== void 0 ? a : 0.5
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    o !== void 0 && t$(h, o, s, l, !1);
}
const zb = () => ({ ...Gm(), attrs: {} }),
  Ym = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function n$(e, t, n, r) {
  const i = k.useMemo(() => {
    const a = zb();
    return (
      Km(a, t, { enableHardwareAcceleration: !1 }, Ym(r), e.transformTemplate),
      { ...a.attrs, style: { ...a.style } }
    );
  }, [t]);
  if (e.style) {
    const a = {};
    Mb(a, e.style, e), (i.style = { ...a, ...i.style });
  }
  return i;
}
function r$(e = !1) {
  return (n, r, i, { latestValues: a }, o) => {
    const l = (Hm(n) ? n$ : YM)(r, a, o, n),
      c = { ...XM(r, typeof n == "string", e), ...l, ref: i },
      { children: d } = r,
      f = k.useMemo(() => (vt(d) ? d.get() : d), [d]);
    return k.createElement(n, { ...c, children: f });
  };
}
const Jm = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Rb(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const a in n) e.style.setProperty(a, n[a]);
}
const Db = new Set([
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
function Fb(e, t, n, r) {
  Rb(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Db.has(i) ? i : Jm(i), t.attrs[i]);
}
function qm(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    (vt(n[i]) || (t.style && vt(t.style[i])) || Cb(i, e)) && (r[i] = n[i]);
  return r;
}
function Lb(e, t) {
  const n = qm(e, t);
  for (const r in e)
    if (vt(e[r]) || vt(t[r])) {
      const i =
        No.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
function Xm(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function Ib(e) {
  const t = k.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Nl = (e) => Array.isArray(e),
  i$ = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  a$ = (e) => (Nl(e) ? e[e.length - 1] || 0 : e);
function rl(e) {
  const t = vt(e) ? e.get() : e;
  return i$(t) ? t.toValue() : t;
}
function o$(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  a
) {
  const o = { latestValues: s$(r, i, a, e), renderState: t() };
  return n && (o.mount = (s) => n(r, s, o)), o;
}
const Bb = (e) => (t, n) => {
  const r = k.useContext(Eu),
    i = k.useContext(jo),
    a = () => o$(e, t, r, i);
  return n ? a() : Ib(a);
};
function s$(e, t, n, r) {
  const i = {},
    a = r(e, {});
  for (const f in a) i[f] = rl(a[f]);
  let { initial: o, animate: s } = e;
  const l = $u(e),
    u = xb(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const d = c ? s : o;
  return (
    d &&
      typeof d != "boolean" &&
      !Mu(d) &&
      (Array.isArray(d) ? d : [d]).forEach((h) => {
        const y = Xm(e, h);
        if (!y) return;
        const { transitionEnd: b, transition: _, ...g } = y;
        for (const m in g) {
          let p = g[m];
          if (Array.isArray(p)) {
            const x = c ? p.length - 1 : 0;
            p = p[x];
          }
          p !== null && (i[m] = p);
        }
        for (const m in b) i[m] = b[m];
      }),
    i
  );
}
const Ee = (e) => e;
class Qg {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function l$(e) {
  let t = new Qg(),
    n = new Qg(),
    r = 0,
    i = !1,
    a = !1;
  const o = new WeakSet(),
    s = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && i,
          f = d ? t : n;
        return u && o.add(l), f.add(l) && d && i && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), o.delete(l);
      },
      process: (l) => {
        if (i) {
          a = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            c(l), o.has(c) && (s.schedule(c), e());
          }
        (i = !1), a && ((a = !1), s.process(l));
      },
    };
  return s;
}
const Ps = ["prepare", "read", "update", "preRender", "render", "postRender"],
  u$ = 40;
function c$(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = Ps.reduce((d, f) => ((d[f] = l$(() => (n = !0))), d), {}),
    o = (d) => a[d].process(i),
    s = () => {
      const d = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(d - i.timestamp, u$), 1)),
        (i.timestamp = d),
        (i.isProcessing = !0),
        Ps.forEach(o),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(s));
    },
    l = () => {
      (n = !0), (r = !0), i.isProcessing || e(s);
    };
  return {
    schedule: Ps.reduce((d, f) => {
      const h = a[f];
      return (d[f] = (y, b = !1, _ = !1) => (n || l(), h.schedule(y, b, _))), d;
    }, {}),
    cancel: (d) => Ps.forEach((f) => a[f].cancel(d)),
    state: i,
    steps: a,
  };
}
const {
    schedule: me,
    cancel: Nn,
    state: Ne,
    steps: Nc,
  } = c$(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ee, !0),
  d$ = {
    useVisualState: Bb({
      scrapeMotionValuesFromProps: Lb,
      createRenderState: zb,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        me.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          me.render(() => {
            Km(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Ym(t.tagName),
              e.transformTemplate
            ),
              Fb(t, n);
          });
      },
    }),
  },
  f$ = {
    useVisualState: Bb({
      scrapeMotionValuesFromProps: qm,
      createRenderState: Gm,
    }),
  };
function m$(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Hm(e) ? d$ : f$),
    preloadedFeatures: n,
    useRender: r$(t),
    createVisualElement: r,
    Component: e,
  };
}
function An(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const jb = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Ru(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const h$ = (e) => (t) => jb(t) && e(t, Ru(t));
function Rn(e, t, n, r) {
  return An(e, t, h$(n), r);
}
const p$ = (e, t) => (n) => t(e(n)),
  mr = (...e) => e.reduce(p$);
function Nb(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Zg = Nb("dragHorizontal"),
  ey = Nb("dragVertical");
function Ob(e) {
  let t = !1;
  if (e === "y") t = ey();
  else if (e === "x") t = Zg();
  else {
    const n = Zg(),
      r = ey();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Vb() {
  const e = Ob(!0);
  return e ? (e(), !1) : !0;
}
class kr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function ty(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (a, o) => {
      if (a.type === "touch" || Vb()) return;
      const s = e.getProps();
      e.animationState &&
        s.whileHover &&
        e.animationState.setActive("whileHover", t),
        s[r] && me.update(() => s[r](a, o));
    };
  return Rn(e.current, n, i, { passive: !e.getProps()[r] });
}
class g$ extends kr {
  mount() {
    this.unmount = mr(ty(this.node, !0), ty(this.node, !1));
  }
  unmount() {}
}
class y$ extends kr {
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
    this.unmount = mr(
      An(this.node.current, "focus", () => this.onFocus()),
      An(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Wb = (e, t) => (t ? (e === t ? !0 : Wb(e, t.parentElement)) : !1);
function Oc(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Ru(n));
}
class v$ extends kr {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Ee),
      (this.removeEndListeners = Ee),
      (this.removeAccessibleListeners = Ee),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          a = Rn(
            window,
            "pointerup",
            (s, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              me.update(() => {
                Wb(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          o = Rn(window, "pointercancel", (s, l) => this.cancelPress(s, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = mr(a, o)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (a) => {
            if (a.key !== "Enter" || this.isPressing) return;
            const o = (s) => {
              s.key !== "Enter" ||
                !this.checkPressEnd() ||
                Oc("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && me.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = An(this.node.current, "keyup", o)),
              Oc("down", (s, l) => {
                this.startPress(s, l);
              });
          },
          n = An(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Oc("cancel", (a, o) => this.cancelPress(a, o));
          },
          i = An(this.node.current, "blur", r);
        this.removeAccessibleListeners = mr(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && me.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Vb()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && me.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Rn(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = An(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = mr(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const sf = new WeakMap(),
  Vc = new WeakMap(),
  b$ = (e) => {
    const t = sf.get(e.target);
    t && t(e);
  },
  S$ = (e) => {
    e.forEach(b$);
  };
function w$({ root: e, ...t }) {
  const n = e || document;
  Vc.has(n) || Vc.set(n, {});
  const r = Vc.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(S$, { root: e, ...t })), r[i];
}
function k$(e, t, n) {
  const r = w$(t);
  return (
    sf.set(e, n),
    r.observe(e),
    () => {
      sf.delete(e), r.unobserve(e);
    }
  );
}
const x$ = { some: 0, all: 1 };
class _$ extends kr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: a } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : x$[i],
      },
      s = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), a && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return k$(this.node.current, o, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(C$(t, n)) && this.startObserver();
  }
  unmount() {}
}
function C$({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const T$ = {
  inView: { Feature: _$ },
  tap: { Feature: v$ },
  focus: { Feature: y$ },
  hover: { Feature: g$ },
};
function Hb(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function P$(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function E$(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Du(e, t, n) {
  const r = e.getProps();
  return Xm(r, t, n !== void 0 ? n : r.custom, P$(e), E$(e));
}
const A$ = "framerAppearId",
  M$ = "data-" + Jm(A$);
let $$ = Ee,
  Qm = Ee;
const hr = (e) => e * 1e3,
  Dn = (e) => e / 1e3,
  z$ = { current: !1 },
  Ub = (e) => Array.isArray(e) && typeof e[0] == "number";
function Gb(e) {
  return !!(
    !e ||
    (typeof e == "string" && Kb[e]) ||
    Ub(e) ||
    (Array.isArray(e) && e.every(Gb))
  );
}
const Ra = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Kb = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ra([0, 0.65, 0.55, 1]),
    circOut: Ra([0.55, 0, 1, 0.45]),
    backIn: Ra([0.31, 0.01, 0.66, -0.59]),
    backOut: Ra([0.33, 1.53, 0.69, 0.99]),
  };
function Yb(e) {
  if (e) return Ub(e) ? Ra(e) : Array.isArray(e) ? e.map(Yb) : Kb[e];
}
function R$(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: a = 0,
    repeatType: o = "loop",
    ease: s,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = Yb(s);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: a + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
function D$(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const Jb = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  F$ = 1e-7,
  L$ = 12;
function I$(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do (o = t + (n - t) / 2), (a = Jb(o, r, i) - e), a > 0 ? (n = o) : (t = o);
  while (Math.abs(a) > F$ && ++s < L$);
  return o;
}
function Wo(e, t, n, r) {
  if (e === t && n === r) return Ee;
  const i = (a) => I$(a, 0, 1, e, n);
  return (a) => (a === 0 || a === 1 ? a : Jb(i(a), t, r));
}
const B$ = Wo(0.42, 0, 1, 1),
  j$ = Wo(0, 0, 0.58, 1),
  qb = Wo(0.42, 0, 0.58, 1),
  N$ = (e) => Array.isArray(e) && typeof e[0] != "number",
  Xb = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Qb = (e) => (t) => 1 - e(1 - t),
  Zb = (e) => 1 - Math.sin(Math.acos(e)),
  Zm = Qb(Zb),
  O$ = Xb(Zm),
  eS = Wo(0.33, 1.53, 0.69, 0.99),
  eh = Qb(eS),
  V$ = Xb(eh),
  W$ = (e) =>
    (e *= 2) < 1 ? 0.5 * eh(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  H$ = {
    linear: Ee,
    easeIn: B$,
    easeInOut: qb,
    easeOut: j$,
    circIn: Zb,
    circInOut: O$,
    circOut: Zm,
    backIn: eh,
    backInOut: V$,
    backOut: eS,
    anticipate: W$,
  },
  ny = (e) => {
    if (Array.isArray(e)) {
      Qm(e.length === 4);
      const [t, n, r, i] = e;
      return Wo(t, n, r, i);
    } else if (typeof e == "string") return H$[e];
    return e;
  },
  th = (e, t) => (n) =>
    !!(
      (Oo(n) && WM.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  tS = (e, t, n) => (r) => {
    if (!Oo(r)) return r;
    const [i, a, o, s] = r.match(zu);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    };
  },
  U$ = (e) => yr(0, 255, e),
  Wc = { ...ei, transform: (e) => Math.round(U$(e)) },
  Br = {
    test: th("rgb", "red"),
    parse: tS("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Wc.transform(e) +
      ", " +
      Wc.transform(t) +
      ", " +
      Wc.transform(n) +
      ", " +
      qa(Ja.transform(r)) +
      ")",
  };
function G$(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const lf = { test: th("#"), parse: G$, transform: Br.transform },
  Ei = {
    test: th("hsl", "hue"),
    parse: tS("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      vn.transform(qa(t)) +
      ", " +
      vn.transform(qa(n)) +
      ", " +
      qa(Ja.transform(r)) +
      ")",
  },
  rt = {
    test: (e) => Br.test(e) || lf.test(e) || Ei.test(e),
    parse: (e) =>
      Br.test(e) ? Br.parse(e) : Ei.test(e) ? Ei.parse(e) : lf.parse(e),
    transform: (e) =>
      Oo(e) ? e : e.hasOwnProperty("red") ? Br.transform(e) : Ei.transform(e),
  },
  xe = (e, t, n) => -n * e + n * t + e;
function Hc(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function K$({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - s;
    (i = Hc(l, s, e + 1 / 3)), (a = Hc(l, s, e)), (o = Hc(l, s, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
const Uc = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  Y$ = [lf, Br, Ei],
  J$ = (e) => Y$.find((t) => t.test(e));
function ry(e) {
  const t = J$(e);
  let n = t.parse(e);
  return t === Ei && (n = K$(n)), n;
}
const nS = (e, t) => {
  const n = ry(e),
    r = ry(t),
    i = { ...n };
  return (a) => (
    (i.red = Uc(n.red, r.red, a)),
    (i.green = Uc(n.green, r.green, a)),
    (i.blue = Uc(n.blue, r.blue, a)),
    (i.alpha = xe(n.alpha, r.alpha, a)),
    Br.transform(i)
  );
};
function q$(e) {
  var t, n;
  return (
    isNaN(e) &&
    Oo(e) &&
    (((t = e.match(zu)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Eb)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const rS = { regex: OM, countKey: "Vars", token: "${v}", parse: Ee },
  iS = { regex: Eb, countKey: "Colors", token: "${c}", parse: rt.parse },
  aS = { regex: zu, countKey: "Numbers", token: "${n}", parse: ei.parse };
function Gc(e, { regex: t, countKey: n, token: r, parse: i }) {
  const a = e.tokenised.match(t);
  a &&
    ((e["num" + n] = a.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...a.map(i)));
}
function Ol(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && Gc(n, rS), Gc(n, iS), Gc(n, aS), n;
}
function oS(e) {
  return Ol(e).values;
}
function sS(e) {
  const { values: t, numColors: n, numVars: r, tokenised: i } = Ol(e),
    a = t.length;
  return (o) => {
    let s = i;
    for (let l = 0; l < a; l++)
      l < r
        ? (s = s.replace(rS.token, o[l]))
        : l < r + n
        ? (s = s.replace(iS.token, rt.transform(o[l])))
        : (s = s.replace(aS.token, qa(o[l])));
    return s;
  };
}
const X$ = (e) => (typeof e == "number" ? 0 : e);
function Q$(e) {
  const t = oS(e);
  return sS(e)(t.map(X$));
}
const vr = {
    test: q$,
    parse: oS,
    createTransformer: sS,
    getAnimatableNone: Q$,
  },
  lS = (e, t) => (n) => `${n > 0 ? t : e}`;
function uS(e, t) {
  return typeof e == "number"
    ? (n) => xe(e, t, n)
    : rt.test(e)
    ? nS(e, t)
    : e.startsWith("var(")
    ? lS(e, t)
    : dS(e, t);
}
const cS = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((a, o) => uS(a, t[o]));
    return (a) => {
      for (let o = 0; o < r; o++) n[o] = i[o](a);
      return n;
    };
  },
  Z$ = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = uS(e[i], t[i]));
    return (i) => {
      for (const a in r) n[a] = r[a](i);
      return n;
    };
  },
  dS = (e, t) => {
    const n = vr.createTransformer(t),
      r = Ol(e),
      i = Ol(t);
    return r.numVars === i.numVars &&
      r.numColors === i.numColors &&
      r.numNumbers >= i.numNumbers
      ? mr(cS(r.values, i.values), n)
      : lS(e, t);
  },
  Ao = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  iy = (e, t) => (n) => xe(e, t, n);
function ez(e) {
  return typeof e == "number"
    ? iy
    : typeof e == "string"
    ? rt.test(e)
      ? nS
      : dS
    : Array.isArray(e)
    ? cS
    : typeof e == "object"
    ? Z$
    : iy;
}
function tz(e, t, n) {
  const r = [],
    i = n || ez(e[0]),
    a = e.length - 1;
  for (let o = 0; o < a; o++) {
    let s = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Ee : t;
      s = mr(l, s);
    }
    r.push(s);
  }
  return r;
}
function fS(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const a = e.length;
  if ((Qm(a === t.length), a === 1)) return () => t[0];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const o = tz(t, r, i),
    s = o.length,
    l = (u) => {
      let c = 0;
      if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = Ao(e[c], e[c + 1], u);
      return o[c](d);
    };
  return n ? (u) => l(yr(e[0], e[a - 1], u)) : l;
}
function nz(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Ao(0, t, r);
    e.push(xe(n, 1, i));
  }
}
function rz(e) {
  const t = [0];
  return nz(t, e.length - 1), t;
}
function iz(e, t) {
  return e.map((n) => n * t);
}
function az(e, t) {
  return e.map(() => t || qb).splice(0, e.length - 1);
}
function Vl({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = N$(r) ? r.map(ny) : ny(r),
    a = { done: !1, value: t[0] },
    o = iz(n && n.length === t.length ? n : rz(t), e),
    s = fS(o, t, { ease: Array.isArray(i) ? i : az(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((a.value = s(l)), (a.done = l >= e), a),
  };
}
function mS(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const oz = 5;
function hS(e, t, n) {
  const r = Math.max(t - oz, 0);
  return mS(n - e(r), t - r);
}
const Kc = 0.001,
  sz = 0.01,
  ay = 10,
  lz = 0.05,
  uz = 1;
function cz({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, a;
  $$(e <= hr(ay));
  let o = 1 - t;
  (o = yr(lz, uz, o)),
    (e = yr(sz, ay, Dn(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            d = c * e,
            f = c - n,
            h = uf(u, o),
            y = Math.exp(-d);
          return Kc - (f / h) * y;
        }),
        (a = (u) => {
          const d = u * o * e,
            f = d * n + n,
            h = Math.pow(o, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-d),
            b = uf(Math.pow(u, 2), o);
          return ((-i(u) + Kc > 0 ? -1 : 1) * ((f - h) * y)) / b;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Kc + c * d;
        }),
        (a = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const s = 5 / e,
    l = fz(i, a, s);
  if (((e = hr(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const dz = 12;
function fz(e, t, n) {
  let r = n;
  for (let i = 1; i < dz; i++) r = r - e(r) / t(r);
  return r;
}
function uf(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const mz = ["duration", "bounce"],
  hz = ["stiffness", "damping", "mass"];
function oy(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function pz(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!oy(e, hz) && oy(e, mz)) {
    const n = cz(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function pS({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    a = e[e.length - 1],
    o = { done: !1, value: i },
    {
      stiffness: s,
      damping: l,
      mass: u,
      velocity: c,
      duration: d,
      isResolvedFromDuration: f,
    } = pz(r),
    h = c ? -Dn(c) : 0,
    y = l / (2 * Math.sqrt(s * u)),
    b = a - i,
    _ = Dn(Math.sqrt(s / u)),
    g = Math.abs(b) < 5;
  n || (n = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5);
  let m;
  if (y < 1) {
    const p = uf(_, y);
    m = (x) => {
      const P = Math.exp(-y * _ * x);
      return (
        a - P * (((h + y * _ * b) / p) * Math.sin(p * x) + b * Math.cos(p * x))
      );
    };
  } else if (y === 1) m = (p) => a - Math.exp(-_ * p) * (b + (h + _ * b) * p);
  else {
    const p = _ * Math.sqrt(y * y - 1);
    m = (x) => {
      const P = Math.exp(-y * _ * x),
        M = Math.min(p * x, 300);
      return (
        a - (P * ((h + y * _ * b) * Math.sinh(M) + p * b * Math.cosh(M))) / p
      );
    };
  }
  return {
    calculatedDuration: (f && d) || null,
    next: (p) => {
      const x = m(p);
      if (f) o.done = p >= d;
      else {
        let P = h;
        p !== 0 && (y < 1 ? (P = hS(m, p, x)) : (P = 0));
        const M = Math.abs(P) <= n,
          T = Math.abs(a - x) <= t;
        o.done = M && T;
      }
      return (o.value = o.done ? a : x), o;
    },
  };
}
function sy({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    h = (A) => (s !== void 0 && A < s) || (l !== void 0 && A > l),
    y = (A) =>
      s === void 0
        ? l
        : l === void 0 || Math.abs(s - A) < Math.abs(l - A)
        ? s
        : l;
  let b = n * t;
  const _ = d + b,
    g = o === void 0 ? _ : o(_);
  g !== _ && (b = g - d);
  const m = (A) => -b * Math.exp(-A / r),
    p = (A) => g + m(A),
    x = (A) => {
      const F = m(A),
        L = p(A);
      (f.done = Math.abs(F) <= u), (f.value = f.done ? g : L);
    };
  let P, M;
  const T = (A) => {
    h(f.value) &&
      ((P = A),
      (M = pS({
        keyframes: [f.value, y(f.value)],
        velocity: hS(p, A, f.value),
        damping: i,
        stiffness: a,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (A) => {
        let F = !1;
        return (
          !M && P === void 0 && ((F = !0), x(A), T(A)),
          P !== void 0 && A > P ? M.next(A - P) : (!F && x(A), f)
        );
      },
    }
  );
}
const gz = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => me.update(t, !0),
      stop: () => Nn(t),
      now: () => (Ne.isProcessing ? Ne.timestamp : performance.now()),
    };
  },
  ly = 2e4;
function uy(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < ly; ) (t += n), (r = e.next(t));
  return t >= ly ? 1 / 0 : t;
}
const yz = { decay: sy, inertia: sy, tween: Vl, keyframes: Vl, spring: pS };
function Wl({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = gz,
  keyframes: r,
  type: i = "keyframes",
  repeat: a = 0,
  repeatDelay: o = 0,
  repeatType: s = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: d,
  ...f
}) {
  let h = 1,
    y = !1,
    b,
    _;
  const g = () => {
    _ = new Promise((N) => {
      b = N;
    });
  };
  g();
  let m;
  const p = yz[i] || Vl;
  let x;
  p !== Vl &&
    typeof r[0] != "number" &&
    ((x = fS([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const P = p({ ...f, keyframes: r });
  let M;
  s === "mirror" &&
    (M = p({
      ...f,
      keyframes: [...r].reverse(),
      velocity: -(f.velocity || 0),
    }));
  let T = "idle",
    A = null,
    F = null,
    L = null;
  P.calculatedDuration === null && a && (P.calculatedDuration = uy(P));
  const { calculatedDuration: le } = P;
  let pe = 1 / 0,
    Ae = 1 / 0;
  le !== null && ((pe = le + o), (Ae = pe * (a + 1) - o));
  let ie = 0;
  const de = (N) => {
      if (F === null) return;
      h > 0 && (F = Math.min(F, N)),
        h < 0 && (F = Math.min(N - Ae / h, F)),
        A !== null ? (ie = A) : (ie = Math.round(N - F) * h);
      const X = ie - t * (h >= 0 ? 1 : -1),
        W = h >= 0 ? X < 0 : X > Ae;
      (ie = Math.max(X, 0)), T === "finished" && A === null && (ie = Ae);
      let se = ie,
        Gt = P;
      if (a) {
        const Hn = ie / pe;
        let an = Math.floor(Hn),
          zt = Hn % 1;
        !zt && Hn >= 1 && (zt = 1),
          zt === 1 && an--,
          (an = Math.min(an, a + 1));
        const xr = !!(an % 2);
        xr &&
          (s === "reverse"
            ? ((zt = 1 - zt), o && (zt -= o / pe))
            : s === "mirror" && (Gt = M));
        let ti = yr(0, 1, zt);
        ie > Ae && (ti = s === "reverse" && xr ? 1 : 0), (se = ti * pe);
      }
      const Te = W ? { done: !1, value: r[0] } : Gt.next(se);
      x && (Te.value = x(Te.value));
      let { done: bt } = Te;
      !W && le !== null && (bt = h >= 0 ? ie >= Ae : ie <= 0);
      const rn = A === null && (T === "finished" || (T === "running" && bt));
      return d && d(Te.value), rn && z(), Te;
    },
    ze = () => {
      m && m.stop(), (m = void 0);
    },
    Le = () => {
      (T = "idle"), ze(), b(), g(), (F = L = null);
    },
    z = () => {
      (T = "finished"), c && c(), ze(), b();
    },
    j = () => {
      if (y) return;
      m || (m = n(de));
      const N = m.now();
      l && l(),
        A !== null ? (F = N - A) : (!F || T === "finished") && (F = N),
        T === "finished" && g(),
        (L = F),
        (A = null),
        (T = "running"),
        m.start();
    };
  e && j();
  const V = {
    then(N, X) {
      return _.then(N, X);
    },
    get time() {
      return Dn(ie);
    },
    set time(N) {
      (N = hr(N)),
        (ie = N),
        A !== null || !m || h === 0 ? (A = N) : (F = m.now() - N / h);
    },
    get duration() {
      const N = P.calculatedDuration === null ? uy(P) : P.calculatedDuration;
      return Dn(N);
    },
    get speed() {
      return h;
    },
    set speed(N) {
      N === h || !m || ((h = N), (V.time = Dn(ie)));
    },
    get state() {
      return T;
    },
    play: j,
    pause: () => {
      (T = "paused"), (A = ie);
    },
    stop: () => {
      (y = !0), T !== "idle" && ((T = "idle"), u && u(), Le());
    },
    cancel: () => {
      L !== null && de(L), Le();
    },
    complete: () => {
      T = "finished";
    },
    sample: (N) => ((F = 0), de(N)),
  };
  return V;
}
function vz(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const bz = vz(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Sz = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  Es = 10,
  wz = 2e4,
  kz = (e, t) => t.type === "spring" || e === "backgroundColor" || !Gb(t.ease);
function xz(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      bz() &&
      Sz.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let o = !1,
    s,
    l;
  const u = () => {
    l = new Promise((m) => {
      s = m;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: h } = i;
  if (kz(t, i)) {
    const m = Wl({ ...i, repeat: 0, delay: 0 });
    let p = { done: !1, value: c[0] };
    const x = [];
    let P = 0;
    for (; !p.done && P < wz; ) (p = m.sample(P)), x.push(p.value), (P += Es);
    (h = void 0), (c = x), (d = P - Es), (f = "linear");
  }
  const y = R$(e.owner.current, t, c, { ...i, duration: d, ease: f, times: h });
  i.syncStart &&
    (y.startTime = Ne.isProcessing
      ? Ne.timestamp
      : document.timeline
      ? document.timeline.currentTime
      : performance.now());
  const b = () => y.cancel(),
    _ = () => {
      me.update(b), s(), u();
    };
  return (
    (y.onfinish = () => {
      e.set(D$(c, i)), r && r(), _();
    }),
    {
      then(m, p) {
        return l.then(m, p);
      },
      attachTimeline(m) {
        return (y.timeline = m), (y.onfinish = null), Ee;
      },
      get time() {
        return Dn(y.currentTime || 0);
      },
      set time(m) {
        y.currentTime = hr(m);
      },
      get speed() {
        return y.playbackRate;
      },
      set speed(m) {
        y.playbackRate = m;
      },
      get duration() {
        return Dn(d);
      },
      play: () => {
        o || (y.play(), Nn(b));
      },
      pause: () => y.pause(),
      stop: () => {
        if (((o = !0), y.playState === "idle")) return;
        const { currentTime: m } = y;
        if (m) {
          const p = Wl({ ...i, autoplay: !1 });
          e.setWithVelocity(p.sample(m - Es).value, p.sample(m).value, Es);
        }
        _();
      },
      complete: () => y.finish(),
      cancel: _,
    }
  );
}
function _z({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Ee,
      pause: Ee,
      stop: Ee,
      then: (a) => (a(), Promise.resolve()),
      cancel: Ee,
      complete: Ee,
    }
  );
  return t
    ? Wl({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
const Cz = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Tz = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Pz = { type: "keyframes", duration: 0.8 },
  Ez = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Az = (e, { keyframes: t }) =>
    t.length > 2
      ? Pz
      : Zr.has(e)
      ? e.startsWith("scale")
        ? Tz(t[1])
        : Cz
      : Ez,
  cf = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (vr.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  Mz = new Set(["brightness", "contrast", "saturate", "opacity"]);
function $z(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(zu) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let a = Mz.has(t) ? 1 : 0;
  return r !== n && (a *= 100), t + "(" + a + i + ")";
}
const zz = /([a-z-]*)\(.*?\)/g,
  df = {
    ...vr,
    getAnimatableNone: (e) => {
      const t = e.match(zz);
      return t ? t.map($z).join(" ") : e;
    },
  },
  Rz = {
    ...Ab,
    color: rt,
    backgroundColor: rt,
    outlineColor: rt,
    fill: rt,
    stroke: rt,
    borderColor: rt,
    borderTopColor: rt,
    borderRightColor: rt,
    borderBottomColor: rt,
    borderLeftColor: rt,
    filter: df,
    WebkitFilter: df,
  },
  nh = (e) => Rz[e];
function gS(e, t) {
  let n = nh(e);
  return (
    n !== df && (n = vr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const yS = (e) => /^0[^.\s]+$/.test(e);
function Dz(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || yS(e);
}
function Fz(e, t, n, r) {
  const i = cf(t, n);
  let a;
  Array.isArray(n) ? (a = [...n]) : (a = [null, n]);
  const o = r.from !== void 0 ? r.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < a.length; u++)
    a[u] === null && (a[u] = u === 0 ? o : a[u - 1]),
      Dz(a[u]) && l.push(u),
      typeof a[u] == "string" && a[u] !== "none" && a[u] !== "0" && (s = a[u]);
  if (i && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      a[c] = gS(t, s);
    }
  return a;
}
function Lz({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: a,
  repeatType: o,
  repeatDelay: s,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function vS(e, t) {
  return e[t] || e.default || e;
}
const rh =
  (e, t, n, r = {}) =>
  (i) => {
    const a = vS(r, e) || {},
      o = a.delay || r.delay || 0;
    let { elapsed: s = 0 } = r;
    s = s - hr(o);
    const l = Fz(t, e, n, a),
      u = l[0],
      c = l[l.length - 1],
      d = cf(e, u),
      f = cf(e, c);
    let h = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...a,
      delay: -s,
      onUpdate: (y) => {
        t.set(y), a.onUpdate && a.onUpdate(y);
      },
      onComplete: () => {
        i(), a.onComplete && a.onComplete();
      },
    };
    if (
      (Lz(a) || (h = { ...h, ...Az(e, h) }),
      h.duration && (h.duration = hr(h.duration)),
      h.repeatDelay && (h.repeatDelay = hr(h.repeatDelay)),
      !d || !f || z$.current || a.type === !1)
    )
      return _z(h);
    if (
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const y = xz(t, e, h);
      if (y) return y;
    }
    return Wl(h);
  };
function Hl(e) {
  return !!(vt(e) && e.add);
}
const bS = (e) => /^\-?\d*\.?\d+$/.test(e);
function ih(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ah(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class oh {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ih(this.subscriptions, t), () => ah(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let a = 0; a < i; a++) {
          const o = this.subscriptions[a];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Iz = (e) => !isNaN(parseFloat(e));
class Bz {
  constructor(t, n = {}) {
    (this.version = "10.16.4"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: a, timestamp: o } = Ne;
        this.lastUpdated !== o &&
          ((this.timeDelta = a),
          (this.lastUpdated = o),
          me.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => me.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = Iz(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new oh());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            me.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
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
      ? mS(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
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
function Zi(e, t) {
  return new Bz(e, t);
}
const SS = (e) => (t) => t.test(e),
  jz = { test: (e) => e === "auto", parse: (e) => e },
  wS = [ei, O, vn, Jn, UM, HM, jz],
  wa = (e) => wS.find(SS(e)),
  Nz = [...wS, rt, vr],
  Oz = (e) => Nz.find(SS(e));
function Vz(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Zi(n));
}
function Wz(e, t) {
  const n = Du(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...a
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  a = { ...a, ...r };
  for (const o in a) {
    const s = a$(a[o]);
    Vz(e, o, s);
  }
}
function Hz(e, t, n) {
  var r, i;
  const a = Object.keys(t).filter((s) => !e.hasValue(s)),
    o = a.length;
  if (o)
    for (let s = 0; s < o; s++) {
      const l = a[s],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && i !== void 0
              ? i
              : t[l]),
        c != null &&
          (typeof c == "string" && (bS(c) || yS(c))
            ? (c = parseFloat(c))
            : !Oz(c) && vr.test(u) && (c = gS(l, u)),
          e.addValue(l, Zi(c, { owner: e })),
          n[l] === void 0 && (n[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function Uz(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function Gz(e, t, n) {
  const r = {};
  for (const i in e) {
    const a = Uz(i, t);
    if (a !== void 0) r[i] = a;
    else {
      const o = n.getValue(i);
      o && (r[i] = o.get());
    }
  }
  return r;
}
function Kz({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function kS(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: a = e.getDefaultTransition(),
    transitionEnd: o,
    ...s
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (a = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const d in s) {
    const f = e.getValue(d),
      h = s[d];
    if (!f || h === void 0 || (c && Kz(c, d))) continue;
    const y = { delay: n, elapsed: 0, ...a };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const _ = e.getProps()[M$];
      _ &&
        ((y.elapsed = window.HandoffAppearAnimations(_, d, f, me)),
        (y.syncStart = !0));
    }
    f.start(rh(d, f, h, e.shouldReduceMotion && Zr.has(d) ? { type: !1 } : y));
    const b = f.animation;
    Hl(l) && (l.add(d), b.then(() => l.remove(d))), u.push(b);
  }
  return (
    o &&
      Promise.all(u).then(() => {
        o && Wz(e, o);
      }),
    u
  );
}
function ff(e, t, n = {}) {
  const r = Du(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const a = r ? () => Promise.all(kS(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: d,
            } = i;
            return Yz(e, t, u + l, c, d, n);
          }
        : () => Promise.resolve(),
    { when: s } = i;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [a, o] : [o, a];
    return l().then(() => u());
  } else return Promise.all([a(), o(n.delay)]);
}
function Yz(e, t, n = 0, r = 0, i = 1, a) {
  const o = [],
    s = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(Jz)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          o.push(
            ff(u, t, { ...a, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function Jz(e, t) {
  return e.sortNodePosition(t);
}
function qz(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((a) => ff(e, a, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = ff(e, t, n);
  else {
    const i = typeof t == "function" ? Du(e, t, n.custom) : t;
    r = Promise.all(kS(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const Xz = [...Om].reverse(),
  Qz = Om.length;
function Zz(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => qz(e, n, r)));
}
function e6(e) {
  let t = Zz(e);
  const n = n6();
  let r = !0;
  const i = (l, u) => {
    const c = Du(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...h } = c;
      l = { ...l, ...h, ...f };
    }
    return l;
  };
  function a(l) {
    t = l(e);
  }
  function o(l, u) {
    const c = e.getProps(),
      d = e.getVariantContext(!0) || {},
      f = [],
      h = new Set();
    let y = {},
      b = 1 / 0;
    for (let g = 0; g < Qz; g++) {
      const m = Xz[g],
        p = n[m],
        x = c[m] !== void 0 ? c[m] : d[m],
        P = Po(x),
        M = m === u ? p.isActive : null;
      M === !1 && (b = g);
      let T = x === d[m] && x !== c[m] && P;
      if (
        (T && r && e.manuallyAnimateOnMount && (T = !1),
        (p.protectedKeys = { ...y }),
        (!p.isActive && M === null) ||
          (!x && !p.prevProp) ||
          Mu(x) ||
          typeof x == "boolean")
      )
        continue;
      const A = t6(p.prevProp, x);
      let F = A || (m === u && p.isActive && !T && P) || (g > b && P);
      const L = Array.isArray(x) ? x : [x];
      let le = L.reduce(i, {});
      M === !1 && (le = {});
      const { prevResolvedValues: pe = {} } = p,
        Ae = { ...pe, ...le },
        ie = (de) => {
          (F = !0), h.delete(de), (p.needsAnimating[de] = !0);
        };
      for (const de in Ae) {
        const ze = le[de],
          Le = pe[de];
        y.hasOwnProperty(de) ||
          (ze !== Le
            ? Nl(ze) && Nl(Le)
              ? !Hb(ze, Le) || A
                ? ie(de)
                : (p.protectedKeys[de] = !0)
              : ze !== void 0
              ? ie(de)
              : h.add(de)
            : ze !== void 0 && h.has(de)
            ? ie(de)
            : (p.protectedKeys[de] = !0));
      }
      (p.prevProp = x),
        (p.prevResolvedValues = le),
        p.isActive && (y = { ...y, ...le }),
        r && e.blockInitialAnimation && (F = !1),
        F &&
          !T &&
          f.push(
            ...L.map((de) => ({ animation: de, options: { type: m, ...l } }))
          );
    }
    if (h.size) {
      const g = {};
      h.forEach((m) => {
        const p = e.getBaseTarget(m);
        p !== void 0 && (g[m] = p);
      }),
        f.push({ animation: g });
    }
    let _ = !!f.length;
    return (
      r && c.initial === !1 && !e.manuallyAnimateOnMount && (_ = !1),
      (r = !1),
      _ ? t(f) : Promise.resolve()
    );
  }
  function s(l, u, c) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    (d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((h) => {
        var y;
        return (y = h.animationState) === null || y === void 0
          ? void 0
          : y.setActive(l, u);
      }),
      (n[l].isActive = u);
    const f = o(c, l);
    for (const h in n) n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: o,
    setActive: s,
    setAnimateFunction: a,
    getState: () => n,
  };
}
function t6(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Hb(t, e) : !1;
}
function Pr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function n6() {
  return {
    animate: Pr(!0),
    whileInView: Pr(),
    whileHover: Pr(),
    whileTap: Pr(),
    whileDrag: Pr(),
    whileFocus: Pr(),
    exit: Pr(),
  };
}
class r6 extends kr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = e6(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Mu(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let i6 = 0;
class a6 extends kr {
  constructor() {
    super(...arguments), (this.id = i6++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const a = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && a.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const o6 = { animation: { Feature: r6 }, exit: { Feature: a6 } },
  cy = (e, t) => Math.abs(e - t);
function s6(e, t) {
  const n = cy(e.x, t.x),
    r = cy(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class xS {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = Jc(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          d = s6(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !d) return;
        const { point: f } = u,
          { timestamp: h } = Ne;
        this.history.push({ ...f, timestamp: h });
        const { onStart: y, onMove: b } = this.handlers;
        c ||
          (y && y(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          b && b(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Yc(c, this.transformPagePoint)),
          me.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: d, onSessionEnd: f } = this.handlers,
          h = Jc(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Yc(c, this.transformPagePoint),
            this.history
          );
        this.startEvent && d && d(u, h), f && f(u, h);
      }),
      !jb(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const i = Ru(t),
      a = Yc(i, this.transformPagePoint),
      { point: o } = a,
      { timestamp: s } = Ne;
    this.history = [{ ...o, timestamp: s }];
    const { onSessionStart: l } = n;
    l && l(t, Jc(a, this.history)),
      (this.removeListeners = mr(
        Rn(window, "pointermove", this.handlePointerMove),
        Rn(window, "pointerup", this.handlePointerUp),
        Rn(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Nn(this.updatePoint);
  }
}
function Yc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function dy(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Jc({ point: e }, t) {
  return {
    point: e,
    delta: dy(e, _S(t)),
    offset: dy(e, l6(t)),
    velocity: u6(t, 0.1),
  };
}
function l6(e) {
  return e[0];
}
function _S(e) {
  return e[e.length - 1];
}
function u6(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = _S(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > hr(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const a = Dn(i.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function Et(e) {
  return e.max - e.min;
}
function mf(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function fy(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = xe(t.min, t.max, e.origin)),
    (e.scale = Et(n) / Et(t)),
    (mf(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = xe(n.min, n.max, e.origin) - e.originPoint),
    (mf(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Xa(e, t, n, r) {
  fy(e.x, t.x, n.x, r ? r.originX : void 0),
    fy(e.y, t.y, n.y, r ? r.originY : void 0);
}
function my(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Et(t));
}
function c6(e, t, n) {
  my(e.x, t.x, n.x), my(e.y, t.y, n.y);
}
function hy(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Et(t));
}
function Qa(e, t, n) {
  hy(e.x, t.x, n.x), hy(e.y, t.y, n.y);
}
function d6(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? xe(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? xe(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function py(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function f6(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: py(e.x, n, i), y: py(e.y, t, r) };
}
function gy(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function m6(e, t) {
  return { x: gy(e.x, t.x), y: gy(e.y, t.y) };
}
function h6(e, t) {
  let n = 0.5;
  const r = Et(e),
    i = Et(t);
  return (
    i > r
      ? (n = Ao(t.min, t.max - r, e.min))
      : r > i && (n = Ao(e.min, e.max - i, t.min)),
    yr(0, 1, n)
  );
}
function p6(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const hf = 0.35;
function g6(e = hf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = hf),
    { x: yy(e, "left", "right"), y: yy(e, "top", "bottom") }
  );
}
function yy(e, t, n) {
  return { min: vy(e, t), max: vy(e, n) };
}
function vy(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const by = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ai = () => ({ x: by(), y: by() }),
  Sy = () => ({ min: 0, max: 0 }),
  Re = () => ({ x: Sy(), y: Sy() });
function un(e) {
  return [e("x"), e("y")];
}
function CS({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function y6({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function v6(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function qc(e) {
  return e === void 0 || e === 1;
}
function pf({ scale: e, scaleX: t, scaleY: n }) {
  return !qc(e) || !qc(t) || !qc(n);
}
function Mr(e) {
  return pf(e) || TS(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function TS(e) {
  return wy(e.x) || wy(e.y);
}
function wy(e) {
  return e && e !== "0%";
}
function Ul(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function ky(e, t, n, r, i) {
  return i !== void 0 && (e = Ul(e, i, r)), Ul(e, n, r) + t;
}
function gf(e, t = 0, n = 1, r, i) {
  (e.min = ky(e.min, t, n, r, i)), (e.max = ky(e.max, t, n, r, i));
}
function PS(e, { x: t, y: n }) {
  gf(e.x, t.translate, t.scale, t.originPoint),
    gf(e.y, n.translate, n.scale, n.originPoint);
}
function b6(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let a, o;
  for (let s = 0; s < i; s++) {
    (a = n[s]), (o = a.projectionDelta);
    const l = a.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        Mi(e, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), PS(e, o)),
      r && Mr(a.latestValues) && Mi(e, a.latestValues));
  }
  (t.x = xy(t.x)), (t.y = xy(t.y));
}
function xy(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Qn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function _y(e, t, [n, r, i]) {
  const a = t[i] !== void 0 ? t[i] : 0.5,
    o = xe(e.min, e.max, a);
  gf(e, t[n], t[r], o, t.scale);
}
const S6 = ["x", "scaleX", "originX"],
  w6 = ["y", "scaleY", "originY"];
function Mi(e, t) {
  _y(e.x, t, S6), _y(e.y, t, w6);
}
function ES(e, t) {
  return CS(v6(e.getBoundingClientRect(), t));
}
function k6(e, t, n) {
  const r = ES(e, n),
    { scroll: i } = t;
  return i && (Qn(r.x, i.offset.x), Qn(r.y, i.offset.y)), r;
}
const x6 = new WeakMap();
class _6 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Re()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (l) => {
        this.stopAnimation(), n && this.snapToCursor(Ru(l, "page").point);
      },
      a = (l, u) => {
        const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
        if (
          c &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Ob(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          un((y) => {
            let b = this.getAxisMotionValue(y).get() || 0;
            if (vn.test(b)) {
              const { projection: _ } = this.visualElement;
              if (_ && _.layout) {
                const g = _.layout.layoutBox[y];
                g && (b = Et(g) * (parseFloat(b) / 100));
              }
            }
            this.originPoint[y] = b;
          }),
          f && me.update(() => f(l, u), !1, !0);
        const { animationState: h } = this.visualElement;
        h && h.setActive("whileDrag", !0);
      },
      o = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: d,
          onDirectionLock: f,
          onDrag: h,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: y } = u;
        if (d && this.currentDirection === null) {
          (this.currentDirection = C6(y)),
            this.currentDirection !== null && f && f(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, y),
          this.updateAxis("y", u.point, y),
          this.visualElement.render(),
          h && h(l, u);
      },
      s = (l, u) => this.stop(l, u);
    this.panSession = new xS(
      t,
      { onSessionStart: i, onStart: a, onMove: o, onSessionEnd: s },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: a } = this.getProps();
    a && me.update(() => a(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !As(t, i, this.currentDirection)) return;
    const a = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = d6(o, this.constraints[t], this.elastic[t])),
      a.set(o);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      i = this.constraints;
    t && Pi(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = f6(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = g6(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        un((a) => {
          this.getAxisMotionValue(a) &&
            (this.constraints[a] = p6(r.layoutBox[a], this.constraints[a]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Pi(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const a = k6(r, i.root, this.visualElement.getTransformPagePoint());
    let o = m6(i.layout.layoutBox, a);
    if (n) {
      const s = n(y6(o));
      (this.hasMutatedConstraints = !!s), s && (o = CS(s));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: a,
        dragSnapToOrigin: o,
        onDragTransitionEnd: s,
      } = this.getProps(),
      l = this.constraints || {},
      u = un((c) => {
        if (!As(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        o && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          h = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...a,
            ...d,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(rh(t, r, 0, n));
  }
  stopAnimation() {
    un((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    un((n) => {
      const { drag: r } = this.getProps();
      if (!As(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        a = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: s } = i.layout.layoutBox[n];
        a.set(t[n] - xe(o, s, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Pi(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    un((o) => {
      const s = this.getAxisMotionValue(o);
      if (s) {
        const l = s.get();
        i[o] = h6({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = a ? a({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      un((o) => {
        if (!As(o, t, null)) return;
        const s = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        s.set(xe(l, u, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    x6.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Rn(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Pi(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      a = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const o = An(window, "resize", () => this.scalePositionWithinConstraints()),
      s = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (un((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), a(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: a = !1,
        dragElastic: o = hf,
        dragMomentum: s = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: a,
      dragElastic: o,
      dragMomentum: s,
    };
  }
}
function As(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function C6(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class T6 extends kr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ee),
      (this.removeListeners = Ee),
      (this.controls = new _6(t));
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
const Cy = (e) => (t, n) => {
  e && me.update(() => e(t, n));
};
class P6 extends kr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ee);
  }
  onPointerDown(t) {
    this.session = new xS(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Cy(t),
      onStart: Cy(n),
      onMove: r,
      onEnd: (a, o) => {
        delete this.session, i && me.update(() => i(a, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Rn(this.node.current, "pointerdown", (t) =>
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
function E6() {
  const e = k.useContext(jo);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = k.useId();
  return k.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
function A6() {
  return M6(k.useContext(jo));
}
function M6(e) {
  return e === null ? !0 : e.isPresent;
}
const il = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ty(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ka = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (O.test(e)) e = parseFloat(e);
        else return e;
      const n = Ty(e, t.target.x),
        r = Ty(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  $6 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = vr.parse(e);
      if (i.length > 5) return r;
      const a = vr.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        s = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + o] /= s), (i[1 + o] /= l);
      const u = xe(s, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        a(i)
      );
    },
  };
class z6 extends Vi.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: a } = t;
    IM(R6),
      a &&
        (n.group && n.group.add(a),
        r && r.register && i && r.register(a),
        a.root.didUpdate(),
        a.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        a.setOptions({
          ...a.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (il.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: a,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = a),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== a &&
          (a
            ? o.promote()
            : o.relegate() ||
              me.postRender(() => {
                const s = o.getStack();
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
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function AS(e) {
  const [t, n] = E6(),
    r = k.useContext(Wm);
  return Vi.createElement(z6, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: k.useContext(_b),
    isPresent: t,
    safeToRemove: n,
  });
}
const R6 = {
    borderRadius: {
      ...ka,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ka,
    borderTopRightRadius: ka,
    borderBottomLeftRadius: ka,
    borderBottomRightRadius: ka,
    boxShadow: $6,
  },
  MS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  D6 = MS.length,
  Py = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Ey = (e) => typeof e == "number" || O.test(e);
function F6(e, t, n, r, i, a) {
  i
    ? ((e.opacity = xe(0, n.opacity !== void 0 ? n.opacity : 1, L6(r))),
      (e.opacityExit = xe(t.opacity !== void 0 ? t.opacity : 1, 0, I6(r))))
    : a &&
      (e.opacity = xe(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < D6; o++) {
    const s = `border${MS[o]}Radius`;
    let l = Ay(t, s),
      u = Ay(n, s);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Ey(l) === Ey(u)
        ? ((e[s] = Math.max(xe(Py(l), Py(u), r), 0)),
          (vn.test(u) || vn.test(l)) && (e[s] += "%"))
        : (e[s] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = xe(t.rotate || 0, n.rotate || 0, r));
}
function Ay(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const L6 = $S(0, 0.5, Zm),
  I6 = $S(0.5, 0.95, Ee);
function $S(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Ao(e, t, r)));
}
function My(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Lt(e, t) {
  My(e.x, t.x), My(e.y, t.y);
}
function $y(e, t, n, r, i) {
  return (
    (e -= t), (e = Ul(e, 1 / n, r)), i !== void 0 && (e = Ul(e, 1 / i, r)), e
  );
}
function B6(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (vn.test(t) &&
      ((t = parseFloat(t)), (t = xe(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let s = xe(a.min, a.max, r);
  e === a && (s -= t),
    (e.min = $y(e.min, t, n, s, i)),
    (e.max = $y(e.max, t, n, s, i));
}
function zy(e, t, [n, r, i], a, o) {
  B6(e, t[n], t[r], t[i], t.scale, a, o);
}
const j6 = ["x", "scaleX", "originX"],
  N6 = ["y", "scaleY", "originY"];
function Ry(e, t, n, r) {
  zy(e.x, t, j6, n ? n.x : void 0, r ? r.x : void 0),
    zy(e.y, t, N6, n ? n.y : void 0, r ? r.y : void 0);
}
function Dy(e) {
  return e.translate === 0 && e.scale === 1;
}
function zS(e) {
  return Dy(e.x) && Dy(e.y);
}
function O6(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function RS(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Fy(e) {
  return Et(e.x) / Et(e.y);
}
class V6 {
  constructor() {
    this.members = [];
  }
  add(t) {
    ih(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (ah(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const a = this.members[i];
      if (a.isPresent !== !1) {
        r = a;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
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
function Ly(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    a = e.y.translate / t.y;
  if (
    ((i || a) && (r = `translate3d(${i}px, ${a}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const o = e.x.scale * t.x,
    s = e.y.scale * t.y;
  return (o !== 1 || s !== 1) && (r += `scale(${o}, ${s})`), r || "none";
}
const W6 = (e, t) => e.depth - t.depth;
class H6 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    ih(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    ah(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(W6),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function U6(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const a = i - n;
      a >= t && (Nn(r), e(a - t));
    };
  return me.read(r, !0), () => Nn(r);
}
function G6(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function K6(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Y6(e, t, n) {
  const r = vt(e) ? e : Zi(e);
  return r.start(rh("", r, t, n)), r.animation;
}
const Iy = ["", "X", "Y", "Z"],
  By = 1e3;
let J6 = 0;
const $r = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function DS({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, s = t?.()) {
      (this.id = J6++),
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
          ($r.totalNodes =
            $r.resolvedTargetDeltas =
            $r.recalculatedProjection =
              0),
            this.nodes.forEach(Q6),
            this.nodes.forEach(rR),
            this.nodes.forEach(iR),
            this.nodes.forEach(Z6),
            G6($r);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = s ? s.root || s : this),
        (this.path = s ? [...s.path, s] : []),
        (this.parent = s),
        (this.depth = s ? s.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new H6());
    }
    addEventListener(o, s) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new oh()),
        this.eventHandlers.get(o).add(s)
      );
    }
    notifyListeners(o, ...s) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...s);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, s = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = K6(o)), (this.instance = o);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        s && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = U6(f, 250)),
            il.hasAnimatedSinceResize &&
              ((il.hasAnimatedSinceResize = !1), this.nodes.forEach(Ny));
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
              hasRelativeTargetChanged: h,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const b =
                  this.options.transition || c.getDefaultTransition() || uR,
                { onLayoutAnimationStart: _, onLayoutAnimationComplete: g } =
                  c.getProps(),
                m = !this.targetLayout || !RS(this.targetLayout, y) || h,
                p = !f && h;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                p ||
                (f && (m || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, p);
                const x = { ...vS(b, "layout"), onPlay: _, onComplete: g };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x);
              } else
                f || Ny(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Nn(this.updateProjection);
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
        this.nodes && this.nodes.forEach(aR),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
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
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(jy);
        return;
      }
      this.isUpdating || this.nodes.forEach(tR),
        (this.isUpdating = !1),
        this.nodes.forEach(nR),
        this.nodes.forEach(q6),
        this.nodes.forEach(X6),
        this.clearAllSnapshots();
      const s = performance.now();
      (Ne.delta = yr(0, 1e3 / 60, s - Ne.timestamp)),
        (Ne.timestamp = s),
        (Ne.isProcessing = !0),
        Nc.update.process(Ne),
        Nc.preRender.process(Ne),
        Nc.render.process(Ne),
        (Ne.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(eR), this.sharedNodes.forEach(oR);
    }
    scheduleUpdateProjection() {
      me.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      me.postRender(() => {
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
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Re()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s &&
        s.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === o &&
        (s = !1),
        s &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: o,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const o = this.isLayoutDirty || this.shouldResetTransform,
        s = this.projectionDelta && !zS(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (s || Mr(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return (
        o && (l = this.removeTransform(l)),
        cR(l),
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
      const { visualElement: o } = this.options;
      if (!o) return Re();
      const s = o.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (Qn(s.x, l.offset.x), Qn(s.y, l.offset.y)), s;
    }
    removeElementScroll(o) {
      const s = Re();
      Lt(s, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            Lt(s, o);
            const { scroll: f } = this.root;
            f && (Qn(s.x, -f.offset.x), Qn(s.y, -f.offset.y));
          }
          Qn(s.x, c.offset.x), Qn(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(o, s = !1) {
      const l = Re();
      Lt(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Mi(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Mr(c.latestValues) && Mi(l, c.latestValues);
      }
      return Mr(this.latestValues) && Mi(l, this.latestValues), l;
    }
    removeTransform(o) {
      const s = Re();
      Lt(s, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Mr(u.latestValues)) continue;
        pf(u.latestValues) && u.updateSnapshot();
        const c = Re(),
          d = u.measurePageBox();
        Lt(c, d),
          Ry(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Mr(this.latestValues) && Ry(s, this.latestValues), s;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
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
        this.relativeParent.resolvedRelativeTargetAt !== Ne.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
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
          ((this.resolvedRelativeTargetAt = Ne.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Re()),
              (this.relativeTargetOrigin = Re()),
              Qa(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                h.layout.layoutBox
              ),
              Lt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Re()), (this.targetWithTransforms = Re())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                c6(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Lt(this.target, this.layout.layoutBox),
                PS(this.target, this.targetDelta))
              : Lt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = h),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Re()),
                (this.relativeTargetOrigin = Re()),
                Qa(this.relativeTargetOrigin, this.target, h.target),
                Lt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          $r.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          pf(this.parent.latestValues) ||
          TS(this.parent.latestValues)
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
      var o;
      const s = this.getLead(),
        l = !!this.resumingFrom || this !== s;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Ne.timestamp && (u = !1),
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
      Lt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        h = this.treeScale.y;
      b6(this.layoutCorrected, this.treeScale, this.path, l),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (s.target = s.layout.layoutBox);
      const { target: y } = s;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = Ai()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Ai()),
        (this.projectionDeltaWithTransform = Ai()));
      const b = this.projectionTransform;
      Xa(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = Ly(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== b ||
          this.treeScale.x !== f ||
          this.treeScale.y !== h) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        $r.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), o)) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(o, s = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = Ai();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s);
      const f = Re(),
        h = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        b = h !== y,
        _ = this.getStack(),
        g = !_ || _.members.length <= 1,
        m = !!(b && !g && this.options.crossfade === !0 && !this.path.some(lR));
      this.animationProgress = 0;
      let p;
      (this.mixTargetDelta = (x) => {
        const P = x / 1e3;
        Oy(d.x, o.x, P),
          Oy(d.y, o.y, P),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Qa(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            sR(this.relativeTarget, this.relativeTargetOrigin, f, P),
            p && O6(this.relativeTarget, p) && (this.isProjectionDirty = !1),
            p || (p = Re()),
            Lt(p, this.relativeTarget)),
          b &&
            ((this.animationValues = c), F6(c, u, this.latestValues, P, m, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = P);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Nn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = me.update(() => {
          (il.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Y6(0, By, {
              ...o,
              onUpdate: (s) => {
                this.mixTargetDelta(s), o.onUpdate && o.onUpdate(s);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
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
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(By),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: s,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!s || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          FS(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Re();
          const d = Et(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + d);
          const f = Et(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + f);
        }
        Lt(s, l),
          Mi(s, c),
          Xa(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(o, s) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new V6()),
        this.sharedNodes.get(o).add(s);
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
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: s } = this.options;
      return s
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: s } = this.options;
      return s
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        s && this.setOptions({ transition: s });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let s = !1;
      const { latestValues: l } = o;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s))
        return;
      const u = {};
      for (let c = 0; c < Iy.length; c++) {
        const d = "rotate" + Iy[c];
        l[d] && ((u[d] = l[d]), o.setStaticValue(d, 0));
      }
      o.render();
      for (const c in u) o.setStaticValue(c, u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o = {}) {
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
          (u.pointerEvents = rl(o.pointerEvents) || ""),
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
            (b.pointerEvents = rl(o.pointerEvents) || "")),
          this.hasProjected &&
            !Mr(this.latestValues) &&
            ((b.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          b
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Ly(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: h, y } = this.projectionDelta;
      (u.transformOrigin = `${h.origin * 100}% ${y.origin * 100}% 0`),
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
        const { correct: _, applyTo: g } = Bl[b],
          m = u.transform === "none" ? f[b] : _(f[b], d);
        if (g) {
          const p = g.length;
          for (let x = 0; x < p; x++) u[g[x]] = m;
        } else u[b] = m;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = d === this ? rl(o.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var s;
        return (s = o.currentAnimation) === null || s === void 0
          ? void 0
          : s.stop();
      }),
        this.root.nodes.forEach(jy),
        this.root.sharedNodes.clear();
    }
  };
}
function q6(e) {
  e.updateLayout();
}
function X6(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: a } = e.options,
      o = n.source !== e.layout.source;
    a === "size"
      ? un((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            h = Et(f);
          (f.min = r[d].min), (f.max = f.min + h);
        })
      : FS(a, n.layoutBox, r) &&
        un((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            h = Et(r[d]);
          (f.max = f.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + h));
        });
    const s = Ai();
    Xa(s, r, n.layoutBox);
    const l = Ai();
    o ? Xa(l, e.applyTransform(i, !0), n.measuredBox) : Xa(l, r, n.layoutBox);
    const u = !zS(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const y = Re();
          Qa(y, n.layoutBox, f.layoutBox);
          const b = Re();
          Qa(b, r, h.layoutBox),
            RS(y, b) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = b),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Q6(e) {
  $r.totalNodes++,
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
function Z6(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function eR(e) {
  e.clearSnapshot();
}
function jy(e) {
  e.clearMeasurements();
}
function tR(e) {
  e.isLayoutDirty = !1;
}
function nR(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Ny(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function rR(e) {
  e.resolveTargetDelta();
}
function iR(e) {
  e.calcProjection();
}
function aR(e) {
  e.resetRotation();
}
function oR(e) {
  e.removeLeadSnapshot();
}
function Oy(e, t, n) {
  (e.translate = xe(t.translate, 0, n)),
    (e.scale = xe(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Vy(e, t, n, r) {
  (e.min = xe(t.min, n.min, r)), (e.max = xe(t.max, n.max, r));
}
function sR(e, t, n, r) {
  Vy(e.x, t.x, n.x, r), Vy(e.y, t.y, n.y, r);
}
function lR(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const uR = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Wy = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  Hy = Wy("applewebkit/") && !Wy("chrome/") ? Math.round : Ee;
function Uy(e) {
  (e.min = Hy(e.min)), (e.max = Hy(e.max));
}
function cR(e) {
  Uy(e.x), Uy(e.y);
}
function FS(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !mf(Fy(t), Fy(n), 0.2))
  );
}
const dR = DS({
    attachResizeListener: (e, t) => An(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Xc = { current: void 0 },
  LS = DS({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Xc.current) {
        const e = new dR({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Xc.current = e);
      }
      return Xc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  fR = {
    pan: { Feature: P6 },
    drag: { Feature: T6, ProjectionNode: LS, MeasureLayout: AS },
  },
  mR = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function hR(e) {
  const t = mR.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function yf(e, t, n = 1) {
  const [r, i] = hR(e);
  if (!r) return;
  const a = window.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    const o = a.trim();
    return bS(o) ? parseFloat(o) : o;
  } else return of(i) ? yf(i, t, n + 1) : i;
}
function pR(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const a = i.get();
      if (!of(a)) return;
      const o = yf(a, r);
      o && i.set(o);
    });
  for (const i in t) {
    const a = t[i];
    if (!of(a)) continue;
    const o = yf(a, r);
    o && ((t[i] = o), n || (n = {}), n[i] === void 0 && (n[i] = a));
  }
  return { target: t, transitionEnd: n };
}
const gR = new Set([
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
  IS = (e) => gR.has(e),
  yR = (e) => Object.keys(e).some(IS),
  Gy = (e) => e === ei || e === O,
  Ky = (e, t) => parseFloat(e.split(", ")[t]),
  Yy =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return Ky(i[1], t);
      {
        const a = r.match(/^matrix\((.+)\)$/);
        return a ? Ky(a[1], e) : 0;
      }
    },
  vR = new Set(["x", "y", "z"]),
  bR = No.filter((e) => !vR.has(e));
function SR(e) {
  const t = [];
  return (
    bR.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const ea = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Yy(4, 13),
  y: Yy(5, 14),
};
ea.translateX = ea.x;
ea.translateY = ea.y;
const wR = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      a = getComputedStyle(i),
      { display: o } = a,
      s = {};
    o === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        s[u] = ea[u](r, a);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(s[u]), (e[u] = ea[u](l, a));
      }),
      e
    );
  },
  kR = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(IS);
    let a = [],
      o = !1;
    const s = [];
    if (
      (i.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          d = wa(c);
        const f = t[l];
        let h;
        if (Nl(f)) {
          const y = f.length,
            b = f[0] === null ? 1 : 0;
          (c = f[b]), (d = wa(c));
          for (let _ = b; _ < y && f[_] !== null; _++)
            h ? Qm(wa(f[_]) === h) : (h = wa(f[_]));
        } else h = wa(f);
        if (d !== h)
          if (Gy(d) && Gy(h)) {
            const y = u.get();
            typeof y == "string" && u.set(parseFloat(y)),
              typeof f == "string"
                ? (t[l] = parseFloat(f))
                : Array.isArray(f) && h === O && (t[l] = f.map(parseFloat));
          } else
            d?.transform && h?.transform && (c === 0 || f === 0)
              ? c === 0
                ? u.set(h.transform(c))
                : (t[l] = d.transform(f))
              : (o || ((a = SR(e)), (o = !0)),
                s.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(f));
      }),
      s.length)
    ) {
      const l = s.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = wR(t, e, s);
      return (
        a.length &&
          a.forEach(([c, d]) => {
            e.getValue(c).set(d);
          }),
        e.render(),
        Au && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function xR(e, t, n, r) {
  return yR(t) ? kR(e, t, n, r) : { target: t, transitionEnd: r };
}
const _R = (e, t, n, r) => {
    const i = pR(e, t, r);
    return (t = i.target), (r = i.transitionEnd), xR(e, t, n, r);
  },
  vf = { current: null },
  BS = { current: !1 };
function CR() {
  if (((BS.current = !0), !!Au))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (vf.current = e.matches);
      e.addListener(t), t();
    } else vf.current = !1;
}
function TR(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const a = t[i],
      o = n[i];
    if (vt(a)) e.addValue(i, a), Hl(r) && r.add(i);
    else if (vt(o)) e.addValue(i, Zi(a, { owner: e })), Hl(r) && r.remove(i);
    else if (o !== a)
      if (e.hasValue(i)) {
        const s = e.getValue(i);
        !s.hasAnimated && s.set(a);
      } else {
        const s = e.getStaticValue(i);
        e.addValue(i, Zi(s !== void 0 ? s : a, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const Jy = new WeakMap(),
  jS = Object.keys(Eo),
  PR = jS.length,
  qy = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  ER = Vm.length;
class AR {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: a,
    },
    o = {}
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
      (this.scheduleRender = () => me.render(this.render, !1, !0));
    const { latestValues: s, renderState: l } = a;
    (this.latestValues = s),
      (this.baseTarget = { ...s }),
      (this.initialValues = n.initial ? { ...s } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = o),
      (this.isControllingVariants = $u(n)),
      (this.isVariantNode = xb(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && vt(f) && (f.set(s[d], !1), Hl(u) && u.add(d));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      Jy.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      BS.current || CR(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : vf.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Jy.delete(this.current),
      this.projection && this.projection.unmount(),
      Nn(this.notifyUpdate),
      Nn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Zr.has(t),
      i = n.on("change", (o) => {
        (this.latestValues[t] = o),
          this.props.onUpdate && me.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      a = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), a();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, a) {
    let o, s;
    for (let l = 0; l < PR; l++) {
      const u = jS[l],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: f,
          MeasureLayout: h,
        } = Eo[u];
      f && (o = f),
        c(n) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          h && (s = h));
    }
    if (!this.projection && o) {
      this.projection = new o(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: f,
        layoutRoot: h,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (d && Pi(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: a,
        layoutScroll: f,
        layoutRoot: h,
      });
    }
    return s;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Re();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < qy.length; r++) {
      const i = qy[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const a = t["on" + i];
      a && (this.propEventSubscriptions[i] = this.on(i, a));
    }
    (this.prevMotionValues = TR(
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
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < ER; r++) {
      const i = Vm[r],
        a = this.props[i];
      (Po(a) || a === !1) && (n[i] = a);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Zi(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = Xm(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const a = this.getBaseTargetFromProps(this.props, t);
    return a !== void 0 && !vt(a)
      ? a
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new oh()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class NS extends AR {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: i },
    a
  ) {
    let o = Gz(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), o && (o = i(o))), a)) {
      Hz(this, r, o);
      const s = _R(this, r, o, n);
      (n = s.transitionEnd), (r = s.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function MR(e) {
  return window.getComputedStyle(e);
}
class $R extends NS {
  readValueFromInstance(t, n) {
    if (Zr.has(n)) {
      const r = nh(n);
      return (r && r.default) || 0;
    } else {
      const r = MR(t),
        i = (Pb(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return ES(t, n);
  }
  build(t, n, r, i) {
    Um(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return qm(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    vt(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    Rb(t, n, r, i);
  }
}
class zR extends NS {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Zr.has(n)) {
      const r = nh(n);
      return (r && r.default) || 0;
    }
    return (n = Db.has(n) ? n : Jm(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Re();
  }
  scrapeMotionValuesFromProps(t, n) {
    return Lb(t, n);
  }
  build(t, n, r, i) {
    Km(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Fb(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Ym(t.tagName)), super.mount(t);
  }
}
const RR = (e, t) =>
    Hm(e)
      ? new zR(t, { enableHardwareAcceleration: !1 })
      : new $R(t, { enableHardwareAcceleration: !0 }),
  DR = { layout: { ProjectionNode: LS, MeasureLayout: AS } },
  FR = { ...o6, ...T$, ...fR, ...DR },
  LR = FM((e, t) => m$(e, t, FR, RR));
function OS() {
  const e = k.useRef(!1);
  return (
    Nm(
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
function IR() {
  const e = OS(),
    [t, n] = k.useState(0),
    r = k.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [k.useCallback(() => me.postRender(r), [r]), t];
}
class BR extends k.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function jR({ children: e, isPresent: t }) {
  const n = k.useId(),
    r = k.useRef(null),
    i = k.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    k.useInsertionEffect(() => {
      const { width: a, height: o, top: s, left: l } = i.current;
      if (t || !r.current || !a || !o) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${o}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    k.createElement(
      BR,
      { isPresent: t, childRef: r, sizeRef: i },
      k.cloneElement(e, { ref: r })
    )
  );
}
const Qc = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: a,
  mode: o,
}) => {
  const s = Ib(NR),
    l = k.useId(),
    u = k.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (c) => {
          s.set(c, !0);
          for (const d of s.values()) if (!d) return;
          r && r();
        },
        register: (c) => (s.set(c, !1), () => s.delete(c)),
      }),
      a ? void 0 : [n]
    );
  return (
    k.useMemo(() => {
      s.forEach((c, d) => s.set(d, !1));
    }, [n]),
    k.useEffect(() => {
      !n && !s.size && r && r();
    }, [n]),
    o === "popLayout" && (e = k.createElement(jR, { isPresent: n }, e)),
    k.createElement(jo.Provider, { value: u }, e)
  );
};
function NR() {
  return new Map();
}
function OR(e) {
  return k.useEffect(() => () => e(), []);
}
const li = (e) => e.key || "";
function VR(e, t) {
  e.forEach((n) => {
    const r = li(n);
    t.set(r, n);
  });
}
function WR(e) {
  const t = [];
  return (
    k.Children.forEach(e, (n) => {
      k.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const HR = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: i,
  presenceAffectsLayout: a = !0,
  mode: o = "sync",
}) => {
  const s = k.useContext(Wm).forceRender || IR()[0],
    l = OS(),
    u = WR(e);
  let c = u;
  const d = k.useRef(new Map()).current,
    f = k.useRef(c),
    h = k.useRef(new Map()).current,
    y = k.useRef(!0);
  if (
    (Nm(() => {
      (y.current = !1), VR(u, h), (f.current = c);
    }),
    OR(() => {
      (y.current = !0), h.clear(), d.clear();
    }),
    y.current)
  )
    return k.createElement(
      k.Fragment,
      null,
      c.map((m) =>
        k.createElement(
          Qc,
          {
            key: li(m),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: a,
            mode: o,
          },
          m
        )
      )
    );
  c = [...c];
  const b = f.current.map(li),
    _ = u.map(li),
    g = b.length;
  for (let m = 0; m < g; m++) {
    const p = b[m];
    _.indexOf(p) === -1 && !d.has(p) && d.set(p, void 0);
  }
  return (
    o === "wait" && d.size && (c = []),
    d.forEach((m, p) => {
      if (_.indexOf(p) !== -1) return;
      const x = h.get(p);
      if (!x) return;
      const P = b.indexOf(p);
      let M = m;
      if (!M) {
        const T = () => {
          h.delete(p), d.delete(p);
          const A = f.current.findIndex((F) => F.key === p);
          if ((f.current.splice(A, 1), !d.size)) {
            if (((f.current = u), l.current === !1)) return;
            s(), r && r();
          }
        };
        (M = k.createElement(
          Qc,
          {
            key: li(x),
            isPresent: !1,
            onExitComplete: T,
            custom: t,
            presenceAffectsLayout: a,
            mode: o,
          },
          x
        )),
          d.set(p, M);
      }
      c.splice(P, 0, M);
    }),
    (c = c.map((m) => {
      const p = m.key;
      return d.has(p)
        ? m
        : k.createElement(
            Qc,
            { key: li(m), isPresent: !0, presenceAffectsLayout: a, mode: o },
            m
          );
    })),
    k.createElement(
      k.Fragment,
      null,
      d.size ? c : c.map((m) => k.cloneElement(m))
    )
  );
};
var UR = {
    initial: (e) => {
      const { position: t } = e,
        n = ["top", "bottom"].includes(t) ? "y" : "x";
      let r = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
      return t === "bottom" && (r = 1), { opacity: 0, [n]: r * 24 };
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
  VS = k.memo((e) => {
    const {
        id: t,
        message: n,
        onCloseComplete: r,
        onRequestRemove: i,
        requestClose: a = !1,
        position: o = "bottom",
        duration: s = 5e3,
        containerStyle: l,
        motionVariants: u = UR,
        toastSpacing: c = "0.5rem",
      } = e,
      [d, f] = k.useState(s),
      h = A6();
    af(() => {
      h || r?.();
    }, [h]),
      af(() => {
        f(s);
      }, [s]);
    const y = () => f(null),
      b = () => f(s),
      _ = () => {
        h && i();
      };
    k.useEffect(() => {
      h && a && i();
    }, [h, a, i]),
      TM(_, d);
    const g = k.useMemo(
        () => ({
          pointerEvents: "auto",
          maxWidth: 560,
          minWidth: 300,
          margin: c,
          ...l,
        }),
        [l, c]
      ),
      m = k.useMemo(() => _M(o), [o]);
    return E(LR.div, {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: y,
      onHoverEnd: b,
      custom: { position: o },
      style: m,
      children: E(Y.div, {
        role: "status",
        "aria-atomic": "true",
        className: "chakra-toast__inner",
        __css: g,
        children: ir(n, { id: t, onClose: _ }),
      }),
    });
  });
VS.displayName = "ToastComponent";
var Xy = {
    path: Ve("g", {
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
  aa = ce((e, t) => {
    const {
        as: n,
        viewBox: r,
        color: i = "currentColor",
        focusable: a = !1,
        children: o,
        className: s,
        __css: l,
        ...u
      } = e,
      c = Ue("chakra-icon", s),
      d = Qr("Icon", e),
      f = {
        w: "1em",
        h: "1em",
        display: "inline-block",
        lineHeight: "1em",
        flexShrink: 0,
        color: i,
        ...l,
        ...d,
      },
      h = { ref: t, focusable: a, className: c, __css: f },
      y = r ?? Xy.viewBox;
    if (n && typeof n != "string") return E(Y.svg, { as: n, ...h, ...u });
    const b = o ?? Xy.path;
    return E(Y.svg, {
      verticalAlign: "middle",
      viewBox: y,
      ...h,
      ...u,
      children: b,
    });
  });
aa.displayName = "Icon";
function GR(e) {
  return E(aa, {
    viewBox: "0 0 24 24",
    ...e,
    children: E("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
    }),
  });
}
function KR(e) {
  return E(aa, {
    viewBox: "0 0 24 24",
    ...e,
    children: E("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z",
    }),
  });
}
function Qy(e) {
  return E(aa, {
    viewBox: "0 0 24 24",
    ...e,
    children: E("path", {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
    }),
  });
}
var YR = L_({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  }),
  sh = ce((e, t) => {
    const n = Qr("Spinner", e),
      {
        label: r = "Loading...",
        thickness: i = "2px",
        speed: a = "0.45s",
        emptyColor: o = "transparent",
        className: s,
        ...l
      } = nn(e),
      u = Ue("chakra-spinner", s),
      c = {
        display: "inline-block",
        borderColor: "currentColor",
        borderStyle: "solid",
        borderRadius: "99999px",
        borderWidth: i,
        borderBottomColor: o,
        borderLeftColor: o,
        animation: `${YR} ${a} linear infinite`,
        ...n,
      };
    return E(Y.div, {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: r && E(Y.span, { srOnly: !0, children: r }),
    });
  });
sh.displayName = "Spinner";
var [JR, lh] = Wn({
    name: "AlertContext",
    hookName: "useAlertContext",
    providerName: "<Alert />",
  }),
  [qR, uh] = Wn({
    name: "AlertStylesContext",
    hookName: "useAlertStyles",
    providerName: "<Alert />",
  }),
  WS = {
    info: { icon: KR, colorScheme: "blue" },
    warning: { icon: Qy, colorScheme: "orange" },
    success: { icon: GR, colorScheme: "green" },
    error: { icon: Qy, colorScheme: "red" },
    loading: { icon: sh, colorScheme: "blue" },
  };
function XR(e) {
  return WS[e].colorScheme;
}
function QR(e) {
  return WS[e].icon;
}
var HS = ce(function (t, n) {
  const r = uh(),
    { status: i } = lh(),
    a = { display: "inline", ...r.description };
  return E(Y.div, {
    ref: n,
    "data-status": i,
    ...t,
    className: Ue("chakra-alert__desc", t.className),
    __css: a,
  });
});
HS.displayName = "AlertDescription";
function US(e) {
  const { status: t } = lh(),
    n = QR(t),
    r = uh(),
    i = t === "loading" ? r.spinner : r.icon;
  return E(Y.span, {
    display: "inherit",
    "data-status": t,
    ...e,
    className: Ue("chakra-alert__icon", e.className),
    __css: i,
    children: e.children || E(n, { h: "100%", w: "100%" }),
  });
}
US.displayName = "AlertIcon";
var GS = ce(function (t, n) {
  const r = uh(),
    { status: i } = lh();
  return E(Y.div, {
    ref: n,
    "data-status": i,
    ...t,
    className: Ue("chakra-alert__title", t.className),
    __css: r.title,
  });
});
GS.displayName = "AlertTitle";
var KS = ce(function (t, n) {
  var r;
  const { status: i = "info", addRole: a = !0, ...o } = nn(t),
    s = (r = t.colorScheme) != null ? r : XR(i),
    l = Bo("Alert", { ...t, colorScheme: s }),
    u = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      ...l.container,
    };
  return E(JR, {
    value: { status: i },
    children: E(qR, {
      value: l,
      children: E(Y.div, {
        "data-status": i,
        role: a ? "alert" : void 0,
        ref: n,
        ...o,
        className: Ue("chakra-alert", t.className),
        __css: u,
      }),
    }),
  });
});
KS.displayName = "Alert";
function ZR(e) {
  return E(aa, {
    focusable: "false",
    "aria-hidden": !0,
    ...e,
    children: E("path", {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
    }),
  });
}
var YS = ce(function (t, n) {
  const r = Qr("CloseButton", t),
    { children: i, isDisabled: a, __css: o, ...s } = nn(t),
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
    ref: n,
    disabled: a,
    __css: { ...l, ...r, ...o },
    ...s,
    children: i || E(ZR, { width: "1em", height: "1em" }),
  });
});
YS.displayName = "CloseButton";
var eD = {
    top: [],
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    bottom: [],
    "bottom-right": [],
  },
  Za = tD(eD);
function tD(e) {
  let t = e;
  const n = new Set(),
    r = (i) => {
      (t = i(t)), n.forEach((a) => a());
    };
  return {
    getState: () => t,
    subscribe: (i) => (
      n.add(i),
      () => {
        r(() => e), n.delete(i);
      }
    ),
    removeToast: (i, a) => {
      r((o) => ({ ...o, [a]: o[a].filter((s) => s.id != i) }));
    },
    notify: (i, a) => {
      const o = nD(i, a),
        { position: s, id: l } = o;
      return (
        r((u) => {
          var c, d;
          const h = s.includes("top")
            ? [o, ...((c = u[s]) != null ? c : [])]
            : [...((d = u[s]) != null ? d : []), o];
          return { ...u, [s]: h };
        }),
        l
      );
    },
    update: (i, a) => {
      i &&
        r((o) => {
          const s = { ...o },
            { position: l, index: u } = Gg(s, i);
          return (
            l && u !== -1 && (s[l][u] = { ...s[l][u], ...a, message: iD(a) }), s
          );
        });
    },
    closeAll: ({ positions: i } = {}) => {
      r((a) =>
        (
          i ?? [
            "bottom",
            "bottom-right",
            "bottom-left",
            "top",
            "top-left",
            "top-right",
          ]
        ).reduce(
          (l, u) => ((l[u] = a[u].map((c) => ({ ...c, requestClose: !0 }))), l),
          { ...a }
        )
      );
    },
    close: (i) => {
      r((a) => {
        const o = Sb(a, i);
        return o
          ? {
              ...a,
              [o]: a[o].map((s) =>
                s.id == i ? { ...s, requestClose: !0 } : s
              ),
            }
          : a;
      });
    },
    isActive: (i) => !!Gg(Za.getState(), i).position,
  };
}
var Zy = 0;
function nD(e, t = {}) {
  var n, r;
  Zy += 1;
  const i = (n = t.id) != null ? n : Zy,
    a = (r = t.position) != null ? r : "bottom";
  return {
    id: i,
    message: e,
    position: a,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Za.removeToast(String(i), a),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle,
  };
}
var rD = (e) => {
  const {
      status: t,
      variant: n = "solid",
      id: r,
      title: i,
      isClosable: a,
      onClose: o,
      description: s,
      colorScheme: l,
      icon: u,
    } = e,
    c = r
      ? {
          root: `toast-${r}`,
          title: `toast-${r}-title`,
          description: `toast-${r}-description`,
        }
      : void 0;
  return Ve(KS, {
    addRole: !1,
    status: t,
    variant: n,
    id: c?.root,
    alignItems: "start",
    borderRadius: "md",
    boxShadow: "lg",
    paddingEnd: 8,
    textAlign: "start",
    width: "auto",
    colorScheme: l,
    children: [
      E(US, { children: u }),
      Ve(Y.div, {
        flex: "1",
        maxWidth: "100%",
        children: [
          i && E(GS, { id: c?.title, children: i }),
          s && E(HS, { id: c?.description, display: "block", children: s }),
        ],
      }),
      a &&
        E(YS, {
          size: "sm",
          onClick: o,
          position: "absolute",
          insetEnd: 1,
          top: 1,
        }),
    ],
  });
};
function iD(e = {}) {
  const { render: t, toastComponent: n = rD } = e;
  return (i) =>
    typeof t == "function" ? t({ ...i, ...e }) : E(n, { ...i, ...e });
}
var [aD, f8] = Wn({ name: "ToastOptionsContext", strict: !1 }),
  oD = (e) => {
    const t = k.useSyncExternalStore(Za.subscribe, Za.getState, Za.getState),
      { motionVariants: n, component: r = VS, portalProps: i } = e,
      o = Object.keys(t).map((s) => {
        const l = t[s];
        return E(
          "div",
          {
            role: "region",
            "aria-live": "polite",
            "aria-label": "Notifications",
            id: `chakra-toast-manager-${s}`,
            style: CM(s),
            children: E(HR, {
              initial: !1,
              children: l.map((u) => E(r, { motionVariants: n, ...u }, u.id)),
            }),
          },
          s
        );
      });
    return E(ku, { ...i, children: o });
  },
  sD = (e) =>
    function ({ children: n, theme: r = e, toastOptions: i, ...a }) {
      return Ve(kM, {
        theme: r,
        ...a,
        children: [
          E(aD, { value: i?.defaultOptions, children: n }),
          E(oD, { ...i }),
        ],
      });
    },
  lD = sD(cb);
function uD(e, t) {
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
function Mo(...e) {
  return (t) => {
    e.forEach((n) => {
      uD(n, t);
    });
  };
}
function cD(...e) {
  return k.useMemo(() => Mo(...e), e);
}
var bf = ce(function (t, n) {
  const { htmlWidth: r, htmlHeight: i, alt: a, ...o } = t;
  return E("img", { width: r, height: i, ref: n, alt: a, ...o });
});
bf.displayName = "NativeImage";
function dD(e) {
  const {
      loading: t,
      src: n,
      srcSet: r,
      onLoad: i,
      onError: a,
      crossOrigin: o,
      sizes: s,
      ignoreFallback: l,
    } = e,
    [u, c] = k.useState("pending");
  k.useEffect(() => {
    c(n ? "loading" : "pending");
  }, [n]);
  const d = k.useRef(),
    f = k.useCallback(() => {
      if (!n) return;
      h();
      const y = new Image();
      (y.src = n),
        o && (y.crossOrigin = o),
        r && (y.srcset = r),
        s && (y.sizes = s),
        t && (y.loading = t),
        (y.onload = (b) => {
          h(), c("loaded"), i?.(b);
        }),
        (y.onerror = (b) => {
          h(), c("failed"), a?.(b);
        }),
        (d.current = y);
    }, [n, o, r, s, i, a, t]),
    h = () => {
      d.current &&
        ((d.current.onload = null),
        (d.current.onerror = null),
        (d.current = null));
    };
  return (
    $n(() => {
      if (!l)
        return (
          u === "loading" && f(),
          () => {
            h();
          }
        );
    }, [u, f, l]),
    l ? "loaded" : u
  );
}
var fD = (e, t) =>
  (e !== "loaded" && t === "beforeLoadOrError") ||
  (e === "failed" && t === "onError");
function mD(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
var ch = ce(function (t, n) {
  const {
      fallbackSrc: r,
      fallback: i,
      src: a,
      srcSet: o,
      align: s,
      fit: l,
      loading: u,
      ignoreFallback: c,
      crossOrigin: d,
      fallbackStrategy: f = "beforeLoadOrError",
      referrerPolicy: h,
      ...y
    } = t,
    b = r !== void 0 || i !== void 0,
    _ = u != null || c || !b,
    g = dD({ ...t, crossOrigin: d, ignoreFallback: _ }),
    m = fD(g, f),
    p = {
      ref: n,
      objectFit: l,
      objectPosition: s,
      ...(_ ? y : mD(y, ["onError", "onLoad"])),
    };
  return m
    ? i ||
        E(Y.img, {
          as: bf,
          className: "chakra-image__placeholder",
          src: r,
          ...p,
        })
    : E(Y.img, {
        as: bf,
        src: a,
        srcSet: o,
        crossOrigin: d,
        loading: u,
        referrerPolicy: h,
        className: "chakra-image",
        ...p,
      });
});
ch.displayName = "Image";
function JS(e) {
  return k.Children.toArray(e).filter((t) => k.isValidElement(t));
}
var [m8, hD] = Wn({ strict: !1, name: "ButtonGroupContext" });
function pD(e) {
  const [t, n] = k.useState(!e);
  return {
    ref: k.useCallback((a) => {
      a && n(a.tagName === "BUTTON");
    }, []),
    type: t ? "button" : void 0,
  };
}
function Sf(e) {
  const { children: t, className: n, ...r } = e,
    i = k.isValidElement(t)
      ? k.cloneElement(t, { "aria-hidden": !0, focusable: !1 })
      : t,
    a = Ue("chakra-button__icon", n);
  return E(Y.span, {
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
    ...r,
    className: a,
    children: i,
  });
}
Sf.displayName = "ButtonIcon";
function wf(e) {
  const {
      label: t,
      placement: n,
      spacing: r = "0.5rem",
      children: i = E(sh, {
        color: "currentColor",
        width: "1em",
        height: "1em",
      }),
      className: a,
      __css: o,
      ...s
    } = e,
    l = Ue("chakra-button__spinner", a),
    u = n === "start" ? "marginEnd" : "marginStart",
    c = k.useMemo(
      () => ({
        display: "flex",
        alignItems: "center",
        position: t ? "relative" : "absolute",
        [u]: t ? r : 0,
        fontSize: "1em",
        lineHeight: "normal",
        ...o,
      }),
      [o, t, u, r]
    );
  return E(Y.div, { className: l, ...s, __css: c, children: i });
}
wf.displayName = "ButtonSpinner";
var qS = ce((e, t) => {
  const n = hD(),
    r = Qr("Button", { ...n, ...e }),
    {
      isDisabled: i = n?.isDisabled,
      isLoading: a,
      isActive: o,
      children: s,
      leftIcon: l,
      rightIcon: u,
      loadingText: c,
      iconSpacing: d = "0.5rem",
      type: f,
      spinner: h,
      spinnerPlacement: y = "start",
      className: b,
      as: _,
      ...g
    } = nn(e),
    m = k.useMemo(() => {
      const M = { ...r?._focus, zIndex: 1 };
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
        ...r,
        ...(!!n && { _focus: M }),
      };
    }, [r, n]),
    { ref: p, type: x } = pD(_),
    P = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return Ve(Y.button, {
    ref: cD(t, p),
    as: _,
    type: f ?? x,
    "data-active": ne(o),
    "data-loading": ne(a),
    __css: m,
    className: Ue("chakra-button", b),
    ...g,
    disabled: i || a,
    children: [
      a &&
        y === "start" &&
        E(wf, {
          className: "chakra-button__spinner--start",
          label: c,
          placement: "start",
          spacing: d,
          children: h,
        }),
      a
        ? c || E(Y.span, { opacity: 0, children: E(e0, { ...P }) })
        : E(e0, { ...P }),
      a &&
        y === "end" &&
        E(wf, {
          className: "chakra-button__spinner--end",
          label: c,
          placement: "end",
          spacing: d,
          children: h,
        }),
    ],
  });
});
qS.displayName = "Button";
function e0(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: i } = e;
  return Ve(eo, {
    children: [
      t && E(Sf, { marginEnd: i, children: t }),
      r,
      n && E(Sf, { marginStart: i, children: n }),
    ],
  });
}
var [gD, yD] = bM("Card"),
  vD = ce(function (t, n) {
    const { className: r, ...i } = t,
      a = yD();
    return E(Y.div, {
      ref: n,
      className: Ue("chakra-card__body", r),
      __css: a.body,
      ...i,
    });
  }),
  bD = ce(function (t, n) {
    const {
        className: r,
        children: i,
        direction: a = "column",
        justify: o,
        align: s,
        ...l
      } = nn(t),
      u = Bo("Card", t);
    return E(Y.div, {
      ref: n,
      className: Ue("chakra-card", r),
      __css: {
        display: "flex",
        flexDirection: a,
        justifyContent: o,
        alignItems: s,
        position: "relative",
        minWidth: 0,
        wordWrap: "break-word",
        ...u.container,
      },
      ...l,
      children: E(gD, { value: u, children: i }),
    });
  }),
  [SD, wD] = Wn({
    name: "FormControlStylesContext",
    errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `,
  }),
  [kD, XS] = Wn({ strict: !1, name: "FormControlContext" });
function xD(e) {
  const {
      id: t,
      isRequired: n,
      isInvalid: r,
      isDisabled: i,
      isReadOnly: a,
      ...o
    } = e,
    s = k.useId(),
    l = t || `field-${s}`,
    u = `${l}-label`,
    c = `${l}-feedback`,
    d = `${l}-helptext`,
    [f, h] = k.useState(!1),
    [y, b] = k.useState(!1),
    [_, g] = k.useState(!1),
    m = k.useCallback(
      (T = {}, A = null) => ({
        id: d,
        ...T,
        ref: Mo(A, (F) => {
          F && b(!0);
        }),
      }),
      [d]
    ),
    p = k.useCallback(
      (T = {}, A = null) => ({
        ...T,
        ref: A,
        "data-focus": ne(_),
        "data-disabled": ne(i),
        "data-invalid": ne(r),
        "data-readonly": ne(a),
        id: T.id !== void 0 ? T.id : u,
        htmlFor: T.htmlFor !== void 0 ? T.htmlFor : l,
      }),
      [l, i, _, r, a, u]
    ),
    x = k.useCallback(
      (T = {}, A = null) => ({
        id: c,
        ...T,
        ref: Mo(A, (F) => {
          F && h(!0);
        }),
        "aria-live": "polite",
      }),
      [c]
    ),
    P = k.useCallback(
      (T = {}, A = null) => ({ ...T, ...o, ref: A, role: "group" }),
      [o]
    ),
    M = k.useCallback(
      (T = {}, A = null) => ({
        ...T,
        ref: A,
        role: "presentation",
        "aria-hidden": !0,
        children: T.children || "*",
      }),
      []
    );
  return {
    isRequired: !!n,
    isInvalid: !!r,
    isReadOnly: !!a,
    isDisabled: !!i,
    isFocused: !!_,
    onFocus: () => g(!0),
    onBlur: () => g(!1),
    hasFeedbackText: f,
    setHasFeedbackText: h,
    hasHelpText: y,
    setHasHelpText: b,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: o,
    getHelpTextProps: m,
    getErrorMessageProps: x,
    getRootProps: P,
    getLabelProps: p,
    getRequiredIndicatorProps: M,
  };
}
var _D = ce(function (t, n) {
  const r = Bo("Form", t),
    i = nn(t),
    { getRootProps: a, htmlProps: o, ...s } = xD(i),
    l = Ue("chakra-form-control", t.className);
  return E(kD, {
    value: s,
    children: E(SD, {
      value: r,
      children: E(Y.div, { ...a({}, n), className: l, __css: r.container }),
    }),
  });
});
_D.displayName = "FormControl";
var CD = ce(function (t, n) {
  const r = XS(),
    i = wD(),
    a = Ue("chakra-form__helper-text", t.className);
  return E(Y.div, {
    ...r?.getHelpTextProps(t, n),
    __css: i.helperText,
    className: a,
  });
});
CD.displayName = "FormHelperText";
function TD(e) {
  var t, n, r;
  const i = XS(),
    {
      id: a,
      disabled: o,
      readOnly: s,
      required: l,
      isRequired: u,
      isInvalid: c,
      isReadOnly: d,
      isDisabled: f,
      onFocus: h,
      onBlur: y,
      ...b
    } = e,
    _ = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return (
    i?.hasFeedbackText && i?.isInvalid && _.push(i.feedbackId),
    i?.hasHelpText && _.push(i.helpTextId),
    {
      ...b,
      "aria-describedby": _.join(" ") || void 0,
      id: a ?? i?.id,
      isDisabled: (t = o ?? f) != null ? t : i?.isDisabled,
      isReadOnly: (n = s ?? d) != null ? n : i?.isReadOnly,
      isRequired: (r = l ?? u) != null ? r : i?.isRequired,
      isInvalid: c ?? i?.isInvalid,
      onFocus: wt(i?.onFocus, h),
      onBlur: wt(i?.onBlur, y),
    }
  );
}
var PD = {
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
  ED = () => typeof document < "u",
  t0 = !1,
  Ho = null,
  Jr = !1,
  kf = !1,
  xf = new Set();
function dh(e, t) {
  xf.forEach((n) => n(e, t));
}
var AD =
  typeof window < "u" && window.navigator != null
    ? /^Mac/.test(window.navigator.platform)
    : !1;
function MD(e) {
  return !(
    e.metaKey ||
    (!AD && e.altKey) ||
    e.ctrlKey ||
    e.key === "Control" ||
    e.key === "Shift" ||
    e.key === "Meta"
  );
}
function n0(e) {
  (Jr = !0), MD(e) && ((Ho = "keyboard"), dh("keyboard", e));
}
function si(e) {
  if (((Ho = "pointer"), e.type === "mousedown" || e.type === "pointerdown")) {
    Jr = !0;
    const t = e.composedPath ? e.composedPath()[0] : e.target;
    let n = !1;
    try {
      n = t.matches(":focus-visible");
    } catch {}
    if (n) return;
    dh("pointer", e);
  }
}
function $D(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : e.detail === 0 && !e.pointerType;
}
function zD(e) {
  $D(e) && ((Jr = !0), (Ho = "virtual"));
}
function RD(e) {
  e.target === window ||
    e.target === document ||
    (!Jr && !kf && ((Ho = "virtual"), dh("virtual", e)), (Jr = !1), (kf = !1));
}
function DD() {
  (Jr = !1), (kf = !0);
}
function r0() {
  return Ho !== "pointer";
}
function FD() {
  if (!ED() || t0) return;
  const { focus: e } = HTMLElement.prototype;
  (HTMLElement.prototype.focus = function (...n) {
    (Jr = !0), e.apply(this, n);
  }),
    document.addEventListener("keydown", n0, !0),
    document.addEventListener("keyup", n0, !0),
    document.addEventListener("click", zD, !0),
    window.addEventListener("focus", RD, !0),
    window.addEventListener("blur", DD, !1),
    typeof PointerEvent < "u"
      ? (document.addEventListener("pointerdown", si, !0),
        document.addEventListener("pointermove", si, !0),
        document.addEventListener("pointerup", si, !0))
      : (document.addEventListener("mousedown", si, !0),
        document.addEventListener("mousemove", si, !0),
        document.addEventListener("mouseup", si, !0)),
    (t0 = !0);
}
function LD(e) {
  FD(), e(r0());
  const t = () => e(r0());
  return (
    xf.add(t),
    () => {
      xf.delete(t);
    }
  );
}
function ID(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
function BD(e = {}) {
  const t = TD(e),
    {
      isDisabled: n,
      isReadOnly: r,
      isRequired: i,
      isInvalid: a,
      id: o,
      onBlur: s,
      onFocus: l,
      "aria-describedby": u,
    } = t,
    {
      defaultChecked: c,
      isChecked: d,
      isFocusable: f,
      onChange: h,
      isIndeterminate: y,
      name: b,
      value: _,
      tabIndex: g = void 0,
      "aria-label": m,
      "aria-labelledby": p,
      "aria-invalid": x,
      ...P
    } = e,
    M = ID(P, [
      "isDisabled",
      "isReadOnly",
      "isRequired",
      "isInvalid",
      "id",
      "onBlur",
      "onFocus",
      "aria-describedby",
    ]),
    T = nl(h),
    A = nl(s),
    F = nl(l),
    [L, le] = k.useState(!1),
    [pe, Ae] = k.useState(!1),
    [ie, de] = k.useState(!1),
    [ze, Le] = k.useState(!1);
  k.useEffect(() => LD(le), []);
  const z = k.useRef(null),
    [j, V] = k.useState(!0),
    [N, X] = k.useState(!!c),
    W = d !== void 0,
    se = W ? d : N,
    Gt = k.useCallback(
      (H) => {
        if (r || n) {
          H.preventDefault();
          return;
        }
        W || X(se ? H.target.checked : y ? !0 : H.target.checked), T?.(H);
      },
      [r, n, se, W, y, T]
    );
  $n(() => {
    z.current && (z.current.indeterminate = !!y);
  }, [y]),
    af(() => {
      n && Ae(!1);
    }, [n, Ae]),
    $n(() => {
      const H = z.current;
      if (!H?.form) return;
      const ct = () => {
        X(!!c);
      };
      return (
        H.form.addEventListener("reset", ct),
        () => {
          var Rt;
          return (Rt = H.form) == null
            ? void 0
            : Rt.removeEventListener("reset", ct);
        }
      );
    }, []);
  const Te = n && !f,
    bt = k.useCallback(
      (H) => {
        H.key === " " && Le(!0);
      },
      [Le]
    ),
    rn = k.useCallback(
      (H) => {
        H.key === " " && Le(!1);
      },
      [Le]
    );
  $n(() => {
    if (!z.current) return;
    z.current.checked !== se && X(z.current.checked);
  }, [z.current]);
  const Hn = k.useCallback(
      (H = {}, ct = null) => {
        const Rt = (ni) => {
          pe && ni.preventDefault(), Le(!0);
        };
        return {
          ...H,
          ref: ct,
          "data-active": ne(ze),
          "data-hover": ne(ie),
          "data-checked": ne(se),
          "data-focus": ne(pe),
          "data-focus-visible": ne(pe && L),
          "data-indeterminate": ne(y),
          "data-disabled": ne(n),
          "data-invalid": ne(a),
          "data-readonly": ne(r),
          "aria-hidden": !0,
          onMouseDown: wt(H.onMouseDown, Rt),
          onMouseUp: wt(H.onMouseUp, () => Le(!1)),
          onMouseEnter: wt(H.onMouseEnter, () => de(!0)),
          onMouseLeave: wt(H.onMouseLeave, () => de(!1)),
        };
      },
      [ze, se, n, pe, L, ie, y, a, r]
    ),
    an = k.useCallback(
      (H = {}, ct = null) => ({
        ...H,
        ref: ct,
        "data-active": ne(ze),
        "data-hover": ne(ie),
        "data-checked": ne(se),
        "data-focus": ne(pe),
        "data-focus-visible": ne(pe && L),
        "data-indeterminate": ne(y),
        "data-disabled": ne(n),
        "data-invalid": ne(a),
        "data-readonly": ne(r),
      }),
      [ze, se, n, pe, L, ie, y, a, r]
    ),
    zt = k.useCallback(
      (H = {}, ct = null) => ({
        ...M,
        ...H,
        ref: Mo(ct, (Rt) => {
          Rt && V(Rt.tagName === "LABEL");
        }),
        onClick: wt(H.onClick, () => {
          var Rt;
          j ||
            ((Rt = z.current) == null || Rt.click(),
            requestAnimationFrame(() => {
              var ni;
              (ni = z.current) == null || ni.focus({ preventScroll: !0 });
            }));
        }),
        "data-disabled": ne(n),
        "data-checked": ne(se),
        "data-invalid": ne(a),
      }),
      [M, n, se, a, j]
    ),
    xr = k.useCallback(
      (H = {}, ct = null) => ({
        ...H,
        ref: Mo(z, ct),
        type: "checkbox",
        name: b,
        value: _,
        id: o,
        tabIndex: g,
        onChange: wt(H.onChange, Gt),
        onBlur: wt(H.onBlur, A, () => Ae(!1)),
        onFocus: wt(H.onFocus, F, () => Ae(!0)),
        onKeyDown: wt(H.onKeyDown, bt),
        onKeyUp: wt(H.onKeyUp, rn),
        required: i,
        checked: se,
        disabled: Te,
        readOnly: r,
        "aria-label": m,
        "aria-labelledby": p,
        "aria-invalid": x ? !!x : a,
        "aria-describedby": u,
        "aria-disabled": n,
        style: PD,
      }),
      [b, _, o, Gt, A, F, bt, rn, i, se, Te, r, m, p, x, a, u, n, g]
    ),
    ti = k.useCallback(
      (H = {}, ct = null) => ({
        ...H,
        ref: ct,
        onMouseDown: wt(H.onMouseDown, jD),
        "data-disabled": ne(n),
        "data-checked": ne(se),
        "data-invalid": ne(a),
      }),
      [se, n, a]
    );
  return {
    state: {
      isInvalid: a,
      isFocused: pe,
      isChecked: se,
      isActive: ze,
      isHovered: ie,
      isIndeterminate: y,
      isDisabled: n,
      isReadOnly: r,
      isRequired: i,
    },
    getRootProps: zt,
    getCheckboxProps: Hn,
    getIndicatorProps: an,
    getInputProps: xr,
    getLabelProps: ti,
    htmlProps: M,
  };
}
function jD(e) {
  e.preventDefault(), e.stopPropagation();
}
var QS = ce(function (t, n) {
  const r = Qr("Link", t),
    { className: i, isExternal: a, ...o } = nn(t);
  return E(Y.a, {
    target: a ? "_blank" : void 0,
    rel: a ? "noopener" : void 0,
    ref: n,
    className: Ue("chakra-link", i),
    ...o,
    __css: r,
  });
});
QS.displayName = "Link";
var [ND, ZS] = Wn({
    name: "ListStylesContext",
    errorMessage: `useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `,
  }),
  Fu = ce(function (t, n) {
    const r = Bo("List", t),
      {
        children: i,
        styleType: a = "none",
        stylePosition: o,
        spacing: s,
        ...l
      } = nn(t),
      u = JS(i),
      d = s ? { ["& > *:not(style) ~ *:not(style)"]: { mt: s } } : {};
    return E(ND, {
      value: r,
      children: E(Y.ul, {
        ref: n,
        listStyleType: a,
        listStylePosition: o,
        role: "list",
        __css: { ...r.container, ...d },
        ...l,
        children: u,
      }),
    });
  });
Fu.displayName = "List";
var OD = ce((e, t) => {
  const { as: n, ...r } = e;
  return E(Fu, {
    ref: t,
    as: "ol",
    styleType: "decimal",
    marginStart: "1em",
    ...r,
  });
});
OD.displayName = "OrderedList";
var VD = ce(function (t, n) {
  const { as: r, ...i } = t;
  return E(Fu, {
    ref: n,
    as: "ul",
    styleType: "initial",
    marginStart: "1em",
    ...i,
  });
});
VD.displayName = "UnorderedList";
var ew = ce(function (t, n) {
  const r = ZS();
  return E(Y.li, { ref: n, ...t, __css: r.item });
});
ew.displayName = "ListItem";
var WD = ce(function (t, n) {
  const r = ZS();
  return E(aa, { ref: n, role: "presentation", ...t, __css: r.icon });
});
WD.displayName = "ListIcon";
var fh = ce(function (t, n) {
  const {
      templateAreas: r,
      gap: i,
      rowGap: a,
      columnGap: o,
      column: s,
      row: l,
      autoFlow: u,
      autoRows: c,
      templateRows: d,
      autoColumns: f,
      templateColumns: h,
      ...y
    } = t,
    b = {
      display: "grid",
      gridTemplateAreas: r,
      gridGap: i,
      gridRowGap: a,
      gridColumnGap: o,
      gridAutoColumns: f,
      gridColumn: s,
      gridRow: l,
      gridAutoFlow: u,
      gridAutoRows: c,
      gridTemplateRows: d,
      gridTemplateColumns: h,
    };
  return E(Y.div, { ref: n, __css: b, ...y });
});
fh.displayName = "Grid";
function Lu(e, t) {
  return Array.isArray(e)
    ? e.map((n) => (n === null ? null : t(n)))
    : Wt(e)
    ? Object.keys(e).reduce((n, r) => ((n[r] = t(e[r])), n), {})
    : e != null
    ? t(e)
    : null;
}
var mh = ce(function (t, n) {
  const {
      columns: r,
      spacingX: i,
      spacingY: a,
      spacing: o,
      minChildWidth: s,
      ...l
    } = t,
    u = Am(),
    c = s ? UD(s, u) : GD(r);
  return E(fh, {
    ref: n,
    gap: o,
    columnGap: i,
    rowGap: a,
    templateColumns: c,
    ...l,
  });
});
mh.displayName = "SimpleGrid";
function HD(e) {
  return typeof e == "number" ? `${e}px` : e;
}
function UD(e, t) {
  return Lu(e, (n) => {
    const r = iC("sizes", n, HD(n))(t);
    return n === null ? null : `repeat(auto-fit, minmax(${r}, 1fr))`;
  });
}
function GD(e) {
  return Lu(e, (t) => (t === null ? null : `repeat(${t}, minmax(0, 1fr))`));
}
var tw = ce(function (t, n) {
  const r = Qr("Text", t),
    { className: i, align: a, decoration: o, casing: s, ...l } = nn(t),
    u = yb({
      textAlign: t.align,
      textDecoration: t.decoration,
      textTransform: t.casing,
    });
  return E(Y.p, {
    ref: n,
    className: Ue("chakra-text", t.className),
    ...u,
    ...l,
    __css: r,
  });
});
tw.displayName = "Text";
var nw = (e) =>
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
nw.displayName = "StackItem";
function KD(e) {
  const { spacing: t, direction: n } = e,
    r = {
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
  return { "&": Lu(n, (i) => r[i]) };
}
var rw = ce((e, t) => {
  const {
      isInline: n,
      direction: r,
      align: i,
      justify: a,
      spacing: o = "0.5rem",
      wrap: s,
      children: l,
      divider: u,
      className: c,
      shouldWrapChildren: d,
      ...f
    } = e,
    h = n ? "row" : r ?? "column",
    y = k.useMemo(() => KD({ spacing: o, direction: h }), [o, h]),
    b = !!u,
    _ = !d && !b,
    g = k.useMemo(() => {
      const p = JS(l);
      return _
        ? p
        : p.map((x, P) => {
            const M = typeof x.key < "u" ? x.key : P,
              T = P + 1 === p.length,
              F = d ? E(nw, { children: x }, M) : x;
            if (!b) return F;
            const L = k.cloneElement(u, { __css: y }),
              le = T ? null : L;
            return Ve(k.Fragment, { children: [F, le] }, M);
          });
    }, [u, y, b, _, d, l]),
    m = Ue("chakra-stack", c);
  return E(Y.div, {
    ref: t,
    display: "flex",
    alignItems: i,
    justifyContent: a,
    flexDirection: h,
    flexWrap: s,
    gap: b ? void 0 : o,
    className: m,
    ...f,
    children: g,
  });
});
rw.displayName = "Stack";
var Iu = ce((e, t) =>
  E(rw, { align: "center", ...e, direction: "row", ref: t })
);
Iu.displayName = "HStack";
function i0(e) {
  return Lu(e, (t) => (t === "auto" ? "auto" : `span ${t}/span ${t}`));
}
var al = ce(function (t, n) {
  const {
      area: r,
      colSpan: i,
      colStart: a,
      colEnd: o,
      rowEnd: s,
      rowSpan: l,
      rowStart: u,
      ...c
    } = t,
    d = yb({
      gridArea: r,
      gridColumn: i0(i),
      gridRow: i0(l),
      gridColumnStart: a,
      gridColumnEnd: o,
      gridRowStart: u,
      gridRowEnd: s,
    });
  return E(Y.div, { ref: n, __css: d, ...c });
});
al.displayName = "GridItem";
var hh = ce(function (t, n) {
  const r = Qr("Heading", t),
    { className: i, ...a } = nn(t);
  return E(Y.h2, {
    ref: n,
    className: Ue("chakra-heading", t.className),
    ...a,
    __css: r,
  });
});
hh.displayName = "Heading";
function YD(e, t = {}) {
  const { ssr: n = !0, fallback: r } = t,
    { getWindow: i } = wM(),
    a = Array.isArray(e) ? e : [e];
  let o = Array.isArray(r) ? r : [r];
  o = o.filter((u) => u != null);
  const [s, l] = k.useState(() =>
    a.map((u, c) => ({
      media: u,
      matches: n ? !!o[c] : i().matchMedia(u).matches,
    }))
  );
  return (
    k.useEffect(() => {
      const u = i();
      l(a.map((f) => ({ media: f, matches: u.matchMedia(f).matches })));
      const c = a.map((f) => u.matchMedia(f)),
        d = (f) => {
          l((h) =>
            h
              .slice()
              .map((y) =>
                y.media === f.media ? { ...y, matches: f.matches } : y
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
    }, [i]),
    s.map((u) => u.matches)
  );
}
function JD(e) {
  const { breakpoint: t, hide: n, children: r, ssr: i } = e,
    [a] = YD(t, { ssr: i });
  return (n ? !a : a) ? r : null;
}
var a0 = (e, t) => {
  var n, r;
  return (r = (n = e?.breakpoints) == null ? void 0 : n[t]) != null ? r : t;
};
function qD(e) {
  const { breakpoint: t = "", below: n, above: r } = e,
    i = Am(),
    a = a0(i, n),
    o = a0(i, r);
  let s = t;
  return a ? (s = `(max-width: ${a})`) : o && (s = `(min-width: ${o})`), s;
}
function iw(e) {
  const { children: t, ssr: n } = e,
    r = qD(e);
  return E(JD, { breakpoint: r, ssr: n, children: t });
}
iw.displayName = "Show";
var aw = ce(function (t, n) {
  const r = Bo("Switch", t),
    { spacing: i = "0.5rem", children: a, ...o } = nn(t),
    {
      getIndicatorProps: s,
      getInputProps: l,
      getCheckboxProps: u,
      getRootProps: c,
      getLabelProps: d,
    } = BD(o),
    f = k.useMemo(
      () => ({
        display: "inline-block",
        position: "relative",
        verticalAlign: "middle",
        lineHeight: 0,
        ...r.container,
      }),
      [r.container]
    ),
    h = k.useMemo(
      () => ({
        display: "inline-flex",
        flexShrink: 0,
        justifyContent: "flex-start",
        boxSizing: "content-box",
        cursor: "pointer",
        ...r.track,
      }),
      [r.track]
    ),
    y = k.useMemo(
      () => ({ userSelect: "none", marginStart: i, ...r.label }),
      [i, r.label]
    );
  return Ve(Y.label, {
    ...c(),
    className: Ue("chakra-switch", t.className),
    __css: f,
    children: [
      E("input", { className: "chakra-switch__input", ...l({}, n) }),
      E(Y.span, {
        ...u(),
        className: "chakra-switch__track",
        __css: h,
        children: E(Y.span, {
          __css: r.thumb,
          className: "chakra-switch__thumb",
          ...s(),
        }),
      }),
      a &&
        E(Y.span, {
          className: "chakra-switch__label",
          ...d(),
          __css: y,
          children: a,
        }),
    ],
  });
});
aw.displayName = "Switch";
const XD = "book-281775c6.png",
  QD = () => {
    const { toggleColorMode: e, colorMode: t } = xu();
    return Ve(Iu, {
      children: [
        E(aw, { colorScheme: "green", isChecked: t === "dark", onChange: e }),
        E(tw, { children: "Dark Mode" }),
      ],
    });
  },
  ZD = () =>
    Ve(Iu, {
      justifyContent: "space-between",
      padding: "10px",
      children: [
        E(ch, {
          src: XD,
          boxSize: "50px",
          border: "1px",
          borderColor: "blue.500",
          borderRadius: "50%",
        }),
        E(hh, { children: "Memajuve's Manga list" }),
        E(QD, {}),
      ],
    });
let Ms;
const e8 = new Uint8Array(16);
function t8() {
  if (
    !Ms &&
    ((Ms =
      typeof crypto < "u" &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !Ms)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return Ms(e8);
}
const Ke = [];
for (let e = 0; e < 256; ++e) Ke.push((e + 256).toString(16).slice(1));
function n8(e, t = 0) {
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
const r8 =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  o0 = { randomUUID: r8 };
function On(e, t, n) {
  if (o0.randomUUID && !t && !e) return o0.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || t8)();
  if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
    n = n || 0;
    for (let i = 0; i < 16; ++i) t[n + i] = r[i];
    return t;
  }
  return n8(r);
}
const ow = ({ manga: e }) => {
    const { url: t, title: n, images: r } = e,
      {
        webp: { image_url: i },
      } = r;
    return E(eo, {
      children: Ve(
        bD,
        {
          borderRadius: 10,
          children: [
            E(ch, { src: i }),
            E(vD, {
              children: E(QS, {
                href: t,
                fontSize: "2xl",
                isExternal: !0,
                children: n,
              }),
            }),
          ],
        },
        On()
      ),
    });
  },
  sw = [
    {
      mal_id: 2156,
      url: "https://myanimelist.net/manga/2156/Kaguya-hime",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/manga/2/190050.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/2/190050t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/2/190050l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/manga/2/190050.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/2/190050t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/2/190050l.webp",
        },
      },
      approved: !0,
      titles: [
        { type: "Default", title: "Kaguya-hime" },
        { type: "Synonym", title: "Kaguyahime: The Moon Princess" },
        { type: "Synonym", title: "Princess Kaguya" },
        { type: "Japanese", title: "輝夜姫" },
      ],
      title: "Kaguya-hime",
      title_english: null,
      title_japanese: "輝夜姫",
      title_synonyms: ["Kaguyahime: The Moon Princess", "Princess Kaguya"],
      type: "Manga",
      chapters: 120,
      volumes: 27,
      status: "Finished",
      publishing: !1,
      published: {
        from: "1993-08-24T00:00:00+00:00",
        to: "2004-12-24T00:00:00+00:00",
        prop: {
          from: { day: 24, month: 8, year: 1993 },
          to: { day: 24, month: 12, year: 2004 },
        },
        string: "Aug 24, 1993 to Dec 24, 2004",
      },
      score: 7.27,
      scored: 7.27,
      scored_by: 333,
      rank: 5026,
      popularity: 9315,
      members: 1793,
      favorites: 16,
      synopsis:
        "On Kabuchi-jima, an island ruled by Princess Kaguya, ten children were raised as sacrificial victims. Several of the children thought they had escaped their fate when they escaped the island. But nearly a decade later, the kids are still dying in the order and at the time they would have as sacrifices... Their only hope now is to reunite and return to the island to seek out and destroy the source—the legend, the blood-lusting Moon Princess—before time runs out.",
      background: null,
      authors: [
        {
          mal_id: 2958,
          type: "people",
          name: "Shimizu, Reiko",
          url: "https://myanimelist.net/people/2958/Reiko_Shimizu",
        },
      ],
      serializations: [
        {
          mal_id: 11,
          type: "manga",
          name: "LaLa",
          url: "https://myanimelist.net/manga/magazine/11/LaLa",
        },
      ],
      genres: [
        {
          mal_id: 2,
          type: "manga",
          name: "Adventure",
          url: "https://myanimelist.net/manga/genre/2/Adventure",
        },
        {
          mal_id: 46,
          type: "manga",
          name: "Award Winning",
          url: "https://myanimelist.net/manga/genre/46/Award_Winning",
        },
        {
          mal_id: 8,
          type: "manga",
          name: "Drama",
          url: "https://myanimelist.net/manga/genre/8/Drama",
        },
        {
          mal_id: 22,
          type: "manga",
          name: "Romance",
          url: "https://myanimelist.net/manga/genre/22/Romance",
        },
        {
          mal_id: 24,
          type: "manga",
          name: "Sci-Fi",
          url: "https://myanimelist.net/manga/genre/24/Sci-Fi",
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [
        {
          mal_id: 25,
          type: "manga",
          name: "Shoujo",
          url: "https://myanimelist.net/manga/genre/25/Shoujo",
        },
      ],
    },
    {
      mal_id: 11,
      url: "https://myanimelist.net/manga/11/Naruto",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/manga/3/249658.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/3/249658t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/3/249658l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/manga/3/249658.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/3/249658t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/3/249658l.webp",
        },
      },
      approved: !0,
      titles: [
        { type: "Default", title: "Naruto" },
        { type: "Japanese", title: "NARUTO―ナルト―" },
        { type: "English", title: "Naruto" },
      ],
      title: "Naruto",
      title_english: "Naruto",
      title_japanese: "NARUTO―ナルト―",
      title_synonyms: [],
      type: "Manga",
      chapters: 700,
      volumes: 72,
      status: "Finished",
      publishing: !1,
      published: {
        from: "1999-09-21T00:00:00+00:00",
        to: "2014-11-10T00:00:00+00:00",
        prop: {
          from: { day: 21, month: 9, year: 1999 },
          to: { day: 10, month: 11, year: 2014 },
        },
        string: "Sep 21, 1999 to Nov 10, 2014",
      },
      score: 8.07,
      scored: 8.07,
      scored_by: 266907,
      rank: 622,
      popularity: 11,
      members: 406336,
      favorites: 43538,
      synopsis:
        "Whenever Naruto Uzumaki proclaims that he will someday become the Hokage—a title bestowed upon the best ninja in the Village Hidden in the Leaves—no one takes him seriously. Since birth, Naruto has been shunned and ridiculed by his fellow villagers. But their contempt isn't because Naruto is loud-mouthed, mischievous, or because of his ineptitude in the ninja arts, but because there is a demon inside him. Prior to Naruto's birth, the powerful and deadly Nine-Tailed Fox attacked the village. In order to stop the rampage, the Fourth Hokage sacrificed his life to seal the demon inside the body of the newborn Naruto. And so when he is assigned to Team 7—along with his new teammates Sasuke Uchiha and Sakura Haruno, under the mentorship of veteran ninja Kakashi Hatake—Naruto is forced to work together with other people for the first time in his life. Through undergoing vigorous training and taking on challenging missions, Naruto must learn what it means to work in a team and carve his own route toward becoming a full-fledged ninja recognized by his village. [Written by MAL Rewrite]",
      background: `Naruto has sold over 250 million copies worldwide as of 2020, making it the 4th highest grossing manga series of all time. It was nominated for the 19th Tezuka Osamu Cultural Prize in 2014, and in the same year Masashi Kishimoto was awarded Rookie of the Year in the media fine arts category by Japan's Agency for Cultural Affairs. Numerous databooks, artbooks, novels, and fanbooks on the series have been released. Eight summary volumes featuring unaltered color pages, larger dimensions, and exclusive interviews, covering the first part of the series were released between November 7, 2008 and April 10, 2009. The series was published in English by VIZ Media under the Shonen Jump imprint from August 16, 2003 to October 6, 2015. In the last four months of 2007, the campaign titled "Naruto Nation" was launched, in which three volumes were published each month so that US releases would be closer to Japan's, the same practice was done in February through April of 2009 this time titled "Generation Ninja." A 3-in-1 omnibus edition was also published from May 3, 2011 to October 2, 2018. A box set containing volumes 1-27 was released on August 6, 2008, another one containing volumes 28-48 on July 7, 2015, and the final box set with volumes 49-72 on January 5, 2016. It was also published in Brazilian Portuguese by Panini Comics/Planet Manga from May 2007 to June 2015, and again as Naruto Gold edition since July 2015.`,
      authors: [
        {
          mal_id: 1879,
          type: "people",
          name: "Kishimoto, Masashi",
          url: "https://myanimelist.net/people/1879/Masashi_Kishimoto",
        },
      ],
      serializations: [
        {
          mal_id: 83,
          type: "manga",
          name: "Shounen Jump (Weekly)",
          url: "https://myanimelist.net/manga/magazine/83/Shounen_Jump_Weekly",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "manga",
          name: "Action",
          url: "https://myanimelist.net/manga/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "manga",
          name: "Adventure",
          url: "https://myanimelist.net/manga/genre/2/Adventure",
        },
        {
          mal_id: 10,
          type: "manga",
          name: "Fantasy",
          url: "https://myanimelist.net/manga/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 17,
          type: "manga",
          name: "Martial Arts",
          url: "https://myanimelist.net/manga/genre/17/Martial_Arts",
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: "manga",
          name: "Shounen",
          url: "https://myanimelist.net/manga/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 12,
      url: "https://myanimelist.net/manga/12/Bleach",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/manga/3/180031.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/3/180031t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/3/180031l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/manga/3/180031.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/3/180031t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/3/180031l.webp",
        },
      },
      approved: !0,
      titles: [
        { type: "Default", title: "Bleach" },
        { type: "Japanese", title: "BLEACH" },
        { type: "English", title: "Bleach" },
      ],
      title: "Bleach",
      title_english: "Bleach",
      title_japanese: "BLEACH",
      title_synonyms: [],
      type: "Manga",
      chapters: 705,
      volumes: 74,
      status: "Finished",
      publishing: !1,
      published: {
        from: "2001-08-07T00:00:00+00:00",
        to: "2016-08-22T00:00:00+00:00",
        prop: {
          from: { day: 7, month: 8, year: 2001 },
          to: { day: 22, month: 8, year: 2016 },
        },
        string: "Aug 7, 2001 to Aug 22, 2016",
      },
      score: 7.85,
      scored: 7.85,
      scored_by: 229466,
      rank: 1118,
      popularity: 13,
      members: 373824,
      favorites: 35200,
      synopsis:
        "For as long as he can remember, high school student Ichigo Kurosaki has been able to see the spirits of the dead, but that has not stopped him from leading an ordinary life. One day, Ichigo returns home to find an intruder in his room who introduces herself as Rukia Kuchiki, a Soul Reaper tasked with helping souls pass over. Suddenly, the two are jolted from their conversation when a Hollow—an evil spirit known for consuming souls—attacks. As Ichigo makes a brash attempt to stop the Hollow, Rukia steps in and shields him from a counterattack. Injured and unable to keep fighting, Rukia suggests a risky plan—transfer half of her Soul Reaper powers to Ichigo. He accepts and, to Rukia's surprise, ends up absorbing her powers entirely, allowing him to easily dispatch the Hollow. Now a Soul Reaper himself, Ichigo must take up Rukia's duties of exterminating Hollows and protecting spirits, both living and dead. Along with his friends Orihime Inoue and Yasutora Sado—who later discover spiritual abilities of their own—Ichigo soon learns that the consequences of becoming a Soul Reaper and dealing with the world of spirits are far greater than he ever imagined. [Written by MAL Rewrite]",
      background:
        "Bleach has sold over 130 million copies worldwide as of 2022, making it one of the top 20 best selling manga series of all-time; North American sales have also been significant with 1.7 million copies sold in the region. In 2005, the series won the 50th Shogakukan Manga Award in the shounen demographic category. Many adaptations have also been made of the series, with a 2004 television anime series along with four feature length films, numerous video games, spin-off light novels, databooks, and even a musical. The series was published in English by VIZ Media under the Shonen Jump imprint from July 6, 2004 to October 2, 2018, and as omnibus volumes from June 7, 2011 to March 5, 2019; a hardcover collector's edition for volume one was released by VIZ Media on August 5, 2008, a box set of volumes 1-21 was released on September 16, 2008 as well as volumes 22-48 on July 7, 2015, and the final box set containing volumes 49-72 on November 6, 2018. It has also been published in Portuguese (Brazil) by Panini Comics and Planet Manga since July 2007, and in Spanish by Glénat/EDT since June 2006, publishing 51 volumes before the publisher went defunct, and later was republished by Panini Comics from February 2013 to November 2017. Bleach was adapted into a live-action movie on July 20, 2018.",
      authors: [
        {
          mal_id: 1880,
          type: "people",
          name: "Kubo, Tite",
          url: "https://myanimelist.net/people/1880/Tite_Kubo",
        },
      ],
      serializations: [
        {
          mal_id: 83,
          type: "manga",
          name: "Shounen Jump (Weekly)",
          url: "https://myanimelist.net/manga/magazine/83/Shounen_Jump_Weekly",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "manga",
          name: "Action",
          url: "https://myanimelist.net/manga/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "manga",
          name: "Adventure",
          url: "https://myanimelist.net/manga/genre/2/Adventure",
        },
        {
          mal_id: 46,
          type: "manga",
          name: "Award Winning",
          url: "https://myanimelist.net/manga/genre/46/Award_Winning",
        },
        {
          mal_id: 10,
          type: "manga",
          name: "Fantasy",
          url: "https://myanimelist.net/manga/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [
        {
          mal_id: 27,
          type: "manga",
          name: "Shounen",
          url: "https://myanimelist.net/manga/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 20315,
      url: "https://myanimelist.net/manga/20315/Piece",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/manga/1/40362.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/1/40362t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/1/40362l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/manga/1/40362.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/1/40362t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/1/40362l.webp",
        },
      },
      approved: !0,
      titles: [
        { type: "Default", title: "Piece" },
        { type: "Synonym", title: "Piece: Her Memory" },
        { type: "Synonym", title: "Piece: Kanojo no Kioku" },
        { type: "Japanese", title: "Piece -ピース-" },
      ],
      title: "Piece",
      title_english: null,
      title_japanese: "Piece -ピース-",
      title_synonyms: ["Piece: Her Memory", "Piece: Kanojo no Kioku"],
      type: "Manga",
      chapters: 21,
      volumes: 10,
      status: "Finished",
      publishing: !1,
      published: {
        from: "2008-04-12T00:00:00+00:00",
        to: "2013-04-13T00:00:00+00:00",
        prop: {
          from: { day: 12, month: 4, year: 2008 },
          to: { day: 13, month: 4, year: 2013 },
        },
        string: "Apr 12, 2008 to Apr 13, 2013",
      },
      score: 7.7,
      scored: 7.7,
      scored_by: 1343,
      rank: 1681,
      popularity: 4182,
      members: 4577,
      favorites: 53,
      synopsis:
        "Mizuho Suga believes that people can be categorized into particular groups, behaving true to form. Since she can predict how others will act, she feels that she understands them. While attending the funeral of a former classmate, Haruka Origichi, she finds it unfortunate that someone died at such a young age. But her impression of Origichi had been that she kept to herself and was unnoticeable, and as such, her life must also have been unremarkable. After the funeral, Suga is approached by Origuchi's mother, who mistakenly assumes that the two girls were best friends. The elder Origuchi wants to know about an ex-boyfriend that her daughter stubbornly tried to keep secret only years ago; apparently, Origuchi aborted their child before she became ill. Suga agrees to investigate this mystery, gradually gaining the assistance of former upperclassman Takashi Yanai, class celebrity Madoka Setouchi, faithful tag-along Remi Nishida, and enigmatic playboy Hikaru Narumi. Although Suga was not close with Origuchi when she was alive, she is strangely determined to know the other girl better after her death. She starts to piece together the events that happened in their second year of high school. As Suga seeks the truth from those suspected to be involved with Origuchi, she must learn how to open up to others and be more honest herself. [Written by MAL Rewrite]",
      background:
        "Piece won the 58th Shogakukan Manga Award for shoujo manga in 2013.",
      authors: [
        {
          mal_id: 2302,
          type: "people",
          name: "Ashihara, Hinako",
          url: "https://myanimelist.net/people/2302/Hinako_Ashihara",
        },
      ],
      serializations: [
        {
          mal_id: 54,
          type: "manga",
          name: "Betsucomi",
          url: "https://myanimelist.net/manga/magazine/54/Betsucomi",
        },
      ],
      genres: [
        {
          mal_id: 46,
          type: "manga",
          name: "Award Winning",
          url: "https://myanimelist.net/manga/genre/46/Award_Winning",
        },
        {
          mal_id: 8,
          type: "manga",
          name: "Drama",
          url: "https://myanimelist.net/manga/genre/8/Drama",
        },
        {
          mal_id: 7,
          type: "manga",
          name: "Mystery",
          url: "https://myanimelist.net/manga/genre/7/Mystery",
        },
        {
          mal_id: 22,
          type: "manga",
          name: "Romance",
          url: "https://myanimelist.net/manga/genre/22/Romance",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 23,
          type: "manga",
          name: "School",
          url: "https://myanimelist.net/manga/genre/23/School",
        },
      ],
      demographics: [
        {
          mal_id: 25,
          type: "manga",
          name: "Shoujo",
          url: "https://myanimelist.net/manga/genre/25/Shoujo",
        },
      ],
    },
    {
      mal_id: 3,
      url: "https://myanimelist.net/manga/3/20th_Century_Boys",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/manga/5/260006.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/5/260006t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/5/260006l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/manga/5/260006.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/5/260006t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/5/260006l.webp",
        },
      },
      approved: !0,
      titles: [
        { type: "Default", title: "20th Century Boys" },
        { type: "Synonym", title: "20 Seiki Shounen" },
        { type: "Synonym", title: "Nijuu Seiki Shounen" },
        { type: "Synonym", title: "Nijuusseiki Shounen" },
        { type: "Synonym", title: "20thCB" },
        { type: "Japanese", title: "20世紀少年" },
        { type: "English", title: "20th Century Boys" },
      ],
      title: "20th Century Boys",
      title_english: "20th Century Boys",
      title_japanese: "20世紀少年",
      title_synonyms: [
        "20 Seiki Shounen",
        "Nijuu Seiki Shounen",
        "Nijuusseiki Shounen",
        "20thCB",
      ],
      type: "Manga",
      chapters: 249,
      volumes: 22,
      status: "Finished",
      publishing: !1,
      published: {
        from: "1999-09-27T00:00:00+00:00",
        to: "2006-04-24T00:00:00+00:00",
        prop: {
          from: { day: 27, month: 9, year: 1999 },
          to: { day: 24, month: 4, year: 2006 },
        },
        string: "Sep 27, 1999 to Apr 24, 2006",
      },
      score: 8.95,
      scored: 8.95,
      scored_by: 84150,
      rank: 13,
      popularity: 28,
      members: 242650,
      favorites: 18983,
      synopsis: `As the 20th century approaches its end, people all over the world are anxious that the world is changing. And probably not for the better. Kenji Endo is a normal convenience store manager who's just trying to get by. But when he learns that one of his old friends going by the name "Donkey" has suddenly committed suicide, and that a new cult led by a figure known as "Friend" is becoming more notorious, Kenji starts to feel that something isn't right. With a few key clues left behind by his deceased friend, Kenji realizes that this cult is much more than he ever thought it would be—not only is this mysterious organization directly targeting him and his childhood friends, but the whole world also faces a grave danger that only the friends have the key to stop. Kenji's simple life of barely making ends meet is flipped upside down when he reunites with his childhood friends, and together they must figure out the truth of how their past is connected to the cult, as the turn of the century could mean the possible end of the world. [Written by MAL Rewrite]`,
      background:
        "20th Century Boys won the Kodansha Manga Award in the general category in 2001, an Excellence Prize at the Japan Media Arts Festival in 2002, and the Shogakukan Manga Award in the general category in 2003. The series' combined storyline won the Grand Prize at the 37th Japan Cartoonist Awards on May 9, 2008. VIZ Media published the series in English under the VIZ Signature imprint from February 17, 2009 to September 18, 2012. VIZ Media licensed the series in 2005; however, at Urasawa's request, it was rescheduled for release after Monster finished its English publication due to a change in art style over time. The series has also been published in Brazilian Portuguese by Panini Comics/Planet Manga since September 2012. The series was adapted into a trilogy of live-action films which released in Japan between August 30, 2008 and August 29, 2009.",
      authors: [
        {
          mal_id: 1867,
          type: "people",
          name: "Urasawa, Naoki",
          url: "https://myanimelist.net/people/1867/Naoki_Urasawa",
        },
      ],
      serializations: [
        {
          mal_id: 3,
          type: "manga",
          name: "Big Comic Spirits",
          url: "https://myanimelist.net/manga/magazine/3/Big_Comic_Spirits",
        },
      ],
      genres: [
        {
          mal_id: 46,
          type: "manga",
          name: "Award Winning",
          url: "https://myanimelist.net/manga/genre/46/Award_Winning",
        },
        {
          mal_id: 8,
          type: "manga",
          name: "Drama",
          url: "https://myanimelist.net/manga/genre/8/Drama",
        },
        {
          mal_id: 7,
          type: "manga",
          name: "Mystery",
          url: "https://myanimelist.net/manga/genre/7/Mystery",
        },
        {
          mal_id: 24,
          type: "manga",
          name: "Sci-Fi",
          url: "https://myanimelist.net/manga/genre/24/Sci-Fi",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 13,
          type: "manga",
          name: "Historical",
          url: "https://myanimelist.net/manga/genre/13/Historical",
        },
        {
          mal_id: 40,
          type: "manga",
          name: "Psychological",
          url: "https://myanimelist.net/manga/genre/40/Psychological",
        },
      ],
      demographics: [
        {
          mal_id: 41,
          type: "manga",
          name: "Seinen",
          url: "https://myanimelist.net/manga/genre/41/Seinen",
        },
      ],
    },
    {
      mal_id: 1,
      url: "https://myanimelist.net/manga/1/Monster",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/manga/3/258224.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/3/258224t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/3/258224l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/manga/3/258224.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/3/258224t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/3/258224l.webp",
        },
      },
      approved: !0,
      titles: [
        { type: "Default", title: "Monster" },
        { type: "Japanese", title: "MONSTER" },
        { type: "English", title: "Monster" },
      ],
      title: "Monster",
      title_english: "Monster",
      title_japanese: "MONSTER",
      title_synonyms: [],
      type: "Manga",
      chapters: 162,
      volumes: 18,
      status: "Finished",
      publishing: !1,
      published: {
        from: "1994-12-05T00:00:00+00:00",
        to: "2001-12-20T00:00:00+00:00",
        prop: {
          from: { day: 5, month: 12, year: 1994 },
          to: { day: 20, month: 12, year: 2001 },
        },
        string: "Dec 5, 1994 to Dec 20, 2001",
      },
      score: 9.15,
      scored: 9.15,
      scored_by: 92572,
      rank: 5,
      popularity: 29,
      members: 233372,
      favorites: 20279,
      synopsis:
        "Kenzou Tenma, a renowned Japanese neurosurgeon working in post-war Germany, faces a difficult choice: to operate on Johan Liebert, an orphan boy on the verge of death, or on the mayor of Düsseldorf. In the end, Tenma decides to gamble his reputation by saving Johan, effectively leaving the mayor for dead. As a consequence of his actions, hospital director Heinemann strips Tenma of his position, and Heinemann's daughter Eva breaks off their engagement. Disgraced and shunned by his colleagues, Tenma loses all hope of a successful career—that is, until the mysterious killing of Heinemann gives him another chance. Nine years later, Tenma is the head of the surgical department and close to becoming the director himself. Although all seems well for him at first, he soon becomes entangled in a chain of gruesome murders that have taken place throughout Germany. The culprit is a monster—the same one that Tenma saved on that fateful day nine years ago. [Written by MAL Rewrite]",
      background:
        "Monster won the Grand Prize at the 3rd annual Tezuka Osamu Cultural Prize in 1999, as well as the 46th Shogakukan Manga Award in the General category in 2000. The series was published in English by VIZ Media under the VIZ Signature imprint from February 21, 2006 to December 16, 2008, and again in 2-in-1 omnibuses (subtitled The Perfect Edition) from July 15, 2014 to July 19, 2016. The manga was also published in Brazilian Portuguese by Panini Comics/Planet Manga from June 2012 to April 2015, in Polish by Hanami from March 2014 to February 2017, in Spain by Planeta Cómic from June 16, 2009 to September 21, 2010, and in Argentina by LARP Editores.",
      authors: [
        {
          mal_id: 1867,
          type: "people",
          name: "Urasawa, Naoki",
          url: "https://myanimelist.net/people/1867/Naoki_Urasawa",
        },
      ],
      serializations: [
        {
          mal_id: 1,
          type: "manga",
          name: "Big Comic Original",
          url: "https://myanimelist.net/manga/magazine/1/Big_Comic_Original",
        },
      ],
      genres: [
        {
          mal_id: 46,
          type: "manga",
          name: "Award Winning",
          url: "https://myanimelist.net/manga/genre/46/Award_Winning",
        },
        {
          mal_id: 8,
          type: "manga",
          name: "Drama",
          url: "https://myanimelist.net/manga/genre/8/Drama",
        },
        {
          mal_id: 7,
          type: "manga",
          name: "Mystery",
          url: "https://myanimelist.net/manga/genre/7/Mystery",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 50,
          type: "manga",
          name: "Adult Cast",
          url: "https://myanimelist.net/manga/genre/50/Adult_Cast",
        },
        {
          mal_id: 40,
          type: "manga",
          name: "Psychological",
          url: "https://myanimelist.net/manga/genre/40/Psychological",
        },
      ],
      demographics: [
        {
          mal_id: 41,
          type: "manga",
          name: "Seinen",
          url: "https://myanimelist.net/manga/genre/41/Seinen",
        },
      ],
    },
    {
      mal_id: 745,
      url: "https://myanimelist.net/manga/745/Pluto",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/manga/1/264496.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/1/264496t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/1/264496l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/manga/1/264496.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/1/264496t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/1/264496l.webp",
        },
      },
      approved: !0,
      titles: [
        { type: "Default", title: "Pluto" },
        { type: "Japanese", title: "PLUTO" },
        { type: "English", title: "Pluto: Urasawa x Tezuka" },
      ],
      title: "Pluto",
      title_english: "Pluto: Urasawa x Tezuka",
      title_japanese: "PLUTO",
      title_synonyms: [],
      type: "Manga",
      chapters: 65,
      volumes: 8,
      status: "Finished",
      publishing: !1,
      published: {
        from: "2003-09-09T00:00:00+00:00",
        to: "2009-04-01T00:00:00+00:00",
        prop: {
          from: { day: 9, month: 9, year: 2003 },
          to: { day: 1, month: 4, year: 2009 },
        },
        string: "Sep 9, 2003 to Apr 1, 2009",
      },
      score: 8.62,
      scored: 8.62,
      scored_by: 41612,
      rank: 79,
      popularity: 105,
      members: 113784,
      favorites: 5140,
      synopsis: `Famous for his military service in the 39th Asian War, the legendary Swiss robot Montblanc is violently murdered. Humans and robots around the world mourn for the beloved celebrity. Montblanc's popularity only grew in the years following the war, thanks to his dedication to nature conservation and his loving personality. Once a fellow war veteran, robotic Europol detective Gesicht is sent to investigate Montblanc's tragic demise. In his pursuit, Gesicht uncovers evidence of a mysterious entity known only as "Pluto." He also learns of a conspiratorial plot to dismantle the eight specialized robots from around the world who participated in the war. Racing against time to save those who still remain, Gesicht grapples with his memory, morality, and a world full of hate, desperately attempting to defend the fragile coexistence of man and machine. [Written by MAL Rewrite]`,
      background: `Celebrating the 50th anniversary of Osamu Tezuka's acclaimed Tetsuwan Atom, seinen mangaka Naoki Urasawa collaborated with Tezuka productions to create this dark adaptation of Atom's "The Greatest Robot on Earth" story arc. The adaptation moves the focus from Tezuka's protagonist Atom to his supporting character Gesicht in order to better ground the story in realism and reflect the modern world through this sci-fi tale. Pluto was published in English as Pluto: Urasawa x Tezuka by VIZ Media under the VIZ Signature imprint from February 17, 2009 to April 6, 2010.`,
      authors: [
        {
          mal_id: 1867,
          type: "people",
          name: "Urasawa, Naoki",
          url: "https://myanimelist.net/people/1867/Naoki_Urasawa",
        },
        {
          mal_id: 1938,
          type: "people",
          name: "Tezuka, Osamu",
          url: "https://myanimelist.net/people/1938/Osamu_Tezuka",
        },
      ],
      serializations: [
        {
          mal_id: 1,
          type: "manga",
          name: "Big Comic Original",
          url: "https://myanimelist.net/manga/magazine/1/Big_Comic_Original",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "manga",
          name: "Action",
          url: "https://myanimelist.net/manga/genre/1/Action",
        },
        {
          mal_id: 46,
          type: "manga",
          name: "Award Winning",
          url: "https://myanimelist.net/manga/genre/46/Award_Winning",
        },
        {
          mal_id: 7,
          type: "manga",
          name: "Mystery",
          url: "https://myanimelist.net/manga/genre/7/Mystery",
        },
        {
          mal_id: 24,
          type: "manga",
          name: "Sci-Fi",
          url: "https://myanimelist.net/manga/genre/24/Sci-Fi",
        },
        {
          mal_id: 45,
          type: "manga",
          name: "Suspense",
          url: "https://myanimelist.net/manga/genre/45/Suspense",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 18,
          type: "manga",
          name: "Mecha",
          url: "https://myanimelist.net/manga/genre/18/Mecha",
        },
        {
          mal_id: 40,
          type: "manga",
          name: "Psychological",
          url: "https://myanimelist.net/manga/genre/40/Psychological",
        },
      ],
      demographics: [
        {
          mal_id: 41,
          type: "manga",
          name: "Seinen",
          url: "https://myanimelist.net/manga/genre/41/Seinen",
        },
      ],
    },
    {
      mal_id: 1714,
      url: "https://myanimelist.net/manga/1714/Genzo_Hitogata_Kiwa",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/manga/3/130665.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/3/130665t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/3/130665l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/manga/3/130665.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/3/130665t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/3/130665l.webp",
        },
      },
      approved: !0,
      titles: [
        { type: "Default", title: "Genzo Hitogata Kiwa" },
        { type: "Japanese", title: "幻蔵人形鬼話" },
      ],
      title: "Genzo Hitogata Kiwa",
      title_english: null,
      title_japanese: "幻蔵人形鬼話",
      title_synonyms: [],
      type: "Manga",
      chapters: 13,
      volumes: 5,
      status: "Finished",
      publishing: !1,
      published: {
        from: "1996-01-01T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 1, month: 1, year: 1996 },
          to: { day: null, month: null, year: null },
        },
        string: "1996 to ?",
      },
      score: 6.82,
      scored: 6.82,
      scored_by: 339,
      rank: 11166,
      popularity: 17615,
      members: 705,
      favorites: 3,
      synopsis: `The story is set in Japan in the middle ages. Tsujimura Genzo is a puppeteer whose heart has become as hard as stone due to the murder of his beloved wife. In each story, Genzo brings the dead back alive as puppets, and by doing so, he is able to solve mysterious incidents or help a dead man's soul. Kikuhime, a young "tomboy" princess is Genzo's companion and helps him fight the villains. (Source: MU)`,
      background: null,
      authors: [
        {
          mal_id: 3069,
          type: "people",
          name: "Takada, Yuuzo",
          url: "https://myanimelist.net/people/3069/Yuuzo_Takada",
        },
      ],
      serializations: [
        {
          mal_id: 4,
          type: "manga",
          name: "Afternoon",
          url: "https://myanimelist.net/manga/magazine/4/Afternoon",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "manga",
          name: "Action",
          url: "https://myanimelist.net/manga/genre/1/Action",
        },
        {
          mal_id: 37,
          type: "manga",
          name: "Supernatural",
          url: "https://myanimelist.net/manga/genre/37/Supernatural",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 13,
          type: "manga",
          name: "Historical",
          url: "https://myanimelist.net/manga/genre/13/Historical",
        },
        {
          mal_id: 17,
          type: "manga",
          name: "Martial Arts",
          url: "https://myanimelist.net/manga/genre/17/Martial_Arts",
        },
      ],
      demographics: [
        {
          mal_id: 41,
          type: "manga",
          name: "Seinen",
          url: "https://myanimelist.net/manga/genre/41/Seinen",
        },
      ],
    },
    {
      mal_id: 51,
      url: "https://myanimelist.net/manga/51/Slam_Dunk",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/manga/2/258749.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/2/258749t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/2/258749l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/manga/2/258749.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/2/258749t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/2/258749l.webp",
        },
      },
      approved: !0,
      titles: [
        { type: "Default", title: "Slam Dunk" },
        { type: "Japanese", title: "SLAM DUNK" },
        { type: "English", title: "Slam Dunk" },
      ],
      title: "Slam Dunk",
      title_english: "Slam Dunk",
      title_japanese: "SLAM DUNK",
      title_synonyms: [],
      type: "Manga",
      chapters: 276,
      volumes: 31,
      status: "Finished",
      publishing: !1,
      published: {
        from: "1990-09-18T00:00:00+00:00",
        to: "1996-06-04T00:00:00+00:00",
        prop: {
          from: { day: 18, month: 9, year: 1990 },
          to: { day: 4, month: 6, year: 1996 },
        },
        string: "Sep 18, 1990 to Jun 4, 1996",
      },
      score: 9.08,
      scored: 9.08,
      scored_by: 72642,
      rank: 6,
      popularity: 56,
      members: 161751,
      favorites: 15334,
      synopsis: `Hanamichi Sakuragi, a tall, boisterous teenager with flame-red hair and physical strength beyond his years, is eager to put an end to his rejection streak of 50 and finally score a girlfriend as he begins his first year of Shohoku High. However, his reputation for delinquency and destructiveness precedes him, and most of his fellow students subsequently avoid him like the plague. As his first day of school ends, he is left with two strong thoughts: "I hate basketball" and "I need a girlfriend." Haruko Akagi, ignorant of Hanamichi's history of misbehavior, notices his immense height and unwittingly approaches him, asking whether or not he likes basketball. Overcome by the fact that a girl is speaking to him, the red-haired giant blurts out a yes despite his true feelings. At the gym, Haruko asks if he can do a slam dunk. Though a complete novice, Hanamachi palms the ball and makes the leap...but overshoots, slamming his head into the backboard. Amazed by his near-inhuman physical abilities, Haruko quickly notifies the school's basketball captain of his feat. With this, Hanamichi is unexpectedly thrust into a world of competition for a girl he barely knows, but he soon discovers that there is perhaps more to basketball than he once thought. [Written by MAL Rewrite]`,
      background:
        "Slam Dunk was awarded the 40th Shogakukan Manga Award for best shounen manga in 1994. In a 2006 poll for the 10th Japan Media Arts Festival, the series was voted by Japanese fans as the #1 manga series of all time. With over 120 million copies sold as of 2012, it is one of the most successful manga series to date. Its wide success led to a large increase in the popularity of basketball in Japanese youth. In 2010, Takehiko Inoue received special commendations from the Japan Basketball Association for popularizing basketball in Japan. The series was published in English by Gutsoon! Entertainment under the Raijin Comics Imprint for five volumes from July 2, 2003 to May 5, 2004. After Gutsoon's shutdown, publishing rights to Slam Dunk were purchased by VIZ Media who then republished the series under the Shonen Jump imprint from September 2, 2008 to December 3, 2013. It was published in Spanish by Ivrea España from February 2003 to September 2005 and republished in Kanzenban from January 2010 to May 2016.",
      authors: [
        {
          mal_id: 1911,
          type: "people",
          name: "Inoue, Takehiko",
          url: "https://myanimelist.net/people/1911/Takehiko_Inoue",
        },
      ],
      serializations: [
        {
          mal_id: 83,
          type: "manga",
          name: "Shounen Jump (Weekly)",
          url: "https://myanimelist.net/manga/magazine/83/Shounen_Jump_Weekly",
        },
      ],
      genres: [
        {
          mal_id: 46,
          type: "manga",
          name: "Award Winning",
          url: "https://myanimelist.net/manga/genre/46/Award_Winning",
        },
        {
          mal_id: 30,
          type: "manga",
          name: "Sports",
          url: "https://myanimelist.net/manga/genre/30/Sports",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 23,
          type: "manga",
          name: "School",
          url: "https://myanimelist.net/manga/genre/23/School",
        },
        {
          mal_id: 78,
          type: "manga",
          name: "Team Sports",
          url: "https://myanimelist.net/manga/genre/78/Team_Sports",
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: "manga",
          name: "Shounen",
          url: "https://myanimelist.net/manga/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 25,
      url: "https://myanimelist.net/manga/25/Fullmetal_Alchemist",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/manga/3/243675.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/3/243675t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/3/243675l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/manga/3/243675.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/3/243675t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/3/243675l.webp",
        },
      },
      approved: !0,
      titles: [
        { type: "Default", title: "Fullmetal Alchemist" },
        { type: "Synonym", title: "Full Metal Alchemist" },
        { type: "Synonym", title: "Hagane no Renkinjutsushi" },
        { type: "Synonym", title: "FMA" },
        { type: "Synonym", title: "HagaRen" },
        { type: "Synonym", title: "Fullmetal Alchemist Gaiden" },
        { type: "Japanese", title: "鋼の錬金術師" },
        { type: "English", title: "Fullmetal Alchemist" },
      ],
      title: "Fullmetal Alchemist",
      title_english: "Fullmetal Alchemist",
      title_japanese: "鋼の錬金術師",
      title_synonyms: [
        "Full Metal Alchemist",
        "Hagane no Renkinjutsushi",
        "FMA",
        "HagaRen",
        "Fullmetal Alchemist Gaiden",
      ],
      type: "Manga",
      chapters: 116,
      volumes: 27,
      status: "Finished",
      publishing: !1,
      published: {
        from: "2001-07-12T00:00:00+00:00",
        to: "2010-09-11T00:00:00+00:00",
        prop: {
          from: { day: 12, month: 7, year: 2001 },
          to: { day: 11, month: 9, year: 2010 },
        },
        string: "Jul 12, 2001 to Sep 11, 2010",
      },
      score: 9.03,
      scored: 9.03,
      scored_by: 154323,
      rank: 8,
      popularity: 20,
      members: 286699,
      favorites: 29810,
      synopsis:
        "Alchemists are knowledgeable and naturally talented individuals who can manipulate and modify matter due to their art. Yet despite the wide range of possibilities, alchemy is not as all-powerful as most would believe. Human transmutation is strictly forbidden, and whoever attempts it risks severe consequences. Even so, siblings Edward and Alphonse Elric decide to ignore this great taboo and bring their mother back to life. Unfortunately, not only do they fail in resurrecting her, they also pay an extremely high price for their arrogance: Edward loses his left leg and Alphonse his entire body. Furthermore, Edward also gives up his right arm in order to seal his brother's soul into a suit of armor. Years later, the young alchemists travel across the country looking for the Philosopher's Stone, in the hopes of recovering their old bodies with its power. However, their quest for the fated stone also leads them to unravel far darker secrets than they could ever imagine. [Written by MAL Rewrite]",
      background:
        "Hagane no Renkinjutsushi won the 49th Shogakukan Manga Award for the shounen demographic in 2004. Hiromu Arakawa also won the 15th Tezuka Osamu Cultural Prize in the New Artist Prize category for the series in 2011. As of 2015, over 64 million copies of the series have been sold worldwide, making it one of Square Enix's most successful publications, according to Nielsen Bookscan. A live-action film is in development by Warner Bros. Japan and is scheduled for release in Winter 2017. The series was published in English as Fullmetal Alchemist by VIZ Media from May 3, 2005 to December 20, 2011, and in eBook format by Yen Press on April 15, 2014. A 3-in-1 omnibus edition was released by VIZ from June 7, 2011 to November 11, 2014 as well as a complete box set in November 1, 2011 (which included the novel Fullmetal Alchemist: The Ties That Bind). The manga was also published in Italian by Panini Comics under the Planet Manga imprint from July 13, 2006 to September 3, 2011, in Polish by J.P. Fantastica from January 2006 to to April 2012, in Brazilian Portuguese by Jbc from February 2007 to April 2011 and in Spanish by Ivrea Argentina starting December 12, 2016.",
      authors: [
        {
          mal_id: 1874,
          type: "people",
          name: "Arakawa, Hiromu",
          url: "https://myanimelist.net/people/1874/Hiromu_Arakawa",
        },
      ],
      serializations: [
        {
          mal_id: 13,
          type: "manga",
          name: "Shounen Gangan",
          url: "https://myanimelist.net/manga/magazine/13/Shounen_Gangan",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "manga",
          name: "Action",
          url: "https://myanimelist.net/manga/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "manga",
          name: "Adventure",
          url: "https://myanimelist.net/manga/genre/2/Adventure",
        },
        {
          mal_id: 46,
          type: "manga",
          name: "Award Winning",
          url: "https://myanimelist.net/manga/genre/46/Award_Winning",
        },
        {
          mal_id: 8,
          type: "manga",
          name: "Drama",
          url: "https://myanimelist.net/manga/genre/8/Drama",
        },
        {
          mal_id: 10,
          type: "manga",
          name: "Fantasy",
          url: "https://myanimelist.net/manga/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 38,
          type: "manga",
          name: "Military",
          url: "https://myanimelist.net/manga/genre/38/Military",
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: "manga",
          name: "Shounen",
          url: "https://myanimelist.net/manga/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 104,
      url: "https://myanimelist.net/manga/104/Yotsuba_to",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/manga/5/259524.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/5/259524t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/5/259524l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/manga/5/259524.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/5/259524t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/5/259524l.webp",
        },
      },
      approved: !0,
      titles: [
        { type: "Default", title: "Yotsuba to!" },
        { type: "Synonym", title: "Yotsuba and!" },
        { type: "Japanese", title: "よつばと!" },
        { type: "English", title: "Yotsuba&!" },
        { type: "German", title: "Yotsuba&!" },
        { type: "Spanish", title: "¡Yotsuba!" },
        { type: "French", title: "Yotsuba & !" },
      ],
      title: "Yotsuba to!",
      title_english: "Yotsuba&!",
      title_japanese: "よつばと!",
      title_synonyms: ["Yotsuba and!"],
      type: "Manga",
      chapters: null,
      volumes: null,
      status: "Publishing",
      publishing: !0,
      published: {
        from: "2003-03-21T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 21, month: 3, year: 2003 },
          to: { day: null, month: null, year: null },
        },
        string: "Mar 21, 2003 to ?",
      },
      score: 8.88,
      scored: 8.88,
      scored_by: 52873,
      rank: 20,
      popularity: 71,
      members: 148903,
      favorites: 15796,
      synopsis:
        "While most people find the world mundane, five-year-old Yotsuba Koiwai sees it as a treasure trove of amazing bustle and wonderful places to explore. When she and her adoptive father, Yousuke, move to a new city, the energetic young girl naturally sets out to investigate the neighborhood on her own. After a few incidents at the local park, the Koiwais become acquainted with their neighbors, the Ayase family. Their three daughters—mischievous college student Asagi, responsible high school student Fuuka, and kindhearted grade school student Ena—eventually all take a liking to Yotsuba and join in on her antics, despite their sheer ridicule. From learning how to use a swing to figuring out how to stop global warming with air conditioners, Yotsuba's ability to infallibly find fun in everything, both amazes and annoys the people around her. Along with Yousuke, the Ayases, and friends she makes along the way, Yotsuba embarks on daily adventures, each one a step in her quest to enjoy the simple things in life. [Written by MAL Rewrite]",
      background:
        'In 2006, Yotsuba to! received an Excellence Award in manga category at Japan Media Arts Festival where the jury citation praised the vivid characters and gentle atmosphere the manga has. In 2008, the series was nominated for the 12th Osamu Tezuka Culture Award and the Eisner Award "Best Publication for Kids" category, but did not win either one. It was also a runner-up for the first annual Manga Taishou award. In 2016, the series, along with Hanagami Sharaku, was awarded the 20th Tezuka Osamu Cultural Prize Grand Prize. The series was first published in English by ADV Manga as Yotsuba&!. Six volumes were released from June 6, 2005 to October 31, 2007 before publication was discontinued. Yen Press has published the series since September 15, 2009. It has also been published in Spanish by Norma Editorial since November 2005. It has been licensed in Polish by Wydawnictwo Kotori.',
      authors: [
        {
          mal_id: 1939,
          type: "people",
          name: "Azuma, Kiyohiko",
          url: "https://myanimelist.net/people/1939/Kiyohiko_Azuma",
        },
      ],
      serializations: [
        {
          mal_id: 23,
          type: "manga",
          name: "Dengeki Daioh",
          url: "https://myanimelist.net/manga/magazine/23/Dengeki_Daioh",
        },
      ],
      genres: [
        {
          mal_id: 46,
          type: "manga",
          name: "Award Winning",
          url: "https://myanimelist.net/manga/genre/46/Award_Winning",
        },
        {
          mal_id: 4,
          type: "manga",
          name: "Comedy",
          url: "https://myanimelist.net/manga/genre/4/Comedy",
        },
        {
          mal_id: 36,
          type: "manga",
          name: "Slice of Life",
          url: "https://myanimelist.net/manga/genre/36/Slice_of_Life",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 53,
          type: "manga",
          name: "Childcare",
          url: "https://myanimelist.net/manga/genre/53/Childcare",
        },
        {
          mal_id: 63,
          type: "manga",
          name: "Iyashikei",
          url: "https://myanimelist.net/manga/genre/63/Iyashikei",
        },
      ],
      demographics: [],
    },
    {
      mal_id: 28,
      url: "https://myanimelist.net/manga/28/Nana",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/manga/1/262324.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/1/262324t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/1/262324l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/manga/1/262324.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/1/262324t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/1/262324l.webp",
        },
      },
      approved: !0,
      titles: [
        { type: "Default", title: "Nana" },
        { type: "Japanese", title: "NANA" },
        { type: "English", title: "Nana" },
        { type: "German", title: "NANA" },
      ],
      title: "Nana",
      title_english: "Nana",
      title_japanese: "NANA",
      title_synonyms: [],
      type: "Manga",
      chapters: 84,
      volumes: 21,
      status: "On Hiatus",
      publishing: !1,
      published: {
        from: "2000-05-26T00:00:00+00:00",
        to: "2009-05-26T00:00:00+00:00",
        prop: {
          from: { day: 26, month: 5, year: 2e3 },
          to: { day: 26, month: 5, year: 2009 },
        },
        string: "May 26, 2000 to May 26, 2009",
      },
      score: 8.79,
      scored: 8.79,
      scored_by: 41575,
      rank: 36,
      popularity: 79,
      members: 132667,
      favorites: 11039,
      synopsis:
        "Nana Komatsu is a naive, unmotivated girl who spends her high school days chasing one crush after the other. Despite continually facing failure in her quest for love, her spirits have never dampened. At the age of 20, she finds herself on a train to Tokyo with hopes of reuniting with her current boyfriend. Nana Osaki, on the other hand, is feisty and prideful. After joining a local band during her high school days, she falls in love with music and one of the band members. However, when faced with the choice between her relationship and her musical career, she chooses the latter and separates from her boyfriend. On her 20th birthday, she boards the same train to Tokyo, like her namesake, where she aims to become a top vocalist. The two girls with the same name but very different aspirations find themselves sitting together on their journey to the city, and, as fate would have it, eventually share the same apartment. A deep and unique bond is then forged, where they will support each other in this saga of love, music, friendship, and heartbreak. [Written by MAL Rewrite]",
      background:
        "Nana has been published in English by VIZ Media under the Shojo Beat imprint since December 6, 2005; in Spain by Planeta Cómic since 2007; and in Argentina by Editorial Ivrea since 2009. The series was placed on hiatus since the July 2009 issue of Cookie due to the mangaka's sudden illness.",
      authors: [
        {
          mal_id: 1894,
          type: "people",
          name: "Yazawa, Ai",
          url: "https://myanimelist.net/people/1894/Ai_Yazawa",
        },
      ],
      serializations: [
        {
          mal_id: 15,
          type: "manga",
          name: "Cookie",
          url: "https://myanimelist.net/manga/magazine/15/Cookie",
        },
      ],
      genres: [
        {
          mal_id: 46,
          type: "manga",
          name: "Award Winning",
          url: "https://myanimelist.net/manga/genre/46/Award_Winning",
        },
        {
          mal_id: 8,
          type: "manga",
          name: "Drama",
          url: "https://myanimelist.net/manga/genre/8/Drama",
        },
        {
          mal_id: 22,
          type: "manga",
          name: "Romance",
          url: "https://myanimelist.net/manga/genre/22/Romance",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 50,
          type: "manga",
          name: "Adult Cast",
          url: "https://myanimelist.net/manga/genre/50/Adult_Cast",
        },
        {
          mal_id: 64,
          type: "manga",
          name: "Love Polygon",
          url: "https://myanimelist.net/manga/genre/64/Love_Polygon",
        },
        {
          mal_id: 19,
          type: "manga",
          name: "Music",
          url: "https://myanimelist.net/manga/genre/19/Music",
        },
      ],
      demographics: [
        {
          mal_id: 25,
          type: "manga",
          name: "Shoujo",
          url: "https://myanimelist.net/manga/genre/25/Shoujo",
        },
      ],
    },
    {
      mal_id: 44347,
      url: "https://myanimelist.net/manga/44347/One_Punch-Man",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/manga/3/80661.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/3/80661t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/3/80661l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/manga/3/80661.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/3/80661t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/3/80661l.webp",
        },
      },
      approved: !0,
      titles: [
        { type: "Default", title: "One Punch-Man" },
        { type: "Synonym", title: "Onepunchman" },
        { type: "Synonym", title: "Onepanman" },
        { type: "Synonym", title: "OPM" },
        { type: "Japanese", title: "ワンパンマン" },
        { type: "English", title: "One-Punch Man" },
        { type: "German", title: "ONE-PUNCH MAN" },
        { type: "French", title: "One-Punch Man" },
      ],
      title: "One Punch-Man",
      title_english: "One-Punch Man",
      title_japanese: "ワンパンマン",
      title_synonyms: ["Onepunchman", "Onepanman", "OPM"],
      type: "Manga",
      chapters: null,
      volumes: null,
      status: "Publishing",
      publishing: !0,
      published: {
        from: "2012-06-14T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 14, month: 6, year: 2012 },
          to: { day: null, month: null, year: null },
        },
        string: "Jun 14, 2012 to ?",
      },
      score: 8.75,
      scored: 8.75,
      scored_by: 228489,
      rank: 40,
      popularity: 6,
      members: 464402,
      favorites: 37874,
      synopsis:
        "After rigorously training for three years, the ordinary Saitama has gained immense strength which allows him to take out anyone and anything with just one punch. He decides to put his new skill to good use by becoming a hero. However, he quickly becomes bored with easily defeating monsters, and wants someone to give him a challenge to bring back the spark of being a hero. Upon bearing witness to Saitama's amazing power, Genos, a cyborg, is determined to become Saitama's apprentice. During this time, Saitama realizes he is neither getting the recognition that he deserves nor known by the people due to him not being a part of the Hero Association. Wanting to boost his reputation, Saitama decides to have Genos register with him, in exchange for taking him in as a pupil. Together, the two begin working their way up toward becoming true heroes, hoping to find strong enemies and earn respect in the process. [Written by MAL Rewrite]",
      background:
        "One Punch-Man is the manga remake of the original web comic by ONE. In 2014, the series was nominated for the 7th annual Manga Taishou Award and was ranked 7th place. The manga is published in English by VIZ Media under the Shonen Jump imprint; digitally since February 18, 2014, and physically since September 1, 2015. The English version was nominated for the 2015 Eisner Award for Best U.S. Edition of International Material—Asia. It is also published in Polish by J.P. Fantastica since December 5, 2015, in Spanish by Ivrea España since December 31, 2015, in Portuguese (Brazil) by Panini Comics since March 19, 2016, and has been published in Italian by Panini Comics under the Planet Manga imprint since April 7, 2016.",
      authors: [
        {
          mal_id: 1903,
          type: "people",
          name: "Murata, Yusuke",
          url: "https://myanimelist.net/people/1903/Yusuke_Murata",
        },
        {
          mal_id: 16993,
          type: "people",
          name: "ONE",
          url: "https://myanimelist.net/people/16993/ONE",
        },
      ],
      serializations: [
        {
          mal_id: 290,
          type: "manga",
          name: "Tonari no Young Jump",
          url: "https://myanimelist.net/manga/magazine/290/Tonari_no_Young_Jump",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "manga",
          name: "Action",
          url: "https://myanimelist.net/manga/genre/1/Action",
        },
        {
          mal_id: 4,
          type: "manga",
          name: "Comedy",
          url: "https://myanimelist.net/manga/genre/4/Comedy",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 20,
          type: "manga",
          name: "Parody",
          url: "https://myanimelist.net/manga/genre/20/Parody",
        },
        {
          mal_id: 31,
          type: "manga",
          name: "Super Power",
          url: "https://myanimelist.net/manga/genre/31/Super_Power",
        },
      ],
      demographics: [
        {
          mal_id: 41,
          type: "manga",
          name: "Seinen",
          url: "https://myanimelist.net/manga/genre/41/Seinen",
        },
      ],
    },
    {
      mal_id: 116778,
      url: "https://myanimelist.net/manga/116778/Chainsaw_Man",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/manga/3/216464.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/3/216464t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/3/216464l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/manga/3/216464.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/3/216464t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/3/216464l.webp",
        },
      },
      approved: !0,
      titles: [
        { type: "Default", title: "Chainsaw Man" },
        { type: "Japanese", title: "チェンソーマン" },
        { type: "English", title: "Chainsaw Man" },
      ],
      title: "Chainsaw Man",
      title_english: "Chainsaw Man",
      title_japanese: "チェンソーマン",
      title_synonyms: [],
      type: "Manga",
      chapters: null,
      volumes: null,
      status: "Publishing",
      publishing: !0,
      published: {
        from: "2018-12-03T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 3, month: 12, year: 2018 },
          to: { day: null, month: null, year: null },
        },
        string: "Dec 3, 2018 to ?",
      },
      score: 8.74,
      scored: 8.74,
      scored_by: 357501,
      rank: 41,
      popularity: 4,
      members: 582556,
      favorites: 78926,
      synopsis:
        "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash. Unfortunately, he has outlived his usefulness and is murdered by a devil in contract with the yakuza. However, in an unexpected turn of events, Pochita merges with Denji's dead body and grants him the powers of a chainsaw devil. Now able to transform parts of his body into chainsaws, a revived Denji uses his new abilities to quickly and brutally dispatch his enemies. Catching the eye of the official devil hunters who arrive at the scene, he is offered work at the Public Safety Bureau as one of them. Now with the means to face even the toughest of enemies, Denji will stop at nothing to achieve his simple teenage dreams. [Written by MAL Rewrite]",
      background:
        "As part of the JUMP START initiative, the first three chapters of Chainsaw Man were published in English in VIZ Media's digital Weekly Shounen Jump on the same day as the Japanese release. It has been published digitally as an English simulpub through MANGA Plus. The volumes have been published in English by VIZ Media under the Shonen Jump imprint since October 6, 2020. The first part of the series ended with 97 chapters on December 14, 2020. Serialization of the second part began on Shounen Jump+ with the release of chapter 98 on July 13, 2022.",
      authors: [
        {
          mal_id: 41158,
          type: "people",
          name: "Fujimoto, Tatsuki",
          url: "https://myanimelist.net/people/41158/Tatsuki_Fujimoto",
        },
      ],
      serializations: [
        {
          mal_id: 1209,
          type: "manga",
          name: "Shounen Jump+",
          url: "https://myanimelist.net/manga/magazine/1209/Shounen_Jump_",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "manga",
          name: "Action",
          url: "https://myanimelist.net/manga/genre/1/Action",
        },
        {
          mal_id: 46,
          type: "manga",
          name: "Award Winning",
          url: "https://myanimelist.net/manga/genre/46/Award_Winning",
        },
        {
          mal_id: 37,
          type: "manga",
          name: "Supernatural",
          url: "https://myanimelist.net/manga/genre/37/Supernatural",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 58,
          type: "manga",
          name: "Gore",
          url: "https://myanimelist.net/manga/genre/58/Gore",
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: "manga",
          name: "Shounen",
          url: "https://myanimelist.net/manga/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 26,
      url: "https://myanimelist.net/manga/26/Hunter_x_Hunter",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/manga/2/253119.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/2/253119t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/2/253119l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/manga/2/253119.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/2/253119t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/2/253119l.webp",
        },
      },
      approved: !0,
      titles: [
        { type: "Default", title: "Hunter x Hunter" },
        { type: "Synonym", title: "HxH" },
        { type: "Japanese", title: "HUNTER×HUNTER" },
        { type: "English", title: "Hunter x Hunter" },
        { type: "German", title: "Hunter X Hunter" },
        { type: "French", title: "Hunter X Hunter" },
      ],
      title: "Hunter x Hunter",
      title_english: "Hunter x Hunter",
      title_japanese: "HUNTER×HUNTER",
      title_synonyms: ["HxH"],
      type: "Manga",
      chapters: null,
      volumes: null,
      status: "Publishing",
      publishing: !0,
      published: {
        from: "1998-03-03T00:00:00+00:00",
        to: null,
        prop: {
          from: { day: 3, month: 3, year: 1998 },
          to: { day: null, month: null, year: null },
        },
        string: "Mar 3, 1998 to ?",
      },
      score: 8.73,
      scored: 8.73,
      scored_by: 120487,
      rank: 43,
      popularity: 24,
      members: 261621,
      favorites: 22938,
      synopsis: `"Secret treasure hoards, undiscovered wealth... mystical places, unexplored frontiers... 'The mysterious unknown.' There's magic in such words for those captivated by its spell. They are called 'Hunters'!" Gon Freecss wants to become a Hunter so he can find his father, a man who abandoned him to pursue a life of adventure. But it's not that simple: only one in one hundred thousand can pass the Hunter Exam, and that is just the first obstacle on his journey. During the Hunter Exam, Gon befriends many other potential Hunters, such as the mysterious Killua; the revenge-driven Kurapika; and Leorio, who aims to become a doctor. There's a world of adventure and peril awaiting, and those who embrace it with open arms can become the greatest Hunters of them all! [Written by MAL Rewrite]`,
      background:
        "Hunter x Hunter has been published in English by VIZ Media under the Shonen Jump Advanced imprint since April 5, 2005; in Brazilian Portuguese by Jbc since January 2008; in Spanish by Panini Comics since October 2012; and in Italian by Panini Comics. The series has been serialized irregularly since 2006 due to Yoshihiro Togashi's health problems.",
      authors: [
        {
          mal_id: 1893,
          type: "people",
          name: "Togashi, Yoshihiro",
          url: "https://myanimelist.net/people/1893/Yoshihiro_Togashi",
        },
      ],
      serializations: [
        {
          mal_id: 83,
          type: "manga",
          name: "Shounen Jump (Weekly)",
          url: "https://myanimelist.net/manga/magazine/83/Shounen_Jump_Weekly",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "manga",
          name: "Action",
          url: "https://myanimelist.net/manga/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "manga",
          name: "Adventure",
          url: "https://myanimelist.net/manga/genre/2/Adventure",
        },
        {
          mal_id: 10,
          type: "manga",
          name: "Fantasy",
          url: "https://myanimelist.net/manga/genre/10/Fantasy",
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [
        {
          mal_id: 27,
          type: "manga",
          name: "Shounen",
          url: "https://myanimelist.net/manga/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 513,
      url: "https://myanimelist.net/manga/513/Samurai_Deeper_Kyou",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/manga/3/157961.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/3/157961t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/3/157961l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/manga/3/157961.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/3/157961t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/3/157961l.webp",
        },
      },
      approved: !0,
      titles: [
        { type: "Default", title: "Samurai Deeper Kyou" },
        { type: "Synonym", title: "SDK" },
        { type: "Japanese", title: "SAMURAI DEEPER KYO" },
        { type: "English", title: "Samurai Deeper Kyo" },
      ],
      title: "Samurai Deeper Kyou",
      title_english: "Samurai Deeper Kyo",
      title_japanese: "SAMURAI DEEPER KYO",
      title_synonyms: ["SDK"],
      type: "Manga",
      chapters: 308,
      volumes: 38,
      status: "Finished",
      publishing: !1,
      published: {
        from: "1999-05-26T00:00:00+00:00",
        to: "2006-05-10T00:00:00+00:00",
        prop: {
          from: { day: 26, month: 5, year: 1999 },
          to: { day: 10, month: 5, year: 2006 },
        },
        string: "May 26, 1999 to May 10, 2006",
      },
      score: 7.69,
      scored: 7.69,
      scored_by: 10731,
      rank: 1709,
      popularity: 690,
      members: 24750,
      favorites: 906,
      synopsis:
        "At the dawn of the 17th century, at the end of the era of civil wars, in a world of chaos, the epic Battle of Sekigahara was joined. One man emerged from the largest battle ever fought on Japanese soil; a terrible warrior of unspeakable power, he was nicknamed 'the unconquerable.' Kyoshiro is a peaceful medicine peddler who harbors the soul of an assassin. He accompanies a young bounty hunter across Japan in search of a murderer and on a quest to discover the terrible secret of his own identity. (Source: Tokyopop)",
      background:
        "Tokyopop published the first 34 volumes of Samurai Deeper Kyou in English from June 10, 2003 to April 7, 2009. The remaining volumes were published in two-in-one omnibuses by Del Rey from December 15, 2009 to June 22, 2010.",
      authors: [
        {
          mal_id: 2465,
          type: "people",
          name: "Kamijyo, Akimine",
          url: "https://myanimelist.net/people/2465/Akimine_Kamijyo",
        },
      ],
      serializations: [
        {
          mal_id: 8,
          type: "manga",
          name: "Shounen Magazine (Weekly)",
          url: "https://myanimelist.net/manga/magazine/8/Shounen_Magazine_Weekly",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "manga",
          name: "Action",
          url: "https://myanimelist.net/manga/genre/1/Action",
        },
        {
          mal_id: 2,
          type: "manga",
          name: "Adventure",
          url: "https://myanimelist.net/manga/genre/2/Adventure",
        },
        {
          mal_id: 4,
          type: "manga",
          name: "Comedy",
          url: "https://myanimelist.net/manga/genre/4/Comedy",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 13,
          type: "manga",
          name: "Historical",
          url: "https://myanimelist.net/manga/genre/13/Historical",
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: "manga",
          name: "Shounen",
          url: "https://myanimelist.net/manga/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 8341,
      url: "https://myanimelist.net/manga/8341/Code_Breaker",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/manga/1/15122.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/1/15122t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/1/15122l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/manga/1/15122.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/1/15122t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/1/15122l.webp",
        },
      },
      approved: !0,
      titles: [
        { type: "Default", title: "Code:Breaker" },
        { type: "Synonym", title: "C0de:Breaker" },
        { type: "Japanese", title: "CØDE:BREAKER コード:ブレイカー" },
        { type: "English", title: "CØDE:BREAKER" },
      ],
      title: "Code:Breaker",
      title_english: "CØDE:BREAKER",
      title_japanese: "CØDE:BREAKER コード:ブレイカー",
      title_synonyms: ["C0de:Breaker"],
      type: "Manga",
      chapters: 230,
      volumes: 26,
      status: "Finished",
      publishing: !1,
      published: {
        from: "2008-06-09T00:00:00+00:00",
        to: "2013-07-20T00:00:00+00:00",
        prop: {
          from: { day: 9, month: 6, year: 2008 },
          to: { day: 20, month: 7, year: 2013 },
        },
        string: "Jun 9, 2008 to Jul 20, 2013",
      },
      score: 7.46,
      scored: 7.46,
      scored_by: 17914,
      rank: 3209,
      popularity: 385,
      members: 41778,
      favorites: 1018,
      synopsis:
        'Sakura Sakurakouji witnesses a large group of people being mercilessly burned alive in blue flames as a boy watches with cruel eyes. Moved by her unwavering sense of justice, she returns to the scene the next day. However, neither she nor the police is able to find any bodies or evidence that could suggest such a crime had taken place. At school, she meets new transfer student Rei Oogami, a charismatic boy that quickly wins over the class. Sakura recognizes him as the murderer and quickly learns that Rei is someone who exists outside the law: a "Code:Breaker." Despite him justifying his actions with the phrase "an eye for an eye, a tooth for a tooth, and evil for evil," Sakura is convinced that what Rei is doing is wrong and aims to stop him before anyone else gets hurt. [Written by MAL Rewrite]',
      background:
        "Code:Breaker was partially published in English by Del Rey Books, who published the first two volumes from July 27, 2010 to October 26, 2010, before they were taken over by Kodansha, and the license was dropped.",
      authors: [
        {
          mal_id: 2465,
          type: "people",
          name: "Kamijyo, Akimine",
          url: "https://myanimelist.net/people/2465/Akimine_Kamijyo",
        },
      ],
      serializations: [
        {
          mal_id: 8,
          type: "manga",
          name: "Shounen Magazine (Weekly)",
          url: "https://myanimelist.net/manga/magazine/8/Shounen_Magazine_Weekly",
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: "manga",
          name: "Action",
          url: "https://myanimelist.net/manga/genre/1/Action",
        },
        {
          mal_id: 4,
          type: "manga",
          name: "Comedy",
          url: "https://myanimelist.net/manga/genre/4/Comedy",
        },
        {
          mal_id: 8,
          type: "manga",
          name: "Drama",
          url: "https://myanimelist.net/manga/genre/8/Drama",
        },
        {
          mal_id: 7,
          type: "manga",
          name: "Mystery",
          url: "https://myanimelist.net/manga/genre/7/Mystery",
        },
        {
          mal_id: 22,
          type: "manga",
          name: "Romance",
          url: "https://myanimelist.net/manga/genre/22/Romance",
        },
        {
          mal_id: 37,
          type: "manga",
          name: "Supernatural",
          url: "https://myanimelist.net/manga/genre/37/Supernatural",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 23,
          type: "manga",
          name: "School",
          url: "https://myanimelist.net/manga/genre/23/School",
        },
        {
          mal_id: 31,
          type: "manga",
          name: "Super Power",
          url: "https://myanimelist.net/manga/genre/31/Super_Power",
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: "manga",
          name: "Shounen",
          url: "https://myanimelist.net/manga/genre/27/Shounen",
        },
      ],
    },
    {
      mal_id: 24294,
      url: "https://myanimelist.net/manga/24294/Ao_Haru_Ride",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/manga/2/256907.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/2/256907t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/2/256907l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/manga/2/256907.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/2/256907t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/2/256907l.webp",
        },
      },
      approved: !0,
      titles: [
        { type: "Default", title: "Ao Haru Ride" },
        { type: "Synonym", title: "Blue Spring Ride" },
        { type: "Synonym", title: "Aoharaido" },
        { type: "Synonym", title: "Strobe Edge" },
        { type: "Synonym", title: "Sono Omokage wo Shitteru" },
        { type: "Japanese", title: "アオハライド AO―HARU―RIDE" },
        { type: "English", title: "Ao Haru Ride" },
        { type: "German", title: "Blue Spring Ride" },
        { type: "Spanish", title: "Aoha Ride" },
        { type: "French", title: "Blue Spring Ride" },
      ],
      title: "Ao Haru Ride",
      title_english: "Ao Haru Ride",
      title_japanese: "アオハライド AO―HARU―RIDE",
      title_synonyms: [
        "Blue Spring Ride",
        "Aoharaido",
        "Strobe Edge",
        "Sono Omokage wo Shitteru",
      ],
      type: "Manga",
      chapters: 53,
      volumes: 13,
      status: "Finished",
      publishing: !1,
      published: {
        from: "2011-01-13T00:00:00+00:00",
        to: "2015-02-13T00:00:00+00:00",
        prop: {
          from: { day: 13, month: 1, year: 2011 },
          to: { day: 13, month: 2, year: 2015 },
        },
        string: "Jan 13, 2011 to Feb 13, 2015",
      },
      score: 8.14,
      scored: 8.14,
      scored_by: 92082,
      rank: 500,
      popularity: 41,
      members: 183342,
      favorites: 8876,
      synopsis:
        'While most girls desire popularity among boys, Futaba Yoshioka wants the exact opposite. After attracting many admirers back in middle school which resulted in her being shunned by her female classmates, she decided that high school will be her chance to revamp her image. Therefore, she starts acting unfeminine and indifferent to boys, allowing her to make some "friends" along the way. Little does Futaba know, her life will take another drastic turn when her first love, Kou Mabuchi, returns after his sudden disappearance years ago in middle school. Despite his extended absence, the fond memories they shared together still linger in her mind, and she wishes to return to those days. But she realizes that the sweet, gentle boy of the past has completely vanished, and in his place stands someone cold and pessimistic. While he admits that her feelings for him back then were mutual, he warns that they can never go back to the past, as everything, including him, has changed. Ao Haru Ride follows Futaba as she searches for true love and friendship, all while trying her best to stay true to herself. [Written by MAL Rewrite]',
      background:
        "Ao Haru Ride was adapted to a live-action film which released in Japan on December 13, 2014. This series was published in English by VIZ Media under the Shojo Beat imprint from October 2, 2018 to October 6, 2020. The series was published in Polish as Ścieżki Młodości: Ao Haru Ride by Waneko from February 2014 to February 2016. It has been published in Spain by Editorial Ivrea as Aoha Ride from March 2015 to February 2016, and in Argentina by the same publisher since June 2017.",
      authors: [
        {
          mal_id: 4142,
          type: "people",
          name: "Sakisaka, Io",
          url: "https://myanimelist.net/people/4142/Io_Sakisaka",
        },
      ],
      serializations: [
        {
          mal_id: 53,
          type: "manga",
          name: "Bessatsu Margaret",
          url: "https://myanimelist.net/manga/magazine/53/Bessatsu_Margaret",
        },
      ],
      genres: [
        {
          mal_id: 22,
          type: "manga",
          name: "Romance",
          url: "https://myanimelist.net/manga/genre/22/Romance",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 23,
          type: "manga",
          name: "School",
          url: "https://myanimelist.net/manga/genre/23/School",
        },
      ],
      demographics: [
        {
          mal_id: 25,
          type: "manga",
          name: "Shoujo",
          url: "https://myanimelist.net/manga/genre/25/Shoujo",
        },
      ],
    },
    {
      mal_id: 7378,
      url: "https://myanimelist.net/manga/7378/Strobe_Edge",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/manga/1/255194.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/1/255194t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/1/255194l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/manga/1/255194.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/1/255194t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/1/255194l.webp",
        },
      },
      approved: !0,
      titles: [
        { type: "Default", title: "Strobe Edge" },
        { type: "Synonym", title: "Colorless Dreamer" },
        { type: "Japanese", title: "ストロボ・エッジ" },
        { type: "English", title: "Strobe Edge" },
      ],
      title: "Strobe Edge",
      title_english: "Strobe Edge",
      title_japanese: "ストロボ・エッジ",
      title_synonyms: ["Colorless Dreamer"],
      type: "Manga",
      chapters: 43,
      volumes: 10,
      status: "Finished",
      publishing: !1,
      published: {
        from: "2007-06-13T00:00:00+00:00",
        to: "2010-08-11T00:00:00+00:00",
        prop: {
          from: { day: 13, month: 6, year: 2007 },
          to: { day: 11, month: 8, year: 2010 },
        },
        string: "Jun 13, 2007 to Aug 11, 2010",
      },
      score: 7.98,
      scored: 7.98,
      scored_by: 30236,
      rank: 775,
      popularity: 235,
      members: 64401,
      favorites: 2188,
      synopsis:
        "Through the eyes of Ninako Kinoshita, it seems as if everyone knows what love is. Even when it comes to her own feelings for her childhood friend Daiki Korenaga, it is her friends who attest she is in love. However, a drop of doubt forms in her heart when Ren Ichinose, an attractive idol of the school, accidentally breaks Ninako's phone charm on the train. His earnest promise to compensate for it touches Ninako and she wonders if this is what real love feels like. Love is like an apple: its outer appearance may look sweet, but its taste can be deceiving. For Ninako, she meets the bitterness of unrequited love as her very first. But as her knowing friends go through different experiences with love, Ninako struggles to understand its complex flavor and fails to notice the way a certain someone looks at only her. [Written by MAL Rewrite] Included one-shot: Volume 6: Colorless Dreamer",
      background:
        "Strobe Edge was published in English by VIZ Media under the Shojo Beat imprint from November 6, 2012 to May 6, 2014. The manga received two drama CD adaptations on August 25 and September 22, 2010, respectively, and a live-action film adaptation that was screened on March 14, 2015. It was also published in Spanish by Ivrea from March 2012 to February 2014.",
      authors: [
        {
          mal_id: 4142,
          type: "people",
          name: "Sakisaka, Io",
          url: "https://myanimelist.net/people/4142/Io_Sakisaka",
        },
      ],
      serializations: [
        {
          mal_id: 53,
          type: "manga",
          name: "Bessatsu Margaret",
          url: "https://myanimelist.net/manga/magazine/53/Bessatsu_Margaret",
        },
      ],
      genres: [
        {
          mal_id: 22,
          type: "manga",
          name: "Romance",
          url: "https://myanimelist.net/manga/genre/22/Romance",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 64,
          type: "manga",
          name: "Love Polygon",
          url: "https://myanimelist.net/manga/genre/64/Love_Polygon",
        },
        {
          mal_id: 23,
          type: "manga",
          name: "School",
          url: "https://myanimelist.net/manga/genre/23/School",
        },
      ],
      demographics: [
        {
          mal_id: 25,
          type: "manga",
          name: "Shoujo",
          url: "https://myanimelist.net/manga/genre/25/Shoujo",
        },
      ],
    },
    {
      mal_id: 31,
      url: "https://myanimelist.net/manga/31/Lovely★Complex",
      images: {
        jpg: {
          image_url: "https://cdn.myanimelist.net/images/manga/1/209659.jpg",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/1/209659t.jpg",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/1/209659l.jpg",
        },
        webp: {
          image_url: "https://cdn.myanimelist.net/images/manga/1/209659.webp",
          small_image_url:
            "https://cdn.myanimelist.net/images/manga/1/209659t.webp",
          large_image_url:
            "https://cdn.myanimelist.net/images/manga/1/209659l.webp",
        },
      },
      approved: !0,
      titles: [
        { type: "Default", title: "Lovely★Complex" },
        { type: "Synonym", title: "Love Com Plus" },
        { type: "Synonym", title: "Lovely Complex Plus" },
        { type: "Japanese", title: "ラブ★コン" },
        { type: "English", title: "Love★Com" },
      ],
      title: "Lovely★Complex",
      title_english: "Love★Com",
      title_japanese: "ラブ★コン",
      title_synonyms: ["Love Com Plus", "Lovely Complex Plus"],
      type: "Manga",
      chapters: 68,
      volumes: 17,
      status: "Finished",
      publishing: !1,
      published: {
        from: "2001-08-13T00:00:00+00:00",
        to: "2007-08-13T00:00:00+00:00",
        prop: {
          from: { day: 13, month: 8, year: 2001 },
          to: { day: 13, month: 8, year: 2007 },
        },
        string: "Aug 13, 2001 to Aug 13, 2007",
      },
      score: 8.33,
      scored: 8.33,
      scored_by: 27143,
      rank: 271,
      popularity: 247,
      members: 61807,
      favorites: 2776,
      synopsis:
        "When the taller than average 172 cm Risa Koizumi learns that her occasional nemesis, the shorter than average 156 cm Atsushi Ootani, is romantically interested in her friend, she decides to team up with him. After all, she also has feelings for his friend. Unluckily, however, their respective crushes fall for each other instead. Determined to find new love after their recent misfortunes, the pair decide to cheer each other on while maintaining their usual dynamic of constant bickering. Although they continually deny it, Risa and Ootani are more similar than they like to admit: they both have unusual heights, failing grades, identical tastes in food, and a tendency to act extremely childish. Together, they inspire laughter among their peers as a so-called comedic duo. Could the love that these two are looking for be closer than they think? [Written by MAL Rewrite] Included one-shots: Volume 12: Hoshi ni Nattemo Aishiteru Volume 16: Bokura no Ibasho",
      background:
        "Lovely★Complex won the 49th Shogakukan Manga Award for shoujo in 2004. The manga was published in English as Love★Com by VIZ Media under the Shojo Beat imprint from July 3, 2007 to March 2, 2010 and was adapted to two drama CDs, a live-action movie and PlayStation 2 game in 2006, and a TV anime series in 2007.",
      authors: [
        {
          mal_id: 1896,
          type: "people",
          name: "Nakahara, Aya",
          url: "https://myanimelist.net/people/1896/Aya_Nakahara",
        },
      ],
      serializations: [
        {
          mal_id: 53,
          type: "manga",
          name: "Bessatsu Margaret",
          url: "https://myanimelist.net/manga/magazine/53/Bessatsu_Margaret",
        },
      ],
      genres: [
        {
          mal_id: 46,
          type: "manga",
          name: "Award Winning",
          url: "https://myanimelist.net/manga/genre/46/Award_Winning",
        },
        {
          mal_id: 4,
          type: "manga",
          name: "Comedy",
          url: "https://myanimelist.net/manga/genre/4/Comedy",
        },
        {
          mal_id: 8,
          type: "manga",
          name: "Drama",
          url: "https://myanimelist.net/manga/genre/8/Drama",
        },
        {
          mal_id: 22,
          type: "manga",
          name: "Romance",
          url: "https://myanimelist.net/manga/genre/22/Romance",
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 23,
          type: "manga",
          name: "School",
          url: "https://myanimelist.net/manga/genre/23/School",
        },
      ],
      demographics: [
        {
          mal_id: 25,
          type: "manga",
          name: "Shoujo",
          url: "https://myanimelist.net/manga/genre/25/Shoujo",
        },
      ],
    },
  ],
  i8 = () =>
    E(eo, {
      children: E(
        mh,
        {
          columns: { sm: 1, md: 2, lg: 3, xl: 5 },
          padding: "10px",
          spacing: 10,
          children: sw.map((t) => E(ow, { manga: t }, On())),
        },
        On()
      ),
    }),
  a8 = ["Adventure", "Action", "Award Winning", "Romance"];
let o8 = a8;
const s8 = ({ onSelectedGrenre: e }) =>
    E(Fu, {
      paddingTop: "30",
      children: E(
        ew,
        {
          paddingY: "5px",
          children: o8.map((t) =>
            E(
              Iu,
              {
                children: E(qS, {
                  fontSize: "lg",
                  color: "teal.500",
                  variant: "link",
                  onClick: () => e(t),
                  children: t,
                }),
              },
              On()
            )
          ),
        },
        On()
      ),
    }),
  l8 = ({ genreSelectedGrid: e }) =>
    E(eo, {
      children: E(
        mh,
        {
          columns: { sm: 1, md: 2, lg: 3, xl: 5 },
          padding: "10px",
          spacing: 10,
          children: sw.map((n) =>
            n.genres[0].name === e ? E(ow, { manga: n }, On()) : E(eo, {})
          ),
        },
        On()
      ),
    });
function u8() {
  const [e, t] = k.useState("");
  return Ve(fh, {
    templateAreas: { base: '"nav" "main"', lg: '"nav nav" "aside main"' },
    templateColumns: { base: "1fr", lg: "500px , 1fr" },
    children: [
      E(al, { area: "nav", children: E(ZD, {}) }),
      Ve(iw, {
        above: "lg",
        children: [
          E(al, {
            padding: 5,
            area: "aside",
            children: E(s8, { onSelectedGrenre: t }),
          }),
          Ve(al, {
            className: "mangasList",
            area: "main",
            children: [
              E(hh, { paddingLeft: 2, children: "Mangas" }),
              e === ""
                ? E(i8, {}, On())
                : E(l8, { genreSelectedGrid: e }, On()),
            ],
          }),
        ],
      }),
    ],
  });
}
const c8 = { initialColorMode: "dark" },
  s0 = UA({ config: c8 });
Zc.createRoot(document.getElementById("root")).render(
  E(Vi.StrictMode, {
    children: Ve(lD, {
      theme: s0,
      children: [
        E(eC, { initialColorMode: s0.config.initialColorMode }),
        E(u8, {}),
      ],
    }),
  })
);
