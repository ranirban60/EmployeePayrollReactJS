import axios from "axios";

class EmployeeService {
    
    getEmployee(){
        return axios.get("http://localhost:8080/listAllEmployee");

    }

    deleteEmployee(id) {
        console.log(id)
        return axios.delete("http://localhost:8080/deleteEmployee/"+id);
    }
}
export default new EmployeeService()