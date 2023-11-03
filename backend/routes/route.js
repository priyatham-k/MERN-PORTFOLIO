const router = require("express").Router();
const {
  Intro,
  About,
  Experience,
  Project,
  Contact,
} = require("../models/portfolioModel");

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const about = await About.find();
    const experience = await Experience.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    if (intros && intros.length > 0) {
      res.status(200).send({
        intro: intros,
        about: about,
        experience: experience,
        projects: projects,
        contacts: contacts,
      });
    } else {
      res.status(404).json({ error: "No intro data found" });
    }
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/update-intro", async (req, res) => {
  try {
    console.log("Request body:", req.body._id);
    const intross = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    if (!intross) {
      return res
        .status(404)
        .send({ success: false, message: "Intro not found" });
    }
    console.log("Updated intro:", intross);
    res.status(200).send({ data: intross, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "An error occurred while updating the Intro",
    });
  }
});
router.post("/update-about", async (req, res) => {
  try {
    console.log("Request body:", req.body._id);
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    if (!about) {
      return res
        .status(404)
        .send({ success: false, message: "Intro not found" });
    }
    console.log("Updated intro:", about);
    res.status(200).send({ data: about, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "An error occurred while updating the Intro",
    });
  }
});
router.post("/update-contact", async (req, res) => {
  try {
    console.log("Request body:", req.body._id);
    const contact = await Contact.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    if (!contact) {
      return res
        .status(404)
        .send({ success: false, message: "Intro not found" });
    }
    console.log("Updated intro:", contact);
    res.status(200).send({ data: contact, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "An error occurred while updating the Intro",
    });
  }
});

router.post("/update-expereince", async (req, res) => {
  try {
    console.log("Request body:", req.body._id);
    const experience = await Experience.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    if (!experience) {
      return res
        .status(404)
        .send({ success: false, message: "Intro not found" });
    }
    console.log("Updated intro:", experience);
    res.status(200).send({ data: experience, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "An error occurred while updating the Intro",
    });
  }
});
router.post("/add-expereince", async (req, res) => {
  try {
    console.log("Request body:", req.body._id);
    const experience = new Experience(req.body);
    await experience.save();

    if (!experience) {
      return res
        .status(404)
        .send({ success: false, message: "Intro not found" });
    }
    console.log("Updated intro:", experience);
    res.status(200).send({ data: experience, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "An error occurred while updating the Intro",
    });
  }
});
router.post("/delete-experience", async (req, res) => {
  try {
    console.log("Request body:", req.body._id);
    const experience = await Experience.findByIdAndDelete({
      _id: req.body._id,
    });
    if (!experience) {
      return res.status(404).send({ success: false, message: "Exp deleted" });
    }
    console.log("Updated intro:", experience);
    res.status(200).send({ data: experience, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "An error occurred while updating the Intro",
    });
  }
});
router.post("/delete-project", async (req, res) => {
  try {
    console.log("Request body:", req.body._id);
    const experiences = await Project.findByIdAndDelete({
      _id: req.body._id,
    });
    if (!experiences) {
      return res.status(404).send({ success: false, message: "Exp deleted" });
    }
    console.log("Updated intro:", experiences);
    res.status(200).send({ data: experiences, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "An error occurred while updating the Intro",
    });
  }
});
router.post("/update-projects", async (req, res) => {
  console.log("Request body:", req.body)
  try {
    const { image, _id } = req.body; // Destructure _id

    console.log("Received request with _id:", _id);

    const encodedURL = encodeURIComponent(image);

    const updatedProject = await Project.findOneAndUpdate(
      { _id }, // Use the destructured _id
      { imageUrl: encodedURL },
      { new: true }
    );

    if (!updatedProject) {
      return res
        .status(404)
        .send({ success: false, message: "Project not found" });
    }

    console.log("Updated project:", updatedProject);
    res.status(200).send({ data: updatedProject, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "An error occurred while updating the project",
    });
  }
});


router.post("/add-projects", async (req, res) => {
  try {
    const projectws = new Project(req.body);
    await projectws.save();

    if (!projectws) {
      return res
        .status(404)
        .send({ success: false, message: "Intro not found" });
    }
    console.log("Updated intro:", projectws);
    res.status(200).send({ data: projectws, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "An error occurred while updating the Intro",
    });
  }
});

module.exports = router;
