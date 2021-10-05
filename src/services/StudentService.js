import http from "./http-common";

//create function for call http service
const create = (data) => {
  return http.post("/student", data);
};
const update = (id, data) => {
  //เครื่องหมาย ` ปุ่มข้างเลข 1
  return http.put(`/student/${id}`, data);
};
const getall = () => {
  return http.get("/student");
};
const get = (id) => {
  //เครื่องหมาย ` ปุ่มข้างเลข 1
  return http.get(`/student/${id}`);
};

const deleteData = () => {
  return http.delete(``);
}

export default { create, update, getall, get, deleteData };
