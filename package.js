Package.describe({
  name: "gwendall:simple-schema-i18n",
  summary: "Internationalization for SimpleSchema",
  version: "0.1.7",
  git: "https://github.com/gwendall/meteor-simple-schema-i18n.git"
});

var packages = [
  "aldeed:simple-schema@1.3.2",
  "tap:i18n@1.4.1",
  "templating@1.1.1",
  "underscore@1.0.3"
];

Package.onUse(function (api, where) {

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    "package-tap.i18n",
    "i18n/ar.i18n.json",
    "i18n/bg.i18n.json",
    "i18n/de.i18n.json",
    "i18n/en.i18n.json",
    "i18n/es.i18n.json",
    "i18n/et.i18n.json",
    "i18n/fr.i18n.json",
    "i18n/he.i18n.json",
    "i18n/it.i18n.json",
    "i18n/nl.i18n.json",
    "i18n/pt-BR.i18n.json",
    "i18n/sk.i18n.json",
    "i18n/sv.i18n.json",
    "i18n/tr.i18n.json",
    "i18n/zh-CN.i18n.json",
    "shared/lib.js"
  ]);

});
