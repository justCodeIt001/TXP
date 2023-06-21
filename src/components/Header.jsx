import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiPhone, mdiEmailOutline } from '@mdi/js';

// Data


function Header() {
    return (
        <>
            <Navbar className="position-absolute top-0 w-100">
                <Container fluid>
                    <div className="d-flex align-items-center gap-3 w-100">
                        <div className='d-flex align-items-center gap-3 ms-auto'>
                            <Button href='tel:627272088' variant='outline-dark' size='sm' className='btn-icon-mobile d-flex aling-items-center'>
                                <span className='d-flex me-lg-2'>
                                    <Icon path={mdiPhone} size={1} />
                                </span>
                                <span className='d-none d-lg-block'>627 272 088</span>
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