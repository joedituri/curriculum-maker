function Education({ data, setData }) {
  return (
    <div className="form-section">
      <h2 className="form-section-title">Education</h2>
      <div className="form-group">
        <label className="form-label" htmlFor="schoolName">
          School / University
        </label>
        <input
          id="schoolName"
          type="text"
          placeholder="University of Example"
          value={data.schoolName}
          onChange={(e) => setData({ ...data, schoolName: e.target.value })}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="degree">
          Degree
        </label>
        <input
          id="degree"
          type="text"
          placeholder="Bachelor of Science in Computer Science"
          value={data.degree}
          onChange={(e) => setData({ ...data, degree: e.target.value })}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="gradYear">
            Graduation Year
          </label>
          <input
            id="gradYear"
            type="number"
            placeholder="2024"
            value={data.gradYear}
            onChange={(e) => setData({ ...data, gradYear: e.target.value })}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="gradGrade">
            GPA / Grade
          </label>
          <input
            id="gradGrade"
            type="text"
            placeholder="3.8 / 4.0"
            value={data.gradGrade}
            onChange={(e) => setData({ ...data, gradGrade: e.target.value })}
            className="form-input"
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
