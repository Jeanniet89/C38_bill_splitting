import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import UserBenefits from '../components/UserBenefits';
import UserSteps from '../components/UserSteps';
import HomeCarousel from '../components/HomeCarousel';

// LANDING PAGE

const LandingPage = () => {
  return (
    <>
      <Navigation />

      <div>
        <Jumbotron>
          <div className="homepage">
            <h1>Splitting a bill has never been easier.</h1>
            <p>
              Scan the QR Code on your receipt, select your ordered items and
              pay!
            </p>
            <p>
              <>
                <Link to="/billpage">
                  <Button id="button" variant="primary" size="lg" block>
                    Split your bill
                  </Button>
                </Link>
              </>
            </p>
          </div>
        </Jumbotron>
        <Footer />
        <UserBenefits />
        <UserSteps />
        <HomeCarousel />
      </div>
    </>
  );
};

export default LandingPage;