export const imports = {
  'HelloWorld.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "hello-world" */ 'HelloWorld.mdx'),
}
