---
title: "Postal Service Management System"
excerpt: "PHP + HTML/CSS + MySQL"
collection: portfolio
---


## Project Description
This project is a comprehensive web-based system developed for simulating the operations of a postal service and shop network. The platform supports multi-role functionality including Admins, Employees, Drivers/Pilots, Customer Support, and Customers. Core features include package handling, trip management, inventory and shop sales, customer support ticketing, and live reporting.

The goal of the system is to digitally manage last-mile deliveries, package status tracking, customer requests, inventory management, and retail purchases, while ensuring data consistency and real-time visibility for stakeholders.


## Project Workflow

### 1. Package Submission and Quoting
A package journey begins when a customer either submits package details online through their dashboard or visits a facility where a clerk assists them. The form collects sender and receiver information, package dimensions (size and weight), and the preferred shipping speed.

Based on this information, the system calculates the postage, generates a unique tracking number, and displays a summary and shipping quote for the user to review before payment.

---

### 2. Payment and Initial Processing
Once the customer or clerk confirms the package details and selects a payment method, the payment is processed. At this stage, the tracking number becomes active and is required when the package is physically handed over.

Upon successful payment, the package status is set to "Processing" and an initial tracking history entry is created, indicating acceptance at the origin facility. If the package is dropped off in person, the clerk handles intake and storage procedures.

---

### 3. Inter-Facility Transport
To move packages between facilities, a manager schedules a trip by selecting a destination facility and assigning a driver and vehicle. Packages located at the origin facility are then added to the trip.

When a package is added to a trip, its status changes to "In Transit" and a loading event is recorded in the tracking history. The assigned driver transports the packages and views their trip details. Upon reaching the destination, the driver or manager marks the trip as completed. This updates the package status to reflect arrival at the new facility, updates its current location, and logs the arrival event in the tracking history.

This process may repeat several times until the package arrives at the final destination facility.

---

### 4. Final Delivery
At the final facility, a manager schedules a delivery route trip and adds the packages for delivery. The assigned delivery driver uses an interface to update the status of each package during their route.

Packages are marked as "Delivered" or "Failed" with notes for unsuccessful attempts and, if required, delivery signatures. Each status update is recorded in the tracking history.

After the delivery route is completed, any undelivered packages are automatically returned to the origin facility of that delivery trip. Their status is reverted to "Processing," and a return event is added to the tracking history.




## Project Screenshots

### Home Page  
![Home Page](/3380pics/home.png)  
*Landing page providing user login access and an overview of system features like shipment, inventory, and support.*

### Customer Dashboard  
![Customer Dashboard](/3380pics/customer.png)  
*Portal for customers to send packages, track deliveries, manage profiles, purchase shop items online, and submit support tickets.*

### Admin Dashboard  
![Admin Dashboard](/3380pics/admin.png)  
*Admin panel with full system access, including user, facility, inventory, vehicle management, and receiving messages for other employees through the admin inbox.*

### Manager Dashboard  
![Manager Dashboard](/3380pics/manager.png)  
*Manager interface for overseeing facility operations, managing employees, viewing reports, and managing trips.*

### Clerk Dashboard  
![Clerk Dashboard](/3380pics/clerk.png)  
*Clerk view for processing incoming packages, managing sales transactions, tracking packages, and creating a new shipment for walk-in customer.*

### Customer Support Dashboard  
![Customer Support Dashboard](/3380pics/customer_sup.png)  
*Support dashboard for responding to submitted tickets and resolving user issues.*

### Driver/Pilot Dashboard  
![Driver/Pilot Dashboard](/3380pics/driver.png)  
*Driver/Pilot interface to manage assigned trips, update package statuses in real-time, and track delivery progress.*




## Key Features:
Role-Based Dashboards: Each user role has its own secure dashboard:

Admins oversee the entire system, including user account management (adding or deleting employees and customers), inventory control (assigning allowed items and vehicles to each facility), and resolving escalated customer and employee issues via the admin inbox.

Manager have direct control over their facility including employees, operational reports, create and track trips, manage the item shop content and its inventory, and choosing which vehicle to include in their delivery lineup.

Employees (e.g., clerks, support, drivers) have job-specific interfaces.

Customers can send packages, track history, and submit support requests.

Trip & Delivery Tracking: Trips can be created and assigned to drivers or pilots, linking to packages, vehicles, and facilities. Delivery status is updated live and historical tracking is stored per package.

Shop & Inventory Module: Each postal facility can run a shop. Shop employees can process sales, manage inventory, receive new stock, and generate daily sales reports. Low-stock alerts are triggered automatically.

Support Ticket System: Customers can file issues (lost, delayed, damaged). Support agents reply in threads, assign priorities, and track resolution status. Ticket response times and performance are logged.

Advanced Reporting Engine: Live reports include package volume, route efficiency, sales analytics, and inventory trends. AJAX-powered data loading ensures dynamic refresh with minimal delay.

Triggers & Automation: Triggers enforce business rules, such as auto-generating alerts for low stock and when a package gets delivered to the receiver.


## Tech Stack:
Backend: PHP (OOP)

Frontend: HTML, CSS, minimal JS, AJAX

Database: MySQL

Deployment: XAMPP (localhost), DigitalOcean



