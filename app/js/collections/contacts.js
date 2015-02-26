(function (define) {
  'use strict';
  define([
    'backbone',
    'models/contact',
    'localstorage'
  ],
  function(Backbone,Contact){
    var Contacts = Backbone.Collection.extend({
      model: Contact,
      localStorage: new Backbone.LocalStorage("Contacts")
    });

    return Contacts;
  });
}(define));
