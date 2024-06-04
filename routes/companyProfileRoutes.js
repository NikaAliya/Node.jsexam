import express from "express";
import {
  getAllCompanyProfiles,
  createCompanyProfile,
  updateCompanyProfile,
} from "../controllers/companyProfileController.js";

const router = express.Router();

router.get("/companyProfiles", getAllCompanyProfiles);
router.post("/companyProfiles", createCompanyProfile);
router.put("/companyProfiles/:id", updateCompanyProfile);

export default router;
