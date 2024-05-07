"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/hcs/course2.jpg";

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>HCS PRELIMS CRASH COURSE</h3>
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
                  <h4><strong>VALIDITY </strong> - 1 YEARS</h4>
                  <a href="https://mgxpi.courses.store/425665?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
          <br></br>
            <h4> About the Programme</h4>
              <p>
              Complete HCS PRELIMS preparation through crash course videos and notes.</p>
          <br></br><br></br>
            <h4>Features</h4>
            <p>	1.  Coverage of More topics in less time.	</p>
            <p>	2.  Customized Study Materials: Tailor-made study materials focusing on the specific needs of Haryana PCS aspirants.	</p>
            <p>	3.  Giving exactly what is required to clear prelims.	</p>
            <p>	4.  Focus on areas which are not provided in regular study material.	</p>
            <p>	5.  Compiled notes from different sources to save your time.	</p>

            <br></br><br></br>
            <h4>Program Benefits</h4>
              <p>	1.  Previous Year Theme analysis.	</p>
              <p>	2.  ⁠Haryana GK and Current Affairs	</p>
              <p>	3.  ⁠Government Schemes	</p>
              <p>	4. ⁠ Science	</p>
              <p>	5.  ⁠History	</p>
              <p>	6. ⁠ Geography & Mapping	</p>
              <p>	7. ⁠ Polity	</p>
              <p>	8. ⁠ National Current Affairs	</p>
              <p>	9. ⁠ Test Series	</p>
              <p>	10. ⁠Personal Guidance	</p>

          </div>
        </Container>
      </section>
    </div>
  );
}
