﻿
```jsx
import React from 'react';
import styled from 'styled-components';
import { Button, Card, Frame, Header, Main, Panel, Section, withTheme } from 'dotnetify-elements';

const sampleTheme = {
   ...defaultTheme,
   name: 'sample',
   Main: `background: white`,
   Header: `
      height: 130px;
      border: none;
      box-shadow: none;
      background: none;
   `,
   Section: `background: none`
};

const jumbotronCss = `
   color: #fff;
   background: #343a40;
   font-size: 16px;
`;

const aboutCss = `
   padding: 1rem;
   background: #efefef;
   border-radius: .25rem;
`;

const thumbnailImg = 'data:image/svg+xml;charset=UTF-8,/* image data */';

/* Everything is put into a single component just for demo purpose; 
   but it'd be better to break this up into multiple components.  */
const SampleAppLayout = _ => (
   <Main theme={sampleTheme}>
      <Header>
         <Frame noGap>
            <Panel flex horizontal middle>
               <Panel flex>
                  <a href="#">Subscribe</a>
               </Panel>
               <h1>Large</h1>
               <Panel flex right>
                  <Button>Sign up</Button>
               </Panel>
            </Panel>
            <hr />
            <Panel flex horizontal apart>
               <a href="#">World</a>
               <a href="#">U.S.</a>
               <a href="#">Technology</a>
               <a href="#">Design</a>
               <a href="#">Culture</a>
               <a href="#">Business</a>
               <a href="#">Politics</a>
               <a href="#">Opinion</a>
               <a href="#">Science</a>
               <a href="#">Health</a>
            </Panel>
         </Frame>
      </Header>
      <Section>
         <Frame>
            <Card css={jumbotronCss}>
               <CellPanel horizontal>
                  <Panel flex>
                     <h1>Title of a featured post</h1>
                     Multiple lines of text informing new readers quickly and efficiently about what's most interesting in this post's
                     contents.
                     <a href="#">Continue reading...</a>
                  </Panel>
                  <Panel flex />
               </CellPanel>
            </Card>
            <Panel horizontal childProps={{ flex: true }}>
               <Card horizontal>
                  <b>World</b>
                  <h3>Featured Post</h3>
                  <label>June 22</label>
                  <p>This is a card with supporting text as a natural lead-in to additional content.</p>
                  <a href="#">Continue reading...</a>
                  <img src={thumbnailImg} />
               </Card>
               <Card horizontal>
                  <b>Design</b>
                  <h3>Post Title</h3>
                  <label>June 21</label>
                  <p>This is a card with supporting text as a natural lead-in to additional content.</p>
                  <a href="#">Continue reading...</a>
                  <img src={thumbnailImg} />
               </Card>
            </Panel>
            <Panel horizontal gap="2rem">
               <Panel css="margin-top: 2rem;">
                  <h4>From the Firehose</h4>
                  <h2>Sample Blog Post</h2>
                  July 4th, 2018
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                     occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <h3>Heading</h3>
                  <p>
                     At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                     corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                     officia deserunt mollitia animi, id est laborum et dolorum fuga.
                  </p>
                  <h5>Subheading</h5>
                  <p>
                     Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                     cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
                     repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
                     repudiandae sint et molestiae non recusandae.
                  </p>
               </Panel>
               <Panel>
                  <Panel css={aboutCss}>
                     <h5>About</h5>
                     <p>
                        Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia
                        bibendum nulla sed consectetur.
                     </p>
                  </Panel>
                  <Panel>
                     <h5>Archives</h5>
                     <Panel noGap>
                        <a href="#">June 2018</a>
                        <a href="#">May 2018</a>
                        <a href="#">April 2018</a>
                        <a href="#">March 2018</a>
                        <a href="#">February 2018</a>
                        <a href="#">January 2018</a>
                        <a href="#">December 2017</a>
                     </Panel>
                  </Panel>
               </Panel>
            </Panel>
         </Frame>
      </Section>
   </Main>
);

export default withTheme(LayoutDemo);
```