import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import Footer from './Footer';

// Home

const About = styled.h3`
  color: brown;
  margin-left: 40%;
`;
const Descrip = styled.p`
  margin-left: 10%;
  margin-right: 10%;
  color: white;
`;
const CarouselPage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src="https://thumbs.dreamstime.com/b/generic-high-school-building-facade-red-brick-american-bright-summer-day-77419843.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://internationalteacherstraining.com/blog/wp-content/uploads/2017/09/19.03.2020-7-Critical-Characteristics-of-a-Classroom-Manager-1200x675-cropped.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="About us bg-dark ">
        <About>What We Do </About>
        <Descrip>
          Empower children in underserved communities to achieve their full
          potential through quality education. Focus on children in rural areas
          by providing quality education to inspire minds and improve lives.
          Provide access to educational facilities and learning resources. As a
          support organisation, we act from a rights-based approach to education
          to help children realise their right to education by eliminating
          obstacles they face. Work to increase literacy rates and set the
          foundation for a productive and self-determined life.
        </Descrip>
      </div>

      <Footer />
    </div>
  );
};

export default CarouselPage;
