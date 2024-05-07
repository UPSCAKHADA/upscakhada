"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/logo.png";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>UTTAR PRADESH SPECIFIC CURRENT AFFAIRS & GK</h3>
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
                  <h4><strong>PRICE</strong> - ₹ 99/-</h4>
                  <h4><strong>VALIDITY </strong> - 1 YEAR</h4>
                  <a href="https://mgxpi.courses.store/450458?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
            <h4> About the Programme</h4>
              <p>
              This course contains pdf notes.
              </p>
            <h4>Features</h4>
            <p>1. CURRENT AFFAIRS: This will include comprehensive coverage of relevant current affairs, of past one year, dealing with national and international events with special focus on events from Uttar Pradesh.</p>
            <p>2. SURVEY AND BUDGET OF UTTAR PRADESH: This will contain detailed analysis of economic survey and national and state budget. All important aspects will be covered and a point-wise pdf file will be provided which will make last minute revision very easy.</p>
            <p>3. GOVERNMENT SCHEMES: This section will cover government schemes of the central government with special focus on Uttar Pradesh and also the schemes of the uttar pradesh government.</p>
            <p>4. UTTAR PRADESH THROUGH MAPS: Under this, a booklet will be provided, covering important facts about the state, covered through maps.</p>
            <p>5. ONE LINER: Almost 1000 one liner points will be provided with this course, which will cover all important events, appointments, awards, books and authors etc for the whole year.</p>
            <p>6. PREVIOUS YEAR QUESTIONS: Seeing the importance of previous years questions in exams, video lectures as well as pdf will be provided, covering the last 5 years uppcs papers under the guidance of experts.</p>
            <p>7. Uttar Pradesh general knowledge.</p>
          </div>
        </Container>
      </section>
    </div>
  );
}
