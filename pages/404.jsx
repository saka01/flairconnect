import CustomButton from "../components/Buttons/CustomButton";
import SideBannerLayout from "../components/SideBanner/SideBannerLayout";
import styles from "../styles/404.module.css";
import Image from "next/image";

export default function PageNotFound() {
  return (
    <SideBannerLayout>
        <Image
          src="/images/darthvader.svg"
          alt="Darth Vader"
          className={styles.darthvader}
          width={300}
          height={300}
        />
      <section className={styles.errorpage}>
        <h1>404 Error - Page Not Found</h1>
        <span>
          Seems like Darth Vader just hits our website and drops it down.
        </span>
        <span>
          Please press the refresh button and everything should be fine again.
        </span>
        <br/>
        <CustomButton>REFRESH</CustomButton>
      </section>
    </SideBannerLayout>
  );
}
