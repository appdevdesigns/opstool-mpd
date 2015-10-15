/**
 * Routes
 *
 * Use this file to add any module specific routes to the main Sails
 * route object.
 */


module.exports = {


  /*

  '/': {
    view: 'user/signup'
  },
  '/': 'opstool-mpd/PluginController.inbox',
  '/': {
    controller: 'opstool-mpd/PluginController',
    action: 'inbox'
  },
  'post /signup': 'opstool-mpd/PluginController.signup',
  'get /*(^.*)' : 'opstool-mpd/PluginController.profile'

  */
    'get /opstool-mpd/mpd' : 'opstool-mpd/MPDController.find'

};

