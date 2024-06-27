const filterSelect = document.getElementById("filter");
const staffTable = document.getElementById("staff-table");
const addStaffBtn = document.getElementById("add-staff-btn");
const addDepartmentBtn = document.getElementById("add-department-btn");
const addStaffModal = document.getElementById("add-staff-modal");
const addDepartmentModal = document.getElementById("add-department-modal");
const saveStaffBtn = document.getElementById("save-staff-btn");
const cancelStaffBtn = document.getElementById("cancel-staff-btn");
const saveDepartmentBtn = document.getElementById("save-department-btn");
const cancelDepartmentBtn = document.getElementById("cancel-department-btn");
const monthSelectionModal = document.getElementById("month-selection-modal");
const monthSelect = document.getElementById("month-select");
const selectMonthBtn = document.getElementById("select-month-btn");
const cancelMonthBtn = document.getElementById("cancel-month-btn");

// fetch users from api asynchronously

fetch("https://api.cognospheredynamics.com/api/auth/getAllUser")
  .then((res) => res.json())
  .then((data) => {
    const defaultAttendance = [0, 0, 0, 0, 0];
    const defaultMissed = 0;

    // Add the properties to each user object
    data.users = data.users.map((user) => ({
      ...user,
      attendance: defaultAttendance,
      missed: defaultMissed,
    }));

    staffData = data.users;
    function updateTable(filter, month) {
      let filteredData;

      if (filter === "day") {
        filteredData = staffData.map((staff) => ({
          ...staff,
          attendance: staff.attendance.slice(-1),
          missed: staff.attendance.slice(-1).filter((day) => day === 0).length,
        }));
      } else if (filter === "week") {
        filteredData = staffData.map((staff) => ({
          ...staff,
          attendance: staff.attendance.slice(-7),
          missed: staff.attendance.slice(-7).filter((day) => day === 0).length,
        }));
      } else if (filter === "month") {
        filteredData = staffData.map((staff) => ({
          ...staff,
          attendance: staff.attendance, // Here you can implement the actual month filtering logic
          missed: staff.attendance.filter((day) => day === 0).length,
        }));
      } else {
        filteredData = staffData;
      }

      staffTable.innerHTML = filteredData
        .map(
          (staff) => `
            <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${
                  staff.id
                }</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div class="flex items-center">
                        <img src="${staff.image}" alt="${
            staff.name
          }" class="w-8 h-8 rounded-full mr-2">
                        ${staff.name}
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${staff.attendance.join(
                  ", "
                )}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${
                  staff.missed
                }</td>
            </tr>
        `
        )
        .join("");
    }

    filterSelect.addEventListener("change", (e) => {
      if (e.target.value === "month") {
        monthSelectionModal.classList.remove("hidden");
      } else {
        updateTable(e.target.value);
      }
    });

    selectMonthBtn.addEventListener("click", () => {
      const selectedMonth = monthSelect.value;
      monthSelectionModal.classList.add("hidden");
      updateTable("month", selectedMonth);
    });

    cancelMonthBtn.addEventListener("click", () => {
      monthSelectionModal.classList.add("hidden");
    });

    addStaffBtn.addEventListener("click", () => {
      addStaffModal.classList.remove("hidden");
    });

    addDepartmentBtn.addEventListener("click", () => {
      addDepartmentModal.classList.remove("hidden");
    });

    saveStaffBtn.addEventListener("click", () => {
      const staffName = document.getElementById("staff-name").value;
      const staffImage = document.getElementById("staff-image").value;
      const newStaff = {
        id: staffData.length + 1,
        name: staffName,
        image: staffImage,
        attendance: [],
        missed: 0,
      };
      staffData.push(newStaff);
      updateTable(filterSelect.value);
      addStaffModal.classList.add("hidden");
    });

    cancelStaffBtn.addEventListener("click", () => {
      addStaffModal.classList.add("hidden");
    });

    saveDepartmentBtn.addEventListener("click", () => {
      // Implement logic to save new department
      addDepartmentModal.classList.add("hidden");
    });

    cancelDepartmentBtn.addEventListener("click", () => {
      addDepartmentModal.classList.add("hidden");
    });

    // Initial table update
    updateTable(filterSelect.value);
  })
  .catch((error) => console.log(error));
