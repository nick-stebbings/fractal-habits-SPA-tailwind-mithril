/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 78);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hyperscript = __webpack_require__(115)
var request = __webpack_require__(118)
var mountRedraw = __webpack_require__(32)

var m = function m() { return hyperscript.apply(this, arguments) }
m.m = hyperscript
m.trust = hyperscript.trust
m.fragment = hyperscript.fragment
m.mount = mountRedraw.mount
m.route = __webpack_require__(123)
m.render = __webpack_require__(44)
m.redraw = mountRedraw.redraw
m.request = request.request
m.jsonp = request.jsonp
m.parseQueryString = __webpack_require__(47)
m.buildQueryString = __webpack_require__(45)
m.parsePathname = __webpack_require__(34)
m.buildPathname = __webpack_require__(33)
m.vnode = __webpack_require__(7)
m.PromisePolyfill = __webpack_require__(41)

module.exports = m


/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clientRoutes; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_scripts_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _assets_scripts_utilities__WEBPACK_IMPORTED_MODULE_1__["d"]; });



axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = "http://127.0.0.1:9292/api";
axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Accept"] = "application/json;charset=utf-8";
axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Content-Type"] = "application/json;charset=utf-8";
axios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.response.use(function (res) {
  return res;
}, _assets_scripts_utilities__WEBPACK_IMPORTED_MODULE_1__[/* handleAndRethrow */ "c"]); // Indicates whether or not cross-site Access-Control requests
// should be made using credentials

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true;

var clientRoutes = function clientRoutes(basePath) {
  return {
    show_all: function show_all() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(basePath);
    },
    show_one: function show_one(id) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(basePath, "/").concat(id));
    },
    create: function create(attrs) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(basePath, JSON.stringify(attrs));
    },
    "delete": function _delete(id) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("".concat(basePath, "/").concat(id));
    },
    replace: function replace(id, update) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("".concat(basePath, "/").concat(id), update);
    },
    update: function update(id, _update) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch("".concat(basePath, "/").concat(id), _update);
    }
  };
};



/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return d3visPageMaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleAndRethrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return handleErrorType; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);


Date.prototype.toDateInputValue = function () {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
};

var d3visPageMaker = function d3visPageMaker(layoutView, pageView) {
  var page = {
    view: function view() {
      return m(layoutView, m(pageView));
    }
  }; // Create a visualisation-containing div element with random ID

  var divId = "svg_container_" + Math.floor(Math.random() * 1000000000) + 1;

  page.view = function () {
    // Pass a selector to the vis component, representing the div element where D3 can mutate the DOM
    var d3Canvas = m("div", {
      id: divId
    });
    return m(layoutView, m(pageView, d3Canvas));
  };

  page.oncreate = function () {
    // Pass an appended SVG selection to the vis component to consume
    pageView.content(Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])("div#" + divId).classed("h-full", true).append("svg").attr("width", "100%").attr("height", "100%"));
  };

  return page;
};

var debounce = function debounce(func, delay) {
  var timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      return func.apply(null, args);
    }, delay);
  };
};

var handleAndRethrow = function handleAndRethrow(err) {
  if (!err.response) {
    console.log(err.stack);
    window.FlashMessage.error("Network Error: API is unavailable");
  } else {
    window.FlashMessage.info("".concat(err.response.status, " code returned"));
  }

  throw err;
};

var handleErrorType = function handleErrorType(err) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'warning';

  switch (type) {
    // TODO: Catrgorise by status code.
    case 'info':
      window.FlashMessage.info(err.response.body);
      break;

    case 'warning':
      window.FlashMessage.warning(err.response.body);
      break;

    default:
      window.FlashMessage.error(err.response.body);
      break;
  }
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {/* harmony import */ var _store_habit_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _FormHeader_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony import */ var _FormContainer_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
/* harmony import */ var _FormInputGroup_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
// src/ui/view/components/CreateForm.jsx




var CreateForm = {
  oncreate: function oncreate(_ref) {
    var attrs = _ref.attrs;
    document.getElementById("initiation-date").value = new Date().toDateInputValue();
    document.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault();
      var data = {};
      var FD = new FormData(e.target);
      FD.forEach(function (value, key) {
        return data[key.replace(/\-/g, "_")] = value;
      }); // Assign values while swapping for snake_case

      data['domain_id'] = attrs.domain().id;
      data['habit_node_id'] = 1;
      _store_habit_store_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].submit(data)["catch"](function (err) {
        err.status ? window.FlashMessage.error(err.status) : window.FlashMessage.error(data);
      });
    });
  },
  view: function view(_ref2) {
    var attrs = _ref2.attrs;
    return m("div", {
      "class": "md:max-w-1/2 lg:max-w-1/3 sm:w-2/3 flex flex-col justify-between w-full px-4 sm:px-0 mb-16"
    }, m("form", {
      id: "create-".concat(attrs.resourceName),
      action: "",
      method: ""
    }, m(_FormHeader_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      iconPath: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Create a ".concat(attrs.resourceName),
      description: attrs.resourceDescription
    }), m(_FormContainer_jsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], [m(_FormInputGroup_jsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      name: "habit-name",
      label: "Habit Name"
    }, m("input[type=text]", {
      name: "name",
      id: "habit-title",
      "class": "form-input",
      placeholder: "e.g. Hydrate in the A.M."
    })), m(_FormInputGroup_jsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      name: "habit-description",
      label: "Habit Description"
    }, m("input[type=text]", {
      name: "description",
      id: "habit-description",
      "class": "form-input",
      placeholder: "e.g. Drinking water each day after waking"
    })), m(_FormInputGroup_jsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      name: "initiation_date",
      label: "Initiation Date"
    }, m("input[type=date]", {
      id: "initiation-date",
      name: "initiation-date",
      "class": "form-input w-3/4 sm:w-2/3 md:w-1/2"
    }))]), m("div", {
      "class": "button-container bg-white px-4 py-3 border-t border-gray-200"
    }, m("button", {
      name: "close-modal",
      type: "button",
      id: "close-modal",
      "class": "bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white focus:outline-none"
    }, "Forget It"), m("button", {
      name: "submit",
      value: "submit",
      type: "submit",
      "class": "bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white focus:outline-none"
    }, "Start Tracking"))));
  }
};
/* harmony default export */ __webpack_exports__["a"] = (CreateForm);
/* 
        // {
        //   m(FormContainer, [
        //     m(InputGroup, { label: "Parent" }, [
        //       m("input[type=text]", {
        //         class: "form-input ",
        //         id: "parent",
        //       }),
        //       m("input[type=submit]", {
        //         value: "Submit Root",
        //         onclick: (event) => {
        //           event.preventDefault();
        //           NodeStore.submit(null);
        //         },
        //       }),
        //       m("input[type=submit]", {
        //         value: "Submit",
        //         onclick: (event) => {
        //           event.preventDefault();
        //           NodeStore.submit(
        //             Number(document.querySelector("#parent").value)
        //           );
        //         },
        //       }),
        //       m("input[type=submit]", {
        //         value: "Delete",
        //         onclick: (event) => {
        //           event.preventDefault();
        //           NodeStore.runDelete(
        //             Number(document.querySelector("#parent").value)
        //           );
        //         },
        //       }),
        //     ]),
        //   ]);
        // } */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hyperscript = __webpack_require__(38)

hyperscript.trust = __webpack_require__(116)
hyperscript.fragment = __webpack_require__(117)

module.exports = hyperscript


/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(7)

module.exports = function(html) {
	if (html == null) html = ""
	return Vnode("<", undefined, undefined, html, undefined, undefined)
}


/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(7)
var hyperscriptVnode = __webpack_require__(39)

module.exports = function() {
	var vnode = hyperscriptVnode.apply(0, arguments)

	vnode.tag = "["
	vnode.children = Vnode.normalizeChildren(vnode.children)
	return vnode
}


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PromisePolyfill = __webpack_require__(40)
var mountRedraw = __webpack_require__(32)

module.exports = __webpack_require__(122)(window, PromisePolyfill, mountRedraw.redraw)


/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(31), __webpack_require__(43)))

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(7)

module.exports = function($window) {
	var $doc = $window && $window.document
	var currentRedraw

	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}

	function getNameSpace(vnode) {
		return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag]
	}

	//sanity check to discourage people from doing `vnode.state = ...`
	function checkState(vnode, original) {
		if (vnode.state !== original) throw new Error("`vnode.state` must not be modified")
	}

	//Note: the hook is passed as the `this` argument to allow proxying the
	//arguments without requiring a full array allocation to do so. It also
	//takes advantage of the fact the current `vnode` is the first argument in
	//all lifecycle methods.
	function callHook(vnode) {
		var original = vnode.state
		try {
			return this.apply(original, arguments)
		} finally {
			checkState(vnode, original)
		}
	}

	// IE11 (at least) throws an UnspecifiedError when accessing document.activeElement when
	// inside an iframe. Catch and swallow this error, and heavy-handidly return null.
	function activeElement() {
		try {
			return $doc.activeElement
		} catch (e) {
			return null
		}
	}
	//create
	function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				createNode(parent, vnode, hooks, ns, nextSibling)
			}
		}
	}
	function createNode(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		if (typeof tag === "string") {
			vnode.state = {}
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
			switch (tag) {
				case "#": createText(parent, vnode, nextSibling); break
				case "<": createHTML(parent, vnode, ns, nextSibling); break
				case "[": createFragment(parent, vnode, hooks, ns, nextSibling); break
				default: createElement(parent, vnode, hooks, ns, nextSibling)
			}
		}
		else createComponent(parent, vnode, hooks, ns, nextSibling)
	}
	function createText(parent, vnode, nextSibling) {
		vnode.dom = $doc.createTextNode(vnode.children)
		insertNode(parent, vnode.dom, nextSibling)
	}
	var possibleParents = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}
	function createHTML(parent, vnode, ns, nextSibling) {
		var match = vnode.children.match(/^\s*?<(\w+)/im) || []
		// not using the proper parent makes the child element(s) vanish.
		//     var div = document.createElement("div")
		//     div.innerHTML = "<td>i</td><td>j</td>"
		//     console.log(div.innerHTML)
		// --> "ij", no <td> in sight.
		var temp = $doc.createElement(possibleParents[match[1]] || "div")
		if (ns === "http://www.w3.org/2000/svg") {
			temp.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\">" + vnode.children + "</svg>"
			temp = temp.firstChild
		} else {
			temp.innerHTML = vnode.children
		}
		vnode.dom = temp.firstChild
		vnode.domSize = temp.childNodes.length
		// Capture nodes to remove, so we don't confuse them.
		vnode.instance = []
		var fragment = $doc.createDocumentFragment()
		var child
		while (child = temp.firstChild) {
			vnode.instance.push(child)
			fragment.appendChild(child)
		}
		insertNode(parent, fragment, nextSibling)
	}
	function createFragment(parent, vnode, hooks, ns, nextSibling) {
		var fragment = $doc.createDocumentFragment()
		if (vnode.children != null) {
			var children = vnode.children
			createNodes(fragment, children, 0, children.length, hooks, null, ns)
		}
		vnode.dom = fragment.firstChild
		vnode.domSize = fragment.childNodes.length
		insertNode(parent, fragment, nextSibling)
	}
	function createElement(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		var attrs = vnode.attrs
		var is = attrs && attrs.is

		ns = getNameSpace(vnode) || ns

		var element = ns ?
			is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
			is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
		vnode.dom = element

		if (attrs != null) {
			setAttrs(vnode, attrs, ns)
		}

		insertNode(parent, element, nextSibling)

		if (!maybeSetContentEditable(vnode)) {
			if (vnode.text != null) {
				if (vnode.text !== "") element.textContent = vnode.text
				else vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			}
			if (vnode.children != null) {
				var children = vnode.children
				createNodes(element, children, 0, children.length, hooks, null, ns)
				if (vnode.tag === "select" && attrs != null) setLateSelectAttrs(vnode, attrs)
			}
		}
	}
	function initComponent(vnode, hooks) {
		var sentinel
		if (typeof vnode.tag.view === "function") {
			vnode.state = Object.create(vnode.tag)
			sentinel = vnode.state.view
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
		} else {
			vnode.state = void 0
			sentinel = vnode.tag
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
			vnode.state = (vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function") ? new vnode.tag(vnode) : vnode.tag(vnode)
		}
		initLifecycle(vnode.state, vnode, hooks)
		if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		sentinel.$$reentrantLock$$ = null
	}
	function createComponent(parent, vnode, hooks, ns, nextSibling) {
		initComponent(vnode, hooks)
		if (vnode.instance != null) {
			createNode(parent, vnode.instance, hooks, ns, nextSibling)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0
		}
		else {
			vnode.domSize = 0
		}
	}

	//update
	/**
	 * @param {Element|Fragment} parent - the parent element
	 * @param {Vnode[] | null} old - the list of vnodes of the last `render()` call for
	 *                               this part of the tree
	 * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.
	 * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)
	 * @param {Element | null} nextSibling - the next DOM node if we're dealing with a
	 *                                       fragment that is not the last item in its
	 *                                       parent
	 * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any
	 * @returns void
	 */
	// This function diffs and patches lists of vnodes, both keyed and unkeyed.
	//
	// We will:
	//
	// 1. describe its general structure
	// 2. focus on the diff algorithm optimizations
	// 3. discuss DOM node operations.

	// ## Overview:
	//
	// The updateNodes() function:
	// - deals with trivial cases
	// - determines whether the lists are keyed or unkeyed based on the first non-null node
	//   of each list.
	// - diffs them and patches the DOM if needed (that's the brunt of the code)
	// - manages the leftovers: after diffing, are there:
	//   - old nodes left to remove?
	// 	 - new nodes to insert?
	// 	 deal with them!
	//
	// The lists are only iterated over once, with an exception for the nodes in `old` that
	// are visited in the fourth part of the diff and in the `removeNodes` loop.

	// ## Diffing
	//
	// Reading https://github.com/localvoid/ivi/blob/ddc09d06abaef45248e6133f7040d00d3c6be853/packages/ivi/src/vdom/implementation.ts#L617-L837
	// may be good for context on longest increasing subsequence-based logic for moving nodes.
	//
	// In order to diff keyed lists, one has to
	//
	// 1) match nodes in both lists, per key, and update them accordingly
	// 2) create the nodes present in the new list, but absent in the old one
	// 3) remove the nodes present in the old list, but absent in the new one
	// 4) figure out what nodes in 1) to move in order to minimize the DOM operations.
	//
	// To achieve 1) one can create a dictionary of keys => index (for the old list), then iterate
	// over the new list and for each new vnode, find the corresponding vnode in the old list using
	// the map.
	// 2) is achieved in the same step: if a new node has no corresponding entry in the map, it is new
	// and must be created.
	// For the removals, we actually remove the nodes that have been updated from the old list.
	// The nodes that remain in that list after 1) and 2) have been performed can be safely removed.
	// The fourth step is a bit more complex and relies on the longest increasing subsequence (LIS)
	// algorithm.
	//
	// the longest increasing subsequence is the list of nodes that can remain in place. Imagine going
	// from `1,2,3,4,5` to `4,5,1,2,3` where the numbers are not necessarily the keys, but the indices
	// corresponding to the keyed nodes in the old list (keyed nodes `e,d,c,b,a` => `b,a,e,d,c` would
	//  match the above lists, for example).
	//
	// In there are two increasing subsequences: `4,5` and `1,2,3`, the latter being the longest. We
	// can update those nodes without moving them, and only call `insertNode` on `4` and `5`.
	//
	// @localvoid adapted the algo to also support node deletions and insertions (the `lis` is actually
	// the longest increasing subsequence *of old nodes still present in the new list*).
	//
	// It is a general algorithm that is fireproof in all circumstances, but it requires the allocation
	// and the construction of a `key => oldIndex` map, and three arrays (one with `newIndex => oldIndex`,
	// the `LIS` and a temporary one to create the LIS).
	//
	// So we cheat where we can: if the tails of the lists are identical, they are guaranteed to be part of
	// the LIS and can be updated without moving them.
	//
	// If two nodes are swapped, they are guaranteed not to be part of the LIS, and must be moved (with
	// the exception of the last node if the list is fully reversed).
	//
	// ## Finding the next sibling.
	//
	// `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.
	// When the list is being traversed top-down, at any index, the DOM nodes up to the previous
	// vnode reflect the content of the new list, whereas the rest of the DOM nodes reflect the old
	// list. The next sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.
	//
	// In the other scenarios (swaps, upwards traversal, map-based diff),
	// the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the
	// bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node
	// as the next sibling (cached in the `nextSibling` variable).


	// ## DOM node moves
	//
	// In most scenarios `updateNode()` and `createNode()` perform the DOM operations. However,
	// this is not the case if the node moved (second and fourth part of the diff algo). We move
	// the old DOM nodes before updateNode runs because it enables us to use the cached `nextSibling`
	// variable rather than fetching it using `getNextSibling()`.
	//
	// The fourth part of the diff currently inserts nodes unconditionally, leading to issues
	// like #1791 and #1999. We need to be smarter about those situations where adjascent old
	// nodes remain together in the new list in a way that isn't covered by parts one and
	// three of the diff algo.

	function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
		if (old === vnodes || old == null && vnodes == null) return
		else if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)
		else if (vnodes == null || vnodes.length === 0) removeNodes(parent, old, 0, old.length)
		else {
			var isOldKeyed = old[0] != null && old[0].key != null
			var isKeyed = vnodes[0] != null && vnodes[0].key != null
			var start = 0, oldStart = 0
			if (!isOldKeyed) while (oldStart < old.length && old[oldStart] == null) oldStart++
			if (!isKeyed) while (start < vnodes.length && vnodes[start] == null) start++
			if (isKeyed === null && isOldKeyed == null) return // both lists are full of nulls
			if (isOldKeyed !== isKeyed) {
				removeNodes(parent, old, oldStart, old.length)
				createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else if (!isKeyed) {
				// Don't index past the end of either list (causes deopts).
				var commonLength = old.length < vnodes.length ? old.length : vnodes.length
				// Rewind if necessary to the first non-null index on either side.
				// We could alternatively either explicitly create or remove nodes when `start !== oldStart`
				// but that would be optimizing for sparse lists which are more rare than dense ones.
				start = start < oldStart ? start : oldStart
				for (; start < commonLength; start++) {
					o = old[start]
					v = vnodes[start]
					if (o === v || o == null && v == null) continue
					else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling))
					else if (v == null) removeNode(parent, o)
					else updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns)
				}
				if (old.length > commonLength) removeNodes(parent, old, start, old.length)
				if (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else {
				// keyed diff
				var oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oe, ve, topSibling

				// bottom-up
				while (oldEnd >= oldStart && end >= start) {
					oe = old[oldEnd]
					ve = vnodes[end]
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
				}
				// top-down
				while (oldEnd >= oldStart && end >= start) {
					o = old[oldStart]
					v = vnodes[start]
					if (o.key !== v.key) break
					oldStart++, start++
					if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns)
				}
				// swaps and list reversals
				while (oldEnd >= oldStart && end >= start) {
					if (start === end) break
					if (o.key !== ve.key || oe.key !== v.key) break
					topSibling = getNextSibling(old, oldStart, nextSibling)
					moveNodes(parent, oe, topSibling)
					if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns)
					if (++start <= --end) moveNodes(parent, o, nextSibling)
					if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldStart++; oldEnd--
					oe = old[oldEnd]
					ve = vnodes[end]
					o = old[oldStart]
					v = vnodes[start]
				}
				// bottom up once again
				while (oldEnd >= oldStart && end >= start) {
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
					oe = old[oldEnd]
					ve = vnodes[end]
				}
				if (start > end) removeNodes(parent, old, oldStart, oldEnd + 1)
				else if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
				else {
					// inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul
					var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li=0, i=0, pos = 2147483647, matched = 0, map, lisIndices
					for (i = 0; i < vnodesLength; i++) oldIndices[i] = -1
					for (i = end; i >= start; i--) {
						if (map == null) map = getKeyMap(old, oldStart, oldEnd + 1)
						ve = vnodes[i]
						var oldIndex = map[ve.key]
						if (oldIndex != null) {
							pos = (oldIndex < pos) ? oldIndex : -1 // becomes -1 if nodes were re-ordered
							oldIndices[i-start] = oldIndex
							oe = old[oldIndex]
							old[oldIndex] = null
							if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
							if (ve.dom != null) nextSibling = ve.dom
							matched++
						}
					}
					nextSibling = originalNextSibling
					if (matched !== oldEnd - oldStart + 1) removeNodes(parent, old, oldStart, oldEnd + 1)
					if (matched === 0) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
					else {
						if (pos === -1) {
							// the indices of the indices of the items that are part of the
							// longest increasing subsequence in the oldIndices list
							lisIndices = makeLisIndices(oldIndices)
							li = lisIndices.length - 1
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								else {
									if (lisIndices[li] === i - start) li--
									else moveNodes(parent, v, nextSibling)
								}
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						} else {
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						}
					}
				}
			}
		}
	}
	function updateNode(parent, old, vnode, hooks, nextSibling, ns) {
		var oldTag = old.tag, tag = vnode.tag
		if (oldTag === tag) {
			vnode.state = old.state
			vnode.events = old.events
			if (shouldNotUpdate(vnode, old)) return
			if (typeof oldTag === "string") {
				if (vnode.attrs != null) {
					updateLifecycle(vnode.attrs, vnode, hooks)
				}
				switch (oldTag) {
					case "#": updateText(old, vnode); break
					case "<": updateHTML(parent, old, vnode, ns, nextSibling); break
					case "[": updateFragment(parent, old, vnode, hooks, nextSibling, ns); break
					default: updateElement(old, vnode, hooks, ns)
				}
			}
			else updateComponent(parent, old, vnode, hooks, nextSibling, ns)
		}
		else {
			removeNode(parent, old)
			createNode(parent, vnode, hooks, ns, nextSibling)
		}
	}
	function updateText(old, vnode) {
		if (old.children.toString() !== vnode.children.toString()) {
			old.dom.nodeValue = vnode.children
		}
		vnode.dom = old.dom
	}
	function updateHTML(parent, old, vnode, ns, nextSibling) {
		if (old.children !== vnode.children) {
			removeHTML(parent, old)
			createHTML(parent, vnode, ns, nextSibling)
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
			vnode.instance = old.instance
		}
	}
	function updateFragment(parent, old, vnode, hooks, nextSibling, ns) {
		updateNodes(parent, old.children, vnode.children, hooks, nextSibling, ns)
		var domSize = 0, children = vnode.children
		vnode.dom = null
		if (children != null) {
			for (var i = 0; i < children.length; i++) {
				var child = children[i]
				if (child != null && child.dom != null) {
					if (vnode.dom == null) vnode.dom = child.dom
					domSize += child.domSize || 1
				}
			}
			if (domSize !== 1) vnode.domSize = domSize
		}
	}
	function updateElement(old, vnode, hooks, ns) {
		var element = vnode.dom = old.dom
		ns = getNameSpace(vnode) || ns

		if (vnode.tag === "textarea") {
			if (vnode.attrs == null) vnode.attrs = {}
			if (vnode.text != null) {
				vnode.attrs.value = vnode.text //FIXME handle multiple children
				vnode.text = undefined
			}
		}
		updateAttrs(vnode, old.attrs, vnode.attrs, ns)
		if (!maybeSetContentEditable(vnode)) {
			if (old.text != null && vnode.text != null && vnode.text !== "") {
				if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text
			}
			else {
				if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)]
				if (vnode.text != null) vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
				updateNodes(element, old.children, vnode.children, hooks, null, ns)
			}
		}
	}
	function updateComponent(parent, old, vnode, hooks, nextSibling, ns) {
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		updateLifecycle(vnode.state, vnode, hooks)
		if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks)
		if (vnode.instance != null) {
			if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling)
			else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, ns)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.instance.domSize
		}
		else if (old.instance != null) {
			removeNode(parent, old.instance)
			vnode.dom = undefined
			vnode.domSize = 0
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
		}
	}
	function getKeyMap(vnodes, start, end) {
		var map = Object.create(null)
		for (; start < end; start++) {
			var vnode = vnodes[start]
			if (vnode != null) {
				var key = vnode.key
				if (key != null) map[key] = start
			}
		}
		return map
	}
	// Lifted from ivi https://github.com/ivijs/ivi/
	// takes a list of unique numbers (-1 is special and can
	// occur multiple times) and returns an array with the indices
	// of the items that are part of the longest increasing
	// subsequece
	var lisTemp = []
	function makeLisIndices(a) {
		var result = [0]
		var u = 0, v = 0, i = 0
		var il = lisTemp.length = a.length
		for (var i = 0; i < il; i++) lisTemp[i] = a[i]
		for (var i = 0; i < il; ++i) {
			if (a[i] === -1) continue
			var j = result[result.length - 1]
			if (a[j] < a[i]) {
				lisTemp[i] = j
				result.push(i)
				continue
			}
			u = 0
			v = result.length - 1
			while (u < v) {
				// Fast integer average without overflow.
				// eslint-disable-next-line no-bitwise
				var c = (u >>> 1) + (v >>> 1) + (u & v & 1)
				if (a[result[c]] < a[i]) {
					u = c + 1
				}
				else {
					v = c
				}
			}
			if (a[i] < a[result[u]]) {
				if (u > 0) lisTemp[i] = result[u - 1]
				result[u] = i
			}
		}
		u = result.length
		v = result[u - 1]
		while (u-- > 0) {
			result[u] = v
			v = lisTemp[v]
		}
		lisTemp.length = 0
		return result
	}

	function getNextSibling(vnodes, i, nextSibling) {
		for (; i < vnodes.length; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}

	// This covers a really specific edge case:
	// - Parent node is keyed and contains child
	// - Child is removed, returns unresolved promise in `onbeforeremove`
	// - Parent node is moved in keyed diff
	// - Remaining children still need moved appropriately
	//
	// Ideally, I'd track removed nodes as well, but that introduces a lot more
	// complexity and I'm not exactly interested in doing that.
	function moveNodes(parent, vnode, nextSibling) {
		var frag = $doc.createDocumentFragment()
		moveChildToFrag(parent, frag, vnode)
		insertNode(parent, frag, nextSibling)
	}
	function moveChildToFrag(parent, frag, vnode) {
		// Dodge the recursion overhead in a few of the most common cases.
		while (vnode.dom != null && vnode.dom.parentNode === parent) {
			if (typeof vnode.tag !== "string") {
				vnode = vnode.instance
				if (vnode != null) continue
			} else if (vnode.tag === "<") {
				for (var i = 0; i < vnode.instance.length; i++) {
					frag.appendChild(vnode.instance[i])
				}
			} else if (vnode.tag !== "[") {
				// Don't recurse for text nodes *or* elements, just fragments
				frag.appendChild(vnode.dom)
			} else if (vnode.children.length === 1) {
				vnode = vnode.children[0]
				if (vnode != null) continue
			} else {
				for (var i = 0; i < vnode.children.length; i++) {
					var child = vnode.children[i]
					if (child != null) moveChildToFrag(parent, frag, child)
				}
			}
			break
		}
	}

	function insertNode(parent, dom, nextSibling) {
		if (nextSibling != null) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}

	function maybeSetContentEditable(vnode) {
		if (vnode.attrs == null || (
			vnode.attrs.contenteditable == null && // attribute
			vnode.attrs.contentEditable == null // property
		)) return false
		var children = vnode.children
		if (children != null && children.length === 1 && children[0].tag === "<") {
			var content = children[0].children
			if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content
		}
		else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted")
		return true
	}

	//remove
	function removeNodes(parent, vnodes, start, end) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) removeNode(parent, vnode)
		}
	}
	function removeNode(parent, vnode) {
		var mask = 0
		var original = vnode.state
		var stateResult, attrsResult
		if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeremove === "function") {
			var result = callHook.call(vnode.state.onbeforeremove, vnode)
			if (result != null && typeof result.then === "function") {
				mask = 1
				stateResult = result
			}
		}
		if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
			var result = callHook.call(vnode.attrs.onbeforeremove, vnode)
			if (result != null && typeof result.then === "function") {
				// eslint-disable-next-line no-bitwise
				mask |= 2
				attrsResult = result
			}
		}
		checkState(vnode, original)

		// If we can, try to fast-path it and avoid all the overhead of awaiting
		if (!mask) {
			onremove(vnode)
			removeChild(parent, vnode)
		} else {
			if (stateResult != null) {
				var next = function () {
					// eslint-disable-next-line no-bitwise
					if (mask & 1) { mask &= 2; if (!mask) reallyRemove() }
				}
				stateResult.then(next, next)
			}
			if (attrsResult != null) {
				var next = function () {
					// eslint-disable-next-line no-bitwise
					if (mask & 2) { mask &= 1; if (!mask) reallyRemove() }
				}
				attrsResult.then(next, next)
			}
		}

		function reallyRemove() {
			checkState(vnode, original)
			onremove(vnode)
			removeChild(parent, vnode)
		}
	}
	function removeHTML(parent, vnode) {
		for (var i = 0; i < vnode.instance.length; i++) {
			parent.removeChild(vnode.instance[i])
		}
	}
	function removeChild(parent, vnode) {
		// Dodge the recursion overhead in a few of the most common cases.
		while (vnode.dom != null && vnode.dom.parentNode === parent) {
			if (typeof vnode.tag !== "string") {
				vnode = vnode.instance
				if (vnode != null) continue
			} else if (vnode.tag === "<") {
				removeHTML(parent, vnode)
			} else {
				if (vnode.tag !== "[") {
					parent.removeChild(vnode.dom)
					if (!Array.isArray(vnode.children)) break
				}
				if (vnode.children.length === 1) {
					vnode = vnode.children[0]
					if (vnode != null) continue
				} else {
					for (var i = 0; i < vnode.children.length; i++) {
						var child = vnode.children[i]
						if (child != null) removeChild(parent, child)
					}
				}
			}
			break
		}
	}
	function onremove(vnode) {
		if (typeof vnode.tag !== "string" && typeof vnode.state.onremove === "function") callHook.call(vnode.state.onremove, vnode)
		if (vnode.attrs && typeof vnode.attrs.onremove === "function") callHook.call(vnode.attrs.onremove, vnode)
		if (typeof vnode.tag !== "string") {
			if (vnode.instance != null) onremove(vnode.instance)
		} else {
			var children = vnode.children
			if (Array.isArray(children)) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i]
					if (child != null) onremove(child)
				}
			}
		}
	}

	//attrs
	function setAttrs(vnode, attrs, ns) {
		for (var key in attrs) {
			setAttr(vnode, key, null, attrs[key], ns)
		}
	}
	function setAttr(vnode, key, old, value, ns) {
		if (key === "key" || key === "is" || value == null || isLifecycleMethod(key) || (old === value && !isFormAttribute(vnode, key)) && typeof value !== "object") return
		if (key[0] === "o" && key[1] === "n") return updateEvent(vnode, key, value)
		if (key.slice(0, 6) === "xlink:") vnode.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value)
		else if (key === "style") updateStyle(vnode.dom, old, value)
		else if (hasPropertyKey(vnode, key, ns)) {
			if (key === "value") {
				// Only do the coercion if we're actually going to check the value.
				/* eslint-disable no-implicit-coercion */
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === "" + value && vnode.dom === activeElement()) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "select" && old !== null && vnode.dom.value === "" + value) return
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "option" && old !== null && vnode.dom.value === "" + value) return
				/* eslint-enable no-implicit-coercion */
			}
			// If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
			if (vnode.tag === "input" && key === "type") vnode.dom.setAttribute(key, value)
			else vnode.dom[key] = value
		} else {
			if (typeof value === "boolean") {
				if (value) vnode.dom.setAttribute(key, "")
				else vnode.dom.removeAttribute(key)
			}
			else vnode.dom.setAttribute(key === "className" ? "class" : key, value)
		}
	}
	function removeAttr(vnode, key, old, ns) {
		if (key === "key" || key === "is" || old == null || isLifecycleMethod(key)) return
		if (key[0] === "o" && key[1] === "n" && !isLifecycleMethod(key)) updateEvent(vnode, key, undefined)
		else if (key === "style") updateStyle(vnode.dom, old, null)
		else if (
			hasPropertyKey(vnode, key, ns)
			&& key !== "className"
			&& !(key === "value" && (
				vnode.tag === "option"
				|| vnode.tag === "select" && vnode.dom.selectedIndex === -1 && vnode.dom === activeElement()
			))
			&& !(vnode.tag === "input" && key === "type")
		) {
			vnode.dom[key] = null
		} else {
			var nsLastIndex = key.indexOf(":")
			if (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1)
			if (old !== false) vnode.dom.removeAttribute(key === "className" ? "class" : key)
		}
	}
	function setLateSelectAttrs(vnode, attrs) {
		if ("value" in attrs) {
			if(attrs.value === null) {
				if (vnode.dom.selectedIndex !== -1) vnode.dom.value = null
			} else {
				var normalized = "" + attrs.value // eslint-disable-line no-implicit-coercion
				if (vnode.dom.value !== normalized || vnode.dom.selectedIndex === -1) {
					vnode.dom.value = normalized
				}
			}
		}
		if ("selectedIndex" in attrs) setAttr(vnode, "selectedIndex", null, attrs.selectedIndex, undefined)
	}
	function updateAttrs(vnode, old, attrs, ns) {
		if (attrs != null) {
			for (var key in attrs) {
				setAttr(vnode, key, old && old[key], attrs[key], ns)
			}
		}
		var val
		if (old != null) {
			for (var key in old) {
				if (((val = old[key]) != null) && (attrs == null || attrs[key] == null)) {
					removeAttr(vnode, key, val, ns)
				}
			}
		}
	}
	function isFormAttribute(vnode, attr) {
		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === activeElement() || vnode.tag === "option" && vnode.dom.parentNode === $doc.activeElement
	}
	function isLifecycleMethod(attr) {
		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
	}
	function hasPropertyKey(vnode, key, ns) {
		// Filter out namespaced keys
		return ns === undefined && (
			// If it's a custom element, just keep it.
			vnode.tag.indexOf("-") > -1 || vnode.attrs != null && vnode.attrs.is ||
			// If it's a normal element, let's try to avoid a few browser bugs.
			key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height"// && key !== "type"
			// Defer the property check until *after* we check everything.
		) && key in vnode.dom
	}

	//style
	var uppercaseRegex = /[A-Z]/g
	function toLowerCase(capital) { return "-" + capital.toLowerCase() }
	function normalizeKey(key) {
		return key[0] === "-" && key[1] === "-" ? key :
			key === "cssFloat" ? "float" :
				key.replace(uppercaseRegex, toLowerCase)
	}
	function updateStyle(element, old, style) {
		if (old === style) {
			// Styles are equivalent, do nothing.
		} else if (style == null) {
			// New style is missing, just clear it.
			element.style.cssText = ""
		} else if (typeof style !== "object") {
			// New style is a string, let engine deal with patching.
			element.style.cssText = style
		} else if (old == null || typeof old !== "object") {
			// `old` is missing or a string, `style` is an object.
			element.style.cssText = ""
			// Add new style properties
			for (var key in style) {
				var value = style[key]
				if (value != null) element.style.setProperty(normalizeKey(key), String(value))
			}
		} else {
			// Both old & new are (different) objects.
			// Update style properties that have changed
			for (var key in style) {
				var value = style[key]
				if (value != null && (value = String(value)) !== String(old[key])) {
					element.style.setProperty(normalizeKey(key), value)
				}
			}
			// Remove style properties that no longer exist
			for (var key in old) {
				if (old[key] != null && style[key] == null) {
					element.style.removeProperty(normalizeKey(key))
				}
			}
		}
	}

	// Here's an explanation of how this works:
	// 1. The event names are always (by design) prefixed by `on`.
	// 2. The EventListener interface accepts either a function or an object
	//    with a `handleEvent` method.
	// 3. The object does not inherit from `Object.prototype`, to avoid
	//    any potential interference with that (e.g. setters).
	// 4. The event name is remapped to the handler before calling it.
	// 5. In function-based event handlers, `ev.target === this`. We replicate
	//    that below.
	// 6. In function-based event handlers, `return false` prevents the default
	//    action and stops event propagation. We replicate that below.
	function EventDict() {
		// Save this, so the current redraw is correctly tracked.
		this._ = currentRedraw
	}
	EventDict.prototype = Object.create(null)
	EventDict.prototype.handleEvent = function (ev) {
		var handler = this["on" + ev.type]
		var result
		if (typeof handler === "function") result = handler.call(ev.currentTarget, ev)
		else if (typeof handler.handleEvent === "function") handler.handleEvent(ev)
		if (this._ && ev.redraw !== false) (0, this._)()
		if (result === false) {
			ev.preventDefault()
			ev.stopPropagation()
		}
	}

	//event
	function updateEvent(vnode, key, value) {
		if (vnode.events != null) {
			if (vnode.events[key] === value) return
			if (value != null && (typeof value === "function" || typeof value === "object")) {
				if (vnode.events[key] == null) vnode.dom.addEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = value
			} else {
				if (vnode.events[key] != null) vnode.dom.removeEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = undefined
			}
		} else if (value != null && (typeof value === "function" || typeof value === "object")) {
			vnode.events = new EventDict()
			vnode.dom.addEventListener(key.slice(2), vnode.events, false)
			vnode.events[key] = value
		}
	}

	//lifecycle
	function initLifecycle(source, vnode, hooks) {
		if (typeof source.oninit === "function") callHook.call(source.oninit, vnode)
		if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode))
	}
	function updateLifecycle(source, vnode, hooks) {
		if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode))
	}
	function shouldNotUpdate(vnode, old) {
		do {
			if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") {
				var force = callHook.call(vnode.attrs.onbeforeupdate, vnode, old)
				if (force !== undefined && !force) break
			}
			if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeupdate === "function") {
				var force = callHook.call(vnode.state.onbeforeupdate, vnode, old)
				if (force !== undefined && !force) break
			}
			return false
		} while (false); // eslint-disable-line no-constant-condition
		vnode.dom = old.dom
		vnode.domSize = old.domSize
		vnode.instance = old.instance
		// One would think having the actual latest attributes would be ideal,
		// but it doesn't let us properly diff based on our current internal
		// representation. We have to save not only the old DOM info, but also
		// the attributes used to create it, as we diff *that*, not against the
		// DOM directly (with a few exceptions in `setAttr`). And, of course, we
		// need to save the children and text as they are conceptually not
		// unlike special "attributes" internally.
		vnode.attrs = old.attrs
		vnode.children = old.children
		vnode.text = old.text
		return true
	}

	return function(dom, vnodes, redraw) {
		if (!dom) throw new TypeError("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
		var hooks = []
		var active = activeElement()
		var namespace = dom.namespaceURI

		// First time rendering into a node clears it out
		if (dom.vnodes == null) dom.textContent = ""

		vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [vnodes])
		var prevRedraw = currentRedraw
		try {
			currentRedraw = typeof redraw === "function" ? redraw : undefined
			updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
		} finally {
			currentRedraw = prevRedraw
		}
		dom.vnodes = vnodes
		// `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement
		if (active != null && activeElement() !== active && typeof active.focus === "function") active.focus()
		for (var i = 0; i < hooks.length; i++) hooks[i]()
	}
}


