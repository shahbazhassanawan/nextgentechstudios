import Link from 'next/link';
import React from 'react';

function CtaSection() {
    return (
        <>
            <div className='cta-sec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <h2>
                                Ready To Discuss<br /> Your Project With Us?
                            </h2>
                        </div>
                        <div className='col-md-4 d-flex justify-content-end align-items-center'>
                            <Link href='/contact-us' className='btn'>Contact Us Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CtaSection;