import { defineComponent, openBlock, createElementBlock, createElementVNode, toDisplayString, inject, watch, reactive, computed, Fragment, renderList, createCommentVNode, withDirectives, vModelCheckbox, ref, createTextVNode, vModelSelect, onMounted, resolveComponent, createVNode, normalizeClass, pushScopeId, popScopeId, createBlock, toRefs, normalizeStyle, withModifiers, onBeforeUnmount, onActivated, onDeactivated, h, vModelText, vModelDynamic, vModelRadio, resolveDynamicComponent, withCtx } from 'vue';

var props = {
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
};

var script$R = defineComponent({
  name: "Carousel",
  components: {},
  props,

  setup(p, ctx) {
    console.log('Carousel setup ...');
    console.log('props: ', p);
    console.log('context: ', ctx);
  },

  mounted() {
    console.log('Carousel mounted ...');
  }

});

const _hoisted_1$y = /*#__PURE__*/createElementVNode("h2", null, "Carousel", -1);

const _hoisted_2$r = {
  class: "row"
};
const _hoisted_3$h = {
  class: "row"
};
const _hoisted_4$d = {
  class: "row"
};
function render$R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [_hoisted_1$y, createElementVNode("div", _hoisted_2$r, "Page Id: " + toDisplayString(_ctx.pageId), 1), createElementVNode("div", _hoisted_3$h, "Block Id: " + toDisplayString(_ctx.blockId), 1), createElementVNode("div", _hoisted_4$d, "Data Attributes " + toDisplayString(_ctx.dataAttributes), 1)]);
}

script$R.render = render$R;

function getDevtoolsGlobalHook() {
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
const isProxyAvailable = typeof Proxy === 'function';

const HOOK_SETUP = 'devtools-plugin:setup';
const HOOK_PLUGIN_SETTINGS_SET = 'plugin:settings:set';

class ApiProxy {
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
}

function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
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
}

/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */

var storeKey = 'store';

function useStore (key) {
  if ( key === void 0 ) key = null;

  return inject(key !== null ? key : storeKey)
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

  store._state = reactive({
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
  watch(function () { return store._state.data; }, function () {
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
  return watch(function () { return getter(this$1$1.state, this$1$1.getters); }, cb, Object.assign({}, options))
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

Object.defineProperties( Store.prototype, prototypeAccessors );

const state$7 = {
  keywordQueryModel: null,
  searchResult: null,
  offset: 0,
  max: 25,
  pageId: null,
  blockId: null
};

//Declare MutationTypes
var Mutations$7;

(function (Mutations) {
  Mutations["SET_SOURCE"] = "SET_SOURCE";
  Mutations["SET_KEYWORDS"] = "SET_KEYWORDS";
  Mutations["SET_RESULTS"] = "SET_RESULTS";
  Mutations["SET_OFFSET"] = "SET_OFFSET";
  Mutations["SET_PAGE_SIZE"] = "SET_PAGE_SIZE";
})(Mutations$7 || (Mutations$7 = {})); //Create a mutation tree that implement all mutation interfaces


const mutations$8 = {
  [Mutations$7.SET_SOURCE](state, payload) {
    state.pageId = payload.pageId;
    state.blockId = payload.blockId;
  },

  [Mutations$7.SET_KEYWORDS](state, payload) {
    console.log('SET_KEYWORDS Payload: ', payload);
    state.keywordQueryModel = payload;
  },

  [Mutations$7.SET_RESULTS](state, payload) {
    state.searchResult = payload;
    state.offset = payload.first - 1;
  },

  [Mutations$7.SET_OFFSET](state, payload) {
    //console.log('SET_OFFSET: payload: ', payload)
    state.offset = payload;
  },

  [Mutations$7.SET_PAGE_SIZE](state, payload) {
    //console.log('SET_PAGE_SIZE: payload: ', payload)
    state.max = payload;
  }

};

var Actions$7;

(function (Actions) {
  Actions["INIT_FILTER"] = "INIT_FILTER";
  Actions["FILTER_BY_KEYWORDS"] = "FILTER_BY_KEYWORDS";
  Actions["NEXT_PAGE"] = "NEXT_PAGE";
  Actions["PREVIOUS_PAGE"] = "PREVIOUS_PAGE";
  Actions["FRESH_SEARCH"] = "FRESH_SEARCH";
  Actions["SAVE_KEYWORDS"] = "SAVE_KEYWORDS";
})(Actions$7 || (Actions$7 = {}));

const actions$8 = {
  [Actions$7.INIT_FILTER](store) {
    //console.log('Store: ', JSON.stringify(store.state))
    const api = window.location.origin + `/applets/api/keywordsearch/keywords/page/${store.state.pageId}/block/${store.state.blockId}`;
    console.log('Keyword Load API: ', api);
    fetch(api).then(response => response.json()).then(data => {
      store.commit(Mutations$7.SET_KEYWORDS, data);
    });
  },

  [Actions$7.FILTER_BY_KEYWORDS](store) {
    console.log("Dispatched Actions.FILTER_BY_KEYWORDS. Query model: ", JSON.stringify(store.state.keywordQueryModel)); //Saving current search parameters in the local storage

    if (store.state.blockId) {
      const searchParams = {
        keywords: store.state.keywordQueryModel,
        offset: store.state.offset,
        max: store.state.max
      };
      localStorage.setItem(store.getters.searchParamStorageKey, JSON.stringify(searchParams));
    }

    const api = window.location.origin + `/applets/api/keywordsearch/items/`;
    console.log("Item Load API: ", api);
    const formData = new FormData();
    if (store.state.pageId) formData.append("pageId", store.state.pageId.toString());
    if (store.state.blockId) formData.append("blockId", store.state.blockId.toString());
    formData.append("offset", store.state.offset.toString());
    formData.append("max", store.state.max.toString());
    formData.append("queryParams", JSON.stringify(store.state.keywordQueryModel)); //console.log("Form Data: ", formData)

    fetch(api, {
      method: 'POST',
      body: formData
    }).then(response => response.json()).then(data => {
      store.commit(Mutations$7.SET_RESULTS, data);
    }).catch(error => {
      console.error('Item Load API Error:', error);
    });
  },

  [Actions$7.NEXT_PAGE](store) {
    store.commit(Mutations$7.SET_OFFSET, store.state.offset + store.state.max);
    store.dispatch(Actions$7.FILTER_BY_KEYWORDS);
  },

  [Actions$7.PREVIOUS_PAGE](store) {
    const offset = Math.max(store.state.offset - store.state.max, 0);
    store.commit(Mutations$7.SET_OFFSET, offset);
    store.dispatch(Actions$7.FILTER_BY_KEYWORDS);
  },

  [Actions$7.FRESH_SEARCH](store, pageSize) {
    store.commit(Mutations$7.SET_OFFSET, 0);
    if (pageSize) store.commit(Mutations$7.SET_PAGE_SIZE, pageSize);
    store.dispatch(Actions$7.FILTER_BY_KEYWORDS);
  },

  [Actions$7.SAVE_KEYWORDS](store, source) {
    console.log("save keywords action :" + JSON.stringify(source));
    store.commit(Mutations$7.SET_KEYWORDS, source);
  } ////async [Actions.INIT_FILTER_ASYNC](store, source: KeywordSource) {
  ////  store.commit(Mutations.SET_SOURCE, source);
  ////  const api = window.location.origin +
  ////    `/applets/api/keywordsearch/keywords/page/${source.pageId}/block/${source.blockId}`;
  ////  console.log('Keyword Load API: ', api)
  ////  const res = await fetch(api);
  ////  const data = await res.json()
  ////  store.commit(Mutations.SET_KEYWORDS, data);
  ////},


};

const getters$8 = {
  //  items: (state): Item[] | undefined => {
  //    return state.searchResult?.items
  //  },
  searchParamStorageKey: state => {
    var _state$blockId;

    return ((_state$blockId = state.blockId) === null || _state$blockId === void 0 ? void 0 : _state$blockId.toString()) + "SearchParams";
  }
};

var script$Q = defineComponent({
  name: "KeywordFilter",

  setup() {
    const store = useStore(); //console.log("Store: ", store)

    const runFreshSearch = () => store.dispatch(Actions$7.FRESH_SEARCH);

    return {
      runFreshSearch,
      keywordQueryModel: computed(() => store.state.keywordQueryModel)
    };
  }

});

const _hoisted_1$x = {
  key: 0
};
const _hoisted_2$q = {
  key: 0,
  class: "font-weight-bold"
};
const _hoisted_3$g = ["value", "onUpdate:modelValue"];
const _hoisted_4$c = {
  class: "ml-1"
};
function render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$keywordQueryMode;

  return openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$keywordQueryMode = _ctx.keywordQueryModel) === null || _ctx$keywordQueryMode === void 0 ? void 0 : _ctx$keywordQueryMode.containers, (container, cIdx) => {
    var _ctx$keywordQueryMode2, _container$name;

    return openBlock(), createElementBlock("div", {
      key: container
    }, [((_ctx$keywordQueryMode2 = _ctx.keywordQueryModel) === null || _ctx$keywordQueryMode2 === void 0 ? void 0 : _ctx$keywordQueryMode2.containers.length) > 1 && (container === null || container === void 0 ? void 0 : (_container$name = container.name) === null || _container$name === void 0 ? void 0 : _container$name.length) > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$x, toDisplayString(container.name), 1)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(container.fields, (field, fIdx) => {
      return openBlock(), createElementBlock("div", {
        key: field,
        class: "mb-3"
      }, [field.name.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$q, toDisplayString(field.name), 1)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(field.values, (value, vIdx) => {
        return openBlock(), createElementBlock("div", {
          key: value
        }, [withDirectives(createElementVNode("input", {
          type: "checkbox",
          value: value,
          "onUpdate:modelValue": $event => _ctx.keywordQueryModel.containers[cIdx].fields[fIdx].selected[vIdx] = $event,
          onChange: _cache[0] || (_cache[0] = function () {
            return _ctx.runFreshSearch && _ctx.runFreshSearch(...arguments);
          })
        }, null, 40, _hoisted_3$g), [[vModelCheckbox, _ctx.keywordQueryModel.containers[cIdx].fields[fIdx].selected[vIdx]]]), createElementVNode("label", _hoisted_4$c, toDisplayString(value), 1)]);
      }), 128))]);
    }), 128))]);
  }), 128);
}

script$Q.render = render$Q;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

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
}

var dayjs_min = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else {var i=t.name;v[i]=t,r=i;}return !n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t);}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return O},m.isValid=function(){return !(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));
});

var dayjs = dayjs_min;

var script$P = defineComponent({
  name: "ItemList",
  props: {},

  setup() {
    const store = useStore();

    const nextPage = () => store.dispatch(Actions$7.NEXT_PAGE);

    const previousPage = () => store.dispatch(Actions$7.PREVIOUS_PAGE);

    const freshSearch = pageSize => store.dispatch(Actions$7.FRESH_SEARCH, pageSize);

    const selectedPageSize = ref(25);
    return {
      items: computed(() => {
        var _store$state$searchRe;

        return (_store$state$searchRe = store.state.searchResult) === null || _store$state$searchRe === void 0 ? void 0 : _store$state$searchRe.items;
      }),
      freshSearch,
      nextPage,
      previousPage,
      selectedPageSize,
      count: computed(() => {
        var _store$state$searchRe2;

        return (_store$state$searchRe2 = store.state.searchResult) === null || _store$state$searchRe2 === void 0 ? void 0 : _store$state$searchRe2.count;
      }),
      first: computed(() => {
        var _store$state$searchRe3;

        return (_store$state$searchRe3 = store.state.searchResult) === null || _store$state$searchRe3 === void 0 ? void 0 : _store$state$searchRe3.first;
      }),
      last: computed(() => {
        var _store$state$searchRe4;

        return (_store$state$searchRe4 = store.state.searchResult) === null || _store$state$searchRe4 === void 0 ? void 0 : _store$state$searchRe4.last;
      })
    };
  },

  methods: {
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format('MMM DD, YYYY');
    }

  }
});

const _hoisted_1$w = {
  class: "itemList"
};
const _hoisted_2$p = {
  key: 0
};
const _hoisted_3$f = {
  key: 0
};
const _hoisted_4$b = {
  key: 1
};

const _hoisted_5$9 = /*#__PURE__*/createElementVNode("option", null, "25", -1);

const _hoisted_6$8 = /*#__PURE__*/createElementVNode("option", null, "50", -1);

const _hoisted_7$5 = /*#__PURE__*/createElementVNode("option", null, "100", -1);

const _hoisted_8$5 = [_hoisted_5$9, _hoisted_6$8, _hoisted_7$5];
const _hoisted_9$3 = {
  key: 1
};
const _hoisted_10$3 = {
  class: "item"
};
const _hoisted_11$3 = {
  class: "item-title"
};
const _hoisted_12$3 = ["href"];
const _hoisted_13$3 = {
  key: 1
};
const _hoisted_14$3 = {
  class: "item-date"
};
const _hoisted_15$3 = {
  class: "item-subtitle"
};
const _hoisted_16$3 = {
  class: "categories"
};
const _hoisted_17$2 = {
  class: "badge rounded-pill bg-dark text-white m-1"
};
const _hoisted_18$2 = {
  class: "content"
};
function render$P(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$items;

  return openBlock(), createElementBlock("div", _hoisted_1$w, [((_ctx$items = _ctx.items) === null || _ctx$items === void 0 ? void 0 : _ctx$items.length) > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$p, [_ctx.first > 1 ? (openBlock(), createElementBlock("span", _hoisted_3$f, [createElementVNode("i", {
    class: "fas fa-angle-double-left",
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.previousPage && _ctx.previousPage(...arguments);
    })
  })])) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(_ctx.first) + "-" + toDisplayString(_ctx.last) + " of " + toDisplayString(_ctx.count) + " ", 1), _ctx.count > _ctx.last ? (openBlock(), createElementBlock("span", _hoisted_4$b, [createElementVNode("i", {
    class: "fas fa-angle-double-right",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.nextPage && _ctx.nextPage(...arguments);
    })
  })])) : createCommentVNode("", true), createElementVNode("span", null, [withDirectives(createElementVNode("select", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.selectedPageSize = $event),
    class: "pull-right",
    onChange: _cache[3] || (_cache[3] = $event => _ctx.freshSearch(Number(_ctx.selectedPageSize)))
  }, _hoisted_8$5, 544), [[vModelSelect, _ctx.selectedPageSize]])])])) : (openBlock(), createElementBlock("div", _hoisted_9$3, "No results found.")), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, item => {
    var _item$detailedViewUrl;

    return openBlock(), createElementBlock("div", {
      key: item.id
    }, [createElementVNode("div", _hoisted_10$3, [createElementVNode("h3", _hoisted_11$3, [((_item$detailedViewUrl = item.detailedViewUrl) === null || _item$detailedViewUrl === void 0 ? void 0 : _item$detailedViewUrl.length) > 0 ? (openBlock(), createElementBlock("a", {
      key: 0,
      href: item.detailedViewUrl
    }, toDisplayString(item.title), 9, _hoisted_12$3)) : (openBlock(), createElementBlock("span", _hoisted_13$3, toDisplayString(item.title), 1))]), createElementVNode("div", _hoisted_14$3, toDisplayString(_ctx.formatDate(item.date)), 1), createElementVNode("h5", _hoisted_15$3, toDisplayString(item.subtitle), 1), createElementVNode("div", _hoisted_16$3, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.categories, cat => {
      return openBlock(), createElementBlock("span", _hoisted_17$2, toDisplayString(cat), 1);
    }), 256))]), createElementVNode("div", _hoisted_18$2, toDisplayString(item.content), 1)])]);
  }), 128))]);
}

script$P.render = render$P;

var script$O = defineComponent({
  name: "Applet",
  components: {
    KeywordFilter: script$Q,
    ItemList: script$P
  },
  props,

  setup(p) {
    console.log('Keyword Search setup ...', p); //We need to use store in this setup method. so let's load it first.

    const store = useStore(); //Storing the page and block IDs in the store

    store.commit(Mutations$7.SET_SOURCE, {
      pageId: p.pageId,
      blockId: p.blockId
    }); //See if we can load a SearchParams object from local storage

    const searchParamsStr = localStorage.getItem(store.getters.searchParamStorageKey);
    let searchParams;

    if (searchParamsStr && searchParamsStr.length > 0 && (searchParams = JSON.parse(searchParamsStr)) && searchParams.keywords) {
      //Restoring the store state from data reloaded from the state
      store.commit(Mutations$7.SET_KEYWORDS, searchParams.keywords);
      store.commit(Mutations$7.SET_OFFSET, searchParams.offset);
      store.commit(Mutations$7.SET_PAGE_SIZE, searchParams.max);
    } else {
      //Dispatch an action to loaf keywords
      store.dispatch(Actions$7.INIT_FILTER);
    } //When the component is mounted, execute a search query based on the current patameters in the store.state.


    onMounted(() => store.dispatch(Actions$7.FILTER_BY_KEYWORDS));
    const keywordQueryModel = ref(store.state.keywordQueryModel);
    return {
      keywordQueryModel
    };
  },

  storeConfig: {
    state: state$7,
    actions: actions$8,
    mutations: mutations$8,
    getters: getters$8
  }
});

const _hoisted_1$v = {
  class: "row"
};
const _hoisted_2$o = {
  class: "col-md-4 text-left"
};
const _hoisted_3$e = {
  class: "col-md-8"
};
function render$O(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KeywordFilter = resolveComponent("KeywordFilter");

  const _component_ItemList = resolveComponent("ItemList");

  return openBlock(), createElementBlock("div", _hoisted_1$v, [createElementVNode("div", _hoisted_2$o, [createVNode(_component_KeywordFilter)]), createElementVNode("div", _hoisted_3$e, [createVNode(_component_ItemList)])]);
}

script$O.render = render$O;

const state$6 = {
  Id: null,
  template: null
};

//Declare MutationTypes
var Mutations$6;

(function (Mutations) {
  Mutations["SET_ID"] = "SET_ID";
  Mutations["SET_TEMPLATE"] = "SET_TEMPLATE";
})(Mutations$6 || (Mutations$6 = {})); //Create a mutation tree that implement all mutation interfaces


const mutations$7 = {
  [Mutations$6.SET_ID](state, payload) {
    state.Id = payload; // console.log("template id : " + state.Id)
  },

  [Mutations$6.SET_TEMPLATE](state, payload) {
    state.template = payload; // console.log("template ID: " + state.template.id);
    // console.log("template name: " + state.template.templateName);
    // console.log("field length: " + state.template.dataContainer[0].fields.length)
  }

};

var Actions$6;

(function (Actions) {
  Actions["LOAD_TEMPLATE"] = "LOAD_TEMPLATE";
  Actions["SET_ID"] = "SET_ID";
})(Actions$6 || (Actions$6 = {}));

const actions$7 = {
  [Actions$6.LOAD_TEMPLATE](store) {
    const api = window.location.origin + `/applets/api/itemtemplates/${store.state.Id}`; //console.log('Keyword Load API: ', api)

    fetch(api).then(response => response.json()).then(data => {
      store.commit(Mutations$6.SET_TEMPLATE, data); //console.log("Loaded Template datacontainer: " + JSON.stringify(store.state.template?.dataContainer))
      // console.log("Datacontainer count: " + store.state.template?.dataContainer.length)
    });
  },

  [Actions$6.SET_ID](store, payload) {
    store.commit(Mutations$6.SET_ID, payload);
  }

};

const getters$7 = {//getTemplateId: state => {
  //    return state.queryParameters["templateId"];
  //}
};

var script$N = defineComponent({
  name: "NotificationEditor",
  props: {
    fieldContainer: {
      required: false,
      type: null
    }
  },

  setup() {}

});

function render$N(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("h4", null, toDisplayString(_ctx.fieldContainer.name.concatenatedContent), 1), createElementVNode("div", null, toDisplayString(_ctx.fieldContainer), 1)], 64);
}

script$N.render = render$N;

var script$M = defineComponent({
  name: "FormEditor",
  props: ['form'],

  setup() {}

});

function render$M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("h4", null, toDisplayString(_ctx.form.name.concatenatedContent), 1), createElementVNode("div", null, toDisplayString(_ctx.form), 1)], 64);
}

script$M.render = render$M;

