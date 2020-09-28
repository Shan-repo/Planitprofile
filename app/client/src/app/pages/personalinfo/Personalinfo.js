import React from 'react';

export default function Personalinfo() {
  return (
    <div>
      <div className="card">
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> 123 Lorem
              </p>
              <p>
                <strong>Email:</strong> test@yahoo.com
              </p>
              <p>
                <strong>Phone:</strong> 123 456 7898
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - English
              </p>
              <p>
                <strong>Second Language</strong> - Spanish
              </p>
              <p>
                <strong>Third Language</strong> - Chinese
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}