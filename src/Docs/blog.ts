//Get all blogs

/**
 * @swagger
 * /api/blogs:
 *   get:
 *     tags:
 *       - blogs
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

//Get single Blogs 

/**
 * @swagger
 * /api/blogs/{id}:
 *   get:
 *     summary: Get single blog
 *     tags:
 *       - blogs
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


//Delete a blog using Id

/**
 * @swagger
 * /api/blogs/{id}:
 *   delete:
 *     summary: Delete a Blogs Blogs by ID
 *     tags:
 *       - blogs
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


//Add blog


/**
 * @swagger
 * /api/blogs:
 *   post:
 *     summary: Add a new blog 
 *     tags:
 *       - blogs
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the blog post
 *               content:
 *                 type: string
 *                 description: Content of the blog post
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Image file for the blog post
 *     responses:
 *       '201':
 *         description: Blog post created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "201"
 *                 message:
 *                   type: string
 *                   example: "Create Blog Successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Blog'
 *       '400':
 *         description: Bad request, image file is required
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "400"
 *                 message:
 *                   type: string
 *                   example: "Image file is required"
 *       '409':
 *         description: Conflict, blog title already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "409"
 *                 message:
 *                   type: string
 *                   example: "The title already exists"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "500"
 *                 message:
 *                   type: string
 *                   example: "Failed To Create Blog"
 *                 error:
 *                   type: string
 *                   example: "Internal server error, please try again later"
 * components:
 *   schemas:
 *     Blog:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 6027b7745ad02e1c48ae074b
 *         title:
 *           type: string
 *           example: My First Blog Post
 *         content:
 *           type: string
 *           example: This is the content of my first blog post.
 *         image:
 *           type: string
 *           format: uri
 *           example: https://example.com/image.jpg
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: 2024-03-27T12:00:00.000Z
 */


//Update blog


/**
 * @swagger
 * /api/blogs/{id}:
 *   patch:
 *     summary: Update a blog by ID
 *     tags:
 *       - blogs
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: post ID to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary  
 *     responses:
 *       200:
 *         description: blog updated successfully
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
 *                   example: "post post updated successfully"
 *       404:
 *         description: blog not found
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
 *                   example: "blog not found"
 */
