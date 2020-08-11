# Async-Fetch

## About
A wrap around the "Fetch" API and react hooks to asynchronous api calls. It makes use of useState, useEffect, useCallback. While the asynchronous call is going on, you have access to its state (pending or done) and value (or error) once it is done. This affords you the opportunity to conditionally render components or elements.

## Installation
`npm i async-fetch --save`

## Usage

```
import { asyncFetch } from "async-fetch";

const requestBody = {
  url: "...",
  data: {
    ...
  }
  ...
}

const { execute, value, pending, error } = asyncFetch(requestBody, false);
```
If the second parameter is not supplied, a default value of **true** is used and in that case, the API call would be made immediately. Otherwise, the API call would not be made until `execute` is called. See the table below for parameters expected in *requestBody*:

| Parameter | Type | Default |
| --- | --- | --- |
| url (compulsory) | string | not applicable |
| method (compulsory) | string | not applicable |
| data (optional) | object | null |
| baseURL (optional) | string | "" |
| contentType (optional) | string | "application/json" |

Other **fetch** configuration parameters can be included.
