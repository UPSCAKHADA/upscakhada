"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/logo.png";

import { Button, Container} from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>UPPSC STUDY MATERIAL PROGRAM</h3>
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
                  <h4><strong>PRICE</strong> - ₹ 1999/-</h4>
                  <h4><strong>VALIDITY </strong> - 1 YEAR</h4>
                  <a href="https://mgxpi.courses.store/450455?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
            <h4> About the Programme</h4>
              <p>
              This program offers complete study material for uppsc exam.
              </p>
            <h4>Features</h4>
            <p>1. Under this program, complete study material for uppsc exam will be provided in pdf format.</p>
            <p>2. This will cover all topics of the static part of the syllabus in an easily graspable way.</p>
            <p>3. Along with this, a book covering all the data and facts about the state that are relevant to the exam will also be provided.</p>
            <p>4. These comprehensive static notes along with current affairs notes and tests will boost the level of preparation of the students.</p>
          </div>
        </Container>
      </section>
    </div>
  );
}
