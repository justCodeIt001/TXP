import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { useLocation } from "react-router-dom"
import Icon from '@mdi/react';
import { mdiPhone, mdiEmailOutline } from '@mdi/js';

// Data


function Header() {
    const location = useLocation();

    let number = '';
    let numberLink = '';

    if (location.pathname === '/informacje-dla-kierowcy') {
        number = '535 756 358';
        numberLink = 'tel:535756358';
    }
    else {
        number = '627 272 088';
        numberLink = 'tel:627272088';
    }
    return (
        <>
            
            <Navbar className="position-absolute top-0 w-100">
                <Container fluid>
                    <div className="d-flex align-items-center gap-3 w-100">
                        <div className='d-flex align-items-center gap-3 ms-auto'>
                            <Button href={numberLink} variant='outline-dark' size='sm' className='btn-icon-mobile d-flex aling-items-center'>
                                <span className='d-flex me-lg-2'>
                                    <Icon path={mdiPhone} size={1} />
                                </span>
                                <span className='d-none d-lg-block'>{number}</span>
                            </Button>
                            <Button href='mailto:biuro@txp.com.pl' variant='outline-dark' size='sm' className='btn-icon-mobile d-flex aling-items-center'>
                                <span className="d-flex d-lg-block me-lg-2">
                                    <Icon path={mdiEmailOutline} size={1} />
                                </span>    
                                <span className="d-none d-lg-block">biuro@txp.com.pl</span>
                            </Button>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}
  
export default Header;