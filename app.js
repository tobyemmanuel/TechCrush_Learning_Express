// ---------------HEADERS--------------
// import express from 'express';

// const app = express();

// app.get('/profile', (req, res) => {
//     // Reading request headers
//     console.log(req)
//     const userAgent = req.get('My-Custom-Header'); // 'User-Agent' header is sent by browsers

//     if(userAgent){
//         // Sending custom response headers
//         res.set('X-Custom-Header', 'HelloWorld'); // Adds a custom header to the response
//         res.status(200).send('Headers handled!');
//     }else{
//         res.status(404).send('Headers not set!');
//     }

// });

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });


// ---------------QUERY STRINGS--------------
// import express from 'express';

// const app = express();

// app.get('/search', (req, res) => {
//     console.log(req.query);
//     const allQueries = req.query;
//     const name = allQueries.name; // Extracts the query parameter 'query'
//     const age = allQueries.age; // Extracts the query parameter 'query'
//     const country = allQueries.country; // Extracts the query parameter 'query'
//     res.send(`You searched for: ${name} ${age} ${country}`);
// });

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });

// ---------------FORM REQUESTS--------------
// import express from 'express';

// const app = express();

// // Middleware to parse form data
// // app.use(express.urlencoded({ extended: true }));

// app.post('/submit-form', (req, res) => {
//     console.log(req.body);
//     const { password, email } = req.body; // Extract form data
//     res.send(`Form submitted by: ${password}, Email: ${email}`);
// });

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });


// ---------------JSON BODY--------------
// import express from 'express';

// const app = express();

// // Middleware to parse JSON data
// app.use(express.json());

// app.post('/json-data', (req, res) => {
//     console.log(req.body);
//     const { userId, message } = req.body; // Extract JSON data
//     console.log('looking for eve', req.body.array_of_data[2][1])
//     res.json({
//         status: 'success',
//         userId: userId,
//         message: message,
//     });
// });

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });

//----SAMPLE-DATA----
// {
//     "userId": 5000,
//     "message": "This user wants to login",
//     "array_of_data": [
//         "TOBI",
//         5,
//         [
//             "john",
//             "eve",
//             "adam"
//         ],
//         {
//             "name": "mabel",
//             "age": 30
//         }
//     ],
//     "object_of_data": {
//         "school": "techcrush",
//         "location": "lagos",
//         "students": [
//             1,
//             2,
//             3,
//             4
//         ],
//         "tutor": {
//             "name": "Jane"
//         }
//     }
// }

// ---------------FILE UPLOAD--------------

// import express from 'express';
// import multer from 'multer';

// const app = express();

// // Set up multer storage configuration
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './uploads'); // Folder to store uploaded files
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname); // Generate unique filename
//     }
// });

// // Create multer instance with file size limit (10MB)
// const upload = multer({ storage: storage, limits: { fileSize: 10 * 1024 * 1024 } });

// app.post('/upload', upload.single('file'), (req, res) => {

//     console.log(req.file)
//     res.send(`File uploaded: ${req.file.filename}`);
// });

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });


// ---------------MIDDLEWARE--------------
// import express from 'express';
// const app = express();

// // Logging middleware
// app.use((req, res, next) => {
//     console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
//     next(); // Pass to the next middleware or route handler
// });

// // Authentication middleware
// const checkAuth = (req, res, next) => {
//     console.log('REQUEST WUZ HERE')
//     if (req.headers['authorization']) {
//         next(); // Proceed if authorized
//     } else {
//         res.status(401).send('Unauthorized');
//     }
// };

// // Protected route
// app.get('/protected', checkAuth, (req, res) => {
//     res.send('You have access to this protected route!');
// });

// app.get('/unprotected', (req, res) => {
//     res.send('You have access to this unprotected route!');
// });

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });


// ---------------FORM VALIDATION--------------
// import express from 'express';
// import { body, validationResult } from 'express-validator';

// const app = express();

// // Middleware to parse JSON data
// app.use(express.json());


// app.post('/signup', [
//     body('email').isEmail().withMessage('Please provide a valid email address'),
//     body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
// ], (req, res) => {
    
//     const errors = validationResult(req); // Check for validation errors
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() }); // Send validation errors if any
//     }

//     const { email, password } = req.body;
//     res.send(`Signup successful for ${email}`);
// });

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });


// import express from 'express';
// const app = express();
// app.get('/user/:id/:edit', (req, res) => {
//     const userId = req.params.id;
//     const edit = req.params.edit;
//     res.send(`User ID is ${userId} ${edit}`);
// });
// app.listen(3000, () => console.log('Server running on port 3000'));

import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());
app.get('/set-cookie', (req, res) => {
 res.cookie('theme', 'dark', { maxAge: 900000, httpOnly: true });
 res.send('Cookie has been set');
});

app.get('/get-cookie', (req, res) => {
 const theme = req.cookies['theme'];
 res.send(`Cookie theme: ${theme}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));

console.log("WE ARE MAKING SOME CHANGES")

