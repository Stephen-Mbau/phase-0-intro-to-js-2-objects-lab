// Write your solution in this file!
const employee = {
    name : "Kamau",
    streetAddress : "Eastleigh 4th Street"
}
function updateEmployeeWithKeyAndValue (employee,key,value) {
    return {
        ...employee,
        [key] : value,
    };
}
console.log(updateEmployeeWithKeyAndValue(employee,"grade","pass"))
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    employee[key] = value;
    return employee;
}
console.log (destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","Kevin"))
function deleteFromEmployeeByKey(employee,name) {
        const newEmployee = {...employee};
        delete newEmployee[name];
        return newEmployee;    
}
function  destructivelyDeleteFromEmployeeByKey(employee,name) {
            delete employee.name;
            return employee.rank ='Boss'      
}
