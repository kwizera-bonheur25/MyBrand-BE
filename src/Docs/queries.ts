//Get all blogs

/**
 * @swagger
 * /api/queries:
 *   get:
 *     tags:
 *       - queries
 *     description: Returns all Blogs
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Blogss
 *         schema:
 *           type: array
 *       500:
 *         description: Internal server error
 */

//Single query

/**
 * @swagger
 * /api/queries/{id}:
 *   get:
 *     summary: Get single blog
 *     tags:
 *       - queries
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Blogs ID to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blogs Blogs deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "200"
 *                 message:
 *                   type: string
 *                   example: "Blogs Blogs deleted successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     bogImage:
 *                       type: string
 *                       example: http://example.com/Blogs_image.jpg
 *                     BlogsTitle:
 *                       type: string
 *                       example: "Title of the Blogs"
 *                     BlogsContent:
 *                       type: string
 *                       example: "Content of the Blogs Blogs"
 *       404:
 *         description: Blogs Blogs not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "404"
 *                 message:
 *                   type: string
 *                   example: "Blogs Blogs not found"
 */


//Delete query

/**
 * @swagger
 * /api/queries/{id}:
 *   delete:
 *     summary: Delete a query by ID
 *     tags:
 *       - queries
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Blogs ID to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blogs Blogs deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "200"
 *                 message:
 *                   type: string
 *                   example: "Blogs Blogs deleted successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     bogImage:
 *                       type: string
 *                       example: http://example.com/Blogs_image.jpg
 *                     BlogsTitle:
 *                       type: string
 *                       example: "Title of the Blogs"
 *                     BlogsContent:
 *                       type: string
 *                       example: "Content of the Blogs Blogs"
 *       404:
 *         description: Blogs not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "404"
 *                 message:
 *                   type: string
 *                   example: "Blogs not found"
 */


/**
 * @swagger
 * /api/queries:
 *   post:
 *     summary: Add a new query
 *     tags:
 *       - queries
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email of the user sending the query
 *               message:
 *                 type: string
 *                 description: Content of the query message
 *     responses:
 *       '201':
 *         description: Query added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: Message sent successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: 6027b7745ad02e1c48ae074b
 *                     email:
 *                       type: string
 *                       example: user@example.com
 *                     message:
 *                       type: string
 *                       example: This is a sample query message
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2024-03-27T12:00:00.000Z
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: Internal server error, please try again later
 */


/**
 * @swagger
 * /api/queries:
 *   post:
 *     summary: Add a new query
 *     tags:
 *       - queries
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email of the user sending the query
 *               message:
 *                 type: string
 *                 description: Content of the query message
 *     responses:
 *       '201':
 *         description: Query added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: Message sent successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: 6027b7745ad02e1c48ae074b
 *                     email:
 *                       type: string
 *                       example: user@example.com
 *                     message:
 *                       type: string
 *                       example: This is a sample query message
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2024-03-27T12:00:00.000Z
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: Internal server error, please try again later
 */