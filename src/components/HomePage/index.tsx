import { Button } from '../Button';
import styles from './styles.module.scss';

export default function HomePage() {
  return (
    <>
      <div className={styles.firstContainer}>
        <div className={styles.leftSide}>
          <img src='/makeup.jpg' alt='' />
        </div>
        <div className={styles.rightSide}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illo officiis earum
            quidem aperiam assumenda ad sit commodi rerum. Commodi explicabo molestias at voluptatem
            vel earum dicta maiores harum dolorum. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Fuga quaerat laboriosam rerum suscipit consequatur temporibus laborum
            similique iure? Maiores deserunt earum similique. Alias at nemo asperiores illum quasi
            reprehenderit eum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            architecto quaerat quisquam eos cumque deleniti magnam, facere atque, ea voluptas
            blanditiis eligendi incidunt! Inventore ex qui iusto ipsum vitae sint!
          </p>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.rightSide}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illo officiis earum
            quidem aperiam assumenda ad sit commodi rerum. Commodi explicabo molestias at voluptatem
            vel earum dicta maiores harum dolorum. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Fuga quaerat laboriosam rerum suscipit consequatur temporibus laborum
            similique iure? Maiores deserunt earum similique. Alias at nemo asperiores illum quasi
            reprehenderit eum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            architecto quaerat quisquam eos cumque deleniti magnam, facere atque, ea voluptas
            blanditiis eligendi incidunt! Inventore ex qui iusto ipsum vitae sint!
          </p>
        </div>
        <div className={styles.leftSide}>
          <img src='/pngwing.com.png' alt='' />
        </div>
      </div>
      <div className={styles.downsideButton}>
        <Button description={'Acesse Nossos Cursos'} route={'/courses'}></Button>
      </div>
    </>
  );
}
