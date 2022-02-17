'use strict';var vue=require('vue');function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var props = {
  pageId: {
    required: false,
    type: null
  },
  blockId: {
    required: false,
    type: null
  },
  appletTitle: {
    required: false,
    type: String
  },
  dataAttributes: {
    required: false,
    type: null
  },
  queryParameters: {
    required: false,
    type: null
  }
};var script$J = vue.defineComponent({
  name: "Carousel",
  components: {},
  props: props,
  setup: function setup(p, ctx) {
    console.log('Carousel setup ...');
    console.log('props: ', p);
    console.log('context: ', ctx);
  },
  mounted: function mounted() {
    console.log('Carousel mounted ...');
  }
});var _hoisted_1$q = /*#__PURE__*/vue.createElementVNode("h2", null, "Carousel", -1);

var _hoisted_2$i = {
  class: "row"
};
var _hoisted_3$d = {
  class: "row"
};
var _hoisted_4$9 = {
  class: "row"
};
function render$J(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", null, [_hoisted_1$q, vue.createElementVNode("div", _hoisted_2$i, "Page Id: " + vue.toDisplayString(_ctx.pageId), 1), vue.createElementVNode("div", _hoisted_3$d, "Block Id: " + vue.toDisplayString(_ctx.blockId), 1), vue.createElementVNode("div", _hoisted_4$9, "Data Attributes " + vue.toDisplayString(_ctx.dataAttributes), 1)]);
}script$J.render = render$J;function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
    // @ts-ignore
    return (typeof navigator !== 'undefined' && typeof window !== 'undefined')
        ? window
        : typeof global !== 'undefined'
            ? global
            : {};
}
const isProxyAvailable = typeof Proxy === 'function';const HOOK_SETUP = 'devtools-plugin:setup';
const HOOK_PLUGIN_SETTINGS_SET = 'plugin:settings:set';class ApiProxy {
    constructor(plugin, hook) {
        this.target = null;
        this.targetQueue = [];
        this.onQueue = [];
        this.plugin = plugin;
        this.hook = hook;
        const defaultSettings = {};
        if (plugin.settings) {
            for (const id in plugin.settings) {
                const item = plugin.settings[id];
                defaultSettings[id] = item.defaultValue;
            }
        }
        const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
        let currentSettings = { ...defaultSettings };
        try {
            const raw = localStorage.getItem(localSettingsSaveId);
            const data = JSON.parse(raw);
            Object.assign(currentSettings, data);
        }
        catch (e) {
            // noop
        }
        this.fallbacks = {
            getSettings() {
                return currentSettings;
            },
            setSettings(value) {
                try {
                    localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
                }
                catch (e) {
                    // noop
                }
                currentSettings = value;
            },
        };
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
            if (pluginId === this.plugin.id) {
                this.fallbacks.setSettings(value);
            }
        });
        this.proxiedOn = new Proxy({}, {
            get: (_target, prop) => {
                if (this.target) {
                    return this.target.on[prop];
                }
                else {
                    return (...args) => {
                        this.onQueue.push({
                            method: prop,
                            args,
                        });
                    };
                }
            },
        });
        this.proxiedTarget = new Proxy({}, {
            get: (_target, prop) => {
                if (this.target) {
                    return this.target[prop];
                }
                else if (prop === 'on') {
                    return this.proxiedOn;
                }
                else if (Object.keys(this.fallbacks).includes(prop)) {
                    return (...args) => {
                        this.targetQueue.push({
                            method: prop,
                            args,
                            resolve: () => { },
                        });
                        return this.fallbacks[prop](...args);
                    };
                }
                else {
                    return (...args) => {
                        return new Promise(resolve => {
                            this.targetQueue.push({
                                method: prop,
                                args,
                                resolve,
                            });
                        });
                    };
                }
            },
        });
    }
    async setRealTarget(target) {
        this.target = target;
        for (const item of this.onQueue) {
            this.target.on[item.method](...item.args);
        }
        for (const item of this.targetQueue) {
            item.resolve(await this.target[item.method](...item.args));
        }
    }
}function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
        hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    }
    else {
        const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
        const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
        list.push({
            pluginDescriptor,
            setupFn,
            proxy,
        });
        if (proxy)
            setupFn(proxy.proxiedTarget);
    }
}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */

var storeKey = 'store';

function useStore (key) {
  if ( key === void 0 ) key = null;

  return vue.inject(key !== null ? key : storeKey)
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset state
  resetStoreState(store, state, hot);
}

function resetStoreState (store, state, hot) {
  var oldState = store._state;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computedObj = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldState.
    // using partial to return function with only arguments preserved in closure environment.
    computedObj[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      // TODO: use `computed` when it's possible. at the moment we can't due to
      // https://github.com/vuejs/vuex/pull/1883
      get: function () { return computedObj[key](); },
      enumerable: true // for local getters
    });
  });

  store._state = vue.reactive({
    data: state
  });

  // enable strict mode for new state
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldState) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldState.data = null;
      });
    }
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("production" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      parentState[moduleName] = module.state;
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by state update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  vue.watch(function () { return store._state.data; }, function () {
  }, { deep: true, flush: 'sync' });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  return { type: type, payload: payload, options: options }
}

var LABEL_VUEX_BINDINGS = 'vuex bindings';
var MUTATIONS_LAYER_ID = 'vuex:mutations';
var ACTIONS_LAYER_ID = 'vuex:actions';
var INSPECTOR_ID = 'vuex';

var actionId = 0;

function addDevtools (app, store) {
  setupDevtoolsPlugin(
    {
      id: 'org.vuejs.vuex',
      app: app,
      label: 'Vuex',
      homepage: 'https://next.vuex.vuejs.org/',
      logo: 'https://vuejs.org/images/icons/favicon-96x96.png',
      packageName: 'vuex',
      componentStateTypes: [LABEL_VUEX_BINDINGS]
    },
    function (api) {
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: 'Vuex Mutations',
        color: COLOR_LIME_500
      });

      api.addTimelineLayer({
        id: ACTIONS_LAYER_ID,
        label: 'Vuex Actions',
        color: COLOR_LIME_500
      });

      api.addInspector({
        id: INSPECTOR_ID,
        label: 'Vuex',
        icon: 'storage',
        treeFilterPlaceholder: 'Filter stores...'
      });

      api.on.getInspectorTree(function (payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          if (payload.filter) {
            var nodes = [];
            flattenStoreForInspectorTree(nodes, store._modules.root, payload.filter, '');
            payload.rootNodes = nodes;
          } else {
            payload.rootNodes = [
              formatStoreForInspectorTree(store._modules.root, '')
            ];
          }
        }
      });

      api.on.getInspectorState(function (payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          makeLocalGetters(store, modulePath);
          payload.state = formatStoreForInspectorState(
            getStoreModule(store._modules, modulePath),
            modulePath === 'root' ? store.getters : store._makeLocalGettersCache,
            modulePath
          );
        }
      });

      api.on.editInspectorState(function (payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          var path = payload.path;
          if (modulePath !== 'root') {
            path = modulePath.split('/').filter(Boolean).concat( path);
          }
          store._withCommit(function () {
            payload.set(store._state.data, path, payload.state.value);
          });
        }
      });

      store.subscribe(function (mutation, state) {
        var data = {};

        if (mutation.payload) {
          data.payload = mutation.payload;
        }

        data.state = state;

        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);

        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: Date.now(),
            title: mutation.type,
            data: data
          }
        });
      });

      store.subscribeAction({
        before: function (action, state) {
          var data = {};
          if (action.payload) {
            data.payload = action.payload;
          }
          action._id = actionId++;
          action._time = Date.now();
          data.state = state;

          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: action._time,
              title: action.type,
              groupId: action._id,
              subtitle: 'start',
              data: data
            }
          });
        },
        after: function (action, state) {
          var data = {};
          var duration = Date.now() - action._time;
          data.duration = {
            _custom: {
              type: 'duration',
              display: (duration + "ms"),
              tooltip: 'Action duration',
              value: duration
            }
          };
          if (action.payload) {
            data.payload = action.payload;
          }
          data.state = state;

          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: action.type,
              groupId: action._id,
              subtitle: 'end',
              data: data
            }
          });
        }
      });
    }
  );
}

// extracted from tailwind palette
var COLOR_LIME_500 = 0x84cc16;
var COLOR_DARK = 0x666666;
var COLOR_WHITE = 0xffffff;

var TAG_NAMESPACED = {
  label: 'namespaced',
  textColor: COLOR_WHITE,
  backgroundColor: COLOR_DARK
};

/**
 * @param {string} path
 */
function extractNameFromPath (path) {
  return path && path !== 'root' ? path.split('/').slice(-2, -1)[0] : 'Root'
}

/**
 * @param {*} module
 * @return {import('@vue/devtools-api').CustomInspectorNode}
 */
function formatStoreForInspectorTree (module, path) {
  return {
    id: path || 'root',
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: extractNameFromPath(path),
    tags: module.namespaced ? [TAG_NAMESPACED] : [],
    children: Object.keys(module._children).map(function (moduleName) { return formatStoreForInspectorTree(
        module._children[moduleName],
        path + moduleName + '/'
      ); }
    )
  }
}

/**
 * @param {import('@vue/devtools-api').CustomInspectorNode[]} result
 * @param {*} module
 * @param {string} filter
 * @param {string} path
 */
function flattenStoreForInspectorTree (result, module, filter, path) {
  if (path.includes(filter)) {
    result.push({
      id: path || 'root',
      label: path.endsWith('/') ? path.slice(0, path.length - 1) : path || 'Root',
      tags: module.namespaced ? [TAG_NAMESPACED] : []
    });
  }
  Object.keys(module._children).forEach(function (moduleName) {
    flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + '/');
  });
}

/**
 * @param {*} module
 * @return {import('@vue/devtools-api').CustomInspectorState}
 */
function formatStoreForInspectorState (module, getters, path) {
  getters = path === 'root' ? getters : getters[path];
  var gettersKeys = Object.keys(getters);
  var storeState = {
    state: Object.keys(module.state).map(function (key) { return ({
      key: key,
      editable: true,
      value: module.state[key]
    }); })
  };

  if (gettersKeys.length) {
    var tree = transformPathsToObjectTree(getters);
    storeState.getters = Object.keys(tree).map(function (key) { return ({
      key: key.endsWith('/') ? extractNameFromPath(key) : key,
      editable: false,
      value: canThrow(function () { return tree[key]; })
    }); });
  }

  return storeState
}

function transformPathsToObjectTree (getters) {
  var result = {};
  Object.keys(getters).forEach(function (key) {
    var path = key.split('/');
    if (path.length > 1) {
      var target = result;
      var leafKey = path.pop();
      path.forEach(function (p) {
        if (!target[p]) {
          target[p] = {
            _custom: {
              value: {},
              display: p,
              tooltip: 'Module',
              abstract: true
            }
          };
        }
        target = target[p]._custom.value;
      });
      target[leafKey] = canThrow(function () { return getters[key]; });
    } else {
      result[key] = canThrow(function () { return getters[key]; });
    }
  });
  return result
}

function getStoreModule (moduleMap, path) {
  var names = path.split('/').filter(function (n) { return n; });
  return names.reduce(
    function (module, moduleName, i) {
      var child = module[moduleName];
      if (!child) {
        throw new Error(("Missing module \"" + moduleName + "\" for path \"" + path + "\"."))
      }
      return i === names.length - 1 ? child : child._children
    },
    path === 'root' ? moduleMap : moduleMap.root._children
  )
}

function canThrow (cb) {
  try {
    return cb()
  } catch (e) {
    return e
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1$1 = this;
    if ( runtime === void 0 ) runtime = true;

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var Store = function Store (options) {
  var this$1$1 = this;
  if ( options === void 0 ) options = {};

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;
  var devtools = options.devtools;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._makeLocalGettersCache = Object.create(null);
  this._devtools = devtools;

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store state, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreState(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1$1); });
};

var prototypeAccessors = { state: { configurable: true } };

Store.prototype.install = function install (app, injectKey) {
  app.provide(injectKey || storeKey, this);
  app.config.globalProperties.$store = this;

  var useDevtools = this._devtools !== undefined
    ? this._devtools
    : __VUE_PROD_DEVTOOLS__;

  if (useDevtools) {
    addDevtools(app, this);
  }
};

prototypeAccessors.state.get = function () {
  return this._state.data
};

prototypeAccessors.state.set = function (v) {
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1$1.state); });
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1$1.state); });
  } catch (e) {
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1$1.state); });
      } catch (e) {
      }
      resolve(res);
    }, function (error) {
      try {
        this$1$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1$1.state, error); });
      } catch (e) {
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch$1 (getter, cb, options) {
    var this$1$1 = this;
  return vue.watch(function () { return getter(this$1$1.state, this$1$1.getters); }, cb, Object.assign({}, options))
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1$1 = this;

  this._withCommit(function () {
    this$1$1._state.data = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreState(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1$1 = this;

  if (typeof path === 'string') { path = [path]; }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
    delete parentState[path[path.length - 1]];
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );//Declare State interface
var state$5 = {
  keywordQueryModel: null,
  searchResult: null,
  offset: 0,
  max: 25,
  pageId: null,
  blockId: null
};var _mutations$5;

//Declare MutationTypes
var Mutations$6; //Create a mutation tree that implement all mutation interfaces

(function (Mutations) {
  Mutations["SET_SOURCE"] = "SET_SOURCE";
  Mutations["SET_KEYWORDS"] = "SET_KEYWORDS";
  Mutations["SET_RESULTS"] = "SET_RESULTS";
  Mutations["SET_OFFSET"] = "SET_OFFSET";
  Mutations["SET_PAGE_SIZE"] = "SET_PAGE_SIZE";
})(Mutations$6 || (Mutations$6 = {}));

var mutations$6 = (_mutations$5 = {}, _defineProperty(_mutations$5, Mutations$6.SET_SOURCE, function (state, payload) {
  state.pageId = payload.pageId;
  state.blockId = payload.blockId;
}), _defineProperty(_mutations$5, Mutations$6.SET_KEYWORDS, function (state, payload) {
  console.log('SET_KEYWORDS Payload: ', payload);
  state.keywordQueryModel = payload;
}), _defineProperty(_mutations$5, Mutations$6.SET_RESULTS, function (state, payload) {
  state.searchResult = payload;
  state.offset = payload.first - 1;
}), _defineProperty(_mutations$5, Mutations$6.SET_OFFSET, function (state, payload) {
  //console.log('SET_OFFSET: payload: ', payload)
  state.offset = payload;
}), _defineProperty(_mutations$5, Mutations$6.SET_PAGE_SIZE, function (state, payload) {
  //console.log('SET_PAGE_SIZE: payload: ', payload)
  state.max = payload;
}), _mutations$5);var _actions$6;
//Declare ActionTypes
var Actions$6;

(function (Actions) {
  Actions["INIT_FILTER"] = "INIT_FILTER";
  Actions["FILTER_BY_KEYWORDS"] = "FILTER_BY_KEYWORDS";
  Actions["NEXT_PAGE"] = "NEXT_PAGE";
  Actions["PREVIOUS_PAGE"] = "PREVIOUS_PAGE";
  Actions["FRESH_SEARCH"] = "FRESH_SEARCH";
  Actions["SAVE_KEYWORDS"] = "SAVE_KEYWORDS";
})(Actions$6 || (Actions$6 = {}));

var actions$6 = (_actions$6 = {}, _defineProperty(_actions$6, Actions$6.INIT_FILTER, function (store) {
  //console.log('Store: ', JSON.stringify(store.state))
  var api = window.location.origin + "/applets/api/keywordsearch/keywords/page/".concat(store.state.pageId, "/block/").concat(store.state.blockId);
  console.log('Keyword Load API: ', api);
  fetch(api).then(function (response) {
    return response.json();
  }).then(function (data) {
    store.commit(Mutations$6.SET_KEYWORDS, data);
  });
}), _defineProperty(_actions$6, Actions$6.FILTER_BY_KEYWORDS, function (store) {
  console.log("Dispatched Actions.FILTER_BY_KEYWORDS. Query model: ", JSON.stringify(store.state.keywordQueryModel)); //Saving current search parameters in the local storage

  if (store.state.blockId) {
    var searchParams = {
      keywords: store.state.keywordQueryModel,
      offset: store.state.offset,
      max: store.state.max
    };
    localStorage.setItem(store.getters.searchParamStorageKey, JSON.stringify(searchParams));
  }

  var api = window.location.origin + "/applets/api/keywordsearch/items/";
  console.log("Item Load API: ", api);
  var formData = new FormData();
  if (store.state.pageId) formData.append("pageId", store.state.pageId.toString());
  if (store.state.blockId) formData.append("blockId", store.state.blockId.toString());
  formData.append("offset", store.state.offset.toString());
  formData.append("max", store.state.max.toString());
  formData.append("queryParams", JSON.stringify(store.state.keywordQueryModel)); //console.log("Form Data: ", formData)

  fetch(api, {
    method: 'POST',
    // or 'PUT'
    body: formData
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    store.commit(Mutations$6.SET_RESULTS, data);
  }).catch(function (error) {
    console.error('Item Load API Error:', error);
  });
}), _defineProperty(_actions$6, Actions$6.NEXT_PAGE, function (store) {
  store.commit(Mutations$6.SET_OFFSET, store.state.offset + store.state.max);
  store.dispatch(Actions$6.FILTER_BY_KEYWORDS);
}), _defineProperty(_actions$6, Actions$6.PREVIOUS_PAGE, function (store) {
  var offset = Math.max(store.state.offset - store.state.max, 0);
  store.commit(Mutations$6.SET_OFFSET, offset);
  store.dispatch(Actions$6.FILTER_BY_KEYWORDS);
}), _defineProperty(_actions$6, Actions$6.FRESH_SEARCH, function (store, pageSize) {
  store.commit(Mutations$6.SET_OFFSET, 0);
  if (pageSize) store.commit(Mutations$6.SET_PAGE_SIZE, pageSize);
  store.dispatch(Actions$6.FILTER_BY_KEYWORDS);
}), _defineProperty(_actions$6, Actions$6.SAVE_KEYWORDS, function (store, source) {
  console.log("save keywords action :" + JSON.stringify(source));
  store.commit(Mutations$6.SET_KEYWORDS, source);
}), _actions$6);var getters$6 = {
  //  items: (state): Item[] | undefined => {
  //    return state.searchResult?.items
  //  },
  searchParamStorageKey: function searchParamStorageKey(state) {
    var _state$blockId;

    return ((_state$blockId = state.blockId) === null || _state$blockId === void 0 ? void 0 : _state$blockId.toString()) + "SearchParams";
  }
};var script$I = vue.defineComponent({
  name: "KeywordFilter",
  setup: function setup() {
    var store = useStore(); //console.log("Store: ", store)

    var runFreshSearch = function runFreshSearch() {
      return store.dispatch(Actions$6.FRESH_SEARCH);
    };

    return {
      runFreshSearch: runFreshSearch,
      keywordQueryModel: vue.computed(function () {
        return store.state.keywordQueryModel;
      })
    };
  }
});var _hoisted_1$p = {
  key: 0
};
var _hoisted_2$h = {
  key: 0,
  class: "font-weight-bold"
};
var _hoisted_3$c = ["value", "onUpdate:modelValue"];
var _hoisted_4$8 = {
  class: "ml-1"
};
function render$I(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$keywordQueryMode;

  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList((_ctx$keywordQueryMode = _ctx.keywordQueryModel) === null || _ctx$keywordQueryMode === void 0 ? void 0 : _ctx$keywordQueryMode.containers, function (container, cIdx) {
    var _ctx$keywordQueryMode2, _container$name;

    return vue.openBlock(), vue.createElementBlock("div", {
      key: container
    }, [((_ctx$keywordQueryMode2 = _ctx.keywordQueryModel) === null || _ctx$keywordQueryMode2 === void 0 ? void 0 : _ctx$keywordQueryMode2.containers.length) > 1 && (container === null || container === void 0 ? void 0 : (_container$name = container.name) === null || _container$name === void 0 ? void 0 : _container$name.length) > 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$p, vue.toDisplayString(container.name), 1)) : vue.createCommentVNode("", true), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(container.fields, function (field, fIdx) {
      return vue.openBlock(), vue.createElementBlock("div", {
        key: field,
        class: "mb-3"
      }, [field.name.length > 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$h, vue.toDisplayString(field.name), 1)) : vue.createCommentVNode("", true), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(field.values, function (value, vIdx) {
        return vue.openBlock(), vue.createElementBlock("div", {
          key: value
        }, [vue.withDirectives(vue.createElementVNode("input", {
          type: "checkbox",
          value: value,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return _ctx.keywordQueryModel.containers[cIdx].fields[fIdx].selected[vIdx] = $event;
          },
          onChange: _cache[0] || (_cache[0] = function () {
            return _ctx.runFreshSearch && _ctx.runFreshSearch.apply(_ctx, arguments);
          })
        }, null, 40, _hoisted_3$c), [[vue.vModelCheckbox, _ctx.keywordQueryModel.containers[cIdx].fields[fIdx].selected[vIdx]]]), vue.createElementVNode("label", _hoisted_4$8, vue.toDisplayString(value), 1)]);
      }), 128))]);
    }), 128))]);
  }), 128);
}script$I.render = render$I;var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}var dayjs_min = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else {var i=t.name;v[i]=t,r=i;}return !n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t);}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return O},m.isValid=function(){return !(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));
});

