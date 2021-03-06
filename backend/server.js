import express from 'express';
import dbConnection from './config/dbConnection.js';
import dotenv from 'dotenv';
import daoRoute from './routes/daoRoute.js'

dotenv.config();

const app = express();

dbConnection();

app.use(express.json({ limit: '50mb' }));

app.use("/api/dao", daoRoute);
// app.use("/api/category", categoryRoutes);
// app.use("/api/subCategory", subCategoryRoutes);
// app.use("/api/product", productRoutes);
// app.use("/api/upload", uploadRoutes);

// root route
app.get('/', (req, res) => {
  res.json({ duls_online_store: 'Welcome to Duls-Online-Store' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
