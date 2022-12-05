import styles from './styles.module.scss';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.titleDescription}>
        <h1 className={styles.title}>Somos um time de maquiadores profissionais</h1>
        <p className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis perferendis in dolore
          repudiandae qui voluptate fugiat odio vitae consequuntur, assumenda rem deserunt sunt
          saepe consequatur! Voluptatibus molestias laborum aliquam quae.
        </p>
      </div>
      <div className={styles.professionalsBio}>
        <div className={styles.professionalsCard1}>
          <div className={styles.professionalsCardDescription}>
            <div className={styles.professionalsDescription}>
              <h1>Gabriela Negro</h1>
              <p>@gabenegro</p>
            </div>
          </div>
        </div>

        <div className={styles.professionalsCard2}>
          <div className={styles.professionalsCardDescription}>
            <div className={styles.professionalsDescription}>
              <h1>Jane Doe</h1>
              <p>@janedoe</p>
            </div>
          </div>
        </div>

        <div className={styles.professionalsCard3}>
          <div className={styles.professionalsCardDescription}>
            <div className={styles.professionalsDescription}>
              <h1>John Doe</h1>
              <p>@johndoe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
