
### 1️⃣ GLYFA MAE PAGLINAWAN – Database & Models
**Tasks:**
- Set up the **MongoDB database** 
- Create **Mongoose schemas** 
- Define **validation** and default values
- Ensure **timestamps** and proper types (String, Number)
- Example files:  
  `models/supplies.js`  
  

**Purpose:**  
Glyfa focuses on **database structure** to prevent conflicts and ensure consistency.

---

### 2️⃣ EZRA SILVESTRECE – Controllers & CRUD Logic
**Tasks:**
- Create **controller functions**: `getAllSupplies`, `createSupply`, `updateSupply`, `deleteSupply`
- Use **async/await** for database operations
- Use **response helpers** for consistent success/error messages
- Example files:  
  `controllers/classroomsuppliesControllers.js`

**Purpose:**  
Ezra focuses on **API logic and behavior**, making sure operations on the database are correct.

---

### 3️⃣ ALJUNE BALDOTA – Routes & Helpers
**Tasks:**
- Set up **routes** (`supplyRoutes.js`) connecting controllers to endpoints
- Create **response helpers** (`responseHelper.js`)
- Configure middleware if needed (JSON parser, error handling)
- Example files:  
  `routes/supplyRoutes.js`  
  `helpers/responseHelper.js`

**Purpose:**  
Aljune ensures **API endpoints are working correctly**, responses are standardized, and routes don’t conflict.
