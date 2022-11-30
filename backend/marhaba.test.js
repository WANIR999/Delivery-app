const req = require('supertest');
const app = require('./index');

describe("login tests", () => {

  test("test for valid data",async ()=>{
    const body={
        email:"mohammedwanir67@gmail.com",
        password:"@@@@1234A"
    }
    const tst=await req(app).post("/api/auth/login").send(body)
    expect(tst.statusCode).toBe(200)
  })

   test("test for invalid password",async ()=>{
    const body={
        email:"mohammedwanir67@gmail.com",
        password:"@@@@1234Ae"
    }
    const tst=await req(app).post("/api/auth/login").send(body)
    expect(tst.statusCode).toBe(400)
  })

  test("test for invalid email",async ()=>{
    const body={
        email:"mohammedwanir67@gmail.coma",
        password:"@@@@1234A"
    }
    const tst=await req(app).post("/api/auth/login").send(body)
    expect(tst.statusCode).toBe(400)
  })
  test("test for uncomfirmed account",async ()=>{
    const body={
        email:"mohammed@gmail.com",
        password:"@@@@1234A"
    }
    const tst=await req(app).post("/api/auth/login").send(body)
    expect(tst.statusCode).toBe(400)
  })
   
    })


    describe("register tests", () => {
        test("test for existed email",async ()=>{
          const body={
              name:"mohammed",
              email:"mohammedwanir67@gmail.com",
              password:"@@@@1234A"
          }
          const tst=await req(app).post("/api/auth/register").send(body)
          expect(tst.statusCode).toBe(400)
        })

        

          })
      