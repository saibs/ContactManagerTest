(function (define) {
  'use strict';
  define([
    'backbone',
    'models/contact'
  ],
  function(Backbone,Contact){
    var Contacts = Backbone.Collection.extend({
      model: Contact
    });

    return Contacts;
  });
}(define));
