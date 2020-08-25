import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Content, { HTMLContent } from "../components/Content";

import Layout from "../components/Layout";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h1 className="top title has-text-weight-bold has-text-centered has-text-white is-size-3-mobile is-size-2-widescreen">
        {title}
      </h1>
    </div>

    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-6 is-offset-1">
            <div className="content">
              <h2 className="title is-size-3">{mainpitch.title}</h2>
              {mainpitch.description}
            </div>
          </div>
          <div className="column is-3 is-offset-1">
            <div className="content">
              <ul>
                <li>Expert Witness Technical Reports</li>
                <li>Causation Reports</li>
                <li>Scopes of Work</li>
                <li>Cost Estimates</li>
                <li>Cost Analysis & Comparison</li>
                <li>Project Management</li>
                <li>Hazard Mitigation</li>
                <li>Dilapidation Reports </li>
                <li>Dispute Resolution</li>
                <li>Risk Analysis</li>
              </ul>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
