import React from "react";
import LandingLayout from "components/layouts/LandingLayout";
import Hero from "components/sections/Hero";
// import userStore from "stores/userStore";

export default function Landing() {
  // const { current, setUser } = userStore();

  return (
    <LandingLayout>
      {/* <button 
          onClick={() => 
            setUser({
              "username": "bunnyninjaaa",
              "email": "hiblair@gmail.com",
              "image": "https://gravatar.com/avatar/651545c3b68fcd2aa1848235e1c0dd2e?d=identicon",
              "id": "57468461228745551921",
              "createdAt": "2022-08-10T18:13:01.322Z",
              "updatedAt": "2022-08-10T18:13:01.322Z",
              "isOnline": true
          })
        }
      >
        click here.
      </button>
      <p>{JSON.stringify(current, null, 2)}</p> */}
      <Hero
        title="An invite-only place with plenty of room to talk"
        subtitle="Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
        image="/landing.svg"
        ctaText="Get Started"
        ctaLink="/register"
      />
    </LandingLayout>
  );
}
