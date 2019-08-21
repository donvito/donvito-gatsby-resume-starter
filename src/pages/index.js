import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import SectionResumeExperienceSkills from "../components/resume-section-experience-skills";
import SectionResumeSummaryContact from "../components/resume-section-summary-contact";

const IndexPage = () => (
  <Layout>
    <SEO title="My Resume" />    
      <SectionResumeSummaryContact />    
      <SectionResumeExperienceSkills />    
    <div>
  </div>
  </Layout>
)

export default IndexPage