/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(7)

module.exports = function(render, schedule, console) {
	var subscriptions = []
	var rendering = false
	var pending = false

	function sync() {
		if (rendering) throw new Error("Nested m.redraw.sync() call")
		rendering = true
		for (var i = 0; i < subscriptions.length; i += 2) {
			try { render(subscriptions[i], Vnode(subscriptions[i + 1]), redraw) }
			catch (e) { console.error(e) }
		}
		rendering = false
	}

	function redraw() {
		if (!pending) {
			pending = true
			schedule(function() {
				pending = false
				sync()
			})
		}
	}

	redraw.sync = sync

	function mount(root, component) {
		if (component != null && component.view == null && typeof component !== "function") {
			throw new TypeError("m.mount(element, component) expects a component, not a vnode")
		}

		var index = subscriptions.indexOf(root)
		if (index >= 0) {
			subscriptions.splice(index, 2)
			render(root, [], redraw)
		}

		if (component != null) {
			subscriptions.push(root, component)
			render(root, Vnode(component), redraw)
		}
	}

	return {mount: mount, redraw: redraw}
}


/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var buildPathname = __webpack_require__(33)

module.exports = function($window, Promise, oncompletion) {
	var callbackCount = 0

	function PromiseProxy(executor) {
		return new Promise(executor)
	}

	// In case the global Promise is some userland library's where they rely on
	// `foo instanceof this.constructor`, `this.constructor.resolve(value)`, or
	// similar. Let's *not* break them.
	PromiseProxy.prototype = Promise.prototype
	PromiseProxy.__proto__ = Promise // eslint-disable-line no-proto

	function makeRequest(factory) {
		return function(url, args) {
			if (typeof url !== "string") { args = url; url = url.url }
			else if (args == null) args = {}
			var promise = new Promise(function(resolve, reject) {
				factory(buildPathname(url, args.params), args, function (data) {
					if (typeof args.type === "function") {
						if (Array.isArray(data)) {
							for (var i = 0; i < data.length; i++) {
								data[i] = new args.type(data[i])
							}
						}
						else data = new args.type(data)
					}
					resolve(data)
				}, reject)
			})
			if (args.background === true) return promise
			var count = 0
			function complete() {
				if (--count === 0 && typeof oncompletion === "function") oncompletion()
			}

			return wrap(promise)

			function wrap(promise) {
				var then = promise.then
				// Set the constructor, so engines know to not await or resolve
				// this as a native promise. At the time of writing, this is
				// only necessary for V8, but their behavior is the correct
				// behavior per spec. See this spec issue for more details:
				// https://github.com/tc39/ecma262/issues/1577. Also, see the
				// corresponding comment in `request/tests/test-request.js` for
				// a bit more background on the issue at hand.
				promise.constructor = PromiseProxy
				promise.then = function() {
					count++
					var next = then.apply(promise, arguments)
					next.then(complete, function(e) {
						complete()
						if (count === 0) throw e
					})
					return wrap(next)
				}
				return promise
			}
		}
	}

	function hasHeader(args, name) {
		for (var key in args.headers) {
			if ({}.hasOwnProperty.call(args.headers, key) && name.test(key)) return true
		}
		return false
	}

	return {
		request: makeRequest(function(url, args, resolve, reject) {
			var method = args.method != null ? args.method.toUpperCase() : "GET"
			var body = args.body
			var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData)
			var responseType = args.responseType || (typeof args.extract === "function" ? "" : "json")

			var xhr = new $window.XMLHttpRequest(), aborted = false
			var original = xhr, replacedAbort
			var abort = xhr.abort

			xhr.abort = function() {
				aborted = true
				abort.call(this)
			}

			xhr.open(method, url, args.async !== false, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)

			if (assumeJSON && body != null && !hasHeader(args, /^content-type$/i)) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (typeof args.deserialize !== "function" && !hasHeader(args, /^accept$/i)) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
			if (args.withCredentials) xhr.withCredentials = args.withCredentials
			if (args.timeout) xhr.timeout = args.timeout
			xhr.responseType = responseType

			for (var key in args.headers) {
				if ({}.hasOwnProperty.call(args.headers, key)) {
					xhr.setRequestHeader(key, args.headers[key])
				}
			}

			xhr.onreadystatechange = function(ev) {
				// Don't throw errors on xhr.abort().
				if (aborted) return

				if (ev.target.readyState === 4) {
					try {
						var success = (ev.target.status >= 200 && ev.target.status < 300) || ev.target.status === 304 || (/^file:\/\//i).test(url)
						// When the response type isn't "" or "text",
						// `xhr.responseText` is the wrong thing to use.
						// Browsers do the right thing and throw here, and we
						// should honor that and do the right thing by
						// preferring `xhr.response` where possible/practical.
						var response = ev.target.response, message

						if (responseType === "json") {
							// For IE and Edge, which don't implement
							// `responseType: "json"`.
							if (!ev.target.responseType && typeof args.extract !== "function") response = JSON.parse(ev.target.responseText)
						} else if (!responseType || responseType === "text") {
							// Only use this default if it's text. If a parsed
							// document is needed on old IE and friends (all
							// unsupported), the user should use a custom
							// `config` instead. They're already using this at
							// their own risk.
							if (response == null) response = ev.target.responseText
						}

						if (typeof args.extract === "function") {
							response = args.extract(ev.target, args)
							success = true
						} else if (typeof args.deserialize === "function") {
							response = args.deserialize(response)
						}
						if (success) resolve(response)
						else {
							try { message = ev.target.responseText }
							catch (e) { message = response }
							var error = new Error(message)
							error.code = ev.target.status
							error.response = response
							reject(error)
						}
					}
					catch (e) {
						reject(e)
					}
				}
			}

			if (typeof args.config === "function") {
				xhr = args.config(xhr, args, url) || xhr

				// Propagate the `abort` to any replacement XHR as well.
				if (xhr !== original) {
					replacedAbort = xhr.abort
					xhr.abort = function() {
						aborted = true
						replacedAbort.call(this)
					}
				}
			}

			if (body == null) xhr.send()
			else if (typeof args.serialize === "function") xhr.send(args.serialize(body))
			else if (body instanceof $window.FormData) xhr.send(body)
			else xhr.send(JSON.stringify(body))
		}),
		jsonp: makeRequest(function(url, args, resolve, reject) {
			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
			var script = $window.document.createElement("script")
			$window[callbackName] = function(data) {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				resolve(data)
			}
			script.onerror = function() {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				reject(new Error("JSONP request failed"))
			}
			script.src = url + (url.indexOf("?") < 0 ? "?" : "&") +
				encodeURIComponent(args.callbackKey || "callback") + "=" +
				encodeURIComponent(callbackName)
			$window.document.documentElement.appendChild(script)
		}),
	}
}


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mountRedraw = __webpack_require__(32)

module.exports = __webpack_require__(124)(window, mountRedraw)


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

var Vnode = __webpack_require__(7)
var m = __webpack_require__(38)
var Promise = __webpack_require__(40)

var buildPathname = __webpack_require__(33)
var parsePathname = __webpack_require__(34)
var compileTemplate = __webpack_require__(125)
var assign = __webpack_require__(46)

var sentinel = {}

