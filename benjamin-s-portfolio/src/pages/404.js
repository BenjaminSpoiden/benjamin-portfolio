import "../style/errorPage.scss"
import React from "react"
import { Link } from "gatsby"
import { Footer } from "../components/Footer"

const NotFoundPage = () => {

  return (
    <>
      <div>
        <main>
          <div className="error-parent">
            <h1>404</h1>
            <p>This page doesn't exists.</p>
            <Link to="/" className="error-btn" >Go back</Link>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default NotFoundPage
