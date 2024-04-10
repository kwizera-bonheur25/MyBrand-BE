import express from "express";
import dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import cors from "cors";

import router from "./src/Routes/index";

const app = express()
dotenv.config()

app.use(express.json()) 
app.use(cors());

const options = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Blog API Documentation',
        version: '1.0.0',
        description: 'Documentation My Brand API using Swagger',
      },
      security: [
        {
          BearerAuth: [],
        },
      ],
      components: {
        securitySchemes: {
          BearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
    apis: ['./src/Docs/*.ts'], // Specify the path to my route files
  };
  
  const swaggerSpec = swaggerJSDoc(options);
  app.use("/api/Docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec))
  

app.use("/api", router)

app.use("/", (req,res) => {
    return res.status(200).json({
        status:200,
        message:"Welcome to KWIZERA Bonheur's brand API"
    })

})

export default app;