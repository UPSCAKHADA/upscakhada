
'use client'

import React from 'react';
import Image from "next/image";
import inner from "../images/blogs_banner.jpg";
import img from "../images/blog_img.jpg";
import img1 from "../images/blog_img1.jpg";
import { Container , Row, Col} from 'react-bootstrap';
import { FaLongArrowAltRight, FaRegCalendarAlt, FaUserAlt } from 'react-icons/fa';

export default function Blogs () {
  return (
   <div className='inner_page'>
      <div className="inner_banner">
         <Image src={inner} alt="banner_img" className='w-100' />
          <h3>Blogs</h3>
      </div>

    <section className='inner_pages_Section'>
      <Container>
        <div className='section_title'>
          <h1>Blogs</h1>
        </div>

        <Row>
          <Col lg={3}>
            <div className='blog_card'>
               <Image src={img} alt="blog_img" className='w-100' />

               <div className='blog_info'>
               <div className='person_info'>
                 <span> <FaUserAlt/> Harry Lotham</span>  <span><FaRegCalendarAlt/> 28 Oct 2023 </span>
               </div>
                <h4>Importance of Current Affairs in UPSC: Daily News</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                <a href='/blogdetail'>Read more <FaLongArrowAltRight/> </a>
               </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className='blog_card'>
               <Image src={img1} alt="blog_img" className='w-100' />

               <div className='blog_info'>
               <div className='person_info'>
                 <span> <FaUserAlt/> Harry Lotham</span>  <span><FaRegCalendarAlt/> 28 Oct 2023 </span>
               </div>
                <h4>Best Strategies to prepare for UPSC CSE 2024 </h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                <a href='/blogdetail'>Read more <FaLongArrowAltRight/> </a>
               </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className='blog_card'>
               <Image src={img} alt="blog_img" className='w-100' />

               <div className='blog_info'>
               <div className='person_info'>
                 <span> <FaUserAlt/> Harry Lotham</span>  <span><FaRegCalendarAlt/> 28 Oct 2023 </span>
               </div>
                <h4>Challenges Faced by UPSC Aspirants</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                <a href='/blogdetail'>Read more <FaLongArrowAltRight/> </a>
               </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className='blog_card'>
               <Image src={img1} alt="blog_img" className='w-100' />

               <div className='blog_info'>
               <div className='person_info'>
                 <span> <FaUserAlt/> Harry Lotham</span>  <span><FaRegCalendarAlt/> 28 Oct 2023 </span>
               </div>
                <h4>Evolution of UPSC Coaching Centers: Trends and Innovations</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                <a href='/blogdetail'>Read more <FaLongArrowAltRight/> </a>
               </div>
            </div>
          </Col>

          <Col lg={3}>
            <div className='blog_card'>
               <Image src={img} alt="blog_img" className='w-100' />

               <div className='blog_info'>
               <div className='person_info'>
                 <span> <FaUserAlt/> Harry Lotham</span>  <span><FaRegCalendarAlt/> 28 Oct 2023 </span>
               </div>
                <h4>Importance of Current Affairs in UPSC: Daily News</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                <a href='/'>Read more <FaLongArrowAltRight/> </a>
               </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className='blog_card'>
               <Image src={img1} alt="blog_img" className='w-100' />

               <div className='blog_info'>
               <div className='person_info'>
                 <span> <FaUserAlt/> Harry Lotham</span>  <span><FaRegCalendarAlt/> 28 Oct 2023 </span>
               </div>
                <h4>Best Strategies to prepare for UPSC CSE 2024 </h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                <a href='/blogdetail'>Read more <FaLongArrowAltRight/> </a>
               </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className='blog_card'>
               <Image src={img} alt="blog_img" className='w-100' />

               <div className='blog_info'>
               <div className='person_info'>
                 <span> <FaUserAlt/> Harry Lotham</span>  <span><FaRegCalendarAlt/> 28 Oct 2023 </span>
               </div>
                <h4>Challenges Faced by UPSC Aspirants</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                <a href='/blogdetail'>Read more <FaLongArrowAltRight/> </a>
               </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className='blog_card'>
               <Image src={img1} alt="blog_img" className='w-100' />

               <div className='blog_info'>
               <div className='person_info'>
                 <span> <FaUserAlt/> Harry Lotham</span>  <span><FaRegCalendarAlt/> 28 Oct 2023 </span>
               </div>
                <h4>Evolution of UPSC Coaching Centers: Trends and Innovations</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                <a href='/blogdetail'>Read more <FaLongArrowAltRight/> </a>
               </div>
            </div>
          </Col>

        </Row>
        
      </Container>
    </section>

   </div>
  )
}
