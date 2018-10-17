"use strict";

import { Test, TestFunction } from "./proj/test.js"

function proj(){};

proj.prototype.Test = Test;
proj.prototype.TestFunction = TestFunction;

export {
	proj
};