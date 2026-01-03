import { useState } from "react";

function Education() {
  const [schoolName, setSchoolName] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [gradGrade, setGradGrade] = useState("");

   return (
    <div>
      <input
        type="text"
        placeholder="School"
        value={schoolName}
        onChange={(e) => setSchoolName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Graduation Year"
        value={gradYear}
        onChange={(e) => setGradYear(e.target.value)}
      />

      <input
        type="number"
        placeholder="Grade"
        value={gradGrade}
        onChange={(e) => setGradGrade(e.target.value)}
      />

      <p>
        {schoolName} {gradYear} — {gradGrade}
      </p>
    </div>
  );

}

export default Education;