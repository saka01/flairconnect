import SideBannerLayout from "../components/SideBanner/SideBannerLayout";

export default function PageNotFound() {
  return (
    <SideBannerLayout>
      <section>
        <h1>404 Error - Page Not Found</h1>
        <span>
          Seems like Darth Vader just hits our website and drops it down.
        </span>
        <br />
        <span>
          Please press the refresh button and everything should be fine again.
        </span>
      </section>
    </SideBannerLayout>
  );
}
