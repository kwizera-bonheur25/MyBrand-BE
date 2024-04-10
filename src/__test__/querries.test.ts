import request from "supertest";
import app from "../../app";
import { testDbConnection, dbDisconnect } from '../Service/mongo';
import Querries from "../models/Qurries";
import { queryData } from "../mock/static";

jest.setTimeout(10000);

let id:string;

describe("My brand APIs test", () => {
    beforeAll(async() => {
        await testDbConnection();
    })

    afterAll(async() => {
        await Querries.deleteMany();
        await dbDisconnect();
    })

    describe("Test querries", () => {
        test("It will return all querries", async () => {
            const {body} = await request(app)
            .get("/api/queries")
            .expect(200)
            expect(body.data).toBeDefined()
            expect(body.message).toStrictEqual("Data retrieved successfully")
        })

        test("It will send query in the database and return 201 and message", async () => {
            const {body} = await request(app)
            .post("/api/queries")
            .send(queryData)
            .expect(201)
            expect(body.message).toStrictEqual("Message sent successfully") 

            id = body.data._id;
        })

        test("It will return single query and 200", async () => {
            const {body} = await request(app)
            .get(`/api/queries/${id}`)
            .expect(200)
        })

        test("It will delete the data and return 200", async() => {
            const {body} = await request(app)
            .delete(`/api/queries/${id}`)
            .expect(200)
        })
    })
})