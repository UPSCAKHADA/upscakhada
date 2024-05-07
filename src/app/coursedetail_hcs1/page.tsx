"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/hcs/course1.jpg";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>HCS FOUNDATION COURSE</h3>
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
                  <h4><strong>PRICE</strong> - ₹ 29,999/-</h4>
                  <br></br>
                  <h4><strong>VALIDITY </strong> - 2 YEARS</h4>
                  <a href="https://mgxpi.courses.store/309011?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
          <br></br>
            <h4> About the Programme</h4>
              <p>
              This Course contains material for Prelims, Mains, Interview and special toppers section.</p>
          <br></br><br></br>
            <h4>Features</h4>
            <p>	1.    Holistic Classroom Sessions: Dive into interactive and engaging classes covering every facet of the HCS syllabus.	</p>
            <p>	2.    In-Depth Study Material: Get access to expertly curated notes, simplifying complex concepts and boosting your understanding.	</p>
            <p>	3.    Regular Test Series: Sharpen your exam skills with our extensive test series, mirroring the pattern and standard of the HCS exam.	</p>
            <p>	4.    Strategic Writing Practice: Enhance your answer writing abilities for the Mains, a critical skill for success in HCS.	</p>
            <p>	5.    Comprehensive Syllabus Coverage: Gain a strong grasp of all subjects pertinent to the HCS exam, from Polity to Geography, Economy, and more.	</p>
            <p>	6.    Effective Study Strategies: Adopt efficient study methods and exam strategies guided by experienced educators.	</p>
            <p>	7.    Skill Enhancement: Improve essential skills like critical thinking, answer formulation, and time management.	</p>
            <p>	8.    Focused Writing Sessions: Special sessions dedicated to developing answer writing skills, critical for the Mains exam.	</p>
            <p>	9.    Current Affairs Integration: Regular updates and discussions on current affairs, ensuring you stay informed and exam-ready.	</p>
            <p>	10.   Personalized Attention: Small batch sizes allowing for individual attention and mentorship.	</p>
            <p>	11.   Flexibility in Learning: Access to both offline and online learning resources to suit your preparation needs.	</p>

          </div>
        </Container>
      </section>
    </div>
  );
}
