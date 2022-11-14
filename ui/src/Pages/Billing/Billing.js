
import { Link, Route, Routes } from 'react-router-dom';
import './Billing.css';

var Billing = () => {
    return (
        <div>
            <div className='container-fluid billing'>
                <div className='row'>
                <div className='billing-heading'>
                        <h2>Billing</h2>
                    </div>
                    <Link to='existingbills' className='existing-bills'>
                        <div className=' col-sm-3 '>
                            <h3>Existing Bills</h3>
                        </div>
                    </Link>
                    <Link to='makebill' className='make-bills'>
                        <div className='col-sm-3  '>
                            <h3>Make New Bill</h3>
                        </div>
                    </Link>
                    <div className='routing-bills'>
                        <Routes>
                            {/* <Route path='/existingbills' element={ }>
                        </Route>
                        <Route path='/makebill' element={}></Route> */}
                        </Routes>
                    </div>
                </div>
                <div className='row' >
                    <hr/>
                </div>
            </div>

        </div>
    );
}

export default Billing;