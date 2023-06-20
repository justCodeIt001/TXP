import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

// Icons
import Icon from '@mdi/react';
import { mdiCheckBold, mdiArrowRightThin } from '@mdi/js';

// Data
import TXPClient from '../img/txp-klient.png';

// Components

function OfferIndvidual() {
    return (
        <>
            <div className='position-relative zindex-2 top-section'>
                <Container>
                    <Row className='align-items-lg-center gy-6'>
                        <Col lg={{ span: 5, offset: 1 }}>
                            <div>
                                <h1 className='mb-4 mb-lg-5'>Skorzystaj z Naszej Aplikacji</h1>
                                <ul className='list-unstyled mb-4 mb-lg-5'>
                                    <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                        <span className="d-flex icon-check me-3">
                                            <Icon path={mdiCheckBold} size={1} />
                                        </span>
                                        <strong>Zamawianie przez aplikację i telefon</strong>
                                    </li>
                                    <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                        <span className="d-flex icon-check me-3">
                                            <Icon path={mdiCheckBold} size={1} />
                                        </span>
                                        <strong>Wizualizacja ceny przed zakupem kursu</strong>
                                    </li>
                                    <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                        <span className="d-flex icon-check me-3">
                                            <Icon path={mdiCheckBold} size={1} />
                                        </span>
                                        <strong>Śledzenie trasy dojazdu kierowcy na mapie</strong>
                                    </li>
                                    <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                        <span className="d-flex icon-check me-3">
                                            <Icon path={mdiCheckBold} size={1} />
                                        </span>
                                        <strong>Kontakt z kierowcą realizującym kurs z poziomu aplikacji</strong>
                                    </li>
                                    <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                        <span className="d-flex icon-check me-3">
                                            <Icon path={mdiCheckBold} size={1} />
                                        </span>
                                        <strong>Podany status i czas dojazdu kierowcy</strong>
                                    </li>
                                    <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                        <span className="d-flex icon-check me-3">
                                            <Icon path={mdiCheckBold} size={1} />
                                        </span>
                                        <strong>Możliwość płatności kartą, gotówką, Przelewy24 lub BLIK</strong>
                                    </li>
                                    <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                        <span className="d-flex icon-check me-3">
                                            <Icon path={mdiCheckBold} size={1} />
                                        </span>
                                        <strong>Międzynarodowa wersja aplikacji</strong>
                                    </li>
                                </ul>
                                <div className="d-flex">
                                    <Button href='#' variant='dark' className='btn-mobile-100 d-flex align-items-center justify-content-center'>
                                        Zobacz w Google Apps
                                        <span className="d-flex ms-2">
                                            <Icon path={mdiArrowRightThin} size={1} />
                                        </span>    
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={{ span: 4, offset: 2 }}>
                            <div className='text-center'>
                                <img src={TXPClient} width={323} height={600} loading='lazy' alt='TXP Aplikacja Klient' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default OfferIndvidual;