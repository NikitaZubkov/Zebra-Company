"use strict";

import { SliderInit } from "./proj/Slider.js";
import { InitHeader } from "./proj/Header.js";

function proj(){};

proj.prototype.SliderInit = SliderInit;
proj.prototype.InitHeader = InitHeader;

export {
	proj
};