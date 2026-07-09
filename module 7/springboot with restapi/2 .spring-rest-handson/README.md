# Spring Learn REST Hands-on Tasks

This project contains complete implementations for each Spring Boot REST hands-on task described in your requirement.

## Task 1: Hello World REST Service
- Endpoint: `GET /hello`
- Controller: `src/main/java/com/cognizant/springlearn/controller/HelloController.java`
- Output: `Hello World!!`

### Sample Request
```
GET http://localhost:8083/hello
```

### Sample Response
```
Hello World!!
```

---

## Task 2: Country REST Service using XML bean
- Endpoint: `GET /country`
- Controller: `src/main/java/com/cognizant/springlearn/controller/CountryController.java`
- Service: `src/main/java/com/cognizant/springlearn/service/CountryService.java`
- Country bean config: `src/main/resources/country.xml`
- Output: JSON for India

### Sample Request
```
GET http://localhost:8083/country
```

### Sample Response
```json
{
  "code": "IN",
  "name": "India"
}
```

---

## Task 3: Get all countries
- Endpoint: `GET /countries`
- Controller: `src/main/java/com/cognizant/springlearn/controller/CountryController.java`
- Service: `src/main/java/com/cognizant/springlearn/service/CountryService.java`
- Output: JSON array of all countries from `country.xml`

### Sample Request
```
GET http://localhost:8083/countries
```

### Sample Response
```json
[
  { "code": "IN", "name": "India" },
  { "code": "US", "name": "United States" },
  { "code": "JP", "name": "Japan" },
  { "code": "DE", "name": "Germany" }
]
```

---

## Task 4: Get country by code (case-insensitive)
- Endpoint: `GET /country/{code}` or `GET /countries/{code}`
- Controller: `src/main/java/com/cognizant/springlearn/controller/CountryController.java`
- Service: `src/main/java/com/cognizant/springlearn/service/CountryService.java`
- Output: JSON for the requested country

### Sample Request
```
GET http://localhost:8083/country/in
```

### Sample Response
```json
{
  "code": "IN",
  "name": "India"
}
```

---

## Task 5: Country not found exceptional scenario
- Exception: `src/main/java/com/cognizant/springlearn/exception/CountryNotFoundException.java`
- Service throws exception when code missing from list
- Error status: `404 Not Found`

### Sample Request
```
GET http://localhost:8083/country/az
```

### Sample Response
```json
{
  "timestamp": "...",
  "status": 404,
  "error": "Not Found",
  "message": "Country not found",
  "path": "/country/az"
}
```

---

## Task 6: MockMvc testing for country REST service
- Test file: `src/test/java/com/cognizant/springlearn/SpringLearnApplicationTests.java`
- Validates:
  - controller loads
  - `/country` returns India
  - `/country/in` returns India
  - `/country/az` returns 404

### Run tests
```
mvn test
```

### Result
- `4` tests run
- `0` failures
- `0` errors
