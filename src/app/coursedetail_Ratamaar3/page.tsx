"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/Rattamaar/course3.jpg";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>RATTAMAAR FOR PRELIMNS - SEASON 3</h3>
      </div>

      <section className="inner_pages_Section">
        <Container>
        <div className="row mb-4">
              <div className="col-lg-4">
                <Image src={inner} alt="img" className="w-100" />
              </div>
              <div className="col-lg-8">
                <div className="price_Details">
                  <h3></h3>
                  <h4><strong>PRICE</strong> - ₹ 499/-</h4>
                  <br></br>
                  <h4><strong>VALIDITY </strong> - 1 YEAR</h4>
                  <a href="https://mgxpi.courses.store/412317?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
          <br></br>
            <h4> About the Programme</h4>
              <p>
              This course contains important information related to main current affairs in news.
              </p>
          <br></br><br></br>
            <h4>Features</h4>
            <p>1.  Effective Memorization Techniques: Learn through methods that enhance retention and recall of current affairs topics.</p>
            <p>2.  Comprehensive Coverage: Stay updated with all relevant national and international events, policies, and significant developments.</p>
            <p>3.  Structured Learning Approach: Our organized course structure ensures systematic learning and revision of current affairs.</p>
            <p>4.  Engaging Content Delivery: Experience learning through interactive and engaging content formats.</p>
            <p>5.  Master Current Affairs: Gain a strong grasp of current affairs, a crucial component of the UPSC exam & State PCS EXAM.</p>
            <p>6.  Enhanced Memory Recall: Improve your ability to quickly recall information during the exam.</p>
            <p>7.  Stay Updated and Relevant: Keep abreast of the latest happenings and trends in national and international affairs.</p>
            <p>8.  Boost Your Confidence: Enter the exam with the confidence that comes from thorough preparation.</p>
            <p>9.  Innovative Memorization Techniques: Unique methods tailored to simplify and enhance the learning of current affairs.</p>
            <p>10. Extensive Topic Coverage: Covers all significant areas of current affairs, from politics and economy to environment and science.</p>
            <p>11. Interactive and Engaging Material: Engage with content that makes learning both enjoyable and effective.</p>
            <p>12. Regular Updates: Course material is regularly updated to include the most recent and relevant topics.</p>
            <p>13. Expert Faculty Guidance: Learn from experienced educators who understand the nuances of current affairs in the context of UPSC & State PCS EXAM.</p>
            <p>14. Flexible Learning Options: Access the course online or offline, as per your convenience.</p>

           </div>
        </Container>
      </section>
    </div>
  );
}
