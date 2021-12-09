import { defineComponent, openBlock, createElementBlock, createElementVNode, toDisplayString, inject, watch, reactive, computed, Fragment, renderList, createCommentVNode, withDirectives, vModelCheckbox, ref, createTextVNode, vModelSelect, onMounted, resolveComponent, createVNode, normalizeClass, pushScopeId, popScopeId, createBlock } from 'vue';

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

var script$g = defineComponent({
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

const _hoisted_1$8 = /*#__PURE__*/createElementVNode("h2", null, "Carousel", -1);

const _hoisted_2$6 = {
  class: "row"
};
const _hoisted_3$6 = {
  class: "row"
};
const _hoisted_4$4 = {
  class: "row"
};
function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [_hoisted_1$8, createElementVNode("div", _hoisted_2$6, "Page Id: " + toDisplayString(_ctx.pageId), 1), createElementVNode("div", _hoisted_3$6, "Block Id: " + toDisplayString(_ctx.blockId), 1), createElementVNode("div", _hoisted_4$4, "Data Attributes " + toDisplayString(_ctx.dataAttributes), 1)]);
}

script$g.render = render$g;

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

const state$2 = {
  keywordQueryModel: null,
  searchResult: null,
  offset: 0,
  max: 25,
  pageId: null,
  blockId: null
};

//Declare MutationTypes
var Mutations$2;

(function (Mutations) {
  Mutations["SET_SOURCE"] = "SET_SOURCE";
  Mutations["SET_KEYWORDS"] = "SET_KEYWORDS";
  Mutations["SET_RESULTS"] = "SET_RESULTS";
  Mutations["SET_OFFSET"] = "SET_OFFSET";
  Mutations["SET_PAGE_SIZE"] = "SET_PAGE_SIZE";
})(Mutations$2 || (Mutations$2 = {})); //Create a mutation tree that implement all mutation interfaces


const mutations$2 = {
  [Mutations$2.SET_SOURCE](state, payload) {
    state.pageId = payload.pageId;
    state.blockId = payload.blockId;
  },

  [Mutations$2.SET_KEYWORDS](state, payload) {
    console.log('SET_KEYWORDS Payload: ', payload);
    state.keywordQueryModel = payload;
  },

  [Mutations$2.SET_RESULTS](state, payload) {
    state.searchResult = payload;
    state.offset = payload.first - 1;
  },

  [Mutations$2.SET_OFFSET](state, payload) {
    //console.log('SET_OFFSET: payload: ', payload)
    state.offset = payload;
  },

  [Mutations$2.SET_PAGE_SIZE](state, payload) {
    //console.log('SET_PAGE_SIZE: payload: ', payload)
    state.max = payload;
  }

};

var Actions$2;

(function (Actions) {
  Actions["INIT_FILTER"] = "INIT_FILTER";
  Actions["FILTER_BY_KEYWORDS"] = "FILTER_BY_KEYWORDS";
  Actions["NEXT_PAGE"] = "NEXT_PAGE";
  Actions["PREVIOUS_PAGE"] = "PREVIOUS_PAGE";
  Actions["FRESH_SEARCH"] = "FRESH_SEARCH";
  Actions["SAVE_KEYWORDS"] = "SAVE_KEYWORDS";
})(Actions$2 || (Actions$2 = {}));

