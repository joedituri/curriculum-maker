function Experience({ data, setData }) {
  const handleChange = (index, field, value) => {
    const updated = data.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp
    );
    setData(updated);
  };

  const handleAdd = () => {
    setData([
      ...data,
      { company: "", role: "", duration: "", description: "" },
    ]);
  };

  const handleRemove = (index) => {
    if (data.length > 1) {
      setData(data.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="form-section">
      <h2 className="form-section-title">Work Experience</h2>
      {data.map((exp, index) => (
        <div key={index} className="experience-entry">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Company</label>
              <input
                type="text"
                placeholder="Company name"
                value={exp.company}
                onChange={(e) => handleChange(index, "company", e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Role</label>
              <input
                type="text"
                placeholder="Job title"
                value={exp.role}
                onChange={(e) => handleChange(index, "role", e.target.value)}
                className="form-input"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Duration</label>
            <input
              type="text"
              placeholder="e.g., Jan 2022 - Present"
              value={exp.duration}
              onChange={(e) => handleChange(index, "duration", e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              placeholder="Describe your responsibilities and achievements"
              value={exp.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
              className="form-input form-textarea"
              rows={3}
            />
          </div>
          {data.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="remove-btn"
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={handleAdd} className="add-btn">
        + Add Experience
      </button>
    </div>
  );
}

export default Experience;
