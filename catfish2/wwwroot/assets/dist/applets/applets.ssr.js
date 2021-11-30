'use strict';var vue=require('vue');function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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
};var script$5 = vue.defineComponent({
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
});var _hoisted_1$5 = /*#__PURE__*/vue.createElementVNode("h2", null, "Carousel", -1);

var _hoisted_2$3 = {
  class: "row"
};
var _hoisted_3$3 = {
  class: "row"
};
var _hoisted_4$2 = {
  class: "row"
};
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", null, [_hoisted_1$5, vue.createElementVNode("div", _hoisted_2$3, "Page Id: " + vue.toDisplayString(_ctx.pageId), 1), vue.createElementVNode("div", _hoisted_3$3, "Block Id: " + vue.toDisplayString(_ctx.blockId), 1), vue.createElementVNode("div", _hoisted_4$2, "Data Attributes " + vue.toDisplayString(_ctx.dataAttributes), 1)]);
}script$5.render = render$5;function getDevtoolsGlobalHook() {
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
var state$1 = {
  keywordQueryModel: null,
  searchResult: null,
  offset: 0,
  max: 25,
  pageId: null,
  blockId: null
};var _mutations;

//Declare MutationTypes
var Mutations$1; //Create a mutation tree that implement all mutation interfaces

(function (Mutations) {
  Mutations["SET_SOURCE"] = "SET_SOURCE";
  Mutations["SET_KEYWORDS"] = "SET_KEYWORDS";
  Mutations["SET_RESULTS"] = "SET_RESULTS";
  Mutations["SET_OFFSET"] = "SET_OFFSET";
  Mutations["SET_PAGE_SIZE"] = "SET_PAGE_SIZE";
})(Mutations$1 || (Mutations$1 = {}));

var mutations$1 = (_mutations = {}, _defineProperty(_mutations, Mutations$1.SET_SOURCE, function (state, payload) {
  state.pageId = payload.pageId;
  state.blockId = payload.blockId;
}), _defineProperty(_mutations, Mutations$1.SET_KEYWORDS, function (state, payload) {
  console.log('SET_KEYWORDS Payload: ', payload);
  state.keywordQueryModel = payload;
}), _defineProperty(_mutations, Mutations$1.SET_RESULTS, function (state, payload) {
  state.searchResult = payload;
  state.offset = payload.first - 1;
}), _defineProperty(_mutations, Mutations$1.SET_OFFSET, function (state, payload) {
  //console.log('SET_OFFSET: payload: ', payload)
  state.offset = payload;
}), _defineProperty(_mutations, Mutations$1.SET_PAGE_SIZE, function (state, payload) {
  //console.log('SET_PAGE_SIZE: payload: ', payload)
  state.max = payload;
}), _mutations);var _actions$1;
//Declare ActionTypes
var Actions$1;

(function (Actions) {
  Actions["INIT_FILTER"] = "INIT_FILTER";
  Actions["FILTER_BY_KEYWORDS"] = "FILTER_BY_KEYWORDS";
  Actions["NEXT_PAGE"] = "NEXT_PAGE";
  Actions["PREVIOUS_PAGE"] = "PREVIOUS_PAGE";
  Actions["FRESH_SEARCH"] = "FRESH_SEARCH";
  Actions["SAVE_KEYWORDS"] = "SAVE_KEYWORDS";
})(Actions$1 || (Actions$1 = {}));

var actions$1 = (_actions$1 = {}, _defineProperty(_actions$1, Actions$1.INIT_FILTER, function (store) {
  //console.log('Store: ', JSON.stringify(store.state))
  var api = window.location.origin + "/applets/api/keywordsearch/keywords/page/".concat(store.state.pageId, "/block/").concat(store.state.blockId);
  console.log('Keyword Load API: ', api);
  fetch(api).then(function (response) {
    return response.json();
  }).then(function (data) {
    store.commit(Mutations$1.SET_KEYWORDS, data);
  });
}), _defineProperty(_actions$1, Actions$1.FILTER_BY_KEYWORDS, function (store) {
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
    store.commit(Mutations$1.SET_RESULTS, data);
  }).catch(function (error) {
    console.error('Item Load API Error:', error);
  });
}), _defineProperty(_actions$1, Actions$1.NEXT_PAGE, function (store) {
  store.commit(Mutations$1.SET_OFFSET, store.state.offset + store.state.max);
  store.dispatch(Actions$1.FILTER_BY_KEYWORDS);
}), _defineProperty(_actions$1, Actions$1.PREVIOUS_PAGE, function (store) {
  var offset = Math.max(store.state.offset - store.state.max, 0);
  store.commit(Mutations$1.SET_OFFSET, offset);
  store.dispatch(Actions$1.FILTER_BY_KEYWORDS);
}), _defineProperty(_actions$1, Actions$1.FRESH_SEARCH, function (store, pageSize) {
  store.commit(Mutations$1.SET_OFFSET, 0);
  if (pageSize) store.commit(Mutations$1.SET_PAGE_SIZE, pageSize);
  store.dispatch(Actions$1.FILTER_BY_KEYWORDS);
}), _defineProperty(_actions$1, Actions$1.SAVE_KEYWORDS, function (store, source) {
  console.log("save keywords action :" + JSON.stringify(source));
  store.commit(Mutations$1.SET_KEYWORDS, source);
}), _actions$1);var getters$1 = {
  //  items: (state): Item[] | undefined => {
  //    return state.searchResult?.items
  //  },
  searchParamStorageKey: function searchParamStorageKey(state) {
    var _state$blockId;

    return ((_state$blockId = state.blockId) === null || _state$blockId === void 0 ? void 0 : _state$blockId.toString()) + "SearchParams";
  }
};var script$4 = vue.defineComponent({
  name: "KeywordFilter",
  setup: function setup() {
    var store = useStore(); //console.log("Store: ", store)

    var runFreshSearch = function runFreshSearch() {
      return store.dispatch(Actions$1.FRESH_SEARCH);
    };

    return {
      runFreshSearch: runFreshSearch,
      keywordQueryModel: vue.computed(function () {
        return store.state.keywordQueryModel;
      })
    };
  }
});var _hoisted_1$4 = {
  key: 0
};
var _hoisted_2$2 = {
  key: 0,
  class: "font-weight-bold"
};
var _hoisted_3$2 = ["value", "onUpdate:modelValue"];
var _hoisted_4$1 = {
  class: "ml-1"
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$keywordQueryMode;

  return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList((_ctx$keywordQueryMode = _ctx.keywordQueryModel) === null || _ctx$keywordQueryMode === void 0 ? void 0 : _ctx$keywordQueryMode.containers, function (container, cIdx) {
    var _ctx$keywordQueryMode2, _container$name;

    return vue.openBlock(), vue.createElementBlock("div", {
      key: container
    }, [((_ctx$keywordQueryMode2 = _ctx.keywordQueryModel) === null || _ctx$keywordQueryMode2 === void 0 ? void 0 : _ctx$keywordQueryMode2.containers.length) > 1 && (container === null || container === void 0 ? void 0 : (_container$name = container.name) === null || _container$name === void 0 ? void 0 : _container$name.length) > 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, vue.toDisplayString(container.name), 1)) : vue.createCommentVNode("", true), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(container.fields, function (field, fIdx) {
      return vue.openBlock(), vue.createElementBlock("div", {
        key: field,
        class: "mb-3"
      }, [field.name.length > 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$2, vue.toDisplayString(field.name), 1)) : vue.createCommentVNode("", true), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(field.values, function (value, vIdx) {
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
        }, null, 40, _hoisted_3$2), [[vue.vModelCheckbox, _ctx.keywordQueryModel.containers[cIdx].fields[fIdx].selected[vIdx]]]), vue.createElementVNode("label", _hoisted_4$1, vue.toDisplayString(value), 1)]);
      }), 128))]);
    }), 128))]);
  }), 128);
}script$4.render = render$4;var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

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
  !function (t, e) {
    module.exports = e() ;
  }(commonjsGlobal, function () {

    var t = 1e3,
        e = 6e4,
        n = 36e5,
        r = "millisecond",
        i = "second",
        s = "minute",
        u = "hour",
        a = "day",
        o = "week",
        f = "month",
        h = "quarter",
        c = "year",
        d = "date",
        $ = "Invalid Date",
        l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        M = {
      name: "en",
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
    },
        m = function m(t, e, n) {
      var r = String(t);
      return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    },
        g = {
      s: m,
      z: function z(t) {
        var e = -t.utcOffset(),
            n = Math.abs(e),
            r = Math.floor(n / 60),
            i = n % 60;
        return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
      },
      m: function t(e, n) {
        if (e.date() < n.date()) return -t(n, e);
        var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
            i = e.clone().add(r, f),
            s = n - i < 0,
            u = e.clone().add(r + (s ? -1 : 1), f);
        return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
      },
      a: function a(t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
      },
      p: function p(t) {
        return {
          M: f,
          y: c,
          w: o,
          d: a,
          D: d,
          h: u,
          m: s,
          s: i,
          ms: r,
          Q: h
        }[t] || String(t || "").toLowerCase().replace(/s$/, "");
      },
      u: function u(t) {
        return void 0 === t;
      }
    },
        D = "en",
        v = {};

    v[D] = M;

    var p = function p(t) {
      return t instanceof _;
    },
        S = function S(t, e, n) {
      var r;
      if (!t) return D;
      if ("string" == typeof t) v[t] && (r = t), e && (v[t] = e, r = t);else {
        var i = t.name;
        v[i] = t, r = i;
      }
      return !n && r && (D = r), r || !n && D;
    },
        w = function w(t, e) {
      if (p(t)) return t.clone();
      var n = "object" == _typeof(e) ? e : {};
      return n.date = t, n.args = arguments, new _(n);
    },
        O = g;

    O.l = S, O.i = p, O.w = function (t, e) {
      return w(t, {
        locale: e.$L,
        utc: e.$u,
        x: e.$x,
        $offset: e.$offset
      });
    };

    var _ = function () {
      function M(t) {
        this.$L = S(t.locale, null, !0), this.parse(t);
      }

      var m = M.prototype;
      return m.parse = function (t) {
        this.$d = function (t) {
          var e = t.date,
              n = t.utc;
          if (null === e) return new Date(NaN);
          if (O.u(e)) return new Date();
          if (e instanceof Date) return new Date(e);

          if ("string" == typeof e && !/Z$/i.test(e)) {
            var r = e.match(l);

            if (r) {
              var i = r[2] - 1 || 0,
                  s = (r[7] || "0").substring(0, 3);
              return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
            }
          }

          return new Date(e);
        }(t), this.$x = t.x || {}, this.init();
      }, m.init = function () {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, m.$utils = function () {
        return O;
      }, m.isValid = function () {
        return !(this.$d.toString() === $);
      }, m.isSame = function (t, e) {
        var n = w(t);
        return this.startOf(e) <= n && n <= this.endOf(e);
      }, m.isAfter = function (t, e) {
        return w(t) < this.startOf(e);
      }, m.isBefore = function (t, e) {
        return this.endOf(e) < w(t);
      }, m.$g = function (t, e, n) {
        return O.u(t) ? this[e] : this.set(n, t);
      }, m.unix = function () {
        return Math.floor(this.valueOf() / 1e3);
      }, m.valueOf = function () {
        return this.$d.getTime();
      }, m.startOf = function (t, e) {
        var n = this,
            r = !!O.u(e) || e,
            h = O.p(t),
            $ = function $(t, e) {
          var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
          return r ? i : i.endOf(a);
        },
            l = function l(t, e) {
          return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);
        },
            y = this.$W,
            M = this.$M,
            m = this.$D,
            g = "set" + (this.$u ? "UTC" : "");

        switch (h) {
          case c:
            return r ? $(1, 0) : $(31, 11);

          case f:
            return r ? $(1, M) : $(0, M + 1);

          case o:
            var D = this.$locale().weekStart || 0,
                v = (y < D ? y + 7 : y) - D;
            return $(r ? m - v : m + (6 - v), M);

          case a:
          case d:
            return l(g + "Hours", 0);

          case u:
            return l(g + "Minutes", 1);

          case s:
            return l(g + "Seconds", 2);

          case i:
            return l(g + "Milliseconds", 3);

          default:
            return this.clone();
        }
      }, m.endOf = function (t) {
        return this.startOf(t, !1);
      }, m.$set = function (t, e) {
        var n,
            o = O.p(t),
            h = "set" + (this.$u ? "UTC" : ""),
            $ = (n = {}, n[a] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[u] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[o],
            l = o === a ? this.$D + (e - this.$W) : e;

        if (o === f || o === c) {
          var y = this.clone().set(d, 1);
          y.$d[$](l), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
        } else $ && this.$d[$](l);

        return this.init(), this;
      }, m.set = function (t, e) {
        return this.clone().$set(t, e);
      }, m.get = function (t) {
        return this[O.p(t)]();
      }, m.add = function (r, h) {
        var d,
            $ = this;
        r = Number(r);

        var l = O.p(h),
            y = function y(t) {
          var e = w($);
          return O.w(e.date(e.date() + Math.round(t * r)), $);
        };

        if (l === f) return this.set(f, this.$M + r);
        if (l === c) return this.set(c, this.$y + r);
        if (l === a) return y(1);
        if (l === o) return y(7);
        var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[l] || 1,
            m = this.$d.getTime() + r * M;
        return O.w(m, this);
      }, m.subtract = function (t, e) {
        return this.add(-1 * t, e);
      }, m.format = function (t) {
        var e = this,
            n = this.$locale();
        if (!this.isValid()) return n.invalidDate || $;

        var r = t || "YYYY-MM-DDTHH:mm:ssZ",
            i = O.z(this),
            s = this.$H,
            u = this.$m,
            a = this.$M,
            o = n.weekdays,
            f = n.months,
            h = function h(t, n, i, s) {
          return t && (t[n] || t(e, r)) || i[n].substr(0, s);
        },
            c = function c(t) {
          return O.s(s % 12 || 12, t, "0");
        },
            d = n.meridiem || function (t, e, n) {
          var r = t < 12 ? "AM" : "PM";
          return n ? r.toLowerCase() : r;
        },
            l = {
          YY: String(this.$y).slice(-2),
          YYYY: this.$y,
          M: a + 1,
          MM: O.s(a + 1, 2, "0"),
          MMM: h(n.monthsShort, a, f, 3),
          MMMM: h(f, a),
          D: this.$D,
          DD: O.s(this.$D, 2, "0"),
          d: String(this.$W),
          dd: h(n.weekdaysMin, this.$W, o, 2),
          ddd: h(n.weekdaysShort, this.$W, o, 3),
          dddd: o[this.$W],
          H: String(s),
          HH: O.s(s, 2, "0"),
          h: c(1),
          hh: c(2),
          a: d(s, u, !0),
          A: d(s, u, !1),
          m: String(u),
          mm: O.s(u, 2, "0"),
          s: String(this.$s),
          ss: O.s(this.$s, 2, "0"),
          SSS: O.s(this.$ms, 3, "0"),
          Z: i
        };

        return r.replace(y, function (t, e) {
          return e || l[t] || i.replace(":", "");
        });
      }, m.utcOffset = function () {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m.diff = function (r, d, $) {
        var l,
            y = O.p(d),
            M = w(r),
            m = (M.utcOffset() - this.utcOffset()) * e,
            g = this - M,
            D = O.m(this, M);
        return D = (l = {}, l[c] = D / 12, l[f] = D, l[h] = D / 3, l[o] = (g - m) / 6048e5, l[a] = (g - m) / 864e5, l[u] = g / n, l[s] = g / e, l[i] = g / t, l)[y] || g, $ ? D : O.a(D);
      }, m.daysInMonth = function () {
        return this.endOf(f).$D;
      }, m.$locale = function () {
        return v[this.$L];
      }, m.locale = function (t, e) {
        if (!t) return this.$L;
        var n = this.clone(),
            r = S(t, e, !0);
        return r && (n.$L = r), n;
      }, m.clone = function () {
        return O.w(this.$d, this);
      }, m.toDate = function () {
        return new Date(this.valueOf());
      }, m.toJSON = function () {
        return this.isValid() ? this.toISOString() : null;
      }, m.toISOString = function () {
        return this.$d.toISOString();
      }, m.toString = function () {
        return this.$d.toUTCString();
      }, M;
    }(),
        b = _.prototype;

    return w.prototype = b, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function (t) {
      b[t[1]] = function (e) {
        return this.$g(e, t[0], t[1]);
      };
    }), w.extend = function (t, e) {
      return t.$i || (t(e, _, w), t.$i = !0), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function (t) {
      return w(1e3 * t);
    }, w.en = v[D], w.Ls = v, w.p = {}, w;
  });
});
var dayjs = dayjs_min;var script$3 = vue.defineComponent({
  name: "ItemList",
  props: {},
  setup: function setup() {
    var store = useStore();

    var nextPage = function nextPage() {
      return store.dispatch(Actions$1.NEXT_PAGE);
    };

    var previousPage = function previousPage() {
      return store.dispatch(Actions$1.PREVIOUS_PAGE);
    };

    var freshSearch = function freshSearch(pageSize) {
      return store.dispatch(Actions$1.FRESH_SEARCH, pageSize);
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
});var _hoisted_1$3 = {
  class: "itemList"
};
var _hoisted_2$1 = {
  key: 0
};
var _hoisted_3$1 = {
  key: 0
};
var _hoisted_4 = {
  key: 1
};

var _hoisted_5 = /*#__PURE__*/vue.createElementVNode("option", null, "25", -1);

var _hoisted_6 = /*#__PURE__*/vue.createElementVNode("option", null, "50", -1);

var _hoisted_7 = /*#__PURE__*/vue.createElementVNode("option", null, "100", -1);

var _hoisted_8 = [_hoisted_5, _hoisted_6, _hoisted_7];
var _hoisted_9 = {
  key: 1
};
var _hoisted_10 = {
  class: "item"
};
var _hoisted_11 = {
  class: "item-title"
};
var _hoisted_12 = ["href"];
var _hoisted_13 = {
  key: 1
};
var _hoisted_14 = {
  class: "item-date"
};
var _hoisted_15 = {
  class: "item-subtitle"
};
var _hoisted_16 = {
  class: "categories"
};
var _hoisted_17 = {
  class: "badge rounded-pill bg-dark text-white m-1"
};
var _hoisted_18 = {
  class: "content"
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$items;

  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [((_ctx$items = _ctx.items) === null || _ctx$items === void 0 ? void 0 : _ctx$items.length) > 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$1, [_ctx.first > 1 ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$1, [vue.createElementVNode("i", {
    class: "fas fa-angle-double-left",
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.previousPage && _ctx.previousPage.apply(_ctx, arguments);
    })
  })])) : vue.createCommentVNode("", true), vue.createTextVNode(" " + vue.toDisplayString(_ctx.first) + "-" + vue.toDisplayString(_ctx.last) + " of " + vue.toDisplayString(_ctx.count) + " ", 1), _ctx.count > _ctx.last ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4, [vue.createElementVNode("i", {
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
  }, _hoisted_8, 544), [[vue.vModelSelect, _ctx.selectedPageSize]])])])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_9, "No results found.")), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.items, function (item) {
    var _item$detailedViewUrl;

    return vue.openBlock(), vue.createElementBlock("div", {
      key: item.id
    }, [vue.createElementVNode("div", _hoisted_10, [vue.createElementVNode("h3", _hoisted_11, [((_item$detailedViewUrl = item.detailedViewUrl) === null || _item$detailedViewUrl === void 0 ? void 0 : _item$detailedViewUrl.length) > 0 ? (vue.openBlock(), vue.createElementBlock("a", {
      key: 0,
      href: item.detailedViewUrl
    }, vue.toDisplayString(item.title), 9, _hoisted_12)) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_13, vue.toDisplayString(item.title), 1))]), vue.createElementVNode("div", _hoisted_14, vue.toDisplayString(_ctx.formatDate(item.date)), 1), vue.createElementVNode("h5", _hoisted_15, vue.toDisplayString(item.subtitle), 1), vue.createElementVNode("div", _hoisted_16, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.categories, function (cat) {
      return vue.openBlock(), vue.createElementBlock("span", _hoisted_17, vue.toDisplayString(cat), 1);
    }), 256))]), vue.createElementVNode("div", _hoisted_18, vue.toDisplayString(item.content), 1)])]);
  }), 128))]);
}script$3.render = render$3;var script$2 = vue.defineComponent({
  name: "Applet",
  components: {
    KeywordFilter: script$4,
    ItemList: script$3
  },
  props: props,
  setup: function setup(p) {
    console.log('Keyword Search setup ...', p); //We need to use store in this setup method. so let's load it first.

    var store = useStore(); //Storing the page and block IDs in the store

    store.commit(Mutations$1.SET_SOURCE, {
      pageId: p.pageId,
      blockId: p.blockId
    }); //See if we can load a SearchParams object from local storage

    var searchParamsStr = localStorage.getItem(store.getters.searchParamStorageKey);
    var searchParams;

    if (searchParamsStr && searchParamsStr.length > 0 && (searchParams = JSON.parse(searchParamsStr)) && searchParams.keywords) {
      //Restoring the store state from data reloaded from the state
      store.commit(Mutations$1.SET_KEYWORDS, searchParams.keywords);
      store.commit(Mutations$1.SET_OFFSET, searchParams.offset);
      store.commit(Mutations$1.SET_PAGE_SIZE, searchParams.max);
    } else {
      //Dispatch an action to loaf keywords
      store.dispatch(Actions$1.INIT_FILTER);
    } //When the component is mounted, execute a search query based on the current patameters in the store.state.


    vue.onMounted(function () {
      return store.dispatch(Actions$1.FILTER_BY_KEYWORDS);
    });
    var keywordQueryModel = vue.ref(store.state.keywordQueryModel);
    return {
      keywordQueryModel: keywordQueryModel
    };
  },
  storeConfig: {
    state: state$1,
    actions: actions$1,
    mutations: mutations$1,
    getters: getters$1
  }
});var _hoisted_1$2 = {
  class: "row"
};
var _hoisted_2 = {
  class: "col-md-4 text-left"
};
var _hoisted_3 = {
  class: "col-md-8"
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_KeywordFilter = vue.resolveComponent("KeywordFilter");

  var _component_ItemList = vue.resolveComponent("ItemList");

  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [vue.createElementVNode("div", _hoisted_2, [vue.createVNode(_component_KeywordFilter)]), vue.createElementVNode("div", _hoisted_3, [vue.createVNode(_component_ItemList)])]);
}script$2.render = render$2;//Declare State interface
var state = {
  Id: null
};//Declare MutationTypes
var Mutations; //Create a mutation tree that implement all mutation interfaces