var dayjs = dayjs_min;var script$H = vue.defineComponent({
  name: "ItemList",
  props: {},
  setup: function setup() {
    var store = useStore();

    var nextPage = function nextPage() {
      return store.dispatch(Actions$6.NEXT_PAGE);
    };

    var previousPage = function previousPage() {
      return store.dispatch(Actions$6.PREVIOUS_PAGE);
    };

    var freshSearch = function freshSearch(pageSize) {
      return store.dispatch(Actions$6.FRESH_SEARCH, pageSize);
    };

    var selectedPageSize = vue.ref(25);
    return {
      items: vue.computed(function () {
        var _store$state$searchRe;

        return (_store$state$searchRe = store.state.searchResult) === null || _store$state$searchRe === void 0 ? void 0 : _store$state$searchRe.items;
      }),
      freshSearch: freshSearch,
      nextPage: nextPage,
      previousPage: previousPage,
      selectedPageSize: selectedPageSize,
      count: vue.computed(function () {
        var _store$state$searchRe2;

        return (_store$state$searchRe2 = store.state.searchResult) === null || _store$state$searchRe2 === void 0 ? void 0 : _store$state$searchRe2.count;
      }),
      first: vue.computed(function () {
        var _store$state$searchRe3;

        return (_store$state$searchRe3 = store.state.searchResult) === null || _store$state$searchRe3 === void 0 ? void 0 : _store$state$searchRe3.first;
      }),
      last: vue.computed(function () {
        var _store$state$searchRe4;

        return (_store$state$searchRe4 = store.state.searchResult) === null || _store$state$searchRe4 === void 0 ? void 0 : _store$state$searchRe4.last;
      })
    };
  },
  methods: {
    formatDate: function formatDate(dateString) {
      var date = dayjs(dateString);
      return date.format('MMM DD, YYYY');
    }
  }
});var _hoisted_1$o = {
  class: "itemList"
};
var _hoisted_2$g = {
  key: 0
};
var _hoisted_3$b = {
  key: 0
};
var _hoisted_4$7 = {
  key: 1
};

var _hoisted_5$7 = /*#__PURE__*/vue.createElementVNode("option", null, "25", -1);

var _hoisted_6$6 = /*#__PURE__*/vue.createElementVNode("option", null, "50", -1);

var _hoisted_7$4 = /*#__PURE__*/vue.createElementVNode("option", null, "100", -1);

var _hoisted_8$4 = [_hoisted_5$7, _hoisted_6$6, _hoisted_7$4];
var _hoisted_9$2 = {
  key: 1
};
var _hoisted_10$2 = {
  class: "item"
};
var _hoisted_11$2 = {
  class: "item-title"
};
var _hoisted_12$2 = ["href"];
var _hoisted_13$2 = {
  key: 1
};
var _hoisted_14$2 = {
  class: "item-date"
};
var _hoisted_15$2 = {
  class: "item-subtitle"
};
var _hoisted_16$2 = {
  class: "categories"
};
var _hoisted_17$2 = {
  class: "badge rounded-pill bg-dark text-white m-1"
};
var _hoisted_18$2 = {
  class: "content"
};
function render$H(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$items;

  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$o, [((_ctx$items = _ctx.items) === null || _ctx$items === void 0 ? void 0 : _ctx$items.length) > 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$g, [_ctx.first > 1 ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$b, [vue.createElementVNode("i", {
    class: "fas fa-angle-double-left",
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.previousPage && _ctx.previousPage.apply(_ctx, arguments);
    })
  })])) : vue.createCommentVNode("", true), vue.createTextVNode(" " + vue.toDisplayString(_ctx.first) + "-" + vue.toDisplayString(_ctx.last) + " of " + vue.toDisplayString(_ctx.count) + " ", 1), _ctx.count > _ctx.last ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$7, [vue.createElementVNode("i", {
    class: "fas fa-angle-double-right",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.nextPage && _ctx.nextPage.apply(_ctx, arguments);
    })
  })])) : vue.createCommentVNode("", true), vue.createElementVNode("span", null, [vue.withDirectives(vue.createElementVNode("select", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return _ctx.selectedPageSize = $event;
    }),
    class: "pull-right",
    onChange: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.freshSearch(Number(_ctx.selectedPageSize));
    })
  }, _hoisted_8$4, 544), [[vue.vModelSelect, _ctx.selectedPageSize]])])])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_9$2, "No results found.")), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.items, function (item) {
    var _item$detailedViewUrl;

    return vue.openBlock(), vue.createElementBlock("div", {
      key: item.id
    }, [vue.createElementVNode("div", _hoisted_10$2, [vue.createElementVNode("h3", _hoisted_11$2, [((_item$detailedViewUrl = item.detailedViewUrl) === null || _item$detailedViewUrl === void 0 ? void 0 : _item$detailedViewUrl.length) > 0 ? (vue.openBlock(), vue.createElementBlock("a", {
      key: 0,
      href: item.detailedViewUrl
    }, vue.toDisplayString(item.title), 9, _hoisted_12$2)) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_13$2, vue.toDisplayString(item.title), 1))]), vue.createElementVNode("div", _hoisted_14$2, vue.toDisplayString(_ctx.formatDate(item.date)), 1), vue.createElementVNode("h5", _hoisted_15$2, vue.toDisplayString(item.subtitle), 1), vue.createElementVNode("div", _hoisted_16$2, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.categories, function (cat) {
      return vue.openBlock(), vue.createElementBlock("span", _hoisted_17$2, vue.toDisplayString(cat), 1);
    }), 256))]), vue.createElementVNode("div", _hoisted_18$2, vue.toDisplayString(item.content), 1)])]);
  }), 128))]);
}script$H.render = render$H;var script$G = vue.defineComponent({
  name: "Applet",
  components: {
    KeywordFilter: script$I,
    ItemList: script$H
  },
  props: props,
  setup: function setup(p) {
    console.log('Keyword Search setup ...', p); //We need to use store in this setup method. so let's load it first.

    var store = useStore(); //Storing the page and block IDs in the store

    store.commit(Mutations$6.SET_SOURCE, {
      pageId: p.pageId,
      blockId: p.blockId
    }); //See if we can load a SearchParams object from local storage

    var searchParamsStr = localStorage.getItem(store.getters.searchParamStorageKey);
    var searchParams;

    if (searchParamsStr && searchParamsStr.length > 0 && (searchParams = JSON.parse(searchParamsStr)) && searchParams.keywords) {
      //Restoring the store state from data reloaded from the state
      store.commit(Mutations$6.SET_KEYWORDS, searchParams.keywords);
      store.commit(Mutations$6.SET_OFFSET, searchParams.offset);
      store.commit(Mutations$6.SET_PAGE_SIZE, searchParams.max);
    } else {
      //Dispatch an action to loaf keywords
      store.dispatch(Actions$6.INIT_FILTER);
    } //When the component is mounted, execute a search query based on the current patameters in the store.state.


    vue.onMounted(function () {
      return store.dispatch(Actions$6.FILTER_BY_KEYWORDS);
    });
    var keywordQueryModel = vue.ref(store.state.keywordQueryModel);
    return {
      keywordQueryModel: keywordQueryModel
    };
  },
  storeConfig: {
    state: state$5,
    actions: actions$6,
    mutations: mutations$6,
    getters: getters$6
  }
});var _hoisted_1$n = {
  class: "row"
};
var _hoisted_2$f = {
  class: "col-md-4 text-left"
};
var _hoisted_3$a = {
  class: "col-md-8"
};
function render$G(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_KeywordFilter = vue.resolveComponent("KeywordFilter");

  var _component_ItemList = vue.resolveComponent("ItemList");

  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$n, [vue.createElementVNode("div", _hoisted_2$f, [vue.createVNode(_component_KeywordFilter)]), vue.createElementVNode("div", _hoisted_3$a, [vue.createVNode(_component_ItemList)])]);
}script$G.render = render$G;//Declare State interface
var state$4 = {
  Id: null,
  template: null
};var _mutations$4;

//Declare MutationTypes
var Mutations$5; //Create a mutation tree that implement all mutation interfaces

(function (Mutations) {
  Mutations["SET_ID"] = "SET_ID";
  Mutations["SET_TEMPLATE"] = "SET_TEMPLATE";
})(Mutations$5 || (Mutations$5 = {}));

var mutations$5 = (_mutations$4 = {}, _defineProperty(_mutations$4, Mutations$5.SET_ID, function (state, payload) {
  state.Id = payload; // console.log("template id : " + state.Id)
}), _defineProperty(_mutations$4, Mutations$5.SET_TEMPLATE, function (state, payload) {
  state.template = payload; // console.log("template ID: " + state.template.id);
  // console.log("template name: " + state.template.templateName);
  // console.log("field length: " + state.template.dataContainer[0].fields.length)
}), _mutations$4);var _actions$5;

var Actions$5;

(function (Actions) {
  Actions["LOAD_TEMPLATE"] = "LOAD_TEMPLATE";
  Actions["SET_ID"] = "SET_ID";
})(Actions$5 || (Actions$5 = {}));

var actions$5 = (_actions$5 = {}, _defineProperty(_actions$5, Actions$5.LOAD_TEMPLATE, function (store) {
  var api = window.location.origin + "/applets/api/itemtemplates/".concat(store.state.Id); //console.log('Keyword Load API: ', api)

  fetch(api).then(function (response) {
    return response.json();
  }).then(function (data) {
    store.commit(Mutations$5.SET_TEMPLATE, data); //console.log("Loaded Template datacontainer: " + JSON.stringify(store.state.template?.dataContainer))
    // console.log("Datacontainer count: " + store.state.template?.dataContainer.length)
  });
}), _defineProperty(_actions$5, Actions$5.SET_ID, function (store, payload) {
  store.commit(Mutations$5.SET_ID, payload);
}), _actions$5);var getters$5 = {//getTemplateId: state => {
  //    return state.queryParameters["templateId"];
  //}
};var script$F = vue.defineComponent({
  name: "NotificationEditor",
  props: {
    fieldContainer: {
      required: false,
      type: null
    }
  },
  setup: function setup() {}
});function render$F(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [vue.createElementVNode("h4", null, vue.toDisplayString(_ctx.fieldContainer.name.concatenatedContent), 1), vue.createElementVNode("div", null, vue.toDisplayString(_ctx.fieldContainer), 1)], 64);
}script$F.render = render$F;var script$E = vue.defineComponent({
  name: "FormEditor",
  props: ['form'],
  setup: function setup() {}
});function render$E(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [vue.createElementVNode("h4", null, vue.toDisplayString(_ctx.form.name.concatenatedContent), 1), vue.createElementVNode("div", null, vue.toDisplayString(_ctx.form), 1)], 64);
}script$E.render = render$E;var script$D = vue.defineComponent({
  name: "MetadatasetEditor",
  props: ['metadataset'],
  setup: function setup() {}
});function render$D(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [vue.createElementVNode("h4", null, vue.toDisplayString(_ctx.metadataset.name.concatenatedContent), 1), vue.createElementVNode("div", null, vue.toDisplayString(_ctx.metadataset), 1)], 64);
}script$D.render = render$D;var script$C = vue.defineComponent({
  name: "ItemTemplate",
  components: {
    NotificationEditor: script$F,
    FormEditor: script$E,
    MetadatasetEditor: script$D
  },
  props: {},
  setup: function setup() {
    var store = useStore();
    var activePanel = vue.ref(null);
    return {
      template: vue.computed(function () {
        return store.state.template;
      }),
      metadataSets: vue.computed(function () {
        var _store$state$template;

        return (_store$state$template = store.state.template) === null || _store$state$template === void 0 ? void 0 : _store$state$template.metadataSets;
      }),
      dataContainer: vue.computed(function () {
        var _store$state$template2;

        return (_store$state$template2 = store.state.template) === null || _store$state$template2 === void 0 ? void 0 : _store$state$template2.dataContainer;
      }),
      activePanel: activePanel
    };
  },
  methods: {
    formatDate: function formatDate(dateString) {
      var date = dayjs(dateString);
      return date.format('MMM DD, YYYY');
    }
  }
});var _withScopeId$1 = function _withScopeId(n) {
  return vue.pushScopeId("data-v-2579f0c4"), n = n(), vue.popScopeId(), n;
};

var _hoisted_1$m = {
  class: "container row itemTemplate"
};
var _hoisted_2$e = {
  class: "col-md-4"
};

var _hoisted_3$9 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("div", {
    class: "sectionLabel"
  }, "Overview", -1);
});

var _hoisted_4$6 = [_hoisted_3$9];

var _hoisted_5$6 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("div", {
    class: "sectionLabel"
  }, "Notifications", -1);
});

var _hoisted_6$5 = [_hoisted_5$6];
var _hoisted_7$3 = ["onClick"];

var _hoisted_8$3 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("div", {
    class: "sectionLabel"
  }, "Forms", -1);
});

var _hoisted_9$1 = [_hoisted_8$3];
var _hoisted_10$1 = ["onClick"];

var _hoisted_11$1 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("div", {
    class: "sectionLabel"
  }, "Metadata Forms", -1);
});

var _hoisted_12$1 = [_hoisted_11$1];
var _hoisted_13$1 = ["onClick"];
var _hoisted_14$1 = {
  class: "col-md-8"
};
var _hoisted_15$1 = {
  key: 0,
  class: "col-12 wrapper"
};

var _hoisted_16$1 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("h4", null, "Overview", -1);
});

var _hoisted_17$1 = [_hoisted_16$1];
var _hoisted_18$1 = {
  key: 1,
  class: "col-12 wrapper"
};

var _hoisted_19$1 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("h4", null, "Notifications", -1);
});

var _hoisted_20$1 = [_hoisted_19$1];
var _hoisted_21$1 = {
  key: 0
};
var _hoisted_22$1 = {
  key: 2,
  class: "col-12 wrapper"
};

var _hoisted_23 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("h4", null, "Forms", -1);
});

var _hoisted_24 = [_hoisted_23];
var _hoisted_25 = {
  key: 0
};
var _hoisted_26 = {
  key: 3,
  class: "col-12 wrapper"
};

var _hoisted_27 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("h4", null, "Metadata Forms", -1);
});

var _hoisted_28 = [_hoisted_27];
var _hoisted_29 = {
  key: 0
};
function render$C(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$template, _ctx$metadataSets, _ctx$metadataSets2, _ctx$metadataSets3, _ctx$metadataSets4;

  var _component_NotificationEditor = vue.resolveComponent("NotificationEditor");

  var _component_FormEditor = vue.resolveComponent("FormEditor");

  var _component_MetadatasetEditor = vue.resolveComponent("MetadatasetEditor");

  return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [vue.createElementVNode("h3", null, vue.toDisplayString((_ctx$template = _ctx.template) === null || _ctx$template === void 0 ? void 0 : _ctx$template.templateName), 1), vue.createElementVNode("div", _hoisted_1$m, [vue.createElementVNode("div", _hoisted_2$e, [vue.createElementVNode("div", {
    class: vue.normalizeClass(["col-12 menuEntry", _ctx.activePanel == 'overview' || _ctx.activePanel == null ? 'active' : '']),
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.activePanel = 'overview';
    })
  }, _hoisted_4$6, 2), vue.createElementVNode("div", {
    class: vue.normalizeClass(["col-12 menuEntry", _ctx.activePanel == 'notifications' ? 'active' : '']),
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.activePanel = 'notifications';
    })
  }, _hoisted_6$5, 2), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList((_ctx$metadataSets = _ctx.metadataSets) === null || _ctx$metadataSets === void 0 ? void 0 : _ctx$metadataSets.filter(function (m) {
    return m.isTemplate == true;
  }), function (ms) {
    return vue.openBlock(), vue.createElementBlock("div", {
      key: ms.id,
      class: vue.normalizeClass(["col-12 menuEntry", _ctx.activePanel == ms.id ? 'active' : '']),
      onClick: function onClick($event) {
        return _ctx.activePanel = ms.id;
      }
    }, vue.toDisplayString(ms.name.concatenatedContent), 11, _hoisted_7$3);
  }), 128)), vue.createElementVNode("div", {
    class: "col-12 menuEntry",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.activePanel = 'forms';
    })
  }, _hoisted_9$1), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.dataContainer, function (form) {
    return vue.openBlock(), vue.createElementBlock("div", {
      key: form.id,
      class: vue.normalizeClass(["col-12 menuEntry", _ctx.activePanel == form.id ? 'active' : '']),
      onClick: function onClick($event) {
        return _ctx.activePanel = form.id;
      }
    }, vue.toDisplayString(form.name.concatenatedContent), 11, _hoisted_10$1);
  }), 128)), vue.createElementVNode("div", {
    class: "col-12 menuEntry",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.activePanel = 'metadata-forms';
    })
  }, _hoisted_12$1), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList((_ctx$metadataSets2 = _ctx.metadataSets) === null || _ctx$metadataSets2 === void 0 ? void 0 : _ctx$metadataSets2.filter(function (m) {
    return m.isTemplate == false;
  }), function (ms) {
    return vue.openBlock(), vue.createElementBlock("div", {
      key: ms.id,
      class: vue.normalizeClass(["col-12 menuEntry", _ctx.activePanel == ms.id ? 'active' : '']),
      onClick: function onClick($event) {
        return _ctx.activePanel = ms.id;
      }
    }, vue.toDisplayString(ms.name.concatenatedContent), 11, _hoisted_13$1);
  }), 128))]), vue.createElementVNode("div", _hoisted_14$1, [_ctx.activePanel == null || _ctx.activePanel == 'overview' ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_15$1, _hoisted_17$1)) : vue.createCommentVNode("", true), _ctx.activePanel == 'notifications' ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_18$1, _hoisted_20$1)) : vue.createCommentVNode("", true), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList((_ctx$metadataSets3 = _ctx.metadataSets) === null || _ctx$metadataSets3 === void 0 ? void 0 : _ctx$metadataSets3.filter(function (m) {
    return m.isTemplate == true;
  }), function (ms) {
    return vue.openBlock(), vue.createElementBlock("div", {
      key: ms.id,
      class: "col-12 wrapper"
    }, [_ctx.activePanel == ms.id ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_21$1, [vue.createVNode(_component_NotificationEditor, {
      fieldContainer: ms
    }, null, 8, ["fieldContainer"])])) : vue.createCommentVNode("", true)]);
  }), 128)), _ctx.activePanel == 'forms' ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_22$1, _hoisted_24)) : vue.createCommentVNode("", true), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.dataContainer, function (form) {
    return vue.openBlock(), vue.createElementBlock("div", {
      key: form.id,
      class: "col-12 wrapper"
    }, [_ctx.activePanel == form.id ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_25, [vue.createVNode(_component_FormEditor, {
      form: form
    }, null, 8, ["form"])])) : vue.createCommentVNode("", true)]);
  }), 128)), _ctx.activePanel == 'metadata-forms' ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_26, _hoisted_28)) : vue.createCommentVNode("", true), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList((_ctx$metadataSets4 = _ctx.metadataSets) === null || _ctx$metadataSets4 === void 0 ? void 0 : _ctx$metadataSets4.filter(function (m) {
    return m.isTemplate == false;
  }), function (ms) {
    return vue.openBlock(), vue.createElementBlock("div", {
      key: ms.id,
      class: "col-12 wrapper"
    }, [_ctx.activePanel == ms.id ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_29, [vue.createVNode(_component_MetadatasetEditor, {
      metadataset: ms
    }, null, 8, ["metadataset"])])) : vue.createCommentVNode("", true)]);
  }), 128))])])], 64);
}function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z$4 = "\n.menuEntry[data-v-2579f0c4]{\r\n        border: 1px solid Grey;\r\n        margin: 10px;\r\n        padding: 10px 10px;\n}\n.menuEntry.active[data-v-2579f0c4] {\r\n            background-color: #BBBCAA;\n}\n.sectionLabel[data-v-2579f0c4]{\r\n        font-weight: bold;\n}\n.wrapper[data-v-2579f0c4]{\r\n        margin: 0;\r\n        padding: 0;\n}\r\n";
styleInject(css_248z$4);script$C.render = render$C;
script$C.__scopeId = "data-v-2579f0c4";var script$B = vue.defineComponent({
  name: "ItemTemplateEditor",
  components: {
    ItemTemplate: script$C
  },
  props: props,
  setup: function setup(p) {
    var store = useStore();
    console.log('Item Template Editor setup ...');
    console.log('props: ', JSON.stringify(p));
    var queryParams = p.queryParameters;
    store.dispatch("SET_ID", queryParams.id); //load the data

    store.dispatch("LOAD_TEMPLATE");
    return {
      queryParams: queryParams
    };
  },
  storeConfig: {
    state: state$4,
    actions: actions$5,
    mutations: mutations$5,
    getters: getters$5
  }
});var _hoisted_1$l = /*#__PURE__*/vue.createElementVNode("h3", null, "Item Template Editor", -1);

