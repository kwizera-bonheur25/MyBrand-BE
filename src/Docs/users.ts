//Login


/**
 * @swagger
 * /api/users/login:
 *   post:
 *     tags:
 *       - user
 *     summary: User Login in 
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email of the user
 *               password:
 *                 type: string
 *                 description: Password of the user
 *           required:
 *             - email
 *             - password
 *     responses:
 *       201:
 *         description: Login successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 *       404: 
 *          description: incorrect credentials
 */



//Sign up

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     tags:
 *       - user
 *     summary: Create a new user
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 description: First name of the user
 *               lastname:
 *                 type: string
 *                 description: Last name of the user
 *               email:
 *                 type: string
 *                 description: Email of the user
 *               password:
 *                 type: string
 *                 description: Password of the user
 *           required:
 *             - firstname
 *             - lastname
 *             - email
 *             - password
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */


