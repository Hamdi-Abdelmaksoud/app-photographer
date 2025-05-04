import Image from "next/image";
import styles from './slide.module.css';
export default function Slider(){
  
  return(
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        <div className={styles.slide}>
          <Image src="/slides/slide.jpg"
          width={500}
          height={500}
          alt="pic"/>
        </div>
        <div className={styles.slide}>
          <Image src="/slides/slide.jpg"
          width={500}
          height={500}
          alt="pic"/>
        </div>
        <div className={styles.slide}>
          <Image src="/slides/slide.jpg"
          width={500}
          height={500}
          alt="pic"/>
        </div>
        <div className={styles.slide}>
          <Image src="/slides/slide.jpg"
          width={500}
          height={500}
          alt="pic"/>
        </div>
        <div className={styles.slide}>
          <Image src="/slides/slide.jpg"
          width={500}
          height={500}
          alt="pic"/>
        </div>
   
     
      </div>
    </div>
  )
}