import request from "supertest";
import app from "../../app";
import { testDbConnection, dbDisconnect } from "../Service/mongo";
import Users from "../models/users";

jest.setTimeout(10000)

describe("Test users endpoints", () => {

    beforeAll(async() => {
        await testDbConnection();
    })

    afterAll(async() => {
        await Users.deleteMany();
        await dbDisconnect()
    })

    describe("User endpoints", () => {
        test("It will return all users and 200 and message", async() => {
            const {body} = await request(app)
            .get("/api/users")
            .expect(200)
            expect(body.message).toStrictEqual("Users retrieved successfully")
            expect(body.data).toBeDefined()
            
        })
    })
})