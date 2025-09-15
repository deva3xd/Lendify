import { useForm } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";

const Home = ({ loans }) => {
  const { data, setData, post, errors } = useForm({
    amount: "",
    tenor: "",
    purpose: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    post(route("home.store"), {
      onSuccess: () => {
        setData({
          amount: "",
          tenor: "",
          purpose: "",
        });

        document.getElementById("modal").close();
      },
    });
  };

  return (
    <MainLayout title="Home" className="border-x-4 border-[#18181b]">
      <div className="w-2/3 mx-auto pt-6">
        <button
          className="btn bg-blue-600 hover:bg-blue-700 mb-4"
          onClick={() => document.getElementById('modal').showModal()}
        >
          Add
        </button>
        <dialog id="modal" className="modal">
          <div className="modal-box bg-[#0e0e10]">
            <h3 className="font-bold text-2xl">Add Data</h3>
            <form onSubmit={handleSubmit}>
              <label className="label text-xs">Amount</label>
              <input
                type="number"
                min={0}
                id="amount"
                name="amount"
                value={data.amount}
                onChange={(e) => setData("amount", e.target.value)}
                className="input w-full bg-[#232326] focus:outline-[#e17100] focus:border-none"
                required
              />
              {errors.amount && <p className="text-red-500">{errors.amount}</p>}
              <label className="label text-xs">
                Tenor (year)
              </label>
              <input
                type="number"
                min={0}
                max={4}
                id="tenor"
                name="tenor"
                value={data.tenor}
                onChange={(e) => setData("tenor", e.target.value)}
                className="input w-full bg-[#232326] focus:outline-[#e17100] focus:border-none"
                required
              />
              {errors.tenor && <p className="text-red-500">{errors.tenor}</p>}
              <label className="label text-xs">Purpose</label>
              <textarea
                id="purpose"
                name="purpose"
                value={data.purpose}
                onChange={(e) => setData("purpose", e.target.value)}
                rows={3}
                className="text-area w-full bg-[#232326] border-2 border-[#4b4e51] focus:border-[#e17100] focus:outline-none rounded-md px-3 py-2"
                required
              ></textarea>
              {errors.purpose && <p className="text-red-500">{errors.purpose}</p>}
              <button type="submit" className="btn bg-[#e17100] hover:bg-[#e17100]/85 w-full my-2">
                Submit
              </button>
            </form>
            <div className="modal-action mt-0">
              <form method="dialog">
                <button className="btn bg-red-600 hover:bg-red-700">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <div className="overflow-x-auto border border-base-content/5">
          <table className="table">
            {/* head */}
            <thead className="bg-white/5">
              <tr>
                <th>No.</th>
                <th>Amount</th>
                <th>Tenor (year)</th>
                <th>Purpose</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {loans && loans.length > 0 ? loans.map((loan, index) => (
                <tr key={loan.id}>
                  <th>{index + 1}</th>
                  <td>{loan.amount}</td>
                  <td>{loan.tenor}</td>
                  <td>{loan.purpose}</td>
                  <td className={loan.status == 'pending' ? 'text-white' : loan.status == 'approve' ? 'text-green-700' : 'text-red-700'}>{loan.status}</td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={5}>
                    <p className="text-white text-center font-semibold">No Data Available</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