function render$B(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ItemTemplate = vue.resolveComponent("ItemTemplate");

  return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [_hoisted_1$l, vue.createElementVNode("div", null, "Item Template ID: " + vue.toDisplayString(_ctx.queryParameters.id), 1), vue.createVNode(_component_ItemTemplate)], 64);
}script$B.render = render$B;var script$A = vue.defineComponent({
  name: "ItemEditor",
  components: {},
  props: props,
  setup: function setup(p, ctx) {
    console.log('Editor setup ...');
    console.log('props: ', p);
    console.log('context: ', ctx);
    var queryParameters = p.queryParameters;
    return {
      queryParameters: queryParameters
    };
  },
  mounted: function mounted() {
    console.log('Editor mounted ...');
  }
});var _hoisted_1$k = /*#__PURE__*/vue.createElementVNode("h2", null, "Item Ediror", -1);

function render$A(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", null, [_hoisted_1$k, vue.createElementVNode("div", null, "Item ID: " + vue.toDisplayString(_ctx.queryParameters.id), 1)]);
}script$A.render = render$A;//Declare State interface
var state$3 = {
  id: null,
  item: null
};var _mutations$3;

//Declare MutationTypes
var Mutations$4; //Create a mutation tree that implement all mutation interfaces

(function (Mutations) {
  Mutations["SET_ID"] = "SET_ID";
  Mutations["SET_ITEM"] = "SET_ITEM";
  Mutations["CHANGE_STATE"] = "CHANGE_STATE";
})(Mutations$4 || (Mutations$4 = {}));

var mutations$4 = (_mutations$3 = {}, _defineProperty(_mutations$3, Mutations$4.SET_ID, function (state, payload) {
  state.id = payload;
}), _defineProperty(_mutations$3, Mutations$4.SET_ITEM, function (state, payload) {
  state.item = payload;
}), _defineProperty(_mutations$3, Mutations$4.CHANGE_STATE, function (state, payload) {
  //state.item
  console.log(JSON.stringify(state));
  console.log(JSON.stringify(payload));
}), _mutations$3);var _actions$4;
//Declare ActionTypes
var Actions$4;

(function (Actions) {
  Actions["LOAD_ITEM"] = "LOAD_ITEM";
  Actions["CHANGE_STATE"] = "CHANGE_STATE";
})(Actions$4 || (Actions$4 = {}));

var actions$4 = (_actions$4 = {}, _defineProperty(_actions$4, Actions$4.LOAD_ITEM, function (store) {
  var api = window.location.origin + "/applets/api/itemeditor/".concat(store.state.id);
  console.log('Item Load API: ', api);
  fetch(api).then(function (response) {
    return response.json();
  }).then(function (data) {
    store.commit(Mutations$4.SET_ITEM, data);
  });
}), _defineProperty(_actions$4, Actions$4.CHANGE_STATE, function (store, payload) {
  console.log(JSON.stringify(store.state));
  var api = window.location.origin + "/applets/api/itemeditor/deleteItem/".concat(payload);
  console.log('Item Load API: ', api);
  fetch(api, {
    method: "post"
  }).then(function (response) {
    //response.json()
    console.log(response.status);

    switch (response.status) {
      case 200:
        window.location.href = "/"; //alert("TODO: change me to redirect to home page.");

        break;

      case 401:
        alert("Authorization failed.");
        break;

      case 404:
        alert("Item not found.");
        break;

      case 500:
        alert("Internal server error occurred.");
        break;

      default:
        alert("Unknown error occurred.");
        break;
    }
  }) ////.then(data => {
  ////    console.log(data);
  ////    //if (data.status == 200) {
  ////    //    console.log("status ok "  + data.status);
  ////    //    //window.location.href = window.location.origin;
  ////    //} else {
  ////    //    alert("HTTP response return status code " + data.status);
  ////    //}
  ////})
  .catch(function (error) {
    alert("Unknown error occurred.");
    console.log(error);
  });
}), _actions$4);var getters$4 = {
  rootDataItem: function rootDataItem(state) {
    var _state$item, _state$item$dataConta, _state$item$dataConta2;

    return (_state$item = state.item) === null || _state$item === void 0 ? void 0 : (_state$item$dataConta = _state$item.dataContainer) === null || _state$item$dataConta === void 0 ? void 0 : (_state$item$dataConta2 = _state$item$dataConta.$values) === null || _state$item$dataConta2 === void 0 ? void 0 : _state$item$dataConta2.filter(function (dc) {
      return dc.isRoot;
    })[0];
  },
  metadataSet: function metadataSet(state) {
    return function (id) {
      var _state$item2, _state$item2$metadata, _state$item2$metadata2;

      console.log("metadataset getter id: " + JSON.stringify(id));
      return (_state$item2 = state.item) === null || _state$item2 === void 0 ? void 0 : (_state$item2$metadata = _state$item2.metadataSets) === null || _state$item2$metadata === void 0 ? void 0 : (_state$item2$metadata2 = _state$item2$metadata.$values) === null || _state$item2$metadata2 === void 0 ? void 0 : _state$item2$metadata2.find(function (ms) {
        return ms.templateId === id;
      });
    };
  },
  dataItemId: function dataItemId(state) {
    var _state$item3, _state$item3$dataCont, _state$item3$dataCont2, _state$item3$dataCont3;

    return (_state$item3 = state.item) === null || _state$item3 === void 0 ? void 0 : (_state$item3$dataCont = _state$item3.dataContainer) === null || _state$item3$dataCont === void 0 ? void 0 : (_state$item3$dataCont2 = _state$item3$dataCont.$values) === null || _state$item3$dataCont2 === void 0 ? void 0 : (_state$item3$dataCont3 = _state$item3$dataCont2.filter(function (dc) {
      return dc.isRoot;
    })[0]) === null || _state$item3$dataCont3 === void 0 ? void 0 : _state$item3$dataCont3.id;
  }
};var eRefType;

(function (eRefType) {
  eRefType[eRefType["undefined"] = 0] = "undefined";
  eRefType[eRefType["data"] = 1] = "data";
  eRefType[eRefType["metadata"] = 2] = "metadata";
})(eRefType || (eRefType = {}));

var eFieldType;

(function (eFieldType) {
  eFieldType[eFieldType["AttachmentField"] = 0] = "AttachmentField";
  eFieldType[eFieldType["CheckboxField"] = 1] = "CheckboxField";
  eFieldType[eFieldType["CompositeField"] = 2] = "CompositeField";
  eFieldType[eFieldType["DateField"] = 3] = "DateField";
  eFieldType[eFieldType["DecimalField"] = 4] = "DecimalField";
  eFieldType[eFieldType["EmailField"] = 5] = "EmailField";
  eFieldType[eFieldType["FieldContainerReference"] = 6] = "FieldContainerReference";
  eFieldType[eFieldType["InfoSection"] = 7] = "InfoSection";
  eFieldType[eFieldType["IntegerField"] = 8] = "IntegerField";
  eFieldType[eFieldType["MonolingualTextField"] = 9] = "MonolingualTextField";
  eFieldType[eFieldType["RadioField"] = 10] = "RadioField";
  eFieldType[eFieldType["SelectField"] = 11] = "SelectField";
  eFieldType[eFieldType["TableField"] = 12] = "TableField";
  eFieldType[eFieldType["TextArea"] = 13] = "TextArea";
  eFieldType[eFieldType["TextField"] = 14] = "TextField";
  eFieldType[eFieldType["AudioRecorderField"] = 15] = "AudioRecorderField";
})(eFieldType || (eFieldType = {}));

var eValidationStatus;

(function (eValidationStatus) {
  eValidationStatus["VALID"] = "VALID";
  eValidationStatus["VALUE_REQUIRED"] = "VALUE_REQUIRED";
  eValidationStatus["INVALID"] = "INVALID";
})(eValidationStatus || (eValidationStatus = {}));

var OptionsFieldMethods = /*#__PURE__*/function () {
  function OptionsFieldMethods() {
    _classCallCheck(this, OptionsFieldMethods);
  }

  _createClass(OptionsFieldMethods, null, [{
    key: "getSelectedFieldLabels",
    value: function getSelectedFieldLabels(options) {
      return options === null || options === void 0 ? void 0 : options.filter(function (opt) {
        return opt.selected;
      }).map(function (opt) {
        var _opt$optionText;

        return (_opt$optionText = opt.optionText) === null || _opt$optionText === void 0 ? void 0 : _opt$optionText.values.$values.map(function (txt) {
          return txt.value;
        }).join(" / ");
      }).join(", ");
    }
  }]);

  return OptionsFieldMethods;
}();var script$z = vue.defineComponent({
  name: "Text",
  props: {
    model: {
      type: null,
      required: true
    }
  },
  methods: {
    isUrl: function isUrl(text) {
      return (text === null || text === void 0 ? void 0 : text.startsWith("http://")) || (text === null || text === void 0 ? void 0 : text.startsWith("https://"));
    }
  }
});var _hoisted_1$j = {
  key: 0
};
var _hoisted_2$d = ["href"];
var _hoisted_3$8 = {
  key: 1
};
function render$z(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.isUrl(_ctx.model.value) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$j, [vue.createElementVNode("a", {
    href: _ctx.model.value
  }, vue.toDisplayString(_ctx.model.value), 9, _hoisted_2$d)])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$8, vue.toDisplayString(_ctx.model.value), 1));
}script$z.render = render$z;var script$y = vue.defineComponent({
  name: "TextCollection",
  props: {
    model: {
      type: null,
      required: true
    }
  },
  components: {
    Text: script$z
  }
});function render$y(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Text = vue.resolveComponent("Text");

  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.model.values.$values, function (txt) {
    return vue.openBlock(), vue.createElementBlock("div", null, [vue.createVNode(_component_Text, {
      model: txt
    }, null, 8, ["model"])]);
  }), 256);
}script$y.render = render$y;var script$x = vue.defineComponent({
  name: "TextField",
  props: {
    model: {
      type: null,
      required: true
    },
    isMultivalued: {
      type: Boolean,
      required: false,
      default: true
    },
    isMultiline: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  components: {
    TextCollection: script$y
  }
});function render$x(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TextCollection = vue.resolveComponent("TextCollection");

  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.model.values.$values, function (val) {
    return vue.openBlock(), vue.createElementBlock("div", {
      key: val.id
    }, [vue.createVNode(_component_TextCollection, {
      model: val
    }, null, 8, ["model"])]);
  }), 128);
}script$x.render = render$x;var script$w = vue.defineComponent({
  name: "EmailField",
  props: {
    model: {
      type: null,
      required: true
    },
    isMultivalue: {
      type: Boolean,
      required: false,
      default: false
    }
  } //    methods: {
  //    },
  //    setup(props) {
  //        const val = ref(props.model?.values?.slice(0, 1));
  //        return {
  //            val
  //        }
  //    }

});function render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.model.values.$values, function (val) {
    return vue.openBlock(), vue.createElementBlock("div", null, vue.toDisplayString(val.value), 1);
  }), 256);
}script$w.render = render$w;var script$v = vue.defineComponent({
  name: "OptionsField",
  components: {},
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  methods: {
    getSelectedFieldLabels: function getSelectedFieldLabels(field) {
      return OptionsFieldMethods.getSelectedFieldLabels(field.options.$values);
    }
  }
});function render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.toDisplayString(_ctx.getSelectedFieldLabels(_ctx.model));
}script$v.render = render$v;var script$u = vue.defineComponent({
  name: "DecimalField",
  props: {
    model: {
      type: null,
      required: true
    },
    isMultivalued: {
      type: Boolean,
      required: false,
      default: false
    },
    numDecimalPlaces: {
      type: Number,
      required: false,
      default: 2
    }
  },
  //setup(prop) {
  //    const val = ref(prop.model?.values?.slice(0, 1));
  //    let valNumber = Number(val.value);
  //    return {
  //        valNumber
  //    }
  //},
  methods: {
    formatToDecimal: function formatToDecimal(value, decimalPlaces) {
      return Number(value).toFixed(decimalPlaces);
    }
  }
});function render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.model.values.$values, function (val) {
    return vue.openBlock(), vue.createElementBlock("div", null, vue.toDisplayString(_ctx.formatToDecimal(val, _ctx.numDecimalPlaces)), 1);
  }), 256);
}script$u.render = render$u;var script$t = vue.defineComponent({
  name: "IntegerField",
  props: {
    model: {
      type: null,
      required: true
    },
    isMultivalued: {
      type: Boolean,
      required: false,
      default: false
    }
  }
});function render$t(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.model.values.$values, function (val) {
    return vue.openBlock(), vue.createElementBlock("div", null, vue.toDisplayString(val.value), 1);
  }), 256);
}script$t.render = render$t;var script$s = vue.defineComponent({
  name: "DateField",
  props: {
    model: {
      type: null,
      required: true
    },
    isMultivalued: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    formatDate: function formatDate(dateString) {
      var date = dayjs(dateString);
      return date.format('MMM DD, YYYY');
    }
  }
});function render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.model.values.$values, function (val) {
    return vue.openBlock(), vue.createElementBlock("div", null, vue.toDisplayString(_ctx.formatDate(val.value)), 1);
  }), 256);
}script$s.render = render$s;var script$r = vue.defineComponent({
  name: "ChildFieldContainer",
  props: {
    model: null
  },
  components: {
    TextField: script$x,
    EmailField: script$w,
    OptionsField: script$v,
    DecimalField: script$u,
    IntegerField: script$t,
    DateField: script$s
  },
  methods: {
    getFieldType: function getFieldType(field) {
      var _typeName;

      var typeName = field === null || field === void 0 ? void 0 : field.$type.substring(0, field.$type.indexOf(","));
      typeName = (_typeName = typeName) === null || _typeName === void 0 ? void 0 : _typeName.substring(typeName.lastIndexOf(".") + 1);
      return eFieldType[typeName];
    },
    isAttachmentField: function isAttachmentField(field) {
      return this.getFieldType(field) === eFieldType.AttachmentField;
    },
    isOptionsField: function isOptionsField(field) {
      return this.getFieldType(field) === eFieldType.CheckboxField || this.getFieldType(field) === eFieldType.RadioField || this.getFieldType(field) === eFieldType.SelectField;
    },
    isCompositeField: function isCompositeField(field) {
      return this.getFieldType(field) === eFieldType.CompositeField;
    },
    isDateField: function isDateField(field) {
      return this.getFieldType(field) === eFieldType.DateField;
    },
    isDecimalField: function isDecimalField(field) {
      return this.getFieldType(field) === eFieldType.DecimalField;
    },
    isEmailField: function isEmailField(field) {
      return this.getFieldType(field) === eFieldType.EmailField;
    },
    isFieldContainerReference: function isFieldContainerReference(field) {
      return this.getFieldType(field) === eFieldType.FieldContainerReference;
    },
    isInfoSection: function isInfoSection(field) {
      return this.getFieldType(field) === eFieldType.InfoSection;
    },
    isIntegerField: function isIntegerField(field) {
      return this.getFieldType(field) === eFieldType.IntegerField;
    },
    isMonolingualTextField: function isMonolingualTextField(field) {
      return this.getFieldType(field) === eFieldType.MonolingualTextField;
    },
    isTableField: function isTableField(field) {
      return this.getFieldType(field) === eFieldType.TableField;
    },
    isTextArea: function isTextArea(field) {
      return this.getFieldType(field) === eFieldType.TextArea;
    },
    isTextField: function isTextField(field) {
      return this.getFieldType(field) === eFieldType.TextField;
    },
    cssClass: function cssClass(field) {
      return (field.cssClass ? field.cssClass : "") + " " + (field.fieldCssClass ? field.fieldCssClass : "");
    }
  }
});var _hoisted_1$i = {
  class: "field-name col-md-3"
};
var _hoisted_2$c = {
  class: "field-value col-md-9"
};
var _hoisted_3$7 = {
  key: 7
};
var _hoisted_4$5 = {
  key: 8
};
var _hoisted_5$5 = {
  key: 9
};
var _hoisted_6$4 = {
  key: 11
};
function render$r(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_TextField = vue.resolveComponent("TextField");

  var _component_EmailField = vue.resolveComponent("EmailField");

  var _component_OptionsField = vue.resolveComponent("OptionsField");

  var _component_DecimalField = vue.resolveComponent("DecimalField");

  var _component_IntegerField = vue.resolveComponent("IntegerField");

  var _component_DateField = vue.resolveComponent("DateField");

  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.model.fields.$values, function (field) {
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["row", _ctx.cssClass(field)])
    }, [vue.createElementVNode("div", _hoisted_1$i, vue.toDisplayString(field.name.concatenatedContent), 1), vue.createElementVNode("div", _hoisted_2$c, [_this.isTextField(field) ? (vue.openBlock(), vue.createBlock(_component_TextField, {
      key: 0,
      model: field
    }, null, 8, ["model"])) : vue.createCommentVNode("", true), _this.isTextArea(field) ? (vue.openBlock(), vue.createBlock(_component_TextField, {
      key: 1,
      model: field
    }, null, 8, ["model"])) : vue.createCommentVNode("", true), _this.isEmailField(field) ? (vue.openBlock(), vue.createBlock(_component_EmailField, {
      key: 2,
      model: field
    }, null, 8, ["model"])) : vue.createCommentVNode("", true), _this.isOptionsField(field) ? (vue.openBlock(), vue.createBlock(_component_OptionsField, {
      key: 3,
      model: field
    }, null, 8, ["model"])) : vue.createCommentVNode("", true), _this.isDecimalField(field) ? (vue.openBlock(), vue.createBlock(_component_DecimalField, {
      key: 4,
      model: field
    }, null, 8, ["model"])) : vue.createCommentVNode("", true), _this.isIntegerField(field) ? (vue.openBlock(), vue.createBlock(_component_IntegerField, {
      key: 5,
      model: field
    }, null, 8, ["model"])) : vue.createCommentVNode("", true), _this.isDateField(field) ? (vue.openBlock(), vue.createBlock(_component_DateField, {
      key: 6,
      model: field
    }, null, 8, ["model"])) : vue.createCommentVNode("", true), _this.isAttachmentField(_ctx.model) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$7, " AttachmentField ")) : vue.createCommentVNode("", true), _this.isCompositeField(_ctx.model) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$5, " CompositeField ")) : vue.createCommentVNode("", true), _this.isInfoSection(_ctx.model) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$5, " InfoSection ")) : vue.createCommentVNode("", true), _this.isMonolingualTextField(_ctx.model) ? (vue.openBlock(), vue.createBlock(_component_TextField, {
      key: 10,
      model: field
    }, null, 8, ["model"])) : vue.createCommentVNode("", true), _this.isTableField(_ctx.model) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$4, " TableField ")) : vue.createCommentVNode("", true)])], 2);
  }), 256);
}script$r.render = render$r;//import { Guid } from "guid-typescript";
var script$q = vue.defineComponent({
  name: "FieldContainerReference",
  components: {
    ChildFieldContainer: script$r
  },
  props: {
    model: {
      type: null,
      required: true
    }
  },
  setup: function setup(p) {
    var store = useStore();
    var refId = vue.ref(p.model.refId);
    console.log("refId: " + JSON.stringify(refId));
    return {
      refId: refId,
      source: vue.computed(function () {
        return store.getters.metadataSet(refId.value);
      })
    };
  }
});function render$q(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ChildFieldContainer = vue.resolveComponent("ChildFieldContainer");

  return vue.openBlock(), vue.createBlock(_component_ChildFieldContainer, {
    model: _ctx.source
  }, null, 8, ["model"]);
}script$q.render = render$q;var script$p = vue.defineComponent({
  name: "AttachmentField",
  components: {},
  props: {
    model: {
      type: null,
      required: true
    }
  },
  setup: function setup(p) {
    var store = useStore();
    var itemId = vue.ref(store.state.item.id);
    var dataItemId = vue.ref(store.getters.dataItemId);
    var fileUrl = '/api/items/' + itemId.value + '/' + dataItemId.value + '/' + p.model.id + '/';
    return {
      itemId: itemId,
      fileUrl: fileUrl
    };
  }
});var _hoisted_1$h = ["href"];
var _hoisted_2$b = ["src"];
function render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.model.files.$values, function (file) {
    return vue.openBlock(), vue.createElementBlock("div", null, [vue.createElementVNode("a", {
      href: _ctx.fileUrl + file.fileName
    }, [vue.createElementVNode("img", {
      src: file.thumbnail,
      class: "img-thumbnail"
    }, null, 8, _hoisted_2$b)], 8, _hoisted_1$h), vue.createTextVNode(vue.toDisplayString(file.originalFileName), 1)]);
  }), 256);
}var css_248z$3 = "\n.img-thumbnail[data-v-307ae89a]{\r\n        width:35px;\r\n        height: auto;\r\n        margin-right: 10px;\n}\r\n";
styleInject(css_248z$3);script$p.render = render$p;
script$p.__scopeId = "data-v-307ae89a";var script$o = vue.defineComponent({
  name: "InfoField",
  props: {
    model: {
      type: null,
      required: true
    }
  }
});var _hoisted_1$g = ["innerHTML"];
function render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.model.content.values.$values, function (val) {
    return vue.openBlock(), vue.createElementBlock("div", {
      key: val.id
    }, [vue.createElementVNode("div", {
      innerHTML: val.value
    }, null, 8, _hoisted_1$g)]);
  }), 128);
}script$o.render = render$o;var script$n = vue.defineComponent({
  name: "FieldContainer",
  props: {
    model: null,
    hideFieldNames: Boolean
  },
  components: {
    TextField: script$x,
    EmailField: script$w,
    OptionsField: script$v,
    DecimalField: script$u,
    IntegerField: script$t,
    DateField: script$s,
    ReferenceField: script$q,
    AttachmentField: script$p,
    InfoField: script$o
  },
  methods: {
    getFieldType: function getFieldType(field) {
      var _typeName;

      var typeName = field === null || field === void 0 ? void 0 : field.$type.substring(0, field.$type.indexOf(","));
      typeName = (_typeName = typeName) === null || _typeName === void 0 ? void 0 : _typeName.substring(typeName.lastIndexOf(".") + 1);
      return eFieldType[typeName];
    },
    isAttachmentField: function isAttachmentField(field) {
      return this.getFieldType(field) === eFieldType.AttachmentField;
    },
    isOptionsField: function isOptionsField(field) {
      return this.getFieldType(field) === eFieldType.CheckboxField || this.getFieldType(field) === eFieldType.RadioField || this.getFieldType(field) === eFieldType.SelectField;
    },
    isCompositeField: function isCompositeField(field) {
      return this.getFieldType(field) === eFieldType.CompositeField;
    },
    isDateField: function isDateField(field) {
      return this.getFieldType(field) === eFieldType.DateField;
    },
    isDecimalField: function isDecimalField(field) {
      return this.getFieldType(field) === eFieldType.DecimalField;
    },
    isEmailField: function isEmailField(field) {
      return this.getFieldType(field) === eFieldType.EmailField;
    },
    isFieldContainerReference: function isFieldContainerReference(field) {
      return this.getFieldType(field) === eFieldType.FieldContainerReference;
    },
    isInfoSection: function isInfoSection(field) {
      return this.getFieldType(field) === eFieldType.InfoSection;
    },
    isIntegerField: function isIntegerField(field) {
      return this.getFieldType(field) === eFieldType.IntegerField;
    },
    isMonolingualTextField: function isMonolingualTextField(field) {
      return this.getFieldType(field) === eFieldType.MonolingualTextField;
    },
    isTableField: function isTableField(field) {
      return this.getFieldType(field) === eFieldType.TableField;
    },
    isTextArea: function isTextArea(field) {
      return this.getFieldType(field) === eFieldType.TextArea;
    },
    isTextField: function isTextField(field) {
      return this.getFieldType(field) === eFieldType.TextField;
    },
    cssClass: function cssClass(field) {
      return field.cssClass + " " + field.fieldCssClass;
    },
    formatDate: function formatDate(dateString) {
      var date = dayjs(dateString);
      return date.format('MMM DD, YYYY');
    }
  }
});var _hoisted_1$f = {
  class: "timeStamp"
};
var _hoisted_2$a = {
  key: 0,
  class: "field-name col-md-3"
};
var _hoisted_3$6 = {
  class: "field-value col-md-9"
};
var _hoisted_4$4 = {
  key: 10
};
var _hoisted_5$4 = {
  key: 11
};
function render$n(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_ReferenceField = vue.resolveComponent("ReferenceField");

  var _component_TextField = vue.resolveComponent("TextField");

  var _component_EmailField = vue.resolveComponent("EmailField");

  var _component_OptionsField = vue.resolveComponent("OptionsField");

  var _component_DecimalField = vue.resolveComponent("DecimalField");

  var _component_IntegerField = vue.resolveComponent("IntegerField");

  var _component_DateField = vue.resolveComponent("DateField");

  var _component_AttachmentField = vue.resolveComponent("AttachmentField");

  var _component_InfoField = vue.resolveComponent("InfoField");

  return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [vue.createElementVNode("div", _hoisted_1$f, vue.toDisplayString(_ctx.formatDate(_ctx.model.created)), 1), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.model.fields.$values, function (field) {
    return vue.openBlock(), vue.createElementBlock("div", null, [_this.isFieldContainerReference(field) ? (vue.openBlock(), vue.createElementBlock("div", {
      key: 0,
      class: vue.normalizeClass(_ctx.cssClass(field))
    }, [vue.createVNode(_component_ReferenceField, {
      model: field
    }, null, 8, ["model"])], 2)) : (vue.openBlock(), vue.createElementBlock("div", {
      key: 1,
      class: vue.normalizeClass(["row", _ctx.cssClass(field)])
    }, [!_ctx.hideFieldNames ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$a, vue.toDisplayString(field.name.concatenatedContent), 1)) : vue.createCommentVNode("", true), vue.createElementVNode("div", _hoisted_3$6, [_this.isTextField(field) ? (vue.openBlock(), vue.createBlock(_component_TextField, {
      key: 0,
      model: field
    }, null, 8, ["model"])) : vue.createCommentVNode("", true), _this.isTextArea(field) ? (vue.openBlock(), vue.createBlock(_component_TextField, {
      key: 1,
      model: field
    }, null, 8, ["model"])) : vue.createCommentVNode("", true), _this.isEmailField(field) ? (vue.openBlock(), vue.createBlock(_component_EmailField, {
      key: 2,
      model: field
    }, null, 8, ["model"])) : vue.createCommentVNode("", true), _this.isOptionsField(field) ? (vue.openBlock(), vue.createBlock(_component_OptionsField, {
      key: 3,
      model: field
    }, null, 8, ["model"])) : vue.createCommentVNode("", true), _this.isDecimalField(field) ? (vue.openBlock(), vue.createBlock(_component_DecimalField, {
      key: 4,
      model: field
    }, null, 8, ["model"])) : vue.createCommentVNode("", true), _this.isIntegerField(field) ? (vue.openBlock(), vue.createBlock(_component_IntegerField, {
      key: 5,
      model: field
    }, null, 8, ["model"])) : vue.createCommentVNode("", true), _this.isDateField(field) ? (vue.openBlock(), vue.createBlock(_component_DateField, {
      key: 6,
      model: field
    }, null, 8, ["model"])) : vue.createCommentVNode("", true), _this.isMonolingualTextField(_ctx.model) ? (vue.openBlock(), vue.createBlock(_component_TextField, {
      key: 7,
      model: field
    }, null, 8, ["model"])) : vue.createCommentVNode("", true), _this.isAttachmentField(field) ? (vue.openBlock(), vue.createBlock(_component_AttachmentField, {
      key: 8,
      model: field
    }, null, 8, ["model"])) : vue.createCommentVNode("", true), _this.isInfoSection(field) ? (vue.openBlock(), vue.createBlock(_component_InfoField, {
      key: 9,
      model: field
    }, null, 8, ["model"])) : vue.createCommentVNode("", true), _this.isCompositeField(field) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$4, " CompositeField ")) : vue.createCommentVNode("", true), _this.isTableField(field) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$4, " TableField ")) : vue.createCommentVNode("", true)])], 2))]);
  }), 256))], 64);
}script$n.render = render$n;var script$m = vue.defineComponent({
  name: "ItemViewer",
  components: {
    FieldContainer: script$n
  },
  props: props,
  setup: function setup(p) {
    var store = useStore();
    var dataAttributes = p.dataAttributes;
    console.log('Item Viewer setup ...');
    console.log('props: ', JSON.stringify(p));
    var isAdmin = dataAttributes["is-admin"];
    console.log('isAdmin: ', isAdmin);
    var queryParams = p.queryParameters;
    store.commit(Mutations$4.SET_ID, queryParams.iid); //load the data

    store.dispatch(Actions$4.LOAD_ITEM);
    return {
      store: store,
      queryParams: queryParams,
      dataItem: vue.computed(function () {
        return store.getters.rootDataItem;
      }),
      isAdmin: isAdmin
    };
  },
  storeConfig: {
    state: state$3,
    actions: actions$4,
    mutations: mutations$4,
    getters: getters$4
  },
  methods: {
    changeItemState: function changeItemState(itemId) {
      if (confirm("Do you really want to delete this item?")) {
        // this.store.dispatch(Actions.DELETE_CHILD_INSTANCE, itemToRemove);
        console.log("id: " + itemId);
        this.store.dispatch(Actions$4.CHANGE_STATE, itemId);
      }
    }
  }
});var _hoisted_1$e = {
  key: 0,
  class: "text-right"
};
function render$m(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FieldContainer = vue.resolveComponent("FieldContainer");

  return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [_ctx.isAdmin ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$e, [vue.createElementVNode("span", {
    class: "fas fa-remove",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      _ctx.changeItemState(_ctx.queryParams.iid);
    })
  })])) : vue.createCommentVNode("", true), _ctx.dataItem ? (vue.openBlock(), vue.createBlock(_component_FieldContainer, {
    key: 1,
    model: _ctx.dataItem,
    class: "item"
  }, null, 8, ["model"])) : vue.createCommentVNode("", true)], 64);
}var css_248z$2 = "\n.field-name[data-v-19fa11d4] {\r\n        font-weight: bold !important;\n}\n.fa-remove[data-v-19fa11d4] {\r\n        color: red;\r\n        margin-left: 30px;\n}\r\n";
styleInject(css_248z$2);script$m.render = render$m;
script$m.__scopeId = "data-v-19fa11d4";var eIndexingStatus;

