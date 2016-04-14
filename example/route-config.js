export function configRouter (router) {
  router.map({
    '/home': {
      name: 'home',
      component: require('./home')
    },
    '/avatar': {
      name: 'avatar',
      component: require('./components/avatar')
    },
    '/buttons': {
      name: 'buttons',
      component: require('./components/buttons')
    },
    '/checkbox': {
      name: 'checkbox',
      component: require('./components/checkbox')
    },
    '/datePicker': {
      name: 'datePicker',
      component: require('./components/datePicker')
    },
    '/dialog': {
      name: 'dialog',
      component: require('./components/dialog')
    },
    '/input': {
      name: 'input',
      component: require('./components/input')
    },
    '/pagination': {
      name: 'pagination',
      component: require('./components/pagination')
    },
    '/radio': {
      name: 'radio',
      component: require('./components/radio')
    },
    '/search': {
      name: 'search',
      component: require('./components/search')
    },
    '/select': {
      name: 'select',
      component: require('./components/select')
    },
    '/switch': {
      name: 'switch',
      component: require('./components/switch')
    },
    '/tooltips': {
      name: 'tooltips',
      component: require('./components/tooltips')
    },
    '/snackbar': {
      name: 'snackbar',
      component: require('./components/snackbar')
    },
    '/tables': {
      name: 'tables',
      component: require('./components/tables')
    },
    '/tabs': {
      name: 'tabs',
      component: require('./components/tabs')
    }
  })
}
