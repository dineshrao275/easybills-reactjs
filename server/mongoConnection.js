// mongodb connection
// const mongoose = require('mongoose');
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/easy-bills');

console.log("Successfully Connected to MongoDB ");