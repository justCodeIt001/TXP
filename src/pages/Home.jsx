import React from 'react';

// Components
import { Container, Row, Col, Button } from 'react-bootstrap';
import TXPKlient from '../img/txp-klient.png';
import Logo from '../img/logo-new.png';

import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <div className='py-5'>
                <div className='position-relative zindex-2 top-section pt-3 pt-lg-5'>
                    <Container>
                        <Row className='align-items-lg-center gy-6'>
                            <Col lg={{ span: 5, offset: 1 }}>
                                <div className='text-center text-lg-start'>
                                    <div className='logo mb-4'>
                                        <img src={Logo} alt="" />
                                    </div>
                                    <div className="text-center">
                                        <h2 className='h3 mb-4 mb-lg-5'>Wiesz za ile jedziesz</h2>
                                        <p className='text-base-mobile text-lg'>Nasza aplikacja umożliwia zmawianie przewozów TAXI i doraźnych kursów na terenie Państwa powiatu.</p>
                                        <p className='text-base-mobile text-lg'>Poprzez system rozpoznawania umożliwia ona zamawianie kursów zarówno przez telefon jak i aplikację z wizualizacją gwarantowanej ceny.</p>
                                        <p className='text-base-mobile text-lg'>Aplikacja zapewnia podawanie czasu dojazdu do Klienta i lokalizacji kierowcy na mapie.</p>
                                        <p className='text-base-mobile text-lg mb-4 mb-lg-5'>Istnieje możliwość płatności kartą , gotówką i BLIK - bezpośrednie bezpieczeństwo transakcji zapewnia serwis Przelewy24.pl.</p>
                                        <div className='d-flex flex-column flex-md-row align-items-center justify-content-center gap-3'>
                                            <Button href='/informacje-dla-klienta' variant='dark' className='btn-mobile-100 shadow'>Informacje dla klienta</Button>
                                            <Button href='/informacje-dla-kierowcy' variant='light' className='btn-mobile-100 shadow'>Informacje dla kierowców</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={{ span: 4, offset: 2 }}>
                                <div className='text-center'>
                                    <img src={TXPKlient} width={323} height={600} loading='lazy' alt='TXP Aplikacja Klient' />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home;