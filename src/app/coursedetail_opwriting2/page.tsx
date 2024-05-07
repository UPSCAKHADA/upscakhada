"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/mentorship_answer_writing/course2.jpg";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>PYQ PARISHRAM - PSYCHOLOGY OPTIONAL ANSWER WRITING</h3>
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
                  <h4><strong>PRICE</strong> - ₹ 15,000/-</h4>
                  <br></br>
                  <h4><strong>VALIDITY </strong> - 1 YEARS</h4>
                  <a href="https://mgxpi.courses.store/262567?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
          <br></br>
            <h4> About the Programme</h4>
              <p>
              Previous Year Questions (PYQs)are the gold standard in UPSC preparation. From trend to themes, they provide us knowledge 
              about UPSC's thought process for that paper. In psychology also, PYQs are the yardstick to check one's preparation level. 
              In my 2 years mentorship experience, it is one of the most demanding aspect. Aspirants want to write PYQs, get them 
              evaluated and need modal answers for the same. However, there is a vacuum in this aspect. To fill this void, we decided to
              launch PYQ PARISHARAM. </p>
          <br></br><br></br>
            <h4>Features</h4>
            <p>	1. Spread across 3 months	</p>
            <p>	2. Coverage: 2016 to 2023 PYQs	</p>
            <p>	3. Answer writing of all PYQs	</p>
            <p>	4. Evaluation and weekly online discussion	</p>
            <p>	5. Modal answer for each and every PYQ from 2016 to 23.	</p>
            <p>	6. Coverage of 350+ PYQs	</p>
            <p>	7. Three month schedule has flexibility option also as per the aspirants' suitability.	</p>

          </div>
        </Container>
      </section>
    </div>
  );
}