var script$L = defineComponent({
  name: "MetadatasetEditor",
  props: ['metadataset'],

  setup() {}

});

function render$L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("h4", null, toDisplayString(_ctx.metadataset.name.concatenatedContent), 1), createElementVNode("div", null, toDisplayString(_ctx.metadataset), 1)], 64);
}

script$L.render = render$L;

var script$K = defineComponent({
  name: "ItemTemplate",
  components: {
    NotificationEditor: script$N,
    FormEditor: script$M,
    MetadatasetEditor: script$L
  },
  props: {},

  setup() {
    const store = useStore();
    const activePanel = ref(null);
    return {
      template: computed(() => store.state.template),
      metadataSets: computed(() => {
        var _store$state$template;

        return (_store$state$template = store.state.template) === null || _store$state$template === void 0 ? void 0 : _store$state$template.metadataSets;
      }),
      dataContainer: computed(() => {
        var _store$state$template2;

        return (_store$state$template2 = store.state.template) === null || _store$state$template2 === void 0 ? void 0 : _store$state$template2.dataContainer;
      }),
      activePanel
    };
  },

  methods: {
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format('MMM DD, YYYY');
    }

  }
});

const _withScopeId$2 = n => (pushScopeId("data-v-2579f0c4"), n = n(), popScopeId(), n);

const _hoisted_1$u = {
  class: "container row itemTemplate"
};
const _hoisted_2$n = {
  class: "col-md-4"
};

const _hoisted_3$d = /*#__PURE__*/_withScopeId$2(() => /*#__PURE__*/createElementVNode("div", {
  class: "sectionLabel"
}, "Overview", -1));

const _hoisted_4$a = [_hoisted_3$d];

const _hoisted_5$8 = /*#__PURE__*/_withScopeId$2(() => /*#__PURE__*/createElementVNode("div", {
  class: "sectionLabel"
}, "Notifications", -1));

const _hoisted_6$7 = [_hoisted_5$8];
const _hoisted_7$4 = ["onClick"];

const _hoisted_8$4 = /*#__PURE__*/_withScopeId$2(() => /*#__PURE__*/createElementVNode("div", {
  class: "sectionLabel"
}, "Forms", -1));

const _hoisted_9$2 = [_hoisted_8$4];
const _hoisted_10$2 = ["onClick"];

const _hoisted_11$2 = /*#__PURE__*/_withScopeId$2(() => /*#__PURE__*/createElementVNode("div", {
  class: "sectionLabel"
}, "Metadata Forms", -1));

const _hoisted_12$2 = [_hoisted_11$2];
const _hoisted_13$2 = ["onClick"];
const _hoisted_14$2 = {
  class: "col-md-8"
};
const _hoisted_15$2 = {
  key: 0,
  class: "col-12 wrapper"
};

const _hoisted_16$2 = /*#__PURE__*/_withScopeId$2(() => /*#__PURE__*/createElementVNode("h4", null, "Overview", -1));

const _hoisted_17$1 = [_hoisted_16$2];
const _hoisted_18$1 = {
  key: 1,
  class: "col-12 wrapper"
};

const _hoisted_19$1 = /*#__PURE__*/_withScopeId$2(() => /*#__PURE__*/createElementVNode("h4", null, "Notifications", -1));

const _hoisted_20$1 = [_hoisted_19$1];
const _hoisted_21$1 = {
  key: 0
};
const _hoisted_22$1 = {
  key: 2,
  class: "col-12 wrapper"
};

const _hoisted_23 = /*#__PURE__*/_withScopeId$2(() => /*#__PURE__*/createElementVNode("h4", null, "Forms", -1));

const _hoisted_24 = [_hoisted_23];
const _hoisted_25 = {
  key: 0
};
const _hoisted_26 = {
  key: 3,
  class: "col-12 wrapper"
};

const _hoisted_27 = /*#__PURE__*/_withScopeId$2(() => /*#__PURE__*/createElementVNode("h4", null, "Metadata Forms", -1));

const _hoisted_28 = [_hoisted_27];
const _hoisted_29 = {
  key: 0
};
function render$K(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$template, _ctx$metadataSets, _ctx$metadataSets2, _ctx$metadataSets3, _ctx$metadataSets4;

  const _component_NotificationEditor = resolveComponent("NotificationEditor");

  const _component_FormEditor = resolveComponent("FormEditor");

  const _component_MetadatasetEditor = resolveComponent("MetadatasetEditor");

  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("h3", null, toDisplayString((_ctx$template = _ctx.template) === null || _ctx$template === void 0 ? void 0 : _ctx$template.templateName), 1), createElementVNode("div", _hoisted_1$u, [createElementVNode("div", _hoisted_2$n, [createElementVNode("div", {
    class: normalizeClass(["col-12 menuEntry", _ctx.activePanel == 'overview' || _ctx.activePanel == null ? 'active' : '']),
    onClick: _cache[0] || (_cache[0] = $event => _ctx.activePanel = 'overview')
  }, _hoisted_4$a, 2), createElementVNode("div", {
    class: normalizeClass(["col-12 menuEntry", _ctx.activePanel == 'notifications' ? 'active' : '']),
    onClick: _cache[1] || (_cache[1] = $event => _ctx.activePanel = 'notifications')
  }, _hoisted_6$7, 2), (openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$metadataSets = _ctx.metadataSets) === null || _ctx$metadataSets === void 0 ? void 0 : _ctx$metadataSets.filter(m => m.isTemplate == true), ms => {
    return openBlock(), createElementBlock("div", {
      key: ms.id,
      class: normalizeClass(["col-12 menuEntry", _ctx.activePanel == ms.id ? 'active' : '']),
      onClick: $event => _ctx.activePanel = ms.id
    }, toDisplayString(ms.name.concatenatedContent), 11, _hoisted_7$4);
  }), 128)), createElementVNode("div", {
    class: "col-12 menuEntry",
    onClick: _cache[2] || (_cache[2] = $event => _ctx.activePanel = 'forms')
  }, _hoisted_9$2), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataContainer, form => {
    return openBlock(), createElementBlock("div", {
      key: form.id,
      class: normalizeClass(["col-12 menuEntry", _ctx.activePanel == form.id ? 'active' : '']),
      onClick: $event => _ctx.activePanel = form.id
    }, toDisplayString(form.name.concatenatedContent), 11, _hoisted_10$2);
  }), 128)), createElementVNode("div", {
    class: "col-12 menuEntry",
    onClick: _cache[3] || (_cache[3] = $event => _ctx.activePanel = 'metadata-forms')
  }, _hoisted_12$2), (openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$metadataSets2 = _ctx.metadataSets) === null || _ctx$metadataSets2 === void 0 ? void 0 : _ctx$metadataSets2.filter(m => m.isTemplate == false), ms => {
    return openBlock(), createElementBlock("div", {
      key: ms.id,
      class: normalizeClass(["col-12 menuEntry", _ctx.activePanel == ms.id ? 'active' : '']),
      onClick: $event => _ctx.activePanel = ms.id
    }, toDisplayString(ms.name.concatenatedContent), 11, _hoisted_13$2);
  }), 128))]), createElementVNode("div", _hoisted_14$2, [_ctx.activePanel == null || _ctx.activePanel == 'overview' ? (openBlock(), createElementBlock("div", _hoisted_15$2, _hoisted_17$1)) : createCommentVNode("", true), _ctx.activePanel == 'notifications' ? (openBlock(), createElementBlock("div", _hoisted_18$1, _hoisted_20$1)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$metadataSets3 = _ctx.metadataSets) === null || _ctx$metadataSets3 === void 0 ? void 0 : _ctx$metadataSets3.filter(m => m.isTemplate == true), ms => {
    return openBlock(), createElementBlock("div", {
      key: ms.id,
      class: "col-12 wrapper"
    }, [_ctx.activePanel == ms.id ? (openBlock(), createElementBlock("div", _hoisted_21$1, [createVNode(_component_NotificationEditor, {
      fieldContainer: ms
    }, null, 8, ["fieldContainer"])])) : createCommentVNode("", true)]);
  }), 128)), _ctx.activePanel == 'forms' ? (openBlock(), createElementBlock("div", _hoisted_22$1, _hoisted_24)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataContainer, form => {
    return openBlock(), createElementBlock("div", {
      key: form.id,
      class: "col-12 wrapper"
    }, [_ctx.activePanel == form.id ? (openBlock(), createElementBlock("div", _hoisted_25, [createVNode(_component_FormEditor, {
      form: form
    }, null, 8, ["form"])])) : createCommentVNode("", true)]);
  }), 128)), _ctx.activePanel == 'metadata-forms' ? (openBlock(), createElementBlock("div", _hoisted_26, _hoisted_28)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$metadataSets4 = _ctx.metadataSets) === null || _ctx$metadataSets4 === void 0 ? void 0 : _ctx$metadataSets4.filter(m => m.isTemplate == false), ms => {
    return openBlock(), createElementBlock("div", {
      key: ms.id,
      class: "col-12 wrapper"
    }, [_ctx.activePanel == ms.id ? (openBlock(), createElementBlock("div", _hoisted_29, [createVNode(_component_MetadatasetEditor, {
      metadataset: ms
    }, null, 8, ["metadataset"])])) : createCommentVNode("", true)]);
  }), 128))])])], 64);
}

function styleInject(css, ref) {
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
}

var css_248z$6 = "\n.menuEntry[data-v-2579f0c4]{\r\n        border: 1px solid Grey;\r\n        margin: 10px;\r\n        padding: 10px 10px;\n}\n.menuEntry.active[data-v-2579f0c4] {\r\n            background-color: #BBBCAA;\n}\n.sectionLabel[data-v-2579f0c4]{\r\n        font-weight: bold;\n}\n.wrapper[data-v-2579f0c4]{\r\n        margin: 0;\r\n        padding: 0;\n}\r\n";
styleInject(css_248z$6);

script$K.render = render$K;
script$K.__scopeId = "data-v-2579f0c4";

var script$J = defineComponent({
  name: "ItemTemplateEditor",
  components: {
    ItemTemplate: script$K
  },
  props,

  setup(p) {
    const store = useStore();
    console.log('Item Template Editor setup ...');
    console.log('props: ', JSON.stringify(p));
    const queryParams = p.queryParameters;
    store.dispatch("SET_ID", queryParams.id); //load the data

    store.dispatch("LOAD_TEMPLATE");
    return {
      queryParams
    };
  },

  storeConfig: {
    state: state$6,
    actions: actions$7,
    mutations: mutations$7,
    getters: getters$7
  }
});

const _hoisted_1$t = /*#__PURE__*/createElementVNode("h3", null, "Item Template Editor", -1);

function render$J(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ItemTemplate = resolveComponent("ItemTemplate");

  return openBlock(), createElementBlock(Fragment, null, [_hoisted_1$t, createElementVNode("div", null, "Item Template ID: " + toDisplayString(_ctx.queryParameters.id), 1), createVNode(_component_ItemTemplate)], 64);
}

script$J.render = render$J;

var script$I = defineComponent({
  name: "ItemEditor",
  components: {},
  props,

  setup(p, ctx) {
    console.log('Editor setup ...');
    console.log('props: ', p);
    console.log('context: ', ctx);
    const queryParameters = p.queryParameters;
    return {
      queryParameters
    };
  },

  mounted() {
    console.log('Editor mounted ...');
  }

});

const _hoisted_1$s = /*#__PURE__*/createElementVNode("h2", null, "Item Ediror", -1);

function render$I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [_hoisted_1$s, createElementVNode("div", null, "Item ID: " + toDisplayString(_ctx.queryParameters.id), 1)]);
}

script$I.render = render$I;

const state$5 = {
  id: null,
  item: null
};

//Declare MutationTypes
var Mutations$5;

(function (Mutations) {
  Mutations["SET_ID"] = "SET_ID";
  Mutations["SET_ITEM"] = "SET_ITEM";
  Mutations["CHANGE_STATE"] = "CHANGE_STATE";
})(Mutations$5 || (Mutations$5 = {})); //Create a mutation tree that implement all mutation interfaces


const mutations$6 = {
  [Mutations$5.SET_ID](state, payload) {
    state.id = payload;
  },

  [Mutations$5.SET_ITEM](state, payload) {
    state.item = payload;
  },

  [Mutations$5.CHANGE_STATE](state, payload) {
    //state.item
    console.log(JSON.stringify(state));
    console.log(JSON.stringify(payload));
  }

};

var Actions$5;

(function (Actions) {
  Actions["LOAD_ITEM"] = "LOAD_ITEM";
  Actions["CHANGE_STATE"] = "CHANGE_STATE";
})(Actions$5 || (Actions$5 = {}));

const actions$6 = {
  [Actions$5.LOAD_ITEM](store) {
    const api = window.location.origin + `/applets/api/items/${store.state.id}`;
    console.log('Item Load API: ', api);
    fetch(api).then(response => response.json()).then(data => {
      store.commit(Mutations$5.SET_ITEM, data);
    });
  },

  [Actions$5.CHANGE_STATE](store, payload) {
    console.log(JSON.stringify(store.state));
    const api = window.location.origin + `/applets/api/items/deleteItem/${payload}`;
    console.log('Item Load API: ', api);
    fetch(api, {
      method: "post"
    }).then(response => {
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
    .catch(error => {
      alert("Unknown error occurred.");
      console.log(error);
    });
  }

};

const getters$6 = {
  rootDataItem: state => {
    var _state$item, _state$item$dataConta, _state$item$dataConta2;

    return (_state$item = state.item) === null || _state$item === void 0 ? void 0 : (_state$item$dataConta = _state$item.dataContainer) === null || _state$item$dataConta === void 0 ? void 0 : (_state$item$dataConta2 = _state$item$dataConta.$values) === null || _state$item$dataConta2 === void 0 ? void 0 : _state$item$dataConta2.filter(dc => dc.isRoot)[0];
  },
  metadataSet: state => id => {
    var _state$item2, _state$item2$metadata, _state$item2$metadata2;

    console.log("metadataset getter id: " + JSON.stringify(id));
    return (_state$item2 = state.item) === null || _state$item2 === void 0 ? void 0 : (_state$item2$metadata = _state$item2.metadataSets) === null || _state$item2$metadata === void 0 ? void 0 : (_state$item2$metadata2 = _state$item2$metadata.$values) === null || _state$item2$metadata2 === void 0 ? void 0 : _state$item2$metadata2.find(ms => ms.templateId === id);
  },
  dataItemId: state => {
    var _state$item3, _state$item3$dataCont, _state$item3$dataCont2, _state$item3$dataCont3;

    return (_state$item3 = state.item) === null || _state$item3 === void 0 ? void 0 : (_state$item3$dataCont = _state$item3.dataContainer) === null || _state$item3$dataCont === void 0 ? void 0 : (_state$item3$dataCont2 = _state$item3$dataCont.$values) === null || _state$item3$dataCont2 === void 0 ? void 0 : (_state$item3$dataCont3 = _state$item3$dataCont2.filter(dc => dc.isRoot)[0]) === null || _state$item3$dataCont3 === void 0 ? void 0 : _state$item3$dataCont3.id;
  }
};

var eRefType;

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

class OptionsFieldMethods {
  static getSelectedFieldLabels(options) {
    return options === null || options === void 0 ? void 0 : options.filter(opt => opt.selected).map(opt => {
      var _opt$optionText;

      return (_opt$optionText = opt.optionText) === null || _opt$optionText === void 0 ? void 0 : _opt$optionText.values.$values.map(txt => txt.value).join(" / ");
    }).join(", ");
  }

}

var script$H = defineComponent({
  name: "Text",
  props: {
    model: {
      type: null,
      required: true
    }
  },
  methods: {
    isUrl(text) {
      return (text === null || text === void 0 ? void 0 : text.startsWith("http://")) || (text === null || text === void 0 ? void 0 : text.startsWith("https://"));
    }

  }
});

const _hoisted_1$r = {
  key: 0
};
const _hoisted_2$m = ["href"];
const _hoisted_3$c = {
  key: 1
};
function render$H(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.isUrl(_ctx.model.value) ? (openBlock(), createElementBlock("div", _hoisted_1$r, [createElementVNode("a", {
    href: _ctx.model.value
  }, toDisplayString(_ctx.model.value), 9, _hoisted_2$m)])) : (openBlock(), createElementBlock("div", _hoisted_3$c, toDisplayString(_ctx.model.value), 1));
}

script$H.render = render$H;

var script$G = defineComponent({
  name: "TextCollection",
  props: {
    model: {
      type: null,
      required: true
    }
  },
  components: {
    Text: script$H
  }
});

function render$G(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Text = resolveComponent("Text");

  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.values.$values, txt => {
    return openBlock(), createElementBlock("div", null, [createVNode(_component_Text, {
      model: txt
    }, null, 8, ["model"])]);
  }), 256);
}

script$G.render = render$G;

var script$F = defineComponent({
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
    TextCollection: script$G
  }
});

function render$F(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TextCollection = resolveComponent("TextCollection");

  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.values.$values, val => {
    return openBlock(), createElementBlock("div", {
      key: val.id
    }, [createVNode(_component_TextCollection, {
      model: val
    }, null, 8, ["model"])]);
  }), 128);
}

script$F.render = render$F;

var script$E = defineComponent({
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

});

function render$E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.values.$values, val => {
    return openBlock(), createElementBlock("div", null, toDisplayString(val.value), 1);
  }), 256);
}

script$E.render = render$E;

var script$D = defineComponent({
  name: "OptionsField",
  components: {},
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  methods: {
    getSelectedFieldLabels(field) {
      return OptionsFieldMethods.getSelectedFieldLabels(field.options.$values);
    }

  }
});

function render$D(_ctx, _cache, $props, $setup, $data, $options) {
  return toDisplayString(_ctx.getSelectedFieldLabels(_ctx.model));
}

script$D.render = render$D;

var script$C = defineComponent({
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
    formatToDecimal: (value, decimalPlaces) => {
      return Number(value).toFixed(decimalPlaces);
    }
  }
});

function render$C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.values.$values, val => {
    return openBlock(), createElementBlock("div", null, toDisplayString(_ctx.formatToDecimal(val, _ctx.numDecimalPlaces)), 1);
  }), 256);
}

script$C.render = render$C;

var script$B = defineComponent({
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
});

function render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.values.$values, val => {
    return openBlock(), createElementBlock("div", null, toDisplayString(val.value), 1);
  }), 256);
}

script$B.render = render$B;

var script$A = defineComponent({
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
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format('MMM DD, YYYY');
    }

  }
});

function render$A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.values.$values, val => {
    return openBlock(), createElementBlock("div", null, toDisplayString(_ctx.formatDate(val.value)), 1);
  }), 256);
}

script$A.render = render$A;

var script$z = defineComponent({
  name: "ChildFieldContainer",
  props: {
    model: null
  },
  components: {
    TextField: script$F,
    EmailField: script$E,
    OptionsField: script$D,
    DecimalField: script$C,
    IntegerField: script$B,
    DateField: script$A
  },
  methods: {
    getFieldType(field) {
      var _typeName;

      var typeName = field === null || field === void 0 ? void 0 : field.$type.substring(0, field.$type.indexOf(","));
      typeName = (_typeName = typeName) === null || _typeName === void 0 ? void 0 : _typeName.substring(typeName.lastIndexOf(".") + 1);
      return eFieldType[typeName];
    },

    isAttachmentField(field) {
      return this.getFieldType(field) === eFieldType.AttachmentField;
    },

    isOptionsField(field) {
      return this.getFieldType(field) === eFieldType.CheckboxField || this.getFieldType(field) === eFieldType.RadioField || this.getFieldType(field) === eFieldType.SelectField;
    },

    isCompositeField(field) {
      return this.getFieldType(field) === eFieldType.CompositeField;
    },

    isDateField(field) {
      return this.getFieldType(field) === eFieldType.DateField;
    },

    isDecimalField(field) {
      return this.getFieldType(field) === eFieldType.DecimalField;
    },

    isEmailField(field) {
      return this.getFieldType(field) === eFieldType.EmailField;
    },

    isFieldContainerReference(field) {
      return this.getFieldType(field) === eFieldType.FieldContainerReference;
    },

    isInfoSection(field) {
      return this.getFieldType(field) === eFieldType.InfoSection;
    },

    isIntegerField(field) {
      return this.getFieldType(field) === eFieldType.IntegerField;
    },

    isMonolingualTextField(field) {
      return this.getFieldType(field) === eFieldType.MonolingualTextField;
    },

    isTableField(field) {
      return this.getFieldType(field) === eFieldType.TableField;
    },

    isTextArea(field) {
      return this.getFieldType(field) === eFieldType.TextArea;
    },

    isTextField(field) {
      return this.getFieldType(field) === eFieldType.TextField;
    },

    cssClass(field) {
      return (field.cssClass ? field.cssClass : "") + " " + (field.fieldCssClass ? field.fieldCssClass : "");
    }

  }
});

