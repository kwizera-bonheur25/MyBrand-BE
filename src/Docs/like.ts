
/**
 * @swagger
 * /api/blogs/{id}/likes:
 *   post:
 *     summary: Delete a comments by ID
 *     tags:
 *       - likes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: comments ID to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: comments comments deleted successfully
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
 *                   example: "comments comments deleted successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     bogImage:
 *                       type: string
 *                       example: http://example.com/comments_image.jpg
 *                     commentsTitle:
 *                       type: string
 *                       example: "Title of the comments"
 *                     commentsContent:
 *                       type: string
 *                       example: "Content of the comments comments"
 *       404:
 *         description: comments not found
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
 *                   example: "comments not found"
 */
