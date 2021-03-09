odoo.define('openacademy.utils_tests', function (require) {
"use strict";

var utils = require('web.py_utils');
var result = "";

QUnit.module('openacademy', {}, function () {
    QUnit.module('utils');

    QUnit.test("akram test", function (assert) {
        assert.expect(1);
        result = "Akrqqdqdk";
        assert.strictEqual(result, "AKRAM");


    });
});
});




