import react from 'react'
const buttonStyle={
    backgroundColor: '#387ed1',
    width:"40%",
    margin:"0 auto",
    border:"1px solid",
};
function kiteDashboardLink(){
    return(
        <div className='container text-center p-5'>
            <div className='row p-5' style={{justifyContent:"center", marginBottom:"40px"}}>
                <div className='' style={{width:"50%", alignContent:"center"}}>
                    <h3>Have a look on my clone <b>Kite</b> application</h3>
                <a
                  href="https://zerodha-clone-dashboard-ohlo.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="media/images/logo.png"
                    alt="Zerodha Dashboard"
                    style={{ width: "20%", cursor: "pointer", marginTop:"25px",marginBottom:"25px" }}
                  />
                </a> <br/>
                <a href="https://zerodha-clone-dashboard-ohlo.onrender.com" target="_blank" rel="noopener noreferrer"><button className='p-2 btn btn-primary fs-5 mt-3' style={buttonStyle}>Visit Kite</button> </a>
                </div>
            </div>
        </div>
    )
}
 
export default kiteDashboardLink;