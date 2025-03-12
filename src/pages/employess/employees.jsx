import React from "react";
import { FaEye, FaPen, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { employees } from "../../assets/static-data/employeesData";

const Employees = () => {
  const handleAddEmployee = () => {
    alert("Thêm nhân sự mới");
  };

  const handleEditEmployee = (id) => {
    alert(`Chỉnh sửa nhân viên có ID: ${id}`);
  };

  const handleDeleteEmployee = (id) => {
    alert(`Xóa nhân viên có ID: ${id}`);
  };

  return (
    <div className="bg-white p-5 size-full rounded-xl">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold w-full">Quản lý nhân sự</h1>
        <button
          onClick={handleAddEmployee}
          className="bg-green text-white px-4 py-2 text-2xl font-semibold rounded-lg flex items-center gap-3"
        >
          <FaPlus className="text-base" />
          Thêm nhân sự
        </button>
      </div>
      <div className="-m-1.5 overflow-x-auto mt-6">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-base font-bold text-gray-500 uppercase"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-base font-bold text-gray-500 uppercase"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-base font-bold text-gray-500 uppercase"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-base font-bold text-gray-500 uppercase"
                  >
                    Contract
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-base font-bold text-gray-500 uppercase"
                  >
                    Positions
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-base font-bold text-gray-500 uppercase"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-base font-bold text-gray-500 uppercase"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="odd:bg-gray-200 even:bg-gray-100"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800">
                      {employee.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">
                      {employee.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">
                      {employee.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">
                      {employee.contractType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">
                      {employee.positions.join(", ")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">
                      {employee.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <Link to={`/employees/${employee.id}`}>
                        <button
                          type="button"
                          className="mr-2 inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent"
                        >
                          <FaEye />
                        </button>
                      </Link>
                      <button
                        type="button"
                        className="mr-2 inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800"
                        onClick={() => handleEditEmployee(employee.id)}
                      >
                        <FaPen />
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800"
                        onClick={() => handleDeleteEmployee(employee.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
