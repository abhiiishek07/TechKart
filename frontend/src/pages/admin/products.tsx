import AdminSidebar from "../../components/admin/AdminSidebar";

const Products = () => {
  return (
    <div className="w-full h-screen flex ">
      <AdminSidebar />
      <main className="bg-base-200 w-full">
        <p>Hello this is main</p>
      </main>
    </div>
  );
};

export default Products;
