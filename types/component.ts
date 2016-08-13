import { Config } from '../src/core/config'
import { ComponentOptions } from './options'
import VNode from '../src/core/vdom/vnode'
import { VNodeChildren, VNodeData, VNodeWithData } from './vnode'
import Watcher from '../src/core/observer/watcher'

export interface ComponentConstructor {
  // constructor information
  cid: number;
  options: Object;
  // extend
  extend: (options: Object) => Function;
  superOptions: Object;
  extendOptions: Object;
  super: ComponentConstructor;
  // assets
  directive: (id: string, def?: Function | Object) => Function | Object | void;
  component: (id: string, def?: ComponentConstructor | Object) => ComponentConstructor;
  filter: (id: string, def?: Function) => Function | void;
}

export interface Component {
  // public properties
  $el: any; // so that we can attach __vue__ to it
  $data: Object;
  $options: ComponentOptions;
  $parent: Component | void;
  $root: Component;
  $children: Array<Component>;
  $refs: { [key: string]: Component | Element | Array<Component | Element> | void };
  $slots: { [key: string]: Array<VNode> };
  $vnode: VNode;
  $isServer: boolean;

  // public methods
  $mount: (el?: Element | string, hydrating?: boolean) => Component;
  $forceUpdate: () => void;
  $destroy: () => void;
  $watch: (expOrFn: string | Function, cb: Function, options?: Object) => Function;
  $on: (event: string, fn: Function) => Component;
  $once: (event: string, fn: Function) => Component;
  $off: (event?: string, fn?: Function) => Component;
  $emit: (event: string, ...args: Array<any>) => Component;
  $nextTick: (fn: Function) => void;
  $createElement: (
    tag?: string | Component,
    data?: Object,
    children?: VNodeChildren,
    namespace?: string
  ) => VNode;

  // private properties
  _uid: number;
  _isVue: true;
  _self: Component;
  _renderProxy: Component;
  _renderParent: null | undefined | Component;
  _watcher: Watcher;
  _watchers: Array<Watcher>;
  _data: Object;
  _events: Object;
  _inactive: boolean;
  _isMounted: boolean;
  _isDestroyed: boolean;
  _isBeingDestroyed: boolean;
  _vnode: null | undefined | VNode;
  _staticTrees: null | undefined | Array<VNode>;

  // private methods
  // lifecycle
  _init: Function;
  _mount: (el?: Element | void, hydrating?: boolean) => Component;
  _update: (vnode: VNode, hydrating?: boolean) => void;
  _updateListeners: (listeners: Object, oldListeners: null | undefined | Object) => void;
  _updateFromParent: (
    propsData: null | undefined | Object,
    listeners: null | undefined | { [key: string]: Function | Array<Function> },
    parentVnode: VNode,
    renderChildren: null | undefined | VNodeChildren
  ) => void;
  // rendering
  _render: () => VNode;
  __patch__: (a: Element | VNode | void, b: VNode) => any;
  // createElement
  _h: (vnode?: VNode, data?: VNodeData, children?: VNodeChildren) => VNode | void;
  // renderStatic
  _m: (index: number, isInFor?: boolean) => VNode | VNodeChildren;
  // toString
  _s: (value: any) => string;
  // toNumber
  _n: (value: string) => number | string;
  // resolveFilter
  _f: (id: string) => Function;
  // renderList
  _l: (val: any, render: Function) => null | undefined | Array<VNode>;
  // apply v-bind object
  _b: (vnode: VNodeWithData, value: any) => void;
  // retrive custom keyCode
  _k: (key: string) => null | undefined | number;

  // allow dynamic method registration
  [key: string]: any
}