module.exports = function($window, mountRedraw) {
	var fireAsync

	function setPath(path, data, options) {
		path = buildPathname(path, data)
		if (fireAsync != null) {
			fireAsync()
			var state = options ? options.state : null
			var title = options ? options.title : null
			if (options && options.replace) $window.history.replaceState(state, title, route.prefix + path)
			else $window.history.pushState(state, title, route.prefix + path)
		}
		else {
			$window.location.href = route.prefix + path
		}
	}

	var currentResolver = sentinel, component, attrs, currentPath, lastUpdate

	var SKIP = route.SKIP = {}

	function route(root, defaultRoute, routes) {
		if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined")
		// 0 = start
		// 1 = init
		// 2 = ready
		var state = 0

		var compiled = Object.keys(routes).map(function(route) {
			if (route[0] !== "/") throw new SyntaxError("Routes must start with a `/`")
			if ((/:([^\/\.-]+)(\.{3})?:/).test(route)) {
				throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`")
			}
			return {
				route: route,
				component: routes[route],
				check: compileTemplate(route),
			}
		})
		var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
		var p = Promise.resolve()
		var scheduled = false
		var onremove

		fireAsync = null

		if (defaultRoute != null) {
			var defaultData = parsePathname(defaultRoute)

			if (!compiled.some(function (i) { return i.check(defaultData) })) {
				throw new ReferenceError("Default route doesn't match any known routes")
			}
		}

		function resolveRoute() {
			scheduled = false
			// Consider the pathname holistically. The prefix might even be invalid,
			// but that's not our problem.
			var prefix = $window.location.hash
			if (route.prefix[0] !== "#") {
				prefix = $window.location.search + prefix
				if (route.prefix[0] !== "?") {
					prefix = $window.location.pathname + prefix
					if (prefix[0] !== "/") prefix = "/" + prefix
				}
			}
			// This seemingly useless `.concat()` speeds up the tests quite a bit,
			// since the representation is consistently a relatively poorly
			// optimized cons string.
			var path = prefix.concat()
				.replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)
				.slice(route.prefix.length)
			var data = parsePathname(path)

			assign(data.params, $window.history.state)

			function fail() {
				if (path === defaultRoute) throw new Error("Could not resolve default route " + defaultRoute)
				setPath(defaultRoute, null, {replace: true})
			}

			loop(0)
			function loop(i) {
				// 0 = init
				// 1 = scheduled
				// 2 = done
				for (; i < compiled.length; i++) {
					if (compiled[i].check(data)) {
						var payload = compiled[i].component
						var matchedRoute = compiled[i].route
						var localComp = payload
						var update = lastUpdate = function(comp) {
							if (update !== lastUpdate) return
							if (comp === SKIP) return loop(i + 1)
							component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
							attrs = data.params, currentPath = path, lastUpdate = null
							currentResolver = payload.render ? payload : null
							if (state === 2) mountRedraw.redraw()
							else {
								state = 2
								mountRedraw.redraw.sync()
							}
						}
						// There's no understating how much I *wish* I could
						// use `async`/`await` here...
						if (payload.view || typeof payload === "function") {
							payload = {}
							update(localComp)
						}
						else if (payload.onmatch) {
							p.then(function () {
								return payload.onmatch(data.params, path, matchedRoute)
							}).then(update, fail)
						}
						else update("div")
						return
					}
				}
				fail()
			}
		}

		// Set it unconditionally so `m.route.set` and `m.route.Link` both work,
		// even if neither `pushState` nor `hashchange` are supported. It's
		// cleared if `hashchange` is used, since that makes it automatically
		// async.
		fireAsync = function() {
			if (!scheduled) {
				scheduled = true
				callAsync(resolveRoute)
			}
		}

		if (typeof $window.history.pushState === "function") {
			onremove = function() {
				$window.removeEventListener("popstate", fireAsync, false)
			}
			$window.addEventListener("popstate", fireAsync, false)
		} else if (route.prefix[0] === "#") {
			fireAsync = null
			onremove = function() {
				$window.removeEventListener("hashchange", resolveRoute, false)
			}
			$window.addEventListener("hashchange", resolveRoute, false)
		}

		return mountRedraw.mount(root, {
			onbeforeupdate: function() {
				state = state ? 2 : 1
				return !(!state || sentinel === currentResolver)
			},
			oncreate: resolveRoute,
			onremove: onremove,
			view: function() {
				if (!state || sentinel === currentResolver) return
				// Wrap in a fragment to preserve existing key semantics
				var vnode = [Vnode(component, attrs.key, attrs)]
				if (currentResolver) vnode = currentResolver.render(vnode[0])
				return vnode
			},
		})
	}
	route.set = function(path, data, options) {
		if (lastUpdate != null) {
			options = options || {}
			options.replace = true
		}
		lastUpdate = null
		setPath(path, data, options)
	}
	route.get = function() {return currentPath}
	route.prefix = "#!"
	route.Link = {
		view: function(vnode) {
			var options = vnode.attrs.options
			// Remove these so they don't get overwritten
			var attrs = {}, onclick, href
			assign(attrs, vnode.attrs)
			// The first two are internal, but the rest are magic attributes
			// that need censored to not screw up rendering.
			attrs.selector = attrs.options = attrs.key = attrs.oninit =
			attrs.oncreate = attrs.onbeforeupdate = attrs.onupdate =
			attrs.onbeforeremove = attrs.onremove = null

			// Do this now so we can get the most current `href` and `disabled`.
			// Those attributes may also be specified in the selector, and we
			// should honor that.
			var child = m(vnode.attrs.selector || "a", attrs, vnode.children)

			// Let's provide a *right* way to disable a route link, rather than
			// letting people screw up accessibility on accident.
			//
			// The attribute is coerced so users don't get surprised over
			// `disabled: 0` resulting in a button that's somehow routable
			// despite being visibly disabled.
			if (child.attrs.disabled = Boolean(child.attrs.disabled)) {
				child.attrs.href = null
				child.attrs["aria-disabled"] = "true"
				// If you *really* do want to do this on a disabled link, use
				// an `oncreate` hook to add it.
				child.attrs.onclick = null
			} else {
				onclick = child.attrs.onclick
				href = child.attrs.href
				child.attrs.href = route.prefix + href
				child.attrs.onclick = function(e) {
					var result
					if (typeof onclick === "function") {
						result = onclick.call(e.currentTarget, e)
					} else if (onclick == null || typeof onclick !== "object") {
						// do nothing
					} else if (typeof onclick.handleEvent === "function") {
						onclick.handleEvent(e)
					}

					// Adapted from React Router's implementation:
					// https://github.com/ReactTraining/react-router/blob/520a0acd48ae1b066eb0b07d6d4d1790a1d02482/packages/react-router-dom/modules/Link.js
					//
					// Try to be flexible and intuitive in how we handle links.
					// Fun fact: links aren't as obvious to get right as you
					// would expect. There's a lot more valid ways to click a
					// link than this, and one might want to not simply click a
					// link, but right click or command-click it to copy the
					// link target, etc. Nope, this isn't just for blind people.
					if (
						// Skip if `onclick` prevented default
						result !== false && !e.defaultPrevented &&
						// Ignore everything but left clicks
						(e.button === 0 || e.which === 0 || e.which === 1) &&
						// Let the browser handle `target=_blank`, etc.
						(!e.currentTarget.target || e.currentTarget.target === "_self") &&
						// No modifier keys
						!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey
					) {
						e.preventDefault()
						e.redraw = false
						route.set(href, null, options)
					}
				}
			}
			return child
		},
	}
	route.param = function(key) {
		return attrs && key != null ? attrs[key] : attrs
	}

	return route
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(42).setImmediate))

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parsePathname = __webpack_require__(34)

// Compiles a template into a function that takes a resolved path (without query
// strings) and returns an object containing the template parameters with their
// parsed values. This expects the input of the compiled template to be the
// output of `parsePathname`. Note that it does *not* remove query parameters
// specified in the template.
module.exports = function(template) {
	var templateData = parsePathname(template)
	var templateKeys = Object.keys(templateData.params)
	var keys = []
	var regexp = new RegExp("^" + templateData.path.replace(
		// I escape literal text so people can use things like `:file.:ext` or
		// `:lang-:locale` in routes. This is all merged into one pass so I
		// don't also accidentally escape `-` and make it harder to detect it to
		// ban it from template parameters.
		/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,
		function(m, key, extra) {
			if (key == null) return "\\" + m
			keys.push({k: key, r: extra === "..."})
			if (extra === "...") return "(.*)"
			if (extra === ".") return "([^/]+)\\."
			return "([^/]+)" + (extra || "")
		}
	) + "$")
	return function(data) {
		// First, check the params. Usually, there isn't any, and it's just
		// checking a static set.
		for (var i = 0; i < templateKeys.length; i++) {
			if (templateData.params[templateKeys[i]] !== data.params[templateKeys[i]]) return false
		}
		// If no interpolations exist, let's skip all the ceremony
		if (!keys.length) return regexp.test(data.path)
		var values = regexp.exec(data.path)
		if (values == null) return false
		for (var i = 0; i < keys.length; i++) {
			data.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1])
		}
		return true
	}
}


/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 129:
/***/ (function(module, exports) {

!function (e) {
  function t(s) {
    if (n[s]) return n[s].exports;
    var i = n[s] = {
      i: s,
      l: !1,
      exports: {}
    };
    return e[s].call(i.exports, i, i.exports, t), i.l = !0, i.exports;
  }

  var n = {};
  t.m = e, t.c = n, t.d = function (e, n, s) {
    t.o(e, n) || Object.defineProperty(e, n, {
      configurable: !1,
      enumerable: !0,
      get: s
    });
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return t.d(n, "a", n), n;
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, t.p = "", t(t.s = 1);
}([function (e, t, n) {
  "use strict";

  function s(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  var i = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var s = t[n];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
      }
    }

    return function (t, n, s) {
      return n && e(t.prototype, n), s && e(t, s), t;
    };
  }(),
      r = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      s(this, e), t && t.constructor === Object && (n = t, t = null), this.selector = t, this.options = Object.assign({}, e.DEFAULT_OPTIONS, n), this._bag = [], this._setElement(), this._process();
    }

    return i(e, [{
      key: "getBag",
      value: function value() {
        return this._bag;
      }
    }, {
      key: "setBag",
      value: function value(e) {
        return this._bag.push(e), this;
      }
    }, {
      key: "attach",
      value: function value() {
        var e;
        return (e = this._bag).push.apply(e, arguments), this._checkLimit(), this;
      }
    }, {
      key: "detach",
      value: function value(e) {
        return this._bag = this._bag.filter(function (t) {
          return e instanceof FlashMessage && t !== e;
        }), this;
      }
    }, {
      key: "_setElement",
      value: function value() {
        !this.selector || this.selector instanceof Element || this.selector.constructor === String && (this.selector = document.querySelectorAll(this.selector) || null);
      }
    }, {
      key: "_process",
      value: function value() {
        var e = this;
        this.selector && (Array.isArray(this.selector) || this.selector.constructor === NodeList ? this.selector.forEach(function (t) {
          return e.setBag(new FlashMessage(t, e.options));
        }) : this.setBag(new FlashMessage(this.selector, this.options)), this._checkLimit());
      }
    }, {
      key: "_checkLimit",
      value: function value() {
        if (this.options.limit && this._bag.length > this.options.limit) for (var e = 0; e < this._bag.length - this.options.limit; ++e) {
          this._bag[e].destroy(), this.detach(this._bag[e]);
        }
      }
    }], [{
      key: "create",
      value: function value() {
        return new e(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {});
      }
    }, {
      key: "DEFAULT_OPTIONS",
      get: function get() {
        return {
          limit: 0
        };
      }
    }]), e;
  }();

  t.a = r;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var s = n(2),
      i = (n.n(s), n(0)),
      r = n(3),
      o = n(4);
  n.n(o);
  !function (e) {
    void 0 !== e && (e.Flash || (e.Flash = i.a), e.FlashMessage || (e.FlashMessage = r.a));
  }(window), t["default"] = {
    Flash: i.a,
    FlashMessage: r.a
  };
}, function (e, t) {
  "document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function (e) {
    "use strict";

    if ("Element" in e) {
      var t = "classList",
          n = "prototype",
          s = e.Element[n],
          i = Object,
          r = String[n].trim || function () {
        return this.replace(/^\s+|\s+$/g, "");
      },
          o = Array[n].indexOf || function (e) {
        for (var t = 0, n = this.length; n > t; t++) {
          if (t in this && this[t] === e) return t;
        }

        return -1;
      },
          a = function a(e, t) {
        this.name = e, this.code = DOMException[e], this.message = t;
      },
          l = function l(e, t) {
        if ("" === t) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
        if (/\s/.test(t)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
        return o.call(e, t);
      },
          u = function u(e) {
        for (var t = r.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : [], s = 0, i = n.length; i > s; s++) {
          this.push(n[s]);
        }

        this._updateClassName = function () {
          e.setAttribute("class", "" + this);
        };
      },
          h = u[n] = [],
          c = function c() {
        return new u(this);
      };

      if (a[n] = Error[n], h.item = function (e) {
        return this[e] || null;
      }, h.contains = function (e) {
        return e += "", -1 !== l(this, e);
      }, h.add = function () {
        var e,
            t = arguments,
            n = 0,
            s = t.length,
            i = !1;

        do {
          e = t[n] + "", -1 === l(this, e) && (this.push(e), i = !0);
        } while (++n < s);

        i && this._updateClassName();
      }, h.remove = function () {
        var e,
            t,
            n = arguments,
            s = 0,
            i = n.length,
            r = !1;

        do {
          for (e = n[s] + "", t = l(this, e); -1 !== t;) {
            this.splice(t, 1), r = !0, t = l(this, e);
          }
        } while (++s < i);

        r && this._updateClassName();
      }, h.toggle = function (e, t) {
        e += "";
        var n = this.contains(e),
            s = n ? !0 !== t && "remove" : !1 !== t && "add";
        return s && this[s](e), !0 === t || !1 === t ? t : !n;
      }, h.toString = function () {
        return this.join(" ");
      }, i.defineProperty) {
        var _ = {
          get: c,
          enumerable: !0,
          configurable: !0
        };

        try {
          i.defineProperty(s, t, _);
        } catch (e) {
          (void 0 === e.number || -2146823252 === e.number) && (_.enumerable = !1, i.defineProperty(s, t, _));
        }
      } else i[n].__defineGetter__ && s.__defineGetter__(t, c);
    }
  }(self), function () {
    "use strict";

    var e = document.createElement("_");

    if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
      var t = function t(e) {
        var t = DOMTokenList.prototype[e];

        DOMTokenList.prototype[e] = function (e) {
          var n,
              s = arguments.length;

          for (n = 0; s > n; n++) {
            e = arguments[n], t.call(this, e);
          }
        };
      };

      t("add"), t("remove");
    }

    if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
      var n = DOMTokenList.prototype.toggle;

      DOMTokenList.prototype.toggle = function (e, t) {
        return 1 in arguments && !this.contains(e) == !t ? t : n.call(this, e);
      };
    }

    e = null;
  }());
}, function (e, t, n) {
  "use strict";

  function s(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  var i = (n(0), function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var s = t[n];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
      }
    }

    return function (t, n, s) {
      return n && e(t.prototype, n), s && e(t, s), t;
    };
  }()),
      r = function () {
    function e(t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e._CONSTANTS.TYPES.ERROR,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      s(this, e), n.constructor === Object && (i = n, n = e._CONSTANTS.TYPES.ERROR), this.$_element = null, this.setOptions(i), t instanceof Element ? (this.$_element = t, this._composeMessage()) : (this.message = t, this.type = n), this.$_container = document.querySelector(this.options.container) || null, this._c_timeout = null, this.$_progress = null, this._progress_value = 0, this._progress_offset = 0, this._progress_interval = null, this._createContainer(), this._createMessage();
    }

    return i(e, null, [{
      key: "_CONSTANTS",
      get: function get() {
        return {
          TYPES: {
            SUCCESS: "success",
            WARNING: "warning",
            ERROR: "error",
            INFO: "info"
          },
          THEME: "default",
          CONTAINER: ".flash-container",
          CLASSES: {
            CONTAINER: "flash-container",
            VISIBLE: "is-visible",
            FLASH: "flash-message",
            PROGRESS: "flash-progress",
            PROGRESS_HIDDEN: "is-hidden"
          }
        };
      }
    }, {
      key: "DEFAULT_OPTIONS",
      get: function get() {
        return {
          progress: !1,
          interactive: !0,
          timeout: 8e3,
          appear_delay: 200,
          remove_delay: 600,
          container: e._CONSTANTS.CONTAINER,
          classes: {
            container: e._CONSTANTS.CLASSES.CONTAINER,
            visible: e._CONSTANTS.CLASSES.VISIBLE,
            flash: e._CONSTANTS.CLASSES.FLASH,
            progress: e._CONSTANTS.CLASSES.PROGRESS,
            progress_hidden: e._CONSTANTS.CLASSES.PROGRESS_HIDDEN
          },
          theme: e._CONSTANTS.THEME,
          onShow: null,
          onClick: null,
          onClose: null
        };
      }
    }]), i(e, [{
      key: "setOptions",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.options = Object.assign({}, e.DEFAULT_OPTIONS, t), this;
      }
    }, {
      key: "destroy",
      value: function value() {
        this._close();
      }
    }, {
      key: "_createContainer",
      value: function value() {
        null !== this.$_container && document.body.contains(this.$_container) || (this.$_container = document.createElement("div"), this.$_container.classList.add(this.options.classes.container), document.body.firstChild ? document.body.insertBefore(this.$_container, document.body.firstChild) : document.body.appendChild(this.$_container));
      }
    }, {
      key: "_composeMessage",
      value: function value() {
        this.message = this.$_element.dataset.message || this.$_element.innerHTML || "", this.type = this.$_element.dataset.type || e._CONSTANTS.TYPES.ERROR, void 0 !== this.$_element.dataset.progress && this.setOptions({
          progress: !0
        }), this.$_element.classList.add("flash-" + this.type);
      }
    }, {
      key: "_createMessage",
      value: function value() {
        if (this.$_element) this.$_element.querySelector(".thumb") && this.$_element.classList.add("has-thumb");else {
          if (this.$_element = document.createElement("div"), this.$_element.classList.add(this.options.classes.flash, "flash-" + this.type), this.$_element.setAttribute("data-type", this.type), this.$_element.setAttribute("data-message", this.message), this.$_element.innerHTML = this.message, this.options.thumb) {
            var e = document.createElement("img");
            e.classList.add("thumb"), e.src = this.options.thumb, this.$_element.classList.add("has-thumb"), this.$_element.appendChild(e);
          }

          this._append();
        }
        this._setTheme(), this._hasProgress() && this._progressBar(), this.$_element.dataset.timeout && (this.options.timeout = parseInt(this.$_element.dataset.timeout, 10)), this._behavior(), !0 === this._isInteractive() && this._bindEvents();
      }
    }, {
      key: "_append",
      value: function value() {
        this.$_container.appendChild(this.$_element);
      }
    }, {
      key: "_behavior",
      value: function value() {
        var e = this;
        this._run(), window.setTimeout(function () {
          return e.$_element.classList.add(e.options.classes.visible);
        }, this.options.appear_delay);
      }
    }, {
      key: "_run",
      value: function value() {
        var e = this;
        this._startProgress(), this._c_timeout = window.setTimeout(function () {
          return e._close();
        }, this.options.timeout);
      }
    }, {
      key: "_stop",
      value: function value() {
        null !== this._c_timeout && (window.clearTimeout(this._c_timeout), this._stopProgress(), this._c_timeout = null);
      }
    }, {
      key: "_close",
      value: function value() {
        var e = this;
        this._stopProgress(), this._isInteractive() && this._unbindEvents(), this.$_element.classList.remove(this.options.classes.visible), this.$_element.addEventListener("transitionend", function () {
          e._clear();
        });
      }
    }, {
      key: "_clear",
      value: function value() {
        !this.$_container.children.length && this.$_container.parentNode.contains(this.$_container) && this.$_container.parentNode.removeChild(this.$_container);
      }
    }, {
      key: "_bindEvents",
      value: function value() {
        var e = this;
        this._bindEvent("mouseover", function (t) {
          return e._stop();
        }), this._bindEvent("mouseleave", function (t) {
          return e._run();
        }), this._bindEvent("click", function (t) {
          return e._close();
        });
      }
    }, {
      key: "_bindEvent",
      value: function value(e, t) {
        try {
          this.$_element.addEventListener ? this.$_element.addEventListener(e, t, !1) : this.$_element.attachEvent("on" + this._getCapitalizedEventName(e), t);
        } catch (e) {
          throw new Error("FlashMessage._bindEvent - Cannot add event on element - " + e);
        }
      }
    }, {
      key: "_unbindEvents",
      value: function value() {
        var e = this;
        this._unbindEvent("mouseover", function (t) {
          return e._stop();
        }), this._unbindEvent("mouseleave", function (t) {
          return e._run();
        }), this._unbindEvent("click", function (t) {
          return e._close();
        });
      }
    }, {
      key: "_unbindEvent",
      value: function value(e, t) {
        try {
          this.$_element.removeEventListener ? this.$_element.removeEventListener(e, t, !1) : this.$_element.detachEvent("on" + this._getCapitalizedEventName(e), t);
        } catch (e) {
          throw new Error("FlashMessage._unbindEvent - Cannot remove event on element - " + e);
        }
      }
    }, {
      key: "_isInteractive",
      value: function value() {
        return Boolean(!0 === this.options.interactive);
      }
    }, {
      key: "_getCapitalizedEventName",
      value: function value(e) {
        return e.charAt(0).toUpperCase() + e.substr(1);
      }
    }, {
      key: "_hasProgress",
      value: function value() {
        return Boolean(this.options.progress);
      }
    }, {
      key: "_progressBar",
      value: function value() {
        this.$_progress = document.createElement("div"), this.$_progress.classList.add(this.options.classes.progress), this.$_element.appendChild(this.$_progress);
      }
    }, {
      key: "_startProgress",
      value: function value() {
        var e = this;
        this._hasProgress() && (this.$_progress || this._progressBar(), this._stopProgress(), this._progress_offset = 0, this.$_progress.classList.remove(this.options.classes.progress_hidden), this._progress_interval = window.setInterval(function () {
          return e._setProgress();
        }, 16));
      }
    }, {
      key: "_setProgress",
      value: function value() {
        this.$_progress.style.width = this._progress_value + "%", this._progress_value = (100 * this._progress_offset / this.options.timeout).toFixed(2), this._progress_offset += 16, this._progress_value >= 100 && this._stopProgress();
      }
    }, {
      key: "_stopProgress",
      value: function value() {
        this._hasProgress() && this.$_progress && (this.$_progress.classList.add("is-hidden"), window.clearInterval(this._progress_interval), this._progress_interval = null, this._progress_value = 0);
      }
    }, {
      key: "_setTheme",
      value: function value() {
        var t = this.$_element.dataset.theme || this.options.theme || "";
        t.length && t !== e._CONSTANTS.THEME && this.$_element.classList.add(t + "-theme");
      }
    }], [{
      key: "create",
      value: function value(t) {
        return new e(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e._CONSTANTS.TYPES.ERROR, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
      }
    }, {
      key: "success",
      value: function value(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new e(t, e._CONSTANTS.TYPES.SUCCESS, n);
      }
    }, {
      key: "warning",
      value: function value(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new e(t, e._CONSTANTS.TYPES.WARNING, n);
      }
    }, {
      key: "error",
      value: function value(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new e(t, e._CONSTANTS.TYPES.ERROR, n);
      }
    }, {
      key: "info",
      value: function value(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new e(t, e._CONSTANTS.TYPES.INFO, n);
      }
    }, {
      key: "addCustomVerbs",
      value: function value() {
        for (var t = arguments.length, n = Array(t), s = 0; s < t; s++) {
          n[s] = arguments[s];
        }

        n && n.length && n.forEach(function (t) {
          e[t] || (e[t] = function (n) {
            var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new e(n, t, s);
          });
        });
      }
    }]), e;
  }();

  t.a = r;
}, function (e, t) {}]);

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function none() {}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var bind = __webpack_require__(48);
var Axios = __webpack_require__(131);
var mergeConfig = __webpack_require__(54);
var defaults = __webpack_require__(51);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(55);
axios.CancelToken = __webpack_require__(144);
axios.isCancel = __webpack_require__(50);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(145);

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(146);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var buildURL = __webpack_require__(49);
var InterceptorManager = __webpack_require__(132);
var dispatchRequest = __webpack_require__(133);
var mergeConfig = __webpack_require__(54);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var transformData = __webpack_require__(134);
var isCancel = __webpack_require__(50);
var defaults = __webpack_require__(51);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(53);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(140);
var combineURLs = __webpack_require__(141);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].hasOwnProperty(prefix) ? {space: _namespaces_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"][prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
});


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(55);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
;(function() {
"use strict"
/* eslint-enable */
Stream.SKIP = {}
Stream.lift = lift
Stream.scan = scan
Stream.merge = merge
Stream.combine = combine
Stream.scanMerge = scanMerge
Stream["fantasy-land/of"] = Stream

var warnedHalt = false
Object.defineProperty(Stream, "HALT", {
	get: function() {
		warnedHalt || console.log("HALT is deprecated and has been renamed to SKIP");
		warnedHalt = true
		return Stream.SKIP
	}
})

function Stream(value) {
	var dependentStreams = []
	var dependentFns = []

	function stream(v) {
		if (arguments.length && v !== Stream.SKIP) {
			value = v
			if (open(stream)) {
				stream._changing()
				stream._state = "active"
				dependentStreams.forEach(function(s, i) { s(dependentFns[i](value)) })
			}
		}

		return value
	}

	stream.constructor = Stream
	stream._state = arguments.length && value !== Stream.SKIP ? "active" : "pending"
	stream._parents = []

	stream._changing = function() {
		if (open(stream)) stream._state = "changing"
		dependentStreams.forEach(function(s) {
			s._changing()
		})
	}

	stream._map = function(fn, ignoreInitial) {
		var target = ignoreInitial ? Stream() : Stream(fn(value))
		target._parents.push(stream)
		dependentStreams.push(target)
		dependentFns.push(fn)
		return target
	}

	stream.map = function(fn) {
		return stream._map(fn, stream._state !== "active")
	}

	var end
	function createEnd() {
		end = Stream()
		end.map(function(value) {
			if (value === true) {
				stream._parents.forEach(function (p) {p._unregisterChild(stream)})
				stream._state = "ended"
				stream._parents.length = dependentStreams.length = dependentFns.length = 0
			}
			return value
		})
		return end
	}

	stream.toJSON = function() { return value != null && typeof value.toJSON === "function" ? value.toJSON() : value }

	stream["fantasy-land/map"] = stream.map
	stream["fantasy-land/ap"] = function(x) { return combine(function(s1, s2) { return s1()(s2()) }, [x, stream]) }

	stream._unregisterChild = function(child) {
		var childIndex = dependentStreams.indexOf(child)
		if (childIndex !== -1) {
			dependentStreams.splice(childIndex, 1)
			dependentFns.splice(childIndex, 1)
		}
	}

	Object.defineProperty(stream, "end", {
		get: function() { return end || createEnd() }
	})

	return stream
}

function combine(fn, streams) {
	var ready = streams.every(function(s) {
		if (s.constructor !== Stream)
			throw new Error("Ensure that each item passed to stream.combine/stream.merge/lift is a stream")
		return s._state === "active"
	})
	var stream = ready
		? Stream(fn.apply(null, streams.concat([streams])))
		: Stream()

	var changed = []

	var mappers = streams.map(function(s) {
		return s._map(function(value) {
			changed.push(s)
			if (ready || streams.every(function(s) { return s._state !== "pending" })) {
				ready = true
				stream(fn.apply(null, streams.concat([changed])))
				changed = []
			}
			return value
		}, true)
	})

	var endStream = stream.end.map(function(value) {
		if (value === true) {
			mappers.forEach(function(mapper) { mapper.end(true) })
			endStream.end(true)
		}
		return undefined
	})

	return stream
}

function merge(streams) {
	return combine(function() { return streams.map(function(s) { return s() }) }, streams)
}

function scan(fn, acc, origin) {
	var stream = origin.map(function(v) {
		var next = fn(acc, v)
		if (next !== Stream.SKIP) acc = next
		return next
	})
	stream(acc)
	return stream
}

function scanMerge(tuples, seed) {
	var streams = tuples.map(function(tuple) { return tuple[0] })

	var stream = combine(function() {
		var changed = arguments[arguments.length - 1]
		streams.forEach(function(stream, i) {
			if (changed.indexOf(stream) > -1)
				seed = tuples[i][1](seed, stream())
		})

		return seed
	}, streams)

	stream(seed)

	return stream
}

function lift() {
	var fn = arguments[0]
	var streams = Array.prototype.slice.call(arguments, 1)
	return merge(streams).map(function(streams) {
		return fn.apply(undefined, streams)
	})
}

function open(s) {
	return s._state === "pending" || s._state === "active" || s._state === "changing"
}

if (true) module["exports"] = Stream
else {}

}());


/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/ui/assets/styles/vendor/flashJS/default.scss
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/ui/assets/styles/vendor/flashJS/_dark.scss
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/ui/assets/styles/vendor/flashJS/import.js



/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});


/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces_js__WEBPACK_IMPORTED_MODULE_1__[/* xhtml */ "b"] && document.documentElement.namespaceURI === _namespaces_js__WEBPACK_IMPORTED_MODULE_1__[/* xhtml */ "b"]
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var fullname = Object(_namespace_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
});


/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ root; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Selection; });

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selector.js
var selector = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/select.js



/* harmony default export */ var selection_select = (function(select) {
  if (typeof select !== "function") select = Object(selector["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection(subgroups, this._parents);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/array.js
/* harmony default export */ var array = (function(x) {
  return typeof x === "object" && "length" in x
    ? x // Array, TypedArray, NodeList, array-like
    : Array.from(x); // Map, Set, iterable, string, or anything else
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selectorAll.js
var selectorAll = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/selectAll.js




function arrayAll(select) {
  return function() {
    var group = select.apply(this, arguments);
    return group == null ? [] : array(group);
  };
}

/* harmony default export */ var selectAll = (function(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = Object(selectorAll["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection(subgroups, parents);
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/matcher.js
var matcher = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/selectChild.js


var find = Array.prototype.find;

function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

/* harmony default export */ var selectChild = (function(match) {
  return this.select(match == null ? childFirst
      : childFind(typeof match === "function" ? match : Object(matcher["a" /* childMatcher */])(match)));
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/selectChildren.js


var filter = Array.prototype.filter;

function children() {
  return this.children;
}

function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}

/* harmony default export */ var selectChildren = (function(match) {
  return this.selectAll(match == null ? children
      : childrenFilter(typeof match === "function" ? match : Object(matcher["a" /* childMatcher */])(match)));
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/filter.js



/* harmony default export */ var selection_filter = (function(match) {
  if (typeof match !== "function") match = Object(matcher["b" /* default */])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection(subgroups, this._parents);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/sparse.js
/* harmony default export */ var sparse = (function(update) {
  return new Array(update.length);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/enter.js



/* harmony default export */ var selection_enter = (function() {
  return new Selection(this._enter || this._groups.map(sparse), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};

// CONCATENATED MODULE: ./node_modules/d3-selection/src/constant.js
/* harmony default export */ var constant = (function(x) {
  return function() {
    return x;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/data.js





function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map,
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

/* harmony default export */ var selection_data = (function(value, key) {
  if (!arguments.length) return Array.from(this, datum);

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = constant(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = array(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/exit.js



/* harmony default export */ var selection_exit = (function() {
  return new Selection(this._exit || this._groups.map(sparse), this._parents);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/join.js
/* harmony default export */ var join = (function(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/merge.js


/* harmony default export */ var selection_merge = (function(selection) {
  if (!(selection instanceof Selection)) throw new Error("invalid merge");

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection(merges, this._parents);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/order.js
/* harmony default export */ var order = (function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/sort.js


/* harmony default export */ var sort = (function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new Selection(sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/call.js
/* harmony default export */ var call = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/nodes.js
/* harmony default export */ var nodes = (function() {
  return Array.from(this);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/node.js
/* harmony default export */ var selection_node = (function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/size.js
/* harmony default export */ var size = (function() {
  let size = 0;
  for (const node of this) ++size; // eslint-disable-line no-unused-vars
  return size;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/empty.js
/* harmony default export */ var empty = (function() {
  return !this.node();
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/each.js
/* harmony default export */ var each = (function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/namespace.js
var namespace = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/attr.js


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ var attr = (function(name, value) {
  var fullname = Object(namespace["a" /* default */])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selection/style.js
var style = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ var property = (function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ var classed = (function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ var selection_text = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ var html = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ var selection_raise = (function() {
  return this.each(raise);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ var selection_lower = (function() {
  return this.each(lower);
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/creator.js
var creator = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/append.js


/* harmony default export */ var append = (function(name) {
  var create = typeof name === "function" ? name : Object(creator["a" /* default */])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/insert.js



function constantNull() {
  return null;
}

/* harmony default export */ var insert = (function(name, before) {
  var create = typeof name === "function" ? name : Object(creator["a" /* default */])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : Object(selector["a" /* default */])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ var selection_remove = (function() {
  return this.each(remove);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ var clone = (function(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/datum.js
/* harmony default export */ var selection_datum = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ var on = (function(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/window.js
var src_window = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/dispatch.js


function dispatchEvent(node, type, params) {
  var window = Object(src_window["a" /* default */])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ var dispatch = (function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/iterator.js
/* harmony default export */ var iterator = (function*() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/index.js



































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection_selection() {
  return new Selection([[document.documentElement]], root);
}

function selection_selection_selection() {
  return this;
}

Selection.prototype = selection_selection.prototype = {
  constructor: Selection,
  select: selection_select,
  selectAll: selectAll,
  selectChild: selectChild,
  selectChildren: selectChildren,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: join,
  merge: selection_merge,
  selection: selection_selection_selection,
  order: order,
  sort: sort,
  call: call,
  nodes: nodes,
  node: selection_node,
  size: size,
  empty: empty,
  each: each,
  attr: attr,
  style: style["a" /* default */],
  property: property,
  classed: classed,
  text: selection_text,
  html: html,
  raise: selection_raise,
  lower: selection_lower,
  append: append,
  insert: insert,
  remove: selection_remove,
  clone: clone,
  datum: selection_datum,
  on: on,
  dispatch: dispatch,
  [Symbol.iterator]: iterator
};

/* harmony default export */ var src_selection = __webpack_exports__["b"] = (selection_selection);


/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _view_components_Pages_forms_CreateForm_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _view_components_Pages_HabitNodeList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _view_components_Pages_visualisations_HabitTree_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
/* harmony import */ var _view_components_Pages_visualisations_RadialTree_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63);
 // Pages




var MenuRoutes = [{
  label: "Visualise",
  path: "/vis",
  subpaths: {
    "/vis/habit-tree": {
      title: "Habit Tree",
      description: "Traditional hierarchical Tree diagram showing habit nodes.",
      page: _view_components_Pages_visualisations_HabitTree_jsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
      icon: '<svg class="text-balance-dp w-15 pl-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480; stroke-linejoin:round; stroke-linecap:round; " xml:space="preserve"><path d="M472,216h-56v-48c0-4.418-3.582-8-8-8H248V96h56c4.418,0,8-3.582,8-8V8c0-4.418-3.582-8-8-8H176c-4.418,0-8,3.582-8,8v80    c0,4.418,3.582,8,8,8h56v64H72c-4.418,0-8,3.582-8,8v48H8c-4.418,0-8,3.582-8,8v80c0,4.418,3.582,8,8,8h128c4.418,0,8-3.582,8-8    v-80c0-4.418-3.582-8-8-8H80v-40h152v40h-56c-4.418,0-8,3.582-8,8v80c0,4.418,3.582,8,8,8h56v72h-56c-4.418,0-8,3.582-8,8v80    c0,4.418,3.582,8,8,8h128c4.418,0,8-3.582,8-8v-80c0-4.418-3.582-8-8-8h-56v-72h56c4.418,0,8-3.582,8-8v-80c0-4.418-3.582-8-8-8    h-56v-40h152v40h-56c-4.418,0-8,3.582-8,8v80c0,4.418,3.582,8,8,8h128c4.418,0,8-3.582,8-8v-80C480,219.582,476.418,216,472,216z     M128,232v64H16v-64H128z M296,400v64H184v-64H296z M296,232v64H184v-64H296z M184,80V16h112v64H184z M464,296H352v-64h112V296z"/></svg>'
    },
    "/vis/habit-triangle": {
      title: "Habit Triangle",
      description: "Fractal pyramid of habits. Navigate all the way up to the sky or drill down into the minutiae.",
      page: _view_components_Pages_forms_CreateForm_jsx__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
      icon: '<svg class="text-balance-dp w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path class="fill-current stroke-current" d="M66.513,111.15h51.061v-0.065a10.307,10.307,0,0,1-.9-1.58c-0.745-1.219-1.4-2.506-2.153-3.74-1.159-1.9-2.177-3.89-3.342-5.8-0.375-.617-0.707-1.271-1.092-1.9a4.46,4.46,0,0,1-.514-0.871H79.623V92.482h27.218V92.418a5.777,5.777,0,0,1-.707-1.225c-0.621-1.02-1.17-2.094-1.8-3.127-2-3.289-3.8-6.743-5.817-10.027-0.632-1.032-1.177-2.11-1.8-3.127-0.173-.282-0.318-0.57-0.482-0.838a1.213,1.213,0,0,0-.193-0.387H79.623V69.107H93.377V69.043l-9.865-17.12H44.468a16.3,16.3,0,0,1-.932,1.58c-0.709,1.159-1.323,2.37-2.025,3.514-0.3.489-.5,0.993-0.8,1.483-0.955,1.562-1.839,3.21-2.8,4.772-0.254.415-.421,0.841-0.675,1.257-0.622,1.019-1.168,2.094-1.8,3.127a6.968,6.968,0,0,0-.835,1.451h13.85v4.546a6.146,6.146,0,0,1-1.575.032H31.936l-10.8,18.8H48.453v4.675a3.542,3.542,0,0,1-.9.032H18.407a5.062,5.062,0,0,1-.643,1.1c-0.511.831-.946,1.7-1.446,2.515-1.212,1.982-2.264,4.061-3.47,6.029-0.254.416-.421,0.842-0.675,1.258-0.409.67-.772,1.378-1.189,2.063a4.456,4.456,0,0,0-.578,1H54.3a3.7,3.7,0,0,0,.514.129,2.746,2.746,0,0,1,1.221,1.064,2.509,2.509,0,0,1-1.414,3.578,4.675,4.675,0,0,1-1.253.065H8.51c-2.026,0-3.308.2-4.145-1.064a2.681,2.681,0,0,1-.193-2.289,10,10,0,0,1,.739-1.225c0.577-.942,1.074-1.905,1.607-2.87,0.781-1.415,1.631-2.847,2.474-4.223,0.3-.49.5-0.994,0.8-1.484,0.786-1.287,1.526-2.647,2.314-3.933,0.3-.489.5-0.994,0.8-1.483,1.2-1.971,2.261-4.042,3.47-6.029,3.209-5.269,6.065-10.8,9.287-16.056,0.969-1.582,1.8-3.237,2.764-4.8,0.255-.416.421-0.842,0.675-1.257,1-1.636,1.922-3.362,2.924-5,0.423-.69.735-1.4,1.157-2.1,1.291-2.112,2.467-4.338,3.76-6.448,0.468-.764.818-1.557,1.285-2.321,1.581-2.588,3.011-5.313,4.6-7.9,0.591-.965,1.049-1.969,1.639-2.934,2.254-3.688,4.266-7.567,6.523-11.252,0.591-.965,1.049-1.968,1.639-2.934,2.422-3.963,4.586-8.126,7.005-12.09,0.63-1.033,1.178-2.108,1.8-3.127,0.632-1.038.836-1.807,2.217-2.128a2.291,2.291,0,0,1,1.671.387,4.076,4.076,0,0,1,1.061,1.451c0.575,0.946,1.087,1.942,1.671,2.9,2.627,4.317,4.976,8.846,7.616,13.155,0.714,1.165,1.28,2.381,1.992,3.547,2.254,3.688,4.266,7.567,6.523,11.252,0.591,0.964,1.049,1.969,1.639,2.934C87.575,49.53,89.15,52.543,90.9,55.4c0.423,0.69.735,1.4,1.157,2.1,1.291,2.112,2.467,4.338,3.76,6.448,0.3,0.489.5,0.994,0.8,1.483,0.954,1.562,1.839,3.211,2.8,4.772,0.3,0.489.5,0.994,0.8,1.483,0.786,1.287,1.525,2.647,2.313,3.933,0.3,0.489.5,0.994,0.8,1.483,3.507,5.739,6.617,11.766,10.122,17.507,0.712,1.167,1.279,2.38,1.992,3.547,2.254,3.688,4.274,7.562,6.524,11.253,0.376,0.616.652,1.253,1.028,1.87a8.019,8.019,0,0,1,.9,1.612,2.6,2.6,0,0,1-.29,2.031c-0.809,1.221-2.095,1.064-4.081,1.064H66.255c-1.591,0-3.132.18-3.824-.742-0.772-1.028-.611-2.206-0.61-3.965V72.654H61.789v0.032a5.7,5.7,0,0,0-.578.87c-0.439.662-.887,1.337-1.35,2-1.033,1.479-2.05,3-3.085,4.482-0.417.6-.756,1.227-1.189,1.805a2.441,2.441,0,0,1-3.374.226,2.394,2.394,0,0,1-.707-2.354,4.623,4.623,0,0,1,.771-1.322c0.281-.4.5-0.817,0.771-1.225,1.023-1.541,2.088-3.1,3.149-4.611,1.369-1.954,2.623-3.987,3.985-5.932,0.566-.808,1.1-1.639,1.639-2.45a3.152,3.152,0,0,1,1.317-1.386c2.3-.969,3.313,1.343,4.113,2.547C69.8,69.173,72.441,72.977,75,76.813c0.364,0.546.683,1.1,1.06,1.644a5.274,5.274,0,0,1,.611.9,2.64,2.64,0,0,1-.289,2.386A2.369,2.369,0,0,1,73,82.133,4.281,4.281,0,0,1,72.168,81c-0.433-.653-0.877-1.3-1.317-1.967-0.694-1.046-1.434-2.1-2.153-3.127-0.325-.464-0.575-0.954-0.9-1.419a16.344,16.344,0,0,1-1.253-1.838H66.513v38.5ZM63.974,18a9.455,9.455,0,0,1-.643,1.1c-0.418.684-.779,1.395-1.189,2.064-0.97,1.581-1.8,3.237-2.764,4.8-0.591.964-1.049,1.969-1.639,2.934-1.75,2.863-3.324,5.876-5.077,8.737-0.377.616-.653,1.253-1.028,1.87-1.034,1.7-1.947,3.48-2.989,5.191-0.331.544-.625,1.119-0.964,1.677a3.548,3.548,0,0,0-.482.838H80.78V47.151a3.6,3.6,0,0,1-.321-0.58c-0.286-.468-0.54-0.968-0.835-1.451-0.914-1.494-1.713-3.069-2.635-4.578-3-4.915-5.668-10.08-8.676-14.992-1.09-1.78-2.035-3.648-3.117-5.416-0.3-.483-0.549-0.983-0.835-1.451A2.463,2.463,0,0,0,63.974,18Z"/></svg>'
    },
    "/vis/date-lines": {
      title: "Date Compare",
      description: "See how your different habits have overlapped over time using this line diagram.",
      page: _view_components_Pages_forms_CreateForm_jsx__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
      icon: '<svg class="text-balance-dp w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><defs><style>.cls-1,.cls-2{fill:none;stroke-linecap:round;stroke-linejoin:round;}</style></defs><title/><polyline class="cls-1" points="5.33 12.73 6.42 14.06 8.33 11.73"/><polyline class="cls-1" points="10.33 12.73 11.42 14.06 13.33 11.73"/><polyline class="cls-1" points="15.33 12.73 16.42 14.06 18.33 11.73"/><polyline class="cls-1" points="5.33 16.73 6.42 18.06 8.33 15.73"/><polyline class="cls-1" points="10.33 16.73 11.42 18.06 13.33 15.73"/><line class="cls-2" x1="4.5" x2="21.5" y1="9.5" y2="9.5"/><path class="cls-2" d="M7,4.5H4.29a1.91,1.91,0,0,0-1.79,2v12a1.91,1.91,0,0,0,1.79,2H19.71a1.91,1.91,0,0,0,1.79-2V6.5a1.91,1.91,0,0,0-1.79-2H18.5"/><line class="cls-2" x1="16.5" x2="16.5" y1="2.5" y2="6.5"/><line class="cls-2" x1="7.5" x2="7.5" y1="2.5" y2="6.5"/><line class="cls-2" x1="9.5" x2="16.46" y1="4.5" y2="4.49"/></svg>'
    },
    "/vis/radial-tree": {
      title: "Radial Tree",
      description: "A pretty hierarchical tree diagram where your habits branch off from the centre of a circle.",
      page: _view_components_Pages_visualisations_RadialTree_jsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
      icon: '<svg class="text-balance-lp w-14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 358.4 358.4" style="enable-background:new 0 0 358.4 358.4;" xml:space="preserve"><path class="stroke-current" d="M345.135,12.4c-7.2-8-17.6-12.4-28.4-12.4s-21.2,4.4-28.8,12c-7.6,7.6-12,18-12,28.8c0,8.8,2.8,17.2,8,24.4l-14.4,14.4    c-18.4-16.4-42-25.6-66.8-25.6c-27.2,0-52.4,10.4-71.6,29.6c-14.8,14.8-24.4,33.2-28,53.6l-20-2.4c-0.4-8.8-3.2-17.2-8.8-24    c-6.8-8.4-16.4-14-27.2-15.2c-22.8-2.8-42.8,13.6-45.6,35.6c-1.2,10.8,1.6,21.6,8.4,30c6.8,8.4,16.4,14,27.2,15.2    c1.6,0,3.2,0.4,4.8,0.4c18.4,0,34.4-12.4,39.2-30l20,2.4c0,2-0.4,4-0.4,6c0,27.2,10.4,52.4,29.6,71.6    c19.2,19.2,44.4,29.6,71.6,29.6c2.4,0,5.2,0,7.6-0.4l2.8,22c-19.2,5.2-32.4,24-29.6,44.4c2.4,20.4,20,36,40.4,36    c1.6,0,3.2,0,4.8-0.4c10.8-1.2,20.4-6.8,27.2-15.2c6.8-8.4,9.6-19.2,8.4-30c-2.4-20-19.2-35.2-39.2-36l-2.8-22    c19.6-4,37.6-13.2,52-27.6c19.2-19.2,29.6-44.4,29.6-71.6c0-24.8-9.2-48.4-25.6-67.2l14.4-14.4c6.8,5.2,15.6,8,24.4,8    c10.8,0,21.2-4.4,28.8-12C361.135,54,361.135,28,345.135,12.4z M70.735,140c-1.6,15.2-15.6,26.8-32,24.8    c-7.6-0.8-14.4-4.8-19.2-10.8s-6.8-13.6-6-21.2c1.6-14.4,14-25.2,28.4-25.2c1.2,0,2.4,0,3.6,0.4c7.6,0.8,14.4,4.8,19.2,10.8    S71.535,132.4,70.735,140z M139.535,92.4c16.8-16.8,39.2-26,62.8-26c21.6,0,42.4,8,58.4,22l-23.2,23.2c-10-8-22.4-12.4-35.2-12.4    c-14.8,0-29.2,6-39.6,16.4c-7.6,7.6-12.8,16.8-14.8,27.2l-32.8-4C118.335,121.2,126.735,105.2,139.535,92.4z M202.735,244.4    c-23.6,0-46-9.2-62.8-26s-26-39.2-26-62.8c0-1.6,0-3.2,0.4-4.4l32.8,4c0,0.4,0,0.4,0,0.8c0,15.2,6,29.2,16.4,39.6    c10.8,10.8,24.8,16.4,39.6,16.4c0.8,0,1.6,0,2.4,0l4,32.8C206.735,244,204.735,244.4,202.735,244.4z M202.735,199.2    c-11.6,0-22.8-4.4-31.2-12.8c-8.4-8.4-12.8-19.6-12.8-31.2s4.4-22.8,12.8-31.2c8.4-8.4,19.2-12.8,31.2-12.8    c11.6,0,22.8,4.4,31.2,12.8c17.2,17.2,17.2,45.2,0,62.4C225.535,194.8,214.335,199.2,202.735,199.2z M223.935,288.4    c14.4,0,26.4,11.2,28.4,25.6c0.8,7.6-1.2,15.2-6,21.2s-11.6,10-19.2,10.8c-16,2-30-9.6-32-25.2c-2-15.6,9.2-30,25.2-32    C221.535,288.8,222.735,288.4,223.935,288.4z M291.535,155.2c0,23.6-9.2,46-26,62.8c-12.4,12.4-28,20.8-44.8,24.4l-4-32.8    c9.6-2.4,18.4-7.6,25.6-14.4c20.4-20.4,21.6-52.8,4-74.8l23.2-23.2C283.935,112.8,291.535,133.6,291.535,155.2z M337.135,61.6    c-5.6,5.6-12.8,8.4-20.4,8.4c-7.6,0-14.8-2.8-20.4-8.4c-5.6-5.6-8.4-12.8-8.4-20.4c0-7.6,2.8-14.8,8.4-20.4    c5.6-5.6,12.8-8.4,20.4-8.4c7.6,0,14.8,2.8,20.4,8.4C348.335,32,348.335,50.4,337.135,61.6z"/></svg>'
    }
  }
}, {
  label: "Habits",
  path: "/habits",
  subpaths: {
    "/habits/list": {
      title: "Habit Node List",
      description: "A flat list of all Habits for your perusal.",
      page: _view_components_Pages_HabitNodeList_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
      icon: '<svg class="text-balance-dp w-15 pl-4" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path id="magnify_1" style="fill: black; stroke-linecap:round;stroke-linejoin:round; stroke-width: 1px;" data-name="magnify 1" class="cls-1" d="M59.429,15.01A38.892,38.892,0,0,1,78.77,19.4a41,41,0,0,1,15.3,13.392,32.951,32.951,0,0,1,3.278,5.379c0.786,1.8,1.361,3.591,2.076,5.489h0.109v-0.11c2.374-1.553,4.07-4.1,6.338-5.818l1.639-1.756c0.836-.635,3.536-2.891,3.933-3.732-1.686-1.34-1.4-6.128-.437-8.013,1.325-2.589,5.214-5.964,9.726-4.5a11.617,11.617,0,0,1,3.278,1.647c3.338,2.494,4.039,8.169,1.311,11.856-1.085,1.466-4.6,3.913-7.758,3.183-1.111-.257-2.054-0.716-3.06-0.988a6.839,6.839,0,0,1-.983.878,33.385,33.385,0,0,1-3.279,3.074l-1.2,1.317a25.169,25.169,0,0,1-2.513,2.2l-1.639,1.756a31.74,31.74,0,0,0-3.169,2.964c-0.433.433-.993,0.527-1.092,1.317,0.381,0.575.158,1.512,0.327,2.305a17.482,17.482,0,0,1,.219,6.257c-0.288,1.323.069,2.494-.219,3.732-0.747,3.218-1.15,6.317-2.294,9.111a39.535,39.535,0,0,1-2.513,5.379c-0.519.857-1.442,1.754-1.639,2.854,1.4,0.933,2.532,2.543,3.715,3.732l7.758,7.794c3.66,3.677,7.376,7.3,11.036,10.978,1.63,1.637,3.657,3.181,5.027,5.049,2.192,2.99,2.084,8.38-.765,10.648-2.55,2.029-6.4,3.247-9.835,1.1a23.519,23.519,0,0,1-3.715-3.623l-7.43-7.464L88.714,95.145,84.889,91.3a11.77,11.77,0,0,1-1.639-1.647c-2.016.96-3.891,2.463-6.01,3.4a63.188,63.188,0,0,1-7.1,2.415c-4.9,1.5-13.516,1.479-18.358,0a62.481,62.481,0,0,1-6.338-1.866A42.386,42.386,0,0,1,27.085,78.679a39.929,39.929,0,0,1-3.715-6.806c-0.459-1.056-.926-3.5-1.53-4.281a14.38,14.38,0,0,1-1.967,1.976l-1.639,1.866A5.345,5.345,0,0,0,16.7,73.08c1.595,1.66,1.191,5.875.219,7.794-1.458,2.877-5.284,6.031-9.944,4.5a10.631,10.631,0,0,1-2.95-1.537C-0.048,80.793.075,73.4,4.138,70.446c1.381-1.005,4.019-2.3,6.556-1.647,1.049,0.269,1.986.829,2.95,1.1,1.1-1.675,3.166-3.289,4.589-4.72a18.317,18.317,0,0,1,2.513-2.634A24.047,24.047,0,0,1,20.2,58.7V56.175c-0.56-2.809.631-8.419,1.311-10.648a53.765,53.765,0,0,1,1.858-5.818A41.272,41.272,0,0,1,45.442,17.974a56.271,56.271,0,0,1,9.179-2.525ZM59.32,19.4l-4.48.439a53.792,53.792,0,0,0-8.3,2.415A36.95,36.95,0,0,0,26.866,42.673a51.062,51.062,0,0,0-1.858,6.7c-0.713,2.78-.433,6.009-0.437,9.111h0.109l10.709-11.2c-1.149-1.2-1.43-4.231-.874-6.147,1.16-4,3.411-5.775,7.758-6.586,1.393-.26,3.581.727,4.371,1.208,2.724,1.656,3.568,2.85,4.371,6.477a4.924,4.924,0,0,1,.109,1.756l-0.437,1.866a9.9,9.9,0,0,1,2.295,1.427c1.8,1.129,3.608,2.184,5.354,3.293,3.451,2.192,6.976,4.208,10.381,6.367,1.5,0.952,3.693,1.764,4.917,2.964,1.023-.362,2.034-1.586,3.278-2.086,2.621-1.053,5.007,0,7.1.549a14.345,14.345,0,0,1,3.169-2.964l1.2-1.317a25.94,25.94,0,0,1,2.623-2.305l1.639-1.756c0.73-.555,3.052-2.342,3.169-3.293-0.532-.8-0.494-2.037-0.874-2.964a45.028,45.028,0,0,0-3.06-6.586C85.666,27.135,75.522,19.441,59.32,19.4Zm59.334,4.281V23.9a3.954,3.954,0,0,0-4.043,3.074c-0.738,2.8,2.1,5.744,4.808,5.05,2.153-.552,4.512-3.35,2.841-6.147C121.291,24.254,120.287,24.491,118.654,23.682ZM42.711,38.831a4.147,4.147,0,0,1-1.093.22,4.833,4.833,0,0,0-2.295,1.537,4.283,4.283,0,0,0,2.623,6.586c2.684,0.655,5.568-2.627,4.917-4.83C46.135,39.878,44.9,39.755,42.711,38.831Zm5.464,10.648c-0.966,1.274-4.586,2.619-7.1,1.976-0.976-.25-1.793-0.81-2.732-0.988a29.442,29.442,0,0,1-3.934,4.062c-1.876,1.885-3.588,3.933-5.464,5.818-0.812.816-3.347,2.761-3.5,3.952,0.661,1,.626,2.595,1.093,3.732a42.671,42.671,0,0,0,2.732,5.928C34.54,82.616,41.8,88.188,52.654,91.3c5.259,1.51,13.11,1.016,17.811-.549,11.77-3.918,19.064-10.251,23.712-21.3a54.392,54.392,0,0,0,2.295-7.684c0.346-1.375,0-2.685.328-4.171a15.01,15.01,0,0,0-.109-5.269H96.582v0.11l-9.507,8.892a14.935,14.935,0,0,1,1.2,3.183,7.8,7.8,0,0,1-.437,3.952c-1.227,3.363-3.135,4.838-6.884,5.708a7.338,7.338,0,0,1-3.278-.11c-4.172-1.349-6.718-4.709-6.01-10.319a51.5,51.5,0,0,1-6.01-3.732c-3.771-2.368-7.587-4.447-11.364-6.806-1.462-.913-2.977-1.795-4.48-2.744A5.838,5.838,0,0,0,48.174,49.479ZM79.863,61.664a9.944,9.944,0,0,1-1.311.219,5,5,0,0,0-2.076,1.537A4.313,4.313,0,0,0,78.989,69.9a4.218,4.218,0,0,0,4.917-5.05C83.37,62.908,82,62.04,79.863,61.664ZM9.383,72.971a7.182,7.182,0,0,1-1.2.22A4.832,4.832,0,0,0,6.1,74.617c-2.089,2.926-.042,6.067,2.732,6.7,2.708,0.615,5.4-2.6,4.48-5.379C12.679,74.01,11.31,73.646,9.383,72.971Zm82.282,9a21.647,21.647,0,0,1-4.917,4.94v0.219L108.6,108.976l3.606,3.623a6.847,6.847,0,0,0,1.967,1.756,4.482,4.482,0,0,0,3.606-.329,3.764,3.764,0,0,0,1.093-1.537c1.523-3.033-2.194-5.607-3.715-7.135L98.439,88.668l-4.7-4.72C93.14,83.345,92.511,82.278,91.664,81.972Z"/> </svg>'
    },
    "/habits/new": {
      title: "Create Form",
      description: "Create a completely blank habit.",
      page: _view_components_Pages_forms_CreateForm_jsx__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
      icon: '<svg class="text-balance-lp w-14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 358.4 358.4" style="enable-background:new 0 0 358.4 358.4;" xml:space="preserve"><path class="stroke-current" d="M345.135,12.4c-7.2-8-17.6-12.4-28.4-12.4s-21.2,4.4-28.8,12c-7.6,7.6-12,18-12,28.8c0,8.8,2.8,17.2,8,24.4l-14.4,14.4    c-18.4-16.4-42-25.6-66.8-25.6c-27.2,0-52.4,10.4-71.6,29.6c-14.8,14.8-24.4,33.2-28,53.6l-20-2.4c-0.4-8.8-3.2-17.2-8.8-24    c-6.8-8.4-16.4-14-27.2-15.2c-22.8-2.8-42.8,13.6-45.6,35.6c-1.2,10.8,1.6,21.6,8.4,30c6.8,8.4,16.4,14,27.2,15.2    c1.6,0,3.2,0.4,4.8,0.4c18.4,0,34.4-12.4,39.2-30l20,2.4c0,2-0.4,4-0.4,6c0,27.2,10.4,52.4,29.6,71.6    c19.2,19.2,44.4,29.6,71.6,29.6c2.4,0,5.2,0,7.6-0.4l2.8,22c-19.2,5.2-32.4,24-29.6,44.4c2.4,20.4,20,36,40.4,36    c1.6,0,3.2,0,4.8-0.4c10.8-1.2,20.4-6.8,27.2-15.2c6.8-8.4,9.6-19.2,8.4-30c-2.4-20-19.2-35.2-39.2-36l-2.8-22    c19.6-4,37.6-13.2,52-27.6c19.2-19.2,29.6-44.4,29.6-71.6c0-24.8-9.2-48.4-25.6-67.2l14.4-14.4c6.8,5.2,15.6,8,24.4,8    c10.8,0,21.2-4.4,28.8-12C361.135,54,361.135,28,345.135,12.4z M70.735,140c-1.6,15.2-15.6,26.8-32,24.8    c-7.6-0.8-14.4-4.8-19.2-10.8s-6.8-13.6-6-21.2c1.6-14.4,14-25.2,28.4-25.2c1.2,0,2.4,0,3.6,0.4c7.6,0.8,14.4,4.8,19.2,10.8    S71.535,132.4,70.735,140z M139.535,92.4c16.8-16.8,39.2-26,62.8-26c21.6,0,42.4,8,58.4,22l-23.2,23.2c-10-8-22.4-12.4-35.2-12.4    c-14.8,0-29.2,6-39.6,16.4c-7.6,7.6-12.8,16.8-14.8,27.2l-32.8-4C118.335,121.2,126.735,105.2,139.535,92.4z M202.735,244.4    c-23.6,0-46-9.2-62.8-26s-26-39.2-26-62.8c0-1.6,0-3.2,0.4-4.4l32.8,4c0,0.4,0,0.4,0,0.8c0,15.2,6,29.2,16.4,39.6    c10.8,10.8,24.8,16.4,39.6,16.4c0.8,0,1.6,0,2.4,0l4,32.8C206.735,244,204.735,244.4,202.735,244.4z M202.735,199.2    c-11.6,0-22.8-4.4-31.2-12.8c-8.4-8.4-12.8-19.6-12.8-31.2s4.4-22.8,12.8-31.2c8.4-8.4,19.2-12.8,31.2-12.8    c11.6,0,22.8,4.4,31.2,12.8c17.2,17.2,17.2,45.2,0,62.4C225.535,194.8,214.335,199.2,202.735,199.2z M223.935,288.4    c14.4,0,26.4,11.2,28.4,25.6c0.8,7.6-1.2,15.2-6,21.2s-11.6,10-19.2,10.8c-16,2-30-9.6-32-25.2c-2-15.6,9.2-30,25.2-32    C221.535,288.8,222.735,288.4,223.935,288.4z M291.535,155.2c0,23.6-9.2,46-26,62.8c-12.4,12.4-28,20.8-44.8,24.4l-4-32.8    c9.6-2.4,18.4-7.6,25.6-14.4c20.4-20.4,21.6-52.8,4-74.8l23.2-23.2C283.935,112.8,291.535,133.6,291.535,155.2z M337.135,61.6    c-5.6,5.6-12.8,8.4-20.4,8.4c-7.6,0-14.8-2.8-20.4-8.4c-5.6-5.6-8.4-12.8-8.4-20.4c0-7.6,2.8-14.8,8.4-20.4    c5.6-5.6,12.8-8.4,20.4-8.4c7.6,0,14.8,2.8,20.4,8.4C348.335,32,348.335,50.4,337.135,61.6z"/></svg>'
    },
    "/habits/edit": {
      title: "Link Habits",
      description: "Link existing behaviors to a new habit or move habits around.",
      page: _view_components_Pages_forms_CreateForm_jsx__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
      icon: '<svg class="text-balance-lp w-14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 358.4 358.4" style="enable-background:new 0 0 358.4 358.4;" xml:space="preserve"><path class="stroke-current" d="M345.135,12.4c-7.2-8-17.6-12.4-28.4-12.4s-21.2,4.4-28.8,12c-7.6,7.6-12,18-12,28.8c0,8.8,2.8,17.2,8,24.4l-14.4,14.4    c-18.4-16.4-42-25.6-66.8-25.6c-27.2,0-52.4,10.4-71.6,29.6c-14.8,14.8-24.4,33.2-28,53.6l-20-2.4c-0.4-8.8-3.2-17.2-8.8-24    c-6.8-8.4-16.4-14-27.2-15.2c-22.8-2.8-42.8,13.6-45.6,35.6c-1.2,10.8,1.6,21.6,8.4,30c6.8,8.4,16.4,14,27.2,15.2    c1.6,0,3.2,0.4,4.8,0.4c18.4,0,34.4-12.4,39.2-30l20,2.4c0,2-0.4,4-0.4,6c0,27.2,10.4,52.4,29.6,71.6    c19.2,19.2,44.4,29.6,71.6,29.6c2.4,0,5.2,0,7.6-0.4l2.8,22c-19.2,5.2-32.4,24-29.6,44.4c2.4,20.4,20,36,40.4,36    c1.6,0,3.2,0,4.8-0.4c10.8-1.2,20.4-6.8,27.2-15.2c6.8-8.4,9.6-19.2,8.4-30c-2.4-20-19.2-35.2-39.2-36l-2.8-22    c19.6-4,37.6-13.2,52-27.6c19.2-19.2,29.6-44.4,29.6-71.6c0-24.8-9.2-48.4-25.6-67.2l14.4-14.4c6.8,5.2,15.6,8,24.4,8    c10.8,0,21.2-4.4,28.8-12C361.135,54,361.135,28,345.135,12.4z M70.735,140c-1.6,15.2-15.6,26.8-32,24.8    c-7.6-0.8-14.4-4.8-19.2-10.8s-6.8-13.6-6-21.2c1.6-14.4,14-25.2,28.4-25.2c1.2,0,2.4,0,3.6,0.4c7.6,0.8,14.4,4.8,19.2,10.8    S71.535,132.4,70.735,140z M139.535,92.4c16.8-16.8,39.2-26,62.8-26c21.6,0,42.4,8,58.4,22l-23.2,23.2c-10-8-22.4-12.4-35.2-12.4    c-14.8,0-29.2,6-39.6,16.4c-7.6,7.6-12.8,16.8-14.8,27.2l-32.8-4C118.335,121.2,126.735,105.2,139.535,92.4z M202.735,244.4    c-23.6,0-46-9.2-62.8-26s-26-39.2-26-62.8c0-1.6,0-3.2,0.4-4.4l32.8,4c0,0.4,0,0.4,0,0.8c0,15.2,6,29.2,16.4,39.6    c10.8,10.8,24.8,16.4,39.6,16.4c0.8,0,1.6,0,2.4,0l4,32.8C206.735,244,204.735,244.4,202.735,244.4z M202.735,199.2    c-11.6,0-22.8-4.4-31.2-12.8c-8.4-8.4-12.8-19.6-12.8-31.2s4.4-22.8,12.8-31.2c8.4-8.4,19.2-12.8,31.2-12.8    c11.6,0,22.8,4.4,31.2,12.8c17.2,17.2,17.2,45.2,0,62.4C225.535,194.8,214.335,199.2,202.735,199.2z M223.935,288.4    c14.4,0,26.4,11.2,28.4,25.6c0.8,7.6-1.2,15.2-6,21.2s-11.6,10-19.2,10.8c-16,2-30-9.6-32-25.2c-2-15.6,9.2-30,25.2-32    C221.535,288.8,222.735,288.4,223.935,288.4z M291.535,155.2c0,23.6-9.2,46-26,62.8c-12.4,12.4-28,20.8-44.8,24.4l-4-32.8    c9.6-2.4,18.4-7.6,25.6-14.4c20.4-20.4,21.6-52.8,4-74.8l23.2-23.2C283.935,112.8,291.535,133.6,291.535,155.2z M337.135,61.6    c-5.6,5.6-12.8,8.4-20.4,8.4c-7.6,0-14.8-2.8-20.4-8.4c-5.6-5.6-8.4-12.8-8.4-20.4c0-7.6,2.8-14.8,8.4-20.4    c5.6-5.6,12.8-8.4,20.4-8.4c7.6,0,14.8,2.8,20.4,8.4C348.335,32,348.335,50.4,337.135,61.6z"/></svg>'
    }
  }
}, {
  label: "Objectives",
  path: "/obj",
  subpaths: {
    "/obj/list": {
      title: "List Objectives",
      description: "A flat list of all objectives for your perusal.",
      page: _view_components_Pages_HabitNodeList_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
      icon: '<svg class="text-balance-lp w-14 pl-2 mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.cls-1,.cls-2,.cls-3{fill:none;stroke:#000;stroke-linecap:round; stroke-width: 1px;}.cls-1,.cls-2{stroke-linejoin:round;}.cls-3{stroke-miterlimit:10;stroke-width:0.94px;}</style></defs><title/><path class="stroke-current cls-1" d="M15,5.5a2,2,0,0,0-2-2,2,2,0,0,0-4,0,2,2,0,0,0-2,2v1h8Z"/><path class="stroke-current cls-1" d="M18.5,20.5a1,1,0,0,1-1,1H4.5a1,1,0,0,1-1-1V5.5a1,1,0,0,1,1-1h1"/><path class="stroke-current cls-1" d="M16.5,4.5h1a1,1,0,0,1,1,1v3"/><polyline class="cls-2" points="16.57 14.29 17.97 16 20.43 13"/><circle class="cls-3" cx="18.5" cy="14.5" r="4.5"/><line class="cls-2" x1="6.5" x2="13" y1="10.5" y2="10.5"/><line class="cls-2" x1="6.5" x2="11.5" y1="13.5" y2="13.5"/><line class="cls-2" x1="6.5" x2="12" y1="16.5" y2="16.5"/></svg>'
    },
    "/obj/new": {
      title: "New Objective",
      description: "Create a completely blank objective.",
      page: _view_components_Pages_HabitNodeList_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
      icon: '<svg class="text-balance-lp w-14 pl-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.cls-1{fill:none;stroke-linecap:round; stroke-width: 1px;stroke-linejoin:round;}</style></defs><title/><path class="stroke-current cls-1" d="M8.79,11.93l3.82-6.48a.76.76,0,0,1,1.44,0l9,15.21"/><path class="stroke-current cls-1" d="M11.05,16l1.42-1.43a1.21,1.21,0,0,1,1.71,0l1.92,1.92a1.21,1.21,0,0,0,1.71,0L19.37,15"/><path class="stroke-current cls-1" d="M1,20.66l4.85-8.24c.21-.37.56-.37.78,0l4.85,8.24"/><path class="stroke-current cls-1" d="M3,17.57l.85.85a.65.65,0,0,0,.93,0l1-1a.66.66,0,0,1,.92,0l1,1a.65.65,0,0,0,.93,0l.84-.85"/><path class="stroke-current cls-1" d="M8.45,6.34a1.22,1.22,0,0,0-1,1.38"/><path class="stroke-current cls-1" d="M7.42,7.72A1.21,1.21,0,0,0,6,6.7"/><path class="stroke-current cls-1" d="M5.45,3.34a1.22,1.22,0,0,0-1,1.38"/><path class="stroke-current cls-1" d="M4.42,4.72A1.21,1.21,0,0,0,3,3.7"/></svg>'
    },
    "/obj/edit": {
      title: "Compose with Habits",
      description: "Link existing behaviors to a new objective, or move habits from one objective to the other.",
      page: _view_components_Pages_HabitNodeList_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
      icon: '<svg class="text-balance-lp w-14 pl-2 mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.cls-1{fill:none;stroke-linecap:round; stroke-width: 1px;stroke-linejoin:round;}</style></defs><title/><polyline class="cls-1" points="14.63 20.5 14.63 12.5 20.63 12.5 18.63 14.5 20.63 16.5 16.63 16.5"/><path class="stroke-current cls-1" d="M6.75,4.5H10.1c6,0,6.53,2.94,1.21,6.53L6.94,14C1.62,17.56,2.17,20.5,8.15,20.5h4.22"/><circle class="cls-1" cx="5" cy="4.5" r="1.5"/></svg>'
    }
  }
}];
MenuRoutes["selected"] = "Habits"; // Default Page

/* harmony default export */ __webpack_exports__["a"] = (MenuRoutes);

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export registerEventListeners */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return openModal; });
var registerEventListeners = function () {
  var body = document.body;
  window.addEventListener("DOMContentLoaded", function () {
    var scrollUp = "scroll-up";
    var scrollDown = "scroll-down";
    var lastScroll = 0;
    window.addEventListener("scroll", function () {
      var currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        body.classList.remove(scrollUp);
        return;
      }

      if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
      } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
      }

      lastScroll = currentScroll;
    });
  });
}();

var openModal = function openModal() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var modal_overlay = document.querySelector("#modal_overlay");
  var modal = document.querySelector("#modal");
  var modalCl = modal.classList;
  var overlayCl = modal_overlay;

  if (value) {
    overlayCl.classList.remove("hidden");
    setTimeout(function () {
      modalCl.remove("opacity-0");
      modalCl.remove("-translate-y-full");
      modalCl.remove("scale-150");
      modal.style['z-index'] = 101;
      document.documentElement.style.overflow = "hidden";
    }, 100);
  } else {
    modalCl.add("-translate-y-full");
    setTimeout(function () {
      modalCl.add("opacity-0");
      modalCl.add("scale-150");
      modal.style["z-index"] = -101;
      document.documentElement.style.overflow = "initial";
    }, 100);
    setTimeout(function () {
      return overlayCl.classList.add("hidden");
    }, 300);
  }

  document.documentElement.scrollTop = document.body.scrollTop = 0;
};



/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _select_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });


















/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {/* harmony import */ var _store_habit_node_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _layout_ListCard_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);



var HabitNodeList = function HabitNodeList() {
  _store_habit_node_store_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].list(["Waiting"]);
  return {
    oninit: function oninit(vnode) {
      _store_habit_node_store_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].index().then(function () {
        return m.redraw();
      });
    },
    view: function view(vnode) {
      return _store_habit_node_store_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].list().map(function (n) {
        return m(_layout_ListCard_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
          value: n
        });
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (HabitNodeList);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ hierarchy; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ tree; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ src["a" /* select */]; });

// UNUSED EXPORTS: version, bisect, bisectRight, bisectLeft, bisectCenter, ascending, bisector, count, cross, cumsum, descending, deviation, extent, Adder, fsum, fcumsum, group, groups, index, indexes, rollup, rollups, groupSort, bin, histogram, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, max, maxIndex, mean, median, merge, min, minIndex, nice, pairs, permute, quantile, quantileSorted, quickselect, range, least, leastIndex, greatest, greatestIndex, scan, shuffle, shuffler, sum, ticks, tickIncrement, tickStep, transpose, variance, zip, every, some, filter, map, reduce, reverse, sort, difference, disjoint, intersection, subset, superset, union, InternMap, InternSet, axisTop, axisRight, axisBottom, axisLeft, brush, brushX, brushY, brushSelection, chord, chordTranspose, chordDirected, ribbon, ribbonArrow, color, rgb, hsl, lab, hcl, lch, gray, cubehelix, contours, contourDensity, Delaunay, Voronoi, dispatch, drag, dragDisable, dragEnable, dsvFormat, csvParse, csvParseRows, csvFormat, csvFormatBody, csvFormatRows, csvFormatRow, csvFormatValue, tsvParse, tsvParseRows, tsvFormat, tsvFormatBody, tsvFormatRows, tsvFormatRow, tsvFormatValue, autoType, easeLinear, easeQuad, easeQuadIn, easeQuadOut, easeQuadInOut, easeCubic, easeCubicIn, easeCubicOut, easeCubicInOut, easePoly, easePolyIn, easePolyOut, easePolyInOut, easeSin, easeSinIn, easeSinOut, easeSinInOut, easeExp, easeExpIn, easeExpOut, easeExpInOut, easeCircle, easeCircleIn, easeCircleOut, easeCircleInOut, easeBounce, easeBounceIn, easeBounceOut, easeBounceInOut, easeBack, easeBackIn, easeBackOut, easeBackInOut, easeElastic, easeElasticIn, easeElasticOut, easeElasticInOut, blob, buffer, dsv, csv, tsv, image, json, text, xml, html, svg, forceCenter, forceCollide, forceLink, forceManyBody, forceRadial, forceSimulation, forceX, forceY, formatDefaultLocale, format, formatPrefix, formatLocale, formatSpecifier, FormatSpecifier, precisionFixed, precisionPrefix, precisionRound, geoArea, geoBounds, geoCentroid, geoCircle, geoClipAntimeridian, geoClipCircle, geoClipExtent, geoClipRectangle, geoContains, geoDistance, geoGraticule, geoGraticule10, geoInterpolate, geoLength, geoPath, geoAlbers, geoAlbersUsa, geoAzimuthalEqualArea, geoAzimuthalEqualAreaRaw, geoAzimuthalEquidistant, geoAzimuthalEquidistantRaw, geoConicConformal, geoConicConformalRaw, geoConicEqualArea, geoConicEqualAreaRaw, geoConicEquidistant, geoConicEquidistantRaw, geoEqualEarth, geoEqualEarthRaw, geoEquirectangular, geoEquirectangularRaw, geoGnomonic, geoGnomonicRaw, geoIdentity, geoProjection, geoProjectionMutator, geoMercator, geoMercatorRaw, geoNaturalEarth1, geoNaturalEarth1Raw, geoOrthographic, geoOrthographicRaw, geoStereographic, geoStereographicRaw, geoTransverseMercator, geoTransverseMercatorRaw, geoRotation, geoStream, geoTransform, cluster, pack, packSiblings, packEnclose, partition, stratify, treemap, treemapBinary, treemapDice, treemapSlice, treemapSliceDice, treemapSquarify, treemapResquarify, interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateDate, interpolateDiscrete, interpolateHue, interpolateNumber, interpolateNumberArray, interpolateObject, interpolateRound, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateZoom, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateHsl, interpolateHslLong, interpolateLab, interpolateHcl, interpolateHclLong, interpolateCubehelix, interpolateCubehelixLong, piecewise, quantize, path, polygonArea, polygonCentroid, polygonHull, polygonContains, polygonLength, quadtree, randomUniform, randomInt, randomNormal, randomLogNormal, randomBates, randomIrwinHall, randomExponential, randomPareto, randomBernoulli, randomGeometric, randomBinomial, randomGamma, randomBeta, randomWeibull, randomCauchy, randomLogistic, randomPoisson, randomLcg, scaleBand, scalePoint, scaleIdentity, scaleLinear, scaleLog, scaleSymlog, scaleOrdinal, scaleImplicit, scalePow, scaleSqrt, scaleRadial, scaleQuantile, scaleQuantize, scaleThreshold, scaleTime, scaleUtc, scaleSequential, scaleSequentialLog, scaleSequentialPow, scaleSequentialSqrt, scaleSequentialSymlog, scaleSequentialQuantile, scaleDiverging, scaleDivergingLog, scaleDivergingPow, scaleDivergingSqrt, scaleDivergingSymlog, tickFormat, schemeCategory10, schemeAccent, schemeDark2, schemePaired, schemePastel1, schemePastel2, schemeSet1, schemeSet2, schemeSet3, schemeTableau10, interpolateBrBG, schemeBrBG, interpolatePRGn, schemePRGn, interpolatePiYG, schemePiYG, interpolatePuOr, schemePuOr, interpolateRdBu, schemeRdBu, interpolateRdGy, schemeRdGy, interpolateRdYlBu, schemeRdYlBu, interpolateRdYlGn, schemeRdYlGn, interpolateSpectral, schemeSpectral, interpolateBuGn, schemeBuGn, interpolateBuPu, schemeBuPu, interpolateGnBu, schemeGnBu, interpolateOrRd, schemeOrRd, interpolatePuBuGn, schemePuBuGn, interpolatePuBu, schemePuBu, interpolatePuRd, schemePuRd, interpolateRdPu, schemeRdPu, interpolateYlGnBu, schemeYlGnBu, interpolateYlGn, schemeYlGn, interpolateYlOrBr, schemeYlOrBr, interpolateYlOrRd, schemeYlOrRd, interpolateBlues, schemeBlues, interpolateGreens, schemeGreens, interpolateGreys, schemeGreys, interpolatePurples, schemePurples, interpolateReds, schemeReds, interpolateOranges, schemeOranges, interpolateCividis, interpolateCubehelixDefault, interpolateRainbow, interpolateWarm, interpolateCool, interpolateSinebow, interpolateTurbo, interpolateViridis, interpolateMagma, interpolateInferno, interpolatePlasma, create, creator, local, matcher, namespace, namespaces, pointer, pointers, selectAll, selection, selector, selectorAll, style, window, arc, area, line, pie, areaRadial, radialArea, lineRadial, radialLine, pointRadial, linkHorizontal, linkVertical, linkRadial, symbol, symbols, symbolCircle, symbolCross, symbolDiamond, symbolSquare, symbolStar, symbolTriangle, symbolWye, curveBasisClosed, curveBasisOpen, curveBasis, curveBumpX, curveBumpY, curveBundle, curveCardinalClosed, curveCardinalOpen, curveCardinal, curveCatmullRomClosed, curveCatmullRomOpen, curveCatmullRom, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore, stack, stackOffsetExpand, stackOffsetDiverging, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle, stackOrderAppearance, stackOrderAscending, stackOrderDescending, stackOrderInsideOut, stackOrderNone, stackOrderReverse, timeInterval, timeMillisecond, timeMilliseconds, utcMillisecond, utcMilliseconds, timeSecond, timeSeconds, utcSecond, utcSeconds, timeMinute, timeMinutes, timeHour, timeHours, timeDay, timeDays, timeWeek, timeWeeks, timeSunday, timeSundays, timeMonday, timeMondays, timeTuesday, timeTuesdays, timeWednesday, timeWednesdays, timeThursday, timeThursdays, timeFriday, timeFridays, timeSaturday, timeSaturdays, timeMonth, timeMonths, timeYear, timeYears, utcMinute, utcMinutes, utcHour, utcHours, utcDay, utcDays, utcWeek, utcWeeks, utcSunday, utcSundays, utcMonday, utcMondays, utcTuesday, utcTuesdays, utcWednesday, utcWednesdays, utcThursday, utcThursdays, utcFriday, utcFridays, utcSaturday, utcSaturdays, utcMonth, utcMonths, utcYear, utcYears, timeFormatDefaultLocale, timeFormat, timeParse, utcFormat, utcParse, timeFormatLocale, isoFormat, isoParse, now, timer, timerFlush, timeout, interval, transition, active, interrupt, zoom, zoomTransform, zoomIdentity

// CONCATENATED MODULE: ./node_modules/d3/dist/package.js
var package_name = "d3";
var version = "6.6.0";
var description = "Data-Driven Documents";
var keywords = ["dom","visualization","svg","animation","canvas"];
var homepage = "https://d3js.org";
var license = "BSD-3-Clause";
var author = {"name":"Mike Bostock","url":"https://bost.ocks.org/mike"};
var main = "dist/d3.node.js";
var unpkg = "dist/d3.min.js";
var jsdelivr = "dist/d3.min.js";
var package_module = "index.js";
var repository = {"type":"git","url":"https://github.com/d3/d3.git"};
var files = ["dist/**/*.js","index.js"];
var scripts = {"pretest":"rimraf dist && mkdir dist && json2module package.json > dist/package.js && rollup -c","test":"tape 'test/**/*-test.js'","prepublishOnly":"yarn test","postpublish":"git push && git push --tags && cd ../d3.github.com && git pull && cp ../d3/dist/d3.js d3.v${npm_package_version%%.*}.js && cp ../d3/dist/d3.min.js d3.v${npm_package_version%%.*}.min.js && git add d3.v${npm_package_version%%.*}.js d3.v${npm_package_version%%.*}.min.js && git commit -m \"d3 ${npm_package_version}\" && git push && cd - && zip -j dist/d3.zip -- LICENSE README.md API.md CHANGES.md dist/d3.js dist/d3.min.js"};
var devDependencies = {"json2module":"0.0","rimraf":"3","rollup":"2","rollup-plugin-ascii":"0.0","rollup-plugin-node-resolve":"5","rollup-plugin-terser":"7","tape":"4","tape-await":"0.1"};
var dependencies = {"d3-array":"2","d3-axis":"2","d3-brush":"2","d3-chord":"2","d3-color":"2","d3-contour":"2","d3-delaunay":"5","d3-dispatch":"2","d3-drag":"2","d3-dsv":"2","d3-ease":"2","d3-fetch":"2","d3-force":"2","d3-format":"2","d3-geo":"2","d3-hierarchy":"2","d3-interpolate":"2","d3-path":"2","d3-polygon":"2","d3-quadtree":"2","d3-random":"2","d3-scale":"3","d3-scale-chromatic":"2","d3-selection":"2","d3-shape":"2","d3-time":"2","d3-time-format":"3","d3-timer":"2","d3-transition":"2","d3-zoom":"2"};

// CONCATENATED MODULE: ./node_modules/d3-dispatch/src/dispatch.js
var noop = {value: () => {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ var src_dispatch = (dispatch);

// EXTERNAL MODULE: ./node_modules/d3-selection/src/select.js
var src_select = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/d3-drag/src/noevent.js
function nopropagation(event) {
  event.stopImmediatePropagation();
}

/* harmony default export */ var noevent = (function(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
});

// CONCATENATED MODULE: ./node_modules/d3-drag/src/nodrag.js



/* harmony default export */ var nodrag = (function(view) {
  var root = view.document.documentElement,
      selection = Object(src_select["a" /* default */])(view).on("dragstart.drag", noevent, true);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", noevent, true);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
});

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = Object(src_select["a" /* default */])(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", noevent, true);
    setTimeout(function() { selection.on("click.drag", null); }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}

// CONCATENATED MODULE: ./node_modules/d3-color/src/define.js
/* harmony default export */ var define = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

// CONCATENATED MODULE: ./node_modules/d3-color/src/color.js


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color_color, {
  copy: function(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color_color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color_color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function color_rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, color_rgb, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(")
      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.b) || 0))
      + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color_color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(")
        + (this.h || 0) + ", "
        + (this.s || 0) * 100 + "%, "
        + (this.l || 0) * 100 + "%"
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/basis.js
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ var src_basis = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/basisClosed.js


/* harmony default export */ var basisClosed = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/constant.js
/* harmony default export */ var constant = (x => () => x);

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/color.js


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant(isNaN(a) ? b : a);
}

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/rgb.js





/* harmony default export */ var src_rgb = ((function rgbGamma(y) {
  var color = gamma(y);

  function rgb(start, end) {
    var r = color((start = color_rgb(start)).r, (end = color_rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = color_rgb(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(src_basis);
var rgbBasisClosed = rgbSpline(basisClosed);

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/numberArray.js
/* harmony default export */ var numberArray = (function(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
});

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/array.js



/* harmony default export */ var array = (function(a, b) {
  return (isNumberArray(b) ? numberArray : genericArray)(a, b);
});

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = src_value(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/date.js
/* harmony default export */ var date = (function(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/number.js
/* harmony default export */ var number = (function(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/object.js


/* harmony default export */ var object = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = src_value(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/string.js


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ var string = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: number(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/value.js










/* harmony default export */ var src_value = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant(b)
      : (t === "number" ? number
      : t === "string" ? ((c = color_color(b)) ? (b = c, src_rgb) : string)
      : b instanceof color_color ? src_rgb
      : b instanceof Date ? date
      : isNumberArray(b) ? numberArray
      : Array.isArray(b) ? genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : number)(a, b);
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/pointer.js + 1 modules
var pointer = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selection/index.js + 36 modules
var src_selection = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/d3-timer/src/timer.js
var timer_frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++timer_frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --timer_frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  timer_frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    timer_frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (timer_frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    timer_frame = 1, setFrame(wake);
  }
}

// CONCATENATED MODULE: ./node_modules/d3-timer/src/timeout.js


/* harmony default export */ var src_timeout = (function(callback, delay, time) {
  var t = new Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(elapsed => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/schedule.js



var emptyOn = src_dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ var transition_schedule = (function(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
});

function init(node, id) {
  var schedule = schedule_get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function schedule_set(node, id) {
  var schedule = schedule_get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function schedule_get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = timer(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return src_timeout(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    src_timeout(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

// CONCATENATED MODULE: ./node_modules/d3-transition/src/interrupt.js


/* harmony default export */ var interrupt = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/selection/interrupt.js


/* harmony default export */ var selection_interrupt = (function(name) {
  return this.each(function() {
    interrupt(this, name);
  });
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/transform/decompose.js
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ var decompose = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/transform/parse.js


var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}

function parseSvg(value) {
  if (value == null) return identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/transform/index.js



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: number(xa, xb)}, {i: i - 2, x: number(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: number(xa, xb)}, {i: i - 2, x: number(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// EXTERNAL MODULE: ./node_modules/d3-selection/src/namespace.js
var namespace = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/tween.js


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = schedule_set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = schedule_set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ var transition_tween = (function(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = schedule_get(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
});

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = schedule_set(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return schedule_get(node, id).value[name];
  };
}

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/interpolate.js



/* harmony default export */ var transition_interpolate = (function(a, b) {
  var c;
  return (typeof b === "number" ? number
      : b instanceof color_color ? src_rgb
      : (c = color_color(b)) ? (b = c, src_rgb)
      : string)(a, b);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/attr.js





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ var attr = (function(name, value) {
  var fullname = Object(namespace["a" /* default */])(name), i = fullname === "transform" ? interpolateTransformSvg : transition_interpolate;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/attrTween.js


function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ var transition_attrTween = (function(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = Object(namespace["a" /* default */])(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/delay.js


function delayFunction(id, value) {
  return function() {
    init(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    init(this, id).delay = value;
  };
}

/* harmony default export */ var transition_delay = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : schedule_get(this.node(), id).delay;
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/duration.js


function durationFunction(id, value) {
  return function() {
    schedule_set(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    schedule_set(this, id).duration = value;
  };
}

/* harmony default export */ var transition_duration = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : schedule_get(this.node(), id).duration;
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/ease.js


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    schedule_set(this, id).ease = value;
  };
}

/* harmony default export */ var ease = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : schedule_get(this.node(), id).ease;
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/easeVarying.js


function easeVarying(id, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error;
    schedule_set(this, id).ease = v;
  };
}

/* harmony default export */ var transition_easeVarying = (function(value) {
  if (typeof value !== "function") throw new Error;
  return this.each(easeVarying(this._id, value));
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/matcher.js
var matcher = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/filter.js



/* harmony default export */ var transition_filter = (function(match) {
  if (typeof match !== "function") match = Object(matcher["b" /* default */])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Transition(subgroups, this._parents, this._name, this._id);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/merge.js


/* harmony default export */ var transition_merge = (function(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Transition(merges, this._parents, this._name, this._id);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/on.js


function on_start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = on_start(name) ? init : schedule_set;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ var transition_on = (function(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? schedule_get(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/remove.js
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ var transition_remove = (function() {
  return this.on("end.remove", removeFunction(this._id));
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selector.js
var selector = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/select.js




/* harmony default export */ var transition_select = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(selector["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        transition_schedule(subgroup[i], name, id, i, subgroup, schedule_get(node, id));
      }
    }
  }

  return new Transition(subgroups, this._parents, name, id);
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selectorAll.js
var selectorAll = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/selectAll.js




/* harmony default export */ var selectAll = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(selectorAll["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = schedule_get(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            transition_schedule(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new Transition(subgroups, parents, name, id);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/selection.js


var Selection = src_selection["b" /* default */].prototype.constructor;

/* harmony default export */ var transition_selection = (function() {
  return new Selection(this._groups, this._parents);
});

// EXTERNAL MODULE: ./node_modules/d3-selection/src/selection/style.js
var style = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/style.js






function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = Object(style["b" /* styleValue */])(this, name),
        string1 = (this.style.removeProperty(name), Object(style["b" /* styleValue */])(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = Object(style["b" /* styleValue */])(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = Object(style["b" /* styleValue */])(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), Object(style["b" /* styleValue */])(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = schedule_set(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/* harmony default export */ var transition_style = (function(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : transition_interpolate;
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ var transition_styleTween = (function(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/text.js


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ var transition_text = (function(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction(tweenValue(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ var transition_textTween = (function(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/transition.js



/* harmony default export */ var transition_transition = (function() {
  var name = this._name,
      id0 = this._id,
      id1 = newId();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = schedule_get(node, id0);
        transition_schedule(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new Transition(groups, this._parents, name, id1);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/end.js


/* harmony default export */ var transition_end = (function() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = schedule_set(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });

    // The selection was empty, resolve end immediately
    if (size === 0) resolve();
  });
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/index.js






















var transition_id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function src_transition_transition(name) {
  return Object(src_selection["b" /* default */])().transition(name);
}

function newId() {
  return ++transition_id;
}

var selection_prototype = src_selection["b" /* default */].prototype;

Transition.prototype = src_transition_transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: selectAll,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: ease,
  easeVarying: transition_easeVarying,
  end: transition_end,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

// CONCATENATED MODULE: ./node_modules/d3-ease/src/cubic.js
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

// CONCATENATED MODULE: ./node_modules/d3-transition/src/selection/transition.js





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};

function transition_inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id} not found`);
    }
  }
  return timing;
}

/* harmony default export */ var selection_transition = (function(name) {
  var id,
      timing;

  if (name instanceof Transition) {
    id = name._id, name = name._name;
  } else {
    id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        transition_schedule(node, name, id, i, group, timing || transition_inherit(node, id));
      }
    }
  }

  return new Transition(groups, this._parents, name, id);
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/selection/index.js




src_selection["b" /* default */].prototype.interrupt = selection_interrupt;
src_selection["b" /* default */].prototype.transition = selection_transition;

// CONCATENATED MODULE: ./node_modules/d3-transition/src/active.js



var active_root = [null];

/* harmony default export */ var src_active = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > SCHEDULED && schedule.name === name) {
        return new Transition([[node]], active_root, name, +i);
      }
    }
  }

  return null;
});

