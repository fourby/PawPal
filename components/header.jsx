import React from "react";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Mock authentication state
  const signedUp = true; // Set this to false to test the sign-up flow
  const loggedIn = false; // Set this to false to test the sign-up flow

  const handleDashboardRedirect = () => {
    if (signedUp && loggedIn) {
      // If the user is signed up and logged in, take them to the dashboard
      router.push("/dashboard");
    } else {
      // Otherwise, take them to the sign-up page
      router.push("/signup");
    }
  };

  return (
    <>
        <header className="app-header">
          <h1 className="org_name">
            <img src="/logo_dog_paw.png" alt="logo" title="PawPal" />
            PAWPAL.
          </h1>

          <div className="links">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Service</a>
          </div>

          <button className="button" onClick={handleDashboardRedirect}>
            ACCESS DASHBOARD
          </button>
        </header>
    </>
  );
};

export default Header;