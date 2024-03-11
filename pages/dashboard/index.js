import DashboardLayout from "./layout";
export default function Dashboard() {
  return (
    <section>
      <h1>Hi Dashboard</h1>
    </section>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};