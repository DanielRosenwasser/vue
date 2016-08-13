declare interface CompilerOptions {
  warn?: Function; // allow customizing warning in different environments; e.g. node
  isIE?: boolean; // for detecting IE SVG innerHTML bug
  expectHTML?: boolean; // only false for non-web builds
  modules?: Array<ModuleOptions>; // platform specific modules; e.g. style; class
  staticKeys?: string; // a list of AST properties to be considered static; for optimization
  directives?: { [key: string]: Function }; // platform specific directives
  isUnaryTag?: (tag: string) => null | undefined | boolean; // check if a tag is unary for the platform
  isReservedTag?: (tag: string) => null | undefined | boolean; // check if a tag is a native for the platform
  mustUseProp?: (attr: string) => null | undefined | boolean; // check if an attribute should be bound as a property
  isPreTag?: (attr: string) => null | undefined | boolean; // check if a tag needs to preserve whitespace
  getTagNamespace?: (tag: string) => null | undefined | string; // check the namespace for a tag
  transforms?: Array<Function>; // a list of transforms on parsed AST before codegen
  preserveWhitespace?: boolean;
  isFromDOM?: boolean;
  shouldDecodeTags?: boolean;

  // runtime user-configurable
  delimiters?: [string, string]; // template delimiters
}

declare interface CompiledResult {
  ast: null | undefined | ASTElement;
  render: string;
  staticRenderFns: Array<string>;
  errors?: Array<string>;
}

declare interface CompiledFunctionResult {
  render: Function;
  staticRenderFns: Array<Function>;
}

declare interface ModuleOptions {
  preTransformNode: (el: ASTElement) => void;
  transformNode: (el: ASTElement) => void; // transform an element's AST node
  postTransformNode: (el: ASTElement) => void;
  genData: (el: ASTElement) => string; // generate extra data string for an element
  transformCode?: (el: ASTElement, code: string) => string; // further transform generated code for an element
  staticKeys?: Array<string>; // AST properties to be considered static
}

declare interface ASTElementHandler {
  value: string;
  modifiers: null |  undefined | { [key: string]: true };
}

declare interface ASTElementHandlers {
  [key: string]: ASTElementHandler | Array<ASTElementHandler>;
}

declare interface ASTElementHooks { [key: string]: Array<string> }

declare interface ASTDirective {
  name: string;
  value: null | undefined | string;
  arg: null | undefined | string;
  modifiers: null | undefined | { [key: string]: true };
}

declare type ASTNode = ASTElement | ASTText | ASTExpression

declare interface ASTElement {
  type: 1;
  tag: string;
  attrsList: Array<{ name: string; value: string }>;
  attrsMap: { [key: string]: string | null };
  parent: ASTElement | void;
  children: Array<ASTNode>;

  static?: boolean;
  staticRoot?: boolean;
  staticInFor?: boolean;
  staticProcessed?: boolean;
  hasBindings?: boolean;

  text?: string;
  attrs?: Array<{ name: string; value: string }>;
  props?: Array<{ name: string; value: string }>;
  plain?: boolean;
  pre?: true;
  ns?: string;

  component?: string;
  inlineTemplate?: true;
  transitionMode?: string | null;
  slotName?: undefined | string;
  slotTarget?: undefined | string;

  ref?: string;
  refInFor?: boolean;

  if?: string;
  ifProcessed?: boolean;
  else?: true;
  elseBlock?: ASTElement;

  for?: string;
  forProcessed?: boolean;
  key?: string;
  alias?: string;
  iterator1?: string;
  iterator2?: string;

  staticClass?: string;
  classBinding?: string;
  styleBinding?: string;
  hooks?: ASTElementHooks;
  events?: ASTElementHandlers;
  nativeEvents?: ASTElementHandlers;

  transition?: string | true;
  transitionOnAppear?: boolean;

  directives?: Array<ASTDirective>;

  forbidden?: true;
  once?: true;
}

declare interface ASTExpression {
  type: 2;
  expression: string;
  text: string;
  static?: boolean;
}

declare interface ASTText {
  type: 3;
  text: string;
  static?: boolean;
}

// SFC-parser related declarations

// an object format describing a single-file component.
declare interface SFCDescriptor {
  template: null | undefined | SFCBlock;
  script: null | undefined | SFCBlock;
  styles: Array<SFCBlock>;
}

declare interface SFCBlock {
  type: string;
  content: string;
  start?: number;
  end?: number;
  lang?: string;
  src?: string;
  scoped?: boolean;
}
