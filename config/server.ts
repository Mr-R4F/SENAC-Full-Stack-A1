import 'dotenv/config';
import express, { urlencoded } from 'express';
import { routerApi_v1 } from '../routes/v1/api';
import cors from 'cors';

const app = express();
const port: string | number = process.env.SERVER_PORT || 7000;

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors({origin: '*'}));
app.use(routerApi_v1);

app.listen(port, () => console.log(`Server on-line on port: ${port}`));

export default port;