// CONCATENATED MODULE: ./node_modules/d3-transition/src/index.js





// CONCATENATED MODULE: ./node_modules/d3-brush/src/constant.js
/* harmony default export */ var src_constant = (x => () => x);

// CONCATENATED MODULE: ./node_modules/d3-brush/src/event.js
function BrushEvent(type, {
  sourceEvent,
  target,
  selection,
  mode,
  dispatch
}) {
  Object.defineProperties(this, {
    type: {value: type, enumerable: true, configurable: true},
    sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
    target: {value: target, enumerable: true, configurable: true},
    selection: {value: selection, enumerable: true, configurable: true},
    mode: {value: mode, enumerable: true, configurable: true},
    _: {value: dispatch}
  });
}

// CONCATENATED MODULE: ./node_modules/d3-brush/src/noevent.js
function noevent_nopropagation(event) {
  event.stopImmediatePropagation();
}

/* harmony default export */ var src_noevent = (function(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
});

// CONCATENATED MODULE: ./node_modules/d3-brush/src/brush.js









var MODE_DRAG = {name: "drag"},
    MODE_SPACE = {name: "space"},
    MODE_HANDLE = {name: "handle"},
    MODE_CENTER = {name: "center"};

const {abs, max, min} = Math;

function number1(e) {
  return [+e[0], +e[1]];
}

