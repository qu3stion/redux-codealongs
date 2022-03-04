import { NavLink } from "react-router-dom";

const DashboardPage = () => {
  return (
    <section>
      <h1>Dashboard</h1>
      <p>This is the Dashboard!</p>

      <NavLink to="/posts" className="button">
        View Posts
      </NavLink>
    </section>
  )
}
