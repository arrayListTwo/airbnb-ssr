// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite/client" />
declare module '*.vue' {
  import { type DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'vite-plugin-eslint' {
  import { type Plugin } from 'vite'
  import { type ESLint } from 'eslint'

  /** Plugin options, extending from ESLint options */
  interface Options extends ESLint.Options {
    /** Path to ESLint instance that will be used for linting */
    eslintPath?: string
    /** Check all matching files on project startup */
    lintOnStart?: boolean
    /** A single file, or array of files, to include when linting */
    include?: string | string[]
    /** A single file, or array of files, to exclude when linting */
    exclude?: string | string[]
    /** Custom error formatter or the name of a built-in formatter */
    formatter?: string | ESLint.Formatter['format']
    /** The waring found will be printed */
    emitWarning?: boolean
    /** The errors found will be printed */
    emitError?: boolean
    /** Will cause the module build to fail if there are any warnings, based on emitWarning */
    failOnWarning?: boolean
    /** Will cause the module build to fail if there are any errors, based on emitError */
    failOnError?: boolean
  }

  const content: (rawOptions?: Options) => Plugin
  export default content
}
