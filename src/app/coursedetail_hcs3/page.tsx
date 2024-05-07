"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/hcs/course3.jpg";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>HCS PRELIMS TEST SERIES</h3>
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
                  <h4><strong>PRICE</strong> - ₹ 1025/-</h4>
                  <br></br>
                  <h4><strong>VALIDITY </strong> - 1 YEARS</h4>
                  <a href="https://mgxpi.courses.store/426440?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
          <br></br>
            <h4> About the Programme</h4>
              <p>
              15 Tests with solution both Hindi & English medium, offline & online (sectional & full length), tests personal guidance.</p>
          <br></br><br></br>
            <h4>Features</h4>
            <p>	1.   Extensive Test Coverage: Our series includes tests covering each significant subject, ensuring a well-rounded preparation.	</p>
            <p>	2.   Real Exam Simulation: Experience the feel of the actual HCS Prelims with our test format and time constraints.	</p>
            <p>	3.   Quality Question Papers: Each test is crafted to reflect the HCS pattern and standard, challenging your understanding and application of concepts.	</p>
            <p>	4.   Detailed Explanations: Gain insights from detailed explanations and solutions provided for each test, enhancing your learning.	</p>
            <p>	5.   Comprehensive Practice: Tackle a variety of questions across all key subjects, building your confidence and competence.	</p>
            <p>	6.   Assessment and Feedback: Understand your strengths and areas for improvement with our detailed analysis of your test performances.	</p>
            <p>	7.   Increased Accuracy and Speed: Hone your skills to answer accurately and quickly, essential for the HCS Prelims.	</p>
            <p>	8.   Diverse Range of Tests: Our series includes tests on Economy, Polity, Science and Tech, History, Geography, HARYANA GK & Current affairs, National Current affairs, Government Schemes and more.	</p>
            <p>	9.   Expertly Designed Questions: Benefit from questions crafted by experienced educators well-versed in the HCS exam pattern.	</p>
            <p>	10.  Flexible Schedule: Access our test series online at your convenience and plan your practice sessions according to your study timetable	</p>

          </div>
        </Container>
      </section>
    </div>
  );
}
