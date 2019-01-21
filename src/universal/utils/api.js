import fetch from "node-fetch";
import { isDevMode } from "universal/utils/helpers";
const apiUrl = isDevMode
  ? "http://localhost:3000/api/v1"
  : "http://localhost:3000/api/v1";

export function fetchJson(url) {
  return fetch(url, {
    method: "GET"
  }).then(response =>
    response.json().then(data => ({
      data: data,
      ok: response.ok,
      headers: response.headers
    }))
  );
}

export function apiGet(url) {
  return fetch(apiUrl + url, {
    method: "GET",
    credentials: "include"
  }).then(response =>
    response.json().then(data => ({
      data: data,
      ok: response.ok,
      code: response.code,
      headers: response.headers
    }))
  );
}

export function apiPost(url, data, method) {
  return fetch(apiUrl + url, {
    method: method || "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data)
  }).then(response =>
    response.json().then(data => ({
      data: data,
      ok: response.ok,
      code: response.status,
      headers: response.headers
    }))
  );
}

export function apiDelete(url) {
  return fetch(apiUrl + url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials: "include"
  }).then(response => ({
    ok: response.ok,
    code: response.status,
    headers: response.headers
  }));
}

export function apiFileUpload(url, data) {
  return fetch(apiUrl + url, {
    method: "PATCH",
    credentials: "include",
    body: data
  }).then(response =>
    response.json().then(data => ({
      data: data,
      ok: response.ok,
      headers: response.headers
    }))
  );
}