(function (Mutations) {
  Mutations["SET_ID"] = "SET_ID";
})(Mutations || (Mutations = {}));

var mutations = _defineProperty({}, Mutations.SET_ID, function (state, payload) {
  state.Id = payload;
  console.log("template id : " + state.Id);
});var _actions;

var Actions;

(function (Actions) {
  Actions["LOAD_TEMPLATE"] = "LOAD_TEMPLATE";
  Actions["SET_ID"] = "SET_ID";
})(Actions || (Actions = {}));

var actions = (_actions = {}, _defineProperty(_actions, Actions.LOAD_TEMPLATE, function (store) {
  //console.log('Store: ', JSON.stringify(store.state))
  var api = window.location.origin + "/applets/api/itemtemplates/".concat(store.state.Id);
  console.log('Keyword Load API: ', api);
  fetch(api).then(function (response) {
    return response.json();
  }).then(function (data) {
    //store.commit(Mutations.SET_KEYWORDS, data)
    console.log(JSON.stringify(data));
  });
}), _defineProperty(_actions, Actions.SET_ID, function (store, payload) {
  store.commit(Mutations.SET_ID, payload);
}), _actions);var getters = {//getTemplateId: state => {
  //    return state.queryParameters["templateId"];
  //}
};var script$1 = vue.defineComponent({
  name: "ItemTemplateEditor",
  components: {},
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
    state: state,
    actions: actions,
    mutations: mutations,
    getters: getters
  }
});var _hoisted_1$1 = /*#__PURE__*/vue.createElementVNode("h3", null, "Item Template Editor", -1);

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [_hoisted_1$1, vue.createElementVNode("div", null, "Item Template ID: " + vue.toDisplayString(_ctx.queryParameters.id), 1)], 64);
}script$1.render = render$1;var script = vue.defineComponent({
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
});var _hoisted_1 = /*#__PURE__*/vue.createElementVNode("h2", null, "Item Ediror", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", null, [_hoisted_1, vue.createElementVNode("div", null, "Item ID: " + vue.toDisplayString(_ctx.queryParameters.id), 1)]);
}script.render = render;/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,Carousel:script$5,KeywordSearch:script$2,ItemTemplateEditor:script$1,ItemEditor:script});var install = function installApplets(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default':install,Carousel:script$5,KeywordSearch:script$2,ItemTemplateEditor:script$1,ItemEditor:script});// only expose one global var, with component exports exposed as properties of
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