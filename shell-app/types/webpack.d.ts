declare const __webpack_init_sharing__: (scope: string) => Promise<void>
declare const __webpack_share_scopes__: { default: any }

interface Container {
  init(shareScope: any): Promise<void>
  get(module: string): () => Promise<any>
}

declare global {
  interface Window {
    [key: string]: Container | any
  }
}

export {} 