(function (eIndexingStatus) {
  eIndexingStatus[eIndexingStatus["InProgress"] = 1] = "InProgress";
  eIndexingStatus[eIndexingStatus["Ready"] = 2] = "Ready";
})(eIndexingStatus || (eIndexingStatus = {}));//import { Guid } from 'guid-typescript'

var state$2 = {
  indexingStatus: {
    pageIndexingStatus: eIndexingStatus.Ready,
    dataIndexingStatus: eIndexingStatus.Ready
  }
};var _mutations$2;

//Declare MutationTypes
var Mutations$3; //Create a mutation tree that implement all mutation interfaces

(function (Mutations) {
  Mutations["SET_REINDEX_PAGE_STATUS"] = "SET_REINDEX_PAGE_STATUS";
  Mutations["SET_REINDEX_DATA_STATUS"] = "SET_REINDEX_DATA_STATUS";
  Mutations["SET_REINDEX_STATUS"] = "SET_REINDEX_STATUS";
})(Mutations$3 || (Mutations$3 = {}));

var mutations$3 = (_mutations$2 = {}, _defineProperty(_mutations$2, Mutations$3.SET_REINDEX_PAGE_STATUS, function (state, payload) {
  console.log("SET_REINDEX_PAGE_STATUS: ", payload);
  state.indexingStatus.pageIndexingStatus = payload;
}), _defineProperty(_mutations$2, Mutations$3.SET_REINDEX_DATA_STATUS, function (state, payload) {
  console.log("SET_REINDEX_DATA_STATUS: ", payload);
  state.indexingStatus.dataIndexingStatus = payload;
}), _defineProperty(_mutations$2, Mutations$3.SET_REINDEX_STATUS, function (state, payload) {
  console.log("SET_REINDEX_STATUS: ", payload);
  state.indexingStatus = payload;
}), _mutations$2);var _actions$3;

var Actions$3;

(function (Actions) {
  Actions["REINDEX_DATA"] = "REINDEX_DATA";
  Actions["REINDEX_PAGES"] = "REINDEX_PAGES";
  Actions["FETCH_REINDEX_STATUS"] = "FETCH_REINDEX_STATUS";
})(Actions$3 || (Actions$3 = {}));

var actions$3 = (_actions$3 = {}, _defineProperty(_actions$3, Actions$3.REINDEX_DATA, function (store) {
  var api = window.location.origin + "/applets/api/reindex/data";
  store.commit(Mutations$3.SET_REINDEX_DATA_STATUS, eIndexingStatus.InProgress);
  fetch(api, {
    method: 'POST'
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    store.commit(Mutations$3.SET_REINDEX_DATA_STATUS, data);
  }).catch(function (error) {
    console.error('Data reindexing error:', error);
  });
}), _defineProperty(_actions$3, Actions$3.REINDEX_PAGES, function (store) {
  var api = window.location.origin + "/applets/api/reindex/pages";
  store.commit(Mutations$3.SET_REINDEX_PAGE_STATUS, eIndexingStatus.InProgress);
  fetch(api, {
    method: 'POST'
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    store.commit(Mutations$3.SET_REINDEX_PAGE_STATUS, data);
  }).catch(function (error) {
    console.error('Page reindexing error:', error);
  });
}), _defineProperty(_actions$3, Actions$3.FETCH_REINDEX_STATUS, function (store) {
  var api = window.location.origin + "/applets/api/reindex/status";
  fetch(api).then(function (response) {
    return response.json();
  }).then(function (data) {
    store.commit(Mutations$3.SET_REINDEX_STATUS, data);
  }).catch(function (error) {
    console.error('Fetch reindexing status error:', error);
  });
}), _actions$3);var getters$3 = {};var script$l = vue.defineComponent({
  name: "IndexingPanel",
  props: {},
  setup: function setup() {
    var store = useStore();
    return {
      reindexData: function reindexData() {
        return store.dispatch(Actions$3.REINDEX_DATA);
      },
      reindexPages: function reindexPages() {
        return store.dispatch(Actions$3.REINDEX_PAGES);
      },
      isPageIndexingReady: vue.computed(function () {
        return store.state.indexingStatus.pageIndexingStatus == eIndexingStatus.Ready;
      }),
      isDataIndexingReady: vue.computed(function () {
        return store.state.indexingStatus.dataIndexingStatus == eIndexingStatus.Ready;
      })
    };
  }
});var _hoisted_1$d = /*#__PURE__*/vue.createElementVNode("h5", {
  class: "card-title"
}, "Data Indexing", -1);

var _hoisted_2$9 = /*#__PURE__*/vue.createElementVNode("p", {
  class: "card-text"
}, "With supporting text below as a natural lead-in to additional content.", -1);

var _hoisted_3$5 = {
  key: 1,
  class: "btn btn-danger",
  disabled: ""
};

var _hoisted_4$3 = /*#__PURE__*/vue.createElementVNode("br", null, null, -1);

var _hoisted_5$3 = /*#__PURE__*/vue.createElementVNode("br", null, null, -1);

var _hoisted_6$3 = /*#__PURE__*/vue.createElementVNode("h5", {
  class: "card-title"
}, "Page Indexing", -1);

var _hoisted_7$2 = /*#__PURE__*/vue.createElementVNode("p", {
  class: "card-text"
}, "With supporting text below as a natural lead-in to additional content.", -1);

var _hoisted_8$2 = {
  key: 3,
  class: "btn btn-danger",
  disabled: ""
};
function render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [_hoisted_1$d, _hoisted_2$9, _ctx.isDataIndexingReady ? (vue.openBlock(), vue.createElementBlock("button", {
    key: 0,
    class: "btn btn-primary",
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.reindexData && _ctx.reindexData.apply(_ctx, arguments);
    })
  }, "Reindex")) : (vue.openBlock(), vue.createElementBlock("button", _hoisted_3$5, "Indexing In-progress")), _hoisted_4$3, _hoisted_5$3, _hoisted_6$3, _hoisted_7$2, _ctx.isPageIndexingReady ? (vue.openBlock(), vue.createElementBlock("button", {
    key: 2,
    class: "btn btn-primary",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.reindexPages && _ctx.reindexPages.apply(_ctx, arguments);
    })
  }, "Reindex")) : (vue.openBlock(), vue.createElementBlock("button", _hoisted_8$2, "Indexing In-progress"))], 64);
}script$l.render = render$l;var script$k = vue.defineComponent({
  name: "Applet",
  components: {
    IndexingPanel: script$l
  },
  props: props,
  setup: function setup(p) {
    console.log('Process Manager setup ...', p);
    var store = useStore();
    vue.onMounted(function () {
      return store.dispatch(Actions$3.FETCH_REINDEX_STATUS);
    });
  },
  storeConfig: {
    state: state$2,
    actions: actions$3,
    mutations: mutations$3,
    getters: getters$3
  }
});var _hoisted_1$c = {
  class: "card"
};

var _hoisted_2$8 = /*#__PURE__*/vue.createElementVNode("div", {
  class: "card-header"
}, " Indexing Processes ", -1);

var _hoisted_3$4 = {
  class: "card-body"
};
function render$k(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_IndexingPanel = vue.resolveComponent("IndexingPanel");

  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$c, [_hoisted_2$8, vue.createElementVNode("div", _hoisted_3$4, [vue.createVNode(_component_IndexingPanel)])]);
}script$k.render = render$k;var _mutations$1;

//Declare MutationTypes
var Mutations$2; //Create a mutation tree that implement all mutation interfaces

(function (Mutations) {
  Mutations["SET_SOURCE"] = "SET_SOURCE";
  Mutations["SET_MODEL"] = "SET_MODEL";
})(Mutations$2 || (Mutations$2 = {}));

var mutations$2 = (_mutations$1 = {}, _defineProperty(_mutations$1, Mutations$2.SET_SOURCE, function (state, payload) {
  state.pageId = payload.pageId;
  state.blockId = payload.blockId;
}), _defineProperty(_mutations$1, Mutations$2.SET_MODEL, function (state, payload) {
  state.model = payload;
}), _mutations$1);var _actions$2;

var Actions$2;

(function (Actions) {
  Actions["LOAD_BLOCK"] = "LOAD_BLOCK";
  Actions["LOAD_PAGE"] = "LOAD_PAGE";
})(Actions$2 || (Actions$2 = {}));

