const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp({});


const { Testing } = require("./API/Testing_API");

exports.TestingAPI = functions.https.onRequest(Testing);
