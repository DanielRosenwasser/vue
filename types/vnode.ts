import _VNode from '../src/core/vdom/vnode'
import { Component, ComponentConstructor } from './component'

interface VNodeArray extends Array<null | undefined | VNode | string | VNodeChildren> {}
export type VNodeChildren = VNodeArray | string
export type VNode = _VNode

export interface VNodeComponentOptions {
  Ctor: ComponentConstructor;
  propsData: null | undefined | Object;
  listeners: null | undefined | Object;
  children: null | undefined | VNodeChildren;
  tag?: string;
}

export interface MountedComponentVNode {
  componentOptions: VNodeComponentOptions;
  child: Component;
  parent: VNode;
  data: VNodeData;
}

// interface for vnodes in update modules
export interface VNodeWithData {
  tag: string;
  data: VNodeData;
  children: Array<VNode> | void;
  text: void;
  elm: HTMLElement;
  ns: string | void;
  context: Component;
  key: string | number | void;
  parent?: VNodeWithData;
  child?: Component;
  isRootInsert: boolean;
}

export interface VNodeData {
  key?: string | number;
  slot?: string;
  ref?: string;
  tag?: string;
  staticClass?: string;
  class?: any;
  style?: Array<Object> | Object;
  show?: true;
  props?: { [key: string]: any };
  attrs?: { [key: string]: string };
  domProps?: { [key: string]: any };
  hook?: { [key: string]: Function };
  on?: null | undefined | { [key: string]: Function | Array<Function> };
  nativeOn?: { [key: string]: Function | Array<Function> };
  transition?: Object;
  inlineTemplate?: {
    render: Function;
    staticRenderFns: Array<Function>;
  };
  directives?: Array<VNodeDirective>;
  keepAlive?: boolean;
}

export interface VNodeDirective {
  name: string;
  value?: any;
  oldValue?: any;
  arg?: string;
  modifiers?: { [key: string]: boolean };
}
