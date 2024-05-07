"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/hcs/course6.jpg";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>HCS MAINS TEST SERIES</h3>
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
                  <h4><strong>PRICE</strong> - ₹ 10, 999/-</h4>
                  <br></br>
                  <h4><strong>VALIDITY </strong> - 1 YEARS</h4>
                  <a href="https://mgxpi.courses.store/455077?mainCategory=15" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
          <br></br>
            <h4> About the Programme</h4>
              <p>
               Test series for HCS Mains.</p>
          <br></br><br></br>
            <h4>Features</h4>
            <p>	1.     Skill Development: Develop the critical skill of structuring and presenting your answers effectively.	</p>
            <p>	2.     Comprehensive Understanding: Gain a deeper understanding of the General Studies, Hindi and English syllabus and writing techniques.	</p>
            <p>	3.     Enhanced Writing Speed and Quality: Improve your ability to articulate thoughts clearly and concisely under time constraints.	</p>
            <p>	4.     Feedback and Improvement: Benefit from expert evaluations of your answers, providing insights for continuous improvement.	</p>

          </div>
        </Container>
      </section>
    </div>
  );
}
