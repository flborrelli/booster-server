import express, { response } from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes);

//Middlewere to access SVG images located on Upload folder 
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333);