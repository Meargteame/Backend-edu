"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
/**
 * Product staff
 */
router.get('/product', function (req, res) {
    res.json({ message: 'message' });
});
router.get('/product/:id', function () { });
router.put('/product', function () { });
router.get('/product', function () { });
router.delete('/product/:id', function () { });
/**
 * Update staff
 */
router.get('/update', function () { });
router.get('/update/:id', function () { });
router.put('/update', function () { });
router.get('/update', function () { });
router.delete('/update/:id', function () { });
/**
 * Update Points staff
 */
router.get('/updatepoint', function () { });
router.get('/updatepoint/:id', function () { });
router.put('/updatepoint', function () { });
router.get('/updatepoint', function () { });
router.delete('/updatepoint/:id', function () { });
exports.default = router;
//# sourceMappingURL=router.js.map