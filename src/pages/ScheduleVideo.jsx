import React, { useState } from "react";
import { Link } from "react-router-dom";

const ScheduleVideo = () => {
  const [video, setVideo] = useState(null);
  const [caption, setCaption] = useState("");

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(URL.createObjectURL(file)); // preview uploaded video
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!video || !caption) {
      alert("Please add both video and caption!");
      return;
    }
    console.log("Scheduled Video:", { video, caption });
    alert("Video Scheduled Successfully ✅");
    setVideo(null);
    setCaption("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-orange-50 p-6 flex items-center justify-center">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 max-w-lg w-full border border-green-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🎥 Schedule Wellness Video
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Upload Video */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Upload Video
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
            />
            {video && (
              <video
                controls
                className="mt-4 w-full rounded-lg shadow-md"
                src={video}
              />
            )}
          </div>

          {/* Caption Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Caption
            </label>
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Enter caption for the video..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 resize-none"
              rows="3"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:from-green-600 hover:to-green-700 transition-all"
          >
            Schedule Video
          </button>
           <Link
                     to={'/userdetails'}
                      className=" min-w-full bg-emerald-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-emerald-700 transition"
                    >
                     Back to Patient Details
                    </Link>
          
        </form>
      </div>
    </div>
  );
};

export default ScheduleVideo;
