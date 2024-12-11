'use client'

import axios from 'axios'

let baseUrl
if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://localhost:44777'
} else {
  baseUrl = 'http://localhost:44777'
}

export default axios.create({
  baseURL: baseUrl,
  timeout: 20000,
})