import React from 'react';

function LocationNav() {
    return (
        <div className="row mt-1 mb-3 mx-0 py-3 rounded" style={{ background: "#fff", border: "1px solid rgba(135,138,140,0.5)" }}>
            <div className="col-11 col-lg-11">
                <div className="float-left">
                    <a className="mr-3 text-primary"><i class="fas fa-burn"></i> Hot</a>
                    <a className="dropdown-toggle mr-3 text-primary">United States</a>
                    <a className="dropdown-toggle text-primary mr-3">All States</a>
                </div>
                <div className="d-none d-md-block float-left">
                    <a className="text-muted mr-3"><i class="fas fa-certificate"></i> New</a>
                    <a className="text-muted mr-3"><i class="fas fa-sort-numeric-up"></i> Top</a>
                </div>

            </div>
            <div className="col-1 text-right text-primary">
                <a className="dropdown-toggle"><i class="fas fa-equals"></i></a>
            </div>
        </div>
    )
}

export default LocationNav;
