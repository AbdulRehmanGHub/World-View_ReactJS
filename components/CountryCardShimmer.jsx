import styles from "./CountryCardShimmer.module.css";

export default function CountryCardShimmer() {
  return (
    <>
      <div className={styles["data-sh"]}>
        <div className={styles["country_box-sh"]}>
          {Array.from({ length: 12 }).map((card, i) => (
            <div key={i} className={styles["countryCard-sh"]}>
              <div className={styles["img-sh"]}></div>
              <div className={styles["box-text-sh"]}>
                <h3 className={styles["h3-sh"]}></h3>
                <p className={styles["p-sh"]}></p>
                <p className={styles["p-sh"]}></p>
                <p className={styles["p-sh"]}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
