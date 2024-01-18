# Ghost Scan - Moroccan ID Card Information Extractor

Welcome to **Ghost Scan**, an automated solution for extracting information from Moroccan ID cards and displaying it in a form. This application utilizes advanced AI techniques, Django REST framework for the backend, and Angular for the frontend. It's dockerized for easy deployment and hosted on a Google Cloud VM.

## Features

- **AI-Powered Data Extraction**: Utilizes Gemini-Vision-Pro to accurately read and extract data from Moroccan ID cards.
- **Robust Backend**: Built with Django REST framework.
- **Sleek Frontend**: Developed using Angular for a user-friendly experience.
- **Dockerized Deployment**: Containerized with Docker and orchestrated with Docker Compose for smooth deployment and scaling.

## Quick Start

### Using Docker (Recommended)

To get the application up and running with Docker, follow these steps:

1. Ensure Docker and Docker Compose are installed on your machine.
2. Clone the repository:
   ```
   git clone https://github.com/f-amine/ghost-scan.git
    ```
3. Navigate to the cloned directory and run:
    ```
    docker compose up
    ```
4. The application should now be accessible at http://localhost:80

### Without docker 
If you prefer not to use Docker, you can run the application natively. Ensure you have Python and Node.js installed on your machine.

#### Backend Setup
1. Navigate to the backend folder.
2. Install the required Python packages:
  ```
  pip install -r requirements.txt
  ```
3. Start the Django server:
  ```
  python manage.py runserver
  ```
#### Frontend Setup

1. Navigate to the frontend folder.
2. Install the required Node.js packages:
  ```
  npm install
  ```
3. Start the Angular application:
  ```
  ng serve
  ```
## Demo
Check out the demo video attached here to see Ghost Scan in action.

https://github.com/f-amine/ghost-scan/assets/58664365/c3cda057-3a8d-47d4-bcb6-84ab2c8c7b03

## Contributing

Contributions, issues, and feature requests are welcome. 

