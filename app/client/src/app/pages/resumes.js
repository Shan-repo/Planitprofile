import React, { Component, useEffect } from "react";
import About from "./about/About"
import Skills from "./skills/Skills"
import Experiences from "./experience/Experience";
import Education from "./education/Education";
import { AiOutlineDownload } from "react-icons/ai";
import html2canvas from "html2canvas";
import jsPDF from "jspdf"
import homepage from "./homepage"
import { FABButton } from 'react-mdl';
import Certification from "./certification/Certification";
import { Input } from "@material-ui/core";
import { useLocation } from "react-router";

export default class Resumes extends Component {


	printDocument(resource) {
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
		const filename = 'ThisIsYourPDFFilename.pdf';

		html2canvas(document.querySelector(("#divToPrint")), 
								{scale: 2}
						 ).then(canvas => {

			//let pdf = new jsPDF('p', 'mm', 'a4', true);
			// pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
			// pdf.save(filename);

			var imgData = canvas.toDataURL('image/png');

			/*
			Here are the numbers (paper width and height) that I found to work. 
			It still creates a little overlap part between the pages, but good enough for me.
			if you can find an official number from jsPDF, use them.
			*/
			var imgWidth = 210; 
			var pageHeight = 295;  
			var imgHeight = canvas.height * imgWidth / canvas.width;
			var heightLeft = imgHeight;
	  
			var doc = new jsPDF('p', 'mm','a4', true);
			var position = 0;
	  
			doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
			heightLeft -= pageHeight;
	  
			while (heightLeft >= 0) {
			  position = heightLeft - imgHeight;
			  doc.addPage();
			  doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
			  heightLeft -= pageHeight;
			}
			doc.save( resource+'.pdf');
		});
	}


	render() {
		const resource = this.props.match.params.resource
		console.log("resourcess" + resource)

		return (
			<section className='contact' >
				<div className='container' >
					<div className='row' >
						<div >

							{/* <Profile /> */}
							{/* <Skills /> */}

							<FABButton colored style={{ position: 'fixed', bottom: '1rem', right: '2rem' }} onClick={this.printDocument(resource)}>
								<AiOutlineDownload />
							</FABButton>
						</div>
						<div className='col s12 m9 mt4' id="divToPrint">
							<About profiles={resource} />
							<Experiences profiles={resource} />
							<Skills profiles={resource} />
							<Certification profiles={resource} />
							<Education profiles={resource} />
						</div>



					</div>
				</div>
			</section>
		)
	}
}
