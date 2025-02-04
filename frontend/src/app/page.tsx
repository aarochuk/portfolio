import styles from "./page.module.css";
import Image from 'next/image';
import github from '/public/icons/github.png';
import linkedin from '/public/icons/linkedin.png';
import codepen from '/public/icons/codepen.png';
import lock from '/public/icons/padlock.png';
import walking from '/public/icons/walking.png';
import timemachine from '/public/icons/timemachine.png';
import resume from '/public/files/resume.pdf';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <div className={styles.staticHalf}>
          <div className={styles.icons}>
            <a href="https://github.com/aarochuk" target="_blank">
              <Image src={github} alt="github" width={30} height={30}/>
            </a>
            <a href="https://www.linkedin.com/in/acarochu/" target="_blank">
              <Image src={linkedin} alt="Sun" width={30} height={30}/>
            </a>
            <a href="https://codepen.io/odinahand" target="_blank">
              <Image src={codepen} alt="github" width={30} height={30}/>
            </a>
        <Image src={walking} alt="github" width={30} height={30}/>
          </div>
          <div className={styles.sections}>
            <h2 className={styles.firstName}>Andrew</h2>
            <div className={styles.lastName}>
              <h2>A</h2><h3>ROCHUKWU</h3>
            </div>
            <p className={styles.underName}>Tryna become a 100x software engineer or make it to the nba at 26.</p>
            <ul>
              <li>about</li>
              <li>experience</li>
              <li>projects</li>
              <li>blog</li>
              <a href="/files/resume.pdf" target="_blank">
                <li>resume</li>
              </a>
            </ul>
          </div>
        </div>
        <div className={styles.dynamicHalf}>
        </div>
      </div>
      <div className={styles.footer}>
        <p>&copy; Andrew Arochukwu 2025</p>
        <div className={styles.leftFooter}>
          <Image src={timemachine} alt="timemachine" width={40} height={40}/>
          <select>
            <option value="english">English</option>
          </select>
        </div>
      </div>
    </div>
  );
}