const actions$2 = {
  [Actions$2.INIT_FILTER](store) {
    //console.log('Store: ', JSON.stringify(store.state))
    const api = window.location.origin + `/applets/api/keywordsearch/keywords/page/${store.state.pageId}/block/${store.state.blockId}`;
    console.log('Keyword Load API: ', api);
    fetch(api).then(response => response.json()).then(data => {
      store.commit(Mutations$2.SET_KEYWORDS, data);
    });
  },

  [Actions$2.FILTER_BY_KEYWORDS](store) {
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
      store.commit(Mutations$2.SET_RESULTS, data);
    }).catch(error => {
      console.error('Item Load API Error:', error);
    });
  },

  [Actions$2.NEXT_PAGE](store) {
    store.commit(Mutations$2.SET_OFFSET, store.state.offset + store.state.max);
    store.dispatch(Actions$2.FILTER_BY_KEYWORDS);
  },

  [Actions$2.PREVIOUS_PAGE](store) {
    const offset = Math.max(store.state.offset - store.state.max, 0);
    store.commit(Mutations$2.SET_OFFSET, offset);
    store.dispatch(Actions$2.FILTER_BY_KEYWORDS);
  },

  [Actions$2.FRESH_SEARCH](store, pageSize) {
    store.commit(Mutations$2.SET_OFFSET, 0);
    if (pageSize) store.commit(Mutations$2.SET_PAGE_SIZE, pageSize);
    store.dispatch(Actions$2.FILTER_BY_KEYWORDS);
  },

  [Actions$2.SAVE_KEYWORDS](store, source) {
    console.log("save keywords action :" + JSON.stringify(source));
    store.commit(Mutations$2.SET_KEYWORDS, source);
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

const getters$2 = {
  //  items: (state): Item[] | undefined => {
  //    return state.searchResult?.items
  //  },
  searchParamStorageKey: state => {
    var _state$blockId;

    return ((_state$blockId = state.blockId) === null || _state$blockId === void 0 ? void 0 : _state$blockId.toString()) + "SearchParams";
  }
};

var script$f = defineComponent({
  name: "KeywordFilter",

  setup() {
    const store = useStore(); //console.log("Store: ", store)

    const runFreshSearch = () => store.dispatch(Actions$2.FRESH_SEARCH);

    return {
      runFreshSearch,
      keywordQueryModel: computed(() => store.state.keywordQueryModel)
    };
  }

});

const _hoisted_1$7 = {
  key: 0
};
const _hoisted_2$5 = {
  key: 0,
  class: "font-weight-bold"
};
const _hoisted_3$5 = ["value", "onUpdate:modelValue"];
const _hoisted_4$3 = {
  class: "ml-1"
};
function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$keywordQueryMode;

  return openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$keywordQueryMode = _ctx.keywordQueryModel) === null || _ctx$keywordQueryMode === void 0 ? void 0 : _ctx$keywordQueryMode.containers, (container, cIdx) => {
    var _ctx$keywordQueryMode2, _container$name;

    return openBlock(), createElementBlock("div", {
      key: container
    }, [((_ctx$keywordQueryMode2 = _ctx.keywordQueryModel) === null || _ctx$keywordQueryMode2 === void 0 ? void 0 : _ctx$keywordQueryMode2.containers.length) > 1 && (container === null || container === void 0 ? void 0 : (_container$name = container.name) === null || _container$name === void 0 ? void 0 : _container$name.length) > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$7, toDisplayString(container.name), 1)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(container.fields, (field, fIdx) => {
      return openBlock(), createElementBlock("div", {
        key: field,
        class: "mb-3"
      }, [field.name.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$5, toDisplayString(field.name), 1)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(field.values, (value, vIdx) => {
        return openBlock(), createElementBlock("div", {
          key: value
        }, [withDirectives(createElementVNode("input", {
          type: "checkbox",
          value: value,
          "onUpdate:modelValue": $event => _ctx.keywordQueryModel.containers[cIdx].fields[fIdx].selected[vIdx] = $event,
          onChange: _cache[0] || (_cache[0] = function () {
            return _ctx.runFreshSearch && _ctx.runFreshSearch(...arguments);
          })
        }, null, 40, _hoisted_3$5), [[vModelCheckbox, _ctx.keywordQueryModel.containers[cIdx].fields[fIdx].selected[vIdx]]]), createElementVNode("label", _hoisted_4$3, toDisplayString(value), 1)]);
      }), 128))]);
    }), 128))]);
  }), 128);
}

