import Image from "next/image";
import styles from './slide.module.css';

export default function Slider() {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {/* 5 images originales */}
        {[1, 2, 3, 4, 5].map((n) => (
          <div key={`original-${n}`} className={styles.slide}>
            <Image src="/slides/slide.jpg" width={500} height={500} alt="pic" />
          </div>
        ))}

        {/* 5 images copiées pour la boucle */}
        {[1, 2, 3, 4, 5].map((n) => (
          <div key={`copy-${n}`} className={styles.slide}>
            <Image src="/slides/slide.jpg" width={500} height={500} alt="pic" />
          </div>
        ))}
      </div>
    </div>
  );
}
