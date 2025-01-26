import React from "react";
import { FaUser, FaTag } from "react-icons/fa"; // Ajoute cette ligne
import {
  BlogSectionWrapper,
  BlogContainer,
  BlogTitle,
  BlogSubtitle,
  BlogGrid,
  BlogCard,
  BlogImage,
  BlogCardContent,
  BlogCardFooter,
  BlogAuthor,
  BlogCategory,
  BlogHeading,
  BlogText,
  BlogLink,
  BlogCardTitle,
} from "./StyledComponents";

const BlogSection = () => {
  return (
    <BlogSectionWrapper>
      <BlogContainer>
        <BlogTitle>Blog</BlogTitle>
        <BlogHeading>
          We Love <span style={{ color: "rgb(100, 21, 255)" }}>Writing.</span>
        </BlogHeading>
        <BlogSubtitle>
          Some amazing blog posts that are written by even more amazing people.
        </BlogSubtitle>

        <BlogGrid>
          <BlogCard>
            <BlogImage src="images/blog1.jpeg" alt="Blog 1" />
            <BlogCardContent>
              <BlogCardFooter>
                <BlogAuthor>
                  <FaUser style={{ marginRight: "0.5rem" }} />
                  Adam Wathan
                </BlogAuthor>
                <BlogCategory>
                  <FaTag style={{ marginRight: "0.5rem" }} />
                  SEO
                </BlogCategory>
              </BlogCardFooter>
              <BlogCardTitle>
                Optimizing your website for your main keyword
              </BlogCardTitle>
              <BlogText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </BlogText>
              <BlogLink href="#">Read Post</BlogLink>
            </BlogCardContent>
          </BlogCard>

          <BlogCard>
            <BlogImage src="images/blog2.jpeg" alt="Blog 2" />
            <BlogCardContent>
              <BlogCardFooter>
                <BlogAuthor>
                  <FaUser style={{ marginRight: "0.5rem" }} /> Owais Khan
                </BlogAuthor>
                <BlogCategory>
                  <FaTag style={{ marginRight: "0.5rem" }} /> Advertising
                </BlogCategory>
              </BlogCardFooter>
              <BlogCardTitle>
                Creating The perfect advertisement campaign
              </BlogCardTitle>
              <BlogText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </BlogText>
              <BlogLink href="#">Read Post</BlogLink>
            </BlogCardContent>
          </BlogCard>

          <BlogCard>
            <BlogImage src="images/blog3.jpeg" alt="Blog 3" />
            <BlogCardContent>
              <BlogCardFooter>
                <BlogAuthor>
                  <FaUser style={{ marginRight: "0.5rem" }} />
                  Steve Schoger
                </BlogAuthor>
                <BlogCategory>
                  <FaTag style={{ marginRight: "0.5rem" }} />
                  Social Media
                </BlogCategory>
              </BlogCardFooter>
              <BlogCardTitle>
                Efficient management of your social media assets
              </BlogCardTitle>
              <BlogText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </BlogText>
              <BlogLink href="#">Read Post</BlogLink>
            </BlogCardContent>
          </BlogCard>
        </BlogGrid>
      </BlogContainer>
    </BlogSectionWrapper>
  );
};

export default BlogSection;
