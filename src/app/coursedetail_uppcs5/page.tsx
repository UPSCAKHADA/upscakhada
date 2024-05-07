"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/logo.png";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>UPPCS MAINS TEST SERIES & ANSWER WRITING PROGRAM</h3>
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
                  <h4><strong>PRICE</strong> - ₹ 9999/-</h4>
                 
                  <h4><strong>VALIDITY </strong> - 1 YEAR</h4>
                  <a href="https://mgxpi.courses.store/450463?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
         
            <h4> About the Programme</h4>
              <p>
              This program offers sectional as well as full length mains tests study material.
              </p>
            <h4>Features</h4>
            <p>1. Under this program, sectional as well as full length mains tests will be provided.</p>
            <p>2. The program will contain 10 sectional tests and 12 full length tests based on the latest pattern and the syllabus of the up pcs exam.</p>
            <p>3. The questions have been designed by our team of experts with extensive knowledge in the field.</p>
            <p>4. As soon as each of the test is over, model answers for the same will be provided which have been prepared by our team of experts.</p>
            <p>5. Timely evaluation of the answers of the students will be done, and the students will be given detailed feedback and suggestions to make improvements in their answers.</p>
            <p>6. The tests will be completed before the mains exams leaving sufficient time for the students to make changes to their preparation on the basis of the feedback.</p>
            <p>7. Free updated material of Paper V & Paper VI will also be provided with the test series.</p>
          <h4>Programme Benefits</h4>
          <p>1. Skill Development: Develop the critical skill of structuring and presenting your answers effectively.</p>
          <p>2. Comprehensive Understanding: Gain a deeper understanding of the General Studies, Hindi and English syllabus and writing techniques.</p>
          <p>3. Enhanced Writing Speed and Quality: Improve your ability to articulate thoughts clearly and concisely under time constraints.</p>
          <p>4. Feedback and Improvement: Benefit from expert evaluations of your answers, providing insights for continuous improvement.</p>
          </div>
        </Container>
      </section>
    </div>
  );
}
