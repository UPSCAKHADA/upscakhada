"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/mentorship_answer_writing/course3.jpg";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>PARSHIRAM - PSYCHOLOGY OPTIONAL DAILY ANSWER WRITING & TEST SERIES</h3>
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
                  <h4><strong>PRICE</strong> - ₹ 13,000/-</h4>
                  <br></br>
                  <h4><strong>VALIDITY </strong> - 1 YEARS</h4>
                  <a href="https://mgxpi.courses.store/154115?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
          <br></br>
            <h4> About the Programme</h4>
            <p>	29 Daily Tests and 2 Full Length Tests.	</p>
            <p>	Model answers will be provided and copies are checked by the faculty in 2 to 3 days. 	</p>
            <p>	Doubt sessions are also conducted to clear your all doubts.	</p>

          <br></br><br></br>
            <h4>Features</h4>
            <p>	1.     Enhanced Answer Writing Skills: Develop the art of writing high-quality answers through regular practice.	</p>
            <p>	2.     Chapter-Wise Tests: Assess your understanding and application of concepts after each chapter.	</p>
            <p>	3.     Sectional Tests: Evaluate your progress with tests after completing each block, based on previous year question (PYQ) themes.	</p>
            <p>	4.     Current Affairs Integration: Linking psychological concepts with current events for a contemporary understanding.	</p>
            <p>	5.     Selective Study Approach: Guidance on what to study and, importantly, what not to, optimizing your preparation.	</p>
            <p>	6.     Structured Yet Flexible Timeline: The program duration ranges from 90 to 120 days, adaptable to your schedule and learning speed.	</p>
            <p>	7.     Skilful Answer Writing: Gain proficiency in writing answers that are precise, insightful, and aligned with the UPSC's expectations.	</p>

          </div>
        </Container>
      </section>
    </div>
  );
}
