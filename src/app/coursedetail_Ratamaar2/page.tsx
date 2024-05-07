"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/Rattamaar/course2.jpg";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>RATTAMAAR FOR MAINS - SEASON 2</h3>
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
                  <h4><strong>PRICE</strong> - ₹ 999/-</h4>
                  <br></br>
                  <h4><strong>VALIDITY </strong> - 1 YEAR</h4>
                  <a href="https://mgxpi.courses.store/363659?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
          <br></br>
            <h4> About the Programme</h4>
              <p>
              The course will provide important key words of topics that will increase the marks of students in mains & reduce their effort by simplifying the complex content of mains.
              </p>
          <br></br><br></br>
            <h4>Features</h4>
            <p>1.  Innovative Memorization Techniques: Utilize cutting-edge methods to memorize important topics across all Mains subjects.</p>
            <p>2.  Structured Learning Approach: Systematically cover the Mains syllabus with a focus on easy recall during the exam.</p>
            <p>3.  Engaging Content Delivery: Enjoy learning with our engaging and interactive content format.</p>
            <p>4.  Continuous Reinforcement: Reinforce your learning through regular revision and practice sessions.</p>
            <p>5.  Enhanced Memory Retention: Remember more in less time with our specialized memorization techniques.</p>
            <p>6.  Comprehensive Syllabus Coverage: Efficiently cover every topic of the Mains syllabus, ensuring no stone is left unturned.</p>
            <p>7.  Effective Recall Strategies: Develop the ability to quickly recall information during the exam, a key to success in UPSC & State PCS Mains.</p>
            <p>8.  Boosted Confidence: Walk into the Mains examination hall with the confidence that comes from knowing your material thoroughly.</p>
            <p>9.  Memory-Enhancing Techniques: Learn unique methods to enhance retention and recall of vast amounts of information.</p>
            <p>10. Interactive Learning Modules: Engage with the content through interactive and multimedia-rich modules.</p>
            <p>11. Expert Guidance: Receive tips and tricks from mentors who understand the challenges of the Mains exam.</p>
            <p>12. Flexible Learning Options: Access the course material online at your convenience, allowing you to learn at your 
              own pace.</p>


          <br></br><br></br>
          <h4>Programme Benefits</h4>
          <p>RATTAMAAR FOR MAINS SEASON 2 is more than just a course; it's a strategic tool designed to optimize your memory for the 
            UPSC & State PCS  Mains. Our goal is to empower you with the knowledge and skills needed to excel in one of the most 
            challenging stages of the UPSC exam.</p>
          </div>
        </Container>
      </section>
    </div>
  );
}
