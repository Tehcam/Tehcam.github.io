<<<<<<< HEAD
/* eslint-disable */
=======
/* eslint-env node */
>>>>>>> 16b96c8f28d5dfe3af6f23cc032efc371733fd3b

module.exports = api => {
  return {
    presets: [
      [
        '@quasar/babel-preset-app',
        api.caller(caller => caller && caller.target === 'node')
          ? { targets: { node: 'current' } }
          : {}
      ]
    ]
  }
}
<<<<<<< HEAD
=======

>>>>>>> 16b96c8f28d5dfe3af6f23cc032efc371733fd3b
