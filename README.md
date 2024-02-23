Local Storage Utility
Overview
This module provides a simple utility for working with the local storage in a web browser. It offers functions to set, get, remove, and clear cache, allowing for easy storage and retrieval of data.

Functions
1. set(key, value, expireSeconds)
Stores data in the local storage with an optional expiration time.

Parameters:
key: The key under which the data will be stored.
value: The data to be stored.
expireSeconds (optional): The expiration time in seconds. If provided, the data will be automatically removed after this duration.
2. get(key)
Retrieves data from the local storage based on the provided key. It checks for expiration, and if the data is expired, it is automatically removed.

Parameters:

key: The key of the data to be retrieved.
Returns:

The stored data if it exists and is not expired, otherwise returns null.
3. remove(key)
Removes the data from the local storage associated with the provided key.

Parameters:
key: The key of the data to be removed.
4. clearAll()
Clears all data stored in the local storage.