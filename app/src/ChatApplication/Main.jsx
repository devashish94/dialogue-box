import { Link, Route, Routes, useSearchParams } from "react-router-dom";
import JoinChat from "./JoinChat";
import ChatPage from "./ChatPage";

export default function Main() {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="w-full h-full flex flex-col justify-between">
          <Routes >
            <Route path="/" exact element={<JoinChat />} />
            <Route path="/app" element={<ChatPage />} />
          </Routes>
        </div>
      </div>
    </>
  )
}