script$f.render = render$f;

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
        m = function (t, e, n) {
      var r = String(t);
      return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    },
        g = {
      s: m,
      z: function (t) {
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
      a: function (t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
      },
      p: function (t) {
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
      u: function (t) {
        return void 0 === t;
      }
    },
        D = "en",
        v = {};

    v[D] = M;

    var p = function (t) {
      return t instanceof _;
    },
        S = function (t, e, n) {
      var r;
      if (!t) return D;
      if ("string" == typeof t) v[t] && (r = t), e && (v[t] = e, r = t);else {
        var i = t.name;
        v[i] = t, r = i;
      }
      return !n && r && (D = r), r || !n && D;
    },
        w = function (t, e) {
      if (p(t)) return t.clone();
      var n = "object" == typeof e ? e : {};
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
            $ = function (t, e) {
          var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
          return r ? i : i.endOf(a);
        },
            l = function (t, e) {
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
            y = function (t) {
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
            h = function (t, n, i, s) {
          return t && (t[n] || t(e, r)) || i[n].substr(0, s);
        },
            c = function (t) {
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
var dayjs = dayjs_min;

var script$e = defineComponent({
  name: "ItemList",
  props: {},

  setup() {
    const store = useStore();

    const nextPage = () => store.dispatch(Actions$2.NEXT_PAGE);

    const previousPage = () => store.dispatch(Actions$2.PREVIOUS_PAGE);

    const freshSearch = pageSize => store.dispatch(Actions$2.FRESH_SEARCH, pageSize);

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

const _hoisted_1$6 = {
  class: "itemList"
};
const _hoisted_2$4 = {
  key: 0
};
const _hoisted_3$4 = {
  key: 0
};
const _hoisted_4$2 = {
  key: 1
};

const _hoisted_5$2 = /*#__PURE__*/createElementVNode("option", null, "25", -1);

const _hoisted_6$2 = /*#__PURE__*/createElementVNode("option", null, "50", -1);

const _hoisted_7$2 = /*#__PURE__*/createElementVNode("option", null, "100", -1);

const _hoisted_8$2 = [_hoisted_5$2, _hoisted_6$2, _hoisted_7$2];
const _hoisted_9$2 = {
  key: 1
};
const _hoisted_10$2 = {
  class: "item"
};
const _hoisted_11$2 = {
  class: "item-title"
};
const _hoisted_12$1 = ["href"];
const _hoisted_13$1 = {
  key: 1
};
const _hoisted_14$1 = {
  class: "item-date"
};
const _hoisted_15$1 = {
  class: "item-subtitle"
};
const _hoisted_16$1 = {
  class: "categories"
};
const _hoisted_17$1 = {
  class: "badge rounded-pill bg-dark text-white m-1"
};
const _hoisted_18$1 = {
  class: "content"
};
function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$items;

  return openBlock(), createElementBlock("div", _hoisted_1$6, [((_ctx$items = _ctx.items) === null || _ctx$items === void 0 ? void 0 : _ctx$items.length) > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$4, [_ctx.first > 1 ? (openBlock(), createElementBlock("span", _hoisted_3$4, [createElementVNode("i", {
    class: "fas fa-angle-double-left",
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.previousPage && _ctx.previousPage(...arguments);
    })
  })])) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(_ctx.first) + "-" + toDisplayString(_ctx.last) + " of " + toDisplayString(_ctx.count) + " ", 1), _ctx.count > _ctx.last ? (openBlock(), createElementBlock("span", _hoisted_4$2, [createElementVNode("i", {
    class: "fas fa-angle-double-right",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.nextPage && _ctx.nextPage(...arguments);
    })
  })])) : createCommentVNode("", true), createElementVNode("span", null, [withDirectives(createElementVNode("select", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.selectedPageSize = $event),
    class: "pull-right",
    onChange: _cache[3] || (_cache[3] = $event => _ctx.freshSearch(Number(_ctx.selectedPageSize)))
  }, _hoisted_8$2, 544), [[vModelSelect, _ctx.selectedPageSize]])])])) : (openBlock(), createElementBlock("div", _hoisted_9$2, "No results found.")), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, item => {
    var _item$detailedViewUrl;

    return openBlock(), createElementBlock("div", {
      key: item.id
    }, [createElementVNode("div", _hoisted_10$2, [createElementVNode("h3", _hoisted_11$2, [((_item$detailedViewUrl = item.detailedViewUrl) === null || _item$detailedViewUrl === void 0 ? void 0 : _item$detailedViewUrl.length) > 0 ? (openBlock(), createElementBlock("a", {
      key: 0,
      href: item.detailedViewUrl
    }, toDisplayString(item.title), 9, _hoisted_12$1)) : (openBlock(), createElementBlock("span", _hoisted_13$1, toDisplayString(item.title), 1))]), createElementVNode("div", _hoisted_14$1, toDisplayString(_ctx.formatDate(item.date)), 1), createElementVNode("h5", _hoisted_15$1, toDisplayString(item.subtitle), 1), createElementVNode("div", _hoisted_16$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.categories, cat => {
      return openBlock(), createElementBlock("span", _hoisted_17$1, toDisplayString(cat), 1);
    }), 256))]), createElementVNode("div", _hoisted_18$1, toDisplayString(item.content), 1)])]);
  }), 128))]);
}

script$e.render = render$e;

