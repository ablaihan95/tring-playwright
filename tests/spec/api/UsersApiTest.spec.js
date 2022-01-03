const axios = require('axios');
const assert = require("assert");
const baseUrl = "https://reqres.in/api"


async function doRequestAndReturnResponse(url, method, data) {
    let response;
    const options = {
        url: `${baseUrl}${url}`,
        method: method,
        data: data,
    };
    await axios(options).then(function (response) {
        this.response = response;
    }).catch(function (error) {
        console.log(error);
    });
    return this.response;
}

describe('apiTesting', () => {
        it('should post', async () => {
            const user = {
                "name": "morpheus",
                "job": "leader"
            }
            const response = await doRequestAndReturnResponse(`/users`, 'POST', user)
            assert.equal(response.status, 201)
            assert.equal(response.data.name, user.name)
            assert.equal(response.data.job, user.job)
            console.log(response.data)
        })

        it('should get', async () => {
                const response = await doRequestAndReturnResponse(`/users/8`, 'GET')
            console.log(response.data)
                    assert.equal(response.status, 200)
        }
        )
        it('should patch', async () => {
            const user = {
                "name": "neo",
                "title": "the one"
            }
            const response = await doRequestAndReturnResponse(`/users/8`, 'PATCH', user)
            assert.equal(response.status, 200)
            assert.equal(response.data.name, user.name)
            assert.equal(response.data.title, user.title)
        });
    it('should delete', async () => {
        const response = await doRequestAndReturnResponse(`/users/8`, 'DELETE')
        assert.equal(response.status, 204)
    });
    }
);