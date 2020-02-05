if (Meteor.isClient) {
  Meteor.startup(function() {
    Tracker.autorun(function() {
      var lang = TAPi18n.getLanguage();
      var localMessages = TAPi18n.__("simpleschema.messages", { returnObjectTrees: true });
      localMessages.regEx = _.map(localMessages.regEx, function(item) {
        if (item.exp) {
          var obj = window;
          var path = item.exp.split('.');
          for(var i = 0; i < path.length; i++) {
            obj = obj[path[i]];
          }
          item.exp = obj;
        }
        return item;
      });
      var messages = _.extend(_.clone(SimpleSchema._globalMessages), localMessages);
      SimpleSchema.messages(messages);
    });
  });
}
