"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/hcs/course5.jpg";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>HCS MAINS DAILY ANSWER WRITING PROGRAM</h3>
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
                  <h4><strong>PRICE</strong> - ₹ 8999/-</h4>
                  <br></br>
                  <h4><strong>VALIDITY </strong> - 1 YEARS</h4>
                  <a href="https://mgxpi.courses.store/353426?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
          <br></br>
            <h4> About the Programme</h4>
              <p>
              HCS daily answer writing.</p>
          <br></br><br></br>
            <h4>Features</h4>
            <p>	1.     Daily Answer Writing Tasks: Receive daily questions that mirror the pattern and standard of the HCS Mains.	</p>
            <p>	2.     Structured Approach: Tackle each paper systematically – GS, HINDI, ENGLISH- ensuring all-round preparation.	</p>
            <p>	3.     Expert Evaluation: Each answer is reviewed by our team of experts, offering constructive feedback and guidance.	</p>
            <p>	4.     Flexible Access: Participate in the program online, allowing you to incorporate this practice seamlessly into your study routine.	</p>
            <p>	5.     Real Exam Simulation: Practice in an exam-like environment to build comfort and confidence for the actual Mains examination.	</p>
            <p>	6.     Model Answers for Reference: Access to well-structured model answers that serve as a benchmark for high-quality responses.	</p>
            <p>	7.     Interactive Sessions with Selected Officers: Engage in sessions with HCS qualified officers for practical tips and motivational insights.	</p>
            <p>	8.     Personalized Mentorship: Our mentors provide one-on-one guidance, tailoring their advice to your individual writing style and needs.	</p>

          </div>
        </Container>
      </section>
    </div>
  );
}
