import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { BsDot, BsReddit } from "react-icons/bs";
import { authModalState } from "@/app/atoms/authModal";
import { useSetRecoilState } from "recoil";
import { auth } from "@/app/firebase/clientApp";

const ResetPassword: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await sendPasswordResetEmail(email);
    setSuccess(true);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <BsReddit className="text-brand-100 text-5xl mb-2" />
      <h2 className="font-bold text-lg mb-2">Reset your password</h2>
      {success ? (
        <p className="mb-4 text-center">Check your email </p>
      ) : (
        <>
          <p className="text-sm text-center mb-2">
            Enter the email associated with your account and we will send you a
            reset link.
          </p>
          <form onSubmit={onSubmit} className="w-full">
            <Input
              required
              name="email"
              placeholder="email"
              type="email"
              className="mb-2 text-sm bg-gray-50 placeholder-gray-500 focus:bg-white focus:border-blue-500"
              onChange={(event) => setEmail(event.target.value)}
            />
            {error && (
              <p className="text-center text-red-500 text-sm">{error.message}</p>
            )}
            <Button
              type="submit"
              className="w-full h-9 mt-2 mb-2 bg-blue-500 hover:bg-blue-600"
              disabled={sending}
            >
              {sending ? "Sending..." : "Reset Password"}
            </Button>
          </form>
        </>
      )}
      <div className="flex items-center text-md font-bold cursor-pointer mt-4">
        <div
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
          className="hover:underline"
        >
          LOGIN
        </div>
        <BsDot />
        <div
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "signup",
            }))
          }
          className="hover:underline"
        >
          SIGN UP
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
