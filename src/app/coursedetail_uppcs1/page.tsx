"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/logo.png";

import { Button, Container,  } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>UPPCS PRELIMS CRASH COURSE</h3>
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
                  <h4><strong>PRICE</strong> - ₹ 4999/-</h4>
                  <h4><strong>VALIDITY </strong> - 1 YEAR</h4>
                  <a href="https://mgxpi.courses.store/450439?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
            <h4> About the Programme</h4>
              <p>
                Complete UPPCSS PRELIMS  Preparation through Crash Course Videos and Notes.
              </p>
       
            <h4>Features</h4>
              <p>1. Customized Study Materials: Tailor-made study materials focusing on the specific needs of UTTAR PRADESH PCS aspirants.</p>
              <p>2.	Giving exactly what is required to clear prelims.</p>
              <p>3. Coverage of More topics in less time.</p>
              <p>4. Focus on areas which are not provided in regular study material.</p>
              <p>5.	Compiled notes from different sources to save your time.</p>
          </div>
        </Container>
      </section>
    </div>
  );
}
