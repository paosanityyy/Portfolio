import React from 'react';
import Summary from '../assets/F23_T23_Project Summary.pdf';
import Vision from '../assets/F23_T23_Project Vision.pdf';
import Requirements from '../assets/F23_T23_High Level Requirements-2.pdf';
import Plan from '../assets/W24_T23_Project_Plan_V2.0.pdf';
import Analysis from '../assets/F23_T23_Requirements_Analysis_and_Design-2.pdf';
import Report from '../assets/W24_T23_COMP3078_Project_Status_Report_2.pdf';
import '../styles/Documentation.css';

const Documentation = () => {
    return (
        <div className='documentation-container'>
            <ul>
                <a href={Summary}><li>Project Summary</li></a>
                <a href={Vision}><li>Project Vision</li></a>
                <a href={Requirements}><li>Project/Business Requirements</li></a>
                <a href={Plan}><li>Project Plan</li></a>
                <a href={Analysis}><li>Requirements Analysis and Design</li></a>
                <a href="https://www.figma.com/file/C9nh2UmyTSwg2hi1S7L7po/Barbershop-Mobile-App?type=design&node-id=8%3A8&mode=design&t=lDoG9zzA2VMy5Fel-1"><li>Wireframes/Mockups</li></a>
                <a href={Report}><li>Status Reports</li></a>
            </ul>
        </div>
    );
};

export default Documentation;