const _hoisted_1$q = {
  class: "field-name col-md-3"
};
const _hoisted_2$l = {
  class: "field-value col-md-9"
};
const _hoisted_3$b = {
  key: 7
};
const _hoisted_4$9 = {
  key: 8
};
const _hoisted_5$7 = {
  key: 9
};
const _hoisted_6$6 = {
  key: 11
};
function render$z(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TextField = resolveComponent("TextField");

  const _component_EmailField = resolveComponent("EmailField");

  const _component_OptionsField = resolveComponent("OptionsField");

  const _component_DecimalField = resolveComponent("DecimalField");

  const _component_IntegerField = resolveComponent("IntegerField");

  const _component_DateField = resolveComponent("DateField");

  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.fields.$values, field => {
    return openBlock(), createElementBlock("div", {
      class: normalizeClass(["row", _ctx.cssClass(field)])
    }, [createElementVNode("div", _hoisted_1$q, toDisplayString(field.name.concatenatedContent), 1), createElementVNode("div", _hoisted_2$l, [this.isTextField(field) ? (openBlock(), createBlock(_component_TextField, {
      key: 0,
      model: field
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isTextArea(field) ? (openBlock(), createBlock(_component_TextField, {
      key: 1,
      model: field
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isEmailField(field) ? (openBlock(), createBlock(_component_EmailField, {
      key: 2,
      model: field
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isOptionsField(field) ? (openBlock(), createBlock(_component_OptionsField, {
      key: 3,
      model: field
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isDecimalField(field) ? (openBlock(), createBlock(_component_DecimalField, {
      key: 4,
      model: field
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isIntegerField(field) ? (openBlock(), createBlock(_component_IntegerField, {
      key: 5,
      model: field
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isDateField(field) ? (openBlock(), createBlock(_component_DateField, {
      key: 6,
      model: field
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isAttachmentField(_ctx.model) ? (openBlock(), createElementBlock("div", _hoisted_3$b, " AttachmentField ")) : createCommentVNode("", true), this.isCompositeField(_ctx.model) ? (openBlock(), createElementBlock("div", _hoisted_4$9, " CompositeField ")) : createCommentVNode("", true), this.isInfoSection(_ctx.model) ? (openBlock(), createElementBlock("div", _hoisted_5$7, " InfoSection ")) : createCommentVNode("", true), this.isMonolingualTextField(_ctx.model) ? (openBlock(), createBlock(_component_TextField, {
      key: 10,
      model: field
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isTableField(_ctx.model) ? (openBlock(), createElementBlock("div", _hoisted_6$6, " TableField ")) : createCommentVNode("", true)])], 2);
  }), 256);
}

script$z.render = render$z;

//import { Guid } from "guid-typescript";
var script$y = defineComponent({
  name: "FieldContainerReference",
  components: {
    ChildFieldContainer: script$z
  },
  props: {
    model: {
      type: null,
      required: true
    }
  },

  setup(p) {
    const store = useStore();
    const refId = ref(p.model.refId);
    console.log("refId: " + JSON.stringify(refId));
    return {
      refId,
      source: computed(() => store.getters.metadataSet(refId.value))
    };
  }

});

function render$y(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChildFieldContainer = resolveComponent("ChildFieldContainer");

  return openBlock(), createBlock(_component_ChildFieldContainer, {
    model: _ctx.source
  }, null, 8, ["model"]);
}

script$y.render = render$y;

var script$x = defineComponent({
  name: "AttachmentField",
  components: {},
  props: {
    model: {
      type: null,
      required: true
    }
  },

  setup(p) {
    const store = useStore();
    const itemId = ref(store.state.item.id);
    const dataItemId = ref(store.getters.dataItemId);
    const fileUrl = '/api/items/' + itemId.value + '/' + dataItemId.value + '/' + p.model.id + '/';
    return {
      itemId,
      fileUrl
    };
  }

});

const _hoisted_1$p = ["href"];
const _hoisted_2$k = ["src"];
function render$x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.files.$values, file => {
    return openBlock(), createElementBlock("div", null, [createElementVNode("a", {
      href: _ctx.fileUrl + file.fileName
    }, [createElementVNode("img", {
      src: file.thumbnail,
      class: "img-thumbnail"
    }, null, 8, _hoisted_2$k)], 8, _hoisted_1$p), createTextVNode(toDisplayString(file.originalFileName), 1)]);
  }), 256);
}

var css_248z$5 = "\n.img-thumbnail[data-v-307ae89a]{\r\n        width:35px;\r\n        height: auto;\r\n        margin-right: 10px;\n}\r\n";
styleInject(css_248z$5);

script$x.render = render$x;
script$x.__scopeId = "data-v-307ae89a";

var script$w = defineComponent({
  name: "InfoField",
  props: {
    model: {
      type: null,
      required: true
    }
  }
});

const _hoisted_1$o = ["innerHTML"];
function render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.content.values.$values, val => {
    return openBlock(), createElementBlock("div", {
      key: val.id
    }, [createElementVNode("div", {
      innerHTML: val.value
    }, null, 8, _hoisted_1$o)]);
  }), 128);
}

script$w.render = render$w;

var script$v = defineComponent({
  name: "FieldContainer",
  props: {
    model: null,
    hideFieldNames: Boolean
  },
  components: {
    TextField: script$F,
    EmailField: script$E,
    OptionsField: script$D,
    DecimalField: script$C,
    IntegerField: script$B,
    DateField: script$A,
    ReferenceField: script$y,
    AttachmentField: script$x,
    InfoField: script$w
  },
  methods: {
    getFieldType(field) {
      var _typeName;

      var typeName = field === null || field === void 0 ? void 0 : field.$type.substring(0, field.$type.indexOf(","));
      typeName = (_typeName = typeName) === null || _typeName === void 0 ? void 0 : _typeName.substring(typeName.lastIndexOf(".") + 1);
      return eFieldType[typeName];
    },

    isAttachmentField(field) {
      return this.getFieldType(field) === eFieldType.AttachmentField;
    },

    isOptionsField(field) {
      return this.getFieldType(field) === eFieldType.CheckboxField || this.getFieldType(field) === eFieldType.RadioField || this.getFieldType(field) === eFieldType.SelectField;
    },

    isCompositeField(field) {
      return this.getFieldType(field) === eFieldType.CompositeField;
    },

    isDateField(field) {
      return this.getFieldType(field) === eFieldType.DateField;
    },

    isDecimalField(field) {
      return this.getFieldType(field) === eFieldType.DecimalField;
    },

    isEmailField(field) {
      return this.getFieldType(field) === eFieldType.EmailField;
    },

    isFieldContainerReference(field) {
      return this.getFieldType(field) === eFieldType.FieldContainerReference;
    },

    isInfoSection(field) {
      return this.getFieldType(field) === eFieldType.InfoSection;
    },

    isIntegerField(field) {
      return this.getFieldType(field) === eFieldType.IntegerField;
    },

    isMonolingualTextField(field) {
      return this.getFieldType(field) === eFieldType.MonolingualTextField;
    },

    isTableField(field) {
      return this.getFieldType(field) === eFieldType.TableField;
    },

    isTextArea(field) {
      return this.getFieldType(field) === eFieldType.TextArea;
    },

    isTextField(field) {
      return this.getFieldType(field) === eFieldType.TextField;
    },

    cssClass(field) {
      return field.cssClass + " " + field.fieldCssClass;
    },

    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format('MMM DD, YYYY');
    }

  }
});

const _hoisted_1$n = {
  class: "timeStamp"
};
const _hoisted_2$j = {
  key: 0,
  class: "field-name col-md-3"
};
const _hoisted_3$a = {
  class: "field-value col-md-9"
};
const _hoisted_4$8 = {
  key: 10
};
const _hoisted_5$6 = {
  key: 11
};
function render$v(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ReferenceField = resolveComponent("ReferenceField");

  const _component_TextField = resolveComponent("TextField");

  const _component_EmailField = resolveComponent("EmailField");

  const _component_OptionsField = resolveComponent("OptionsField");

  const _component_DecimalField = resolveComponent("DecimalField");

  const _component_IntegerField = resolveComponent("IntegerField");

  const _component_DateField = resolveComponent("DateField");

  const _component_AttachmentField = resolveComponent("AttachmentField");

  const _component_InfoField = resolveComponent("InfoField");

  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("div", _hoisted_1$n, toDisplayString(_ctx.formatDate(_ctx.model.created)), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.fields.$values, field => {
    return openBlock(), createElementBlock("div", null, [this.isFieldContainerReference(field) ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(_ctx.cssClass(field))
    }, [createVNode(_component_ReferenceField, {
      model: field
    }, null, 8, ["model"])], 2)) : (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(["row", _ctx.cssClass(field)])
    }, [!_ctx.hideFieldNames ? (openBlock(), createElementBlock("div", _hoisted_2$j, toDisplayString(field.name.concatenatedContent), 1)) : createCommentVNode("", true), createElementVNode("div", _hoisted_3$a, [this.isTextField(field) ? (openBlock(), createBlock(_component_TextField, {
      key: 0,
      model: field
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isTextArea(field) ? (openBlock(), createBlock(_component_TextField, {
      key: 1,
      model: field
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isEmailField(field) ? (openBlock(), createBlock(_component_EmailField, {
      key: 2,
      model: field
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isOptionsField(field) ? (openBlock(), createBlock(_component_OptionsField, {
      key: 3,
      model: field
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isDecimalField(field) ? (openBlock(), createBlock(_component_DecimalField, {
      key: 4,
      model: field
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isIntegerField(field) ? (openBlock(), createBlock(_component_IntegerField, {
      key: 5,
      model: field
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isDateField(field) ? (openBlock(), createBlock(_component_DateField, {
      key: 6,
      model: field
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isMonolingualTextField(_ctx.model) ? (openBlock(), createBlock(_component_TextField, {
      key: 7,
      model: field
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isAttachmentField(field) ? (openBlock(), createBlock(_component_AttachmentField, {
      key: 8,
      model: field
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isInfoSection(field) ? (openBlock(), createBlock(_component_InfoField, {
      key: 9,
      model: field
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isCompositeField(field) ? (openBlock(), createElementBlock("div", _hoisted_4$8, " CompositeField ")) : createCommentVNode("", true), this.isTableField(field) ? (openBlock(), createElementBlock("div", _hoisted_5$6, " TableField ")) : createCommentVNode("", true)])], 2))]);
  }), 256))], 64);
}

script$v.render = render$v;

var script$u = defineComponent({
  name: "ItemViewer",
  components: {
    FieldContainer: script$v
  },
  props,

  setup(p) {
    const store = useStore();
    const dataAttributes = p.dataAttributes;
    console.log('Item Viewer setup ...');
    console.log('props: ', JSON.stringify(p));
    const isAdmin = dataAttributes["is-admin"];
    console.log('isAdmin: ', isAdmin);
    const queryParams = p.queryParameters;
    store.commit(Mutations$5.SET_ID, queryParams.iid); //load the data

    store.dispatch(Actions$5.LOAD_ITEM);
    return {
      store,
      queryParams,
      dataItem: computed(() => store.getters.rootDataItem),
      isAdmin
    };
  },

  storeConfig: {
    state: state$5,
    actions: actions$6,
    mutations: mutations$6,
    getters: getters$6
  },
  methods: {
    changeItemState(itemId) {
      if (confirm("Do you really want to delete this item?")) {
        // this.store.dispatch(Actions.DELETE_CHILD_INSTANCE, itemToRemove);
        console.log("id: " + itemId);
        this.store.dispatch(Actions$5.CHANGE_STATE, itemId);
      }
    }

  }
});

const _hoisted_1$m = {
  key: 0,
  class: "text-right"
};
const _hoisted_2$i = {
  class: "item"
};
function render$u(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FieldContainer = resolveComponent("FieldContainer");

  return openBlock(), createElementBlock(Fragment, null, [_ctx.isAdmin ? (openBlock(), createElementBlock("div", _hoisted_1$m, [createElementVNode("span", {
    class: "fas fa-remove",
    onClick: _cache[0] || (_cache[0] = $event => {
      _ctx.changeItemState(_ctx.queryParams.iid);
    })
  })])) : createCommentVNode("", true), createElementVNode("div", _hoisted_2$i, [_ctx.dataItem ? (openBlock(), createBlock(_component_FieldContainer, {
    key: 0,
    model: _ctx.dataItem
  }, null, 8, ["model"])) : createCommentVNode("", true)])], 64);
}

var css_248z$4 = "\n.field-name[data-v-f3c870c6] {\r\n        font-weight: bold !important;\n}\n.fa-remove[data-v-f3c870c6] {\r\n        color: red;\r\n        margin-left: 30px;\n}\r\n";
styleInject(css_248z$4);

script$u.render = render$u;
script$u.__scopeId = "data-v-f3c870c6";

var eIndexingStatus;

(function (eIndexingStatus) {
  eIndexingStatus[eIndexingStatus["InProgress"] = 1] = "InProgress";
  eIndexingStatus[eIndexingStatus["Ready"] = 2] = "Ready";
})(eIndexingStatus || (eIndexingStatus = {}));

//import { Guid } from 'guid-typescript'
const state$4 = {
  indexingStatus: {
    pageIndexingStatus: eIndexingStatus.Ready,
    dataIndexingStatus: eIndexingStatus.Ready
  }
};

//Declare MutationTypes
var Mutations$4;

(function (Mutations) {
  Mutations["SET_REINDEX_PAGE_STATUS"] = "SET_REINDEX_PAGE_STATUS";
  Mutations["SET_REINDEX_DATA_STATUS"] = "SET_REINDEX_DATA_STATUS";
  Mutations["SET_REINDEX_STATUS"] = "SET_REINDEX_STATUS";
})(Mutations$4 || (Mutations$4 = {})); //Create a mutation tree that implement all mutation interfaces


const mutations$5 = {
  [Mutations$4.SET_REINDEX_PAGE_STATUS](state, payload) {
    console.log("SET_REINDEX_PAGE_STATUS: ", payload);
    state.indexingStatus.pageIndexingStatus = payload;
  },

  [Mutations$4.SET_REINDEX_DATA_STATUS](state, payload) {
    console.log("SET_REINDEX_DATA_STATUS: ", payload);
    state.indexingStatus.dataIndexingStatus = payload;
  },

  [Mutations$4.SET_REINDEX_STATUS](state, payload) {
    console.log("SET_REINDEX_STATUS: ", payload);
    state.indexingStatus = payload;
  }

};

var Actions$4;

(function (Actions) {
  Actions["REINDEX_DATA"] = "REINDEX_DATA";
  Actions["REINDEX_PAGES"] = "REINDEX_PAGES";
  Actions["FETCH_REINDEX_STATUS"] = "FETCH_REINDEX_STATUS";
})(Actions$4 || (Actions$4 = {}));

const actions$5 = {
  [Actions$4.REINDEX_DATA](store) {
    const api = window.location.origin + `/applets/api/reindex/data`;
    store.commit(Mutations$4.SET_REINDEX_DATA_STATUS, eIndexingStatus.InProgress);
    fetch(api, {
      method: 'POST'
    }).then(response => response.json()).then(data => {
      store.commit(Mutations$4.SET_REINDEX_DATA_STATUS, data);
    }).catch(error => {
      console.error('Data reindexing error:', error);
    });
  },

  [Actions$4.REINDEX_PAGES](store) {
    const api = window.location.origin + `/applets/api/reindex/pages`;
    store.commit(Mutations$4.SET_REINDEX_PAGE_STATUS, eIndexingStatus.InProgress);
    fetch(api, {
      method: 'POST'
    }).then(response => response.json()).then(data => {
      store.commit(Mutations$4.SET_REINDEX_PAGE_STATUS, data);
    }).catch(error => {
      console.error('Page reindexing error:', error);
    });
  },

  [Actions$4.FETCH_REINDEX_STATUS](store) {
    const api = window.location.origin + `/applets/api/reindex/status`;
    fetch(api).then(response => response.json()).then(data => {
      store.commit(Mutations$4.SET_REINDEX_STATUS, data);
    }).catch(error => {
      console.error('Fetch reindexing status error:', error);
    });
  }

};

const getters$5 = {};

var script$t = defineComponent({
  name: "IndexingPanel",
  props: {},

  setup() {
    const store = useStore();
    return {
      reindexData: () => store.dispatch(Actions$4.REINDEX_DATA),
      reindexPages: () => store.dispatch(Actions$4.REINDEX_PAGES),
      isPageIndexingReady: computed(() => store.state.indexingStatus.pageIndexingStatus == eIndexingStatus.Ready),
      isDataIndexingReady: computed(() => store.state.indexingStatus.dataIndexingStatus == eIndexingStatus.Ready)
    };
  }

});

const _hoisted_1$l = /*#__PURE__*/createElementVNode("h5", {
  class: "card-title"
}, "Data Indexing", -1);

const _hoisted_2$h = /*#__PURE__*/createElementVNode("p", {
  class: "card-text"
}, "With supporting text below as a natural lead-in to additional content.", -1);

const _hoisted_3$9 = {
  key: 1,
  class: "btn btn-danger",
  disabled: ""
};

const _hoisted_4$7 = /*#__PURE__*/createElementVNode("br", null, null, -1);

const _hoisted_5$5 = /*#__PURE__*/createElementVNode("br", null, null, -1);

const _hoisted_6$5 = /*#__PURE__*/createElementVNode("h5", {
  class: "card-title"
}, "Page Indexing", -1);

const _hoisted_7$3 = /*#__PURE__*/createElementVNode("p", {
  class: "card-text"
}, "With supporting text below as a natural lead-in to additional content.", -1);

const _hoisted_8$3 = {
  key: 3,
  class: "btn btn-danger",
  disabled: ""
};
function render$t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [_hoisted_1$l, _hoisted_2$h, _ctx.isDataIndexingReady ? (openBlock(), createElementBlock("button", {
    key: 0,
    class: "btn btn-primary",
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.reindexData && _ctx.reindexData(...arguments);
    })
  }, "Reindex")) : (openBlock(), createElementBlock("button", _hoisted_3$9, "Indexing In-progress")), _hoisted_4$7, _hoisted_5$5, _hoisted_6$5, _hoisted_7$3, _ctx.isPageIndexingReady ? (openBlock(), createElementBlock("button", {
    key: 2,
    class: "btn btn-primary",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.reindexPages && _ctx.reindexPages(...arguments);
    })
  }, "Reindex")) : (openBlock(), createElementBlock("button", _hoisted_8$3, "Indexing In-progress"))], 64);
}

script$t.render = render$t;

var script$s = defineComponent({
  name: "Applet",
  components: {
    IndexingPanel: script$t
  },
  props,

  setup(p) {
    console.log('Process Manager setup ...', p);
    const store = useStore();
    onMounted(() => store.dispatch(Actions$4.FETCH_REINDEX_STATUS));
  },

  storeConfig: {
    state: state$4,
    actions: actions$5,
    mutations: mutations$5,
    getters: getters$5
  }
});

const _hoisted_1$k = {
  class: "card"
};

const _hoisted_2$g = /*#__PURE__*/createElementVNode("div", {
  class: "card-header"
}, " Indexing Processes ", -1);

const _hoisted_3$8 = {
  class: "card-body"
};
function render$s(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IndexingPanel = resolveComponent("IndexingPanel");

  return openBlock(), createElementBlock("div", _hoisted_1$k, [_hoisted_2$g, createElementVNode("div", _hoisted_3$8, [createVNode(_component_IndexingPanel)])]);
}

script$s.render = render$s;

//Declare MutationTypes
var Mutations$3;

(function (Mutations) {
  Mutations["SET_SOURCE"] = "SET_SOURCE";
  Mutations["SET_MODEL"] = "SET_MODEL";
})(Mutations$3 || (Mutations$3 = {})); //Create a mutation tree that implement all mutation interfaces


const mutations$4 = {
  [Mutations$3.SET_SOURCE](state, payload) {
    state.pageId = payload.pageId;
    state.blockId = payload.blockId;
  },

  [Mutations$3.SET_MODEL](state, payload) {
    state.model = payload;
  }

};

var Actions$3;

(function (Actions) {
  Actions["LOAD_BLOCK"] = "LOAD_BLOCK";
  Actions["LOAD_PAGE"] = "LOAD_PAGE";
})(Actions$3 || (Actions$3 = {}));

const actions$4 = {
  [Actions$3.LOAD_BLOCK](store) {
    if (!store.state.pageId) console.error("Page ID is null. It must be a valid GUID");
    if (!store.state.blockId) console.error("Block ID is null. It must be a valid GUID");
    const api = window.location.origin + `/applets/api/content/page/${store.state.pageId}/block/${store.state.blockId}`;
    console.log('LOAD_BLOCK API: ', api);
    fetch(api, {
      method: 'GET'
    }).then(response => response.json()).then(data => {
      store.commit(Mutations$3.SET_MODEL, data);
    }).catch(error => {
      console.error('LOAD_BLOCK error:', error);
    });
  },

  [Actions$3.LOAD_PAGE](store) {
    if (!store.state.pageId) throw new Error("Page ID is null. It must be a valid GUID");
    const api = window.location.origin + `/applets/api/content/page/${store.state.pageId}`;
    console.log('LOAD_PAGE API: ', api);
    fetch(api, {
      method: 'GET'
    }).then(response => response.json()).then(data => {
      store.commit(Mutations$3.SET_MODEL, data);
    }).catch(error => {
      console.error('LOAD_PAGE error:', error);
    });
  }

};

const getters$4 = {
  //  items: (state): Item[] | undefined => {
  //    return state.searchResult?.items
  //  },
  searchParamStorageKey: state => {
    var _state$blockId;

    return ((_state$blockId = state.blockId) === null || _state$blockId === void 0 ? void 0 : _state$blockId.toString()) + "SearchParams";
  }
};

var script$r = defineComponent({
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
    resizeHandler() {
      this.setViewHeight(false);
    },

    setViewHeight(immediate) {
      if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
      const delay = immediate ? 0 : this.debounceMs;
      this.resizeTimeout = setTimeout(() => {
        if (this.root) {
          const h = Math.round(this.root.clientWidth / this.aspectRatio);
          this.root.style.height = `${h}px`;
        }
      }, delay);
    }

  },

  created() {
    window.addEventListener("resize", this.resizeHandler); //console.log("Added resize event listener")
  },

  destroyed() {
    window.removeEventListener("resize", this.resizeHandler); //console.log("Removed resize event listener")
  },

  mounted() {
    this.setViewHeight(true);
  },

  setup(props) {
    //console.log("ImgDiv setup ...")
    const {
      image
    } = toRefs(props);
    const root = ref();
    const resizeTimeout = ref();
    return {
      root,
      imageUrl: computed(() => {
        var _image$value, _image$value$publicUr;

        return (_image$value = image.value) === null || _image$value === void 0 ? void 0 : (_image$value$publicUr = _image$value.publicUrl) === null || _image$value$publicUr === void 0 ? void 0 : _image$value$publicUr.replace(/^~+/g, '');
      }),
      aspectRatio: computed(() => image.value ? image.value.width / image.value.height : 1),
      resizeTimeout
    };
  }

});

const _hoisted_1$j = ["id"];
function render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "root",
    style: normalizeStyle([{
      backgroundImage: `url(${_ctx.imageUrl})`
    }, {
      "background-size": "cover"
    }]),
    id: _ctx.image.id,
    class: "cf-img-div"
  }, null, 12, _hoisted_1$j);
}

script$r.render = render$r;

var script$q = defineComponent({
  name: "CardTemplate",
  components: {
    ImgDiv: script$r
  },
  props: {
    model: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const {
      model
    } = toRefs(props);
    return {
      model,
      cardImage: computed(() => {
        var _model$value;

        return (_model$value = model.value) === null || _model$value === void 0 ? void 0 : _model$value.cardImage.media;
      }),
      popupImageUrl: computed(() => {
        var _model$value2, _model$value2$modalIm, _model$value2$modalIm2;

        return (_model$value2 = model.value) === null || _model$value2 === void 0 ? void 0 : (_model$value2$modalIm = _model$value2.modalImage) === null || _model$value2$modalIm === void 0 ? void 0 : (_model$value2$modalIm2 = _model$value2$modalIm.media) === null || _model$value2$modalIm2 === void 0 ? void 0 : _model$value2$modalIm2.publicUrl;
      }),
      title: computed(() => {
        var _model$value3;

        return (_model$value3 = model.value) === null || _model$value3 === void 0 ? void 0 : _model$value3.cardTitle.value;
      }),
      subTitle: computed(() => {
        var _model$value4;

        return (_model$value4 = model.value) === null || _model$value4 === void 0 ? void 0 : _model$value4.cardSubTitle.value;
      }),
      hasModel: computed(() => model.value.hasAModal),
      modelImage: computed(() => {
        var _model$value5;

        return (_model$value5 = model.value) === null || _model$value5 === void 0 ? void 0 : _model$value5.modalImage;
      }),
      modalTitle: computed(() => {
        var _model$value6;

        return (_model$value6 = model.value) === null || _model$value6 === void 0 ? void 0 : _model$value6.modalTitle.value;
      }),
      modalSubTitle: computed(() => {
        var _model$value7;

        return (_model$value7 = model.value) === null || _model$value7 === void 0 ? void 0 : _model$value7.modalSubTitle.value;
      })
    };
  }

});

const _hoisted_1$i = {
  class: "col-md-4 cf-card"
};
function render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_img_div = resolveComponent("img-div");

  return openBlock(), createElementBlock("div", _hoisted_1$i, [createVNode(_component_img_div, {
    image: _ctx.cardImage,
    "debounce-ms": 250,
    class: "img-div"
  }, null, 8, ["image"]), createElementVNode("h2", null, toDisplayString(_ctx.title), 1), createElementVNode("h4", null, toDisplayString(_ctx.subTitle), 1)]);
}

var css_248z$3 = "\n.cf-card{\r\n        text-align:center;\n}\r\n";
styleInject(css_248z$3);

script$q.render = render$q;

var script$p = defineComponent({
  name: "Applet",
  components: {
    CardTemplate: script$q
  },
  props,

  setup(p) {
    console.log('Grid setup ...');
    const store = useStore(); //Storing the page and block IDs in the store

    store.commit(Mutations$3.SET_SOURCE, {
      pageId: p.pageId,
      blockId: p.blockId
    }); //When the component is mounted, load the grid contents.

    onMounted(() => store.dispatch(Actions$3.LOAD_BLOCK));
    return {
      model: computed(() => store.state.model)
    };
  },

  storeConfig: {
    actions: actions$4,
    mutations: mutations$4,
    getters: getters$4
  }
});

const _hoisted_1$h = /*#__PURE__*/createElementVNode("h2", null, "Grid", -1);

const _hoisted_2$f = {
  class: "row"
};
function render$p(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model;

  const _component_CardTemplate = resolveComponent("CardTemplate");

  return openBlock(), createElementBlock("div", null, [_hoisted_1$h, createElementVNode("div", _hoisted_2$f, [(openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$model = _ctx.model) === null || _ctx$model === void 0 ? void 0 : _ctx$model.items, card => {
    return openBlock(), createBlock(_component_CardTemplate, {
      model: card
    }, null, 8, ["model"]);
  }), 256))])]);
}

script$p.render = render$p;

var guid = createCommonjsModule(function (module, exports) {
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

var guid$1 = guid;

var eSubmissionStatus;

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
  FlattenedFormFiledMutations["ADD_FILE"] = "ADD_FILE";
  FlattenedFormFiledMutations["REMOVE_FILE"] = "REMOVE_FILE";
})(FlattenedFormFiledMutations || (FlattenedFormFiledMutations = {}));

class FieldContainerUtils {
  static cssClass(field) {
    return field.cssClass + " " + field.fieldCssClass;
  }

  static getFieldType(field) {
    var _typeName;

    let typeName = field === null || field === void 0 ? void 0 : field.$type.substring(0, field.$type.indexOf(","));
    typeName = (_typeName = typeName) === null || _typeName === void 0 ? void 0 : _typeName.substring(typeName.lastIndexOf(".") + 1);
    return eFieldType[typeName];
  }

  static isAttachmentField(field) {
    return this.getFieldType(field) === eFieldType.AttachmentField;
  }

  static isOptionsField(field) {
    const fieldType = this.getFieldType(field);
    return fieldType === eFieldType.CheckboxField || fieldType === eFieldType.RadioField || fieldType === eFieldType.SelectField;
  }

  static isCompositeField(field) {
    return this.getFieldType(field) === eFieldType.CompositeField;
  }

  static isDateField(field) {
    return this.getFieldType(field) === eFieldType.DateField;
  }

  static isDecimalField(field) {
    return this.getFieldType(field) === eFieldType.DecimalField;
  }

  static isEmailField(field) {
    return this.getFieldType(field) === eFieldType.EmailField;
  }

  static isFieldContainerReference(field) {
    return this.getFieldType(field) === eFieldType.FieldContainerReference;
  }

  static isInfoSection(field) {
    return this.getFieldType(field) === eFieldType.InfoSection;
  }

  static isIntegerField(field) {
    return this.getFieldType(field) === eFieldType.IntegerField;
  }

  static isMonolingualTextField(field) {
    return this.getFieldType(field) === eFieldType.MonolingualTextField;
  }

  static isTableField(field) {
    return this.getFieldType(field) === eFieldType.TableField;
  }

  static isTextArea(field) {
    return this.getFieldType(field) === eFieldType.TextArea;
  }

  static isTextField(field) {
    return this.getFieldType(field) === eFieldType.TextField;
  }

  static isAudioRecorderField(field) {
    return this.getFieldType(field) === eFieldType.AudioRecorderField;
  }

}
function flattenFieldInputs(container, state) {
  var _container$fields, _container$fields$$va;

  //Populating the flattenedTextModels and flattenedOptionModels arrays
  container === null || container === void 0 ? void 0 : (_container$fields = container.fields) === null || _container$fields === void 0 ? void 0 : (_container$fields$$va = _container$fields.$values) === null || _container$fields$$va === void 0 ? void 0 : _container$fields$$va.forEach(value => {
    var _value$$type;

    //Try to parse the field type into eFieldType
    const absTypeStr = (_value$$type = value.$type) === null || _value$$type === void 0 ? void 0 : _value$$type.substring(0, value.$type.indexOf(","));
    const fieldTypeStr = absTypeStr.substring(absTypeStr.lastIndexOf(".") + 1);
    const fieldType = eFieldType[fieldTypeStr];
    const isMonoLinqualField = fieldType === eFieldType.DateField || fieldType === eFieldType.DecimalField || fieldType === eFieldType.EmailField || fieldType === eFieldType.IntegerField || fieldType === eFieldType.MonolingualTextField;
    const isMultilingualField = fieldType === eFieldType.TextArea || fieldType === eFieldType.TextField;
    const isOptionsField = fieldType === eFieldType.CheckboxField || fieldType === eFieldType.RadioField || fieldType === eFieldType.SelectField;

    if (isMonoLinqualField) {
      var _value$values, _value$values$$values;

      //Iterating through each text value and adding them to the flattened dictionary
      (_value$values = value.values) === null || _value$values === void 0 ? void 0 : (_value$values$$values = _value$values.$values) === null || _value$values$$values === void 0 ? void 0 : _value$values$$values.forEach(txtVal => {
        state.flattenedTextModels[txtVal.id.toString()] = txtVal;
      });
    } else if (isMultilingualField) {
      var _value$values2, _value$values2$$value;

      //Iterating through each value as a multilingual field
      (_value$values2 = value.values) === null || _value$values2 === void 0 ? void 0 : (_value$values2$$value = _value$values2.$values) === null || _value$values2$$value === void 0 ? void 0 : _value$values2$$value.forEach(multilingualVal => {
        var _multilingualVal$valu, _multilingualVal$valu2;

        //Iterating through each text value and adding them to the flattened dictionary
        (_multilingualVal$valu = multilingualVal.values) === null || _multilingualVal$valu === void 0 ? void 0 : (_multilingualVal$valu2 = _multilingualVal$valu.$values) === null || _multilingualVal$valu2 === void 0 ? void 0 : _multilingualVal$valu2.forEach(txtVal => {
          state.flattenedTextModels[txtVal.id.toString()] = txtVal;
        });
      });
    } else if (isOptionsField) {
      var _value$options, _value$options$$value;

      //Itenrating through each option and adding them to the flattened options dictionary
      (_value$options = value.options) === null || _value$options === void 0 ? void 0 : (_value$options$$value = _value$options.$values) === null || _value$options$$value === void 0 ? void 0 : _value$options$$value.forEach(opt => {
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
  }); // Iterate through attachment in state.flattenedOptionModels

  Object.keys(state.flattenedFileModels).forEach(function (key) {
    state.flattenedFileModels[key] = [];
  });
}
function isRequiredField(field) {
  return field !== null && field !== void 0 && field.required ? field.required : false;
}
function isRichTextField(field) {
  return field !== null && field !== void 0 && field.richText ? field.richText : false;
}

const state$3 = {
  itemTemplateId: null,
  formId: null,
  collectionId: null,
  groupId: null,
  form: null,
  flattenedTextModels: {},
  flattenedOptionModels: {},
  flattenedFileModels: {},
  submissionStatus: eSubmissionStatus.None,
  formLoadAPI: null,
  formSubmissionAPI: null
};

const state$2 = {
  itemInstanceId: null,
  childResponseFormId: null,
  childResponseForm: null,
  formInstances: null,
  ...state$3
};

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

class RegExpressions {}

_defineProperty(RegExpressions, "Email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/);

_defineProperty(RegExpressions, "Number", /^\d+$/);

_defineProperty(RegExpressions, "Decimal", /^[+-]?(\d+\.?\d*|\.\d+)$/);

function validateMultilingualTextField(field) {
  //If the field itself is not a required field, any contents in inner fields 
  //will be valid, including none
  if (!field.required) return eValidationStatus.VALID; //We are here means, this is a required field. This means, we need to make sure
  //the field (which can potentially have multiple values) has at least one value
  //in at least one language.

  let valueFound = false;

  for (let i = 0; !valueFound && field !== null && field !== void 0 && field.values && i < ((_field$values = field.values) === null || _field$values === void 0 ? void 0 : (_field$values$$values = _field$values.$values) === null || _field$values$$values === void 0 ? void 0 : _field$values$$values.length); ++i) {
    var _field$values, _field$values$$values, _field$values2;

    const txtCollection = field === null || field === void 0 ? void 0 : (_field$values2 = field.values) === null || _field$values2 === void 0 ? void 0 : _field$values2.$values[i];

    for (let k = 0; !valueFound && txtCollection.values && k < ((_txtCollection$values = txtCollection.values) === null || _txtCollection$values === void 0 ? void 0 : _txtCollection$values.$values.length); ++k) {
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
  let valueFound = false;
  let validationStatus = eValidationStatus.VALID;

  for (let i = 0; field !== null && field !== void 0 && field.values && i < ((_field$values3 = field.values) === null || _field$values3 === void 0 ? void 0 : _field$values3.$values.length); ++i) {
    var _field$values3, _field$values$$values2, _field$values$$values3;

    const valStr = (_field$values$$values2 = field.values.$values[i]) === null || _field$values$$values2 === void 0 ? void 0 : (_field$values$$values3 = _field$values$$values2.value) === null || _field$values$$values3 === void 0 ? void 0 : _field$values$$values3.trim();

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
  let valueFound = false;
  let validationStatus = eValidationStatus.VALID;

  for (let i = 0; field !== null && field !== void 0 && field.values && i < ((_field$values4 = field.values) === null || _field$values4 === void 0 ? void 0 : _field$values4.$values.length); ++i) {
    var _field$values4, _field$values$$values4;

    const valStr = (_field$values$$values4 = field.values.$values[i]) === null || _field$values$$values4 === void 0 ? void 0 : _field$values$$values4.value; //if it's empty or null the typeof will not return string 'number'

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
  let selectionFound = false;

  for (let i = 0; !selectionFound && (_field$options = field.options) !== null && _field$options !== void 0 && _field$options.$values && i < ((_field$options2 = field.options) === null || _field$options2 === void 0 ? void 0 : (_field$options2$$valu = _field$options2.$values) === null || _field$options2$$valu === void 0 ? void 0 : _field$options2$$valu.length); ++i) {
    var _field$options, _field$options2, _field$options2$$valu, _field$options3;

    selectionFound = (_field$options3 = field.options) === null || _field$options3 === void 0 ? void 0 : _field$options3.$values[i].selected;
  }

  return selectionFound ? eValidationStatus.VALID : eValidationStatus.VALUE_REQUIRED;
}
function validateFields(form) {
  var _form$fields, _form$fields$$values;

  let valid = true;
  (_form$fields = form.fields) === null || _form$fields === void 0 ? void 0 : (_form$fields$$values = _form$fields.$values) === null || _form$fields$$values === void 0 ? void 0 : _form$fields$$values.forEach(field => {
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
}

//    None = "None",
//    InProgress = "InProgress",
//    Success = "Success",
//    Fail = "Fail"
//}
//Declare MutationTypes

var Mutations$2;

(function (Mutations) {
  Mutations["CLEAR_FLATTENED_FIELD_MODELS"] = "CLEAR_FLATTENED_FIELD_mODELS";
  Mutations["SET_ITEM_TEMPLATE_ID"] = "SET_ITEM_TEMPLATE_ID";
  Mutations["SET_FORM_ID"] = "SET_FORM_ID";
  Mutations["SET_FORM"] = "SET_FORM";
  Mutations["SET_SUBMISSION_STATUS"] = "SET_SUBMISSION_STATUS";
  Mutations["SET_COLLECTION_ID"] = "SET_COLLECTION_ID";
  Mutations["SET_GROUP_ID"] = "SET_GROUP_ID";
})(Mutations$2 || (Mutations$2 = {})); //Create a mutation tree that implement all mutation interfaces


const mutations$3 = {
  [Mutations$2.CLEAR_FLATTENED_FIELD_MODELS](state) {
    state.flattenedTextModels = {};
    state.flattenedOptionModels = {};
  },

  [Mutations$2.SET_ITEM_TEMPLATE_ID](state, payload) {
    state.itemTemplateId = payload;
  },

  [Mutations$2.SET_FORM_ID](state, payload) {
    state.formId = payload;
  },

  [Mutations$2.SET_COLLECTION_ID](state, payload) {
    state.collectionId = payload;
  },

  [Mutations$2.SET_GROUP_ID](state, payload) {
    state.groupId = payload;
  },

  [Mutations$2.SET_FORM](state, payload) {
    state.form = payload;
    flattenFieldInputs(state.form, state); //console.log("state\n", JSON.stringify(state))
  },

  [FlattenedFormFiledMutations.SET_TEXT_VALUE](state, payload) {
    var _state$form;

    //console.log("payload id:", payload.id, "   payload value: ", payload.val)
    state.flattenedTextModels[payload.id.toString()].value = payload.val; //console.log("state flattenedTextModels", JSON.stringify(state.flattenedTextModels))
    //Re-validating the form

    if (((_state$form = state.form) === null || _state$form === void 0 ? void 0 : _state$form.validationStatus) === eValidationStatus.INVALID) validateFields(state.form);
  },

  [FlattenedFormFiledMutations.SET_OPTION_VALUE](state, payload) {
    state.flattenedOptionModels[payload.id.toString()].selected = payload.isSelected;
  },

  [Mutations$2.SET_SUBMISSION_STATUS](state, status) {
    //const fieldType: eFieldType = eFieldType[fieldTypeStr as keyof typeof eFieldType];
    state.submissionStatus = eSubmissionStatus[status];
  },

  [FlattenedFormFiledMutations.ADD_FILE](state, payload) {
    if (!state.flattenedFileModels[payload.id.toString()]) state.flattenedFileModels[payload.id.toString()] = [];
    state.flattenedFileModels[payload.id.toString()].push(payload.val);
  },

  [FlattenedFormFiledMutations.REMOVE_FILE](state, payload) {
    var _state$flattenedFileM;

    (_state$flattenedFileM = state.flattenedFileModels[payload.id.toString()]) === null || _state$flattenedFileM === void 0 ? void 0 : _state$flattenedFileM.splice(payload.index, 1);
  }

};

var Mutations$1;

(function (Mutations) {
  Mutations["SET_SUBMISSIONS"] = "SET_SUBMISSIONS";
  Mutations["SET_PARENT_ITEM_ID"] = "SET_PARENT_ITEM_ID";
  Mutations["APPEND_CHILD_INSTANCE"] = "APPEND_CHILD_INSTANCE";
  Mutations["SET_RESPONSE_FORM_ID"] = "SET_RESPONSE_FORM_ID";
  Mutations["SET_RESPONSE_FORM"] = "SET_RESPONSE_FORM";
  Mutations["APPEND_CHILD_RESPONSE_INSTANCE"] = "APPEND_CHILD_RESPONSE_INSTANCE";
  Mutations["DELETE_CHILD_RESPONSE_INSTANCE"] = "DELETE_CHILD_RESPONSE_INSTANCE";
  Mutations["DELETE_CHILD_INSTANCE"] = "DELETE_CHILD_INSTANCE";
})(Mutations$1 || (Mutations$1 = {})); //Create a mutation tree that implement all mutation interfaces


const mutations$2 = {
  [Mutations$1.SET_SUBMISSIONS](state, payload) {
    state.formInstances = payload;
  },

  [Mutations$1.SET_PARENT_ITEM_ID](state, payload) {
    state.itemInstanceId = payload;
  },

  [Mutations$1.APPEND_CHILD_INSTANCE](state, payload) {
    var _state$formInstances;

    (_state$formInstances = state.formInstances) === null || _state$formInstances === void 0 ? void 0 : _state$formInstances.$values.unshift(payload);
  },

  [Mutations$1.SET_RESPONSE_FORM_ID](state, payload) {
    state.childResponseFormId = payload;
  },

  [Mutations$1.SET_RESPONSE_FORM](state, payload) {
    state.childResponseForm = payload;
    flattenFieldInputs(state.childResponseForm, state);
  },

  [Mutations$1.APPEND_CHILD_RESPONSE_INSTANCE](state, payload) {
    var _state$formInstances2;

    const parent = (_state$formInstances2 = state.formInstances) === null || _state$formInstances2 === void 0 ? void 0 : _state$formInstances2.$values.find(inst => inst.id === (payload === null || payload === void 0 ? void 0 : payload.parentId));

    if (parent) {
      var _parent$childFieldCon;

      (_parent$childFieldCon = parent.childFieldContainers) === null || _parent$childFieldCon === void 0 ? void 0 : _parent$childFieldCon.$values.push(payload);
    }
  },

  [Mutations$1.DELETE_CHILD_RESPONSE_INSTANCE](state, payload) {
    var _state$formInstances3;

    const parent = (_state$formInstances3 = state.formInstances) === null || _state$formInstances3 === void 0 ? void 0 : _state$formInstances3.$values.find(inst => inst.id === (payload === null || payload === void 0 ? void 0 : payload.parentId));

    if (parent) {
      var _parent$childFieldCon2, _parent$childFieldCon3;

      const indexToRemove = parent === null || parent === void 0 ? void 0 : (_parent$childFieldCon2 = parent.childFieldContainers) === null || _parent$childFieldCon2 === void 0 ? void 0 : _parent$childFieldCon2.$values.indexOf(payload); //console.log("index to remove " + indexToRemove);

      if (indexToRemove >= 0) (_parent$childFieldCon3 = parent.childFieldContainers) === null || _parent$childFieldCon3 === void 0 ? void 0 : _parent$childFieldCon3.$values.splice(indexToRemove, 1);
    }
  },

  [Mutations$1.DELETE_CHILD_INSTANCE](state, payload) {
    var _state$formInstances4, _state$formInstances5;

    const indexToRemove = (_state$formInstances4 = state.formInstances) === null || _state$formInstances4 === void 0 ? void 0 : (_state$formInstances5 = _state$formInstances4.$values) === null || _state$formInstances5 === void 0 ? void 0 : _state$formInstances5.indexOf(payload);

    if (typeof indexToRemove !== 'undefined' && indexToRemove >= 0) {
      var _state$formInstances6;

      (_state$formInstances6 = state.formInstances) === null || _state$formInstances6 === void 0 ? void 0 : _state$formInstances6.$values.splice(indexToRemove, 1);
    }
  },

  ...mutations$3
};

var Actions$2;

(function (Actions) {
  Actions["LOAD_FORM"] = "LOAD_FORM";
  Actions["LOAD_SUBMISSIONS"] = "LOAD_SUBMISSIONS";
  Actions["LOAD_RESPONSE_FORM"] = "LOAD_RESPONSE_FORM";
  Actions["SUBMIT_CHILD_FORM"] = "SUBMIT_CHILD_FORM";
  Actions["SUBMIT_CHILD_RESPONSE_FORM"] = "SUBMIT_CHILD_RESPONSE_FORM";
  Actions["DELETE_CHILD_RESPONSE_INSTANCE"] = "DELETE_CHILD_RESPONSE_INSTANCE";
  Actions["DELETE_CHILD_INSTANCE"] = "DELETE_CHILD_INSTANCE";
})(Actions$2 || (Actions$2 = {}));

const actions$3 = {
  [Actions$2.LOAD_FORM](store) {
    const api = window.location.origin + `/applets/api/items/getchildform/${store.state.itemInstanceId}/${store.state.formId}`;
    fetch(api).then(response => response.json()).then(data => {
      store.commit(Mutations$2.SET_FORM, data);
    }).catch(error => {
      console.error('Actions.LOAD_FORM Error: ', error);
    });
  },

  [Actions$2.LOAD_RESPONSE_FORM](store) {
    const api = window.location.origin + `/applets/api/items/getchildform/${store.state.itemInstanceId}/${store.state.childResponseFormId}`;
    fetch(api).then(response => response.json()).then(data => {
      store.commit(Mutations$1.SET_RESPONSE_FORM, data);
    }).catch(error => {
      console.error('Actions.LOAD_FORM Error: ', error);
    });
  },

  [Actions$2.LOAD_SUBMISSIONS](store) {
    const api = window.location.origin + `/applets/api/items/getchildformsubmissions/${store.state.itemInstanceId}/${store.state.formId}`;
    console.log('Child Submissions Load API: ', api);
    fetch(api).then(response => response.json()).then(data => {
      store.commit(Mutations$1.SET_SUBMISSIONS, data);
    }).catch(error => {
      console.error('Submission loading error:', error);
    });
  },

  [Actions$2.SUBMIT_CHILD_FORM](store) {
    //Validating the form
    if (!store.state.form || !validateFields(store.state.form)) return;
    store.commit(Mutations$2.SET_SUBMISSION_STATUS, "InProgress");
    const api = window.location.origin + `/applets/api/items/appendchildforminstance/${store.state.itemInstanceId}`;
    const formData = new FormData();
    formData.append('datamodel', JSON.stringify(store.state.form));
    fetch(api, {
      body: formData,
      method: "post"
    }).then(response => response.json()).then(data => {
      const flattenModel = {
        flattenedOptionModels: store.state.flattenedOptionModels,
        flattenedTextModels: store.state.flattenedTextModels,
        flattenedFileModels: store.state.flattenedFileModels
      }; //clear the form content

      clearForm(flattenModel);
      store.commit(Mutations$1.APPEND_CHILD_INSTANCE, data);
      store.commit(Mutations$2.SET_SUBMISSION_STATUS, "Success");
    }).catch(error => {
      store.commit(Mutations$2.SET_SUBMISSION_STATUS, "Fail");
      console.log(error);
    });
  },

  [Actions$2.SUBMIT_CHILD_RESPONSE_FORM](store, parentId) {
    //Validating the form
    if (!store.state.childResponseForm || !validateFields(store.state.childResponseForm)) return;
    const api = window.location.origin + `/applets/api/items/appendchildforminstance/${store.state.itemInstanceId}`;
    const formData = new FormData();
    formData.append('datamodel', JSON.stringify(store.state.childResponseForm));
    if (parentId) formData.append('parentId', parentId.toString());
    fetch(api, {
      body: formData,
      method: "post"
    }).then(response => response.json()).then(data => {
      //console.log("Response Data: \n", JSON.stringify(data))
      store.commit(Mutations$1.APPEND_CHILD_RESPONSE_INSTANCE, data);
      const flattenModel = {
        flattenedOptionModels: store.state.flattenedOptionModels,
        flattenedTextModels: store.state.flattenedTextModels,
        flattenedFileModels: store.state.flattenedFileModels
      }; //clear the form content

      clearForm(flattenModel);
    }).catch(error => {
      store.commit(Mutations$2.SET_SUBMISSION_STATUS, "Fail");
      console.log(error);
    });
  },

  [Actions$2.DELETE_CHILD_RESPONSE_INSTANCE](store, payload) {
    const api = window.location.origin + `/applets/api/items/deleteChildForm/${store.state.itemInstanceId}/${payload.id}?parentId=${payload.parentId}`;
    fetch(api, {
      method: "post"
    }).then(response => response.json()).then(data => {
      if (data.id) {
        console.log("deleteChildForm response received");
        store.commit(Mutations$1.DELETE_CHILD_RESPONSE_INSTANCE, payload);
      }
    }).catch(error => {
      store.commit(Mutations$2.SET_SUBMISSION_STATUS, "Fail");
      console.log(error);
    });
  },

  [Actions$2.DELETE_CHILD_INSTANCE](store, payload) {
    const api = window.location.origin + `/applets/api/items/deleteChildForm/${store.state.itemInstanceId}/${payload.id}`;
    fetch(api, {
      method: "post"
    }).then(response => response.json()).then(data => {
      if (data.id) {
        console.log("deleteChildForm response received");
        store.commit(Mutations$1.DELETE_CHILD_INSTANCE, payload);
      }
    }).catch(error => {
      store.commit(Mutations$2.SET_SUBMISSION_STATUS, "Fail");
      console.log(error);
    });
  }

};

const getters$3 = {};

//References:
var script$o = defineComponent({
  name: "DropZone",
  props: {
    id: {
      required: true,
      type: String
    }
  },

  setup() {
    const active = ref(false);

    const toggleActive = () => {
      active.value = !active.value;
    };

    return {
      active,
      toggleActive
    };
  }

});

const _withScopeId$1 = n => (pushScopeId("data-v-eae6523c"), n = n(), popScopeId(), n);

const _hoisted_1$g = /*#__PURE__*/_withScopeId$1(() => /*#__PURE__*/createElementVNode("span", null, "Drag and Drop File(s)", -1));

const _hoisted_2$e = /*#__PURE__*/_withScopeId$1(() => /*#__PURE__*/createElementVNode("span", null, "OR", -1));

const _hoisted_3$7 = ["for"];
const _hoisted_4$6 = ["id"];
function render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    onDragenter: _cache[0] || (_cache[0] = withModifiers(function () {
      return _ctx.toggleActive && _ctx.toggleActive(...arguments);
    }, ["prevent"])),
    onDragleave: _cache[1] || (_cache[1] = withModifiers(function () {
      return _ctx.toggleActive && _ctx.toggleActive(...arguments);
    }, ["prevent"])),
    onDragover: _cache[2] || (_cache[2] = withModifiers(() => {}, ["prevent"])),
    onDrop: _cache[3] || (_cache[3] = withModifiers(function () {
      return _ctx.toggleActive && _ctx.toggleActive(...arguments);
    }, ["prevent"])),
    class: normalizeClass([{
      'active-dropzone': _ctx.active
    }, "dropzone"])
  }, [_hoisted_1$g, _hoisted_2$e, createElementVNode("label", {
    for: _ctx.id
  }, "Select File(s)", 8, _hoisted_3$7), createElementVNode("input", {
    type: "file",
    id: _ctx.id,
    class: "dropzoneFile",
    multiple: ""
  }, null, 8, _hoisted_4$6)], 34);
}

var css_248z$2 = "\n.dropzone[data-v-eae6523c] {\r\n        width: 400px;\r\n        height: 200px;\r\n        margin-top:20px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        row-gap: 16px;\r\n        border: 2px dashed #41b883;\r\n        background-color: #fff;\r\n        transition: 0.3s ease all;\n}\n.dropzone label[data-v-eae6523c] {\r\n            padding: 8px 12px;\r\n            color: #fff;\r\n            background-color: #41b883;\r\n            transition: 0.3s ease all;\n}\n.dropzone input[data-v-eae6523c] {\r\n            display: none;\n}\n.active-dropzone[data-v-eae6523c] {\r\n        color: #fff;\r\n        border-color: #fff;\r\n        background-color: #41b883;\n}\n.active-dropzone label[data-v-eae6523c] {\r\n            background-color: #fff;\r\n            color: #41b883;\n}\r\n";
styleInject(css_248z$2);

script$o.render = render$o;
script$o.__scopeId = "data-v-eae6523c";

// References: 
var script$n = defineComponent({
  name: "AttachmentField",
  components: {
    DropZone: script$o
  },
  props: {
    model: {
      type: null,
      required: true
    }
  },

  setup(p) {
    const store = useStore();

    const drop = e => {
      Array.from(e.dataTransfer.files).forEach(file => {
        store.commit(FlattenedFormFiledMutations.ADD_FILE, {
          id: p.model.id,
          val: file
        });
      });
    };

    const selectFiles = () => {
      const inputElement = document.getElementById(p.model.id.toString());
      Array.from(inputElement === null || inputElement === void 0 ? void 0 : inputElement.files).forEach(file => {
        store.commit(FlattenedFormFiledMutations.ADD_FILE, {
          id: p.model.id,
          val: file
        });
      });
    };

    const selectedFiles = computed(() => {
      return store.state.flattenedFileModels[p.model.id.toString()];
    });
    const selectedFileNames = computed(() => {
      var _selectedFiles$value;

      return selectedFiles === null || selectedFiles === void 0 ? void 0 : (_selectedFiles$value = selectedFiles.value) === null || _selectedFiles$value === void 0 ? void 0 : _selectedFiles$value.map(file => file.name);
    });
    return {
      drop,
      selectFiles,
      selectedFiles,
      selectedFileNames
    };
  }

});

function render$n(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$selectedFileName;

  const _component_DropZone = resolveComponent("DropZone");

  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("div", null, toDisplayString((_ctx$selectedFileName = _ctx.selectedFileNames) === null || _ctx$selectedFileName === void 0 ? void 0 : _ctx$selectedFileName.join(' | ')), 1), createVNode(_component_DropZone, {
    id: _ctx.model.id,
    onDrop: withModifiers(_ctx.drop, ["prevent"]),
    onChange: _ctx.selectFiles
  }, null, 8, ["id", "onDrop", "onChange"])], 64);
}

script$n.render = render$n;

var script$m = defineComponent({
  name: "CheckboxField",
  components: {},
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  methods: {
    getConcatenatedOptionLabels(option) {
      var _option$optionText, _option$optionText$va;

      const concatenatedLabels = (_option$optionText = option.optionText) === null || _option$optionText === void 0 ? void 0 : (_option$optionText$va = _option$optionText.values) === null || _option$optionText$va === void 0 ? void 0 : _option$optionText$va.$values.map(txt => txt.value).join(" / ");
      return concatenatedLabels ? concatenatedLabels : "";
    },

    selectoption(event) {
      // console.log("selected value " + event.target.value + "selected: " + JSON.stringify(event.target.checked));        
      this.store.commit(FlattenedFormFiledMutations.SET_OPTION_VALUE, {
        id: event.target.value,
        isSelected: event.target.checked
      });
    }

  },

  setup(p) {
    // const validationStatus = computed(() => validateOptionsField(p.model));
    const store = useStore();
    return {
      store,
      // validationStatus,
      selectedoptions: computed(() => p.model.options.$values.filter(opt => opt.selected === true).map(opt => opt.id))
    };
  }

});

const _hoisted_1$f = ["id", "value"];
const _hoisted_2$d = ["for"];
function render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.options.$values, option => {
    return openBlock(), createElementBlock("div", null, [withDirectives(createElementVNode("input", {
      type: "checkbox",
      id: option.id,
      value: option.id,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.selectedoptions = $event),
      onChange: _cache[1] || (_cache[1] = $event => _ctx.selectoption($event))
    }, null, 40, _hoisted_1$f), [[vModelCheckbox, _ctx.selectedoptions]]), createElementVNode("label", {
      for: option.id
    }, toDisplayString(this.getConcatenatedOptionLabels(option)), 9, _hoisted_2$d)]);
  }), 256);
}

script$m.render = render$m;

/**
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
    watch(modelValue, function (val, prevVal) {
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
};

/**
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
var ScriptLoader = CreateScriptLoader();

/**
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
};

var editorProps = {
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
};

/**
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
var Editor$1 = defineComponent({
    props: editorProps,
    setup: function (props, ctx) {
        var _a = toRefs(props), disabled = _a.disabled, modelValue = _a.modelValue;
        var element = ref(null);
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
        watch(disabled, function (disable) {
            if (vueEditor !== null) {
                vueEditor.setMode(disable ? 'readonly' : 'design');
            }
        });
        onMounted(function () {
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
        onBeforeUnmount(function () {
            if (getTinymce() !== null) {
                getTinymce().remove(vueEditor);
            }
        });
        if (!inlineEditor) {
            onActivated(function () {
                if (!mounting) {
                    initWrapper();
                }
            });
            onDeactivated(function () {
                var _a;
                if (!modelBind) {
                    cache = vueEditor.getContent();
                }
                (_a = getTinymce()) === null || _a === void 0 ? void 0 : _a.remove(vueEditor);
            });
        }
        return function () { return inlineEditor ?
            renderInline(h, elementId, element, props.tagName) :
            renderIframe(h, elementId, element); };
    }
});

/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var Editor = Editor$1;

var script$l = defineComponent({
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
    Editor
  },
  computed: {
    content: {
      get() {
        return this.model.value;
      },

      set(value) {
        //console.log("value to be set: " + value + " id: " + this.model.id);
        this.store.commit(FlattenedFormFiledMutations.SET_TEXT_VALUE, {
          id: this.model.id,
          val: value
        });
      }

    }
  },

  setup(p) {
    const store = useStore();
    const field = p.field; //console.log("validationStatus: " + p.validationStatus)

    return {
      store,
      field
    };
  }

});

const _hoisted_1$e = {
  key: 2
};
const _hoisted_2$c = ["type"];
function render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Editor = resolveComponent("Editor");

  return _ctx.isRichText ? (openBlock(), createBlock(_component_Editor, {
    key: 0,
    apiKey: "0ohehg73era56wydy5kyws6ouf25550ogy2sifi1j41hk65l",
    modelValue: _ctx.content,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.content = $event),
    placeholder: "add multiple lines"
  }, null, 8, ["modelValue"])) : _ctx.isMultiline ? withDirectives((openBlock(), createElementBlock("textarea", {
    key: 1,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.content = $event)
  }, null, 512)), [[vModelText, _ctx.content]]) : (openBlock(), createElementBlock("div", _hoisted_1$e, [_ctx.field === 'text' ? withDirectives((openBlock(), createElementBlock("input", {
    key: 0,
    type: "text",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.content = $event)
  }, null, 512)), [[vModelText, _ctx.content]]) : _ctx.field === 'decimal' ? withDirectives((openBlock(), createElementBlock("input", {
    key: 1,
    type: "number",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.content = $event),
    step: "0.01",
    placeholder: "0.00"
  }, null, 512)), [[vModelText, _ctx.content]]) : withDirectives((openBlock(), createElementBlock("input", {
    key: 2,
    type: _ctx.field,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.content = $event)
  }, null, 8, _hoisted_2$c)), [[vModelDynamic, _ctx.content]])]));
}

script$l.render = render$l;

var script$k = defineComponent({
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
    Text: script$l
  },

  setup(p) {
    const validationStatus = computed(() => validateMonolingualTextField(p.model, null));
    const type = p.model.modelType;
    return {
      validationStatus,
      type
    };
  }

});

function render$k(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model, _ctx$model$values;

  const _component_Text = resolveComponent("Text");

  return openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$model = _ctx.model) === null || _ctx$model === void 0 ? void 0 : (_ctx$model$values = _ctx$model.values) === null || _ctx$model$values === void 0 ? void 0 : _ctx$model$values.$values, val => {
    return openBlock(), createElementBlock("div", null, [createVNode(_component_Text, {
      model: val,
      "is-multiline": false,
      "is-rich-text": false,
      "validation-status": _ctx.validationStatus,
      field: "date"
    }, null, 8, ["model", "validation-status"])]);
  }), 256);
}

script$k.render = render$k;

var script$j = defineComponent({
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
    Text: script$l
  },

  setup(p) {
    const validationStatus = computed(() => validateMonolingualNumberField(p.model));
    const type = p.model.modelType;
    return {
      validationStatus,
      type
    };
  }

});

function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model, _ctx$model$values;

  const _component_Text = resolveComponent("Text");

  return openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$model = _ctx.model) === null || _ctx$model === void 0 ? void 0 : (_ctx$model$values = _ctx$model.values) === null || _ctx$model$values === void 0 ? void 0 : _ctx$model$values.$values, val => {
    return openBlock(), createElementBlock("div", null, [createVNode(_component_Text, {
      model: val,
      "is-multiline": false,
      "is-rich-text": false,
      "validation-status": _ctx.validationStatus,
      field: "decimal"
    }, null, 8, ["model", "validation-status"])]);
  }), 256);
}

script$j.render = render$j;

var script$i = defineComponent({
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
    Text: script$l
  },

  setup(p) {
    const validationStatus = computed(() => validateMonolingualTextField(p.model, RegExpressions.Email));
    const type = p.model.modelType;
    return {
      validationStatus,
      type
    };
  }

});

function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model, _ctx$model$values;

  const _component_Text = resolveComponent("Text");

  return openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$model = _ctx.model) === null || _ctx$model === void 0 ? void 0 : (_ctx$model$values = _ctx$model.values) === null || _ctx$model$values === void 0 ? void 0 : _ctx$model$values.$values, val => {
    return openBlock(), createElementBlock("div", null, [createVNode(_component_Text, {
      model: val,
      "is-multiline": false,
      "is-rich-text": false,
      "validation-status": _ctx.validationStatus,
      field: "email"
    }, null, 8, ["model", "validation-status"])]);
  }), 256);
}

script$i.render = render$i;

var script$h = defineComponent({
  name: "InfoField",
  props: {
    model: {
      type: null,
      required: true
    }
  }
});

const _hoisted_1$d = ["innerHTML"];
function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model, _ctx$model$content;

  return openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$model = _ctx.model) === null || _ctx$model === void 0 ? void 0 : (_ctx$model$content = _ctx$model.content) === null || _ctx$model$content === void 0 ? void 0 : _ctx$model$content.values, val => {
    return openBlock(), createElementBlock("div", {
      key: val.id
    }, [createElementVNode("div", {
      innerHTML: val.value
    }, null, 8, _hoisted_1$d)]);
  }), 128);
}

script$h.render = render$h;

var script$g = defineComponent({
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
    Text: script$l
  },

  setup(p) {
    const validationStatus = computed(() => validateMonolingualNumberField(p.model));
    const type = p.model.modelType;
    return {
      validationStatus,
      type
    };
  }

});

function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model, _ctx$model$values;

  const _component_Text = resolveComponent("Text");

  return openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$model = _ctx.model) === null || _ctx$model === void 0 ? void 0 : (_ctx$model$values = _ctx$model.values) === null || _ctx$model$values === void 0 ? void 0 : _ctx$model$values.$values, val => {
    return openBlock(), createElementBlock("div", null, [createVNode(_component_Text, {
      model: val,
      "is-multiline": false,
      "is-rich-text": false,
      "validation-status": _ctx.validationStatus,
      field: "number"
    }, null, 8, ["model", "validation-status"])]);
  }), 256);
}

script$g.render = render$g;

var script$f = defineComponent({
  name: "RadioField",
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  methods: {
    getSelectedFieldLabels(field) {
      return OptionsFieldMethods.getSelectedFieldLabels(field.options.$values);
    },

    getConcatenatedOptionLabels(option) {
      var _option$optionText, _option$optionText$va;

      const concatenatedLabels = (_option$optionText = option.optionText) === null || _option$optionText === void 0 ? void 0 : (_option$optionText$va = _option$optionText.values) === null || _option$optionText$va === void 0 ? void 0 : _option$optionText$va.$values.map(txt => txt.value).join(" / ");
      return concatenatedLabels ? concatenatedLabels : "";
    }

  },
  computed: {
    selected: {
      get() {
        var _this$model$options$$;

        return (_this$model$options$$ = this.model.options.$values.find(opt => opt.selected)) === null || _this$model$options$$ === void 0 ? void 0 : _this$model$options$$.id;
      },

      set(value) {
        //console.log("selected value: ", value);
        this.model.options.$values.forEach(opt => {
          this.store.commit(FlattenedFormFiledMutations.SET_OPTION_VALUE, {
            id: opt.id,
            isSelected: opt.id === value
          });
        });
      }

    }
  },

  setup(p) {
    const validationStatus = computed(() => validateOptionsField(p.model));
    const name = "radio_" + p.model.id;
    const store = useStore();
    return {
      store,
      validationStatus,
      name
    };
  }

});

const _hoisted_1$c = ["name", "id", "value"];

const _hoisted_2$b = /*#__PURE__*/createTextVNode();

const _hoisted_3$6 = ["for"];
function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.options.$values, option => {
    return openBlock(), createElementBlock("div", null, [withDirectives(createElementVNode("input", {
      type: "radio",
      name: _ctx.name,
      id: option.id,
      value: option.id,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.selected = $event)
    }, null, 8, _hoisted_1$c), [[vModelRadio, _ctx.selected]]), _hoisted_2$b, createElementVNode("label", {
      for: option.id
    }, toDisplayString(this.getConcatenatedOptionLabels(option)), 9, _hoisted_3$6)]);
  }), 256);
}

script$f.render = render$f;

var script$e = defineComponent({
  name: "SelectField",
  components: {},
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  methods: {
    getConcatenatedOptionLabels(option) {
      var _option$optionText, _option$optionText$va;

      const concatenatedLabels = (_option$optionText = option.optionText) === null || _option$optionText === void 0 ? void 0 : (_option$optionText$va = _option$optionText.values) === null || _option$optionText$va === void 0 ? void 0 : _option$optionText$va.$values.map(txt => txt.value).join(" / ");
      return concatenatedLabels ? concatenatedLabels : "";
    }

  },
  computed: {
    selected: {
      get() {
        var _this$model$options$$;

        return (_this$model$options$$ = this.model.options.$values.find(opt => opt.selected)) === null || _this$model$options$$ === void 0 ? void 0 : _this$model$options$$.id;
      },

      set(value) {
        this.model.options.$values.forEach(opt => {
          this.store.commit(FlattenedFormFiledMutations.SET_OPTION_VALUE, {
            id: opt.id,
            isSelected: opt.id === value
          });
        });
      }

    }
  },

  setup(p) {
    const validationStatus = computed(() => validateOptionsField(p.model));
    const store = useStore();
    return {
      store,
      validationStatus
    };
  }

});

const _hoisted_1$b = /*#__PURE__*/createElementVNode("option", {
  disabled: "",
  value: ""
}, "Please select one", -1);

const _hoisted_2$a = ["id", "value"];
function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [withDirectives(createElementVNode("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.selected = $event),
    class: "form-control col-md-6"
  }, [_hoisted_1$b, (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.options.$values, option => {
    return openBlock(), createElementBlock("option", {
      id: option.id,
      value: option.id
    }, toDisplayString(this.getConcatenatedOptionLabels(option)), 9, _hoisted_2$a);
  }), 256))], 512), [[vModelSelect, _ctx.selected]])]);
}

script$e.render = render$e;

var script$d = defineComponent({
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
    Text: script$l
  }
});

const _hoisted_1$a = {
  key: 0
};
function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model, _ctx$model$values;

  const _component_Text = resolveComponent("Text");

  return openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$model = _ctx.model) === null || _ctx$model === void 0 ? void 0 : (_ctx$model$values = _ctx$model.values) === null || _ctx$model$values === void 0 ? void 0 : _ctx$model$values.$values, val => {
    var _ctx$model2, _ctx$model2$values, _ctx$model2$values$$v;

    return openBlock(), createElementBlock("div", null, [((_ctx$model2 = _ctx.model) === null || _ctx$model2 === void 0 ? void 0 : (_ctx$model2$values = _ctx$model2.values) === null || _ctx$model2$values === void 0 ? void 0 : (_ctx$model2$values$$v = _ctx$model2$values.$values) === null || _ctx$model2$values$$v === void 0 ? void 0 : _ctx$model2$values$$v.length) > 1 ? (openBlock(), createElementBlock("span", _hoisted_1$a, toDisplayString(val.language) + ": ", 1)) : createCommentVNode("", true), createVNode(_component_Text, {
      model: val,
      "is-multiline": _ctx.isMultiline,
      "is-rich-text": _ctx.isRichText,
      "validation-status": _ctx.validationStatus
    }, null, 8, ["model", "is-multiline", "is-rich-text", "validation-status"])]);
  }), 256);
}

script$d.render = render$d;

var script$c = defineComponent({
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
    TextCollection: script$d
  },

  setup(p) {
    const type = p.model.modelType; //console.log("p.model: ", JSON.stringify(p.model))

    const validationStatus = computed(() => validateMultilingualTextField(p.model));
    return {
      type,
      isRichText: computed(() => isRichTextField(p.model)),
      validationStatus,
      isRequiredField: computed(() => isRequiredField(p.model))
    };
  }

});

function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model$values;

  const _component_TextCollection = resolveComponent("TextCollection");

  return openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$model$values = _ctx.model.values) === null || _ctx$model$values === void 0 ? void 0 : _ctx$model$values.$values, val => {
    return openBlock(), createBlock(_component_TextCollection, {
      model: val,
      "is-multiline": _ctx.isMultiline,
      "is-rich-text": _ctx.isRichText,
      "validation-status": _ctx.validationStatus
    }, null, 8, ["model", "is-multiline", "is-rich-text", "validation-status"]);
  }), 256);
}

script$c.render = render$c;

var script$b = defineComponent({
  name: "AudioRecorder",
  components: {},
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  methods: {}
});

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, "My Audio Recorder");
}

script$b.render = render$b;

var script$a = defineComponent({
  name: "Field",
  props: {
    model: {
      type: null,
      required: true
    }
  },
  components: {
    AttachmentField: script$n,
    CheckboxField: script$m,
    DateField: script$k,
    DecimalField: script$j,
    EmailField: script$i,
    //FieldContainerReference,
    InfoField: script$h,
    IntegerField: script$g,
    RadioField: script$f,
    SelectField: script$e,
    MultilingualTextField: script$c,
    AudioRecorderField: script$b
  },

  setup(p) {
    const fieldType = FieldContainerUtils.getFieldType(p.model);
    const cssClass = FieldContainerUtils.cssClass(p.model);
    return {
      FieldTypes: eFieldType,
      ValidationStatus: eValidationStatus,
      fieldType,
      cssClass
    };
  }

});

const _hoisted_1$9 = {
  key: 0
};
const _hoisted_2$9 = {
  class: "col-md-3 field-name"
};
const _hoisted_3$5 = {
  key: 0,
  style: {
    "color": "red"
  }
};
const _hoisted_4$5 = {
  class: "col-md-9 field-value"
};
const _hoisted_5$4 = {
  key: 0,
  style: {
    "color": "red"
  }
};
const _hoisted_6$4 = {
  key: 1,
  style: {
    "color": "red"
  }
};
const _hoisted_7$2 = {
  key: 13
};
const _hoisted_8$2 = {
  key: 14
};
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model, _ctx$model2;

  const _component_InfoField = resolveComponent("InfoField");

  const _component_AttachmentField = resolveComponent("AttachmentField");

  const _component_CheckboxField = resolveComponent("CheckboxField");

  const _component_DateField = resolveComponent("DateField");

  const _component_DecimalField = resolveComponent("DecimalField");

  const _component_EmailField = resolveComponent("EmailField");

  const _component_IntegerField = resolveComponent("IntegerField");

  const _component_RadioField = resolveComponent("RadioField");

  const _component_SelectField = resolveComponent("SelectField");

  const _component_MultilingualTextField = resolveComponent("MultilingualTextField");

  const _component_AudioRecorderField = resolveComponent("AudioRecorderField");

  return _ctx.fieldType === _ctx.FieldTypes.FieldContainerReference ? (openBlock(), createElementBlock("div", _hoisted_1$9, " TODO: Implement editor template for FieldContainerReference ")) : _ctx.fieldType === _ctx.FieldTypes.InfoSection ? (openBlock(), createBlock(_component_InfoField, {
    key: 1,
    model: _ctx.model,
    class: normalizeClass(_ctx.cssClass)
  }, null, 8, ["model", "class"])) : (openBlock(), createElementBlock("div", {
    key: 2,
    class: normalizeClass(_ctx.cssClass + ' row')
  }, [createElementVNode("div", _hoisted_2$9, [createTextVNode(toDisplayString(_ctx.model.name.concatenatedContent) + " ", 1), this.model.required ? (openBlock(), createElementBlock("span", _hoisted_3$5, "*")) : createCommentVNode("", true)]), createElementVNode("div", _hoisted_4$5, [((_ctx$model = _ctx.model) === null || _ctx$model === void 0 ? void 0 : _ctx$model.validationStatus) === _ctx.ValidationStatus.VALUE_REQUIRED ? (openBlock(), createElementBlock("div", _hoisted_5$4, "This field requires a value.")) : createCommentVNode("", true), ((_ctx$model2 = _ctx.model) === null || _ctx$model2 === void 0 ? void 0 : _ctx$model2.validationStatus) === _ctx.ValidationStatus.INVALID ? (openBlock(), createElementBlock("div", _hoisted_6$4, "This field has an invalid value.")) : createCommentVNode("", true), _ctx.fieldType === _ctx.FieldTypes.AttachmentField ? (openBlock(), createBlock(_component_AttachmentField, {
    key: 2,
    model: _ctx.model
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.CheckboxField ? (openBlock(), createBlock(_component_CheckboxField, {
    key: 3,
    model: _ctx.model
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.DateField ? (openBlock(), createBlock(_component_DateField, {
    key: 4,
    model: _ctx.model
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.DecimalField ? (openBlock(), createBlock(_component_DecimalField, {
    key: 5,
    model: _ctx.model
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.EmailField ? (openBlock(), createBlock(_component_EmailField, {
    key: 6,
    model: _ctx.model
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.IntegerField ? (openBlock(), createBlock(_component_IntegerField, {
    key: 7,
    model: _ctx.model
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.RadioField ? (openBlock(), createBlock(_component_RadioField, {
    key: 8,
    model: _ctx.model
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.SelectField ? (openBlock(), createBlock(_component_SelectField, {
    key: 9,
    model: _ctx.model
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.TextArea ? (openBlock(), createBlock(_component_MultilingualTextField, {
    key: 10,
    model: _ctx.model,
    "is-multiline": true
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.TextField ? (openBlock(), createBlock(_component_MultilingualTextField, {
    key: 11,
    model: _ctx.model,
    "is-multiline": false
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.AudioRecorderField ? (openBlock(), createBlock(_component_AudioRecorderField, {
    key: 12,
    model: _ctx.model
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.CompositeField ? (openBlock(), createElementBlock("div", _hoisted_7$2, " TODO: Implement editor template for the CompositeField")) : _ctx.fieldType === _ctx.FieldTypes.TableField ? (openBlock(), createElementBlock("div", _hoisted_8$2, " TODO: Implement editor template for the TableField")) : createCommentVNode("", true)])], 2));
}

script$a.render = render$a;

var script$9 = defineComponent({
  name: "FieldContainer",
  props: {
    model: null
  },
  components: {
    Field: script$a
  }
});

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model$fields;

  const _component_Field = resolveComponent("Field");

  return openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$model$fields = _ctx.model.fields) === null || _ctx$model$fields === void 0 ? void 0 : _ctx$model$fields.$values, field => {
    return openBlock(), createBlock(_component_Field, {
      model: field
    }, null, 8, ["model"]);
  }), 256);
}

script$9.render = render$9;

var script$8 = defineComponent({
  name: "ChildFormSubmission",
  components: {
    ChildForm: script$9,
    ChildView: script$v
  },
  props,

  setup(p) {
    // console.log('props: ', JSON.stringify(p));
    const queryParameters = p.queryParameters;
    const dataAttributes = p.dataAttributes;
    const itemId = guid$1.Guid.parse(queryParameters.iid);
    const itemTemplateId = guid$1.Guid.parse(dataAttributes["template-id"]);
    const childFormId = guid$1.Guid.parse(dataAttributes["child-form-id"]);
    const childResponseFormIdStr = dataAttributes["response-form-id"];
    const isAdmin = dataAttributes["is-admin"];
    const childResponseFormId = (childResponseFormIdStr === null || childResponseFormIdStr === void 0 ? void 0 : childResponseFormIdStr.length) > 0 ? guid$1.Guid.parse(childResponseFormIdStr) : undefined;
    const store = useStore();
    store.commit(Mutations$2.CLEAR_FLATTENED_FIELD_MODELS);
    store.commit(Mutations$2.SET_ITEM_TEMPLATE_ID, itemTemplateId);
    store.commit(Mutations$2.SET_FORM_ID, childFormId);
    store.commit(Mutations$1.SET_PARENT_ITEM_ID, itemId); //load the data

    store.dispatch(Actions$2.LOAD_FORM);
    store.dispatch(Actions$2.LOAD_SUBMISSIONS);

    if (childResponseFormId) {
      store.commit(Mutations$1.SET_RESPONSE_FORM_ID, childResponseFormId);
      store.dispatch(Actions$2.LOAD_RESPONSE_FORM);
    } //const submissionStatus = store.state.submissionStatus as SubmissionStatus;
    //const submissionStatus: eSubmissionStatus = store.state.submissionStatus as eSubmissionStatus;
    //console.log("initial status " + JSON.stringify(submissionStatus));


    const responseDisplayFlags = ref([]);
    const childSubmissions = computed(() => {
      var _store$state$formInst;

      return (_store$state$formInst = store.state.formInstances) === null || _store$state$formInst === void 0 ? void 0 : _store$state$formInst.$values;
    });

    const toggleDisplayResponse = index => {
      if (responseDisplayFlags.value[index] != undefined) {
        responseDisplayFlags.value[index] = !responseDisplayFlags.value[index];
      } else {
        responseDisplayFlags.value[index] = !responseDisplayFlags.value[index]; //true;
      } //Closing all other response boxes


      responseDisplayFlags.value.forEach((val, idx) => {
        if (val && idx !== index) responseDisplayFlags.value[idx] = false;
      });
      return false;
    };

    const submitChildResponse = index => {
      var _childSubmissions$val;

      store.dispatch(Actions$2.SUBMIT_CHILD_RESPONSE_FORM, (_childSubmissions$val = childSubmissions.value[index]) === null || _childSubmissions$val === void 0 ? void 0 : _childSubmissions$val.id);
      toggleDisplayResponse(index);
    };

    return {
      childForm: computed(() => store.state.form),
      childSubmissions: computed(() => {
        var _store$state$formInst2;

        return (_store$state$formInst2 = store.state.formInstances) === null || _store$state$formInst2 === void 0 ? void 0 : _store$state$formInst2.$values;
      }),
      store,
      submissionStatus: computed(() => store.state.submissionStatus),
      eSubmissionStatus,
      eValidationStatus,
      childResponseFormId,
      childResponseForm: computed(() => store.state.childResponseForm),
      responseDisplayFlags,
      toggleDisplayResponse,
      submitChildResponse,
      isAdmin
    };
  },

  storeConfig: {
    state: state$2,
    actions: actions$3,
    mutations: mutations$2,
    getters: getters$3
  },
  methods: {
    submitChildForm() {
      this.store.dispatch(Actions$2.SUBMIT_CHILD_FORM);
    },

    removeResponseForm(itemToRemove) {
      if (confirm("Do you really want to delete this item?")) {
        this.store.dispatch(Actions$2.DELETE_CHILD_RESPONSE_INSTANCE, itemToRemove);
      }
    },

    removeChildForm(itemToRemove) {
      if (confirm("Do you really want to delete this item?")) {
        this.store.dispatch(Actions$2.DELETE_CHILD_INSTANCE, itemToRemove);
      }
    }

  }
});

const _withScopeId = n => (pushScopeId("data-v-101fde4c"), n = n(), popScopeId(), n);

const _hoisted_1$8 = {
  key: 0,
  class: "submissionForm"
};
const _hoisted_2$8 = {
  key: 0,
  class: "alert alert-danger"
};
const _hoisted_3$4 = {
  key: 1
};
const _hoisted_4$4 = {
  key: 0,
  class: "alert alert-info"
};
const _hoisted_5$3 = {
  key: 1,
  class: "alert alert-info"
};
const _hoisted_6$3 = {
  key: 2,
  class: "alert alert-danger"
};
const _hoisted_7$1 = {
  key: 1,
  class: "mt-2 submissionInstanceList"
};

const _hoisted_8$1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createElementVNode("h3", null, "Responses", -1));

const _hoisted_9$1 = {
  class: "submissionInstance"
};
const _hoisted_10$1 = {
  key: 0,
  class: "text-right"
};
const _hoisted_11$1 = ["onClick"];

const _hoisted_12$1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createElementVNode("span", {
  class: "fas fa-reply replyBtn"
}, null, -1));

const _hoisted_13$1 = [_hoisted_12$1];
const _hoisted_14$1 = ["onClick"];
const _hoisted_15$1 = {
  class: "ml-3 submissionInstanceList"
};
const _hoisted_16$1 = {
  key: 0,
  class: "mb-2"
};
const _hoisted_17 = {
  key: 0,
  class: "childResponseForm"
};
const _hoisted_18 = {
  key: 0,
  class: "alert alert-danger"
};
const _hoisted_19 = ["onClick"];
const _hoisted_20 = {
  class: "submissionInstance"
};
const _hoisted_21 = {
  key: 0,
  class: "text-right"
};
const _hoisted_22 = ["onClick"];
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$childForm;

  const _component_ChildForm = resolveComponent("ChildForm");

  const _component_ChildView = resolveComponent("ChildView");

  return openBlock(), createElementBlock(Fragment, null, [_ctx.childForm && Object.keys(_ctx.childForm).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$8, [createVNode(_component_ChildForm, {
    model: _ctx.childForm
  }, null, 8, ["model"]), ((_ctx$childForm = _ctx.childForm) === null || _ctx$childForm === void 0 ? void 0 : _ctx$childForm.validationStatus) === _ctx.eValidationStatus.INVALID ? (openBlock(), createElementBlock("div", _hoisted_2$8, "Form validation failed.")) : (openBlock(), createElementBlock("div", _hoisted_3$4, [_ctx.submissionStatus === _ctx.eSubmissionStatus.InProgress ? (openBlock(), createElementBlock("div", _hoisted_4$4, "Submitting...")) : createCommentVNode("", true), _ctx.submissionStatus === _ctx.eSubmissionStatus.Success ? (openBlock(), createElementBlock("div", _hoisted_5$3, "Submission successful")) : createCommentVNode("", true), _ctx.submissionStatus === _ctx.eSubmissionStatus.Fail ? (openBlock(), createElementBlock("div", _hoisted_6$3, "Submission failed")) : createCommentVNode("", true)])), createElementVNode("button", {
    class: "btn btn-primary",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.submitChildForm())
  }, "Submit")])) : createCommentVNode("", true), _ctx.childSubmissions && _ctx.childSubmissions.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_7$1, [_hoisted_8$1, (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.childSubmissions, (child, index) => {
    var _ctx$childResponseFor;

    return openBlock(), createElementBlock("div", _hoisted_9$1, [createVNode(_component_ChildView, {
      model: child,
      "hide-field-names": true
    }, null, 8, ["model"]), !_ctx.responseDisplayFlags[index] ? (openBlock(), createElementBlock("div", _hoisted_10$1, [createElementVNode("a", {
      href: "#",
      class: "text-decoration-none",
      onClick: $event => _ctx.toggleDisplayResponse(index),
      onclick: "return false;"
    }, _hoisted_13$1, 8, _hoisted_11$1), _ctx.isAdmin ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: "fas fa-remove",
      onClick: $event => {
        _ctx.removeChildForm(child);
      }
    }, null, 8, _hoisted_14$1)) : createCommentVNode("", true)])) : createCommentVNode("", true), createElementVNode("div", _hoisted_15$1, [_ctx.childResponseFormId ? (openBlock(), createElementBlock("div", _hoisted_16$1, [_ctx.responseDisplayFlags[index] ? (openBlock(), createElementBlock("div", _hoisted_17, [createVNode(_component_ChildForm, {
      model: _ctx.childResponseForm
    }, null, 8, ["model"]), ((_ctx$childResponseFor = _ctx.childResponseForm) === null || _ctx$childResponseFor === void 0 ? void 0 : _ctx$childResponseFor.validationStatus) === _ctx.eValidationStatus.INVALID ? (openBlock(), createElementBlock("div", _hoisted_18, "Response validation failed.")) : createCommentVNode("", true), createElementVNode("button", {
      class: "btn btn-primary submitBtn",
      onClick: $event => _ctx.submitChildResponse(index)
    }, "Submit", 8, _hoisted_19)])) : createCommentVNode("", true)])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(child.childFieldContainers.$values, (response, resIdx) => {
      return openBlock(), createElementBlock("div", _hoisted_20, [createVNode(_component_ChildView, {
        model: response,
        "hide-field-names": true
      }, null, 8, ["model"]), _ctx.isAdmin ? (openBlock(), createElementBlock("div", _hoisted_21, [createElementVNode("span", {
        class: "fas fa-remove deleteBtn",
        onClick: $event => {
          _ctx.removeResponseForm(response);
        }
      }, null, 8, _hoisted_22)])) : createCommentVNode("", true)]);
    }), 256))])]);
  }), 256))])) : createCommentVNode("", true)], 64);
}

var css_248z$1 = "\n.fa-remove[data-v-101fde4c] {\r\n\t\tcolor: red;\r\n\t\tmargin-left: 30px;\n}\r\n";
styleInject(css_248z$1);

script$8.render = render$8;
script$8.__scopeId = "data-v-101fde4c";

//import { validateFields } from '../../shared/store/form-validators'
//Declare ActionTypes

var Actions$1;

(function (Actions) {
  Actions["LOAD_FORM"] = "LOAD_FORM";
  Actions["SUBMIT_FORM"] = "SUBMIT_FORM";
})(Actions$1 || (Actions$1 = {}));

const actions$2 = {
  [Actions$1.LOAD_FORM](store) {
    const api = window.location.origin + `/applets/api/itemtemplates/${store.state.itemTemplateId}/data-form/${store.state.formId}`; // console.log('Form Load API: ', api)

    fetch(api).then(response => response.json()).then(data => {
      //console.log('Data:\n', JSON.stringify(data));
      store.commit(Mutations$2.SET_FORM, data);
    }).catch(error => {
      console.error('Actions.LOAD_FORM Error: ', error);
    });
  },

  [Actions$1.SUBMIT_FORM](store) {
    //Validating the form
    if (!store.state.form
    /*|| !validateFields(store.state.form)*/
    ) return;
    store.commit(Mutations$2.SET_SUBMISSION_STATUS, "InProgress");
    const api = window.location.origin + `/applets/api/items/?itemTemplateId=${store.state.itemTemplateId}&groupId=${store.state.groupId ? store.state.groupId : ""}&collectionId=${store.state.collectionId}`;
    const formData = new FormData(); //Setting the serialized JSON form model to the datamodel variable in formData

    formData.append('datamodel', JSON.stringify(store.state.form)); //Adding all attachments uploaded to the files variable in formData

    for (const key in store.state.flattenedFileModels) {
      if (store.state.flattenedFileModels[key].length > 0) {
        store.state.flattenedFileModels[key].forEach(file => {
          console.log("File: ", file.name);
          formData.append('files', file);
          formData.append('fileKeys', key);
        });
      }
    }

    fetch(api, {
      body: formData,
      method: "post",
      headers: {
        //"Content-Type": "multipart/form-data"
        "encType": "multipart/form-data"
      }
    }).then(response => response.json()).then(data => {
      console.log(JSON.stringify(data));
      const flattenModel = {
        flattenedOptionModels: store.state.flattenedOptionModels,
        flattenedTextModels: store.state.flattenedTextModels,
        flattenedFileModels: store.state.flattenedFileModels
      }; //clear the form content

      clearForm(flattenModel);
      store.commit(Mutations$2.SET_SUBMISSION_STATUS, "Success");
    }).catch(error => {
      store.commit(Mutations$2.SET_SUBMISSION_STATUS, "Fail");
      console.log(error);
    });
  }

};

const getters$2 = {};

var script$7 = defineComponent({
  name: "FormSubmission",
  components: {
    SubmissionForm: script$9
  },
  props,

  setup(p) {
    console.log('props: ', JSON.stringify(p));
    const dataAttributes = p.dataAttributes;
    const itemTemplateId = guid$1.Guid.parse(dataAttributes["template-id"]);
    const formId = guid$1.Guid.parse(dataAttributes["form-id"]);
    const collectionId = guid$1.Guid.parse(dataAttributes["collection-id"]);
    const groupId = dataAttributes["group-id"] ? guid$1.Guid.parse(dataAttributes["group-id"]) : null;
    const store = useStore();
    store.commit(Mutations$2.CLEAR_FLATTENED_FIELD_MODELS);
    store.commit(Mutations$2.SET_ITEM_TEMPLATE_ID, itemTemplateId);
    store.commit(Mutations$2.SET_FORM_ID, formId);
    store.commit(Mutations$2.SET_COLLECTION_ID, collectionId);
    store.commit(Mutations$2.SET_GROUP_ID, groupId); //load the data

    store.dispatch(Actions$1.LOAD_FORM);
    return {
      store,
      submissionForm: computed(() => store.state.form),
      submissionStatus: computed(() => store.state.submissionStatus),
      eSubmissionStatus,
      eValidationStatus
    };
  },

  storeConfig: {
    state: state$3,
    actions: actions$2,
    mutations: mutations$3,
    getters: getters$2
  },
  methods: {
    submitForm() {
      this.store.dispatch(Actions$1.SUBMIT_FORM);
    }

  }
});

const _hoisted_1$7 = {
  key: 0
};
const _hoisted_2$7 = {
  key: 0,
  class: "alert alert-danger"
};
const _hoisted_3$3 = {
  key: 1
};
const _hoisted_4$3 = {
  key: 0,
  class: "alert alert-info"
};
const _hoisted_5$2 = {
  key: 1,
  class: "alert alert-info"
};
const _hoisted_6$2 = {
  key: 2,
  class: "alert alert-danger"
};
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$submissionForm;

  const _component_SubmissionForm = resolveComponent("SubmissionForm");

  return _ctx.submissionForm && Object.keys(_ctx.submissionForm).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$7, [createVNode(_component_SubmissionForm, {
    model: _ctx.submissionForm
  }, null, 8, ["model"]), ((_ctx$submissionForm = _ctx.submissionForm) === null || _ctx$submissionForm === void 0 ? void 0 : _ctx$submissionForm.validationStatus) === _ctx.eValidationStatus.INVALID ? (openBlock(), createElementBlock("div", _hoisted_2$7, "Form validation failed.")) : (openBlock(), createElementBlock("div", _hoisted_3$3, [_ctx.submissionStatus === _ctx.eSubmissionStatus.InProgress ? (openBlock(), createElementBlock("div", _hoisted_4$3, "Submitting...")) : createCommentVNode("", true), _ctx.submissionStatus === _ctx.eSubmissionStatus.Success ? (openBlock(), createElementBlock("div", _hoisted_5$2, "Submission successful")) : createCommentVNode("", true), _ctx.submissionStatus === _ctx.eSubmissionStatus.Fail ? (openBlock(), createElementBlock("div", _hoisted_6$2, "Submission failed")) : createCommentVNode("", true)])), createElementVNode("button", {
    class: "btn btn-primary",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.submitForm())
  }, "Submit")])) : createCommentVNode("", true);
}

script$7.render = render$7;

const state$1 = {
  itemTemplateID: null,
  collectionID: null,
  groupId: null,
  reportFields: null,
  reportData: null
};

var Mutations;

(function (Mutations) {
  Mutations["SET_TEMPLATE_ID"] = "SET_TEMPLATE_ID";
  Mutations["SET_COLLECTION_ID"] = "SET_COLLECTION_ID";
  Mutations["SET_GROUP_ID"] = "SET_GROUP_ID";
  Mutations["SET_REPORT_FIELDS"] = "SET_REPORT_FIELDS";
  Mutations["SET_REPORT_DATA"] = "SET_REPORT_DATA";
})(Mutations || (Mutations = {}));

const mutations$1 = {
  [Mutations.SET_TEMPLATE_ID](state, payload) {
    state.itemTemplateID = payload;
  },

  [Mutations.SET_COLLECTION_ID](state, payload) {
    state.collectionID = payload;
  },

  [Mutations.SET_GROUP_ID](state, payload) {
    state.groupId = payload;
  },

  [Mutations.SET_REPORT_FIELDS](state, payload) {
    state.reportFields = payload;
  },

  [Mutations.SET_REPORT_DATA](state, payload) {
    state.reportData = [];

    for (let i = 0; i < payload.length; ++i) {
      var _state$reportFields, _state$reportData;

      const item = payload[i];
      const reportRow = {};
      (_state$reportFields = state.reportFields) === null || _state$reportFields === void 0 ? void 0 : _state$reportFields.forEach(repField => {
        var _reportRow$cells;

        const form = item.dataContainer.$values.filter(frm => frm.id === repField.formTemplateId)[0];
        const field = form === null || form === void 0 ? void 0 : form.fields.$values.filter(fld => fld.id === repField.fieldId)[0];
        const cell = {
          formId: repField.formTemplateId,
          fieldId: repField.fieldId,
          value: field.id.toString()
        };
        (_reportRow$cells = reportRow.cells) === null || _reportRow$cells === void 0 ? void 0 : _reportRow$cells.push(cell);
      });
      (_state$reportData = state.reportData) === null || _state$reportData === void 0 ? void 0 : _state$reportData.push(reportRow);
    }
  }

};

var Actions;

(function (Actions) {
  Actions["LOAD_DATA"] = "LOAD_DATA";
})(Actions || (Actions = {}));

const actions$1 = {
  [Actions.LOAD_DATA](store) {
    console.log('Store: ', JSON.stringify(store.state));
    const api = window.location.origin + `/applets/api/items/GetReportData/${store.state.groupId}/template/${store.state.itemTemplateID}/collection/${store.state.collectionID}`;
    console.log('reports Load API: ', api);
    const formData = new FormData(); //Setting the serialized JSON form model to the datamodel variable in formData

    formData.append('datamodel', JSON.stringify(store.state.reportFields));
    fetch(api, {
      body: formData,
      method: "post",
      headers: {
        //"Content-Type": "multipart/form-data"
        "encType": "multipart/form-data"
      }
    }).then(response => response.json()).then(data => {
      store.commit(Mutations.SET_REPORT_DATA, data);
    });
  }

};

const getters$1 = {};

var script$6 = defineComponent({
  name: "Report",
  components: {},
  props,

  setup(p) {
    const store = useStore(); // console.log('props: ', JSON.stringify(p));
    //const queryParameters = p.queryParameters as QueryParameter;

    const dataAttributes = p.dataAttributes;
    const itemTemplateId = guid$1.Guid.parse(dataAttributes["template-id"]);
    store.commit(Mutations.SET_TEMPLATE_ID, itemTemplateId);
    store.state.itemTemplateId = itemTemplateId;
    const collectionId = guid$1.Guid.parse(dataAttributes["collection-id"]);
    store.commit(Mutations.SET_COLLECTION_ID, collectionId);
    store.state.collectionId = collectionId;
    const groupId = guid$1.Guid.parse(dataAttributes["group-id"]);
    store.commit(Mutations.SET_GROUP_ID, groupId);
    store.state.groupId = groupId;
    const selectedFields = JSON.parse(dataAttributes["selected-fields"]);
    store.commit(Mutations.SET_REPORT_FIELDS, selectedFields);
    store.state.reportFields = selectedFields; //console.log("item template id " + itemTemplateId)
    //console.log("selected Fields: " + selectedFields)

    const isAdmin = dataAttributes["is-admin"]; //store.dispatch(Actions.LOAD_SUBMISSIONS);
    //if (childResponseFormId) {
    //	store.commit(ChildMutations.SET_RESPONSE_FORM_ID, childResponseFormId);
    //	store.dispatch(Actions.LOAD_RESPONSE_FORM);
    //}
    //const submissionStatus = store.state.submissionStatus as SubmissionStatus;
    //const submissionStatus: eSubmissionStatus = store.state.submissionStatus as eSubmissionStatus;
    //console.log("initial status " + JSON.stringify(submissionStatus));

    return {
      store,
      selectedFields,
      reportRows: computed(() => state$1.reportData),
      isAdmin,
      loadData: () => store.dispatch(Actions.LOAD_DATA)
    };
  },

  storeConfig: {
    state: state$1,
    actions: actions$1,
    mutations: mutations$1,
    getters: getters$1
  } //methods: {
  //          LoadData() {
  //              this.store.dispatch(Actions.LOAD_DATA);
  //          }
  //      }

});

const _hoisted_1$6 = /*#__PURE__*/createElementVNode("h3", null, "Report", -1);

const _hoisted_2$6 = {
  class: "table"
};
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [_hoisted_1$6, createElementVNode("button", {
    class: "btn btn-primary",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.loadData())
  }, "Execute"), createElementVNode("div", null, toDisplayString(_ctx.selectedFields), 1), createElementVNode("div", null, toDisplayString(_ctx.selectedFields.length), 1), createElementVNode("table", _hoisted_2$6, [createElementVNode("thead", null, [createElementVNode("tr", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.selectedFields, field => {
    return openBlock(), createElementBlock("th", null, toDisplayString(field.fieldName), 1);
  }), 256))])]), createElementVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.reportRows, reportRow => {
    return openBlock(), createElementBlock("tr", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(reportRow.cells, cell => {
      return openBlock(), createElementBlock("td", null, toDisplayString(cell.value), 1);
    }), 256))]);
  }), 256))])])], 64);
}