var script$d = defineComponent({
  name: "Applet",
  components: {
    KeywordFilter: script$f,
    ItemList: script$e
  },
  props,

  setup(p) {
    console.log('Keyword Search setup ...', p); //We need to use store in this setup method. so let's load it first.

    const store = useStore(); //Storing the page and block IDs in the store

    store.commit(Mutations$2.SET_SOURCE, {
      pageId: p.pageId,
      blockId: p.blockId
    }); //See if we can load a SearchParams object from local storage

    const searchParamsStr = localStorage.getItem(store.getters.searchParamStorageKey);
    let searchParams;

    if (searchParamsStr && searchParamsStr.length > 0 && (searchParams = JSON.parse(searchParamsStr)) && searchParams.keywords) {
      //Restoring the store state from data reloaded from the state
      store.commit(Mutations$2.SET_KEYWORDS, searchParams.keywords);
      store.commit(Mutations$2.SET_OFFSET, searchParams.offset);
      store.commit(Mutations$2.SET_PAGE_SIZE, searchParams.max);
    } else {
      //Dispatch an action to loaf keywords
      store.dispatch(Actions$2.INIT_FILTER);
    } //When the component is mounted, execute a search query based on the current patameters in the store.state.


    onMounted(() => store.dispatch(Actions$2.FILTER_BY_KEYWORDS));
    const keywordQueryModel = ref(store.state.keywordQueryModel);
    return {
      keywordQueryModel
    };
  },

  storeConfig: {
    state: state$2,
    actions: actions$2,
    mutations: mutations$2,
    getters: getters$2
  }
});

const _hoisted_1$5 = {
  class: "row"
};
const _hoisted_2$3 = {
  class: "col-md-4 text-left"
};
const _hoisted_3$3 = {
  class: "col-md-8"
};
function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_KeywordFilter = resolveComponent("KeywordFilter");

  const _component_ItemList = resolveComponent("ItemList");

  return openBlock(), createElementBlock("div", _hoisted_1$5, [createElementVNode("div", _hoisted_2$3, [createVNode(_component_KeywordFilter)]), createElementVNode("div", _hoisted_3$3, [createVNode(_component_ItemList)])]);
}

script$d.render = render$d;

const state$1 = {
  Id: null,
  template: null
};

//Declare MutationTypes
var Mutations$1;

(function (Mutations) {
  Mutations["SET_ID"] = "SET_ID";
  Mutations["SET_TEMPLATE"] = "SET_TEMPLATE";
})(Mutations$1 || (Mutations$1 = {})); //Create a mutation tree that implement all mutation interfaces


const mutations$1 = {
  [Mutations$1.SET_ID](state, payload) {
    state.Id = payload; // console.log("template id : " + state.Id)
  },

  [Mutations$1.SET_TEMPLATE](state, payload) {
    state.template = payload; // console.log("template ID: " + state.template.id);
    // console.log("template name: " + state.template.templateName);
    // console.log("field length: " + state.template.dataContainer[0].fields.length)
  }

};

var Actions$1;

(function (Actions) {
  Actions["LOAD_TEMPLATE"] = "LOAD_TEMPLATE";
  Actions["SET_ID"] = "SET_ID";
})(Actions$1 || (Actions$1 = {}));

const actions$1 = {
  [Actions$1.LOAD_TEMPLATE](store) {
    const api = window.location.origin + `/applets/api/itemtemplates/${store.state.Id}`; //console.log('Keyword Load API: ', api)

    fetch(api).then(response => response.json()).then(data => {
      var _store$state$template;

      store.commit(Mutations$1.SET_TEMPLATE, data);
      console.log("Loaded Template datacontainer: " + JSON.stringify((_store$state$template = store.state.template) === null || _store$state$template === void 0 ? void 0 : _store$state$template.dataContainer)); // console.log("Datacontainer count: " + store.state.template?.dataContainer.length)
    });
  },

  [Actions$1.SET_ID](store, payload) {
    store.commit(Mutations$1.SET_ID, payload);
  }

};

const getters$1 = {//getTemplateId: state => {
  //    return state.queryParameters["templateId"];
  //}
};

var script$c = defineComponent({
  name: "NotificationEditor",
  props: {
    fieldContainer: {
      required: false,
      type: null
    }
  },

  setup() {}

});

function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("h4", null, toDisplayString(_ctx.fieldContainer.name.concatenatedContent), 1), createElementVNode("div", null, toDisplayString(_ctx.fieldContainer), 1)], 64);
}

