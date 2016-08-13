declare module 'entities' {
  export function encodeHTML(html: string): string;
  export function decodeHTML(html: string): string;
}

declare module 'source-map' {
  export class SourceMapGenerator {
    setSourceContent(filename: string, content: string): void;
    addMapping(mapping: Object): void;
    toString(): string;
  }
}

declare module 'lru-cache' {
  function lru_cache(): any;
  export = lru_cache;
}

declare module 'de-indent' {
  function deindent(s: string): string;
  export = deindent;
}
