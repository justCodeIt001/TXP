import React from 'react';

// Components
import { Container, Row, Col, Button } from 'react-bootstrap';
import TXPKlient from '../img/txp-klient.png';
import { ReactComponent as Logo } from '../img/logo.svg';

function Home() {
    return (
        <>
            <div className='position-relative zindex-2 top-section'>
                <Container>
                    <Row className='align-items-lg-center gy-6'>
                        <Col lg={{ span: 5, offset: 1 }}>
                            <div className='text-center text-lg-start'>
                                <div className='logo mb-4'>
                                    <Logo />
                                </div>
                                <h1 className='mb-3'><span className='d-none'>TXP</span>Przewozy na aplikację</h1>
                                <h2 className='h3 mb-4 mb-lg-5'>Wiesz za Ile Jedziesz</h2>
                                <p className='text-base-mobile text-lg'>Nasza aplikacja umożliwia zmawianie przewozów TAXI i doraźnych kursów na terenie Państwa powiatu.</p>
                                <p className='text-base-mobile text-lg'>Poprzez system rozpoznawania umożliwia ona zamawianie kursów zarówno przez telefon jak i aplikację z wizualizacją gwarantowanej ceny.</p>
                                <p className='text-base-mobile text-lg'>Aplikacja zapewnia podawanie czasu dojazdu do Klienta i lokalizacji kierowcy na mapie.</p>
                                <p className='text-base-mobile text-lg mb-4 mb-lg-5'>Istnieje możliwość płatności kartą , gotówką i BLIK - bezpośrednie bezpieczeństwo transakcji zapewnia Przelewy24.pl.</p>
                                <div className='d-flex flex-column flex-md-row align-items-center gap-3'>
                                    <Button href='/informacje-dla-klienta' variant='dark' className='btn-mobile-100'>Informacje dla klienta</Button>
                                    <Button href='/informacje-dla-kierowcy' variant='light' className='btn-mobile-100'>Informacje dla kierowców</Button>
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
        </>
    )
}
export default Home;