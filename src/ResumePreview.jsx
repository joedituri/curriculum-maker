function ResumePreview({ personalInfo, education }) {
  return (
    <div style={styles.resume}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.name}>
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <p style={styles.email}>{personalInfo.email}</p>
      </header>

      {/* Education Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Education</h2>
        <div>
          <p style={styles.school}>{education.schoolName}</p>
          <p style={styles.details}>
            Graduation Year: {education.gradYear}
          </p>
          <p style={styles.details}>Grade: {education.gradGrade}</p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  resume: {
    maxWidth: "700px",
    margin: "2rem auto",
    padding: "2rem",
    border: "1px solid #ddd",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
  },
  header: {
    borderBottom: "2px solid #000",
    marginBottom: "1.5rem",
    paddingBottom: "0.5rem",
  },
  name: {
    margin: 0,
    fontSize: "2rem",
  },
  email: {
    margin: 0,
    fontSize: "0.9rem",
    color: "#555",
  },
  section: {
    marginTop: "1.5rem",
  },
  sectionTitle: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
    textTransform: "uppercase",
  },
  school: {
    fontWeight: "bold",
  },
  details: {
    margin: "0.2rem 0",
  },
};

export default ResumePreview;