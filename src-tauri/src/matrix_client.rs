use matrix_sdk::{Client, SyncSettings};
use std::sync::Arc;
use tokio::sync::Mutex;
use std::env;

#[derive(Clone)]
pub struct MatrixClient {
    pub client: Arc<Mutex<Client>>,
}

impl MatrixClient {
    pub async fn new() -> Self {
        let homeserver_url = env::var("MATRIX_HOMESERVER_URL").expect("MATRIX_HOMESERVER_URL must be set").parse().unwrap();
        let username = env::var("MATRIX_USERNAME").expect("MATRIX_USERNAME must be set");
        let password = env::var("MATRIX_PASSWORD").expect("MATRIX_PASSWORD must be set");

        let client = Client::new(homeserver_url).await.unwrap();
        client.login(username, password, None, None).await.unwrap();

        let sync_settings = SyncSettings::new();
        client.sync(sync_settings).await.unwrap();

        MatrixClient {
            client: Arc::new(Mutex::new(client)),
        }
    }

    pub async fn send_message(&self, room_id: &str, message: &str) -> Result<(), matrix_sdk::Error> {
        let client = self.client.lock().await;
        let room_id = room_id.parse().unwrap();
        let content = matrix_sdk::ruma::events::room::message::RoomMessageEventContent::text_plain(message);
        client.room_send(&room_id, content, None).await?;
        Ok(())
    }
}
