use std::{time::{Duration}, thread::sleep};

#[tauri::command]
pub async fn test_arguments(message: String) -> Result<CustomResponse, String> {
  println!("return");
  // let message = "Command return".to_string();
  let result = some_async_fn().await;
  if message == result {
    Ok(CustomResponse {
      message,
    })
  } else {
    Err("No result".into())
  }
}

async fn some_async_fn() -> String {
  println!("async into");
  sleep(Duration::from_secs(3));
  println!("async fn");
  "temp".to_string()
}

#[tauri::command]
pub fn my_custom_command() {
  println!("I was invoked from JS!");
}

#[tauri::command]
pub fn cmd_return() -> String {
  println!("return");
  let return_data = "Command return".to_string();
  return_data
}

#[derive(serde::Serialize)]
pub struct CustomResponse {
  message: String,
}
