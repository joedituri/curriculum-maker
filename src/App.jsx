import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalInfo from './PersonalInfo'
import Education from './Education'
import ResumePreview from './ResumePreview'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [education, setEducation] = useState({
    schoolName: "",
    gradYear: "",
    gradGrade: "",
  });

  const handleSubmit = () => {
    const data = { personalInfo, education };
    localStorage.setItem("formData", JSON.stringify(data));
    console.log(data);
  };

  return (
        <>
      <PersonalInfo data={personalInfo} setData={setPersonalInfo} />
      <Education data={education} setData={setEducation} />
      <button onClick={handleSubmit}>Submit</button>
      <ResumePreview
        personalInfo={personalInfo}
        education={education}
        />
    </>
  )
}

export default App
