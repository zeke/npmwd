#!/usr/bin/env node

var path = require("path")
var open = require("open")
var pkg = require(path.resolve(process.cwd(), "package.json")).name
open("https://npmjs.com/package/" + pkg)
