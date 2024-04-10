import request from 'supertest'
import app from "../../app";
import { testDbConnection, dbDisconnect } from '../Service/mongo';
import { blogData, commentData, loginData, queryData, userData } from '../mock/static';
import Blogs from '../models/Blog';
import Users from '../models/users';




jest.setTimeout(50000);

let token:string;
let id: string;
let commentId:string;


describe("test Blog Apis", () =>{

    beforeAll(async () =>{
    await testDbConnection();
});

afterAll(async () => {
    await Users.deleteMany()
    await Blogs.deleteMany();
    await dbDisconnect()
})

describe("My brand APIs test", () => {
    test("it should return 200 and welcome message", async () => {
        const {body} = await request(app)
        .get("/")
        .expect('Content-Type', /json/)
        .expect(200)
        expect(body.message).toStrictEqual("Welcome to KWIZERA Bonheur's brand API")
        
    })

    test("It will return the list of blogs", async () => {
        const {body} = await request(app)
        .get("/api/blogs")
        .expect(200)
        expect(body.data).toBeDefined()
        expect(body.message).toStrictEqual("Data retrieved successfully")
    })


    test("It will add new user and login and return 201 and message", async () => {
        const {body} = await request(app)
        .post("/api/users/register")
        .send(userData)
        .expect(201)
        expect(body.message).toStrictEqual("User created successfully")

        const responeLogin = await request(app)
    .post("/api/users/login")
    .send(loginData)
    .expect(200)
    expect(responeLogin.body.token).toBeDefined()

    token = responeLogin.body.token

    })

    test("It will add new blog and return 201", async () => {
        const { body } = await request(app)
            .post("/api/blogs")
            .set('Authorization', `Bearer ${token}`)
            .attach('image', blogData.image) // Use .attach() to send a file
            .field('title', blogData.title) // Additional form fields if required
            .field('content', blogData.content)
            .expect('Content-Type', /application\/json/)
            .expect(201);
    
        expect(body.message).toStrictEqual("Create Blog Successfully");
        expect(body.data._id).toBeDefined();
    
        id = body.data._id;
    });

    

    test( "It will add like and return 201", async() => {
        const { body } = await request(app)
        .post(`/api/blogs/${id}/Likes`)
        .set("Authorization", `Bearer ${token}`)
        .expect(201)
    })

    test("It will add comment and retuen 201", async () => {
        const {body} = await request(app)
        .post(`/api/blogs/${id}/Comments`)
        .set("Authorization", `Bearer ${token}`)
        .send(commentData)
        .expect(201)
         expect(body.data).toBeDefined()

         commentId = body.data._id

    })
    
    test("It will delete comment and return 204", async() => {
        const {body} = await request(app)
        .delete(`/api/blogs/${commentId}/Comments`)
        .set("Authorization", `Bearer ${token}`)
        .expect(204)
    })

    

    test("It will delete Blog and return 200", async () => {
        const {body} = await request(app)
        .delete("/api/blogs")
        .expect(200)
    })
})

});