var actions$2 = (_actions$2 = {}, _defineProperty(_actions$2, Actions$2.LOAD_BLOCK, function (store) {
  if (!store.state.pageId) console.error("Page ID is null. It must be a valid GUID");
  if (!store.state.blockId) console.error("Block ID is null. It must be a valid GUID");
  var api = window.location.origin + "/applets/api/content/page/".concat(store.state.pageId, "/block/").concat(store.state.blockId);
  console.log('LOAD_BLOCK API: ', api);
  fetch(api, {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    store.commit(Mutations$2.SET_MODEL, data);
  }).catch(function (error) {
    console.error('LOAD_BLOCK error:', error);
  });
}), _defineProperty(_actions$2, Actions$2.LOAD_PAGE, function (store) {
  if (!store.state.pageId) throw new Error("Page ID is null. It must be a valid GUID");
  var api = window.location.origin + "/applets/api/content/page/".concat(store.state.pageId);
  console.log('LOAD_PAGE API: ', api);
  fetch(api, {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    store.commit(Mutations$2.SET_MODEL, data);
  }).catch(function (error) {
    console.error('LOAD_PAGE error:', error);
  });
}), _actions$2);var getters$2 = {
  //  items: (state): Item[] | undefined => {
  //    return state.searchResult?.items
  //  },
  searchParamStorageKey: function searchParamStorageKey(state) {
    var _state$blockId;

    return ((_state$blockId = state.blockId) === null || _state$blockId === void 0 ? void 0 : _state$blockId.toString()) + "SearchParams";
  }
};var script$j = vue.defineComponent({
  name: "ImgDiv",
  props: {
    image: {
      type: Object,
      required: true
    },
    debounceMs: {
      type: Number,
      required: false,
      default: 200
    }
  },
  methods: {
    resizeHandler: function resizeHandler() {
      this.setViewHeight(false);
    },
    setViewHeight: function setViewHeight(immediate) {
      var _this = this;

      if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
      var delay = immediate ? 0 : this.debounceMs;
      this.resizeTimeout = setTimeout(function () {
        if (_this.root) {
          var h = Math.round(_this.root.clientWidth / _this.aspectRatio);
          _this.root.style.height = "".concat(h, "px");
        }
      }, delay);
    }
  },
  created: function created() {
    window.addEventListener("resize", this.resizeHandler); //console.log("Added resize event listener")
  },
  destroyed: function destroyed() {
    window.removeEventListener("resize", this.resizeHandler); //console.log("Removed resize event listener")
  },
  mounted: function mounted() {
    this.setViewHeight(true);
  },
  setup: function setup(props) {
    //console.log("ImgDiv setup ...")
    var _toRefs = vue.toRefs(props),
        image = _toRefs.image;

    var root = vue.ref();
    var resizeTimeout = vue.ref();
    return {
      root: root,
      imageUrl: vue.computed(function () {
        var _image$value, _image$value$publicUr;

        return (_image$value = image.value) === null || _image$value === void 0 ? void 0 : (_image$value$publicUr = _image$value.publicUrl) === null || _image$value$publicUr === void 0 ? void 0 : _image$value$publicUr.replace(/^~+/g, '');
      }),
      //NOTE: the REGEXP replaces any leading ~ characters
      aspectRatio: vue.computed(function () {
        return image.value ? image.value.width / image.value.height : 1;
      }),
      resizeTimeout: resizeTimeout
    };
  }
});var _hoisted_1$b = ["id"];
function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "root",
    style: vue.normalizeStyle([{
      backgroundImage: "url(".concat(_ctx.imageUrl, ")")
    }, {
      "background-size": "cover"
    }]),
    id: _ctx.image.id,
    class: "cf-img-div"
  }, null, 12, _hoisted_1$b);
}script$j.render = render$j;var script$i = vue.defineComponent({
  name: "CardTemplate",
  components: {
    ImgDiv: script$j
  },
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var _toRefs = vue.toRefs(props),
        model = _toRefs.model;

    return {
      model: model,
      cardImage: vue.computed(function () {
        var _model$value;

        return (_model$value = model.value) === null || _model$value === void 0 ? void 0 : _model$value.cardImage.media;
      }),
      popupImageUrl: vue.computed(function () {
        var _model$value2, _model$value2$modalIm, _model$value2$modalIm2;

        return (_model$value2 = model.value) === null || _model$value2 === void 0 ? void 0 : (_model$value2$modalIm = _model$value2.modalImage) === null || _model$value2$modalIm === void 0 ? void 0 : (_model$value2$modalIm2 = _model$value2$modalIm.media) === null || _model$value2$modalIm2 === void 0 ? void 0 : _model$value2$modalIm2.publicUrl;
      }),
      title: vue.computed(function () {
        var _model$value3;

        return (_model$value3 = model.value) === null || _model$value3 === void 0 ? void 0 : _model$value3.cardTitle.value;
      }),
      subTitle: vue.computed(function () {
        var _model$value4;

        return (_model$value4 = model.value) === null || _model$value4 === void 0 ? void 0 : _model$value4.cardSubTitle.value;
      }),
      hasModel: vue.computed(function () {
        return model.value.hasAModal;
      }),
      modelImage: vue.computed(function () {
        var _model$value5;

        return (_model$value5 = model.value) === null || _model$value5 === void 0 ? void 0 : _model$value5.modalImage;
      }),
      modalTitle: vue.computed(function () {
        var _model$value6;

        return (_model$value6 = model.value) === null || _model$value6 === void 0 ? void 0 : _model$value6.modalTitle.value;
      }),
      modalSubTitle: vue.computed(function () {
        var _model$value7;

        return (_model$value7 = model.value) === null || _model$value7 === void 0 ? void 0 : _model$value7.modalSubTitle.value;
      })
    };
  }
});var _hoisted_1$a = {
  class: "col-md-4 cf-card"
};
function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_img_div = vue.resolveComponent("img-div");

  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$a, [vue.createVNode(_component_img_div, {
    image: _ctx.cardImage,
    "debounce-ms": 250,
    class: "img-div"
  }, null, 8, ["image"]), vue.createElementVNode("h2", null, vue.toDisplayString(_ctx.title), 1), vue.createElementVNode("h4", null, vue.toDisplayString(_ctx.subTitle), 1)]);
}var css_248z$1 = "\n.cf-card{\r\n        text-align:center;\n}\r\n";
styleInject(css_248z$1);script$i.render = render$i;var script$h = vue.defineComponent({
  name: "Applet",
  components: {
    CardTemplate: script$i
  },
  props: props,
  setup: function setup(p) {
    console.log('Grid setup ...');
    var store = useStore(); //Storing the page and block IDs in the store

    store.commit(Mutations$2.SET_SOURCE, {
      pageId: p.pageId,
      blockId: p.blockId
    }); //When the component is mounted, load the grid contents.

    vue.onMounted(function () {
      return store.dispatch(Actions$2.LOAD_BLOCK);
    });
    return {
      model: vue.computed(function () {
        return store.state.model;
      })
    };
  },
  storeConfig: {
    actions: actions$2,
    mutations: mutations$2,
    getters: getters$2
  }
});var _hoisted_1$9 = /*#__PURE__*/vue.createElementVNode("h2", null, "Grid", -1);