function number2(e) {
  return [number1(e[0]), number1(e[1])];
}

var X = {
  name: "x",
  handles: ["w", "e"].map(brush_type),
  input: function(x, e) { return x == null ? null : [[+x[0], e[0][1]], [+x[1], e[1][1]]]; },
  output: function(xy) { return xy && [xy[0][0], xy[1][0]]; }
};

var Y = {
  name: "y",
  handles: ["n", "s"].map(brush_type),
  input: function(y, e) { return y == null ? null : [[e[0][0], +y[0]], [e[1][0], +y[1]]]; },
  output: function(xy) { return xy && [xy[0][1], xy[1][1]]; }
};

var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(brush_type),
  input: function(xy) { return xy == null ? null : number2(xy); },
  output: function(xy) { return xy; }
};

var cursors = {
  overlay: "crosshair",
  selection: "move",
  n: "ns-resize",
  e: "ew-resize",
  s: "ns-resize",
  w: "ew-resize",
  nw: "nwse-resize",
  ne: "nesw-resize",
  se: "nwse-resize",
  sw: "nesw-resize"
};

var flipX = {
  e: "w",
  w: "e",
  nw: "ne",
  ne: "nw",
  se: "sw",
  sw: "se"
};

var flipY = {
  n: "s",
  s: "n",
  nw: "sw",
  ne: "se",
  se: "ne",
  sw: "nw"
};

