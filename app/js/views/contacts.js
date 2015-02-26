(function (define) {
  'use strict';
  define([
        'backbone',
        'underscore',
        'jquery',
        'views/contact',
        'text!templates/contacts.tmpl'
      ],
      function(Backbone,_,$,ContactView,contactsTpl){
        var ContactsView = Backbone.View.extend({
          template: _.template(contactsTpl),

          initialize: function(){
              this.listenTo( this.collection, 'add', this.render );
              this.listenTo( this.collection, 'reset', this.render );
              this.collection.fetch();
          },
          renderOne: function(contact) {
            var itemView = new ContactView({model: contact});
            this.$('.contacts-container').append(itemView.render().$el);
          },

          render: function() {
            var html = this.template();
            this.$el.html(html);

            this.collection.each(this.renderOne, this);

            return this;
          }
        });
        return ContactsView;
      });
}(define));