script$6.render = render$6;

////import { Guid } from 'guid-typescript'
const state = { //items: null,
  //formIds: null,
  //template: null,
  //templateId: null,
  ...state$5
};

//export enum Actions{
//}

const actions = { ...actions$6
};

const getters = {
  dataItem: state => itemTemplateId => {
    var _state$item, _state$item$dataConta, _state$item$dataConta2;

    return (_state$item = state.item) === null || _state$item === void 0 ? void 0 : (_state$item$dataConta = _state$item.dataContainer) === null || _state$item$dataConta === void 0 ? void 0 : (_state$item$dataConta2 = _state$item$dataConta.$values) === null || _state$item$dataConta2 === void 0 ? void 0 : _state$item$dataConta2.filter(dc => dc.templateId === itemTemplateId)[0];
  },
  field: state => (itemTemplateId, fieldId) => {
    var _state$item2, _state$item2$dataCont, _state$item2$dataCont2, _state$item2$dataCont3, _state$item2$dataCont4;

    return (_state$item2 = state.item) === null || _state$item2 === void 0 ? void 0 : (_state$item2$dataCont = _state$item2.dataContainer) === null || _state$item2$dataCont === void 0 ? void 0 : (_state$item2$dataCont2 = _state$item2$dataCont.$values) === null || _state$item2$dataCont2 === void 0 ? void 0 : (_state$item2$dataCont3 = _state$item2$dataCont2.filter(dc => dc.templateId === itemTemplateId)[0]) === null || _state$item2$dataCont3 === void 0 ? void 0 : (_state$item2$dataCont4 = _state$item2$dataCont3.fields.$values) === null || _state$item2$dataCont4 === void 0 ? void 0 : _state$item2$dataCont4.filter(fd => fd.id === fieldId);
  },
  fields: state => components => {
    const fields = [];

    for (let i = 0; i < (components === null || components === void 0 ? void 0 : components.length); i++) {
      //console.log("component count: " + components?.length);
      // console.log("fieldId: " + components[i].fieldId);
      const frmTemplateId = components[i].formTemplateId;
      const fldId = components[i].fieldId;

      if (typeof fldId != 'undefined' && fldId) {
        var _state$item3, _state$item3$dataCont, _state$item3$dataCont2, _state$item3$dataCont3, _state$item3$dataCont4;

        const field = (_state$item3 = state.item) === null || _state$item3 === void 0 ? void 0 : (_state$item3$dataCont = _state$item3.dataContainer) === null || _state$item3$dataCont === void 0 ? void 0 : (_state$item3$dataCont2 = _state$item3$dataCont.$values) === null || _state$item3$dataCont2 === void 0 ? void 0 : (_state$item3$dataCont3 = _state$item3$dataCont2.filter(dc => dc.templateId === frmTemplateId)[0]) === null || _state$item3$dataCont3 === void 0 ? void 0 : (_state$item3$dataCont4 = _state$item3$dataCont3.fields.$values) === null || _state$item3$dataCont4 === void 0 ? void 0 : _state$item3$dataCont4.filter(fd => fd.id === fldId)[0];
        const comField = {
          component: components[i],
          field: field
        };
        fields.push(comField);
      } // else {
      //    const comField: ComponentField = {
      //        component: components[i], field: {} as Field};
      //    fields.push(comField);
      //}

    } // console.log("fields: " + JSON.stringify(fields));


    return fields;
  },
  dataItemId: state => formTemplateId => {
    var _state$item4, _state$item4$dataCont, _state$item4$dataCont2, _state$item4$dataCont3;

    return (_state$item4 = state.item) === null || _state$item4 === void 0 ? void 0 : (_state$item4$dataCont = _state$item4.dataContainer) === null || _state$item4$dataCont === void 0 ? void 0 : (_state$item4$dataCont2 = _state$item4$dataCont.$values) === null || _state$item4$dataCont2 === void 0 ? void 0 : (_state$item4$dataCont3 = _state$item4$dataCont2.filter(dc => dc.templateId === formTemplateId)[0]) === null || _state$item4$dataCont3 === void 0 ? void 0 : _state$item4$dataCont3.id;
  }
};

