<<<<<<< HEAD
/* eslint-disable */

// Mocks all files ending in `.vue` showing them as plain Vue instances
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
=======
// Mocks all files ending in `.vue` showing them as plain Vue instances
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
>>>>>>> 16b96c8f28d5dfe3af6f23cc032efc371733fd3b
}
