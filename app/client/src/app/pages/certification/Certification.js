import React, { Component } from 'react';
//import profile from '../../../profile.json';
import moment from "moment";



class Certification extends Component {
	render() { 
		const profile = require ('../../../../../Profiles/'+this.props.profiles+'.json');
	  return (
		<div className="card">
		  <div className="card-content">
			<h4 className="header-font">
			CERTIFICATION
			</h4>
			<table className='striped'>
						<thead>
							<tr>
								<th>Certificate</th>
								<th>Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
						{
							profile.Certificates.map((Certificate) => {
								const cDate = moment(Certificate.CertificationDate);
								return (
									<React.Fragment key={Certificate.CertificateName}>
									<tr>
									<td>{Certificate.CertificateName}</td>
									<td>{cDate.format('MMM YYYY')}</td>
									<td>
										<a rel="noopener noreferrer" target="_blank" href={Certificate.Source} className='btn blue lighten-2'>
											View
										</a>
									</td>
								</tr> 
								</React.Fragment>
								);
							})
							}
						</tbody>
					</table>
		
		  </div>
		</div>
	  );
	}
  }
  
  export default Certification;


