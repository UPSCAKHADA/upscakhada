
'use client'

import React from 'react';
import Image from "next/image";
import about from "../images/about_us.jpg";
import { Container, Col , Row, Button } from 'react-bootstrap';
import { FaArrowCircleRight } from 'react-icons/fa';


export default function Courses () {
  return (
   <div className='inner_page card_height_auto'>
      <div className="inner_banner">
         <Image src={about} alt="contact_img" className='w-100' />
          <h3>All Courses</h3>
      </div>

   {/* * * * * * * * * * * * * * * * * 
   ** UPSC - block begins          
   ** 
   ** * * * * * * * * * * * * * * ** */}
      <section className="courses_sec">
        <Container>
          <div className="section_title">
            <h1>UPSC Courses</h1>
          </div>

          <Row>
            <Col lg="4" sm="6">
              <div className="course_card">
                <h3>UPSC FOUNDATION COURSE</h3>
                <h1>₹ 40, 000</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />UPSC foundation course. 
                  </li>
                </ul>
                <a href='\coursedetail_upsc1'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="4" sm="6">
              <div className="course_card">
                <h3>ETHICS</h3>
                <h1>₹ 9, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />Complete coverage of the subject.
                  </li>
                </ul>
                <a href='\coursedetail_upsc2'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="4" sm="6">
              <div className="course_card">
                <h3>CURRENT AFFAIRS COURSE</h3>
                <h1>₹ 2, 000</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />COVERAGE – PRELIMS , MAINS & PERSONALITY TEST (INTERVIEW).
                  </li>
                </ul>
                <a href='\coursedetail_upsc3'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
           
          </Row>
        </Container>
      </section>
    {/**UPSC -block ends */}    

    {/* * * * * * * * * * * * * * * * * 
   ** UPSC Mains - block begins          
   ** 
   ** * * * * * * * * * * * * * * ** */}
      <section className="courses_sec bg_light_grey">
        <Container>
          <div className="section_title">
            <h1>UPSC Mains Answer Writing Program</h1>
          </div>

          <Row>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>DAILY ANSWER WRITING PROGRAM (GS)</h3>
                <h1>₹ 14, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />UPSC MAINS DAILY ANSWER WRITING PROGRAM. 
                  </li>
                </ul>
                <a href='\coursedetail_upscmain1'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
           
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>DAILY ANSWER WRITING PROGRAM PAPER 1</h3>
                <h1>₹ 3, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />UPSC Mains daily answer writing program for paper 1.
                  </li>
                </ul>
                <a href='\coursedetail_upscmain3'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>UPSC ESSAY TEST SERIES</h3>
                <h1>₹ 3, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />Test Series for UPSC Mains essay writing. 
                  </li>
                </ul>
                <a href='\coursedetail_upscmain7'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>UPSC MAINS TEST SERIES</h3>
                <h1>₹ 14, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />Test series for UPSC Mains.
                  </li>
                </ul>
                <a href='\coursedetail_upscmain2'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="4" sm="6">
              <div className="course_card">
                <h3>DAILY ANSWER WRITING PROGRAM PAPER 2</h3>
                <h1>₹ 3, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />UPSC Mains daily answer writing program for paper 2. 
                  </li>
                </ul>
                <a href='\coursedetail_upscmain4'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="4" sm="6">
              <div className="course_card">
                <h3>DAILY ANSWER WRITING PROGRAM PAPER 3</h3>
                <h1>₹ 3, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />UPSC Mains daily answer writing program for paper 3. 
                  </li>
                </ul>
                <a href='\coursedetail_upscmain5'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="4" sm="6">
              <div className="course_card">
                <h3>DAILY ANSWER WRITING PROGRAM PAPER 4</h3>
                <h1>₹ 4, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />UPSC Mains daily answer writing program for paper 4. 
                  </li>
                </ul>
                <a href='\coursedetail_upscmain6'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
           

          </Row>
        </Container>
      </section>
    {/**UPSC Mains -block ends */}    

    {/* * * * * * * * * * * * * * * * * 
   ** Optional Mentorship - block begins          
   ** and aswer writing
   ** * * * * * * * * * * * * * * ** */}
      <section className="courses_sec">
        <Container>
          <div className="section_title">
            <h1>Optional Mentorship & Answer Writing Program</h1>
          </div>

          <Row>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>DISHA- Psychology Optional Mentorship</h3>
                <h1>₹ 20, 000</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />Foundation course based on Mentorship model. 
                  </li>
                </ul>
                <a href='\coursedetail_opwriting1'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
           
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>PUBLIC ADMINISTRATION</h3>
                <h1>₹ 10, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />The questions are uploaded daily and analyzed. 
                  </li>
                </ul>
                <a href='\coursedetail_opwriting4'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>PSIR MENTORSHIP & ANSWER WRITING</h3>
                <h1>₹ 12, 000</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />Please click below for details. 
                  </li>
                </ul>
                <a href='\coursedetail_opwriting5'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>SOCIOLOGY</h3>
                <h1>₹ 14, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />Tailored approach as per your level of preparation, on-demand conceptual clarity workshops. 
                  </li>
                </ul>
                <a href='\coursedetail_opwriting6'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="4" sm="6">
              <div className="course_card">
                <h3>ANTHROPOLOGY</h3>
                <h1>₹ 9, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />Answer writing practise and mentorship for Anthropology. 
                  </li>
                </ul>
                <a href='\coursedetail_opwriting7'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="4" sm="6">
              <div className="course_card">
                <h3>PYQ PARISHRAM- Psychology Optional PYQs</h3>
                <h1>₹ 15, 000</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />Previous year question practise and answer writing mentorship.
                  </li>
                </ul>
                <a href='\coursedetail_opwriting2'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="4" sm="6">
              <div className="course_card">
                <h3>PARISHRAM- Psychology Optional Test Series and Answer Writing</h3>
                <h1>₹ 13, 000</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />Answer writing practise and mentorship.
                  </li>
                </ul>
                <a href='\coursedetail_opwriting3'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
    {/**Optional answer writing -block ends */}   

    {/* * * * * * * * * * * * * * * * * 
   **  hcs  - block begins          
   ** 
   ** * * * * * * * * * * * * * * ** */}
      <section className="courses_sec bg_light_grey">
        <Container>
          <div className="section_title">
            <h1>Haryana Civil Services Courses</h1>
          </div>

          <Row>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>HCS FOUNDATION COURSE</h3>
                <h1>₹ 29, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />The course contains comprehensive material for the Haryana civil services students. 
                  </li>
                </ul>
                <a href='\coursedetail_hcs1'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>HCS PRELIMS CRASH COURSE</h3>
                <h1>₹ 4, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />Complete HCS PRELIMS preparation through crash course videos and notes.
                  </li>
                </ul>
                <a href='\coursedetail_hcs2'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>HCS PRELIMS TEST SERIES</h3>
                <h1>₹ 1, 025</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />HCS test series material for Prelims.
                  </li>
                </ul>
                <a href='\coursedetail_hcs3'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>HARYANA SPECIFIC CONTENT</h3>
                <h1>₹ 299</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />Study material for Haryana civil services. 
                  </li>
                </ul>
                <a href='\coursedetail_hcs4'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="4" sm="6">
              <div className="course_card">
                <h3>HCS MAINS DAILY ANSWER WRITING PROGRAM</h3>
                <h1>₹ 8, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />This course presents daily questions that mirror the pattern and standard of the HCS Mains. 
                  </li>
                </ul>
                <a href='\coursedetail_hcs5'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="4" sm="6">
              <div className="course_card">
                <h3>HCS MAINS TEST SERIES</h3>
                <h1>₹ 10, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />Test series material for HCS Mains. 
                  </li>
                </ul>
                <a href='\coursedetail_hcs6'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="4" sm="6">
              <div className="course_card">
                <h3>HINDI & ENGLISH TEST SERIES</h3>
                <h1>₹ 4, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />English and Hindi test series material for HCS Mains. 
                  </li>
                </ul>
                <a href='\coursedetail_hcs7'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
    {/**hcs -block ends */}       

    {/* * * * * * * * * * * * * * * * * 
   **  Subject wise  - block begins          
   **  course Moudule
   ** * * * * * * * * * * * * * * */}
      <section className="courses_sec">
        <Container>
          <div className="section_title">
            <h1>Subject wise Courses</h1>
          </div>

          <Row>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>SCIENCE & TECHNOLOGY</h3>
                <h1>₹ 1, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />The course contains pdf notes of Science & Technology. 
                  </li>
                </ul>
                <a href='\coursedetail_subjectwise1'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>GEOGRAPHY</h3>
                <h1>₹ 3, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />The course contains pdf notes of Geography. 
                  </li>
                </ul>
                <a href='\coursedetail_subjectwise2'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>MAPPING</h3>
                <h1>₹ 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />The course covers the locations, physiographic features and regions in a comprehensive manner. 
                  </li>
                </ul>
                <a href='\coursedetail_subjectwise3'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>ENVIRONMENT</h3>
                <h1>₹ 3, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />Learn environment & ecology in Organized & Simplified manner. 
                  </li>
                </ul>
                <a href='\coursedetail_subjectwise4'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>HISTORY & CULTURE</h3>
                <h1>₹ 2, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />Single Stop solution for History. Notes Complied from diverse sources. 
                  </li>
                </ul>
                <a href='\coursedetail_subjectwise5'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>CSAT PAPER 2</h3>
                <h1>₹ 4, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />The course will cover CSAT Paper 2. 
                  </li>
                </ul>
                <a href='\coursedetail_subjectwise6'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>ECONOMICS</h3>
                <h1>₹ 3, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />This course contains study material for Economics subject. 
                  </li>
                </ul>
                <a href='\coursedetail_subjectwise7'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>POLITY & GS MAINS PAPER 2</h3>
                <h1>₹ 4, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />The course is conducted by an experienced faculty and cover the topics in 
                    holistic and analytical manner. 
                  </li>
                </ul>
                <a href='\coursedetail_subjectwise8'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>INDIAN SOCIETY</h3>
                <h1>₹ 2, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />This course contains study material for subject Indian Society. 
                  </li>
                </ul>
                <a href='\coursedetail_subjectwise9'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>INTERNAL SECURITY</h3>
                <h1>₹ 1, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />This course contains study material for subject Internal Security. 
                  </li>
                </ul>
                <a href='\coursedetail_subjectwise910'> 
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>ETHICS GS PAPER 4</h3>
                <h1>₹ 2, 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />This course contains study material for subject Ethics. 
                  </li>
                </ul>
                <a href='\coursedetail_subjectwise911'>
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>INTERNATIONAL RELATION</h3>
                <h1>₹ 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />This course contains study material for subject International Relation. 
                  </li>
                </ul>
                <a href='\coursedetail_subjectwise912'>
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="3" sm="6">
              <div className="course_card">
                <h3>WORLD HISTORY GS PAPER 1</h3>
                <h1>₹ 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />This course contains study material for subject World History. 
                  </li>
                </ul>
                <a href='\coursedetail_subjectwise913'>
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
    {/**Subject wise -block ends */}     

  {/* * * * * * * * * * * * * * * * * 
   **  Ratamaar -block begins          
   ** 
   ** * * * * * * * * * * * * * * */}
      <section className="courses_sec bg_light_grey">
        <Container>
          <div className="section_title">
            <h1>Rattamaar Courses</h1>
          </div>

          <Row>
            <Col lg="4" sm="6">
              <div className="course_card">
                <h3>RATTAMAAR FOR PRELIMNS - SEASON 1</h3>
                <h1>₹ 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />Includes important topics which comes in almost all government exams. 
                  </li>
                </ul>
                <a href='\coursedetail_Ratamaar1'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="4" sm="6">
              <div className="course_card">
                <h3>RATTAMAAR FOR MAINS - SEASON 2</h3>
                <h1>₹ 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />Includes important topics which helps the students in Mains exams. 
                  </li>
                </ul>
                <a href='/coursedetail_Ratamaar2'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="4" sm="6">
              <div className="course_card">
                <h3>RATTAMAAR FOR PRELIMNS - SEASON 3</h3>
                <h1>₹ 499</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />Includes important topics which comes in almost all government exams. 
                  </li>
                </ul>
                <a href='\coursedetail_Ratamaar3'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            
          </Row>
        </Container>
      </section>
    {/**Ratamaar -block ends */}        

  {/* * * * * * * * * * * * * * * * * 
   **  UPPCS -block begins          
   ** 
   ** * * * * * * * * * * * * * * */}
      <section className="courses_sec">
        <Container>
          <div className="section_title">
            <h1>UTTAR PARDESH PCS COURSES</h1>
          </div>

          <Row>
            <Col lg="4" sm="6">
              <div className="course_card">
                <h3>UPPCS PRELIMS CRASH COURSE</h3>
                <h1>₹ 4,999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />Customized study materials for specific needs of UTTAR PRADESH PCS aspirants.
                  </li>
                </ul>
                <a href='\coursedetail_uppcs1'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="4" sm="6">
              <div className="course_card">
                <h3>UPPCS 2024 PRELIMS TEST SERIES</h3>
                <h1>₹ 999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />This course contains static as well as current affairs study material relevant to UPPCS prelims.
                  </li>
                </ul>
                <a href='/coursedetail_uppcs2'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="4" sm="6">
              <div className="course_card">
                <h3>UPPSC STUDY MATERIAL PROGRAM </h3>
                <h1>₹ 1,999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />This course contains prelims tests & solution as well as pdf notes.
                  </li>
                </ul>
                <a href='/coursedetail_uppcs3'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
            <Col lg="4" sm="6">
              <div className="course_card">
                <h3>UTTAR PRADESH SPECIFIC CURRENT AFFAIRS & GK</h3>
                <h1>₹ 99</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />This will include coverage of relevant current affairs of past one year with special focus on events from Uttar Pradesh. 
                  </li>
                </ul>
                <a href='/coursedetail_uppcs4'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>
          
          <Col lg="4" sm="6">
              <div className="course_card">
                <h3>UPPCS MAINS TEST SERIES & ANSWER WRITING PROGRAM</h3>
                <h1>₹ 9,999</h1>
                <ul>
                  <li>
                    <FaArrowCircleRight />This program offers sectional as well as full length mains tests study material.
                  </li>
                </ul>
                <a href='/coursedetail_uppcs5'>  
                  <Button type="button" className="solid_btn"> Details </Button>
                  </a>
              </div>
            </Col>          
          </Row>
        </Container>
      </section>
    {/**UPPCS -block ends */}
   </div>
  )
}
