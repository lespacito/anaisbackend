const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

/**
 * Update user identity details
 * @param body {String, Object}
 * @return {string} message success response | error response
 * @forPlay https://us-central1-anaisproject-ff941.cloudfunctions.net/updateUser
 * @documentation https://firebase.google.com/docs/auth/admin/manage-users?hl=fr#update_a_user
 */

exports.updateUser = functions.https.onRequest((req, res) => {
  const uid = req.body.uid;
  const data = req.body.data;

  return cors(req, res, async () => {
    try {
      const userRecord = await admin.auth().updateUser(uid, data);
      res.status(200).send(userRecord.toJSON);
    } catch (error) {
      logger.error("Error updating user:", error);
      res.status(500).send(error);
    }
  });
});
