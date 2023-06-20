import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

// Icons
import Icon from '@mdi/react';
import { mdiCheckBold, mdiArrowRightThin } from '@mdi/js';

// Data
import TXPDriver from '../img/txp-kierowca.png';
import Doc from '../docs/formularz-kierowcy.docx';

function OfferDriver() {
    return (
        <>
            <div className='position-relative zindex-2 top-section'>
                <Container>
                    <Row className='align-items-lg-center gy-6'>
                        <Col lg={{ span: 5, offset: 1 }}>
                            <div>
                                <h1 className='mb-4 mb-lg-5'>Dołącz do naszych kierowców!</h1>
                                <ul className='list-unstyled mb-4 mb-lg-5'>
                                    <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                        <span className="d-flex icon-check me-3">
                                            <Icon path={mdiCheckBold} size={1} />
                                        </span>
                                        <strong>Elastyczne godziny pracy</strong>
                                    </li>
                                    <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                        <span className="d-flex icon-check me-3">
                                            <Icon path={mdiCheckBold} size={1} />
                                        </span>
                                        <strong>Operowanie w różnych strefach przewozowych</strong>
                                    </li>
                                    <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                        <span className="d-flex icon-check me-3">
                                            <Icon path={mdiCheckBold} size={1} />
                                        </span>
                                        <strong>Pełna obsługa i ewidencja zleceń</strong>
                                    </li>
                                    <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                        <span className="d-flex icon-check me-3">
                                            <Icon path={mdiCheckBold} size={1} />
                                        </span>
                                        <strong>Nawigacja kursu na mapie online</strong>
                                    </li>
                                    <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                        <span className="d-flex icon-check me-3">
                                            <Icon path={mdiCheckBold} size={1} />
                                        </span>
                                        <strong>Obsługa połączeń z klientem (SMS, telefon)</strong>
                                    </li>
                                    <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                        <span className="d-flex icon-check me-3">
                                            <Icon path={mdiCheckBold} size={1} />
                                        </span>
                                        <strong>Możliwość poboru opłat kartą, gotówką, Przelewy24 lub BLIK</strong>
                                    </li>
                                    <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                        <span className="d-flex icon-check me-3">
                                            <Icon path={mdiCheckBold} size={1} />
                                        </span>
                                        <strong>Automatyczne raporty rozliczeń</strong>
                                    </li>
                                    <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                        <span className="d-flex icon-check me-3">
                                            <Icon path={mdiCheckBold} size={1} />
                                        </span>
                                        <strong>Prosty i przyjazny interfejs</strong>
                                    </li>
                                </ul>
                                <div className="d-flex">
                                    <Button href={Doc} variant='dark' className='btn-mobile-100 d-flex align-items-center' target='_blank'>
                                        Pobierz formularz zgłoszeniowy
                                        <span className="d-flex ms-2">
                                            <Icon path={mdiArrowRightThin} size={1} />
                                        </span>    
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={{ span: 4, offset: 2 }}>
                            <div className='text-center'>
                                <img src={TXPDriver} width={323} height={600} loading='lazy' alt='TXP Aplikacja Klient' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default OfferDriver;