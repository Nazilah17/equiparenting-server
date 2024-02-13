const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activityController");
const { requireAuth } = require("../middlewares/authMiddleware");

router.post("/activities", activityController.createActivity);
router.get("/activities/:id_member", activityController.getMemberActivity);
router.put("/activities/approve/:id_activity", activityController.approveActivity);
router.get("/activities/points/:id_member", activityController.getTotalPointsByMemberId);
router.get('/categories', activityController.getAllCategories);
router.get('/stats', requireAuth, activityController.getMemberActivityStats);

module.exports = router;