"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/upsc/course2.jpg";

import { Button, Container } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>WINNING EDGE 2.0</h3>
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
                  <h4><strong>PRICE</strong> - ₹ 35,000/-</h4>
                  <h4><strong>VALIDITY </strong> - 2 YEARS</h4>
                  <a href="https://mgxpi.courses.store/371059?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
            <h4> About the Programme</h4>
            <p>	COVERAGE – PRELIMS , MAINS & PERSONALITY TEST (INTERVIEW)	</p>

            <h4>Features</h4>
            <p>	1.     Focused Advanced Training: Transition smoothly from basic to advanced concepts, with a curriculum designed for depth and clarity.	</p>
            <p>	2.     Strategic Study Materials: Access to advanced study materials that cater to the specific needs of students aiming for the top.	</p>
            <p>	3.     Focused Advanced Training: Transition smoothly from basic to advanced concepts, with a curriculum designed for depth and clarity.	</p>
            <p>	4.     Strategic Study Materials: Access to advanced study materials that cater to the specific needs of students aiming for the top.	</p>
            <p>	5.     Interactive Classroom Experience: Benefit from an environment that challenges and stimulates your intellectual curiosity.	</p>

          </div>
        </Container>
      </section>
    </div>
  );
}
