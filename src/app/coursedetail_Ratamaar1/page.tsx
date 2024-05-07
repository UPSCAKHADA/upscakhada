"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/Rattamaar/course1.jpg";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>RATTAMAAR FOR PRELIMNS - SEASON 1</h3>
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
                  <a href="https://mgxpi.courses.store/173779?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
          <br></br>
            <h4> About the Programme</h4>
              <p>
              In this Course students will be made to learn important topics which comes in almost all government exams. Once students watch a particular topic they will remember it forever as topics are taught using Learning Tricks.
              </p>
          <br></br><br></br>
            <h4>Features</h4>
            <p> 1. Targeted Memorization Techniques: Employ proven methods to memorize vast amounts of information efficiently.</p>
            <p> 2. Comprehensive Coverage: All Prelims topics are covered, ensuring a holistic approach to your preparation.</p>
            <p> 3. Engaging Learning Material: Interactive and engaging content makes memorization not only effective but also enjoyable.</p>
            <p> 4. Strategic Preparation: Focuses on memorizing important facts, figures, and concepts that are crucial for the Prelims.</p>
            <p> 5. Enhanced Memory Retention: Improve your ability to remember and recall information quickly during the exam.</p>
            <p> 6. Confidence Boost: Walk into the exam hall with the confidence that comes from knowing you have the information at your fingertips.</p>
            <p> 7. Time-Efficient Preparation: Maximize your study time with techniques that allow for quicker learning and longer retention.</p>
            <p> 8. Innovative Memorization Techniques: Learn unique methods to retain more information in less time.</p>
            <p> 9. Interactive Content: Engaging materials and methods make the memorization process interesting and less daunting.</p>
            <p>10. Comprehensive Topic Coverage: From History to Polity, Economy to Environment, cover all essential subjects for the Prelims.</p>

          </div>
        </Container>
      </section>
    </div>
  );
}
