function getEmployeeData() {
    const storedData = localStorage.getItem("employees");
    return storedData ? JSON.parse(storedData) : [];
  }
  function setEmployeeData(data) {
    localStorage.setItem("employees", JSON.stringify(data));
  }
  
  const employees = getEmployeeData();
  
  function displayEmployees() {
    const employeeTableBody = document.getElementById("employeeBody");
  
    //check if the employees in the array
  
    if (employees.length === 0) {
      // hide table if there are no employees
      document.getElementById("employeeTable").style.display = "none";
      return;
    }
  
    //clear previous content
    employeeTableBody.innerHTML = "";
  
    // show the table
    document.getElementById("employeeTable").style.display = "table";
  
    // populate the table with employee data
    employees.forEach((employee) => {
      const row = employeeTableBody.insertRow();
      row.innerHTML = `
          <td>${employee.id}</td>
          <td>${employee.name}</td>
          <td>${employee.position}</td>
          `;
    });
  }
  function addEmployee() {
    const name = prompt("Enter employee name: ");
    const position = prompt("Enter employee postion: ");
    const newEmployee = {
      id: employees.length + 1,
      name: name,
      position: position,
    };
    employees.push(newEmployee);
    setEmployeeData(employees);
    displayEmployees();
  }
  function updateEmployee() {
    const idToUpdate = prompt("Enter the Id of the employee to update: ");
    const employeeToUpdate = employees.find((employee) => {
      employee.id == idToUpdate;
    });
    if (employeeToUpdate) {
      const newName = prompt(`Enter new Name for ${employeeToUpdate.name}`);
      const newPosition = prompt(
        `Enter new position for ${employeeToUpdate.position}`
      );
      employeeToUpdate.name = newName;
      employeeToUpdate.position = newPosition;
      setEmployeeData(employees);
      displayEmployees();
    } else {
      alert("Employee not found..");
    }
  }
  function deleteEmployee() {
    const idToDelete = prompt("Enter the id to delete");
    const indexToDelete = employees.findIndex(
      (employee) => employee.id == idToDelete
    );
  
    if (indexToDelete !== -1) {
      employees.splice(indexToDelete, 1);
      setEmployeeData(employees);
      displayEmployees();
    } else {
      alert("Employees not found..");
    }
  }
  
  displayEmployees();
  