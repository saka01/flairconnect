import React from "react";
import SideBanner from "./SideBanner";
import styles from "../../styles/sideBanner.module.css";


const SideBannerLayout = ({ children }) => {

  const isSignUpPage = children?.type?.name === "SignupForm";


  return (
    <div>
      <div className={styles.sidebannerlayout}>
        <SideBanner />
        <main className={styles.sidebannercontent}>
          {isSignUpPage ? (
            <span className={styles.topbanner}>
              Already have an account? <strong>Sign In</strong>
            </span>
          ) : (
            <span className={styles.topbanner}>
              Don&apos;t have account?<strong> Sign Up</strong>
            </span>
          )}
          {children}
        </main>
      </div>
    </div>
  );
};

export default SideBannerLayout;
