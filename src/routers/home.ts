const express = require("express");
const router = express.Router();
router.route("/").all((req: any, res: any, next: any) => {
  res.send("It works. Try /swagger as a route");
});

module.exports = router;
