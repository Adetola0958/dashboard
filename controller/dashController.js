"use strict"

const Dash = require("../model/dashboard")

class App{
    getDashboard = (req, res, next) => {
        res.render("dashboard", {title : "Dashboard"})
    }
}

const returnApp = new App()

module.exports = returnApp