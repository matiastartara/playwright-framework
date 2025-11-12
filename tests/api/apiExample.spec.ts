import { test, expect } from '@playwright/test';

const baseurl = "https://reqres.in/api";
const headers = { 'x-api-key': 'reqres-free-v1' };

test("GET API Request with - Valid 200 Response ", async ({ request }) => {
    const response = await request.get(`${baseurl}/users/2`, { headers });
    console.log('Response Status:', response.status());
    expect(response.status()).toBe(200);
});