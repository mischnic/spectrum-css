const colorGlobals = require('../colorGlobals.js');
const darkest = require('../darkest.js');
const dimensionGlobals = require('../dimensionGlobals.js');
const large = require('../large.js');
exports["text-color"] = colorGlobals["static-white"];
exports["track-color"] = darkest["track-color-over-background"];
exports["track-fill-color"] = colorGlobals["static-white"];
exports["track-color-disabled"] = darkest["track-color-over-background"];
exports["track-fill-color-disabled"] = darkest["background-color-transparent"];
exports["width"] = dimensionGlobals["size-200"];
exports["label-gap-x"] = large["size-150"];
exports["height"] = dimensionGlobals["size-200"];
exports["border-radius"] = "3px";
exports["fill-border-radius"] = "0";
exports["label-gap-y"] = large["size-115"];
exports["border-size"] = "3px";