const request = require('supertest')
const { expect } = require('chai')

// asert using chai-json-schema
const chai = require('chai')
chai.use(require('chai-json-schema'))

// import local
const readJsonSchema = require('../helper/helper')

describe('Test Suite for reqres.in', () => {
    const baseUrl = 'https://reqres.in/api'

    it('TC1 - Get List Users', async () => {
        //deklarasi variable
        const param = {
            page: 1,
            per_page: 2,
        }

        const schema = readJsonSchema('get_list_users.json')

        // call API
        const response = await request(baseUrl).get(
            `/users?page=${param.page}&per_page=${param.per_page}`,
        )

        // console.log(response.body)

        // Validation
        expect(response.status).to.equal(200)
        expect(response.body).to.be.jsonSchema(schema)
    })

    it('TC2 - Get User By Id', async () => {
        //deklarasi variable
        const userId = 2

        const schema = readJsonSchema('get_user_by_id.json')

        // call API
        const response = await request(baseUrl).get(`/users/${userId}`)
        // console.log(response.body)

        // validation
        expect(response.status).to.equal(200)
        expect(response.body).to.be.jsonSchema(schema)
    })

    it('TC3 - Update User By Id', async () => {
        //deklarasi variable
        const userId = 2
        const schema = readJsonSchema('update_user_by_id.json')

        const requestBody = {
            name: 'morpheus',
            job: 'zion resident',
        }

        // call API
        const response = await request(baseUrl)
            .put(`/users/${userId}`)
            .send(requestBody)

        // console.log(response.body)

        // validation
        expect(response.status).to.equal(200)
        expect(response.body).to.be.jsonSchema(schema)
    })

    it('TC4 - Delete User By Id', async () => {
        //deklarasi variable
        const userId = 2

        // call api
        const response = await request(baseUrl).delete(`/users/${userId}`)
        // console.log(response.status)

        //validation
        expect(response.status).to.equal(204)
    })

    it('TC5 -  Register User ', async () => {
        // deklarasi variable
        const requestBody = {
            email: 'eve.holt@reqres.in',
            password: 'pistol',
        }

        // call API
        const response = await request(baseUrl)
            .post('/register')
            .send(requestBody)

        const schema = readJsonSchema('register_user.json')
        // console.log(response.body)

        // validation
        expect(response.status).to.equal(200)
        expect(response.body).to.be.jsonSchema(schema)
    })
})
