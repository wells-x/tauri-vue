#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod invokes;
mod menus;

use tauri::{
  Manager,
  SystemTray,
  SystemTrayEvent::{ DoubleClick, LeftClick, MenuItemClick, RightClick },
};
use menus::{ get_menu, get_tray_menu };
use self::invokes::{ test_arguments, my_custom_command, cmd_return };

#[derive(Clone, serde::Serialize)]
struct Payload {
  message: String,
}

fn main() {
  let menu = get_menu();
  let tray_menu = get_tray_menu();
  let system_tray = SystemTray::new().with_menu(tray_menu);
  tauri::Builder
    ::default()
    .setup(|app| {
      // listen to the `event-name` (emitted on any window)
      let id = app.listen_global("event-name", |event| {

        println!("got event-name with payload {:?}", event.payload());
      });
      // unlisten to the event using the `id` returned on the `listen_global` function
      // an `once_global` API is also exposed on the `App` struct
      // app.unlisten(id);
      println!("{}", id);

      app.listen_global("click", |event| {
        println!("got click with payload {:?}", event.payload())
      });

      // emit the `event-name` event to all webview windows on the frontend
      app
        .emit_all("event-name1", Payload {
          message: "Tauri is awesome!".into(),
        })
        .unwrap();

      // app
      //   .emit_to("window", "event-name", Payload {
      //     message: "EVENT Name".into(),
      //   })
      //   .unwrap();
      Ok(())
    })
    .system_tray(system_tray)
    .invoke_handler(
      tauri::generate_handler![my_custom_command, cmd_return, test_arguments]
    )
    .on_system_tray_event(|app, event| {
      match event {
        LeftClick { position: _, size: _, .. } => {
          println!("system tray received a left click");
        }
        RightClick { position: _, size: _, .. } => {
          println!("system tray received a right click");
        }
        DoubleClick { position: _, size: _, .. } => {
          println!("system tray received a double click");
          let window = app.get_window("main").unwrap();
          let is_visible = window.is_visible().unwrap();

          if is_visible {
            window.hide().unwrap();
          } else {
            window.show().unwrap();
          }
        }
        MenuItemClick { id, .. } =>
          match id.as_str() {
            "quit" => {
              std::process::exit(0);
            }
            "hide" => {
              println!("hide");
              app.get_window("main").unwrap().hide().unwrap();
            }
            _ => {}
          }
        _ => {}
      }
    })
    .menu(menu)
    .on_menu_event(|event| {
      match event.menu_item_id() {
        "quit" => {
          std::process::exit(0);
        }
        "close" => {
          event.window().close().unwrap();
        }
        _ => {}
      }
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
