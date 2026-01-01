"use server";

export async function uploadImage(categoryForm) {
  try {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    const file = categoryForm.get("thumbnail");
    if (!file) throw new Error("No file uploaded");

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      throw new Error("Invalid file type. Only images are allowed.");
    }

    const folder = "categories/images"; 
    const timestamp = Math.floor(Date.now() / 1000);

    const signature = generateSignature({ folder, timestamp }, apiSecret);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", apiKey);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);
    formData.append("folder", folder);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (response.ok) {
      console.log("✅ Uploaded image URL:", data.secure_url);
      return data.secure_url;
    } else {
      console.error("❌ Cloudinary upload error:", data.error.message);
      return null; 
    }
  } catch (error) {
    console.error("❌ Upload failed:", error.message);
    return null; 
  }
}

function generateSignature(params, apiSecret) {
  const crypto = require("crypto");
  const keys = Object.keys(params).sort();
  const stringToSign = keys.map((key) => `${key}=${params[key]}`).join("&") + apiSecret;
  return crypto.createHash("sha1").update(stringToSign).digest("hex");
}
