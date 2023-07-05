import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

// Icons
import Icon from '@mdi/react';
import { mdiCheckBold, mdiArrowRightThin } from '@mdi/js';

// Data
import TXPDriver from '../img/txp-kierowca.png';
import Doc from '../docs/formularz-kierowcy.pdf';
import Logo from '../img/logo-new.png';
// import Sublogo from '../img/przewozy_tekst.png';

import FooterDriver from '../components/FooterDriver';

function OfferDriver() {
    return (
        <>
            <div className='py-5'>
                <div className='position-relative zindex-2 top-section pt-3 pt-lg-5'>
                    <Container>
                        <Row className='gy-6'>
                            <Col lg={{ span: 5, offset: 1 }}>
                                <div>
                                    <div className='logo mb-4'>
                                        <img src={Logo} alt="" />
                                    </div>
                                    <h1 className='h2 mb-4 mb-lg-5'>Twój przewoźnik powiatowy</h1>
                                    <ul className='list-unstyled mb-4 mb-lg-5'>
                                        <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                            <span className='d-flex icon-check me-3'>
                                                <Icon path={mdiCheckBold} size={1} />
                                            </span>
                                            <strong>Elastyczne godziny pracy</strong>
                                        </li>
                                        <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                            <span className='d-flex icon-check me-3'>
                                                <Icon path={mdiCheckBold} size={1} />
                                            </span>
                                            <strong>Pozyskanie licencji przewozowej</strong>
                                        </li>
                                        <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                            <span className='d-flex icon-check me-3'>
                                                <Icon path={mdiCheckBold} size={1} />
                                            </span>
                                            <strong>Operowanie w różnych strefach przewozowych</strong>
                                        </li>
                                        <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                            <span className='d-flex icon-check me-3'>
                                                <Icon path={mdiCheckBold} size={1} />
                                            </span>
                                            <strong>Pełna obsługa i ewidencja zleceń</strong>
                                        </li>
                                        <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                            <span className='d-flex icon-check me-3'>
                                                <Icon path={mdiCheckBold} size={1} />
                                            </span>
                                            <strong>Nawigacja kursu na mapie on line</strong>
                                        </li>
                                        <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                            <span className='d-flex icon-check me-3'>
                                                <Icon path={mdiCheckBold} size={1} />
                                            </span>
                                            <strong>Obsługa połączeń z klientem (SMS, telefon)</strong>
                                        </li>
                                        <li className='d-flex align-items-center text-mobile-base text-lg mb-3'>
                                            <span className='d-flex icon-check me-3'>
                                                <Icon path={mdiCheckBold} size={1} />
                                            </span>
                                            <strong>Automatyczne raporty rozliczeń</strong>
                                        </li>
                                        <li className='d-flex align-items-center text-mobile-base text-lg'>
                                            <span className='d-flex icon-check me-3'>
                                                <Icon path={mdiCheckBold} size={1} />
                                            </span>
                                            <strong>Prosty i przyjazny interfejs</strong>
                                        </li>
                                    </ul>
                                    <h2 className='h2 mb-4 mb-lg-5'>TXP – zostań naszym kierowcą!</h2>
                                    <h2 className='h3 mb-4 mb-lg-5'>Zalety Systemu TXP</h2>
                                    <ul className="text-mobile-base text-lg mb-4 mb-lg-5">
                                        <li>Łatwe zarządzanie systemem poprzez dedykowany panel dostępny z przeglądarki internetowej: zarządzanie kierowcami, przegląd raportów zleceń bieżących oraz archiwalnych</li>
                                        <li>Zapewnienie najwyższej jakości obsługi klienta rejestrowanie wszystkich połączeń / elektroniczny rejestr zleceń zgodny z ustawą</li>
                                        <li>Kasa Fiskalna i Taksometr w aplikacji kierowcy</li>
                                        <li>Eliminacja łączności radiowej między taksówkami wykorzystanie nowoczesnych i bardziej wydajnych rozwiązań.</li>
                                        <li>Kierowca decyduje o przyjmowaniu połączeń samodzielnie loguje i wylogowuje się do systemu</li>
                                        <li>Brak konieczności zatrudniania dyspozytora system automatycznie przekazuje połączenia do kierowców, co eliminuje błędy.</li>
                                        <li>Jasny i przejrzysty system rozliczania z przyjętych zleceń.</li>
                                        <li>Wysoki poziom bezpieczeństwa w ramach systemu dostępny jest system zdalnego monitoringu</li>
                                        <li>Zabezpieczenie numeru klienta przy połączeniu z kierowcą, aplikacja wyświetla numer korporacyjny w trakcie rozmowy (opcja)</li>
                                    </ul>
                                    <div className="d-flex mb-4 mb-lg-5">
                                        <Button href={Doc} variant='dark' className='btn-mobile-100 d-flex align-items-center justify-content-center' target='_blank'>
                                            Pobierz formularz zgłoszeniowy
                                            <span className="d-flex ms-2">
                                                <Icon path={mdiArrowRightThin} size={1} />
                                            </span>    
                                        </Button>
                                    </div>
                                    <h2 className='h3 mb-4 mb-lg-5'>Kierowca – rozpoczęcie pracy</h2>
                                    <ol className="text-mobile-base text-lg mb-4 mb-lg-5">
                                        <li>Kierowca  loguje się do pracy poprzez mobilną aplikację na smartfonie.</li>
                                        <li>Kierowca może zalogować się do wybranych stref miasta.</li>
                                        <li>Kierowca ma wgląd do lokalizacji innych kierowców na mapie miasta w aplikacji mobilnej.</li>
                                        <li>System ustawia kierowcę w kolejce kierowców w wybranych strefach.</li>
                                    </ol>
                                    <h2 className='h3 mb-4 mb-lg-5'>Kierowca – elektroniczna ewidencja zleceń</h2>
                                    <div className='text-mobile-base text-lg mb-4 mb-lg-5'>
                                        <p>Elektroniczna Ewidencja Zleceń dla kierowcy jest dostępna w systemie dla wszystkich kierowców oraz Administratora.</p>
                                        <p className='mb-0'>Elektroniczna Ewidencja Zleceń zawiera pełne dane zgodne z wymogami ustawy</p>
                                    </div>
                                    <h2 className='h3 mb-4 mb-lg-5'>Strefy przewozowe</h2>
                                    <p className='text-mobile-base text-lg mb-4 mb-lg-5'>Nasz System może obsługiwać wiele stref przewozowych. Wystarczy do tego jedynie aplikacja na telefony z systemem operacyjnym Android. Wszystkie połączenia są wtedy przekazywane na strefę Centrum do kolejki kierowców. Decyzję o przekazaniu zlecenia na inną strefę podejmuje kierowca, do którego zlecenie trafiło jako pierwsze.</p>
                                    <h2 className='h3 mb-4 mb-lg-5'>Telefonia VOIP</h2>
                                    <p className='text-mobile-base text-lg mb-4 mb-lg-5'>Połączenia przychodzące od Klientów są automatycznie przekazywane do Kierowcy za pomocą linii telefonicznej VoIP. Rozwiązanie takie umożliwia przekazywanie do wielu kierowców nieskończenie wiele połączeń od klientów w tym samym czasie, przez co żaden z dzwoniących klientów nie czeka na połączenie z wolnym  Kierowcą.</p>
                                    <h2 className='h3 mb-4 mb-lg-5'>Numery telefoniczne dla klienta – dostępne bez limitu połączeń</h2>
                                    <p className='text-mobile-base text-lg mb-4 mb-lg-5'>Połączenia do systemu mogą być przyjmowane na dedykowanym numerze dla klienta udostępnionym do systemu lub na dotychczasowe numery korporacji bez limitu jednoczesnych połączeń. Jeżeli posiadasz już numer dla klienta, to taki numer kieruje połączenia do systemu   poprzez przekierowanie połączeń z niego na numer podkładowy w systemie  . Rozwiązanie takie znosi limit na ilość połączeń w tym samym czasie funkcjonujący, jeżeli połączenia odbiera operator w dyspozytorni.</p>
                                    <h2 className='h3 mb-4 mb-lg-5'> Centrala telefoniczna</h2>
                                    <p className='text-mobile-base text-lg mb-4 mb-lg-5'>System TXP przy współpracy z centralą telefoniczną, umożliwia odbieranie połączeń bezpośrednio przez kierowcę. Kierowca odbierający zamówienie jest wybierany na podstawie kolejności zgłoszenia gotowości do odebrania połączenia oraz miejsca w jakim się znajduje. Po odebraniu zgłoszenia zostanie następnie automatycznie ustawiony na końcu kolejki. Kierowca dokonuje autoryzacji dzięki numerowi swojego telefonu komórkowego.</p>
                                    <h2 className='h3 mb-4 mb-lg-5'>System rozpoznawania mowy przy przyjmowaniu zlecenia</h2>
                                    <p className='text-mobile-base text-lg mb-0'>Nowoczesne rozwiązania systemu   pozwalają na przyjmowanie zgłoszeń od klientów w rozmowie telefonicznej pomiędzy klientem, a systemem rozpoznawania mowy, który ustala z klientem adres zamówienia. Na podstawie uzyskanych danych system wysyła na aplikację kierowcy zlecenie do realizacji. W ramach takiego zlecenia kierowca zawsze ma możliwość podjęcia bezpośredniego kontaktu z klientem.</p>
                                </div>
                            </Col>
                            <Col lg={{ span: 4, offset: 2 }}>
                                <div className="h-100">
                                    <div className='text-center position-sticky'>
                                        <img src={TXPDriver} width={323} height={600} loading='lazy' alt='TXP Aplikacja Klient' />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <FooterDriver />
        </>
    )
}
export default OfferDriver;