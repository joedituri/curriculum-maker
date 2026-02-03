function Skills({ data, setData }) {
  const handleAddSkill = () => {
    if (data.currentSkill.trim()) {
      setData({
        ...data,
        skills: [...data.skills, data.currentSkill.trim()],
        currentSkill: "",
      });
    }
  };

  const handleRemoveSkill = (index) => {
    setData({
      ...data,
      skills: data.skills.filter((_, i) => i !== index),
    });
  };



  return (
    <div className="form-section">
      <h2 className="form-section-title">Skills</h2>
      <div className="skill-input-row">
        <input
          type="text"
          placeholder="Add a skill (e.g., JavaScript, Project Management)"
          value={data.currentSkill}
          onChange={(e) => setData({ ...data, currentSkill: e.target.value })}
          className="form-input"
        />
        <button type="button" onClick={handleAddSkill} className="add-btn">
          Add
        </button>
      </div>
      <div className="skills-list">
        {data.skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
            <button
              type="button"
              onClick={() => handleRemoveSkill(index)}
              className="remove-skill-btn"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
