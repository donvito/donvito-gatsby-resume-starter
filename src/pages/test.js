import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => (
  <div>
    {data.allSummaryJson.edges.map(s => (
      <div key={s.node.id}>
        {s.node.summary}
      </div>
    ))}
    
  </div>
)
export const query = graphql`
  query {
    allSummaryJson {
      edges {
        node {
          id
          summary
        }
      }
    }
  }
`;