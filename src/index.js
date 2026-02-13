const express = require('express');
const cors = require('cors');
const mainRouter = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Global middleware
app.use(cors());
app.use(express.json());

// Master router
app.use('/api/v1', mainRouter);

// Error handler (LAST)
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