script$c.render = render$c;

var script$b = defineComponent({
  name: "FormEditor",
  props: ['form'],

  setup() {}

});

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("h4", null, toDisplayString(_ctx.form.name.concatenatedContent), 1), createElementVNode("div", null, toDisplayString(_ctx.form), 1)], 64);
}

script$b.render = render$b;

var script$a = defineComponent({
  name: "MetadatasetEditor",
  props: ['metadataset'],

  setup() {}

});

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("h4", null, toDisplayString(_ctx.metadataset.name.concatenatedContent), 1), createElementVNode("div", null, toDisplayString(_ctx.metadataset), 1)], 64);
}

script$a.render = render$a;

var script$9 = defineComponent({
  name: "ItemTemplate",
  components: {
    NotificationEditor: script$c,
    FormEditor: script$b,
    MetadatasetEditor: script$a
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

const _withScopeId = n => (pushScopeId("data-v-2579f0c4"), n = n(), popScopeId(), n);

const _hoisted_1$4 = {
  class: "container row itemTemplate"
};
const _hoisted_2$2 = {
  class: "col-md-4"
};

const _hoisted_3$2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createElementVNode("div", {
  class: "sectionLabel"
}, "Overview", -1));

const _hoisted_4$1 = [_hoisted_3$2];

const _hoisted_5$1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createElementVNode("div", {
  class: "sectionLabel"
}, "Notifications", -1));

const _hoisted_6$1 = [_hoisted_5$1];
const _hoisted_7$1 = ["onClick"];

const _hoisted_8$1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createElementVNode("div", {
  class: "sectionLabel"
}, "Forms", -1));

const _hoisted_9$1 = [_hoisted_8$1];
const _hoisted_10$1 = ["onClick"];

const _hoisted_11$1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createElementVNode("div", {
  class: "sectionLabel"
}, "Metadata Forms", -1));

const _hoisted_12 = [_hoisted_11$1];
const _hoisted_13 = ["onClick"];
const _hoisted_14 = {
  class: "col-md-8"
};
const _hoisted_15 = {
  key: 0,
  class: "col-12 wrapper"
};

const _hoisted_16 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createElementVNode("h4", null, "Overview", -1));

const _hoisted_17 = [_hoisted_16];
const _hoisted_18 = {
  key: 1,
  class: "col-12 wrapper"
};

const _hoisted_19 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createElementVNode("h4", null, "Notifications", -1));

const _hoisted_20 = [_hoisted_19];
const _hoisted_21 = {
  key: 0
};
const _hoisted_22 = {
  key: 2,
  class: "col-12 wrapper"
};

const _hoisted_23 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createElementVNode("h4", null, "Forms", -1));

const _hoisted_24 = [_hoisted_23];
const _hoisted_25 = {
  key: 0
};
const _hoisted_26 = {
  key: 3,
  class: "col-12 wrapper"
};

const _hoisted_27 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createElementVNode("h4", null, "Metadata Forms", -1));

