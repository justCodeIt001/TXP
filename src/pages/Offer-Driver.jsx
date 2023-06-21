import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

// Icons
import Icon from '@mdi/react';
import { mdiArrowRightThin } from '@mdi/js';

// Data
import TXPDriver from '../img/txp-kierowca.png';
import Doc from '../docs/formularz-kierowcy.pdf';

function OfferDriver() {
    return (
        <>
            <div className='position-relative zindex-2 top-section pt-lg-6'>
                <Container>
                    <Row className='gy-6'>
                        <Col lg={{ span: 5, offset: 1 }}>
                            <div>
                                <h1 className='mb-4 mb-lg-5'>Zalety Systemu TXP</h1>
                                <ul className="text-mobile-base text-lg mb-4 mb-lg-5">
                                    <li>Łatwe zarządzanie systemem poprzez dedykowany panel dostępny z przeglądarki internetowej: zarządzanie kierowcami, przegląd raportów zleceń bieżących oraz archiwalnych</li>
                                    <li>Zapewnienie najwyższej jakości obsługi klienta rejestrowanie wszystkich połączeń / elektroniczny rejestr zleceń zgodnie z ustawą</li>
                                    <li>Kasa Fiskalna i Taksometr w aplikacji kierowcy</li>
                                    <li>Eliminacja łączności radiowej między taksówkami wykorzystanie nowoczesnych i bardziej wydajnych rozwiązań.</li>
                                    <li>Kierowca decyduje o przyjmowaniu połączeń samodzielnie loguje i wylogowuje się do systemu</li>
                                    <li>Brak konieczności zatrudniania dyspozytora system automatycznie przekazuje połączenia do kierowców, co eliminuje błędy.</li>
                                    <li>Większa niezależność KIEROWCAy jasny i przejrzysty system rozliczania z przyjętych zleceń.</li>
                                    <li>Wysoki poziom bezpieczeństwa w ramach systemu dostępny jest system zdalnego monitoringu</li>
                                    <li>Zabezpieczenie numeru klienta przy połączeniu z kierowcą, aplikacja wyświetla numer korporacyjny w trakcie rozmowy (opcja)</li>
                                </ul>
                                <div className="d-flex mb-4 mb-lg-5">
                                    <Button href={Doc} variant='dark' className='btn-mobile-100 d-flex align-items-center' target='_blank'>
                                        Pobierz formularz zgłoszeniowy
                                        <span className="d-flex ms-2">
                                            <Icon path={mdiArrowRightThin} size={1} />
                                        </span>    
                                    </Button>
                                </div>
                                <h2 className='h3 mb-4 mb-lg-5'>KIEROWCA – ROZPOCZĘCIE PRACY</h2>
                                <ol className="text-mobile-base text-lg mb-4 mb-lg-5">
                                    <li>KIEROWCA loguje się do pracy poprzez mobilną aplikację na smartfonie.</li>
                                    <li>KIEROWCA może zalogować się do wybranych stref miasta.</li>
                                    <li>KIEROWCA ma wgląd do lokalizacji innych kierowców na mapie miasta w aplikacji mobilnej.</li>
                                    <li>System ustawia kierowcę w kolejce kierowców w wybranych strefach.</li>
                                </ol>
                                <h2 className='h3 mb-4 mb-lg-5'>KKIEROWCA – ELEKTRONICZNA EWIDENCJA ZLECEŃ</h2>
                                <div className='text-mobile-base text-lg mb-4 mb-lg-5'>
                                    <p>Elektroniczna Ewidencja zleceń dla kierowcy jest dostępna w systemie dla wszystkich kierowców oraz Administratora.</p>
                                    <p className='mb-0'>Elektroniczna zawiera pełne dane zgodne z wymogami ustawy –{'>'} czytaj więcej</p>
                                </div>
                                <h2 className='h3 mb-4 mb-lg-5'>STREFY PRZEWOZOWE</h2>
                                <p className='text-mobile-base text-lg mb-4 mb-lg-5'>Nasz System może obsługiwać wiele stref taksówkarskich. Wystarczy do tego jedynie aplikacja na telefony z systemem operacyjnym Android. Wszystkie połączenia są wtedy przekazywane na strefę Centrum do kolejki kierowców. Decyzję o przekazaniu zlecenia na inną strefę podejmuje kierowca, do którego zlecenie trafiło jako pierwsze.</p>
                                <h2 className='h3 mb-4 mb-lg-5'>Telefonia VOIP</h2>
                                <p className='text-mobile-base text-lg mb-4 mb-lg-5'>Połączenia przychodzące od Klientów są automatycznie przekazywane do KIEROWCAy za pomocą linii telefonicznej VoIP. Rozwiązanie takie umożliwia przekazywanie do wielu kierowców nieskończenie wiele połączeń od klientów w tym samym czasie, przez co żaden z dzwoniących klientów nie czeka na połączenie z wolnym KIEROWCAem.</p>
                                <h2 className='h3 mb-4 mb-lg-5'>Numery telefoniczne dla klienta – dostępne bez limitu połączeń</h2>
                                <p className='text-mobile-base text-lg mb-4 mb-lg-5'>Połączenia do systemu mogą być przyjmowane na dedykowanym numerze dla klienta udostępnionym do systemu lub na dotychczasowe numery korporacji bez limitu jednoczesnych połączeń. Jeżeli posiadasz już numer dla klienta, to taki numer kieruje połączenia do systemu   poprzez przekierowanie połączeń z niego na numer podkładowy w systemie  . Rozwiązanie takie znosi limit na ilość połączeń w tym samym czasie funkcjonujący, jeżeli połączenia odbiera operator w dyspozytorni.</p>
                                <h2 className='h3 mb-4 mb-lg-5'>Dostęp do systemu</h2>
                                <p className='text-mobile-base text-lg mb-4 mb-lg-5'> System udostępniamy w formie dzierżawy na serwerze Dostawcy. Usługa ta umożliwia wykonywanie i odbieranie połączeń bez konieczności instalacji dodatkowych urządzeń, ani nawet posiadania siedziby firmy. W koszty takiego rozwiązania wchodzą jednorazowa opłata instalacyjna (jej wysokość jest uzależniona od w zależności od wyboru Modułów do Systemu Taxi), miesięczny abonament za dzierżawę centrali z Systemem Taxi oraz opłata za udostępnienie nowego bądź przeniesionego Państwa numeru telefonicznego. W ramach umowy zapewnione jest wsparcie informatyczne obsługi systemu oraz doradztwo w zakresie rozwoju Państwa firmy.</p>
                                <h2 className='h3 mb-4 mb-lg-5'>Centrala telefoniczna</h2>
                                <p className='text-mobile-base text-lg mb-4 mb-lg-5'> System TXP przy współpracy z centralą telefoniczną, umożliwia odbieranie połączeń bezpośrednio przez kierowcę. Kierowca odbierający zamówienie jest wybierany na podstawie kolejności zgłoszenia gotowości do odebrania połączenia oraz miejsca w jakim się znajduje. Po odebraniu zgłoszenia zostanie następnie automatycznie ustawiony na końcu kolejki. Kierowca dokonuje autoryzacji dzięki numerowi swojego telefonu komórkowego.</p>
                                <h2 className='h3 mb-4 mb-lg-5'>BOT – system sztucznej inteligencji w przyjmowaniu zlecenia</h2>
                                <p className='text-mobile-base text-lg mb-0'>Nowoczesne rozwiązania systemu   pozwalają na przyjmowanie zgłoszeń od klientów w rozmowie telefonicznej pomiędzy klientem, a BOTem (systemem rozpoznawania mowy, który ustala z klientem adres zamówienia). Na podstawie uzyskanych danych system wysyła na aplikację kierowcy zlecenie do realizacji. W ramach takiego zlecenia kierowca zawsze ma możliwość podjęcia bezpośredniego kontaktu z klientem.</p>
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
        </>
    )
}
export default OfferDriver;