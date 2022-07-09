Problem Statement – MealDrop - A Food Delivery Service (For Detailed Problem Statement Refer Problem.md file)

How to Plan for MealDrop Application Development?

Break down MealDrop development process into milestones:
    Register User
    Login with Valid User
    Preview Restaurant and Food Details
    Add the Food into the cart
    Order the Food


Instructions
1.	Download and unzip the boilerplate code.

2.	Run the command npm install to install the dependencies under following folder.
    a. MealDrop_API
    b. MealDrop_Delivery_Agent_API
    c. MealDrop_Restaurant_Patner_API_MealDrop
 
3.	Open the boilerplate code in VSCode to develop the solution. 

4.	Write the code in the following files
    a.	Implement the code for database configuration: 
        1. Create config folder inside MealDrop_API folder
            i. Create database.js file and implment database connectivity code
        2. Create config folder inside MealDrop_Delivery_Agent_API
            i. Create database.js file and implment database connectivity code
        3. Create config folder inside MealDrop_Restaurant_Patner_API_MealDrop
            i. Create database.js file and implment database connectivity code
         

    b.	Implement the code for controller:
        1. Goto controller folder under MealDrop_API folder 
            i. Create orderController.js and userController.js file under the controller folder for implementing the controller code
        2. Goto controller folder under MealDrop_Delivery_Agent_API folder
            i. Create agentController.js file under the controller folder for implementing the controller code
        3. Goto controller folder under MealDrop_Restaurant_Patner_API_MealDrop folder
            i. Create restaurantController.js file under the controller folder for implementing the controller code


    c.	Implement the code for model
        1. Goto model folder under MealDrop_API folder 
            i. Create userModel.js file under the model folder for implementing the model code
        2. Goto model folder under MealDrop_Delivery_Agent_API folder
            i. Create deliveryAgentModel.js file under the model folder for implementing the model code
        3. Goto model folder under MealDrop_Restaurant_Patner_API_MealDrop folder
            i. Create restaurantModel.js file under the model folder for implementing the model code


    d.	Implement the code for routes
        1. Goto routes folder under MealDrop_API folder 
            i. Create orderRouter.js and userRouter.js file under the routes folder for implementing the router code
        2. Goto routes folder under MealDrop_Delivery_Agent_API folder
            i. Create AgentRouter.js file under the routes folder for implementing the router code
        3. Goto routes folder under MealDrop_Restaurant_Patner_API_MealDrop folder
            i. Create restaurantRouter.js file under the routes folder for implementing the router code
    
    e.	Implement the code for testing the application
        1. Goto test folder under MealDrop_API folder 
            i. Create user.test.js file under the test folder for implementing the testing code
        2. Goto test folder under MealDrop_Delivery_Agent_API folder
            i. Create agent.test.js file under the test folder for implementing the testing code
        3. Goto test folder under MealDrop_Restaurant_Patner_API_MealDrop folder
            i. Create restaurant.test.js file under the test folder for implementing the testing code
    
    

5.	Run the test scripts available under test folder by giving npm run test command in the terminal to test locally. 
6.	Refactor the solution to ensure all test cases are passing. 
7.	Run the npm run lint command to test the linting error inside the MEALDROPBOILERPLATE folder.
8.  Check the  eslint_html_report.html file for linting error and refactor the error
8.	Zip the solution code with the name same as project name.
