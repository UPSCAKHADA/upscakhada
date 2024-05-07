"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/upsc/course1.jpg";

import { Button, Container,  } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>UPSC Foundation Course</h3>
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
                  <h4><strong>PRICE</strong> - ₹ 40,000/-</h4>
                  <h4><strong>VALIDITY </strong> - 3 YEARS</h4>
                  <a href="https://mgxpi.courses.store/353607?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
            <h4> About the Programme</h4>
            <p>	COVERAGE – PRELIMS , MAINS & PERSONALITY TEST (INTERVIEW)	</p>

            <h4>Features</h4>
            <p>	1.Comprehensive Coverage: From the basics to advanced topics, we ensure a holistic preparation that covers all facets of the UPSC syllabus.	</p>
            <p>	2. Expertly Curated Study Materials: Our study materials are tailored to simplify complex concepts, making your learning process efficient and effective.	</p>
            <p>	3.Dynamic Classroom Environment: Engage in interactive learning with our experienced faculty who bring a wealth of knowledge and insights.	</p>
            <p>	4.Strategic Answer Writing Training: Master the art of answer writing for Mains with our specialized training sessions, improving your presentation and content quality.	</p>
            <p>	5.Intensive Prelims MCQ Practice: Tackle the Prelims with confidence through our extensive MCQ practice sessions, designed to enhance your speed and accuracy.	</p>
            <p>	6. All-Encompassing Preparation: We provide thorough preparation for every level of the UPSC examination - Prelims, Mains, and the Interview.	</p>

          </div>
        </Container>
      </section>
    </div>
  );
}
