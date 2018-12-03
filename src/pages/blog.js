import PropTypes from "prop-types";
import React, {Component} from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Contact from "../components/Contact";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";

export default class BLogPage extends Component {
  render() {
      const {
          data: {
              posts: { edges: posts = [] },
              bgDesktop: {
                  resize: { src: desktop }
              },
              bgTablet: {
                  resize: { src: tablet }
              },
              bgMobile: {
                  resize: { src: mobile }
              },
              site: {
                  siteMetadata: { facebook }
              }
          }
      } = this.props; 
    return <div />;
  }
}