const _hoisted_28 = [_hoisted_27];
const _hoisted_29 = {
  key: 0
};
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$template, _ctx$metadataSets, _ctx$metadataSets2, _ctx$metadataSets3, _ctx$metadataSets4;

  const _component_NotificationEditor = resolveComponent("NotificationEditor");

  const _component_FormEditor = resolveComponent("FormEditor");

  const _component_MetadatasetEditor = resolveComponent("MetadatasetEditor");

  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("h3", null, toDisplayString((_ctx$template = _ctx.template) === null || _ctx$template === void 0 ? void 0 : _ctx$template.templateName), 1), createElementVNode("div", _hoisted_1$4, [createElementVNode("div", _hoisted_2$2, [createElementVNode("div", {
    class: normalizeClass(["col-12 menuEntry", _ctx.activePanel == 'overview' || _ctx.activePanel == null ? 'active' : '']),
    onClick: _cache[0] || (_cache[0] = $event => _ctx.activePanel = 'overview')
  }, _hoisted_4$1, 2), createElementVNode("div", {
    class: normalizeClass(["col-12 menuEntry", _ctx.activePanel == 'notifications' ? 'active' : '']),
    onClick: _cache[1] || (_cache[1] = $event => _ctx.activePanel = 'notifications')
  }, _hoisted_6$1, 2), (openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$metadataSets = _ctx.metadataSets) === null || _ctx$metadataSets === void 0 ? void 0 : _ctx$metadataSets.filter(m => m.isTemplate == true), ms => {
    return openBlock(), createElementBlock("div", {
      key: ms.id,
      class: normalizeClass(["col-12 menuEntry", _ctx.activePanel == ms.id ? 'active' : '']),
      onClick: $event => _ctx.activePanel = ms.id
    }, toDisplayString(ms.name.concatenatedContent), 11, _hoisted_7$1);
  }), 128)), createElementVNode("div", {
    class: "col-12 menuEntry",
    onClick: _cache[2] || (_cache[2] = $event => _ctx.activePanel = 'forms')
  }, _hoisted_9$1), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataContainer, form => {
    return openBlock(), createElementBlock("div", {
      key: form.id,
      class: normalizeClass(["col-12 menuEntry", _ctx.activePanel == form.id ? 'active' : '']),
      onClick: $event => _ctx.activePanel = form.id
    }, toDisplayString(form.name.concatenatedContent), 11, _hoisted_10$1);
  }), 128)), createElementVNode("div", {
    class: "col-12 menuEntry",
    onClick: _cache[3] || (_cache[3] = $event => _ctx.activePanel = 'metadata-forms')
  }, _hoisted_12), (openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$metadataSets2 = _ctx.metadataSets) === null || _ctx$metadataSets2 === void 0 ? void 0 : _ctx$metadataSets2.filter(m => m.isTemplate == false), ms => {
    return openBlock(), createElementBlock("div", {
      key: ms.id,
      class: normalizeClass(["col-12 menuEntry", _ctx.activePanel == ms.id ? 'active' : '']),
      onClick: $event => _ctx.activePanel = ms.id
    }, toDisplayString(ms.name.concatenatedContent), 11, _hoisted_13);
  }), 128))]), createElementVNode("div", _hoisted_14, [_ctx.activePanel == null || _ctx.activePanel == 'overview' ? (openBlock(), createElementBlock("div", _hoisted_15, _hoisted_17)) : createCommentVNode("", true), _ctx.activePanel == 'notifications' ? (openBlock(), createElementBlock("div", _hoisted_18, _hoisted_20)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList((_ctx$metadataSets3 = _ctx.metadataSets) === null || _ctx$metadataSets3 === void 0 ? void 0 : _ctx$metadataSets3.filter(m => m.isTemplate == true), ms => {
    return openBlock(), createElementBlock("div", {
      key: ms.id,
      class: "col-12 wrapper"
    }, [_ctx.activePanel == ms.id ? (openBlock(), createElementBlock("div", _hoisted_21, [createVNode(_component_NotificationEditor, {
      fieldContainer: ms
    }, null, 8, ["fieldContainer"])])) : createCommentVNode("", true)]);
  }), 128)), _ctx.activePanel == 'forms' ? (openBlock(), createElementBlock("div", _hoisted_22, _hoisted_24)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dataContainer, form => {
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

var css_248z$1 = "\n.menuEntry[data-v-2579f0c4]{\r\n        border: 1px solid Grey;\r\n        margin: 10px;\r\n        padding: 10px 10px;\n}\n.menuEntry.active[data-v-2579f0c4] {\r\n            background-color: #BBBCAA;\n}\n.sectionLabel[data-v-2579f0c4]{\r\n        font-weight: bold;\n}\n.wrapper[data-v-2579f0c4]{\r\n        margin: 0;\r\n        padding: 0;\n}\r\n";
styleInject(css_248z$1);

script$9.render = render$9;
script$9.__scopeId = "data-v-2579f0c4";

var script$8 = defineComponent({
  name: "ItemTemplateEditor",
  components: {
    ItemTemplate: script$9
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
    state: state$1,
    actions: actions$1,
    mutations: mutations$1,
    getters: getters$1
  }
});

const _hoisted_1$3 = /*#__PURE__*/createElementVNode("h3", null, "Item Template Editor", -1);

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ItemTemplate = resolveComponent("ItemTemplate");

  return openBlock(), createElementBlock(Fragment, null, [_hoisted_1$3, createElementVNode("div", null, "Item Template ID: " + toDisplayString(_ctx.queryParameters.id), 1), createVNode(_component_ItemTemplate)], 64);
}

script$8.render = render$8;

var script$7 = defineComponent({
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

const _hoisted_1$2 = /*#__PURE__*/createElementVNode("h2", null, "Item Ediror", -1);

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [_hoisted_1$2, createElementVNode("div", null, "Item ID: " + toDisplayString(_ctx.queryParameters.id), 1)]);
}

script$7.render = render$7;

const state = {
  id: null,
  item: null
};

//Declare MutationTypes
var Mutations;

(function (Mutations) {
  Mutations["SET_ID"] = "SET_ID";
  Mutations["SET_ITEM"] = "SET_ITEM";
})(Mutations || (Mutations = {})); //Create a mutation tree that implement all mutation interfaces


const mutations = {
  [Mutations.SET_ID](state, payload) {
    state.id = payload;
    console.log("Mutations.SET_ID: ", state.id);
  },

  [Mutations.SET_ITEM](state, payload) {
    state.item = payload;
  }

};

var Actions;

(function (Actions) {
  Actions["LOAD_ITEM"] = "LOAD_ITEM";
})(Actions || (Actions = {}));

const actions = {
  [Actions.LOAD_ITEM](store) {
    const api = window.location.origin + `/applets/api/itemeditor/${store.state.id}`; //console.log('Keyword Load API: ', api)

    fetch(api).then(response => response.json()).then(data => {
      store.commit(Mutations.SET_ITEM, data);
    });
  }

};

const getters = {
  rootDataItem: state => {
    var _state$item;

    return (_state$item = state.item) === null || _state$item === void 0 ? void 0 : _state$item.dataContainer.filter(dc => dc.isRoot)[0];
  }
};

//export enum eFieldType {
//  AttachmentField = "AttachmentField",
//  CheckboxField = "CheckboxField",
//  CompositeField = "CompositeField",
//  DateField = "DateField",
//  DecimalField = "DecimalField",
//  EmailField = "EmailField",
//  FieldContainerReference = "FieldContainerReference",
//  InfoSection = "InfoSection",
//  IntegerField = "IntegerField",
//  MonolingualTextField = "MonolingualTextField",
//  RadioField = "RadioField",
//  SelectField = "SelectField",
//  TableField = "TableField",
//  TextArea = "TextArea",
//  TextField = "TextField",
//}
//export enum OptionType {
//    Checkbox,
//    Radio,
//    Select
//}
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
})(eFieldType || (eFieldType = {}));

