# **Bigfoot's Guide to WA Parks**  
### **CSCI 367 Final Project**  

A web application designed to help users discover hiking trails in Washington State’s National Parks. Whether you’re planning your next adventure or exploring virtually, Bigfoot’s Guide provides detailed trail information to make your exploration easier and more enjoyable.  

---

## **Quick Start**  

To run the project locally:  

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-repo/bigfoots-guide.git
   cd bigfoots-guide
2. Build and run the application using Docker:
    docker-compose up --build
3. Naviagate to the application locally:
    http://localhost:5173/

## **Project Tech Stack**
    *Frontend*
    React: User Interface Library
    TypeScript: A strongly typed programming language that builds on JavaScript
    Vite: Project tooling

    *Backend*
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