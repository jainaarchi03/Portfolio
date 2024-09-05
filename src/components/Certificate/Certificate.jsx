import React from 'react'
import styles from './Certificate.module.css'

function Certificate() {
    const certificates=[
        {name:'Skyscanner Front-End Software Engineering Job Simulation',
         Provider: 'Forage',
         date: 'August, 2024',
         description:`Skyscanner Front-End Software Engineering virtual experience programme on Forage - August 2024 
        * Completed a job simulation where I built a web application using React as a front-end engineer at Skyscanner.
        * Developed a page for picking a travel date using Skyscanner’s open-source Backpack React library. 
        * Customised my application and ran automated tests to ensure it rendered properly.`,
        link:'file:///C:/Users/Asus/OneDrive/Desktop/Skyscanner__completion_certificate.pdf',
        },
        {
        name:'J.P Morgan Software Engineering Job Simulation',
        Provider: 'Forage',
        date: 'August, 2024',
        description:`J.P. Morgan Software Engineering Virtual Experience on Forage - August 2024 
        * Set up a local dev environment by downloading the necessary files, tools and dependencies. 
        * Fixed broken files in the repository to make web application output correctly. 
        * Used JPMorgan Chase’s open source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor.`,
        link:'file:///C:/Users/Asus/OneDrive/Desktop/JP_MORGAN.pdf',
        },
        {
            name:"Javascript Essential",
            Provider: "Cisco Networking Academy",
            date: "October, 2023",
            description:`Completed the Javascript Essential course on Cisco Networking Academy - October 2023`,
            link: 'file:///C:/Users/Asus/OneDrive/Desktop/JavaScript_Essentials_.pdf',
        },
        {
            name:"Python Essential",
            Provider: "Cisco Networking Academy",
            date: "june, 2024",
            description:`Completed the Python Essential course on Cisco Networking Academy - June 2024`,
            link: 'file:///C:/Users/Asus/OneDrive/Desktop/AARCHIJAIN-Python-certificate.pdf'
        },
    ]

  return (
    <div>
    <h2 className={styles['title']}>Certificates</h2>
   <div className={styles['certificate-section']}>
    <ul>
        {certificates.map((Certificate, index)=>(
            <li key={index} className={styles['certificate-item']}>
                <h3>{Certificate.name}</h3>
                <p>Provider: {Certificate.Provider}</p>
                <p>Date: {Certificate.date}</p>
                <p>Description: {Certificate.description}</p>
                <a href={Certificate.link} target="_blank" rel="noopener noreferrer">
                    View Certificate
                </a>
                
            </li>
        ))}
    </ul>
   </div>
   </div>
  );
}

export default Certificate;