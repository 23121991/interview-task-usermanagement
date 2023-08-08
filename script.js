const users = [
    { firstName: "John", lastName: "Doe", email: "john@example.com", contact: "1234567890", designation: "Developer" },
    { firstName: 'John', lastName: 'Doe', email: 'jon@example.com', contact: '123-456-7890',designation: 'Manager', },
    { firstName: 'Jacks', lastName: 'mithran', email: 'janex@example.com', contact: '987-654-3210',designation: 'Manager', },
    { firstName: 'Joe', lastName: 'joe', email: 'joe@example.com', contact: '123-456-7890',designation: 'Manager', },
    { firstName: 'Jackie', lastName: 'mith', email: 'jackie@example.com', contact: '987-654-3210',designation: 'Engineer', },
    { firstName: 'sravan', lastName: 'Dosar', email: 'sravan@example.com', contact: '123-456-7890' ,designation: 'Manager',},
    { firstName: 'Janee', lastName: 'sithu',  email: 'janeee@example.com', contact: '987-654-3210',designation: 'Engineer', }
    
  ];
  
  
  function populateUserTable() {
    const tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML = "";
  
    users.forEach((users, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${users.firstName}</td>
        <td>${users.lastName}</td>
        <td>${users.email}</td>
        <td>${users.contact}</td>
        <td>${users.designation}</td>
        <td>
          <button class="delete" onclick="deleteUser(${index})">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }
  

  function initialize() {
    populateUserTable();

    const addUserBtn = document.getElementById("addUserBtn");
    addUserBtn.addEventListener("click", () => {
    
      window.location.href = "user_add.html";
    });
  
    
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
      
    });
  }
  
 
  function viewUser(index) {
    
    window.location.href = `user_details.html?index=${index}`;
  }
  
  
  function editUser(index) {
    
    window.location.href = `user_edit.html?index=${index}`;
  }


  function initialize() {
    populateUserTable();
  
    const addUserBtn = document.getElementById("addUserBtn");
    addUserBtn.addEventListener("click", () => {
      window.location.href = "user_add.html";
    });
  
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn"); 
  
    searchBtn.addEventListener("click", () => { 
      const searchTerm = searchInput.value.trim().toLowerCase();
      const filteredUsers = users.filter(user => {
        return (
          user.firstName.toLowerCase().includes(searchTerm) ||
          user.lastName.toLowerCase().includes(searchTerm) ||
          user.email.toLowerCase().includes(searchTerm) ||
          user.contact.includes(searchTerm) ||
          user.designation.toLowerCase().includes(searchTerm)
        );
      });
  
      populateUserTable(filteredUsers);
    });
  }
  

  function deleteUser(index) {
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      
      users.splice(index, 1);
      
      populateUserTable();
    }
  }


  
 
  initialize();

