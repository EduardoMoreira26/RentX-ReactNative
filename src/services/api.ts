import axios from 'axios';
import React from 'react';

const api = axios.create({
  baseURL: 'http://192.168.100.12:3333',
});