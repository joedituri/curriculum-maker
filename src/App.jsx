import { useState, useEffect, useRef } from "react";
import "./App.css";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import ResumePreview from "./ResumePreview";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [education, setEducation] = useState({
    schoolName: "",
    degree: "",
    gradYear: "",
    gradGrade: "",
  });

  const [skills, setSkills] = useState({
    skills: [],
    currentSkill: "",
  });

  const [experience, setExperience] = useState([
    { company: "", role: "", duration: "", description: "" },
  ]);

  const [isExporting, setIsExporting] = useState(false);
  const resumeRef = useRef(null);

  // Load saved data on mount
  useEffect(() => {
    const saved = localStorage.getItem("resumeData");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.personalInfo) setPersonalInfo(data.personalInfo);
        if (data.education) setEducation(data.education);
        if (data.skills) setSkills({ skills: data.skills, currentSkill: "" });
        if (data.experience) setExperience(data.experience);
      } catch (e) {
        console.error("Failed to load saved data:", e);
      }
    }
  }, []);

  const handleSave = () => {
    const data = { personalInfo, education, skills: skills.skills, experience };
    localStorage.setItem("resumeData", JSON.stringify(data));
    alert("Resume saved to browser!");
  };

  const handleExportPDF = async () => {
    setIsExporting(true);
    
    // Dynamically import html2pdf
    const html2pdf = (await import("html2pdf.js")).default;
    
    const element = resumeRef.current;
    const filename = personalInfo.firstName && personalInfo.lastName
      ? `${personalInfo.firstName}_${personalInfo.lastName}_Resume.pdf`
      : "Resume.pdf";

    const opt = {
      margin: 0.5,
      filename: filename,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    try {
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("PDF export failed:", error);
      alert("Failed to export PDF. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear all data?")) {
      setPersonalInfo({ firstName: "", lastName: "", email: "" });
      setEducation({ schoolName: "", degree: "", gradYear: "", gradGrade: "" });
      setSkills({ skills: [], currentSkill: "" });
      setExperience([{ company: "", role: "", duration: "", description: "" }]);
      localStorage.removeItem("resumeData");
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Resume Builder</h1>
        <p>Create your professional resume with live preview</p>
      </header>

      <div className="main-content">
        <div className="form-container">
          <PersonalInfo data={personalInfo} setData={setPersonalInfo} />
          <Education data={education} setData={setEducation} />
          <Experience data={experience} setData={setExperience} />
          <Skills data={skills} setData={setSkills} />

          <div className="button-group">
            <button onClick={handleExportPDF} className="btn btn-primary" disabled={isExporting}>
              {isExporting ? "Exporting..." : "Download PDF"}
            </button>
            <button onClick={handleSave} className="btn btn-secondary">
              Save Draft
            </button>
            <button onClick={handleClear} className="btn btn-danger">
              Clear All
            </button>
          </div>
        </div>

        <div className="preview-container">
          <h2 className="preview-title">Preview</h2>
          <ResumePreview
            ref={resumeRef}
            personalInfo={personalInfo}
            education={education}
            skills={skills}
            experience={experience}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
