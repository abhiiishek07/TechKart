import AdminSidebar from "../../components/admin/AdminSidebar";

const Dashboard = () => {
  return (
    <div className="w-full flex h-screen ">
      <AdminSidebar />
      <main className="bg-base-200 w-full px-8 py-3">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Search for data, user or docs"
            className="border-none w-full rounded-lg p-3 bg-inherit focus:outline-none"
          />
        </div>
        <div className="divider m-0"></div>
        <div className="w-full bg-red-200">h</div>
      </main>
    </div>
  );
};

export default Dashboard;
