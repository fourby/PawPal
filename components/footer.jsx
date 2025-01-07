import React from 'react'

import { usePathname } from "next/navigation";

const footer = () => {
    const pathname = usePathname();

  return (
    <>
    {pathname !== "/dashboard" && (
          <footer className="app-footer">
            <p>© 2024 PawPal. All Rights Reserved.</p>
          </footer>
        )}
    </>
  )
}

export default footer