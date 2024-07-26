use actix_web::{ get, post, web, App, HttpResponse, HttpServer, Responder, Result };
use serde::Serialize;
use serde_json::Value;

#[derive(Serialize)]
struct Response {
    status: bool,
    message: String,
    list: Vec<Value>,
}

#[get("/usuario")]
async fn index() -> Result<impl Responder> {
    let obj = Response {
        status: false,
        message: "index-success".to_string(),
        list: vec![serde_json::json!({"key1": "value1", "key2": 42})],
    };

    Ok(web::Json(obj))
}

#[post("/usuario")]
async fn store(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| { App::new().service(index).service(store) })
        .bind(("127.0.0.1", 8080))?
        .run().await
}
