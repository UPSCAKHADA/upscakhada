"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/subject_wise_course_module/course8.jpg";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>POLITY & GS MAINS PAPER 2</h3>
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
                  <br></br>
                  <h4><strong>VALIDITY </strong> - 1 YEAR</h4>
                  <a href="https://mgxpi.courses.store/159522?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
          <br></br>
            <h4> About the Programme</h4><br></br>
              <p>	The course covers - PRELIMS & MAINS	</p>
              <p>	1.Polity & Constitution.	</p>
              <p>	2.  Governance	</p>
              <p>	3. Social Justice & Development	</p>
              <p>	4. International Relation	</p>
              <p>	The course will be conducted by an experienced faculty and cover the topics in holistic and analytical manner.	</p>


          <br></br><br></br>
            <h4>Features</h4>
            <p>	1. Complete Coverage of the Subject.	</p>
            <p>	2. Discussion of Previous Year Questions.	</p>
            <p>	3. Prelims MCQs Practice	</p>
            <p>	4. Mains Answer Writing Practice.	</p>
            <p>	5. Current Affairs Updation.	</p>

          </div>
        </Container>
      </section>
    </div>
  );
}
