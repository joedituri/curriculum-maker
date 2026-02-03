import { forwardRef } from "react";

const ResumePreview = forwardRef(function ResumePreview(
  { personalInfo, education, skills, experience },
  ref
) {
  const hasContent =
    personalInfo.firstName ||
    personalInfo.lastName ||
    personalInfo.email ||
    education.schoolName ||
    skills.skills.length > 0 ||
    experience.some((exp) => exp.company || exp.role);

  return (
    <div ref={ref} style={styles.resume}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.name}>
          {personalInfo.firstName || personalInfo.lastName
            ? `${personalInfo.firstName} ${personalInfo.lastName}`.trim()
            : "Your Name"}
        </h1>
        {personalInfo.email && <p style={styles.email}>{personalInfo.email}</p>}
      </header>

      {/* Education Section */}
      {(education.schoolName || education.degree || education.gradYear) && (
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Education</h2>
          <div style={styles.entryHeader}>
            <p style={styles.school}>{education.schoolName}</p>
            {education.gradYear && (
              <p style={styles.duration}>{education.gradYear}</p>
            )}
          </div>
          {education.degree && (
            <p style={styles.details}>{education.degree}</p>
          )}
          {education.gradGrade && (
            <p style={styles.details}>GPA: {education.gradGrade}</p>
          )}
        </section>
      )}

      {/* Experience Section */}
      {experience.some((exp) => exp.company || exp.role) && (
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Experience</h2>
          {experience
            .filter((exp) => exp.company || exp.role)
            .map((exp, index) => (
              <div key={index} style={styles.experienceEntry}>
                <div style={styles.entryHeader}>
                  <p style={styles.school}>{exp.company}</p>
                  {exp.duration && (
                    <p style={styles.duration}>{exp.duration}</p>
                  )}
                </div>
                {exp.role && <p style={styles.role}>{exp.role}</p>}
                {exp.description && (
                  <p style={styles.description}>{exp.description}</p>
                )}
              </div>
            ))}
        </section>
      )}

      {/* Skills Section */}
      {skills.skills.length > 0 && (
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Skills</h2>
          <div style={styles.skillsContainer}>
            {skills.skills.map((skill, index) => (
              <span key={index} style={styles.skillBadge}>
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {!hasContent && (
        <p style={styles.emptyState}>
          Start filling in the form to see your resume preview
        </p>
      )}
    </div>
  );
});

const styles = {
  resume: {
    maxWidth: "700px",
    margin: "2rem auto",
    padding: "2.5rem",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    fontFamily: "'Georgia', serif",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    minHeight: "500px",
  },
  header: {
    borderBottom: "2px solid #2c3e50",
    marginBottom: "1.5rem",
    paddingBottom: "1rem",
    textAlign: "center",
  },
  name: {
    margin: 0,
    fontSize: "2rem",
    fontWeight: "600",
    color: "#2c3e50",
    letterSpacing: "0.5px",
  },
  email: {
    margin: "0.5rem 0 0 0",
    fontSize: "0.95rem",
    color: "#666",
  },
  section: {
    marginTop: "1.5rem",
  },
  sectionTitle: {
    fontSize: "0.9rem",
    fontWeight: "700",
    marginBottom: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "#2c3e50",
    borderBottom: "1px solid #eee",
    paddingBottom: "0.3rem",
  },
  entryHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  school: {
    fontWeight: "600",
    margin: 0,
    color: "#333",
  },
  duration: {
    fontSize: "0.85rem",
    color: "#666",
    margin: 0,
  },
  role: {
    fontStyle: "italic",
    color: "#555",
    margin: "0.2rem 0",
  },
  details: {
    margin: "0.2rem 0",
    color: "#555",
    fontSize: "0.9rem",
  },
  description: {
    margin: "0.5rem 0 0 0",
    color: "#444",
    fontSize: "0.9rem",
    lineHeight: "1.5",
  },
  experienceEntry: {
    marginBottom: "1rem",
  },
  skillsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  skillBadge: {
    backgroundColor: "#f0f4f8",
    color: "#2c3e50",
    padding: "0.3rem 0.75rem",
    borderRadius: "4px",
    fontSize: "0.85rem",
    border: "1px solid #dde4ea",
  },
  emptyState: {
    textAlign: "center",
    color: "#999",
    fontStyle: "italic",
    marginTop: "3rem",
  },
};

export default ResumePreview;