//import { Guid } from 'guid-typescript'
//export enum Mutations {
//    SET_ID = 'SET_ID',
//    //SET_ITEM = 'SET_ITEM',
//    //SET_ITEMS = 'SET_ITEMS',
//    //SET_FORM_IDS = 'SET_FORM_IDS',
//    SET_TEMPLATE = 'SET_TEMPLATE',
//    SET_TEMPLATE_ID = 'SET_TEMPLATE_ID'
//}
//Create a mutation tree that implement all mutation interfaces

const mutations = { //[Mutations.SET_ID](state: State, payload: Guid) {
  //    state.id = payload;
  //},
  //[Mutations.SET_FORM_IDS](state: State, payload: string) {
  //    state.formIds = payload;
  //},
  //[Mutations.SET_ITEM](state: State, payload: Item) {
  //  state.item = payload
  //},
  //[Mutations.SET_ITEMS](state: State, payload: Item[]) {
  //      state.items = payload
  //},
  //[Mutations.SET_TEMPLATE](state: State, payload: ItemTemplate) {
  //    state.template = payload
  //},
  //[Mutations.SET_TEMPLATE_ID](state: State, payload: Guid) {
  //    state.templateId = payload
  //},
  ...mutations$6
};

var script$5 = defineComponent({
  name: "ImageCarousel",
  components: {},
  props: {
    model: {
      type: null,
      required: true
    },
    fileUrl: {
      type: null,
      required: true
    }
  },

  setup(p) {
    return {
      files: computed(() => p.model.files.$values),
      fieldUrl: computed(() => p.fileUrl),
      file1stId: computed(() => p.model.files.$values[0].id)
    };
  }

});

