import CompanyProfile from "../models/CompanyProfile.js";

export const getAllCompanyProfiles = async (req, res) => {
  try {
    const profiles = await CompanyProfile.find();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCompanyProfile = async (req, res) => {
  try {
    const newProfile = new CompanyProfile(req.body);
    const savedProfile = await newProfile.save();
    res.status(201).json(savedProfile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateCompanyProfile = async (req, res) => {
  try {
    const updatedProfile = await CompanyProfile.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProfile) {
      return res.status(404).json({ error: "Profilis nerastas" });
    }
    res.json(updatedProfile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
