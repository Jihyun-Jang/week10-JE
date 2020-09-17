import React from 'react';
import testApi from "./api.js"
// import { render } from '@testing-library/react';

test("fetch link works", () => {
    return testApi("abyss").then((res) => {
        expect(res).toBeTruthy();
    })
})
// test("Async code", () => {
//     return fetch("http://test").then((res) => {
//       expect(res.ok).toBeTruthy();
//     });
//   });
//"react-scripts test"