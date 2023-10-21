const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');

const app = express();
const Port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());