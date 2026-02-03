function PersonalInfo({ data, setData }) {
  return (
    <div className="form-section">
      <h2 className="form-section-title">Personal Information</h2>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="John"
            value={data.firstName}
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Doe"
            value={data.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
            className="form-input"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="john.doe@email.com"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="form-input"
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
