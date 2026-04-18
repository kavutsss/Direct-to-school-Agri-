const response = await fetch("https://farmsuite.ujuzikilimo.com/api/v1/auth/generate-token", {
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
const token = data.token;

