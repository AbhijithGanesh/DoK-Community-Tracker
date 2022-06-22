import { useState } from "react";
import { supabase } from "../../utils/supabase";
import getToken from "../api/auth";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="text-white row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Supabase + Next.js</h1>
        <p className="description">
          Sign in via magic link with your email below
        </p>
        <div>
          <input
            className="inputField bg-gray-300 text-black text-md px-4 py-0.5 rounded"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setLoading(true);
              getToken(email);
            }}
            className="button block"
            disabled={loading}
          >
            <span>{loading ? "We've sent you a magic link." : "Send magic link"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
