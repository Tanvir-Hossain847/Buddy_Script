"use client";
import { useState, useRef } from "react";
import Image from "next/image";

const IMGBB_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

async function uploadToImgBB(file) {
  const form = new FormData();
  form.append("image", file);
  const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_KEY}`, {
    method: "POST",
    body: form,
  });
  if (!res.ok) throw new Error("Image upload failed");
  const json = await res.json();
  return json.data.url;
}

const photoIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 20 20"><path fill="#666" d="M13.916 0c3.109 0 5.18 2.429 5.18 5.914v8.17c0 3.486-2.072 5.916-5.18 5.916H5.999C2.89 20 .827 17.572.827 14.085v-8.17C.827 2.43 2.897 0 6 0h7.917zm0 1.504H5.999c-2.321 0-3.799 1.735-3.799 4.41v8.17c0 2.68 1.472 4.412 3.799 4.412h7.917c2.328 0 3.807-1.734 3.807-4.411v-8.17c0-2.678-1.478-4.411-3.807-4.411zm.65 8.68l.12.125 1.9 2.147a.803.803 0 01-.016 1.063.642.642 0 01-.894.058l-.076-.074-1.9-2.148a.806.806 0 00-1.205-.028l-.074.087-2.04 2.717c-.722.963-2.02 1.066-2.86.26l-.111-.116-.814-.91a.562.562 0 00-.793-.07l-.075.073-1.4 1.617a.645.645 0 01-.97.029.805.805 0 01-.09-.977l.064-.086 1.4-1.617c.736-.852 1.95-.897 2.734-.137l.114.12.81.905a.587.587 0 00.861.033l.07-.078 2.04-2.718c.81-1.08 2.27-1.19 3.205-.275zM6.831 4.64c1.265 0 2.292 1.125 2.292 2.51 0 1.386-1.027 2.511-2.292 2.511S4.54 8.537 4.54 7.152c0-1.386 1.026-2.51 2.291-2.51zm0 1.504c-.507 0-.918.451-.918 1.007 0 .555.411 1.006.918 1.006.507 0 .919-.451.919-1.006 0-.556-.412-1.007-.919-1.007z"/></svg>
);

const otherActions = [
  { label: "Video", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 22 24"><path fill="#666" d="M11.485 4.5c2.213 0 3.753 1.534 3.917 3.784l2.418-1.082c1.047-.468 2.188.327 2.271 1.533l.005.141v6.64c0 1.237-1.103 2.093-2.155 1.72l-.121-.047-2.418-1.083c-.164 2.25-1.708 3.785-3.917 3.785H5.76c-2.343 0-3.932-1.72-3.932-4.188V8.688c0-2.47 1.589-4.188 3.932-4.188h5.726zm0 1.5H5.76C4.169 6 3.197 7.05 3.197 8.688v7.015c0 1.636.972 2.688 2.562 2.688h5.726c1.586 0 2.562-1.054 2.562-2.688v-.686-6.329c0-1.636-.973-2.688-2.562-2.688zM18.4 8.57l-.062.02-2.921 1.306v4.596l2.921 1.307c.165.073.343-.036.38-.215l.008-.07V8.876c0-.195-.16-.334-.326-.305z"/></svg> },
  { label: "Event", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 22 24"><path fill="#666" d="M14.371 2c.32 0 .585.262.627.603l.005.095v.788c2.598.195 4.188 2.033 4.18 5v8.488c0 3.145-1.786 5.026-4.656 5.026H7.395C4.53 22 2.74 20.087 2.74 16.904V8.486c0-2.966 1.596-4.804 4.187-5v-.788c0-.386.283-.698.633-.698.32 0 .584.262.626.603l.006.095v.771h5.546v-.771c0-.386.284-.698.633-.698zm3.546 8.283H4.004l.001 6.621c0 2.325 1.137 3.616 3.183 3.697l.207.004h7.132c2.184 0 3.39-1.271 3.39-3.63v-6.692z"/></svg> },
  { label: "Article", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="none" viewBox="0 0 18 20"><path fill="#666" d="M12.49 0c2.92 0 4.665 1.92 4.693 5.132v9.659c0 3.257-1.75 5.209-4.693 5.209H5.434c-.377 0-.734-.032-1.07-.095l-.2-.041C2 19.371.74 17.555.74 14.791V5.209c0-.334.019-.654.055-.96C1.114 1.564 2.799 0 5.434 0h7.056zm-.008 1.457H5.434c-2.244 0-3.381 1.263-3.381 3.752v9.582c0 2.489 1.137 3.752 3.38 3.752h7.049c2.242 0 3.372-1.263 3.372-3.752V5.209c0-2.489-1.13-3.752-3.372-3.752zm-.239 12.053c.36 0 .652.324.652.724 0 .4-.292.724-.652.724H5.656c-.36 0-.652-.324-.652-.724 0-.4.293-.724.652-.724h6.587zm0-4.239a.643.643 0 01.632.339.806.806 0 010 .78.643.643 0 01-.632.339H5.656c-.334-.042-.587-.355-.587-.729s.253-.688.587-.729h6.587zM8.17 5.042c.335.041.588.355.588.729 0 .373-.253.687-.588.728H5.665c-.336-.041-.589-.355-.589-.728 0-.374.253-.688.589-.729H8.17z"/></svg> },
];

export default function CreatePost({ onPostCreated }) {
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileRef = useRef(null);

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      setError("Only JPG and PNG files are allowed.");
      return;
    }
    setError(null);
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  }

  function removeImage() {
    setImageFile(null);
    setPreview(null);
    if (fileRef.current) fileRef.current.value = "";
  }

  async function handleSubmit() {
    if (!content.trim() && !imageFile) return;

    setLoading(true);
    setError(null);
    let media_url = "";

    try {
      if (imageFile) {
        setUploading(true);
        media_url = await uploadToImgBB(imageFile);
        setUploading(false);
      }

      const payload = {
        post_id: `post_${Date.now()}`,
        user_id: "user_101",
        content: content.trim(),
        media_url,
        visibility: "public",
        created_at: new Date().toISOString(),
        likes: [],
        comments: [],
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      setContent("");
      removeImage();
      if (onPostCreated) onPostCreated(payload);
    } catch (err) {
      setError(err.message);
      setUploading(false);
    } finally {
      setLoading(false);
    }
  }

  const isSubmitting = loading || uploading;
  const canPost = (content.trim() || imageFile) && !isSubmitting;

  return (
    <div className="bg-white rounded pt-4 px-4 pb-0 mb-3 transition-all duration-200">
      <div className="flex items-start">
        <div className="cursor-pointer shrink-0">
          <Image src="/assets/images/txt_img.png" alt="Profile" width={32} height={32} className="w-8 h-8 rounded-full p-px" />
        </div>
        <div className="relative w-full">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-20 border-none p-2 resize-none text-sm text-[#666] outline-none bg-transparent"
            placeholder="Write something ..."
          />
        </div>
      </div>

      {preview && (
        <div className="relative mx-2 mb-2 rounded overflow-hidden inline-block">
          <img src={preview} alt="Preview" className="max-h-40 rounded object-cover" />
          <button
            onClick={removeImage}
            className="absolute top-1 right-1 bg-black/60 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs border-none cursor-pointer hover:bg-black/80 transition-all"
          >
            ✕
          </button>
        </div>
      )}

      {uploading && (
        <p className="text-xs text-[#1890FF] px-2 mb-1">Uploading image...</p>
      )}

      {error && (
        <p className="text-xs text-red-500 px-2 mb-1">{error}</p>
      )}

      <input
        ref={fileRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png"
        className="hidden"
        onChange={handleFileChange}
      />

      <div className="flex items-center justify-between px-3 bg-[rgba(24,144,255,0.05)] rounded-b h-12 mt-2">
        <div className="flex">
          <div className="flex items-center px-2 cursor-pointer transition-all duration-200">
            <button
              onClick={() => fileRef.current?.click()}
              className="text-xs text-[#666] border-none bg-transparent flex items-center cursor-pointer hover:text-[#1890FF] transition-all duration-200"
            >
              <span className="mr-1.5 flex items-center">{photoIcon}</span>
              Photo
            </button>
          </div>

          {otherActions.map((item) => (
            <div key={item.label} className="flex items-center px-2 cursor-pointer transition-all duration-200">
              <button className="text-xs text-[#666] border-none bg-transparent flex items-center cursor-pointer hover:text-[#1890FF] transition-all duration-200">
                <span className="mr-1.5 flex items-center">{item.icon}</span>
                {item.label}
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={!canPost}
          className="bg-[#1890FF] rounded py-1.5 px-4 border border-transparent flex items-center justify-center transition-all duration-200 hover:bg-[#377DFF] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="font-medium text-xs text-white">
              {uploading ? "Uploading..." : "Posting..."}
            </span>
          ) : (
            <>
              <svg className="mr-1.5" xmlns="http://www.w3.org/2000/svg" width="11" height="10" fill="none" viewBox="0 0 14 13">
                <path fill="#fff" fillRule="evenodd" d="M6.37 7.879l2.438 3.955a.335.335 0 00.344.162c.068-.01.23-.05.289-.247l3.049-10.297a.348.348 0 00-.09-.35.341.341 0 00-.334-.088L1.75 4.03a.34.34 0 00-.247.289.343.343 0 00.16.347L5.666 7.17 9.2 3.597a.5.5 0 01.712.703L6.37 7.88zM9.097 13c-.464 0-.89-.236-1.14-.641L5.372 8.165l-4.237-2.65a1.336 1.336 0 01-.622-1.331c.074-.536.441-.96.957-1.112L11.774.054a1.347 1.347 0 011.67 1.682l-3.05 10.296A1.332 1.332 0 019.098 13z" clipRule="evenodd" />
              </svg>
              <span className="font-medium text-xs text-white">Post</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
