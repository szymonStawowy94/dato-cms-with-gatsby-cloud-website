import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const Article = ({ data: { article } }) => {
	console.log(article);
	return (

	<Layout>
		{article.nodes[0].article.map(item => {
			const itemKey = Object.keys(item)[1];
			switch (itemKey) {
				case 'headingContent':
					return <h1 style={{"color": "red"}}>{item[itemKey]}</h1>
				case 'paragraphContent':
					return <h1 style={{"color": "blue"}}>{item[itemKey]}</h1>
				case 'imageData':
					return <img src={item[itemKey].url}/>
			}
		})}
	</Layout>
	)}

export default Article

export const query = graphql`
    query ArticleQuery {
        article: allDatoCmsArticle {
            nodes {
                article {
                    ... on DatoCmsHeading {
                        headingContent
                    }
                    ... on DatoCmsParagraph {
                        paragraphContent
                    }
                    ... on DatoCmsArticleImage {
                        imageData {
                            url
                        }
                    }
                }
            }
        }
    }
`
