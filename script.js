let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    const developers = arr.filter((employee) => employee.profession === "developer");
    developers.map((developer) => console.log(developer));
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach((employee) => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  function addData() {
    const newEmployee = { id: 4, name: "luis", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(arr);
  }
  
  function removeAdmin() {
    const updatedArray = arr.filter((employee) => employee.profession !== "admin");
    console.log(updatedArray);
  }
  
  function concatenateArray() {
    const newArray = [
      { id: 4, name: "Riya", age: "22", profession: "designer" },
      { id: 5, name: "Ritchel", age: "24", profession: "manager" },
      { id: 6, name: "Mike", age: "21", profession: "developer" },
    ];
    const concatenatedArray = arr.concat(newArray);
    console.log(concatenatedArray);
  }
  
  PrintDeveloperbyMap();
  PrintDeveloperbyForEach();
  addData();
  removeAdmin();
  concatenateArray();
  