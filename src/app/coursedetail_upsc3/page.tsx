"use client";

import React from "react";
import Image from "next/image";
import inner from "../images/upsc/course3.jpg";

import { Button, Container } from "react-bootstrap";

export default function Details() {
  return (
    <div className="inner_page">
      <div className="solid_bg">
        <h3>Current Affairs Course</h3>
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
                  <h4><strong>PRICE</strong> - ₹ 2,000/-</h4>
                  <h4><strong>VALIDITY </strong> - 1 YEARS</h4>
                  <a href="https://mgxpi.courses.store/360478?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp" target="_blank">
                    <Button type="button" className="solid_btn">Enroll now</Button>
                  </a>
                </div>
              </div>
            </div>
          <div className="inner_content">
            <h4> About the Programme</h4>
            <p>	Current affairs are connected with static topics to cover the topic holistically. Hence, this course covers the current 
              affairs as per the current requirements of the exam.	</p>

            <h4>Features</h4>
            <p>	1.     360-Degree Coverage: Dive deep into the world of current affairs with extensive coverage that includes both forward and backward linkages.	</p>
            <p>	2.     Detailed Event Analysis: Understand the 'why' and 'how' behind each event, helping you grasp the broader implications for the UPSC syllabus.	</p>
            <p>	3.     Customized Notes: Get access to well-researched and up-to-date notes, tailored to streamline your preparation process.	</p>
            <p>	4.     Regular MCQ Practice: Hone your skills with regular MCQ practice sessions that are closely aligned with the UPSC pattern.	</p>
            <p>	5.     In-Depth Coverage of Current Affairs: We cover national and international events, economic developments, environmental issues, science and technology advancements, and more.	</p>
            <p>	6.     Backward and Forward Linkages: Understand how current events connect with historical contexts and future implications, making your preparation comprehensive.	</p>
            <p>	7.     Expert Analysis: Our team of experts breaks down complex events into simple, understandable formats, aiding in quicker learning and retention.	</p>
            <p>	8.     Custom-Designed Notes: Receive concise and precise notes, saving you the hassle of compiling information from multiple sources.	</p>
            <p>	9.     Special Focus on Prelims: Specialized tests for Prelims General Studies to build your confidence and improve your test-taking strategy.	</p>
            <p>	10.    Doubt Clearance and Mentorship: Our mentors provide individual attention to resolve doubts and offer guidance tailored to your needs.	</p>
            <p>	11.    Flexible Learning Options: Choose from our online or offline batches as per your convenience.	</p>

          </div>
        </Container>
      </section>
    </div>
  );
}
