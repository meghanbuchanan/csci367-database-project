# **Bigfoot's Guide to WA Parks**  
### **CSCI 367 Final Project**  

A web application designed to help users discover hiking trails in Washington State’s National Parks. Whether you’re planning your next adventure or exploring virtually, Bigfoot’s Guide provides detailed trail information to ensure your prepared for your next hike.

---

## **Quick Start**  

To run the project locally:  

1. Download Docker Desktop: Create an account if you don't already have one.
2. Ensure the Docker Engine is running in the background. 
    The docker commands will not work if it is not.
3. Clone the repository:  
   ```bash
   git clone https://github.com/your-repo/bigfoots-guide.git
   cd bigfoots-guide
4. Build and run the application using Docker:
   ```bash
   docker-compose up --build
5. Naviagate to the application locally:
    http://localhost:5173/

>[!NOTE]
>After you initially build the project, you will not need to rebuild unless the codebase changes. When re-running the webpage, use:
>```bash
>docker-compose up

## **Project Tech Stack**
### **Frontend**
    React: User Interface Library
    TypeScript: A strongly typed programming language that builds on JavaScript
    Vite: Project tooling

### **Backend**
    Python: Server-side logic
    SQL: Database for trail and park data
    Docker: Simplified deployment and dependency management

## **Project Structure** 
    /backend/data            # All the SQL and Docker code
    /frontend/public         # All photos used in the application
    /frontend/src            # All application code
    /frontend/src/assets     # Static assets for the application
    /frontend/src/components # React components
    /frontend/src/routes     # React pages directly referenced by the router

## **Features** 
    Search by Trail Name: Search for a specific trail by their name.
    Search by Trail Details: Search for a trail based off park, length, elevation, time, pet restictions and camping restictions.

## **Contributors** 
    Meghan Buchanan
    Stacie Spahr

    GitHub: https://github.com/WhitePassDev/whitepass-patrol.git