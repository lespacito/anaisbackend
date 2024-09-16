const { initializeApp } = require("firebase-admin/app");
initializeApp();

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const updateUser = require("./api/updateUser");

exports.updateUser = updateUser.updateUser;
