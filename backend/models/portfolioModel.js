const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
  welcometext: {
    type: "string",
    required: true,
  },
  firstname: {
    type: "string",
    required: true,
  },
  lastname: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  caption: {
    type: "string",
    required: true,
  }
});
const aboutSchema = new mongoose.Schema({
  lottieUrl: {
    type: "string",
    required: true,
  },
  description1: {
    type: "string",
    required: true,
  },
  description2: {
    type: "string",
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});
const experiencesSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
  period: {
    type: "string",
    required: true,
  },
  company: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
});
const projectSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
  image: {
    type: "string",
    required: true,
  },
  link: {
    type: "string",
    required: true,
  },
  technologies: {
    type: Array,
    required: true,
  },
});
const contactSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  mobile: {
    type: "string",
    required: true,
  },contacturl:{
    type: "string",
  }
});
module.exports = {
  Intro: mongoose.model("intro", introSchema),
  About: mongoose.model("about", aboutSchema),
  Experience: mongoose.model("experience", experiencesSchema),
  Project: mongoose.model("project", projectSchema),
  Contact: mongoose.model("contact", contactSchema),
};