class OptionsFieldMethods {
  static getSelectedFieldLabels(options) {
    return options === null || options === void 0 ? void 0 : options.filter(opt => opt.selected).map(opt => {
      var _opt$optionText;

      return (_opt$optionText = opt.optionText) === null || _opt$optionText === void 0 ? void 0 : _opt$optionText.values.map(txt => txt.value).join(" / ");
    }).join(", ");
  }

}

var script$6 = defineComponent({
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

const _hoisted_1$1 = {
  key: 0
};
const _hoisted_2$1 = ["href"];
const _hoisted_3$1 = {
  key: 1
};
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.isUrl(_ctx.model.value) ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createElementVNode("a", {
    href: _ctx.model.value
  }, toDisplayString(_ctx.model.value), 9, _hoisted_2$1)])) : (openBlock(), createElementBlock("div", _hoisted_3$1, toDisplayString(_ctx.model.value), 1));
}

script$6.render = render$6;

var script$5 = defineComponent({
  name: "TextCollection",
  props: {
    model: {
      type: null,
      required: true
    }
  },
  components: {
    Text: script$6
  }
});

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Text = resolveComponent("Text");

  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.values, txt => {
    return openBlock(), createElementBlock("div", null, [createVNode(_component_Text, {
      model: txt
    }, null, 8, ["model"])]);
  }), 256);
}

script$5.render = render$5;

var script$4 = defineComponent({
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
    TextCollection: script$5
  }
});

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TextCollection = resolveComponent("TextCollection");

  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.values, val => {
    return openBlock(), createElementBlock("div", {
      key: val.id
    }, [createVNode(_component_TextCollection, {
      model: val
    }, null, 8, ["model"])]);
  }), 128);
}

script$4.render = render$4;

var script$3 = defineComponent({
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

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.values, val => {
    return openBlock(), createElementBlock("div", null, toDisplayString(val.value), 1);
  }), 256);
}

script$3.render = render$3;

var script$2 = defineComponent({
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
      return OptionsFieldMethods.getSelectedFieldLabels(field.options);
    }

  }
});

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return toDisplayString(_ctx.getSelectedFieldLabels(_ctx.model));
}

script$2.render = render$2;

