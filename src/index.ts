import * as _ from "lodash";
import "./style/reset.scss";
import "./style/main.scss";
import { memory } from "./wasm/pkg/index_bg.wasm";
import { greet_wasm } from "wasm";

const hoge = require("./ts/description");

const heading_div = document.createElement("div");
heading_div.id = "heading";
heading_div.textContent = greet_wasm();

const wrapper = document.createElement("div");
wrapper.className = "wrapper";
wrapper.appendChild(heading_div);
wrapper.appendChild(hoge.addDiv());

document.body.appendChild(wrapper);
//hoge.addDiv();