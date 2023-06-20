import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Icons
import Icon from '@mdi/react';
import { mdiFacebook, mdiInstagram } from '@mdi/js';

// Data
import { ReactComponent as QR } from '../img/kodqr.svg';

function Footer() {
    return (
        <>
            <footer className='bg-dark position-relative zindex-2'>
                <Container>
                    <div className='py-5 py-lg-7'>
                        <Row className='gy-5'>
                            <Col lg={4} className='text-center text-lg-start'>
                                <h4 className='h5 text-white mb-4 mb-lg-5'>Informacje</h4>
                                <p className='text-light text-mobile-small text-base'>Aplikacja zapewnia podawanie czasu dojazdu do Klienta i lokalizacji kierowcy na mapie.</p>
                                <p className='text-light text-mobile-small text-base mb-0'>Istnieje możliwość płatności kartą , gotówką i BLIK - bezpośrednie bezpieczeństwo transakcji zapewnia Przelewy24.pl.</p>
                            </Col>
                            <Col lg={{ span: 3, offset: 1 }} className='text-center text-lg-start'>
                                <h4 className='h5 text-white mb-4 mb-lg-5'>Social Media</h4>
                                <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3">
                                    <a href="#" className='link-gray-100' title='Odwiedź nasz profil na Facebook'>
                                        <Icon path={mdiFacebook} size={1.75} />
                                    </a>
                                    <a href="#" className='link-gray-100' title='Odwiedź nasz profil na Facebook'>
                                        <Icon path={mdiInstagram} size={1.75} />
                                    </a>
                                </div>
                            </Col>
                            <Col lg={{ span: 3, offset: 1 }} className='text-center text-lg-start'>
                                <h4 className='h5 text-white mb-4 mb-lg-5'>Sprawdź naszą aplikację</h4>
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
  
export default Footer;