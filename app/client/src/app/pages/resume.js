import React, { Component, useEffect } from "react";
import About from "./about/About"
import Skills from "./skills/Skills"
import Experiences from "./experience/Experience";
import Education from "./education/Education";
import { AiOutlineDownload } from "react-icons/ai";
import html2canvas from "html2canvas";
import jsPDF from "jspdf"
import homepage from "./homepage"
import {FABButton } from 'react-mdl';
import Certification from "./certification/Certification";
import { Input } from "@material-ui/core";
import { useLocation } from "react-router";

export default class Resume extends Component {

	
	  printDocument() {
		// const input = document.getElementById('divToPrint');
		// html2canvas(input)
		//   .then((canvas) => {
		// 	const imgData = canvas.toDataURL('image/png');
		// 	const pdf = new jsPDF();
		// 	pdf.addImage(imgData, 'JPEG', 0, 0);
		// 	// pdf.output('dataurlnewwindow');
		// 	pdf.save("download.pdf");
		//   })
		// ;
		const filename  = 'ThisIsYourPDFFilename.pdf';
		
		html2canvas(document.querySelector(("#divToPrint")), 
								{scale: 2}
						 ).then(canvas => {
			let pdf = new jsPDF('p', 'mm', 'a4');
			pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
			pdf.save(filename);
		});
	  }
	  
	  Loc = () => {
		const location = useLocation();
		useEffect(() => {
		 console.log(location.pathname); // result: '/secondpage'
		 console.log(location.search); // result: '?query=abc'
		 console.log(location.state.resources); // result: 'some_value'
	  }, [location]);
	  }

	

	render() {
		const exp=this.props.history.location.state.exp;
		const stream=this.props.history.location.state.stream;
		const resource=this.props.history.location.state.resource;
		
		return (
			<section className='contact' >
				<div className='container' >
					<div className='row' >
						<div >
					
							{/* <Profile /> */}
							{/* <Skills /> */}
						
							<FABButton colored style={{  position: 'fixed', bottom: '1rem',right: '2rem'}} onClick={this.printDocument}>
								<AiOutlineDownload/>
							</FABButton>
						</div>
						<div className='col s12 m9 mt4' id="divToPrint">
							<About  profiles = {resource} />
							<Experiences profiles = {resource} />
							<Skills profiles = {resource}/>
							<Certification profiles = {resource}/>
							<Education profiles = {resource}/>
							
						</div>
					
					</div>
				</div>
			</section>
		)
	}
}