const _hoisted_1$5 = /*#__PURE__*/createElementVNode("h5", null, "Carousel", -1);

const _hoisted_2$5 = {
  id: "carouselSlides",
  class: "carousel slide",
  "data-ride": "carousel"
};
const _hoisted_3$2 = {
  class: "carousel-inner"
};
const _hoisted_4$2 = ["src"];

const _hoisted_5$1 = /*#__PURE__*/createElementVNode("a", {
  class: "carousel-control-prev",
  href: "#carouselSlides",
  role: "button",
  "data-slide": "prev"
}, [/*#__PURE__*/createElementVNode("span", {
  class: "carousel-control-prev-icon",
  "aria-hidden": "true"
}), /*#__PURE__*/createElementVNode("span", {
  class: "sr-only"
}, "Previous")], -1);

const _hoisted_6$1 = /*#__PURE__*/createElementVNode("a", {
  class: "carousel-control-next",
  href: "#carouselSlides",
  role: "button",
  "data-slide": "next"
}, [/*#__PURE__*/createElementVNode("span", {
  class: "carousel-control-next-icon",
  "aria-hidden": "true"
}), /*#__PURE__*/createElementVNode("span", {
  class: "sr-only"
}, "Next")], -1);

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [_hoisted_1$5, createElementVNode("div", _hoisted_2$5, [createElementVNode("div", _hoisted_3$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.files.$values, file => {
    return openBlock(), createElementBlock("div", {
      class: normalizeClass(file.id === _ctx.file1stId ? 'carousel-item active' : 'carousel-item'),
      key: file.id
    }, [createElementVNode("img", {
      class: "d-block w-100",
      src: _ctx.fileUrl + file.fileName
    }, null, 8, _hoisted_4$2)], 2);
  }), 128))]), _hoisted_5$1, _hoisted_6$1])], 64);
}

