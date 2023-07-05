import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Icons
import Icon from '@mdi/react';
import { mdiFacebook, mdiInstagram } from '@mdi/js';

// Data
import { ReactComponent as QR } from '../img/kodqr.svg';
import Google from '../img/googleplay.png';
import Banner from '../img/banner.jpg';
import App from '../img/appstore.png';

function FooterDriver() {
    return (
        <>
            <footer className='bg-dark position-relative zindex-2'>
                <Container>
                    <div className='py-5 py-lg-7'>
                        <Row className='gy-5'>
                            <Col lg={{ span: 7, offset: 1}} className='text-center text-lg-start'>
                                <img src={Banner} alt="" />
                            </Col>
                            <Col lg={{ span: 3, offset: 1 }} className='text-center text-lg-start'>
                                <div className="mb-4">
                                    <a href="https://atos.jns.pl/atos_1.0.56.apk" className='d-block mb-3' target='_blank'>
                                        <img src={Google} alt="" />
                                    </a>
                                    <span className='small text-white'>Aplikacja dla Kierowców dostępna tylko w wersji na  systemie Android.</span>
                                </div>
                                <div className="qr">
                                    <QR />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <div className="bg-dark-200">
                    <Container>
                        <div className='text-center text-xs py-2'>
                            <span className='gray-200'>Realizajcja:</span> <a href='https://kodemaster.pl' className='link-gray-200' rel='nofollow' title='Realizacja Kodemaster.pl'>KODEMASTER.PL</a>
                        </div>
                    </Container>
                </div>
            </footer>
        </>
    );
}
  
export default FooterDriver;