var signsX = {
  overlay: +1,
  selection: +1,
  n: null,
  e: +1,
  s: null,
  w: -1,
  nw: -1,
  ne: +1,
  se: +1,
  sw: -1
};

var signsY = {
  overlay: +1,
  selection: +1,
  n: -1,
  e: null,
  s: +1,
  w: null,
  nw: -1,
  ne: -1,
  se: +1,
  sw: +1
};

function brush_type(t) {
  return {type: t};
}

// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}

function defaultExtent() {
  var svg = this.ownerSVGElement || this;
  if (svg.hasAttribute("viewBox")) {
    svg = svg.viewBox.baseVal;
    return [[svg.x, svg.y], [svg.x + svg.width, svg.y + svg.height]];
  }
  return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

// Like d3.local, but with the name “__brush” rather than auto-generated.
function local(node) {
  while (!node.__brush) if (!(node = node.parentNode)) return;
  return node.__brush;
}

function brush_empty(extent) {
  return extent[0][0] === extent[1][0]
      || extent[0][1] === extent[1][1];
}

function brushSelection(node) {
  var state = node.__brush;
  return state ? state.dim.output(state.selection) : null;
}

function brushX() {
  return brush_brush(X);
}

function brushY() {
  return brush_brush(Y);
}

/* harmony default export */ var src_brush = (function() {
  return brush_brush(XY);
});

function brush_brush(dim) {
  var extent = defaultExtent,
      filter = defaultFilter,
      touchable = defaultTouchable,
      keys = true,
      listeners = src_dispatch("start", "brush", "end"),
      handleSize = 6,
      touchending;

  function brush(group) {
    var overlay = group
        .property("__brush", initialize)
      .selectAll(".overlay")
      .data([brush_type("overlay")]);

    overlay.enter().append("rect")
        .attr("class", "overlay")
        .attr("pointer-events", "all")
        .attr("cursor", cursors.overlay)
      .merge(overlay)
        .each(function() {
          var extent = local(this).extent;
          Object(src_select["a" /* default */])(this)
              .attr("x", extent[0][0])
              .attr("y", extent[0][1])
              .attr("width", extent[1][0] - extent[0][0])
              .attr("height", extent[1][1] - extent[0][1]);
        });

    group.selectAll(".selection")
      .data([brush_type("selection")])
      .enter().append("rect")
        .attr("class", "selection")
        .attr("cursor", cursors.selection)
        .attr("fill", "#777")
        .attr("fill-opacity", 0.3)
        .attr("stroke", "#fff")
        .attr("shape-rendering", "crispEdges");

    var handle = group.selectAll(".handle")
      .data(dim.handles, function(d) { return d.type; });

    handle.exit().remove();

    handle.enter().append("rect")
        .attr("class", function(d) { return "handle handle--" + d.type; })
        .attr("cursor", function(d) { return cursors[d.type]; });

    group
        .each(redraw)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("mousedown.brush", started)
      .filter(touchable)
        .on("touchstart.brush", started)
        .on("touchmove.brush", touchmoved)
        .on("touchend.brush touchcancel.brush", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  brush.move = function(group, selection) {
    if (group.tween) {
      group
          .on("start.brush", function(event) { emitter(this, arguments).beforestart().start(event); })
          .on("interrupt.brush end.brush", function(event) { emitter(this, arguments).end(event); })
          .tween("brush", function() {
            var that = this,
                state = that.__brush,
                emit = emitter(that, arguments),
                selection0 = state.selection,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent),
                i = src_value(selection0, selection1);

            function tween(t) {
              state.selection = t === 1 && selection1 === null ? null : i(t);
              redraw.call(that);
              emit.brush();
            }

            return selection0 !== null && selection1 !== null ? tween : tween(1);
          });
    } else {
      group
          .each(function() {
            var that = this,
                args = arguments,
                state = that.__brush,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent),
                emit = emitter(that, args).beforestart();

            interrupt(that);
            state.selection = selection1 === null ? null : selection1;
            redraw.call(that);
            emit.start().brush().end();
          });
    }
  };

  brush.clear = function(group) {
    brush.move(group, null);
  };

  function redraw() {
    var group = Object(src_select["a" /* default */])(this),
        selection = local(this).selection;

    if (selection) {
      group.selectAll(".selection")
          .style("display", null)
          .attr("x", selection[0][0])
          .attr("y", selection[0][1])
          .attr("width", selection[1][0] - selection[0][0])
          .attr("height", selection[1][1] - selection[0][1]);

      group.selectAll(".handle")
          .style("display", null)
          .attr("x", function(d) { return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2; })
          .attr("y", function(d) { return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2; })
          .attr("width", function(d) { return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize; })
          .attr("height", function(d) { return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize; });
    }

    else {
      group.selectAll(".selection,.handle")
          .style("display", "none")
          .attr("x", null)
          .attr("y", null)
          .attr("width", null)
          .attr("height", null);
    }
  }

  function emitter(that, args, clean) {
    var emit = that.__brush.emitter;
    return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
  }

  function Emitter(that, args, clean) {
    this.that = that;
    this.args = args;
    this.state = that.__brush;
    this.active = 0;
    this.clean = clean;
  }

  Emitter.prototype = {
    beforestart: function() {
      if (++this.active === 1) this.state.emitter = this, this.starting = true;
      return this;
    },
    start: function(event, mode) {
      if (this.starting) this.starting = false, this.emit("start", event, mode);
      else this.emit("brush", event);
      return this;
    },
    brush: function(event, mode) {
      this.emit("brush", event, mode);
      return this;
    },
    end: function(event, mode) {
      if (--this.active === 0) delete this.state.emitter, this.emit("end", event, mode);
      return this;
    },
    emit: function(type, event, mode) {
      var d = Object(src_select["a" /* default */])(this.that).datum();
      listeners.call(
        type,
        this.that,
        new BrushEvent(type, {
          sourceEvent: event,
          target: brush,
          selection: dim.output(this.state.selection),
          mode,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function started(event) {
    if (touchending && !event.touches) return;
    if (!filter.apply(this, arguments)) return;

    var that = this,
        type = event.target.__data__.type,
        mode = (keys && event.metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : (keys && event.altKey ? MODE_CENTER : MODE_HANDLE),
        signX = dim === Y ? null : signsX[type],
        signY = dim === X ? null : signsY[type],
        state = local(that),
        extent = state.extent,
        selection = state.selection,
        W = extent[0][0], w0, w1,
        N = extent[0][1], n0, n1,
        E = extent[1][0], e0, e1,
        S = extent[1][1], s0, s1,
        dx = 0,
        dy = 0,
        moving,
        shifting = signX && signY && keys && event.shiftKey,
        lockX,
        lockY,
        points = Array.from(event.touches || [event], t => {
          const i = t.identifier;
          t = Object(pointer["a" /* default */])(t, that);
          t.point0 = t.slice();
          t.identifier = i;
          return t;
        });

    if (type === "overlay") {
      if (selection) moving = true;
      const pts = [points[0], points[1] || points[0]];
      state.selection = selection = [[
          w0 = dim === Y ? W : min(pts[0][0], pts[1][0]),
          n0 = dim === X ? N : min(pts[0][1], pts[1][1])
        ], [
          e0 = dim === Y ? E : max(pts[0][0], pts[1][0]),
          s0 = dim === X ? S : max(pts[0][1], pts[1][1])
        ]];
      if (points.length > 1) move();
    } else {
      w0 = selection[0][0];
      n0 = selection[0][1];
      e0 = selection[1][0];
      s0 = selection[1][1];
    }

    w1 = w0;
    n1 = n0;
    e1 = e0;
    s1 = s0;

    var group = Object(src_select["a" /* default */])(that)
        .attr("pointer-events", "none");

    var overlay = group.selectAll(".overlay")
        .attr("cursor", cursors[type]);

    interrupt(that);
    var emit = emitter(that, arguments, true).beforestart();

    if (event.touches) {
      emit.moved = moved;
      emit.ended = ended;
    } else {
      var view = Object(src_select["a" /* default */])(event.view)
          .on("mousemove.brush", moved, true)
          .on("mouseup.brush", ended, true);
      if (keys) view
          .on("keydown.brush", keydowned, true)
          .on("keyup.brush", keyupped, true)

      nodrag(event.view);
    }

    redraw.call(that);
    emit.start(event, mode.name);

    function moved(event) {
      for (const p of event.changedTouches || [event]) {
        for (const d of points)
          if (d.identifier === p.identifier) d.cur = Object(pointer["a" /* default */])(p, that);
      }
      if (shifting && !lockX && !lockY && points.length === 1) {
        const point = points[0];
        if (abs(point.cur[0] - point[0]) > abs(point.cur[1] - point[1]))
          lockY = true;
        else
          lockX = true;
      }
      for (const point of points)
        if (point.cur) point[0] = point.cur[0], point[1] = point.cur[1];
      moving = true;
      src_noevent(event);
      move(event);
    }

    function move(event) {
      const point = points[0], point0 = point.point0;
      var t;

      dx = point[0] - point0[0];
      dy = point[1] - point0[1];

      switch (mode) {
        case MODE_SPACE:
        case MODE_DRAG: {
          if (signX) dx = max(W - w0, min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
          if (signY) dy = max(N - n0, min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
          break;
        }
        case MODE_HANDLE: {
          if (points[1]) {
            if (signX) w1 = max(W, min(E, points[0][0])), e1 = max(W, min(E, points[1][0])), signX = 1;
            if (signY) n1 = max(N, min(S, points[0][1])), s1 = max(N, min(S, points[1][1])), signY = 1;
          } else {
            if (signX < 0) dx = max(W - w0, min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
            else if (signX > 0) dx = max(W - e0, min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
            if (signY < 0) dy = max(N - n0, min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
            else if (signY > 0) dy = max(N - s0, min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
          }
          break;
        }
        case MODE_CENTER: {
          if (signX) w1 = max(W, min(E, w0 - dx * signX)), e1 = max(W, min(E, e0 + dx * signX));
          if (signY) n1 = max(N, min(S, n0 - dy * signY)), s1 = max(N, min(S, s0 + dy * signY));
          break;
        }
      }

      if (e1 < w1) {
        signX *= -1;
        t = w0, w0 = e0, e0 = t;
        t = w1, w1 = e1, e1 = t;
        if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
      }

      if (s1 < n1) {
        signY *= -1;
        t = n0, n0 = s0, s0 = t;
        t = n1, n1 = s1, s1 = t;
        if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
      }

      if (state.selection) selection = state.selection; // May be set by brush.move!
      if (lockX) w1 = selection[0][0], e1 = selection[1][0];
      if (lockY) n1 = selection[0][1], s1 = selection[1][1];

      if (selection[0][0] !== w1
          || selection[0][1] !== n1
          || selection[1][0] !== e1
          || selection[1][1] !== s1) {
        state.selection = [[w1, n1], [e1, s1]];
        redraw.call(that);
        emit.brush(event, mode.name);
      }
    }

    function ended(event) {
      noevent_nopropagation(event);
      if (event.touches) {
        if (event.touches.length) return;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
      } else {
        yesdrag(event.view, moving);
        view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      }
      group.attr("pointer-events", "all");
      overlay.attr("cursor", cursors.overlay);
      if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
      if (brush_empty(selection)) state.selection = null, redraw.call(that);
      emit.end(event, mode.name);
    }

    function keydowned(event) {
      switch (event.keyCode) {
        case 16: { // SHIFT
          shifting = signX && signY;
          break;
        }
        case 18: { // ALT
          if (mode === MODE_HANDLE) {
            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
            mode = MODE_CENTER;
            move();
          }
          break;
        }
        case 32: { // SPACE; takes priority over ALT
          if (mode === MODE_HANDLE || mode === MODE_CENTER) {
            if (signX < 0) e0 = e1 - dx; else if (signX > 0) w0 = w1 - dx;
            if (signY < 0) s0 = s1 - dy; else if (signY > 0) n0 = n1 - dy;
            mode = MODE_SPACE;
            overlay.attr("cursor", cursors.selection);
            move();
          }
          break;
        }
        default: return;
      }
      src_noevent(event);
    }

    function keyupped(event) {
      switch (event.keyCode) {
        case 16: { // SHIFT
          if (shifting) {
            lockX = lockY = shifting = false;
            move();
          }
          break;
        }
        case 18: { // ALT
          if (mode === MODE_CENTER) {
            if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
            if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
            mode = MODE_HANDLE;
            move();
          }
          break;
        }
        case 32: { // SPACE
          if (mode === MODE_SPACE) {
            if (event.altKey) {
              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode = MODE_CENTER;
            } else {
              if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
              if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
              mode = MODE_HANDLE;
            }
            overlay.attr("cursor", cursors[type]);
            move();
          }
          break;
        }
        default: return;
      }
      src_noevent(event);
    }
  }

  function touchmoved(event) {
    emitter(this, arguments).moved(event);
  }

  function touchended(event) {
    emitter(this, arguments).ended(event);
  }

  function initialize() {
    var state = this.__brush || {selection: null};
    state.extent = number2(extent.apply(this, arguments));
    state.dim = dim;
    return state;
  }

  brush.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : src_constant(number2(_)), brush) : extent;
  };

  brush.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : src_constant(!!_), brush) : filter;
  };

  brush.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : src_constant(!!_), brush) : touchable;
  };

  brush.handleSize = function(_) {
    return arguments.length ? (handleSize = +_, brush) : handleSize;
  };

  brush.keyModifiers = function(_) {
    return arguments.length ? (keys = !!_, brush) : keys;
  };

  brush.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? brush : value;
  };

  return brush;
}

// CONCATENATED MODULE: ./node_modules/d3-brush/src/index.js


// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/count.js
function count(node) {
  var sum = 0,
      children = node.children,
      i = children && children.length;
  if (!i) sum = 1;
  else while (--i >= 0) sum += children[i].value;
  node.value = sum;
}

/* harmony default export */ var hierarchy_count = (function() {
  return this.eachAfter(count);
});

// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/each.js
/* harmony default export */ var each = (function(callback, that) {
  let index = -1;
  for (const node of this) {
    callback.call(that, node, ++index, this);
  }
  return this;
});

// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
/* harmony default export */ var eachBefore = (function(callback, that) {
  var node = this, nodes = [node], children, i, index = -1;
  while (node = nodes.pop()) {
    callback.call(that, node, ++index, this);
    if (children = node.children) {
      for (i = children.length - 1; i >= 0; --i) {
        nodes.push(children[i]);
      }
    }
  }
  return this;
});

// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
/* harmony default export */ var eachAfter = (function(callback, that) {
  var node = this, nodes = [node], next = [], children, i, n, index = -1;
  while (node = nodes.pop()) {
    next.push(node);
    if (children = node.children) {
      for (i = 0, n = children.length; i < n; ++i) {
        nodes.push(children[i]);
      }
    }
  }
  while (node = next.pop()) {
    callback.call(that, node, ++index, this);
  }
  return this;
});

// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/find.js
/* harmony default export */ var find = (function(callback, that) {
  let index = -1;
  for (const node of this) {
    if (callback.call(that, node, ++index, this)) {
      return node;
    }
  }
});

// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/sum.js
/* harmony default export */ var sum = (function(value) {
  return this.eachAfter(function(node) {
    var sum = +value(node.data) || 0,
        children = node.children,
        i = children && children.length;
    while (--i >= 0) sum += children[i].value;
    node.value = sum;
  });
});

// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/sort.js
/* harmony default export */ var sort = (function(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
});

// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/path.js
/* harmony default export */ var path = (function(end) {
  var start = this,
      ancestor = leastCommonAncestor(start, end),
      nodes = [start];
  while (start !== ancestor) {
    start = start.parent;
    nodes.push(start);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
});

function leastCommonAncestor(a, b) {
  if (a === b) return a;
  var aNodes = a.ancestors(),
      bNodes = b.ancestors(),
      c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}

// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/ancestors.js
/* harmony default export */ var ancestors = (function() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
});

// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/descendants.js
/* harmony default export */ var descendants = (function() {
  return Array.from(this);
});

// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/leaves.js
/* harmony default export */ var leaves = (function() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
});

// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/links.js
/* harmony default export */ var links = (function() {
  var root = this, links = [];
  root.each(function(node) {
    if (node !== root) { // Don’t include the root’s parent, if any.
      links.push({source: node.parent, target: node});
    }
  });
  return links;
});

// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/iterator.js
/* harmony default export */ var iterator = (function*() {
  var node = this, current, next = [node], children, i, n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      yield node;
      if (children = node.children) {
        for (i = 0, n = children.length; i < n; ++i) {
          next.push(children[i]);
        }
      }
    }
  } while (next.length);
});

// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/hierarchy/index.js














function hierarchy(data, children) {
  if (data instanceof Map) {
    data = [undefined, data];
    if (children === undefined) children = mapChildren;
  } else if (children === undefined) {
    children = objectChildren;
  }

  var root = new Node(data),
      node,
      nodes = [root],
      child,
      childs,
      i,
      n;

  while (node = nodes.pop()) {
    if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
      node.children = childs;
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = childs[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }

  return root.eachBefore(computeHeight);
}

function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}

function objectChildren(d) {
  return d.children;
}

function mapChildren(d) {
  return Array.isArray(d) ? d[1] : null;
}

function copyData(node) {
  if (node.data.value !== undefined) node.value = node.data.value;
  node.data = node.data.data;
}

function computeHeight(node) {
  var height = 0;
  do node.height = height;
  while ((node = node.parent) && (node.height < ++height));
}

function Node(data) {
  this.data = data;
  this.depth =
  this.height = 0;
  this.parent = null;
}

Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: hierarchy_count,
  each: each,
  eachAfter: eachAfter,
  eachBefore: eachBefore,
  find: find,
  sum: sum,
  sort: sort,
  path: path,
  ancestors: ancestors,
  descendants: descendants,
  leaves: leaves,
  links: links,
  copy: node_copy,
  [Symbol.iterator]: iterator
};

// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/tree.js


function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

// function radialSeparation(a, b) {
//   return (a.parent === b.parent ? 1 : 2) / a.depth;
// }

// This function is used to traverse the left contour of a subtree (or
// subforest). It returns the successor of v on this contour. This successor is
// either given by the leftmost child of v or by the thread of v. The function
// returns null if and only if v is on the highest level of its subtree.
function nextLeft(v) {
  var children = v.children;
  return children ? children[0] : v.t;
}

// This function works analogously to nextLeft.
function nextRight(v) {
  var children = v.children;
  return children ? children[children.length - 1] : v.t;
}

// Shifts the current subtree rooted at w+. This is done by increasing
// prelim(w+) and mod(w+) by shift.
function moveSubtree(wm, wp, shift) {
  var change = shift / (wp.i - wm.i);
  wp.c -= change;
  wp.s += shift;
  wm.c += change;
  wp.z += shift;
  wp.m += shift;
}

// All other shifts, applied to the smaller subtrees between w- and w+, are
// performed by this function. To prepare the shifts, we have to adjust
// change(w+), shift(w+), and change(w-).
function executeShifts(v) {
  var shift = 0,
      change = 0,
      children = v.children,
      i = children.length,
      w;
  while (--i >= 0) {
    w = children[i];
    w.z += shift;
    w.m += shift;
    shift += w.s + (change += w.c);
  }
}

// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
// returns the specified (default) ancestor.
function nextAncestor(vim, v, ancestor) {
  return vim.a.parent === v.parent ? vim.a : ancestor;
}

function TreeNode(node, i) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null; // default ancestor
  this.a = this; // ancestor
  this.z = 0; // prelim
  this.m = 0; // mod
  this.c = 0; // change
  this.s = 0; // shift
  this.t = null; // thread
  this.i = i; // number
}

TreeNode.prototype = Object.create(Node.prototype);

function treeRoot(root) {
  var tree = new TreeNode(root, 0),
      node,
      nodes = [tree],
      child,
      children,
      i,
      n;

  while (node = nodes.pop()) {
    if (children = node._.children) {
      node.children = new Array(n = children.length);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new TreeNode(children[i], i));
        child.parent = node;
      }
    }
  }

  (tree.parent = new TreeNode(null, 0)).children = [tree];
  return tree;
}

// Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
/* harmony default export */ var tree = (function() {
  var separation = defaultSeparation,
      dx = 1,
      dy = 1,
      nodeSize = null;

  function tree(root) {
    var t = treeRoot(root);

    // Compute the layout using Buchheim et al.’s algorithm.
    t.eachAfter(firstWalk), t.parent.m = -t.z;
    t.eachBefore(secondWalk);

    // If a fixed node size is specified, scale x and y.
    if (nodeSize) root.eachBefore(sizeNode);

    // If a fixed tree size is specified, scale x and y based on the extent.
    // Compute the left-most, right-most, and depth-most nodes for extents.
    else {
      var left = root,
          right = root,
          bottom = root;
      root.eachBefore(function(node) {
        if (node.x < left.x) left = node;
        if (node.x > right.x) right = node;
        if (node.depth > bottom.depth) bottom = node;
      });
      var s = left === right ? 1 : separation(left, right) / 2,
          tx = s - left.x,
          kx = dx / (right.x + s + tx),
          ky = dy / (bottom.depth || 1);
      root.eachBefore(function(node) {
        node.x = (node.x + tx) * kx;
        node.y = node.depth * ky;
      });
    }

    return root;
  }

  // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
  // applied recursively to the children of v, as well as the function
  // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
  // node v is placed to the midpoint of its outermost children.
  function firstWalk(v) {
    var children = v.children,
        siblings = v.parent.children,
        w = v.i ? siblings[v.i - 1] : null;
    if (children) {
      executeShifts(v);
      var midpoint = (children[0].z + children[children.length - 1].z) / 2;
      if (w) {
        v.z = w.z + separation(v._, w._);
        v.m = v.z - midpoint;
      } else {
        v.z = midpoint;
      }
    } else if (w) {
      v.z = w.z + separation(v._, w._);
    }
    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
  }

  // Computes all real x-coordinates by summing up the modifiers recursively.
  function secondWalk(v) {
    v._.x = v.z + v.parent.m;
    v.m += v.parent.m;
  }

  // The core of the algorithm. Here, a new subtree is combined with the
  // previous subtrees. Threads are used to traverse the inside and outside
  // contours of the left and right subtree up to the highest common level. The
  // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
  // superscript o means outside and i means inside, the subscript - means left
  // subtree and + means right subtree. For summing up the modifiers along the
  // contour, we use respective variables si+, si-, so-, and so+. Whenever two
  // nodes of the inside contours conflict, we compute the left one of the
  // greatest uncommon ancestors using the function ANCESTOR and call MOVE
  // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
  // Finally, we add a new thread (if necessary).
  function apportion(v, w, ancestor) {
    if (w) {
      var vip = v,
          vop = v,
          vim = w,
          vom = vip.parent.children[0],
          sip = vip.m,
          sop = vop.m,
          sim = vim.m,
          som = vom.m,
          shift;
      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
        vom = nextLeft(vom);
        vop = nextRight(vop);
        vop.a = v;
        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
        if (shift > 0) {
          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
          sip += shift;
          sop += shift;
        }
        sim += vim.m;
        sip += vip.m;
        som += vom.m;
        sop += vop.m;
      }
      if (vim && !nextRight(vop)) {
        vop.t = vim;
        vop.m += sim - sop;
      }
      if (vip && !nextLeft(vom)) {
        vom.t = vip;
        vom.m += sip - som;
        ancestor = v;
      }
    }
    return ancestor;
  }

  function sizeNode(node) {
    node.x *= dx;
    node.y = node.depth * dy;
  }

  tree.separation = function(x) {
    return arguments.length ? (separation = x, tree) : separation;
  };

  tree.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : (nodeSize ? null : [dx, dy]);
  };

  tree.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : (nodeSize ? [dx, dy] : null);
  };

  return tree;
});

// CONCATENATED MODULE: ./node_modules/d3-hierarchy/src/index.js
















// EXTERNAL MODULE: ./node_modules/d3-selection/src/index.js
var src = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/zoom.js
var epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

/* harmony default export */ var src_zoom = ((function zoomRho(rho, rho2, rho4) {

  // p0 = [ux0, uy0, w0]
  // p1 = [ux1, uy1, w1]
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
        ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
        dx = ux1 - ux0,
        dy = uy1 - uy0,
        d2 = dx * dx + dy * dy,
        i,
        S;

    // Special case for u0 ≅ u1.
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      }
    }

    // General case.
    else {
      var d1 = Math.sqrt(d2),
          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S,
            coshr0 = cosh(r0),
            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      }
    }

    i.duration = S * 1000 * rho / Math.SQRT2;

    return i;
  }

  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };

  return zoom;
})(Math.SQRT2, 2, 4));

// CONCATENATED MODULE: ./node_modules/d3-zoom/src/constant.js
/* harmony default export */ var d3_zoom_src_constant = (x => () => x);

// CONCATENATED MODULE: ./node_modules/d3-zoom/src/event.js
function ZoomEvent(type, {
  sourceEvent,
  target,
  transform,
  dispatch
}) {
  Object.defineProperties(this, {
    type: {value: type, enumerable: true, configurable: true},
    sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
    target: {value: target, enumerable: true, configurable: true},
    transform: {value: transform, enumerable: true, configurable: true},
    _: {value: dispatch}
  });
}

// CONCATENATED MODULE: ./node_modules/d3-zoom/src/transform.js
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var transform_identity = new Transform(1, 0, 0);

transform_transform.prototype = Transform.prototype;

function transform_transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return transform_identity;
  return node.__zoom;
}

// CONCATENATED MODULE: ./node_modules/d3-zoom/src/noevent.js
function src_noevent_nopropagation(event) {
  event.stopImmediatePropagation();
}

/* harmony default export */ var d3_zoom_src_noevent = (function(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
});

// CONCATENATED MODULE: ./node_modules/d3-zoom/src/zoom.js










// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function zoom_defaultFilter(event) {
  return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}

function zoom_defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}

function defaultTransform() {
  return this.__zoom || transform_identity;
}

function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}

function zoom_defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}

/* harmony default export */ var d3_zoom_src_zoom = (function() {
  var filter = zoom_defaultFilter,
      extent = zoom_defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = zoom_defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = src_zoom,
      listeners = src_dispatch("start", "zoom", "end"),
      touchstarting,
      touchfirst,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0,
      tapDistance = 10;

  function zoom(selection) {
    selection
        .property("__zoom", defaultTransform)
        .on("wheel.zoom", wheeled)
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
      .filter(touchable)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function(collection, transform, point, event) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform, point, event);
    } else {
      selection.interrupt().each(function() {
        gesture(this, arguments)
          .event(event)
          .start()
          .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
          .end();
      });
    }
  };

  zoom.scaleBy = function(selection, k, p, event) {
    zoom.scaleTo(selection, function() {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };

  zoom.scaleTo = function(selection, k, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };

  zoom.translateBy = function(selection, x, y, event) {
    zoom.transform(selection, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };

  zoom.translateTo = function(selection, x, y, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(transform_identity.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, point, event) {
    transition
        .on("start.zoom", function() { gesture(this, arguments).event(event).start(); })
        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).event(event).end(); })
        .tween("zoom", function() {
          var that = this,
              args = arguments,
              g = gesture(that, args).event(event),
              e = extent.apply(that, args),
              p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
              a = that.__zoom,
              b = typeof transform === "function" ? transform.apply(that, args) : transform,
              i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function(t) {
            if (t === 1) t = b; // Avoid rounding error on end.
            else { var l = i(t), k = w / l[2]; t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
            g.zoom(null, t);
          };
        });
  }

  function gesture(that, args, clean) {
    return (!clean && that.__zooming) || new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }

  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = Object(src_select["a" /* default */])(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function wheeled(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, args).event(event),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = Object(pointer["a" /* default */])(event);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      interrupt(this);
      g.start();
    }

    d3_zoom_src_noevent(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned(event, ...args) {
    if (touchending || !filter.apply(this, arguments)) return;
    var g = gesture(this, args, true).event(event),
        v = Object(src_select["a" /* default */])(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = Object(pointer["a" /* default */])(event, currentTarget),
        currentTarget = event.currentTarget,
        x0 = event.clientX,
        y0 = event.clientY;

    nodrag(event.view);
    src_noevent_nopropagation(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt(this);
    g.start();

    function mousemoved(event) {
      d3_zoom_src_noevent(event);
      if (!g.moved) {
        var dx = event.clientX - x0, dy = event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event)
       .zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = Object(pointer["a" /* default */])(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped(event) {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event.view, g.moved);
      d3_zoom_src_noevent(event);
      g.event(event).end();
    }
  }

  function dblclicked(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = Object(pointer["a" /* default */])(event.changedTouches ? event.changedTouches[0] : event, this),
        p1 = t0.invert(p0),
        k1 = t0.k * (event.shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);

    d3_zoom_src_noevent(event);
    if (duration > 0) Object(src_select["a" /* default */])(this).transition().duration(duration).call(schedule, t1, p0, event);
    else Object(src_select["a" /* default */])(this).call(zoom.transform, t1, p0, event);
  }

  function touchstarted(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var touches = event.touches,
        n = touches.length,
        g = gesture(this, args, event.changedTouches.length === n).event(event),
        started, i, t, p;

    src_noevent_nopropagation(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = Object(pointer["a" /* default */])(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }

    if (touchstarting) touchstarting = clearTimeout(touchstarting);

    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
      interrupt(this);
      g.start();
    }
  }

  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t, p, l;

    d3_zoom_src_noevent(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = Object(pointer["a" /* default */])(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1],
          p1 = g.touch1[0], l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    }
    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;

    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t;

    src_noevent_nopropagation(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
      if (g.taps === 2) {
        t = Object(pointer["a" /* default */])(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = Object(src_select["a" /* default */])(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }

  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : d3_zoom_src_constant(+_), zoom) : wheelDelta;
  };

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : d3_zoom_src_constant(!!_), zoom) : filter;
  };

  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : d3_zoom_src_constant(!!_), zoom) : touchable;
  };

  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : d3_zoom_src_constant([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };

  return zoom;
});

// CONCATENATED MODULE: ./node_modules/d3-zoom/src/index.js



// CONCATENATED MODULE: ./node_modules/d3/index.js

































/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
});


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return styleValue; });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || Object(_window_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {// src/ui/view/components/InputGroup.jsx
var InputGroup = {
  view: function view(_ref) {
    var attrs = _ref.attrs,
        children = _ref.children;
    return m("div", {
      "class": "flex flex-col mt-6"
    }, m("label", {
      "for": attrs.name
    }, attrs.label), children);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (InputGroup);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril_stream__WEBPACK_IMPORTED_MODULE_1__);


var basePath = "/habit_trees/nodes"; // create: (parent) => axios.post(basePath, { parent_id: parent }),

var NodeStore = Object.assign(Object(_client__WEBPACK_IMPORTED_MODULE_0__[/* clientRoutes */ "a"])(basePath), {
  current: mithril_stream__WEBPACK_IMPORTED_MODULE_1___default()({}),
  get: function get(id) {
    return NodeStore.show_one(id).then(function (response) {
      return JSON.parse(response.data);
    }).then(NodeStore.current)["catch"](_client__WEBPACK_IMPORTED_MODULE_0__[/* handleErrorType */ "b"]);
  },
  clear: function clear() {
    NodeStore.current = mithril_stream__WEBPACK_IMPORTED_MODULE_1___default()({});
  },
  list: mithril_stream__WEBPACK_IMPORTED_MODULE_1___default()([]),
  index: function index() {
    return NodeStore.show_all().then(function (response) {
      return JSON.parse(response.data).habit_nodes;
    }).then(NodeStore.list)["catch"](_client__WEBPACK_IMPORTED_MODULE_0__[/* handleErrorType */ "b"]);
  },
  submit: function submit(attrs) {
    NodeStore.create(attrs).then(NodeStore.current).then(function () {
      NodeStore.index();
    })["catch"](_client__WEBPACK_IMPORTED_MODULE_0__[/* handleErrorType */ "b"]);
  },
  runReplace: function runReplace(id, value) {
    NodeStore.replace(id, value)["catch"](function (e) {// TODO update list/current
    });
  },
  runUpdate: function runUpdate(id, value) {
    NodeStore.update(id, value)["catch"](function (e) {// TODO update list/current
    });
  },
  runDelete: function runDelete(id) {
    NodeStore["delete"](id).then(function () {
      NodeStore.list = NodeStore.list.filter(function (i) {
        return i.id !== id;
      });
    })["catch"](_client__WEBPACK_IMPORTED_MODULE_0__[/* handleErrorType */ "b"]);
  }
});
/* harmony default export */ __webpack_exports__["a"] = (NodeStore);

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {/* harmony import */ var _components_layout_LogoLink_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _components_Layout_Modal_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var _components_Layout_MaskHeader_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66);
/* harmony import */ var _components_Layout_MainStage_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74);
/* harmony import */ var _components_Layout_Footer_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75);
/* harmony import */ var _store_date_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(534);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







/* harmony default export */ __webpack_exports__["a"] = ({
  oninit: function oninit() {
    var todaysDate = new Date().toDateInputValue();
    _store_date_store__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].current(todaysDate);
  },
  oncreate: function oncreate() {
    document.getElementById("initiation-date");
  },
  view: function view(_ref) {
    var attrs = _ref.attrs,
        _ref$children = _slicedToArray(_ref.children, 1),
        mainPage = _ref$children[0];

    return m("div", {
      id: "layout",
      "class": "w-full h-full"
    }, m(_components_Layout_Modal_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), m(_components_layout_LogoLink_jsx__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], null), m("div", {
      id: "app",
      "class": "flex flex-col justify-between min-h-screen"
    }, m(_components_Layout_MaskHeader_jsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), m(_components_Layout_MainStage_jsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      index: attrs.index
    }, mainPage)), m(_components_Layout_Footer_jsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null));
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(48);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ 31:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var render = __webpack_require__(44)

module.exports = __webpack_require__(121)(render, requestAnimationFrame, console)


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var buildQueryString = __webpack_require__(45)
var assign = __webpack_require__(46)

// Returns `path` from `template` + `params`
module.exports = function(template, params) {
	if ((/:([^\/\.-]+)(\.{3})?:/).test(template)) {
		throw new SyntaxError("Template parameter names *must* be separated")
	}
	if (params == null) return template
	var queryIndex = template.indexOf("?")
	var hashIndex = template.indexOf("#")
	var queryEnd = hashIndex < 0 ? template.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = template.slice(0, pathEnd)
	var query = {}

	assign(query, params)

	var resolved = path.replace(/:([^\/\.-]+)(\.{3})?/g, function(m, key, variadic) {
		delete query[key]
		// If no such parameter exists, don't interpolate it.
		if (params[key] == null) return m
		// Escape normal parameters, but not variadic ones.
		return variadic ? params[key] : encodeURIComponent(String(params[key]))
	})

	// In case the template substitution adds new query/hash parameters.
	var newQueryIndex = resolved.indexOf("?")
	var newHashIndex = resolved.indexOf("#")
	var newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex
	var newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex
	var result = resolved.slice(0, newPathEnd)

	if (queryIndex >= 0) result += template.slice(queryIndex, queryEnd)
	if (newQueryIndex >= 0) result += (queryIndex < 0 ? "?" : "&") + resolved.slice(newQueryIndex, newQueryEnd)
	var querystring = buildQueryString(query)
	if (querystring) result += (queryIndex < 0 && newQueryIndex < 0 ? "?" : "&") + querystring
	if (hashIndex >= 0) result += template.slice(hashIndex)
	if (newHashIndex >= 0) result += (hashIndex < 0 ? "" : "&") + resolved.slice(newHashIndex)
	return result
}


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseQueryString = __webpack_require__(47)

// Returns `{path, params}` from `url`
module.exports = function(url) {
	var queryIndex = url.indexOf("?")
	var hashIndex = url.indexOf("#")
	var queryEnd = hashIndex < 0 ? url.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = url.slice(0, pathEnd).replace(/\/{2,}/g, "/")

	if (!path) path = "/"
	else {
		if (path[0] !== "/") path = "/" + path
		if (path.length > 1 && path[path.length - 1] === "/") path = path.slice(0, -1)
	}
	return {
		path: path,
		params: queryIndex < 0
			? {}
			: parseQueryString(url.slice(queryIndex + 1, queryEnd)),
	}
}


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);


/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return typeof selector === "string"
      ? new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__[/* Selection */ "a"]([[document.querySelector(selector)]], [document.documentElement])
      : new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__[/* Selection */ "a"]([[selector]], _selection_index_js__WEBPACK_IMPORTED_MODULE_0__[/* root */ "c"]);
});


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultRoute; });
/* harmony import */ var _menu_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _view_Layout_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _store_domain_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _view_components_layout_HeroSection_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76);
/* harmony import */ var _assets_scripts_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
// MegaMenu Routes
 // Layouts

 // Models

 // Components

 // Utils


var Routes = _menu_routes__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].reduce(function (newRoutesObject, menuSection) {
  var links = menuSection.subpaths;
  Object.keys(links).forEach(function (path) {
    var title = links[path]["title"];
    var page = links[path]["page"];
    newRoutesObject[path] = {
      render: function render() {
        return menuSection["label"] === "Visualise" ? m(Object(_assets_scripts_utilities__WEBPACK_IMPORTED_MODULE_4__[/* d3visPageMaker */ "a"])(_view_Layout_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], page), {
          heading: title
        }) : m(_view_Layout_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], m(page), {
          heading: title
        });
      }
    };
  });
  return newRoutesObject;
}, {
  "/": {
    onmatch: function onmatch() {
      _store_domain_store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].index().then(function () {
        m.redraw();
      });
    },
    render: function render() {
      return m(_view_Layout_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        index: true
      }, m(_view_components_layout_HeroSection_jsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]));
    }
  }
});
var DefaultRoute = "/";

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(7)
var hyperscriptVnode = __webpack_require__(39)

var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
var selectorCache = {}
var hasOwn = {}.hasOwnProperty

function isEmpty(object) {
	for (var key in object) if (hasOwn.call(object, key)) return false
	return true
}

function compileSelector(selector) {
	var match, tag = "div", classes = [], attrs = {}
	while (match = selectorParser.exec(selector)) {
		var type = match[1], value = match[2]
		if (type === "" && value !== "") tag = value
		else if (type === "#") attrs.id = value
		else if (type === ".") classes.push(value)
		else if (match[3][0] === "[") {
			var attrValue = match[6]
			if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
			if (match[4] === "class") classes.push(attrValue)
			else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true
		}
	}
	if (classes.length > 0) attrs.className = classes.join(" ")
	return selectorCache[selector] = {tag: tag, attrs: attrs}
}

function execSelector(state, vnode) {
	var attrs = vnode.attrs
	var children = Vnode.normalizeChildren(vnode.children)
	var hasClass = hasOwn.call(attrs, "class")
	var className = hasClass ? attrs.class : attrs.className

	vnode.tag = state.tag
	vnode.attrs = null
	vnode.children = undefined

	if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
		var newAttrs = {}

		for (var key in attrs) {
			if (hasOwn.call(attrs, key)) newAttrs[key] = attrs[key]
		}

		attrs = newAttrs
	}

	for (var key in state.attrs) {
		if (hasOwn.call(state.attrs, key) && key !== "className" && !hasOwn.call(attrs, key)){
			attrs[key] = state.attrs[key]
		}
	}
	if (className != null || state.attrs.className != null) attrs.className =
		className != null
			? state.attrs.className != null
				? String(state.attrs.className) + " " + String(className)
				: className
			: state.attrs.className != null
				? state.attrs.className
				: null

	if (hasClass) attrs.class = null

	for (var key in attrs) {
		if (hasOwn.call(attrs, key) && key !== "key") {
			vnode.attrs = attrs
			break
		}
	}

	if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
		vnode.text = children[0].children
	} else {
		vnode.children = children
	}

	return vnode
}

function hyperscript(selector) {
	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
		throw Error("The selector must be either a string or a component.");
	}

	var vnode = hyperscriptVnode.apply(1, arguments)

	if (typeof selector === "string") {
		vnode.children = Vnode.normalizeChildren(vnode.children)
		if (selector !== "[") return execSelector(selectorCache[selector] || compileSelector(selector), vnode)
	}

	vnode.tag = selector
	return vnode
}

module.exports = hyperscript


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(7)

// Call via `hyperscriptVnode.apply(startOffset, arguments)`
//
// The reason I do it this way, forwarding the arguments and passing the start
// offset in `this`, is so I don't have to create a temporary array in a
// performance-critical path.
//
// In native ES6, I'd instead add a final `...args` parameter to the
// `hyperscript` and `fragment` factories and define this as
// `hyperscriptVnode(...args)`, since modern engines do optimize that away. But
// ES5 (what Mithril requires thanks to IE support) doesn't give me that luxury,
// and engines aren't nearly intelligent enough to do either of these:
//
// 1. Elide the allocation for `[].slice.call(arguments, 1)` when it's passed to
//    another function only to be indexed.
// 2. Elide an `arguments` allocation when it's passed to any function other
//    than `Function.prototype.apply` or `Reflect.apply`.
//
// In ES6, it'd probably look closer to this (I'd need to profile it, though):
// module.exports = function(attrs, ...children) {
//     if (attrs == null || typeof attrs === "object" && attrs.tag == null && !Array.isArray(attrs)) {
//         if (children.length === 1 && Array.isArray(children[0])) children = children[0]
//     } else {
//         children = children.length === 0 && Array.isArray(attrs) ? attrs : [attrs, ...children]
//         attrs = undefined
//     }
//
//     if (attrs == null) attrs = {}
//     return Vnode("", attrs.key, attrs, children)
// }
module.exports = function() {
	var attrs = arguments[this], start = this + 1, children

	if (attrs == null) {
		attrs = {}
	} else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
		attrs = {}
		start = this
	}

	if (arguments.length === start + 1) {
		children = arguments[start]
		if (!Array.isArray(children)) children = [children]
	} else {
		children = []
		while (start < arguments.length) children.push(arguments[start++])
	}

	return Vnode("", attrs.key, attrs, children)
}


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(130);

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var PromisePolyfill = __webpack_require__(41)

