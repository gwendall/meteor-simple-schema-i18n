if (Meteor.isClient) {
  Meteor.startup(function() {
    Meteor.autorun(function() {
      var lang = TAPi18n.getLanguage();
      var localMessages = TAPi18n.__("simpleschema.messages", { returnObjectTrees: true });
      localMessages.regEx = _.map(localMessages.regEx, function(item) {
        if (item.exp) item.exp = eval(item.exp);
        return item;
      });
      var messages = _.extend(_.clone(SimpleSchema._globalMessages), localMessages);
      SimpleSchema.messages(messages);
    });
  });
}
