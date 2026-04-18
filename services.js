export async function getAuthToken() {
const response = await fetch("", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    api_key: "fs_gH660FFwT1BpUqvmhQCbgvoB3HiKkzv2",
    device_name: "My App",
  }),
});

const data = await response.json();
return data.token;
}


