import styles from "./page.module.css";
import Image from 'next/image';
import sun from '/public/icons/sun.png';
import github from '/public/icons/github.png';
import linkedin from '/public/icons/linkedin.png';
import codepen from '/public/icons/codepen.png';
import lock from '/public/icons/padlock.png';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <div className={styles.staticHalf}>
          <div className={styles.icons}>
            <Image src={sun} alt="Sun" width={30} height={30}/>
            <a href="https://github.com/aarochuk" target="_blank">
              <Image src={github} alt="github" width={30} height={30}/>
            </a>
            <a href="https://www.linkedin.com/in/acarochu/" target="_blank">
              <Image src={linkedin} alt="Sun" width={30} height={30}/>
            </a>
            <a href="https://codepen.io/odinahand" target="_blank">
              <Image src={codepen} alt="github" width={30} height={30}/>
            </a>
            <Image src={lock} alt="github" width={30} height={30}/>
          </div>
          <div className={styles.sections}>
            <h2 className={styles.firstName}>Andrew</h2>
            <div className={styles.lastName}>
              <h2>A</h2><h3>ROCHUKWU</h3>
            </div>
            <p className={styles.underName}>Tryna become a 100x software engineer or make it to the nba at 25.</p>
            <ul>
              <li>about</li>
              <li>experience</li>
              <li>projects</li>
              <li>blog</li>
              <li>resume</li>
            </ul>
          </div>
        </div>
        <div className={styles.dynamicHalf}>
        </div>
      </div>
      <div className={styles.footer}>
      
      </div>
    </div>
  );
}