var script$1 = defineComponent({
  name: "FieldContainerView",
  props: {
    model: null
  },
  components: {
    TextField: script$4,
    EmailField: script$3,
    OptionsField: script$2
  },
  methods: {
    getFieldType(field) {
      var _typeName;

      var typeName = field === null || field === void 0 ? void 0 : field.modelType.substring(0, field.modelType.indexOf(","));
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
    }

  }
});

const _hoisted_1 = {
  class: "row"
};
const _hoisted_2 = {
  class: "field-name col-md-3"
};
const _hoisted_3 = {
  class: "field-value col-md-9"
};
const _hoisted_4 = {
  key: 4
};
const _hoisted_5 = {
  key: 5
};
const _hoisted_6 = {
  key: 6
};
const _hoisted_7 = {
  key: 7
};
const _hoisted_8 = {
  key: 8
};
const _hoisted_9 = {
  key: 9
};
const _hoisted_10 = {
  key: 10
};
const _hoisted_11 = {
  key: 12
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TextField = resolveComponent("TextField");

  const _component_EmailField = resolveComponent("EmailField");

  const _component_OptionsField = resolveComponent("OptionsField");

  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model.fields, field => {
    return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("div", _hoisted_2, toDisplayString(field.name.concatenatedContent), 1), createElementVNode("div", _hoisted_3, [this.isTextField(field) ? (openBlock(), createBlock(_component_TextField, {
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
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isAttachmentField(_ctx.model) ? (openBlock(), createElementBlock("div", _hoisted_4, " AttachmentField ")) : createCommentVNode("", true), this.isCompositeField(_ctx.model) ? (openBlock(), createElementBlock("div", _hoisted_5, " CompositeField ")) : createCommentVNode("", true), this.isDateField(_ctx.model) ? (openBlock(), createElementBlock("div", _hoisted_6, " DateField ")) : createCommentVNode("", true), this.isDecimalField(_ctx.model) ? (openBlock(), createElementBlock("div", _hoisted_7, " DecimalField ")) : createCommentVNode("", true), this.isFieldContainerReference(_ctx.model) ? (openBlock(), createElementBlock("div", _hoisted_8, " FieldContainerReference ")) : createCommentVNode("", true), this.isInfoSection(_ctx.model) ? (openBlock(), createElementBlock("div", _hoisted_9, " InfoSection ")) : createCommentVNode("", true), this.isIntegerField(_ctx.model) ? (openBlock(), createElementBlock("div", _hoisted_10, " IntegerField ")) : createCommentVNode("", true), this.isMonolingualTextField(_ctx.model) ? (openBlock(), createBlock(_component_TextField, {
      key: 11,
      model: field
    }, null, 8, ["model"])) : createCommentVNode("", true), this.isTableField(_ctx.model) ? (openBlock(), createElementBlock("div", _hoisted_11, " TableField ")) : createCommentVNode("", true)])]);
  }), 256);
}

script$1.render = render$1;

var script = defineComponent({
  name: "ItemViewer",
  components: {
    FieldContainer: script$1
  },
  props,

  setup(p) {
    const store = useStore();
    console.log('Item Viewer setup ...');
    console.log('props: ', JSON.stringify(p));
    const queryParams = p.queryParameters;
    store.commit(Mutations.SET_ID, queryParams.iid); //load the data

    store.dispatch(Actions.LOAD_ITEM);
    return {
      queryParams,
      dataItem: computed(() => store.getters.rootDataItem)
    };
  },

  storeConfig: {
    state,
    actions,
    mutations,
    getters
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FieldContainer = resolveComponent("FieldContainer");

  return _ctx.dataItem ? (openBlock(), createBlock(_component_FieldContainer, {
    key: 0,
    model: _ctx.dataItem
  }, null, 8, ["model"])) : createCommentVNode("", true);
}

var css_248z = "\n.field-name[data-v-a52f5804]{\r\n        font-weight:bold !important;\n}\r\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-a52f5804";

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Carousel: script$g,
  KeywordSearch: script$d,
  ItemTemplateEditor: script$8,
  ItemEditor: script$7,
  ItemViewer: script
});

// Import vue components

const install = function installApplets(app) {
  Object.entries(components).forEach(_ref => {
    let [componentName, component] = _ref;
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export { script$g as Carousel, script$7 as ItemEditor, script$8 as ItemTemplateEditor, script as ItemViewer, script$d as KeywordSearch, install as default };