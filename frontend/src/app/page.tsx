"use client"

import styles from "./page.module.css";
import Image from 'next/image';
import github from '/public/icons/github.png';
import linkedin from '/public/icons/linkedin.png';
import codepen from '/public/icons/codepen.png';
import timemachine from '/public/icons/timemachine.png';
import ciena from '/public/icons/ciena.png';
import ericsson from '/public/icons/ericsson.png';
import email from '/public/icons/email.png';
import plus from '/public/icons/plus.png';
import githubp from '/public/icons/githubp.png';
import githubpd from '/public/icons/githubpd.png';
import link from '/public/icons/link.png';
import linkdark from '/public/icons/linkdark.png';
import dfg from '/public/icons/dfg.png';
import uwaterloo from '/public/icons/uwaterloo.png';
import back from '/public/icons/back.png';
import moreback from '/public/icons/moreback.png';
import resume from '/public/files/resume.pdf';
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState(false);
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <div className={styles.staticHalf}>
          <div className={styles.icons}>
            <a href="https://github.com/aarochuk" target="_blank">
              <Image src={github} alt="github" width={30} height={30}/>
            </a>
            <a href="https://www.linkedin.com/in/acarochu/" target="_blank">
              <Image src={linkedin} alt="linkedin" width={30} height={30}/>
            </a>
            <a href="https://codepen.io/odinahand" target="_blank">
              <Image src={codepen} alt="codepen" width={30} height={30}/>
            </a>
            <a href="mailto:andrewarochukwu@gmail.com" target="_blank">
              <Image src={email} alt="email" width={30} height={30}/>
            </a>
          </div>
          <div className={styles.sections}>
            <h2 className={styles.firstName}>Andrew</h2>
            <div className={styles.lastName}>
              <h2>A</h2><h3>ROCHUKWU</h3>
            </div>
            <p className={styles.underName}>Tryna become a 100x software engineer or make it to the nba at 26.</p>
            <ul>
              <a href="#experience">
                <li>experience</li>
              </a>
              <li>projects</li>
              <li>blog</li>
              <a href="/files/resume.pdf" target="_blank">
                <li>resume</li>
              </a>
            </ul>
          </div>
        </div>
        <div className={styles.dynamicHalf}>
          <div className={styles.experience} id="experience">
            <h2>work experience</h2>
            <div className={styles.job}>
              <Image src={ciena} alt="ciena-logo" width={40} height={40}/>
              <div className={styles.companyDetails}>
                <p className={styles.companyPosition}>Embedded Software Engineer Intern @ <span className={styles.companyName}>Ciena</span></p>
                <p className={styles.companyDate}>September 2024 - December 2024</p>
              </div>
            </div>

            <div className={styles.job}>
              <Image src={dfg} alt="dfg-logo" width={40} height={40}/>
              <div className={styles.companyDetails}>
                <p className={styles.companyPosition}>Software Engineer @ <span className={styles.companyName}>Develop for Good</span></p>
                <p className={styles.companyDate}>May 2024 - August 2024</p>
              </div>
            </div>
            <div className={styles.job}>
              <Image src={ciena} alt="ciena-logo" width={40} height={40}/>
              <div className={styles.companyDetails}>
                <p className={styles.companyPosition}>Embedded Software Engineer Intern @ <span className={styles.companyName}>Ciena</span></p>
                <p className={styles.companyDate}>January 2024 - April 2024</p>
              </div>
            </div>
            <div className={styles.job}>
              <Image src={ericsson} alt="ericsson-logo" width={40} height={40}/>
              <div className={styles.companyDetails}>
                <p className={styles.companyPosition}>Software Engineer Intern @ <span className={styles.companyName}>Ericsson</span></p>
                <p className={styles.companyDate}>January 2023 - August 2023</p>
              </div>
            </div>
            <div className={styles.job}>
              <Image src={uwaterloo} alt="uw-logo" width={40} height={40}/>
              <div className={styles.companyDetails}>
                <p className={styles.companyPosition}>Undergraduate Research Assistant @ <span className={styles.companyName}>University of Waterloo</span></p>
                <p className={styles.companyDate}>September 2022 - December 2022</p>
              </div>
            </div>
          </div>
          <div className={styles.projects}>
            <h2>projects</h2>
            <div className={styles.project}>
              <div className={styles.projectTop}>
                <div className={styles.projectDetails}>
                  <p className={styles.projectName}> hush </p>
                  <a href="https://github.com/aarochuk/hush" target="_blank">
                    <Image src={githubp} alt="github" width={20} height={20}/>
                  </a>
                  <a href="https://aarochuk.github.io/hush/" target="_blank">
                    <Image src={linkdark} alt="link" width={20} height={20}/>
                  </a>
                </div>
                <div className={styles.projectExpand}>
                  <Image src={plus} alt="expand" width={20} height={20}/>
                </div>
              </div>
              <div className={styles.projectBottom}>
                 Terminal based password manager made with GO, that uses SQLite to store users encrypted passwords. 
              </div>
            </div>
          </div>  
        </div>
      </div>
      <div className={styles.footer}>
        <p>&copy; Andrew Arochukwu 2025</p>
        <div className={styles.leftFooter}>
          <a href="https://andrewarochukwuv2.netlify.app" target="_blank">
              <Image src={back} alt="previous website" width={30} height={30}/>
            </a>
            <a href="https://andrewarochukwuv1.netlify.app" target="_blank">
              <Image src={moreback} alt="previous previous website" width={30} height={30}/>
            </a>
        </div>
      </div>
    </div>
  );
}
