jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
jQuery.sap.require("sap.ui.test.opaQunit");
jQuery.sap.require("sap.ui.test.Opa5");

jQuery.sap.require("com.pr36.pic.test.integration.pages.Common");
jQuery.sap.require("com.pr36.pic.test.integration.pages.App");
jQuery.sap.require("com.pr36.pic.test.integration.pages.Browser");
jQuery.sap.require("com.pr36.pic.test.integration.pages.Master");
jQuery.sap.require("com.pr36.pic.test.integration.pages.Detail");
jQuery.sap.require("com.pr36.pic.test.integration.pages.NotFound");

sap.ui.test.Opa5.extendConfig({
	arrangements: new com.pr36.pic.test.integration.pages.Common(),
	viewNamespace: "com.pr36.pic.view."
});

jQuery.sap.require("com.pr36.pic.test.integration.NavigationJourneyPhone");
jQuery.sap.require("com.pr36.pic.test.integration.NotFoundJourneyPhone");
jQuery.sap.require("com.pr36.pic.test.integration.BusyJourneyPhone");