var _hoisted_2$7 = {
  class: "row"
};
function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model;

  var _component_CardTemplate = vue.resolveComponent("CardTemplate");

  return vue.openBlock(), vue.createElementBlock("div", null, [_hoisted_1$9, vue.createElementVNode("div", _hoisted_2$7, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList((_ctx$model = _ctx.model) === null || _ctx$model === void 0 ? void 0 : _ctx$model.items, function (card) {
    return vue.openBlock(), vue.createBlock(_component_CardTemplate, {
      model: card
    }, null, 8, ["model"]);
  }), 256))])]);
}script$h.render = render$h;var guid = createCommonjsModule(function (module, exports) {
exports.__esModule = true;
var Guid = /** @class */ (function () {
    function Guid(guid) {
        if (!guid) {
            throw new TypeError("Invalid argument; `value` has no value.");
        }
        this.value = Guid.EMPTY;
        if (guid && Guid.isGuid(guid)) {
            this.value = guid;
        }
    }
    Guid.isGuid = function (guid) {
        var value = guid.toString();
        return guid && (guid instanceof Guid || Guid.validator.test(value));
    };
    Guid.create = function () {
        return new Guid([Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join("-"));
    };
    Guid.createEmpty = function () {
        return new Guid("emptyguid");
    };
    Guid.parse = function (guid) {
        return new Guid(guid);
    };
    Guid.raw = function () {
        return [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join("-");
    };
    Guid.gen = function (count) {
        var out = "";
        for (var i = 0; i < count; i++) {
            // tslint:disable-next-line:no-bitwise
            out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return out;
    };
    Guid.prototype.equals = function (other) {
        // Comparing string `value` against provided `guid` will auto-call
        // toString on `guid` for comparison
        return Guid.isGuid(other) && this.value === other.toString();
    };
    Guid.prototype.isEmpty = function () {
        return this.value === Guid.EMPTY;
    };
    Guid.prototype.toString = function () {
        return this.value;
    };
    Guid.prototype.toJSON = function () {
        return {
            value: this.value
        };
    };
    Guid.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");
    Guid.EMPTY = "00000000-0000-0000-0000-000000000000";
    return Guid;
}());
exports.Guid = Guid;
});

var guid$1 = guid;var eSubmissionStatus;

(function (eSubmissionStatus) {
  eSubmissionStatus["None"] = "None";
  eSubmissionStatus["InProgress"] = "InProgress";
  eSubmissionStatus["Success"] = "Success";
  eSubmissionStatus["Fail"] = "Fail";
})(eSubmissionStatus || (eSubmissionStatus = {}));

var FlattenedFormFiledMutations;

(function (FlattenedFormFiledMutations) {
  FlattenedFormFiledMutations["SET_TEXT_VALUE"] = "SET_TEXT_VALUE";
  FlattenedFormFiledMutations["SET_OPTION_VALUE"] = "SET_OPTION_VALUE";
})(FlattenedFormFiledMutations || (FlattenedFormFiledMutations = {}));

var FieldContainerUtils = /*#__PURE__*/function () {
  function FieldContainerUtils() {
    _classCallCheck(this, FieldContainerUtils);
  }

  _createClass(FieldContainerUtils, null, [{
    key: "cssClass",
    value: function cssClass(field) {
      return field.cssClass + " " + field.fieldCssClass;
    }
  }, {
    key: "getFieldType",
    value: function getFieldType(field) {
      var _typeName;

      var typeName = field === null || field === void 0 ? void 0 : field.$type.substring(0, field.$type.indexOf(","));
      typeName = (_typeName = typeName) === null || _typeName === void 0 ? void 0 : _typeName.substring(typeName.lastIndexOf(".") + 1);
      return eFieldType[typeName];
    }
  }, {
    key: "isAttachmentField",
    value: function isAttachmentField(field) {
      return this.getFieldType(field) === eFieldType.AttachmentField;
    }
  }, {
    key: "isOptionsField",
    value: function isOptionsField(field) {
      var fieldType = this.getFieldType(field);
      return fieldType === eFieldType.CheckboxField || fieldType === eFieldType.RadioField || fieldType === eFieldType.SelectField;
    }
  }, {
    key: "isCompositeField",
    value: function isCompositeField(field) {
      return this.getFieldType(field) === eFieldType.CompositeField;
    }
  }, {
    key: "isDateField",
    value: function isDateField(field) {
      return this.getFieldType(field) === eFieldType.DateField;
    }
  }, {
    key: "isDecimalField",
    value: function isDecimalField(field) {
      return this.getFieldType(field) === eFieldType.DecimalField;
    }
  }, {
    key: "isEmailField",
    value: function isEmailField(field) {
      return this.getFieldType(field) === eFieldType.EmailField;
    }
  }, {
    key: "isFieldContainerReference",
    value: function isFieldContainerReference(field) {
      return this.getFieldType(field) === eFieldType.FieldContainerReference;
    }
  }, {
    key: "isInfoSection",
    value: function isInfoSection(field) {
      return this.getFieldType(field) === eFieldType.InfoSection;
    }
  }, {
    key: "isIntegerField",
    value: function isIntegerField(field) {
      return this.getFieldType(field) === eFieldType.IntegerField;
    }
  }, {
    key: "isMonolingualTextField",
    value: function isMonolingualTextField(field) {
      return this.getFieldType(field) === eFieldType.MonolingualTextField;
    }
  }, {
    key: "isTableField",
    value: function isTableField(field) {
      return this.getFieldType(field) === eFieldType.TableField;
    }
  }, {
    key: "isTextArea",
    value: function isTextArea(field) {
      return this.getFieldType(field) === eFieldType.TextArea;
    }
  }, {
    key: "isTextField",
    value: function isTextField(field) {
      return this.getFieldType(field) === eFieldType.TextField;
    }
  }, {
    key: "isAudioRecorderField",
    value: function isAudioRecorderField(field) {
      return this.getFieldType(field) === eFieldType.AudioRecorderField;
    }
  }]);

  return FieldContainerUtils;
}();
function flattenFieldInputs(container, state) {
  var _container$fields, _container$fields$$va;

  //Populating the flattenedTextModels and flattenedOptionModels arrays
  container === null || container === void 0 ? void 0 : (_container$fields = container.fields) === null || _container$fields === void 0 ? void 0 : (_container$fields$$va = _container$fields.$values) === null || _container$fields$$va === void 0 ? void 0 : _container$fields$$va.forEach(function (value) {
    var _value$$type;

    //Try to parse the field type into eFieldType
    var absTypeStr = (_value$$type = value.$type) === null || _value$$type === void 0 ? void 0 : _value$$type.substring(0, value.$type.indexOf(","));
    var fieldTypeStr = absTypeStr.substring(absTypeStr.lastIndexOf(".") + 1);
    var fieldType = eFieldType[fieldTypeStr];
    var isMonoLinqualField = fieldType === eFieldType.DateField || fieldType === eFieldType.DecimalField || fieldType === eFieldType.EmailField || fieldType === eFieldType.IntegerField || fieldType === eFieldType.MonolingualTextField;
    var isMultilingualField = fieldType === eFieldType.TextArea || fieldType === eFieldType.TextField;
    var isOptionsField = fieldType === eFieldType.CheckboxField || fieldType === eFieldType.RadioField || fieldType === eFieldType.SelectField;

    if (isMonoLinqualField) {
      var _values, _values$$values;

      //Iterating through each text value and adding them to the flattened dictionary
      (_values = value.values) === null || _values === void 0 ? void 0 : (_values$$values = _values.$values) === null || _values$$values === void 0 ? void 0 : _values$$values.forEach(function (txtVal) {
        state.flattenedTextModels[txtVal.id.toString()] = txtVal;
      });
    } else if (isMultilingualField) {
      var _values2, _values2$$values;

      //Iterating through each value as a multilingual field
      (_values2 = value.values) === null || _values2 === void 0 ? void 0 : (_values2$$values = _values2.$values) === null || _values2$$values === void 0 ? void 0 : _values2$$values.forEach(function (multilingualVal) {
        var _multilingualVal$valu, _multilingualVal$valu2;

        //Iterating through each text value and adding them to the flattened dictionary
        (_multilingualVal$valu = multilingualVal.values) === null || _multilingualVal$valu === void 0 ? void 0 : (_multilingualVal$valu2 = _multilingualVal$valu.$values) === null || _multilingualVal$valu2 === void 0 ? void 0 : _multilingualVal$valu2.forEach(function (txtVal) {
          state.flattenedTextModels[txtVal.id.toString()] = txtVal;
        });
      });
    } else if (isOptionsField) {
      var _options, _options$$values;

      //Itenrating through each option and adding them to the flattened options dictionary
      (_options = value.options) === null || _options === void 0 ? void 0 : (_options$$values = _options.$values) === null || _options$$values === void 0 ? void 0 : _options$$values.forEach(function (opt) {
        state.flattenedOptionModels[opt.id.toString()] = opt;
      });
    }
  }); //console.log("flattenedTextModels\n", JSON.stringify(state.flattenedTextModels))
  //console.log("flattenedOptionModels\n", JSON.stringify(state.flattenedOptionModels))
}
function clearForm(state) {
  //Iterate through all Text elements in state.flattenedTextModels 
  Object.keys(state.flattenedTextModels).forEach(function (key) {
    state.flattenedTextModels[key].value = '';
  }); // Iterate through all Option elements in state.flattenedOptionModels

  Object.keys(state.flattenedOptionModels).forEach(function (key) {
    state.flattenedOptionModels[key].selected = false;
  });
}
function isRequiredField(field) {
  return field !== null && field !== void 0 && field.required ? field.required : false;
}
function isRichTextField(field) {
  return field !== null && field !== void 0 && field.richText ? field.richText : false;
}var state$1 = {
  itemTemplateId: null,
  formId: null,
  collectionId: null,
  groupId: null,
  form: null,
  flattenedTextModels: {},
  flattenedOptionModels: {},
  submissionStatus: eSubmissionStatus.None,
  formLoadAPI: null,
  formSubmissionAPI: null
};var state = _objectSpread2$1({
  itemInstanceId: null,
  childResponseFormId: null,
  childResponseForm: null,
  formInstances: null
}, state$1);var RegExpressions = function RegExpressions() {
  _classCallCheck(this, RegExpressions);
};

_defineProperty(RegExpressions, "Email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/);

_defineProperty(RegExpressions, "Number", /^\d+$/);

_defineProperty(RegExpressions, "Decimal", /^[+-]?(\d+\.?\d*|\.\d+)$/);

function validateMultilingualTextField(field) {
  //If the field itself is not a required field, any contents in inner fields 
  //will be valid, including none
  if (!field.required) return eValidationStatus.VALID; //We are here means, this is a required field. This means, we need to make sure
  //the field (which can potentially have multiple values) has at least one value
  //in at least one language.

  var valueFound = false;

  for (var i = 0; !valueFound && field !== null && field !== void 0 && field.values && i < ((_field$values = field.values) === null || _field$values === void 0 ? void 0 : (_field$values$$values = _field$values.$values) === null || _field$values$$values === void 0 ? void 0 : _field$values$$values.length); ++i) {
    var _field$values, _field$values$$values, _field$values2;

    var txtCollection = field === null || field === void 0 ? void 0 : (_field$values2 = field.values) === null || _field$values2 === void 0 ? void 0 : _field$values2.$values[i];

    for (var k = 0; !valueFound && txtCollection.values && k < ((_txtCollection$values = txtCollection.values) === null || _txtCollection$values === void 0 ? void 0 : _txtCollection$values.$values.length); ++k) {
      var _txtCollection$values, _txtCollection$values2, _txtCollection$values3, _txtCollection$values4;

      valueFound = ((_txtCollection$values2 = txtCollection.values) === null || _txtCollection$values2 === void 0 ? void 0 : (_txtCollection$values3 = _txtCollection$values2.$values[k]) === null || _txtCollection$values3 === void 0 ? void 0 : (_txtCollection$values4 = _txtCollection$values3.value) === null || _txtCollection$values4 === void 0 ? void 0 : _txtCollection$values4.trim().length) > 0;
    }
  } //Validation is successful as long as some value is in an inner field.


  return valueFound ? eValidationStatus.VALID : eValidationStatus.VALUE_REQUIRED;
}
function validateMonolingualTextField(field, validationRegExp) {
  //Go through each value in the monolingual field. Set valueFound to true if at least one value is found.
  //If validationRegExp is specified, then validate each non-empty value against the validationRegExp.
  //If any reg-exp validations failed, then set the final validation result to validation error.
  var valueFound = false;
  var validationStatus = eValidationStatus.VALID;

  for (var i = 0; field !== null && field !== void 0 && field.values && i < ((_field$values3 = field.values) === null || _field$values3 === void 0 ? void 0 : _field$values3.$values.length); ++i) {
    var _field$values3, _field$values$$values2, _field$values$$values3;

    var valStr = (_field$values$$values2 = field.values.$values[i]) === null || _field$values$$values2 === void 0 ? void 0 : (_field$values$$values3 = _field$values$$values2.value) === null || _field$values$$values3 === void 0 ? void 0 : _field$values$$values3.trim();

    if ((valStr === null || valStr === void 0 ? void 0 : valStr.length) > 0) {
      valueFound = true;
      if (validationRegExp && !validationRegExp.test(valStr)) validationStatus = eValidationStatus.INVALID;
    }
  }

  if (field.required && !valueFound) validationStatus = eValidationStatus.VALUE_REQUIRED; //Validation is successful as long as some value is in an inner field.

  return validationStatus;
}
function validateMonolingualNumberField(field) {
  //Go through each value in the monolingual field. Set valueFound to true if at least one value is found.
  var valueFound = false;
  var validationStatus = eValidationStatus.VALID;

  for (var i = 0; field !== null && field !== void 0 && field.values && i < ((_field$values4 = field.values) === null || _field$values4 === void 0 ? void 0 : _field$values4.$values.length); ++i) {
    var _field$values4, _field$values$$values4;

    var valStr = (_field$values$$values4 = field.values.$values[i]) === null || _field$values$$values4 === void 0 ? void 0 : _field$values$$values4.value; //if it's empty or null the typeof will not return string 'number'

    if (typeof valStr === 'number') {
      valueFound = true; // console.log("type: number")
    }
  }

  if (field.required && !valueFound) validationStatus = eValidationStatus.VALUE_REQUIRED; //Validation is successful as long as some value is in an inner field.

  return validationStatus;
}
function validateOptionsField(field) {
  //If the field itself is not a required field, no need to select a value, so the field is always valid
  if (!field.required) return eValidationStatus.VALID;
  var selectionFound = false;

  for (var i = 0; !selectionFound && (_field$options = field.options) !== null && _field$options !== void 0 && _field$options.$values && i < ((_field$options2 = field.options) === null || _field$options2 === void 0 ? void 0 : (_field$options2$$valu = _field$options2.$values) === null || _field$options2$$valu === void 0 ? void 0 : _field$options2$$valu.length); ++i) {
    var _field$options, _field$options2, _field$options2$$valu, _field$options3;

    selectionFound = (_field$options3 = field.options) === null || _field$options3 === void 0 ? void 0 : _field$options3.$values[i].selected;
  }

  return selectionFound ? eValidationStatus.VALID : eValidationStatus.VALUE_REQUIRED;
}
function validateFields(form) {
  var _form$fields, _form$fields$$values;

  var valid = true;
  (_form$fields = form.fields) === null || _form$fields === void 0 ? void 0 : (_form$fields$$values = _form$fields.$values) === null || _form$fields$$values === void 0 ? void 0 : _form$fields$$values.forEach(function (field) {
    switch (FieldContainerUtils.getFieldType(field)) {
      case eFieldType.AttachmentField:
        break;

      case eFieldType.CheckboxField:
      case eFieldType.RadioField:
      case eFieldType.SelectField:
        field.validationStatus = validateOptionsField(field);
        break;

      case eFieldType.CompositeField:
        break;

      case eFieldType.DateField:
        field.validationStatus = validateMonolingualTextField(field, null);
        break;

      case eFieldType.DecimalField:
      case eFieldType.IntegerField:
        field.validationStatus = validateMonolingualNumberField(field);
        break;

      case eFieldType.EmailField:
        field.validationStatus = validateMonolingualTextField(field, RegExpressions.Email);
        break;

      case eFieldType.FieldContainerReference:
        break;
      //case eFieldType.IntegerField:
      //    field.validationStatus = validateMonolingualNumberField(field as MonolingualTextField);
      //    break;

      case eFieldType.MonolingualTextField:
        field.validationStatus = validateMonolingualTextField(field, null);
        break;
      //case eFieldType.RadioField:
      //    field.validationStatus = validateOptionsField(field as OptionsField);
      //    break;
      //case eFieldType.SelectField:
      //    field.validationStatus = validateOptionsField(field as OptionsField);
      //    break;

      case eFieldType.TableField:
        break;

      case eFieldType.TextArea:
        field.validationStatus = validateMultilingualTextField(field);
        break;

      case eFieldType.TextField:
        field.validationStatus = validateMultilingualTextField(field);
        break;

      case eFieldType.AudioRecorderField:
        field.validationStatus = eValidationStatus.VALID;
        break;
    }

    valid = valid && field.validationStatus === eValidationStatus.VALID;
  });
  form.validationStatus = valid ? null : eValidationStatus.INVALID;
  return valid;
}var _mutations;
//    None = "None",
//    InProgress = "InProgress",
//    Success = "Success",
//    Fail = "Fail"
//}
//Declare MutationTypes

var Mutations$1; //Create a mutation tree that implement all mutation interfaces

(function (Mutations) {
  Mutations["CLEAR_FLATTENED_FIELD_MODELS"] = "CLEAR_FLATTENED_FIELD_mODELS";
  Mutations["SET_ITEM_TEMPLATE_ID"] = "SET_ITEM_TEMPLATE_ID";
  Mutations["SET_FORM_ID"] = "SET_FORM_ID";
  Mutations["SET_FORM"] = "SET_FORM";
  Mutations["SET_SUBMISSION_STATUS"] = "SET_SUBMISSION_STATUS";
  Mutations["SET_COLLECTION_ID"] = "SET_COLLECTION_ID";
  Mutations["SET_GROUP_ID"] = "SET_GROUP_ID";
})(Mutations$1 || (Mutations$1 = {}));

var mutations$1 = (_mutations = {}, _defineProperty(_mutations, Mutations$1.CLEAR_FLATTENED_FIELD_MODELS, function (state) {
  state.flattenedTextModels = {};
  state.flattenedOptionModels = {};
}), _defineProperty(_mutations, Mutations$1.SET_ITEM_TEMPLATE_ID, function (state, payload) {
  state.itemTemplateId = payload;
}), _defineProperty(_mutations, Mutations$1.SET_FORM_ID, function (state, payload) {
  state.formId = payload;
}), _defineProperty(_mutations, Mutations$1.SET_COLLECTION_ID, function (state, payload) {
  state.collectionId = payload;
}), _defineProperty(_mutations, Mutations$1.SET_GROUP_ID, function (state, payload) {
  state.groupId = payload;
}), _defineProperty(_mutations, Mutations$1.SET_FORM, function (state, payload) {
  state.form = payload;
  flattenFieldInputs(state.form, state); //console.log("state\n", JSON.stringify(state))
}), _defineProperty(_mutations, FlattenedFormFiledMutations.SET_TEXT_VALUE, function (state, payload) {
  var _state$form;

  //console.log("payload id:", payload.id, "   payload value: ", payload.val)
  state.flattenedTextModels[payload.id.toString()].value = payload.val; //console.log("state flattenedTextModels", JSON.stringify(state.flattenedTextModels))
  //Re-validating the form

  if (((_state$form = state.form) === null || _state$form === void 0 ? void 0 : _state$form.validationStatus) === eValidationStatus.INVALID) validateFields(state.form);
}), _defineProperty(_mutations, FlattenedFormFiledMutations.SET_OPTION_VALUE, function (state, payload) {
  state.flattenedOptionModels[payload.id.toString()].selected = payload.isSelected;
}), _defineProperty(_mutations, Mutations$1.SET_SUBMISSION_STATUS, function (state, status) {
  //const fieldType: eFieldType = eFieldType[fieldTypeStr as keyof typeof eFieldType];
  state.submissionStatus = eSubmissionStatus[status];
}), _mutations);var _objectSpread2;

var Mutations; //Create a mutation tree that implement all mutation interfaces

(function (Mutations) {
  Mutations["SET_SUBMISSIONS"] = "SET_SUBMISSIONS";
  Mutations["SET_PARENT_ITEM_ID"] = "SET_PARENT_ITEM_ID";
  Mutations["APPEND_CHILD_INSTANCE"] = "APPEND_CHILD_INSTANCE";
  Mutations["SET_RESPONSE_FORM_ID"] = "SET_RESPONSE_FORM_ID";
  Mutations["SET_RESPONSE_FORM"] = "SET_RESPONSE_FORM";
  Mutations["APPEND_CHILD_RESPONSE_INSTANCE"] = "APPEND_CHILD_RESPONSE_INSTANCE";
  Mutations["DELETE_CHILD_RESPONSE_INSTANCE"] = "DELETE_CHILD_RESPONSE_INSTANCE";
  Mutations["DELETE_CHILD_INSTANCE"] = "DELETE_CHILD_INSTANCE";
})(Mutations || (Mutations = {}));

var mutations = _objectSpread2$1((_objectSpread2 = {}, _defineProperty(_objectSpread2, Mutations.SET_SUBMISSIONS, function (state, payload) {
  state.formInstances = payload;
}), _defineProperty(_objectSpread2, Mutations.SET_PARENT_ITEM_ID, function (state, payload) {
  state.itemInstanceId = payload;
}), _defineProperty(_objectSpread2, Mutations.APPEND_CHILD_INSTANCE, function (state, payload) {
  var _state$formInstances;

  (_state$formInstances = state.formInstances) === null || _state$formInstances === void 0 ? void 0 : _state$formInstances.$values.unshift(payload);
}), _defineProperty(_objectSpread2, Mutations.SET_RESPONSE_FORM_ID, function (state, payload) {
  state.childResponseFormId = payload;
}), _defineProperty(_objectSpread2, Mutations.SET_RESPONSE_FORM, function (state, payload) {
  state.childResponseForm = payload;
  flattenFieldInputs(state.childResponseForm, state);
}), _defineProperty(_objectSpread2, Mutations.APPEND_CHILD_RESPONSE_INSTANCE, function (state, payload) {
  var _state$formInstances2;

  var parent = (_state$formInstances2 = state.formInstances) === null || _state$formInstances2 === void 0 ? void 0 : _state$formInstances2.$values.find(function (inst) {
    return inst.id === (payload === null || payload === void 0 ? void 0 : payload.parentId);
  });

  if (parent) {
    var _parent$childFieldCon;

    (_parent$childFieldCon = parent.childFieldContainers) === null || _parent$childFieldCon === void 0 ? void 0 : _parent$childFieldCon.$values.push(payload);
  }
}), _defineProperty(_objectSpread2, Mutations.DELETE_CHILD_RESPONSE_INSTANCE, function (state, payload) {
  var _state$formInstances3;

  var parent = (_state$formInstances3 = state.formInstances) === null || _state$formInstances3 === void 0 ? void 0 : _state$formInstances3.$values.find(function (inst) {
    return inst.id === (payload === null || payload === void 0 ? void 0 : payload.parentId);
  });

  if (parent) {
    var _parent$childFieldCon2, _parent$childFieldCon3;

    var indexToRemove = parent === null || parent === void 0 ? void 0 : (_parent$childFieldCon2 = parent.childFieldContainers) === null || _parent$childFieldCon2 === void 0 ? void 0 : _parent$childFieldCon2.$values.indexOf(payload); //console.log("index to remove " + indexToRemove);

    if (indexToRemove >= 0) (_parent$childFieldCon3 = parent.childFieldContainers) === null || _parent$childFieldCon3 === void 0 ? void 0 : _parent$childFieldCon3.$values.splice(indexToRemove, 1);
  }
}), _defineProperty(_objectSpread2, Mutations.DELETE_CHILD_INSTANCE, function (state, payload) {
  var _state$formInstances4, _state$formInstances5;

  var indexToRemove = (_state$formInstances4 = state.formInstances) === null || _state$formInstances4 === void 0 ? void 0 : (_state$formInstances5 = _state$formInstances4.$values) === null || _state$formInstances5 === void 0 ? void 0 : _state$formInstances5.indexOf(payload);

  if (typeof indexToRemove !== 'undefined' && indexToRemove >= 0) {
    var _state$formInstances6;

    (_state$formInstances6 = state.formInstances) === null || _state$formInstances6 === void 0 ? void 0 : _state$formInstances6.$values.splice(indexToRemove, 1);
  }
}), _objectSpread2), mutations$1);var _actions$1;
//Declare ActionTypes
var Actions$1;

(function (Actions) {
  Actions["LOAD_FORM"] = "LOAD_FORM";
  Actions["LOAD_SUBMISSIONS"] = "LOAD_SUBMISSIONS";
  Actions["LOAD_RESPONSE_FORM"] = "LOAD_RESPONSE_FORM";
  Actions["SUBMIT_CHILD_FORM"] = "SUBMIT_CHILD_FORM";
  Actions["SUBMIT_CHILD_RESPONSE_FORM"] = "SUBMIT_CHILD_RESPONSE_FORM";
  Actions["DELETE_CHILD_RESPONSE_INSTANCE"] = "DELETE_CHILD_RESPONSE_INSTANCE";
  Actions["DELETE_CHILD_INSTANCE"] = "DELETE_CHILD_INSTANCE";
})(Actions$1 || (Actions$1 = {}));

var actions$1 = (_actions$1 = {}, _defineProperty(_actions$1, Actions$1.LOAD_FORM, function (store) {
  var api = window.location.origin + "/applets/api/itemeditor/getchildform/".concat(store.state.itemInstanceId, "/").concat(store.state.formId);
  fetch(api).then(function (response) {
    return response.json();
  }).then(function (data) {
    store.commit(Mutations$1.SET_FORM, data);
  }).catch(function (error) {
    console.error('Actions.LOAD_FORM Error: ', error);
  });
}), _defineProperty(_actions$1, Actions$1.LOAD_RESPONSE_FORM, function (store) {
  var api = window.location.origin + "/applets/api/itemeditor/getchildform/".concat(store.state.itemInstanceId, "/").concat(store.state.childResponseFormId);
  fetch(api).then(function (response) {
    return response.json();
  }).then(function (data) {
    store.commit(Mutations.SET_RESPONSE_FORM, data);
  }).catch(function (error) {
    console.error('Actions.LOAD_FORM Error: ', error);
  });
}), _defineProperty(_actions$1, Actions$1.LOAD_SUBMISSIONS, function (store) {
  var api = window.location.origin + "/applets/api/itemeditor/getchildformsubmissions/".concat(store.state.itemInstanceId, "/").concat(store.state.formId);
  console.log('Child Submissions Load API: ', api);
  fetch(api).then(function (response) {
    return response.json();
  }).then(function (data) {
    store.commit(Mutations.SET_SUBMISSIONS, data);
  }).catch(function (error) {
    console.error('Submission loading error:', error);
  });
}), _defineProperty(_actions$1, Actions$1.SUBMIT_CHILD_FORM, function (store) {
  //Validating the form
  if (!store.state.form || !validateFields(store.state.form)) return;
  store.commit(Mutations$1.SET_SUBMISSION_STATUS, "InProgress");
  var api = window.location.origin + "/applets/api/itemeditor/appendchildforminstance/".concat(store.state.itemInstanceId);
  var formData = new FormData();
  formData.append('datamodel', JSON.stringify(store.state.form));
  fetch(api, {
    body: formData,
    method: "post"
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    var flattenModel = {
      flattenedOptionModels: store.state.flattenedOptionModels,
      flattenedTextModels: store.state.flattenedTextModels
    }; //clear the form content

    clearForm(flattenModel);
    store.commit(Mutations.APPEND_CHILD_INSTANCE, data);
    store.commit(Mutations$1.SET_SUBMISSION_STATUS, "Success");
  }).catch(function (error) {
    store.commit(Mutations$1.SET_SUBMISSION_STATUS, "Fail");
    console.log(error);
  });
}), _defineProperty(_actions$1, Actions$1.SUBMIT_CHILD_RESPONSE_FORM, function (store, parentId) {
  //Validating the form
  if (!store.state.childResponseForm || !validateFields(store.state.childResponseForm)) return;
  var api = window.location.origin + "/applets/api/itemeditor/appendchildforminstance/".concat(store.state.itemInstanceId);
  var formData = new FormData();
  formData.append('datamodel', JSON.stringify(store.state.childResponseForm));
  if (parentId) formData.append('parentId', parentId.toString());
  fetch(api, {
    body: formData,
    method: "post"
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    //console.log("Response Data: \n", JSON.stringify(data))
    store.commit(Mutations.APPEND_CHILD_RESPONSE_INSTANCE, data);
    var flattenModel = {
      flattenedOptionModels: store.state.flattenedOptionModels,
      flattenedTextModels: store.state.flattenedTextModels
    }; //clear the form content

    clearForm(flattenModel);
  }).catch(function (error) {
    store.commit(Mutations$1.SET_SUBMISSION_STATUS, "Fail");
    console.log(error);
  });
}), _defineProperty(_actions$1, Actions$1.DELETE_CHILD_RESPONSE_INSTANCE, function (store, payload) {
  var api = window.location.origin + "/applets/api/itemeditor/deleteChildForm/".concat(store.state.itemInstanceId, "/").concat(payload.id, "?parentId=").concat(payload.parentId);
  fetch(api, {
    method: "post"
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.id) {
      console.log("deleteChildForm response received");
      store.commit(Mutations.DELETE_CHILD_RESPONSE_INSTANCE, payload);
    }
  }).catch(function (error) {
    store.commit(Mutations$1.SET_SUBMISSION_STATUS, "Fail");
    console.log(error);
  });
}), _defineProperty(_actions$1, Actions$1.DELETE_CHILD_INSTANCE, function (store, payload) {
  var api = window.location.origin + "/applets/api/itemeditor/deleteChildForm/".concat(store.state.itemInstanceId, "/").concat(payload.id);
  fetch(api, {
    method: "post"
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.id) {
      console.log("deleteChildForm response received");
      store.commit(Mutations.DELETE_CHILD_INSTANCE, payload);
    }
  }).catch(function (error) {
    store.commit(Mutations$1.SET_SUBMISSION_STATUS, "Fail");
    console.log(error);
  });
}), _actions$1);//import { Guid } from 'guid-typescript';
var getters$1 = {};var script$g = vue.defineComponent({
  name: "AttachmentField",
  components: {},
  props: {
    model: {
      type: null,
      required: true
    }
  },
  methods: {
    handleFileUpload: function handleFileUpload(e) {
      //const target = <HTMLInputElement>e.target;
      //if (target !== null) {
      //  //  const url = URL.createObjectURL(target.files && target.files[0]);
      //    var file = target.files && target;//.files[0];
      //    console.log("selected file: " + JSON.stringify(file));
      //}
      console.log(e.target.files[0]);
    }
  },
  setup: function setup() {
    //const file = ref(null); //ref(p.model.files);
    //Upload to server
    return {//handleFileUpload,
      //file
    };
  }
});function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("input", {
    type: "file",
    onChange: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.handleFileUpload($event);
    })
  }, null, 32);
}script$g.render = render$g;var script$f = vue.defineComponent({
  name: "CheckboxField",
  components: {},
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  methods: {
    getConcatenatedOptionLabels: function getConcatenatedOptionLabels(option) {
      var _option$optionText, _option$optionText$va;

      var concatenatedLabels = (_option$optionText = option.optionText) === null || _option$optionText === void 0 ? void 0 : (_option$optionText$va = _option$optionText.values) === null || _option$optionText$va === void 0 ? void 0 : _option$optionText$va.$values.map(function (txt) {
        return txt.value;
      }).join(" / ");
      return concatenatedLabels ? concatenatedLabels : "";
    },
    selectoption: function selectoption(event) {
      // console.log("selected value " + event.target.value + "selected: " + JSON.stringify(event.target.checked));        
      this.store.commit(FlattenedFormFiledMutations.SET_OPTION_VALUE, {
        id: event.target.value,
        isSelected: event.target.checked
      });
    }
  },
  setup: function setup(p) {
    // const validationStatus = computed(() => validateOptionsField(p.model));
    var store = useStore();
    return {
      store: store,
      // validationStatus,
      selectedoptions: vue.computed(function () {
        return p.model.options.$values.filter(function (opt) {
          return opt.selected === true;
        }).map(function (opt) {
          return opt.id;
        });
      })
    };
  }
});var _hoisted_1$8 = ["id", "value"];
var _hoisted_2$6 = ["for"];
function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.model.options.$values, function (option) {
    return vue.openBlock(), vue.createElementBlock("div", null, [vue.withDirectives(vue.createElementVNode("input", {
      type: "checkbox",
      id: option.id,
      value: option.id,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
        return _ctx.selectedoptions = $event;
      }),
      onChange: _cache[1] || (_cache[1] = function ($event) {
        return _ctx.selectoption($event);
      })
    }, null, 40, _hoisted_1$8), [[vue.vModelCheckbox, _ctx.selectedoptions]]), vue.createElementVNode("label", {
      for: option.id
    }, vue.toDisplayString(_this.getConcatenatedOptionLabels(option)), 9, _hoisted_2$6)]);
  }), 256);
}script$f.render = render$f;/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];
var isValidKey = function (key) {
    return validEvents.map(function (event) { return event.toLowerCase(); }).indexOf(key.toLowerCase()) !== -1;
};
var bindHandlers = function (initEvent, listeners, editor) {
    Object.keys(listeners)
        .filter(isValidKey)
        .forEach(function (key) {
        var handler = listeners[key];
        if (typeof handler === 'function') {
            if (key === 'onInit') {
                handler(initEvent, editor);
            }
            else {
                editor.on(key.substring(2), function (e) { return handler(e, editor); });
            }
        }
    });
};
var bindModelHandlers = function (props, ctx, editor, modelValue) {
    var modelEvents = props.modelEvents ? props.modelEvents : null;
    var normalizedEvents = Array.isArray(modelEvents) ? modelEvents.join(' ') : modelEvents;
    vue.watch(modelValue, function (val, prevVal) {
        if (editor && typeof val === 'string' && val !== prevVal && val !== editor.getContent({ format: props.outputFormat })) {
            editor.setContent(val);
        }
    });
    editor.on(normalizedEvents ? normalizedEvents : 'change input undo redo', function () {
        ctx.emit('update:modelValue', editor.getContent({ format: props.outputFormat }));
    });
};
var initEditor = function (initEvent, props, ctx, editor, modelValue, content) {
    editor.setContent(content());
    if (ctx.attrs['onUpdate:modelValue']) {
        bindModelHandlers(props, ctx, editor, modelValue);
    }
    bindHandlers(initEvent, ctx.attrs, editor);
};
var unique = 0;
var uuid = function (prefix) {
    var time = Date.now();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextarea = function (element) {
    return element !== null && element.tagName.toLowerCase() === 'textarea';
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var mergePlugins = function (initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};
var isNullOrUndefined = function (value) {
    return value === null || value === undefined;
};/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var createState = function () { return ({
    listeners: [],
    scriptId: uuid('tiny-script'),
    scriptLoaded: false
}); };
var CreateScriptLoader = function () {
    var state = createState();
    var injectScriptTag = function (scriptId, doc, url, callback) {
        var scriptTag = doc.createElement('script');
        scriptTag.referrerPolicy = 'origin';
        scriptTag.type = 'application/javascript';
        scriptTag.id = scriptId;
        scriptTag.src = url;
        var handler = function () {
            scriptTag.removeEventListener('load', handler);
            callback();
        };
        scriptTag.addEventListener('load', handler);
        if (doc.head) {
            doc.head.appendChild(scriptTag);
        }
    };
    var load = function (doc, url, callback) {
        if (state.scriptLoaded) {
            callback();
        }
        else {
            state.listeners.push(callback);
            if (!doc.getElementById(state.scriptId)) {
                injectScriptTag(state.scriptId, doc, url, function () {
                    state.listeners.forEach(function (fn) { return fn(); });
                    state.scriptLoaded = true;
                });
            }
        }
    };
    // Only to be used by tests.
    var reinitialize = function () {
        state = createState();
    };
    return {
        load: load,
        reinitialize: reinitialize
    };
};
var ScriptLoader = CreateScriptLoader();/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getGlobal = function () { return (typeof window !== 'undefined' ? window : global); };
var getTinymce = function () {
    var global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};var editorProps = {
    apiKey: String,
    cloudChannel: String,
    id: String,
    init: Object,
    initialValue: String,
    inline: Boolean,
    modelEvents: [String, Array],
    plugins: [String, Array],
    tagName: String,
    toolbar: [String, Array],
    modelValue: String,
    disabled: Boolean,
    tinymceScriptSrc: String,
    outputFormat: {
        type: String,
        validator: function (prop) { return prop === 'html' || prop === 'text'; }
    },
};/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __assign = (window && window.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var renderInline = function (ce, id, elementRef, tagName) {
    return ce(tagName ? tagName : 'div', {
        id: id,
        ref: elementRef
    });
};
var renderIframe = function (ce, id, elementRef) {
    return ce('textarea', {
        id: id,
        visibility: 'hidden',
        ref: elementRef
    });
};
var Editor$1 = vue.defineComponent({
    props: editorProps,
    setup: function (props, ctx) {
        var _a = vue.toRefs(props), disabled = _a.disabled, modelValue = _a.modelValue;
        var element = vue.ref(null);
        var vueEditor = null;
        var elementId = props.id || uuid('tiny-vue');
        var inlineEditor = (props.init && props.init.inline) || props.inline;
        var modelBind = !!ctx.attrs['onUpdate:modelValue'];
        var mounting = true;
        var initialValue = props.initialValue ? props.initialValue : '';
        var cache = '';
        var getContent = function (isMounting) { return modelBind ?
            function () { return ((modelValue === null || modelValue === void 0 ? void 0 : modelValue.value) ? modelValue.value : ''); } :
            function () { return isMounting ? initialValue : cache; }; };
        var initWrapper = function () {
            var content = getContent(mounting);
            var finalInit = __assign(__assign({}, props.init), { readonly: props.disabled, selector: "#" + elementId, plugins: mergePlugins(props.init && props.init.plugins, props.plugins), toolbar: props.toolbar || (props.init && props.init.toolbar), inline: inlineEditor, setup: function (editor) {
                    vueEditor = editor;
                    editor.on('init', function (e) { return initEditor(e, props, ctx, editor, modelValue, content); });
                    if (props.init && typeof props.init.setup === 'function') {
                        props.init.setup(editor);
                    }
                } });
            if (isTextarea(element.value)) {
                element.value.style.visibility = '';
            }
            getTinymce().init(finalInit);
            mounting = false;
        };
        vue.watch(disabled, function (disable) {
            if (vueEditor !== null) {
                vueEditor.setMode(disable ? 'readonly' : 'design');
            }
        });
        vue.onMounted(function () {
            if (getTinymce() !== null) {
                initWrapper();
            }
            else if (element.value && element.value.ownerDocument) {
                var channel = props.cloudChannel ? props.cloudChannel : '5';
                var apiKey = props.apiKey ? props.apiKey : 'no-api-key';
                var scriptSrc = isNullOrUndefined(props.tinymceScriptSrc) ?
                    "https://cdn.tiny.cloud/1/" + apiKey + "/tinymce/" + channel + "/tinymce.min.js" :
                    props.tinymceScriptSrc;
                ScriptLoader.load(element.value.ownerDocument, scriptSrc, initWrapper);
            }
        });
        vue.onBeforeUnmount(function () {
            if (getTinymce() !== null) {
                getTinymce().remove(vueEditor);
            }
        });
        if (!inlineEditor) {
            vue.onActivated(function () {
                if (!mounting) {
                    initWrapper();
                }
            });
            vue.onDeactivated(function () {
                var _a;
                if (!modelBind) {
                    cache = vueEditor.getContent();
                }
                (_a = getTinymce()) === null || _a === void 0 ? void 0 : _a.remove(vueEditor);
            });
        }
        return function () { return inlineEditor ?
            renderInline(vue.h, elementId, element, props.tagName) :
            renderIframe(vue.h, elementId, element); };
    }
});/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var Editor = Editor$1;var script$e = vue.defineComponent({
  name: "Text",
  props: {
    model: {
      type: null,
      required: true
    },
    isMultiline: {
      type: Boolean,
      required: true
    },
    isRichText: {
      type: Boolean,
      required: true
    },
    validationStatus: {
      type: null,
      required: true
    },
    field: {
      type: String,
      required: false,
      default: "text"
    }
  },
  components: {
    Editor: Editor
  },
  computed: {
    content: {
      get: function get() {
        return this.model.value;
      },
      set: function set(value) {
        //console.log("value to be set: " + value + " id: " + this.model.id);
        this.store.commit(FlattenedFormFiledMutations.SET_TEXT_VALUE, {
          id: this.model.id,
          val: value
        });
      }
    }
  },
  setup: function setup(p) {
    var store = useStore();
    var field = p.field; //console.log("validationStatus: " + p.validationStatus)

    return {
      store: store,
      field: field
    };
  }
});var _hoisted_1$7 = {
  key: 2
};
var _hoisted_2$5 = ["type"];
function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Editor = vue.resolveComponent("Editor");

  return _ctx.isRichText ? (vue.openBlock(), vue.createBlock(_component_Editor, {
    key: 0,
    apiKey: "0ohehg73era56wydy5kyws6ouf25550ogy2sifi1j41hk65l",
    modelValue: _ctx.content,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.content = $event;
    }),
    placeholder: "add multiple lines"
  }, null, 8, ["modelValue"])) : _ctx.isMultiline ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("textarea", {
    key: 1,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.content = $event;
    })
  }, null, 512)), [[vue.vModelText, _ctx.content]]) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$7, [_ctx.field === 'text' ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
    key: 0,
    type: "text",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return _ctx.content = $event;
    })
  }, null, 512)), [[vue.vModelText, _ctx.content]]) : _ctx.field === 'decimal' ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
    key: 1,
    type: "number",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return _ctx.content = $event;
    }),
    step: "0.01",
    placeholder: "0.00"
  }, null, 512)), [[vue.vModelText, _ctx.content]]) : vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
    key: 2,
    type: _ctx.field,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return _ctx.content = $event;
    })
  }, null, 8, _hoisted_2$5)), [[vue.vModelDynamic, _ctx.content]])]));
}script$e.render = render$e;var script$d = vue.defineComponent({
  name: "DateField",
  props: {
    model: {
      type: null,
      required: true
    },
    isMultivalued: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    Text: script$e
  },
  setup: function setup(p) {
    var validationStatus = vue.computed(function () {
      return validateMonolingualTextField(p.model, null);
    });
    var type = p.model.modelType;
    return {
      validationStatus: validationStatus,
      type: type
    };
  }
});function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model, _ctx$model$values;

  var _component_Text = vue.resolveComponent("Text");

  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList((_ctx$model = _ctx.model) === null || _ctx$model === void 0 ? void 0 : (_ctx$model$values = _ctx$model.values) === null || _ctx$model$values === void 0 ? void 0 : _ctx$model$values.$values, function (val) {
    return vue.openBlock(), vue.createElementBlock("div", null, [vue.createVNode(_component_Text, {
      model: val,
      "is-multiline": false,
      "is-rich-text": false,
      "validation-status": _ctx.validationStatus,
      field: "date"
    }, null, 8, ["model", "validation-status"])]);
  }), 256);
}script$d.render = render$d;var script$c = vue.defineComponent({
  name: "DecimalField",
  props: {
    model: {
      type: null,
      required: true
    },
    isMultivalued: {
      type: Boolean,
      required: false,
      default: false
    },
    numDecimalPlaces: {
      type: Number,
      required: false,
      default: 2
    }
  },
  components: {
    Text: script$e
  },
  setup: function setup(p) {
    var validationStatus = vue.computed(function () {
      return validateMonolingualNumberField(p.model);
    });
    var type = p.model.modelType;
    return {
      validationStatus: validationStatus,
      type: type
    };
  }
});function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model, _ctx$model$values;

  var _component_Text = vue.resolveComponent("Text");

  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList((_ctx$model = _ctx.model) === null || _ctx$model === void 0 ? void 0 : (_ctx$model$values = _ctx$model.values) === null || _ctx$model$values === void 0 ? void 0 : _ctx$model$values.$values, function (val) {
    return vue.openBlock(), vue.createElementBlock("div", null, [vue.createVNode(_component_Text, {
      model: val,
      "is-multiline": false,
      "is-rich-text": false,
      "validation-status": _ctx.validationStatus,
      field: "decimal"
    }, null, 8, ["model", "validation-status"])]);
  }), 256);
}script$c.render = render$c;var script$b = vue.defineComponent({
  name: "EmailField",
  props: {
    model: {
      type: null,
      required: true
    },
    isMultivalue: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    Text: script$e
  },
  setup: function setup(p) {
    var validationStatus = vue.computed(function () {
      return validateMonolingualTextField(p.model, RegExpressions.Email);
    });
    var type = p.model.modelType;
    return {
      validationStatus: validationStatus,
      type: type
    };
  }
});function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model, _ctx$model$values;

  var _component_Text = vue.resolveComponent("Text");

  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList((_ctx$model = _ctx.model) === null || _ctx$model === void 0 ? void 0 : (_ctx$model$values = _ctx$model.values) === null || _ctx$model$values === void 0 ? void 0 : _ctx$model$values.$values, function (val) {
    return vue.openBlock(), vue.createElementBlock("div", null, [vue.createVNode(_component_Text, {
      model: val,
      "is-multiline": false,
      "is-rich-text": false,
      "validation-status": _ctx.validationStatus,
      field: "email"
    }, null, 8, ["model", "validation-status"])]);
  }), 256);
}script$b.render = render$b;var script$a = vue.defineComponent({
  name: "InfoField",
  props: {
    model: {
      type: null,
      required: true
    }
  }
});var _hoisted_1$6 = ["innerHTML"];
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model, _ctx$model$content;

  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList((_ctx$model = _ctx.model) === null || _ctx$model === void 0 ? void 0 : (_ctx$model$content = _ctx$model.content) === null || _ctx$model$content === void 0 ? void 0 : _ctx$model$content.values, function (val) {
    return vue.openBlock(), vue.createElementBlock("div", {
      key: val.id
    }, [vue.createElementVNode("div", {
      innerHTML: val.value
    }, null, 8, _hoisted_1$6)]);
  }), 128);
}script$a.render = render$a;var script$9 = vue.defineComponent({
  name: "IntegerField",
  props: {
    model: {
      type: null,
      required: true
    },
    isMultivalued: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    Text: script$e
  },
  setup: function setup(p) {
    var validationStatus = vue.computed(function () {
      return validateMonolingualNumberField(p.model);
    });
    var type = p.model.modelType;
    return {
      validationStatus: validationStatus,
      type: type
    };
  }
});function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model, _ctx$model$values;

  var _component_Text = vue.resolveComponent("Text");

  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList((_ctx$model = _ctx.model) === null || _ctx$model === void 0 ? void 0 : (_ctx$model$values = _ctx$model.values) === null || _ctx$model$values === void 0 ? void 0 : _ctx$model$values.$values, function (val) {
    return vue.openBlock(), vue.createElementBlock("div", null, [vue.createVNode(_component_Text, {
      model: val,
      "is-multiline": false,
      "is-rich-text": false,
      "validation-status": _ctx.validationStatus,
      field: "number"
    }, null, 8, ["model", "validation-status"])]);
  }), 256);
}script$9.render = render$9;var script$8 = vue.defineComponent({
  name: "RadioField",
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  methods: {
    getSelectedFieldLabels: function getSelectedFieldLabels(field) {
      return OptionsFieldMethods.getSelectedFieldLabels(field.options.$values);
    },
    getConcatenatedOptionLabels: function getConcatenatedOptionLabels(option) {
      var _option$optionText, _option$optionText$va;

      var concatenatedLabels = (_option$optionText = option.optionText) === null || _option$optionText === void 0 ? void 0 : (_option$optionText$va = _option$optionText.values) === null || _option$optionText$va === void 0 ? void 0 : _option$optionText$va.$values.map(function (txt) {
        return txt.value;
      }).join(" / ");
      return concatenatedLabels ? concatenatedLabels : "";
    }
  },
  computed: {
    selected: {
      get: function get() {
        var _this$model$options$$;

        return (_this$model$options$$ = this.model.options.$values.find(function (opt) {
          return opt.selected;
        })) === null || _this$model$options$$ === void 0 ? void 0 : _this$model$options$$.id;
      },
      set: function set(value) {
        var _this = this;

        //console.log("selected value: ", value);
        this.model.options.$values.forEach(function (opt) {
          _this.store.commit(FlattenedFormFiledMutations.SET_OPTION_VALUE, {
            id: opt.id,
            isSelected: opt.id === value
          });
        });
      }
    }
  },
  setup: function setup(p) {
    var validationStatus = vue.computed(function () {
      return validateOptionsField(p.model);
    });
    var name = "radio_" + p.model.id;
    var store = useStore();
    return {
      store: store,
      validationStatus: validationStatus,
      name: name
    };
  }
});var _hoisted_1$5 = ["name", "id", "value"];

