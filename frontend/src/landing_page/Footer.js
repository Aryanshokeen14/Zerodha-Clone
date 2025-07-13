import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <div className='contain' style={{backgroundColor:"rgb(251,251,251)", borderTop:"1px solid rgb(238,238,238)" , padding:"0px 100px 0px" }}>
           <div className='row p-5'>
            <div className='col-3 '>
                <img src='media/images/logo.svg' style={{width:"55%"}}></img>
                <p className='text-muted mt-2 mb-0' style={{fontSize:"13px"}}>© 2010 - 2025, Zerodha Broking Ltd.</p>
                <p className='text-muted' style={{fontSize:"13px"}}>All rights reserved.</p>
                <i className="fa fa-twitter mx-3 link" style={{fontSize:"23px"}} aria-hidden="true"></i>
                <i className="fa fa-facebook-official mx-3 link" style={{fontSize:"23px"}} aria-hidden="true"></i>
                <i className="fa fa-instagram mx-3 link"style={{fontSize:"23px"}} aria-hidden="true"></i>
                <i className="fa fa-linkedin mx-3 link" style={{fontSize:"23px"}} aria-hidden="true"></i> <hr/>
                <i className="fa fa-youtube-play mx-3 link" style={{fontSize:"23px"}} aria-hidden="true"></i>
                <i className="fa fa-whatsapp mx-3 link" style={{fontSize:"23px"}} aria-hidden="true"></i>
                <i className="fa fa-telegram mx-3 link" style={{fontSize:"23px"}} aria-hidden="true"></i>
            </div>
            <div className='col-2'>
                <h3 className='mb-4' style={{ fontSize: "22px" }}>Account</h3>
                <p><a className='link' href="/">Open demat account</a></p>
                <p><a className='link' href="/">Minor demat account</a></p>
                <p><a className='link' href="/">NRI demat account</a></p>
                <p><a className='link' href="/">Commodity</a></p>
                <p><a className='link' href="/">Dematerialisation</a></p>
                <p><a className='link' href="/">Fund transfer</a></p>
                <p><a className='link' href="/">MTF</a></p>
                <p><a className='link' href="/">Referral program</a></p>                
            </div>
            <div className='col-2'>
                <h3 className='mb-4' style={{ fontSize: "22px" }}>Support</h3>
                <p><a className='link' href="/">Contact us</a></p>
                <p><a className='link' href="/">Support portal</a></p>
                <p><a className='link' href="/">How to file a complaint?</a></p>
                <p><a className='link' href="/">Status of your complaints</a></p>
                <p><a className='link' href="/">Bulletin</a></p>
                <p><a className='link' href="/">Circular</a></p>
                <p><a className='link' href="/">Z-Connect blog</a></p>
                <p><a className='link' href="/">Downloads</a></p>
            </div>
            <div className='col-2'>
                <h3 className='mb-4' style={{ fontSize: "22px" }}>Company</h3>
                <p><a className='link' href="/">About</a></p>
                <p><a className='link' href="/">Philosophy</a></p>
                <p><a className='link' href="/">Press & media</a></p>
                <p><a className='link' href="/">Careers</a></p>
                <p><a className='link' href="/">Zerodha Cares (CSR)</a></p>
                <p><a className='link' href="/">Zerodha.tech</a></p>
                <p><a className='link' href="/">Open source</a></p>
            </div>
            <div className='col-2'>
                <h3 className='mb-4' style={{ fontSize: "22px" }}>Quick links</h3>
                <p><a className='link' href="/">Upcoming IPOs</a></p>
                <p><a className='link' href="/">Brokerage charges</a></p>
                <p><a className='link' href="/">Market holidays</a></p>
                <p><a className='link' href="/">Economic calendar</a></p>
                <p><a className='link' href="/">Calculators</a></p>
                <p><a className='link' href="/">Markets</a></p>
                <p><a className='link' href="/">Sectors</a></p>
            </div>

            <div className='footer-content mt-4'>
                <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="/" className='content-link'>complaints@zerodha.com</a>, for DP related to <a href="/" className='content-link'>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                <p>
                    Procedure to file a complaint on <a href='https://scores.sebi.gov.in' className='content-link'>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                </p>

                <p>
                    <a href='https://smartodr.in/login' className='content-link'>Smart Online Dispute Resolution</a> | <a href='https://zerodha-common.s3.ap-south-1.amazonaws.com/Downloads-and-resources/Smart%20ODR%20info.pdf' className='content-link'>Grievances Redressal Mechanism</a>
                </p>

                <p> Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                <p>
                    Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                </p>

                <p>
                    "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="/" className='content-link'>create a ticket here</a>.
                </p>
            </div>

            <div className='FooterLastLink d-flex' style={{justifyContent:"space-evenly", fontSize:"13px"}}>
                <p><a className='link' href="/">NSE</a></p>
                <p><a className='link' href="/">BSE</a></p>
                <p><a className='link' href="/">MCX</a></p>
                <p><a className='link' href="/">Terms & conditions</a></p>
                <p><a className='link' href="/">Policies & procedures </a></p>
                <p><a className='link' href="/">Privacy policy </a></p>
                <p><a className='link' href="/">Disclosure </a></p>
                <p><a className='link' href="/">For investor's attention</a></p>
                <p><a className='link' href="/">Investor charter</a></p>
            </div>

            <div className='text-center'>
                <a href="https://www.linkedin.com/in/aryan-shokeen-529316265/"  style={{textDecoration:"none"}}>Deployed by Aryan Shokeen</a>
            </div>
           </div>
        </div>
     );
}

export default Footer;