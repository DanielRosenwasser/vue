import VNode from '../src/core/vdom/vnode'
import { VNodeChildren } from './vnode'
import { Component, ComponentConstructor } from './component'

declare interface InternalComponentOptions {
  _isComponent: true;
  parent: Component;
  propsData: null | undefined | Object;
  _parentVnode: VNode;
  _parentListeners: null | undefined | Object;
  _renderChildren: null | undefined | VNodeChildren;
  _componentTag: null | undefined | string;
  render?: Function;
  staticRenderFns?: Array<Function>
}

export interface ComponentOptions {
  // data
  data: Object | Function | void;
  props?: { [key: string]: PropOptions };
  propsData?: Object;
  computed?: {
    [key: string]: Function | {
      get?: Function;
      set?: Function;
      cache?: boolean
    }
  };
  methods?: {
    [key: string]: Function
  };
  watch?: {
    [key: string]: Function | string
  };
  // DOM
  el?: string | Element;
  template?: string;
  render: () => VNode;
  staticRenderFns?: Array<() => VNode>;
  // lifecycle
  init?: Function;
  created?: Function;
  beforeMount?: Function;
  mounted?: Function;
  beforeUpdate?: Function;
  updated?: Function;
  // assets
  directives?: { [key: string]: Object };
  components?: { [key: string]: ComponentConstructor };
  transitions?: { [key: string]: Object };
  filters?: { [key: string]: Function };
  // misc
  parent?: Component;
  mixins?: Array<Object>;
  name?: string;
  extends?: ComponentConstructor | Object;
  delimiters?: [string, string];

  // private
  _isComponent?: true;
  _propKeys?: Array<string>;
  _parentVnode?: VNode;
  _parentListeners?: Object;
  _renderChildren?: VNodeChildren
}

declare interface PropOptions {
  type: Function | Array<Function> | null;
  default: any;
  required: null | undefined | boolean;
  validator: null | undefined | Function;
}