var _hoisted_2$4 = /*#__PURE__*/vue.createTextVNode();

var _hoisted_3$3 = ["for"];
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.model.options.$values, function (option) {
    return vue.openBlock(), vue.createElementBlock("div", null, [vue.withDirectives(vue.createElementVNode("input", {
      type: "radio",
      name: _ctx.name,
      id: option.id,
      value: option.id,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
        return _ctx.selected = $event;
      })
    }, null, 8, _hoisted_1$5), [[vue.vModelRadio, _ctx.selected]]), _hoisted_2$4, vue.createElementVNode("label", {
      for: option.id
    }, vue.toDisplayString(_this.getConcatenatedOptionLabels(option)), 9, _hoisted_3$3)]);
  }), 256);
}script$8.render = render$8;var script$7 = vue.defineComponent({
  name: "SelectField",
  components: {},
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  methods: {
    getConcatenatedOptionLabels: function getConcatenatedOptionLabels(option) {
      var _option$optionText, _option$optionText$va;

      var concatenatedLabels = (_option$optionText = option.optionText) === null || _option$optionText === void 0 ? void 0 : (_option$optionText$va = _option$optionText.values) === null || _option$optionText$va === void 0 ? void 0 : _option$optionText$va.$values.map(function (txt) {
        return txt.value;
      }).join(" / ");
      return concatenatedLabels ? concatenatedLabels : "";
    }
  },
  computed: {
    selected: {
      get: function get() {
        var _this$model$options$$;

        return (_this$model$options$$ = this.model.options.$values.find(function (opt) {
          return opt.selected;
        })) === null || _this$model$options$$ === void 0 ? void 0 : _this$model$options$$.id;
      },
      set: function set(value) {
        var _this = this;

        this.model.options.$values.forEach(function (opt) {
          _this.store.commit(FlattenedFormFiledMutations.SET_OPTION_VALUE, {
            id: opt.id,
            isSelected: opt.id === value
          });
        });
      }
    }
  },
  setup: function setup(p) {
    var validationStatus = vue.computed(function () {
      return validateOptionsField(p.model);
    });
    var store = useStore();
    return {
      store: store,
      validationStatus: validationStatus
    };
  }
});var _hoisted_1$4 = /*#__PURE__*/vue.createElementVNode("option", {
  disabled: "",
  value: ""
}, "Please select one", -1);