script$5.render = render$5;

var script$4 = defineComponent({
  name: "ImageGallery",
  components: {},
  props: {
    model: {
      type: null,
      required: true
    },
    fileUrl: {
      type: null,
      required: true
    }
  },

  setup(p) {
    return {
      files: computed(() => p.model.files.$values),
      fieldUrl: computed(() => p.fileUrl)
    };
  }

});

const _hoisted_1$4 = /*#__PURE__*/createElementVNode("h5", null, "Gallery", -1);

const _hoisted_2$4 = {
  class: "container"
};
const _hoisted_3$1 = {
  class: "d-flex flex-row"
};
const _hoisted_4$1 = ["src", "alt"];
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [_hoisted_1$4, createElementVNode("div", _hoisted_2$4, [createElementVNode("div", _hoisted_3$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.files, file => {
    return openBlock(), createElementBlock("img", {
      src: _ctx.fileUrl + file.fileName,
      class: "w-100 shadow-1-strong rounded mb-4",
      alt: file.originalFileName
    }, null, 8, _hoisted_4$1);
  }), 256))])])], 64);
}

script$4.render = render$4;

var script$3 = defineComponent({
  name: "PdfViewer",
  components: {},
  props: {
    fileUrl: {
      type: null,
      required: false
    }
  },

  setup(p) {
    const pdfViewerPath = window.location.origin + "/assets/js/vendor/pdfjs-2.13.216/web/viewer.html?file=";
    return {
      fileUrl: computed(() => p.fileUrl),
      pdfViewerPath
    };
  }

});

