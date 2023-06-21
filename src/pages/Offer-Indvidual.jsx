import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Data
import TXPClient from '../img/txp-klient.png';

// Components

function OfferIndvidual() {
    return (
        <>
            <div className='position-relative zindex-2 top-section pt-lg-6'>
                <Container>
                    <Row className='gy-6'>
                        <Col lg={{ span: 5, offset: 1 }}>
                            <div>
                                <h1 className='mb-4 mb-lg-5'>Zamówienie kursu przez Telefon</h1>
                                <ol className='text-mobile-base text-lg mb-4 mb-lg-5'>
                                    <li>Klient dzwoni do firmy przewozowej.</li>
                                    <li>System Taxi przekazuje połączenie bezpośrednio do wybranego kierowcy taksówki na jego telefon komórkowy.</li>
                                    <li>Kierowca odbierający zgłoszenie wybierany jest na podstawie kolejności zgłoszenia gotowości do odebrania połączenia oraz miejsca w jakim się znajduje.</li>
                                    <li>Po odebraniu zgłoszenia kierowca zostanie następnie automatycznie ustawiony na końcu kolejki</li>
                                    <li>W ramach aktywnego zgłoszenia kierowca może oddzwonić do klienta /prezentowany jest numer korporacji/ lub może odsłuchać rozmowę z klientem</li>
                                </ol>
                                <h2 className='mb-4 mb-lg-5'>Zamówienie kursu przez Aplikację Mobilną</h2>
                                <ol className='text-mobile-base text-lg mb-4 mb-lg-5'>
                                    <li>Klient pobiera aplikację ze sklepu Google Play bądź Apple AppStore</li>
                                    <li>Klient podaje swój numer telefonu przy pierwszym logowaniu i akceptuje regulamin zamawiania kursów</li>
                                    <li>Klient jednym przyciskiem zamawia taksówkę wybierając jednocześnie parametry samochodu takie jak ilość miejsc, fotelik dla dziecka i inne</li>
                                    <li>W przypadku opcji zakupów system dodatkowo udostępnia pole opisu zamówienia</li>
                                    <li>Po określeniu parametrów zamówienia przez klienta, system wybiera Taksówkę do zlecenia i wysyła na aplikację kierowcy nowe zlecenie</li>
                                    <li>Lokalizacja klienta zgodnie z pozycją GPS telefonu, aby zamówienia nawet w miejscach bez konkretnej nazwy ulicy czy numeru budynku były precyzyjne</li>
                                    <li>Klient ma dostępny podgląd trasy dojazdu kierowcy</li>
                                    <li>Klient ma możliwość bezgotówkowego rozliczenia za przejazd z płatnością kartą podłączoną do konta Klienta</li>
                                </ol>
                                <p className='text-mobile-base text-lg mb-4 mb-lg-5'>System TXP zawiera aplikację klienta na urządzenia Android oraz iOS, która zapewnia pasażerom spersonalizowane narzędzie do zamawiania usług przewozowych – zlecenia przewozu lub zakupy. Główne zalety aplikacji mobilnej taxi</p>
                                <h2 className="mb-4 mb-lg-5">Główne zalety aplikacji mobilnej taxi:</h2>
                                <ul className="text-mobile-base text-lg mb-0">
                                    <li>Lokalizacji klienta zgodnie z pozycją GPS telefonu, by zamówienia nawet w miejscach bez konkretnej nazwy ulicy czy numeru budynku były precyzyjne.</li>
                                    <li>Bezgotówkowych rozliczeń za przejazdy z płatnością kartą podłączoną do konta klienta.</li>
                                    <li>Podglądu trasy dojazdu kierowcy w ramach zamówienia.</li>
                                    <li>Szacowania opłaty za przejazd po podaniu adresu pobrania i zakończenia kursu.</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={{ span: 4, offset: 2 }}>
                            <div className="h-100">
                                <div className='text-center position-sticky'>
                                    <img src={TXPClient} width={323} height={600} loading='lazy' alt='TXP Aplikacja Klient' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default OfferIndvidual;