const express=require('express')
const router=express.Router()
const customerControllers=require('../app/controllers/customersControllers')
const departmentControllers=require('../app/controllers/departmentsControllers')
const employeeControllers=require('../app/controllers/employeesControllers')
const ticketControllers=require('../app/controllers/ticketsControllers')
const userController = require("../app/controllers/userController")
const authenticateUser = require("../app/middlewares/authenticate")

router.get("/register", userController.list);
router.post("/register", userController.create);
router.put("/register/:id", userController.update);
router.delete("/register/:id", userController.destroy);
router.post("/login", userController.login);

router.get('/customers',authenticateUser,customerControllers.list)
router.get('/customers/:id',authenticateUser,customerControllers.show)
router.post('/customers',authenticateUser,customerControllers.create)
router.put('/customers/:id',authenticateUser,customerControllers.update)
router.delete('/customers/:id',authenticateUser,customerControllers.destroy)

router.get('/departments',authenticateUser,departmentControllers.list)
router.get('/departments/:id',authenticateUser,departmentControllers.show)
router.post('/departments',authenticateUser,departmentControllers.create)
router.put('/departments/:id',authenticateUser,departmentControllers.update)
router.delete('/departments/:id',authenticateUser,departmentControllers.destroy)

router.get('/employees',authenticateUser,employeeControllers.list)
router.get('/employees/:id',authenticateUser,employeeControllers.show)
router.post('/employees',authenticateUser,employeeControllers.create)
router.put('/employees/:id',authenticateUser,employeeControllers.update)
router.delete('/employees/:id',authenticateUser,employeeControllers.destroy)

router.get('/tickets',authenticateUser,ticketControllers.list)
router.get('/tickets/:id',authenticateUser,ticketControllers.show)
router.post('/tickets',authenticateUser,ticketControllers.create)
router.put('/tickets/:id',authenticateUser,ticketControllers.update)
router.delete('/tickets/:id',authenticateUser,ticketControllers.destroy)
module.exports=router