var _hoisted_2$3 = ["id", "value"];
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  return vue.openBlock(), vue.createElementBlock("div", null, [vue.withDirectives(vue.createElementVNode("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.selected = $event;
    }),
    class: "form-control col-md-6"
  }, [_hoisted_1$4, (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.model.options.$values, function (option) {
    return vue.openBlock(), vue.createElementBlock("option", {
      id: option.id,
      value: option.id
    }, vue.toDisplayString(_this.getConcatenatedOptionLabels(option)), 9, _hoisted_2$3);
  }), 256))], 512), [[vue.vModelSelect, _ctx.selected]])]);
}script$7.render = render$7;var script$6 = vue.defineComponent({
  name: "TextCollection",
  props: {
    model: {
      type: null,
      required: true
    },
    isMultiline: {
      type: Boolean,
      required: true
    },
    isRichText: {
      type: Boolean,
      required: true
    },
    validationStatus: {
      type: null,
      required: true
    }
  },
  components: {
    Text: script$e
  }
});var _hoisted_1$3 = {
  key: 0
};
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model, _ctx$model$values;

  var _component_Text = vue.resolveComponent("Text");

  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList((_ctx$model = _ctx.model) === null || _ctx$model === void 0 ? void 0 : (_ctx$model$values = _ctx$model.values) === null || _ctx$model$values === void 0 ? void 0 : _ctx$model$values.$values, function (val) {
    var _ctx$model2, _ctx$model2$values, _ctx$model2$values$$v;

    return vue.openBlock(), vue.createElementBlock("div", null, [((_ctx$model2 = _ctx.model) === null || _ctx$model2 === void 0 ? void 0 : (_ctx$model2$values = _ctx$model2.values) === null || _ctx$model2$values === void 0 ? void 0 : (_ctx$model2$values$$v = _ctx$model2$values.$values) === null || _ctx$model2$values$$v === void 0 ? void 0 : _ctx$model2$values$$v.length) > 1 ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1$3, vue.toDisplayString(val.language) + ": ", 1)) : vue.createCommentVNode("", true), vue.createVNode(_component_Text, {
      model: val,
      "is-multiline": _ctx.isMultiline,
      "is-rich-text": _ctx.isRichText,
      "validation-status": _ctx.validationStatus
    }, null, 8, ["model", "is-multiline", "is-rich-text", "validation-status"])]);
  }), 256);
}script$6.render = render$6;var script$5 = vue.defineComponent({
  name: "MultilingualTextField",
  props: {
    model: {
      type: null,
      required: true
    },
    isMultiline: {
      type: Boolean,
      required: true
    }
  },
  components: {
    TextCollection: script$6
  },
  setup: function setup(p) {
    var type = p.model.modelType; //console.log("p.model: ", JSON.stringify(p.model))

    var validationStatus = vue.computed(function () {
      return validateMultilingualTextField(p.model);
    });
    return {
      type: type,
      isRichText: vue.computed(function () {
        return isRichTextField(p.model);
      }),
      validationStatus: validationStatus,
      isRequiredField: vue.computed(function () {
        return isRequiredField(p.model);
      })
    };
  }
});function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model$values;

  var _component_TextCollection = vue.resolveComponent("TextCollection");

  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList((_ctx$model$values = _ctx.model.values) === null || _ctx$model$values === void 0 ? void 0 : _ctx$model$values.$values, function (val) {
    return vue.openBlock(), vue.createBlock(_component_TextCollection, {
      model: val,
      "is-multiline": _ctx.isMultiline,
      "is-rich-text": _ctx.isRichText,
      "validation-status": _ctx.validationStatus
    }, null, 8, ["model", "is-multiline", "is-rich-text", "validation-status"]);
  }), 256);
}script$5.render = render$5;var script$4 = vue.defineComponent({
  name: "AudioRecorder",
  components: {},
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  methods: {}
});function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", null, "My Audio Recorder");
}script$4.render = render$4;var script$3 = vue.defineComponent({
  name: "Field",
  props: {
    model: {
      type: null,
      required: true
    }
  },
  components: {
    AttachmentField: script$g,
    CheckboxField: script$f,
    DateField: script$d,
    DecimalField: script$c,
    EmailField: script$b,
    //FieldContainerReference,
    InfoField: script$a,
    IntegerField: script$9,
    RadioField: script$8,
    SelectField: script$7,
    MultilingualTextField: script$5,
    AudioRecorderField: script$4
  },
  setup: function setup(p) {
    var fieldType = FieldContainerUtils.getFieldType(p.model);
    var cssClass = FieldContainerUtils.cssClass(p.model);
    return {
      FieldTypes: eFieldType,
      ValidationStatus: eValidationStatus,
      fieldType: fieldType,
      cssClass: cssClass
    };
  }
});var _hoisted_1$2 = {
  key: 0
};
var _hoisted_2$2 = {
  class: "col-md-3 field-name"
};
var _hoisted_3$2 = {
  key: 0,
  style: {
    "color": "red"
  }
};
var _hoisted_4$2 = {
  class: "col-md-9 field-value"
};
var _hoisted_5$2 = {
  key: 0,
  style: {
    "color": "red"
  }
};
var _hoisted_6$2 = {
  key: 1,
  style: {
    "color": "red"
  }
};
var _hoisted_7$1 = {
  key: 13
};
var _hoisted_8$1 = {
  key: 14
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model, _ctx$model2;

  var _component_InfoField = vue.resolveComponent("InfoField");

  var _component_AttachmentField = vue.resolveComponent("AttachmentField");

  var _component_CheckboxField = vue.resolveComponent("CheckboxField");

  var _component_DateField = vue.resolveComponent("DateField");

  var _component_DecimalField = vue.resolveComponent("DecimalField");

  var _component_EmailField = vue.resolveComponent("EmailField");

  var _component_IntegerField = vue.resolveComponent("IntegerField");

  var _component_RadioField = vue.resolveComponent("RadioField");

  var _component_SelectField = vue.resolveComponent("SelectField");

  var _component_MultilingualTextField = vue.resolveComponent("MultilingualTextField");

  var _component_AudioRecorderField = vue.resolveComponent("AudioRecorderField");

  return _ctx.fieldType === _ctx.FieldTypes.FieldContainerReference ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, " TODO: Implement editor template for FieldContainerReference ")) : _ctx.fieldType === _ctx.FieldTypes.InfoSection ? (vue.openBlock(), vue.createBlock(_component_InfoField, {
    key: 1,
    model: _ctx.model,
    class: vue.normalizeClass(_ctx.cssClass)
  }, null, 8, ["model", "class"])) : (vue.openBlock(), vue.createElementBlock("div", {
    key: 2,
    class: vue.normalizeClass(_ctx.cssClass + ' row')
  }, [vue.createElementVNode("div", _hoisted_2$2, [vue.createTextVNode(vue.toDisplayString(_ctx.model.name.concatenatedContent) + " ", 1), this.model.required ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$2, "*")) : vue.createCommentVNode("", true)]), vue.createElementVNode("div", _hoisted_4$2, [((_ctx$model = _ctx.model) === null || _ctx$model === void 0 ? void 0 : _ctx$model.validationStatus) === _ctx.ValidationStatus.VALUE_REQUIRED ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$2, "This field requires a value.")) : vue.createCommentVNode("", true), ((_ctx$model2 = _ctx.model) === null || _ctx$model2 === void 0 ? void 0 : _ctx$model2.validationStatus) === _ctx.ValidationStatus.INVALID ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$2, "This field has an invalid value.")) : vue.createCommentVNode("", true), _ctx.fieldType === _ctx.FieldTypes.AttachmentField ? (vue.openBlock(), vue.createBlock(_component_AttachmentField, {
    key: 2,
    model: _ctx.model
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.CheckboxField ? (vue.openBlock(), vue.createBlock(_component_CheckboxField, {
    key: 3,
    model: _ctx.model
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.DateField ? (vue.openBlock(), vue.createBlock(_component_DateField, {
    key: 4,
    model: _ctx.model
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.DecimalField ? (vue.openBlock(), vue.createBlock(_component_DecimalField, {
    key: 5,
    model: _ctx.model
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.EmailField ? (vue.openBlock(), vue.createBlock(_component_EmailField, {
    key: 6,
    model: _ctx.model
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.IntegerField ? (vue.openBlock(), vue.createBlock(_component_IntegerField, {
    key: 7,
    model: _ctx.model
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.RadioField ? (vue.openBlock(), vue.createBlock(_component_RadioField, {
    key: 8,
    model: _ctx.model
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.SelectField ? (vue.openBlock(), vue.createBlock(_component_SelectField, {
    key: 9,
    model: _ctx.model
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.TextArea ? (vue.openBlock(), vue.createBlock(_component_MultilingualTextField, {
    key: 10,
    model: _ctx.model,
    "is-multiline": true
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.TextField ? (vue.openBlock(), vue.createBlock(_component_MultilingualTextField, {
    key: 11,
    model: _ctx.model,
    "is-multiline": false
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.AudioRecorderField ? (vue.openBlock(), vue.createBlock(_component_AudioRecorderField, {
    key: 12,
    model: _ctx.model
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.CompositeField ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_7$1, " TODO: Implement editor template for the CompositeField")) : _ctx.fieldType === _ctx.FieldTypes.TableField ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8$1, " TODO: Implement editor template for the TableField")) : vue.createCommentVNode("", true)])], 2));
}script$3.render = render$3;var script$2 = vue.defineComponent({
  name: "FieldContainer",
  props: {
    model: null
  },
  components: {
    Field: script$3
  }
});function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model$fields;

  var _component_Field = vue.resolveComponent("Field");

  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList((_ctx$model$fields = _ctx.model.fields) === null || _ctx$model$fields === void 0 ? void 0 : _ctx$model$fields.$values, function (field) {
    return vue.openBlock(), vue.createBlock(_component_Field, {
      model: field
    }, null, 8, ["model"]);
  }), 256);
}script$2.render = render$2;var script$1 = vue.defineComponent({
  name: "ChildFormSubmission",
  components: {
    ChildForm: script$2,
    ChildView: script$n
  },
  props: props,
  setup: function setup(p) {
    // console.log('props: ', JSON.stringify(p));
    var queryParameters = p.queryParameters;
    var dataAttributes = p.dataAttributes;
    var itemId = guid$1.Guid.parse(queryParameters.iid);
    var itemTemplateId = guid$1.Guid.parse(dataAttributes["template-id"]);
    var childFormId = guid$1.Guid.parse(dataAttributes["child-form-id"]);
    var childResponseFormIdStr = dataAttributes["response-form-id"];
    var isAdmin = dataAttributes["is-admin"];
    var childResponseFormId = (childResponseFormIdStr === null || childResponseFormIdStr === void 0 ? void 0 : childResponseFormIdStr.length) > 0 ? guid$1.Guid.parse(childResponseFormIdStr) : undefined;
    var store = useStore();
    store.commit(Mutations$1.CLEAR_FLATTENED_FIELD_MODELS);
    store.commit(Mutations$1.SET_ITEM_TEMPLATE_ID, itemTemplateId);
    store.commit(Mutations$1.SET_FORM_ID, childFormId);
    store.commit(Mutations.SET_PARENT_ITEM_ID, itemId); //load the data

    store.dispatch(Actions$1.LOAD_FORM);
    store.dispatch(Actions$1.LOAD_SUBMISSIONS);

    if (childResponseFormId) {
      store.commit(Mutations.SET_RESPONSE_FORM_ID, childResponseFormId);
      store.dispatch(Actions$1.LOAD_RESPONSE_FORM);
    } //const submissionStatus = store.state.submissionStatus as SubmissionStatus;
    //const submissionStatus: eSubmissionStatus = store.state.submissionStatus as eSubmissionStatus;
    //console.log("initial status " + JSON.stringify(submissionStatus));


    var responseDisplayFlags = vue.ref([]);
    var childSubmissions = vue.computed(function () {
      var _store$state$formInst;

      return (_store$state$formInst = store.state.formInstances) === null || _store$state$formInst === void 0 ? void 0 : _store$state$formInst.$values;
    });

    var toggleDisplayResponse = function toggleDisplayResponse(index) {
      if (responseDisplayFlags.value[index] != undefined) {
        responseDisplayFlags.value[index] = !responseDisplayFlags.value[index];
      } else {
        responseDisplayFlags.value[index] = !responseDisplayFlags.value[index]; //true;
      } //Closing all other response boxes


      responseDisplayFlags.value.forEach(function (val, idx) {
        if (val && idx !== index) responseDisplayFlags.value[idx] = false;
      });
      return false;
    };

    var submitChildResponse = function submitChildResponse(index) {
      var _childSubmissions$val;

      store.dispatch(Actions$1.SUBMIT_CHILD_RESPONSE_FORM, (_childSubmissions$val = childSubmissions.value[index]) === null || _childSubmissions$val === void 0 ? void 0 : _childSubmissions$val.id);
      toggleDisplayResponse(index);
    };

    return {
      childForm: vue.computed(function () {
        return store.state.form;
      }),
      childSubmissions: vue.computed(function () {
        var _store$state$formInst2;

        return (_store$state$formInst2 = store.state.formInstances) === null || _store$state$formInst2 === void 0 ? void 0 : _store$state$formInst2.$values;
      }),
      store: store,
      submissionStatus: vue.computed(function () {
        return store.state.submissionStatus;
      }),
      eSubmissionStatus: eSubmissionStatus,
      eValidationStatus: eValidationStatus,
      childResponseFormId: childResponseFormId,
      childResponseForm: vue.computed(function () {
        return store.state.childResponseForm;
      }),
      responseDisplayFlags: responseDisplayFlags,
      toggleDisplayResponse: toggleDisplayResponse,
      submitChildResponse: submitChildResponse,
      isAdmin: isAdmin
    };
  },
  storeConfig: {
    state: state,
    actions: actions$1,
    mutations: mutations,
    getters: getters$1
  },
  methods: {
    submitChildForm: function submitChildForm() {
      this.store.dispatch(Actions$1.SUBMIT_CHILD_FORM);
    },
    removeResponseForm: function removeResponseForm(itemToRemove) {
      if (confirm("Do you really want to delete this item?")) {
        this.store.dispatch(Actions$1.DELETE_CHILD_RESPONSE_INSTANCE, itemToRemove);
      }
    },
    removeChildForm: function removeChildForm(itemToRemove) {
      if (confirm("Do you really want to delete this item?")) {
        this.store.dispatch(Actions$1.DELETE_CHILD_INSTANCE, itemToRemove);
      }
    }
  }
});var _withScopeId = function _withScopeId(n) {
  return vue.pushScopeId("data-v-101fde4c"), n = n(), vue.popScopeId(), n;
};

var _hoisted_1$1 = {
  key: 0,
  class: "submissionForm"
};
var _hoisted_2$1 = {
  key: 0,
  class: "alert alert-danger"
};
var _hoisted_3$1 = {
  key: 1
};
var _hoisted_4$1 = {
  key: 0,
  class: "alert alert-info"
};
var _hoisted_5$1 = {
  key: 1,
  class: "alert alert-info"
};
var _hoisted_6$1 = {
  key: 2,
  class: "alert alert-danger"
};
var _hoisted_7 = {
  key: 1,
  class: "mt-2 submissionInstanceList"
};

var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/vue.createElementVNode("h3", null, "Responses", -1);
});

var _hoisted_9 = {
  class: "submissionInstance"
};
var _hoisted_10 = {
  key: 0,
  class: "text-right"
};
var _hoisted_11 = ["onClick"];

var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/vue.createElementVNode("span", {
    class: "fas fa-reply replyBtn"
  }, null, -1);
});

var _hoisted_13 = [_hoisted_12];
var _hoisted_14 = ["onClick"];
var _hoisted_15 = {
  class: "ml-3 submissionInstanceList"
};
var _hoisted_16 = {
  key: 0,
  class: "mb-2"
};
var _hoisted_17 = {
  key: 0,
  class: "childResponseForm"
};
var _hoisted_18 = {
  key: 0,
  class: "alert alert-danger"
};
var _hoisted_19 = ["onClick"];
var _hoisted_20 = {
  class: "submissionInstance"
};
var _hoisted_21 = {
  key: 0,
  class: "text-right"
};
var _hoisted_22 = ["onClick"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$childForm;

  var _component_ChildForm = vue.resolveComponent("ChildForm");

  var _component_ChildView = vue.resolveComponent("ChildView");

  return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [_ctx.childForm && Object.keys(_ctx.childForm).length > 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [vue.createVNode(_component_ChildForm, {
    model: _ctx.childForm
  }, null, 8, ["model"]), ((_ctx$childForm = _ctx.childForm) === null || _ctx$childForm === void 0 ? void 0 : _ctx$childForm.validationStatus) === _ctx.eValidationStatus.INVALID ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$1, "Form validation failed.")) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$1, [_ctx.submissionStatus === _ctx.eSubmissionStatus.InProgress ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$1, "Submitting...")) : vue.createCommentVNode("", true), _ctx.submissionStatus === _ctx.eSubmissionStatus.Success ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$1, "Submission successful")) : vue.createCommentVNode("", true), _ctx.submissionStatus === _ctx.eSubmissionStatus.Fail ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$1, "Submission failed")) : vue.createCommentVNode("", true)])), vue.createElementVNode("button", {
    class: "btn btn-primary",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.submitChildForm();
    })
  }, "Submit")])) : vue.createCommentVNode("", true), _ctx.childSubmissions && _ctx.childSubmissions.length > 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_7, [_hoisted_8, (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.childSubmissions, function (child, index) {
    var _ctx$childResponseFor;

    return vue.openBlock(), vue.createElementBlock("div", _hoisted_9, [vue.createVNode(_component_ChildView, {
      model: child,
      "hide-field-names": true
    }, null, 8, ["model"]), !_ctx.responseDisplayFlags[index] ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_10, [vue.createElementVNode("a", {
      href: "#",
      class: "text-decoration-none",
      onClick: function onClick($event) {
        return _ctx.toggleDisplayResponse(index);
      },
      onclick: "return false;"
    }, _hoisted_13, 8, _hoisted_11), _ctx.isAdmin ? (vue.openBlock(), vue.createElementBlock("span", {
      key: 0,
      class: "fas fa-remove",
      onClick: function onClick($event) {
        _ctx.removeChildForm(child);
      }
    }, null, 8, _hoisted_14)) : vue.createCommentVNode("", true)])) : vue.createCommentVNode("", true), vue.createElementVNode("div", _hoisted_15, [_ctx.childResponseFormId ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_16, [_ctx.responseDisplayFlags[index] ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_17, [vue.createVNode(_component_ChildForm, {
      model: _ctx.childResponseForm
    }, null, 8, ["model"]), ((_ctx$childResponseFor = _ctx.childResponseForm) === null || _ctx$childResponseFor === void 0 ? void 0 : _ctx$childResponseFor.validationStatus) === _ctx.eValidationStatus.INVALID ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_18, "Response validation failed.")) : vue.createCommentVNode("", true), vue.createElementVNode("button", {
      class: "btn btn-primary submitBtn",
      onClick: function onClick($event) {
        return _ctx.submitChildResponse(index);
      }
    }, "Submit", 8, _hoisted_19)])) : vue.createCommentVNode("", true)])) : vue.createCommentVNode("", true), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(child.childFieldContainers.$values, function (response, resIdx) {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_20, [vue.createVNode(_component_ChildView, {
        model: response,
        "hide-field-names": true
      }, null, 8, ["model"]), _ctx.isAdmin ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_21, [vue.createElementVNode("span", {
        class: "fas fa-remove deleteBtn",
        onClick: function onClick($event) {
          _ctx.removeResponseForm(response);
        }
      }, null, 8, _hoisted_22)])) : vue.createCommentVNode("", true)]);
    }), 256))])]);
  }), 256))])) : vue.createCommentVNode("", true)], 64);
}var css_248z = "\n.fa-remove[data-v-101fde4c] {\r\n\t\tcolor: red;\r\n\t\tmargin-left: 30px;\n}\r\n";
styleInject(css_248z);script$1.render = render$1;
script$1.__scopeId = "data-v-101fde4c";var _actions;
//import { validateFields } from '../../shared/store/form-validators'
//Declare ActionTypes

var Actions;

(function (Actions) {
  Actions["LOAD_FORM"] = "LOAD_FORM";
  Actions["SUBMIT_FORM"] = "SUBMIT_FORM";
})(Actions || (Actions = {}));

var actions = (_actions = {}, _defineProperty(_actions, Actions.LOAD_FORM, function (store) {
  var api = window.location.origin + "/applets/api/itemtemplates/".concat(store.state.itemTemplateId, "/data-form/").concat(store.state.formId); // console.log('Form Load API: ', api)

  fetch(api).then(function (response) {
    return response.json();
  }).then(function (data) {
    //console.log('Data:\n', JSON.stringify(data));
    store.commit(Mutations$1.SET_FORM, data);
  }).catch(function (error) {
    console.error('Actions.LOAD_FORM Error: ', error);
  });
}), _defineProperty(_actions, Actions.SUBMIT_FORM, function (store) {
  //Validating the form
  if (!store.state.form
  /*|| !validateFields(store.state.form)*/
  ) return;
  store.commit(Mutations$1.SET_SUBMISSION_STATUS, "InProgress");
  var api = window.location.origin + "/applets/api/itemeditor/?itemTemplateId=".concat(store.state.itemTemplateId, "&groupId=").concat(store.state.groupId, "&collectionId=").concat(store.state.collectionId);
  var formData = new FormData();
  formData.append('datamodel', JSON.stringify(store.state.form));
  fetch(api, {
    body: formData,
    method: "post"
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(JSON.stringify(data)); // const flattenModel: FlattenedFormFiledState ={          
    //     flattenedOptionModels : store.state.flattenedOptionModels,
    //     flattenedTextModels : store.state.flattenedTextModels,
    // };
    // //clear the form content
    // clearForm(flattenModel);
    //store.commit(Mutations.SET_SUBMISSION_STATUS, "Success");
  }).catch(function (error) {
    store.commit(Mutations$1.SET_SUBMISSION_STATUS, "Fail");
    console.log(error);
  });
}), _actions);//import { Guid } from 'guid-typescript';
var getters = {};var script = vue.defineComponent({
  name: "FormSubmission",
  components: {
    SubmissionForm: script$2
  },
  props: props,
  setup: function setup(p) {
    console.log('props: ', JSON.stringify(p));
    var dataAttributes = p.dataAttributes;
    var itemTemplateId = guid$1.Guid.parse(dataAttributes["template-id"]);
    var formId = guid$1.Guid.parse(dataAttributes["form-id"]);
    var collectionId = guid$1.Guid.parse(dataAttributes["collection-id"]);
    var groupId = guid$1.Guid.parse(dataAttributes["group-id"]);
    var store = useStore();
    store.commit(Mutations$1.CLEAR_FLATTENED_FIELD_MODELS);
    store.commit(Mutations$1.SET_ITEM_TEMPLATE_ID, itemTemplateId);
    store.commit(Mutations$1.SET_FORM_ID, formId);
    store.commit(Mutations$1.SET_COLLECTION_ID, collectionId);
    store.commit(Mutations$1.SET_GROUP_ID, groupId); //load the data

    store.dispatch(Actions.LOAD_FORM);
    return {
      store: store,
      submissionForm: vue.computed(function () {
        return store.state.form;
      }),
      submissionStatus: vue.computed(function () {
        return store.state.submissionStatus;
      }),
      eSubmissionStatus: eSubmissionStatus,
      eValidationStatus: eValidationStatus
    };
  },
  storeConfig: {
    state: state$1,
    actions: actions,
    mutations: mutations$1,
    getters: getters
  },
  methods: {
    submitForm: function submitForm() {
      this.store.dispatch(Actions.SUBMIT_FORM);
    }
  }
});var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  key: 0,
  class: "alert alert-danger"
};
var _hoisted_3 = {
  key: 1
};
var _hoisted_4 = {
  key: 0,
  class: "alert alert-info"
};
var _hoisted_5 = {
  key: 1,
  class: "alert alert-info"
};
var _hoisted_6 = {
  key: 2,
  class: "alert alert-danger"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$submissionForm;

  var _component_SubmissionForm = vue.resolveComponent("SubmissionForm");

  return _ctx.submissionForm && Object.keys(_ctx.submissionForm).length > 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [vue.createVNode(_component_SubmissionForm, {
    model: _ctx.submissionForm
  }, null, 8, ["model"]), ((_ctx$submissionForm = _ctx.submissionForm) === null || _ctx$submissionForm === void 0 ? void 0 : _ctx$submissionForm.validationStatus) === _ctx.eValidationStatus.INVALID ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, "Form validation failed.")) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [_ctx.submissionStatus === _ctx.eSubmissionStatus.InProgress ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, "Submitting...")) : vue.createCommentVNode("", true), _ctx.submissionStatus === _ctx.eSubmissionStatus.Success ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5, "Submission successful")) : vue.createCommentVNode("", true), _ctx.submissionStatus === _ctx.eSubmissionStatus.Fail ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6, "Submission failed")) : vue.createCommentVNode("", true)])), vue.createElementVNode("button", {
    class: "btn btn-primary",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.submitForm();
    })
  }, "Submit")])) : vue.createCommentVNode("", true);
}script.render = render;/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,Carousel:script$J,KeywordSearch:script$G,ItemTemplateEditor:script$B,ItemEditor:script$A,ItemViewer:script$m,ProcessManager:script$k,Grid:script$h,ChildFormSubmission:script$1,FormSubmission:script});var install = function installApplets(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default':install,Carousel:script$J,KeywordSearch:script$G,ItemTemplateEditor:script$B,ItemEditor:script$A,ItemViewer:script$m,ProcessManager:script$k,Grid:script$h,ChildFormSubmission:script$1,FormSubmission:script});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    var key = componentName;
    var val = component;
    install[key] = val;
  }
});module.exports=install;