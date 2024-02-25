# Local Storage Utility

The `local` module provides a utility for handling local storage in a web browser. It includes functions to set, get, remove, and clear cache, facilitating easy data storage and retrieval.

## Functions

### 1. `set(key, value, expireSeconds)`

Stores data in the local storage with an optional expiration time.

- **Parameters:**
  - `key`: The key under which the data will be stored.
  - `value`: The data to be stored.
  - `expireSeconds` (optional): The expiration time in seconds. If provided, the data will be automatically removed after this duration.

### 2. `get(key)`

Retrieves data from the local storage based on the provided key. It checks for expiration, and if the data is expired, it is automatically removed.

- **Parameters:**
  - `key`: The key of the data to be retrieved.

- **Returns:**
  - The stored data if it exists and is not expired, otherwise returns `null`.

### 3. `remove(key)`

Removes the data from the local storage associated with the provided key.

- **Parameters:**
  - `key`: The key of the data to be removed.
    
### 4. `clearAll()`

Clears all data stored in the local storage.

## Usage

```javascript
import local from 'base-local-storage';

// Example Usage
local.set('username', 'john_doe', 3600); // Set data with a one-hour expiration
const username = local.get('username'); // Retrieve data

if (username) {
    console.log(`Welcome back, ${username}!`);
} else {
    console.log('No cached data or data expired.');
}

local.remove('username'); // Remove data
local.clearAll(); // Clear all data
```