const _hoisted_1$3 = {
  class: "pdfViewer"
};
const _hoisted_2$3 = ["src"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [createElementVNode("iframe", {
    height: "100%",
    width: "100%",
    src: _ctx.pdfViewerPath + _ctx.fileUrl
  }, null, 8, _hoisted_2$3)]);
}

var css_248z = "\n.pdfViewer[data-v-97ebf75e] {\r\n        width: 50%;\r\n        height: 79vh;\r\n        min-width: 400px;\n}\r\n";
styleInject(css_248z);

script$3.render = render$3;
script$3.__scopeId = "data-v-97ebf75e";

var script$2 = defineComponent({
  name: "FieldComponent",
  components: {
    ImageCarousel: script$5,
    ImageGallery: script$4,
    PdfViewer: script$3
  },
  props: {
    model: {
      type: null,
      required: true
    }
  },

  setup(p) {
    var _p$model$field;

    const store = useStore();
    let fileUrl = "";

    if ((_p$model$field = p.model.field) !== null && _p$model$field !== void 0 && _p$model$field.$type.includes("AttachmentField")) {
      const itemId = ref(store.state.item.id);
      const dataItemId = ref(store.getters.dataItemId(p.model.component.formTemplateId));
      const fieldId = ref(p.model.component.fieldId);
      fileUrl = window.location.origin + '/api/items/' + itemId.value + '/' + dataItemId.value + '/' + fieldId.value + '/';
    }

    let displayImagesMode = "";

    if (p.model.component.displayImagesMode) {
      displayImagesMode = p.model.component.displayImagesMode == 'gallery' ? 'gallery' : 'carousel';
    }

    return {
      htmlWrapperTag: computed(() => {
        var _p$model$component$ty;

        return ((_p$model$component$ty = p.model.component.type) === null || _p$model$component$ty === void 0 ? void 0 : _p$model$component$ty.length) > 0 ? p.model.component.type : "div";
      }),
      componentType: computed(() => p.model.component.$type.split(',')[0]),
      field: computed(() => p.model.field),
      fieldType: computed(() => {
        var _p$model$field2, _p$model$field2$$type;

        return (_p$model$field2 = p.model.field) === null || _p$model$field2 === void 0 ? void 0 : (_p$model$field2$$type = _p$model$field2.$type) === null || _p$model$field2$$type === void 0 ? void 0 : _p$model$field2$$type.split(',')[0];
      }),
      fileUrl,
      displayImagesMode,
      cssClasses: computed(() => p.model.component.cssClasses ? p.model.component.cssClasses : "")
    };
  },

  methods: {
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format('MMM DD, YYYY');
    },

    formatToDecimal: (value, decimalPlaces) => {
      return Number(value).toFixed(decimalPlaces);
    },

    getSelectedFieldLabels(field) {
      return OptionsFieldMethods.getSelectedFieldLabels(field.options.$values);
    }

  }
});

const _hoisted_1$2 = {
  class: "fieldType"
};

const _hoisted_2$2 = /*#__PURE__*/createElementVNode("hr", null, null, -1);

const _hoisted_3 = {
  key: 0
};
const _hoisted_4 = {
  key: 1
};
const _hoisted_5 = {
  key: 2
};
const _hoisted_6 = {
  key: 3
};
const _hoisted_7 = {
  key: 4
};
const _hoisted_8 = {
  key: 5
};
const _hoisted_9 = ["href"];

const _hoisted_10 = /*#__PURE__*/createElementVNode("br", null, null, -1);

const _hoisted_11 = ["src"];

const _hoisted_12 = /*#__PURE__*/createElementVNode("br", null, null, -1);

const _hoisted_13 = {
  key: 3,
  controls: ""
};
const _hoisted_14 = ["src", "type"];

const _hoisted_15 = /*#__PURE__*/createTextVNode(" Your browser does not support the audio element. ");

const _hoisted_16 = /*#__PURE__*/createElementVNode("hr", null, null, -1);

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ImageCarousel = resolveComponent("ImageCarousel");

  const _component_ImageGallery = resolveComponent("ImageGallery");

  const _component_PdfViewer = resolveComponent("PdfViewer");

  return openBlock(), createElementBlock("div", _hoisted_1$2, [_hoisted_2$2, _ctx.fieldType === 'Catfish.Core.Models.Contents.Fields.TextArea' || _ctx.fieldType === 'Catfish.Core.Models.Contents.Fields.TextField' ? (openBlock(), createElementBlock("div", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.field.values.$values, multilingualValue => {
    return openBlock(), createElementBlock("div", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(multilingualValue.values.$values, valueInOneLanguage => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.htmlWrapperTag), {
        class: normalizeClass(_ctx.cssClasses)
      }, {
        default: withCtx(() => [createTextVNode(toDisplayString(valueInOneLanguage.value), 1)]),
        _: 2
      }, 1032, ["class"]);
    }), 256))]);
  }), 256))])) : _ctx.fieldType.includes('Catfish.Core.Models.Contents.Fields.EmailField') || _ctx.fieldType === 'Catfish.Core.Models.Contents.Fields.MonolingualTextField' || _ctx.fieldType === 'Catfish.Core.Models.Contents.Fields.IntegerField' ? (openBlock(), createElementBlock("div", _hoisted_4, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.field.values.$values, val => {
    return openBlock(), createBlock(resolveDynamicComponent(_ctx.htmlWrapperTag), {
      class: normalizeClass(_ctx.cssClasses)
    }, {
      default: withCtx(() => [createTextVNode(toDisplayString(val.value), 1)]),
      _: 2
    }, 1032, ["class"]);
  }), 256))])) : _ctx.fieldType === 'Catfish.Core.Models.Contents.Fields.DecimalField' ? (openBlock(), createElementBlock("div", _hoisted_5, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.field.values.$values, val => {
    return openBlock(), createBlock(resolveDynamicComponent(_ctx.htmlWrapperTag), {
      class: normalizeClass(_ctx.cssClasses)
    }, {
      default: withCtx(() => [createTextVNode(toDisplayString(_ctx.formatToDecimal(val.value, 2)), 1)]),
      _: 2
    }, 1032, ["class"]);
  }), 256))])) : _ctx.fieldType === 'Catfish.Core.Models.Contents.Fields.DateField' ? (openBlock(), createElementBlock("div", _hoisted_6, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.field.values.$values, val => {
    return openBlock(), createBlock(resolveDynamicComponent(_ctx.htmlWrapperTag), {
      class: normalizeClass(_ctx.cssClasses)
    }, {
      default: withCtx(() => [createTextVNode(toDisplayString(_ctx.formatDate(val.value)), 1)]),
      _: 2
    }, 1032, ["class"]);
  }), 256))])) : _ctx.fieldType === 'Catfish.Core.Models.Contents.Fields.OptionsField' || _ctx.fieldType === 'Catfish.Core.Models.Contents.Fields.CheckboxField' || _ctx.fieldType === 'Catfish.Core.Models.Contents.Fields.RadioField' || _ctx.fieldType === 'Catfish.Core.Models.Contents.Fields.SelectField' ? (openBlock(), createElementBlock("div", _hoisted_7, [(openBlock(), createBlock(resolveDynamicComponent(_ctx.htmlWrapperTag), {
    class: normalizeClass(_ctx.cssClasses)
  }, {
    default: withCtx(() => [createTextVNode(toDisplayString(_ctx.getSelectedFieldLabels(_ctx.field)), 1)]),
    _: 1
  }, 8, ["class"]))])) : _ctx.fieldType.includes('Catfish.Core.Models.Contents.Fields.AttachmentField') || _ctx.fieldType === 'Catfish.Core.Models.Contents.Fields.AudioRecorderField' ? (openBlock(), createElementBlock("div", _hoisted_8, [_ctx.displayImagesMode === 'carousel' ? (openBlock(), createBlock(_component_ImageCarousel, {
    key: 0,
    model: _ctx.field,
    fileUrl: _ctx.fileUrl
  }, null, 8, ["model", "fileUrl"])) : _ctx.displayImagesMode === 'gallery' ? (openBlock(), createBlock(_component_ImageGallery, {
    key: 1,
    model: _ctx.field,
    fileUrl: _ctx.fileUrl
  }, null, 8, ["model", "fileUrl"])) : (openBlock(true), createElementBlock(Fragment, {
    key: 2
  }, renderList(_ctx.field.files.$values, val => {
    return openBlock(), createElementBlock("div", {
      class: normalizeClass(_ctx.cssClasses)
    }, [val.contentType.includes('pdf') ? (openBlock(), createBlock(_component_PdfViewer, {
      key: 0,
      fileUrl: _ctx.fileUrl + val.fileName
    }, null, 8, ["fileUrl"])) : createCommentVNode("", true), val.contentType.includes('pdf') ? (openBlock(), createElementBlock("a", {
      key: 1,
      href: _ctx.fileUrl + val.fileName
    }, toDisplayString(val.originalFileName), 9, _hoisted_9)) : createCommentVNode("", true), _hoisted_10, val.contentType.includes('image') ? (openBlock(), createElementBlock("img", {
      key: 2,
      src: _ctx.fileUrl + val.fileName
    }, null, 8, _hoisted_11)) : createCommentVNode("", true), _hoisted_12, val.contentType.includes('audio') ? (openBlock(), createElementBlock("audio", _hoisted_13, [createElementVNode("source", {
      src: _ctx.fileUrl + val.fileName,
      type: val.contentType
    }, null, 8, _hoisted_14), _hoisted_15])) : createCommentVNode("", true)], 2);
  }), 256))])) : createCommentVNode("", true), _hoisted_16]);
}

script$2.render = render$2;

var script$1 = defineComponent({
  name: "StaticComponent",
  components: {},
  props: {
    model: {
      type: null,
      required: true
    }
  },

  setup(p) {
    return {
      htmlWrapperTag: computed(() => {
        var _p$model$type;

        return ((_p$model$type = p.model.type) === null || _p$model$type === void 0 ? void 0 : _p$model$type.length) > 0 ? p.model.type : "div";
      })
    };
  }

});

const _hoisted_1$1 = {
  class: "staticType"
};

const _hoisted_2$1 = /*#__PURE__*/createElementVNode("h3", null, "Static Field", -1);

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [_hoisted_2$1, (openBlock(), createBlock(resolveDynamicComponent(_ctx.htmlWrapperTag), {
    class: normalizeClass(_ctx.model.cssClasses)
  }, {
    default: withCtx(() => [createTextVNode(toDisplayString(_ctx.model.content), 1)]),
    _: 1
  }, 8, ["class"]))]);
}

script$1.render = render$1;

// import { Guid } from 'guid-typescript'
var script = defineComponent({
  name: "ItemLayout",
  components: {
    FieldComponent: script$2,
    StaticComponent: script$1
  },
  props,

  setup(p) {
    const store = useStore();
    const queryParams = p.queryParameters;
    store.commit(Mutations$5.SET_ID, queryParams.iid);
    const dataAttributes = p.dataAttributes; //const templateId = dataAttributes["template-id"] as string;
    //store.commit(Mutations.SET_TEMPLATE_ID, templateId);

    const selectedComponents = dataAttributes["selected-components"];
    const components = JSON.parse(selectedComponents);
    const isAdmin = dataAttributes["is-admin"]; //load the data

    store.dispatch(Actions$5.LOAD_ITEM); // console.log("selected Forms" + JSON.stringify(store.state.item));

    console.log("components length:" + components.length); //const fields = store.getters.fields(components);
    // console.log("fields length:" + fields.length);

    const staticFields = components.filter(comp => comp.$type.includes("StaticText"));
    console.log("static Field:" + staticFields.length);
    console.log(JSON.stringify(staticFields));
    return {
      store,
      item: computed(() => store.state.item),
      queryParams,
      isAdmin,
      components,
      staticFields,
      fields: computed(() => store.getters.fields(components))
    };
  },

  storeConfig: {
    state,
    actions,
    mutations,
    getters
  }
});

const _hoisted_1 = {
  class: "item"
};

const _hoisted_2 = /*#__PURE__*/createElementVNode("h3", null, "ItemLayout", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_StaticComponent = resolveComponent("StaticComponent");

  const _component_FieldComponent = resolveComponent("FieldComponent");

  return openBlock(), createElementBlock("div", _hoisted_1, [_hoisted_2, (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.staticFields, field => {
    return openBlock(), createBlock(_component_StaticComponent, {
      model: field
    }, null, 8, ["model"]);
  }), 256)), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.fields, field => {
    return openBlock(), createBlock(_component_FieldComponent, {
      model: field
    }, null, 8, ["model"]);
  }), 256))]);
}

script.render = render;

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Carousel: script$R,
    KeywordSearch: script$O,
    ItemTemplateEditor: script$J,
    ItemEditor: script$I,
    ItemViewer: script$u,
    ProcessManager: script$s,
    Grid: script$p,
    ChildFormSubmission: script$8,
    FormSubmission: script$7,
    Report: script$6,
    ItemLayout: script
});

// Import vue components

const install = function installApplets(app) {
  Object.entries(components).forEach(_ref => {
    let [componentName, component] = _ref;
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export { script$R as Carousel, script$8 as ChildFormSubmission, script$7 as FormSubmission, script$p as Grid, script$I as ItemEditor, script as ItemLayout, script$J as ItemTemplateEditor, script$u as ItemViewer, script$O as KeywordSearch, script$s as ProcessManager, script$6 as Report, install as default };