if (typeof window !== "undefined") {
	if (typeof window.Promise === "undefined") {
		window.Promise = PromisePolyfill
	} else if (!window.Promise.prototype.finally) {
		window.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	module.exports = window.Promise
} else if (typeof global !== "undefined") {
	if (typeof global.Promise === "undefined") {
		global.Promise = PromisePolyfill
	} else if (!global.Promise.prototype.finally) {
		global.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	module.exports = global.Promise
} else {
	module.exports = PromisePolyfill
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(31)))

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {
/** @constructor */
var PromisePolyfill = function(executor) {
	if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`")
	if (typeof executor !== "function") throw new TypeError("executor must be a function")

	var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false)
	var instance = self._instance = {resolvers: resolvers, rejectors: rejectors}
	var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
	function handler(list, shouldAbsorb) {
		return function execute(value) {
			var then
			try {
				if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
					if (value === self) throw new TypeError("Promise can't be resolved w/ itself")
					executeOnce(then.bind(value))
				}
				else {
					callAsync(function() {
						if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value)
						for (var i = 0; i < list.length; i++) list[i](value)
						resolvers.length = 0, rejectors.length = 0
						instance.state = shouldAbsorb
						instance.retry = function() {execute(value)}
					})
				}
			}
			catch (e) {
				rejectCurrent(e)
			}
		}
	}
	function executeOnce(then) {
		var runs = 0
		function run(fn) {
			return function(value) {
				if (runs++ > 0) return
				fn(value)
			}
		}
		var onerror = run(rejectCurrent)
		try {then(run(resolveCurrent), onerror)} catch (e) {onerror(e)}
	}

	executeOnce(executor)
}
PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
	var self = this, instance = self._instance
	function handle(callback, list, next, state) {
		list.push(function(value) {
			if (typeof callback !== "function") next(value)
			else try {resolveNext(callback(value))} catch (e) {if (rejectNext) rejectNext(e)}
		})
		if (typeof instance.retry === "function" && state === instance.state) instance.retry()
	}
	var resolveNext, rejectNext
	var promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject})
	handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false)
	return promise
}
PromisePolyfill.prototype.catch = function(onRejection) {
	return this.then(null, onRejection)
}
PromisePolyfill.prototype.finally = function(callback) {
	return this.then(
		function(value) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return value
			})
		},
		function(reason) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return PromisePolyfill.reject(reason);
			})
		}
	)
}
PromisePolyfill.resolve = function(value) {
	if (value instanceof PromisePolyfill) return value
	return new PromisePolyfill(function(resolve) {resolve(value)})
}
PromisePolyfill.reject = function(value) {
	return new PromisePolyfill(function(resolve, reject) {reject(value)})
}
PromisePolyfill.all = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		var total = list.length, count = 0, values = []
		if (list.length === 0) resolve([])
		else for (var i = 0; i < list.length; i++) {
			(function(i) {
				function consume(value) {
					count++
					values[i] = value
					if (count === total) resolve(values)
				}
				if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
					list[i].then(consume, reject)
				}
				else consume(list[i])
			})(i)
		}
	})
}
PromisePolyfill.race = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		for (var i = 0; i < list.length; i++) {
			list[i].then(resolve, reject)
		}
	})
}

module.exports = PromisePolyfill

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(42).setImmediate))

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(119);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(31)))

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(120)(window)


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(object) {
	if (Object.prototype.toString.call(object) !== "[object Object]") return ""

	var args = []
	for (var key in object) {
		destructure(key, object[key])
	}

	return args.join("&")

	function destructure(key, value) {
		if (Array.isArray(value)) {
			for (var i = 0; i < value.length; i++) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else if (Object.prototype.toString.call(value) === "[object Object]") {
			for (var i in value) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else args.push(encodeURIComponent(key) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""))
	}
}


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Object.assign || function(target, source) {
	if(source) Object.keys(source).forEach(function(key) { target[key] = source[key] })
}


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)

	var entries = string.split("&"), counters = {}, data = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key = decodeURIComponent(entry[0])
		var value = entry.length === 2 ? decodeURIComponent(entry[1]) : ""

		if (value === "true") value = true
		else if (value === "false") value = false

		var levels = key.split(/\]\[?|\[/)
		var cursor = data
		if (key.indexOf("[") > -1) levels.pop()
		for (var j = 0; j < levels.length; j++) {
			var level = levels[j], nextLevel = levels[j + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			if (level === "") {
				var key = levels.slice(0, j).join()
				if (counters[key] == null) {
					counters[key] = Array.isArray(cursor) ? cursor.length : 0
				}
				level = counters[key]++
			}
			// Disallow direct prototype pollution
			else if (level === "__proto__") break
			if (j === levels.length - 1) cursor[level] = value
			else {
				// Read own properties exclusively to disallow indirect
				// prototype pollution
				var desc = Object.getOwnPropertyDescriptor(cursor, level)
				if (desc != null) desc = desc.value
				if (desc == null) cursor[level] = desc = isNumber ? [] : {}
				cursor = desc
			}
		}
	}
	return data
}


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(147)


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(3);
var normalizeHeaderName = __webpack_require__(135);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(52);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(52);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(43)))

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);
var settle = __webpack_require__(136);
var cookies = __webpack_require__(138);
var buildURL = __webpack_require__(49);
var buildFullPath = __webpack_require__(139);
var parseHeaders = __webpack_require__(142);
var isURLSameOrigin = __webpack_require__(143);
var createError = __webpack_require__(53);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(137);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril_stream__WEBPACK_IMPORTED_MODULE_1__);


var basePath = "/dates";
var DateStore = Object.assign(Object(_client__WEBPACK_IMPORTED_MODULE_0__[/* clientRoutes */ "a"])(basePath), {
  current: mithril_stream__WEBPACK_IMPORTED_MODULE_1___default()({}),
  get: function get(id) {
    return DateStore.show_one(id).then(function (response) {
      return JSON.parse(response.data);
    }).then(DateStore.current)["catch"](_client__WEBPACK_IMPORTED_MODULE_0__[/* handleErrorType */ "b"]);
  },
  clear: function clear() {
    DateStore.current = mithril_stream__WEBPACK_IMPORTED_MODULE_1___default()({});
  },
  list: mithril_stream__WEBPACK_IMPORTED_MODULE_1___default()([]),
  index: function index() {
    return DateStore.show_all().then(function (response) {
      return JSON.parse(response.data).dates;
    }).then(DateStore.list).then(function (list) {
      DateStore.current(list[list.length - 1]);
    })["catch"](_client__WEBPACK_IMPORTED_MODULE_0__[/* handleErrorType */ "b"]);
  },
  submit: function submit(attrs) {
    return DateStore.create(attrs).then(function (response) {
      var date = response.data;
      DateStore.index(); //Could save a DB call here

      return date;
    }).then(DateStore.current)["catch"](_client__WEBPACK_IMPORTED_MODULE_0__[/* handleErrorType */ "b"]);
  }
});
/* harmony default export */ __webpack_exports__["a"] = (DateStore);

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(3);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/d3-selection/src/sourceEvent.js
/* harmony default export */ var sourceEvent = (function(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
});

// CONCATENATED MODULE: ./node_modules/d3-selection/src/pointer.js


/* harmony default export */ var pointer = __webpack_exports__["a"] = (function(event, node) {
  event = sourceEvent(event);
  if (node === undefined) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
});


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril_stream__WEBPACK_IMPORTED_MODULE_1__);


var basePath = "/habits";
var HabitStore = Object.assign(Object(_client__WEBPACK_IMPORTED_MODULE_0__[/* clientRoutes */ "a"])(basePath), {
  current: mithril_stream__WEBPACK_IMPORTED_MODULE_1___default()({}),
  get: function get(id) {
    return HabitStore.show_one(id).then(function (response) {
      return JSON.parse(response.data);
    }).then(HabitStore.current)["catch"](_client__WEBPACK_IMPORTED_MODULE_0__[/* handleErrorType */ "b"]);
  },
  clear: function clear() {
    HabitStore.current = mithril_stream__WEBPACK_IMPORTED_MODULE_1___default()({});
  },
  list: mithril_stream__WEBPACK_IMPORTED_MODULE_1___default()([]),
  index: function index() {
    return HabitStore.show_all().then(function (response) {
      return JSON.parse(response.data).habits;
    }).then(HabitStore.list).then(function (list) {
      HabitStore.current(list[0]);
    })["catch"](_client__WEBPACK_IMPORTED_MODULE_0__[/* handleErrorType */ "b"]);
  },
  submit: function submit(attrs) {
    return HabitStore.create(attrs).then(function (response) {
      var habit = response.data;
      HabitStore.index(); //Could save a DB call here

      return habit;
    }).then(HabitStore.current)["catch"](_client__WEBPACK_IMPORTED_MODULE_0__[/* handleErrorType */ "b"]);
  },
  runReplace: function runReplace(id, value) {
    return HabitStore.replace(id, value)["catch"](function (e) {// TODO update list/current
    });
  },
  runUpdate: function runUpdate(id, value) {
    return HabitStore.update(id, value)["catch"](function (e) {// TODO update list/current
    });
  },
  runDelete: function runDelete(id) {
    return HabitStore["delete"](id).then(function () {
      HabitStore.list = HabitStore.list.filter(function (i) {
        return i.id !== id;
      });
    })["catch"](_client__WEBPACK_IMPORTED_MODULE_0__[/* handleErrorType */ "b"]);
  }
});
/* harmony default export */ __webpack_exports__["a"] = (HabitStore);

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {// src/ui/view/components/FormHeader.jsx
var FormHeader = {
  view: function view(_ref) {
    var attrs = _ref.attrs;
    return m("div", {
      "class": "flex items-center space-x-5"
    }, m("div", {
      "class": "form-header flex flex-shrink-0 justify-center items-center w-14 h-14 font-mono rounded-full bg-balance-lg"
    }, m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "class": attrs.iconColor,
      stroke: "currentColor"
    }, m("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: attrs.iconPath
    }))), m("div", {
      "class": "block self-start pl-2 text-xl font-semibold text-gray-700"
    }, m("h2", {
      "class": "leading-relaxed"
    }, attrs.title), m("p", {
      "class": "text-sm font-normal leading-relaxed text-gray-500"
    }, attrs.description)));
  }
};
/* harmony default export */ __webpack_exports__["a"] = (FormHeader);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {// src/ui/view/components/FormContainer .jsx
var FormContainer = {
  view: function view(_ref) {
    var children = _ref.children;
    return m("div", {
      "class": "input-container"
    }, children);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (FormContainer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril_stream__WEBPACK_IMPORTED_MODULE_1__);


var basePath = "/domains";
var DomainStore = Object.assign(Object(_client__WEBPACK_IMPORTED_MODULE_0__[/* clientRoutes */ "a"])(basePath), {
  current: mithril_stream__WEBPACK_IMPORTED_MODULE_1___default()({}),
  get: function get(id) {
    return DomainStore.show_one(id).then(function (response) {
      return JSON.parse(response.data);
    }).then(DomainStore.current)["catch"](_client__WEBPACK_IMPORTED_MODULE_0__[/* handleErrorType */ "b"]);
  },
  clear: function clear() {
    DomainStore.current = mithril_stream__WEBPACK_IMPORTED_MODULE_1___default()({});
  },
  list: mithril_stream__WEBPACK_IMPORTED_MODULE_1___default()([{
    name: 'No Domains Registered'
  }]),
  index: function index() {
    return DomainStore.show_all().then(function (response) {
      return JSON.parse(response.data).domains;
    }).then(DomainStore.list).then(function (list) {
      return DomainStore.current(list[0]);
    })["catch"](_client__WEBPACK_IMPORTED_MODULE_0__[/* handleErrorType */ "b"]);
  },
  submit: function submit(attrs) {
    return DomainStore.create(attrs).then(function (response) {
      var domain = response.data;
      DomainStore.index(); //Could save a DB call here

      return domain;
    }).then(DomainStore.current)["catch"](_client__WEBPACK_IMPORTED_MODULE_0__[/* handleErrorType */ "b"]);
    ;
  },
  runReplace: function runReplace(id, value) {
    return DomainStore.replace(id, value)["catch"](function (e) {// TODO update list/current
    });
  },
  runUpdate: function runUpdate(id, value) {
    return DomainStore.update(id, value)["catch"](function (e) {// TODO update list/current
    });
  },
  runDelete: function runDelete(id) {
    return DomainStore["delete"](id).then(function () {
      DomainStore.list = DomainStore.list.filter(function (i) {
        return i.id !== id;
      });
    })["catch"](_client__WEBPACK_IMPORTED_MODULE_0__[/* handleErrorType */ "b"]);
  }
});
/* harmony default export */ __webpack_exports__["a"] = (DomainStore);

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {var ListCard = {
  view: function view(_ref) {
    var value = _ref.attrs.value;
    return m("div.list-card-container", [m("div.list-card", [m("div.label-col", [m("span.name-label"), m("span.stats-label")]), m("div.details-col", [m("h2.h-8.font-bold.text-xl.text-bold"), m("div.stats-row", value.lft)])])]);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (ListCard);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {/* harmony import */ var _assets_scripts_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _store_habit_tree_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);

 // import "./tree-style.scss";


var HabitTree = {
  type: "vis",
  oncreate: function oncreate() {
    window.onresize = Object(_assets_scripts_utilities__WEBPACK_IMPORTED_MODULE_0__[/* debounce */ "b"])(function () {
      m.redraw();
    }, 50);
  },
  view: function view(vnode) {
    return m("div", {
      id: "vis",
      "class": "h-full mx-auto w-3/4"
    }, vnode.children);
  },
  content: function content(svg) {
    var container = document.getElementById("vis");

    var _container$getBoundin = container.getBoundingClientRect(),
        width = _container$getBoundin.width,
        height = _container$getBoundin.height;

    var margin = {
      top: 50,
      right: 0,
      bottom: 50,
      left: 0
    };
    var canvasWidth = width - margin.right - margin.left;
    var canvasHeight = height - margin.top - margin.bottom;
    var canvas = svg.append("g").attr("transform", "translate(" + (margin.left + width / 2) + "," + margin.top + ")");

    var handleEvents = function handleEvents(selection) {
      selection.on("mouseover", function () {
        var g = d3__WEBPACK_IMPORTED_MODULE_2__[/* select */ "b"](this);
        var n = g.select(".the-node");
        g.select(".label").transition().duration(700).style("fill", "white");
      }).on("mouseout", function () {
        var g = d3__WEBPACK_IMPORTED_MODULE_2__[/* select */ "b"](this);
        var n = g.select(".the-node");
        g.select(".label").transition().duration(700).style("fill", "black");
      });
    };

    var fetchTreeData = _store_habit_tree_store_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get();
    fetchTreeData.then(function (response) {
      var root = d3__WEBPACK_IMPORTED_MODULE_2__[/* hierarchy */ "a"](response.data);
      var scaleFactor = 2;
      var dy = canvasWidth / 10 * scaleFactor;
      var dx = canvasHeight / 15 * scaleFactor; // console.log(root, 'root at first');
      // root.y0 = dy / 2;
      // root.x0 = 0;
      // root.descendants().forEach((d, i) => {
      //   d.id = i;
      //   d._children = d.children;
      //   if (d.depth && d.data.name.length !== 7) d.children = null;
      // });

      var treeLayout = d3__WEBPACK_IMPORTED_MODULE_2__[/* tree */ "c"]().size(canvasWidth, canvasHeight).nodeSize([dy, dx]);
      treeLayout(root);
      console.log(response);
      var gLink = canvas.append("g").classed("links", true).attr("fill", "none").attr("stroke", "#555").attr("stroke-opacity", 0.4).attr("stroke-width", 1.5);
      var gNode = canvas.append("g").classed("nodes", true).attr("cursor", "pointer").attr("pointer-events", "all"); // console.log(root, 'root after layout');
      // console.log(root.descendants(), 'root descendentst');

      var links = gLink.selectAll("line.link").data(root.links());
      var enteringLinks = links.enter().append("line").classed("link", true).attr("x1", function (d) {
        return d.source.x;
      }).attr("y1", function (d) {
        return d.source.y;
      }).attr("x2", function (d) {
        return d.target.x;
      }).attr("y2", function (d) {
        return d.target.y;
      }).style("stroke", "#5f5f5f");
      var nodes = gNode.selectAll("g.node").data(root.descendants());
      var enteringNodes = nodes.enter().append("g").classed("the-node solid", true).style("fill", "#696969").attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
      }).call(handleEvents);
      enteringNodes.append("text").attr("class", "label").attr("dx", 15).attr("dy", 5).text(function (d) {
        return d.data.name;
      });
      enteringNodes.append("circle").attr("r", 6 * scaleFactor); //     var link = gLink.selectAll("path.link")
      //                 .data(links, function (d) {
      //                 return d.target.id;
      //             });
      //     var linkGen = d3.linkVertical()
      //       .x(function(d) {
      //         return d.y;
      //       })
      //       .y(function(d) {
      //         return d.x;
      //       });
      // link.enter().insert("path", "g")
      //         .attr("class", "link")
      //         .attr("x", dx / 2)
      //         .attr("y", dy / 2)
      //         .attr("d", linkGen);
      //     });
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (HabitTree);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril_stream__WEBPACK_IMPORTED_MODULE_1__);


var basePath = "/habit_trees";
var TreeStore = Object.assign({
  show_all: Object(_client__WEBPACK_IMPORTED_MODULE_0__[/* clientRoutes */ "a"])(basePath)["show_all"]
}, {
  current: mithril_stream__WEBPACK_IMPORTED_MODULE_1___default()({}),
  get: function get() {
    return TreeStore.show_all()["catch"](function (err) {
      console.log(err);
    });
  },
  clear: function clear() {
    TreeStore.current = mithril_stream__WEBPACK_IMPORTED_MODULE_1___default()({});
  } // list: stream([]),
  // index: () => {
  //   return TreeStore.show_all()
  //     .then((response) => JSON.parse(response.data).habit_nodes)
  //     .then(TreeStore.list)
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },

});
/* harmony default export */ __webpack_exports__["a"] = (TreeStore);

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {// src/view/components/vis/RadialTree.jsx
var RadialTree = {
  view: function view(_ref) {
    var attrs = _ref.attrs,
        children = _ref.children;
    return m("div", null);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (RadialTree);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {// src/view/components/Layout/LogoLink.jsx
var LogoLink = {
  view: function view(_ref) {
    var attrs = _ref.attrs,
        children = _ref.children;
    return m(m.route.Link, {
      // Any hyperscript selector is valid here - it's literally passed as the
      // first parameter to `m`.
      selector: "span",
      href: "/",
      "class": "logo-link"
    }, m("svg", {
      viewBox: "0 0 48 48"
    }, m("path", {
      style: "stroke-width: 2px;",
      "class": "stroke-current",
      fill: "#261C15",
      d: "M15.34,45.5C8.26,45.5,2.5,39.74,2.5,32.66s5.76-12.84,12.84-12.84h1.31v8.37l-1.31,0c-2.47,0-4.47,2.01-4.47,4.47  c0,2.47,2.01,4.48,4.47,4.48c2.47,0,4.47-2.01,4.47-4.48l0-1.92v-15.4c0-7.08,5.76-12.84,12.84-12.84c7.08,0,12.84,5.76,12.84,12.84  s-5.76,12.84-12.84,12.84h-1.31v-8.37l1.31,0c2.47,0,4.47-2.01,4.47-4.47c0-2.47-2.01-4.47-4.47-4.47c-2.47,0-4.47,2.01-4.47,4.47  l0,1.92v15.4C28.18,39.74,22.42,45.5,15.34,45.5z"
    })));
  }
};
/* harmony default export */ __webpack_exports__["a"] = (LogoLink);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {/* harmony import */ var _assets_scripts_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _Pages_forms_CreateForm_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _store_domain_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);



var Modal = {
  oncreate: function oncreate() {
    Array.from(document.querySelectorAll("button[id^=close-modal]")).forEach(function (button) {
      button.addEventListener("click", function () {
        Object(_assets_scripts_animations__WEBPACK_IMPORTED_MODULE_0__[/* openModal */ "a"])(false);
      });
    });
  },
  view: function view(vnode) {
    return m("div", {
      id: "modal_overlay",
      "class": "fixed overflow-auto hidden z-50 bg-black bg-opacity-30 w-full h-full flex justify-center items-start md:items-center"
    }, m("div", {
      id: "modal",
      "class": "flex absolute opacity-0 transform -translate-y-full scale-150 inset-4 sm:inset-12 rounded-2xl bg-white shadow-lg transition-opacity transition-transform duration-300 bottom-auto"
    }, m("button", {
      id: "close-modal-x",
      "class": "absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-2xl w-10 h-10 rounded-2xl focus:outline-none text-white"
    }, m("svg", {
      "class": "w-6 h-6 mx-auto",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, m("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "3",
      d: "M6 18L18 6M6 6l12 12"
    }))), m("div", {
      "class": "flex flex-col items-center w-full rounded-2xl"
    }, m("div", {
      "class": "px-4 py-3 border-b border-gray-200"
    }, m("h2", {
      "class": "text-xl font-semibold text-gray-600 mt-2 text-center"
    }, "Create a new habit under the life domain"), m("h3", {
      "class": "text-2xl font-bold text-center mt-2"
    }, _store_domain_store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].current().name || 'PH')), m(_Pages_forms_CreateForm_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      resourceName: "Habit",
      domain: _store_domain_store__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].current,
      resourceDescription: "A way of keeping track of your daily behaviours"
    }))));
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Modal);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {/* harmony import */ var _store_domain_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _store_date_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(534);
/* harmony import */ var _Nav_ResponsiveNavGroup_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _Nav_DomainOption_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69);
/* harmony import */ var _Nav_DropdownNav_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70);
/* harmony import */ var _menu_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _assets_styles_components_MaskHeader_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(148);
// src/view/components/Layout/MaskHeader.jsx







var MaskHeader = {
  view: function view() {
    return m("div", {
      "class": "mask-wrapper"
    }, m("header", {
      "class": "z-10 flex-none h-16 bg-balance-dp md:h-12"
    }, m("div", {
      id: "responsive-nav",
      "class": "flex justify-between items-center px-4 h-16 md:h-12 md:px-2 lg:px-0"
    }, m(m.route.Link, {
      selector: "span",
      href: "/",
      "class": "block h-10 logo md:h-8"
    }, m("svg", {
      id: "logo",
      "class": "w-10 h-10 text-gray-100 fill-current stroke-current hover:text-balance-lmint md:ml-1 md:w-8 md:h-8",
      width: "54",
      height: "54",
      viewBox: "0 0 54 54",
      xmlns: "http://www.w3.org/2000/svg"
    }, m("path", {
      d: "M15.34,45.5C8.26,45.5,2.5,39.74,2.5,32.66s5.76-12.84,12.84-12.84h1.31v8.37l-1.31,0c-2.47,0-4.47,2.01-4.47,4.47  c0,2.47,2.01,4.48,4.47,4.48c2.47,0,4.47-2.01,4.47-4.48l0-1.92v-15.4c0-7.08,5.76-12.84,12.84-12.84c7.08,0,12.84,5.76,12.84,12.84  s-5.76,12.84-12.84,12.84h-1.31v-8.37l1.31,0c2.47,0,4.47-2.01,4.47-4.47c0-2.47-2.01-4.47-4.47-4.47c-2.47,0-4.47,2.01-4.47,4.47  l0,1.92v15.4C28.18,39.74,22.42,45.5,15.34,45.5z"
    }))), ",", m("div", {
      id: "hamburger-wrapper",
      "class": "flex h-10 md:h-8 lg:flex-auto"
    }, m("div", {
      "class": "flex justify-center items-center w-10 h-10 rounded-md active:outline-light focus:outline-light hover:bg-balance-lp md:w-8 md:h-8"
    }, m("label", {
      "for": "hamburger",
      "class": "block w-8 h-8 text-balance-secondary border-1 lg:hidden md:w-6 md:h-6"
    }, m("svg", {
      "class": "stroke-current text-balance-secondary",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }, ")", m("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 6h16M4 12h16M4 18h16"
    })))), m("input", {
      type: "checkbox",
      id: "hamburger",
      "class": "hidden"
    }), m("nav", {
      "class": "hidden absolute left-0 top-16 z-20 flex-col w-full border-b-4 shadow-lg lg:-mt-4 lg:border-balance-lg bg-balance-mint lg:border-0 md:top-12 lg:flex lg:justify-end lg:items-center lg:static lg:flex-row bg-balance-dp lg:bg-transparent sm:flex-row sm:flex-wrap lg:flex-nowrap"
    }, m("div", {
      "class": "flex flex-col content-center justify-around md:pl-16 sm:pl-24 sm:my-2 sm:w-2/5 lg:w-auto lg:p-0 lg:border-0 lg:ml-8 lg:flex lg:flex-1 lg:justify-end lg:flex-row-reverse justify-between pt-1 px-4 pb-2 border-b-2"
    }, m("div", {
      "class": "nav-label-primary flex justify-between items-center mt-2 bg-gradient-to-l rounded-full sm:flex-col lg:flex-row lg:border-2 border-balance-dp max-w-12 from-balance-mint to-balance-hero lg:rounded-3xl lg:rounded-t-none text-balance-blacktext-sm lg:-mt-3 lg:mr-2"
    }, m("span", {
      "class": "lg:hidden xl:block pt-2 pb-0 mx-4 mb-1"
    }, "Domain"), m("div", {
      "class": "w-2/3 sm:w-full pr-4 lg:pr-0 h-full bg-white rounded-full border-2 text-sm lg:rounded-3xl lg:rounded-t-none border-balance-dg"
    }, m("span", {
      "class": "w-full block pt-0 pt-2 mx-4 mb-1 text-balance-secondary"
    }, m("select.form-select", {
      "class": "w-full text-center lg:w-48 text-lg py-1 lg:pt-2 pl-0 pr-6 -mr-4 rounded-2xl"
    }, _store_domain_store__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].list().map(function (domain, idx) {
      return m(_Nav_DomainOption_jsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        value: domain.name,
        selected: !idx
      }, domain.name);
    }))))), m("div", {
      "class": "nav-label-primary flex justify-between items-center mt-2 bg-gradient-to-l rounded-full sm:flex-col lg:flex-row lg:border-2 border-balance-dp max-w-12 from-balance-mint to-balance-hero lg:rounded-3xl lg:rounded-t-none text-balance-blacktext-sm lg:-mt-3 lg:mr-2"
    }, m("span", {
      "class": "lg:hidden xl:block pt-0 md:pt-2 pb-0 mx-4 mb-1"
    }, "Date"), m("div", {
      "class": "w-2/3 sm:w-full pr-8 lg:pr-0 h-full bg-white rounded-full border-2 text-sm lg:rounded-3xl lg:rounded-t-none border-balance-dg"
    }, m("span", {
      "class": "w-full block lg:pt-2 mx-4 mb-1 text-balance-secondary"
    }, m("input.form-input", {
      "class": "w-full lg:w-48 text-center text-xl lg:pt-2 -mr-2 py-1 px-0",
      type: "date"
    }, _store_date_store__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].current()))))), m("div", {
      "class": "sm:w-3/5 sm:border-b-2 lg:border-none lg:w-auto mt-3 lg:mt-1 text-md py-1 px-4 md:px-0 lg:flex-row flex flex-wrap justify-around items-center"
    }, m("div", {
      "class": "flex justify-between items-center py-2 pl-4 mr-1 mb-2 rounded-full border-2 lg:border-1 border-balance-lg lg:flex-row-reverse bg-balance-lmint lg:bg-balance-lp lg:py-0 lg:rounded-3xl lg:rounded-t-none"
    }, m("img", {
      "class": "object-cover flex-none w-10 h-10 rounded-full lg:border-1 lg:border-balance-hero lg:rounded-3xl lg:rounded-t-none border-1 border-balance-lmint",
      src: "https://images.unsplash.com/photo-1597020642626-3c9b687eba70?ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8bWFuJ3MlMjBmYWNlfHwwfHx8&ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=120&h=200&q=60",
      alt: ""
    }), m("span", {
      "class": "user-nav-label font-light lg:text-balance-lmint px-2 sm:px-0 mx-4 lg:ml-0 lg:mr-4 lg:mb-1 lg:px-0"
    }, "Your Name Is ", m("span", null, "Dave"))), m("div", {
      "class": "flex flex-col px-4 font-bold tracking-wide lg:hidden"
    }, m("button", {
      "class": "mt-2 py-2 px-4 font-sans text-lg font-semibold text-center uppercase active:outline hover:text-balance-lp"
    }, "Account Details"), m("button", {
      "class": "mt-2 py-2 px-4 font-sans text-lg font-semibold text-center uppercase active:outline hover:text-balance-lp"
    }, "Logout"))), m("ul", {
      "class": "flex flex-col-reverse w-full lg:hidden"
    }, _menu_routes__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].map(function (route) {
      return m(_Nav_ResponsiveNavGroup_jsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        id: "nav-".concat(route.label.toLowerCase()),
        "class": _menu_routes__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].selected === route.label ? "active" : "inactive",
        label: route.label,
        url: "".concat(route.path)
      }, route.subpaths);
    }))))), m("nav", {
      id: "subnav"
    }, m(_Nav_DropdownNav_jsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      routes: _menu_routes__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]
    }))));
  }
};
/* harmony default export */ __webpack_exports__["a"] = (MaskHeader);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {/* harmony import */ var _ResponsiveNavLink_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var ResponsiveNavGroup = {
  view: function view(_ref) {
    var attrs = _ref.attrs,
        _ref$children = _slicedToArray(_ref.children, 1),
        subpaths = _ref$children[0];

    return m("li", {
      "class": "responsive-nav-group active:outline-light hover:outline-light flex mt-2 w-3/4 mx-auto flex-wrap py-4 border-t-2",
      id: attrs.id
    }, m(m.route.Link, {
      href: attrs.url,
      id: attrs.id,
      "class": attrs["class"],
      style: "flex-basis: 100%"
    }, attrs.label), m("ul", {
      "class": "responsive-nav-link flex flex-wrap justify-around h-full"
    }, Object.keys(subpaths).map(function (path) {
      return m(_ResponsiveNavLink_jsx__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
        url: path,
        details: subpaths[path]
      });
    })));
  }
};
/* harmony default export */ __webpack_exports__["a"] = (ResponsiveNavGroup);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {var ResponsiveNavLink = {
  view: function view(_ref) {
    var _ref$attrs = _ref.attrs,
        url = _ref$attrs.url,
        details = _ref$attrs.details;
    return m("li", {
      "class": "resp-nav-link hover:underline flex px-4 mt-4 w-full",
      style: "flex-basis: 100%"
    }, m(m.route.Link, {
      href: url
    }, details.title));
  }
};
/* harmony default export */ __webpack_exports__["a"] = (ResponsiveNavLink);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {var DomainOption = {
  view: function view(_ref) {
    var attrs = _ref.attrs;
    return m("option", {
      "class": "text-center",
      value: attrs.value
    }, attrs.value);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (DomainOption);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Vnode(tag, key, attrs, children, text, dom) {
	return {tag: tag, key: key, attrs: attrs, children: children, text: text, dom: dom, domSize: undefined, state: undefined, events: undefined, instance: undefined}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node == null || typeof node === "boolean") return null
	if (typeof node === "object") return node
	return Vnode("#", undefined, undefined, String(node), undefined, undefined)
}
Vnode.normalizeChildren = function(input) {
	var children = []
	if (input.length) {
		var isKeyed = input[0] != null && input[0].key != null
		// Note: this is a *very* perf-sensitive check.
		// Fun fact: merging the loop like this is somehow faster than splitting
		// it, noticeably so.
		for (var i = 1; i < input.length; i++) {
			if ((input[i] != null && input[i].key != null) !== isKeyed) {
				throw new TypeError("Vnodes must either always have keys or never have keys!")
			}
		}
		for (var i = 0; i < input.length; i++) {
			children[i] = Vnode.normalize(input[i])
		}
	}
	return children
}

module.exports = Vnode


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {/* harmony import */ var _HoverableLink_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);


var DropdownNav = function () {
  return {
    view: function view(_ref) {
      var routes = _ref.attrs.routes;
      return m("nav", {
        "class": "nav"
      }, m("div", {
        "class": "nav-container"
      }, m("ul", {
        "class": "nav-links"
      }, routes.map(function (route, index) {
        return m(_HoverableLink_jsx__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
          label: "".concat(route.label),
          "class": routes.selected === route.label ? "active" : "inactive",
          id: "nav-".concat(route.label.toLowerCase()),
          subpaths: "".concat(route.subpaths)
        }, routes[index].subpaths);
      }))));
    }
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (DropdownNav);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {/* harmony import */ var _MenuList_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);

var HoverableLink = {
  view: function view(_ref) {
    var attrs = _ref.attrs,
        children = _ref.children;
    return m("li", {
      "class": "hoverable ".concat(attrs["class"])
    }, m("a", {
      id: "".concat(attrs.id)
    }, attrs.label), m("div", {
      "class": "mega-menu"
    }, m("div", {
      "class": "mega-menu-wrapper"
    }, m("div", {
      "class": "inset-wrapper"
    }), m("div", {
      "class": "hero-message"
    }, m("h2", null, "View your Habits and Objectives"), m("p", null, "Take control of your behaviour with one of these views...")), m("div", {
      "class": "inset"
    }, m(_MenuList_jsx__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], null, children)))));
  }
};
/* harmony default export */ __webpack_exports__["a"] = (HoverableLink);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {/* harmony import */ var _MenuListCard_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);

var MenuList = {
  view: function view(_ref) {
    var children = _ref.children;
    return Object.keys(children[0]).map(function (route, index) {
      return m(_MenuListCard_jsx__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
        title: children[0][route].title,
        id: index,
        subtitle: children[0][route].description,
        url: "".concat(route),
        icon: children[0][route].icon
      });
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (MenuList);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {var MenuListCard = {
  oncreate: function oncreate() {
    // Apply active state classes to card matching route
    var navButtons = document.querySelectorAll("button.menu-card-button");
    Array.from(navButtons).forEach(function (menuCard) {
      var currentPath = window.location.href.split("#!")[1];

      if (menuCard.getAttribute("href").endsWith(currentPath)) {
        menuCard.parentNode.parentNode.classList.add('active');
        menuCard.classList.add('active');
        menuCard.textContent = 'YOU ARE HERE';
      }
    });
  },
  view: function view(_ref) {
    var attrs = _ref.attrs;
    return m("div", {
      "class": "menu-card h-full bg-gray-100 rounded-2xl shadow-xl text-balance-black flex flex-col justify-between"
    }, m("div", {
      "class": "flex items-center justify-center"
    }, m("h3", {
      "class": "flex mb-auto mt-6 pl-2"
    }, attrs.title), m("div", {
      "class": "flex items-center justify-center h-24 w-24 text-balance-dp"
    }, m.trust(attrs.icon))), m("div", {
      "class": "flex flex-col items-center",
      style: "flex-basis: 50%"
    }, m(m.route.Link, {
      selector: "button",
      href: attrs.url,
      "class": "menu-card-button"
    }, "Let's Go"), m("p", {
      "class": "text-lg"
    }, attrs.subtitle)));
  }
};
/* harmony default export */ __webpack_exports__["a"] = (MenuListCard);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MainStage = {
  view: function view(_ref) {
    var index = _ref.attrs.index,
        _ref$children = _slicedToArray(_ref.children, 1),
        mainPage = _ref$children[0];

    return m("main", {
      "class": "flex absolute mx-0 w-full top-16 md:top-12 flex-col flex-auto bg-balance-hero"
    }, index ? mainPage : m("section.cards.flex-1.bg-white h-full", [m("h2", mainPage.attrs.heading), mainPage]));
  }
};
/* harmony default export */ __webpack_exports__["a"] = (MainStage);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {// import watermark from "../../../assets/images/watermark.png";
// import * as infinity from "../../../assets/images/icons/infinity.svg";
var Footer = {
  view: function view(vnode) {
    return m("footer", {
      "class": "flex-none w-full h-12 bg-opacity-30 bg-gradient-to-r from-blue-100 to-blue-300"
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Footer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {/* harmony import */ var _DomainPill_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);

var HeroSection = {
  view: function view() {
    return m("section", {
      id: "hero"
    }, m("header", {
      "class": "md:h-56 lg:h-1/2 flex-none h-auto mx-8 mt-12"
    }, m("h1", {
      "class": "sm:flex sm:justify-center"
    }, "Find ", m("em", {
      "class": "px-4 text-balance-secondary sm:px-4 md:px-8"
    }, "your"), " ", "infinity"), m("h2", null, "Drill down (or soar up) and ", m("br", {
      "class": "hidden lg:block"
    }), " leverage the power ", m("br", {
      "class": "hidden lg:block"
    }), "of incremental behavioural change.")), m("div", {
      id: "call-to-action",
      "class": "flex flex-col px-12 pb-4 mt-6 bg-gradient-to-b from-transparent md:mt-20 md:pb-12 sm:mt-4 lg:space-x-4 to-white"
    }, m("h2", null, "Choose a life domain:"), m("div", {
      "class": "domain-pills"
    }, ["Physical Health", "Mental Health", "Spirituality", "Giving", "Career"].map(function (domain, idx) {
      return m(_DomainPill_jsx__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
        name: domain,
        rank: idx
      });
    }))));
  }
};
/* harmony default export */ __webpack_exports__["a"] = (HeroSection);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(m) {/* harmony import */ var _store_domain_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _assets_scripts_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);


var DomainPill = {
  oncreate: function oncreate(vnode) {
    vnode.dom.addEventListener('click', function (event) {
      _store_domain_store__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].submit({
        name: vnode.attrs.name,
        description: vnode.attrs.name,
        rank: vnode.attrs.rank + 2,
        hashtag: "#".concat(vnode.attrs.name)
      }).then(function () {
        m.redraw();
      }).then(_assets_scripts_animations__WEBPACK_IMPORTED_MODULE_1__[/* openModal */ "a"])["catch"](function (err) {
        err.status ? window.FlashMessage.error(err.status) : window.FlashMessage.error("Unable to add Domain");
      });
    });
  },
  view: function view(_ref) {
    var attrs = _ref.attrs;
    return m("button", {
      "class": "domain-create"
    }, m("div", {
      "class": "flex justify-between items-center p-4 my-4 bg-gray-700 rounded-full shadow-md"
    }, attrs.name));
  }
};
/* harmony default export */ __webpack_exports__["a"] = (DomainPill);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(m) {/* harmony import */ var _ui_assets_styles_app_base_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(126);
/* harmony import */ var _ui_assets_styles_app_components_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(127);
/* harmony import */ var _ui_assets_styles_app_utilities_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(128);
/* harmony import */ var _ui_assets_styles_vendor_flashJS_import__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(149);
/* harmony import */ var _ui_assets_scripts_flash_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(129);
/* harmony import */ var _ui_assets_scripts_flash_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ui_assets_scripts_flash_min_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ui_assets_scripts_animations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _ui_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36);
// Import our CSS







var $root = document.querySelector("body");
m.route($root, _ui_routes__WEBPACK_IMPORTED_MODULE_6__[/* DefaultRoute */ "a"], _ui_routes__WEBPACK_IMPORTED_MODULE_6__[/* Routes */ "b"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return childMatcher; });
/* harmony default export */ __webpack_exports__["b"] = (function(selector) {
  return function() {
    return this.matches(selector);
  };
});

function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}



/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ __webpack_exports__["a"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ })

/******/ });