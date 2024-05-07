"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/subject_wise_course_module/course3.jpg";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>MAPPING</h3>
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
                  <a href="https://mgxpi.courses.store/190027?mainCategory=0&filterId=31&sortId=11" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>  
                </div>
              </div>
            </div>
          <div className="inner_content">
          <br></br>
            <h4> About the Programme</h4><br></br>
              <p>	The course covers the locations, physiographic features and regions in a comprehensive manner. Aim is to 
                make the student go through various location and help them in memorizing it.</p>

          <br></br><br></br>
            <h4>Features</h4>
            <p>	1. Complete Coverage of the Subject.	</p>
            <p>	2. Discussion of Previous Year Questions.	</p>
            <p>	3. Prelims MCQs Practice	</p>
            <p>	4. Current Affairs Updation.	</p>

          </div>
        </Container>
      </section>
    </div>
  );
}
