'use client'

import axios from 'axios'

let baseUrl
if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://35.209.139.248/'
} else {
  baseUrl = 'http://localhost:44777'
}

export default axios.create({
  baseURL: baseUrl,
  timeout: 20000,
})