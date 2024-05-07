"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/logo.png";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>UPPCS 2024 PRELIMS TEST SERIES</h3>
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
                  <h4><strong>VALIDITY </strong> - 1 YEAR</h4>
                  <a href="https://mgxpi.courses.store/450448?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
            <h4> About the Programme</h4>
              <p>
                This course contains prelims related study material such as tests, their solution and pdf notes.
              </p>
            <h4>Features</h4>
            <p>1.	This program will contain 27 tests for UPPSC prelims.</p>
            <p>2.	These tests will cover static as well as current affairs, relevant for the exam.</p>
            <p>3.	The test series will be divided into sectional and full length tests.</p>
            <p>4.	There will be 22 sectional tests and 5 full length tests.</p>
            <p>5.	Sectional tests will cover the whole syllabus in a topic-wise manner and the full length tests will be designed in the same manner as the pre exams, enabling them to experience the exam even before it actually happens.</p>
            <p>6.	Two separate tests each will cover Uttar Pradesh specific questions and national, international and state based current affairs respectively.</p>
            <p>7.	Current affairs: this will include comprehensive coverage of relevant current affairs, of past one year, dealing with national and international events with special focus on events from Uttar Pradesh.</p>
            <p>8.	Survey and budget: this will contain detailed analysis of economic survey and national and state budget. All important aspects will be covered and a point-wise pdf file will be provided which will make last minute revision very easy.</p>
            <p>9.	Government schemes: this section will cover government schemes of the central government with special focus on Uttar Pradesh and also the schemes of the Uttar Pradesh government.</p>
            <p>10.	Uttar Pradesh through maps: under this, a booklet will be provided, covering important facts about the state, covered through maps.</p>
            <p>11.	One liner: almost 1000 one liner points will be provided with this course, which will cover all important events, appointments, awards, books and authors etc for the whole year.</p>
            <p>12.	Previous year questions analysis: seeing the importance of  previous years questions in exams, video lectures as well as pdf will be provided, covering the last 5 years UPPCS papers under the guidance of experts.</p>
            <p>13.	Uttar Pradesh general knowledge.</p>
          </div>
        </Container>
      </section>
    </div>
  );
}
