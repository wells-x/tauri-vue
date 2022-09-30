use tauri::{SystemTrayMenu, Menu, CustomMenuItem, Submenu, SystemTrayMenuItem, MenuItem};

pub fn get_menu() -> Menu {
  let quit = CustomMenuItem::new("quit".to_string(), "Quit");
  let close = CustomMenuItem::new("close".to_string(), "Close");
  let submenu = Submenu::new(
    "File",
    Menu::new().add_item(quit).add_item(close)
  );
  let menu = Menu::new()
    .add_native_item(MenuItem::Copy)
    .add_item(CustomMenuItem::new("hide", "Hide"))
    .add_submenu(submenu);
  menu
}

pub fn get_tray_menu() -> SystemTrayMenu {
  let quit = CustomMenuItem::new("quit".to_string(), "Quit");
  let hide = CustomMenuItem::new("hide".to_string(), "Hide");
  let tray_menu = SystemTrayMenu::new()
    .add_item(quit)
    .add_native_item(SystemTrayMenuItem::Separator)
    .add_item(hide);
  tray_menu
}
