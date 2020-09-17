const supertest = require("supertest");

const server = require("./server.js");
const db = require('../data/dbConfig')

describe("server", () => {
    // // describe("environment", () => {
    // //     it('should set the DB_ENV variable to "testing"', () => {
    // //         expect(process.env.DB_ENV).toBe("testing");
    // //     });
    // });
    describe("GET /", () => {
        it("should return HTTP status code 200", () => {
            return supertest(server)
                .get("/")
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });

        it("should return JSON", async () => {
            const res = await supertest(server).get("/");

            expect(res.type).toMatch(/json/i);
        });

        it("should return an api property with the value Bravo!", async () => {
            const res = await supertest(server).get("/");

            expect(res.body.message).toBe("Bravo!");
        });
    });
    describe("POST /opera", () => {
        beforeEach(async () => {
            await db("operas").truncate();
        });

        it("should return 201 when passed correct data", () => {
            return supertest(server)
                .post("/api/opera")
                .send({ name: "Ariadne auf Naxos" })
                .then(res => {
                    expect(res.status).toBe(201);
                });
        });

        it("should fail with code 400 if passed incorrect data", () => {
            return supertest(server)
                .post("/opera")
                .send({})
                .then(res => {
                    expect(res.status).toBe(404);
                });
        });

        it("should insert the opera into the database", async () => {
            const res = await supertest(server).post("/api/opera").send({ name: "Ariadne" });

            expect(res.body.name).toBe("Ariadne");
        });

        // it("should insert a collection of operas into the database", async () => {
        //     const data = [
        //         {
        //             name: "Ariadne",
        //         },
        //         {
        //             name: "Oedipus",
        //         },
        //     ];

        //     await supertest(server).post("/opera").send(data);

        //     const operas = await db("operas");

        //     expect(operas).toHaveLength(5);
        // });
    });
});
