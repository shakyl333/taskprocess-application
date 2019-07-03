/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"TaskProcess/TaskProcess-Application/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});