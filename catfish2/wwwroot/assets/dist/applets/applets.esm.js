import { defineComponent, openBlock, createElementBlock, createElementVNode, toDisplayString, inject, watch, reactive, computed, Fragment, renderList, createCommentVNode, withDirectives, vModelCheckbox, ref, createTextVNode, vModelSelect, resolveComponent, createVNode, onMounted, normalizeClass, pushScopeId, popScopeId, renderSlot, createBlock, withCtx, toRefs, normalizeStyle, withModifiers, onBeforeUnmount, onActivated, onDeactivated, h, vModelText, vModelDynamic, vModelRadio, resolveDynamicComponent } from 'vue';

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

var script$11 = defineComponent({
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

const _hoisted_1$J = /*#__PURE__*/createElementVNode("h2", null, "Carousel", -1);

const _hoisted_2$z = {
  class: "row"
};
const _hoisted_3$m = {
  class: "row"
};
const _hoisted_4$h = {
  class: "row"
};
function render$11(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [_hoisted_1$J, createElementVNode("div", _hoisted_2$z, "Page Id: " + toDisplayString(_ctx.pageId), 1), createElementVNode("div", _hoisted_3$m, "Block Id: " + toDisplayString(_ctx.blockId), 1), createElementVNode("div", _hoisted_4$h, "Data Attributes " + toDisplayString(_ctx.dataAttributes), 1)]);
}

script$11.render = render$11;

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

const state$9 = {
  id: null,
  item: null,
  siteUrl: null
};

var ePage;

(function (ePage) {
  ePage["Home"] = "Home";
  ePage["List"] = "List";
  ePage["Details"] = "Details";
})(ePage || (ePage = {}));

const state$8 = {
  keywordQueryModel: null,
  searchResult: null,
  offset: 0,
  max: 25,
  pageId: null,
  blockId: null,
  freeSearchText: null,
  activePage: ePage.Home,
  popupVisibility: false,
  ...state$9
};

//Declare MutationTypes
var Mutations$8;

(function (Mutations) {
  Mutations["SET_ID"] = "SET_ID";
  Mutations["SET_ITEM"] = "SET_ITEM";
  Mutations["CHANGE_STATE"] = "CHANGE_STATE";
  Mutations["SET_SITE_URL"] = "SET_SITE_URL";
})(Mutations$8 || (Mutations$8 = {})); //Create a mutation tree that implement all mutation interfaces


const mutations$b = {
  [Mutations$8.SET_ID](state, payload) {
    state.id = payload;
  },

  [Mutations$8.SET_ITEM](state, payload) {
    state.item = payload;
    if (payload) state.id = payload.id;
  },

  [Mutations$8.CHANGE_STATE](state, payload) {
    //state.item
    console.log(JSON.stringify(state));
    console.log(JSON.stringify(payload));
  },

  [Mutations$8.SET_SITE_URL](state, payload) {
    state.siteUrl = payload;
  }

};

var Mutations$7;

(function (Mutations) {
  Mutations["SET_SOURCE"] = "SET_SOURCE";
  Mutations["SET_KEYWORDS"] = "SET_KEYWORDS";
  Mutations["SET_RESULTS"] = "SET_RESULTS";
  Mutations["SET_OFFSET"] = "SET_OFFSET";
  Mutations["SET_PAGE_SIZE"] = "SET_PAGE_SIZE";
  Mutations["SET_FREE_TEXT_SEARCH"] = "SET_FREE_TEXT_SEARCH";
  Mutations["SET_ACTIVE_PAGE"] = "SET_ACTIVE_PAGE";
  Mutations["TOGGLE_KEYWORD"] = "TOGGLE_KEYWORD";
  Mutations["CLEAR_KEYWORD_SELECTIONS"] = "CLEAR_KEYWORD_SELECTIONS";
  Mutations["SELECT_KEYWORD"] = "SELECT_KEYWORD";
  Mutations["CLEAR_KEYWORD"] = "CLEAR_KEYWORD";
  Mutations["SET_POPUP_VISIBILITY"] = "SET_POPUP_VISIBILITY";
})(Mutations$7 || (Mutations$7 = {})); //Create a mutation tree that implement all mutation interfaces


const mutations$a = { ...mutations$b,

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
  },

  [Mutations$7.SET_FREE_TEXT_SEARCH](state, payload) {
    // console.log('mutation set text: payload: ', payload)
    state.freeSearchText = payload;
  },

  [Mutations$7.SET_ACTIVE_PAGE](state, payload) {
    state.activePage = payload;
  },

  [Mutations$7.TOGGLE_KEYWORD](state, payload) {
    if (state.keywordQueryModel) state.keywordQueryModel.containers[payload.containerIndex].fields[payload.fieldIndex].selected[payload.valueIndex] = !state.keywordQueryModel.containers[payload.containerIndex].fields[payload.fieldIndex].selected[payload.valueIndex];
  },

  [Mutations$7.SELECT_KEYWORD](state, payload) {
    if (state.keywordQueryModel) state.keywordQueryModel.containers[payload.containerIndex].fields[payload.fieldIndex].selected[payload.valueIndex] = true;
  },

  [Mutations$7.CLEAR_KEYWORD](state, payload) {
    if (state.keywordQueryModel) state.keywordQueryModel.containers[payload.containerIndex].fields[payload.fieldIndex].selected[payload.valueIndex] = false;
  },

  [Mutations$7.CLEAR_KEYWORD_SELECTIONS](state) {
    var _state$keywordQueryMo;

    (_state$keywordQueryMo = state.keywordQueryModel) === null || _state$keywordQueryMo === void 0 ? void 0 : _state$keywordQueryMo.containers.forEach(cont => cont.fields.forEach(field => field.selected = new Array(field.values.length).fill(false)));
  },

  [Mutations$7.SET_POPUP_VISIBILITY](state, visibility) {
    state.popupVisibility = visibility;
  }

};

var Actions$8;

(function (Actions) {
  Actions["LOAD_ITEM"] = "LOAD_ITEM";
  Actions["CHANGE_STATE"] = "CHANGE_STATE";
})(Actions$8 || (Actions$8 = {}));

const actions$a = {
  [Actions$8.LOAD_ITEM](store) {
    const api = (store.state.siteUrl ? store.state.siteUrl : window.location.origin) + `/applets/api/items/${store.state.id}`;
    console.log('Item Load API: ', api);
    fetch(api).then(response => response.json()).then(data => {
      store.commit(Mutations$8.SET_ITEM, data);
    });
  },

  [Actions$8.CHANGE_STATE](store, payload) {
    console.log(JSON.stringify(store.state));
    const api = (store.state.siteUrl ? store.state.siteUrl : window.location.origin) + `/applets/api/items/deleteItem/${payload}`;
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

var Actions$7;

(function (Actions) {
  Actions["INIT_FILTER"] = "INIT_FILTER";
  Actions["FILTER_BY_KEYWORDS"] = "FILTER_BY_KEYWORDS";
  Actions["NEXT_PAGE"] = "NEXT_PAGE";
  Actions["PREVIOUS_PAGE"] = "PREVIOUS_PAGE";
  Actions["FRESH_SEARCH"] = "FRESH_SEARCH";
  Actions["SAVE_KEYWORDS"] = "SAVE_KEYWORDS";
  Actions["SEARCH_FREE_TEXT"] = "SEARCH_FREE_TEXT";
  Actions["SET_SEARCH_TEXT"] = "SET_SEARCH_TEXT";
  Actions["LOAD_ITEM"] = "LOAD_ITEM";
})(Actions$7 || (Actions$7 = {}));

const actions$9 = { ...actions$a,

  [Actions$7.INIT_FILTER](store) {
    //console.log('Store: ', JSON.stringify(store.state))
    const api = window.location.origin + `/applets/api/keywordsearch/keywords/page/${store.state.pageId}/block/${store.state.blockId}`;
    console.log('Keyword Load API: ', api);
    fetch(api).then(response => response.json()).then(data => {
      store.commit(Mutations$7.SET_KEYWORDS, data);
    });
  },

  [Actions$7.FILTER_BY_KEYWORDS](store) {
    //Saving current search parameters in the local storage
    if (store.state.blockId) {
      const searchParams = {
        keywords: store.state.keywordQueryModel,
        offset: store.state.offset,
        max: store.state.max
      };
      localStorage.setItem(store.getters.searchParamStorageKey, JSON.stringify(searchParams));
    }

    const api = window.location.origin + `/applets/api/keywordsearch/items/`; // console.log("Item Load API: ", api)

    const formData = new FormData();
    if (store.state.pageId) formData.append("pageId", store.state.pageId.toString());
    if (store.state.blockId) formData.append("blockId", store.state.blockId.toString());
    formData.append("offset", store.state.offset.toString());
    formData.append("max", store.state.max.toString());
    formData.append("queryParams", JSON.stringify(store.state.keywordQueryModel)); //MR April 27 2022, add freetextsearch

    let freeText = store.state.freeSearchText ? store.state.freeSearchText : "";
    formData.append("searchText", freeText);
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
    // console.log("save keywords action :" + JSON.stringify(source));
    store.commit(Mutations$7.SET_KEYWORDS, source);
  },

  [Actions$7.SET_SEARCH_TEXT](store, text) {
    // console.log("set serch text: " + text);
    store.commit(Mutations$7.SET_FREE_TEXT_SEARCH, text);
  }

};

const getters$9 = {
  //  items: (state): Item[] | undefined => {
  //    return state.searchResult?.items
  //  },
  searchParamStorageKey: state => {
    var _state$blockId;

    return ((_state$blockId = state.blockId) === null || _state$blockId === void 0 ? void 0 : _state$blockId.toString()) + "SearchParams";
  },
  isKeywordSelected: state => (containerIndex, fieldIndex, valueIndex) => {
    var _state$keywordQueryMo;

    return (_state$keywordQueryMo = state.keywordQueryModel) === null || _state$keywordQueryMo === void 0 ? void 0 : _state$keywordQueryMo.containers[containerIndex].fields[fieldIndex].selected[valueIndex];
  },
  getItem: state => itemId => {
    var _state$searchResult;

    //NOT GET IN HERE!!!!!
    console.log("inside getter getitem: " + itemId);
    return (_state$searchResult = state.searchResult) === null || _state$searchResult === void 0 ? void 0 : _state$searchResult.items.filter(it => it.id === itemId);
  }
};

var script$10 = defineComponent({
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

const _hoisted_1$I = {
  key: 0
};
const _hoisted_2$y = {
  key: 0,
  class: "font-weight-bold"
};
const _hoisted_3$l = ["value", "onUpdate:modelValue"];
const _hoisted_4$g = {
  class: "ml-1"
};
function render$10(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$keywordQueryMode;

  return openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$keywordQueryMode = _ctx.keywordQueryModel) === null || _ctx$keywordQueryMode === void 0 ? void 0 : _ctx$keywordQueryMode.containers, (container, cIdx) => {
    var _ctx$keywordQueryMode2, _container$name;

    return openBlock(), createElementBlock("div", {
      key: container
    }, [((_ctx$keywordQueryMode2 = _ctx.keywordQueryModel) === null || _ctx$keywordQueryMode2 === void 0 ? void 0 : _ctx$keywordQueryMode2.containers.length) > 1 && (container === null || container === void 0 ? void 0 : (_container$name = container.name) === null || _container$name === void 0 ? void 0 : _container$name.length) > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$I, toDisplayString(container.name), 1)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(container.fields, (field, fIdx) => {
      return openBlock(), createElementBlock("div", {
        key: field,
        class: "mb-3"
      }, [field.name.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$y, toDisplayString(field.name), 1)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(field.values, (value, vIdx) => {
        return openBlock(), createElementBlock("div", {
          key: value
        }, [withDirectives(createElementVNode("input", {
          type: "checkbox",
          value: value,
          "onUpdate:modelValue": $event => _ctx.keywordQueryModel.containers[cIdx].fields[fIdx].selected[vIdx] = $event,
          onChange: _cache[0] || (_cache[0] = function () {
            return _ctx.runFreshSearch && _ctx.runFreshSearch(...arguments);
          })
        }, null, 40, _hoisted_3$l), [[vModelCheckbox, _ctx.keywordQueryModel.containers[cIdx].fields[fIdx].selected[vIdx]]]), createElementVNode("label", _hoisted_4$g, toDisplayString(value), 1)]);
      }), 128))]);
    }), 128))]);
  }), 128);
}

script$10.render = render$10;

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

var script$$ = defineComponent({
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

const _hoisted_1$H = {
  class: "itemList"
};
const _hoisted_2$x = {
  key: 0
};
const _hoisted_3$k = {
  key: 0
};
const _hoisted_4$f = {
  key: 1
};

const _hoisted_5$d = /*#__PURE__*/createElementVNode("option", null, "25", -1);

const _hoisted_6$c = /*#__PURE__*/createElementVNode("option", null, "50", -1);

const _hoisted_7$9 = /*#__PURE__*/createElementVNode("option", null, "100", -1);

const _hoisted_8$8 = [_hoisted_5$d, _hoisted_6$c, _hoisted_7$9];
const _hoisted_9$7 = {
  key: 1
};
const _hoisted_10$7 = {
  class: "item"
};
const _hoisted_11$7 = {
  class: "item-title"
};
const _hoisted_12$7 = ["href"];
const _hoisted_13$6 = {
  key: 1
};
const _hoisted_14$6 = {
  class: "item-date"
};
const _hoisted_15$6 = {
  class: "item-subtitle"
};
const _hoisted_16$5 = {
  class: "categories"
};
const _hoisted_17$4 = {
  class: "badge rounded-pill bg-dark text-white m-1"
};
const _hoisted_18$4 = {
  class: "content"
};
function render$$(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$items;

  return openBlock(), createElementBlock("div", _hoisted_1$H, [((_ctx$items = _ctx.items) === null || _ctx$items === void 0 ? void 0 : _ctx$items.length) > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$x, [_ctx.first > 1 ? (openBlock(), createElementBlock("span", _hoisted_3$k, [createElementVNode("i", {
    class: "fas fa-angle-double-left",
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.previousPage && _ctx.previousPage(...arguments);
    })
  })])) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(_ctx.first) + "-" + toDisplayString(_ctx.last) + " of " + toDisplayString(_ctx.count) + " ", 1), _ctx.count > _ctx.last ? (openBlock(), createElementBlock("span", _hoisted_4$f, [createElementVNode("i", {
    class: "fas fa-angle-double-right",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.nextPage && _ctx.nextPage(...arguments);
    })
  })])) : createCommentVNode("", true), createElementVNode("span", null, [withDirectives(createElementVNode("select", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.selectedPageSize = $event),
    class: "pull-right",
    onChange: _cache[3] || (_cache[3] = $event => _ctx.freshSearch(Number(_ctx.selectedPageSize)))
  }, _hoisted_8$8, 544), [[vModelSelect, _ctx.selectedPageSize]])])])) : (openBlock(), createElementBlock("div", _hoisted_9$7, "No results found.")), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, item => {
    var _item$detailedViewUrl;

    return openBlock(), createElementBlock("div", {
      key: item.id
    }, [createElementVNode("div", _hoisted_10$7, [createElementVNode("h3", _hoisted_11$7, [((_item$detailedViewUrl = item.detailedViewUrl) === null || _item$detailedViewUrl === void 0 ? void 0 : _item$detailedViewUrl.length) > 0 ? (openBlock(), createElementBlock("a", {
      key: 0,
      href: item.detailedViewUrl
    }, toDisplayString(item.title), 9, _hoisted_12$7)) : (openBlock(), createElementBlock("span", _hoisted_13$6, toDisplayString(item.title), 1))]), createElementVNode("div", _hoisted_14$6, toDisplayString(_ctx.formatDate(item.date)), 1), createElementVNode("h5", _hoisted_15$6, toDisplayString(item.subtitle), 1), createElementVNode("div", _hoisted_16$5, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.categories, cat => {
      return openBlock(), createElementBlock("span", _hoisted_17$4, toDisplayString(cat), 1);
    }), 256))]), createElementVNode("div", _hoisted_18$4, toDisplayString(item.content), 1)])]);
  }), 128))]);
}

script$$.render = render$$;

var script$_ = defineComponent({
  name: "ListView",
  components: {
    KeywordFilter: script$10,
    ItemList: script$$
  }
});

const _hoisted_1$G = {
  class: "col-md-4 text-left"
};
const _hoisted_2$w = {
  class: "col-md-8"
};
function render$_(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KeywordFilter = resolveComponent("KeywordFilter");

  const _component_ItemList = resolveComponent("ItemList");

  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("div", _hoisted_1$G, [createVNode(_component_KeywordFilter)]), createElementVNode("div", _hoisted_2$w, [createVNode(_component_ItemList)])], 64);
}

script$_.render = render$_;

var script$Z = defineComponent({
  name: "FreeTextSearch",
  components: {},
  props: {},

  setup() {
    const store = useStore(); //const savedText = ref(store.state.freeTextSearch);
    //console.log("saved Text " + savedText);

    return {
      store,
      freeTextSearch: computed(() => store.state.freeSearchText),
      results: computed(() => store.state.searchResult)
    };
  },

  storeConfig: {
    state: state$8,
    actions: actions$9,
    mutations: mutations$a,
    getters: getters$9
  },
  methods: {
    onBlur: function (e) {
      if (e.target.value.length > 0) {
        this.store.dispatch(Actions$7.SET_SEARCH_TEXT, e.target.value);
      }
    },
    executeSearch: function () {
      //console.log("executing search ....");
      this.store.dispatch(Actions$7.FILTER_BY_KEYWORDS);
    }
  }
});

const _hoisted_1$F = {
  class: "input-group dir-text-search"
};
function render$Z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$F, [createElementVNode("input", {
    type: "text",
    class: "form-control rounded",
    placeholder: "searchText",
    "aria-label": "Search",
    "aria-describedby": "search-addon",
    onBlur: _cache[0] || (_cache[0] = $event => _ctx.onBlur($event))
  }, null, 32), createElementVNode("button", {
    type: "button",
    class: "btn btn-outline-primary",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.executeSearch && _ctx.executeSearch(...arguments);
    })
  }, "search")]);
}

script$Z.render = render$Z;

// import { Guid } from 'guid-typescript'
// import { Mutations as ItemViewerMutations } from '../../../item-viewer/store/mutations';
// import { Actions as ItemViewerActions } from '../../../item-viewer/store/actions';
// import { State } from '../../store/state';

var script$Y = defineComponent({
  name: "KeywordPanel",
  props: {
    hexColorList: {
      type: null,
      required: false
    },
    runAction: {
      type: null,
      required: false
    },
    className: {
      type: null,
      required: false
    },
    ...props
  },

  setup(p) {
    const store = useStore(); //let hexColorList = p.colorScheme ? p.colorScheme?.split(',').map(function (c) {
    //    return c.trim();
    //}) : null;
    //TODO: Update this view template to represent the keyword panel in a way that we can
    // embed it the Home, List, and Details views.
    //const queryParameters = p.queryParameters as QueryParameter;
    //if (queryParameters && (queryParameters["iid"] as string)?.length > 0)
    //    store.commit(ItemViewerMutations.SET_ID, queryParameters["iid"] as unknown as Guid);
    //const itemId = computed(() => (store.state as State).id);

    onMounted(() => {
      const btns = Array.from(document.getElementsByClassName(`dir-keyword-button`));
      let length = p.hexColorList ? p.hexColorList.length : 0;
      let i = 0;
      btns.forEach(b => {
        if (p.hexColorList !== null) {
          let color = p.hexColorList ? p.hexColorList[i] : "";
          b.setAttribute("style", "background-color: " + color);
          i++;
          i = i <= length - 1 ? i : 0;
        } else {
          let color = "hsla(" + ~~(360 * Math.random()) + "," + "70%," + "80%,1)";
          b.setAttribute("style", "background-color: " + color);
        }
      }); //  const className = p.className;
      //console.log("className: " + className);
    });
    return {
      filterByKeyword: (cIndex, fIndex, vIndex) => {
        store.commit(Mutations$7.CLEAR_KEYWORD_SELECTIONS);
        store.commit(Mutations$7.SELECT_KEYWORD, {
          containerIndex: cIndex,
          fieldIndex: fIndex,
          valueIndex: vIndex
        });
        store.commit(Mutations$7.SET_ACTIVE_PAGE, ePage.List);
      },
      keywordQueryModel: computed(() => store.state.keywordQueryModel),
      addKeyword: (cIndex, fIndex, vIndex) => {
        if (!store.getters.isKeywordSelected(cIndex, fIndex, vIndex)) {
          store.commit(Mutations$7.SELECT_KEYWORD, {
            containerIndex: cIndex,
            fieldIndex: fIndex,
            valueIndex: vIndex
          });
          store.dispatch(Actions$7.FRESH_SEARCH);
        }
      },
      className: p.className
    };
  }

});

const _hoisted_1$E = ["onClick"];
const _hoisted_2$v = ["onClick"];
function render$Y(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$keywordQueryMode;

  return openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$keywordQueryMode = _ctx.keywordQueryModel) === null || _ctx$keywordQueryMode === void 0 ? void 0 : _ctx$keywordQueryMode.containers, (container, cIdx) => {
    return openBlock(), createElementBlock("div", {
      key: container
    }, [(openBlock(true), createElementBlock(Fragment, null, renderList(container.fields, (field, fIdx) => {
      return openBlock(), createElementBlock("div", {
        key: field,
        class: normalizeClass(_ctx.className ? 'row ' + _ctx.className : 'row keywordContainer')
      }, [(openBlock(true), createElementBlock(Fragment, null, renderList(field.values, (value, vIdx) => {
        return openBlock(), createElementBlock("span", {
          key: value,
          class: "dir-keyword"
        }, [_ctx.runAction === 'filterByKeyword' ? (openBlock(), createElementBlock("button", {
          key: 0,
          onClick: $event => _ctx.filterByKeyword(cIdx, fIdx, vIdx),
          class: "dir-keyword-button",
          ref: "dirBtn"
        }, toDisplayString(value), 9, _hoisted_1$E)) : (openBlock(), createElementBlock("button", {
          key: 1,
          onClick: $event => _ctx.addKeyword(cIdx, fIdx, vIdx),
          class: "dir-keyword-button",
          ref: "dirBtn"
        }, toDisplayString(value), 9, _hoisted_2$v))]);
      }), 128))], 2);
    }), 128))]);
  }), 128);
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

var css_248z$d = "\n.keywordContainer[data-v-92d1c55a] {\r\n        overflow-x: scroll;\r\n        overflow-y: visible;\r\n        white-space: nowrap;\r\n        position: relative;\r\n        display: inline-block;\r\n        height: 150px;\r\n        width: 100%;\r\n        scroll-behavior: smooth;\r\n        align-content: center;\n}\n.dir-keyword[data-v-92d1c55a] {\r\n        display: inline-block;\r\n        margin-top: 15px;\r\n        margin-right: 5px;\n}\n.dir-keyword-button[data-v-92d1c55a] {\r\n        position: relative;\r\n        color: Black;\r\n        font-size: 0.80em;\r\n        text-align: center;\r\n        border-radius: 60px;\r\n        padding-top: 30px;\r\n        padding-bottom: 30px;\r\n        padding-left: 10px;\r\n        padding-right: 10px;\r\n        max-width: 150px;\r\n        white-space: normal;\n}\n.dir-keyword-button[data-v-92d1c55a]:focus {\r\n            background-color: yellow;\n}\n.dir-keyword-button[data-v-92d1c55a]:hover {\r\n            transform: scale(1.2);\r\n            z-index: 100;\r\n            opacity: 90%;\r\n            text-decoration: underline;\n}\r\n\r\n\r\n    /* Works on Chrome, Edge, and Safari */\n.keywordContainer[data-v-92d1c55a]::-webkit-scrollbar, .keywordContainerSmall[data-v-92d1c55a]::-webkit-scrollbar {\r\n        width: 12px;\r\n        height: 5px;\r\n        overflow-x: scroll;\r\n        background-color: transparent;\n}\n.keywordContainer[data-v-92d1c55a]::-webkit-scrollbar-track, .keywordContainerSmall[data-v-92d1c55a]::-webkit-scrollbar-track {\r\n        background-color: transparent;\r\n        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.05);\n}\n.keywordContainer[data-v-92d1c55a]::-webkit-scrollbar-thumb, .keywordContainerSmall[data-v-92d1c55a]::-webkit-scrollbar-thumb {\r\n        background-color: grey;\r\n        border-radius: 10px;\r\n        /* border: 1px solid Green;*/\n}\n.keywordContainer[data-v-92d1c55a]::-webkit-scrollbar-track-piece:end, .keywordContainerSmall[data-v-92d1c55a]::-webkit-scrollbar-track-piece:end {\r\n        margin-right: 75px;\n}\n.keywordContainer[data-v-92d1c55a]::-webkit-scrollbar-track-piece:start, .keywordContainerSmall[data-v-92d1c55a]::-webkit-scrollbar-track-piece:start {\r\n        margin-left: 175px;\n}\r\n\r\n    /* smaller version*/\n.keywordContainerSmall[data-v-92d1c55a] {\r\n        overflow-x: scroll;\r\n        overflow-y: visible;\r\n        white-space: nowrap;\r\n        position: relative;\r\n        display: inline-block;\r\n        height: 90px;\r\n        width: 100%;\r\n        scroll-behavior: smooth;\r\n        align-content: center;\n}\n.keywordContainerSmall > .dir-keyword[data-v-92d1c55a] {\r\n            display: inline-block;\r\n            margin-top: 15px;\r\n            margin-right: 5px;\r\n            font-size: medium;\n}\n.keywordContainerSmall > .dir-keyword > .dir-keyword-button[data-v-92d1c55a] {\r\n                position: relative;\r\n                color: Black;\r\n                font-size: 0.80em;\r\n                text-align: center;\r\n                border-radius: 60px;\r\n                padding-top: 15px;\r\n                padding-bottom: 15px;\r\n                padding-left: 10px;\r\n                padding-right: 10px;\r\n                max-width: 150px;\r\n                white-space: normal;\n}\r\n";
styleInject(css_248z$d);

script$Y.render = render$Y;
script$Y.__scopeId = "data-v-92d1c55a";

var script$X = defineComponent({
  name: "HomeView",
  props: {
    colorScheme: {
      type: null,
      required: false
    },
    ...props
  },
  components: {
    KeywordPanel: script$Y,
    FreeTextSearch: script$Z
  },

  setup(p) {
    const store = useStore();
    const dataAttributes = p.dataAttributes;
    const blogTitle = dataAttributes["block-title"];
    const blogDescription = dataAttributes["block-description"];
    const enableFreeTextSearch = dataAttributes["enable-freetext-search"];
    const hexColors = dataAttributes["hex-color-list"];
    let hexColorList = hexColors ? hexColors.split(',').map(function (c) {
      return c.trim();
    }) : null;
    return {
      filterByKeyword: (cIndex, fIndex, vIndex) => {
        store.commit(Mutations$7.CLEAR_KEYWORD_SELECTIONS);
        store.commit(Mutations$7.SELECT_KEYWORD, {
          containerIndex: cIndex,
          fieldIndex: fIndex,
          valueIndex: vIndex
        });
        store.commit(Mutations$7.SET_ACTIVE_PAGE, ePage.List);
      },
      keywordQueryModel: computed(() => store.state.keywordQueryModel),
      hexColorList,
      blogTitle,
      blogDescription,
      enableFreeTextSearch
    };
  }

});

const _hoisted_1$D = {
  class: "dir-title"
};
const _hoisted_2$u = {
  class: "dir-description"
};
const _hoisted_3$j = {
  key: 0
};
function render$X(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FreeTextSearch = resolveComponent("FreeTextSearch");

  const _component_KeywordPanel = resolveComponent("KeywordPanel");

  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("h1", _hoisted_1$D, toDisplayString(_ctx.blogTitle), 1), createElementVNode("div", _hoisted_2$u, toDisplayString(_ctx.blogDescription), 1), _ctx.enableFreeTextSearch === true ? (openBlock(), createElementBlock("div", _hoisted_3$j, [createVNode(_component_FreeTextSearch)])) : createCommentVNode("", true), createVNode(_component_KeywordPanel, {
    hexColorList: _ctx.hexColorList,
    runAction: "filterByKeyword"
  }, null, 8, ["hexColorList"])], 64);
}

script$X.render = render$X;

var script$W = defineComponent({
  name: "ListView",
  props: {
    colorScheme: {
      type: null,
      required: false
    },
    ...props
  },
  components: {
    KeywordPanel: script$Y,
    FreeTextSearch: script$Z
  },

  setup(p) {
    const store = useStore();
    const dataAttributes = p.dataAttributes;
    const enableFreeTextSearch = dataAttributes["enable-freetext-search"];
    const hexColors = dataAttributes["hex-color-list"];
    let hexColorList = hexColors ? hexColors.split(',').map(function (c) {
      return c.trim();
    }) : null;
    onMounted(() => {
      store.dispatch(Actions$7.FRESH_SEARCH);
    });
    return {
      hexColorList,
      enableFreeTextSearch,
      removeKeyword: index => {
        store.commit(Mutations$7.CLEAR_KEYWORD, index);
        store.dispatch(Actions$7.FRESH_SEARCH);
      },
      viewDetails: itemId => {
        store.commit(Mutations$8.SET_ID, itemId);
        store.commit(Mutations$7.SET_ACTIVE_PAGE, ePage.Details);
      },
      keywordQueryModel: computed(() => store.state.keywordQueryModel),
      items: computed(() => {
        var _store$state$searchRe;

        return (_store$state$searchRe = store.state.searchResult) === null || _store$state$searchRe === void 0 ? void 0 : _store$state$searchRe.items;
      }),
      results: computed(() => store.state.searchResult),
      selectedKeywords: computed(() => {
        var _store$state$keywordQ;

        const ret = [];
        (_store$state$keywordQ = store.state.keywordQueryModel) === null || _store$state$keywordQ === void 0 ? void 0 : _store$state$keywordQ.containers.forEach((cont, cIdx) => cont.fields.forEach((field, fIdx) => field.values.forEach((val, vIdx) => {
          if (store.getters.isKeywordSelected(cIdx, fIdx, vIdx)) ret.push({
            index: {
              containerIndex: cIdx,
              fieldIndex: fIdx,
              valueIndex: vIdx
            },
            value: val
          });
        })));
        return ret;
      })
    };
  }

});

const _withScopeId$5 = n => (pushScopeId("data-v-766506bb"), n = n(), popScopeId(), n);

const _hoisted_1$C = {
  class: "row"
};
const _hoisted_2$t = {
  class: "col-md-8 row"
};
const _hoisted_3$i = {
  class: "col-md-3"
};
const _hoisted_4$e = {
  class: "selectedKeyword"
};
const _hoisted_5$c = ["onClick"];
const _hoisted_6$b = {
  class: "col-md-8 grey-BG contentList"
};

const _hoisted_7$8 = /*#__PURE__*/_withScopeId$5(() => /*#__PURE__*/createElementVNode("b", null, "Entries", -1));

const _hoisted_8$7 = {
  class: "item row"
};

const _hoisted_9$6 = /*#__PURE__*/_withScopeId$5(() => /*#__PURE__*/createElementVNode("div", null, [/*#__PURE__*/createElementVNode("i", {
  class: "fas fa-image profileImg"
})], -1));

const _hoisted_10$6 = {
  class: "profileInfo"
};
const _hoisted_11$6 = {
  class: "item-title"
};
const _hoisted_12$6 = ["onClick"];
const _hoisted_13$5 = {
  class: "content"
};
const _hoisted_14$5 = {
  class: "col-md-4"
};
const _hoisted_15$5 = {
  key: 0
};
function render$W(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FreeTextSearch = resolveComponent("FreeTextSearch");

  const _component_KeywordPanel = resolveComponent("KeywordPanel");

  return openBlock(), createElementBlock("div", _hoisted_1$C, [createElementVNode("div", _hoisted_2$t, [createElementVNode("div", _hoisted_3$i, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.selectedKeywords, keyword => {
    return openBlock(), createElementBlock("div", {
      key: keyword.index.containerIndex + '_' + keyword.index.valueIndex
    }, [createElementVNode("span", _hoisted_4$e, toDisplayString(keyword.value), 1), createElementVNode("i", {
      class: "fa fa-remove",
      onClick: $event => _ctx.removeKeyword(keyword.index)
    }, null, 8, _hoisted_5$c)]);
  }), 128))]), createElementVNode("div", _hoisted_6$b, [_hoisted_7$8, (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, item => {
    return openBlock(), createElementBlock("div", {
      key: item.id
    }, [createElementVNode("div", _hoisted_8$7, [_hoisted_9$6, createElementVNode("div", _hoisted_10$6, [createElementVNode("h5", _hoisted_11$6, [createElementVNode("a", {
      href: "#",
      onClick: $event => _ctx.viewDetails(item.id)
    }, toDisplayString(item.subtitle), 9, _hoisted_12$6)]), createElementVNode("div", _hoisted_13$5, toDisplayString(item.content), 1)])])]);
  }), 128))])]), createElementVNode("div", _hoisted_14$5, [_ctx.enableFreeTextSearch === true ? (openBlock(), createElementBlock("div", _hoisted_15$5, [createVNode(_component_FreeTextSearch)])) : createCommentVNode("", true), createVNode(_component_KeywordPanel, {
    hexColorList: _ctx.hexColorList,
    className: 'keywordContainerSmall'
  }, null, 8, ["hexColorList"])])]);
}

var css_248z$c = "\n.searchbar[data-v-766506bb] {\r\n        background-color: #ececec;\r\n        cursor: pointer;\r\n        height: 40px;\r\n        position: relative;\r\n        width: 400px;\r\n        display: inline-block;\r\n        margin-top: 15px;\r\n        padding: 12.5px\n}\n.profileInfo[data-v-766506bb] {\r\n        margin-left: 10px;\r\n        display: inline-block;\r\n        margin-top: 22px;\r\n        max-width:275px;\r\n        font-size:large;\n}\n.profileImg[data-v-766506bb] {\r\n        font-size: 1000%;\r\n        margin-left: 5px;\n}\n.grey-BG[data-v-766506bb] {\r\n        background-color: #ececec;\r\n        border-radius: 30px;\r\n        height: 500px;\r\n        position: relative;\r\n        width: 600px;\r\n        width: 700px;\r\n        margin-left: 20px;\r\n        margin-top: 10px;\r\n        margin-bottom: 20px;\r\n        display: inline-block;\r\n        overflow-y: scroll;\n}\n.fa-times[data-v-766506bb] {\r\n        margin-left: 5px;\r\n        font-size: medium;\n}\n.selectedKeyword[data-v-766506bb] {\r\n        background-color: #ffdc0e;\r\n        border-radius: 50px;\r\n        position: relative;\r\n        margin: 5px;\r\n        padding: 5px;\r\n        overflow-wrap: break-word;\r\n        display: inline-block;\r\n        font-size: medium;\n}\n.contentList[data-v-766506bb]::-webkit-scrollbar {\r\n        width: 7px;\r\n        height: 5px;\r\n        overflow-y: scroll;\r\n        background-color: transparent;\n}\n.contentList[data-v-766506bb]::-webkit-scrollbar-track {\r\n        background-color: transparent;\r\n        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.02);\n}\n.contentList[data-v-766506bb]::-webkit-scrollbar-thumb {\r\n        background-color: grey;\r\n        border-radius: 10px;\r\n        /* border: 1px solid Green;*/\n}\n.contentList[data-v-766506bb]::-webkit-scrollbar-track-piece:end {\r\n        margin-bottom: 75px;\n}\n.contentList[data-v-766506bb]::-webkit-scrollbar-track-piece:start {\r\n        margin-top: 175px;\n}\r\n";
styleInject(css_248z$c);

script$W.render = render$W;
script$W.__scopeId = "data-v-766506bb";

var script$V = defineComponent({
  name: "DetailsView",
  props,
  components: {
    FreeTextSearch: script$Z
  },

  setup(p) {
    var _queryParameters$iid;

    const store = useStore();
    const queryParameters = p.queryParameters;
    if (queryParameters && ((_queryParameters$iid = queryParameters["iid"]) === null || _queryParameters$iid === void 0 ? void 0 : _queryParameters$iid.length) > 0) store.commit(Mutations$8.SET_ID, queryParameters["iid"]);
    const itemId = computed(() => store.state.id); // var items = [];

    const items = computed(() => {
      var _store$state$searchRe;

      return (_store$state$searchRe = store.state.searchResult) === null || _store$state$searchRe === void 0 ? void 0 : _store$state$searchRe.items;
    });
    const dataAttributes = p.dataAttributes;
    const enableFreeTextSearch = dataAttributes["enable-freetext-search"];
    const selecteditem = computed(() => store.getters.getItem(itemId));
    console.log("details view selected Item: " + JSON.stringify(selecteditem));
    onMounted(() => {
      if (itemId) store.dispatch(Actions$8.LOAD_ITEM, itemId);
    });
    return {
      itemId,
      items,
      item: computed(() => store.getters.getItem(itemId)),
      //item: computed(() => (store.state as State).item),
      enableFreeTextSearch,
      backToSearchResults: () => {
        store.commit(Mutations$7.SET_ACTIVE_PAGE, ePage.List);
      }
    };
  },

  methods: {}
});

const _withScopeId$4 = n => (pushScopeId("data-v-8afc24e0"), n = n(), popScopeId(), n);

const _hoisted_1$B = /*#__PURE__*/_withScopeId$4(() => /*#__PURE__*/createElementVNode("h2", null, "Details View", -1));

const _hoisted_2$s = {
  class: "row"
};
const _hoisted_3$h = {
  key: 0,
  class: "row"
};
const _hoisted_4$d = {
  class: "col-md-6 grey-BG"
};
const _hoisted_5$b = {
  class: "row"
};

const _hoisted_6$a = /*#__PURE__*/_withScopeId$4(() => /*#__PURE__*/createElementVNode("i", {
  class: "fas fa-image profileHeadshot"
}, null, -1));

const _hoisted_7$7 = {
  class: "profileInfo"
};
const _hoisted_8$6 = {
  class: "item-title"
};
const _hoisted_9$5 = ["onClick"];
const _hoisted_10$5 = {
  class: "content profileDetails"
};

const _hoisted_11$5 = /*#__PURE__*/_withScopeId$4(() => /*#__PURE__*/createElementVNode("button", {
  class: "contactMeBtn btn btn-link marginTop"
}, "Contact Me!", -1));

const _hoisted_12$5 = {
  class: "col-md-5"
};
const _hoisted_13$4 = {
  key: 0,
  class: "marginTop"
};
const _hoisted_14$4 = {
  class: "explore-related"
};

const _hoisted_15$4 = /*#__PURE__*/_withScopeId$4(() => /*#__PURE__*/createElementVNode("div", {
  class: "related-title"
}, "Explore related researchers", -1));

const _hoisted_16$4 = {
  class: "related-scroll"
};

const _hoisted_17$3 = /*#__PURE__*/_withScopeId$4(() => /*#__PURE__*/createElementVNode("i", {
  class: "fas fa-image related-image"
}, null, -1));

const _hoisted_18$3 = {
  class: "related-results"
};
function render$V(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FreeTextSearch = resolveComponent("FreeTextSearch");

  return openBlock(), createElementBlock(Fragment, null, [_hoisted_1$B, createElementVNode("div", _hoisted_2$s, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, item => {
    return openBlock(), createElementBlock("div", {
      key: item.id
    }, [item.id === _ctx.itemId ? (openBlock(), createElementBlock("div", _hoisted_3$h, [createElementVNode("div", _hoisted_4$d, [createElementVNode("div", _hoisted_5$b, [_hoisted_6$a, createElementVNode("div", _hoisted_7$7, [createElementVNode("h5", _hoisted_8$6, [createElementVNode("a", {
      href: "#",
      onClick: $event => _ctx.viewDetails(item.id)
    }, toDisplayString(item.subtitle), 9, _hoisted_9$5)])])]), createElementVNode("div", _hoisted_10$5, toDisplayString(item.content), 1), _hoisted_11$5]), createElementVNode("div", _hoisted_12$5, [createElementVNode("button", {
      class: "backToSearchResultsBtn",
      onClick: _cache[0] || (_cache[0] = function () {
        return _ctx.backToSearchResults && _ctx.backToSearchResults(...arguments);
      })
    }, "Back to search results"), _ctx.enableFreeTextSearch === true ? (openBlock(), createElementBlock("div", _hoisted_13$4, [createVNode(_component_FreeTextSearch)])) : createCommentVNode("", true), createElementVNode("div", _hoisted_14$4, [_hoisted_15$4, createElementVNode("div", _hoisted_16$4, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, item => {
      return openBlock(), createElementBlock("div", {
        key: item.id,
        class: "related"
      }, [_hoisted_17$3, createElementVNode("div", _hoisted_18$3, toDisplayString(item.subtitle), 1)]);
    }), 128))])])])])) : createCommentVNode("", true)]);
  }), 128))])], 64);
}

var css_248z$b = "\n.marginTop[data-v-8afc24e0]{\r\n        margin-top:30px;\n}\n.fa-image[data-v-8afc24e0] {\r\n        font-size: 500%;\n}\n.explore-related[data-v-8afc24e0] {\r\n        display: inline-block;\r\n        position: relative;\r\n        margin: 20px;\r\n        vertical-align: top;\n}\n.related-title[data-v-8afc24e0] {\r\n        background-color: #ececec;\r\n        font-weight: 700;\r\n        text-decoration: underline;\r\n        position: relative;\r\n        width: 230px;\r\n        padding: 15px;\r\n        margin-left: 30px;\r\n        border-radius: 20px 20px 0px 0px;\r\n        font-size: large;\n}\n.related-scroll[data-v-8afc24e0] {\r\n        background-color: #ececec;\r\n        border-radius: 30px;\r\n        padding: 20px;\r\n        width: 450px;\r\n        height: 150px;\r\n        overflow-x: scroll;\r\n        overflow-y: hidden;\r\n        white-space: nowrap;\r\n        display: inline-block;\n}\n.related[data-v-8afc24e0] {\r\n        display: inline-block;\n}\n.related-image[data-v-8afc24e0] {\r\n        position: relative;\r\n        display: inline-block;\r\n        float: left;\r\n        width: 100px;\n}\n.related-results[data-v-8afc24e0] {\r\n        display: inline-block;\r\n        position: relative;\r\n        margin: 20px;\r\n        margin-top: 10px;\n}\n.contactMeBtn[data-v-8afc24e0] {\r\n        float: right;\r\n        background: White;\r\n        border-radius: 50px;\r\n        position: relative;\r\n        display: inline-block;\r\n        padding: 7.5px;\r\n        font-size: large;\n}\n.backToSearchResultsBtn[data-v-8afc24e0] {\r\n        background: #ececec;\r\n        border-radius: 50px;\r\n        position: relative;\r\n        display: inline-block;\r\n        padding: 12.5px\n}\n.grey-BG[data-v-8afc24e0] {\r\n        background-color: #ececec;\r\n        border-radius: 30px;\r\n        height: 500px;\r\n        position: relative;\r\n        width: 600px;\r\n        width: 700px;\r\n        margin-left: 20px;\r\n        margin-top: 10px;\r\n        margin-bottom: 20px;\r\n        display: inline-block;\r\n        overflow-y: hidden;\n}\n.profileInfo[data-v-8afc24e0] {\r\n        margin-left: 10px;\r\n        display: inline-block;\r\n        margin-top: 22px;\r\n        max-width: 275px;\r\n        font-size: large;\n}\n.profileHeadshot[data-v-8afc24e0] {\r\n        font-size: 500%;\r\n        margin: 10px;\n}\r\n\r\n    /* Works on Chrome, Edge, and Safari */\n.related-scroll[data-v-8afc24e0]::-webkit-scrollbar {\r\n        width: 12px;\r\n        height: 5px;\r\n        overflow-x: scroll;\r\n        background-color: transparent;\n}\n.related-scroll[data-v-8afc24e0]::-webkit-scrollbar-track {\r\n        background-color: transparent;\r\n        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.02);\n}\n.related-scroll[data-v-8afc24e0]::-webkit-scrollbar-thumb {\r\n        background-color: grey;\r\n        border-radius: 10px;\r\n        /* border: 1px solid Green;*/\n}\n.related-scroll[data-v-8afc24e0]::-webkit-scrollbar-track-piece:end {\r\n        margin-right: 75px;\n}\n.keywordContainer[data-v-8afc24e0]::-webkit-scrollbar-track-piece:start {\r\n        margin-left: 175px;\n}\r\n";
styleInject(css_248z$b);

script$V.render = render$V;
script$V.__scopeId = "data-v-8afc24e0";

var script$U = defineComponent({
  name: "Popups",
  components: {},
  props: {
    title: {
      type: null,
      required: false,
      default: "Click me"
    },
    popup: {
      type: null,
      required: false
    },
    ...props
  },

  setup(p) {
    const store = useStore();
    const ispopup = ref(p.popup);
    console.log("inside popup New: " + JSON.stringify(p.popup));
    return {
      isPopupVisible: computed(() => store.state.popupVisibility),
      setPopupVisibility: visibility => store.commit(Mutations$7.SET_POPUP_VISIBILITY, visibility),
      ispopup
    };
  },

  methods: {
    closePopup: function () {
      this.ispopup = false;
    }
  }
});

const _hoisted_1$A = {
  class: "popup"
};
const _hoisted_2$r = {
  class: "popup-inner"
};
function render$U(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$A, [createElementVNode("div", _hoisted_2$r, [createElementVNode("button", {
    class: "popup-close",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.setPopupVisibility(!_ctx.isPopupVisible))
  }, " Close Popup "), renderSlot(_ctx.$slots, "default")])]);
}

var css_248z$a = "\n.popup[data-v-4b9ddcea] {\r\n        position: fixed;\r\n        top: 0;\r\n        left: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        z-index: 99;\r\n        background-color: rgba(0, 0, 0, 0.2);\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\n}\n.popup-inner[data-v-4b9ddcea] {\r\n        background: #FFF;\r\n        padding: 32px;\r\n        width:50%;\n}\r\n";
styleInject(css_248z$a);

script$U.render = render$U;
script$U.__scopeId = "data-v-4b9ddcea";

var script$T = defineComponent({
  name: "DirectoryView",
  components: {
    HomeView: script$X,
    ListView: script$W,
    DetailsView: script$V,
    Popups: script$U
  },
  props: {
    colorScheme: {
      type: null,
      required: false
    },
    ...props
  },

  setup(p) {
    const store = useStore();
    const queryParameters = p.queryParameters; // console.log(JSON.stringify(queryParameters))

    const dataAttributes = p.dataAttributes;
    const infoContent = dataAttributes["info-pop-up-content"];
    console.log("pop-up info content " + infoContent);

    if (queryParameters !== null && queryParameters !== void 0 && queryParameters.page) {
      const page = queryParameters === null || queryParameters === void 0 ? void 0 : queryParameters.page;
      store.commit(Mutations$7.SET_ACTIVE_PAGE, page);
    } //popup


    const popupTrigger = ref(false);
    const title = "<h1>Title</h1><hr/>";
    return {
      ePage,
      visit: page => store.commit(Mutations$7.SET_ACTIVE_PAGE, page),
      page: computed(() => store.state.activePage),
      popupTrigger,
      isPopupVisible: computed(() => store.state.popupVisibility),
      setPopupVisibility: visibility => store.commit(Mutations$7.SET_POPUP_VISIBILITY, visibility),
      infoContent,
      title
    };
  }

});

const _hoisted_1$z = ["innerHTML"];

const _hoisted_2$q = /*#__PURE__*/createTextVNode(" | ");

function render$T(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Popups = resolveComponent("Popups");

  const _component_HomeView = resolveComponent("HomeView");

  const _component_ListView = resolveComponent("ListView");

  const _component_DetailsView = resolveComponent("DetailsView");

  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("button", {
    onClick: _cache[0] || (_cache[0] = $event => _ctx.setPopupVisibility(!_ctx.isPopupVisible))
  }, "info"), _ctx.isPopupVisible ? (openBlock(), createBlock(_component_Popups, {
    key: 0,
    popup: _ctx.popupTrigger,
    "data-attributes": _ctx.dataAttributes,
    "query-parameters": _ctx.queryParameters
  }, {
    default: withCtx(() => [createElementVNode("div", null, [createElementVNode("span", {
      innerHTML: _ctx.infoContent
    }, null, 8, _hoisted_1$z)])]),
    _: 1
  }, 8, ["popup", "data-attributes", "query-parameters"])) : createCommentVNode("", true), createElementVNode("nav", null, [createElementVNode("a", {
    href: "#",
    onClick: _cache[1] || (_cache[1] = $event => _ctx.visit(_ctx.ePage.Home))
  }, "Home"), _hoisted_2$q, createElementVNode("a", {
    href: "#",
    onClick: _cache[2] || (_cache[2] = $event => _ctx.visit(_ctx.ePage.List))
  }, "Explore")]), _ctx.page == _ctx.ePage.Home ? (openBlock(), createBlock(_component_HomeView, {
    key: 1,
    "data-attributes": _ctx.dataAttributes,
    "query-parameters": _ctx.queryParameters
  }, null, 8, ["data-attributes", "query-parameters"])) : createCommentVNode("", true), _ctx.page == _ctx.ePage.List ? (openBlock(), createBlock(_component_ListView, {
    key: 2,
    "data-attributes": _ctx.dataAttributes,
    "query-parameters": _ctx.queryParameters
  }, null, 8, ["data-attributes", "query-parameters"])) : createCommentVNode("", true), _ctx.page == _ctx.ePage.Details ? (openBlock(), createBlock(_component_DetailsView, {
    key: 3,
    "data-attributes": _ctx.dataAttributes,
    "query-parameters": _ctx.queryParameters
  }, null, 8, ["data-attributes", "query-parameters"])) : createCommentVNode("", true)], 64);
}

var css_248z$9 = "\n.keywordContainer[data-v-20851afe] {\r\n        overflow-x: scroll;\r\n        overflow-y: visible;\r\n        white-space: nowrap;\r\n        position: relative;\r\n        display: inline-block;\r\n        height: 150px;\r\n        width: 100%;\r\n        scroll-behavior: smooth;\r\n        align-content:center;\n}\n.dir-keyword[data-v-20851afe] {\r\n        display: inline-block;\r\n        margin-top: 15px;\r\n        margin-right: 5px;\n}\n.dir-keyword-button[data-v-20851afe] {\r\n        position: relative;\r\n        color: Black;\r\n        font-size: 0.80em;\r\n        text-align: center;\r\n        border-radius: 60px;\r\n        padding-top: 30px;\r\n        padding-bottom: 30px;\r\n        padding-left: 10px;\r\n        padding-right: 10px;\r\n        max-width: 150px;\r\n        white-space: normal;\n}\n.dir-keyword-button[data-v-20851afe]:focus {\r\n        background-color: yellow;\n}\n.dir-keyword-button[data-v-20851afe]:hover {\r\n       transform: scale(1.2);\r\n       z-index:100;\r\n       opacity:90%;\r\n       text-decoration:underline;\n}\r\n   \r\n   \r\n        /* Works on Chrome, Edge, and Safari */\n.keywordContainer[data-v-20851afe]::-webkit-scrollbar {\r\n        width: 12px;\r\n        height: 5px;\r\n        overflow-x: scroll;\r\n        background-color: transparent;\n}\n.keywordContainer[data-v-20851afe]::-webkit-scrollbar-track {\r\n        background-color: transparent;\r\n        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.05);\n}\n.keywordContainer[data-v-20851afe]::-webkit-scrollbar-thumb {\r\n        background-color: grey;\r\n        border-radius: 10px;\r\n        /* border: 1px solid Green;*/\n}\n.keywordContainer[data-v-20851afe]::-webkit-scrollbar-track-piece:end {\r\n        margin-right: 75px;\n}\n.keywordContainer[data-v-20851afe]::-webkit-scrollbar-track-piece:start {\r\n        margin-left: 175px;\n}\r\n";
styleInject(css_248z$9);

script$T.render = render$T;
script$T.__scopeId = "data-v-20851afe";

var script$S = defineComponent({
  name: "Applet",
  components: {
    DirectoryView: script$T,
    // DictionaryView,
    ListView: script$_,
    FreeTextSearch: script$Z
  },
  props,

  setup(p) {
    console.log('Keyword Search setup ...', p);
    const dataAttributes = p.dataAttributes;
    const displayFormat = dataAttributes["display-format"];
    const blogTitle = dataAttributes["block-title"];
    const blogDescription = dataAttributes["block-description"];
    const enableFreeTextSearch = dataAttributes["enable-freetext-search"];
    const hexColors = dataAttributes["hex-color-list"]; //const infoContent = dataAttributes["info-pop-up-content"] as string;
    //console.log("pop-up info content " + infoContent)
    //We need to use store in this setup method. so let's load it first.

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
      //Dispatch an action to load keywords
      store.dispatch(Actions$7.INIT_FILTER);
    } //When the component is mounted, execute a search query based on the current patameters in the store.state.


    onMounted(() => store.dispatch(Actions$7.FILTER_BY_KEYWORDS));
    const keywordQueryModel = ref(store.state.keywordQueryModel);
    return {
      dataAttributes,
      queryParameters: p.queryParameters,
      keywordQueryModel,
      displayFormat,
      blogTitle,
      blogDescription,
      enableFreeTextSearch,
      hexColors
    };
  },

  storeConfig: {
    state: state$8,
    actions: actions$9,
    mutations: mutations$a,
    getters: getters$9
  }
});

const _hoisted_1$y = ["colorScheme"];
function render$S(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DirectoryView = resolveComponent("DirectoryView");

  const _component_ListView = resolveComponent("ListView");

  return openBlock(), createElementBlock(Fragment, null, [_ctx.displayFormat === 'Directory' ? (openBlock(), createBlock(_component_DirectoryView, {
    key: 0,
    "data-attributes": _ctx.dataAttributes,
    "query-parameters": _ctx.queryParameters
  }, null, 8, ["data-attributes", "query-parameters"])) : createCommentVNode("", true), _ctx.displayFormat === 'List' ? (openBlock(), createElementBlock("div", {
    key: 1,
    class: "row",
    colorScheme: _ctx.hexColors
  }, [createVNode(_component_ListView)], 8, _hoisted_1$y)) : createCommentVNode("", true)], 64);
}

script$S.render = render$S;

const state$7 = {
  Id: null,
  template: null
};

//Declare MutationTypes
var Mutations$6;

(function (Mutations) {
  Mutations["SET_ID"] = "SET_ID";
  Mutations["SET_TEMPLATE"] = "SET_TEMPLATE";
})(Mutations$6 || (Mutations$6 = {})); //Create a mutation tree that implement all mutation interfaces


const mutations$9 = {
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

const actions$8 = {
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

const getters$8 = {//getTemplateId: state => {
  //    return state.queryParameters["templateId"];
  //}
};

var script$R = defineComponent({
  name: "NotificationEditor",
  props: {
    fieldContainer: {
      required: false,
      type: null
    }
  },

  setup() {}

});

function render$R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("h4", null, toDisplayString(_ctx.fieldContainer.name.concatenatedContent), 1), createElementVNode("div", null, toDisplayString(_ctx.fieldContainer), 1)], 64);
}

script$R.render = render$R;

var script$Q = defineComponent({
  name: "FormEditor",
  props: ['form'],

  setup() {}

});

function render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("h4", null, toDisplayString(_ctx.form.name.concatenatedContent), 1), createElementVNode("div", null, toDisplayString(_ctx.form), 1)], 64);
}

script$Q.render = render$Q;

var script$P = defineComponent({
  name: "MetadatasetEditor",
  props: ['metadataset'],

  setup() {}

});

function render$P(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("h4", null, toDisplayString(_ctx.metadataset.name.concatenatedContent), 1), createElementVNode("div", null, toDisplayString(_ctx.metadataset), 1)], 64);
}

script$P.render = render$P;

var script$O = defineComponent({
  name: "ItemTemplate",
  components: {
    NotificationEditor: script$R,
    FormEditor: script$Q,
    MetadatasetEditor: script$P
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

const _withScopeId$3 = n => (pushScopeId("data-v-2579f0c4"), n = n(), popScopeId(), n);

const _hoisted_1$x = {
  class: "container row itemTemplate"
};
const _hoisted_2$p = {
  class: "col-md-4"
};

const _hoisted_3$g = /*#__PURE__*/_withScopeId$3(() => /*#__PURE__*/createElementVNode("div", {
  class: "sectionLabel"
}, "Overview", -1));

const _hoisted_4$c = [_hoisted_3$g];

const _hoisted_5$a = /*#__PURE__*/_withScopeId$3(() => /*#__PURE__*/createElementVNode("div", {
  class: "sectionLabel"
}, "Notifications", -1));

const _hoisted_6$9 = [_hoisted_5$a];
const _hoisted_7$6 = ["onClick"];

const _hoisted_8$5 = /*#__PURE__*/_withScopeId$3(() => /*#__PURE__*/createElementVNode("div", {
  class: "sectionLabel"
}, "Forms", -1));

const _hoisted_9$4 = [_hoisted_8$5];
const _hoisted_10$4 = ["onClick"];

const _hoisted_11$4 = /*#__PURE__*/_withScopeId$3(() => /*#__PURE__*/createElementVNode("div", {
  class: "sectionLabel"
}, "Metadata Forms", -1));

const _hoisted_12$4 = [_hoisted_11$4];
const _hoisted_13$3 = ["onClick"];
const _hoisted_14$3 = {
  class: "col-md-8"
};
const _hoisted_15$3 = {
  key: 0,
  class: "col-12 wrapper"
};

const _hoisted_16$3 = /*#__PURE__*/_withScopeId$3(() => /*#__PURE__*/createElementVNode("h4", null, "Overview", -1));

const _hoisted_17$2 = [_hoisted_16$3];
const _hoisted_18$2 = {
  key: 1,
  class: "col-12 wrapper"
};

const _hoisted_19$2 = /*#__PURE__*/_withScopeId$3(() => /*#__PURE__*/createElementVNode("h4", null, "Notifications", -1));

const _hoisted_20$2 = [_hoisted_19$2];
const _hoisted_21$2 = {
  key: 0
};
const _hoisted_22$2 = {
  key: 2,
  class: "col-12 wrapper"
};

const _hoisted_23$1 = /*#__PURE__*/_withScopeId$3(() => /*#__PURE__*/createElementVNode("h4", null, "Forms", -1));

const _hoisted_24$1 = [_hoisted_23$1];
const _hoisted_25 = {
  key: 0
};
const _hoisted_26 = {
  key: 3,
  class: "col-12 wrapper"
};

const _hoisted_27 = /*#__PURE__*/_withScopeId$3(() => /*#__PURE__*/createElementVNode("h4", null, "Metadata Forms", -1));

const _hoisted_28 = [_hoisted_27];
const _hoisted_29 = {
  key: 0
};
function render$O(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$template, _ctx$metadataSets, _ctx$metadataSets2, _ctx$metadataSets3, _ctx$metadataSets4;

  const _component_NotificationEditor = resolveComponent("NotificationEditor");

  const _component_FormEditor = resolveComponent("FormEditor");

  const _component_MetadatasetEditor = resolveComponent("MetadatasetEditor");

  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("h3", null, toDisplayString((_ctx$template = _ctx.template) === null || _ctx$template === void 0 ? void 0 : _ctx$template.templateName), 1), createElementVNode("div", _hoisted_1$x, [createElementVNode("div", _hoisted_2$p, [createElementVNode("div", {
    class: normalizeClass(["col-12 menuEntry", _ctx.activePanel == 'overview' || _ctx.activePanel == null ? 'active' : '']),
    onClick: _cache[0] || (_cache[0] = $event => _ctx.activePanel = 'overview')
  }, _hoisted_4$c, 2), createElementVNode("div", {
    class: normalizeClass(["col-12 menuEntry", _ctx.activePanel == 'notifications' ? 'active' : '']),
    onClick: _cache[1] || (_cache[1] = $event => _ctx.activePanel = 'notifications')
  }, _hoisted_6$9, 2), (openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$metadataSets = _ctx.metadataSets) === null || _ctx$metadataSets === void 0 ? void 0 : _ctx$metadataSets.filter(m => m.isTemplate == true), ms => {
    return openBlock(), createElementBlock("div", {
      key: ms.id,
      class: normalizeClass(["col-12 menuEntry", _ctx.activePanel == ms.id ? 'active' : '']),
      onClick: $event => _ctx.activePanel = ms.id
    }, toDisplayString(ms.name.concatenatedContent), 11, _hoisted_7$6);
  }), 128)), createElementVNode("div", {
    class: "col-12 menuEntry",
    onClick: _cache[2] || (_cache[2] = $event => _ctx.activePanel = 'forms')
  }, _hoisted_9$4), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataContainer, form => {
    return openBlock(), createElementBlock("div", {
      key: form.id,
      class: normalizeClass(["col-12 menuEntry", _ctx.activePanel == form.id ? 'active' : '']),
      onClick: $event => _ctx.activePanel = form.id
    }, toDisplayString(form.name.concatenatedContent), 11, _hoisted_10$4);
  }), 128)), createElementVNode("div", {
    class: "col-12 menuEntry",
    onClick: _cache[3] || (_cache[3] = $event => _ctx.activePanel = 'metadata-forms')
  }, _hoisted_12$4), (openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$metadataSets2 = _ctx.metadataSets) === null || _ctx$metadataSets2 === void 0 ? void 0 : _ctx$metadataSets2.filter(m => m.isTemplate == false), ms => {
    return openBlock(), createElementBlock("div", {
      key: ms.id,
      class: normalizeClass(["col-12 menuEntry", _ctx.activePanel == ms.id ? 'active' : '']),
      onClick: $event => _ctx.activePanel = ms.id
    }, toDisplayString(ms.name.concatenatedContent), 11, _hoisted_13$3);
  }), 128))]), createElementVNode("div", _hoisted_14$3, [_ctx.activePanel == null || _ctx.activePanel == 'overview' ? (openBlock(), createElementBlock("div", _hoisted_15$3, _hoisted_17$2)) : createCommentVNode("", true), _ctx.activePanel == 'notifications' ? (openBlock(), createElementBlock("div", _hoisted_18$2, _hoisted_20$2)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$metadataSets3 = _ctx.metadataSets) === null || _ctx$metadataSets3 === void 0 ? void 0 : _ctx$metadataSets3.filter(m => m.isTemplate == true), ms => {
    return openBlock(), createElementBlock("div", {
      key: ms.id,
      class: "col-12 wrapper"
    }, [_ctx.activePanel == ms.id ? (openBlock(), createElementBlock("div", _hoisted_21$2, [createVNode(_component_NotificationEditor, {
      fieldContainer: ms
    }, null, 8, ["fieldContainer"])])) : createCommentVNode("", true)]);
  }), 128)), _ctx.activePanel == 'forms' ? (openBlock(), createElementBlock("div", _hoisted_22$2, _hoisted_24$1)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataContainer, form => {
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

var css_248z$8 = "\n.menuEntry[data-v-2579f0c4]{\r\n        border: 1px solid Grey;\r\n        margin: 10px;\r\n        padding: 10px 10px;\n}\n.menuEntry.active[data-v-2579f0c4] {\r\n            background-color: #BBBCAA;\n}\n.sectionLabel[data-v-2579f0c4]{\r\n        font-weight: bold;\n}\n.wrapper[data-v-2579f0c4]{\r\n        margin: 0;\r\n        padding: 0;\n}\r\n";
styleInject(css_248z$8);

script$O.render = render$O;
script$O.__scopeId = "data-v-2579f0c4";

var script$N = defineComponent({
  name: "ItemTemplateEditor",
  components: {
    ItemTemplate: script$O
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
    state: state$7,
    actions: actions$8,
    mutations: mutations$9,
    getters: getters$8
  }
});

const _hoisted_1$w = /*#__PURE__*/createElementVNode("h3", null, "Item Template Editor", -1);

function render$N(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ItemTemplate = resolveComponent("ItemTemplate");

  return openBlock(), createElementBlock(Fragment, null, [_hoisted_1$w, createElementVNode("div", null, "Item Template ID: " + toDisplayString(_ctx.queryParameters.id), 1), createVNode(_component_ItemTemplate)], 64);
}

script$N.render = render$N;

var script$M = defineComponent({
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

const _hoisted_1$v = /*#__PURE__*/createElementVNode("h2", null, "Item Ediror", -1);

function render$M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [_hoisted_1$v, createElementVNode("div", null, "Item ID: " + toDisplayString(_ctx.queryParameters.id), 1)]);
}

script$M.render = render$M;

const getters$7 = {
  rootDataItem: state => {
    var _state$item, _state$item$dataConta, _state$item$dataConta2;

    return (_state$item = state.item) === null || _state$item === void 0 ? void 0 : (_state$item$dataConta = _state$item.dataContainer) === null || _state$item$dataConta === void 0 ? void 0 : (_state$item$dataConta2 = _state$item$dataConta.$values) === null || _state$item$dataConta2 === void 0 ? void 0 : _state$item$dataConta2.filter(dc => dc.isRoot)[0];
  },
  metadataSet: state => id => {
    var _state$item2, _state$item2$metadata, _state$item2$metadata2;

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

var script$L = defineComponent({
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

const _hoisted_1$u = {
  key: 0
};
const _hoisted_2$o = ["href"];
const _hoisted_3$f = {
  key: 1
};
function render$L(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.isUrl(_ctx.model.value) ? (openBlock(), createElementBlock("div", _hoisted_1$u, [createElementVNode("a", {
    href: _ctx.model.value
  }, toDisplayString(_ctx.model.value), 9, _hoisted_2$o)])) : (openBlock(), createElementBlock("div", _hoisted_3$f, toDisplayString(_ctx.model.value), 1));
}

script$L.render = render$L;

var script$K = defineComponent({
  name: "TextCollection",
  props: {
    model: {
      type: null,
      required: true
    }
  },
  components: {
    Text: script$L
  }
});

function render$K(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Text = resolveComponent("Text");

  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.values.$values, txt => {
    return openBlock(), createElementBlock("div", null, [createVNode(_component_Text, {
      model: txt
    }, null, 8, ["model"])]);
  }), 256);
}

script$K.render = render$K;

var script$J = defineComponent({
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
    TextCollection: script$K
  }
});

function render$J(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TextCollection = resolveComponent("TextCollection");

  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.values.$values, val => {
    return openBlock(), createElementBlock("div", {
      key: val.id
    }, [createVNode(_component_TextCollection, {
      model: val
    }, null, 8, ["model"])]);
  }), 128);
}

script$J.render = render$J;

var script$I = defineComponent({
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

function render$I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.values.$values, val => {
    return openBlock(), createElementBlock("div", null, toDisplayString(val.value), 1);
  }), 256);
}

script$I.render = render$I;

var script$H = defineComponent({
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

function render$H(_ctx, _cache, $props, $setup, $data, $options) {
  return toDisplayString(_ctx.getSelectedFieldLabels(_ctx.model));
}

script$H.render = render$H;

var script$G = defineComponent({
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

function render$G(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.values.$values, val => {
    return openBlock(), createElementBlock("div", null, toDisplayString(_ctx.formatToDecimal(val, _ctx.numDecimalPlaces)), 1);
  }), 256);
}

script$G.render = render$G;

var script$F = defineComponent({
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

function render$F(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.values.$values, val => {
    return openBlock(), createElementBlock("div", null, toDisplayString(val.value), 1);
  }), 256);
}

script$F.render = render$F;

var script$E = defineComponent({
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

function render$E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.values.$values, val => {
    return openBlock(), createElementBlock("div", null, toDisplayString(_ctx.formatDate(val.value)), 1);
  }), 256);
}

script$E.render = render$E;

var script$D = defineComponent({
  name: "ChildFieldContainer",
  props: {
    model: null
  },
  components: {
    TextField: script$J,
    EmailField: script$I,
    OptionsField: script$H,
    DecimalField: script$G,
    IntegerField: script$F,
    DateField: script$E
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

const _hoisted_1$t = {
  class: "field-name col-md-3"
};
const _hoisted_2$n = {
  class: "field-value col-md-9"
};
const _hoisted_3$e = {
  key: 7
};
const _hoisted_4$b = {
  key: 8
};
const _hoisted_5$9 = {
  key: 9
};
const _hoisted_6$8 = {
  key: 11
};
function render$D(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TextField = resolveComponent("TextField");

  const _component_EmailField = resolveComponent("EmailField");

  const _component_OptionsField = resolveComponent("OptionsField");

  const _component_DecimalField = resolveComponent("DecimalField");

  const _component_IntegerField = resolveComponent("IntegerField");

  const _component_DateField = resolveComponent("DateField");

  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.fields.$values, field => {
    return openBlock(), createElementBlock("div", {
      class: normalizeClass(["row", _ctx.cssClass(field)])
    }, [createElementVNode("div", _hoisted_1$t, toDisplayString(field.name.concatenatedContent), 1), createElementVNode("div", _hoisted_2$n, [this.isTextField(field) ? (openBlock(), createBlock(_component_TextField, {
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
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isAttachmentField(_ctx.model) ? (openBlock(), createElementBlock("div", _hoisted_3$e, " AttachmentField ")) : createCommentVNode("", true), this.isCompositeField(_ctx.model) ? (openBlock(), createElementBlock("div", _hoisted_4$b, " CompositeField ")) : createCommentVNode("", true), this.isInfoSection(_ctx.model) ? (openBlock(), createElementBlock("div", _hoisted_5$9, " InfoSection ")) : createCommentVNode("", true), this.isMonolingualTextField(_ctx.model) ? (openBlock(), createBlock(_component_TextField, {
      key: 10,
      model: field
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isTableField(_ctx.model) ? (openBlock(), createElementBlock("div", _hoisted_6$8, " TableField ")) : createCommentVNode("", true)])], 2);
  }), 256);
}

script$D.render = render$D;

//import { Guid } from "guid-typescript";
var script$C = defineComponent({
  name: "FieldContainerReference",
  components: {
    ChildFieldContainer: script$D
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

function render$C(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChildFieldContainer = resolveComponent("ChildFieldContainer");

  return openBlock(), createBlock(_component_ChildFieldContainer, {
    model: _ctx.source
  }, null, 8, ["model"]);
}

script$C.render = render$C;

var script$B = defineComponent({
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

const _hoisted_1$s = ["href"];
const _hoisted_2$m = ["src"];
function render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.files.$values, file => {
    return openBlock(), createElementBlock("div", null, [createElementVNode("a", {
      href: _ctx.fileUrl + file.fileName
    }, [createElementVNode("img", {
      src: file.thumbnail,
      class: "img-thumbnail"
    }, null, 8, _hoisted_2$m)], 8, _hoisted_1$s), createTextVNode(toDisplayString(file.originalFileName), 1)]);
  }), 256);
}

var css_248z$7 = "\n.img-thumbnail[data-v-307ae89a]{\r\n        width:35px;\r\n        height: auto;\r\n        margin-right: 10px;\n}\r\n";
styleInject(css_248z$7);

script$B.render = render$B;
script$B.__scopeId = "data-v-307ae89a";

var script$A = defineComponent({
  name: "InfoField",
  props: {
    model: {
      type: null,
      required: true
    }
  }
});

const _hoisted_1$r = ["innerHTML"];
function render$A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.content.values.$values, val => {
    return openBlock(), createElementBlock("div", {
      key: val.id
    }, [createElementVNode("div", {
      innerHTML: val.value
    }, null, 8, _hoisted_1$r)]);
  }), 128);
}

script$A.render = render$A;

var script$z = defineComponent({
  name: "FieldContainer",
  props: {
    model: null,
    hideFieldNames: Boolean
  },
  components: {
    TextField: script$J,
    EmailField: script$I,
    OptionsField: script$H,
    DecimalField: script$G,
    IntegerField: script$F,
    DateField: script$E,
    ReferenceField: script$C,
    AttachmentField: script$B,
    InfoField: script$A
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

const _hoisted_1$q = {
  class: "timeStamp"
};
const _hoisted_2$l = {
  key: 0,
  class: "field-name col-md-3"
};
const _hoisted_3$d = {
  class: "field-value col-md-9"
};
const _hoisted_4$a = {
  key: 10
};
const _hoisted_5$8 = {
  key: 11
};
function render$z(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ReferenceField = resolveComponent("ReferenceField");

  const _component_TextField = resolveComponent("TextField");

  const _component_EmailField = resolveComponent("EmailField");

  const _component_OptionsField = resolveComponent("OptionsField");

  const _component_DecimalField = resolveComponent("DecimalField");

  const _component_IntegerField = resolveComponent("IntegerField");

  const _component_DateField = resolveComponent("DateField");

  const _component_AttachmentField = resolveComponent("AttachmentField");

  const _component_InfoField = resolveComponent("InfoField");

  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("div", _hoisted_1$q, toDisplayString(_ctx.formatDate(_ctx.model.created)), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.fields.$values, field => {
    return openBlock(), createElementBlock("div", null, [this.isFieldContainerReference(field) ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(_ctx.cssClass(field))
    }, [createVNode(_component_ReferenceField, {
      model: field
    }, null, 8, ["model"])], 2)) : (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(["row", _ctx.cssClass(field)])
    }, [!_ctx.hideFieldNames ? (openBlock(), createElementBlock("div", _hoisted_2$l, toDisplayString(field.name.concatenatedContent), 1)) : createCommentVNode("", true), createElementVNode("div", _hoisted_3$d, [this.isTextField(field) ? (openBlock(), createBlock(_component_TextField, {
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
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isCompositeField(field) ? (openBlock(), createElementBlock("div", _hoisted_4$a, " CompositeField ")) : createCommentVNode("", true), this.isTableField(field) ? (openBlock(), createElementBlock("div", _hoisted_5$8, " TableField ")) : createCommentVNode("", true)])], 2))]);
  }), 256))], 64);
}

script$z.render = render$z;

var script$y = defineComponent({
  name: "ItemViewer",
  components: {
    FieldContainer: script$z
  },
  props,

  setup(p) {
    const store = useStore();
    const dataAttributes = p.dataAttributes;
    console.log('Item Viewer setup ...');
    console.log('props: ', JSON.stringify(p));
    const isAdmin = dataAttributes["is-admin"];
    const siteUrl = dataAttributes["site-url"];
    store.commit(Mutations$8.SET_SITE_URL, siteUrl);
    console.log('isAdmin: ', isAdmin);
    const queryParams = p.queryParameters;
    store.commit(Mutations$8.SET_ID, queryParams.iid); //load the data

    store.dispatch(Actions$8.LOAD_ITEM);
    return {
      store,
      queryParams,
      dataItem: computed(() => store.getters.rootDataItem),
      isAdmin
    };
  },

  storeConfig: {
    state: state$9,
    actions: actions$a,
    mutations: mutations$b,
    getters: getters$7
  },
  methods: {
    changeItemState(itemId) {
      if (confirm("Do you really want to delete this item?")) {
        // this.store.dispatch(Actions.DELETE_CHILD_INSTANCE, itemToRemove);
        console.log("id: " + itemId);
        this.store.dispatch(Actions$8.CHANGE_STATE, itemId);
      }
    }

  }
});

const _hoisted_1$p = {
  key: 0,
  class: "text-right"
};
const _hoisted_2$k = {
  class: "item"
};
function render$y(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FieldContainer = resolveComponent("FieldContainer");

  return openBlock(), createElementBlock(Fragment, null, [_ctx.isAdmin ? (openBlock(), createElementBlock("div", _hoisted_1$p, [createElementVNode("span", {
    class: "fas fa-remove",
    onClick: _cache[0] || (_cache[0] = $event => {
      _ctx.changeItemState(_ctx.queryParams.iid);
    })
  })])) : createCommentVNode("", true), createElementVNode("div", _hoisted_2$k, [_ctx.dataItem ? (openBlock(), createBlock(_component_FieldContainer, {
    key: 0,
    model: _ctx.dataItem
  }, null, 8, ["model"])) : createCommentVNode("", true)])], 64);
}

var css_248z$6 = "\n.field-name[data-v-4033daca] {\r\n        font-weight: bold !important;\n}\n.fa-remove[data-v-4033daca] {\r\n        color: red;\r\n        margin-left: 30px;\n}\r\n";
styleInject(css_248z$6);

script$y.render = render$y;
script$y.__scopeId = "data-v-4033daca";

var eIndexingStatus;

(function (eIndexingStatus) {
  eIndexingStatus[eIndexingStatus["InProgress"] = 1] = "InProgress";
  eIndexingStatus[eIndexingStatus["Ready"] = 2] = "Ready";
})(eIndexingStatus || (eIndexingStatus = {}));

//import { Guid } from 'guid-typescript'
const state$6 = {
  indexingStatus: {
    pageIndexingStatus: eIndexingStatus.Ready,
    dataIndexingStatus: eIndexingStatus.Ready
  }
};

//Declare MutationTypes
var Mutations$5;

(function (Mutations) {
  Mutations["SET_REINDEX_PAGE_STATUS"] = "SET_REINDEX_PAGE_STATUS";
  Mutations["SET_REINDEX_DATA_STATUS"] = "SET_REINDEX_DATA_STATUS";
  Mutations["SET_REINDEX_STATUS"] = "SET_REINDEX_STATUS";
})(Mutations$5 || (Mutations$5 = {})); //Create a mutation tree that implement all mutation interfaces


const mutations$8 = {
  [Mutations$5.SET_REINDEX_PAGE_STATUS](state, payload) {
    console.log("SET_REINDEX_PAGE_STATUS: ", payload);
    state.indexingStatus.pageIndexingStatus = payload;
  },

  [Mutations$5.SET_REINDEX_DATA_STATUS](state, payload) {
    console.log("SET_REINDEX_DATA_STATUS: ", payload);
    state.indexingStatus.dataIndexingStatus = payload;
  },

  [Mutations$5.SET_REINDEX_STATUS](state, payload) {
    console.log("SET_REINDEX_STATUS: ", payload);
    state.indexingStatus = payload;
  }

};

var Actions$5;

(function (Actions) {
  Actions["REINDEX_DATA"] = "REINDEX_DATA";
  Actions["REINDEX_PAGES"] = "REINDEX_PAGES";
  Actions["FETCH_REINDEX_STATUS"] = "FETCH_REINDEX_STATUS";
})(Actions$5 || (Actions$5 = {}));

const actions$7 = {
  [Actions$5.REINDEX_DATA](store) {
    const api = window.location.origin + `/applets/api/reindex/data`;
    store.commit(Mutations$5.SET_REINDEX_DATA_STATUS, eIndexingStatus.InProgress);
    fetch(api, {
      method: 'POST'
    }).then(response => response.json()).then(data => {
      store.commit(Mutations$5.SET_REINDEX_DATA_STATUS, data);
    }).catch(error => {
      console.error('Data reindexing error:', error);
    });
  },

  [Actions$5.REINDEX_PAGES](store) {
    const api = window.location.origin + `/applets/api/reindex/pages`;
    store.commit(Mutations$5.SET_REINDEX_PAGE_STATUS, eIndexingStatus.InProgress);
    fetch(api, {
      method: 'POST'
    }).then(response => response.json()).then(data => {
      store.commit(Mutations$5.SET_REINDEX_PAGE_STATUS, data);
    }).catch(error => {
      console.error('Page reindexing error:', error);
    });
  },

  [Actions$5.FETCH_REINDEX_STATUS](store) {
    const api = window.location.origin + `/applets/api/reindex/status`;
    fetch(api).then(response => response.json()).then(data => {
      store.commit(Mutations$5.SET_REINDEX_STATUS, data);
    }).catch(error => {
      console.error('Fetch reindexing status error:', error);
    });
  }

};

const getters$6 = {};

var script$x = defineComponent({
  name: "IndexingPanel",
  props: {},

  setup() {
    const store = useStore();
    return {
      reindexData: () => store.dispatch(Actions$5.REINDEX_DATA),
      reindexPages: () => store.dispatch(Actions$5.REINDEX_PAGES),
      isPageIndexingReady: computed(() => store.state.indexingStatus.pageIndexingStatus == eIndexingStatus.Ready),
      isDataIndexingReady: computed(() => store.state.indexingStatus.dataIndexingStatus == eIndexingStatus.Ready)
    };
  }

});

const _hoisted_1$o = /*#__PURE__*/createElementVNode("h5", {
  class: "card-title"
}, "Data Indexing", -1);

const _hoisted_2$j = /*#__PURE__*/createElementVNode("p", {
  class: "card-text"
}, "With supporting text below as a natural lead-in to additional content.", -1);

const _hoisted_3$c = {
  key: 1,
  class: "btn btn-danger",
  disabled: ""
};

const _hoisted_4$9 = /*#__PURE__*/createElementVNode("br", null, null, -1);

const _hoisted_5$7 = /*#__PURE__*/createElementVNode("br", null, null, -1);

const _hoisted_6$7 = /*#__PURE__*/createElementVNode("h5", {
  class: "card-title"
}, "Page Indexing", -1);

const _hoisted_7$5 = /*#__PURE__*/createElementVNode("p", {
  class: "card-text"
}, "With supporting text below as a natural lead-in to additional content.", -1);

const _hoisted_8$4 = {
  key: 3,
  class: "btn btn-danger",
  disabled: ""
};
function render$x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [_hoisted_1$o, _hoisted_2$j, _ctx.isDataIndexingReady ? (openBlock(), createElementBlock("button", {
    key: 0,
    class: "btn btn-primary",
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.reindexData && _ctx.reindexData(...arguments);
    })
  }, "Reindex")) : (openBlock(), createElementBlock("button", _hoisted_3$c, "Indexing In-progress")), _hoisted_4$9, _hoisted_5$7, _hoisted_6$7, _hoisted_7$5, _ctx.isPageIndexingReady ? (openBlock(), createElementBlock("button", {
    key: 2,
    class: "btn btn-primary",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.reindexPages && _ctx.reindexPages(...arguments);
    })
  }, "Reindex")) : (openBlock(), createElementBlock("button", _hoisted_8$4, "Indexing In-progress"))], 64);
}

script$x.render = render$x;

var script$w = defineComponent({
  name: "Applet",
  components: {
    IndexingPanel: script$x
  },
  props,

  setup(p) {
    console.log('Process Manager setup ...', p);
    const store = useStore();
    onMounted(() => store.dispatch(Actions$5.FETCH_REINDEX_STATUS));
  },

  storeConfig: {
    state: state$6,
    actions: actions$7,
    mutations: mutations$8,
    getters: getters$6
  }
});

const _hoisted_1$n = {
  class: "card"
};

const _hoisted_2$i = /*#__PURE__*/createElementVNode("div", {
  class: "card-header"
}, " Indexing Processes ", -1);

const _hoisted_3$b = {
  class: "card-body"
};
function render$w(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IndexingPanel = resolveComponent("IndexingPanel");

  return openBlock(), createElementBlock("div", _hoisted_1$n, [_hoisted_2$i, createElementVNode("div", _hoisted_3$b, [createVNode(_component_IndexingPanel)])]);
}

script$w.render = render$w;

//Declare MutationTypes
var Mutations$4;

(function (Mutations) {
  Mutations["SET_SOURCE"] = "SET_SOURCE";
  Mutations["SET_MODEL"] = "SET_MODEL";
})(Mutations$4 || (Mutations$4 = {})); //Create a mutation tree that implement all mutation interfaces


const mutations$7 = {
  [Mutations$4.SET_SOURCE](state, payload) {
    state.pageId = payload.pageId;
    state.blockId = payload.blockId;
  },

  [Mutations$4.SET_MODEL](state, payload) {
    state.model = payload;
  }

};

var Actions$4;

(function (Actions) {
  Actions["LOAD_BLOCK"] = "LOAD_BLOCK";
  Actions["LOAD_PAGE"] = "LOAD_PAGE";
})(Actions$4 || (Actions$4 = {}));

const actions$6 = {
  [Actions$4.LOAD_BLOCK](store) {
    if (!store.state.pageId) console.error("Page ID is null. It must be a valid GUID");
    if (!store.state.blockId) console.error("Block ID is null. It must be a valid GUID");
    const api = window.location.origin + `/applets/api/content/page/${store.state.pageId}/block/${store.state.blockId}`;
    console.log('LOAD_BLOCK API: ', api);
    fetch(api, {
      method: 'GET'
    }).then(response => response.json()).then(data => {
      store.commit(Mutations$4.SET_MODEL, data);
    }).catch(error => {
      console.error('LOAD_BLOCK error:', error);
    });
  },

  [Actions$4.LOAD_PAGE](store) {
    if (!store.state.pageId) throw new Error("Page ID is null. It must be a valid GUID");
    const api = window.location.origin + `/applets/api/content/page/${store.state.pageId}`;
    console.log('LOAD_PAGE API: ', api);
    fetch(api, {
      method: 'GET'
    }).then(response => response.json()).then(data => {
      store.commit(Mutations$4.SET_MODEL, data);
    }).catch(error => {
      console.error('LOAD_PAGE error:', error);
    });
  }

};

const getters$5 = {
  //  items: (state): Item[] | undefined => {
  //    return state.searchResult?.items
  //  },
  searchParamStorageKey: state => {
    var _state$blockId;

    return ((_state$blockId = state.blockId) === null || _state$blockId === void 0 ? void 0 : _state$blockId.toString()) + "SearchParams";
  }
};

var script$v = defineComponent({
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

const _hoisted_1$m = ["id"];
function render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "root",
    style: normalizeStyle([{
      backgroundImage: `url(${_ctx.imageUrl})`
    }, {
      "background-size": "cover"
    }]),
    id: _ctx.image.id,
    class: "cf-img-div"
  }, null, 12, _hoisted_1$m);
}

script$v.render = render$v;

var script$u = defineComponent({
  name: "CardTemplate",
  components: {
    ImgDiv: script$v
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

const _hoisted_1$l = {
  class: "col-md-4 cf-card"
};
function render$u(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_img_div = resolveComponent("img-div");

  return openBlock(), createElementBlock("div", _hoisted_1$l, [createVNode(_component_img_div, {
    image: _ctx.cardImage,
    "debounce-ms": 250,
    class: "img-div"
  }, null, 8, ["image"]), createElementVNode("h2", null, toDisplayString(_ctx.title), 1), createElementVNode("h4", null, toDisplayString(_ctx.subTitle), 1)]);
}

var css_248z$5 = "\n.cf-card{\r\n        text-align:center;\n}\r\n";
styleInject(css_248z$5);

script$u.render = render$u;

var script$t = defineComponent({
  name: "Applet",
  components: {
    CardTemplate: script$u
  },
  props,

  setup(p) {
    console.log('Grid setup ...');
    const store = useStore(); //Storing the page and block IDs in the store

    store.commit(Mutations$4.SET_SOURCE, {
      pageId: p.pageId,
      blockId: p.blockId
    }); //When the component is mounted, load the grid contents.

    onMounted(() => store.dispatch(Actions$4.LOAD_BLOCK));
    return {
      model: computed(() => store.state.model)
    };
  },

  storeConfig: {
    actions: actions$6,
    mutations: mutations$7,
    getters: getters$5
  }
});

const _hoisted_1$k = /*#__PURE__*/createElementVNode("h2", null, "Grid", -1);

const _hoisted_2$h = {
  class: "row"
};
function render$t(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model;

  const _component_CardTemplate = resolveComponent("CardTemplate");

  return openBlock(), createElementBlock("div", null, [_hoisted_1$k, createElementVNode("div", _hoisted_2$h, [(openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$model = _ctx.model) === null || _ctx$model === void 0 ? void 0 : _ctx$model.items, card => {
    return openBlock(), createBlock(_component_CardTemplate, {
      model: card
    }, null, 8, ["model"]);
  }), 256))])]);
}

script$t.render = render$t;

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
function isRequiredField(field) {
  return field !== null && field !== void 0 && field.required ? field.required : false;
}
function isRichTextField(field) {
  return field !== null && field !== void 0 && field.richText ? field.richText : false;
}
function createTextElement() {
  let lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "en";
  let value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return {
    id: guid$1.Guid.create().toString(),
    $type: "Catfish.Core.Models.Contents.Text, Catfish.Core",
    language: lang,
    created: new Date(),
    value: value
  };
}
function createMultilingualValueElment() {
  let lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["en"];
  return {
    id: guid$1.Guid.create().toString(),
    $type: "Catfish.Core.Models.Contents.MultilingualValue, Catfish.Core",
    values: {
      $type: "Catfish.Core.Models.Contents.XmlModelList`1[[Catfish.Core.Models.Contents.Text, Catfish.Core]], Catfish.Core",
      $values: lang.map(x => createTextElement(x))
    }
  };
}
function getLanguages(multilingualValue) {
  return multilingualValue.values.$values.map(text => text.language);
}

const flattenedFormFiledState = {
  modified: false,
  flattenedTextModels: {},
  flattenedOptionModels: {},
  flattenedFileModels: {}
};

const state$5 = { ...flattenedFormFiledState,
  itemTemplateId: null,
  formId: null,
  collectionId: null,
  groupId: null,
  form: null,
  submissionStatus: eSubmissionStatus.None,
  formLoadAPI: null,
  formSubmissionAPI: null
};

const state$4 = {
  itemInstanceId: null,
  childResponseFormId: null,
  childResponseForm: null,
  formInstances: null,
  ...state$5
};

var FlattenedFormFiledMutations;

(function (FlattenedFormFiledMutations) {
  FlattenedFormFiledMutations["SET_TEXT_VALUE"] = "SET_TEXT_VALUE";
  FlattenedFormFiledMutations["SET_OPTION_VALUE"] = "SET_OPTION_VALUE";
  FlattenedFormFiledMutations["ADD_FILE"] = "ADD_FILE";
  FlattenedFormFiledMutations["REMOVE_FILE"] = "REMOVE_FILE";
  FlattenedFormFiledMutations["CLEAR_FIELD_DATA"] = "CLEAR_FIELD_DATA";
  FlattenedFormFiledMutations["REMOVE_FIELD_CONTAINERS"] = "REMOVE_FIELD_CONTAINERS";
  FlattenedFormFiledMutations["APPEND_FIELD_DATA"] = "APPEND_FIELD_DATA";
  FlattenedFormFiledMutations["APPEND_MONOLINGUAL_VALUE"] = "APPEND_MONOLINGUAL_VALUE";
  FlattenedFormFiledMutations["APPEND_MULTILINGUAL_VALUE"] = "APPEND_MULTILINGUAL_VALUE";
})(FlattenedFormFiledMutations || (FlattenedFormFiledMutations = {})); //Create a mutation tree that implement all mutation interfaces


const mutations$6 = {
  [FlattenedFormFiledMutations.SET_TEXT_VALUE](state, payload) {
    state.flattenedTextModels[payload.id.toString()].value = payload.val;
    state.modified = true; ////    //Re-validating the forms
    ////    state.fieldContainers?.forEach(fc => {
    ////        if (fc?.validationStatus === eValidationStatus.INVALID)
    ////        validateFields(fc);
    ////    })
  },

  [FlattenedFormFiledMutations.SET_OPTION_VALUE](state, payload) {
    state.flattenedOptionModels[payload.id.toString()].selected = payload.isSelected;
    state.modified = true;
  },

  [FlattenedFormFiledMutations.ADD_FILE](state, payload) {
    if (!state.flattenedFileModels[payload.id.toString()]) state.flattenedFileModels[payload.id.toString()] = [];
    state.flattenedFileModels[payload.id.toString()].push(payload.val);
    state.modified = true;
  },

  [FlattenedFormFiledMutations.REMOVE_FILE](state, payload) {
    var _state$flattenedFileM;

    (_state$flattenedFileM = state.flattenedFileModels[payload.id.toString()]) === null || _state$flattenedFileM === void 0 ? void 0 : _state$flattenedFileM.splice(payload.index, 1);
    state.modified = true;
  },

  [FlattenedFormFiledMutations.CLEAR_FIELD_DATA](state) {
    //Iterate through all Text elements in state.flattenedTextModels 
    Object.keys(state.flattenedTextModels).forEach(function (key) {
      state.flattenedTextModels[key].value = '';
    }); // Iterate through all Option elements in state.flattenedOptionModels

    Object.keys(state.flattenedOptionModels).forEach(function (key) {
      state.flattenedOptionModels[key].selected = false;
    }); // Iterate through attachment in state.flattenedOptionModels

    Object.keys(state.flattenedFileModels).forEach(function (key) {
      state.flattenedFileModels[key] = [];
    }); //Since this mutation is meant to reset forms, reset modified flag to false

    state.modified = false;
  },

  [FlattenedFormFiledMutations.REMOVE_FIELD_CONTAINERS](state) {
    state.flattenedTextModels = {};
    state.flattenedOptionModels = {};
    state.flattenedFileModels = {}; //Since this mutation is meant to reset forms, reset modified flag to false

    state.modified = false;
  },

  [FlattenedFormFiledMutations.APPEND_FIELD_DATA](state, payload) {
    //console.log('SET_FORM payload:\n', JSON.stringify(payload));
    flattenFieldInputs(payload, state);
  },

  [FlattenedFormFiledMutations.APPEND_MONOLINGUAL_VALUE](state, target) {
    var _target$values;

    const newText = createTextElement();
    (_target$values = target.values) === null || _target$values === void 0 ? void 0 : _target$values.$values.push(newText);
    state.flattenedTextModels[newText.id.toString()] = newText;
  },

  [FlattenedFormFiledMutations.APPEND_MULTILINGUAL_VALUE](state, target) {
    var _target$values2, _target$values3, _target$values4;

    const languages = (_target$values2 = target.values) !== null && _target$values2 !== void 0 && _target$values2.$values[0] ? getLanguages((_target$values3 = target.values) === null || _target$values3 === void 0 ? void 0 : _target$values3.$values[0]) : ["en"];
    const newMultilingualValue = createMultilingualValueElment(languages);
    newMultilingualValue.values.$values.forEach(text => state.flattenedTextModels[text.id.toString()] = text);
    (_target$values4 = target.values) === null || _target$values4 === void 0 ? void 0 : _target$values4.$values.push(newMultilingualValue); ////var newTextCollection = {
    ////    id: Guid.create().toString() as unknown as Guid,
    ////    $type: "Catfish.Core.Models.Contents.MultilingualValue, Catfish.Core",
    ////    values: {
    ////        $type: "Catfish.Core.Models.Contents.XmlModelList`1[[Catfish.Core.Models.Contents.Text, Catfish.Core]], Catfish.Core",
    ////        $values: [] as Text[]
    ////    }
    ////} as TextCollection
    ////if (target.values?.$values[0]) {
    ////    target.values.$values[0].values.$values.forEach((txt: Text | any) => {
    ////        const newTxt: Text = {
    ////            id: Guid.create().toString() as unknown as Guid,
    ////            $type: "Catfish.Core.Models.Contents.Text, Catfish.Core",
    ////            language: txt.language
    ////        } as Text;
    ////        newTextCollection.values.$values.push(newTxt);
    ////        state.flattenedTextModels[newTxt.id.toString()] = newTxt;
    ////    })
    ////}
    ////else {
    ////    const newTxt: Text = {
    ////        id: Guid.create().toString() as unknown as Guid,
    ////        $type: "Catfish.Core.Models.Contents.Text, Catfish.Core",
    ////        language: "en"
    ////    } as Text;
    ////    newTextCollection.values.$values.push(newTxt);
    ////    state.flattenedTextModels[newTxt.id.toString()] = newTxt;
    ////}
    ////target.values?.$values.push(newTextCollection);
  }

};

var Mutations$3;

(function (Mutations) {
  Mutations["SET_ITEM_TEMPLATE_ID"] = "SET_ITEM_TEMPLATE_ID";
  Mutations["SET_FORM_ID"] = "SET_FORM_ID";
  Mutations["SET_SUBMISSION_STATUS"] = "SET_SUBMISSION_STATUS";
  Mutations["SET_COLLECTION_ID"] = "SET_COLLECTION_ID";
  Mutations["SET_GROUP_ID"] = "SET_GROUP_ID";
  Mutations["SET_FORM"] = "SET_FORM";
})(Mutations$3 || (Mutations$3 = {})); //Create a mutation tree that implement all mutation interfaces


const mutations$5 = { ...mutations$6,

  [Mutations$3.SET_ITEM_TEMPLATE_ID](state, payload) {
    state.itemTemplateId = payload;
  },

  [Mutations$3.SET_FORM_ID](state, payload) {
    state.formId = payload;
  },

  [Mutations$3.SET_COLLECTION_ID](state, payload) {
    state.collectionId = payload;
  },

  [Mutations$3.SET_GROUP_ID](state, payload) {
    state.groupId = payload;
  },

  [Mutations$3.SET_SUBMISSION_STATUS](state, status) {
    //const fieldType: eFieldType = eFieldType[fieldTypeStr as keyof typeof eFieldType];
    state.submissionStatus = eSubmissionStatus[status];
  },

  [Mutations$3.SET_FORM](state, payload) {
    state.form = payload;
  }

};

var Mutations$2;

(function (Mutations) {
  Mutations["SET_SUBMISSIONS"] = "SET_SUBMISSIONS";
  Mutations["SET_PARENT_ITEM_ID"] = "SET_PARENT_ITEM_ID";
  Mutations["APPEND_CHILD_INSTANCE"] = "APPEND_CHILD_INSTANCE";
  Mutations["SET_RESPONSE_FORM_ID"] = "SET_RESPONSE_FORM_ID";
  Mutations["SET_RESPONSE_FORM"] = "SET_RESPONSE_FORM";
  Mutations["APPEND_CHILD_RESPONSE_INSTANCE"] = "APPEND_CHILD_RESPONSE_INSTANCE";
  Mutations["DELETE_CHILD_RESPONSE_INSTANCE"] = "DELETE_CHILD_RESPONSE_INSTANCE";
  Mutations["DELETE_CHILD_INSTANCE"] = "DELETE_CHILD_INSTANCE";
})(Mutations$2 || (Mutations$2 = {})); //Create a mutation tree that implement all mutation interfaces


const mutations$4 = {
  [Mutations$2.SET_SUBMISSIONS](state, payload) {
    state.formInstances = payload;
  },

  [Mutations$2.SET_PARENT_ITEM_ID](state, payload) {
    state.itemInstanceId = payload;
  },

  [Mutations$2.APPEND_CHILD_INSTANCE](state, payload) {
    var _state$formInstances;

    (_state$formInstances = state.formInstances) === null || _state$formInstances === void 0 ? void 0 : _state$formInstances.$values.unshift(payload);
  },

  [Mutations$2.SET_RESPONSE_FORM_ID](state, payload) {
    state.childResponseFormId = payload;
  },

  [Mutations$2.SET_RESPONSE_FORM](state, payload) {
    state.childResponseForm = payload;
    flattenFieldInputs(state.childResponseForm, state);
  },

  [Mutations$2.APPEND_CHILD_RESPONSE_INSTANCE](state, payload) {
    var _state$formInstances2;

    const parent = (_state$formInstances2 = state.formInstances) === null || _state$formInstances2 === void 0 ? void 0 : _state$formInstances2.$values.find(inst => inst.id === (payload === null || payload === void 0 ? void 0 : payload.parentId));

    if (parent) {
      var _parent$childFieldCon;

      (_parent$childFieldCon = parent.childFieldContainers) === null || _parent$childFieldCon === void 0 ? void 0 : _parent$childFieldCon.$values.push(payload);
    }
  },

  [Mutations$2.DELETE_CHILD_RESPONSE_INSTANCE](state, payload) {
    var _state$formInstances3;

    const parent = (_state$formInstances3 = state.formInstances) === null || _state$formInstances3 === void 0 ? void 0 : _state$formInstances3.$values.find(inst => inst.id === (payload === null || payload === void 0 ? void 0 : payload.parentId));

    if (parent) {
      var _parent$childFieldCon2, _parent$childFieldCon3;

      const indexToRemove = parent === null || parent === void 0 ? void 0 : (_parent$childFieldCon2 = parent.childFieldContainers) === null || _parent$childFieldCon2 === void 0 ? void 0 : _parent$childFieldCon2.$values.indexOf(payload); //console.log("index to remove " + indexToRemove);

      if (indexToRemove >= 0) (_parent$childFieldCon3 = parent.childFieldContainers) === null || _parent$childFieldCon3 === void 0 ? void 0 : _parent$childFieldCon3.$values.splice(indexToRemove, 1);
    }
  },

  [Mutations$2.DELETE_CHILD_INSTANCE](state, payload) {
    var _state$formInstances4, _state$formInstances5;

    const indexToRemove = (_state$formInstances4 = state.formInstances) === null || _state$formInstances4 === void 0 ? void 0 : (_state$formInstances5 = _state$formInstances4.$values) === null || _state$formInstances5 === void 0 ? void 0 : _state$formInstances5.indexOf(payload);

    if (typeof indexToRemove !== 'undefined' && indexToRemove >= 0) {
      var _state$formInstances6;

      (_state$formInstances6 = state.formInstances) === null || _state$formInstances6 === void 0 ? void 0 : _state$formInstances6.$values.splice(indexToRemove, 1);
    }
  },

  ...mutations$5
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

var Actions$3;

(function (Actions) {
  Actions["LOAD_FORM"] = "LOAD_FORM";
  Actions["LOAD_SUBMISSIONS"] = "LOAD_SUBMISSIONS";
  Actions["LOAD_RESPONSE_FORM"] = "LOAD_RESPONSE_FORM";
  Actions["SUBMIT_CHILD_FORM"] = "SUBMIT_CHILD_FORM";
  Actions["SUBMIT_CHILD_RESPONSE_FORM"] = "SUBMIT_CHILD_RESPONSE_FORM";
  Actions["DELETE_CHILD_RESPONSE_INSTANCE"] = "DELETE_CHILD_RESPONSE_INSTANCE";
  Actions["DELETE_CHILD_INSTANCE"] = "DELETE_CHILD_INSTANCE";
})(Actions$3 || (Actions$3 = {}));

const actions$5 = {
  [Actions$3.LOAD_FORM](store) {
    const api = window.location.origin + `/applets/api/items/getchildform/${store.state.itemInstanceId}/${store.state.formId}`;
    fetch(api).then(response => response.json()).then(data => {
      store.commit(Mutations$3.SET_FORM, data);
      store.commit(FlattenedFormFiledMutations.APPEND_FIELD_DATA, data);
    }).catch(error => {
      console.error('Actions.LOAD_FORM Error: ', error);
    });
  },

  [Actions$3.LOAD_RESPONSE_FORM](store) {
    const api = window.location.origin + `/applets/api/items/getchildform/${store.state.itemInstanceId}/${store.state.childResponseFormId}`;
    fetch(api).then(response => response.json()).then(data => {
      store.commit(Mutations$2.SET_RESPONSE_FORM, data);
    }).catch(error => {
      console.error('Actions.LOAD_RESPONSE_FORM Error: ', error);
    });
  },

  [Actions$3.LOAD_SUBMISSIONS](store) {
    const api = window.location.origin + `/applets/api/items/getchildformsubmissions/${store.state.itemInstanceId}/${store.state.formId}`;
    console.log('Child Submissions Load API: ', api);
    fetch(api).then(response => response.json()).then(data => {
      store.commit(Mutations$2.SET_SUBMISSIONS, data);
    }).catch(error => {
      console.error('Submission loading error:', error);
    });
  },

  [Actions$3.SUBMIT_CHILD_FORM](store) {
    const form = store.state.form; //Validating the form

    if (!form || !validateFields(form)) return;
    store.commit(Mutations$3.SET_SUBMISSION_STATUS, "InProgress");
    const api = window.location.origin + `/applets/api/items/appendchildforminstance/${store.state.itemInstanceId}`;
    const formData = new FormData();
    formData.append('datamodel', JSON.stringify(form));
    fetch(api, {
      body: formData,
      method: "post"
    }).then(response => response.json()).then(data => {
      store.commit(FlattenedFormFiledMutations.CLEAR_FIELD_DATA);
      store.commit(Mutations$2.APPEND_CHILD_INSTANCE, data);
      store.commit(Mutations$3.SET_SUBMISSION_STATUS, "Success");
    }).catch(error => {
      store.commit(Mutations$3.SET_SUBMISSION_STATUS, "Fail");
      console.log(error);
    });
  },

  [Actions$3.SUBMIT_CHILD_RESPONSE_FORM](store, parentId) {
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
      store.commit(Mutations$2.APPEND_CHILD_RESPONSE_INSTANCE, data);
      store.commit(FlattenedFormFiledMutations.CLEAR_FIELD_DATA);
    }).catch(error => {
      store.commit(Mutations$3.SET_SUBMISSION_STATUS, "Fail");
      console.log(error);
    });
  },

  [Actions$3.DELETE_CHILD_RESPONSE_INSTANCE](store, payload) {
    const api = window.location.origin + `/applets/api/items/deleteChildForm/${store.state.itemInstanceId}/${payload.id}?parentId=${payload.parentId}`;
    fetch(api, {
      method: "post"
    }).then(response => response.json()).then(data => {
      if (data.id) {
        console.log("deleteChildForm response received");
        store.commit(Mutations$2.DELETE_CHILD_RESPONSE_INSTANCE, payload);
      }
    }).catch(error => {
      store.commit(Mutations$3.SET_SUBMISSION_STATUS, "Fail");
      console.log(error);
    });
  },

  [Actions$3.DELETE_CHILD_INSTANCE](store, payload) {
    const api = window.location.origin + `/applets/api/items/deleteChildForm/${store.state.itemInstanceId}/${payload.id}`;
    fetch(api, {
      method: "post"
    }).then(response => response.json()).then(data => {
      if (data.id) {
        console.log("deleteChildForm response received");
        store.commit(Mutations$2.DELETE_CHILD_INSTANCE, payload);
      }
    }).catch(error => {
      store.commit(Mutations$3.SET_SUBMISSION_STATUS, "Fail");
      console.log(error);
    });
  }

};

const getters$4 = {};

//References:
var script$s = defineComponent({
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

const _withScopeId$2 = n => (pushScopeId("data-v-eae6523c"), n = n(), popScopeId(), n);

const _hoisted_1$j = /*#__PURE__*/_withScopeId$2(() => /*#__PURE__*/createElementVNode("span", null, "Drag and Drop File(s)", -1));

const _hoisted_2$g = /*#__PURE__*/_withScopeId$2(() => /*#__PURE__*/createElementVNode("span", null, "OR", -1));

const _hoisted_3$a = ["for"];
const _hoisted_4$8 = ["id"];
function render$s(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, [_hoisted_1$j, _hoisted_2$g, createElementVNode("label", {
    for: _ctx.id
  }, "Select File(s)", 8, _hoisted_3$a), createElementVNode("input", {
    type: "file",
    id: _ctx.id,
    class: "dropzoneFile",
    multiple: ""
  }, null, 8, _hoisted_4$8)], 34);
}

var css_248z$4 = "\n.dropzone[data-v-eae6523c] {\r\n        width: 400px;\r\n        height: 200px;\r\n        margin-top:20px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        row-gap: 16px;\r\n        border: 2px dashed #41b883;\r\n        background-color: #fff;\r\n        transition: 0.3s ease all;\n}\n.dropzone label[data-v-eae6523c] {\r\n            padding: 8px 12px;\r\n            color: #fff;\r\n            background-color: #41b883;\r\n            transition: 0.3s ease all;\n}\n.dropzone input[data-v-eae6523c] {\r\n            display: none;\n}\n.active-dropzone[data-v-eae6523c] {\r\n        color: #fff;\r\n        border-color: #fff;\r\n        background-color: #41b883;\n}\n.active-dropzone label[data-v-eae6523c] {\r\n            background-color: #fff;\r\n            color: #41b883;\n}\r\n";
styleInject(css_248z$4);

script$s.render = render$s;
script$s.__scopeId = "data-v-eae6523c";

// References: 
var script$r = defineComponent({
  name: "AttachmentField",
  components: {
    DropZone: script$s
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

function render$r(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$selectedFileName;

  const _component_DropZone = resolveComponent("DropZone");

  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("div", null, toDisplayString((_ctx$selectedFileName = _ctx.selectedFileNames) === null || _ctx$selectedFileName === void 0 ? void 0 : _ctx$selectedFileName.join(' | ')), 1), createVNode(_component_DropZone, {
    id: _ctx.model.id,
    onDrop: withModifiers(_ctx.drop, ["prevent"]),
    onChange: _ctx.selectFiles
  }, null, 8, ["id", "onDrop", "onChange"])], 64);
}

script$r.render = render$r;

var script$q = defineComponent({
  name: "CheckboxField",
  components: {},
  props: {
    model: {
      type: Object,
      required: true
    }
  },

  setup(p) {
    // const validationStatus = computed(() => validateOptionsField(p.model));
    const store = useStore();
    const selectedoptions = computed({
      get() {
        return p.model.options.$values.filter(opt => opt.selected === true).map(opt => opt.id);
      },

      set: () => {}
    });

    const selectoption = event => {
      // console.log("selected value " + event.target.value + "selected: " + JSON.stringify(event.target.checked));        
      store.commit(FlattenedFormFiledMutations.SET_OPTION_VALUE, {
        id: event.target.value,
        isSelected: event.target.checked
      });
    };

    const getConcatenatedOptionLabels = option => {
      var _option$optionText, _option$optionText$va;

      const concatenatedLabels = (_option$optionText = option.optionText) === null || _option$optionText === void 0 ? void 0 : (_option$optionText$va = _option$optionText.values) === null || _option$optionText$va === void 0 ? void 0 : _option$optionText$va.$values.map(txt => txt.value).join(" / ");
      return concatenatedLabels ? concatenatedLabels : "";
    };

    return {
      store,
      // validationStatus,
      selectoption,
      selectedoptions,
      getConcatenatedOptionLabels
    };
  }

});

const _hoisted_1$i = ["id", "value"];
const _hoisted_2$f = ["for"];
function render$q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.options.$values, option => {
    return openBlock(), createElementBlock("div", null, [withDirectives(createElementVNode("input", {
      type: "checkbox",
      id: option.id,
      value: option.id,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.selectedoptions = $event),
      onChange: _cache[1] || (_cache[1] = $event => _ctx.selectoption($event))
    }, null, 40, _hoisted_1$i), [[vModelCheckbox, _ctx.selectedoptions]]), createElementVNode("label", {
      for: option.id
    }, toDisplayString(this.getConcatenatedOptionLabels(option)), 9, _hoisted_2$f)]);
  }), 256);
}

script$q.render = render$q;

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

var script$p = defineComponent({
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

const _hoisted_1$h = {
  key: 2
};
const _hoisted_2$e = ["type"];
function render$p(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, null, 512)), [[vModelText, _ctx.content]]) : (openBlock(), createElementBlock("div", _hoisted_1$h, [_ctx.field === 'text' ? withDirectives((openBlock(), createElementBlock("input", {
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
  }, null, 8, _hoisted_2$e)), [[vModelDynamic, _ctx.content]])]));
}

script$p.render = render$p;

var script$o = defineComponent({
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
    Text: script$p
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

function render$o(_ctx, _cache, $props, $setup, $data, $options) {
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

script$o.render = render$o;

var script$n = defineComponent({
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
    Text: script$p
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

function render$n(_ctx, _cache, $props, $setup, $data, $options) {
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

script$n.render = render$n;

var script$m = defineComponent({
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
    Text: script$p
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

function render$m(_ctx, _cache, $props, $setup, $data, $options) {
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

script$m.render = render$m;

var script$l = defineComponent({
  name: "InfoField",
  props: {
    model: {
      type: null,
      required: true
    }
  }
});

const _hoisted_1$g = ["innerHTML"];
function render$l(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model, _ctx$model$content;

  return openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$model = _ctx.model) === null || _ctx$model === void 0 ? void 0 : (_ctx$model$content = _ctx$model.content) === null || _ctx$model$content === void 0 ? void 0 : _ctx$model$content.values, val => {
    return openBlock(), createElementBlock("div", {
      key: val.id
    }, [createElementVNode("div", {
      innerHTML: val.value
    }, null, 8, _hoisted_1$g)]);
  }), 128);
}

script$l.render = render$l;

var script$k = defineComponent({
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
    Text: script$p
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

function render$k(_ctx, _cache, $props, $setup, $data, $options) {
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

script$k.render = render$k;

var script$j = defineComponent({
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

const _hoisted_1$f = ["name", "id", "value"];

const _hoisted_2$d = /*#__PURE__*/createTextVNode();

const _hoisted_3$9 = ["for"];
function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.options.$values, option => {
    return openBlock(), createElementBlock("div", null, [withDirectives(createElementVNode("input", {
      type: "radio",
      name: _ctx.name,
      id: option.id,
      value: option.id,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.selected = $event)
    }, null, 8, _hoisted_1$f), [[vModelRadio, _ctx.selected]]), _hoisted_2$d, createElementVNode("label", {
      for: option.id
    }, toDisplayString(this.getConcatenatedOptionLabels(option)), 9, _hoisted_3$9)]);
  }), 256);
}

script$j.render = render$j;

var script$i = defineComponent({
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

const _hoisted_1$e = /*#__PURE__*/createElementVNode("option", {
  disabled: "",
  value: ""
}, "Please select one", -1);

const _hoisted_2$c = ["id", "value"];
function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [withDirectives(createElementVNode("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.selected = $event),
    class: "form-control col-md-6"
  }, [_hoisted_1$e, (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.options.$values, option => {
    return openBlock(), createElementBlock("option", {
      id: option.id,
      value: option.id
    }, toDisplayString(this.getConcatenatedOptionLabels(option)), 9, _hoisted_2$c);
  }), 256))], 512), [[vModelSelect, _ctx.selected]])]);
}

script$i.render = render$i;

var script$h = defineComponent({
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
    Text: script$p
  }
});

const _hoisted_1$d = {
  key: 0
};
function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model, _ctx$model$values;

  const _component_Text = resolveComponent("Text");

  return openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$model = _ctx.model) === null || _ctx$model === void 0 ? void 0 : (_ctx$model$values = _ctx$model.values) === null || _ctx$model$values === void 0 ? void 0 : _ctx$model$values.$values, val => {
    var _ctx$model2, _ctx$model2$values, _ctx$model2$values$$v;

    return openBlock(), createElementBlock("div", null, [((_ctx$model2 = _ctx.model) === null || _ctx$model2 === void 0 ? void 0 : (_ctx$model2$values = _ctx$model2.values) === null || _ctx$model2$values === void 0 ? void 0 : (_ctx$model2$values$$v = _ctx$model2$values.$values) === null || _ctx$model2$values$$v === void 0 ? void 0 : _ctx$model2$values$$v.length) > 1 ? (openBlock(), createElementBlock("span", _hoisted_1$d, toDisplayString(val.language) + ": ", 1)) : createCommentVNode("", true), createVNode(_component_Text, {
      model: val,
      "is-multiline": _ctx.isMultiline,
      "is-rich-text": _ctx.isRichText,
      "validation-status": _ctx.validationStatus
    }, null, 8, ["model", "is-multiline", "is-rich-text", "validation-status"])]);
  }), 256);
}

script$h.render = render$h;

var script$g = defineComponent({
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
    TextCollection: script$h
  },

  setup(p) {
    const store = useStore();
    const type = p.model.modelType; //console.log("p.model: ", JSON.stringify(p.model))

    const validationStatus = computed(() => validateMultilingualTextField(p.model));
    return {
      store,
      type,
      isRichText: computed(() => isRichTextField(p.model)),
      validationStatus,
      isRequiredField: computed(() => isRequiredField(p.model))
    };
  },

  methods: {
    addText(store, field) {
      store.commit(FlattenedFormFiledMutations.APPEND_MULTILINGUAL_VALUE, field);
    }

  }
});

function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model$values;

  const _component_TextCollection = resolveComponent("TextCollection");

  return openBlock(), createElementBlock(Fragment, null, [(openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$model$values = _ctx.model.values) === null || _ctx$model$values === void 0 ? void 0 : _ctx$model$values.$values, val => {
    return openBlock(), createBlock(_component_TextCollection, {
      model: val,
      "is-multiline": _ctx.isMultiline,
      "is-rich-text": _ctx.isRichText,
      "validation-status": _ctx.validationStatus
    }, null, 8, ["model", "is-multiline", "is-rich-text", "validation-status"]);
  }), 256)), createElementVNode("span", {
    class: "fa fa-plus-circle",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.addText(_ctx.store, _ctx.model))
  })], 64);
}

script$g.render = render$g;

function lamejs() {
  function e(e) {
    return new Int8Array(e);
  }

  function a(e) {
    return new Int16Array(e);
  }

  function t(e) {
    return new Int32Array(e);
  }

  function s(e) {
    return new Float32Array(e);
  }

  function n(e) {
    return new Float64Array(e);
  }

  function r(e) {
    if (1 == e.length) return s(e[0]);
    var a = e[0];
    e = e.slice(1);

    for (var t = [], n = 0; n < a; n++) t.push(r(e));

    return t;
  }

  function _(e) {
    if (1 == e.length) return t(e[0]);
    var a = e[0];
    e = e.slice(1);

    for (var s = [], n = 0; n < a; n++) s.push(_(e));

    return s;
  }

  function i(e) {
    if (1 == e.length) return a(e[0]);
    var t = e[0];
    e = e.slice(1);

    for (var s = [], n = 0; n < t; n++) s.push(i(e));

    return s;
  }

  function o(e) {
    if (1 == e.length) return new Array(e[0]);
    var a = e[0];
    e = e.slice(1);

    for (var t = [], s = 0; s < a; s++) t.push(o(e));

    return t;
  }

  var l = {
    fill: function (e, a, t, s) {
      if (2 == arguments.length) for (var n = 0; n < e.length; n++) e[n] = arguments[1];else for (n = a; n < t; n++) e[n] = s;
    }
  },
      f = {
    arraycopy: function (e, a, t, s, n) {
      for (var r = a + n; a < r;) t[s++] = e[a++];
    }
  },
      c = {};

  function h(e) {
    this.ordinal = e;
  }

  c.SQRT2 = 1.4142135623730951, c.FAST_LOG10 = function (e) {
    return Math.log10(e);
  }, c.FAST_LOG10_X = function (e, a) {
    return Math.log10(e) * a;
  }, h.short_block_allowed = new h(0), h.short_block_coupled = new h(1), h.short_block_dispensed = new h(2), h.short_block_forced = new h(3);
  var u = {};

  function b(e) {
    this.ordinal = e;
  }

  u.MAX_VALUE = 3.4028235e38, b.vbr_off = new b(0), b.vbr_mt = new b(1), b.vbr_rh = new b(2), b.vbr_abr = new b(3), b.vbr_mtrh = new b(4), b.vbr_default = b.vbr_mtrh;

  function m(e) {
    var a = e;

    this.ordinal = function () {
      return a;
    };
  }

  function p() {
    this.getLameVersion = function () {
      return "3.98.4";
    }, this.getLameShortVersion = function () {
      return "3.98.4";
    }, this.getLameVeryShortVersion = function () {
      return "LAME3.98r";
    }, this.getPsyVersion = function () {
      return "0.93";
    }, this.getLameUrl = function () {
      return "http://www.mp3dev.org/";
    }, this.getLameOsBitness = function () {
      return "32bits";
    };
  }

  function d() {
    var e = 64.82,
        a = (.95),
        t = (d.RMS_WINDOW_TIME_NUMERATOR),
        s = d.RMS_WINDOW_TIME_DENOMINATOR,
        n = ([[.038575994352, -3.84664617118067, -.02160367184185, 7.81501653005538, -.00123395316851, -11.34170355132042, -9291677959e-14, 13.05504219327545, -.01655260341619, -12.28759895145294, .02161526843274, 9.4829380631979, -.02074045215285, -5.87257861775999, .00594298065125, 2.75465861874613, .00306428023191, -.86984376593551, .00012025322027, .13919314567432, .00288463683916], [.0541865640643, -3.47845948550071, -.02911007808948, 6.36317777566148, -.00848709379851, -8.54751527471874, -.00851165645469, 9.4769360780128, -.00834990904936, -8.81498681370155, .02245293253339, 6.85401540936998, -.02596338512915, -4.39470996079559, .01624864962975, 2.19611684890774, -.00240879051584, -.75104302451432, .00674613682247, .13149317958808, -.00187763777362], [.15457299681924, -2.37898834973084, -.09331049056315, 2.84868151156327, -.06247880153653, -2.64577170229825, .02163541888798, 2.23697657451713, -.05588393329856, -1.67148153367602, .04781476674921, 1.00595954808547, .00222312597743, -.45953458054983, .03174092540049, .16378164858596, -.01390589421898, -.05032077717131, .00651420667831, .0234789740702, -.00881362733839], [.30296907319327, -1.61273165137247, -.22613988682123, 1.0797749225997, -.08587323730772, -.2565625775407, .03282930172664, -.1627671912044, -.00915702933434, -.22638893773906, -.02364141202522, .39120800788284, -.00584456039913, -.22138138954925, .06276101321749, .04500235387352, -828086748e-14, .02005851806501, .00205861885564, .00302439095741, -.02950134983287], [.33642304856132, -1.49858979367799, -.2557224142557, .87350271418188, -.11828570177555, .12205022308084, .11921148675203, -.80774944671438, -.07834489609479, .47854794562326, -.0046997791438, -.12453458140019, -.0058950022444, -.04067510197014, .05724228140351, .08333755284107, .00832043980773, -.04237348025746, -.0163538138454, .02977207319925, -.0176017656815], [.4491525660845, -.62820619233671, -.14351757464547, .29661783706366, -.22784394429749, -.372563729424, -.01419140100551, .00213767857124, .04078262797139, -.42029820170918, -.12398163381748, .22199650564824, .04097565135648, .00613424350682, .10478503600251, .06747620744683, -.01863887810927, .05784820375801, -.03193428438915, .03222754072173, .00541907748707], [.56619470757641, -1.04800335126349, -.75464456939302, .29156311971249, .1624213774223, -.26806001042947, .16744243493672, .00819999645858, -.18901604199609, .45054734505008, .3093178284183, -.33032403314006, -.27562961986224, .0673936833311, .00647310677246, -.04784254229033, .08647503780351, .01639907836189, -.0378898455484, .01807364323573, -.00588215443421], [.58100494960553, -.51035327095184, -.53174909058578, -.31863563325245, -.14289799034253, -.20256413484477, .17520704835522, .1472815413433, .02377945217615, .38952639978999, .15558449135573, -.23313271880868, -.25344790059353, -.05246019024463, .01628462406333, -.02505961724053, .06920467763959, .02442357316099, -.03721611395801, .01818801111503, -.00749618797172], [.53648789255105, -.2504987195602, -.42163034350696, -.43193942311114, -.00275953611929, -.03424681017675, .04267842219415, -.04678328784242, -.10214864179676, .26408300200955, .14590772289388, .15113130533216, -.02459864859345, -.17556493366449, -.11202315195388, -.18823009262115, -.04060034127, .05477720428674, .0478866554818, .0470440968812, -.02217936801134]]),
        r = [[.98621192462708, -1.97223372919527, -1.97242384925416, .97261396931306, .98621192462708], [.98500175787242, -1.96977855582618, -1.97000351574484, .9702284756635, .98500175787242], [.97938932735214, -1.95835380975398, -1.95877865470428, .95920349965459, .97938932735214], [.97531843204928, -1.95002759149878, -1.95063686409857, .95124613669835, .97531843204928], [.97316523498161, -1.94561023566527, -1.94633046996323, .94705070426118, .97316523498161], [.96454515552826, -1.92783286977036, -1.92909031105652, .93034775234268, .96454515552826], [.96009142950541, -1.91858953033784, -1.92018285901082, .92177618768381, .96009142950541], [.95856916599601, -1.9154210807478, -1.91713833199203, .91885558323625, .95856916599601], [.94597685600279, -1.88903307939452, -1.89195371200558, .89487434461664, .94597685600279]];

    function _(e, a, t, s, n, r) {
      for (; 0 != n--;) t[s] = 1e-10 + e[a + 0] * r[0] - t[s - 1] * r[1] + e[a - 1] * r[2] - t[s - 2] * r[3] + e[a - 2] * r[4] - t[s - 3] * r[5] + e[a - 3] * r[6] - t[s - 4] * r[7] + e[a - 4] * r[8] - t[s - 5] * r[9] + e[a - 5] * r[10] - t[s - 6] * r[11] + e[a - 6] * r[12] - t[s - 7] * r[13] + e[a - 7] * r[14] - t[s - 8] * r[15] + e[a - 8] * r[16] - t[s - 9] * r[17] + e[a - 9] * r[18] - t[s - 10] * r[19] + e[a - 10] * r[20], ++s, ++a;
    }

    function i(e, a, t, s, n, r) {
      for (; 0 != n--;) t[s] = e[a + 0] * r[0] - t[s - 1] * r[1] + e[a - 1] * r[2] - t[s - 2] * r[3] + e[a - 2] * r[4], ++s, ++a;
    }

    function o(e) {
      return e * e;
    }

    this.InitGainAnalysis = function (e, a) {
      return function (e, a) {
        for (var n = 0; n < MAX_ORDER; n++) e.linprebuf[n] = e.lstepbuf[n] = e.loutbuf[n] = e.rinprebuf[n] = e.rstepbuf[n] = e.routbuf[n] = 0;

        switch (0 | a) {
          case 48e3:
            e.reqindex = 0;
            break;

          case 44100:
            e.reqindex = 1;
            break;

          case 32e3:
            e.reqindex = 2;
            break;

          case 24e3:
            e.reqindex = 3;
            break;

          case 22050:
            e.reqindex = 4;
            break;

          case 16e3:
            e.reqindex = 5;
            break;

          case 12e3:
            e.reqindex = 6;
            break;

          case 11025:
            e.reqindex = 7;
            break;

          case 8e3:
            e.reqindex = 8;
            break;

          default:
            return INIT_GAIN_ANALYSIS_ERROR;
        }

        return e.sampleWindow = 0 | (a * t + s - 1) / s, e.lsum = 0, e.rsum = 0, e.totsamp = 0, l.ill(e.A, 0), INIT_GAIN_ANALYSIS_OK;
      }(e, a) != INIT_GAIN_ANALYSIS_OK ? INIT_GAIN_ANALYSIS_ERROR : (e.linpre = MAX_ORDER, e.rinpre = MAX_ORDER, e.lstep = MAX_ORDER, e.rstep = MAX_ORDER, e.lout = MAX_ORDER, e.rout = MAX_ORDER, l.fill(e.B, 0), INIT_GAIN_ANALYSIS_OK);
    }, this.AnalyzeSamples = function (e, a, t, s, l, c, h) {
      var u, b, m, p, v, g, S;
      if (0 == c) return GAIN_ANALYSIS_OK;

      switch (S = 0, v = c, h) {
        case 1:
          s = a, l = t;
          break;

        case 2:
          break;

        default:
          return GAIN_ANALYSIS_ERROR;
      }

      for (c < MAX_ORDER ? (f.arraycopy(a, t, e.linprebuf, MAX_ORDER, c), f.arraycopy(s, l, e.rinprebuf, MAX_ORDER, c)) : (f.arraycopy(a, t, e.linprebuf, MAX_ORDER, MAX_ORDER), f.arraycopy(s, l, e.rinprebuf, MAX_ORDER, MAX_ORDER)); v > 0;) {
        g = v > e.sampleWindow - e.totsamp ? e.sampleWindow - e.totsamp : v, S < MAX_ORDER ? (u = e.linpre + S, b = e.linprebuf, m = e.rinpre + S, p = e.rinprebuf, g > MAX_ORDER - S && (g = MAX_ORDER - S)) : (u = t + S, b = a, m = l + S, p = s), _(b, u, e.lstepbuf, e.lstep + e.totsamp, g, n[e.reqindex]), _(p, m, e.rstepbuf, e.rstep + e.totsamp, g, n[e.reqindex]), i(e.lstepbuf, e.lstep + e.totsamp, e.loutbuf, e.lout + e.totsamp, g, r[e.reqindex]), i(e.rstepbuf, e.rstep + e.totsamp, e.routbuf, e.rout + e.totsamp, g, r[e.reqindex]), u = e.lout + e.totsamp, b = e.loutbuf, m = e.rout + e.totsamp, p = e.routbuf;

        for (var R = g % 8; 0 != R--;) e.lsum += o(b[u++]), e.rsum += o(p[m++]);

        for (R = g / 8; 0 != R--;) e.lsum += o(b[u + 0]) + o(b[u + 1]) + o(b[u + 2]) + o(b[u + 3]) + o(b[u + 4]) + o(b[u + 5]) + o(b[u + 6]) + o(b[u + 7]), u += 8, e.rsum += o(p[m + 0]) + o(p[m + 1]) + o(p[m + 2]) + o(p[m + 3]) + o(p[m + 4]) + o(p[m + 5]) + o(p[m + 6]) + o(p[m + 7]), m += 8;

        if (v -= g, S += g, e.totsamp += g, e.totsamp == e.sampleWindow) {
          var M = 10 * d.STEPS_per_dB * Math.log10((e.lsum + e.rsum) / e.totsamp * .5 + 1e-37),
              A = M <= 0 ? 0 : 0 | M;
          A >= e.A.length && (A = e.A.length - 1), e.A[A]++, e.lsum = e.rsum = 0, f.arraycopy(e.loutbuf, e.totsamp, e.loutbuf, 0, MAX_ORDER), f.arraycopy(e.routbuf, e.totsamp, e.routbuf, 0, MAX_ORDER), f.arraycopy(e.lstepbuf, e.totsamp, e.lstepbuf, 0, MAX_ORDER), f.arraycopy(e.rstepbuf, e.totsamp, e.rstepbuf, 0, MAX_ORDER), e.totsamp = 0;
        }

        if (e.totsamp > e.sampleWindow) return GAIN_ANALYSIS_ERROR;
      }

      return c < MAX_ORDER ? (f.arraycopy(e.linprebuf, c, e.linprebuf, 0, MAX_ORDER - c), f.arraycopy(e.rinprebuf, c, e.rinprebuf, 0, MAX_ORDER - c), f.arraycopy(a, t, e.linprebuf, MAX_ORDER - c, c), f.arraycopy(s, l, e.rinprebuf, MAX_ORDER - c, c)) : (f.arraycopy(a, t + c - MAX_ORDER, e.linprebuf, 0, MAX_ORDER), f.arraycopy(s, l + c - MAX_ORDER, e.rinprebuf, 0, MAX_ORDER)), GAIN_ANALYSIS_OK;
    }, this.GetTitleGain = function (t) {
      for (var s = function (t, s) {
        var n,
            r = 0;

        for (n = 0; n < s; n++) r += t[n];

        if (0 == r) return GAIN_NOT_ENOUGH_SAMPLES;

        var _ = 0 | Math.ceil(r * (1 - a));

        for (n = s; n-- > 0 && !((_ -= t[n]) <= 0););

        return e - n / d.STEPS_per_dB;
      }(t.A, t.A.length), n = 0; n < t.A.length; n++) t.B[n] += t.A[n], t.A[n] = 0;

      for (n = 0; n < MAX_ORDER; n++) t.linprebuf[n] = t.lstepbuf[n] = t.loutbuf[n] = t.rinprebuf[n] = t.rstepbuf[n] = t.routbuf[n] = 0;

      return t.totsamp = 0, t.lsum = t.rsum = 0, s;
    };
  }

  function v() {
    function e(e, a, t, s, n, r, _, i, o, l, f, c, h, u, b) {
      this.vbr_q = e, this.quant_comp = a, this.quant_comp_s = t, this.expY = s, this.st_lrm = n, this.st_s = r, this.masking_adj = _, this.masking_adj_short = i, this.ath_lower = o, this.ath_curve = l, this.ath_sensitivity = f, this.interch = c, this.safejoint = h, this.sfb21mod = u, this.msfix = b;
    }

    function a(e, a, t, s, n, r, _, i, o, l, f, c, h, u) {
      this.quant_comp = a, this.quant_comp_s = t, this.safejoint = s, this.nsmsfix = n, this.st_lrm = r, this.st_s = _, this.nsbass = i, this.scale = o, this.masking_adj = l, this.ath_lower = f, this.ath_curve = c, this.interch = h, this.sfscale = u;
    }

    var t;

    this.setModules = function (e) {
      t = e;
    };

    var s = [new e(0, 9, 9, 0, 5.2, 125, -4.2, -6.3, 4.8, 1, 0, 0, 2, 21, .97), new e(1, 9, 9, 0, 5.3, 125, -3.6, -5.6, 4.5, 1.5, 0, 0, 2, 21, 1.35), new e(2, 9, 9, 0, 5.6, 125, -2.2, -3.5, 2.8, 2, 0, 0, 2, 21, 1.49), new e(3, 9, 9, 1, 5.8, 130, -1.8, -2.8, 2.6, 3, -4, 0, 2, 20, 1.64), new e(4, 9, 9, 1, 6, 135, -.7, -1.1, 1.1, 3.5, -8, 0, 2, 0, 1.79), new e(5, 9, 9, 1, 6.4, 140, .5, .4, -7.5, 4, -12, 2e-4, 0, 0, 1.95), new e(6, 9, 9, 1, 6.6, 145, .67, .65, -14.7, 6.5, -19, 4e-4, 0, 0, 2.3), new e(7, 9, 9, 1, 6.6, 145, .8, .75, -19.7, 8, -22, 6e-4, 0, 0, 2.7), new e(8, 9, 9, 1, 6.6, 145, 1.2, 1.15, -27.5, 10, -23, 7e-4, 0, 0, 0), new e(9, 9, 9, 1, 6.6, 145, 1.6, 1.6, -36, 11, -25, 8e-4, 0, 0, 0), new e(10, 9, 9, 1, 6.6, 145, 2, 2, -36, 12, -25, 8e-4, 0, 0, 0)],
        n = [new e(0, 9, 9, 0, 4.2, 25, -7, -4, 7.5, 1, 0, 0, 2, 26, .97), new e(1, 9, 9, 0, 4.2, 25, -5.6, -3.6, 4.5, 1.5, 0, 0, 2, 21, 1.35), new e(2, 9, 9, 0, 4.2, 25, -4.4, -1.8, 2, 2, 0, 0, 2, 18, 1.49), new e(3, 9, 9, 1, 4.2, 25, -3.4, -1.25, 1.1, 3, -4, 0, 2, 15, 1.64), new e(4, 9, 9, 1, 4.2, 25, -2.2, .1, 0, 3.5, -8, 0, 2, 0, 1.79), new e(5, 9, 9, 1, 4.2, 25, -1, 1.65, -7.7, 4, -12, 2e-4, 0, 0, 1.95), new e(6, 9, 9, 1, 4.2, 25, -0, 2.47, -7.7, 6.5, -19, 4e-4, 0, 0, 2), new e(7, 9, 9, 1, 4.2, 25, .5, 2, -14.5, 8, -22, 6e-4, 0, 0, 2), new e(8, 9, 9, 1, 4.2, 25, 1, 2.4, -22, 10, -23, 7e-4, 0, 0, 2), new e(9, 9, 9, 1, 4.2, 25, 1.5, 2.95, -30, 11, -25, 8e-4, 0, 0, 2), new e(10, 9, 9, 1, 4.2, 25, 2, 2.95, -36, 12, -30, 8e-4, 0, 0, 2)];

    function r(e, a, t) {
      var r = e.VBR == b.vbr_rh ? s : n,
          _ = e.VBR_q_frac,
          i = r[a],
          o = r[a + 1],
          l = i;
      i.st_lrm = i.st_lrm + _ * (o.st_lrm - i.st_lrm), i.st_s = i.st_s + _ * (o.st_s - i.st_s), i.masking_adj = i.masking_adj + _ * (o.masking_adj - i.masking_adj), i.masking_adj_short = i.masking_adj_short + _ * (o.masking_adj_short - i.masking_adj_short), i.ath_lower = i.ath_lower + _ * (o.ath_lower - i.ath_lower), i.ath_curve = i.ath_curve + _ * (o.ath_curve - i.ath_curve), i.ath_sensitivity = i.ath_sensitivity + _ * (o.ath_sensitivity - i.ath_sensitivity), i.interch = i.interch + _ * (o.interch - i.interch), i.msfix = i.msfix + _ * (o.msfix - i.msfix), function (e, a) {
        0 > a && (a = 0);
        9 < a && (a = 9);
        e.VBR_q = a, e.VBR_q_frac = 0;
      }(e, l.vbr_q), 0 != t ? e.quant_comp = l.quant_comp : Math.abs(e.quant_comp - -1) > 0 || (e.quant_comp = l.quant_comp), 0 != t ? e.quant_comp_short = l.quant_comp_s : Math.abs(e.quant_comp_short - -1) > 0 || (e.quant_comp_short = l.quant_comp_s), 0 != l.expY && (e.experimentalY = 0 != l.expY), 0 != t ? e.internal_flags.nsPsy.attackthre = l.st_lrm : Math.abs(e.internal_flags.nsPsy.attackthre - -1) > 0 || (e.internal_flags.nsPsy.attackthre = l.st_lrm), 0 != t ? e.internal_flags.nsPsy.attackthre_s = l.st_s : Math.abs(e.internal_flags.nsPsy.attackthre_s - -1) > 0 || (e.internal_flags.nsPsy.attackthre_s = l.st_s), 0 != t ? e.maskingadjust = l.masking_adj : Math.abs(e.maskingadjust - 0) > 0 || (e.maskingadjust = l.masking_adj), 0 != t ? e.maskingadjust_short = l.masking_adj_short : Math.abs(e.maskingadjust_short - 0) > 0 || (e.maskingadjust_short = l.masking_adj_short), 0 != t ? e.ATHlower = -l.ath_lower / 10 : Math.abs(10 * -e.ATHlower - 0) > 0 || (e.ATHlower = -l.ath_lower / 10), 0 != t ? e.ATHcurve = l.ath_curve : Math.abs(e.ATHcurve - -1) > 0 || (e.ATHcurve = l.ath_curve), 0 != t ? e.athaa_sensitivity = l.ath_sensitivity : Math.abs(e.athaa_sensitivity - -1) > 0 || (e.athaa_sensitivity = l.ath_sensitivity), l.interch > 0 && (0 != t ? e.interChRatio = l.interch : Math.abs(e.interChRatio - -1) > 0 || (e.interChRatio = l.interch)), l.safejoint > 0 && (e.exp_nspsytune = e.exp_nspsytune | l.safejoint), l.sfb21mod > 0 && (e.exp_nspsytune = e.exp_nspsytune | l.sfb21mod << 20), 0 != t ? e.msfix = l.msfix : Math.abs(e.msfix - -1) > 0 || (e.msfix = l.msfix), 0 == t && (e.VBR_q = a, e.VBR_q_frac = _);
    }

    var _ = [new a(8, 9, 9, 0, 0, 6.6, 145, 0, .95, 0, -30, 11, .0012, 1), new a(16, 9, 9, 0, 0, 6.6, 145, 0, .95, 0, -25, 11, .001, 1), new a(24, 9, 9, 0, 0, 6.6, 145, 0, .95, 0, -20, 11, .001, 1), new a(32, 9, 9, 0, 0, 6.6, 145, 0, .95, 0, -15, 11, .001, 1), new a(40, 9, 9, 0, 0, 6.6, 145, 0, .95, 0, -10, 11, 9e-4, 1), new a(48, 9, 9, 0, 0, 6.6, 145, 0, .95, 0, -10, 11, 9e-4, 1), new a(56, 9, 9, 0, 0, 6.6, 145, 0, .95, 0, -6, 11, 8e-4, 1), new a(64, 9, 9, 0, 0, 6.6, 145, 0, .95, 0, -2, 11, 8e-4, 1), new a(80, 9, 9, 0, 0, 6.6, 145, 0, .95, 0, 0, 8, 7e-4, 1), new a(96, 9, 9, 0, 2.5, 6.6, 145, 0, .95, 0, 1, 5.5, 6e-4, 1), new a(112, 9, 9, 0, 2.25, 6.6, 145, 0, .95, 0, 2, 4.5, 5e-4, 1), new a(128, 9, 9, 0, 1.95, 6.4, 140, 0, .95, 0, 3, 4, 2e-4, 1), new a(160, 9, 9, 1, 1.79, 6, 135, 0, .95, -2, 5, 3.5, 0, 1), new a(192, 9, 9, 1, 1.49, 5.6, 125, 0, .97, -4, 7, 3, 0, 0), new a(224, 9, 9, 1, 1.25, 5.2, 125, 0, .98, -6, 9, 2, 0, 0), new a(256, 9, 9, 1, .97, 5.2, 125, 0, 1, -8, 10, 1, 0, 0), new a(320, 9, 9, 1, .9, 5.2, 125, 0, 1, -10, 12, 0, 0, 0)];

    function i(e, a, s) {
      var n = a,
          r = t.nearestBitrateFullIndex(a);

      if (e.VBR = b.vbr_abr, e.VBR_mean_bitrate_kbps = n, e.VBR_mean_bitrate_kbps = Math.min(e.VBR_mean_bitrate_kbps, 320), e.VBR_mean_bitrate_kbps = Math.max(e.VBR_mean_bitrate_kbps, 8), e.brate = e.VBR_mean_bitrate_kbps, e.VBR_mean_bitrate_kbps > 320 && (e.disable_reservoir = !0), _[r].safejoint > 0 && (e.exp_nspsytune = 2 | e.exp_nspsytune), _[r].sfscale > 0 && (e.internal_flags.noise_shaping = 2), Math.abs(_[r].nsbass) > 0) {
        var i = int(4 * _[r].nsbass);
        i < 0 && (i += 64), e.exp_nspsytune = e.exp_nspsytune | i << 2;
      }

      return 0 != s ? e.quant_comp = _[r].quant_comp : Math.abs(e.quant_comp - -1) > 0 || (e.quant_comp = _[r].quant_comp), 0 != s ? e.quant_comp_short = _[r].quant_comp_s : Math.abs(e.quant_comp_short - -1) > 0 || (e.quant_comp_short = _[r].quant_comp_s), 0 != s ? e.msfix = _[r].nsmsfix : Math.abs(e.msfix - -1) > 0 || (e.msfix = _[r].nsmsfix), 0 != s ? e.internal_flags.nsPsy.attackthre = _[r].st_lrm : Math.abs(e.internal_flags.nsPsy.attackthre - -1) > 0 || (e.internal_flags.nsPsy.attackthre = _[r].st_lrm), 0 != s ? e.internal_flags.nsPsy.attackthre_s = _[r].st_s : Math.abs(e.internal_flags.nsPsy.attackthre_s - -1) > 0 || (e.internal_flags.nsPsy.attackthre_s = _[r].st_s), 0 != s ? e.scale = _[r].scale : Math.abs(e.scale - -1) > 0 || (e.scale = _[r].scale), 0 != s ? e.maskingadjust = _[r].masking_adj : Math.abs(e.maskingadjust - 0) > 0 || (e.maskingadjust = _[r].masking_adj), _[r].masking_adj > 0 ? 0 != s ? e.maskingadjust_short = .9 * _[r].masking_adj : Math.abs(e.maskingadjust_short - 0) > 0 || (e.maskingadjust_short = .9 * _[r].masking_adj) : 0 != s ? e.maskingadjust_short = 1.1 * _[r].masking_adj : Math.abs(e.maskingadjust_short - 0) > 0 || (e.maskingadjust_short = 1.1 * _[r].masking_adj), 0 != s ? e.ATHlower = -_[r].ath_lower / 10 : Math.abs(10 * -e.ATHlower - 0) > 0 || (e.ATHlower = -_[r].ath_lower / 10), 0 != s ? e.ATHcurve = _[r].ath_curve : Math.abs(e.ATHcurve - -1) > 0 || (e.ATHcurve = _[r].ath_curve), 0 != s ? e.interChRatio = _[r].interch : Math.abs(e.interChRatio - -1) > 0 || (e.interChRatio = _[r].interch), a;
    }

    this.apply_preset = function (e, a, t) {
      switch (a) {
        case Z.R3MIX:
          a = Z.V3, e.VBR = b.vbr_mtrh;
          break;

        case Z.MEDIUM:
          a = Z.V4, e.VBR = b.vbr_rh;
          break;

        case Z.MEDIUM_FAST:
          a = Z.V4, e.VBR = b.vbr_mtrh;
          break;

        case Z.STANDARD:
          a = Z.V2, e.VBR = b.vbr_rh;
          break;

        case Z.STANDARD_FAST:
          a = Z.V2, e.VBR = b.vbr_mtrh;
          break;

        case Z.EXTREME:
          a = Z.V0, e.VBR = b.vbr_rh;
          break;

        case Z.EXTREME_FAST:
          a = Z.V0, e.VBR = b.vbr_mtrh;
          break;

        case Z.INSANE:
          return a = 320, e.preset = a, i(e, a, t), e.VBR = b.vbr_off, a;
      }

      switch (e.preset = a, a) {
        case Z.V9:
          return r(e, 9, t), a;

        case Z.V8:
          return r(e, 8, t), a;

        case Z.V7:
          return r(e, 7, t), a;

        case Z.V6:
          return r(e, 6, t), a;

        case Z.V5:
          return r(e, 5, t), a;

        case Z.V4:
          return r(e, 4, t), a;

        case Z.V3:
          return r(e, 3, t), a;

        case Z.V2:
          return r(e, 2, t), a;

        case Z.V1:
          return r(e, 1, t), a;

        case Z.V0:
          return r(e, 0, t), a;
      }

      return 8 <= a && a <= 320 ? i(e, a, t) : (e.preset = 0, a);
    };
  }

  function g() {
    var e = null;

    function a(e) {
      this.bits = 0 | e;
    }

    this.qupvt = null, this.setModules = function (a) {
      this.qupvt = a, e = a;
    };
    var s = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 1], [1, 1], [1, 1], [1, 2], [2, 2], [2, 3], [2, 3], [3, 4], [3, 4], [3, 4], [4, 5], [4, 5], [4, 6], [5, 6], [5, 6], [5, 7], [6, 7], [6, 7]];

    function n(e, a, t, s, n, r) {
      var _ = .5946 / a;

      for (e >>= 1; 0 != e--;) n[r++] = _ > t[s++] ? 0 : 1, n[r++] = _ > t[s++] ? 0 : 1;
    }

    function r(a, t, s, n, r, _) {
      var i = (a >>= 1) % 2;

      for (a >>= 1; 0 != a--;) {
        var o, l, f, c, h, u, b, m;
        o = s[n++] * t, l = s[n++] * t, h = 0 | o, f = s[n++] * t, u = 0 | l, c = s[n++] * t, b = 0 | f, o += e.adj43[h], m = 0 | c, l += e.adj43[u], r[_++] = 0 | o, f += e.adj43[b], r[_++] = 0 | l, c += e.adj43[m], r[_++] = 0 | f, r[_++] = 0 | c;
      }

      0 != i && (h = 0 | (o = s[n++] * t), u = 0 | (l = s[n++] * t), o += e.adj43[h], l += e.adj43[u], r[_++] = 0 | o, r[_++] = 0 | l);
    }

    var _ = [1, 2, 5, 7, 7, 10, 10, 13, 13, 13, 13, 13, 13, 13, 13];

    function i(e, a, t, s) {
      var n = function (e, a, t) {
        var s = 0,
            n = 0;

        do {
          var r = e[a++],
              _ = e[a++];
          s < r && (s = r), n < _ && (n = _);
        } while (a < t);

        return s < n && (s = n), s;
      }(e, a, t);

      switch (n) {
        case 0:
          return n;

        case 1:
          return function (e, a, t, s) {
            var n = 0,
                r = B.ht[1].hlen;

            do {
              var _ = 2 * e[a + 0] + e[a + 1];

              a += 2, n += r[_];
            } while (a < t);

            return s.bits += n, 1;
          }(e, a, t, s);

        case 2:
        case 3:
          return function (e, a, t, s, n) {
            var r,
                _,
                i = 0,
                o = B.ht[s].xlen;

            _ = 2 == s ? B.table23 : B.table56;

            do {
              var l = e[a + 0] * o + e[a + 1];
              a += 2, i += _[l];
            } while (a < t);

            return r = 65535 & i, (i >>= 16) > r && (i = r, s++), n.bits += i, s;
          }(e, a, t, _[n - 1], s);

        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
          return function (e, a, t, s, n) {
            var r = 0,
                _ = 0,
                i = 0,
                o = B.ht[s].xlen,
                l = B.ht[s].hlen,
                f = B.ht[s + 1].hlen,
                c = B.ht[s + 2].hlen;

            do {
              var h = e[a + 0] * o + e[a + 1];
              a += 2, r += l[h], _ += f[h], i += c[h];
            } while (a < t);

            var u = s;
            return r > _ && (r = _, u++), r > i && (r = i, u = s + 2), n.bits += r, u;
          }(e, a, t, _[n - 1], s);

        default:
          if (n > H.IXMAX_VAL) return s.bits = H.LARGE_BITS, -1;
          var r, i;

          for (n -= 15, r = 24; r < 32 && !(B.ht[r].linmax >= n); r++);

          for (i = r - 8; i < 24 && !(B.ht[i].linmax >= n); i++);

          return function (e, a, t, s, n, r) {
            var _,
                i = 65536 * B.ht[s].xlen + B.ht[n].xlen,
                o = 0;

            do {
              var l = e[a++],
                  f = e[a++];
              0 != l && (l > 14 && (l = 15, o += i), l *= 16), 0 != f && (f > 14 && (f = 15, o += i), l += f), o += B.largetbl[l];
            } while (a < t);

            return _ = 65535 & o, (o >>= 16) > _ && (o = _, s = n), r.bits += o, s;
          }(e, a, t, i, r, s);
      }
    }

    function o(e, t, s, n, r, _, o, l) {
      for (var f = t.big_values, c = 2; c < Y.SBMAX_l + 1; c++) {
        var h = e.scalefac_band.l[c];
        if (h >= f) break;
        var u = r[c - 2] + t.count1bits;
        if (s.part2_3_length <= u) break;
        var b = new a(u),
            m = i(n, h, f, b);
        u = b.bits, s.part2_3_length <= u || (s.assign(t), s.part2_3_length = u, s.region0_count = _[c - 2], s.region1_count = c - 2 - _[c - 2], s.table_select[0] = o[c - 2], s.table_select[1] = l[c - 2], s.table_select[2] = m);
      }
    }

    this.noquant_count_bits = function (e, t, s) {
      var n = t.l3_enc,
          r = Math.min(576, t.max_nonzero_coeff + 2 >> 1 << 1);

      for (null != s && (s.sfb_count1 = 0); r > 1 && 0 == (n[r - 1] | n[r - 2]); r -= 2);

      t.count1 = r;

      for (var _ = 0, o = 0; r > 3; r -= 4) {
        var l;
        if ((2147483647 & (n[r - 1] | n[r - 2] | n[r - 3] | n[r - 4])) > 1) break;
        l = 2 * (2 * (2 * n[r - 4] + n[r - 3]) + n[r - 2]) + n[r - 1], _ += B.t32l[l], o += B.t33l[l];
      }

      var f = _;
      if (t.count1table_select = 0, _ > o && (f = o, t.count1table_select = 1), t.count1bits = f, t.big_values = r, 0 == r) return f;
      if (t.block_type == Y.SHORT_TYPE) (_ = 3 * e.scalefac_band.s[3]) > t.big_values && (_ = t.big_values), o = t.big_values;else if (t.block_type == Y.NORM_TYPE) {
        if (_ = t.region0_count = e.bv_scf[r - 2], o = t.region1_count = e.bv_scf[r - 1], o = e.scalefac_band.l[_ + o + 2], _ = e.scalefac_band.l[_ + 1], o < r) {
          var c = new a(f);
          t.table_select[2] = i(n, o, r, c), f = c.bits;
        }
      } else t.region0_count = 7, t.region1_count = Y.SBMAX_l - 1 - 7 - 1, (_ = e.scalefac_band.l[8]) > (o = r) && (_ = o);

      if (_ = Math.min(_, r), o = Math.min(o, r), 0 < _) {
        c = new a(f);
        t.table_select[0] = i(n, 0, _, c), f = c.bits;
      }

      if (_ < o) {
        c = new a(f);
        t.table_select[1] = i(n, _, o, c), f = c.bits;
      }

      if (2 == e.use_best_huffman && (t.part2_3_length = f, best_huffman_divide(e, t), f = t.part2_3_length), null != s && t.block_type == Y.NORM_TYPE) {
        for (var h = 0; e.scalefac_band.l[h] < t.big_values;) h++;

        s.sfb_count1 = h;
      }

      return f;
    }, this.count_bits = function (a, t, s, _) {
      var i = s.l3_enc,
          o = H.IXMAX_VAL / e.IPOW20(s.global_gain);
      if (s.xrpow_max > o) return H.LARGE_BITS;
      if (function (a, t, s, _, i) {
        var o,
            f,
            c,
            h = 0,
            u = 0,
            b = 0,
            m = 0,
            p = t,
            d = 0,
            v = p,
            g = 0,
            S = a,
            R = 0;

        for (c = null != i && _.global_gain == i.global_gain, f = _.block_type == Y.SHORT_TYPE ? 38 : 21, o = 0; o <= f; o++) {
          var M = -1;
          if ((c || _.block_type == Y.NORM_TYPE) && (M = _.global_gain - (_.scalefac[o] + (0 != _.preflag ? e.pretab[o] : 0) << _.scalefac_scale + 1) - 8 * _.subblock_gain[_.window[o]]), c && i.step[o] == M) 0 != u && (r(u, s, S, R, v, g), u = 0), 0 != b && (n(b, s, S, R, v, g), b = 0);else {
            var A,
                B = _.width[o];

            if (h + _.width[o] > _.max_nonzero_coeff && (A = _.max_nonzero_coeff - h + 1, l.fill(t, _.max_nonzero_coeff, 576, 0), (B = A) < 0 && (B = 0), o = f + 1), 0 == u && 0 == b && (v = p, g = d, S = a, R = m), null != i && i.sfb_count1 > 0 && o >= i.sfb_count1 && i.step[o] > 0 && M >= i.step[o] ? (0 != u && (r(u, s, S, R, v, g), u = 0, v = p, g = d, S = a, R = m), b += B) : (0 != b && (n(b, s, S, R, v, g), b = 0, v = p, g = d, S = a, R = m), u += B), B <= 0) {
              0 != b && (n(b, s, S, R, v, g), b = 0), 0 != u && (r(u, s, S, R, v, g), u = 0);
              break;
            }
          }
          o <= f && (d += _.width[o], m += _.width[o], h += _.width[o]);
        }

        0 != u && (r(u, s, S, R, v, g), u = 0), 0 != b && (n(b, s, S, R, v, g), b = 0);
      }(t, i, e.IPOW20(s.global_gain), s, _), 0 != (2 & a.substep_shaping)) for (var f = 0, c = s.global_gain + s.scalefac_scale, h = .634521682242439 / e.IPOW20(c), u = 0; u < s.sfbmax; u++) {
        var b,
            m = s.width[u];
        if (0 == a.pseudohalf[u]) f += m;else for (b = f, f += m; b < f; ++b) i[b] = t[b] >= h ? i[b] : 0;
      }
      return this.noquant_count_bits(a, s, _);
    }, this.best_huffman_divide = function (e, s) {
      var n = new O(),
          r = s.l3_enc,
          _ = t(23),
          l = t(23),
          f = t(23),
          c = t(23);

      if (s.block_type != Y.SHORT_TYPE || 1 != e.mode_gr) {
        n.assign(s), s.block_type == Y.NORM_TYPE && (!function (e, t, s, n, r, _, o) {
          for (var l = t.big_values, f = 0; f <= 22; f++) n[f] = H.LARGE_BITS;

          for (f = 0; f < 16; f++) {
            var c = e.scalefac_band.l[f + 1];
            if (c >= l) break;
            var h = 0,
                u = new a(h),
                b = i(s, 0, c, u);
            h = u.bits;

            for (var m = 0; m < 8; m++) {
              var p = e.scalefac_band.l[f + m + 2];
              if (p >= l) break;
              var d = h,
                  v = i(s, c, p, u = new a(d));
              d = u.bits, n[f + m] > d && (n[f + m] = d, r[f + m] = f, _[f + m] = b, o[f + m] = v);
            }
          }
        }(e, s, r, _, l, f, c), o(e, n, s, r, _, l, f, c));
        var h = n.big_values;

        if (!(0 == h || (r[h - 2] | r[h - 1]) > 1 || (h = s.count1 + 2) > 576)) {
          n.assign(s), n.count1 = h;

          for (var u = 0, b = 0; h > n.big_values; h -= 4) {
            var m = 2 * (2 * (2 * r[h - 4] + r[h - 3]) + r[h - 2]) + r[h - 1];
            u += B.t32l[m], b += B.t33l[m];
          }

          if (n.big_values = h, n.count1table_select = 0, u > b && (u = b, n.count1table_select = 1), n.count1bits = u, n.block_type == Y.NORM_TYPE) o(e, n, s, r, _, l, f, c);else {
            if (n.part2_3_length = u, (u = e.scalefac_band.l[8]) > h && (u = h), u > 0) {
              var p = new a(n.part2_3_length);
              n.table_select[0] = i(r, 0, u, p), n.part2_3_length = p.bits;
            }

            if (h > u) {
              p = new a(n.part2_3_length);
              n.table_select[1] = i(r, u, h, p), n.part2_3_length = p.bits;
            }

            s.part2_3_length > n.part2_3_length && s.assign(n);
          }
        }
      }
    };
    var c = [1, 1, 1, 1, 8, 2, 2, 2, 4, 4, 4, 8, 8, 8, 16, 16],
        h = [1, 2, 4, 8, 1, 2, 4, 8, 2, 4, 8, 2, 4, 8, 4, 8],
        u = [0, 0, 0, 0, 3, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4],
        b = [0, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 1, 2, 3, 2, 3];
    g.slen1_tab = u, g.slen2_tab = b, this.best_scalefac_store = function (a, t, s, n) {
      var r,
          _,
          i,
          o,
          l = n.tt[t][s],
          f = 0;

      for (i = 0, r = 0; r < l.sfbmax; r++) {
        var m = l.width[r];

        for (i += m, o = -m; o < 0 && 0 == l.l3_enc[o + i]; o++);

        0 == o && (l.scalefac[r] = f = -2);
      }

      if (0 == l.scalefac_scale && 0 == l.preflag) {
        var p = 0;

        for (r = 0; r < l.sfbmax; r++) l.scalefac[r] > 0 && (p |= l.scalefac[r]);

        if (0 == (1 & p) && 0 != p) {
          for (r = 0; r < l.sfbmax; r++) l.scalefac[r] > 0 && (l.scalefac[r] >>= 1);

          l.scalefac_scale = f = 1;
        }
      }

      if (0 == l.preflag && l.block_type != Y.SHORT_TYPE && 2 == a.mode_gr) {
        for (r = 11; r < Y.SBPSY_l && !(l.scalefac[r] < e.pretab[r] && -2 != l.scalefac[r]); r++);

        if (r == Y.SBPSY_l) {
          for (r = 11; r < Y.SBPSY_l; r++) l.scalefac[r] > 0 && (l.scalefac[r] -= e.pretab[r]);

          l.preflag = f = 1;
        }
      }

      for (_ = 0; _ < 4; _++) n.scfsi[s][_] = 0;

      for (2 == a.mode_gr && 1 == t && n.tt[0][s].block_type != Y.SHORT_TYPE && n.tt[1][s].block_type != Y.SHORT_TYPE && (!function (e, a) {
        for (var t, s = a.tt[1][e], n = a.tt[0][e], r = 0; r < B.scfsi_band.length - 1; r++) {
          for (t = B.scfsi_band[r]; t < B.scfsi_band[r + 1] && !(n.scalefac[t] != s.scalefac[t] && s.scalefac[t] >= 0); t++);

          if (t == B.scfsi_band[r + 1]) {
            for (t = B.scfsi_band[r]; t < B.scfsi_band[r + 1]; t++) s.scalefac[t] = -1;

            a.scfsi[e][r] = 1;
          }
        }

        var _ = 0,
            i = 0;

        for (t = 0; t < 11; t++) -1 != s.scalefac[t] && (i++, _ < s.scalefac[t] && (_ = s.scalefac[t]));

        for (var o = 0, l = 0; t < Y.SBPSY_l; t++) -1 != s.scalefac[t] && (l++, o < s.scalefac[t] && (o = s.scalefac[t]));

        for (r = 0; r < 16; r++) if (_ < c[r] && o < h[r]) {
          var f = u[r] * i + b[r] * l;
          s.part2_length > f && (s.part2_length = f, s.scalefac_compress = r);
        }
      }(s, n), f = 0), r = 0; r < l.sfbmax; r++) -2 == l.scalefac[r] && (l.scalefac[r] = 0);

      0 != f && (2 == a.mode_gr ? this.scale_bitcount(l) : this.scale_bitcount_lsf(a, l));
    };
    var m = [0, 18, 36, 54, 54, 36, 54, 72, 54, 72, 90, 72, 90, 108, 108, 126],
        p = [0, 18, 36, 54, 51, 35, 53, 71, 52, 70, 88, 69, 87, 105, 104, 122],
        d = [0, 10, 20, 30, 33, 21, 31, 41, 32, 42, 52, 43, 53, 63, 64, 74];

    this.scale_bitcount = function (a) {
      var t,
          s,
          n,
          r = 0,
          _ = 0,
          i = a.scalefac;
      if (a.block_type == Y.SHORT_TYPE) n = m, 0 != a.mixed_block_flag && (n = p);else if (n = d, 0 == a.preflag) {
        for (s = 11; s < Y.SBPSY_l && !(i[s] < e.pretab[s]); s++);

        if (s == Y.SBPSY_l) for (a.preflag = 1, s = 11; s < Y.SBPSY_l; s++) i[s] -= e.pretab[s];
      }

      for (s = 0; s < a.sfbdivide; s++) r < i[s] && (r = i[s]);

      for (; s < a.sfbmax; s++) _ < i[s] && (_ = i[s]);

      for (a.part2_length = H.LARGE_BITS, t = 0; t < 16; t++) r < c[t] && _ < h[t] && a.part2_length > n[t] && (a.part2_length = n[t], a.scalefac_compress = t);

      return a.part2_length == H.LARGE_BITS;
    };

    var v = [[15, 15, 7, 7], [15, 15, 7, 0], [7, 3, 0, 0], [15, 31, 31, 0], [7, 7, 7, 0], [3, 3, 0, 0]];

    this.scale_bitcount_lsf = function (a, s) {
      var n,
          r,
          _,
          i,
          o,
          l,
          c,
          h,
          u = t(4),
          b = s.scalefac;

      for (n = 0 != s.preflag ? 2 : 0, c = 0; c < 4; c++) u[c] = 0;

      if (s.block_type == Y.SHORT_TYPE) {
        r = 1;
        var m = e.nr_of_sfb_block[n][r];

        for (h = 0, _ = 0; _ < 4; _++) for (i = m[_] / 3, c = 0; c < i; c++, h++) for (o = 0; o < 3; o++) b[3 * h + o] > u[_] && (u[_] = b[3 * h + o]);
      } else {
        r = 0;
        m = e.nr_of_sfb_block[n][r];

        for (h = 0, _ = 0; _ < 4; _++) for (i = m[_], c = 0; c < i; c++, h++) b[h] > u[_] && (u[_] = b[h]);
      }

      for (l = !1, _ = 0; _ < 4; _++) u[_] > v[n][_] && (l = !0);

      if (!l) {
        var p, d, g, R;

        for (s.sfb_partition_table = e.nr_of_sfb_block[n][r], _ = 0; _ < 4; _++) s.slen[_] = S[u[_]];

        switch (p = s.slen[0], d = s.slen[1], g = s.slen[2], R = s.slen[3], n) {
          case 0:
            s.scalefac_compress = (5 * p + d << 4) + (g << 2) + R;
            break;

          case 1:
            s.scalefac_compress = 400 + (5 * p + d << 2) + g;
            break;

          case 2:
            s.scalefac_compress = 500 + 3 * p + d;
            break;

          default:
            f.err.printf("intensity stereo not implemented yet\n");
        }
      }

      if (!l) for (s.part2_length = 0, _ = 0; _ < 4; _++) s.part2_length += s.slen[_] * s.sfb_partition_table[_];
      return l;
    };

    var S = [0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4];

    this.huffman_init = function (e) {
      for (var a = 2; a <= 576; a += 2) {
        for (var t, n = 0; e.scalefac_band.l[++n] < a;);

        for (t = s[n][0]; e.scalefac_band.l[t + 1] > a;) t--;

        for (t < 0 && (t = s[n][0]), e.bv_scf[a - 2] = t, t = s[n][1]; e.scalefac_band.l[t + e.bv_scf[a - 2] + 2] > a;) t--;

        t < 0 && (t = s[n][1]), e.bv_scf[a - 1] = t;
      }
    };
  }

  function S() {
    var e;
    this.setModules = function (a) {
      e = a;
    }, this.ResvFrameBegin = function (a, t) {
      var s,
          n = a.internal_flags,
          r = n.l3_side,
          _ = e.getframebits(a);

      t.bits = (_ - 8 * n.sideinfo_len) / n.mode_gr;
      var i = 2048 * n.mode_gr - 8;
      a.brate > 320 ? s = 8 * int(1e3 * a.brate / (a.out_samplerate / 1152) / 8 + .5) : (s = 11520, a.strict_ISO && (s = 8 * int(32e4 / (a.out_samplerate / 1152) / 8 + .5))), n.ResvMax = s - _, n.ResvMax > i && (n.ResvMax = i), (n.ResvMax < 0 || a.disable_reservoir) && (n.ResvMax = 0);
      var o = t.bits * n.mode_gr + Math.min(n.ResvSize, n.ResvMax);
      return o > s && (o = s), r.resvDrain_pre = 0, null != n.pinfo && (n.pinfo.mean_bits = t.bits / 2, n.pinfo.resvsize = n.ResvSize), o;
    }, this.ResvMaxBits = function (e, a, t, s) {
      var n,
          r = e.internal_flags,
          _ = r.ResvSize,
          i = r.ResvMax;
      0 != s && (_ += a), 0 != (1 & r.substep_shaping) && (i *= .9), t.bits = a, 10 * _ > 9 * i ? (n = _ - 9 * i / 10, t.bits += n, r.substep_shaping |= 128) : (n = 0, r.substep_shaping &= 127, e.disable_reservoir || 0 != (1 & r.substep_shaping) || (t.bits -= .1 * a));
      var o = _ < 6 * r.ResvMax / 10 ? _ : 6 * r.ResvMax / 10;
      return (o -= n) < 0 && (o = 0), o;
    }, this.ResvAdjust = function (e, a) {
      e.ResvSize -= a.part2_3_length + a.part2_length;
    }, this.ResvFrameEnd = function (e, a) {
      var t,
          s = e.l3_side;
      e.ResvSize += a * e.mode_gr;
      var n = 0;
      s.resvDrain_post = 0, s.resvDrain_pre = 0, 0 != (t = e.ResvSize % 8) && (n += t), (t = e.ResvSize - n - e.ResvMax) > 0 && (n += t);
      var r = Math.min(8 * s.main_data_begin, n) / 8;
      s.resvDrain_pre += 8 * r, n -= 8 * r, e.ResvSize -= 8 * r, s.main_data_begin -= r, s.resvDrain_post += n, e.ResvSize -= n;
    };
  }

  function R() {
    var a = this,
        s = 32773,
        n = null,
        _ = null,
        i = null,
        o = null;

    this.setModules = function (e, a, t, s) {
      n = e, _ = a, i = t, o = s;
    };

    var c = null,
        h = 0,
        u = 0,
        b = 0;

    function m(e) {
      f.arraycopy(e.header[e.w_ptr].buf, 0, c, u, e.sideinfo_len), u += e.sideinfo_len, h += 8 * e.sideinfo_len, e.w_ptr = e.w_ptr + 1 & G.MAX_HEADER_BUF - 1;
    }

    function p(e, a, t) {
      for (; t > 0;) {
        var s;
        0 == b && (b = 8, u++, e.header[e.w_ptr].write_timing == h && m(e), c[u] = 0), t -= s = Math.min(t, b), b -= s, c[u] |= a >> t << b, h += s;
      }
    }

    function v(e, a, t) {
      for (; t > 0;) {
        var s;
        0 == b && (b = 8, c[++u] = 0), t -= s = Math.min(t, b), b -= s, c[u] |= a >> t << b, h += s;
      }
    }

    function S(e, a) {
      var t,
          s = e.internal_flags;

      if (a >= 8 && (p(s, 76, 8), a -= 8), a >= 8 && (p(s, 65, 8), a -= 8), a >= 8 && (p(s, 77, 8), a -= 8), a >= 8 && (p(s, 69, 8), a -= 8), a >= 32) {
        var n = i.getLameShortVersion();
        if (a >= 32) for (t = 0; t < n.length && a >= 8; ++t) a -= 8, p(s, n.charAt(t), 8);
      }

      for (; a >= 1; a -= 1) p(s, s.ancillary_flag, 1), s.ancillary_flag ^= e.disable_reservoir ? 0 : 1;
    }

    function R(e, a, t) {
      for (var s = e.header[e.h_ptr].ptr; t > 0;) {
        var n = Math.min(t, 8 - (7 & s));
        t -= n, e.header[e.h_ptr].buf[s >> 3] |= a >> t << 8 - (7 & s) - n, s += n;
      }

      e.header[e.h_ptr].ptr = s;
    }

    function M(e, a) {
      e <<= 8;

      for (var t = 0; t < 8; t++) 0 != (65536 & ((a <<= 1) ^ (e <<= 1))) && (a ^= s);

      return a;
    }

    function A(e, a) {
      var t,
          s = B.ht[a.count1table_select + 32],
          n = 0,
          r = a.big_values,
          _ = a.big_values;

      for (t = (a.count1 - a.big_values) / 4; t > 0; --t) {
        var i = 0,
            o = 0;
        0 != a.l3_enc[r + 0] && (o += 8, a.xr[_ + 0] < 0 && i++), 0 != a.l3_enc[r + 1] && (o += 4, i *= 2, a.xr[_ + 1] < 0 && i++), 0 != a.l3_enc[r + 2] && (o += 2, i *= 2, a.xr[_ + 2] < 0 && i++), 0 != a.l3_enc[r + 3] && (o++, i *= 2, a.xr[_ + 3] < 0 && i++), r += 4, _ += 4, p(e, i + s.table[o], s.hlen[o]), n += s.hlen[o];
      }

      return n;
    }

    function w(e, a, t, s, n) {
      var r = B.ht[a],
          _ = 0;
      if (0 == a) return _;

      for (var i = t; i < s; i += 2) {
        var o = 0,
            l = 0,
            f = r.xlen,
            c = r.xlen,
            h = 0,
            u = n.l3_enc[i],
            b = n.l3_enc[i + 1];

        if (0 != u && (n.xr[i] < 0 && h++, o--), a > 15) {
          if (u > 14) h |= u - 15 << 1, l = f, u = 15;
          if (b > 14) h <<= f, h |= b - 15, l += f, b = 15;
          c = 16;
        }

        0 != b && (h <<= 1, n.xr[i + 1] < 0 && h++, o--), u = u * c + b, l -= o, o += r.hlen[u], p(e, r.table[u], o), p(e, h, l), _ += o + l;
      }

      return _;
    }

    function T(e, a) {
      var t = 3 * e.scalefac_band.s[3];
      t > a.big_values && (t = a.big_values);
      var s = w(e, a.table_select[0], 0, t, a);
      return s += w(e, a.table_select[1], t, a.big_values, a);
    }

    function E(e, a) {
      var t, s, n, r;
      t = a.big_values;

      var _ = a.region0_count + 1;

      return n = e.scalefac_band.l[_], _ += a.region1_count + 1, n > t && (n = t), (r = e.scalefac_band.l[_]) > t && (r = t), s = w(e, a.table_select[0], 0, n, a), s += w(e, a.table_select[1], n, r, a), s += w(e, a.table_select[2], r, t, a);
    }

    function k() {
      this.total = 0;
    }

    function x(e, t) {
      var s,
          n,
          r,
          _,
          i,
          o = e.internal_flags;

      return i = o.w_ptr, -1 == (_ = o.h_ptr - 1) && (_ = G.MAX_HEADER_BUF - 1), s = o.header[_].write_timing - h, t.total = s, s >= 0 && (n = 1 + _ - i, _ < i && (n = 1 + _ - i + G.MAX_HEADER_BUF), s -= 8 * n * o.sideinfo_len), s += r = a.getframebits(e), t.total += r, t.total % 8 != 0 ? t.total = 1 + t.total / 8 : t.total = t.total / 8, t.total += u + 1, s < 0 && f.err.println("strange error flushing buffer ... \n"), s;
    }

    this.getframebits = function (e) {
      var a,
          t = e.internal_flags;
      return a = 0 != t.bitrate_index ? B.bitrate_table[e.version][t.bitrate_index] : e.brate, 8 * (0 | 72e3 * (e.version + 1) * a / e.out_samplerate + t.padding);
    }, this.CRC_writeheader = function (e, a) {
      var t = 65535;
      t = M(255 & a[2], t), t = M(255 & a[3], t);

      for (var s = 6; s < e.sideinfo_len; s++) t = M(255 & a[s], t);

      a[4] = byte(t >> 8), a[5] = byte(255 & t);
    }, this.flush_bitstream = function (e) {
      var a,
          t,
          s = e.internal_flags;
          s.h_ptr - 1;

      if (a = s.l3_side, !((t = x(e, new k())) < 0)) {
        if (S(e, t), s.ResvSize = 0, a.main_data_begin = 0, s.findReplayGain) {
          var _ = n.GetTitleGain(s.rgdata);

          s.RadioGain = 0 | Math.floor(10 * _ + .5);
        }

        s.findPeakSample && (s.noclipGainChange = 0 | Math.ceil(20 * Math.log10(s.PeakSample / 32767) * 10), s.noclipGainChange > 0 && (EQ(e.scale, 1) || EQ(e.scale, 0)) ? s.noclipScale = Math.floor(32767 / s.PeakSample * 100) / 100 : s.noclipScale = -1);
      }
    }, this.add_dummy_byte = function (e, a, t) {
      for (var s, n = e.internal_flags; t-- > 0;) for (v(0, a, 8), s = 0; s < G.MAX_HEADER_BUF; ++s) n.header[s].write_timing += 8;
    }, this.format_bitstream = function (e) {
      var a,
          t = e.internal_flags;
      a = t.l3_side;
      var s = this.getframebits(e);
      S(e, a.resvDrain_pre), function (e, a) {
        var t,
            s,
            n,
            r = e.internal_flags;

        if (t = r.l3_side, r.header[r.h_ptr].ptr = 0, l.fill(r.header[r.h_ptr].buf, 0, r.sideinfo_len, 0), e.out_samplerate < 16e3 ? R(r, 4094, 12) : R(r, 4095, 12), R(r, e.version, 1), R(r, 1, 2), R(r, e.error_protection ? 0 : 1, 1), R(r, r.bitrate_index, 4), R(r, r.samplerate_index, 2), R(r, r.padding, 1), R(r, e.extension, 1), R(r, e.mode.ordinal(), 2), R(r, r.mode_ext, 2), R(r, e.copyright, 1), R(r, e.original, 1), R(r, e.emphasis, 2), e.error_protection && R(r, 0, 16), 1 == e.version) {
          for (R(r, t.main_data_begin, 9), 2 == r.channels_out ? R(r, t.private_bits, 3) : R(r, t.private_bits, 5), n = 0; n < r.channels_out; n++) {
            var _;

            for (_ = 0; _ < 4; _++) R(r, t.scfsi[n][_], 1);
          }

          for (s = 0; s < 2; s++) for (n = 0; n < r.channels_out; n++) R(r, (i = t.tt[s][n]).part2_3_length + i.part2_length, 12), R(r, i.big_values / 2, 9), R(r, i.global_gain, 8), R(r, i.scalefac_compress, 4), i.block_type != Y.NORM_TYPE ? (R(r, 1, 1), R(r, i.block_type, 2), R(r, i.mixed_block_flag, 1), 14 == i.table_select[0] && (i.table_select[0] = 16), R(r, i.table_select[0], 5), 14 == i.table_select[1] && (i.table_select[1] = 16), R(r, i.table_select[1], 5), R(r, i.subblock_gain[0], 3), R(r, i.subblock_gain[1], 3), R(r, i.subblock_gain[2], 3)) : (R(r, 0, 1), 14 == i.table_select[0] && (i.table_select[0] = 16), R(r, i.table_select[0], 5), 14 == i.table_select[1] && (i.table_select[1] = 16), R(r, i.table_select[1], 5), 14 == i.table_select[2] && (i.table_select[2] = 16), R(r, i.table_select[2], 5), R(r, i.region0_count, 4), R(r, i.region1_count, 3)), R(r, i.preflag, 1), R(r, i.scalefac_scale, 1), R(r, i.count1table_select, 1);
        } else for (R(r, t.main_data_begin, 8), R(r, t.private_bits, r.channels_out), s = 0, n = 0; n < r.channels_out; n++) {
          var i;
          R(r, (i = t.tt[s][n]).part2_3_length + i.part2_length, 12), R(r, i.big_values / 2, 9), R(r, i.global_gain, 8), R(r, i.scalefac_compress, 9), i.block_type != Y.NORM_TYPE ? (R(r, 1, 1), R(r, i.block_type, 2), R(r, i.mixed_block_flag, 1), 14 == i.table_select[0] && (i.table_select[0] = 16), R(r, i.table_select[0], 5), 14 == i.table_select[1] && (i.table_select[1] = 16), R(r, i.table_select[1], 5), R(r, i.subblock_gain[0], 3), R(r, i.subblock_gain[1], 3), R(r, i.subblock_gain[2], 3)) : (R(r, 0, 1), 14 == i.table_select[0] && (i.table_select[0] = 16), R(r, i.table_select[0], 5), 14 == i.table_select[1] && (i.table_select[1] = 16), R(r, i.table_select[1], 5), 14 == i.table_select[2] && (i.table_select[2] = 16), R(r, i.table_select[2], 5), R(r, i.region0_count, 4), R(r, i.region1_count, 3)), R(r, i.scalefac_scale, 1), R(r, i.count1table_select, 1);
        }

        e.error_protection && CRC_writeheader(r, r.header[r.h_ptr].buf);
        var o = r.h_ptr;
        r.h_ptr = o + 1 & G.MAX_HEADER_BUF - 1, r.header[r.h_ptr].write_timing = r.header[o].write_timing + a, r.h_ptr == r.w_ptr && f.err.println("Error: MAX_HEADER_BUF too small in bitstream.c \n");
      }(e, s);
      var n = 8 * t.sideinfo_len;

      if (n += function (e) {
        var a,
            t,
            s,
            n,
            r = 0,
            _ = e.internal_flags,
            i = _.l3_side;
        if (1 == e.version) for (a = 0; a < 2; a++) for (t = 0; t < _.channels_out; t++) {
          var o = i.tt[a][t],
              l = g.slen1_tab[o.scalefac_compress],
              f = g.slen2_tab[o.scalefac_compress];

          for (n = 0, s = 0; s < o.sfbdivide; s++) -1 != o.scalefac[s] && (p(_, o.scalefac[s], l), n += l);

          for (; s < o.sfbmax; s++) -1 != o.scalefac[s] && (p(_, o.scalefac[s], f), n += f);

          o.block_type == Y.SHORT_TYPE ? n += T(_, o) : n += E(_, o), r += n += A(_, o);
        } else for (a = 0, t = 0; t < _.channels_out; t++) {
          var c,
              h,
              u = 0;

          if (n = 0, s = 0, h = 0, (o = i.tt[a][t]).block_type == Y.SHORT_TYPE) {
            for (; h < 4; h++) {
              var b = o.sfb_partition_table[h] / 3,
                  m = o.slen[h];

              for (c = 0; c < b; c++, s++) p(_, Math.max(o.scalefac[3 * s + 0], 0), m), p(_, Math.max(o.scalefac[3 * s + 1], 0), m), p(_, Math.max(o.scalefac[3 * s + 2], 0), m), u += 3 * m;
            }

            n += T(_, o);
          } else {
            for (; h < 4; h++) for (b = o.sfb_partition_table[h], m = o.slen[h], c = 0; c < b; c++, s++) p(_, Math.max(o.scalefac[s], 0), m), u += m;

            n += E(_, o);
          }

          r += u + (n += A(_, o));
        }
        return r;
      }(e), S(e, a.resvDrain_post), n += a.resvDrain_post, a.main_data_begin += (s - n) / 8, x(e, new k()) != t.ResvSize && f.err.println("Internal buffer inconsistency. flushbits <> ResvSize"), 8 * a.main_data_begin != t.ResvSize && (f.err.printf("bit reservoir error: \nl3_side.main_data_begin: %d \nResvoir size:             %d \nresv drain (post)         %d \nresv drain (pre)          %d \nheader and sideinfo:      %d \ndata bits:                %d \ntotal bits:               %d (remainder: %d) \nbitsperframe:             %d \n", 8 * a.main_data_begin, t.ResvSize, a.resvDrain_post, a.resvDrain_pre, 8 * t.sideinfo_len, n - a.resvDrain_post - 8 * t.sideinfo_len, n, n % 8, s), f.err.println("This is a fatal error.  It has several possible causes:"), f.err.println("90%%  LAME compiled with buggy version of gcc using advanced optimizations"), f.err.println(" 9%%  Your system is overclocked"), f.err.println(" 1%%  bug in LAME encoding library"), t.ResvSize = 8 * a.main_data_begin), h > 1e9) {
        var r;

        for (r = 0; r < G.MAX_HEADER_BUF; ++r) t.header[r].write_timing -= h;

        h = 0;
      }

      return 0;
    }, this.copy_buffer = function (e, a, s, i, l) {
      var h = u + 1;
      if (h <= 0) return 0;
      if (0 != i && h > i) return -1;

      if (f.arraycopy(c, 0, a, s, h), u = -1, b = 0, 0 != l) {
        var m = t(1);
        if (m[0] = e.nMusicCRC, o.updateMusicCRC(m, a, s, h), e.nMusicCRC = m[0], h > 0 && (e.VBR_seek_table.nBytesWritten += h), e.decode_on_the_fly) for (var p, v = r([2, 1152]), g = h, S = -1; 0 != S;) if (S = _.hip_decode1_unclipped(e.hip, a, s, g, v[0], v[1]), g = 0, -1 == S && (S = 0), S > 0) {
          if (e.findPeakSample) {
            for (p = 0; p < S; p++) v[0][p] > e.PeakSample ? e.PeakSample = v[0][p] : -v[0][p] > e.PeakSample && (e.PeakSample = -v[0][p]);

            if (e.channels_out > 1) for (p = 0; p < S; p++) v[1][p] > e.PeakSample ? e.PeakSample = v[1][p] : -v[1][p] > e.PeakSample && (e.PeakSample = -v[1][p]);
          }

          if (e.findReplayGain && n.AnalyzeSamples(e.rgdata, v[0], 0, v[1], 0, S, e.channels_out) == d.GAIN_ANALYSIS_ERROR) return -6;
        }
      }

      return h;
    }, this.init_bit_stream_w = function (a) {
      c = e(Z.LAME_MAXMP3BUFFER), a.h_ptr = a.w_ptr = 0, a.header[a.h_ptr].write_timing = 0, u = -1, b = 0, h = 0;
    };
  }

  function M() {
    var a, t, s;

    this.setModules = function (e, n, r) {
      a = e, t = n, s = r;
    };

    var n = M.NUMTOCENTRIES,
        r = M.MAXFRAMESIZE,
        _ = n + 4 + 4 + 4 + 4 + 4 + 9 + 1 + 1 + 8 + 1 + 1 + 3 + 1 + 1 + 2 + 4 + 2 + 2,
        i = 128,
        o = 64,
        c = 32,
        u = null,
        m = "Xing",
        p = "Info",
        d = [0, 49345, 49537, 320, 49921, 960, 640, 49729, 50689, 1728, 1920, 51009, 1280, 50625, 50305, 1088, 52225, 3264, 3456, 52545, 3840, 53185, 52865, 3648, 2560, 51905, 52097, 2880, 51457, 2496, 2176, 51265, 55297, 6336, 6528, 55617, 6912, 56257, 55937, 6720, 7680, 57025, 57217, 8e3, 56577, 7616, 7296, 56385, 5120, 54465, 54657, 5440, 55041, 6080, 5760, 54849, 53761, 4800, 4992, 54081, 4352, 53697, 53377, 4160, 61441, 12480, 12672, 61761, 13056, 62401, 62081, 12864, 13824, 63169, 63361, 14144, 62721, 13760, 13440, 62529, 15360, 64705, 64897, 15680, 65281, 16320, 16e3, 65089, 64001, 15040, 15232, 64321, 14592, 63937, 63617, 14400, 10240, 59585, 59777, 10560, 60161, 11200, 10880, 59969, 60929, 11968, 12160, 61249, 11520, 60865, 60545, 11328, 58369, 9408, 9600, 58689, 9984, 59329, 59009, 9792, 8704, 58049, 58241, 9024, 57601, 8640, 8320, 57409, 40961, 24768, 24960, 41281, 25344, 41921, 41601, 25152, 26112, 42689, 42881, 26432, 42241, 26048, 25728, 42049, 27648, 44225, 44417, 27968, 44801, 28608, 28288, 44609, 43521, 27328, 27520, 43841, 26880, 43457, 43137, 26688, 30720, 47297, 47489, 31040, 47873, 31680, 31360, 47681, 48641, 32448, 32640, 48961, 32e3, 48577, 48257, 31808, 46081, 29888, 30080, 46401, 30464, 47041, 46721, 30272, 29184, 45761, 45953, 29504, 45313, 29120, 28800, 45121, 20480, 37057, 37249, 20800, 37633, 21440, 21120, 37441, 38401, 22208, 22400, 38721, 21760, 38337, 38017, 21568, 39937, 23744, 23936, 40257, 24320, 40897, 40577, 24128, 23040, 39617, 39809, 23360, 39169, 22976, 22656, 38977, 34817, 18624, 18816, 35137, 19200, 35777, 35457, 19008, 19968, 36545, 36737, 20288, 36097, 19904, 19584, 35905, 17408, 33985, 34177, 17728, 34561, 18368, 18048, 34369, 33281, 17088, 17280, 33601, 16640, 33217, 32897, 16448];

    function v(e, a) {
      var t = 255 & e[a + 0];
      return t <<= 8, t |= 255 & e[a + 1], t <<= 8, t |= 255 & e[a + 2], t <<= 8, t |= 255 & e[a + 3];
    }

    function g(e, a, t) {
      e[a + 0] = 255 & t >> 24, e[a + 1] = 255 & t >> 16, e[a + 2] = 255 & t >> 8, e[a + 3] = 255 & t;
    }

    function S(e, a, t) {
      e[a + 0] = 255 & t >> 8, e[a + 1] = 255 & t;
    }

    function R(e, a, t) {
      return 255 & (e << a | t & ~(-1 << a));
    }

    function A(e, t) {
      var s = e.internal_flags;
      t[0] = R(t[0], 8, 255), t[1] = R(t[1], 3, 7), t[1] = R(t[1], 1, e.out_samplerate < 16e3 ? 0 : 1), t[1] = R(t[1], 1, e.version), t[1] = R(t[1], 2, 1), t[1] = R(t[1], 1, e.error_protection ? 0 : 1), t[2] = R(t[2], 4, s.bitrate_index), t[2] = R(t[2], 2, s.samplerate_index), t[2] = R(t[2], 1, 0), t[2] = R(t[2], 1, e.extension), t[3] = R(t[3], 2, e.mode.ordinal()), t[3] = R(t[3], 2, s.mode_ext), t[3] = R(t[3], 1, e.copyright), t[3] = R(t[3], 1, e.original), t[3] = R(t[3], 2, e.emphasis), t[0] = 255;

      var n,
          r,
          _ = 241 & t[1];

      n = 1 == e.version ? i : e.out_samplerate < 16e3 ? c : o, e.VBR == b.vbr_off && (n = e.brate), r = e.free_format ? 0 : 255 & 16 * a.BitrateIndex(n, e.version, e.out_samplerate), 1 == e.version ? (t[1] = 255 & (10 | _), _ = 13 & t[2], t[2] = 255 & (r | _)) : (t[1] = 255 & (2 | _), _ = 13 & t[2], t[2] = 255 & (r | _));
    }

    function w(e, a) {
      return a = a >> 8 ^ d[255 & (a ^ e)];
    }

    this.addVbrFrame = function (e) {
      var a = e.internal_flags,
          t = B.bitrate_table[e.version][a.bitrate_index];
      !function (e, a) {
        if (e.nVbrNumFrames++, e.sum += a, e.seen++, !(e.seen < e.want) && (e.pos < e.size && (e.bag[e.pos] = e.sum, e.pos++, e.seen = 0), e.pos == e.size)) {
          for (var t = 1; t < e.size; t += 2) e.bag[t / 2] = e.bag[t];

          e.want *= 2, e.pos /= 2;
        }
      }(a.VBR_seek_table, t);
    }, this.getVbrTag = function (e) {
      var a = new VBRTagData(),
          t = 0;
      a.flags = 0;

      var s = e[t + 1] >> 3 & 1,
          r = e[t + 2] >> 2 & 3,
          _ = e[t + 3] >> 6 & 3,
          i = e[t + 2] >> 4 & 15;

      if (i = B.bitrate_table[s][i], e[t + 1] >> 4 == 14 ? a.samprate = B.samplerate_table[2][r] : a.samprate = B.samplerate_table[s][r], !function (e, a) {
        return new String(e, a, m.length(), u).equals(m) || new String(e, a, p.length(), u).equals(p);
      }(e, t += 0 != s ? 3 != _ ? 36 : 21 : 3 != _ ? 21 : 13)) return null;
      t += 4, a.hId = s;
      var o = a.flags = v(e, t);

      if (t += 4, 0 != (1 & o) && (a.frames = v(e, t), t += 4), 0 != (2 & o) && (a.bytes = v(e, t), t += 4), 0 != (4 & o)) {
        if (null != a.toc) for (var l = 0; l < n; l++) a.toc[l] = e[t + l];
        t += n;
      }

      a.vbrScale = -1, 0 != (8 & o) && (a.vbrScale = v(e, t), t += 4), a.headersize = 72e3 * (s + 1) * i / a.samprate;
      var f = e[(t += 21) + 0] << 4;
      f += e[t + 1] >> 4;
      var c = (15 & e[t + 1]) << 8;
      return (f < 0 || f > 3e3) && (f = -1), ((c += 255 & e[t + 2]) < 0 || c > 3e3) && (c = -1), a.encDelay = f, a.encPadding = c, a;
    }, this.InitVbrTag = function (a) {
      var s,
          n = a.internal_flags;
      s = 1 == a.version ? i : a.out_samplerate < 16e3 ? c : o, a.VBR == b.vbr_off && (s = a.brate);
      var l = 72e3 * (a.version + 1) * s / a.out_samplerate,
          f = n.sideinfo_len + _;
      if (n.VBR_seek_table.TotalFrameSize = l, l < f || l > r) a.bWriteVbrTag = !1;else {
        n.VBR_seek_table.nVbrNumFrames = 0, n.VBR_seek_table.nBytesWritten = 0, n.VBR_seek_table.sum = 0, n.VBR_seek_table.seen = 0, n.VBR_seek_table.want = 1, n.VBR_seek_table.pos = 0, null == n.VBR_seek_table.bag && (n.VBR_seek_table.bag = new int[400](), n.VBR_seek_table.size = 400);
        var h = e(r);
        A(a, h);

        for (var u = n.VBR_seek_table.TotalFrameSize, m = 0; m < u; ++m) t.add_dummy_byte(a, 255 & h[m], 1);
      }
    }, this.updateMusicCRC = function (e, a, t, s) {
      for (var n = 0; n < s; ++n) e[0] = w(a[t + n], e[0]);
    }, this.getLameTagFrame = function (a, r) {
      var _ = a.internal_flags;
      if (!a.bWriteVbrTag) return 0;
      if (_.Class_ID != Z.LAME_ID) return 0;
      if (_.VBR_seek_table.pos <= 0) return 0;
      if (r.length < _.VBR_seek_table.TotalFrameSize) return _.VBR_seek_table.TotalFrameSize;
      l.fill(r, 0, _.VBR_seek_table.TotalFrameSize, 0), A(a, r);
      var i = e(n);
      if (a.free_format) for (var o = 1; o < n; ++o) i[o] = 255 & 255 * o / 100;else !function (e, a) {
        if (!(e.pos <= 0)) for (var t = 1; t < n; ++t) {
          var s = t / n,
              r = 0 | Math.floor(s * e.pos);
          r > e.pos - 1 && (r = e.pos - 1);

          var _ = 0 | 256 * e.bag[r] / e.sum;

          _ > 255 && (_ = 255), a[t] = 255 & _;
        }
      }(_.VBR_seek_table, i);
      var c = _.sideinfo_len;
      a.error_protection && (c -= 2), a.VBR == b.vbr_off ? (r[c++] = 255 & p.charAt(0), r[c++] = 255 & p.charAt(1), r[c++] = 255 & p.charAt(2), r[c++] = 255 & p.charAt(3)) : (r[c++] = 255 & m.charAt(0), r[c++] = 255 & m.charAt(1), r[c++] = 255 & m.charAt(2), r[c++] = 255 & m.charAt(3)), g(r, c, 15), g(r, c += 4, _.VBR_seek_table.nVbrNumFrames), c += 4;
      var u = _.VBR_seek_table.nBytesWritten + _.VBR_seek_table.TotalFrameSize;
      g(r, c, 0 | u), c += 4, f.arraycopy(i, 0, r, c, i.length), c += i.length, a.error_protection && t.CRC_writeheader(_, r);
      var d = 0;

      for (o = 0; o < c; o++) d = w(r[o], d);

      return c += function (e, a, t, n, r) {
        var _,
            i,
            o,
            l,
            f,
            c = e.internal_flags,
            u = 0,
            b = e.encoder_delay,
            m = e.encoder_padding,
            p = 100 - 10 * e.VBR_q - e.quality,
            d = s.getLameVeryShortVersion(),
            v = [1, 5, 3, 2, 4, 0, 3],
            R = 0 | (e.lowpassfreq / 100 + .5 > 255 ? 255 : e.lowpassfreq / 100 + .5),
            M = 0,
            A = 0,
            B = e.internal_flags.noise_shaping,
            T = 0,
            E = 0,
            k = 0,
            x = 0 != (1 & e.exp_nspsytune),
            y = 0 != (2 & e.exp_nspsytune),
            P = !1,
            I = !1,
            H = e.internal_flags.nogap_total,
            V = e.internal_flags.nogap_current,
            O = e.ATHtype;

        switch (e.VBR) {
          case vbr_abr:
            f = e.VBR_mean_bitrate_kbps;
            break;

          case vbr_off:
            f = e.brate;
            break;

          default:
            f = e.VBR_min_bitrate_kbps;
        }

        switch (_ = 0 + (e.VBR.ordinal() < v.length ? v[e.VBR.ordinal()] : 0), c.findReplayGain && (c.RadioGain > 510 && (c.RadioGain = 510), c.RadioGain < -510 && (c.RadioGain = -510), A = 8192, A |= 3072, c.RadioGain >= 0 ? A |= c.RadioGain : (A |= 512, A |= -c.RadioGain)), c.findPeakSample && (M = Math.abs(0 | c.PeakSample / 32767 * Math.pow(2, 23) + .5)), -1 != H && (V > 0 && (I = !0), V < H - 1 && (P = !0)), l = O + ((x ? 1 : 0) << 4) + ((y ? 1 : 0) << 5) + ((P ? 1 : 0) << 6) + ((I ? 1 : 0) << 7), p < 0 && (p = 0), e.mode) {
          case MONO:
            T = 0;
            break;

          case STEREO:
            T = 1;
            break;

          case DUAL_CHANNEL:
            T = 2;
            break;

          case JOINT_STEREO:
            T = e.force_ms ? 4 : 3;
            break;

          case NOT_SET:
          default:
            T = 7;
        }

        k = e.in_samplerate <= 32e3 ? 0 : 48e3 == e.in_samplerate ? 2 : e.in_samplerate > 48e3 ? 3 : 1, (e.short_blocks == h.short_block_forced || e.short_blocks == h.short_block_dispensed || -1 == e.lowpassfreq && -1 == e.highpassfreq || e.scale_left < e.scale_right || e.scale_left > e.scale_right || e.disable_reservoir && e.brate < 320 || e.noATH || e.ATHonly || 0 == O || e.in_samplerate <= 32e3) && (E = 1), i = B + (T << 2) + (E << 5) + (k << 6), o = c.nMusicCRC, g(t, n + u, p), u += 4;

        for (var L = 0; L < 9; L++) t[n + u + L] = 255 & d.charAt(L);

        t[n + (u += 9)] = 255 & _, t[n + ++u] = 255 & R, g(t, n + ++u, M), S(t, n + (u += 4), A), S(t, n + (u += 2), 0), t[n + (u += 2)] = 255 & l, t[n + ++u] = f >= 255 ? 255 : 255 & f, t[n + ++u] = 255 & b >> 4, t[n + u + 1] = 255 & (b << 4) + (m >> 8), t[n + u + 2] = 255 & m, t[n + (u += 3)] = 255 & i, u++, t[n + u++] = 0, S(t, n + u, e.preset), g(t, n + (u += 2), a), S(t, n + (u += 4), o), u += 2;

        for (var N = 0; N < u; N++) r = w(t[n + N], r);

        return S(t, n + u, r), u += 2;
      }(a, u, r, c, d), _.VBR_seek_table.TotalFrameSize;
    }, this.putVbrTag = function (a, t) {
      if (a.internal_flags.VBR_seek_table.pos <= 0) return -1;
      if (t.seek(t.length()), 0 == t.length()) return -1;

      var s = function (a) {
        a.seek(0);
        var t = e(10);
        return a.readFully(t), new String(t, "ISO-8859-1").startsWith("ID3") ? 0 : ((127 & t[6]) << 21 | (127 & t[7]) << 14 | (127 & t[8]) << 7 | 127 & t[9]) + t.length;
      }(t);

      t.seek(s);

      var n = e(r),
          _ = getLameTagFrame(a, n);

      return _ > n.length ? -1 : _ < 1 ? 0 : (t.write(n, 0, _), 0);
    };
  }

  function A(e, a, t, s) {
    this.xlen = e, this.linmax = a, this.table = t, this.hlen = s;
  }

  m.STEREO = new m(0), m.JOINT_STEREO = new m(1), m.DUAL_CHANNEL = new m(2), m.MONO = new m(3), m.NOT_SET = new m(4), d.STEPS_per_dB = 100, d.MAX_dB = 120, d.GAIN_NOT_ENOUGH_SAMPLES = -24601, d.GAIN_ANALYSIS_ERROR = 0, d.GAIN_ANALYSIS_OK = 1, d.INIT_GAIN_ANALYSIS_ERROR = 0, d.INIT_GAIN_ANALYSIS_OK = 1, d.YULE_ORDER = 10, d.MAX_ORDER = d.YULE_ORDER, d.MAX_SAMP_FREQ = 48e3, d.RMS_WINDOW_TIME_NUMERATOR = 1, d.RMS_WINDOW_TIME_DENOMINATOR = 20, d.MAX_SAMPLES_PER_WINDOW = d.MAX_SAMP_FREQ * d.RMS_WINDOW_TIME_NUMERATOR / d.RMS_WINDOW_TIME_DENOMINATOR + 1, R.EQ = function (e, a) {
    return Math.abs(e) > Math.abs(a) ? Math.abs(e - a) <= 1e-6 * Math.abs(e) : Math.abs(e - a) <= 1e-6 * Math.abs(a);
  }, R.NEQ = function (e, a) {
    return !R.EQ(e, a);
  }, M.NUMTOCENTRIES = 100, M.MAXFRAMESIZE = 2880;
  var B = {};

  function w(e) {
    this.bits = e;
  }

  function T() {
    this.setModules = function (e, a) {
    };
  }

  function E() {
    this.over_noise = 0, this.tot_noise = 0, this.max_noise = 0, this.over_count = 0, this.over_SSD = 0, this.bits = 0;
  }

  function k() {
    this.class_id = 0, this.num_samples = 0, this.num_channels = 0, this.in_samplerate = 0, this.out_samplerate = 0, this.scale = 0, this.scale_left = 0, this.scale_right = 0, this.analysis = !1, this.bWriteVbrTag = !1, this.decode_only = !1, this.quality = 0, this.mode = m.STEREO, this.force_ms = !1, this.free_format = !1, this.findReplayGain = !1, this.decode_on_the_fly = !1, this.write_id3tag_automatic = !1, this.brate = 0, this.compression_ratio = 0, this.copyright = 0, this.original = 0, this.extension = 0, this.emphasis = 0, this.error_protection = 0, this.strict_ISO = !1, this.disable_reservoir = !1, this.quant_comp = 0, this.quant_comp_short = 0, this.experimentalY = !1, this.experimentalZ = 0, this.exp_nspsytune = 0, this.preset = 0, this.VBR = null, this.VBR_q_frac = 0, this.VBR_q = 0, this.VBR_mean_bitrate_kbps = 0, this.VBR_min_bitrate_kbps = 0, this.VBR_max_bitrate_kbps = 0, this.VBR_hard_min = 0, this.lowpassfreq = 0, this.highpassfreq = 0, this.lowpasswidth = 0, this.highpasswidth = 0, this.maskingadjust = 0, this.maskingadjust_short = 0, this.ATHonly = !1, this.ATHshort = !1, this.noATH = !1, this.ATHtype = 0, this.ATHcurve = 0, this.ATHlower = 0, this.athaa_type = 0, this.athaa_loudapprox = 0, this.athaa_sensitivity = 0, this.short_blocks = null, this.useTemporal = !1, this.interChRatio = 0, this.msfix = 0, this.tune = !1, this.tune_value_a = 0, this.version = 0, this.encoder_delay = 0, this.encoder_padding = 0, this.framesize = 0, this.frameNum = 0, this.lame_allocated_gfp = 0, this.internal_flags = null;
  }

  function x() {
    this.linprebuf = s(2 * d.MAX_ORDER), this.linpre = 0, this.lstepbuf = s(d.MAX_SAMPLES_PER_WINDOW + d.MAX_ORDER), this.lstep = 0, this.loutbuf = s(d.MAX_SAMPLES_PER_WINDOW + d.MAX_ORDER), this.lout = 0, this.rinprebuf = s(2 * d.MAX_ORDER), this.rinpre = 0, this.rstepbuf = s(d.MAX_SAMPLES_PER_WINDOW + d.MAX_ORDER), this.rstep = 0, this.routbuf = s(d.MAX_SAMPLES_PER_WINDOW + d.MAX_ORDER), this.rout = 0, this.sampleWindow = 0, this.totsamp = 0, this.lsum = 0, this.rsum = 0, this.freqindex = 0, this.first = 0, this.A = t(0 | d.STEPS_per_dB * d.MAX_dB), this.B = t(0 | d.STEPS_per_dB * d.MAX_dB);
  }

  function y(e) {
    var a = e;
    this.quantize = a, this.iteration_loop = function (e, a, n, r) {
      var _,
          i = e.internal_flags,
          o = s(L.SFBMAX),
          l = s(576),
          f = t(2),
          c = 0,
          h = i.l3_side,
          u = new w(c);

      this.quantize.rv.ResvFrameBegin(e, u), c = u.bits;

      for (var b = 0; b < i.mode_gr; b++) {
        _ = this.quantize.qupvt.on_pe(e, a, f, c, b, b), i.mode_ext == Y.MPG_MD_MS_LR && (this.quantize.ms_convert(i.l3_side, b), this.quantize.qupvt.reduce_side(f, n[b], c, _));

        for (var m = 0; m < i.channels_out; m++) {
          var p,
              d,
              v = h.tt[b][m];
          v.block_type != Y.SHORT_TYPE ? (p = 0, d = i.PSY.mask_adjust - p) : (p = 0, d = i.PSY.mask_adjust_short - p), i.masking_lower = Math.pow(10, .1 * d), this.quantize.init_outer_loop(i, v), this.quantize.init_xrpow(i, v, l) && (this.quantize.qupvt.calc_xmin(e, r[b][m], v, o), this.quantize.outer_loop(e, v, o, l, m, f[m])), this.quantize.iteration_finish_one(i, b, m);
        }
      }

      this.quantize.rv.ResvFrameEnd(i, c);
    };
  }

  function P() {
    this.useAdjust = 0, this.aaSensitivityP = 0, this.adjust = 0, this.adjustLimit = 0, this.decay = 0, this.floor = 0, this.l = s(Y.SBMAX_l), this.s = s(Y.SBMAX_s), this.psfb21 = s(Y.PSFB21), this.psfb12 = s(Y.PSFB12), this.cb_l = s(Y.CBANDS), this.cb_s = s(Y.CBANDS), this.eql_w = s(Y.BLKSIZE / 2);
  }

  function I(e, a, s, n) {
    this.l = t(1 + Y.SBMAX_l), this.s = t(1 + Y.SBMAX_s), this.psfb21 = t(1 + Y.PSFB21), this.psfb12 = t(1 + Y.PSFB12);
    var r = this.l,
        _ = this.s;
    4 == arguments.length && (this.arrL = arguments[0], this.arrS = arguments[1], this.arr21 = arguments[2], this.arr12 = arguments[3], f.arraycopy(this.arrL, 0, r, 0, Math.min(this.arrL.length, this.l.length)), f.arraycopy(this.arrS, 0, _, 0, Math.min(this.arrS.length, this.s.length)), f.arraycopy(this.arr21, 0, this.psfb21, 0, Math.min(this.arr21.length, this.psfb21.length)), f.arraycopy(this.arr12, 0, this.psfb12, 0, Math.min(this.arr12.length, this.psfb12.length)));
  }

  function H() {
    var e = null,
        a = null,
        n = null;
    this.setModules = function (t, s, r) {
      e = t, a = s, n = r;
    }, this.IPOW20 = function (e) {
      return h[e];
    };
    var r = H.IXMAX_VAL + 2,
        _ = H.Q_MAX,
        i = H.Q_MAX2,
        o = (100);
    this.nr_of_sfb_block = [[[6, 5, 5, 5], [9, 9, 9, 9], [6, 9, 9, 9]], [[6, 5, 7, 3], [9, 9, 12, 6], [6, 9, 12, 6]], [[11, 10, 0, 0], [18, 18, 0, 0], [15, 18, 0, 0]], [[7, 7, 7, 0], [12, 12, 12, 0], [6, 15, 12, 0]], [[6, 6, 6, 3], [12, 9, 9, 6], [6, 12, 9, 6]], [[8, 8, 5, 0], [15, 12, 9, 0], [6, 18, 9, 0]]];
    var l = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 3, 2, 0];
    this.pretab = l, this.sfBandIndex = [new I([0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96, 116, 140, 168, 200, 238, 284, 336, 396, 464, 522, 576], [0, 4, 8, 12, 18, 24, 32, 42, 56, 74, 100, 132, 174, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new I([0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96, 114, 136, 162, 194, 232, 278, 332, 394, 464, 540, 576], [0, 4, 8, 12, 18, 26, 36, 48, 62, 80, 104, 136, 180, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new I([0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96, 116, 140, 168, 200, 238, 284, 336, 396, 464, 522, 576], [0, 4, 8, 12, 18, 26, 36, 48, 62, 80, 104, 134, 174, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new I([0, 4, 8, 12, 16, 20, 24, 30, 36, 44, 52, 62, 74, 90, 110, 134, 162, 196, 238, 288, 342, 418, 576], [0, 4, 8, 12, 16, 22, 30, 40, 52, 66, 84, 106, 136, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new I([0, 4, 8, 12, 16, 20, 24, 30, 36, 42, 50, 60, 72, 88, 106, 128, 156, 190, 230, 276, 330, 384, 576], [0, 4, 8, 12, 16, 22, 28, 38, 50, 64, 80, 100, 126, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new I([0, 4, 8, 12, 16, 20, 24, 30, 36, 44, 54, 66, 82, 102, 126, 156, 194, 240, 296, 364, 448, 550, 576], [0, 4, 8, 12, 16, 22, 30, 42, 58, 78, 104, 138, 180, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new I([0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96, 116, 140, 168, 200, 238, 284, 336, 396, 464, 522, 576], [0, 4, 8, 12, 18, 26, 36, 48, 62, 80, 104, 134, 174, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new I([0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96, 116, 140, 168, 200, 238, 284, 336, 396, 464, 522, 576], [0, 4, 8, 12, 18, 26, 36, 48, 62, 80, 104, 134, 174, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]), new I([0, 12, 24, 36, 48, 60, 72, 88, 108, 132, 160, 192, 232, 280, 336, 400, 476, 566, 568, 570, 572, 574, 576], [0, 8, 16, 24, 36, 52, 72, 96, 124, 160, 162, 164, 166, 192], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0])];
    var f = s(_ + i + 1),
        h = s(_),
        m = s(r),
        p = s(r);

    function d(e, a) {
      var t = n.ATHformula(a, e);
      return t -= o, t = Math.pow(10, t / 10 + e.ATHlower);
    }

    function v(e) {
      this.s = e;
    }

    this.adj43 = p, this.iteration_init = function (a) {
      var t,
          s = a.internal_flags,
          n = s.l3_side;

      if (0 == s.iteration_init_init) {
        for (s.iteration_init_init = 1, n.main_data_begin = 0, function (e) {
          for (var a = e.internal_flags.ATH.l, t = e.internal_flags.ATH.psfb21, s = e.internal_flags.ATH.s, n = e.internal_flags.ATH.psfb12, r = e.internal_flags, _ = e.out_samplerate, i = 0; i < Y.SBMAX_l; i++) {
            var o = r.scalefac_band.l[i],
                l = r.scalefac_band.l[i + 1];
            a[i] = u.MAX_VALUE;

            for (var f = o; f < l; f++) {
              var c = d(e, f * _ / 1152);
              a[i] = Math.min(a[i], c);
            }
          }

          for (i = 0; i < Y.PSFB21; i++) for (o = r.scalefac_band.psfb21[i], l = r.scalefac_band.psfb21[i + 1], t[i] = u.MAX_VALUE, f = o; f < l; f++) c = d(e, f * _ / 1152), t[i] = Math.min(t[i], c);

          for (i = 0; i < Y.SBMAX_s; i++) {
            for (o = r.scalefac_band.s[i], l = r.scalefac_band.s[i + 1], s[i] = u.MAX_VALUE, f = o; f < l; f++) c = d(e, f * _ / 384), s[i] = Math.min(s[i], c);

            s[i] *= r.scalefac_band.s[i + 1] - r.scalefac_band.s[i];
          }

          for (i = 0; i < Y.PSFB12; i++) {
            for (o = r.scalefac_band.psfb12[i], l = r.scalefac_band.psfb12[i + 1], n[i] = u.MAX_VALUE, f = o; f < l; f++) c = d(e, f * _ / 384), n[i] = Math.min(n[i], c);

            n[i] *= r.scalefac_band.s[13] - r.scalefac_band.s[12];
          }

          if (e.noATH) {
            for (i = 0; i < Y.SBMAX_l; i++) a[i] = 1e-20;

            for (i = 0; i < Y.PSFB21; i++) t[i] = 1e-20;

            for (i = 0; i < Y.SBMAX_s; i++) s[i] = 1e-20;

            for (i = 0; i < Y.PSFB12; i++) n[i] = 1e-20;
          }

          r.ATH.floor = 10 * Math.log10(d(e, -1));
        }(a), m[0] = 0, t = 1; t < r; t++) m[t] = Math.pow(t, 4 / 3);

        for (t = 0; t < r - 1; t++) p[t] = t + 1 - Math.pow(.5 * (m[t] + m[t + 1]), .75);

        for (p[t] = .5, t = 0; t < _; t++) h[t] = Math.pow(2, -.1875 * (t - 210));

        for (t = 0; t <= _ + i; t++) f[t] = Math.pow(2, .25 * (t - 210 - i));

        var o, l, c, b;

        for (e.huffman_init(s), (t = a.exp_nspsytune >> 2 & 63) >= 32 && (t -= 64), o = Math.pow(10, t / 4 / 10), (t = a.exp_nspsytune >> 8 & 63) >= 32 && (t -= 64), l = Math.pow(10, t / 4 / 10), (t = a.exp_nspsytune >> 14 & 63) >= 32 && (t -= 64), c = Math.pow(10, t / 4 / 10), (t = a.exp_nspsytune >> 20 & 63) >= 32 && (t -= 64), b = c * Math.pow(10, t / 4 / 10), t = 0; t < Y.SBMAX_l; t++) {
          v = t <= 6 ? o : t <= 13 ? l : t <= 20 ? c : b, s.nsPsy.longfact[t] = v;
        }

        for (t = 0; t < Y.SBMAX_s; t++) {
          var v;
          v = t <= 5 ? o : t <= 10 ? l : t <= 11 ? c : b, s.nsPsy.shortfact[t] = v;
        }
      }
    }, this.on_pe = function (e, s, n, r, _, i) {
      var o,
          l,
          f = e.internal_flags,
          c = 0,
          h = t(2),
          u = new w(c),
          b = a.ResvMaxBits(e, r, u, i),
          m = (c = u.bits) + b;

      for (m > G.MAX_BITS_PER_GRANULE && (m = G.MAX_BITS_PER_GRANULE), o = 0, l = 0; l < f.channels_out; ++l) n[l] = Math.min(G.MAX_BITS_PER_CHANNEL, c / f.channels_out), h[l] = 0 | n[l] * s[_][l] / 700 - n[l], h[l] > 3 * r / 4 && (h[l] = 3 * r / 4), h[l] < 0 && (h[l] = 0), h[l] + n[l] > G.MAX_BITS_PER_CHANNEL && (h[l] = Math.max(0, G.MAX_BITS_PER_CHANNEL - n[l])), o += h[l];

      if (o > b) for (l = 0; l < f.channels_out; ++l) h[l] = b * h[l] / o;

      for (l = 0; l < f.channels_out; ++l) n[l] += h[l], b -= h[l];

      for (o = 0, l = 0; l < f.channels_out; ++l) o += n[l];

      if (o > G.MAX_BITS_PER_GRANULE) {
        for (l = 0; l < f.channels_out; ++l) n[l] *= G.MAX_BITS_PER_GRANULE, n[l] /= o, n[l];
      }

      return m;
    }, this.reduce_side = function (e, a, t, s) {
      var n = .33 * (.5 - a) / .5;
      n < 0 && (n = 0), n > .5 && (n = .5);
      var r = 0 | .5 * n * (e[0] + e[1]);
      r > G.MAX_BITS_PER_CHANNEL - e[0] && (r = G.MAX_BITS_PER_CHANNEL - e[0]), r < 0 && (r = 0), e[1] >= 125 && (e[1] - r > 125 ? (e[0] < t && (e[0] += r), e[1] -= r) : (e[0] += e[1] - 125, e[1] = 125)), (r = e[0] + e[1]) > s && (e[0] = s * e[0] / r, e[1] = s * e[1] / r);
    }, this.athAdjust = function (e, a, t) {
      var s = 90.30873362,
          n = c.FAST_LOG10_X(a, 10),
          r = e * e,
          _ = 0;
      return n -= t, r > 1e-20 && (_ = 1 + c.FAST_LOG10_X(r, 10 / s)), _ < 0 && (_ = 0), n *= _, n += t + s - 94.82444863, Math.pow(10, .1 * n);
    }, this.calc_xmin = function (e, a, t, s) {
      var n,
          r = 0,
          _ = e.internal_flags,
          i = 0,
          o = 0,
          l = _.ATH,
          f = t.xr,
          c = e.VBR == b.vbr_mtrh ? 1 : 0,
          h = _.masking_lower;

      for (e.VBR != b.vbr_mtrh && e.VBR != b.vbr_mt || (h = 1), n = 0; n < t.psy_lmax; n++) {
        M = (S = e.VBR == b.vbr_rh || e.VBR == b.vbr_mtrh ? athAdjust(l.adjust, l.l[n], l.floor) : l.adjust * l.l[n]) / (d = t.width[n]), A = 2.220446049250313e-16, E = d >> 1, T = 0;

        do {
          T += k = f[i] * f[i], A += k < M ? k : M, T += x = f[++i] * f[i], A += x < M ? x : M, i++;
        } while (--E > 0);

        if (T > S && o++, n == Y.SBPSY_l) A < (w = S * _.nsPsy.longfact[n]) && (A = w);
        if (0 != c && (S = A), !e.ATHonly) if ((B = a.en.l[n]) > 0) w = T * a.thm.l[n] * h / B, 0 != c && (w *= _.nsPsy.longfact[n]), S < w && (S = w);
        s[r++] = 0 != c ? S : S * _.nsPsy.longfact[n];
      }

      var u = 575;
      if (t.block_type != Y.SHORT_TYPE) for (var m = 576; 0 != m-- && R.EQ(f[m], 0);) u = m;
      t.max_nonzero_coeff = u;

      for (var p = t.sfb_smin; n < t.psymax; p++, n += 3) {
        var d, v, g;

        for (g = e.VBR == b.vbr_rh || e.VBR == b.vbr_mtrh ? athAdjust(l.adjust, l.s[p], l.floor) : l.adjust * l.s[p], d = t.width[n], v = 0; v < 3; v++) {
          var S,
              M,
              A,
              B,
              w,
              T = 0,
              E = d >> 1;
          M = g / d, A = 2.220446049250313e-16;

          do {
            var k, x;
            T += k = f[i] * f[i], A += k < M ? k : M, T += x = f[++i] * f[i], A += x < M ? x : M, i++;
          } while (--E > 0);

          if (T > g && o++, p == Y.SBPSY_s) A < (w = g * _.nsPsy.shortfact[p]) && (A = w);
          if (S = 0 != c ? A : g, !e.ATHonly && !e.ATHshort) if ((B = a.en.s[p][v]) > 0) w = T * a.thm.s[p][v] * h / B, 0 != c && (w *= _.nsPsy.shortfact[p]), S < w && (S = w);
          s[r++] = 0 != c ? S : S * _.nsPsy.shortfact[p];
        }

        e.useTemporal && (s[r - 3] > s[r - 3 + 1] && (s[r - 3 + 1] += (s[r - 3] - s[r - 3 + 1]) * _.decay), s[r - 3 + 1] > s[r - 3 + 2] && (s[r - 3 + 2] += (s[r - 3 + 1] - s[r - 3 + 2]) * _.decay));
      }

      return o;
    }, this.calc_noise_core = function (e, a, t, n) {
      var r = 0,
          _ = a.s,
          i = e.l3_enc;
      if (_ > e.count1) for (; 0 != t--;) {
        l = e.xr[_], _++, r += l * l, l = e.xr[_], _++, r += l * l;
      } else if (_ > e.big_values) {
        var o = s(2);

        for (o[0] = 0, o[1] = n; 0 != t--;) {
          l = Math.abs(e.xr[_]) - o[i[_]], _++, r += l * l, l = Math.abs(e.xr[_]) - o[i[_]], _++, r += l * l;
        }
      } else for (; 0 != t--;) {
        var l;
        l = Math.abs(e.xr[_]) - m[i[_]] * n, _++, r += l * l, l = Math.abs(e.xr[_]) - m[i[_]] * n, _++, r += l * l;
      }
      return a.s = _, r;
    }, this.calc_noise = function (e, a, t, s, n) {
      var r,
          _,
          i = 0,
          o = 0,
          h = 0,
          u = 0,
          b = 0,
          m = -20,
          p = 0,
          d = e.scalefac,
          g = 0;

      for (s.over_SSD = 0, r = 0; r < e.psymax; r++) {
        var S,
            R = e.global_gain - (d[g++] + (0 != e.preflag ? l[r] : 0) << e.scalefac_scale + 1) - 8 * e.subblock_gain[e.window[r]],
            M = 0;
        if (null != n && n.step[r] == R) M = n.noise[r], p += e.width[r], t[i++] = M / a[o++], M = n.noise_log[r];else {
          var A,
              B = f[R + H.Q_MAX2];
          if (_ = e.width[r] >> 1, p + e.width[r] > e.max_nonzero_coeff) _ = (A = e.max_nonzero_coeff - p + 1) > 0 ? A >> 1 : 0;
          var w = new v(p);
          M = this.calc_noise_core(e, w, _, B), p = w.s, null != n && (n.step[r] = R, n.noise[r] = M), M = t[i++] = M / a[o++], M = c.FAST_LOG10(Math.max(M, 1e-20)), null != n && (n.noise_log[r] = M);
        }
        if (null != n && (n.global_gain = e.global_gain), b += M, M > 0) S = Math.max(0 | 10 * M + .5, 1), s.over_SSD += S * S, h++, u += M;
        m = Math.max(m, M);
      }

      return s.over_count = h, s.tot_noise = b, s.over_noise = u, s.max_noise = m, h;
    }, this.set_pinfo = function (e, a, t, n, r) {
      var _,
          i,
          o,
          f,
          c,
          h = e.internal_flags,
          u = 0 == a.scalefac_scale ? .5 : 1,
          b = a.scalefac,
          m = s(L.SFBMAX),
          p = s(L.SFBMAX),
          d = new E();

      calc_xmin(e, t, a, m), calc_noise(a, m, p, d, null);
      var v = 0;

      for (i = a.sfb_lmax, a.block_type != Y.SHORT_TYPE && 0 == a.mixed_block_flag && (i = 22), _ = 0; _ < i; _++) {
        var g = h.scalefac_band.l[_],
            S = (R = h.scalefac_band.l[_ + 1]) - g;

        for (f = 0; v < R; v++) f += a.xr[v] * a.xr[v];

        f /= S, c = 1e15, h.pinfo.en[n][r][_] = c * f, h.pinfo.xfsf[n][r][_] = c * m[_] * p[_] / S, t.en.l[_] > 0 && !e.ATHonly ? f /= t.en.l[_] : f = 0, h.pinfo.thr[n][r][_] = c * Math.max(f * t.thm.l[_], h.ATH.l[_]), h.pinfo.LAMEsfb[n][r][_] = 0, 0 != a.preflag && _ >= 11 && (h.pinfo.LAMEsfb[n][r][_] = -u * l[_]), _ < Y.SBPSY_l && (h.pinfo.LAMEsfb[n][r][_] -= u * b[_]);
      }

      if (a.block_type == Y.SHORT_TYPE) for (i = _, _ = a.sfb_smin; _ < Y.SBMAX_s; _++) {
        g = h.scalefac_band.s[_], S = (R = h.scalefac_band.s[_ + 1]) - g;

        for (var R, M = 0; M < 3; M++) {
          for (f = 0, o = g; o < R; o++) f += a.xr[v] * a.xr[v], v++;

          f = Math.max(f / S, 1e-20), c = 1e15, h.pinfo.en_s[n][r][3 * _ + M] = c * f, h.pinfo.xfsf_s[n][r][3 * _ + M] = c * m[i] * p[i] / S, t.en.s[_][M] > 0 ? f /= t.en.s[_][M] : f = 0, (e.ATHonly || e.ATHshort) && (f = 0), h.pinfo.thr_s[n][r][3 * _ + M] = c * Math.max(f * t.thm.s[_][M], h.ATH.s[_]), h.pinfo.LAMEsfb_s[n][r][3 * _ + M] = -2 * a.subblock_gain[M], _ < Y.SBPSY_s && (h.pinfo.LAMEsfb_s[n][r][3 * _ + M] -= u * b[i]), i++;
        }
      }
      h.pinfo.LAMEqss[n][r] = a.global_gain, h.pinfo.LAMEmainbits[n][r] = a.part2_3_length + a.part2_length, h.pinfo.LAMEsfbits[n][r] = a.part2_length, h.pinfo.over[n][r] = d.over_count, h.pinfo.max_noise[n][r] = 10 * d.max_noise, h.pinfo.over_noise[n][r] = 10 * d.over_noise, h.pinfo.tot_noise[n][r] = 10 * d.tot_noise, h.pinfo.over_SSD[n][r] = d.over_SSD;
    };
  }

  function V() {
    this.global_gain = 0, this.sfb_count1 = 0, this.step = t(39), this.noise = s(39), this.noise_log = s(39);
  }

  function O() {
    this.xr = s(576), this.l3_enc = t(576), this.scalefac = t(L.SFBMAX), this.xrpow_max = 0, this.part2_3_length = 0, this.big_values = 0, this.count1 = 0, this.global_gain = 0, this.scalefac_compress = 0, this.block_type = 0, this.mixed_block_flag = 0, this.table_select = t(3), this.subblock_gain = t(4), this.region0_count = 0, this.region1_count = 0, this.preflag = 0, this.scalefac_scale = 0, this.count1table_select = 0, this.part2_length = 0, this.sfb_lmax = 0, this.sfb_smin = 0, this.psy_lmax = 0, this.sfbmax = 0, this.psymax = 0, this.sfbdivide = 0, this.width = t(L.SFBMAX), this.window = t(L.SFBMAX), this.count1bits = 0, this.sfb_partition_table = null, this.slen = t(4), this.max_nonzero_coeff = 0;
    var e = this;

    function a(e) {
      return new Int32Array(e);
    }

    this.assign = function (t) {
      var s;
      e.xr = (s = t.xr, new Float32Array(s)), e.l3_enc = a(t.l3_enc), e.scalefac = a(t.scalefac), e.xrpow_max = t.xrpow_max, e.part2_3_length = t.part2_3_length, e.big_values = t.big_values, e.count1 = t.count1, e.global_gain = t.global_gain, e.scalefac_compress = t.scalefac_compress, e.block_type = t.block_type, e.mixed_block_flag = t.mixed_block_flag, e.table_select = a(t.table_select), e.subblock_gain = a(t.subblock_gain), e.region0_count = t.region0_count, e.region1_count = t.region1_count, e.preflag = t.preflag, e.scalefac_scale = t.scalefac_scale, e.count1table_select = t.count1table_select, e.part2_length = t.part2_length, e.sfb_lmax = t.sfb_lmax, e.sfb_smin = t.sfb_smin, e.psy_lmax = t.psy_lmax, e.sfbmax = t.sfbmax, e.psymax = t.psymax, e.sfbdivide = t.sfbdivide, e.width = a(t.width), e.window = a(t.window), e.count1bits = t.count1bits, e.sfb_partition_table = t.sfb_partition_table.slice(0), e.slen = a(t.slen), e.max_nonzero_coeff = t.max_nonzero_coeff;
    };
  }

  B.t1HB = [1, 1, 1, 0], B.t2HB = [1, 2, 1, 3, 1, 1, 3, 2, 0], B.t3HB = [3, 2, 1, 1, 1, 1, 3, 2, 0], B.t5HB = [1, 2, 6, 5, 3, 1, 4, 4, 7, 5, 7, 1, 6, 1, 1, 0], B.t6HB = [7, 3, 5, 1, 6, 2, 3, 2, 5, 4, 4, 1, 3, 3, 2, 0], B.t7HB = [1, 2, 10, 19, 16, 10, 3, 3, 7, 10, 5, 3, 11, 4, 13, 17, 8, 4, 12, 11, 18, 15, 11, 2, 7, 6, 9, 14, 3, 1, 6, 4, 5, 3, 2, 0], B.t8HB = [3, 4, 6, 18, 12, 5, 5, 1, 2, 16, 9, 3, 7, 3, 5, 14, 7, 3, 19, 17, 15, 13, 10, 4, 13, 5, 8, 11, 5, 1, 12, 4, 4, 1, 1, 0], B.t9HB = [7, 5, 9, 14, 15, 7, 6, 4, 5, 5, 6, 7, 7, 6, 8, 8, 8, 5, 15, 6, 9, 10, 5, 1, 11, 7, 9, 6, 4, 1, 14, 4, 6, 2, 6, 0], B.t10HB = [1, 2, 10, 23, 35, 30, 12, 17, 3, 3, 8, 12, 18, 21, 12, 7, 11, 9, 15, 21, 32, 40, 19, 6, 14, 13, 22, 34, 46, 23, 18, 7, 20, 19, 33, 47, 27, 22, 9, 3, 31, 22, 41, 26, 21, 20, 5, 3, 14, 13, 10, 11, 16, 6, 5, 1, 9, 8, 7, 8, 4, 4, 2, 0], B.t11HB = [3, 4, 10, 24, 34, 33, 21, 15, 5, 3, 4, 10, 32, 17, 11, 10, 11, 7, 13, 18, 30, 31, 20, 5, 25, 11, 19, 59, 27, 18, 12, 5, 35, 33, 31, 58, 30, 16, 7, 5, 28, 26, 32, 19, 17, 15, 8, 14, 14, 12, 9, 13, 14, 9, 4, 1, 11, 4, 6, 6, 6, 3, 2, 0], B.t12HB = [9, 6, 16, 33, 41, 39, 38, 26, 7, 5, 6, 9, 23, 16, 26, 11, 17, 7, 11, 14, 21, 30, 10, 7, 17, 10, 15, 12, 18, 28, 14, 5, 32, 13, 22, 19, 18, 16, 9, 5, 40, 17, 31, 29, 17, 13, 4, 2, 27, 12, 11, 15, 10, 7, 4, 1, 27, 12, 8, 12, 6, 3, 1, 0], B.t13HB = [1, 5, 14, 21, 34, 51, 46, 71, 42, 52, 68, 52, 67, 44, 43, 19, 3, 4, 12, 19, 31, 26, 44, 33, 31, 24, 32, 24, 31, 35, 22, 14, 15, 13, 23, 36, 59, 49, 77, 65, 29, 40, 30, 40, 27, 33, 42, 16, 22, 20, 37, 61, 56, 79, 73, 64, 43, 76, 56, 37, 26, 31, 25, 14, 35, 16, 60, 57, 97, 75, 114, 91, 54, 73, 55, 41, 48, 53, 23, 24, 58, 27, 50, 96, 76, 70, 93, 84, 77, 58, 79, 29, 74, 49, 41, 17, 47, 45, 78, 74, 115, 94, 90, 79, 69, 83, 71, 50, 59, 38, 36, 15, 72, 34, 56, 95, 92, 85, 91, 90, 86, 73, 77, 65, 51, 44, 43, 42, 43, 20, 30, 44, 55, 78, 72, 87, 78, 61, 46, 54, 37, 30, 20, 16, 53, 25, 41, 37, 44, 59, 54, 81, 66, 76, 57, 54, 37, 18, 39, 11, 35, 33, 31, 57, 42, 82, 72, 80, 47, 58, 55, 21, 22, 26, 38, 22, 53, 25, 23, 38, 70, 60, 51, 36, 55, 26, 34, 23, 27, 14, 9, 7, 34, 32, 28, 39, 49, 75, 30, 52, 48, 40, 52, 28, 18, 17, 9, 5, 45, 21, 34, 64, 56, 50, 49, 45, 31, 19, 12, 15, 10, 7, 6, 3, 48, 23, 20, 39, 36, 35, 53, 21, 16, 23, 13, 10, 6, 1, 4, 2, 16, 15, 17, 27, 25, 20, 29, 11, 17, 12, 16, 8, 1, 1, 0, 1], B.t15HB = [7, 12, 18, 53, 47, 76, 124, 108, 89, 123, 108, 119, 107, 81, 122, 63, 13, 5, 16, 27, 46, 36, 61, 51, 42, 70, 52, 83, 65, 41, 59, 36, 19, 17, 15, 24, 41, 34, 59, 48, 40, 64, 50, 78, 62, 80, 56, 33, 29, 28, 25, 43, 39, 63, 55, 93, 76, 59, 93, 72, 54, 75, 50, 29, 52, 22, 42, 40, 67, 57, 95, 79, 72, 57, 89, 69, 49, 66, 46, 27, 77, 37, 35, 66, 58, 52, 91, 74, 62, 48, 79, 63, 90, 62, 40, 38, 125, 32, 60, 56, 50, 92, 78, 65, 55, 87, 71, 51, 73, 51, 70, 30, 109, 53, 49, 94, 88, 75, 66, 122, 91, 73, 56, 42, 64, 44, 21, 25, 90, 43, 41, 77, 73, 63, 56, 92, 77, 66, 47, 67, 48, 53, 36, 20, 71, 34, 67, 60, 58, 49, 88, 76, 67, 106, 71, 54, 38, 39, 23, 15, 109, 53, 51, 47, 90, 82, 58, 57, 48, 72, 57, 41, 23, 27, 62, 9, 86, 42, 40, 37, 70, 64, 52, 43, 70, 55, 42, 25, 29, 18, 11, 11, 118, 68, 30, 55, 50, 46, 74, 65, 49, 39, 24, 16, 22, 13, 14, 7, 91, 44, 39, 38, 34, 63, 52, 45, 31, 52, 28, 19, 14, 8, 9, 3, 123, 60, 58, 53, 47, 43, 32, 22, 37, 24, 17, 12, 15, 10, 2, 1, 71, 37, 34, 30, 28, 20, 17, 26, 21, 16, 10, 6, 8, 6, 2, 0], B.t16HB = [1, 5, 14, 44, 74, 63, 110, 93, 172, 149, 138, 242, 225, 195, 376, 17, 3, 4, 12, 20, 35, 62, 53, 47, 83, 75, 68, 119, 201, 107, 207, 9, 15, 13, 23, 38, 67, 58, 103, 90, 161, 72, 127, 117, 110, 209, 206, 16, 45, 21, 39, 69, 64, 114, 99, 87, 158, 140, 252, 212, 199, 387, 365, 26, 75, 36, 68, 65, 115, 101, 179, 164, 155, 264, 246, 226, 395, 382, 362, 9, 66, 30, 59, 56, 102, 185, 173, 265, 142, 253, 232, 400, 388, 378, 445, 16, 111, 54, 52, 100, 184, 178, 160, 133, 257, 244, 228, 217, 385, 366, 715, 10, 98, 48, 91, 88, 165, 157, 148, 261, 248, 407, 397, 372, 380, 889, 884, 8, 85, 84, 81, 159, 156, 143, 260, 249, 427, 401, 392, 383, 727, 713, 708, 7, 154, 76, 73, 141, 131, 256, 245, 426, 406, 394, 384, 735, 359, 710, 352, 11, 139, 129, 67, 125, 247, 233, 229, 219, 393, 743, 737, 720, 885, 882, 439, 4, 243, 120, 118, 115, 227, 223, 396, 746, 742, 736, 721, 712, 706, 223, 436, 6, 202, 224, 222, 218, 216, 389, 386, 381, 364, 888, 443, 707, 440, 437, 1728, 4, 747, 211, 210, 208, 370, 379, 734, 723, 714, 1735, 883, 877, 876, 3459, 865, 2, 377, 369, 102, 187, 726, 722, 358, 711, 709, 866, 1734, 871, 3458, 870, 434, 0, 12, 10, 7, 11, 10, 17, 11, 9, 13, 12, 10, 7, 5, 3, 1, 3], B.t24HB = [15, 13, 46, 80, 146, 262, 248, 434, 426, 669, 653, 649, 621, 517, 1032, 88, 14, 12, 21, 38, 71, 130, 122, 216, 209, 198, 327, 345, 319, 297, 279, 42, 47, 22, 41, 74, 68, 128, 120, 221, 207, 194, 182, 340, 315, 295, 541, 18, 81, 39, 75, 70, 134, 125, 116, 220, 204, 190, 178, 325, 311, 293, 271, 16, 147, 72, 69, 135, 127, 118, 112, 210, 200, 188, 352, 323, 306, 285, 540, 14, 263, 66, 129, 126, 119, 114, 214, 202, 192, 180, 341, 317, 301, 281, 262, 12, 249, 123, 121, 117, 113, 215, 206, 195, 185, 347, 330, 308, 291, 272, 520, 10, 435, 115, 111, 109, 211, 203, 196, 187, 353, 332, 313, 298, 283, 531, 381, 17, 427, 212, 208, 205, 201, 193, 186, 177, 169, 320, 303, 286, 268, 514, 377, 16, 335, 199, 197, 191, 189, 181, 174, 333, 321, 305, 289, 275, 521, 379, 371, 11, 668, 184, 183, 179, 175, 344, 331, 314, 304, 290, 277, 530, 383, 373, 366, 10, 652, 346, 171, 168, 164, 318, 309, 299, 287, 276, 263, 513, 375, 368, 362, 6, 648, 322, 316, 312, 307, 302, 292, 284, 269, 261, 512, 376, 370, 364, 359, 4, 620, 300, 296, 294, 288, 282, 273, 266, 515, 380, 374, 369, 365, 361, 357, 2, 1033, 280, 278, 274, 267, 264, 259, 382, 378, 372, 367, 363, 360, 358, 356, 0, 43, 20, 19, 17, 15, 13, 11, 9, 7, 6, 4, 7, 5, 3, 1, 3], B.t32HB = [1, 10, 8, 20, 12, 20, 16, 32, 14, 12, 24, 0, 28, 16, 24, 16], B.t33HB = [15, 28, 26, 48, 22, 40, 36, 64, 14, 24, 20, 32, 12, 16, 8, 0], B.t1l = [1, 4, 3, 5], B.t2l = [1, 4, 7, 4, 5, 7, 6, 7, 8], B.t3l = [2, 3, 7, 4, 4, 7, 6, 7, 8], B.t5l = [1, 4, 7, 8, 4, 5, 8, 9, 7, 8, 9, 10, 8, 8, 9, 10], B.t6l = [3, 4, 6, 8, 4, 4, 6, 7, 5, 6, 7, 8, 7, 7, 8, 9], B.t7l = [1, 4, 7, 9, 9, 10, 4, 6, 8, 9, 9, 10, 7, 7, 9, 10, 10, 11, 8, 9, 10, 11, 11, 11, 8, 9, 10, 11, 11, 12, 9, 10, 11, 12, 12, 12], B.t8l = [2, 4, 7, 9, 9, 10, 4, 4, 6, 10, 10, 10, 7, 6, 8, 10, 10, 11, 9, 10, 10, 11, 11, 12, 9, 9, 10, 11, 12, 12, 10, 10, 11, 11, 13, 13], B.t9l = [3, 4, 6, 7, 9, 10, 4, 5, 6, 7, 8, 10, 5, 6, 7, 8, 9, 10, 7, 7, 8, 9, 9, 10, 8, 8, 9, 9, 10, 11, 9, 9, 10, 10, 11, 11], B.t10l = [1, 4, 7, 9, 10, 10, 10, 11, 4, 6, 8, 9, 10, 11, 10, 10, 7, 8, 9, 10, 11, 12, 11, 11, 8, 9, 10, 11, 12, 12, 11, 12, 9, 10, 11, 12, 12, 12, 12, 12, 10, 11, 12, 12, 13, 13, 12, 13, 9, 10, 11, 12, 12, 12, 13, 13, 10, 10, 11, 12, 12, 13, 13, 13], B.t11l = [2, 4, 6, 8, 9, 10, 9, 10, 4, 5, 6, 8, 10, 10, 9, 10, 6, 7, 8, 9, 10, 11, 10, 10, 8, 8, 9, 11, 10, 12, 10, 11, 9, 10, 10, 11, 11, 12, 11, 12, 9, 10, 11, 12, 12, 13, 12, 13, 9, 9, 9, 10, 11, 12, 12, 12, 9, 9, 10, 11, 12, 12, 12, 12], B.t12l = [4, 4, 6, 8, 9, 10, 10, 10, 4, 5, 6, 7, 9, 9, 10, 10, 6, 6, 7, 8, 9, 10, 9, 10, 7, 7, 8, 8, 9, 10, 10, 10, 8, 8, 9, 9, 10, 10, 10, 11, 9, 9, 10, 10, 10, 11, 10, 11, 9, 9, 9, 10, 10, 11, 11, 12, 10, 10, 10, 11, 11, 11, 11, 12], B.t13l = [1, 5, 7, 8, 9, 10, 10, 11, 10, 11, 12, 12, 13, 13, 14, 14, 4, 6, 8, 9, 10, 10, 11, 11, 11, 11, 12, 12, 13, 14, 14, 14, 7, 8, 9, 10, 11, 11, 12, 12, 11, 12, 12, 13, 13, 14, 15, 15, 8, 9, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 15, 15, 9, 9, 11, 11, 12, 12, 13, 13, 12, 13, 13, 14, 14, 15, 15, 16, 10, 10, 11, 12, 12, 12, 13, 13, 13, 13, 14, 13, 15, 15, 16, 16, 10, 11, 12, 12, 13, 13, 13, 13, 13, 14, 14, 14, 15, 15, 16, 16, 11, 11, 12, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 16, 18, 18, 10, 10, 11, 12, 12, 13, 13, 14, 14, 14, 14, 15, 15, 16, 17, 17, 11, 11, 12, 12, 13, 13, 13, 15, 14, 15, 15, 16, 16, 16, 18, 17, 11, 12, 12, 13, 13, 14, 14, 15, 14, 15, 16, 15, 16, 17, 18, 19, 12, 12, 12, 13, 14, 14, 14, 14, 15, 15, 15, 16, 17, 17, 17, 18, 12, 13, 13, 14, 14, 15, 14, 15, 16, 16, 17, 17, 17, 18, 18, 18, 13, 13, 14, 15, 15, 15, 16, 16, 16, 16, 16, 17, 18, 17, 18, 18, 14, 14, 14, 15, 15, 15, 17, 16, 16, 19, 17, 17, 17, 19, 18, 18, 13, 14, 15, 16, 16, 16, 17, 16, 17, 17, 18, 18, 21, 20, 21, 18], B.t15l = [3, 5, 6, 8, 8, 9, 10, 10, 10, 11, 11, 12, 12, 12, 13, 14, 5, 5, 7, 8, 9, 9, 10, 10, 10, 11, 11, 12, 12, 12, 13, 13, 6, 7, 7, 8, 9, 9, 10, 10, 10, 11, 11, 12, 12, 13, 13, 13, 7, 8, 8, 9, 9, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 8, 8, 9, 9, 10, 10, 11, 11, 11, 11, 12, 12, 12, 13, 13, 13, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 13, 13, 13, 14, 10, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 13, 13, 14, 14, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 13, 14, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 14, 14, 14, 10, 10, 11, 11, 11, 11, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 13, 13, 14, 15, 14, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 15, 12, 12, 11, 12, 12, 12, 13, 13, 13, 13, 13, 13, 14, 14, 15, 15, 12, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 14, 15, 15, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 14, 15, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 15, 15, 15, 15], B.t16_5l = [1, 5, 7, 9, 10, 10, 11, 11, 12, 12, 12, 13, 13, 13, 14, 11, 4, 6, 8, 9, 10, 11, 11, 11, 12, 12, 12, 13, 14, 13, 14, 11, 7, 8, 9, 10, 11, 11, 12, 12, 13, 12, 13, 13, 13, 14, 14, 12, 9, 9, 10, 11, 11, 12, 12, 12, 13, 13, 14, 14, 14, 15, 15, 13, 10, 10, 11, 11, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 12, 10, 10, 11, 11, 12, 13, 13, 14, 13, 14, 14, 15, 15, 15, 16, 13, 11, 11, 11, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 16, 13, 11, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15, 15, 15, 17, 17, 13, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 13, 12, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 15, 16, 15, 14, 12, 13, 12, 13, 14, 14, 14, 14, 15, 16, 16, 16, 17, 17, 16, 13, 13, 13, 13, 13, 14, 14, 15, 16, 16, 16, 16, 16, 16, 15, 16, 14, 13, 14, 14, 14, 14, 15, 15, 15, 15, 17, 16, 16, 16, 16, 18, 14, 15, 14, 14, 14, 15, 15, 16, 16, 16, 18, 17, 17, 17, 19, 17, 14, 14, 15, 13, 14, 16, 16, 15, 16, 16, 17, 18, 17, 19, 17, 16, 14, 11, 11, 11, 12, 12, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 12], B.t16l = [1, 5, 7, 9, 10, 10, 11, 11, 12, 12, 12, 13, 13, 13, 14, 10, 4, 6, 8, 9, 10, 11, 11, 11, 12, 12, 12, 13, 14, 13, 14, 10, 7, 8, 9, 10, 11, 11, 12, 12, 13, 12, 13, 13, 13, 14, 14, 11, 9, 9, 10, 11, 11, 12, 12, 12, 13, 13, 14, 14, 14, 15, 15, 12, 10, 10, 11, 11, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 11, 10, 10, 11, 11, 12, 13, 13, 14, 13, 14, 14, 15, 15, 15, 16, 12, 11, 11, 11, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 16, 12, 11, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15, 15, 15, 17, 17, 12, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 12, 12, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 15, 16, 15, 13, 12, 13, 12, 13, 14, 14, 14, 14, 15, 16, 16, 16, 17, 17, 16, 12, 13, 13, 13, 13, 14, 14, 15, 16, 16, 16, 16, 16, 16, 15, 16, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 17, 16, 16, 16, 16, 18, 13, 15, 14, 14, 14, 15, 15, 16, 16, 16, 18, 17, 17, 17, 19, 17, 13, 14, 15, 13, 14, 16, 16, 15, 16, 16, 17, 18, 17, 19, 17, 16, 13, 10, 10, 10, 11, 11, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 10], B.t24l = [4, 5, 7, 8, 9, 10, 10, 11, 11, 12, 12, 12, 12, 12, 13, 10, 5, 6, 7, 8, 9, 10, 10, 11, 11, 11, 12, 12, 12, 12, 12, 10, 7, 7, 8, 9, 9, 10, 10, 11, 11, 11, 11, 12, 12, 12, 13, 9, 8, 8, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 12, 12, 12, 12, 13, 9, 10, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 9, 10, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 9, 11, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 10, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 13, 10, 12, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 10, 12, 12, 11, 11, 11, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 10, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 10, 13, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 6], B.t32l = [1, 5, 5, 7, 5, 8, 7, 9, 5, 7, 7, 9, 7, 9, 9, 10], B.t33l = [4, 5, 5, 6, 5, 6, 6, 7, 5, 6, 6, 7, 6, 7, 7, 8], B.ht = [new A(0, 0, null, null), new A(2, 0, B.t1HB, B.t1l), new A(3, 0, B.t2HB, B.t2l), new A(3, 0, B.t3HB, B.t3l), new A(0, 0, null, null), new A(4, 0, B.t5HB, B.t5l), new A(4, 0, B.t6HB, B.t6l), new A(6, 0, B.t7HB, B.t7l), new A(6, 0, B.t8HB, B.t8l), new A(6, 0, B.t9HB, B.t9l), new A(8, 0, B.t10HB, B.t10l), new A(8, 0, B.t11HB, B.t11l), new A(8, 0, B.t12HB, B.t12l), new A(16, 0, B.t13HB, B.t13l), new A(0, 0, null, B.t16_5l), new A(16, 0, B.t15HB, B.t15l), new A(1, 1, B.t16HB, B.t16l), new A(2, 3, B.t16HB, B.t16l), new A(3, 7, B.t16HB, B.t16l), new A(4, 15, B.t16HB, B.t16l), new A(6, 63, B.t16HB, B.t16l), new A(8, 255, B.t16HB, B.t16l), new A(10, 1023, B.t16HB, B.t16l), new A(13, 8191, B.t16HB, B.t16l), new A(4, 15, B.t24HB, B.t24l), new A(5, 31, B.t24HB, B.t24l), new A(6, 63, B.t24HB, B.t24l), new A(7, 127, B.t24HB, B.t24l), new A(8, 255, B.t24HB, B.t24l), new A(9, 511, B.t24HB, B.t24l), new A(11, 2047, B.t24HB, B.t24l), new A(13, 8191, B.t24HB, B.t24l), new A(0, 0, B.t32HB, B.t32l), new A(0, 0, B.t33HB, B.t33l)], B.largetbl = [65540, 327685, 458759, 589832, 655369, 655370, 720906, 720907, 786443, 786444, 786444, 851980, 851980, 851980, 917517, 655370, 262149, 393222, 524295, 589832, 655369, 720906, 720906, 720907, 786443, 786443, 786444, 851980, 917516, 851980, 917516, 655370, 458759, 524295, 589832, 655369, 720905, 720906, 786442, 786443, 851979, 786443, 851979, 851980, 851980, 917516, 917517, 720905, 589832, 589832, 655369, 720905, 720906, 786442, 786442, 786443, 851979, 851979, 917515, 917516, 917516, 983052, 983052, 786441, 655369, 655369, 720905, 720906, 786442, 786442, 851978, 851979, 851979, 917515, 917516, 917516, 983052, 983052, 983053, 720905, 655370, 655369, 720906, 720906, 786442, 851978, 851979, 917515, 851979, 917515, 917516, 983052, 983052, 983052, 1048588, 786441, 720906, 720906, 720906, 786442, 851978, 851979, 851979, 851979, 917515, 917516, 917516, 917516, 983052, 983052, 1048589, 786441, 720907, 720906, 786442, 786442, 851979, 851979, 851979, 917515, 917516, 983052, 983052, 983052, 983052, 1114125, 1114125, 786442, 720907, 786443, 786443, 851979, 851979, 851979, 917515, 917515, 983051, 983052, 983052, 983052, 1048588, 1048589, 1048589, 786442, 786443, 786443, 786443, 851979, 851979, 917515, 917515, 983052, 983052, 983052, 983052, 1048588, 983053, 1048589, 983053, 851978, 786444, 851979, 786443, 851979, 917515, 917516, 917516, 917516, 983052, 1048588, 1048588, 1048589, 1114125, 1114125, 1048589, 786442, 851980, 851980, 851979, 851979, 917515, 917516, 983052, 1048588, 1048588, 1048588, 1048588, 1048589, 1048589, 983053, 1048589, 851978, 851980, 917516, 917516, 917516, 917516, 983052, 983052, 983052, 983052, 1114124, 1048589, 1048589, 1048589, 1048589, 1179661, 851978, 983052, 917516, 917516, 917516, 983052, 983052, 1048588, 1048588, 1048589, 1179661, 1114125, 1114125, 1114125, 1245197, 1114125, 851978, 917517, 983052, 851980, 917516, 1048588, 1048588, 983052, 1048589, 1048589, 1114125, 1179661, 1114125, 1245197, 1114125, 1048589, 851978, 655369, 655369, 655369, 720905, 720905, 786441, 786441, 786441, 851977, 851977, 851977, 851978, 851978, 851978, 851978, 655366], B.table23 = [65538, 262147, 458759, 262148, 327684, 458759, 393222, 458759, 524296], B.table56 = [65539, 262148, 458758, 524296, 262148, 327684, 524294, 589831, 458757, 524294, 589831, 655368, 524295, 524295, 589832, 655369], B.bitrate_table = [[0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, -1], [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1], [0, 8, 16, 24, 32, 40, 48, 56, 64, -1, -1, -1, -1, -1, -1, -1]], B.samplerate_table = [[22050, 24e3, 16e3, -1], [44100, 48e3, 32e3, -1], [11025, 12e3, 8e3, -1]], B.scfsi_band = [0, 6, 11, 16, 21], H.Q_MAX = 257, H.Q_MAX2 = 116, H.LARGE_BITS = 1e5, H.IXMAX_VAL = 8206;
  var L = {};

  function N() {
    var e, a, t;
    this.rv = null, this.qupvt = null;
    var n,
        r = new T();

    function _(e) {
      this.ordinal = e;
    }

    function i(e) {
      for (var a = 0; a < e.sfbmax; a++) if (e.scalefac[a] + e.subblock_gain[e.window[a]] == 0) return !1;

      return !0;
    }

    function o(e, a, t, s, n) {
      var r;

      switch (e) {
        default:
        case 9:
          a.over_count > 0 ? (r = t.over_SSD <= a.over_SSD, t.over_SSD == a.over_SSD && (r = t.bits < a.bits)) : r = t.max_noise < 0 && 10 * t.max_noise + t.bits <= 10 * a.max_noise + a.bits;
          break;

        case 0:
          r = t.over_count < a.over_count || t.over_count == a.over_count && t.over_noise < a.over_noise || t.over_count == a.over_count && R.EQ(t.over_noise, a.over_noise) && t.tot_noise < a.tot_noise;
          break;

        case 8:
          t.max_noise = function (e, a) {
            for (var t, s = 1e-37, n = 0; n < a.psymax; n++) s += (t = e[n], c.FAST_LOG10(.368 + .632 * t * t * t));

            return Math.max(1e-20, s);
          }(n, s);

        case 1:
          r = t.max_noise < a.max_noise;
          break;

        case 2:
          r = t.tot_noise < a.tot_noise;
          break;

        case 3:
          r = t.tot_noise < a.tot_noise && t.max_noise < a.max_noise;
          break;

        case 4:
          r = t.max_noise <= 0 && a.max_noise > .2 || t.max_noise <= 0 && a.max_noise < 0 && a.max_noise > t.max_noise - .2 && t.tot_noise < a.tot_noise || t.max_noise <= 0 && a.max_noise > 0 && a.max_noise > t.max_noise - .2 && t.tot_noise < a.tot_noise + a.over_noise || t.max_noise > 0 && a.max_noise > -.05 && a.max_noise > t.max_noise - .1 && t.tot_noise + t.over_noise < a.tot_noise + a.over_noise || t.max_noise > 0 && a.max_noise > -.1 && a.max_noise > t.max_noise - .15 && t.tot_noise + t.over_noise + t.over_noise < a.tot_noise + a.over_noise + a.over_noise;
          break;

        case 5:
          r = t.over_noise < a.over_noise || R.EQ(t.over_noise, a.over_noise) && t.tot_noise < a.tot_noise;
          break;

        case 6:
          r = t.over_noise < a.over_noise || R.EQ(t.over_noise, a.over_noise) && (t.max_noise < a.max_noise || R.EQ(t.max_noise, a.max_noise) && t.tot_noise <= a.tot_noise);
          break;

        case 7:
          r = t.over_count < a.over_count || t.over_noise < a.over_noise;
      }

      return 0 == a.over_count && (r = r && t.bits < a.bits), r;
    }

    function h(e, a, s, r, _) {
      var o = e.internal_flags;
      !function (e, a, t, s, n) {
        var r,
            _ = e.internal_flags;
        r = 0 == a.scalefac_scale ? 1.2968395546510096 : 1.6817928305074292;

        for (var i = 0, o = 0; o < a.sfbmax; o++) i < t[o] && (i = t[o]);

        var l = _.noise_shaping_amp;

        switch (3 == l && (l = n ? 2 : 1), l) {
          case 2:
            break;

          case 1:
            i > 1 ? i = Math.pow(i, .5) : i *= .95;
            break;

          case 0:
          default:
            i > 1 ? i = 1 : i *= .95;
        }

        var f = 0;

        for (o = 0; o < a.sfbmax; o++) {
          var c,
              h = a.width[o];

          if (f += h, !(t[o] < i)) {
            if (0 != (2 & _.substep_shaping) && (_.pseudohalf[o] = 0 == _.pseudohalf[o] ? 1 : 0, 0 == _.pseudohalf[o] && 2 == _.noise_shaping_amp)) return;

            for (a.scalefac[o]++, c = -h; c < 0; c++) s[f + c] *= r, s[f + c] > a.xrpow_max && (a.xrpow_max = s[f + c]);

            if (2 == _.noise_shaping_amp) return;
          }
        }
      }(e, a, s, r, _);
      var f = i(a);
      return !f && (!(f = 2 == o.mode_gr ? n.scale_bitcount(a) : n.scale_bitcount_lsf(o, a)) || (o.noise_shaping > 1 && (l.fill(o.pseudohalf, 0), 0 == a.scalefac_scale ? (!function (e, a) {
        for (var s = 0, n = 0; n < e.sfbmax; n++) {
          var r = e.width[n],
              _ = e.scalefac[n];

          if (0 != e.preflag && (_ += t.pretab[n]), s += r, 0 != (1 & _)) {
            _++;

            for (var i = -r; i < 0; i++) a[s + i] *= 1.2968395546510096, a[s + i] > e.xrpow_max && (e.xrpow_max = a[s + i]);
          }

          e.scalefac[n] = _ >> 1;
        }

        e.preflag = 0, e.scalefac_scale = 1;
      }(a, r), f = !1) : a.block_type == Y.SHORT_TYPE && o.subblock_gain > 0 && (f = function (e, a, s) {
        var n,
            r = a.scalefac;

        for (n = 0; n < a.sfb_lmax; n++) if (r[n] >= 16) return !0;

        for (var _ = 0; _ < 3; _++) {
          var i = 0,
              o = 0;

          for (n = a.sfb_lmax + _; n < a.sfbdivide; n += 3) i < r[n] && (i = r[n]);

          for (; n < a.sfbmax; n += 3) o < r[n] && (o = r[n]);

          if (!(i < 16 && o < 8)) {
            if (a.subblock_gain[_] >= 7) return !0;
            a.subblock_gain[_]++;
            var l = e.scalefac_band.l[a.sfb_lmax];

            for (n = a.sfb_lmax + _; n < a.sfbmax; n += 3) {
              var f = a.width[n],
                  c = r[n];
              if ((c -= 4 >> a.scalefac_scale) >= 0) r[n] = c, l += 3 * f;else {
                r[n] = 0;
                var h = 210 + (c << a.scalefac_scale + 1);
                b = t.IPOW20(h), l += f * (_ + 1);

                for (var u = -f; u < 0; u++) s[l + u] *= b, s[l + u] > a.xrpow_max && (a.xrpow_max = s[l + u]);

                l += f * (3 - _ - 1);
              }
            }

            var b = t.IPOW20(202);

            for (l += a.width[n] * (_ + 1), u = -a.width[n]; u < 0; u++) s[l + u] *= b, s[l + u] > a.xrpow_max && (a.xrpow_max = s[l + u]);
          }
        }

        return !1;
      }(o, a, r) || i(a))), f || (f = 2 == o.mode_gr ? n.scale_bitcount(a) : n.scale_bitcount_lsf(o, a)), !f));
    }

    this.setModules = function (s, _, i, o) {
      e = s, a = _, this.rv = _, t = i, this.qupvt = i, n = o, r.setModules(t, n);
    }, this.ms_convert = function (e, a) {
      for (var t = 0; t < 576; ++t) {
        var s = e.tt[a][0].xr[t],
            n = e.tt[a][1].xr[t];
        e.tt[a][0].xr[t] = (s + n) * (.5 * c.SQRT2), e.tt[a][1].xr[t] = (s - n) * (.5 * c.SQRT2);
      }
    }, this.init_xrpow = function (e, a, t) {
      var s = 0,
          n = 0 | a.max_nonzero_coeff;

      if (a.xrpow_max = 0, l.fill(t, n, 576, 0), (s = function (e, a, t, s) {
        s = 0;

        for (var n = 0; n <= t; ++n) {
          var r = Math.abs(e.xr[n]);
          s += r, a[n] = Math.sqrt(r * Math.sqrt(r)), a[n] > e.xrpow_max && (e.xrpow_max = a[n]);
        }

        return s;
      }(a, t, n, s)) > 1e-20) {
        var r = 0;
        0 != (2 & e.substep_shaping) && (r = 1);

        for (var _ = 0; _ < a.psymax; _++) e.pseudohalf[_] = r;

        return !0;
      }

      return l.fill(a.l3_enc, 0, 576, 0), !1;
    }, this.init_outer_loop = function (e, a) {
      a.part2_3_length = 0, a.big_values = 0, a.count1 = 0, a.global_gain = 210, a.scalefac_compress = 0, a.table_select[0] = 0, a.table_select[1] = 0, a.table_select[2] = 0, a.subblock_gain[0] = 0, a.subblock_gain[1] = 0, a.subblock_gain[2] = 0, a.subblock_gain[3] = 0, a.region0_count = 0, a.region1_count = 0, a.preflag = 0, a.scalefac_scale = 0, a.count1table_select = 0, a.part2_length = 0, a.sfb_lmax = Y.SBPSY_l, a.sfb_smin = Y.SBPSY_s, a.psy_lmax = e.sfb21_extra ? Y.SBMAX_l : Y.SBPSY_l, a.psymax = a.psy_lmax, a.sfbmax = a.sfb_lmax, a.sfbdivide = 11;

      for (var n = 0; n < Y.SBMAX_l; n++) a.width[n] = e.scalefac_band.l[n + 1] - e.scalefac_band.l[n], a.window[n] = 3;

      if (a.block_type == Y.SHORT_TYPE) {
        var r = s(576);
        a.sfb_smin = 0, a.sfb_lmax = 0, 0 != a.mixed_block_flag && (a.sfb_smin = 3, a.sfb_lmax = 2 * e.mode_gr + 4), a.psymax = a.sfb_lmax + 3 * ((e.sfb21_extra ? Y.SBMAX_s : Y.SBPSY_s) - a.sfb_smin), a.sfbmax = a.sfb_lmax + 3 * (Y.SBPSY_s - a.sfb_smin), a.sfbdivide = a.sfbmax - 18, a.psy_lmax = a.sfb_lmax;
        var _ = e.scalefac_band.l[a.sfb_lmax];
        f.arraycopy(a.xr, 0, r, 0, 576);

        for (n = a.sfb_smin; n < Y.SBMAX_s; n++) for (var i = e.scalefac_band.s[n], o = e.scalefac_band.s[n + 1], c = 0; c < 3; c++) for (var h = i; h < o; h++) a.xr[_++] = r[3 * h + c];

        var u = a.sfb_lmax;

        for (n = a.sfb_smin; n < Y.SBMAX_s; n++) a.width[u] = a.width[u + 1] = a.width[u + 2] = e.scalefac_band.s[n + 1] - e.scalefac_band.s[n], a.window[u] = 0, a.window[u + 1] = 1, a.window[u + 2] = 2, u += 3;
      }

      a.count1bits = 0, a.sfb_partition_table = t.nr_of_sfb_block[0][0], a.slen[0] = 0, a.slen[1] = 0, a.slen[2] = 0, a.slen[3] = 0, a.max_nonzero_coeff = 575, l.fill(a.scalefac, 0), function (e, a) {
        var s = e.ATH,
            n = a.xr;
        if (a.block_type != Y.SHORT_TYPE) for (var r = !1, _ = Y.PSFB21 - 1; _ >= 0 && !r; _--) {
          var i = e.scalefac_band.psfb21[_],
              o = e.scalefac_band.psfb21[_ + 1],
              l = t.athAdjust(s.adjust, s.psfb21[_], s.floor);
          e.nsPsy.longfact[21] > 1e-12 && (l *= e.nsPsy.longfact[21]);

          for (var f = o - 1; f >= i; f--) {
            if (!(Math.abs(n[f]) < l)) {
              r = !0;
              break;
            }

            n[f] = 0;
          }
        } else for (var c = 0; c < 3; c++) for (r = !1, _ = Y.PSFB12 - 1; _ >= 0 && !r; _--) {
          o = (i = 3 * e.scalefac_band.s[12] + (e.scalefac_band.s[13] - e.scalefac_band.s[12]) * c + (e.scalefac_band.psfb12[_] - e.scalefac_band.psfb12[0])) + (e.scalefac_band.psfb12[_ + 1] - e.scalefac_band.psfb12[_]);
          var h = t.athAdjust(s.adjust, s.psfb12[_], s.floor);

          for (e.nsPsy.shortfact[12] > 1e-12 && (h *= e.nsPsy.shortfact[12]), f = o - 1; f >= i; f--) {
            if (!(Math.abs(n[f]) < h)) {
              r = !0;
              break;
            }

            n[f] = 0;
          }
        }
      }(e, a);
    }, _.BINSEARCH_NONE = new _(0), _.BINSEARCH_UP = new _(1), _.BINSEARCH_DOWN = new _(2), this.trancate_smallspectrums = function (e, a, r, _) {
      var i = s(L.SFBMAX);

      if ((0 != (4 & e.substep_shaping) || a.block_type != Y.SHORT_TYPE) && 0 == (128 & e.substep_shaping)) {
        t.calc_noise(a, r, i, new E(), null);

        for (var o = 0; o < 576; o++) {
          var f = 0;
          0 != a.l3_enc[o] && (f = Math.abs(a.xr[o])), _[o] = f;
        }

        o = 0;
        var c = 8;
        a.block_type == Y.SHORT_TYPE && (c = 6);

        do {
          var h,
              u,
              b,
              m,
              p = a.width[c];

          if (o += p, !(i[c] >= 1 || (l.sort(_, o - p, p), R.EQ(_[o - 1], 0)))) {
            h = (1 - i[c]) * r[c], u = 0, m = 0;

            do {
              var d;

              for (b = 1; m + b < p && !R.NEQ(_[m + o - p], _[m + o + b - p]); b++);

              if (h < (d = _[m + o - p] * _[m + o - p] * b)) {
                0 != m && (u = _[m + o - p - 1]);
                break;
              }

              h -= d, m += b;
            } while (m < p);

            if (!R.EQ(u, 0)) do {
              Math.abs(a.xr[o - p]) <= u && (a.l3_enc[o - p] = 0);
            } while (--p > 0);
          }
        } while (++c < a.psymax);

        a.part2_3_length = n.noquant_count_bits(e, a, null);
      }
    }, this.outer_loop = function (e, a, r, i, l, c) {
      var u = e.internal_flags,
          m = new O(),
          p = s(576),
          d = s(L.SFBMAX),
          v = new E(),
          g = new V(),
          S = 9999999,
          R = !1,
          M = !1,
          A = 0;
      if (function (e, a, t, s, r) {
        var i,
            o = e.CurrentStep[s],
            l = !1,
            f = e.OldValue[s],
            c = _.BINSEARCH_NONE;

        for (a.global_gain = f, t -= a.part2_length;;) {
          var h;
          if (i = n.count_bits(e, r, a, null), 1 == o || i == t) break;
          i > t ? (c == _.BINSEARCH_DOWN && (l = !0), l && (o /= 2), c = _.BINSEARCH_UP, h = o) : (c == _.BINSEARCH_UP && (l = !0), l && (o /= 2), c = _.BINSEARCH_DOWN, h = -o), a.global_gain += h, a.global_gain < 0 && (a.global_gain = 0, l = !0), a.global_gain > 255 && (a.global_gain = 255, l = !0);
        }

        for (; i > t && a.global_gain < 255;) a.global_gain++, i = n.count_bits(e, r, a, null);

        e.CurrentStep[s] = f - a.global_gain >= 4 ? 4 : 2, e.OldValue[s] = a.global_gain, a.part2_3_length = i;
      }(u, a, c, l, i), 0 == u.noise_shaping) return 100;
      t.calc_noise(a, r, d, v, g), v.bits = a.part2_3_length, m.assign(a);
      var B = 0;

      for (f.arraycopy(i, 0, p, 0, 576); !R;) {
        do {
          var w,
              T = new E(),
              k = 255;

          if (w = 0 != (2 & u.substep_shaping) ? 20 : 3, u.sfb21_extra) {
            if (d[m.sfbmax] > 1) break;
            if (m.block_type == Y.SHORT_TYPE && (d[m.sfbmax + 1] > 1 || d[m.sfbmax + 2] > 1)) break;
          }

          if (!h(e, m, d, i, M)) break;
          0 != m.scalefac_scale && (k = 254);
          var x = c - m.part2_length;
          if (x <= 0) break;

          for (; (m.part2_3_length = n.count_bits(u, i, m, g)) > x && m.global_gain <= k;) m.global_gain++;

          if (m.global_gain > k) break;

          if (0 == v.over_count) {
            for (; (m.part2_3_length = n.count_bits(u, i, m, g)) > S && m.global_gain <= k;) m.global_gain++;

            if (m.global_gain > k) break;
          }

          if (t.calc_noise(m, r, d, T, g), T.bits = m.part2_3_length, 0 != (o(a.block_type != Y.SHORT_TYPE ? e.quant_comp : e.quant_comp_short, v, T, m, d) ? 1 : 0)) S = a.part2_3_length, v = T, a.assign(m), B = 0, f.arraycopy(i, 0, p, 0, 576);else if (0 == u.full_outer_loop) {
            if (++B > w && 0 == v.over_count) break;
            if (3 == u.noise_shaping_amp && M && B > 30) break;
            if (3 == u.noise_shaping_amp && M && m.global_gain - A > 15) break;
          }
        } while (m.global_gain + m.scalefac_scale < 255);

        3 == u.noise_shaping_amp ? M ? R = !0 : (m.assign(a), f.arraycopy(p, 0, i, 0, 576), B = 0, A = m.global_gain, M = !0) : R = !0;
      }

      return e.VBR == b.vbr_rh || e.VBR == b.vbr_mtrh ? f.arraycopy(p, 0, i, 0, 576) : 0 != (1 & u.substep_shaping) && trancate_smallspectrums(u, a, r, i), v.over_count;
    }, this.iteration_finish_one = function (e, t, s) {
      var r = e.l3_side,
          _ = r.tt[t][s];
      n.best_scalefac_store(e, t, s, r), 1 == e.use_best_huffman && n.best_huffman_divide(e, _), a.ResvAdjust(e, _);
    }, this.VBR_encode_granule = function (e, a, t, n, r, _, i) {
      var o,
          c = e.internal_flags,
          h = new O(),
          u = s(576),
          b = i,
          m = i + 1,
          p = (i + _) / 2,
          d = 0,
          v = c.sfb21_extra;
      l.fill(h.l3_enc, 0);

      do {
        c.sfb21_extra = !(p > b - 42) && v, outer_loop(e, a, t, n, r, p) <= 0 ? (d = 1, m = a.part2_3_length, h.assign(a), f.arraycopy(n, 0, u, 0, 576), o = (i = m - 32) - _, p = (i + _) / 2) : (o = i - (_ = p + 32), p = (i + _) / 2, 0 != d && (d = 2, a.assign(h), f.arraycopy(u, 0, n, 0, 576)));
      } while (o > 12);

      c.sfb21_extra = v, 2 == d && f.arraycopy(h.l3_enc, 0, a.l3_enc, 0, 576);
    }, this.get_framebits = function (t, s) {
      var n = t.internal_flags;
      n.bitrate_index = n.VBR_min_bitrate;
      var r = e.getframebits(t);
      n.bitrate_index = 1, r = e.getframebits(t);

      for (var _ = 1; _ <= n.VBR_max_bitrate; _++) {
        n.bitrate_index = _;
        var i = new w(r);
        s[_] = a.ResvFrameBegin(t, i), r = i.bits;
      }
    }, this.VBR_old_prepare = function (e, s, n, r, _, i, o, l, f) {
      var c,
          h = e.internal_flags,
          u = 0,
          b = 1,
          m = 0;
      h.bitrate_index = h.VBR_max_bitrate;
      var p = a.ResvFrameBegin(e, new w(0)) / h.mode_gr;
      get_framebits(e, i);

      for (var d = 0; d < h.mode_gr; d++) {
        var v = t.on_pe(e, s, l[d], p, d, 0);
        h.mode_ext == Y.MPG_MD_MS_LR && (ms_convert(h.l3_side, d), t.reduce_side(l[d], n[d], p, v));

        for (var g = 0; g < h.channels_out; ++g) {
          var S = h.l3_side.tt[d][g];
          S.block_type != Y.SHORT_TYPE ? (u = 1.28 / (1 + Math.exp(3.5 - s[d][g] / 300)) - .05, c = h.PSY.mask_adjust - u) : (u = 2.56 / (1 + Math.exp(3.5 - s[d][g] / 300)) - .14, c = h.PSY.mask_adjust_short - u), h.masking_lower = Math.pow(10, .1 * c), init_outer_loop(h, S), f[d][g] = t.calc_xmin(e, r[d][g], S, _[d][g]), 0 != f[d][g] && (b = 0), o[d][g] = 126, m += l[d][g];
        }
      }

      for (d = 0; d < h.mode_gr; d++) for (g = 0; g < h.channels_out; g++) m > i[h.VBR_max_bitrate] && (l[d][g] *= i[h.VBR_max_bitrate], l[d][g] /= m), o[d][g] > l[d][g] && (o[d][g] = l[d][g]);

      return b;
    }, this.bitpressure_strategy = function (e, a, t, s) {
      for (var n = 0; n < e.mode_gr; n++) for (var r = 0; r < e.channels_out; r++) {
        for (var _ = e.l3_side.tt[n][r], i = a[n][r], o = 0, l = 0; l < _.psy_lmax; l++) i[o++] *= 1 + .029 * l * l / Y.SBMAX_l / Y.SBMAX_l;

        if (_.block_type == Y.SHORT_TYPE) for (l = _.sfb_smin; l < Y.SBMAX_s; l++) i[o++] *= 1 + .029 * l * l / Y.SBMAX_s / Y.SBMAX_s, i[o++] *= 1 + .029 * l * l / Y.SBMAX_s / Y.SBMAX_s, i[o++] *= 1 + .029 * l * l / Y.SBMAX_s / Y.SBMAX_s;
        s[n][r] = 0 | Math.max(t[n][r], .9 * s[n][r]);
      }
    }, this.VBR_new_prepare = function (e, s, n, r, _, i) {
      var o,
          l = e.internal_flags,
          f = 1,
          c = 0,
          h = 0;

      if (e.free_format) {
        l.bitrate_index = 0;
        u = new w(c);
        o = a.ResvFrameBegin(e, u), c = u.bits, _[0] = o;
      } else {
        l.bitrate_index = l.VBR_max_bitrate;
        var u = new w(c);
        a.ResvFrameBegin(e, u), c = u.bits, get_framebits(e, _), o = _[l.VBR_max_bitrate];
      }

      for (var b = 0; b < l.mode_gr; b++) {
        t.on_pe(e, s, i[b], c, b, 0), l.mode_ext == Y.MPG_MD_MS_LR && ms_convert(l.l3_side, b);

        for (var m = 0; m < l.channels_out; ++m) {
          var p = l.l3_side.tt[b][m];
          l.masking_lower = Math.pow(10, .1 * l.PSY.mask_adjust), init_outer_loop(l, p), 0 != t.calc_xmin(e, n[b][m], p, r[b][m]) && (f = 0), h += i[b][m];
        }
      }

      for (b = 0; b < l.mode_gr; b++) for (m = 0; m < l.channels_out; m++) h > o && (i[b][m] *= o, i[b][m] /= h);

      return f;
    }, this.calc_target_bits = function (s, n, r, _, i, o) {
      var l,
          f,
          c,
          h,
          u = s.internal_flags,
          b = u.l3_side,
          m = 0;
      u.bitrate_index = u.VBR_max_bitrate;
      var p = new w(m);

      for (o[0] = a.ResvFrameBegin(s, p), m = p.bits, u.bitrate_index = 1, m = e.getframebits(s) - 8 * u.sideinfo_len, i[0] = m / (u.mode_gr * u.channels_out), m = s.VBR_mean_bitrate_kbps * s.framesize * 1e3, 0 != (1 & u.substep_shaping) && (m *= 1.09), m /= s.out_samplerate, m -= 8 * u.sideinfo_len, m /= u.mode_gr * u.channels_out, (l = .93 + .07 * (11 - s.compression_ratio) / 5.5) < .9 && (l = .9), l > 1 && (l = 1), f = 0; f < u.mode_gr; f++) {
        var d = 0;

        for (c = 0; c < u.channels_out; c++) {
          if (_[f][c] = int(l * m), n[f][c] > 700) {
            var v = int((n[f][c] - 700) / 1.4),
                g = b.tt[f][c];
            _[f][c] = int(l * m), g.block_type == Y.SHORT_TYPE && v < m / 2 && (v = m / 2), v > 3 * m / 2 ? v = 3 * m / 2 : v < 0 && (v = 0), _[f][c] += v;
          }

          _[f][c] > G.MAX_BITS_PER_CHANNEL && (_[f][c] = G.MAX_BITS_PER_CHANNEL), d += _[f][c];
        }

        if (d > G.MAX_BITS_PER_GRANULE) for (c = 0; c < u.channels_out; ++c) _[f][c] *= G.MAX_BITS_PER_GRANULE, _[f][c] /= d;
      }

      if (u.mode_ext == Y.MPG_MD_MS_LR) for (f = 0; f < u.mode_gr; f++) t.reduce_side(_[f], r[f], m * u.channels_out, G.MAX_BITS_PER_GRANULE);

      for (h = 0, f = 0; f < u.mode_gr; f++) for (c = 0; c < u.channels_out; c++) _[f][c] > G.MAX_BITS_PER_CHANNEL && (_[f][c] = G.MAX_BITS_PER_CHANNEL), h += _[f][c];

      if (h > o[0]) for (f = 0; f < u.mode_gr; f++) for (c = 0; c < u.channels_out; c++) _[f][c] *= o[0], _[f][c] /= h;
    };
  }

  function D() {
    var e = [-.1482523854003001, 32.308141959636465, 296.40344946382766, 883.1344870032432, 11113.947376231741, 1057.2713659324597, 305.7402417275812, 30.825928907280012, 3.8533188138216365, 59.42900443849514, 709.5899960123345, 5281.91112291017, -5829.66483675846, -817.6293103748613, -76.91656988279972, -4.594269939176596, .9063471690191471, .1960342806591213, -.15466694054279598, 34.324387823855965, 301.8067566458425, 817.599602898885, 11573.795901679885, 1181.2520595540152, 321.59731579894424, 31.232021761053772, 3.7107095756221318, 53.650946155329365, 684.167428119626, 5224.56624370173, -6366.391851890084, -908.9766368219582, -89.83068876699639, -5.411397422890401, .8206787908286602, .3901806440322567, -.16070888947830023, 36.147034243915876, 304.11815768187864, 732.7429163887613, 11989.60988270091, 1300.012278487897, 335.28490093152146, 31.48816102859945, 3.373875931311736, 47.232241542899175, 652.7371796173471, 5132.414255594984, -6909.087078780055, -1001.9990371107289, -103.62185754286375, -6.104916304710272, .7416505462720353, .5805693545089249, -.16636367662261495, 37.751650073343995, 303.01103387567713, 627.9747488785183, 12358.763425278165, 1412.2779918482834, 346.7496836825721, 31.598286663170416, 3.1598635433980946, 40.57878626349686, 616.1671130880391, 5007.833007176154, -7454.040671756168, -1095.7960341867115, -118.24411666465777, -6.818469345853504, .6681786379192989, .7653668647301797, -.1716176790982088, 39.11551877123304, 298.3413246578966, 503.5259106886539, 12679.589408408976, 1516.5821921214542, 355.9850766329023, 31.395241710249053, 2.9164211881972335, 33.79716964664243, 574.8943997801362, 4853.234992253242, -7997.57021486075, -1189.7624067269965, -133.6444792601766, -7.7202770609839915, .5993769336819237, .9427934736519954, -.17645823955292173, 40.21879108166477, 289.9982036694474, 359.3226160751053, 12950.259102786438, 1612.1013903507662, 362.85067106591504, 31.045922092242872, 2.822222032597987, 26.988862316190684, 529.8996541764288, 4671.371946949588, -8535.899136645805, -1282.5898586244496, -149.58553632943463, -8.643494270763135, .5345111359507916, 1.111140466039205, -.36174739330527045, 41.04429910497807, 277.5463268268618, 195.6386023135583, 13169.43812144731, 1697.6433561479398, 367.40983966190305, 30.557037410382826, 2.531473372857427, 20.070154905927314, 481.50208566532336, 4464.970341588308, -9065.36882077239, -1373.62841526722, -166.1660487028118, -9.58289321133207, .4729647758913199, 1.268786568327291, -.36970682634889585, 41.393213350082036, 261.2935935556502, 12.935476055240873, 13336.131683328815, 1772.508612059496, 369.76534388639965, 29.751323653701338, 2.4023193045459172, 13.304795348228817, 430.5615775526625, 4237.0568611071185, -9581.931701634761, -1461.6913552409758, -183.12733958476446, -10.718010163869403, .41421356237309503, 1.414213562373095, -.37677560326535325, 41.619486213528496, 241.05423794991074, -187.94665032361226, 13450.063605744153, 1836.153896465782, 369.4908799925761, 29.001847876923147, 2.0714759319987186, 6.779591200894186, 377.7767837205709, 3990.386575512536, -10081.709459700915, -1545.947424837898, -200.3762958015653, -11.864482073055006, .3578057213145241, 1.546020906725474, -.3829366947518991, 41.1516456456653, 216.47684307105183, -406.1569483347166, 13511.136535077321, 1887.8076599260432, 367.3025214564151, 28.136213436723654, 1.913880671464418, .3829366947518991, 323.85365704338597, 3728.1472257487526, -10561.233882199509, -1625.2025997821418, -217.62525175416, -13.015432208941645, .3033466836073424, 1.66293922460509, -.5822628872992417, 40.35639251440489, 188.20071124269245, -640.2706748618148, 13519.21490106562, 1927.6022433578062, 362.8197642637487, 26.968821921868447, 1.7463817695935329, -5.62650678237171, 269.3016715297017, 3453.386536448852, -11016.145278780888, -1698.6569643425091, -234.7658734267683, -14.16351421663124, .2504869601913055, 1.76384252869671, -.5887180101749253, 39.23429103868072, 155.76096234403798, -889.2492977967378, 13475.470561874661, 1955.0535223723712, 356.4450994756727, 25.894952980042156, 1.5695032905781554, -11.181939564328772, 214.80884394039484, 3169.1640829158237, -11443.321309975563, -1765.1588461316153, -251.68908574481912, -15.49755935939164, .198912367379658, 1.847759065022573, -.7912582233652842, 37.39369355329111, 119.699486012458, -1151.0956593239027, 13380.446257078214, 1970.3952110853447, 348.01959814116185, 24.731487364283044, 1.3850130831637748, -16.421408865300393, 161.05030052864092, 2878.3322807850063, -11838.991423510031, -1823.985884688674, -268.2854986386903, -16.81724543849939, .1483359875383474, 1.913880671464418, -.7960642926861912, 35.2322109610459, 80.01928065061526, -1424.0212633405113, 13235.794061869668, 1973.804052543835, 337.9908651258184, 23.289159354463873, 1.3934255946442087, -21.099669467133474, 108.48348407242611, 2583.700758091299, -12199.726194855148, -1874.2780658979746, -284.2467154529415, -18.11369784385905, .09849140335716425, 1.961570560806461, -.998795456205172, 32.56307803611191, 36.958364584370486, -1706.075448829146, 13043.287458812016, 1965.3831106103316, 326.43182772364605, 22.175018750622293, 1.198638339011324, -25.371248002043963, 57.53505923036915, 2288.41886619975, -12522.674544337233, -1914.8400385312243, -299.26241273417224, -19.37805630698734, .04912684976946725, 1.990369453344394, .035780907 * c.SQRT2 * .5 / 2384e-9, .017876148 * c.SQRT2 * .5 / 2384e-9, .003134727 * c.SQRT2 * .5 / 2384e-9, .002457142 * c.SQRT2 * .5 / 2384e-9, 971317e-9 * c.SQRT2 * .5 / 2384e-9, 218868e-9 * c.SQRT2 * .5 / 2384e-9, 101566e-9 * c.SQRT2 * .5 / 2384e-9, 13828e-9 * c.SQRT2 * .5 / 2384e-9, 12804.797818791945, 1945.5515939597317, 313.4244966442953, 49591e-9 / 2384e-9, 1995.1556208053692, 21458e-9 / 2384e-9, -69618e-9 / 2384e-9],
        a = [[2.382191739347913e-13, 6.423305872147834e-13, 9.400849094049688e-13, 1.122435026096556e-12, 1.183840321267481e-12, 1.122435026096556e-12, 9.40084909404969e-13, 6.423305872147839e-13, 2.382191739347918e-13, 5.456116108943412e-12, 4.878985199565852e-12, 4.240448995017367e-12, 3.559909094758252e-12, 2.858043359288075e-12, 2.156177623817898e-12, 1.475637723558783e-12, 8.371015190102974e-13, 2.599706096327376e-13, -5.456116108943412e-12, -4.878985199565852e-12, -4.240448995017367e-12, -3.559909094758252e-12, -2.858043359288076e-12, -2.156177623817898e-12, -1.475637723558783e-12, -8.371015190102975e-13, -2.599706096327376e-13, -2.382191739347923e-13, -6.423305872147843e-13, -9.400849094049696e-13, -1.122435026096556e-12, -1.183840321267481e-12, -1.122435026096556e-12, -9.400849094049694e-13, -6.42330587214784e-13, -2.382191739347918e-13], [2.382191739347913e-13, 6.423305872147834e-13, 9.400849094049688e-13, 1.122435026096556e-12, 1.183840321267481e-12, 1.122435026096556e-12, 9.400849094049688e-13, 6.423305872147841e-13, 2.382191739347918e-13, 5.456116108943413e-12, 4.878985199565852e-12, 4.240448995017367e-12, 3.559909094758253e-12, 2.858043359288075e-12, 2.156177623817898e-12, 1.475637723558782e-12, 8.371015190102975e-13, 2.599706096327376e-13, -5.461314069809755e-12, -4.921085770524055e-12, -4.343405037091838e-12, -3.732668368707687e-12, -3.093523840190885e-12, -2.430835727329465e-12, -1.734679010007751e-12, -9.74825365660928e-13, -2.797435120168326e-13, 0, 0, 0, 0, 0, 0, -2.283748241799531e-13, -4.037858874020686e-13, -2.146547464825323e-13], [.1316524975873958, .414213562373095, .7673269879789602, 1.091308501069271, 1.303225372841206, 1.56968557711749, 1.920982126971166, 2.414213562373094, 3.171594802363212, 4.510708503662055, 7.595754112725146, 22.90376554843115, .984807753012208, .6427876096865394, .3420201433256688, .9396926207859084, -.1736481776669303, -.7660444431189779, .8660254037844387, .5, -.5144957554275265, -.4717319685649723, -.3133774542039019, -.1819131996109812, -.09457419252642064, -.04096558288530405, -.01419856857247115, -.003699974673760037, .8574929257125442, .8817419973177052, .9496286491027329, .9833145924917901, .9955178160675857, .9991605581781475, .999899195244447, .9999931550702802], [0, 0, 0, 0, 0, 0, 2.283748241799531e-13, 4.037858874020686e-13, 2.146547464825323e-13, 5.461314069809755e-12, 4.921085770524055e-12, 4.343405037091838e-12, 3.732668368707687e-12, 3.093523840190885e-12, 2.430835727329466e-12, 1.734679010007751e-12, 9.74825365660928e-13, 2.797435120168326e-13, -5.456116108943413e-12, -4.878985199565852e-12, -4.240448995017367e-12, -3.559909094758253e-12, -2.858043359288075e-12, -2.156177623817898e-12, -1.475637723558782e-12, -8.371015190102975e-13, -2.599706096327376e-13, -2.382191739347913e-13, -6.423305872147834e-13, -9.400849094049688e-13, -1.122435026096556e-12, -1.183840321267481e-12, -1.122435026096556e-12, -9.400849094049688e-13, -6.423305872147841e-13, -2.382191739347918e-13]],
        t = a[Y.SHORT_TYPE],
        n = a[Y.SHORT_TYPE],
        r = a[Y.SHORT_TYPE],
        _ = a[Y.SHORT_TYPE],
        i = [0, 1, 16, 17, 8, 9, 24, 25, 4, 5, 20, 21, 12, 13, 28, 29, 2, 3, 18, 19, 10, 11, 26, 27, 6, 7, 22, 23, 14, 15, 30, 31];

    function o(a, t, s) {
      for (var n, r, _, i = 10, o = t + 238 - 14 - 286, l = -15; l < 0; l++) {
        var f, h, u;
        f = e[i + -10], h = a[o + -224] * f, u = a[t + 224] * f, f = e[i + -9], h += a[o + -160] * f, u += a[t + 160] * f, f = e[i + -8], h += a[o + -96] * f, u += a[t + 96] * f, f = e[i + -7], h += a[o + -32] * f, u += a[t + 32] * f, f = e[i + -6], h += a[o + 32] * f, u += a[t + -32] * f, f = e[i + -5], h += a[o + 96] * f, u += a[t + -96] * f, f = e[i + -4], h += a[o + 160] * f, u += a[t + -160] * f, f = e[i + -3], h += a[o + 224] * f, u += a[t + -224] * f, f = e[i + -2], h += a[t + -256] * f, u -= a[o + 256] * f, f = e[i + -1], h += a[t + -192] * f, u -= a[o + 192] * f, f = e[i + 0], h += a[t + -128] * f, u -= a[o + 128] * f, f = e[i + 1], h += a[t + -64] * f, u -= a[o + 64] * f, f = e[i + 2], h += a[t + 0] * f, u -= a[o + 0] * f, f = e[i + 3], h += a[t + 64] * f, u -= a[o + -64] * f, f = e[i + 4], h += a[t + 128] * f, u -= a[o + -128] * f, f = e[i + 5], h += a[t + 192] * f, f = (u -= a[o + -192] * f) - (h *= e[i + 6]), s[30 + 2 * l] = u + h, s[31 + 2 * l] = e[i + 7] * f, i += 18, t--, o++;
      }

      u = a[t + -16] * e[i + -10], h = a[t + -32] * e[i + -2], u += (a[t + -48] - a[t + 16]) * e[i + -9], h += a[t + -96] * e[i + -1], u += (a[t + -80] + a[t + 48]) * e[i + -8], h += a[t + -160] * e[i + 0], u += (a[t + -112] - a[t + 80]) * e[i + -7], h += a[t + -224] * e[i + 1], u += (a[t + -144] + a[t + 112]) * e[i + -6], h -= a[t + 32] * e[i + 2], u += (a[t + -176] - a[t + 144]) * e[i + -5], h -= a[t + 96] * e[i + 3], u += (a[t + -208] + a[t + 176]) * e[i + -4], h -= a[t + 160] * e[i + 4], u += (a[t + -240] - a[t + 208]) * e[i + -3], n = (h -= a[t + 224]) - u, r = h + u, u = s[14], h = s[15] - u, s[31] = r + u, s[30] = n + h, s[15] = n - h, s[14] = r - u, _ = s[28] - s[0], s[0] += s[28], s[28] = _ * e[i + -36 + 7], _ = s[29] - s[1], s[1] += s[29], s[29] = _ * e[i + -36 + 7], _ = s[26] - s[2], s[2] += s[26], s[26] = _ * e[i + -72 + 7], _ = s[27] - s[3], s[3] += s[27], s[27] = _ * e[i + -72 + 7], _ = s[24] - s[4], s[4] += s[24], s[24] = _ * e[i + -108 + 7], _ = s[25] - s[5], s[5] += s[25], s[25] = _ * e[i + -108 + 7], _ = s[22] - s[6], s[6] += s[22], s[22] = _ * c.SQRT2, _ = s[23] - s[7], s[7] += s[23], s[23] = _ * c.SQRT2 - s[7], s[7] -= s[6], s[22] -= s[7], s[23] -= s[22], _ = s[6], s[6] = s[31] - _, s[31] = s[31] + _, _ = s[7], s[7] = s[30] - _, s[30] = s[30] + _, _ = s[22], s[22] = s[15] - _, s[15] = s[15] + _, _ = s[23], s[23] = s[14] - _, s[14] = s[14] + _, _ = s[20] - s[8], s[8] += s[20], s[20] = _ * e[i + -180 + 7], _ = s[21] - s[9], s[9] += s[21], s[21] = _ * e[i + -180 + 7], _ = s[18] - s[10], s[10] += s[18], s[18] = _ * e[i + -216 + 7], _ = s[19] - s[11], s[11] += s[19], s[19] = _ * e[i + -216 + 7], _ = s[16] - s[12], s[12] += s[16], s[16] = _ * e[i + -252 + 7], _ = s[17] - s[13], s[13] += s[17], s[17] = _ * e[i + -252 + 7], _ = -s[20] + s[24], s[20] += s[24], s[24] = _ * e[i + -216 + 7], _ = -s[21] + s[25], s[21] += s[25], s[25] = _ * e[i + -216 + 7], _ = s[4] - s[8], s[4] += s[8], s[8] = _ * e[i + -216 + 7], _ = s[5] - s[9], s[5] += s[9], s[9] = _ * e[i + -216 + 7], _ = s[0] - s[12], s[0] += s[12], s[12] = _ * e[i + -72 + 7], _ = s[1] - s[13], s[1] += s[13], s[13] = _ * e[i + -72 + 7], _ = s[16] - s[28], s[16] += s[28], s[28] = _ * e[i + -72 + 7], _ = -s[17] + s[29], s[17] += s[29], s[29] = _ * e[i + -72 + 7], _ = c.SQRT2 * (s[2] - s[10]), s[2] += s[10], s[10] = _, _ = c.SQRT2 * (s[3] - s[11]), s[3] += s[11], s[11] = _, _ = c.SQRT2 * (-s[18] + s[26]), s[18] += s[26], s[26] = _ - s[18], _ = c.SQRT2 * (-s[19] + s[27]), s[19] += s[27], s[27] = _ - s[19], _ = s[2], s[19] -= s[3], s[3] -= _, s[2] = s[31] - _, s[31] += _, _ = s[3], s[11] -= s[19], s[18] -= _, s[3] = s[30] - _, s[30] += _, _ = s[18], s[27] -= s[11], s[19] -= _, s[18] = s[15] - _, s[15] += _, _ = s[19], s[10] -= _, s[19] = s[14] - _, s[14] += _, _ = s[10], s[11] -= _, s[10] = s[23] - _, s[23] += _, _ = s[11], s[26] -= _, s[11] = s[22] - _, s[22] += _, _ = s[26], s[27] -= _, s[26] = s[7] - _, s[7] += _, _ = s[27], s[27] = s[6] - _, s[6] += _, _ = c.SQRT2 * (s[0] - s[4]), s[0] += s[4], s[4] = _, _ = c.SQRT2 * (s[1] - s[5]), s[1] += s[5], s[5] = _, _ = c.SQRT2 * (s[16] - s[20]), s[16] += s[20], s[20] = _, _ = c.SQRT2 * (s[17] - s[21]), s[17] += s[21], s[21] = _, _ = -c.SQRT2 * (s[8] - s[12]), s[8] += s[12], s[12] = _ - s[8], _ = -c.SQRT2 * (s[9] - s[13]), s[9] += s[13], s[13] = _ - s[9], _ = -c.SQRT2 * (s[25] - s[29]), s[25] += s[29], s[29] = _ - s[25], _ = -c.SQRT2 * (s[24] + s[28]), s[24] -= s[28], s[28] = _ - s[24], _ = s[24] - s[16], s[24] = _, _ = s[20] - _, s[20] = _, _ = s[28] - _, s[28] = _, _ = s[25] - s[17], s[25] = _, _ = s[21] - _, s[21] = _, _ = s[29] - _, s[29] = _, _ = s[17] - s[1], s[17] = _, _ = s[9] - _, s[9] = _, _ = s[25] - _, s[25] = _, _ = s[5] - _, s[5] = _, _ = s[21] - _, s[21] = _, _ = s[13] - _, s[13] = _, _ = s[29] - _, s[29] = _, _ = s[1] - s[0], s[1] = _, _ = s[16] - _, s[16] = _, _ = s[17] - _, s[17] = _, _ = s[8] - _, s[8] = _, _ = s[9] - _, s[9] = _, _ = s[24] - _, s[24] = _, _ = s[25] - _, s[25] = _, _ = s[4] - _, s[4] = _, _ = s[5] - _, s[5] = _, _ = s[20] - _, s[20] = _, _ = s[21] - _, s[21] = _, _ = s[12] - _, s[12] = _, _ = s[13] - _, s[13] = _, _ = s[28] - _, s[28] = _, _ = s[29] - _, s[29] = _, _ = s[0], s[0] += s[31], s[31] -= _, _ = s[1], s[1] += s[30], s[30] -= _, _ = s[16], s[16] += s[15], s[15] -= _, _ = s[17], s[17] += s[14], s[14] -= _, _ = s[8], s[8] += s[23], s[23] -= _, _ = s[9], s[9] += s[22], s[22] -= _, _ = s[24], s[24] += s[7], s[7] -= _, _ = s[25], s[25] += s[6], s[6] -= _, _ = s[4], s[4] += s[27], s[27] -= _, _ = s[5], s[5] += s[26], s[26] -= _, _ = s[20], s[20] += s[11], s[11] -= _, _ = s[21], s[21] += s[10], s[10] -= _, _ = s[12], s[12] += s[19], s[19] -= _, _ = s[13], s[13] += s[18], s[18] -= _, _ = s[28], s[28] += s[3], s[3] -= _, _ = s[29], s[29] += s[2], s[2] -= _;
    }

    function h(e, t) {
      for (var s = 0; s < 3; s++) {
        var n, r, _, i, o, l;

        r = (i = e[t + 6] * a[Y.SHORT_TYPE][0] - e[t + 15]) + (n = e[t + 0] * a[Y.SHORT_TYPE][2] - e[t + 9]), _ = i - n, o = (i = e[t + 15] * a[Y.SHORT_TYPE][0] + e[t + 6]) + (n = e[t + 9] * a[Y.SHORT_TYPE][2] + e[t + 0]), l = -i + n, n = 2.069978111953089e-11 * (e[t + 3] * a[Y.SHORT_TYPE][1] - e[t + 12]), i = 2.069978111953089e-11 * (e[t + 12] * a[Y.SHORT_TYPE][1] + e[t + 3]), e[t + 0] = 1.90752519173728e-11 * r + n, e[t + 15] = 1.90752519173728e-11 * -o + i, _ = .8660254037844387 * _ * 1.907525191737281e-11, o = .5 * o * 1.907525191737281e-11 + i, e[t + 3] = _ - o, e[t + 6] = _ + o, r = .5 * r * 1.907525191737281e-11 - n, l = .8660254037844387 * l * 1.907525191737281e-11, e[t + 9] = r + l, e[t + 12] = r - l, t++;
      }
    }

    this.mdct_sub48 = function (e, c, u) {
      for (var b, m, p, d, v, g, S, R, M, A, B, w, T, E, k, x, y, P, I, H, V, O = c, L = 286, N = 0; N < e.channels_out; N++) {
        for (var D = 0; D < e.mode_gr; D++) {
          for (var X, q = e.l3_side.tt[D][N], C = q.xr, F = 0, j = e.sb_sample[N][1 - D], G = 0, z = 0; z < 9; z++) for (o(O, L, j[G]), o(O, L + 32, j[G + 1]), G += 2, L += 64, X = 1; X < 32; X += 2) j[G - 1][X] *= -1;

          for (X = 0; X < 32; X++, F += 18) {
            var K = q.block_type,
                Z = e.sb_sample[N][D],
                Q = e.sb_sample[N][1 - D];
            if (0 != q.mixed_block_flag && X < 2 && (K = 0), e.amp_filter[X] < 1e-12) l.fill(C, F + 0, F + 18, 0);else {
              if (e.amp_filter[X] < 1) for (z = 0; z < 18; z++) Q[z][i[X]] *= e.amp_filter[X];

              if (K == Y.SHORT_TYPE) {
                for (z = -3; z < 0; z++) {
                  var U = a[Y.SHORT_TYPE][z + 3];
                  C[F + 3 * z + 9] = Z[9 + z][i[X]] * U - Z[8 - z][i[X]], C[F + 3 * z + 18] = Z[14 - z][i[X]] * U + Z[15 + z][i[X]], C[F + 3 * z + 10] = Z[15 + z][i[X]] * U - Z[14 - z][i[X]], C[F + 3 * z + 19] = Q[2 - z][i[X]] * U + Q[3 + z][i[X]], C[F + 3 * z + 11] = Q[3 + z][i[X]] * U - Q[2 - z][i[X]], C[F + 3 * z + 20] = Q[8 - z][i[X]] * U + Q[9 + z][i[X]];
                }

                h(C, F);
              } else {
                var W = s(18);

                for (z = -9; z < 0; z++) {
                  var J, $;
                  J = a[K][z + 27] * Q[z + 9][i[X]] + a[K][z + 36] * Q[8 - z][i[X]], $ = a[K][z + 9] * Z[z + 9][i[X]] - a[K][z + 18] * Z[8 - z][i[X]], W[z + 9] = J - $ * t[3 + z + 9], W[z + 18] = J * t[3 + z + 9] + $;
                }

                b = C, m = F, d = void 0, v = void 0, g = void 0, S = void 0, R = void 0, M = void 0, A = void 0, B = void 0, w = void 0, T = void 0, E = void 0, k = void 0, x = void 0, y = void 0, P = void 0, I = void 0, H = void 0, V = void 0, g = (p = W)[17] - p[9], R = p[15] - p[11], M = p[14] - p[12], A = p[0] + p[8], B = p[1] + p[7], w = p[2] + p[6], T = p[3] + p[5], b[m + 17] = A + w - T - (B - p[4]), v = (A + w - T) * n[19] + (B - p[4]), d = (g - R - M) * n[18], b[m + 5] = d + v, b[m + 6] = d - v, S = (p[16] - p[10]) * n[18], B = B * n[19] + p[4], d = g * n[12] + S + R * n[13] + M * n[14], v = -A * n[16] + B - w * n[17] + T * n[15], b[m + 1] = d + v, b[m + 2] = d - v, d = g * n[13] - S - R * n[14] + M * n[12], v = -A * n[17] + B - w * n[15] + T * n[16], b[m + 9] = d + v, b[m + 10] = d - v, d = g * n[14] - S + R * n[12] - M * n[13], v = A * n[15] - B + w * n[16] - T * n[17], b[m + 13] = d + v, b[m + 14] = d - v, E = p[8] - p[0], x = p[6] - p[2], y = p[5] - p[3], P = p[17] + p[9], I = p[16] + p[10], H = p[15] + p[11], V = p[14] + p[12], b[m + 0] = P + H + V + (I + p[13]), d = (P + H + V) * n[19] - (I + p[13]), v = (E - x + y) * n[18], b[m + 11] = d + v, b[m + 12] = d - v, k = (p[7] - p[1]) * n[18], I = p[13] - I * n[19], d = P * n[15] - I + H * n[16] + V * n[17], v = E * n[14] + k + x * n[12] + y * n[13], b[m + 3] = d + v, b[m + 4] = d - v, d = -P * n[17] + I - H * n[15] - V * n[16], v = E * n[13] + k - x * n[14] - y * n[12], b[m + 7] = d + v, b[m + 8] = d - v, d = -P * n[16] + I - H * n[17] - V * n[15], v = E * n[12] - k + x * n[13] - y * n[14], b[m + 15] = d + v, b[m + 16] = d - v;
              }
            }
            if (K != Y.SHORT_TYPE && 0 != X) for (z = 7; z >= 0; --z) {
              var ee, ae;
              ee = C[F + z] * r[20 + z] + C[F + -1 - z] * _[28 + z], ae = C[F + z] * _[28 + z] - C[F + -1 - z] * r[20 + z], C[F + -1 - z] = ee, C[F + z] = ae;
            }
          }
        }

        if (O = u, L = 286, 1 == e.mode_gr) for (var te = 0; te < 18; te++) f.arraycopy(e.sb_sample[N][1][te], 0, e.sb_sample[N][0][te], 0, 32);
      }
    };
  }

  function X() {
    this.thm = new j(), this.en = new j();
  }

  function Y() {
    var e = Y.FFTOFFSET,
        a = Y.MPG_MD_MS_LR,
        n = null;
    this.psy = null;
    var _ = null,
        i = null,
        l = null;

    this.setModules = function (e, a, t, s) {
      n = e, this.psy = a, _ = a, i = s, l = t;
    };

    var c = new D();

    this.lame_encode_mp3_frame = function (h, u, p, d, v, g) {
      var S,
          R = o([2, 2]);
      R[0][0] = new X(), R[0][1] = new X(), R[1][0] = new X(), R[1][1] = new X();
      var M,
          A = o([2, 2]);
      A[0][0] = new X(), A[0][1] = new X(), A[1][0] = new X(), A[1][1] = new X();
      var B,
          w,
          T,
          E = [null, null],
          k = h.internal_flags,
          x = r([2, 4]),
          y = [.5, .5],
          P = [[0, 0], [0, 0]],
          I = [[0, 0], [0, 0]];

      if (E[0] = u, E[1] = p, 0 == k.lame_encode_frame_init && function (e, a) {
        var t,
            n,
            r = e.internal_flags;

        if (0 == r.lame_encode_frame_init) {
          var _,
              i,
              o = s(2014),
              l = s(2014);

          for (r.lame_encode_frame_init = 1, _ = 0, i = 0; _ < 286 + 576 * (1 + r.mode_gr); ++_) _ < 576 * r.mode_gr ? (o[_] = 0, 2 == r.channels_out && (l[_] = 0)) : (o[_] = a[0][i], 2 == r.channels_out && (l[_] = a[1][i]), ++i);

          for (n = 0; n < r.mode_gr; n++) for (t = 0; t < r.channels_out; t++) r.l3_side.tt[n][t].block_type = Y.SHORT_TYPE;

          c.mdct_sub48(r, o, l);
        }
      }(h, E), k.padding = 0, (k.slot_lag -= k.frac_SpF) < 0 && (k.slot_lag += h.out_samplerate, k.padding = 1), 0 != k.psymodel) {
        var H = [null, null],
            V = 0,
            O = t(2);

        for (T = 0; T < k.mode_gr; T++) {
          for (w = 0; w < k.channels_out; w++) H[w] = E[w], V = 576 + 576 * T - Y.FFTOFFSET;

          if (0 != (h.VBR == b.vbr_mtrh || h.VBR == b.vbr_mt ? _.L3psycho_anal_vbr(h, H, V, T, R, A, P[T], I[T], x[T], O) : _.L3psycho_anal_ns(h, H, V, T, R, A, P[T], I[T], x[T], O))) return -4;

          for (h.mode == m.JOINT_STEREO && (y[T] = x[T][2] + x[T][3], y[T] > 0 && (y[T] = x[T][3] / y[T])), w = 0; w < k.channels_out; w++) {
            var L = k.l3_side.tt[T][w];
            L.block_type = O[w], L.mixed_block_flag = 0;
          }
        }
      } else for (T = 0; T < k.mode_gr; T++) for (w = 0; w < k.channels_out; w++) k.l3_side.tt[T][w].block_type = Y.NORM_TYPE, k.l3_side.tt[T][w].mixed_block_flag = 0, I[T][w] = P[T][w] = 700;

      if (function (e) {
        var a, t;
        if (0 != e.ATH.useAdjust) {
          if (t = e.loudness_sq[0][0], a = e.loudness_sq[1][0], 2 == e.channels_out ? (t += e.loudness_sq[0][1], a += e.loudness_sq[1][1]) : (t += t, a += a), 2 == e.mode_gr && (t = Math.max(t, a)), t *= .5, (t *= e.ATH.aaSensitivityP) > .03125) e.ATH.adjust >= 1 ? e.ATH.adjust = 1 : e.ATH.adjust < e.ATH.adjustLimit && (e.ATH.adjust = e.ATH.adjustLimit), e.ATH.adjustLimit = 1;else {
            var s = 31.98 * t + 625e-6;
            e.ATH.adjust >= s ? (e.ATH.adjust *= .075 * s + .925, e.ATH.adjust < s && (e.ATH.adjust = s)) : e.ATH.adjustLimit >= s ? e.ATH.adjust = s : e.ATH.adjust < e.ATH.adjustLimit && (e.ATH.adjust = e.ATH.adjustLimit), e.ATH.adjustLimit = s;
          }
        } else e.ATH.adjust = 1;
      }(k), c.mdct_sub48(k, E[0], E[1]), k.mode_ext = Y.MPG_MD_LR_LR, h.force_ms) k.mode_ext = Y.MPG_MD_MS_LR;else if (h.mode == m.JOINT_STEREO) {
        var N = 0,
            D = 0;

        for (T = 0; T < k.mode_gr; T++) for (w = 0; w < k.channels_out; w++) N += I[T][w], D += P[T][w];

        if (N <= 1 * D) {
          var q = k.l3_side.tt[0],
              C = k.l3_side.tt[k.mode_gr - 1];
          q[0].block_type == q[1].block_type && C[0].block_type == C[1].block_type && (k.mode_ext = Y.MPG_MD_MS_LR);
        }
      }
      if (k.mode_ext == a ? (M = A, B = I) : (M = R, B = P), h.analysis && null != k.pinfo) for (T = 0; T < k.mode_gr; T++) for (w = 0; w < k.channels_out; w++) k.pinfo.ms_ratio[T] = k.ms_ratio[T], k.pinfo.ms_ener_ratio[T] = y[T], k.pinfo.blocktype[T][w] = k.l3_side.tt[T][w].block_type, k.pinfo.pe[T][w] = B[T][w], f.arraycopy(k.l3_side.tt[T][w].xr, 0, k.pinfo.xr[T][w], 0, 576), k.mode_ext == a && (k.pinfo.ers[T][w] = k.pinfo.ers[T][w + 2], f.arraycopy(k.pinfo.energy[T][w + 2], 0, k.pinfo.energy[T][w], 0, k.pinfo.energy[T][w].length));

      if (h.VBR == b.vbr_off || h.VBR == b.vbr_abr) {
        var F, j;

        for (F = 0; F < 18; F++) k.nsPsy.pefirbuf[F] = k.nsPsy.pefirbuf[F + 1];

        for (j = 0, T = 0; T < k.mode_gr; T++) for (w = 0; w < k.channels_out; w++) j += B[T][w];

        for (k.nsPsy.pefirbuf[18] = j, j = k.nsPsy.pefirbuf[9], F = 0; F < 9; F++) j += (k.nsPsy.pefirbuf[F] + k.nsPsy.pefirbuf[18 - F]) * Y.fircoef[F];

        for (j = 3350 * k.mode_gr * k.channels_out / j, T = 0; T < k.mode_gr; T++) for (w = 0; w < k.channels_out; w++) B[T][w] *= j;
      }

      if (k.iteration_loop.iteration_loop(h, B, y, M), n.format_bitstream(h), S = n.copy_buffer(k, d, v, g, 1), h.bWriteVbrTag && i.addVbrFrame(h), h.analysis && null != k.pinfo) {
        for (w = 0; w < k.channels_out; w++) {
          var G;

          for (G = 0; G < e; G++) k.pinfo.pcmdata[w][G] = k.pinfo.pcmdata[w][G + h.framesize];

          for (G = e; G < 1600; G++) k.pinfo.pcmdata[w][G] = E[w][G - e];
        }

        l.set_frame_pinfo(h, M);
      }

      return function (e) {
        var a, t;

        for (e.bitrate_stereoMode_Hist[e.bitrate_index][4]++, e.bitrate_stereoMode_Hist[15][4]++, 2 == e.channels_out && (e.bitrate_stereoMode_Hist[e.bitrate_index][e.mode_ext]++, e.bitrate_stereoMode_Hist[15][e.mode_ext]++), a = 0; a < e.mode_gr; ++a) for (t = 0; t < e.channels_out; ++t) {
          var s = 0 | e.l3_side.tt[a][t].block_type;
          0 != e.l3_side.tt[a][t].mixed_block_flag && (s = 4), e.bitrate_blockType_Hist[e.bitrate_index][s]++, e.bitrate_blockType_Hist[e.bitrate_index][5]++, e.bitrate_blockType_Hist[15][s]++, e.bitrate_blockType_Hist[15][5]++;
        }
      }(k), S;
    };
  }

  function q() {
    this.sum = 0, this.seen = 0, this.want = 0, this.pos = 0, this.size = 0, this.bag = null, this.nVbrNumFrames = 0, this.nBytesWritten = 0, this.TotalFrameSize = 0;
  }

  function C() {
    this.tt = [[null, null], [null, null]], this.main_data_begin = 0, this.private_bits = 0, this.resvDrain_pre = 0, this.resvDrain_post = 0, this.scfsi = [t(4), t(4)];

    for (var e = 0; e < 2; e++) for (var a = 0; a < 2; a++) this.tt[e][a] = new O();
  }

  function F() {
    this.last_en_subshort = r([4, 9]), this.lastAttacks = t(4), this.pefirbuf = s(19), this.longfact = s(Y.SBMAX_l), this.shortfact = s(Y.SBMAX_s), this.attackthre = 0, this.attackthre_s = 0;
  }

  function j() {
    this.l = s(Y.SBMAX_l), this.s = r([Y.SBMAX_s, 3]);
    var e = this;

    this.assign = function (a) {
      f.arraycopy(a.l, 0, e.l, 0, Y.SBMAX_l);

      for (var t = 0; t < Y.SBMAX_s; t++) for (var s = 0; s < 3; s++) e.s[t][s] = a.s[t][s];
    };
  }

  function G() {
    var a = 40;

    function i() {
      this.write_timing = 0, this.ptr = 0, this.buf = e(a);
    }

    this.Class_ID = 0, this.lame_encode_frame_init = 0, this.iteration_init_init = 0, this.fill_buffer_resample_init = 0, this.mfbuf = r([2, G.MFSIZE]), this.mode_gr = 0, this.channels_in = 0, this.channels_out = 0, this.resample_ratio = 0, this.mf_samples_to_encode = 0, this.mf_size = 0, this.VBR_min_bitrate = 0, this.VBR_max_bitrate = 0, this.bitrate_index = 0, this.samplerate_index = 0, this.mode_ext = 0, this.lowpass1 = 0, this.lowpass2 = 0, this.highpass1 = 0, this.highpass2 = 0, this.noise_shaping = 0, this.noise_shaping_amp = 0, this.substep_shaping = 0, this.psymodel = 0, this.noise_shaping_stop = 0, this.subblock_gain = 0, this.use_best_huffman = 0, this.full_outer_loop = 0, this.l3_side = new C(), this.ms_ratio = s(2), this.padding = 0, this.frac_SpF = 0, this.slot_lag = 0, this.tag_spec = null, this.nMusicCRC = 0, this.OldValue = t(2), this.CurrentStep = t(2), this.masking_lower = 0, this.bv_scf = t(576), this.pseudohalf = t(L.SFBMAX), this.sfb21_extra = !1, this.inbuf_old = new Array(2), this.blackfilt = new Array(2 * G.BPC + 1), this.itime = n(2), this.sideinfo_len = 0, this.sb_sample = r([2, 2, 18, Y.SBLIMIT]), this.amp_filter = s(32), this.header = new Array(G.MAX_HEADER_BUF), this.h_ptr = 0, this.w_ptr = 0, this.ancillary_flag = 0, this.ResvSize = 0, this.ResvMax = 0, this.scalefac_band = new I(), this.minval_l = s(Y.CBANDS), this.minval_s = s(Y.CBANDS), this.nb_1 = r([4, Y.CBANDS]), this.nb_2 = r([4, Y.CBANDS]), this.nb_s1 = r([4, Y.CBANDS]), this.nb_s2 = r([4, Y.CBANDS]), this.s3_ss = null, this.s3_ll = null, this.decay = 0, this.thm = new Array(4), this.en = new Array(4), this.tot_ener = s(4), this.loudness_sq = r([2, 2]), this.loudness_sq_save = s(2), this.mld_l = s(Y.SBMAX_l), this.mld_s = s(Y.SBMAX_s), this.bm_l = t(Y.SBMAX_l), this.bo_l = t(Y.SBMAX_l), this.bm_s = t(Y.SBMAX_s), this.bo_s = t(Y.SBMAX_s), this.npart_l = 0, this.npart_s = 0, this.s3ind = _([Y.CBANDS, 2]), this.s3ind_s = _([Y.CBANDS, 2]), this.numlines_s = t(Y.CBANDS), this.numlines_l = t(Y.CBANDS), this.rnumlines_l = s(Y.CBANDS), this.mld_cb_l = s(Y.CBANDS), this.mld_cb_s = s(Y.CBANDS), this.numlines_s_num1 = 0, this.numlines_l_num1 = 0, this.pe = s(4), this.ms_ratio_s_old = 0, this.ms_ratio_l_old = 0, this.ms_ener_ratio_old = 0, this.blocktype_old = t(2), this.nsPsy = new F(), this.VBR_seek_table = new q(), this.ATH = null, this.PSY = null, this.nogap_total = 0, this.nogap_current = 0, this.decode_on_the_fly = !0, this.findReplayGain = !0, this.findPeakSample = !0, this.PeakSample = 0, this.RadioGain = 0, this.AudiophileGain = 0, this.rgdata = null, this.noclipGainChange = 0, this.noclipScale = 0, this.bitrate_stereoMode_Hist = _([16, 5]), this.bitrate_blockType_Hist = _([16, 6]), this.pinfo = null, this.hip = null, this.in_buffer_nsamples = 0, this.in_buffer_0 = null, this.in_buffer_1 = null, this.iteration_loop = null;

    for (var o = 0; o < this.en.length; o++) this.en[o] = new j();

    for (o = 0; o < this.thm.length; o++) this.thm[o] = new j();

    for (o = 0; o < this.header.length; o++) this.header[o] = new i();
  }

  function z() {
    var e = s(Y.BLKSIZE),
        a = s(Y.BLKSIZE_s / 2),
        t = [.9238795325112867, .3826834323650898, .9951847266721969, .0980171403295606, .9996988186962042, .02454122852291229, .9999811752826011, .006135884649154475];

    function n(e, a, s) {
      var n,
          r,
          _,
          i = 0,
          o = a + (s <<= 1);

      n = 4;

      do {
        var l, f, h, u, b, m, p;
        p = n >> 1, m = (b = n << 1) + (u = n), n = b << 1, _ = (r = a) + p;

        do {
          A = e[r + 0] - e[r + u], M = e[r + 0] + e[r + u], E = e[r + b] - e[r + m], w = e[r + b] + e[r + m], e[r + b] = M - w, e[r + 0] = M + w, e[r + m] = A - E, e[r + u] = A + E, A = e[_ + 0] - e[_ + u], M = e[_ + 0] + e[_ + u], E = c.SQRT2 * e[_ + m], w = c.SQRT2 * e[_ + b], e[_ + b] = M - w, e[_ + 0] = M + w, e[_ + m] = A - E, e[_ + u] = A + E, _ += n, r += n;
        } while (r < o);

        for (f = t[i + 0], l = t[i + 1], h = 1; h < p; h++) {
          var d, v;
          d = 1 - 2 * l * l, v = 2 * l * f, r = a + h, _ = a + u - h;

          do {
            var g, S, R, M, A, B, w, T, E, k;
            S = v * e[r + u] - d * e[_ + u], g = d * e[r + u] + v * e[_ + u], A = e[r + 0] - g, M = e[r + 0] + g, B = e[_ + 0] - S, R = e[_ + 0] + S, S = v * e[r + m] - d * e[_ + m], g = d * e[r + m] + v * e[_ + m], E = e[r + b] - g, w = e[r + b] + g, k = e[_ + b] - S, T = e[_ + b] + S, S = l * w - f * k, g = f * w + l * k, e[r + b] = M - g, e[r + 0] = M + g, e[_ + m] = B - S, e[_ + u] = B + S, S = f * T - l * E, g = l * T + f * E, e[_ + b] = R - g, e[_ + 0] = R + g, e[r + m] = A - S, e[r + u] = A + S, _ += n, r += n;
          } while (r < o);

          f = (d = f) * t[i + 0] - l * t[i + 1], l = d * t[i + 1] + l * t[i + 0];
        }

        i += 2;
      } while (n < s);
    }

    var r = [0, 128, 64, 192, 32, 160, 96, 224, 16, 144, 80, 208, 48, 176, 112, 240, 8, 136, 72, 200, 40, 168, 104, 232, 24, 152, 88, 216, 56, 184, 120, 248, 4, 132, 68, 196, 36, 164, 100, 228, 20, 148, 84, 212, 52, 180, 116, 244, 12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254];
    this.fft_short = function (e, t, s, _, i) {
      for (var o = 0; o < 3; o++) {
        var l = Y.BLKSIZE_s / 2,
            f = 65535 & 192 * (o + 1),
            c = Y.BLKSIZE_s / 8 - 1;

        do {
          var h,
              u,
              b,
              m,
              p,
              d = 255 & r[c << 2];
          u = (h = a[d] * _[s][i + d + f]) - (p = a[127 - d] * _[s][i + d + f + 128]), h += p, m = (b = a[d + 64] * _[s][i + d + f + 64]) - (p = a[63 - d] * _[s][i + d + f + 192]), b += p, l -= 4, t[o][l + 0] = h + b, t[o][l + 2] = h - b, t[o][l + 1] = u + m, t[o][l + 3] = u - m, u = (h = a[d + 1] * _[s][i + d + f + 1]) - (p = a[126 - d] * _[s][i + d + f + 129]), h += p, m = (b = a[d + 65] * _[s][i + d + f + 65]) - (p = a[62 - d] * _[s][i + d + f + 193]), b += p, t[o][l + Y.BLKSIZE_s / 2 + 0] = h + b, t[o][l + Y.BLKSIZE_s / 2 + 2] = h - b, t[o][l + Y.BLKSIZE_s / 2 + 1] = u + m, t[o][l + Y.BLKSIZE_s / 2 + 3] = u - m;
        } while (--c >= 0);

        n(t[o], l, Y.BLKSIZE_s / 2);
      }
    }, this.fft_long = function (a, t, s, _, i) {
      var o = Y.BLKSIZE / 8 - 1,
          l = Y.BLKSIZE / 2;

      do {
        var f,
            c,
            h,
            u,
            b,
            m = 255 & r[o];
        c = (f = e[m] * _[s][i + m]) - (b = e[m + 512] * _[s][i + m + 512]), f += b, u = (h = e[m + 256] * _[s][i + m + 256]) - (b = e[m + 768] * _[s][i + m + 768]), h += b, t[(l -= 4) + 0] = f + h, t[l + 2] = f - h, t[l + 1] = c + u, t[l + 3] = c - u, c = (f = e[m + 1] * _[s][i + m + 1]) - (b = e[m + 513] * _[s][i + m + 513]), f += b, u = (h = e[m + 257] * _[s][i + m + 257]) - (b = e[m + 769] * _[s][i + m + 769]), h += b, t[l + Y.BLKSIZE / 2 + 0] = f + h, t[l + Y.BLKSIZE / 2 + 2] = f - h, t[l + Y.BLKSIZE / 2 + 1] = c + u, t[l + Y.BLKSIZE / 2 + 3] = c - u;
      } while (--o >= 0);

      n(t, l, Y.BLKSIZE / 2);
    }, this.init_fft = function (t) {
      for (var s = 0; s < Y.BLKSIZE; s++) e[s] = .42 - .5 * Math.cos(2 * Math.PI * (s + .5) / Y.BLKSIZE) + .08 * Math.cos(4 * Math.PI * (s + .5) / Y.BLKSIZE);

      for (s = 0; s < Y.BLKSIZE_s / 2; s++) a[s] = .5 * (1 - Math.cos(2 * Math.PI * (s + .5) / Y.BLKSIZE_s));
    };
  }

  function K() {
    var e = new z(),
        a = 2.302585092994046,
        n = 2,
        _ = 16,
        i = 2,
        o = 16,
        f = .34,
        p = 1 / 217621504 / (Y.BLKSIZE / 2),
        d = .3,
        v = 21,
        g = .2302585093;

    function S(e) {
      return e;
    }

    function R(e, a) {
      for (var t = 0, s = 0; s < Y.BLKSIZE / 2; ++s) t += e[s] * a.ATH.eql_w[s];

      return t *= p;
    }

    function M(a, t, s, n, r, _, i, o, l, f, h) {
      var u = a.internal_flags;
      if (l < 2) e.fft_long(u, n[r], l, f, h), e.fft_short(u, _[i], l, f, h);else if (2 == l) {
        for (var b = Y.BLKSIZE - 1; b >= 0; --b) {
          var m = n[r + 0][b],
              p = n[r + 1][b];
          n[r + 0][b] = (m + p) * c.SQRT2 * .5, n[r + 1][b] = (m - p) * c.SQRT2 * .5;
        }

        for (var d = 2; d >= 0; --d) for (b = Y.BLKSIZE_s - 1; b >= 0; --b) {
          m = _[i + 0][d][b], p = _[i + 1][d][b];
          _[i + 0][d][b] = (m + p) * c.SQRT2 * .5, _[i + 1][d][b] = (m - p) * c.SQRT2 * .5;
        }
      }
      t[0] = S(n[r + 0][0]), t[0] *= t[0];

      for (b = Y.BLKSIZE / 2 - 1; b >= 0; --b) {
        var v = n[r + 0][Y.BLKSIZE / 2 - b],
            g = n[r + 0][Y.BLKSIZE / 2 + b];
        t[Y.BLKSIZE / 2 - b] = S(.5 * (v * v + g * g));
      }

      for (d = 2; d >= 0; --d) {
        s[d][0] = _[i + 0][d][0], s[d][0] *= s[d][0];

        for (b = Y.BLKSIZE_s / 2 - 1; b >= 0; --b) {
          v = _[i + 0][d][Y.BLKSIZE_s / 2 - b], g = _[i + 0][d][Y.BLKSIZE_s / 2 + b];
          s[d][Y.BLKSIZE_s / 2 - b] = S(.5 * (v * v + g * g));
        }
      }

      var M = 0;

      for (b = 11; b < Y.HBLKSIZE; b++) M += t[b];

      if (u.tot_ener[l] = M, a.analysis) {
        for (b = 0; b < Y.HBLKSIZE; b++) u.pinfo.energy[o][l][b] = u.pinfo.energy_save[l][b], u.pinfo.energy_save[l][b] = t[b];

        u.pinfo.pe[o][l] = u.pe[l];
      }

      2 == a.athaa_loudapprox && l < 2 && (u.loudness_sq[o][l] = u.loudness_sq_save[l], u.loudness_sq_save[l] = R(t, u));
    }

    var A,
        B,
        w,
        T = 8,
        E = 23,
        k = 15,
        x = [1, .79433, .63096, .63096, .63096, .63096, .63096, .25119, .11749];
    var y = [3.3246 * 3.3246, 3.23837 * 3.23837, 9.9500500969, 9.0247369744, 8.1854926609, 7.0440875649, 2.46209 * 2.46209, 2.284 * 2.284, 4.4892710641, 1.96552 * 1.96552, 1.82335 * 1.82335, 1.69146 * 1.69146, 2.4621061921, 2.1508568964, 1.37074 * 1.37074, 1.31036 * 1.31036, 1.5691069696, 1.4555939904, 1.16203 * 1.16203, 1.2715945225, 1.09428 * 1.09428, 1.0659 * 1.0659, 1.0779838276, 1.0382591025, 1],
        P = [1.7782755904, 1.35879 * 1.35879, 1.38454 * 1.38454, 1.39497 * 1.39497, 1.40548 * 1.40548, 1.3537 * 1.3537, 1.6999465924, 1.22321 * 1.22321, 1.3169398564, 1],
        I = [5.5396212496, 2.29259 * 2.29259, 4.9868695969, 2.12675 * 2.12675, 2.02545 * 2.02545, 1.87894 * 1.87894, 1.74303 * 1.74303, 1.61695 * 1.61695, 2.2499700001, 1.39148 * 1.39148, 1.29083 * 1.29083, 1.19746 * 1.19746, 1.2339655056, 1.0779838276];

    function H(e, a, t, s, n, r) {
      var _;

      if (a > e) {
        if (!(a < e * B)) return e + a;
        _ = a / e;
      } else {
        if (e >= a * B) return e + a;
        _ = e / a;
      }

      if (e += a, s + 3 <= 6) {
        if (_ >= A) return e;
        var i = 0 | c.FAST_LOG10_X(_, 16);
        return e * P[i];
      }

      var o, l;
      i = 0 | c.FAST_LOG10_X(_, 16);
      return a = 0 != r ? n.ATH.cb_s[t] * n.ATH.adjust : n.ATH.cb_l[t] * n.ATH.adjust, e < w * a ? e > a ? (o = 1, i <= 13 && (o = I[i]), l = c.FAST_LOG10_X(e / a, 10 / 15), e * ((y[i] - o) * l + o)) : i > 13 ? e : e * I[i] : e * y[i];
    }

    var V = [1.7782755904, 1.35879 * 1.35879, 1.38454 * 1.38454, 1.39497 * 1.39497, 1.40548 * 1.40548, 1.3537 * 1.3537, 1.6999465924, 1.22321 * 1.22321, 1.3169398564, 1];

    function O(e, a, t) {
      var s;
      if (e < 0 && (e = 0), a < 0 && (a = 0), e <= 0) return a;
      if (a <= 0) return e;

      if (s = a > e ? a / e : e / a, -2 <= t && t <= 2) {
        if (s >= A) return e + a;
        var n = 0 | c.FAST_LOG10_X(s, 16);
        return (e + a) * V[n];
      }

      return s < B ? e + a : (e < a && (e = a), e);
    }

    function L(e, a, t, s, n) {
      var r,
          _,
          i = 0,
          o = 0;

      for (r = _ = 0; r < Y.SBMAX_s; ++_, ++r) {
        for (var l = e.bo_s[r], f = e.npart_s, c = l < f ? l : f; _ < c;) i += a[_], o += t[_], _++;

        if (e.en[s].s[r][n] = i, e.thm[s].s[r][n] = o, _ >= f) {
          ++r;
          break;
        }

        var h = e.PSY.bo_s_weight[r],
            u = 1 - h;
        i = h * a[_], o = h * t[_], e.en[s].s[r][n] += i, e.thm[s].s[r][n] += o, i = u * a[_], o = u * t[_];
      }

      for (; r < Y.SBMAX_s; ++r) e.en[s].s[r][n] = 0, e.thm[s].s[r][n] = 0;
    }

    function N(e, a, t, s) {
      var n,
          r,
          _ = 0,
          i = 0;

      for (n = r = 0; n < Y.SBMAX_l; ++r, ++n) {
        for (var o = e.bo_l[n], l = e.npart_l, f = o < l ? o : l; r < f;) _ += a[r], i += t[r], r++;

        if (e.en[s].l[n] = _, e.thm[s].l[n] = i, r >= l) {
          ++n;
          break;
        }

        var c = e.PSY.bo_l_weight[n],
            h = 1 - c;
        _ = c * a[r], i = c * t[r], e.en[s].l[n] += _, e.thm[s].l[n] += i, _ = h * a[r], i = h * t[r];
      }

      for (; n < Y.SBMAX_l; ++n) e.en[s].l[n] = 0, e.thm[s].l[n] = 0;
    }

    function D(e, a, t, s, n, r) {
      var _,
          l,
          f = e.internal_flags;

      for (l = _ = 0; l < f.npart_s; ++l) {
        for (var c = 0, u = f.numlines_s[l], b = 0; b < u; ++b, ++_) {
          var m = a[r][_];
          c += m;
        }

        t[l] = c;
      }

      for (_ = l = 0; l < f.npart_s; l++) {
        var p = f.s3ind_s[l][0],
            d = f.s3_ss[_++] * t[p];

        for (++p; p <= f.s3ind_s[l][1];) d += f.s3_ss[_] * t[p], ++_, ++p;

        var v = i * f.nb_s1[n][l];

        if (s[l] = Math.min(d, v), f.blocktype_old[1 & n] == Y.SHORT_TYPE) {
          v = o * f.nb_s2[n][l];
          var g = s[l];
          s[l] = Math.min(v, g);
        }

        f.nb_s2[n][l] = f.nb_s1[n][l], f.nb_s1[n][l] = d;
      }

      for (; l <= Y.CBANDS; ++l) t[l] = 0, s[l] = 0;
    }

    function X(e, a, t) {
      return t >= 1 ? e : t <= 0 ? a : a > 0 ? Math.pow(e / a, t) * a : 0;
    }

    var q = [11.8, 13.6, 17.2, 32, 46.5, 51.3, 57.5, 67.1, 71.5, 84.6, 97.6, 130];

    function C(e, t) {
      for (var s = 309.07, n = 0; n < Y.SBMAX_s - 1; n++) for (var r = 0; r < 3; r++) {
        var _ = e.thm.s[n][r];

        if (_ > 0) {
          var i = _ * t,
              o = e.en.s[n][r];
          o > i && (s += o > 1e10 * i ? q[n] * (10 * a) : q[n] * c.FAST_LOG10(o / i));
        }
      }

      return s;
    }

    var F = [6.8, 5.8, 5.8, 6.4, 6.5, 9.9, 12.1, 14.4, 15, 18.9, 21.6, 26.9, 34.2, 40.2, 46.8, 56.5, 60.7, 73.9, 85.7, 93.4, 126.1];

    function j(e, t) {
      for (var s = 281.0575, n = 0; n < Y.SBMAX_l - 1; n++) {
        var r = e.thm.l[n];

        if (r > 0) {
          var _ = r * t,
              i = e.en.l[n];

          i > _ && (s += i > 1e10 * _ ? F[n] * (10 * a) : F[n] * c.FAST_LOG10(i / _));
        }
      }

      return s;
    }

    function G(e, a, t, s, n) {
      var r, _;

      for (r = _ = 0; r < e.npart_l; ++r) {
        var i,
            o = 0,
            l = 0;

        for (i = 0; i < e.numlines_l[r]; ++i, ++_) {
          var f = a[_];
          o += f, l < f && (l = f);
        }

        t[r] = o, s[r] = l, n[r] = o * e.rnumlines_l[r];
      }
    }

    function K(e, a, t, s) {
      var n = x.length - 1,
          r = 0,
          _ = t[r] + t[r + 1];

      _ > 0 ? ((i = a[r]) < a[r + 1] && (i = a[r + 1]), (o = 0 | (_ = 20 * (2 * i - _) / (_ * (e.numlines_l[r] + e.numlines_l[r + 1] - 1)))) > n && (o = n), s[r] = o) : s[r] = 0;

      for (r = 1; r < e.npart_l - 1; r++) {
        var i, o;
        if ((_ = t[r - 1] + t[r] + t[r + 1]) > 0) (i = a[r - 1]) < a[r] && (i = a[r]), i < a[r + 1] && (i = a[r + 1]), (o = 0 | (_ = 20 * (3 * i - _) / (_ * (e.numlines_l[r - 1] + e.numlines_l[r] + e.numlines_l[r + 1] - 1)))) > n && (o = n), s[r] = o;else s[r] = 0;
      }

      (_ = t[r - 1] + t[r]) > 0 ? ((i = a[r - 1]) < a[r] && (i = a[r]), (o = 0 | (_ = 20 * (2 * i - _) / (_ * (e.numlines_l[r - 1] + e.numlines_l[r] - 1)))) > n && (o = n), s[r] = o) : s[r] = 0;
    }

    var Z = [-1.730326e-17, -.01703172, -1.349528e-17, .0418072, -6.73278e-17, -.0876324, -3.0835e-17, .1863476, -1.104424e-16, -.627638];

    function Q(a, t, s, n, r, _, i, o) {
      var l = a.internal_flags;
      if (n < 2) e.fft_long(l, i[o], n, t, s);else if (2 == n) for (var f = Y.BLKSIZE - 1; f >= 0; --f) {
        var h = i[o + 0][f],
            u = i[o + 1][f];
        i[o + 0][f] = (h + u) * c.SQRT2 * .5, i[o + 1][f] = (h - u) * c.SQRT2 * .5;
      }
      _[0] = S(i[o + 0][0]), _[0] *= _[0];

      for (f = Y.BLKSIZE / 2 - 1; f >= 0; --f) {
        var b = i[o + 0][Y.BLKSIZE / 2 - f],
            m = i[o + 0][Y.BLKSIZE / 2 + f];
        _[Y.BLKSIZE / 2 - f] = S(.5 * (b * b + m * m));
      }

      var p = 0;

      for (f = 11; f < Y.HBLKSIZE; f++) p += _[f];

      if (l.tot_ener[n] = p, a.analysis) {
        for (f = 0; f < Y.HBLKSIZE; f++) l.pinfo.energy[r][n][f] = l.pinfo.energy_save[n][f], l.pinfo.energy_save[n][f] = _[f];

        l.pinfo.pe[r][n] = l.pe[n];
      }
    }

    function U(a, t, s, n, r, _, i, o) {
      var l = a.internal_flags;
      if (0 == r && n < 2 && e.fft_short(l, i[o], n, t, s), 2 == n) for (var f = Y.BLKSIZE_s - 1; f >= 0; --f) {
        var h = i[o + 0][r][f],
            u = i[o + 1][r][f];
        i[o + 0][r][f] = (h + u) * c.SQRT2 * .5, i[o + 1][r][f] = (h - u) * c.SQRT2 * .5;
      }
      _[r][0] = i[o + 0][r][0], _[r][0] *= _[r][0];

      for (f = Y.BLKSIZE_s / 2 - 1; f >= 0; --f) {
        var b = i[o + 0][r][Y.BLKSIZE_s / 2 - f],
            m = i[o + 0][r][Y.BLKSIZE_s / 2 + f];
        _[r][Y.BLKSIZE_s / 2 - f] = S(.5 * (b * b + m * m));
      }
    }

    function W(e, a, t, s) {
      var n = e.internal_flags;
      2 == e.athaa_loudapprox && t < 2 && (n.loudness_sq[a][t] = n.loudness_sq_save[t], n.loudness_sq_save[t] = R(s, n));
    }

    this.L3psycho_anal_ns = function (e, a, i, o, f, c, u, p, g, S) {
      var R,
          A,
          B,
          w,
          T,
          E,
          k,
          y,
          P,
          I,
          V = e.internal_flags,
          O = r([2, Y.BLKSIZE]),
          q = r([2, 3, Y.BLKSIZE_s]),
          F = s(Y.CBANDS + 1),
          z = s(Y.CBANDS + 1),
          Q = s(Y.CBANDS + 2),
          U = t(2),
          W = t(2),
          J = r([2, 576]),
          $ = t(Y.CBANDS + 2),
          ee = t(Y.CBANDS + 2);

      for (l.fill(ee, 0), R = V.channels_out, e.mode == m.JOINT_STEREO && (R = 4), P = e.VBR == b.vbr_off ? 0 == V.ResvMax ? 0 : V.ResvSize / V.ResvMax * .5 : e.VBR == b.vbr_rh || e.VBR == b.vbr_mtrh || e.VBR == b.vbr_mt ? .6 : 1, A = 0; A < V.channels_out; A++) {
        var ae = a[A],
            te = i + 576 - 350 - v + 192;

        for (w = 0; w < 576; w++) {
          var se, ne;

          for (se = ae[te + w + 10], ne = 0, T = 0; T < (v - 1) / 2 - 1; T += 2) se += Z[T] * (ae[te + w + T] + ae[te + w + v - T]), ne += Z[T + 1] * (ae[te + w + T + 1] + ae[te + w + v - T - 1]);

          J[A][w] = se + ne;
        }

        f[o][A].en.assign(V.en[A]), f[o][A].thm.assign(V.thm[A]), R > 2 && (c[o][A].en.assign(V.en[A + 2]), c[o][A].thm.assign(V.thm[A + 2]));
      }

      for (A = 0; A < R; A++) {
        var re,
            _e = s(12),
            ie = [0, 0, 0, 0],
            oe = s(12),
            le = 1,
            fe = s(Y.CBANDS),
            ce = s(Y.CBANDS),
            he = [0, 0, 0, 0],
            ue = s(Y.HBLKSIZE),
            be = r([3, Y.HBLKSIZE_s]);

        for (w = 0; w < 3; w++) _e[w] = V.nsPsy.last_en_subshort[A][w + 6], oe[w] = _e[w] / V.nsPsy.last_en_subshort[A][w + 4], ie[0] += _e[w];

        if (2 == A) for (w = 0; w < 576; w++) {
          var me, pe;
          me = J[0][w], pe = J[1][w], J[0][w] = me + pe, J[1][w] = me - pe;
        }
        var de = J[1 & A],
            ve = 0;

        for (w = 0; w < 9; w++) {
          for (var ge = ve + 64, Se = 1; ve < ge; ve++) Se < Math.abs(de[ve]) && (Se = Math.abs(de[ve]));

          V.nsPsy.last_en_subshort[A][w] = _e[w + 3] = Se, ie[1 + w / 3] += Se, Se > _e[w + 3 - 2] ? Se /= _e[w + 3 - 2] : Se = _e[w + 3 - 2] > 10 * Se ? _e[w + 3 - 2] / (10 * Se) : 0, oe[w + 3] = Se;
        }

        if (e.analysis) {
          var Re = oe[0];

          for (w = 1; w < 12; w++) Re < oe[w] && (Re = oe[w]);

          V.pinfo.ers[o][A] = V.pinfo.ers_save[A], V.pinfo.ers_save[A] = Re;
        }

        for (re = 3 == A ? V.nsPsy.attackthre_s : V.nsPsy.attackthre, w = 0; w < 12; w++) 0 == he[w / 3] && oe[w] > re && (he[w / 3] = w % 3 + 1);

        for (w = 1; w < 4; w++) {
          (ie[w - 1] > ie[w] ? ie[w - 1] / ie[w] : ie[w] / ie[w - 1]) < 1.7 && (he[w] = 0, 1 == w && (he[0] = 0));
        }

        for (0 != he[0] && 0 != V.nsPsy.lastAttacks[A] && (he[0] = 0), 3 != V.nsPsy.lastAttacks[A] && he[0] + he[1] + he[2] + he[3] == 0 || (le = 0, 0 != he[1] && 0 != he[0] && (he[1] = 0), 0 != he[2] && 0 != he[1] && (he[2] = 0), 0 != he[3] && 0 != he[2] && (he[3] = 0)), A < 2 ? W[A] = le : 0 == le && (W[0] = W[1] = 0), g[A] = V.tot_ener[A], M(e, ue, be, O, 1 & A, q, 1 & A, o, A, a, i), G(V, ue, F, fe, ce), K(V, fe, ce, $), y = 0; y < 3; y++) {
          var Me, Ae;

          for (D(e, be, z, Q, A, y), L(V, z, Q, A, y), k = 0; k < Y.SBMAX_s; k++) {
            if (Ae = V.thm[A].s[k][y], Ae *= .8, he[y] >= 2 || 1 == he[y + 1]) {
              var Be = 0 != y ? y - 1 : 2;
              Se = X(V.thm[A].s[k][Be], Ae, .6 * P);
              Ae = Math.min(Ae, Se);
            }

            if (1 == he[y]) {
              Be = 0 != y ? y - 1 : 2, Se = X(V.thm[A].s[k][Be], Ae, d * P);
              Ae = Math.min(Ae, Se);
            } else if (0 != y && 3 == he[y - 1] || 0 == y && 3 == V.nsPsy.lastAttacks[A]) {
              Be = 2 != y ? y + 1 : 0, Se = X(V.thm[A].s[k][Be], Ae, d * P);
              Ae = Math.min(Ae, Se);
            }

            Me = _e[3 * y + 3] + _e[3 * y + 4] + _e[3 * y + 5], 6 * _e[3 * y + 5] < Me && (Ae *= .5, 6 * _e[3 * y + 4] < Me && (Ae *= .5)), V.thm[A].s[k][y] = Ae;
          }
        }

        for (V.nsPsy.lastAttacks[A] = he[2], E = 0, B = 0; B < V.npart_l; B++) {
          for (var we = V.s3ind[B][0], Te = F[we] * x[$[we]], Ee = V.s3_ll[E++] * Te; ++we <= V.s3ind[B][1];) Te = F[we] * x[$[we]], Ee = H(Ee, V.s3_ll[E++] * Te, we, we - B, V, 0);

          Ee *= .158489319246111, V.blocktype_old[1 & A] == Y.SHORT_TYPE ? Q[B] = Ee : Q[B] = X(Math.min(Ee, Math.min(n * V.nb_1[A][B], _ * V.nb_2[A][B])), Ee, P), V.nb_2[A][B] = V.nb_1[A][B], V.nb_1[A][B] = Ee;
        }

        for (; B <= Y.CBANDS; ++B) F[B] = 0, Q[B] = 0;

        N(V, F, Q, A);
      }

      (e.mode != m.STEREO && e.mode != m.JOINT_STEREO || e.interChRatio > 0 && function (e, a) {
        var t = e.internal_flags;

        if (t.channels_out > 1) {
          for (var s = 0; s < Y.SBMAX_l; s++) {
            var n = t.thm[0].l[s],
                r = t.thm[1].l[s];
            t.thm[0].l[s] += r * a, t.thm[1].l[s] += n * a;
          }

          for (s = 0; s < Y.SBMAX_s; s++) for (var _ = 0; _ < 3; _++) n = t.thm[0].s[s][_], r = t.thm[1].s[s][_], t.thm[0].s[s][_] += r * a, t.thm[1].s[s][_] += n * a;
        }
      }(e, e.interChRatio), e.mode == m.JOINT_STEREO) && (!function (e) {
        for (var a = 0; a < Y.SBMAX_l; a++) if (!(e.thm[0].l[a] > 1.58 * e.thm[1].l[a] || e.thm[1].l[a] > 1.58 * e.thm[0].l[a])) {
          var t = e.mld_l[a] * e.en[3].l[a],
              s = Math.max(e.thm[2].l[a], Math.min(e.thm[3].l[a], t));
          t = e.mld_l[a] * e.en[2].l[a];
          var n = Math.max(e.thm[3].l[a], Math.min(e.thm[2].l[a], t));
          e.thm[2].l[a] = s, e.thm[3].l[a] = n;
        }

        for (a = 0; a < Y.SBMAX_s; a++) for (var r = 0; r < 3; r++) e.thm[0].s[a][r] > 1.58 * e.thm[1].s[a][r] || e.thm[1].s[a][r] > 1.58 * e.thm[0].s[a][r] || (t = e.mld_s[a] * e.en[3].s[a][r], s = Math.max(e.thm[2].s[a][r], Math.min(e.thm[3].s[a][r], t)), t = e.mld_s[a] * e.en[2].s[a][r], n = Math.max(e.thm[3].s[a][r], Math.min(e.thm[2].s[a][r], t)), e.thm[2].s[a][r] = s, e.thm[3].s[a][r] = n);
      }(V), I = e.msfix, Math.abs(I) > 0 && function (e, a, t) {
        var s = a,
            n = Math.pow(10, t);
        a *= 2, s *= 2;

        for (var r = 0; r < Y.SBMAX_l; r++) f = e.ATH.cb_l[e.bm_l[r]] * n, (i = Math.min(Math.max(e.thm[0].l[r], f), Math.max(e.thm[1].l[r], f))) * a < (o = Math.max(e.thm[2].l[r], f)) + (l = Math.max(e.thm[3].l[r], f)) && (o *= c = i * s / (o + l), l *= c), e.thm[2].l[r] = Math.min(o, e.thm[2].l[r]), e.thm[3].l[r] = Math.min(l, e.thm[3].l[r]);

        for (n *= Y.BLKSIZE_s / Y.BLKSIZE, r = 0; r < Y.SBMAX_s; r++) for (var _ = 0; _ < 3; _++) {
          var i, o, l, f, c;
          f = e.ATH.cb_s[e.bm_s[r]] * n, (i = Math.min(Math.max(e.thm[0].s[r][_], f), Math.max(e.thm[1].s[r][_], f))) * a < (o = Math.max(e.thm[2].s[r][_], f)) + (l = Math.max(e.thm[3].s[r][_], f)) && (o *= c = i * a / (o + l), l *= c), e.thm[2].s[r][_] = Math.min(e.thm[2].s[r][_], o), e.thm[3].s[r][_] = Math.min(e.thm[3].s[r][_], l);
        }
      }(V, I, e.ATHlower * V.ATH.adjust));

      for (function (e, a, t, s) {
        var n = e.internal_flags;
        e.short_blocks != h.short_block_coupled || 0 != a[0] && 0 != a[1] || (a[0] = a[1] = 0);

        for (var r = 0; r < n.channels_out; r++) s[r] = Y.NORM_TYPE, e.short_blocks == h.short_block_dispensed && (a[r] = 1), e.short_blocks == h.short_block_forced && (a[r] = 0), 0 != a[r] ? n.blocktype_old[r] == Y.SHORT_TYPE && (s[r] = Y.STOP_TYPE) : (s[r] = Y.SHORT_TYPE, n.blocktype_old[r] == Y.NORM_TYPE && (n.blocktype_old[r] = Y.START_TYPE), n.blocktype_old[r] == Y.STOP_TYPE && (n.blocktype_old[r] = Y.SHORT_TYPE)), t[r] = n.blocktype_old[r], n.blocktype_old[r] = s[r];
      }(e, W, S, U), A = 0; A < R; A++) {
        var ke,
            xe,
            ye,
            Pe = 0;
        A > 1 ? (ke = p, Pe = -2, xe = Y.NORM_TYPE, S[0] != Y.SHORT_TYPE && S[1] != Y.SHORT_TYPE || (xe = Y.SHORT_TYPE), ye = c[o][A - 2]) : (ke = u, Pe = 0, xe = S[A], ye = f[o][A]), xe == Y.SHORT_TYPE ? ke[Pe + A] = C(ye, V.masking_lower) : ke[Pe + A] = j(ye, V.masking_lower), e.analysis && (V.pinfo.pe[o][A] = ke[Pe + A]);
      }

      return 0;
    };

    var J = [-1.730326e-17, -.01703172, -1.349528e-17, .0418072, -6.73278e-17, -.0876324, -3.0835e-17, .1863476, -1.104424e-16, -.627638];

    function $(e, a, t) {
      if (0 == t) for (var s = 0; s < e.npart_s; s++) e.nb_s2[a][s] = e.nb_s1[a][s], e.nb_s1[a][s] = 0;
    }

    function ee(e, a) {
      for (var t = 0; t < e.npart_l; t++) e.nb_2[a][t] = e.nb_1[a][t], e.nb_1[a][t] = 0;
    }

    function ae(e, a, t, n, r, _) {
      var i,
          o,
          l,
          f = e.internal_flags,
          c = new float[Y.CBANDS](),
          h = s(Y.CBANDS),
          u = new int[Y.CBANDS]();

      for (l = o = 0; l < f.npart_s; ++l) {
        var b = 0,
            m = 0,
            p = f.numlines_s[l];

        for (i = 0; i < p; ++i, ++o) {
          var d = a[_][o];
          b += d, m < d && (m = d);
        }

        t[l] = b, c[l] = m, h[l] = b / p;
      }

      for (; l < Y.CBANDS; ++l) c[l] = 0, h[l] = 0;

      for (function (e, a, t, s) {
        var n = x.length - 1,
            r = 0,
            _ = t[r] + t[r + 1];

        for (_ > 0 ? ((i = a[r]) < a[r + 1] && (i = a[r + 1]), (o = 0 | (_ = 20 * (2 * i - _) / (_ * (e.numlines_s[r] + e.numlines_s[r + 1] - 1)))) > n && (o = n), s[r] = o) : s[r] = 0, r = 1; r < e.npart_s - 1; r++) {
          var i, o;
          (_ = t[r - 1] + t[r] + t[r + 1]) > 0 ? ((i = a[r - 1]) < a[r] && (i = a[r]), i < a[r + 1] && (i = a[r + 1]), (o = 0 | (_ = 20 * (3 * i - _) / (_ * (e.numlines_s[r - 1] + e.numlines_s[r] + e.numlines_s[r + 1] - 1)))) > n && (o = n), s[r] = o) : s[r] = 0;
        }

        (_ = t[r - 1] + t[r]) > 0 ? ((i = a[r - 1]) < a[r] && (i = a[r]), (o = 0 | (_ = 20 * (2 * i - _) / (_ * (e.numlines_s[r - 1] + e.numlines_s[r] - 1)))) > n && (o = n), s[r] = o) : s[r] = 0;
      }(f, c, h, u), o = l = 0; l < f.npart_s; l++) {
        var v,
            g,
            S,
            R,
            M,
            A = f.s3ind_s[l][0],
            B = f.s3ind_s[l][1];

        for (v = u[A], g = 1, R = f.s3_ss[o] * t[A] * x[u[A]], ++o, ++A; A <= B;) v += u[A], g += 1, R = O(R, S = f.s3_ss[o] * t[A] * x[u[A]], A - l), ++o, ++A;

        R *= M = .5 * x[v = (1 + 2 * v) / (2 * g)], n[l] = R, f.nb_s2[r][l] = f.nb_s1[r][l], f.nb_s1[r][l] = R, S = c[l], S *= f.minval_s[l], S *= M, n[l] > S && (n[l] = S), f.masking_lower > 1 && (n[l] *= f.masking_lower), n[l] > t[l] && (n[l] = t[l]), f.masking_lower < 1 && (n[l] *= f.masking_lower);
      }

      for (; l < Y.CBANDS; ++l) t[l] = 0, n[l] = 0;
    }

    function te(e, a, r, i, o) {
      var l,
          f = s(Y.CBANDS),
          c = s(Y.CBANDS),
          h = t(Y.CBANDS + 2);
      G(e, a, r, f, c), K(e, f, c, h);
      var u = 0;

      for (l = 0; l < e.npart_l; l++) {
        var b,
            m,
            p,
            v = e.s3ind[l][0],
            g = e.s3ind[l][1],
            S = 0,
            R = 0;

        for (S = h[v], R += 1, m = e.s3_ll[u] * r[v] * x[h[v]], ++u, ++v; v <= g;) S += h[v], R += 1, m = O(m, b = e.s3_ll[u] * r[v] * x[h[v]], v - l), ++u, ++v;

        if (m *= p = .5 * x[S = (1 + 2 * S) / (2 * R)], e.blocktype_old[1 & o] == Y.SHORT_TYPE) {
          var M = n * e.nb_1[o][l];
          i[l] = M > 0 ? Math.min(m, M) : Math.min(m, r[l] * d);
        } else {
          var A = _ * e.nb_2[o][l],
              B = n * e.nb_1[o][l];
          A <= 0 && (A = m), B <= 0 && (B = m), M = e.blocktype_old[1 & o] == Y.NORM_TYPE ? Math.min(B, A) : B, i[l] = Math.min(m, M);
        }

        e.nb_2[o][l] = e.nb_1[o][l], e.nb_1[o][l] = m, b = f[l], b *= e.minval_l[l], b *= p, i[l] > b && (i[l] = b), e.masking_lower > 1 && (i[l] *= e.masking_lower), i[l] > r[l] && (i[l] = r[l]), e.masking_lower < 1 && (i[l] *= e.masking_lower);
      }

      for (; l < Y.CBANDS; ++l) r[l] = 0, i[l] = 0;
    }

    function se(e, a, t, s, n, r, _) {
      for (var i, o, l = 2 * r, f = r > 0 ? Math.pow(10, n) : 1, c = 0; c < _; ++c) {
        var h = e[2][c],
            u = e[3][c],
            b = a[0][c],
            m = a[1][c],
            p = a[2][c],
            d = a[3][c];

        if (b <= 1.58 * m && m <= 1.58 * b) {
          var v = t[c] * u,
              g = t[c] * h;
          o = Math.max(p, Math.min(d, v)), i = Math.max(d, Math.min(p, g));
        } else o = p, i = d;

        if (r > 0) {
          var S,
              R,
              M = s[c] * f;

          if (S = Math.min(Math.max(b, M), Math.max(m, M)), (R = (p = Math.max(o, M)) + (d = Math.max(i, M))) > 0 && S * l < R) {
            var A = S * l / R;
            p *= A, d *= A;
          }

          o = Math.min(p, o), i = Math.min(d, i);
        }

        o > h && (o = h), i > u && (i = u), a[2][c] = o, a[3][c] = i;
      }
    }

    function ne(e, a) {
      var t;
      return (t = e >= 0 ? 27 * -e : e * a) <= -72 ? 0 : Math.exp(t * g);
    }

    function re(e) {
      var a,
          t,
          s = 0;

      for (s = 0; ne(s, e) > 1e-20; s -= 1);

      for (n = s, r = 0; Math.abs(r - n) > 1e-12;) ne(s = (r + n) / 2, e) > 0 ? r = s : n = s;

      a = n;
      var n, r;
      s = 0;

      for (s = 0; ne(s, e) > 1e-20; s += 1);

      for (n = 0, r = s; Math.abs(r - n) > 1e-12;) ne(s = (r + n) / 2, e) > 0 ? n = s : r = s;

      t = r;

      var _,
          i = 0;

      for (_ = 0; _ <= 1e3; ++_) {
        i += ne(s = a + _ * (t - a) / 1e3, e);
      }

      return 1001 / (i * (t - a));
    }

    function _e(e) {
      return e < 0 && (e = 0), e *= .001, 13 * Math.atan(.76 * e) + 3.5 * Math.atan(e * e / 56.25);
    }

    function ie(e, a, n, r, _, i, o, l, c, h, u, b) {
      var m,
          p = s(Y.CBANDS + 1),
          d = l / (b > 15 ? 1152 : 384),
          v = t(Y.HBLKSIZE);
      l /= c;
      var g = 0,
          S = 0;

      for (m = 0; m < Y.CBANDS; m++) {
        var R;

        for (y = _e(l * g), p[m] = l * g, R = g; _e(l * R) - y < f && R <= c / 2; R++);

        for (e[m] = R - g, S = m + 1; g < R;) v[g++] = m;

        if (g > c / 2) {
          g = c / 2, ++m;
          break;
        }
      }

      p[m] = l * g;

      for (var M = 0; M < b; M++) {
        var A, B, w, T, E;
        w = h[M], T = h[M + 1], (A = 0 | Math.floor(.5 + u * (w - .5))) < 0 && (A = 0), (B = 0 | Math.floor(.5 + u * (T - .5))) > c / 2 && (B = c / 2), n[M] = (v[A] + v[B]) / 2, a[M] = v[B];
        var k = d * T;
        o[M] = (k - p[a[M]]) / (p[a[M] + 1] - p[a[M]]), o[M] < 0 ? o[M] = 0 : o[M] > 1 && (o[M] = 1), E = _e(l * h[M] * u), E = Math.min(E, 15.5) / 15.5, i[M] = Math.pow(10, 1.25 * (1 - Math.cos(Math.PI * E)) - 2.5);
      }

      g = 0;

      for (var x = 0; x < S; x++) {
        var y,
            P,
            I = e[x];
        y = _e(l * g), P = _e(l * (g + I - 1)), r[x] = .5 * (y + P), y = _e(l * (g - .5)), P = _e(l * (g + I - .5)), _[x] = P - y, g += I;
      }

      return S;
    }

    function oe(e, a, t, n, _, i) {
      var o,
          l,
          f,
          c,
          h,
          u,
          b = r([Y.CBANDS, Y.CBANDS]),
          m = 0;
      if (i) for (var p = 0; p < a; p++) for (o = 0; o < a; o++) {
        var d = (l = t[p] - t[o], f = void 0, c = void 0, h = void 0, u = void 0, f = l, c = (f *= f >= 0 ? 3 : 1.5) >= .5 && f <= 2.5 ? 8 * ((u = f - .5) * u - 2 * u) : 0, ((h = 15.811389 + 7.5 * (f += .474) - 17.5 * Math.sqrt(1 + f * f)) <= -60 ? 0 : (f = Math.exp((c + h) * g), f /= .6609193)) * n[o]);
        b[p][o] = d * _[p];
      } else for (o = 0; o < a; o++) {
        var v = 15 + Math.min(21 / t[o], 12),
            S = re(v);

        for (p = 0; p < a; p++) {
          d = S * ne(t[p] - t[o], v) * n[o];
          b[p][o] = d * _[p];
        }
      }

      for (p = 0; p < a; p++) {
        for (o = 0; o < a && !(b[p][o] > 0); o++);

        for (e[p][0] = o, o = a - 1; o > 0 && !(b[p][o] > 0); o--);

        e[p][1] = o, m += e[p][1] - e[p][0] + 1;
      }

      var R = s(m),
          M = 0;

      for (p = 0; p < a; p++) for (o = e[p][0]; o <= e[p][1]; o++) R[M++] = b[p][o];

      return R;
    }

    function le(e) {
      var a = _e(e);

      return a = Math.min(a, 15.5) / 15.5, Math.pow(10, 1.25 * (1 - Math.cos(Math.PI * a)) - 2.5);
    }

    function fe(e, a) {
      return e < -.3 && (e = 3410), e /= 1e3, e = Math.max(.1, e), 3.64 * Math.pow(e, -.8) - 6.8 * Math.exp(-.6 * Math.pow(e - 3.4, 2)) + 6 * Math.exp(-.15 * Math.pow(e - 8.7, 2)) + .001 * (.6 + .04 * a) * Math.pow(e, 4);
    }

    this.L3psycho_anal_vbr = function (e, a, n, _, i, o, l, f, c, u) {
      var b = e.internal_flags,
          p = s(Y.HBLKSIZE),
          g = r([3, Y.HBLKSIZE_s]),
          S = r([2, Y.BLKSIZE]),
          R = r([2, 3, Y.BLKSIZE_s]),
          M = r([4, Y.CBANDS]),
          A = r([4, Y.CBANDS]),
          B = r([4, 3]),
          w = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
          T = t(2),
          E = e.mode == m.JOINT_STEREO ? 4 : b.channels_out;
      !function (e, a, t, n, _, i, o, l, f, c) {
        for (var h = r([2, 576]), u = e.internal_flags, b = u.channels_out, p = e.mode == m.JOINT_STEREO ? 4 : b, d = 0; d < b; d++) {
          firbuf = a[d];

          for (var g = t + 576 - 350 - v + 192, S = 0; S < 576; S++) {
            var R, M;
            R = firbuf[g + S + 10], M = 0;

            for (var A = 0; A < (v - 1) / 2 - 1; A += 2) R += J[A] * (firbuf[g + S + A] + firbuf[g + S + v - A]), M += J[A + 1] * (firbuf[g + S + A + 1] + firbuf[g + S + v - A - 1]);

            h[d][S] = R + M;
          }

          _[n][d].en.assign(u.en[d]), _[n][d].thm.assign(u.thm[d]), p > 2 && (i[n][d].en.assign(u.en[d + 2]), i[n][d].thm.assign(u.thm[d + 2]));
        }

        for (d = 0; d < p; d++) {
          var B = s(12),
              w = s(12),
              T = [0, 0, 0, 0],
              E = h[1 & d],
              k = 0,
              x = 3 == d ? u.nsPsy.attackthre_s : u.nsPsy.attackthre,
              y = 1;
          if (2 == d) for (S = 0, A = 576; A > 0; ++S, --A) {
            var P = h[0][S],
                I = h[1][S];
            h[0][S] = P + I, h[1][S] = P - I;
          }

          for (S = 0; S < 3; S++) w[S] = u.nsPsy.last_en_subshort[d][S + 6], B[S] = w[S] / u.nsPsy.last_en_subshort[d][S + 4], T[0] += w[S];

          for (S = 0; S < 9; S++) {
            for (var H = k + 64, V = 1; k < H; k++) V < Math.abs(E[k]) && (V = Math.abs(E[k]));

            u.nsPsy.last_en_subshort[d][S] = w[S + 3] = V, T[1 + S / 3] += V, V > w[S + 3 - 2] ? V /= w[S + 3 - 2] : V = w[S + 3 - 2] > 10 * V ? w[S + 3 - 2] / (10 * V) : 0, B[S + 3] = V;
          }

          for (S = 0; S < 3; ++S) {
            var O = w[3 * S + 3] + w[3 * S + 4] + w[3 * S + 5],
                L = 1;
            6 * w[3 * S + 5] < O && (L *= .5, 6 * w[3 * S + 4] < O && (L *= .5)), l[d][S] = L;
          }

          if (e.analysis) {
            var N = B[0];

            for (S = 1; S < 12; S++) N < B[S] && (N = B[S]);

            u.pinfo.ers[n][d] = u.pinfo.ers_save[d], u.pinfo.ers_save[d] = N;
          }

          for (S = 0; S < 12; S++) 0 == f[d][S / 3] && B[S] > x && (f[d][S / 3] = S % 3 + 1);

          for (S = 1; S < 4; S++) {
            var D = T[S - 1],
                X = T[S];
            Math.max(D, X) < 4e4 && D < 1.7 * X && X < 1.7 * D && (1 == S && f[d][0] <= f[d][S] && (f[d][0] = 0), f[d][S] = 0);
          }

          f[d][0] <= u.nsPsy.lastAttacks[d] && (f[d][0] = 0), 3 != u.nsPsy.lastAttacks[d] && f[d][0] + f[d][1] + f[d][2] + f[d][3] == 0 || (y = 0, 0 != f[d][1] && 0 != f[d][0] && (f[d][1] = 0), 0 != f[d][2] && 0 != f[d][1] && (f[d][2] = 0), 0 != f[d][3] && 0 != f[d][2] && (f[d][3] = 0)), d < 2 ? c[d] = y : 0 == y && (c[0] = c[1] = 0), o[d] = u.tot_ener[d];
        }
      }(e, a, n, _, i, o, c, B, w, T), function (e, a) {
        var t = e.internal_flags;
        e.short_blocks != h.short_block_coupled || 0 != a[0] && 0 != a[1] || (a[0] = a[1] = 0);

        for (var s = 0; s < t.channels_out; s++) e.short_blocks == h.short_block_dispensed && (a[s] = 1), e.short_blocks == h.short_block_forced && (a[s] = 0);
      }(e, T);

      for (var k = 0; k < E; k++) {
        Q(e, a, n, k, _, p, S, y = 1 & k), W(e, _, k, p), 0 != T[y] ? te(b, p, M[k], A[k], k) : ee(b, k);
      }

      T[0] + T[1] == 2 && e.mode == m.JOINT_STEREO && se(M, A, b.mld_cb_l, b.ATH.cb_l, e.ATHlower * b.ATH.adjust, e.msfix, b.npart_l);

      for (k = 0; k < E; k++) {
        0 != T[y = 1 & k] && N(b, M[k], A[k], k);
      }

      for (var x = 0; x < 3; x++) {
        for (k = 0; k < E; ++k) {
          0 != T[y = 1 & k] ? $(b, k, x) : (U(e, a, n, k, x, g, R, y), ae(e, g, M[k], A[k], k, x));
        }

        T[0] + T[1] == 0 && e.mode == m.JOINT_STEREO && se(M, A, b.mld_cb_s, b.ATH.cb_s, e.ATHlower * b.ATH.adjust, e.msfix, b.npart_s);

        for (k = 0; k < E; ++k) {
          0 == T[y = 1 & k] && L(b, M[k], A[k], k, x);
        }
      }

      for (k = 0; k < E; k++) {
        var y;
        if (0 == T[y = 1 & k]) for (var P = 0; P < Y.SBMAX_s; P++) {
          var I = s(3);

          for (x = 0; x < 3; x++) {
            var H = b.thm[k].s[P][x];

            if (H *= .8, w[k][x] >= 2 || 1 == w[k][x + 1]) {
              var V = 0 != x ? x - 1 : 2,
                  O = X(b.thm[k].s[P][V], H, .36);
              H = Math.min(H, O);
            } else if (1 == w[k][x]) {
              V = 0 != x ? x - 1 : 2, O = X(b.thm[k].s[P][V], H, .6 * d);
              H = Math.min(H, O);
            } else if (0 != x && 3 == w[k][x - 1] || 0 == x && 3 == b.nsPsy.lastAttacks[k]) {
              V = 2 != x ? x + 1 : 0, O = X(b.thm[k].s[P][V], H, .6 * d);
              H = Math.min(H, O);
            }

            H *= B[k][x], I[x] = H;
          }

          for (x = 0; x < 3; x++) b.thm[k].s[P][x] = I[x];
        }
      }

      for (k = 0; k < E; k++) b.nsPsy.lastAttacks[k] = w[k][2];

      !function (e, a, t) {
        for (var s = e.internal_flags, n = 0; n < s.channels_out; n++) {
          var r = Y.NORM_TYPE;
          0 != a[n] ? s.blocktype_old[n] == Y.SHORT_TYPE && (r = Y.STOP_TYPE) : (r = Y.SHORT_TYPE, s.blocktype_old[n] == Y.NORM_TYPE && (s.blocktype_old[n] = Y.START_TYPE), s.blocktype_old[n] == Y.STOP_TYPE && (s.blocktype_old[n] = Y.SHORT_TYPE)), t[n] = s.blocktype_old[n], s.blocktype_old[n] = r;
        }
      }(e, T, u);

      for (k = 0; k < E; k++) {
        var D, q, F, G;
        k > 1 ? (D = f, q = -2, F = Y.NORM_TYPE, u[0] != Y.SHORT_TYPE && u[1] != Y.SHORT_TYPE || (F = Y.SHORT_TYPE), G = o[_][k - 2]) : (D = l, q = 0, F = u[k], G = i[_][k]), F == Y.SHORT_TYPE ? D[q + k] = C(G, b.masking_lower) : D[q + k] = j(G, b.masking_lower), e.analysis && (b.pinfo.pe[_][k] = D[q + k]);
      }

      return 0;
    }, this.psymodel_init = function (t) {
      var n,
          r = t.internal_flags,
          _ = !0,
          i = 13,
          o = 0,
          l = 0,
          f = -8.25,
          c = -4.5,
          h = s(Y.CBANDS),
          m = s(Y.CBANDS),
          p = s(Y.CBANDS),
          d = t.out_samplerate;

      switch (t.experimentalZ) {
        default:
        case 0:
          _ = !0;
          break;

        case 1:
          _ = t.VBR != b.vbr_mtrh && t.VBR != b.vbr_mt;
          break;

        case 2:
          _ = !1;
          break;

        case 3:
          i = 8, o = -1.75, l = -.0125, f = -8.25, c = -2.25;
      }

      for (r.ms_ener_ratio_old = .25, r.blocktype_old[0] = r.blocktype_old[1] = Y.NORM_TYPE, n = 0; n < 4; ++n) {
        for (var v = 0; v < Y.CBANDS; ++v) r.nb_1[n][v] = 1e20, r.nb_2[n][v] = 1e20, r.nb_s1[n][v] = r.nb_s2[n][v] = 1;

        for (var g = 0; g < Y.SBMAX_l; g++) r.en[n].l[g] = 1e20, r.thm[n].l[g] = 1e20;

        for (v = 0; v < 3; ++v) {
          for (g = 0; g < Y.SBMAX_s; g++) r.en[n].s[g][v] = 1e20, r.thm[n].s[g][v] = 1e20;

          r.nsPsy.lastAttacks[n] = 0;
        }

        for (v = 0; v < 9; v++) r.nsPsy.last_en_subshort[n][v] = 10;
      }

      for (r.loudness_sq_save[0] = r.loudness_sq_save[1] = 0, r.npart_l = ie(r.numlines_l, r.bo_l, r.bm_l, h, m, r.mld_l, r.PSY.bo_l_weight, d, Y.BLKSIZE, r.scalefac_band.l, Y.BLKSIZE / 1152, Y.SBMAX_l), n = 0; n < r.npart_l; n++) {
        var S = o;
        h[n] >= i && (S = l * (h[n] - i) / (24 - i) + o * (24 - h[n]) / (24 - i)), p[n] = Math.pow(10, S / 10), r.numlines_l[n] > 0 ? r.rnumlines_l[n] = 1 / r.numlines_l[n] : r.rnumlines_l[n] = 0;
      }

      r.s3_ll = oe(r.s3ind, r.npart_l, h, m, p, _);
      var R;
      v = 0;

      for (n = 0; n < r.npart_l; n++) {
        y = u.MAX_VALUE;

        for (var M = 0; M < r.numlines_l[n]; M++, v++) {
          var x = d * v / (1e3 * Y.BLKSIZE);
          P = this.ATHformula(1e3 * x, t) - 20, P = Math.pow(10, .1 * P), y > (P *= r.numlines_l[n]) && (y = P);
        }

        r.ATH.cb_l[n] = y, (y = 20 * h[n] / 10 - 20) > 6 && (y = 100), y < -15 && (y = -15), y -= 8, r.minval_l[n] = Math.pow(10, y / 10) * r.numlines_l[n];
      }

      for (r.npart_s = ie(r.numlines_s, r.bo_s, r.bm_s, h, m, r.mld_s, r.PSY.bo_s_weight, d, Y.BLKSIZE_s, r.scalefac_band.s, Y.BLKSIZE_s / 384, Y.SBMAX_s), v = 0, n = 0; n < r.npart_s; n++) {
        var y;
        S = f;
        h[n] >= i && (S = c * (h[n] - i) / (24 - i) + f * (24 - h[n]) / (24 - i)), p[n] = Math.pow(10, S / 10), y = u.MAX_VALUE;

        for (M = 0; M < r.numlines_s[n]; M++, v++) {
          var P;
          x = d * v / (1e3 * Y.BLKSIZE_s);
          P = this.ATHformula(1e3 * x, t) - 20, P = Math.pow(10, .1 * P), y > (P *= r.numlines_s[n]) && (y = P);
        }

        r.ATH.cb_s[n] = y, y = 7 * h[n] / 12 - 7, h[n] > 12 && (y *= 1 + 3.1 * Math.log(1 + y)), h[n] < 12 && (y *= 1 + 2.3 * Math.log(1 - y)), y < -15 && (y = -15), y -= 8, r.minval_s[n] = Math.pow(10, y / 10) * r.numlines_s[n];
      }

      r.s3_ss = oe(r.s3ind_s, r.npart_s, h, m, p, _), A = Math.pow(10, (T + 1) / 16), B = Math.pow(10, (E + 1) / 16), w = Math.pow(10, k / 10), e.init_fft(r), r.decay = Math.exp(-1 * a / (.01 * d / 192)), R = 3.5, 0 != (2 & t.exp_nspsytune) && (R = 1), Math.abs(t.msfix) > 0 && (R = t.msfix), t.msfix = R;

      for (var I = 0; I < r.npart_l; I++) r.s3ind[I][1] > r.npart_l - 1 && (r.s3ind[I][1] = r.npart_l - 1);

      var H = 576 * r.mode_gr / d;

      if (r.ATH.decay = Math.pow(10, -1.2 * H), r.ATH.adjust = .01, r.ATH.adjustLimit = 1, -1 != t.ATHtype) {
        var V = t.out_samplerate / Y.BLKSIZE,
            O = 0;

        for (x = 0, n = 0; n < Y.BLKSIZE / 2; ++n) x += V, r.ATH.eql_w[n] = 1 / Math.pow(10, this.ATHformula(x, t) / 10), O += r.ATH.eql_w[n];

        for (O = 1 / O, n = Y.BLKSIZE / 2; --n >= 0;) r.ATH.eql_w[n] *= O;
      }

      for (I = v = 0; I < r.npart_s; ++I) for (n = 0; n < r.numlines_s[I]; ++n) ++v;

      for (I = v = 0; I < r.npart_l; ++I) for (n = 0; n < r.numlines_l[I]; ++n) ++v;

      for (v = 0, n = 0; n < r.npart_l; n++) {
        x = d * (v + r.numlines_l[n] / 2) / (1 * Y.BLKSIZE);
        r.mld_cb_l[n] = le(x), v += r.numlines_l[n];
      }

      for (; n < Y.CBANDS; ++n) r.mld_cb_l[n] = 1;

      for (v = 0, n = 0; n < r.npart_s; n++) {
        x = d * (v + r.numlines_s[n] / 2) / (1 * Y.BLKSIZE_s);
        r.mld_cb_s[n] = le(x), v += r.numlines_s[n];
      }

      for (; n < Y.CBANDS; ++n) r.mld_cb_s[n] = 1;

      return 0;
    }, this.ATHformula = function (e, a) {
      var t;

      switch (a.ATHtype) {
        case 0:
          t = fe(e, 9);
          break;

        case 1:
          t = fe(e, -1);
          break;

        case 2:
          t = fe(e, 0);
          break;

        case 3:
          t = fe(e, 1) + 6;
          break;

        case 4:
          t = fe(e, a.ATHcurve);
          break;

        default:
          t = fe(e, 0);
      }

      return t;
    };
  }

  function Z() {
    var e = this;
    Z.V9 = 410, Z.V8 = 420, Z.V7 = 430, Z.V6 = 440, Z.V5 = 450, Z.V4 = 460, Z.V3 = 470, Z.V2 = 480, Z.V1 = 490, Z.V0 = 500, Z.R3MIX = 1e3, Z.STANDARD = 1001, Z.EXTREME = 1002, Z.INSANE = 1003, Z.STANDARD_FAST = 1004, Z.EXTREME_FAST = 1005, Z.MEDIUM = 1006, Z.MEDIUM_FAST = 1007;
    var a, t, n, r, o;
    Z.LAME_MAXMP3BUFFER = 147456;
    var l,
        c,
        u,
        p = new K();

    function v() {
      this.mask_adjust = 0, this.mask_adjust_short = 0, this.bo_l_weight = s(Y.SBMAX_l), this.bo_s_weight = s(Y.SBMAX_s);
    }

    function g() {
      this.lowerlimit = 0;
    }

    function S(e, a) {
      this.lowpass = a;
    }

    this.enc = new Y(), this.setModules = function (e, s, _, i, f, h, b, m, d) {
      a = e, t = s, n = _, r = i, o = f, l = h, c = m, u = d, this.enc.setModules(t, p, r, l);
    };
    var M = 4294479419;

    function A(e) {
      return e > 1 ? 0 : e <= 0 ? 1 : Math.cos(Math.PI / 2 * e);
    }

    function w(e, a) {
      switch (e) {
        case 44100:
          return a.version = 1, 0;

        case 48e3:
          return a.version = 1, 1;

        case 32e3:
          return a.version = 1, 2;

        case 22050:
          return a.version = 0, 0;

        case 24e3:
          return a.version = 0, 1;

        case 16e3:
          return a.version = 0, 2;

        case 11025:
          return a.version = 0, 0;

        case 12e3:
          return a.version = 0, 1;

        case 8e3:
          return a.version = 0, 2;

        default:
          return a.version = 0, -1;
      }
    }

    function T(e, a, t) {
      t < 16e3 && (a = 2);

      for (var s = B.bitrate_table[a][1], n = 2; n <= 14; n++) B.bitrate_table[a][n] > 0 && Math.abs(B.bitrate_table[a][n] - e) < Math.abs(s - e) && (s = B.bitrate_table[a][n]);

      return s;
    }

    function E(e, a, t) {
      t < 16e3 && (a = 2);

      for (var s = 0; s <= 14; s++) if (B.bitrate_table[a][s] > 0 && B.bitrate_table[a][s] == e) return s;

      return -1;
    }

    function I(a, t) {
      var s = [new S(8, 2e3), new S(16, 3700), new S(24, 3900), new S(32, 5500), new S(40, 7e3), new S(48, 7500), new S(56, 1e4), new S(64, 11e3), new S(80, 13500), new S(96, 15100), new S(112, 15600), new S(128, 17e3), new S(160, 17500), new S(192, 18600), new S(224, 19400), new S(256, 19700), new S(320, 20500)],
          n = e.nearestBitrateFullIndex(t);
      a.lowerlimit = s[n].lowpass;
    }

    function H(e) {
      var a = Y.BLKSIZE + e.framesize - Y.FFTOFFSET;
      return a = Math.max(a, 512 + e.framesize - 32);
    }

    function V(a, t, s, n, r, _) {
      var i = e.enc.lame_encode_mp3_frame(a, t, s, n, r, _);
      return a.frameNum++, i;
    }

    function O() {
      this.n_in = 0, this.n_out = 0;
    }

    function L() {
      this.num_used = 0;
    }

    function N(e, a, t) {
      var s = Math.PI * a;
      (e /= t) < 0 && (e = 0), e > 1 && (e = 1);
      var n = e - .5,
          r = .42 - .5 * Math.cos(2 * e * Math.PI) + .08 * Math.cos(4 * e * Math.PI);
      return Math.abs(n) < 1e-9 ? s / Math.PI : r * Math.sin(t * s * n) / (Math.PI * t * n);
    }

    function D(e, a, t, n, r, _, i, o, l) {
      var f,
          c,
          h = e.internal_flags,
          u = 0,
          b = e.out_samplerate / function e(a, t) {
        return 0 != t ? e(t, a % t) : a;
      }(e.out_samplerate, e.in_samplerate);

      b > G.BPC && (b = G.BPC);
      var m = Math.abs(h.resample_ratio - Math.floor(.5 + h.resample_ratio)) < 1e-4 ? 1 : 0,
          p = 1 / h.resample_ratio;
      p > 1 && (p = 1);
      var d = 31;
      0 == d % 2 && --d;
      var v = (d += m) + 1;

      if (0 == h.fill_buffer_resample_init) {
        for (h.inbuf_old[0] = s(v), h.inbuf_old[1] = s(v), f = 0; f <= 2 * b; ++f) h.blackfilt[f] = s(v);

        for (h.itime[0] = 0, h.itime[1] = 0, u = 0; u <= 2 * b; u++) {
          var g = 0,
              S = (u - b) / (2 * b);

          for (f = 0; f <= d; f++) g += h.blackfilt[u][f] = N(f - S, p, d);

          for (f = 0; f <= d; f++) h.blackfilt[u][f] /= g;
        }

        h.fill_buffer_resample_init = 1;
      }

      var R = h.inbuf_old[l];

      for (c = 0; c < n; c++) {
        var M, A;
        if (M = c * h.resample_ratio, d + (u = 0 | Math.floor(M - h.itime[l])) - d / 2 >= i) break;
        S = M - h.itime[l] - (u + d % 2 * .5);
        A = 0 | Math.floor(2 * S * b + b + .5);
        var B = 0;

        for (f = 0; f <= d; ++f) {
          var w = 0 | f + u - d / 2;
          B += (w < 0 ? R[v + w] : r[_ + w]) * h.blackfilt[A][f];
        }

        a[t + c] = B;
      }

      if (o.num_used = Math.min(i, d + u - d / 2), h.itime[l] += o.num_used - c * h.resample_ratio, o.num_used >= v) for (f = 0; f < v; f++) R[f] = r[_ + o.num_used + f - v];else {
        var T = v - o.num_used;

        for (f = 0; f < T; ++f) R[f] = R[f + o.num_used];

        for (u = 0; f < v; ++f, ++u) R[f] = r[_ + u];
      }
      return c;
    }

    function X(e, a, t, s, n, r) {
      var _ = e.internal_flags;
      if (_.resample_ratio < .9999 || _.resample_ratio > 1.0001) for (var i = 0; i < _.channels_out; i++) {
        var o = new L();
        r.n_out = D(e, a[i], _.mf_size, e.framesize, t[i], s, n, o, i), r.n_in = o.num_used;
      } else {
        r.n_out = Math.min(e.framesize, n), r.n_in = r.n_out;

        for (var l = 0; l < r.n_out; ++l) a[0][_.mf_size + l] = t[0][s + l], 2 == _.channels_out && (a[1][_.mf_size + l] = t[1][s + l]);
      }
    }

    this.lame_init = function () {
      var e = new k();
      return 0 != function (e) {
        var a;
        return e.class_id = M, a = e.internal_flags = new G(), e.mode = m.NOT_SET, e.original = 1, e.in_samplerate = 44100, e.num_channels = 2, e.num_samples = -1, e.bWriteVbrTag = !0, e.quality = -1, e.short_blocks = null, a.subblock_gain = -1, e.lowpassfreq = 0, e.highpassfreq = 0, e.lowpasswidth = -1, e.highpasswidth = -1, e.VBR = b.vbr_off, e.VBR_q = 4, e.ATHcurve = -1, e.VBR_mean_bitrate_kbps = 128, e.VBR_min_bitrate_kbps = 0, e.VBR_max_bitrate_kbps = 0, e.VBR_hard_min = 0, a.VBR_min_bitrate = 1, a.VBR_max_bitrate = 13, e.quant_comp = -1, e.quant_comp_short = -1, e.msfix = -1, a.resample_ratio = 1, a.OldValue[0] = 180, a.OldValue[1] = 180, a.CurrentStep[0] = 4, a.CurrentStep[1] = 4, a.masking_lower = 1, a.nsPsy.attackthre = -1, a.nsPsy.attackthre_s = -1, e.scale = -1, e.athaa_type = -1, e.ATHtype = -1, e.athaa_loudapprox = -1, e.athaa_sensitivity = 0, e.useTemporal = null, e.interChRatio = -1, a.mf_samples_to_encode = Y.ENCDELAY + Y.POSTDELAY, e.encoder_padding = 0, a.mf_size = Y.ENCDELAY - Y.MDCTDELAY, e.findReplayGain = !1, e.decode_on_the_fly = !1, a.decode_on_the_fly = !1, a.findReplayGain = !1, a.findPeakSample = !1, a.RadioGain = 0, a.AudiophileGain = 0, a.noclipGainChange = 0, a.noclipScale = -1, e.preset = 0, e.write_id3tag_automatic = !0, 0;
      }(e) ? null : (e.lame_allocated_gfp = 1, e);
    }, this.nearestBitrateFullIndex = function (e) {
      var a = [8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320],
          t = 0,
          s = 0,
          n = 0,
          r = 0;
      r = a[16], n = 16, s = a[16], t = 16;

      for (var _ = 0; _ < 16; _++) if (Math.max(e, a[_ + 1]) != e) {
        r = a[_ + 1], n = _ + 1, s = a[_], t = _;
        break;
      }

      return r - e > e - s ? t : n;
    }, this.lame_init_params = function (e) {
      var s,
          i,
          S,
          k = e.internal_flags;

      if (k.Class_ID = 0, null == k.ATH && (k.ATH = new P()), null == k.PSY && (k.PSY = new v()), null == k.rgdata && (k.rgdata = new x()), k.channels_in = e.num_channels, 1 == k.channels_in && (e.mode = m.MONO), k.channels_out = e.mode == m.MONO ? 1 : 2, k.mode_ext = Y.MPG_MD_MS_LR, e.mode == m.MONO && (e.force_ms = !1), e.VBR == b.vbr_off && 128 != e.VBR_mean_bitrate_kbps && 0 == e.brate && (e.brate = e.VBR_mean_bitrate_kbps), e.VBR == b.vbr_off || e.VBR == b.vbr_mtrh || e.VBR == b.vbr_mt || (e.free_format = !1), e.VBR == b.vbr_off && 0 == e.brate && R.EQ(e.compression_ratio, 0) && (e.compression_ratio = 11.025), e.VBR == b.vbr_off && e.compression_ratio > 0 && (0 == e.out_samplerate && (e.out_samplerate = map2MP3Frequency(int(.97 * e.in_samplerate))), e.brate = 0 | 16 * e.out_samplerate * k.channels_out / (1e3 * e.compression_ratio), k.samplerate_index = w(e.out_samplerate, e), e.free_format || (e.brate = T(e.brate, e.version, e.out_samplerate))), 0 != e.out_samplerate && (e.out_samplerate < 16e3 ? (e.VBR_mean_bitrate_kbps = Math.max(e.VBR_mean_bitrate_kbps, 8), e.VBR_mean_bitrate_kbps = Math.min(e.VBR_mean_bitrate_kbps, 64)) : e.out_samplerate < 32e3 ? (e.VBR_mean_bitrate_kbps = Math.max(e.VBR_mean_bitrate_kbps, 8), e.VBR_mean_bitrate_kbps = Math.min(e.VBR_mean_bitrate_kbps, 160)) : (e.VBR_mean_bitrate_kbps = Math.max(e.VBR_mean_bitrate_kbps, 32), e.VBR_mean_bitrate_kbps = Math.min(e.VBR_mean_bitrate_kbps, 320))), 0 == e.lowpassfreq) {
        var H = 16e3;

        switch (e.VBR) {
          case b.vbr_off:
            I(V = new g(), e.brate), H = V.lowerlimit;
            break;

          case b.vbr_abr:
            var V;
            I(V = new g(), e.VBR_mean_bitrate_kbps), H = V.lowerlimit;
            break;

          case b.vbr_rh:
            var O = [19500, 19e3, 18600, 18e3, 17500, 16e3, 15600, 14900, 12500, 1e4, 3950];

            if (0 <= e.VBR_q && e.VBR_q <= 9) {
              var L = O[e.VBR_q],
                  N = O[e.VBR_q + 1],
                  D = e.VBR_q_frac;
              H = linear_int(L, N, D);
            } else H = 19500;

            break;

          default:
            O = [19500, 19e3, 18500, 18e3, 17500, 16500, 15500, 14500, 12500, 9500, 3950];

            if (0 <= e.VBR_q && e.VBR_q <= 9) {
              L = O[e.VBR_q], N = O[e.VBR_q + 1], D = e.VBR_q_frac;
              H = linear_int(L, N, D);
            } else H = 19500;

        }

        e.mode != m.MONO || e.VBR != b.vbr_off && e.VBR != b.vbr_abr || (H *= 1.5), e.lowpassfreq = 0 | H;
      }

      if (0 == e.out_samplerate && (2 * e.lowpassfreq > e.in_samplerate && (e.lowpassfreq = e.in_samplerate / 2), e.out_samplerate = (s = 0 | e.lowpassfreq, i = e.in_samplerate, S = 44100, i >= 48e3 ? S = 48e3 : i >= 44100 ? S = 44100 : i >= 32e3 ? S = 32e3 : i >= 24e3 ? S = 24e3 : i >= 22050 ? S = 22050 : i >= 16e3 ? S = 16e3 : i >= 12e3 ? S = 12e3 : i >= 11025 ? S = 11025 : i >= 8e3 && (S = 8e3), -1 == s ? S : (s <= 15960 && (S = 44100), s <= 15250 && (S = 32e3), s <= 11220 && (S = 24e3), s <= 9970 && (S = 22050), s <= 7230 && (S = 16e3), s <= 5420 && (S = 12e3), s <= 4510 && (S = 11025), s <= 3970 && (S = 8e3), i < S ? i > 44100 ? 48e3 : i > 32e3 ? 44100 : i > 24e3 ? 32e3 : i > 22050 ? 24e3 : i > 16e3 ? 22050 : i > 12e3 ? 16e3 : i > 11025 ? 12e3 : i > 8e3 ? 11025 : 8e3 : S))), e.lowpassfreq = Math.min(20500, e.lowpassfreq), e.lowpassfreq = Math.min(e.out_samplerate / 2, e.lowpassfreq), e.VBR == b.vbr_off && (e.compression_ratio = 16 * e.out_samplerate * k.channels_out / (1e3 * e.brate)), e.VBR == b.vbr_abr && (e.compression_ratio = 16 * e.out_samplerate * k.channels_out / (1e3 * e.VBR_mean_bitrate_kbps)), e.bWriteVbrTag || (e.findReplayGain = !1, e.decode_on_the_fly = !1, k.findPeakSample = !1), k.findReplayGain = e.findReplayGain, k.decode_on_the_fly = e.decode_on_the_fly, k.decode_on_the_fly && (k.findPeakSample = !0), k.findReplayGain && a.InitGainAnalysis(k.rgdata, e.out_samplerate) == d.INIT_GAIN_ANALYSIS_ERROR) return e.internal_flags = null, -6;

      switch (k.decode_on_the_fly && !e.decode_only && (null != k.hip && u.hip_decode_exit(k.hip), k.hip = u.hip_decode_init()), k.mode_gr = e.out_samplerate <= 24e3 ? 1 : 2, e.framesize = 576 * k.mode_gr, e.encoder_delay = Y.ENCDELAY, k.resample_ratio = e.in_samplerate / e.out_samplerate, e.VBR) {
        case b.vbr_mt:
        case b.vbr_rh:
        case b.vbr_mtrh:
          e.compression_ratio = [5.7, 6.5, 7.3, 8.2, 10, 11.9, 13, 14, 15, 16.5][e.VBR_q];
          break;

        case b.vbr_abr:
          e.compression_ratio = 16 * e.out_samplerate * k.channels_out / (1e3 * e.VBR_mean_bitrate_kbps);
          break;

        default:
          e.compression_ratio = 16 * e.out_samplerate * k.channels_out / (1e3 * e.brate);
      }

      if (e.mode == m.NOT_SET && (e.mode = m.JOINT_STEREO), e.highpassfreq > 0 ? (k.highpass1 = 2 * e.highpassfreq, e.highpasswidth >= 0 ? k.highpass2 = 2 * (e.highpassfreq + e.highpasswidth) : k.highpass2 = 2 * e.highpassfreq, k.highpass1 /= e.out_samplerate, k.highpass2 /= e.out_samplerate) : (k.highpass1 = 0, k.highpass2 = 0), e.lowpassfreq > 0 ? (k.lowpass2 = 2 * e.lowpassfreq, e.lowpasswidth >= 0 ? (k.lowpass1 = 2 * (e.lowpassfreq - e.lowpasswidth), k.lowpass1 < 0 && (k.lowpass1 = 0)) : k.lowpass1 = 2 * e.lowpassfreq, k.lowpass1 /= e.out_samplerate, k.lowpass2 /= e.out_samplerate) : (k.lowpass1 = 0, k.lowpass2 = 0), function (e) {
        var a = e.internal_flags,
            t = 32,
            s = -1;

        if (a.lowpass1 > 0) {
          for (var n = 999, r = 0; r <= 31; r++) (l = r / 31) >= a.lowpass2 && (t = Math.min(t, r)), a.lowpass1 < l && l < a.lowpass2 && (n = Math.min(n, r));

          a.lowpass1 = 999 == n ? (t - .75) / 31 : (n - .75) / 31, a.lowpass2 = t / 31;
        }

        if (a.highpass2 > 0 && a.highpass2 < .75 / 31 * .9 && (a.highpass1 = 0, a.highpass2 = 0, f.err.println("Warning: highpass filter disabled.  highpass frequency too small\n")), a.highpass2 > 0) {
          var _ = -1;

          for (r = 0; r <= 31; r++) (l = r / 31) <= a.highpass1 && (s = Math.max(s, r)), a.highpass1 < l && l < a.highpass2 && (_ = Math.max(_, r));

          a.highpass1 = s / 31, a.highpass2 = -1 == _ ? (s + .75) / 31 : (_ + .75) / 31;
        }

        for (r = 0; r < 32; r++) {
          var i,
              o,
              l = r / 31;
          i = a.highpass2 > a.highpass1 ? A((a.highpass2 - l) / (a.highpass2 - a.highpass1 + 1e-20)) : 1, o = a.lowpass2 > a.lowpass1 ? A((l - a.lowpass1) / (a.lowpass2 - a.lowpass1 + 1e-20)) : 1, a.amp_filter[r] = i * o;
        }
      }(e), k.samplerate_index = w(e.out_samplerate, e), k.samplerate_index < 0) return e.internal_flags = null, -1;

      if (e.VBR == b.vbr_off) {
        if (e.free_format) k.bitrate_index = 0;else if (e.brate = T(e.brate, e.version, e.out_samplerate), k.bitrate_index = E(e.brate, e.version, e.out_samplerate), k.bitrate_index <= 0) return e.internal_flags = null, -1;
      } else k.bitrate_index = 1;

      e.analysis && (e.bWriteVbrTag = !1), null != k.pinfo && (e.bWriteVbrTag = !1), t.init_bit_stream_w(k);

      for (var X, q = k.samplerate_index + 3 * e.version + 6 * (e.out_samplerate < 16e3 ? 1 : 0), C = 0; C < Y.SBMAX_l + 1; C++) k.scalefac_band.l[C] = r.sfBandIndex[q].l[C];

      for (C = 0; C < Y.PSFB21 + 1; C++) {
        var F = (k.scalefac_band.l[22] - k.scalefac_band.l[21]) / Y.PSFB21,
            j = k.scalefac_band.l[21] + C * F;
        k.scalefac_band.psfb21[C] = j;
      }

      k.scalefac_band.psfb21[Y.PSFB21] = 576;

      for (C = 0; C < Y.SBMAX_s + 1; C++) k.scalefac_band.s[C] = r.sfBandIndex[q].s[C];

      for (C = 0; C < Y.PSFB12 + 1; C++) {
        F = (k.scalefac_band.s[13] - k.scalefac_band.s[12]) / Y.PSFB12, j = k.scalefac_band.s[12] + C * F;
        k.scalefac_band.psfb12[C] = j;
      }

      for (k.scalefac_band.psfb12[Y.PSFB12] = 192, 1 == e.version ? k.sideinfo_len = 1 == k.channels_out ? 21 : 36 : k.sideinfo_len = 1 == k.channels_out ? 13 : 21, e.error_protection && (k.sideinfo_len += 2), function (e) {
        var a = e.internal_flags;
        e.frameNum = 0, e.write_id3tag_automatic && c.id3tag_write_v2(e), a.bitrate_stereoMode_Hist = _([16, 5]), a.bitrate_blockType_Hist = _([16, 6]), a.PeakSample = 0, e.bWriteVbrTag && l.InitVbrTag(e);
      }(e), k.Class_ID = M, X = 0; X < 19; X++) k.nsPsy.pefirbuf[X] = 700 * k.mode_gr * k.channels_out;

      switch (-1 == e.ATHtype && (e.ATHtype = 4), e.VBR) {
        case b.vbr_mt:
          e.VBR = b.vbr_mtrh;

        case b.vbr_mtrh:
          null == e.useTemporal && (e.useTemporal = !1), n.apply_preset(e, 500 - 10 * e.VBR_q, 0), e.quality < 0 && (e.quality = LAME_DEFAULT_QUALITY), e.quality < 5 && (e.quality = 0), e.quality > 5 && (e.quality = 5), k.PSY.mask_adjust = e.maskingadjust, k.PSY.mask_adjust_short = e.maskingadjust_short, e.experimentalY ? k.sfb21_extra = !1 : k.sfb21_extra = e.out_samplerate > 44e3, k.iteration_loop = new VBRNewIterationLoop(o);
          break;

        case b.vbr_rh:
          n.apply_preset(e, 500 - 10 * e.VBR_q, 0), k.PSY.mask_adjust = e.maskingadjust, k.PSY.mask_adjust_short = e.maskingadjust_short, e.experimentalY ? k.sfb21_extra = !1 : k.sfb21_extra = e.out_samplerate > 44e3, e.quality > 6 && (e.quality = 6), e.quality < 0 && (e.quality = LAME_DEFAULT_QUALITY), k.iteration_loop = new VBROldIterationLoop(o);
          break;

        default:
          var G;
          k.sfb21_extra = !1, e.quality < 0 && (e.quality = LAME_DEFAULT_QUALITY), (G = e.VBR) == b.vbr_off && (e.VBR_mean_bitrate_kbps = e.brate), n.apply_preset(e, e.VBR_mean_bitrate_kbps, 0), e.VBR = G, k.PSY.mask_adjust = e.maskingadjust, k.PSY.mask_adjust_short = e.maskingadjust_short, G == b.vbr_off ? k.iteration_loop = new y(o) : k.iteration_loop = new ABRIterationLoop(o);
      }

      if (e.VBR != b.vbr_off) {
        if (k.VBR_min_bitrate = 1, k.VBR_max_bitrate = 14, e.out_samplerate < 16e3 && (k.VBR_max_bitrate = 8), 0 != e.VBR_min_bitrate_kbps && (e.VBR_min_bitrate_kbps = T(e.VBR_min_bitrate_kbps, e.version, e.out_samplerate), k.VBR_min_bitrate = E(e.VBR_min_bitrate_kbps, e.version, e.out_samplerate), k.VBR_min_bitrate < 0)) return -1;
        if (0 != e.VBR_max_bitrate_kbps && (e.VBR_max_bitrate_kbps = T(e.VBR_max_bitrate_kbps, e.version, e.out_samplerate), k.VBR_max_bitrate = E(e.VBR_max_bitrate_kbps, e.version, e.out_samplerate), k.VBR_max_bitrate < 0)) return -1;
        e.VBR_min_bitrate_kbps = B.bitrate_table[e.version][k.VBR_min_bitrate], e.VBR_max_bitrate_kbps = B.bitrate_table[e.version][k.VBR_max_bitrate], e.VBR_mean_bitrate_kbps = Math.min(B.bitrate_table[e.version][k.VBR_max_bitrate], e.VBR_mean_bitrate_kbps), e.VBR_mean_bitrate_kbps = Math.max(B.bitrate_table[e.version][k.VBR_min_bitrate], e.VBR_mean_bitrate_kbps);
      }

      return e.tune && (k.PSY.mask_adjust += e.tune_value_a, k.PSY.mask_adjust_short += e.tune_value_a), function (e) {
        var a = e.internal_flags;

        switch (e.quality) {
          default:
          case 9:
            a.psymodel = 0, a.noise_shaping = 0, a.noise_shaping_amp = 0, a.noise_shaping_stop = 0, a.use_best_huffman = 0, a.full_outer_loop = 0;
            break;

          case 8:
            e.quality = 7;

          case 7:
            a.psymodel = 1, a.noise_shaping = 0, a.noise_shaping_amp = 0, a.noise_shaping_stop = 0, a.use_best_huffman = 0, a.full_outer_loop = 0;
            break;

          case 6:
          case 5:
            a.psymodel = 1, 0 == a.noise_shaping && (a.noise_shaping = 1), a.noise_shaping_amp = 0, a.noise_shaping_stop = 0, -1 == a.subblock_gain && (a.subblock_gain = 1), a.use_best_huffman = 0, a.full_outer_loop = 0;
            break;

          case 4:
            a.psymodel = 1, 0 == a.noise_shaping && (a.noise_shaping = 1), a.noise_shaping_amp = 0, a.noise_shaping_stop = 0, -1 == a.subblock_gain && (a.subblock_gain = 1), a.use_best_huffman = 1, a.full_outer_loop = 0;
            break;

          case 3:
            a.psymodel = 1, 0 == a.noise_shaping && (a.noise_shaping = 1), a.noise_shaping_amp = 1, a.noise_shaping_stop = 1, -1 == a.subblock_gain && (a.subblock_gain = 1), a.use_best_huffman = 1, a.full_outer_loop = 0;
            break;

          case 2:
            a.psymodel = 1, 0 == a.noise_shaping && (a.noise_shaping = 1), 0 == a.substep_shaping && (a.substep_shaping = 2), a.noise_shaping_amp = 1, a.noise_shaping_stop = 1, -1 == a.subblock_gain && (a.subblock_gain = 1), a.use_best_huffman = 1, a.full_outer_loop = 0;
            break;

          case 1:
          case 0:
            a.psymodel = 1, 0 == a.noise_shaping && (a.noise_shaping = 1), 0 == a.substep_shaping && (a.substep_shaping = 2), a.noise_shaping_amp = 2, a.noise_shaping_stop = 1, -1 == a.subblock_gain && (a.subblock_gain = 1), a.use_best_huffman = 1, a.full_outer_loop = 0;
        }
      }(e), e.athaa_type < 0 ? k.ATH.useAdjust = 3 : k.ATH.useAdjust = e.athaa_type, k.ATH.aaSensitivityP = Math.pow(10, e.athaa_sensitivity / -10), null == e.short_blocks && (e.short_blocks = h.short_block_allowed), e.short_blocks != h.short_block_allowed || e.mode != m.JOINT_STEREO && e.mode != m.STEREO || (e.short_blocks = h.short_block_coupled), e.quant_comp < 0 && (e.quant_comp = 1), e.quant_comp_short < 0 && (e.quant_comp_short = 0), e.msfix < 0 && (e.msfix = 0), e.exp_nspsytune = 1 | e.exp_nspsytune, e.internal_flags.nsPsy.attackthre < 0 && (e.internal_flags.nsPsy.attackthre = K.NSATTACKTHRE), e.internal_flags.nsPsy.attackthre_s < 0 && (e.internal_flags.nsPsy.attackthre_s = K.NSATTACKTHRE_S), e.scale < 0 && (e.scale = 1), e.ATHtype < 0 && (e.ATHtype = 4), e.ATHcurve < 0 && (e.ATHcurve = 4), e.athaa_loudapprox < 0 && (e.athaa_loudapprox = 2), e.interChRatio < 0 && (e.interChRatio = 0), null == e.useTemporal && (e.useTemporal = !0), k.slot_lag = k.frac_SpF = 0, e.VBR == b.vbr_off && (k.slot_lag = k.frac_SpF = 72e3 * (e.version + 1) * e.brate % e.out_samplerate | 0), r.iteration_init(e), p.psymodel_init(e), 0;
    }, this.lame_encode_flush = function (e, a, s, n) {
      var r,
          _,
          o,
          l,
          f = e.internal_flags,
          h = i([2, 1152]),
          u = 0,
          b = f.mf_samples_to_encode - Y.POSTDELAY,
          m = H(e);

      if (f.mf_samples_to_encode < 1) return 0;

      for (r = 0, e.in_samplerate != e.out_samplerate && (b += 16 * e.out_samplerate / e.in_samplerate), (o = e.framesize - b % e.framesize) < 576 && (o += e.framesize), e.encoder_padding = o, l = (b + o) / e.framesize; l > 0 && u >= 0;) {
        var p = m - f.mf_size,
            d = e.frameNum;
        p *= e.in_samplerate, (p /= e.out_samplerate) > 1152 && (p = 1152), p < 1 && (p = 1), _ = n - r, 0 == n && (_ = 0), s += u = this.lame_encode_buffer(e, h[0], h[1], p, a, s, _), r += u, l -= d != e.frameNum ? 1 : 0;
      }

      if (f.mf_samples_to_encode = 0, u < 0) return u;
      if (_ = n - r, 0 == n && (_ = 0), t.flush_bitstream(e), (u = t.copy_buffer(f, a, s, _, 1)) < 0) return u;

      if (s += u, _ = n - (r += u), 0 == n && (_ = 0), e.write_id3tag_automatic) {
        if (c.id3tag_write_v1(e), (u = t.copy_buffer(f, a, s, _, 0)) < 0) return u;
        r += u;
      }

      return r;
    }, this.lame_encode_buffer = function (e, n, r, _, i, o, l) {
      var f = e.internal_flags,
          c = [null, null];
      if (f.Class_ID != M) return -3;
      if (0 == _) return 0;
      !function (e, a) {
        (null == e.in_buffer_0 || e.in_buffer_nsamples < a) && (e.in_buffer_0 = s(a), e.in_buffer_1 = s(a), e.in_buffer_nsamples = a);
      }(f, _), c[0] = f.in_buffer_0, c[1] = f.in_buffer_1;

      for (var h = 0; h < _; h++) c[0][h] = n[h], f.channels_in > 1 && (c[1][h] = r[h]);

      return function (e, s, n, r, _, i, o) {
        var l,
            f,
            c,
            h,
            u,
            b = e.internal_flags,
            m = 0,
            p = [null, null],
            v = [null, null];
        if (b.Class_ID != M) return -3;
        if (0 == r) return 0;
        if ((u = t.copy_buffer(b, _, i, o, 0)) < 0) return u;
        if (i += u, m += u, v[0] = s, v[1] = n, R.NEQ(e.scale, 0) && R.NEQ(e.scale, 1)) for (f = 0; f < r; ++f) v[0][f] *= e.scale, 2 == b.channels_out && (v[1][f] *= e.scale);
        if (R.NEQ(e.scale_left, 0) && R.NEQ(e.scale_left, 1)) for (f = 0; f < r; ++f) v[0][f] *= e.scale_left;
        if (R.NEQ(e.scale_right, 0) && R.NEQ(e.scale_right, 1)) for (f = 0; f < r; ++f) v[1][f] *= e.scale_right;
        if (2 == e.num_channels && 1 == b.channels_out) for (f = 0; f < r; ++f) v[0][f] = .5 * (v[0][f] + v[1][f]), v[1][f] = 0;
        h = H(e), p[0] = b.mfbuf[0], p[1] = b.mfbuf[1];
        var g = 0;

        for (; r > 0;) {
          var S = [null, null],
              A = 0,
              B = 0;
          S[0] = v[0], S[1] = v[1];
          var w = new O();
          if (X(e, p, S, g, r, w), A = w.n_in, B = w.n_out, b.findReplayGain && !b.decode_on_the_fly && a.AnalyzeSamples(b.rgdata, p[0], b.mf_size, p[1], b.mf_size, B, b.channels_out) == d.GAIN_ANALYSIS_ERROR) return -6;

          if (r -= A, g += A, b.channels_out, b.mf_size += B, b.mf_samples_to_encode < 1 && (b.mf_samples_to_encode = Y.ENCDELAY + Y.POSTDELAY), b.mf_samples_to_encode += B, b.mf_size >= h) {
            var T = o - m;
            if (0 == o && (T = 0), (l = V(e, p[0], p[1], _, i, T)) < 0) return l;

            for (i += l, m += l, b.mf_size -= e.framesize, b.mf_samples_to_encode -= e.framesize, c = 0; c < b.channels_out; c++) for (f = 0; f < b.mf_size; f++) p[c][f] = p[c][f + e.framesize];
          }
        }

        return m;
      }(e, c[0], c[1], _, i, o, l);
    };
  }

  function Q() {
    this.setModules = function (e, a) {
    };
  }

  function U() {
    this.setModules = function (e, a, t) {
    };
  }

  function W() {}

  function J() {
    this.setModules = function (e, a) {
    };
  }

  function $() {
    this.dataOffset = 0, this.dataLen = 0, this.channels = 0, this.sampleRate = 0;
  }

  function ee(e) {
    return e.charCodeAt(0) << 24 | e.charCodeAt(1) << 16 | e.charCodeAt(2) << 8 | e.charCodeAt(3);
  }

  L.SFBMAX = 3 * Y.SBMAX_s, Y.ENCDELAY = 576, Y.POSTDELAY = 1152, Y.MDCTDELAY = 48, Y.FFTOFFSET = 224 + Y.MDCTDELAY, Y.DECDELAY = 528, Y.SBLIMIT = 32, Y.CBANDS = 64, Y.SBPSY_l = 21, Y.SBPSY_s = 12, Y.SBMAX_l = 22, Y.SBMAX_s = 13, Y.PSFB21 = 6, Y.PSFB12 = 6, Y.BLKSIZE = 1024, Y.HBLKSIZE = Y.BLKSIZE / 2 + 1, Y.BLKSIZE_s = 256, Y.HBLKSIZE_s = Y.BLKSIZE_s / 2 + 1, Y.NORM_TYPE = 0, Y.START_TYPE = 1, Y.SHORT_TYPE = 2, Y.STOP_TYPE = 3, Y.MPG_MD_LR_LR = 0, Y.MPG_MD_LR_I = 1, Y.MPG_MD_MS_LR = 2, Y.MPG_MD_MS_I = 3, Y.fircoef = [-.1039435, -.1892065, 5 * -.0432472, -.155915, 3.898045e-17, .0467745 * 5, .50455, .756825, .187098 * 5], G.MFSIZE = 3456 + Y.ENCDELAY - Y.MDCTDELAY, G.MAX_HEADER_BUF = 256, G.MAX_BITS_PER_CHANNEL = 4095, G.MAX_BITS_PER_GRANULE = 7680, G.BPC = 320, $.RIFF = ee("RIFF"), $.WAVE = ee("WAVE"), $.fmt_ = ee("fmt "), $.data = ee("data"), $.readHeader = function (e) {
    var a = new $(),
        t = e.getUint32(0, !1);

    if ($.RIFF == t) {
      e.getUint32(4, !0);

      if ($.WAVE == e.getUint32(8, !1) && $.fmt_ == e.getUint32(12, !1)) {
        var s = e.getUint32(16, !0),
            n = 20;

        switch (s) {
          case 16:
          case 18:
            a.channels = e.getUint16(n + 2, !0), a.sampleRate = e.getUint32(n + 4, !0);
            break;

          default:
            throw "extended fmt chunk not implemented";
        }

        n += s;

        for (var r = $.data, _ = 0; r != t && (t = e.getUint32(n, !1), _ = e.getUint32(n + 4, !0), r != t);) n += _ + 8;

        return a.dataLen = _, a.dataOffset = n + 8, a;
      }
    }
  }, L.SFBMAX = 3 * Y.SBMAX_s, lamejs.Mp3Encoder = function (a, t, s) {
    3 != arguments.length && (console.error("WARN: Mp3Encoder(channels, samplerate, kbps) not specified"), a = 1, t = 44100, s = 128);

    var n = new Z(),
        r = new Q(),
        _ = new d(),
        i = new R(),
        o = new v(),
        l = new H(),
        f = new N(),
        c = new M(),
        h = new p(),
        u = new J(),
        b = new S(),
        A = new g(),
        B = new U(),
        w = new W();

    n.setModules(_, i, o, l, f, c, h, u, w), i.setModules(_, w, h, c), u.setModules(i, h), o.setModules(n), f.setModules(i, b, l, A), l.setModules(A, b, n.enc.psy), b.setModules(i), A.setModules(l), c.setModules(n, i, h), r.setModules(B, w), B.setModules(h, u, o);
    var T = n.lame_init();
    T.num_channels = a, T.in_samplerate = t, T.brate = s, T.mode = m.STEREO, T.quality = 3, T.bWriteVbrTag = !1, T.disable_reservoir = !0, T.write_id3tag_automatic = !1, n.lame_init_params(T);
    var E = 1152,
        k = 0 | 1.25 * E + 7200,
        x = e(k);
    this.encodeBuffer = function (t, s) {
      1 == a && (s = t), t.length > E && (E = t.length, x = e(k = 0 | 1.25 * E + 7200));
      var r = n.lame_encode_buffer(T, t, s, t.length, x, 0, k);
      return new Int8Array(x.subarray(0, r));
    }, this.flush = function () {
      var e = n.lame_encode_flush(T, x, 0, k);
      return new Int8Array(x.subarray(0, e));
    };
  }, lamejs.WavHeader = $;
}
lamejs();

class Mp3Encoder {
  constructor(t) {
    this.bitRate = t.bitRate, this.sampleRate = t.sampleRate, this.dataBuffer = [], this.encoder = new lamejs.Mp3Encoder(1, this.sampleRate, this.bitRate);
  }

  encode(t) {
    const e = this._convertBuffer(t);

    let a = e.length;

    for (let t = 0; a >= 0; t += 1152) {
      const r = e.subarray(t, t + 1152),
            s = this.encoder.encodeBuffer(r);
      this.dataBuffer.push(new Int8Array(s)), a -= 1152;
    }
  }

  finish() {
    this.dataBuffer.push(this.encoder.flush());
    const t = new Blob(this.dataBuffer, {
      type: "audio/mp3"
    });
    return this.dataBuffer = [], {
      id: Date.now(),
      blob: t,
      url: URL.createObjectURL(t)
    };
  }

  _floatTo16BitPCM(t, e) {
    for (let a = 0; a < t.length; a++) {
      const r = Math.max(-1, Math.min(1, t[a]));
      e[a] = r < 0 ? 32768 * r : 32767 * r;
    }
  }

  _convertBuffer(t) {
    const e = new Float32Array(t),
          a = new Int16Array(t.length);
    return this._floatTo16BitPCM(e, a), a;
  }

}

class WavEncoder {
  constructor(t) {
    this.bufferSize = t.bufferSize || 4096, this.sampleRate = t.sampleRate, this.samples = t.samples;
  }

  finish() {
    this._joinSamples();

    const t = new ArrayBuffer(44 + 2 * this.samples.length),
          e = new DataView(t);
    this._writeString(e, 0, "RIFF"), e.setUint32(4, 36 + 2 * this.samples.length, !0), this._writeString(e, 8, "WAVE"), this._writeString(e, 12, "fmt "), e.setUint32(16, 16, !0), e.setUint16(20, 1, !0), e.setUint16(22, 1, !0), e.setUint32(24, this.sampleRate, !0), e.setUint32(28, 4 * this.sampleRate, !0), e.setUint16(32, 4, !0), e.setUint16(34, 16, !0), this._writeString(e, 36, "data"), e.setUint32(40, 2 * this.samples.length, !0), this._floatTo16BitPCM(e, 44, this.samples);
    const s = new Blob([e], {
      type: "audio/wav"
    });
    return {
      id: Date.now(),
      blob: s,
      url: URL.createObjectURL(s)
    };
  }

  _floatTo16BitPCM(t, e, s) {
    for (let i = 0; i < s.length; i++, e += 2) {
      const n = Math.max(-1, Math.min(1, s[i]));
      t.setInt16(e, n < 0 ? 32768 * n : 32767 * n, !0);
    }
  }

  _joinSamples() {
    const t = this.samples.length * this.bufferSize,
          e = new Float64Array(t);
    let s = 0;

    for (let t = 0; t < this.samples.length; t++) {
      const i = this.samples[t];
      e.set(i, s), s += i.length;
    }

    this.samples = e;
  }

  _writeString(t, e, s) {
    for (let i = 0; i < s.length; i++) t.setUint8(e + i, s.charCodeAt(i));
  }

}

function convertTimeMMSS(seconds) {
  if (!seconds) {
    return null;
  }

  return new Date(seconds * 1000).toISOString().substr(14, 5);
}

class Recorder {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.beforeRecording = t.beforeRecording, this.pauseRecording = t.pauseRecording, this.afterRecording = t.afterRecording, this.micFailed = t.micFailed, this.format = t.format, this.encoderOptions = {
      bitRate: t.bitRate,
      sampleRate: t.sampleRate
    }, this.bufferSize = 1024, this.records = [], this.isPause = !1, this.isRecording = !1, this.duration = 0, this.volume = 0, this.wavSamples = [], this._duration = 0;
  }

  start() {
    this.beforeRecording && this.beforeRecording("start recording"), navigator.mediaDevices.getUserMedia({
      video: !1,
      audio: {
        channelCount: 1,
        echoCancellation: !1
      }
    }).then(this._micCaptured.bind(this)).catch(this._micError.bind(this)), this.isPause = !1, this.isRecording = !0, this._isMp3() && !this.lameEncoder && (this.lameEncoder = new Mp3Encoder(this.encoderOptions));
  }

  stop() {
    this.stream.getTracks().forEach(t => t.stop()), this.input.disconnect(), this.processor.disconnect(), this.context.close();
    let t = null;
    if (this._isMp3()) t = this.lameEncoder.finish();else {
      t = new WavEncoder({
        bufferSize: this.bufferSize,
        sampleRate: this.encoderOptions.sampleRate,
        samples: this.wavSamples
      }).finish(), this.wavSamples = [];
    }
    t.duration = convertTimeMMSS(this.duration), this.records.push(t), this._duration = 0, this.duration = 0, this.isPause = !1, this.isRecording = !1, this.afterRecording && this.afterRecording(t);
  }

  pause() {
    this.stream.getTracks().forEach(t => t.stop()), this.input.disconnect(), this.processor.disconnect(), this._duration = this.duration, this.isPause = !0, this.pauseRecording && this.pauseRecording("pause recording");
  }

  recordList() {
    return this.records;
  }

  lastRecord() {
    return this.records.slice(-1).pop();
  }

  _micCaptured(t) {
    this.context = new (window.AudioContext || window.webkitAudioContext)(), this.duration = this._duration, this.input = this.context.createMediaStreamSource(t), this.processor = this.context.createScriptProcessor(this.bufferSize, 1, 1), this.stream = t, this.processor.onaudioprocess = t => {
      const i = t.inputBuffer.getChannelData(0);
      let e = 0;
      this._isMp3() ? this.lameEncoder.encode(i) : this.wavSamples.push(new Float32Array(i));

      for (let t = 0; t < i.length; ++t) e += i[t] * i[t];

      this.duration = parseFloat(this._duration) + parseFloat(this.context.currentTime.toFixed(2)), this.volume = Math.sqrt(e / i.length).toFixed(2);
    }, this.input.connect(this.processor), this.processor.connect(this.context.destination);
  }

  _micError(t) {
    this.micFailed && this.micFailed(t);
  }

  _isMp3() {
    return "mp3" === this.format.toLowerCase();
  }

}

var script$f = defineComponent({
  name: "AudioRecorder",
  components: {},
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  methods: {},

  setup() {
    console.log("setup");
    const INSTRUCTION_MESSAGE = "Click on record to start recording.";
    const INSTRUCTION_MESSAGE_STOP = "Click stop to stop recording.";
    const ERROR_MESSAGE = "Failed to use microphone. Please refresh and try again and permit the use of a microphone.";
    const SUCCESS_MESSAGE = "Successfully recorded your story!"; //const SUCCESS_MESSAGE_SUBMIT = "Successfully submitted audio message! Thank you!";
    //const ERROR_SUBMITTING_MESSAGE = "Error submitting audio message! Please try again later.";

    const INSTRUCTION_INIT_MESSAGE = "Initializing...";
    const MP3_FORMAT = "mp3";

    const initRecorder = () => {
      state.instructionMessage = INSTRUCTION_INIT_MESSAGE;
      state.recordedAudio = undefined;
      state.recording = true;
      state.recorder.start();
      state.successMessage = "";
      state.errorMessage = "";
      state.instructionMessage = INSTRUCTION_MESSAGE_STOP;
    };

    const stopRecording = () => {
      state.recording = false;
      console.log("stopRecording");
      const rec = state.recorder;
      rec.stop();
      const recordList = rec.recordList();
      state.recordedAudio = recordList[recordList.length - 1].url;
      console.log("recordedAudio", state.recordedAudio);
      state.recordedBlob = recordList[recordList.length - 1].blob;
      console.log("recordedBlob", state.recordedAudio);

      if (state.recordedAudio) {
        state.successMessage = SUCCESS_MESSAGE;
        state.instructionMessage = "";
      }
    };

    const micFailedFunc = () => {
      state.recording = false;
      state.instructionMessage = INSTRUCTION_MESSAGE;
      state.errorMessage = ERROR_MESSAGE;
    };

    const myRecorder = new Recorder({
      micFailed: micFailedFunc,
      bitRate: 92,
      sampleRate: 44100,
      format: MP3_FORMAT
    });
    const state = reactive({
      recording: false,
      recordedAudio: undefined,
      recordedBlob: undefined,
      recorder: myRecorder,
      successMessage: "",
      errorMessage: "",
      instructionMessage: INSTRUCTION_MESSAGE
    });
    return {
      state,
      stopRecording,
      initRecorder
    };
  }

});

const _withScopeId$1 = n => (pushScopeId("data-v-702fccb1"), n = n(), popScopeId(), n);

const _hoisted_1$c = /*#__PURE__*/_withScopeId$1(() => /*#__PURE__*/createElementVNode("br", null, null, -1));

const _hoisted_2$b = /*#__PURE__*/createTextVNode("     ");

const _hoisted_3$8 = {
  key: 2
};
const _hoisted_4$7 = {
  key: 3
};
const _hoisted_5$6 = {
  class: "success"
};
const _hoisted_6$6 = {
  key: 4
};
const _hoisted_7$4 = {
  class: "danger"
};
const _hoisted_8$3 = ["src"];

const _hoisted_9$3 = /*#__PURE__*/createTextVNode(" Your browser does not support the ");

const _hoisted_10$3 = /*#__PURE__*/_withScopeId$1(() => /*#__PURE__*/createElementVNode("code", null, "audio", -1));

const _hoisted_11$3 = /*#__PURE__*/createTextVNode(" element. ");

const _hoisted_12$3 = [_hoisted_9$3, _hoisted_10$3, _hoisted_11$3];
function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [_hoisted_1$c, !_ctx.state.recording ? (openBlock(), createElementBlock("button", {
    key: 0,
    href: "#",
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.initRecorder && _ctx.initRecorder(...arguments);
    }),
    role: "button"
  }, "record")) : createCommentVNode("", true), _hoisted_2$b, _ctx.state.recording ? (openBlock(), createElementBlock("button", {
    key: 1,
    class: "record-btn",
    href: "#",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.stopRecording && _ctx.stopRecording(...arguments);
    }),
    role: "button"
  }, "stop recording")) : createCommentVNode("", true), _ctx.state.instructionMessage ? (openBlock(), createElementBlock("div", _hoisted_3$8, [createElementVNode("p", null, toDisplayString(_ctx.state.instructionMessage), 1)])) : createCommentVNode("", true), _ctx.state.successMessage ? (openBlock(), createElementBlock("div", _hoisted_4$7, [createElementVNode("p", _hoisted_5$6, toDisplayString(_ctx.state.successMessage), 1)])) : createCommentVNode("", true), _ctx.state.errorMessage ? (openBlock(), createElementBlock("div", _hoisted_6$6, [createElementVNode("p", _hoisted_7$4, toDisplayString(_ctx.state.errorMessage), 1)])) : createCommentVNode("", true), _ctx.state.recordedAudio ? (openBlock(), createElementBlock("audio", {
    key: 5,
    controls: "",
    src: _ctx.state.recordedAudio,
    type: "audio/mpeg",
    class: "mx-auto"
  }, _hoisted_12$3, 8, _hoisted_8$3)) : createCommentVNode("", true)]);
}

var css_248z$3 = "\n.success[data-v-702fccb1] {\r\n        color: green;\n}\n.danger[data-v-702fccb1] {\r\n        color: red;\n}\r\n";
styleInject(css_248z$3);

script$f.render = render$f;
script$f.__scopeId = "data-v-702fccb1";

var script$e = defineComponent({
  name: "FieldBase",
  props: {
    model: {
      type: null,
      required: true
    }
  },
  components: {
    AttachmentField: script$r,
    CheckboxField: script$q,
    DateField: script$o,
    DecimalField: script$n,
    EmailField: script$m,
    InfoField: script$l,
    IntegerField: script$k,
    RadioField: script$j,
    SelectField: script$i,
    MultilingualTextField: script$g,
    AudioRecorderField: script$f
  },

  setup(p) {
    const store = useStore();
    const fieldType = FieldContainerUtils.getFieldType(p.model);
    const cssClass = FieldContainerUtils.cssClass(p.model);
    var isMonolingualField = false;
    if (fieldType === eFieldType.EmailField || fieldType === eFieldType.DateField || fieldType === eFieldType.DecimalField || fieldType === eFieldType.IntegerField || fieldType === eFieldType.MonolingualTextField) isMonolingualField = true;
    return {
      store,
      FieldTypes: eFieldType,
      ValidationStatus: eValidationStatus,
      fieldType,
      cssClass,
      isMonolingualField
    };
  },

  methods: {
    addMonoLingualField(store, field) {
      store.commit(FlattenedFormFiledMutations.APPEND_MONOLINGUAL_VALUE, field);
    }

  }
});

const _hoisted_1$b = {
  class: "col-md-3 field-name"
};
const _hoisted_2$a = {
  key: 0,
  style: {
    "color": "red"
  }
};
const _hoisted_3$7 = {
  class: "col-md-9 field-value"
};
const _hoisted_4$6 = {
  key: 0,
  style: {
    "color": "red"
  }
};
const _hoisted_5$5 = {
  key: 1,
  style: {
    "color": "red"
  }
};
const _hoisted_6$5 = {
  key: 13
};
const _hoisted_7$3 = {
  key: 14
};
function render$e(_ctx, _cache, $props, $setup, $data, $options) {
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

  return _ctx.fieldType === _ctx.FieldTypes.InfoSection ? (openBlock(), createBlock(_component_InfoField, {
    key: 0,
    model: _ctx.model,
    class: normalizeClass(_ctx.cssClass)
  }, null, 8, ["model", "class"])) : (openBlock(), createElementBlock("div", {
    key: 1,
    class: normalizeClass(_ctx.cssClass + ' row')
  }, [createElementVNode("div", _hoisted_1$b, [createTextVNode(toDisplayString(_ctx.model.name.concatenatedContent) + " ", 1), this.model.required ? (openBlock(), createElementBlock("span", _hoisted_2$a, "*")) : createCommentVNode("", true)]), createElementVNode("div", _hoisted_3$7, [((_ctx$model = _ctx.model) === null || _ctx$model === void 0 ? void 0 : _ctx$model.validationStatus) === _ctx.ValidationStatus.VALUE_REQUIRED ? (openBlock(), createElementBlock("div", _hoisted_4$6, "This field requires a value.")) : createCommentVNode("", true), ((_ctx$model2 = _ctx.model) === null || _ctx$model2 === void 0 ? void 0 : _ctx$model2.validationStatus) === _ctx.ValidationStatus.INVALID ? (openBlock(), createElementBlock("div", _hoisted_5$5, "This field has an invalid value.")) : createCommentVNode("", true), _ctx.fieldType === _ctx.FieldTypes.AttachmentField ? (openBlock(), createBlock(_component_AttachmentField, {
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
  }, null, 8, ["model"])) : _ctx.fieldType === _ctx.FieldTypes.CompositeField ? (openBlock(), createElementBlock("div", _hoisted_6$5, " TODO: Implement editor template for the CompositeField")) : _ctx.fieldType === _ctx.FieldTypes.TableField ? (openBlock(), createElementBlock("div", _hoisted_7$3, " TODO: Implement editor template for the TableField")) : createCommentVNode("", true), _ctx.isMonolingualField === true ? (openBlock(), createElementBlock("span", {
    key: 15,
    class: "fa fa-plus-circle",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.addMonoLingualField(_ctx.store, _ctx.model))
  })) : createCommentVNode("", true)])], 2));
}

script$e.render = render$e;

var script$d = defineComponent({
  name: "FieldContainerReference",
  components: {
    FieldPrimitive: script$e
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
    return {
      refId,
      source: computed(() => store.getters.metadataSet(refId.value))
    };
  }

});

function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$source$fields;

  const _component_FieldPrimitive = resolveComponent("FieldPrimitive");

  return openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$source$fields = _ctx.source.fields) === null || _ctx$source$fields === void 0 ? void 0 : _ctx$source$fields.$values, field => {
    return openBlock(), createBlock(_component_FieldPrimitive, {
      model: field
    }, null, 8, ["model"]);
  }), 256);
}

script$d.render = render$d;

var script$c = defineComponent({
  name: "Field",
  props: {
    model: {
      type: null,
      required: true
    }
  },
  components: {
    FieldPrimitive: script$e,
    FieldContainerReference: script$d
  },

  setup(p) {
    return {
      isFieldContainerReference: FieldContainerUtils.getFieldType(p.model) == eFieldType.FieldContainerReference
    };
  }

});

function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FieldContainerReference = resolveComponent("FieldContainerReference");

  const _component_FieldPrimitive = resolveComponent("FieldPrimitive");

  return _ctx.isFieldContainerReference ? (openBlock(), createBlock(_component_FieldContainerReference, {
    key: 0,
    model: _ctx.model
  }, null, 8, ["model"])) : (openBlock(), createBlock(_component_FieldPrimitive, {
    key: 1,
    model: _ctx.model
  }, null, 8, ["model"]));
}

script$c.render = render$c;

var script$b = defineComponent({
  name: "FieldContainer",
  props: {
    model: null
  },
  components: {
    Field: script$c
  }
});

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$model$fields;

  const _component_Field = resolveComponent("Field");

  return openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$model$fields = _ctx.model.fields) === null || _ctx$model$fields === void 0 ? void 0 : _ctx$model$fields.$values, field => {
    return openBlock(), createBlock(_component_Field, {
      model: field
    }, null, 8, ["model"]);
  }), 256);
}

script$b.render = render$b;

var script$a = defineComponent({
  name: "ChildFormSubmission",
  components: {
    ChildForm: script$b,
    ChildView: script$z
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
    const state = store.state;
    store.commit(FlattenedFormFiledMutations.REMOVE_FIELD_CONTAINERS);
    store.commit(Mutations$3.SET_ITEM_TEMPLATE_ID, itemTemplateId);
    store.commit(Mutations$3.SET_FORM_ID, childFormId);
    store.commit(Mutations$2.SET_PARENT_ITEM_ID, itemId); //load the data

    store.dispatch(Actions$3.LOAD_FORM);
    store.dispatch(Actions$3.LOAD_SUBMISSIONS);

    if (childResponseFormId) {
      store.commit(Mutations$2.SET_RESPONSE_FORM_ID, childResponseFormId);
      store.dispatch(Actions$3.LOAD_RESPONSE_FORM);
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

      store.dispatch(Actions$3.SUBMIT_CHILD_RESPONSE_FORM, (_childSubmissions$val = childSubmissions.value[index]) === null || _childSubmissions$val === void 0 ? void 0 : _childSubmissions$val.id);
      toggleDisplayResponse(index);
    };

    return {
      store,
      childForm: computed(() => state.form),
      childSubmissions: computed(() => {
        var _state$formInstances;

        return (_state$formInstances = state.formInstances) === null || _state$formInstances === void 0 ? void 0 : _state$formInstances.$values;
      }),
      submissionStatus: computed(() => state.submissionStatus),
      eSubmissionStatus,
      eValidationStatus,
      childResponseFormId,
      childResponseForm: computed(() => state.childResponseForm),
      responseDisplayFlags,
      toggleDisplayResponse,
      submitChildResponse,
      isAdmin
    };
  },

  storeConfig: {
    state: state$4,
    actions: actions$5,
    mutations: mutations$4,
    getters: getters$4
  },
  methods: {
    submitChildForm() {
      this.store.dispatch(Actions$3.SUBMIT_CHILD_FORM);
    },

    removeResponseForm(itemToRemove) {
      if (confirm("Do you really want to delete this item?")) {
        this.store.dispatch(Actions$3.DELETE_CHILD_RESPONSE_INSTANCE, itemToRemove);
      }
    },

    removeChildForm(itemToRemove) {
      if (confirm("Do you really want to delete this item?")) {
        this.store.dispatch(Actions$3.DELETE_CHILD_INSTANCE, itemToRemove);
      }
    }

  }
});

const _withScopeId = n => (pushScopeId("data-v-7768b5b2"), n = n(), popScopeId(), n);

const _hoisted_1$a = {
  key: 0,
  class: "submissionForm"
};
const _hoisted_2$9 = {
  key: 0,
  class: "alert alert-danger"
};
const _hoisted_3$6 = {
  key: 1
};
const _hoisted_4$5 = {
  key: 0,
  class: "alert alert-info"
};
const _hoisted_5$4 = {
  key: 1,
  class: "alert alert-info"
};
const _hoisted_6$4 = {
  key: 2,
  class: "alert alert-danger"
};
const _hoisted_7$2 = {
  key: 1,
  class: "mt-2 submissionInstanceList"
};

const _hoisted_8$2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createElementVNode("h3", null, "Responses", -1));

const _hoisted_9$2 = {
  class: "submissionInstance"
};
const _hoisted_10$2 = {
  key: 0,
  class: "text-right"
};
const _hoisted_11$2 = ["onClick"];

const _hoisted_12$2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createElementVNode("span", {
  class: "fas fa-reply replyBtn"
}, null, -1));

const _hoisted_13$2 = [_hoisted_12$2];
const _hoisted_14$2 = ["onClick"];
const _hoisted_15$2 = {
  class: "ml-3 submissionInstanceList"
};
const _hoisted_16$2 = {
  key: 0,
  class: "mb-2"
};
const _hoisted_17$1 = {
  key: 0,
  class: "childResponseForm"
};
const _hoisted_18$1 = {
  key: 0,
  class: "alert alert-danger"
};
const _hoisted_19$1 = ["onClick"];
const _hoisted_20$1 = {
  class: "submissionInstance"
};
const _hoisted_21$1 = {
  key: 0,
  class: "text-right"
};
const _hoisted_22$1 = ["onClick"];
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$childForm;

  const _component_ChildForm = resolveComponent("ChildForm");

  const _component_ChildView = resolveComponent("ChildView");

  return openBlock(), createElementBlock(Fragment, null, [_ctx.childForm && Object.keys(_ctx.childForm).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$a, [createVNode(_component_ChildForm, {
    model: _ctx.childForm
  }, null, 8, ["model"]), ((_ctx$childForm = _ctx.childForm) === null || _ctx$childForm === void 0 ? void 0 : _ctx$childForm.validationStatus) === _ctx.eValidationStatus.INVALID ? (openBlock(), createElementBlock("div", _hoisted_2$9, "Form validation failed.")) : (openBlock(), createElementBlock("div", _hoisted_3$6, [_ctx.submissionStatus === _ctx.eSubmissionStatus.InProgress ? (openBlock(), createElementBlock("div", _hoisted_4$5, "Submitting...")) : createCommentVNode("", true), _ctx.submissionStatus === _ctx.eSubmissionStatus.Success ? (openBlock(), createElementBlock("div", _hoisted_5$4, "Submission successful")) : createCommentVNode("", true), _ctx.submissionStatus === _ctx.eSubmissionStatus.Fail ? (openBlock(), createElementBlock("div", _hoisted_6$4, "Submission failed")) : createCommentVNode("", true)])), createElementVNode("button", {
    class: "btn btn-primary",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.submitChildForm())
  }, "Submit")])) : createCommentVNode("", true), _ctx.childSubmissions && _ctx.childSubmissions.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_7$2, [_hoisted_8$2, (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.childSubmissions, (child, index) => {
    var _ctx$childResponseFor;

    return openBlock(), createElementBlock("div", _hoisted_9$2, [createVNode(_component_ChildView, {
      model: child,
      "hide-field-names": true
    }, null, 8, ["model"]), !_ctx.responseDisplayFlags[index] ? (openBlock(), createElementBlock("div", _hoisted_10$2, [createElementVNode("a", {
      href: "#",
      class: "text-decoration-none",
      onClick: $event => _ctx.toggleDisplayResponse(index),
      onclick: "return false;"
    }, _hoisted_13$2, 8, _hoisted_11$2), _ctx.isAdmin ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: "fas fa-remove",
      onClick: $event => {
        _ctx.removeChildForm(child);
      }
    }, null, 8, _hoisted_14$2)) : createCommentVNode("", true)])) : createCommentVNode("", true), createElementVNode("div", _hoisted_15$2, [_ctx.childResponseFormId ? (openBlock(), createElementBlock("div", _hoisted_16$2, [_ctx.responseDisplayFlags[index] ? (openBlock(), createElementBlock("div", _hoisted_17$1, [createVNode(_component_ChildForm, {
      model: _ctx.childResponseForm
    }, null, 8, ["model"]), ((_ctx$childResponseFor = _ctx.childResponseForm) === null || _ctx$childResponseFor === void 0 ? void 0 : _ctx$childResponseFor.validationStatus) === _ctx.eValidationStatus.INVALID ? (openBlock(), createElementBlock("div", _hoisted_18$1, "Response validation failed.")) : createCommentVNode("", true), createElementVNode("button", {
      class: "btn btn-primary submitBtn",
      onClick: $event => _ctx.submitChildResponse(index)
    }, "Submit", 8, _hoisted_19$1)])) : createCommentVNode("", true)])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(child.childFieldContainers.$values, (response, resIdx) => {
      return openBlock(), createElementBlock("div", _hoisted_20$1, [createVNode(_component_ChildView, {
        model: response,
        "hide-field-names": true
      }, null, 8, ["model"]), _ctx.isAdmin ? (openBlock(), createElementBlock("div", _hoisted_21$1, [createElementVNode("span", {
        class: "fas fa-remove deleteBtn",
        onClick: $event => {
          _ctx.removeResponseForm(response);
        }
      }, null, 8, _hoisted_22$1)])) : createCommentVNode("", true)]);
    }), 256))])]);
  }), 256))])) : createCommentVNode("", true)], 64);
}

var css_248z$2 = "\n.fa-remove[data-v-7768b5b2] {\r\n\t\tcolor: red;\r\n\t\tmargin-left: 30px;\n}\r\n";
styleInject(css_248z$2);

script$a.render = render$a;
script$a.__scopeId = "data-v-7768b5b2";

var Actions$2;

(function (Actions) {
  Actions["LOAD_FORM"] = "LOAD_FORM";
  Actions["SUBMIT_FORM"] = "SUBMIT_FORM";
})(Actions$2 || (Actions$2 = {}));

const actions$4 = {
  [Actions$2.LOAD_FORM](store) {
    const api = window.location.origin + `/applets/api/itemtemplates/${store.state.itemTemplateId}/data-form/${store.state.formId}`;
    console.log('Form Load API: ', api);
    fetch(api).then(response => response.json()).then(data => {
      //console.log('Data:\n', JSON.stringify(data));
      store.commit(Mutations$3.SET_FORM, data);
      store.commit(FlattenedFormFiledMutations.APPEND_FIELD_DATA, data);
    }).catch(error => {
      console.error('Actions.LOAD_FORM Error: ', error);
    });
  },

  [Actions$2.SUBMIT_FORM](store) {
    const form = store.state.form; //Validating the form

    if (!form || !validateFields(form)) return;
    store.commit(Mutations$3.SET_SUBMISSION_STATUS, "InProgress");
    const api = window.location.origin + `/applets/api/items/?itemTemplateId=${store.state.itemTemplateId}&groupId=${store.state.groupId ? store.state.groupId : ""}&collectionId=${store.state.collectionId}`;
    const formData = new FormData(); //Setting the serialized JSON form model to the datamodel variable in formData

    formData.append('datamodel', JSON.stringify(form)); //Adding all attachments uploaded to the files variable in formData

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
    }).then(response => response.json()).then(() => {
      //console.log(JSON.stringify(data));
      store.commit(FlattenedFormFiledMutations.REMOVE_FIELD_CONTAINERS);
      store.commit(Mutations$3.SET_FORM, null);
      store.commit(Mutations$3.SET_SUBMISSION_STATUS, "Success");
    }).catch(error => {
      store.commit(Mutations$3.SET_SUBMISSION_STATUS, "Fail");
      console.log(error);
    });
  }

};

var script$9 = defineComponent({
  name: "FormSubmission",
  components: {
    SubmissionForm: script$b
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
    store.commit(FlattenedFormFiledMutations.REMOVE_FIELD_CONTAINERS);
    store.commit(Mutations$3.SET_ITEM_TEMPLATE_ID, itemTemplateId);
    store.commit(Mutations$3.SET_FORM_ID, formId);
    store.commit(Mutations$3.SET_COLLECTION_ID, collectionId);
    store.commit(Mutations$3.SET_GROUP_ID, groupId); //load the data

    store.dispatch(Actions$2.LOAD_FORM);
    return {
      store,
      submissionForm: computed(() => store.state.form),
      submissionStatus: computed(() => store.state.submissionStatus),
      eSubmissionStatus,
      eValidationStatus,
      submitForm: () => store.dispatch(Actions$2.SUBMIT_FORM)
    };
  },

  storeConfig: {
    state: state$5,
    actions: actions$4,
    mutations: mutations$5
  }
});

const _hoisted_1$9 = {
  key: 0
};
const _hoisted_2$8 = {
  key: 1,
  class: "alert alert-danger"
};
const _hoisted_3$5 = {
  key: 2
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
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$submissionForm;

  const _component_SubmissionForm = resolveComponent("SubmissionForm");

  return openBlock(), createElementBlock(Fragment, null, [_ctx.submissionForm && Object.keys(_ctx.submissionForm).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$9, [createVNode(_component_SubmissionForm, {
    model: _ctx.submissionForm
  }, null, 8, ["model"]), createElementVNode("button", {
    class: "btn btn-primary",
    onClick: _cache[0] || (_cache[0] = $event => _ctx.submitForm())
  }, "Submit")])) : createCommentVNode("", true), ((_ctx$submissionForm = _ctx.submissionForm) === null || _ctx$submissionForm === void 0 ? void 0 : _ctx$submissionForm.validationStatus) === _ctx.eValidationStatus.INVALID ? (openBlock(), createElementBlock("div", _hoisted_2$8, "Form validation failed.")) : (openBlock(), createElementBlock("div", _hoisted_3$5, [_ctx.submissionStatus === _ctx.eSubmissionStatus.InProgress ? (openBlock(), createElementBlock("div", _hoisted_4$4, "Submitting...")) : createCommentVNode("", true), _ctx.submissionStatus === _ctx.eSubmissionStatus.Success ? (openBlock(), createElementBlock("div", _hoisted_5$3, "Submission successful")) : createCommentVNode("", true), _ctx.submissionStatus === _ctx.eSubmissionStatus.Fail ? (openBlock(), createElementBlock("div", _hoisted_6$3, "Submission failed")) : createCommentVNode("", true)]))], 64);
}

script$9.render = render$9;

const state$3 = {
  itemTemplateID: null,
  collectionID: null,
  groupId: null,
  reportFields: null,
  reportData: null,
  detailedViewUrl: null,
  templateStatus: null,
  id: null,
  offset: 0,
  pageSize: 25,
  siteUrl: null
};

var Mutations$1;

(function (Mutations) {
  Mutations["SET_TEMPLATE_ID"] = "SET_TEMPLATE_ID";
  Mutations["SET_COLLECTION_ID"] = "SET_COLLECTION_ID";
  Mutations["SET_GROUP_ID"] = "SET_GROUP_ID";
  Mutations["SET_REPORT_FIELDS"] = "SET_REPORT_FIELDS";
  Mutations["SET_REPORT_DATA"] = "SET_REPORT_DATA";
  Mutations["SET_DETAILED_VIEW_URL"] = "SET_DETAILED_VIEW_URL";
  Mutations["SET_STATUS"] = "SET_STATUS";
  Mutations["SET_ID"] = "SET_ID";
  Mutations["SET_OFFSET"] = "SET_OFFSET";
  Mutations["SET_PAGE_SISE"] = "SET_PAGE_SISE";
  Mutations["SET_SITE_URL"] = "SET_SITE_URL";
})(Mutations$1 || (Mutations$1 = {}));

const mutations$3 = {
  [Mutations$1.SET_TEMPLATE_ID](state, payload) {
    state.itemTemplateID = payload;
  },

  [Mutations$1.SET_COLLECTION_ID](state, payload) {
    state.collectionID = payload;
  },

  [Mutations$1.SET_GROUP_ID](state, payload) {
    state.groupId = payload;
  },

  [Mutations$1.SET_REPORT_FIELDS](state, payload) {
    state.reportFields = payload;
  },

  [Mutations$1.SET_REPORT_DATA](state, payload) {
    state.reportData = payload;
  },

  [Mutations$1.SET_DETAILED_VIEW_URL](state, payload) {
    state.detailedViewUrl = payload;
  },

  [Mutations$1.SET_STATUS](state, payload) {
    state.templateStatus = payload;
  },

  [Mutations$1.SET_ID](state, payload) {
    state.id = payload;
  },

  [Mutations$1.SET_OFFSET](state, payload) {
    state.offset = payload;
  },

  [Mutations$1.SET_PAGE_SISE](state, payload) {
    state.pageSize = payload;
  },

  [Mutations$1.SET_SITE_URL](state, payload) {
    state.siteUrl = payload;
  }

};

var Actions$1;

(function (Actions) {
  Actions["LOAD_DATA"] = "LOAD_DATA";
})(Actions$1 || (Actions$1 = {}));

const actions$3 = {
  [Actions$1.LOAD_DATA](store, searchParams) {
    //console.log('Store: ', JSON.stringify(store.state))
    const api = (store.state.siteUrl ? store.state.siteUrl : window.location.origin) + `/applets/api/items/GetReportData/${store.state.groupId}/template/${store.state.itemTemplateID}/collection/${store.state.collectionID}?startDate=${searchParams.startDate ? searchParams.startDate : ""}&endDate=${searchParams.endDate ? searchParams.endDate : ""}&status=${searchParams.status ? searchParams.status : ""}`;
    console.log('reports Load API: ', api);
    const formData = new FormData(); //Setting the serialized JSON form model to the datamodel variable in formData

    formData.append('datamodel', JSON.stringify(store.state.reportFields));
    if (searchParams.freeText) formData.append('freeText', searchParams.freeText);
    formData.append('offset', store.state.offset.toString());
    formData.append('pageSize', store.state.pageSize.toString());
    fetch(api, {
      body: formData,
      method: "post",
      headers: {
        //"Content-Type": "multipart/form-data"
        "encType": "multipart/form-data"
      }
    }).then(response => response.json()).then(data => {
      store.commit(Mutations$1.SET_REPORT_DATA, data);
    });
  }

};

const getters$3 = {};

var script$8 = defineComponent({
  name: "Report",
  components: {},
  props,

  setup(p) {
    const store = useStore(); // console.log('props: ', JSON.stringify(p));
    //const queryParameters = p.queryParameters as QueryParameter;

    const dataAttributes = p.dataAttributes;
    const siteUrl = dataAttributes["site-url"];
    store.commit(Mutations$1.SET_SITE_URL, siteUrl);
    const itemTemplateId = guid$1.Guid.parse(dataAttributes["template-id"]);
    store.commit(Mutations$1.SET_TEMPLATE_ID, itemTemplateId); //store.state.itemTemplateId = itemTemplateId;

    const collectionId = guid$1.Guid.parse(dataAttributes["collection-id"]);
    store.commit(Mutations$1.SET_COLLECTION_ID, collectionId); //store.state.collectionId = collectionId;

    const groupId = guid$1.Guid.parse(dataAttributes["group-id"]);
    store.commit(Mutations$1.SET_GROUP_ID, groupId); //store.state.groupId = groupId;

    const selectedFields = JSON.parse(dataAttributes["selected-fields"]);
    store.commit(Mutations$1.SET_REPORT_FIELDS, selectedFields); //store.state.reportFields = selectedFields;

    const templateStatus = JSON.parse(dataAttributes["status"]);
    store.commit(Mutations$1.SET_STATUS, templateStatus); //store.state.templateStatus = templateStatus;

    const queryParams = p.queryParameters;
    store.commit(Mutations$1.SET_ID, queryParams.iid);
    const detailedViewUrlPath = dataAttributes["detailed-url"]; //store.commit(Mutations.SET_DETAILED_VIEW_URL, detailedViewURL)
    //store.state.detailedViewUrl = detailedViewURL;
    //console.log("detailed-view-url " + detailedViewURL)
    //console.log("selected Fields: " + selectedFields)

    const fromDate = ref(null);
    const toDate = ref(null);
    const selectedStatus = ref(null);
    const freeText = ref(null);
    const offset = computed({
      get: () => store.state.offset,
      set: val => store.commit(Mutations$1.SET_OFFSET, val)
    });
    const pageSize = computed({
      get: () => store.state.pageSize,
      set: val => store.commit(Mutations$1.SET_PAGE_SISE, val)
    });

    const loadData = () => store.dispatch(Actions$1.LOAD_DATA, {
      startDate: fromDate.value,
      endDate: toDate.value,
      freeText: freeText.value,
      status: selectedStatus.value
    });

    return {
      store,
      selectedFields,
      report: computed(() => store.state.reportData),
      loadData,
      queryParams,
      templateStatus,
      detailedViewURL: id => {
        const url = detailedViewUrlPath + id;
        return url;
      },
      fromDate,
      toDate,
      freeText,
      selectedStatus,
      offset,
      pageSize,
      previousPage: () => {
        offset.value = offset.value < pageSize.value ? 0 : offset.value - pageSize.value;
        loadData();
      },
      nextPage: () => {
        offset.value = offset.value + pageSize.value;
        loadData();
      }
    };
  },

  storeConfig: {
    state: state$3,
    actions: actions$3,
    mutations: mutations$3,
    getters: getters$3
  } //methods: {
  //          LoadData() {
  //              this.store.dispatch(Actions.LOAD_DATA);
  //          }
  //      }

});

const _hoisted_1$8 = /*#__PURE__*/createElementVNode("h3", null, "Report", -1);

const _hoisted_2$7 = {
  class: "row col-md-12"
};
const _hoisted_3$4 = {
  class: "col-md-6 form-group"
};

const _hoisted_4$3 = /*#__PURE__*/createElementVNode("label", null, "From:", -1);

const _hoisted_5$2 = {
  class: "col-md-6 form-group"
};

const _hoisted_6$2 = /*#__PURE__*/createElementVNode("label", {
  class: "form-label"
}, "To:", -1);

const _hoisted_7$1 = {
  class: "col-md-6 form-group"
};

const _hoisted_8$1 = /*#__PURE__*/createElementVNode("label", {
  class: "form-label"
}, "Status:", -1);

const _hoisted_9$1 = /*#__PURE__*/createElementVNode("option", {
  disabled: "",
  value: ""
}, "Please select one", -1);

const _hoisted_10$1 = /*#__PURE__*/createElementVNode("option", {
  value: ""
}, null, -1);

const _hoisted_11$1 = ["value"];
const _hoisted_12$1 = {
  class: "col-md-6 form-group"
};

const _hoisted_13$1 = /*#__PURE__*/createElementVNode("label", {
  class: "form-label"
}, "Search text:", -1);

const _hoisted_14$1 = {
  class: "col-md-6 form-group"
};
const _hoisted_15$1 = {
  key: 0,
  style: {
    "text-align": "center"
  }
};
const _hoisted_16$1 = {
  class: "table"
};

const _hoisted_17 = /*#__PURE__*/createElementVNode("th", null, null, -1);

const _hoisted_18 = /*#__PURE__*/createElementVNode("th", null, "Submitted Date", -1);

const _hoisted_19 = /*#__PURE__*/createElementVNode("th", null, "Status", -1);

const _hoisted_20 = ["href"];
const _hoisted_21 = {
  key: 0
};
const _hoisted_22 = {
  key: 1
};
const _hoisted_23 = {
  key: 2
};
const _hoisted_24 = {
  key: 3
};
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$report, _ctx$report2, _ctx$report2$rows, _ctx$report3, _ctx$report4;

  return openBlock(), createElementBlock(Fragment, null, [_hoisted_1$8, createElementVNode("div", _hoisted_2$7, [createElementVNode("div", _hoisted_3$4, [_hoisted_4$3, withDirectives(createElementVNode("input", {
    type: "date",
    name: "startDate",
    id: "startDate",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.fromDate = $event),
    class: "form-control"
  }, null, 512), [[vModelText, _ctx.fromDate]])]), createElementVNode("div", _hoisted_5$2, [_hoisted_6$2, withDirectives(createElementVNode("input", {
    type: "date",
    name: "endDate",
    id: "endDate",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.toDate = $event),
    class: "form-control"
  }, null, 512), [[vModelText, _ctx.toDate]])]), createElementVNode("div", _hoisted_7$1, [_hoisted_8$1, withDirectives(createElementVNode("select", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.selectedStatus = $event),
    class: "form-control",
    style: {
      "width": "auto"
    }
  }, [_hoisted_9$1, _hoisted_10$1, (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.templateStatus, status => {
    return openBlock(), createElementBlock("option", {
      value: status.id
    }, toDisplayString(status.status), 9, _hoisted_11$1);
  }), 256))], 512), [[vModelSelect, _ctx.selectedStatus]])]), createElementVNode("div", _hoisted_12$1, [_hoisted_13$1, withDirectives(createElementVNode("input", {
    type: "text",
    name: "freeText",
    id: "freeText",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.freeText = $event),
    class: "form-control"
  }, null, 512), [[vModelText, _ctx.freeText]])]), createElementVNode("div", _hoisted_14$1, [createElementVNode("button", {
    class: "btn btn-primary",
    onClick: _cache[4] || (_cache[4] = $event => {
      _ctx.offset = 0;

      _ctx.loadData();
    })
  }, "Execute")])]), (_ctx$report = _ctx.report) !== null && _ctx$report !== void 0 && _ctx$report.rows ? (openBlock(), createElementBlock("div", _hoisted_15$1, [_ctx.offset > 0 ? (openBlock(), createElementBlock("button", {
    key: 0,
    onClick: _cache[5] || (_cache[5] = function () {
      return _ctx.previousPage && _ctx.previousPage(...arguments);
    }),
    class: "m-2"
  }, "Previous")) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(_ctx.offset + 1) + " to " + toDisplayString(_ctx.offset + ((_ctx$report2 = _ctx.report) === null || _ctx$report2 === void 0 ? void 0 : (_ctx$report2$rows = _ctx$report2.rows) === null || _ctx$report2$rows === void 0 ? void 0 : _ctx$report2$rows.length)) + " of " + toDisplayString((_ctx$report3 = _ctx.report) === null || _ctx$report3 === void 0 ? void 0 : _ctx$report3.total) + " ", 1), _ctx.offset + _ctx.report.rows.length < _ctx.report.total ? (openBlock(), createElementBlock("button", {
    key: 1,
    onClick: _cache[6] || (_cache[6] = function () {
      return _ctx.nextPage && _ctx.nextPage(...arguments);
    }),
    class: "m-2"
  }, "Next")) : createCommentVNode("", true)])) : createCommentVNode("", true), createElementVNode("table", _hoisted_16$1, [createElementVNode("thead", null, [createElementVNode("tr", null, [_hoisted_17, (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.selectedFields, field => {
    return openBlock(), createElementBlock("th", null, toDisplayString(field.fieldName), 1);
  }), 256)), _hoisted_18, _hoisted_19])]), createElementVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$report4 = _ctx.report) === null || _ctx$report4 === void 0 ? void 0 : _ctx$report4.rows, reportRow => {
    return openBlock(), createElementBlock("tr", null, [createElementVNode("td", null, [createElementVNode("a", {
      href: _ctx.detailedViewURL(reportRow.itemId),
      class: "fa fa-eye",
      target: "_blank"
    }, null, 8, _hoisted_20)]), (openBlock(true), createElementBlock(Fragment, null, renderList(reportRow.cells, cell => {
      return openBlock(), createElementBlock("td", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(cell.values, cellValue => {
        return openBlock(), createElementBlock("div", null, [cellValue.renderType === 'Text' ? (openBlock(), createElementBlock("div", _hoisted_21, [(openBlock(true), createElementBlock(Fragment, null, renderList(cellValue.values, txt => {
          return openBlock(), createElementBlock("div", null, toDisplayString(txt), 1);
        }), 256))])) : createCommentVNode("", true), cellValue.renderType === 'Options' ? (openBlock(), createElementBlock("ul", _hoisted_22, [(openBlock(true), createElementBlock(Fragment, null, renderList(cellValue.values, txt => {
          return openBlock(), createElementBlock("li", null, toDisplayString(txt), 1);
        }), 256))])) : createCommentVNode("", true), cellValue.renderType === 'Attachment' ? (openBlock(), createElementBlock("div", _hoisted_23, [(openBlock(true), createElementBlock(Fragment, null, renderList(cellValue.values, txt => {
          return openBlock(), createElementBlock("div", null, " File: " + toDisplayString(txt), 1);
        }), 256))])) : createCommentVNode("", true), cellValue.renderType === 'Audio' ? (openBlock(), createElementBlock("div", _hoisted_24, [(openBlock(true), createElementBlock(Fragment, null, renderList(cellValue.values, txt => {
          return openBlock(), createElementBlock("div", null, " Audio: " + toDisplayString(txt), 1);
        }), 256))])) : createCommentVNode("", true)]);
      }), 256))]);
    }), 256)), createElementVNode("td", null, [createElementVNode("div", null, toDisplayString(reportRow.created), 1)]), createElementVNode("td", null, [createElementVNode("div", null, toDisplayString(reportRow.status), 1)])]);
  }), 256))])])], 64);
}

script$8.render = render$8;

////import { Guid } from 'guid-typescript'
const state$2 = { //items: null,
  //formIds: null,
  //template: null,
  //templateId: null,
  ...state$9
};

//export enum Actions{
//}

const actions$2 = { ...actions$a
};

const getters$2 = {
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

const mutations$2 = { //[Mutations.SET_ID](state: State, payload: Guid) {
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
  ...mutations$b
};

var script$7 = defineComponent({
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

const _hoisted_1$7 = /*#__PURE__*/createElementVNode("h5", null, "Carousel", -1);

const _hoisted_2$6 = {
  id: "carouselSlides",
  class: "carousel slide",
  "data-ride": "carousel"
};
const _hoisted_3$3 = {
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

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [_hoisted_1$7, createElementVNode("div", _hoisted_2$6, [createElementVNode("div", _hoisted_3$3, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.files.$values, file => {
    return openBlock(), createElementBlock("div", {
      class: normalizeClass(file.id === _ctx.file1stId ? 'carousel-item active' : 'carousel-item'),
      key: file.id
    }, [createElementVNode("img", {
      class: "d-block w-100",
      src: _ctx.fileUrl + file.fileName
    }, null, 8, _hoisted_4$2)], 2);
  }), 128))]), _hoisted_5$1, _hoisted_6$1])], 64);
}

script$7.render = render$7;

var script$6 = defineComponent({
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

const _hoisted_1$6 = /*#__PURE__*/createElementVNode("h5", null, "Gallery", -1);

const _hoisted_2$5 = {
  class: "container"
};
const _hoisted_3$2 = {
  class: "d-flex flex-row"
};
const _hoisted_4$1 = ["src", "alt"];
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [_hoisted_1$6, createElementVNode("div", _hoisted_2$5, [createElementVNode("div", _hoisted_3$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.files, file => {
    return openBlock(), createElementBlock("img", {
      src: _ctx.fileUrl + file.fileName,
      class: "w-100 shadow-1-strong rounded mb-4",
      alt: file.originalFileName
    }, null, 8, _hoisted_4$1);
  }), 256))])])], 64);
}

script$6.render = render$6;

var script$5 = defineComponent({
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

const _hoisted_1$5 = {
  class: "pdfViewer"
};
const _hoisted_2$4 = ["src"];
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$5, [createElementVNode("iframe", {
    height: "100%",
    width: "100%",
    src: _ctx.pdfViewerPath + _ctx.fileUrl
  }, null, 8, _hoisted_2$4)]);
}

var css_248z$1 = "\n.pdfViewer[data-v-97ebf75e] {\r\n        width: 50%;\r\n        height: 79vh;\r\n        min-width: 400px;\n}\r\n";
styleInject(css_248z$1);

script$5.render = render$5;
script$5.__scopeId = "data-v-97ebf75e";

var script$4 = defineComponent({
  name: "FieldComponent",
  components: {
    ImageCarousel: script$7,
    ImageGallery: script$6,
    PdfViewer: script$5
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

const _hoisted_1$4 = {
  class: "fieldType"
};

const _hoisted_2$3 = /*#__PURE__*/createElementVNode("hr", null, null, -1);

const _hoisted_3$1 = {
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

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ImageCarousel = resolveComponent("ImageCarousel");

  const _component_ImageGallery = resolveComponent("ImageGallery");

  const _component_PdfViewer = resolveComponent("PdfViewer");

  return openBlock(), createElementBlock("div", _hoisted_1$4, [_hoisted_2$3, _ctx.fieldType === 'Catfish.Core.Models.Contents.Fields.TextArea' || _ctx.fieldType === 'Catfish.Core.Models.Contents.Fields.TextField' ? (openBlock(), createElementBlock("div", _hoisted_3$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.field.values.$values, multilingualValue => {
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

script$4.render = render$4;

var script$3 = defineComponent({
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

const _hoisted_1$3 = {
  class: "staticType"
};

const _hoisted_2$2 = /*#__PURE__*/createElementVNode("h3", null, "Static Field", -1);

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [_hoisted_2$2, (openBlock(), createBlock(resolveDynamicComponent(_ctx.htmlWrapperTag), {
    class: normalizeClass(_ctx.model.cssClasses)
  }, {
    default: withCtx(() => [createTextVNode(toDisplayString(_ctx.model.content), 1)]),
    _: 1
  }, 8, ["class"]))]);
}

script$3.render = render$3;

// import { Guid } from 'guid-typescript'
var script$2 = defineComponent({
  name: "ItemLayout",
  components: {
    FieldComponent: script$4,
    StaticComponent: script$3
  },
  props,

  setup(p) {
    const store = useStore();
    const queryParams = p.queryParameters;
    store.commit(Mutations$8.SET_ID, queryParams.iid);
    const dataAttributes = p.dataAttributes; //const templateId = dataAttributes["template-id"] as string;
    //store.commit(Mutations.SET_TEMPLATE_ID, templateId);

    const selectedComponents = dataAttributes["selected-components"];
    const components = JSON.parse(selectedComponents);
    const isAdmin = dataAttributes["is-admin"]; //load the data

    store.dispatch(Actions$8.LOAD_ITEM); // console.log("selected Forms" + JSON.stringify(store.state.item));

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
    state: state$2,
    actions: actions$2,
    mutations: mutations$2,
    getters: getters$2
  }
});

const _hoisted_1$2 = {
  class: "item"
};

const _hoisted_2$1 = /*#__PURE__*/createElementVNode("h3", null, "ItemLayout", -1);

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_StaticComponent = resolveComponent("StaticComponent");

  const _component_FieldComponent = resolveComponent("FieldComponent");

  return openBlock(), createElementBlock("div", _hoisted_1$2, [_hoisted_2$1, (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.staticFields, field => {
    return openBlock(), createBlock(_component_StaticComponent, {
      model: field
    }, null, 8, ["model"]);
  }), 256)), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.fields, field => {
    return openBlock(), createBlock(_component_FieldComponent, {
      model: field
    }, null, 8, ["model"]);
  }), 256))]);
}

script$2.render = render$2;

const state$1 = { ...state$9
};

//export enum Actions{
//}

const actions$1 = { ...actions$a
};

const getters$1 = {};

const mutations$1 = { ...mutations$b
};

var script$1 = defineComponent({
  name: "ItemLayout",
  components: {},
  props,

  setup(p) {
    const store = useStore();
    const queryParams = p.queryParameters;
    store.commit(Mutations$8.SET_ID, queryParams.iid);
    const dataAttributes = p.dataAttributes; //const templateId = dataAttributes["template-id"] as string;
    //store.commit(Mutations.SET_TEMPLATE_ID, templateId);

    const selectedComponents = dataAttributes["selected-components"];
    const components = JSON.parse(selectedComponents);
    const isAdmin = dataAttributes["is-admin"]; //load the data

    store.dispatch(Actions$8.LOAD_ITEM); // console.log("selected Forms" + JSON.stringify(store.state.item));

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
    state: state$1,
    actions: actions$1,
    mutations: mutations$1,
    getters: getters$1
  }
});

const _hoisted_1$1 = {
  class: "item"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1);
}

script$1.render = render$1;

const state = { ...flattenedFormFiledState,
  id: null,
  item: null,
  permissionList: null,
  siteUrl: null
};

var Mutations;

(function (Mutations) {
  Mutations["SET_ID"] = "SET_ID";
  Mutations["SET_USER_PERMISSIONS"] = "SET_USER_PERMISSIONS";
  Mutations["SET_ITEM"] = "SET_ITEM";
  Mutations["SET_SITE_URL"] = "SET_SITE_URL";
})(Mutations || (Mutations = {})); //Create a mutation tree that implement all mutation interfaces


const mutations = { ...mutations$6,

  [Mutations.SET_ID](state, payload) {
    state.id = payload;
  },

  [Mutations.SET_USER_PERMISSIONS](state, payload) {
    state.permissionList = payload;
  },

  [Mutations.SET_ITEM](state, payload) {
    var _payload$dataContaine, _payload$dataContaine2, _payload$metadataSets, _payload$metadataSets2;

    state.item = payload; //Iterating through each entry in the data container and the metadata sets 
    //and adding them to the flattened field lists

    payload === null || payload === void 0 ? void 0 : (_payload$dataContaine = payload.dataContainer) === null || _payload$dataContaine === void 0 ? void 0 : (_payload$dataContaine2 = _payload$dataContaine.$values) === null || _payload$dataContaine2 === void 0 ? void 0 : _payload$dataContaine2.forEach(fieldContainer => {
      flattenFieldInputs(fieldContainer, state);
    });
    payload === null || payload === void 0 ? void 0 : (_payload$metadataSets = payload.metadataSets) === null || _payload$metadataSets === void 0 ? void 0 : (_payload$metadataSets2 = _payload$metadataSets.$values) === null || _payload$metadataSets2 === void 0 ? void 0 : _payload$metadataSets2.forEach(fieldContainer => {
      flattenFieldInputs(fieldContainer, state);
    });
  },

  [Mutations.SET_SITE_URL](state, payload) {
    state.siteUrl = payload;
  }

};

var Actions;

(function (Actions) {
  Actions["LOAD_ITEM"] = "LOAD_ITEM";
  Actions["GET_USER_ACTIONS"] = "GET_USER_ACTIONS";
  Actions["CHANGE_STATE"] = "CHANGE_STATE";
  Actions["SAVE"] = "SAVE";
  Actions["DELETE"] = "DELETE";
})(Actions || (Actions = {}));

const actions = {
  [Actions.LOAD_ITEM](store) {
    const api = (store.state.siteUrl ? store.state.siteUrl : window.location.origin) + `/applets/api/items/${store.state.id}`;
    console.log('Item Load API: ', api);
    fetch(api).then(response => response.json()).then(data => {
      store.commit(Mutations.SET_ITEM, data);
    });
  },

  [Actions.GET_USER_ACTIONS](store) {
    console.log("insude GET_USER_ACTIONS");
    const api = (store.state.siteUrl ? store.state.siteUrl : window.location.origin) + `/applets/api/items/getUserPermissions/${store.state.id}`;
    console.log('Permission Load API: ', api);
    fetch(api).then(response => response.json()).then(data => {
      console.log(JSON.stringify(data));
      store.commit(Mutations.SET_USER_PERMISSIONS, data);
    });
  },

  [Actions.DELETE](store) {
    console.log("Delete Action Started");
    const api = (store.state.siteUrl ? store.state.siteUrl : window.location.origin) + `/applets/api/items/deleteItem/${store.state.id}`;
    console.log('Item Delete API: ', api);
    const item = store.state.item; //Validating the forms

    if (!item) return;
    fetch(api, {
      method: "post",
      headers: {
        //"Content-Type": "multipart/form-data"
        "encType": "multipart/form-data"
      }
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
    }) //.then(data => {
    //    console.log(JSON.stringify(data));
    //    store.commit(FlattenedFormFiledMutations.REMOVE_FIELD_CONTAINERS);
    //    //store.commit(Mutations.SET_ITEM, data);
    //})
    .catch(error => {
      console.log("error", error);
    });
  },

  [Actions.SAVE](store) {
    const api = (store.state.siteUrl ? store.state.siteUrl : window.location.origin) + `/applets/api/items/update/`;
    console.log('Item Update API: ', api);
    const item = store.state.item; //Validating the forms

    if (!item) return;
    const formData = new FormData(); //Setting the serialized JSON form model to the datamodel variable in formData

    formData.append('item', JSON.stringify(item)); //Adding all attachments uploaded to the files variable in formData

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
      store.commit(FlattenedFormFiledMutations.REMOVE_FIELD_CONTAINERS);
      store.commit(Mutations.SET_ITEM, data);
    }).catch(error => {
      console.log(error);
    });
  }

};

const getters = {
  metadataSet: state => id => {
    var _state$item, _state$item$metadataS, _state$item$metadataS2;

    return (_state$item = state.item) === null || _state$item === void 0 ? void 0 : (_state$item$metadataS = _state$item.metadataSets) === null || _state$item$metadataS === void 0 ? void 0 : (_state$item$metadataS2 = _state$item$metadataS.$values) === null || _state$item$metadataS2 === void 0 ? void 0 : _state$item$metadataS2.find(ms => ms.templateId === id);
  }
};

var script = defineComponent({
  name: "ItemDetails",
  components: {
    FieldContainerViewer: script$z,
    FieldContainerEditor: script$b
  },
  props,

  setup(p) {
    const store = useStore();
    const dataAttributes = p.dataAttributes;
    console.log('Item Details setup ...');
    console.log('props: ', JSON.stringify(p));
    const isAdmin = dataAttributes["is-admin"];
    console.log('isAdmin123: ', isAdmin);
    const queryParams = p.queryParameters;
    store.commit(Mutations.SET_ID, queryParams.iid);
    const siteUrl = dataAttributes["site-url"];
    store.commit(Mutations.SET_SITE_URL, siteUrl); //load the data

    console.log("before GET_USER_ACTIONS");
    store.dispatch(Actions.GET_USER_ACTIONS);
    store.dispatch(Actions.LOAD_ITEM);

    const getContainerName = fc => {
      var _fc$name;

      return (_fc$name = fc.name) === null || _fc$name === void 0 ? void 0 : _fc$name.values.$values.map(txt => txt.value).join(" | ");
    };

    const editMode = ref(false);

    const isEditable = fc => {
      //Checks if the current user can update the given field container "fc".
      //Returns true if the editMode = true and if the current user has "Update"
      //permission on the field container "fc"
      console.log("Check edit permission started.");

      if (editMode.value) {
        var _store$state$permissi;

        const permissionsOfFieldContainer = (_store$state$permissi = store.state.permissionList.find(p => p.formId == fc.id)) === null || _store$state$permissi === void 0 ? void 0 : _store$state$permissi.permissions;
        return (permissionsOfFieldContainer === null || permissionsOfFieldContainer === void 0 ? void 0 : permissionsOfFieldContainer.find(p => p.action == "Update")) != null;
      } else return false;
    };

    const hasEditPermission = () => {
      var _store$state$permissi2;

      //Checks if the current user has the Update permission on any of the field containers in the item
      return ((_store$state$permissi2 = store.state.permissionList) === null || _store$state$permissi2 === void 0 ? void 0 : _store$state$permissi2.map(up => {
        var _up$permissions;

        return (_up$permissions = up.permissions) === null || _up$permissions === void 0 ? void 0 : _up$permissions.find(p => p.action == "Update");
      }).find(p => p != null)) != null;
    };

    return {
      store,
      queryParams,
      dataItem: computed(() => store.state.item),
      getContainerName,
      isAdmin,
      editMode,
      hasEditPermission,
      isEditable,
      isModified: computed(() => store.state.modified),
      save: () => store.dispatch(Actions.SAVE),
      deleteItem: () => store.dispatch(Actions.DELETE)
    };
  },

  storeConfig: {
    state,
    actions,
    mutations,
    getters
  },
  methods: {}
});

const _hoisted_1 = {
  class: "controls"
};
const _hoisted_2 = {
  key: 0
};
const _hoisted_3 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$dataItem, _ctx$dataItem$metadat, _ctx$dataItem2, _ctx$dataItem2$dataCo;

  const _component_FieldContainerEditor = resolveComponent("FieldContainerEditor");

  const _component_FieldContainerViewer = resolveComponent("FieldContainerViewer");

  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("div", _hoisted_1, [_ctx.isModified ? (openBlock(), createElementBlock("button", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = $event => _ctx.save()),
    class: "btn btn-success"
  }, "Save")) : createCommentVNode("", true), _ctx.hasEditPermission() ? (openBlock(), createElementBlock("button", {
    key: 1,
    onClick: _cache[1] || (_cache[1] = $event => _ctx.deleteItem()),
    class: "btn btn-danger"
  }, "Delete")) : createCommentVNode("", true), _ctx.hasEditPermission() ? (openBlock(), createElementBlock("button", {
    key: 2,
    onClick: _cache[2] || (_cache[2] = $event => _ctx.editMode = !_ctx.editMode),
    class: "btn btn-primary"
  }, [_ctx.editMode ? (openBlock(), createElementBlock("span", _hoisted_2, "View")) : (openBlock(), createElementBlock("span", _hoisted_3, "Edit"))])) : createCommentVNode("", true)]), (openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$dataItem = _ctx.dataItem) === null || _ctx$dataItem === void 0 ? void 0 : (_ctx$dataItem$metadat = _ctx$dataItem.metadataSets) === null || _ctx$dataItem$metadat === void 0 ? void 0 : _ctx$dataItem$metadat.$values, ms => {
    return openBlock(), createElementBlock("div", null, [createElementVNode("h4", null, toDisplayString(_ctx.getContainerName(ms)), 1), _ctx.isEditable(ms) ? (openBlock(), createBlock(_component_FieldContainerEditor, {
      key: 0,
      model: ms
    }, null, 8, ["model"])) : (openBlock(), createBlock(_component_FieldContainerViewer, {
      key: 1,
      model: ms
    }, null, 8, ["model"]))]);
  }), 256)), (openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$dataItem2 = _ctx.dataItem) === null || _ctx$dataItem2 === void 0 ? void 0 : (_ctx$dataItem2$dataCo = _ctx$dataItem2.dataContainer) === null || _ctx$dataItem2$dataCo === void 0 ? void 0 : _ctx$dataItem2$dataCo.$values, di => {
    return openBlock(), createElementBlock("div", null, [createElementVNode("h4", null, toDisplayString(_ctx.getContainerName(di)), 1), _ctx.isEditable(di) ? (openBlock(), createBlock(_component_FieldContainerEditor, {
      key: 0,
      model: di
    }, null, 8, ["model"])) : (openBlock(), createBlock(_component_FieldContainerViewer, {
      key: 1,
      model: di
    }, null, 8, ["model"]))]);
  }), 256))], 64);
}

var css_248z = "\n.field-name[data-v-3065ab1c] {\r\n        font-weight: bold !important;\n}\n.fa-remove[data-v-3065ab1c] {\r\n        color: red;\r\n        margin-left: 30px;\n}\n.controls[data-v-3065ab1c]{\r\n        text-align:right;\n}\n.btn[data-v-3065ab1c]{\r\n        margin: 5px;\n}\r\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-3065ab1c";

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Carousel: script$11,
    KeywordSearch: script$S,
    ItemTemplateEditor: script$N,
    ItemEditor: script$M,
    ItemViewer: script$y,
    ProcessManager: script$w,
    Grid: script$t,
    ChildFormSubmission: script$a,
    FormSubmission: script$9,
    Report: script$8,
    ItemLayout: script$2,
    EntityManager: script$1,
    ItemDetails: script
});

// Import vue components

const install = function installApplets(app) {
  Object.entries(components).forEach(_ref => {
    let [componentName, component] = _ref;
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export { script$11 as Carousel, script$a as ChildFormSubmission, script$1 as EntityManager, script$9 as FormSubmission, script$t as Grid, script as ItemDetails, script$M as ItemEditor, script$2 as ItemLayout, script$N as ItemTemplateEditor, script$y as ItemViewer, script$S as KeywordSearch, script$w as ProcessManager, script$8 as Report, install as default };
