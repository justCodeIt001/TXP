import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Icons
import Icon from '@mdi/react';
import { mdiFacebook, mdiInstagram } from '@mdi/js';

// Data
// import { ReactComponent as QR } from '../img/kodqr.svg';
import QR from '../img/kodqr.png';
import Google from '../img/googleplay.png';
import App from '../img/appstore.png';

function Footer() {
    return (
        <>
            <footer className='bg-dark position-relative zindex-2'>
                <Container>
                    <div className='py-5 py-lg-7'>
                        <Row className='gy-5'>
                            <Col lg={{ span: 3, offset: 1 }} className='text-center text-lg-start'>
                                <h4 className='h5 text-white mb-4'>Informacje</h4>
                                <ul className='list-unstyled mb-4 mb-lg-5'>
                                    <li className='mb-3'>
                                        <a href='https://atos.jns.pl/client/atos/regulations/client/txp' className='link-gray-100 text-lg text-decoration-none' rel='nofollow' title='Przeczytaj regulamin'>Regulamin</a>
                                    </li>
                                    <li>
                                        <a href='https://atos.jns.pl/client/atos/privacy/client/txp' className='link-gray-100 text-lg text-decoration-none' rel='nofollow' title='Przeczytaj politykę prywatności'>Polityka Prywatności</a>
                                    </li>
                                </ul>
                                <h4 className='h5 text-white mb-4'>Social Media</h4>
                                <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 mb-4 mb-lg-5">
                                    <a href="#" className='link-gray-100' title='Odwiedź nasz profil na Facebook'>
                                        <Icon path={mdiFacebook} size={1.75} />
                                    </a>
                                    <a href="#" className='link-gray-100' title='Odwiedź nasz profil na Facebook'>
                                        <Icon path={mdiInstagram} size={1.75} />
                                    </a>
                                </div>
                            </Col>
                            <Col lg={{ span: 3, offset: 1 }} className='text-center text-lg-start'>
                                <div className="mb-4">
                                    <a href="https://play.google.com/store/apps/details?id=pl.jns.atosclienttxp" target='_blank'>
                                        <img src={Google} alt="" />
                                    </a>
                                </div>
                                <div className="qr">
                                    <img src={QR} alt="Kod QR" />
                                </div>
                            </Col>
                            <Col lg={{ span: 3, offset: 1 }} className='text-center text-lg-start'>
                                <div className="mb-4">
                                    <a href="https://apps.apple.com/pl/app/txp/id6451997170" target='_blank'>
                                        <img src={App} alt="" />
                                    </a>
                                </div>
                                <div className="qr">
                                    <img src={QR} alt="Kod QR" />
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